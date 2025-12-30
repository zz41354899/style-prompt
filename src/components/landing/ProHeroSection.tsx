'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Crown, Zap, Palette, Check } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { useAuth } from '@/hooks/useAuth';

export const ProHeroSection: React.FC = () => {
    const { t } = useTranslation();
    const { user } = useAuth();

    const benefits = [
        '10+ 進階風格模板',
        '完整指示詞無限複製',
        '未來更新免費',
    ];

    return (
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
            {/* Premium Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Pro Badge */}
                    <motion.div
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full mb-8"
                    >
                        <Crown className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-purple-300">StylePrompts Pro</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={fadeIn}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                            解鎖
                        </span>
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {' 進階風格 '}
                        </span>
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                            打造專業級設計
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeIn}
                        className="text-lg md:text-xl text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        10+ 精心設計的進階風格模板，每個都包含完整的設計系統指示詞。
                        一次購買，永久使用。
                    </motion.p>

                    {/* Benefits List */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10"
                    >
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-sm text-white/60">
                                <Check className="w-4 h-4 text-purple-500" />
                                {benefit}
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center group"
                        >
                            <Sparkles className="w-5 h-5 mr-2" />
                            {user ? '立即升級 Pro' : '查看方案'}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#showcase"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center justify-center"
                        >
                            <Palette className="w-5 h-5 mr-2" />
                            瀏覽風格
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeIn}
                        className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                    >
                        {[
                            { value: '10+', label: '進階風格' },
                            { value: '1x', label: '一次買斷' },
                            { value: '∞', label: '永久使用' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
