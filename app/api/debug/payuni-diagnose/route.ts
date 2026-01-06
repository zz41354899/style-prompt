/**
 * PayUNi 加密診斷 API
 * GET /api/debug/payuni-diagnose
 */
import { NextResponse } from 'next/server';
import { getPayuniConfig, aesEncrypt, generateHash } from '@/lib/payuni';

export async function GET() {
    try {
        const config = getPayuniConfig();

        // 測試資料
        const testTradeInfo = {
            MerID: config.merchantId,
            MerTradeNo: 'TEST' + Date.now(),
            TradeAmt: 100,
            ProdDesc: 'Test Product',
            Timestamp: Math.floor(Date.now() / 1000),
            Credit: 1,
        };

        // 轉為 query string
        const queryString = Object.entries(testTradeInfo)
            .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
            .join('&');

        // 加密
        const encryptInfo = aesEncrypt(queryString, config.hashKey, config.hashIV);

        // Hash
        const hashInfo = generateHash(encryptInfo, config.hashKey, config.hashIV);

        return NextResponse.json({
            diagnosis: {
                merchantId: config.merchantId,
                hashKeyLength: config.hashKey.length,
                hashIVLength: config.hashIV.length,
                apiUrl: config.apiUrl,
            },
            testData: {
                rawParams: testTradeInfo,
                queryString: queryString,
                encryptInfo: encryptInfo.substring(0, 50) + '...',
                encryptInfoLength: encryptInfo.length,
                hashInfo: hashInfo,
            },
            formPost: {
                action: config.apiUrl,
                MerID: config.merchantId,
                Version: '1.0',
                EncryptInfo: encryptInfo,
                HashInfo: hashInfo,
            },
            instructions: '請複製 formPost 物件中的資料，用 Postman 或 curl 測試 POST 到 action URL'
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
