/**
 * PayUNi NotifyURL (背景通知) API
 * POST /api/payuni/notify
 * 
 * 功能：接收 PayUNi 交易結果通知，更新購買記錄和使用者權限
 * 這是 server-to-server 的通知，不經過使用者瀏覽器
 */
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import {
    verifyAndDecrypt,
    isTransactionSuccessful,
    type PayuniNotifyRaw,
} from '@/lib/payuni';

export async function POST(request: Request) {
    try {
        // PayUNi 以 form-urlencoded 格式回傳
        const formData = await request.formData();

        const notifyData: PayuniNotifyRaw = {
            MerID: formData.get('MerID') as string,
            EncryptInfo: formData.get('EncryptInfo') as string,
            HashInfo: formData.get('HashInfo') as string,
        };

        console.log('PayUNi notify received:', {
            MerID: notifyData.MerID,
            hasEncryptInfo: !!notifyData.EncryptInfo,
            hasHashInfo: !!notifyData.HashInfo,
        });

        // 驗證必要欄位
        if (!notifyData.MerID || !notifyData.EncryptInfo || !notifyData.HashInfo) {
            console.error('Missing required fields in notify');
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 驗證並解密資料
        let decryptedResult;
        try {
            decryptedResult = verifyAndDecrypt(notifyData);
        } catch (verifyError) {
            console.error('PayUNi verification failed:', verifyError);
            return NextResponse.json(
                { error: 'Verification failed' },
                { status: 400 }
            );
        }

        console.log('PayUNi decrypted result:', {
            Status: decryptedResult.Status,
            MerTradeNo: decryptedResult.MerTradeNo,
            TradeNo: decryptedResult.TradeNo,
            TradeAmt: decryptedResult.TradeAmt,
        });

        // 查找對應的購買記錄
        const { data: purchase, error: purchaseError } = await supabaseAdmin
            .from('purchases')
            .select('id, user_id, status')
            .eq('payuni_order_id', decryptedResult.MerTradeNo)
            .single();

        if (purchaseError || !purchase) {
            console.error('Purchase not found:', decryptedResult.MerTradeNo);
            return NextResponse.json(
                { error: 'Purchase not found' },
                { status: 404 }
            );
        }

        // 如果已經處理過，跳過
        if (purchase.status === 'completed') {
            console.log('Purchase already completed:', decryptedResult.MerTradeNo);
            return NextResponse.json({ success: true, message: 'Already processed' });
        }

        // 檢查交易是否成功
        if (isTransactionSuccessful(decryptedResult)) {
            // ✅ 交易成功

            // 更新購買記錄
            const { error: updateError } = await supabaseAdmin
                .from('purchases')
                .update({
                    payuni_trade_no: decryptedResult.TradeNo,
                    status: 'completed',
                    completed_at: new Date().toISOString(),
                    payment_type: decryptedResult.PaymentType,
                    card_last_four: decryptedResult.Card4No,
                })
                .eq('id', purchase.id);

            if (updateError) {
                console.error('Failed to update purchase:', updateError);
                return NextResponse.json(
                    { error: 'Failed to update purchase' },
                    { status: 500 }
                );
            }

            // 更新使用者為 Pro
            const { error: userUpdateError } = await supabaseAdmin.auth.admin.updateUserById(
                purchase.user_id,
                {
                    app_metadata: {
                        role: 'pro',
                    },
                }
            );

            if (userUpdateError) {
                console.error('Failed to update user role:', userUpdateError);
                // 不回傳錯誤，因為購買已記錄
            }

            console.log('✅ PayUNi payment completed:', decryptedResult.MerTradeNo);

        } else {
            // ❌ 交易失敗
            await supabaseAdmin
                .from('purchases')
                .update({
                    payuni_trade_no: decryptedResult.TradeNo,
                    status: 'failed',
                    error_message: decryptedResult.Message,
                })
                .eq('id', purchase.id);

            console.log('❌ PayUNi payment failed:', decryptedResult.Message);
        }

        // 回傳成功（PayUNi 需要收到成功回應才會停止重送）
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('PayUNi notify error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
