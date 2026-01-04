import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
    // 1. 初始化 response
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    // 2. 建立 Supabase Client
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    // 同步更新 request 的 cookies
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));

                    // 更新 response，確保這些 cookie 會被寫入到瀏覽器
                    response = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // 3. 獲取當前使用者（這會刷新 session 並觸發 setAll）
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Debug logging
    const path = request.nextUrl.pathname;
    if (path.startsWith('/pro/admin') || path.startsWith('/debug')) {
        console.log('=== MIDDLEWARE DEBUG ===');
        console.log('Path:', path);
        console.log('User exists:', !!user);
        if (user) {
            console.log('User email:', user.email);
            console.log('User ID:', user.id);
            console.log('app_metadata:', JSON.stringify(user.app_metadata, null, 2));
            console.log('Role:', user.app_metadata?.role);
        }
        console.log('=======================');
    }

    // 4. Helper 函數：處理重定向並保留 Cookies
    const redirectTo = (url: URL) => {
        const redirectResponse = NextResponse.redirect(url);
        const cookies = response.cookies.getAll();
        cookies.forEach((cookie) => {
            redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
        });
        return redirectResponse;
    };

    // 5. 路由保護邏輯
    // --- ADMIN 保護區 ---
    // 使用 app_metadata.role 檢查權限（只能透過 Service Role Key 修改）
    if (path.startsWith('/pro/admin')) {
        // 未登入 -> 導向登入頁
        if (!user) {
            console.log('[Proxy] Admin access denied: User not logged in');
            return redirectTo(new URL('/pro/login?redirect=/pro/admin', request.url));
        }

        // 檢查 app_metadata.role 是否為 admin
        const role = user.app_metadata?.role;
        if (role !== 'admin') {
            console.warn(`[Proxy] Unauthorized admin access: ${user.email}, Role: ${role}`);
            return redirectTo(new URL('/dashboard', request.url));
        }

        console.log('✅ [Proxy] Admin access GRANTED:', user.email);
    }

    // --- PRO 保護區（若需啟用請解開）---
    // if (path.startsWith('/pro/') && !path.startsWith('/pro/login') && !user) {
    //     return redirectTo(new URL('/pro/login', request.url));
    // }

    // 6. 如果沒有被攔截,回傳帶有最新 cookie 的 response
    return response;
}

// Next.js 16 Proxy Config
export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
