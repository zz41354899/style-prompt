'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Coffee } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const PricingSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="pricing" className="py-24 sm:py-32 border-y border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">{t('landing.pricing.title')}</motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
                >
                    {/* Free Plan */}
                    <motion.div
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                        className="p-10 rounded-[3rem] border border-white/5 bg-[#0a0a0a] flex flex-col relative overflow-hidden group"
                    >
                        <div className="mb-10">
                            <div className="text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4">{t('landing.pricing.free.use')}</div>
                            <h3 className="text-4xl font-bold mb-8">{t('landing.pricing.free.name')}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-black text-white tracking-tighter">NT$0</span>
                            </div>
                        </div>
                        <ul className="space-y-5 mb-12 flex-1">
                            {[1, 2, 3, 4].map(i => (
                                <li key={i} className="flex items-center gap-4 text-white/50 text-sm font-light">
                                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                    {t(`landing.pricing.free.f${i}`)}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/S01"
                            className="w-full py-6 rounded-2xl bg-purple-600 text-white font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition-all text-center shadow-lg shadow-purple-600/20"
                        >
                            {t('landing.pricing.startNow')}
                        </Link>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                        className="p-10 rounded-[3rem] border border-purple-500/40 bg-purple-500/[0.03] flex flex-col relative overflow-hidden group shadow-[0_0_100px_rgba(139,92,246,0.1)]"
                    >
                        <div className="absolute top-8 right-8 px-4 py-1.5 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-purple-600/40">{t('landing.pricing.comingSoon')}</div>
                        <div className="mb-10">
                            <div className="text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4">{t('landing.pricing.pro.use')}</div>
                            <h3 className="text-4xl font-bold mb-8">{t('landing.pricing.pro.name')}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-black text-white tracking-tighter">NT$2000</span>
                            </div>
                        </div>
                        <ul className="space-y-5 mb-12 flex-1">
                            {[1, 2, 3, 4].map(i => (
                                <li key={i} className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                    {t(`landing.pricing.pro.f${i}`)}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/coffee"
                            className="w-full py-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm uppercase tracking-widest text-center transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-3"
                        >
                            <Coffee className="w-5 h-5" />
                            {t('landing.pricing.sponsorSupport')}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
