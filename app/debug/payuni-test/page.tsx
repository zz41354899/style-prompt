/**
 * PayUNi 金流測試頁面
 * 使用 UPP (整合式支付頁) 模式 - 建立訂單後自動跳轉
 */
'use client';

import { useState } from 'react';

export default function PayuniTestPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        success?: boolean;
        error?: string;
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
                setLoading(false);
                return;
            }

            // 取得加密資料後，立即執行表單提交跳轉
            if (data.formAction && data.formData) {
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = data.formAction;

                Object.entries(data.formData).forEach(([key, value]) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = String(value);
                    form.appendChild(input);
                });

                document.body.appendChild(form);
                form.submit();
            } else {
                setResult(data);
                setLoading(false);
            }
        } catch (err) {
            setResult({ error: '發生錯誤，請稍後再試' });
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        PayUNi 金流測試頁面 (API 模式)
                    </h1>
                    <p className="text-gray-600 mb-8">
                        測試環境 - 使用 UPP 整合式支付頁 API 串接
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
                        </div>

                        <button
                            onClick={handleCreateOrder}
                            disabled={loading}
                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? '處理中...' : '🛒 點擊此按鈕直接前往結帳'}
                        </button>
                    </div>

                    {/* 錯誤結果顯示 */}
                    {result?.error && (
                        <div className="mt-8">
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-700">❌ {result.error}</p>
                            </div>
                        </div>
                    )}

                    {/* 說明 */}
                    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-medium text-blue-900 mb-2">測試說明</h3>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• 按下按鈕後，伺服器會使用您的 Hash Key/IV 進行加密</li>
                            <li>• 測試信用卡號：4311-9522-2222-2222</li>
                            <li>• 安全碼：任意三碼 / 有效期限：任意未過期日期</li>
                        </ul>
                    </div>

                    <div className="my-8 border-t border-gray-200" />

                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        Simulate Webhook (Notify URL)
                    </h2>
                    <p className="text-gray-600 mb-4">
                        模擬 PayUNi 伺服器回傳通知（用於測試 Notify API 與 DB 更新）
                    </p>

                    <SimulationForm />
                </div>
            </div>
        </div>
    );
}

function SimulationForm() {
    const [tempOrderId, setTempOrderId] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSimulate = async () => {
        if (!tempOrderId) {
            alert('請輸入 PayUNi Order ID (MerTradeNo)');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/debug/payuni-simulate-notify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tempOrderId })
            });
            const data = await res.json();
            setResult(data);
        } catch (e) {
            console.error(e);
            alert('Error simulating');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    訂單編號 (MerTradeNo)
                </label>
                <input
                    type="text"
                    value={tempOrderId}
                    onChange={e => setTempOrderId(e.target.value)}
                    placeholder="e.g. SP..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <p className="text-xs text-gray-500 mt-1">
                    請輸入資料庫中現有的 pending 訂單編號
                </p>
            </div>
            <button
                onClick={handleSimulate}
                disabled={loading}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
                {loading ? 'Simulating...' : 'Simulate Notify'}
            </button>

            {result && (
                <div className="mt-4 text-xs font-mono bg-black text-green-400 p-4 rounded overflow-auto max-h-60">
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
