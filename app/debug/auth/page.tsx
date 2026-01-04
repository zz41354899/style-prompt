'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

export default function DebugAuthPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);

            if (user) {
                console.log('=== DEBUG AUTH INFO ===');
                console.log('User ID:', user.id);
                console.log('Email:', user.email);
                console.log('app_metadata:', user.app_metadata);
                console.log('Role:', user.app_metadata?.role);
                console.log('======================');
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-black text-white p-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">❌ 未登入</h1>
                    <p className="text-white/60">請先登入</p>
                    <a href="/pro/login" className="inline-block mt-4 px-4 py-2 bg-purple-500 rounded-lg">
                        前往登入
                    </a>
                </div>
            </div>
        );
    }

    const role = user.app_metadata?.role;
    const isAdmin = role === 'admin';

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold mb-8">🔍 認證狀態診斷</h1>

                {/* 使用者資訊 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">使用者資訊</h2>
                    <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                            <span className="text-white/60">Email:</span>
                            <span>{user.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/60">User ID:</span>
                            <span className="text-xs">{user.id}</span>
                        </div>
                    </div>
                </div>

                {/* 角色狀態 */}
                <div className={`border rounded-xl p-6 ${isAdmin
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                    }`}>
                    <h2 className="text-xl font-semibold mb-4">角色狀態</h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">當前角色:</span>
                            <span className={`px-3 py-1 rounded-lg font-medium ${isAdmin
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-red-500/20 text-red-400'
                                }`}>
                                {role || 'undefined'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">是否為 Admin:</span>
                            <span className={isAdmin ? 'text-green-400' : 'text-red-400'}>
                                {isAdmin ? '✅ 是' : '❌ 否'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* app_metadata 完整資訊 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">app_metadata (完整)</h2>
                    <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-xs">
                        {JSON.stringify(user.app_metadata, null, 2)}
                    </pre>
                </div>

                {/* 診斷建議 */}
                {!isAdmin && (
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-orange-400">⚠️ 診斷建議</h2>
                        <div className="space-y-3 text-sm">
                            {!role && (
                                <div>
                                    <p className="font-semibold text-orange-400">問題：role 為 undefined</p>
                                    <p className="text-white/60 mt-1">
                                        您的帳號尚未設定角色。請在 Supabase Dashboard 執行 SQL 腳本。
                                    </p>
                                </div>
                            )}
                            {role && role !== 'admin' && (
                                <div>
                                    <p className="font-semibold text-orange-400">問題：role 不是 admin</p>
                                    <p className="text-white/60 mt-1">
                                        您的角色是 <code className="bg-black/50 px-2 py-0.5 rounded">{role}</code>，需要改為 admin。
                                    </p>
                                </div>
                            )}
                            <div className="border-t border-white/10 pt-3 mt-3">
                                <p className="font-semibold mb-2">解決步驟：</p>
                                <ol className="list-decimal list-inside space-y-1 text-white/80">
                                    <li>前往 Supabase Dashboard → SQL Editor</li>
                                    <li>執行 <code className="bg-black/50 px-2 py-0.5 rounded">scripts/set-admin-role.sql</code></li>
                                    <li>確認 SQL 執行成功</li>
                                    <li><strong className="text-orange-400">登出並重新登入</strong>（重要！）</li>
                                    <li>回到此頁面檢查角色是否更新為 admin</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                )}

                {isAdmin && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-green-400">✅ 您是 Admin！</h2>
                        <p className="text-white/80 mb-4">您現在應該可以訪問 Admin 頁面了。</p>
                        <a
                            href="/pro/admin"
                            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                        >
                            前往 Admin Dashboard
                        </a>
                    </div>
                )}

                {/* 快速操作 */}
                <div className="flex gap-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        🔄 重新整理
                    </button>
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            window.location.href = '/pro/login';
                        }}
                        className="flex-1 px-4 py-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                    >
                        🚪 登出
                    </button>
                </div>
            </div>
        </div>
    );
}
