-- 新增軟刪除相關欄位到 profiles 表
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS deletion_reason TEXT,
ADD COLUMN IF NOT EXISTS deletion_status TEXT DEFAULT 'active' CHECK (deletion_status IN ('active', 'pending_deletion', 'deleted')),
ADD COLUMN IF NOT EXISTS can_recover_until TIMESTAMPTZ;

-- 建立索引以提升查詢效能
CREATE INDEX IF NOT EXISTS idx_profiles_deletion_status ON profiles(deletion_status);
CREATE INDEX IF NOT EXISTS idx_profiles_can_recover_until ON profiles(can_recover_until);

-- 建立軟刪除函數
CREATE OR REPLACE FUNCTION soft_delete_account(
    user_id_param UUID,
    reason_param TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result JSON;
BEGIN
    -- 更新 profile 為待刪除狀態
    UPDATE profiles
    SET 
        deletion_status = 'pending_deletion',
        deleted_at = NOW(),
        deletion_reason = reason_param,
        can_recover_until = NOW() + INTERVAL '30 days'
    WHERE id = user_id_param;

    -- 檢查是否成功
    IF FOUND THEN
        result := json_build_object(
            'success', true,
            'message', 'Account marked for deletion',
            'can_recover_until', (SELECT can_recover_until FROM profiles WHERE id = user_id_param)
        );
    ELSE
        result := json_build_object(
            'success', false,
            'message', 'User not found'
        );
    END IF;

    RETURN result;
END;
$$;

-- 建立恢復帳戶函數
CREATE OR REPLACE FUNCTION restore_account(
    user_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    current_status TEXT;
    recovery_deadline TIMESTAMPTZ;
    result JSON;
BEGIN
    -- 取得當前狀態
    SELECT deletion_status, can_recover_until
    INTO current_status, recovery_deadline
    FROM profiles
    WHERE id = user_id_param;

    -- 檢查是否可以恢復
    IF current_status IS NULL THEN
        result := json_build_object(
            'success', false,
            'message', 'User not found'
        );
    ELSIF current_status = 'active' THEN
        result := json_build_object(
            'success', false,
            'message', 'Account is already active'
        );
    ELSIF current_status = 'deleted' THEN
        result := json_build_object(
            'success', false,
            'message', 'Account has been permanently deleted'
        );
    ELSIF recovery_deadline < NOW() THEN
        result := json_build_object(
            'success', false,
            'message', 'Recovery period has expired'
        );
    ELSE
        -- 恢復帳戶
        UPDATE profiles
        SET 
            deletion_status = 'active',
            deleted_at = NULL,
            deletion_reason = NULL,
            can_recover_until = NULL
        WHERE id = user_id_param;

        result := json_build_object(
            'success', true,
            'message', 'Account restored successfully'
        );
    END IF;

    RETURN result;
END;
$$;

-- 建立永久刪除函數（僅管理員可用）
CREATE OR REPLACE FUNCTION permanently_delete_account(
    user_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result JSON;
    is_admin BOOLEAN;
BEGIN
    -- 檢查執行者是否為管理員
    SELECT role = 'admin' INTO is_admin
    FROM profiles
    WHERE id = auth.uid();

    IF NOT is_admin THEN
        result := json_build_object(
            'success', false,
            'message', 'Unauthorized: Admin access required'
        );
        RETURN result;
    END IF;

    -- 標記為永久刪除
    UPDATE profiles
    SET 
        deletion_status = 'deleted',
        deleted_at = NOW()
    WHERE id = user_id_param;

    IF FOUND THEN
        result := json_build_object(
            'success', true,
            'message', 'Account permanently deleted'
        );
    ELSE
        result := json_build_object(
            'success', false,
            'message', 'User not found'
        );
    END IF;

    RETURN result;
END;
$$;

-- 建立自動清理過期刪除請求的函數
CREATE OR REPLACE FUNCTION cleanup_expired_deletions()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
    -- 將過期的待刪除帳戶標記為永久刪除
    UPDATE profiles
    SET deletion_status = 'deleted'
    WHERE deletion_status = 'pending_deletion'
    AND can_recover_until < NOW();
END;
$$;

-- 註解說明
COMMENT ON COLUMN profiles.deleted_at IS '軟刪除時間戳記';
COMMENT ON COLUMN profiles.deletion_reason IS '使用者提供的刪除原因';
COMMENT ON COLUMN profiles.deletion_status IS '刪除狀態: active(正常), pending_deletion(待刪除), deleted(已永久刪除)';
COMMENT ON COLUMN profiles.can_recover_until IS '可恢復的截止時間（刪除後30天）';
COMMENT ON FUNCTION soft_delete_account IS '軟刪除使用者帳戶，設定30天恢復期';
COMMENT ON FUNCTION restore_account IS '恢復軟刪除的帳戶';
COMMENT ON FUNCTION permanently_delete_account IS '永久刪除帳戶（僅管理員）';
COMMENT ON FUNCTION cleanup_expired_deletions IS '自動清理過期的刪除請求';
