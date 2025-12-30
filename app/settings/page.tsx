'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Settings, User, Bell, Shield, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { AuthProvider } from '@/components/providers/AuthProvider';

const SettingsContent: React.FC = () => {
    const { user, loading, signOut } = useAuth();
    const [isSaving, setIsSaving] = useState(false);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030303] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">請先登入</h1>
                    <p className="text-white/60 mb-6">您需要登入才能存取設定</p>
                    <Link
                        href="/pro"
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-colors"
                    >
                        前往登入
                    </Link>
                </div>
            </div>
        );
    }

    const handleSave = async () => {
        setIsSaving(true);
        // TODO: 實作設定儲存邏輯
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
    };

    const settingSections = [
        {
            icon: User,
            title: '個人資料',
            description: '管理您的帳戶資訊',
            items: [
                { label: '電子郵件', value: user.email || '未設定', readonly: true },
                { label: '顯示名稱', value: user.user_metadata?.name || '未設定' },
            ],
        },
        {
            icon: Bell,
            title: '通知設定',
            description: '管理電子郵件和推播通知',
            items: [
                { label: '產品更新通知', type: 'toggle', enabled: true },
                { label: '行銷資訊', type: 'toggle', enabled: false },
            ],
        },
        {
            icon: Shield,
            title: '安全性',
            description: '管理密碼和登入設定',
            items: [
                { label: '變更密碼', type: 'button', action: () => { } },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Header */}
            <header className="border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <Link href="/pro" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        返回
                    </Link>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <Settings className="w-6 h-6 text-purple-400" />
                        設定
                    </h1>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="space-y-8">
                    {settingSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <section.icon className="w-5 h-5 text-purple-400" />
                                <div>
                                    <h3 className="font-semibold">{section.title}</h3>
                                    <p className="text-sm text-white/50">{section.description}</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-8">
                                {section.items.map((item) => (
                                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                        <span className="text-white/70">{item.label}</span>
                                        {'value' in item && (
                                            <span className="text-white/50">{item.value}</span>
                                        )}
                                        {'enabled' in item && (
                                            <button className={`w-10 h-6 rounded-full transition-colors ${item.enabled ? 'bg-purple-600' : 'bg-white/10'}`}>
                                                <span className={`block w-4 h-4 bg-white rounded-full transition-transform mx-1 ${item.enabled ? 'translate-x-4' : ''}`} />
                                            </button>
                                        )}
                                        {'action' in item && (
                                            <button className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                                                變更
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    儲存中...
                                </>
                            ) : (
                                '儲存變更'
                            )}
                        </button>
                        <button
                            onClick={signOut}
                            className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl font-semibold transition-colors"
                        >
                            登出
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default function SettingsPage() {
    return (
        <AuthProvider>
            <SettingsContent />
        </AuthProvider>
    );
}
