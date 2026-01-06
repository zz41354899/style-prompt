/**
 * PayUNi 統一金流 API 工具庫
 * 用於處理 AES 加解密、交易請求建立與回傳驗證
 */
import crypto from 'crypto';

// ============== 型別定義 ==============

/** PayUNi 設定 */
export interface PayuniConfig {
    merchantId: string;
    hashKey: string;
    hashIV: string;
    apiUrl: string;
}

/** 交易請求參數 */
export interface PayuniOrderParams {
    /** 訂單編號（唯一） */
    orderId: string;
    /** 交易金額（新台幣整數） */
    amount: number;
    /** 商品名稱 */
    productName: string;
    /** 購買者 Email */
    email: string;
    /** 購買者姓名（可選） */
    userName?: string;
    /** 交易完成後導回網址 */
    returnUrl: string;
    /** 背景通知網址 */
    notifyUrl: string;
}

/** PayUNi 加密後的請求資料 */
export interface PayuniEncryptedRequest {
    MerID: string;
    Version: string;
    EncryptInfo: string;
    HashInfo: string;
}

/** PayUNi 回傳通知的原始資料 */
export interface PayuniNotifyRaw {
    MerID: string;
    EncryptInfo: string;
    HashInfo: string;
}

/** PayUNi 解密後的交易結果 */
export interface PayuniDecryptedResult {
    /** 交易狀態 (SUCCESS = 成功) */
    Status: string;
    /** 交易訊息 */
    Message: string;
    /** 商店訂單編號 */
    MerTradeNo: string;
    /** PayUNi 交易編號 */
    TradeNo: string;
    /** 交易金額 */
    TradeAmt: number;
    /** 付款方式 */
    PaymentType: string;
    /** 交易時間 */
    TradeTime: string;
    /** 卡號後四碼 */
    Card4No?: string;
    /** 其他欄位 */
    [key: string]: unknown;
}

// ============== 加解密函式 ==============

/**
 * 取得 PayUNi 設定（從環境變數）
 */
export function getPayuniConfig(): PayuniConfig {
    const merchantId = process.env.PAYUNI_MERCHANT_ID;
    const hashKey = process.env.PAYUNI_HASH_KEY;
    const hashIV = process.env.PAYUNI_HASH_IV;
    const apiUrl = process.env.PAYUNI_API_URL || 'https://sandbox-api.payuni.com.tw/api/upp';

    if (!merchantId || !hashKey || !hashIV) {
        throw new Error('PayUNi 設定缺失，請檢查環境變數');
    }

    return { merchantId, hashKey, hashIV, apiUrl };
}

/**
 * AES-256-GCM 加密 (PayUNi 官方規格)
 * 輸出格式: hex(encrypted + ':::' + base64(authTag))
 * @param data - 要加密的資料（URL encoded query string）
 * @param key - Hash Key
 * @param iv - Hash IV
 */
export function aesEncrypt(data: string, key: string, iv: string): string {
    const keyBuffer = Buffer.from(key.trim(), 'utf8');
    const ivBuffer = Buffer.from(iv.trim(), 'utf8');

    const cipher = crypto.createCipheriv('aes-256-gcm', keyBuffer, ivBuffer);
    let encrypted = cipher.update(data, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    const authTag = cipher.getAuthTag();

    // PHP openssl_encrypt 預設輸出 base64，所以格式是:
    // hex( base64(encrypted) + ':::' + base64(authTag) )
    const encryptedBase64 = encrypted.toString('base64');
    const tagBase64 = authTag.toString('base64');
    const combined = encryptedBase64 + ':::' + tagBase64;

    return Buffer.from(combined, 'utf8').toString('hex');
}

/**
 * AES-256-GCM 解密 (PayUNi 官方規格)
 * 輸入格式: hex(base64(encrypted) + ':::' + base64(authTag))
 * @param encryptedData - 加密後的 hex 字串
 * @param key - Hash Key
 * @param iv - Hash IV
 */
export function aesDecrypt(encryptedData: string, key: string, iv: string): string {
    const keyBuffer = Buffer.from(key.trim(), 'utf8');
    const ivBuffer = Buffer.from(iv.trim(), 'utf8');

    // 將 hex 轉回 utf8 字串
    const combinedString = Buffer.from(encryptedData, 'hex').toString('utf8');

    // 分離加密資料和 authTag (都是 base64 格式)
    const [encryptedBase64, tagBase64] = combinedString.split(':::');

    if (!encryptedBase64 || !tagBase64) {
        throw new Error('EncryptInfo 格式錯誤，無法分離加密資料和 authTag');
    }

    const encryptedBuffer = Buffer.from(encryptedBase64, 'base64');
    const authTag = Buffer.from(tagBase64, 'base64');

    const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, ivBuffer);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString('utf8');
}

