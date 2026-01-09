-- ============================================
-- 014_add_suspended_status.sql
-- 添加帳戶停用狀態支援
-- ============================================

-- 更新 status 欄位的 CHECK 約束，確保包含 suspended
-- 先移除舊的約束（如果存在）
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_status_check;

-- 添加新的約束，包含 suspended 狀態
ALTER TABLE profiles ADD CONSTRAINT profiles_status_check 
    CHECK (status IN ('active', 'suspended', 'pending_deletion', 'deleted'));

-- 確保 status 欄位有預設值
ALTER TABLE profiles ALTER COLUMN status SET DEFAULT 'active';

-- 建立 Admin 停用帳戶函數
CREATE OR REPLACE FUNCTION admin_suspend_account(
    user_id_param UUID,
    suspend_reason TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    calling_user_id UUID;
    is_admin BOOLEAN;
BEGIN
    -- 驗證呼叫者身份
    calling_user_id := auth.uid();
    
    IF calling_user_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Not authenticated'
        );
    END IF;
    
    -- 檢查是否為 Admin
    is_admin := (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
    
    IF NOT is_admin THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Admin access required'
        );
    END IF;

    -- 停用帳戶
    UPDATE profiles
    SET 
        status = 'suspended',
        updated_at = NOW()
    WHERE id = user_id_param;

    IF FOUND THEN
        -- 記錄審計日誌
        BEGIN
            INSERT INTO audit_logs (user_id, action, details, created_at)
            VALUES (
                user_id_param,
                'account_suspend',
                json_build_object(
                    'suspended_by_admin', calling_user_id,
                    'reason', suspend_reason
                ),
                NOW()
            );
        EXCEPTION
            WHEN OTHERS THEN
                NULL;
        END;

        RETURN json_build_object(
            'success', true,
            'message', 'Account suspended successfully'
        );
    ELSE
        RETURN json_build_object(
            'success', false,
            'message', 'User not found'
        );
    END IF;
END;
$$;

-- 建立 Admin 啟用帳戶函數（從 suspended 狀態恢復）
CREATE OR REPLACE FUNCTION admin_activate_account(
    user_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    calling_user_id UUID;
    is_admin BOOLEAN;
    current_status TEXT;
BEGIN
    -- 驗證呼叫者身份
    calling_user_id := auth.uid();
    
    IF calling_user_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Not authenticated'
        );
    END IF;
    
    -- 檢查是否為 Admin
    is_admin := (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
    
    IF NOT is_admin THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Admin access required'
        );
    END IF;

    -- 檢查當前狀態
    SELECT status INTO current_status FROM profiles WHERE id = user_id_param;

    IF current_status IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'User not found'
        );
    END IF;

    -- 啟用帳戶
    UPDATE profiles
    SET 
        status = 'active',
        deletion_status = 'active',
        deleted_at = NULL,
        deletion_reason = NULL,
        can_recover_until = NULL,
        updated_at = NOW()
    WHERE id = user_id_param;

    -- 記錄審計日誌
    BEGIN
        INSERT INTO audit_logs (user_id, action, details, created_at)
        VALUES (
            user_id_param,
            'account_activate',
            json_build_object(
                'activated_by_admin', calling_user_id,
                'previous_status', current_status
            ),
            NOW()
        );
    EXCEPTION
        WHEN OTHERS THEN
            NULL;
    END;

    RETURN json_build_object(
        'success', true,
        'message', 'Account activated successfully'
    );
END;
$$;

-- 更新 Admin 可以查看所有 profiles 的 RLS 政策（包含可更新）
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles"
    ON public.profiles FOR UPDATE
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- 建立索引以提升狀態查詢效能
CREATE INDEX IF NOT EXISTS idx_profiles_status ON profiles(status);

-- 註解說明
COMMENT ON FUNCTION admin_suspend_account IS 'Admin 停用使用者帳戶';
COMMENT ON FUNCTION admin_activate_account IS 'Admin 啟用使用者帳戶（從任何非 active 狀態恢復）';
