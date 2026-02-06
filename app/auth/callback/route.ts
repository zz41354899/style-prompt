import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    // 使用環境變數或 request origin
    const origin = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin;

    if (code) {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return cookieStore.getAll();
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        );
                    },
                },
            }
        );

        // 將 OAuth code 轉換為 session
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
            console.error('OAuth callback error:', error);
            // 導向登入頁並顯示錯誤
            return NextResponse.redirect(
                new URL(`/pro/login?error=${encodeURIComponent(error.message)}`, origin)
            );
        }

        console.log('✅ OAuth 登入成功');
    }

    // 成功後導向 Pro 頁面
    return NextResponse.redirect(new URL('/pro', origin));
}
