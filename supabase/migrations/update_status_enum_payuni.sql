-- ============================================
-- 更新 purchase_status ENUM（使用小寫格式）
-- 需要先移除預設值再轉換
-- ============================================

-- 1. 先移除欄位的預設值
ALTER TABLE public.purchases ALTER COLUMN status DROP DEFAULT;

-- 2. 建立新的 enum（使用小寫格式）
CREATE TYPE purchase_status_new AS ENUM ('pending', 'success', 'fail', 'refunded');

-- 3. 更新 purchases 表使用新 enum
ALTER TABLE public.purchases 
    ALTER COLUMN status TYPE purchase_status_new 
    USING (
        CASE status::text
            WHEN 'completed' THEN 'success'::purchase_status_new
            WHEN 'failed' THEN 'fail'::purchase_status_new
            WHEN 'SUCCESS' THEN 'success'::purchase_status_new
            WHEN 'FAIL' THEN 'fail'::purchase_status_new
            ELSE status::text::purchase_status_new
        END
    );

-- 4. 刪除舊 enum
DROP TYPE purchase_status;

-- 5. 重新命名新 enum
ALTER TYPE purchase_status_new RENAME TO purchase_status;

-- 6. 不設定預設值，由程式碼明確指定狀態

-- 7. 更新註解
COMMENT ON COLUMN public.purchases.status IS '購買狀態：pending=待處理, success=成功, fail=失敗, refunded=已退款（小寫格式）';