/**
 * 產生 SHA256 Hash（用於 HashInfo 驗證）
 * PayUNi 格式: Key + EncryptInfo + IV (無等號！)
 * @param encryptInfo - 加密後的資料
 * @param key - Hash Key
 * @param iv - Hash IV
 */
export function generateHash(encryptInfo: string, key: string, iv: string): string {
    // PayUNi 官方格式: merKey + encryptInfo + merIV (直接連接，沒有等號)
    const hashString = key + encryptInfo + iv;
    return crypto.createHash('sha256').update(hashString).digest('hex').toUpperCase();
}

// ============== 交易請求建立 ==============

/**
 * 建立交易請求（用於導向 PayUNi 付款頁）
 * @param params - 交易參數
 */
export function createOrderRequest(params: PayuniOrderParams): PayuniEncryptedRequest {
    const config = getPayuniConfig();

    // 組建交易參數（依 PayUNi API 規格）
    const tradeInfo: Record<string, string | number> = {
        MerID: config.merchantId,
        MerTradeNo: params.orderId,
        TradeAmt: params.amount,
        ProdDesc: params.productName,
        Timestamp: Math.floor(Date.now() / 1000), // int 類型，不要轉 string
        // 付款方式設定
        Credit: 1, // 開啟信用卡
    };

    // 加入 URL 參數
    if (params.returnUrl) {
        tradeInfo.ReturnURL = params.returnUrl;
    }
    if (params.notifyUrl) {
        tradeInfo.NotifyURL = params.notifyUrl;
    }

    // 加入購買者資訊 (使用正確的參數名稱)
    if (params.email) {
        tradeInfo.UsrMail = params.email;
    }

    // 將參數轉為 URL encoded query string
    const queryString = Object.entries(tradeInfo)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join('&');

    // AES 加密
    const encryptInfo = aesEncrypt(queryString, config.hashKey, config.hashIV);

    // 產生 Hash 驗證碼
    const hashInfo = generateHash(encryptInfo, config.hashKey, config.hashIV);

    return {
        MerID: config.merchantId,
        Version: '1.0',
        EncryptInfo: encryptInfo,
        HashInfo: hashInfo,
    };
}

// ============== 回傳驗證 ==============

/**
 * 驗證並解密 PayUNi 回傳資料
 * @param notifyData - PayUNi 回傳的原始資料
 */
export function verifyAndDecrypt(notifyData: PayuniNotifyRaw): PayuniDecryptedResult {
    const config = getPayuniConfig();

    // 驗證商店代號
    if (notifyData.MerID !== config.merchantId) {
        throw new Error('商店代號不符');
    }

    // 驗證 Hash
    const expectedHash = generateHash(notifyData.EncryptInfo, config.hashKey, config.hashIV);
    if (notifyData.HashInfo !== expectedHash) {
        throw new Error('Hash 驗證失敗');
    }

    // 解密資料
    const decryptedString = aesDecrypt(notifyData.EncryptInfo, config.hashKey, config.hashIV);

    // 解析 URL encoded 資料
    const params = new URLSearchParams(decryptedString);
    const result: PayuniDecryptedResult = {
        Status: params.get('Status') || '',
        Message: params.get('Message') || '',
        MerTradeNo: params.get('MerTradeNo') || '',
        TradeNo: params.get('TradeNo') || '',
        TradeAmt: parseInt(params.get('TradeAmt') || '0', 10),
        PaymentType: params.get('PaymentType') || '',
        TradeTime: params.get('TradeTime') || '',
        Card4No: params.get('Card4No') || undefined,
    };

    // 保留其他欄位
    params.forEach((value, key) => {
        if (!(key in result)) {
            result[key] = value;
        }
    });

    return result;
}

/**
 * 檢查交易是否成功
 * @param result - 解密後的交易結果
 */
export function isTransactionSuccessful(result: PayuniDecryptedResult): boolean {
    return result.Status === 'SUCCESS';
}

/**
 * 產生唯一訂單編號
 * 格式：SP + 時間戳 + 隨機碼
 */
export function generateOrderId(): string {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = crypto.randomBytes(4).toString('hex').toUpperCase();
    return `SP${timestamp}${random}`;
}
