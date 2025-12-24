'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Coffee, Heart, Star, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CoffeePage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.coffee.title')}
            subtitle={t('pages.coffee.subtitle')}
        >
            {/* Main CTA */}
            <div className="p-12 rounded-[3rem] border border-purple-500/30 bg-purple-500/[0.03] text-center mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
                <div className="relative z-10">
                    <div className="w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-purple-500/30">
                        <Coffee className="w-12 h-12 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-black mb-4">{t('pages.coffee.cta')}</h2>
                    <p className="text-white/40 mb-10 max-w-md mx-auto leading-relaxed">{t('pages.coffee.ctaDesc')}</p>
                    <a
                        href="https://buymeacoffee.com/zz41354899y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFDD00] text-black font-black rounded-2xl hover:bg-[#FFDD00]/90 transition-all shadow-xl shadow-[#FFDD00]/20"
                    >
                        <Coffee className="w-6 h-6" />
                        {t('pages.coffee.buyButton')}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Why Support */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">{t('pages.coffee.whyTitle')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                        <Heart className="w-8 h-8 text-pink-500 mb-4" />
                        <h4 className="font-bold mb-2">{t('pages.coffee.reason1.title')}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{t('pages.coffee.reason1.desc')}</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                        <Star className="w-8 h-8 text-yellow-500 mb-4" />
                        <h4 className="font-bold mb-2">{t('pages.coffee.reason2.title')}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{t('pages.coffee.reason2.desc')}</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                        <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
                        <h4 className="font-bold mb-2">{t('pages.coffee.reason3.title')}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{t('pages.coffee.reason3.desc')}</p>
                    </div>
                </div>
            </div>

            {/* Thank You Message */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 text-center">
                <p className="text-white/60 text-lg font-light italic">"{t('pages.coffee.thanks')}"</p>
                <p className="text-purple-400 text-sm font-bold mt-4">— StylePrompts Team</p>
            </div>
        </SubPageLayout>
    );
}
