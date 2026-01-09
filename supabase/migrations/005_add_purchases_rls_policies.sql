-- ============================================
-- 005_add_purchases_rls_policies.sql
-- 為 purchases 表添加 RLS 政策
-- ============================================

-- 確保 purchases 表啟用 RLS
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Admin 可以查看所有購買記錄
DROP POLICY IF EXISTS "Admins can view all purchases" ON public.purchases;
CREATE POLICY "Admins can view all purchases"
    ON public.purchases FOR SELECT
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- 使用者可以查看自己的購買記錄
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;
CREATE POLICY "Users can view own purchases"
    ON public.purchases FOR SELECT
    USING (auth.uid() = user_id);

-- 使用者可以建立自己的購買記錄
DROP POLICY IF EXISTS "Users can insert own purchases" ON public.purchases;
CREATE POLICY "Users can insert own purchases"
    ON public.purchases FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Admin 可以更新所有購買記錄
DROP POLICY IF EXISTS "Admins can update all purchases" ON public.purchases;
CREATE POLICY "Admins can update all purchases"
    ON public.purchases FOR UPDATE
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- 完成
COMMENT ON POLICY "Admins can view all purchases" ON public.purchases IS '允許管理員查看所有購買記錄';
COMMENT ON POLICY "Users can view own purchases" ON public.purchases IS '允許使用者查看自己的購買記錄';
COMMENT ON POLICY "Users can insert own purchases" ON public.purchases IS '允許使用者建立自己的購買記錄';
COMMENT ON POLICY "Admins can update all purchases" ON public.purchases IS '允許管理員更新所有購買記錄';
