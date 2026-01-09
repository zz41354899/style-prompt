-- ============================================
-- 016_secure_storage_policy.sql
-- notifications Storage 完整政策設計
-- ============================================

-- ⚠️ 注意：Storage 政策無法透過 SQL Editor 直接執行
-- 請在 Supabase Dashboard → Storage → Policies 手動設定

-- ============================================
-- 完整的四個政策設計（在 Dashboard 中設定）
-- ============================================

-- ============================================
-- 1️⃣ SELECT 政策 - 公開讀取
-- ============================================
-- Policy name: Public read access for notifications
-- Allowed operation: SELECT
-- Target roles: (留空，預設 public)
-- USING expression:
--   (bucket_id = 'notifications'::text)
--
-- 說明：允許所有人讀取圖片（公開存取）

-- ============================================
-- 2️⃣ INSERT 政策 - 僅 Admin 可上傳
-- ============================================
-- Policy name: Only admins can upload to notifications
-- Allowed operation: INSERT
-- Target roles: authenticated
-- WITH CHECK expression:
--   (bucket_id = 'notifications'::text) AND ((SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'))
--
-- 說明：只有 Admin 角色可以上傳圖片

-- ============================================
-- 3️⃣ UPDATE 政策 - 僅 Admin 可更新
-- ============================================
-- Policy name: Only admins can update notifications
-- Allowed operation: UPDATE
-- Target roles: authenticated
-- USING expression:
--   (bucket_id = 'notifications'::text) AND ((SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'))
--
-- 說明：只有 Admin 角色可以更新圖片

-- ============================================
-- 4️⃣ DELETE 政策 - 僅 Admin 可刪除
-- ============================================
-- Policy name: Only admins can delete from notifications
-- Allowed operation: DELETE
-- Target roles: authenticated
-- USING expression:
--   (bucket_id = 'notifications'::text) AND ((SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'))
--
-- 說明：只有 Admin 角色可以刪除圖片

-- ============================================
-- 快速參考表
-- ============================================
-- | 操作   | 政策名稱                                  | 權限     |
-- |--------|-------------------------------------------|----------|
-- | SELECT | Public read access for notifications      | 公開     |
-- | INSERT | Only admins can upload to notifications   | 僅 Admin |
-- | UPDATE | Only admins can update notifications      | 僅 Admin |
-- | DELETE | Only admins can delete from notifications | 僅 Admin |
