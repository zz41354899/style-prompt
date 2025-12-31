'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Crown, ArrowRight, Sparkles, Zap, Shield, LayoutTemplate } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export const ProPricingSection: React.FC = () => {
    const { user } = useAuth();

    const features = [
        { text: '10+ Pro 專屬風格模板', icon: Sparkles },
        { text: '6 種產業 Landing Page Template', icon: LayoutTemplate },
        { text: '完整設計系統指示詞', icon: Zap },
        { text: '未來所有更新免費', icon: Crown },
        { text: '商業使用授權', icon: Shield },
    ];

    return (
        <section id="pricing" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Crown className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">簡單定價</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">一次購買，</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-indigo-500">終身使用</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
                        無訂閱陷阱，無隱藏費用。
                        擁有屬於你的專業設計系統。
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-[2rem] blur opacity-20" />

                    <div className="relative p-8 md:p-12 bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-900/20">
                        {/* Popular Badge */}
                        <div className="absolute top-6 right-6">
                            <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold rounded-full">
                                最受歡迎
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left: Price */}
                            {/* Left: Price & Value */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                                        <Crown className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Pro 終身授權</h3>
                                        <p className="text-xs text-white/40">包含所有未來更新</p>
                                    </div>
                                </div>

                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-lg font-medium text-white/40 line-through">NT$ 3,600</span>
                                    <div className="flex items-baseline">
                                        <span className="text-2xl font-bold text-white mr-1">NT$</span>
                                        <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter">
                                            2,000
                                        </span>
                                    </div>
                                </div>

                                <Link
                                    href={user ? '/api/stripe/checkout' : '#'}
                                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                    {user ? '立即購買' : '登入後購買'}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <p className="text-center text-xs text-white/30 mt-4">
                                    安全付款 • 即時交付 • 數位商品售出不退
                                </p>
                            </div>

                            {/* Right: Features */}
                            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                                <h4 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-6">
                                    包含內容
                                </h4>
                                <div className="space-y-4">
                                    {features.map((feature) => (
                                        <div key={feature.text} className="flex items-center gap-3">
                                            <div className="p-1.5 bg-green-500/10 rounded-lg">
                                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            </div>
                                            <span className="text-white/80">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Stripe 安全付款
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        SSL 加密
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        即時開通
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
