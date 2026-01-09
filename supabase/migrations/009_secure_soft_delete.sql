-- 資安加固：軟刪除函數
CREATE OR REPLACE FUNCTION soft_delete_account(
    user_id_param UUID,
    reason_param TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    recovery_date TIMESTAMPTZ;
    calling_user_id UUID;
BEGIN
    -- ✅ 1. 驗證呼叫者身份
    calling_user_id := auth.uid();
    
    IF calling_user_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Not authenticated'
        );
    END IF;
    
    -- ✅ 2. 權限檢查：只能刪除自己的帳號
    IF calling_user_id != user_id_param THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Can only delete your own account'
        );
    END IF;
    
    -- ✅ 3. 驗證刪除原因長度（防止濫用）
    IF reason_param IS NOT NULL AND LENGTH(reason_param) > 1000 THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Deletion reason too long (max 1000 characters)'
        );
    END IF;
    
    -- 計算恢復期限
    recovery_date := NOW() + INTERVAL '30 days';
    
    -- 更新 profile 為待刪除狀態
    UPDATE profiles
    SET 
        deletion_status = 'pending_deletion',
        deleted_at = NOW(),
        deletion_reason = reason_param,
        can_recover_until = recovery_date,
        updated_at = NOW()
    WHERE id = user_id_param
    AND deletion_status = 'active';  -- ✅ 4. 防止重複刪除

    -- 檢查是否成功
    IF FOUND THEN
        -- ✅ 5. 記錄審計日誌（非阻塞）
        BEGIN
            INSERT INTO audit_logs (user_id, action, details, created_at)
            VALUES (
                user_id_param,
                'account_soft_delete',
                json_build_object('reason', reason_param),
                NOW()
            );
        EXCEPTION
            WHEN OTHERS THEN
                -- 忽略日誌錯誤，不影響主操作
                NULL;
        END;
        
        RETURN json_build_object(
            'success', true,
            'message', 'Account marked for deletion',
            'can_recover_until', recovery_date
        );
    ELSE
        RETURN json_build_object(
            'success', false,
            'message', 'Account not found or already deleted'
        );
    END IF;
END;
$$;

-- 資安加固：恢復帳戶函數
CREATE OR REPLACE FUNCTION restore_account(
    user_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    profile_record RECORD;
    calling_user_id UUID;
BEGIN
    -- ✅ 1. 驗證呼叫者身份
    calling_user_id := auth.uid();
    
    IF calling_user_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Not authenticated'
        );
    END IF;
    
    -- ✅ 2. 權限檢查：只能恢復自己的帳號
    IF calling_user_id != user_id_param THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Can only restore your own account'
        );
    END IF;
    
    -- 使用單一查詢獲取所需資訊
    SELECT deletion_status, can_recover_until
    INTO profile_record
    FROM profiles
    WHERE id = user_id_param;

    -- 檢查是否可以恢復
    IF NOT FOUND THEN
        RETURN json_build_object(
            'success', false,
            'message', 'User not found'
        );
    ELSIF profile_record.deletion_status = 'active' THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Account is already active'
        );
    ELSIF profile_record.deletion_status = 'deleted' THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Account has been permanently deleted'
        );
    ELSIF profile_record.can_recover_until < NOW() THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Recovery period has expired'
        );
    END IF;

    -- 恢復帳戶
    UPDATE profiles
    SET 
        deletion_status = 'active',
        deleted_at = NULL,
        deletion_reason = NULL,
        can_recover_until = NULL,
        updated_at = NOW()
    WHERE id = user_id_param;

    -- ✅ 記錄審計日誌（非阻塞）
    BEGIN
        INSERT INTO audit_logs (user_id, action, created_at)
        VALUES (user_id_param, 'account_restore', NOW());
    EXCEPTION
        WHEN OTHERS THEN
            -- 忽略日誌錯誤，不影響主操作
            NULL;
    END;

    RETURN json_build_object(
        'success', true,
        'message', 'Account restored successfully'
    );
END;
$$;

-- 建立審計日誌表（如果不存在）
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    details JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 建立索引
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- 啟用 RLS
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 刪除舊的 RLS 政策（如果存在）
DROP POLICY IF EXISTS "Users can view own audit logs" ON audit_logs;
DROP POLICY IF EXISTS "Admins can view all audit logs" ON audit_logs;

-- RLS 政策：使用者只能查看自己的日誌
CREATE POLICY "Users can view own audit logs"
    ON audit_logs
    FOR SELECT
    USING (auth.uid() = user_id);

-- RLS 政策：管理員可以查看所有日誌
CREATE POLICY "Admins can view all audit logs"
    ON audit_logs
    FOR SELECT
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- 更新註解
COMMENT ON FUNCTION soft_delete_account IS '軟刪除使用者帳戶（已加固資安）';
COMMENT ON FUNCTION restore_account IS '恢復軟刪除的帳戶（已加固資安）';
COMMENT ON TABLE audit_logs IS '審計日誌表，記錄重要操作';
