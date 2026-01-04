import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { NextResponse } from 'next/server';

/**
 * Gumroad Webhook Handler
 * 處理 Gumroad 的購買通知
 * 
 * Webhook URL: https://yourdomain.com/api/gumroad/webhook
 */
export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Gumroad 發送的資料（form-encoded）
        const saleId = formData.get('sale_id') as string;
        const email = formData.get('email') as string;
        const price = formData.get('price') as string;
        const currency = formData.get('currency') as string || 'USD';
        const permalink = formData.get('permalink') as string;
        const licenseKey = formData.get('license_key') as string;

        console.log('Gumroad webhook received:', {
            saleId,
            email,
            price,
            currency,
            permalink,
        });

        // 驗證必要欄位
        if (!saleId || !email || !price) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 1. 找到使用者（用 email）
        const { data: profile, error: profileError } = await supabaseAdmin
            .from('profiles')
            .select('id, email')
            .eq('email', email.toLowerCase())
            .single();

        if (profileError || !profile) {
            console.error('User not found:', email);
            return NextResponse.json(
                { error: 'User not found. Please register first.' },
                { status: 404 }
            );
        }

        // 2. 寫入 purchases 表
        const { error: purchaseError } = await supabaseAdmin
            .from('purchases')
            .insert({
                user_id: profile.id,
                gumroad_sale_id: saleId,           // Gumroad Sale ID
                gumroad_email: email,              // 購買者 Email
                gumroad_license_key: licenseKey,   // License Key
                product_type: 'lifetime_pro',
                amount: Math.round(parseFloat(price) * 100), // 轉成分
                currency: currency.toUpperCase(),
                status: 'completed',
                completed_at: new Date().toISOString(),
            });

        if (purchaseError) {
            console.error('Failed to create purchase:', purchaseError);
            return NextResponse.json(
                { error: 'Failed to record purchase' },
                { status: 500 }
            );
        }

        // 3. 更新使用者為 Pro
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
            // 即使更新失敗，也回傳成功（可以手動處理）
        }

        console.log('✅ Purchase processed successfully:', saleId);

        return NextResponse.json({
            success: true,
            message: 'Purchase processed successfully',
        });

    } catch (error) {
        console.error('Gumroad webhook error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
