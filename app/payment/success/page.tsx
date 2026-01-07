'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Crown, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';

export default function PaymentSuccessPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order');
    const { user, isPro, loading } = useAuth();

    const [countdown, setCountdown] = useState(5);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // 倒數計時
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    // 刷新 session 取得最新的 Pro 狀態
    useEffect(() => {
        const refreshProStatus = async () => {
            if (!loading && user && !isPro && !isRefreshing) {
                setIsRefreshing(true);
                // 等待 notify webhook 處理，然後刷新頁面
                await new Promise(resolve => setTimeout(resolve, 3000));
                window.location.reload();
            }
        };
        refreshProStatus();
    }, [loading, user, isPro, isRefreshing]);

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
                    {loading ? (
                        <div className="flex items-center justify-center gap-2 text-purple-300">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>正在確認 Pro 狀態...</span>
                        </div>
                    ) : isPro ? (
                        <div className="flex items-center justify-center gap-2 text-purple-300">
                            <Crown className="w-5 h-5" />
                            <span className="font-bold">Pro 版本已啟用！</span>
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
