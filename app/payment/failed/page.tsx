'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { XCircle, ArrowLeft, RefreshCw, Loader2, HelpCircle } from 'lucide-react';

function PaymentFailedContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order');
    const message = searchParams.get('message');
    const isSandbox = searchParams.get('sandbox') === '1';

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
                    付款未成功
                </h1>

                <p className="text-white/60 mb-6">
                    很抱歉，您的付款未能完成。<br />
                    請確認付款資訊後再試一次。
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
                        <p className="text-white/40 text-xs mb-1">訂單編號</p>
                        <p className="text-white font-mono text-sm">{orderId}</p>
                    </div>
                )}

                {/* 沙盒模式提示 */}
                {isSandbox && (
                    <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                        <p className="text-yellow-300 text-sm font-medium">🧪 沙盒測試模式</p>
                        <p className="text-yellow-300/60 text-xs mt-1">
                            這是測試環境的付款失敗結果
                        </p>
                    </div>
                )}

                {/* 可能原因 */}
                <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-xl text-left">
                    <p className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        可能原因
                    </p>
                    <ul className="text-white/50 text-xs space-y-2">
                        <li>• 信用卡餘額不足或已達上限</li>
                        <li>• 信用卡資訊輸入錯誤</li>
                        <li>• 銀行拒絕交易（請聯繫發卡銀行）</li>
                        <li>• 網路連線中斷</li>
                    </ul>
                </div>

                {/* 按鈕 */}
                <div className="space-y-3">
                    <Link
                        href="/dashboard/pricing"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-600/20"
                    >
                        <RefreshCw className="w-5 h-5" />
                        重新購買
                    </Link>

                    <Link
                        href="/dashboard"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white/80 font-medium rounded-xl hover:bg-white/20 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        返回主頁
                    </Link>
                </div>

                {/* 聯絡客服 */}
                <p className="mt-8 text-white/30 text-xs">
                    如需協助，請聯繫客服：support@styleprompts.com
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
