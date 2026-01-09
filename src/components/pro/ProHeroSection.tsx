'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProHeroSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isZhTW = i18n.language === 'zh-TW';

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Simplified Background - 移除動畫減少效能消耗 */}
            <div className="absolute inset-0 bg-[#020202]">
                {/* 簡化的漸層背景 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                {/* Badge - 移除 motion 動畫 */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                        <Crown className="w-3 h-3 text-white" />
                        <span className="text-[10px] font-black tracking-wider text-white uppercase">PRO</span>
                    </div>
                    <span className="text-sm font-medium text-white/80">{t('pro.hero.badge')}</span>
                </div>

                {/* Title - 移除 motion 動畫 */}
                <h1
                    className={`relative font-black mb-8 tracking-tight ${isZhTW
                        ? 'text-5xl md:text-7xl lg:text-8xl leading-tight'
                        : 'text-4xl md:text-6xl lg:text-7xl leading-[1.1]'
                        }`}
                >
                    <span className="text-white block mb-2">
                        {t('pro.hero.title1')}
                    </span>
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">
                            {t('pro.hero.title2')}
                        </span>
                    </span>
                </h1>

                {/* Subtitle - 移除 motion 動畫 */}
                <p
                    className={`max-w-2xl mx-auto mb-12 leading-relaxed ${isZhTW
                        ? 'text-lg md:text-xl text-white/60'
                        : 'text-base md:text-lg text-white/60'
                        }`}
                >
                    {t('pro.hero.subtitle')}
                    <br />
                    <span className="text-white/90 font-semibold">{t('pro.hero.subtitleHighlight')}</span>
                </p>

                {/* CTA Buttons - 移除 motion 動畫 */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/pro/S01"
                        className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        <span>{t('pro.hero.browseCTA')}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="#pricing"
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                        <Crown className="w-5 h-5 text-yellow-400" />
                        {t('pro.hero.pricingCTA')}
                    </a>
                </div>
            </div>
        </section>
    );
};
