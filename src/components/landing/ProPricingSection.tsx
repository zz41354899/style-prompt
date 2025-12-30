'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Crown, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { useAuth } from '@/hooks/useAuth';

export const ProPricingSection: React.FC = () => {
    const { user } = useAuth();

    const features = [
        '10+ Pro 專屬風格模板',
        '完整設計系統指示詞',
        '未來所有更新免費',
        '優先客服支援',
        '商業使用授權',
    ];

    return (
        <section id="pricing" className="py-24 sm:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Crown className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">簡單定價</span>
                    </motion.div>
                    <motion.h2 variants={fadeIn} className="text-3xl sm:text-5xl font-bold mb-4">
                        一次購買，永久使用
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-lg text-white/50 max-w-xl mx-auto">
                        無訂閱，無隱藏費用。買一次就是你的。
                    </motion.p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-[3rem] blur-xl opacity-50" />

                    <div className="relative p-8 sm:p-12 rounded-[2.5rem] border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm overflow-hidden">
                        {/* Popular Badge */}
                        <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            推薦
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left - Price */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Crown className="w-6 h-6 text-purple-400" />
                                    Pro 終身授權
                                </h3>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        NT$2,000
                                    </span>
                                </div>
                                <p className="text-white/50 text-sm mb-8">
                                    一次購買，永久擁有所有 Pro 風格與未來更新
                                </p>
                                <Link
                                    href={user ? '/api/stripe/checkout' : '#'}
                                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-600/30 group"
                                >
                                    {user ? '立即購買' : '登入後購買'}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Right - Features */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium text-white/60 uppercase tracking-wide mb-4">
                                    包含內容
                                </h4>
                                {features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                        <span className="text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        安全付款（Stripe）
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        14 天退款保證
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        即時交付
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
