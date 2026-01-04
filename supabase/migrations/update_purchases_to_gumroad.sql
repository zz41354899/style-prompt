-- ============================================
-- 更新 Purchases 表結構 (從 Stripe 改為 Gumroad)
-- 執行此腳本將會刪除現有資料!
-- ============================================

-- 步驟 1: 刪除舊的 purchases 表
DROP TABLE IF EXISTS public.purchases CASCADE;

-- 步驟 2: 刪除舊的 ENUM (如果存在)
DROP TYPE IF EXISTS purchase_status CASCADE;

-- 步驟 3: 建立新的 purchase_status ENUM
CREATE TYPE purchase_status AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- 步驟 4: 建立新的 purchases 表 (Gumroad 買斷制)
CREATE TABLE public.purchases (
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

-- 步驟 5: 建立索引
CREATE INDEX purchases_user_id_idx ON public.purchases(user_id);
CREATE INDEX purchases_status_idx ON public.purchases(status);
CREATE INDEX purchases_gumroad_sale_id_idx ON public.purchases(gumroad_sale_id);
CREATE INDEX purchases_gumroad_email_idx ON public.purchases(gumroad_email);

-- 步驟 6: 啟用 RLS
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- 步驟 7: 創建 RLS 政策

-- 使用者可以查看自己的購買記錄
CREATE POLICY "Users can view own purchases"
    ON public.purchases
    FOR SELECT
    USING (auth.uid() = user_id);

-- Admin 可以查看所有購買記錄
CREATE POLICY "Admins can view all purchases"
    ON public.purchases
    FOR SELECT
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Admin 可以管理購買記錄（退款等）
CREATE POLICY "Admins can manage purchases"
    ON public.purchases
    FOR ALL
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- 步驟 8: 新增註解
COMMENT ON TABLE public.purchases IS 'Gumroad 買斷制購買記錄表';
COMMENT ON COLUMN public.purchases.gumroad_sale_id IS 'Gumroad Sale ID（唯一識別碼）';
COMMENT ON COLUMN public.purchases.gumroad_email IS '購買者 Email（來自 Gumroad）';
COMMENT ON COLUMN public.purchases.gumroad_license_key IS 'License Key（如果產品啟用了 License Key 功能）';
COMMENT ON COLUMN public.purchases.product_type IS '產品類型，固定為 lifetime_pro';
COMMENT ON COLUMN public.purchases.amount IS '金額（以分為單位，例如 200000 = NT$2,000）';
COMMENT ON COLUMN public.purchases.status IS '購買狀態：pending=待處理, completed=完成, failed=失敗, refunded=已退款';

-- ============================================
-- 完成！purchases 表已更新為 Gumroad 買斷制結構
-- ============================================
