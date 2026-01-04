-- ============================================
-- 003_create_admin_tables.sql
-- 建立公告和更新紀錄表
-- ============================================

-- 建立 announcement_type ENUM
DO $$ BEGIN
    CREATE TYPE announcement_type AS ENUM ('event', 'notice', 'alert');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 建立 changelog_type ENUM
DO $$ BEGIN
    CREATE TYPE changelog_type AS ENUM ('feature', 'fix', 'improvement');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ============================================
-- announcements 表
-- ============================================
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type announcement_type DEFAULT 'notice',
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- updated_at 觸發器
DROP TRIGGER IF EXISTS announcements_updated_at ON public.announcements;
CREATE TRIGGER announcements_updated_at
    BEFORE UPDATE ON public.announcements
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- 所有人都可以查看啟用中的公告
DROP POLICY IF EXISTS "Anyone can view active announcements" ON public.announcements;
CREATE POLICY "Anyone can view active announcements"
    ON public.announcements FOR SELECT
    USING (is_active = TRUE AND NOW() BETWEEN start_at AND end_at);

-- Admin 可以管理所有公告
DROP POLICY IF EXISTS "Admins can manage announcements" ON public.announcements;
CREATE POLICY "Admins can manage announcements"
    ON public.announcements FOR ALL
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- ============================================
-- changelogs 表
-- ============================================
CREATE TABLE IF NOT EXISTS public.changelogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    version TEXT NOT NULL,
    title TEXT NOT NULL,
    changes JSONB NOT NULL DEFAULT '[]'::jsonb,
    type changelog_type DEFAULT 'feature',
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.changelogs ENABLE ROW LEVEL SECURITY;

-- 所有人都可以查看 changelogs
DROP POLICY IF EXISTS "Anyone can view changelogs" ON public.changelogs;
CREATE POLICY "Anyone can view changelogs"
    ON public.changelogs FOR SELECT
    USING (TRUE);

-- Admin 可以管理 changelogs
DROP POLICY IF EXISTS "Admins can manage changelogs" ON public.changelogs;
CREATE POLICY "Admins can manage changelogs"
    ON public.changelogs FOR ALL
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- ============================================
-- contact_submissions 表
-- ============================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'read', 'replied', 'archived')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 任何人都可以提交聯絡表單（INSERT）
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
    ON public.contact_submissions FOR INSERT
    WITH CHECK (TRUE);

-- Admin 可以查看所有提交
DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view contact submissions"
    ON public.contact_submissions FOR SELECT
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- Admin 可以更新狀態
DROP POLICY IF EXISTS "Admins can update contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can update contact submissions"
    ON public.contact_submissions FOR UPDATE
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- 完成
COMMENT ON TABLE public.announcements IS '公告表';
COMMENT ON TABLE public.changelogs IS '版本更新紀錄表';
COMMENT ON TABLE public.contact_submissions IS '聯絡表單提交記錄';
