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

        // 取得原始資料
        let rawEncryptInfo = formData.get('EncryptInfo') as string;
        let rawHashInfo = formData.get('HashInfo') as string;

        // 🚑 修正 Base64 字串：+ 號在 URL decode 時可能變成空白
        // 這是 PayUNi 解密失敗最常見的原因 (90%)
        if (rawEncryptInfo?.includes(' ')) {
            console.log('⚠️ 偵測到 EncryptInfo 含有空白，修正為 + 號');
            rawEncryptInfo = rawEncryptInfo.replace(/ /g, '+');
        }
        if (rawHashInfo?.includes(' ')) {
            console.log('⚠️ 偵測到 HashInfo 含有空白，修正為 + 號');
            rawHashInfo = rawHashInfo.replace(/ /g, '+');
        }

        const notifyData: PayuniNotifyRaw = {
            MerID: formData.get('MerID') as string,
            EncryptInfo: rawEncryptInfo,
            HashInfo: rawHashInfo,
        };

        // 完整記錄 PayUNi 回傳的原始資料（用於診斷）
        console.log('📥 [Notify] ========== PayUNi 原始回傳 ==========');
        console.log('📥 [Notify] MerID:', notifyData.MerID);
        console.log('📥 [Notify] EncryptInfo 長度:', notifyData.EncryptInfo?.length);
        console.log('📥 [Notify] EncryptInfo 完整內容:', notifyData.EncryptInfo);
        console.log('📥 [Notify] HashInfo:', notifyData.HashInfo);
        console.log('📥 [Notify] EncryptInfo 包含 ::: (hex=3a3a3a):', notifyData.EncryptInfo?.includes('3a3a3a'));
        console.log('📥 [Notify] EncryptInfo 是否純 hex:', /^[0-9a-fA-F]+$/.test(notifyData.EncryptInfo || ''));
        console.log('📥 [Notify] ========================================');

        // 驗證必要欄位
        if (!notifyData.MerID || !notifyData.EncryptInfo || !notifyData.HashInfo) {
            console.error('❌ [Notify] 缺少必要欄位');
            return new NextResponse('FAILED: Missing required fields', {
                status: 400,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            });
        }

        // 檢查 Key/IV 長度 (AES-256 需要 32 bytes key, 16 bytes IV)
        const hashKey = process.env.PAYUNI_HASH_KEY || '';
        const hashIV = process.env.PAYUNI_HASH_IV || '';
        const isHexFormat = /^[0-9a-fA-F]+$/.test(notifyData.EncryptInfo);

        console.log('🔑 [Notify] 加密設定檢查:', {
            hashKeyLength: hashKey.length,
            hashIVLength: hashIV.length,
            expectedKeyLength: 32,
            expectedIVLength: 16,
            keyLengthOK: hashKey.length === 32,
            ivLengthOK: hashIV.length === 16,
            encryptFormat: isHexFormat ? 'hex' : 'base64',
        });

        // 驗證並解密資料
        console.log('🔐 [Notify] 開始驗證解密...');
        let decryptedResult;
        try {
            decryptedResult = verifyAndDecrypt(notifyData);
            console.log('✅ [Notify] 解密成功');
        } catch (verifyError) {
            console.error('❌ [Notify] 驗證解密失敗:', verifyError);
            console.error('❌ [Notify] 可能原因:');
            console.error('   1. Hash Key 長度不是 32 bytes (目前:', hashKey.length, ')');
            console.error('   2. Hash IV 長度不是 16 bytes (目前:', hashIV.length, ')');
            console.error('   3. EncryptInfo 中的 + 號變成了空白');
            console.error('   4. AES 演算法版本不對 (檢查是否為 AES-256-CBC)');
            return new NextResponse('FAILED: Verification failed', {
                status: 400,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            });
        }

        console.log('📋 [Notify] 交易結果:', {
            Status: decryptedResult.Status,
            Message: decryptedResult.Message,
            MerTradeNo: decryptedResult.MerTradeNo,
            TradeNo: decryptedResult.TradeNo,
            TradeAmt: decryptedResult.TradeAmt,
            PaymentType: decryptedResult.PaymentType,
        });

        // 透過 PayUNi 回傳的 email 找到用戶
        // UsrMail 是我們在建立訂單時傳入的購買者 email
        const userEmail = String(decryptedResult.UsrMail || '');

        // 檢查是否已經處理過這筆訂單（避免重複）
        const { data: existingPurchase } = await supabaseAdmin
            .from('purchases')
            .select('id')
            .eq('payuni_order_id', decryptedResult.MerTradeNo)
            .single();

        if (existingPurchase) {
            console.log('Purchase already processed:', decryptedResult.MerTradeNo);
            return new NextResponse('SUCCESS', {
                status: 200,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            });
        }

        // 檢查交易是否成功
        if (isTransactionSuccessful(decryptedResult)) {
            // ✅ 交易成功 - 透過 email 找到用戶
            const { data: profile, error: profileError } = await supabaseAdmin
                .from('profiles')
                .select('id, email')
                .ilike('email', userEmail || '')
                .single();

            if (profileError || !profile) {
                console.error('User not found for email:', userEmail);
                // 嘗試用訂單編號前綴找（如果訂單編號有包含用戶ID）
                return new NextResponse('FAILED: User not found', {
                    status: 404,
                    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
                });
            }

            // 新建購買記錄（只有成功才會建立）
            const { error: insertError } = await supabaseAdmin
                .from('purchases')
                .insert({
                    user_id: profile.id,
                    payuni_order_id: decryptedResult.MerTradeNo,
                    payuni_trade_no: decryptedResult.TradeNo,
                    product_type: 'lifetime_pro',
                    amount: decryptedResult.TradeAmt || 2000, // 使用實際交易金額
                    currency: 'TWD',
                    status: 'completed',
                    completed_at: new Date().toISOString(),
                    payment_type: decryptedResult.PaymentType,
                    card_last_four: decryptedResult.Card4No,
                });

            if (insertError) {
                console.error('Failed to insert purchase:', insertError);
                return new NextResponse('FAILED: Failed to insert purchase', {
                    status: 500,
                    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
                });
            }

            // 更新使用者為 Pro
            const { error: userUpdateError } = await supabaseAdmin.auth.admin.updateUserById(
                profile.id as string,
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
            // ❌ 交易失敗 - 不建立任何記錄
            console.log('❌ PayUNi payment failed:', decryptedResult.Message);
            // 直接回傳成功（不需要儲存失敗的交易記錄）
        }

        // 回傳成功（PayUNi 需要收到成功回應才會停止重送）
        // 回傳純文字 SUCCESS，PayUNi 收到後會停止重送
        return new NextResponse('SUCCESS', {
            status: 200,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });

    } catch (error) {
        console.error('PayUNi notify error:', error);
        return new NextResponse('FAILED: Internal server error', {
            status: 500,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    }
}
