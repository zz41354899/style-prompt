-- 簡化公告日期欄位:移除 end_at,將 start_at 改為 published_at

-- 1. 添加新的 published_at 欄位
ALTER TABLE announcements
ADD COLUMN IF NOT EXISTS published_at DATE DEFAULT CURRENT_DATE;

-- 2. 將現有的 start_at 資料複製到 published_at (如果 start_at 欄位存在)
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'announcements' AND column_name = 'start_at'
    ) THEN
        UPDATE announcements
        SET published_at = start_at::date
        WHERE published_at IS NULL AND start_at IS NOT NULL;
    END IF;
END $$;

-- 3. 移除不再需要的欄位 (CASCADE 會同時刪除依賴的 RLS 政策)
ALTER TABLE announcements DROP COLUMN IF EXISTS start_at CASCADE;
ALTER TABLE announcements DROP COLUMN IF EXISTS end_at CASCADE;

-- 添加欄位註釋
COMMENT ON COLUMN announcements.published_at IS '公告發布日期';

-- 4. 重新建立簡化的 RLS 政策 (替代被 CASCADE 刪除的舊政策)
DROP POLICY IF EXISTS "Anyone can view active announcements" ON announcements;
CREATE POLICY "Anyone can view active announcements"
ON announcements FOR SELECT
USING (is_active = true);
