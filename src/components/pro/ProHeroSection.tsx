'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

// Lazy load the heavy Globe component
const Globe = dynamic(() => import('@/components/common/Globe').then(mod => mod.Globe), {
    ssr: false,
    loading: () => <div className="w-[600px] h-[600px] rounded-full bg-purple-500/5 animate-pulse" />
});

export const ProHeroSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isZhTW = i18n.language === 'zh-TW';

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#020202]">
                {/* Gradient Orbs - Enhanced */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]" />

                {/* Futuristic Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Globe Background - Bottom Center (Desktop Only) */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] pointer-events-none items-center justify-center"
            >
                {/* Globe glow */}
                <div className="absolute inset-0 bg-purple-600/15 blur-[100px] rounded-full scale-125" />
                <Globe className="opacity-50 scale-[2.5]" />
            </motion.div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] hover:bg-white/10 transition-colors cursor-default"
                >
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                        <Sparkles className="w-3 h-3 text-white" />
                        <span className="text-[10px] font-black tracking-wider text-white uppercase">PRO</span>
                    </div>
                    <span className="text-sm font-medium text-white/80">{t('pro.hero.badge')}</span>
                </motion.div>

                {/* Title Main */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`relative font-black mb-8 tracking-tight ${isZhTW
                        ? 'text-5xl md:text-7xl lg:text-8xl leading-tight'
                        : 'text-4xl md:text-6xl lg:text-7xl leading-[1.1]'
                        }`}
                >
                    <span className="text-white drop-shadow-2xl block mb-2">
                        {t('pro.hero.title1')}
                    </span>
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">
                            {t('pro.hero.title2')}
                        </span>
                        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 blur-2xl opacity-50" aria-hidden="true">
                            {t('pro.hero.title2')}
                        </span>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`max-w-2xl mx-auto mb-12 leading-relaxed ${isZhTW
                        ? 'text-lg md:text-xl text-white/60'
                        : 'text-base md:text-lg text-white/60'
                        }`}
                >
                    {t('pro.hero.subtitle')}
                    <br />
                    <span className="text-white/90 font-semibold">{t('pro.hero.subtitleHighlight')}</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/pro/S01"
                        className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
                    >
                        <div className="absolute inset-0 rounded-full bg-white blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                        <Play className="w-5 h-5 relative z-10 fill-current" />
                        <span className="relative z-10">{t('pro.hero.browseCTA')}</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="#pricing"
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all backdrop-blur-md"
                    >
                        <Crown className="w-5 h-5 text-yellow-400" />
                        {t('pro.hero.pricingCTA')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

