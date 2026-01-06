/**
 * PayUNi 直接測試頁面
 * 產生一個純 HTML 表單直接 POST 到 PayUNi
 */
'use client';

import { useState, useEffect } from 'react';

interface FormPostData {
    action: string;
    MerID: string;
    Version: string;
    EncryptInfo: string;
    HashInfo: string;
}

export default function PayuniDirectTestPage() {
    const [formData, setFormData] = useState<FormPostData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchFormData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/debug/payuni-diagnose');
            const data = await res.json();
            if (data.formPost) {
                setFormData(data.formPost);
            } else {
                setError(data.error || 'Failed to get form data');
            }
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1>PayUNi 直接表單測試</h1>
            <p style={{ color: '#666' }}>
                此頁面會產生一個純 HTML 表單，直接 POST 到 PayUNi，繞過任何 JavaScript 問題。
            </p>

            <button
                onClick={fetchFormData}
                disabled={loading}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginBottom: '20px'
                }}
            >
                {loading ? '載入中...' : '1. 點擊產生表單資料'}
            </button>

            {error && (
                <div style={{ padding: '12px', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '4px', marginBottom: '20px' }}>
                    錯誤: {error}
                </div>
            )}

            {formData && (
                <div>
                    <h2>表單資料已產生</h2>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', marginBottom: '20px', fontSize: '12px', fontFamily: 'monospace' }}>
                        <p><strong>Action:</strong> {formData.action}</p>
                        <p><strong>MerID:</strong> {formData.MerID}</p>
                        <p><strong>Version:</strong> {formData.Version}</p>
                        <p><strong>EncryptInfo:</strong> {formData.EncryptInfo.substring(0, 50)}...</p>
                        <p><strong>HashInfo:</strong> {formData.HashInfo}</p>
                    </div>

                    {/* 純 HTML 表單 */}
                    <form
                        method="POST"
                        action={formData.action}
                        style={{ marginTop: '20px' }}
                    >
                        <input type="hidden" name="MerID" value={formData.MerID} />
                        <input type="hidden" name="Version" value={formData.Version} />
                        <input type="hidden" name="EncryptInfo" value={formData.EncryptInfo} />
                        <input type="hidden" name="HashInfo" value={formData.HashInfo} />

                        <button
                            type="submit"
                            style={{
                                padding: '16px 32px',
                                fontSize: '18px',
                                backgroundColor: '#2196F3',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            2. 點擊此按鈕跳轉到 PayUNi 結帳頁
                        </button>
                    </form>

                    <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
                        如果點擊後還是無法跳轉，可能是 PayUNi 伺服器端的問題。
                        請檢查瀏覽器開發者工具 (F12) → Network 頁籤，看看 POST 請求的回應狀態。
                    </p>
                </div>
            )}
        </div>
    );
}
