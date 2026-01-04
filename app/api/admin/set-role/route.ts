import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * Admin API - 設定使用者角色
 * POST /api/admin/set-role
 * 
 * Body: {
 *   email: string,
 *   role: 'free' | 'pro' | 'admin'
 * }
 */
export async function POST(request: NextRequest) {
    try {
        const { email, role } = await request.json();

        // 驗證參數
        if (!email || !role) {
            return NextResponse.json(
                { error: 'Missing email or role' },
                { status: 400 }
            );
        }

        if (!['free', 'pro', 'admin'].includes(role)) {
            return NextResponse.json(
                { error: 'Invalid role. Must be free, pro, or admin' },
                { status: 400 }
            );
        }

        // 使用 Service Role Key 更新 app_metadata
        const { data: users, error: fetchError } = await supabaseAdmin.auth.admin.listUsers();

        if (fetchError) {
            console.error('Failed to list users:', fetchError);
            return NextResponse.json(
                { error: 'Failed to fetch users' },
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

        // 更新 app_metadata
        const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
            targetUser.id,
            {
                app_metadata: {
                    ...targetUser.app_metadata,
                    role: role
                }
            }
        );

        if (error) {
            console.error('Failed to update user role:', error);
            return NextResponse.json(
                { error: 'Failed to update user role' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: `Successfully set ${email} to role: ${role}`,
            user: {
                id: data.user.id,
                email: data.user.email,
                role: data.user.app_metadata?.role
            }
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
