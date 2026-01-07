/**
 * PayUNi 建立交易訂單 API
 * POST /api/payuni/create-order
 * 
 * 功能：建立 PayUNi 交易請求，回傳付款頁面資訊
 */
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import {
    createOrderRequest,
    generateOrderId,
    getPayuniConfig,
} from '@/lib/payuni';

interface CreateOrderBody {
    /** 購買者 Email */
    email: string;
    /** 購買者姓名（可選） */
    userName?: string;
    /** 產品類型 */
    productType?: 'lifetime_pro';
}

export async function POST(request: Request) {
    try {
        const body: CreateOrderBody = await request.json();

        // 驗證必要欄位
        if (!body.email) {
            return NextResponse.json(
                { error: '請提供 Email' },
                { status: 400 }
            );
        }

        // 驗證使用者是否存在
        const { data: profile, error: profileError } = await supabaseAdmin
            .from('profiles')
            .select('id, email, display_name')
            .eq('email', body.email.toLowerCase())
            .single();

        if (profileError || !profile) {
            return NextResponse.json(
                { error: '找不到使用者，請先登入註冊' },
                { status: 404 }
            );
        }

        // 檢查是否已經是 Pro
        const { data: existingPro } = await supabaseAdmin
            .from('purchases')
            .select('id')
            .eq('user_id', profile.id)
            .eq('status', 'success')
            .single();

        if (existingPro) {
            return NextResponse.json(
                { error: '您已經是 Pro 會員，無需重複購買' },
                { status: 400 }
            );
        }

        // 取得設定
        const config = getPayuniConfig();

        console.log('--- PayUNi Config Check ---');
        console.log('MerchantID:', config.merchantId);
        console.log('HashKey (prefix):', config.hashKey.substring(0, 4) + '...');
        console.log('HashIV (prefix):', config.hashIV.substring(0, 4) + '...');
        console.log('API URL:', config.apiUrl);
        console.log('---------------------------');

        // 產生訂單編號
        const orderId = generateOrderId();

        // 取得網站 URL（for callback）
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        console.log('Base URL (NEXT_PUBLIC_SITE_URL):', baseUrl);

        if (!baseUrl) {
            console.warn('⚠️ NEXT_PUBLIC_SITE_URL is not set, falling back to localhost');
        }

        const finalBaseUrl = baseUrl || 'http://localhost:3000';

        // 固定價格（Pro 終身版 NT$2000）
        const amount = 2000;
        const productName = 'StylePrompts Pro - 終身版';

        // 建立交易請求
        const orderRequest = createOrderRequest({
            orderId,
            amount,
            productName,
            email: body.email,
            userName: body.userName || profile.display_name || '',
            returnUrl: `${finalBaseUrl}/api/payuni/return`,
            notifyUrl: `${finalBaseUrl}/api/payuni/notify`,
        });

        // 在資料庫中預先建立購買記錄（pending 狀態）
        // 這是為了在 notify 回來時能找到對應的用戶
        const { error: insertError } = await supabaseAdmin
            .from('purchases')
            .insert({
                user_id: profile.id,
                payuni_order_id: orderId,
                product_type: 'lifetime_pro',
                amount: amount, // 使用實際金額（2000 元），不需要乘以 100
                currency: 'TWD',
                status: 'pending',
            });

        if (insertError) {
            console.error('Failed to insert pending purchase:', insertError);
            throw insertError;
        }

        console.log('✅ PayUNi order created and saved to DB:', orderId);

        // 顯示將發送到 PayUNi 的資料
        console.log('📤 [create-order] 送往 PayUNi 的資料:');
        console.log('   formAction:', config.apiUrl);
        console.log('   MerID:', orderRequest.MerID);
        console.log('   Version:', orderRequest.Version);
        console.log('   EncryptInfo 長度:', orderRequest.EncryptInfo.length);
        console.log('   EncryptInfo 預覽:', orderRequest.EncryptInfo.substring(0, 50) + '...');
        console.log('   HashInfo:', orderRequest.HashInfo);

        // 回傳表單資料，前端使用 form POST 提交到 PayUNi
        return NextResponse.json({
            success: true,
            orderId,
            amount,
            productName,
            formAction: config.apiUrl,
            formData: orderRequest,
        });

    } catch (error) {
        console.error('PayUNi create order error:', error);
        return NextResponse.json(
            { error: '建立訂單失敗，請稍後再試' },
            { status: 500 }
        );
    }
}
