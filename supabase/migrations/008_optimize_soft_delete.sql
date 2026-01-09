-- 優化軟刪除函數效能
CREATE OR REPLACE FUNCTION soft_delete_account(
    user_id_param UUID,
    reason_param TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    recovery_date TIMESTAMPTZ;
BEGIN
    -- 計算恢復期限
    recovery_date := NOW() + INTERVAL '30 days';
    
    -- 更新 profile 為待刪除狀態並直接返回結果
    UPDATE profiles
    SET 
        deletion_status = 'pending_deletion',
        deleted_at = NOW(),
        deletion_reason = reason_param,
        can_recover_until = recovery_date
    WHERE id = user_id_param;

    -- 檢查是否成功並返回結果（不需要額外的 SELECT）
    IF FOUND THEN
        RETURN json_build_object(
            'success', true,
            'message', 'Account marked for deletion',
            'can_recover_until', recovery_date
        );
    ELSE
        RETURN json_build_object(
            'success', false,
            'message', 'User not found'
        );
    END IF;
END;
$$;

-- 優化恢復帳戶函數效能
CREATE OR REPLACE FUNCTION restore_account(
    user_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    profile_record RECORD;
BEGIN
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
        can_recover_until = NULL
    WHERE id = user_id_param;

    RETURN json_build_object(
        'success', true,
        'message', 'Account restored successfully'
    );
END;
$$;

-- 更新註解
COMMENT ON FUNCTION soft_delete_account IS '軟刪除使用者帳戶（已優化效能）';
COMMENT ON FUNCTION restore_account IS '恢復軟刪除的帳戶（已優化效能）';
