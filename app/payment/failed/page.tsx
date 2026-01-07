'use client';

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { XCircle, ArrowLeft, RefreshCw, Loader2, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function PaymentFailedContent() {
    const { t } = useTranslation();
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get('order');
    const message = searchParams.get('message');
    const [isCleaningUp, setIsCleaningUp] = useState(false);

    // 重新購買：清理該訂單後導向購買頁
    const handleRepurchase = async () => {
        if (!orderId) {
            router.push('/dashboard/pricing');
            return;
        }

        setIsCleaningUp(true);
        try {
            console.log('[PaymentFailed] 清理訂單:', orderId);
            await fetch('/api/payuni/cleanup-expired', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderId, action: 'delete' }),
            });
        } catch (error) {
            console.error('[PaymentFailed] 清理訂單失敗:', error);
        }

        // 無論成功失敗都導向購買頁
        router.push('/dashboard/pricing');
    };

    return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {/* 失敗動畫 */}
                <div className="relative mb-8">
                    {/* 光暈效果 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
                    </div>
                    <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30">
                        <XCircle className="w-12 h-12 text-white" />
                    </div>
                </div>

                {/* 標題 */}
                <h1 className="text-3xl font-bold text-white mb-4">
                    {t('payment.failed.title')}
                </h1>

                <p className="text-white/60 mb-6 whitespace-pre-line">
                    {t('payment.failed.subtitle')}
                </p>

                {/* 錯誤訊息 */}
                {message && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                        <p className="text-red-300/80 text-sm">{decodeURIComponent(message)}</p>
                    </div>
                )}

                {/* 訂單編號 */}
                {orderId && (
                    <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-white/40 text-xs mb-1">{t('payment.failed.orderId')}</p>
                        <p className="text-white font-mono text-sm">{orderId}</p>
                    </div>
                )}

                {/* 可能原因 */}
                <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-xl text-left">
                    <p className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        {t('payment.failed.possibleCauses')}
                    </p>
                    <ul className="text-white/50 text-xs space-y-2">
                        <li>• {t('payment.failed.cause1')}</li>
                        <li>• {t('payment.failed.cause2')}</li>
                        <li>• {t('payment.failed.cause3')}</li>
                        <li>• {t('payment.failed.cause4')}</li>
                    </ul>
                </div>

                {/* 按鈕 */}
                <div className="space-y-3">
                    <button
                        onClick={handleRepurchase}
                        disabled={isCleaningUp}
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-600/20 disabled:opacity-50"
                    >
                        {isCleaningUp ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <RefreshCw className="w-5 h-5" />
                        )}
                        {isCleaningUp ? t('payment.failed.processing') : t('payment.failed.repay')}
                    </button>

                    <Link
                        href="/dashboard"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white/80 font-medium rounded-xl hover:bg-white/20 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t('payment.failed.backHome')}
                    </Link>
                </div>

                {/* 聯絡客服 */}
                <p className="mt-8 text-white/30 text-xs">
                    {t('payment.failed.contactSupport')}
                </p>
            </div>
        </div>
    );
}

// Loading fallback
function LoadingFallback() {
    return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-red-400" />
        </div>
    );
}

export default function PaymentFailedPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <PaymentFailedContent />
        </Suspense>
    );
}
