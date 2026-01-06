
import { NextResponse } from 'next/server';
import { getPayuniConfig, aesEncrypt, generateHash } from '@/lib/payuni';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            tempOrderId, // MerTradeNo
            amount,
            status = 'SUCCESS',
            message = 'Simulation Test'
        } = body;

        const config = getPayuniConfig();

        // 1. Construct the payload string (URL encoded)
        // Simulate what PayUNi sends back in EncryptedInfo
        const tradeInfo: Record<string, string | number> = {
            Status: status,
            Message: message,
            MerTradeNo: tempOrderId,
            TradeNo: 'SIM' + Date.now(), // Simulated PayUNi Trade No
            TradeAmt: amount || 2000,
            PaymentType: 'CREDIT',
            TradeTime: new Date().toISOString(),
        };

        const queryString = Object.entries(tradeInfo)
            .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
            .join('&');

        // 2. Encrypt
        const encryptInfo = aesEncrypt(queryString, config.hashKey, config.hashIV);

        // 3. Hash
        const hashInfo = generateHash(encryptInfo, config.hashKey, config.hashIV);

        // 4. Send to real notify endpoint
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        const notifyUrl = `${baseUrl}/api/payuni/notify`;

        console.log(`Simulating webhook to: ${notifyUrl}`);

        const formData = new FormData();
        formData.append('MerID', config.merchantId);
        formData.append('EncryptInfo', encryptInfo);
        formData.append('HashInfo', hashInfo);

        const response = await fetch(notifyUrl, {
            method: 'POST',
            body: formData,
        });

        const resultText = await response.text();
        let resultJson;
        try {
            resultJson = JSON.parse(resultText);
        } catch {
            resultJson = { text: resultText };
        }

        return NextResponse.json({
            success: response.ok,
            simulatedPayload: tradeInfo,
            notifyResponse: {
                status: response.status,
                data: resultJson
            }
        });

    } catch (error: any) {
        console.error('Simulation error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
