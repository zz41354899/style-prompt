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
            notifyData = {
                MerID: formData.get('MerID') as string,
                EncryptInfo: formData.get('EncryptInfo') as string,
                HashInfo: formData.get('HashInfo') as string,
            };
        } else {
            // 從 URL params 取得
            const url = new URL(request.url);
            notifyData = {
                MerID: url.searchParams.get('MerID') || '',
                EncryptInfo: url.searchParams.get('EncryptInfo') || '',
                HashInfo: url.searchParams.get('HashInfo') || '',
            };
        }

        // 如果沒有收到資料，可能是使用者直接訪問
        if (!notifyData.EncryptInfo) {
            return NextResponse.redirect(`${baseUrl}/pricing?status=unknown`);
        }

        // 驗證並解密
        let decryptedResult;
        try {
            decryptedResult = verifyAndDecrypt(notifyData);
        } catch {
            console.error('Return verification failed');
            return NextResponse.redirect(`${baseUrl}/pricing?status=error&message=verification_failed`);
        }

        // 根據結果導向不同頁面
        if (isTransactionSuccessful(decryptedResult)) {
            // 成功 - 導向成功頁面
            return NextResponse.redirect(
                `${baseUrl}/pricing?status=success&order=${decryptedResult.MerTradeNo}`
            );
        } else {
            // 失敗 - 導向失敗頁面
            return NextResponse.redirect(
                `${baseUrl}/pricing?status=failed&message=${encodeURIComponent(decryptedResult.Message)}`
            );
        }

    } catch (error) {
        console.error('PayUNi return error:', error);
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        return NextResponse.redirect(`${baseUrl}/pricing?status=error`);
    }
}
