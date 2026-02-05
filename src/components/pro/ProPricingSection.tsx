'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Crown, ArrowRight, Sparkles, Zap, Shield, LayoutTemplate, Coffee } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { useTranslation } from 'react-i18next';

export const ProPricingSection: React.FC = () => {
    const { user } = useAuth();
    const { t } = useTranslation();

    const features = [
        { text: t('pro.pricing.features.f1'), icon: Sparkles },
        { text: t('pro.pricing.features.f2'), icon: LayoutTemplate },
        { text: t('pro.pricing.features.f3'), icon: Zap },
        { text: t('pro.pricing.features.f4'), icon: Crown },
        { text: t('pro.pricing.features.f5'), icon: Shield },
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
                        <span className="text-sm font-medium text-purple-300">{t('pro.pricing.badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">{t('pro.pricing.title1')}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-indigo-500">{t('pro.pricing.title2')}</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
                        {t('pro.pricing.subtitle')}
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
                                {t('pro.pricing.popular')}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left: Price & Value */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                                        <Crown className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{t('pro.pricing.planName')}</h3>
                                        <p className="text-xs text-white/40">{t('pro.pricing.planDesc')}</p>
                                    </div>
                                </div>

                                <div className="flex items-baseline gap-2 mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter">
                                            Free
                                        </span>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full ml-4">
                                        Open Source
                                    </div>
                                </div>

                                <Link
                                    href="/coffee"
                                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-purple-600/20 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                    <Coffee className="w-5 h-5" />
                                    {t('pro.pricing.sponsorSupport')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <p className="text-center text-xs text-white/30 mt-4">
                                    {t('pro.pricing.sponsorNote')}
                                </p>
                            </div>

                            {/* Right: Features */}
                            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                                <h4 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-6">
                                    {t('pro.pricing.included')}
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


            </div>
        </section>
    );
};
