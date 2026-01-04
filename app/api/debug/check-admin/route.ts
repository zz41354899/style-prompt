import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * Debug API - 檢查使用者的 admin 角色設定
 * GET /api/debug/check-admin?email=xxx@gmail.com
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json(
                { error: 'Missing email parameter' },
                { status: 400 }
            );
        }

        // 使用 Service Role Key 查詢使用者
        const { data: users, error: fetchError } = await supabaseAdmin.auth.admin.listUsers();

        if (fetchError) {
            return NextResponse.json(
                { error: 'Failed to fetch users', details: fetchError.message },
                { status: 500 }
            );
        }

        const targetUser = users.users.find(u => u.email === email);

        if (!targetUser) {
            return NextResponse.json(
                { error: `User with email ${email} not found` },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            user: {
                id: targetUser.id,
                email: targetUser.email,
                app_metadata: targetUser.app_metadata,
                role: targetUser.app_metadata?.role || 'undefined',
                created_at: targetUser.created_at,
                last_sign_in_at: targetUser.last_sign_in_at
            }
        });

    } catch (error) {
        console.error('Debug API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: String(error) },
            { status: 500 }
        );
    }
}
