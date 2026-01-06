-- ============================================
-- 002_create_purchases.sql (Gumroad 買斷制)
-- 建立購買記錄表（僅 Lifetime 買斷）
-- ============================================

-- 建立 purchase_status ENUM
DO $$ BEGIN
    CREATE TYPE purchase_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ============================================
-- purchases 表（買斷交易記錄）
-- ============================================
CREATE TABLE IF NOT EXISTS public.purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    
    -- Gumroad 相關
    gumroad_sale_id TEXT UNIQUE,           -- Gumroad Sale ID
    gumroad_email TEXT,                    -- 購買者 Email
    gumroad_license_key TEXT,              -- License Key（如果有）
    
    -- 購買資訊
    product_type TEXT DEFAULT 'lifetime_pro', -- 固定為 lifetime
    amount INTEGER NOT NULL,                   -- 金額（分）
    currency TEXT DEFAULT 'TWD',               -- 貨幣
    status purchase_status DEFAULT 'pending',  -- 狀態
    
    -- 時間戳記
    created_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    
    -- 備註
    notes TEXT
);

-- 建立索引
CREATE INDEX IF NOT EXISTS purchases_user_id_idx ON public.purchases(user_id);
CREATE INDEX IF NOT EXISTS purchases_status_idx ON public.purchases(status);
CREATE INDEX IF NOT EXISTS purchases_gumroad_sale_id_idx ON public.purchases(gumroad_sale_id);
CREATE INDEX IF NOT EXISTS purchases_gumroad_email_idx ON public.purchases(gumroad_email);

-- RLS
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- 使用者可以查看自己的購買記錄
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;
CREATE POLICY "Users can view own purchases"
    ON public.purchases
    FOR SELECT
    USING (auth.uid() = user_id);

-- Admin 可以查看所有購買記錄
DROP POLICY IF EXISTS "Admins can view all purchases" ON public.purchases;
CREATE POLICY "Admins can view all purchases"
    ON public.purchases
    FOR SELECT
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Admin 可以管理購買記錄（退款等）
DROP POLICY IF EXISTS "Admins can manage purchases" ON public.purchases;
CREATE POLICY "Admins can manage purchases"
    ON public.purchases
    FOR ALL
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- ============================================
-- 註解說明
-- ============================================
COMMENT ON TABLE public.purchases IS 'Gumroad 買斷制購買記錄表';
COMMENT ON COLUMN public.purchases.gumroad_sale_id IS 'Gumroad Sale ID（唯一識別碼）';
COMMENT ON COLUMN public.purchases.gumroad_email IS '購買者 Email（來自 Gumroad）';
COMMENT ON COLUMN public.purchases.gumroad_license_key IS 'License Key（如果產品啟用了 License Key 功能）';
COMMENT ON COLUMN public.purchases.product_type IS '產品類型，固定為 lifetime_pro';
COMMENT ON COLUMN public.purchases.amount IS '金額（以分為單位，例如 200000 = NT$2,000）';
COMMENT ON COLUMN public.purchases.status IS '購買狀態：pending=待處理, completed=完成, failed=失敗, refunded=已退款';
