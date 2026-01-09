-- 為 announcements 和 changelogs 表啟用 Realtime
-- 這樣當資料變更時，前端可以即時收到通知
-- 注意：如果表已經啟用 Realtime，此 migration 會跳過

DO $$
BEGIN
    -- 嘗試啟用 announcements 表的 Realtime（如果尚未啟用）
    BEGIN
        ALTER PUBLICATION supabase_realtime ADD TABLE announcements;
        RAISE NOTICE 'announcements 表已加入 Realtime';
    EXCEPTION WHEN duplicate_object THEN
        RAISE NOTICE 'announcements 表已經是 Realtime 成員';
    END;

    -- 嘗試啟用 changelogs 表的 Realtime（如果尚未啟用）
    BEGIN
        ALTER PUBLICATION supabase_realtime ADD TABLE changelogs;
        RAISE NOTICE 'changelogs 表已加入 Realtime';
    EXCEPTION WHEN duplicate_object THEN
        RAISE NOTICE 'changelogs 表已經是 Realtime 成員';
    END;
END $$;
