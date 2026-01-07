-- ============================================
-- 更新 purchase_status ENUM 以匹配 PayUNi
-- 需要先移除預設值再轉換
-- ============================================

-- 1. 先移除欄位的預設值
ALTER TABLE public.purchases ALTER COLUMN status DROP DEFAULT;

-- 2. 建立新的 enum（使用 PayUNi 格式）
CREATE TYPE purchase_status_new AS ENUM ('pending', 'SUCCESS', 'FAIL', 'refunded');

-- 3. 更新 purchases 表使用新 enum
ALTER TABLE public.purchases 
    ALTER COLUMN status TYPE purchase_status_new 
    USING (
        CASE status::text
            WHEN 'completed' THEN 'SUCCESS'::purchase_status_new
            WHEN 'failed' THEN 'FAIL'::purchase_status_new
            ELSE status::text::purchase_status_new
        END
    );

-- 4. 刪除舊 enum
DROP TYPE purchase_status;

-- 5. 重新命名新 enum
ALTER TYPE purchase_status_new RENAME TO purchase_status;

-- 6. 重新設定預設值
ALTER TABLE public.purchases ALTER COLUMN status SET DEFAULT 'pending'::purchase_status;

-- 7. 更新註解
COMMENT ON COLUMN public.purchases.status IS '購買狀態：pending=待處理, SUCCESS=成功, FAIL=失敗, refunded=已退款（與 PayUNi 一致）';
