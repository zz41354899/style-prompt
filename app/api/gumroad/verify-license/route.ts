import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { NextResponse } from 'next/server';

/**
 * Gumroad License Key 驗證 API
 * 使用者購買後可以用 license key 啟用 Pro
 */
export async function POST(request: Request) {
    try {
        const { licenseKey, email } = await request.json();

        // 驗證輸入
        if (!licenseKey || !email) {
            return NextResponse.json(
                { error: '請提供 License Key 和 Email' },
                { status: 400 }
            );
        }

        // 向 Gumroad API 驗證 License Key
        const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id: process.env.GUMROAD_PRODUCT_ID!,
                license_key: licenseKey,
                increment_uses_count: false, // 不增加使用次數（僅驗證）
            }),
        });

        const data = await response.json();

        console.log('Gumroad license verification:', {
            success: data.success,
            email: email,
            purchaseEmail: data.purchase?.email,
        });

        // 檢查 License Key 是否有效
        if (!data.success) {
            return NextResponse.json(
                { error: 'License Key 無效或已被使用' },
                { status: 400 }
            );
        }

        // 檢查 Email 是否匹配
        if (data.purchase.email.toLowerCase() !== email.toLowerCase()) {
            return NextResponse.json(
                { error: 'Email 與購買記錄不符' },
                { status: 400 }
            );
        }

        // 找到使用者
        const { data: profile, error: profileError } = await supabaseAdmin
            .from('profiles')
            .select('id, email')
            .eq('email', email.toLowerCase())
            .single();

        if (profileError || !profile) {
            return NextResponse.json(
                { error: '找不到使用者，請先註冊' },
                { status: 404 }
            );
        }

        // 檢查是否已經記錄過此次購買
        const { data: existingPurchase } = await supabaseAdmin
            .from('purchases')
            .select('id')
            .eq('user_id', profile.id)
            .eq('gumroad_license_key', licenseKey)
            .single();

        // 如果沒有記錄，新增購買記錄
        if (!existingPurchase) {
            await supabaseAdmin
                .from('purchases')
                .insert({
                    user_id: profile.id,
                    gumroad_sale_id: data.purchase.sale_id,
                    gumroad_email: email,
                    gumroad_license_key: licenseKey,
                    product_type: 'lifetime_pro',
                    amount: Math.round(data.purchase.price * 100),
                    currency: data.purchase.currency || 'USD',
                    status: 'completed',
                    completed_at: data.purchase.sale_timestamp,
                });
        }

        // 更新使用者為 Pro
        const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
            profile.id,
            {
                app_metadata: {
                    role: 'pro',
                },
            }
        );

        if (updateError) {
            console.error('Failed to update user role:', updateError);
            return NextResponse.json(
                { error: '啟用失敗，請聯繫客服' },
                { status: 500 }
            );
        }

        console.log('✅ License activated for:', email);

        return NextResponse.json({
            success: true,
            message: 'Pro 已成功啟用！',
        });

    } catch (error) {
        console.error('License verification error:', error);
        return NextResponse.json(
            { error: '驗證失敗，請稍後再試' },
            { status: 500 }
        );
    }
}
