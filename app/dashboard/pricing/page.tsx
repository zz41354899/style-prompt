'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, CheckCircle2, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePurchase } from '@/hooks/usePurchase';
import { DashboardTemplateList } from '@/components/dashboard/DashboardTemplateList';

export default function DashboardPricingPage() {
    const { user } = useAuth();
    const { hasPro, loading } = usePurchase();

    const features = [
        { text: '10+ Pro 專屬風格模板', icon: Sparkles },
        { text: '完整設計系統指示詞', icon: Zap },
        { text: '未來所有更新免費', icon: Crown },
        { text: '商業使用授權', icon: Shield },
    ];

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">方案</h1>
                <p className="text-white/50 mb-8">管理您的 Pro 訂閱</p>

                {/* Current Status */}
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">目前狀態</h2>
                        {loading ? (
                            <div className="px-3 py-1 bg-white/10 text-white/50 text-sm rounded-full">
                                載入中...
                            </div>
                        ) : hasPro ? (
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                <CheckCircle2 className="w-4 h-4" />
                                Pro 已啟用
                            </div>
                        ) : (
                            <div className="px-3 py-1 bg-white/10 text-white/50 text-sm rounded-full">
                                Free
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-white/40">
                        {hasPro
                            ? '感謝您的支持！您已擁有 Pro 版所有功能。'
                            : '升級 Pro 解鎖所有進階風格和功能。'
                        }
                    </p>
                </div>

                {/* Pricing Card */}
                {!hasPro && (
                    <div className="relative mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl blur opacity-20" />
                        <div className="relative p-8 bg-[#111] border border-white/10 rounded-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Crown className="w-8 h-8 text-purple-400" />
                                <div>
                                    <h3 className="text-xl font-bold">Pro 終身授權</h3>
                                    <p className="text-sm text-white/50">一次購買，永久使用</p>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-white/40 line-through">NT$3,600</span>
                                <span className="text-4xl font-black">NT$2,000</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                {features.map((feature) => (
                                    <div key={feature.text} className="flex items-center gap-3 text-sm">
                                        <div className="p-1 bg-green-500/20 rounded">
                                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span className="text-white/80">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/api/stripe/checkout"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all"
                            >
                                立即升級
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Already Pro */}
                {hasPro && (
                    <div className="p-6 bg-purple-600/10 border border-purple-500/20 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Crown className="w-6 h-6 text-purple-400" />
                            <h3 className="font-bold">Pro 功能已解鎖</h3>
                        </div>
                        <div className="space-y-2 text-sm text-white/60">
                            {features.map((feature) => (
                                <div key={feature.text} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    {feature.text}
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/pro/S01"
                            className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            前往風格資源庫 <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* Template List */}
                <DashboardTemplateList />
            </div>
        </div>
    );
}
