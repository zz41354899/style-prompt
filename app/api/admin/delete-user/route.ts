import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// 建立 Admin client (使用 service role key)
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
);

export async function DELETE(request: Request) {
    try {
        const { userId } = await request.json();

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            );
        }

        // 建立 Server-side Supabase client (可以讀取 cookies)
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
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                    },
                },
            }
        );

        // 驗證當前使用者
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        console.log('=== DELETE USER API DEBUG ===');
        console.log('User:', user?.email);
        console.log('Role:', user?.app_metadata?.role);
        console.log('Auth Error:', authError);

        if (authError || !user) {
            console.error('❌ Auth error:', authError);
            return NextResponse.json(
                { error: 'Unauthorized - Please login' },
                { status: 401 }
            );
        }

        // 檢查是否為 admin
        const role = user.app_metadata?.role;
        if (role !== 'admin') {
            console.error('❌ Non-admin user attempted to delete:', user.email, 'Role:', role);
            return NextResponse.json(
                { error: 'Unauthorized - Admin only' },
                { status: 403 }
            );
        }

        console.log('✅ Admin verified:', user.email, 'Attempting to delete user:', userId);

        // 🛡️ 防止刪除 admin 帳號
        // 先查詢目標使用者的資料
        const { data: targetUserData } = await supabaseAdmin.auth.admin.getUserById(userId);

        if (targetUserData?.user?.app_metadata?.role === 'admin') {
            console.error('❌ Attempted to delete admin user:', targetUserData.user.email);
            return NextResponse.json(
                { error: '無法刪除 Admin 帳號,這是系統保護機制' },
                { status: 403 }
            );
        }

        // 使用 Admin API 刪除使用者
        const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

        if (error) {
            console.error('❌ Error deleting user:', error);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        console.log('✅ User deleted successfully:', userId);

        return NextResponse.json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (e) {
        console.error('❌ Error in delete-user API:', e);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
