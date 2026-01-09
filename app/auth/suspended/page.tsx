'use client';

import React, { useEffect } from 'react';
import { Ban, Mail, ArrowLeft, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { useAccountStatusPolling } from '@/hooks/useAccountStatusPolling';

export default function AccountSuspendedPage() {
    const { user, signOut, loading } = useAuth();
    const router = useRouter();
    
    // 使用統一的帳戶狀態輪詢 hook
    const { status: accountStatus, isChecking, lastChecked } = useAccountStatusPolling(user?.id);

    // 根據帳戶狀態重導向
    useEffect(() => {
        if (!loading && user) {
            if (accountStatus === 'active') {
                router.replace('/');
            } else if (accountStatus === 'pending_deletion' || accountStatus === 'deleted') {
                router.replace('/auth/deleted');
            }
        }
    }, [loading, user, accountStatus, router]);

    return (
        <div className="min-h-screen bg-[#020202] flex items-center justify-center p-4">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative w-full max-w-md">
                <div className="bg-white/[0.02] border border-red-500/20 rounded-2xl p-8 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                        <Ban className="w-10 h-10 text-red-400" />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-white mb-2">
                        帳戶已被停用
                    </h1>
                    <p className="text-white/60 mb-6">
                        您的帳戶目前已被管理員停用，無法使用資源庫功能。
                    </p>

                    {/* User Info */}
                    {user && (
                        <div className="p-4 bg-white/5 rounded-xl mb-6">
                            <p className="text-sm text-white/40 mb-1">登入帳號</p>
                            <p className="text-white font-medium">{user.email}</p>
                        </div>
                    )}

                    {/* Info Box */}
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mb-6 text-left">
                        <p className="text-sm text-yellow-200/80">
                            <strong className="text-yellow-300">為什麼會發生這種情況？</strong>
                            <br />
                            帳戶可能因違反使用條款或其他原因被停用。如果您認為這是一個錯誤，請聯絡我們的支援團隊。
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <a
                            href="mailto:support@styleprompts.com?subject=帳戶停用申訴"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            聯絡支援團隊
                        </a>

                        <button
                            onClick={() => signOut()}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white/70 font-medium rounded-xl transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            登出帳號
                        </button>
                    </div>

                    {/* 自動檢查提示 */}
                    <div className="text-center text-white/40 text-xs mt-4 flex items-center justify-center gap-2">
                        {isChecking && <Loader2 className="w-3 h-3 animate-spin" />}
                        <span>
                            系統每 1 分鐘自動檢查帳戶狀態
                            {lastChecked && (
                                <span className="ml-1 text-white/30">
                                    （上次：{lastChecked.toLocaleTimeString('zh-TW')}）
                                </span>
                            )}
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-white/30 text-xs mt-6">
                    如有任何問題，請發送郵件至 support@styleprompts.com
                </p>
            </div>
        </div>
    );
}
