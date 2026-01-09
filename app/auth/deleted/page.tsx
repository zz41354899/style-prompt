'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, Mail, Loader2, RotateCcw, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { restoreAccount } from '@/lib/accountService';
import { useAccountStatusPolling } from '@/hooks/useAccountStatusPolling';

export default function AccountDeletedPage() {
    const { user, signOut, loading } = useAuth();
    const router = useRouter();
    const [isRestoring, setIsRestoring] = useState(false);
    const [restoreError, setRestoreError] = useState<string | null>(null);
    
    // 使用統一的帳戶狀態輪詢 hook
    const { status: accountStatus, isChecking, lastChecked } = useAccountStatusPolling(user?.id);

    // 根據帳戶狀態重導向
    useEffect(() => {
        if (!loading && user) {
            if (accountStatus === 'active') {
                router.replace('/');
            } else if (accountStatus === 'suspended') {
                router.replace('/auth/suspended');
            }
        }
    }, [loading, user, accountStatus, router]);

    // 恢復帳戶
    const handleRestore = async () => {
        if (!user?.id) return;
        
        setIsRestoring(true);
        setRestoreError(null);
        
        try {
            const { data, error } = await restoreAccount(user.id);
            if (error) {
                setRestoreError(error.message || '恢復失敗，請稍後再試');
                return;
            }
            if (data?.success) {
                router.replace('/');
            } else {
                setRestoreError(data?.message || '恢復失敗，請稍後再試');
            }
        } catch (error) {
            setRestoreError('恢復失敗，請稍後再試');
        } finally {
            setIsRestoring(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-8 h-8 text-yellow-400" />
                    </div>

                    <h1 className="text-2xl font-bold mb-3">帳戶已標記為待刪除</h1>
                    
                    <p className="text-white/60 mb-6">
                        您的帳戶已被標記為待刪除狀態。資料將保留 30 天，在此期間內您可以隨時恢復帳戶。
                    </p>

                    {/* 用戶資訊 */}
                    {user && (
                        <div className="p-4 bg-white/5 rounded-xl mb-6">
                            <p className="text-sm text-white/40 mb-1">登入帳號</p>
                            <p className="text-white font-medium">{user.email}</p>
                        </div>
                    )}

                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl mb-6 text-left">
                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-blue-200/80">
                                <p className="font-medium mb-1">如何恢復帳戶？</p>
                                <p>點擊下方「恢復帳戶」按鈕即可立即恢復您的帳戶。</p>
                            </div>
                        </div>
                    </div>

                    {/* 錯誤訊息 */}
                    {restoreError && (
                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl mb-4 text-sm text-red-400">
                            {restoreError}
                        </div>
                    )}

                    <div className="space-y-3">
                        <button
                            onClick={handleRestore}
                            disabled={isRestoring}
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-600 hover:bg-green-500 disabled:bg-green-600/50 text-white font-medium rounded-xl transition-colors"
                        >
                            {isRestoring ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <RotateCcw className="w-4 h-4" />
                            )}
                            {isRestoring ? '恢復中...' : '恢復帳戶'}
                        </button>
                        
                        <button
                            onClick={() => signOut()}
                            className="block w-full px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl transition-colors"
                        >
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

                    <p className="text-xs text-white/40 mt-4">
                        30 天後，您的帳戶將被永久刪除且無法恢復
                    </p>
                </div>
            </div>
        </div>
    );
}
