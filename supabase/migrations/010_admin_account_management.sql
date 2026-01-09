-- 允許 Admin 管理使用者帳號（安全版本）

-- 修改恢復帳戶函數：允許 Admin 恢復任何帳號
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
    is_admin BOOLEAN;
BEGIN
    -- ✅ 1. 驗證呼叫者身份
    calling_user_id := auth.uid();
    
    IF calling_user_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Not authenticated'
        );
    END IF;
    
    -- ✅ 2. 檢查是否為 Admin
    is_admin := (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
    
    -- ✅ 3. 權限檢查：Admin 可以恢復任何帳號，一般使用者只能恢復自己的
    IF NOT is_admin AND calling_user_id != user_id_param THEN
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

    -- ✅ 記錄審計日誌（包含 Admin 操作）
    BEGIN
        INSERT INTO audit_logs (user_id, action, details, created_at)
        VALUES (
            user_id_param, 
            'account_restore',
            CASE 
                WHEN is_admin AND calling_user_id != user_id_param 
                THEN json_build_object('restored_by_admin', calling_user_id)
                ELSE NULL
            END,
            NOW()
        );
    EXCEPTION
        WHEN OTHERS THEN
            NULL;
    END;

    RETURN json_build_object(
        'success', true,
        'message', 'Account restored successfully'
    );
END;
$$;

-- 建立 Admin 專用的永久刪除函數（更新版本）
CREATE OR REPLACE FUNCTION admin_permanently_delete_account(
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
BEGIN
    -- ✅ 驗證呼叫者身份
    calling_user_id := auth.uid();
    
    IF calling_user_id IS NULL THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Not authenticated'
        );
    END IF;
    
    -- ✅ 檢查是否為 Admin
    is_admin := (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
    
    IF NOT is_admin THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Unauthorized: Admin access required'
        );
    END IF;

    -- 標記為永久刪除
    UPDATE profiles
    SET 
        deletion_status = 'deleted',
        deleted_at = NOW(),
        updated_at = NOW()
    WHERE id = user_id_param;

    IF FOUND THEN
        -- 記錄審計日誌
        BEGIN
            INSERT INTO audit_logs (user_id, action, details, created_at)
            VALUES (
                user_id_param,
                'admin_permanent_delete',
                json_build_object('deleted_by_admin', calling_user_id),
                NOW()
            );
        EXCEPTION
            WHEN OTHERS THEN
                NULL;
        END;

        RETURN json_build_object(
            'success', true,
            'message', 'Account permanently deleted by admin'
        );
    ELSE
        RETURN json_build_object(
            'success', false,
            'message', 'User not found'
        );
    END IF;
END;
$$;

-- 更新註解
COMMENT ON FUNCTION restore_account IS '恢復軟刪除的帳戶（Admin 可恢復任何帳號）';
COMMENT ON FUNCTION admin_permanently_delete_account IS 'Admin 永久刪除帳戶';
