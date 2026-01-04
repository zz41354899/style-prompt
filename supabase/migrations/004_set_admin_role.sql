-- ============================================
-- 004_set_admin_role.sql
-- 設定 admin 角色（使用 Service Role Key API）
-- ============================================

-- 注意：此腳本僅供參考
-- 實際設定 admin 角色請使用以下方式之一：

-- 方式 1: 使用 API（推薦）
-- POST /api/admin/set-role
-- Body: { "email": "zz41354899@gmail.com", "role": "admin" }

-- 方式 2: 直接在 Supabase Dashboard SQL Editor 執行
-- UPDATE auth.users
-- SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
-- WHERE email = 'zz41354899@gmail.com';

-- 驗證設定是否成功
SELECT 
    id,
    email,
    raw_app_meta_data->>'role' as role,
    created_at
FROM auth.users
WHERE email = 'zz41354899@gmail.com';

-- 說明：
-- 1. Service Role Key 方式更安全，因為 Key 只存在後端
-- 2. app_metadata 只能透過 Service Role Key 修改
-- 3. Client 端使用 Anon Key 無法偽造角色
