/**
 * PayUNi ReturnURL (使用者導回) API
 * GET/POST /api/payuni/return
 * 
 * 功能：付款完成後導回使用者到成功或失敗頁面
 * 注意：不應依賴此 API 更新資料庫，應由 NotifyURL 處理
 */
import { NextResponse } from 'next/server';
import {
    verifyAndDecrypt,
    isTransactionSuccessful,
    type PayuniNotifyRaw,
} from '@/lib/payuni';

// 處理 GET 請求（某些情況 PayUNi 用 GET 導回）
export async function GET(request: Request) {
    return handleReturn(request);
}

// 處理 POST 請求
export async function POST(request: Request) {
    return handleReturn(request);
}

async function handleReturn(request: Request): Promise<NextResponse> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

        let notifyData: PayuniNotifyRaw;

        // 嘗試從 form data 或 query params 取得資料
        const contentType = request.headers.get('content-type') || '';

        if (contentType.includes('application/x-www-form-urlencoded')) {
            const formData = await request.formData();
            let rawEncryptInfo = formData.get('EncryptInfo') as string;
            let rawHashInfo = formData.get('HashInfo') as string;

            // 🚑 修正 Base64 字串：+ 號在 URL decode 時可能變成空白
            if (rawEncryptInfo?.includes(' ')) {
                console.log('⚠️ Return: 偵測到 EncryptInfo 含有空白，修正為 + 號');
                rawEncryptInfo = rawEncryptInfo.replace(/ /g, '+');
            }
            if (rawHashInfo?.includes(' ')) {
                console.log('⚠️ Return: 偵測到 HashInfo 含有空白，修正為 + 號');
                rawHashInfo = rawHashInfo.replace(/ /g, '+');
            }

            notifyData = {
                MerID: formData.get('MerID') as string,
                EncryptInfo: rawEncryptInfo,
                HashInfo: rawHashInfo,
            };
        } else {
            // 從 URL params 取得
            const url = new URL(request.url);
            let rawEncryptInfo = url.searchParams.get('EncryptInfo') || '';
            let rawHashInfo = url.searchParams.get('HashInfo') || '';

            // 🚑 修正 Base64 字串：+ 號在 URL decode 時可能變成空白
            if (rawEncryptInfo.includes(' ')) {
                console.log('⚠️ Return (GET): 偵測到 EncryptInfo 含有空白，修正為 + 號');
                rawEncryptInfo = rawEncryptInfo.replace(/ /g, '+');
            }
            if (rawHashInfo.includes(' ')) {
                console.log('⚠️ Return (GET): 偵測到 HashInfo 含有空白，修正為 + 號');
                rawHashInfo = rawHashInfo.replace(/ /g, '+');
            }

            notifyData = {
                MerID: url.searchParams.get('MerID') || '',
                EncryptInfo: rawEncryptInfo,
                HashInfo: rawHashInfo,
            };
        }

        // 如果沒有收到資料，可能是使用者直接訪問
        if (!notifyData.EncryptInfo) {
            console.log('⚠️ [Return] 沒有收到 EncryptInfo，導向 unknown');
            return NextResponse.redirect(`${baseUrl}/pricing?status=unknown`);
        }

        console.log('📥 [Return] PayUNi 回傳:', {
            MerID: notifyData.MerID,
            EncryptInfoLength: notifyData.EncryptInfo?.length,
            EncryptInfoPreview: notifyData.EncryptInfo?.substring(0, 30) + '...',
            HashInfo: notifyData.HashInfo?.substring(0, 20) + '...',
        });

        // 驗證並解密
        console.log('🔐 [Return] 開始驗證解密...');
        let decryptedResult;
        try {
            decryptedResult = verifyAndDecrypt(notifyData);
            console.log('✅ [Return] 解密成功');
        } catch (err) {
            console.error('❌ [Return] 驗證解密失敗:', err);
            console.error('❌ [Return] 可能原因: Hash Key/IV 不正確，或 + 號變空白問題');
            return NextResponse.redirect(`${baseUrl}/pricing?status=error&message=verification_failed`);
        }

        console.log('📋 [Return] 交易結果:', {
            Status: decryptedResult.Status,
            Message: decryptedResult.Message,
            MerTradeNo: decryptedResult.MerTradeNo,
            TradeAmt: decryptedResult.TradeAmt,
        });

        // 根據結果導向不同頁面
        if (isTransactionSuccessful(decryptedResult)) {
            // 成功 - 導向成功頁面
            console.log('✅ [Return] 交易成功，導向成功頁面');
            return NextResponse.redirect(
                `${baseUrl}/pricing?status=success&order=${decryptedResult.MerTradeNo}`
            );
        } else {
            // 失敗 - 導向失敗頁面
            console.log('❌ [Return] 交易失敗，導向失敗頁面:', decryptedResult.Message);
            return NextResponse.redirect(
                `${baseUrl}/pricing?status=failed&message=${encodeURIComponent(decryptedResult.Message)}`
            );
        }

    } catch (error) {
        console.error('❌ [Return] PayUNi return error:', error);
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        return NextResponse.redirect(`${baseUrl}/pricing?status=error`);
    }
}
