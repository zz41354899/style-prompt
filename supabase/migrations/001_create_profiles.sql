-- ============================================
-- 001_create_profiles.sql
-- 建立 profiles 表並設定自動同步觸發器
-- ============================================

-- 建立 profiles 表
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    display_name TEXT,
    avatar_url TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'deleted')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 建立索引
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);

-- 建立觸發器函數：自動為新使用者建立 profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, display_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 刪除舊的觸發器（如果存在）
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- 建立觸發器
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 建立自動更新 updated_at 的函數
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 建立 updated_at 觸發器
DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;
CREATE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 啟用 RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS 政策：使用者可以查看自己的 profile
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

-- RLS 政策：使用者可以更新自己的 profile
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- RLS 政策：Admin 可以查看所有 profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
    ON public.profiles FOR SELECT
    USING (
        (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    );

-- 為現有使用者建立 profiles（如果尚未存在）
INSERT INTO public.profiles (id, email, display_name)
SELECT 
    id,
    email,
    COALESCE(raw_user_meta_data->>'name', split_part(email, '@', 1))
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- 完成
COMMENT ON TABLE public.profiles IS '使用者個人資料表，自動從 auth.users 同步建立';
