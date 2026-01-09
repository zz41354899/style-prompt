import { createBrowserClient } from '@supabase/ssr';

// 使用 SSR 專用的 Browser Client，確保與 Next.js middleware 的 cookie 處理同步
export const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
            flowType: 'pkce',
        },
        global: {
            headers: {
                'x-client-info': 'style-prompt',
            },
        },
        db: {
            schema: 'public',
        },
    }
);
