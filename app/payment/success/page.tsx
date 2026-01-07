'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Crown, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { supabase } from '@/lib/supabaseClient';
import { useTranslation } from 'react-i18next';

function PaymentSuccessContent() {
    const { t } = useTranslation();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order');
    const status = searchParams.get('status'); // 新增：取得實際狀態
    const { isPro, loading, refreshSession } = useAuth();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [refreshCount, setRefreshCount] = useState(0);

    // 自動刷新 session 以獲取最新的 Pro 狀態
    useEffect(() => {
        const refreshProStatus = async () => {
            // 如果已經是 Pro，不需要刷新
            if (isPro || loading || isRefreshing) return;

            // 最多嘗試 3 次
            if (refreshCount >= 3) return;

            setIsRefreshing(true);
            console.log('[PaymentSuccess] 刷新 session 以獲取 Pro 狀態... 嘗試', refreshCount + 1);

            try {
                // 使用 refreshSession 來更新 session
                if (refreshSession) {
                    await refreshSession();
                } else {
                    // 備用方案：直接使用 supabase 刷新
                    await supabase.auth.refreshSession();
                }

                // 等待一下再檢查
                await new Promise(resolve => setTimeout(resolve, 1500));
                setRefreshCount(prev => prev + 1);
            } catch (error) {
                console.error('[PaymentSuccess] 刷新 session 失敗:', error);
            }

            setIsRefreshing(false);
        };

        // 延遲一下再開始刷新，給後端時間處理
        const timeout = setTimeout(refreshProStatus, 2000);
        return () => clearTimeout(timeout);
    }, [isPro, loading, isRefreshing, refreshCount, refreshSession]);

    return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {/* 成功動畫 */}
                <div className="relative mb-8">
                    {/* 光暈效果 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
                    </div>
                    <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                </div>

                {/* 標題 */}
                <h1 className="text-3xl font-bold text-white mb-4">
                    {t('payment.success.title')}
                </h1>

                <p className="text-white/60 mb-6 whitespace-pre-line">
                    {t('payment.success.subtitle')}
                </p>

                {/* 訂單編號 */}
                {orderId && (
                    <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-white/40 text-xs mb-1">{t('payment.success.orderId')}</p>
                        <p className="text-white font-mono text-sm">{orderId}</p>
                    </div>
                )}

                {/* Pro 狀態 */}
                <div className="mb-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    {loading || isRefreshing ? (
                        <div className="flex items-center justify-center gap-2 text-purple-300">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>{t('payment.success.syncing')}</span>
                        </div>
                    ) : isPro ? (
                        <div className="flex items-center justify-center gap-2 text-green-400">
                            <Crown className="w-5 h-5" />
                            <span className="font-bold">{t('payment.success.proActivated')}</span>
                        </div>
                    ) : refreshCount >= 3 ? (
                        <div className="flex flex-col items-center gap-2 text-yellow-300">
                            <span className="font-bold">{t('payment.success.syncingTitle')}</span>
                            <span className="text-xs text-yellow-300/60">{t('payment.success.syncingDesc')}</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2 text-yellow-300">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>{t('payment.success.processing')}</span>
                        </div>
                    )}
                </div>

                {/* 按鈕 */}
                <div className="space-y-3">
                    <Link
                        href="/pro/S01"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-600/20"
                    >
                        <Sparkles className="w-5 h-5" />
                        {t('payment.success.startUsing')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/dashboard/purchases"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white/80 font-medium rounded-xl hover:bg-white/20 transition-all"
                    >
                        {t('payment.success.viewHistory')}
                    </Link>
                </div>

                {/* 提示 */}
                <p className="mt-8 text-white/30 text-xs">
                    {t('payment.success.tip')}
                </p>
            </div>
        </div>
    );
}

// Loading fallback
function LoadingFallback() {
    return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <PaymentSuccessContent />
        </Suspense>
    );
}
