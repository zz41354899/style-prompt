/**
 * PayUNi 加解密測試 API
 * GET /api/debug/payuni-test
 * 
 * 這個端點會測試加密和解密，確認你的實作是否正確
 */
import { NextResponse } from 'next/server';
import { getPayuniConfig, aesEncrypt, aesDecrypt, generateHash } from '@/lib/payuni';

export async function GET() {
    try {
        const config = getPayuniConfig();

        // 1. 測試資料
        const testData = 'MerID=S06521446&MerTradeNo=TEST123&TradeAmt=100&Timestamp=1234567890';

        console.log('=== PayUNi 加解密測試 ===');
        console.log('1. 原始資料:', testData);
        console.log('2. HashKey 長度:', config.hashKey.length, '(需要 32)');
        console.log('3. HashIV 長度:', config.hashIV.length, '(需要 12 for GCM)');

        // 2. 加密測試
        let encryptedData: string;
        try {
            encryptedData = aesEncrypt(testData, config.hashKey, config.hashIV);
            console.log('4. 加密成功，長度:', encryptedData.length);
            console.log('5. 加密結果前50字:', encryptedData.substring(0, 50) + '...');
            console.log('6. 包含 ::: 分隔符:', encryptedData.includes('3a3a3a')); // ::: in hex
        } catch (encryptError: any) {
            console.error('❌ 加密失敗:', encryptError.message);
            return NextResponse.json({
                status: 'error',
                step: 'encrypt',
                error: encryptError.message,
                config: {
                    hashKeyLength: config.hashKey.length,
                    hashIVLength: config.hashIV.length,
                }
            }, { status: 500 });
        }

        // 3. 解密測試
        let decryptedData: string;
        try {
            decryptedData = aesDecrypt(encryptedData, config.hashKey, config.hashIV);
            console.log('7. 解密成功');
            console.log('8. 解密結果:', decryptedData);
        } catch (decryptError: any) {
            console.error('❌ 解密失敗:', decryptError.message);
            return NextResponse.json({
                status: 'error',
                step: 'decrypt',
                error: decryptError.message,
                encryptedData: encryptedData.substring(0, 100) + '...',
                config: {
                    hashKeyLength: config.hashKey.length,
                    hashIVLength: config.hashIV.length,
                }
            }, { status: 500 });
        }

        // 4. 驗證資料一致
        const isMatch = testData === decryptedData;
        console.log('9. 原始 vs 解密 比對:', isMatch ? '✅ 一致' : '❌ 不一致');

        // 5. Hash 測試
        const hashInfo = generateHash(encryptedData, config.hashKey, config.hashIV);
        console.log('10. Hash:', hashInfo);

        return NextResponse.json({
            status: 'success',
            config: {
                merchantId: config.merchantId,
                hashKeyLength: config.hashKey.length,
                hashIVLength: config.hashIV.length,
                apiUrl: config.apiUrl,
            },
            test: {
                originalData: testData,
                encryptedLength: encryptedData.length,
                encryptedPreview: encryptedData.substring(0, 80) + '...',
                decryptedData: decryptedData,
                dataMatch: isMatch,
                hashInfo: hashInfo,
            },
            message: isMatch
                ? '✅ 加解密測試成功！你的實作是正確的。'
                : '❌ 加解密測試失敗！解密後的資料與原始資料不符。'
        });

    } catch (error: any) {
        console.error('PayUNi 測試錯誤:', error);
        return NextResponse.json({
            status: 'error',
            error: error.message,
            stack: error.stack
        }, { status: 500 });
    }
}
