'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Crown, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { supabase } from '@/lib/supabaseClient';

function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order');
    const isSandbox = searchParams.get('sandbox') === '1';
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
                    🎉 付款成功！
                </h1>

                <p className="text-white/60 mb-6">
                    感謝您購買 StylePrompts Pro！<br />
                    您現在擁有所有 Pro 功能的存取權限。
                </p>

                {/* 訂單編號 */}
                {orderId && (
                    <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-white/40 text-xs mb-1">訂單編號</p>
                        <p className="text-white font-mono text-sm">{orderId}</p>
                    </div>
                )}

                {/* Pro 狀態 */}
                <div className="mb-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    {loading || isRefreshing ? (
                        <div className="flex items-center justify-center gap-2 text-purple-300">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>正在同步 Pro 狀態...</span>
                        </div>
                    ) : isPro ? (
                        <div className="flex items-center justify-center gap-2 text-green-400">
                            <Crown className="w-5 h-5" />
                            <span className="font-bold">Pro 版本已啟用！</span>
                        </div>
                    ) : isSandbox ? (
                        <div className="flex flex-col items-center gap-2 text-green-400">
                            <div className="flex items-center gap-2">
                                <Crown className="w-5 h-5" />
                                <span className="font-bold">沙箱測試完成</span>
                            </div>
                            <span className="text-xs text-green-400/60">Pro 功能已啟用（沙盒模式）</span>
                        </div>
                    ) : refreshCount >= 3 ? (
                        <div className="flex flex-col items-center gap-2 text-yellow-300">
                            <span className="font-bold">Pro 狀態同步中</span>
                            <span className="text-xs text-yellow-300/60">請重新整理頁面或重新登入</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2 text-yellow-300">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>正在處理升級，請稍候...</span>
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
                        開始使用 Pro 功能
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/dashboard/purchases"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white/80 font-medium rounded-xl hover:bg-white/20 transition-all"
                    >
                        查看購買紀錄
                    </Link>
                </div>

                {/* 提示 */}
                <p className="mt-8 text-white/30 text-xs">
                    如果 Pro 狀態未自動更新，請嘗試登出後重新登入。
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

