/**
 * PayUNi 金流測試頁面
 * 用於測試 PayUNi API 串接功能
 */
'use client';

import { useState } from 'react';

export default function PayuniTestPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        success?: boolean;
        error?: string;
        orderId?: string;
        formAction?: string;
        formData?: Record<string, string>;
    } | null>(null);

    const handleCreateOrder = async () => {
        if (!email) {
            setResult({ error: '請輸入 Email' });
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('/api/payuni/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                setResult({ error: data.error || '建立訂單失敗' });
                return;
            }

            setResult(data);
        } catch (err) {
            setResult({ error: '發生錯誤，請稍後再試' });
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitToPayuni = () => {
        if (!result?.formAction || !result?.formData) return;

        // 建立隱藏的 form 並提交到 PayUNi
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = result.formAction;
        form.target = '_blank';

        Object.entries(result.formData).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        PayUNi 金流測試頁面
                    </h1>
                    <p className="text-gray-600 mb-8">
                        測試環境 - 用於驗證 PayUNi 統一金流串接功能
                    </p>

                    {/* 測試表單 */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                購買者 Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                                請使用已在系統中註冊的 Email
                            </p>
                        </div>

                        <button
                            onClick={handleCreateOrder}
                            disabled={loading}
                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? '處理中...' : '1. 建立測試訂單'}
                        </button>
                    </div>

                    {/* 訂單結果 */}
                    {result && (
                        <div className="mt-8">
                            {result.error ? (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-700">❌ {result.error}</p>
                                </div>
                            ) : result.success ? (
                                <div className="space-y-4">
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-700">✅ 訂單建立成功</p>
                                        <p className="text-sm text-green-600 mt-1">
                                            訂單編號：{result.orderId}
                                        </p>
                                    </div>

                                    {/* Form Data 顯示 */}
                                    <div className="p-4 bg-gray-100 rounded-lg">
                                        <h3 className="font-medium text-gray-900 mb-2">
                                            加密後的表單資料 (EncryptInfo)
                                        </h3>
                                        <pre className="text-xs text-gray-600 overflow-auto max-h-32 bg-white p-2 rounded">
                                            {JSON.stringify(result.formData, null, 2)}
                                        </pre>
                                    </div>

                                    <button
                                        onClick={handleSubmitToPayuni}
                                        className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                                    >
                                        2. 前往 PayUNi 付款頁面 →
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    )}

                    {/* 說明 */}
                    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-medium text-blue-900 mb-2">測試說明</h3>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• 這是 PayUNi 測試環境，不會產生實際扣款</li>
                            <li>• 測試信用卡號：4311-9522-2222-2222</li>
                            <li>• 安全碼：任意三碼 / 有效期限：任意未過期日期</li>
                            <li>• 成功付款後會導回並顯示結果</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
