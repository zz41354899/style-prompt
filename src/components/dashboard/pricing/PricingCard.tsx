'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, CheckCircle2, ArrowRight, Users, X, Sparkles, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { LucideIcon } from 'lucide-react';

interface PlanFeature {
    text: string;
    included: boolean;
    highlight?: boolean;
}

interface PricingCardProps {
    variant: 'free' | 'pro';
    isPro: boolean;
    features: PlanFeature[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
    variant,
    isPro,
    features,
}) => {
    const { t } = useTranslation();

    if (variant === 'free') {
        return (
            <div className={`relative p-6 rounded-2xl border ${
                !isPro
                    ? 'bg-white/[0.03] border-white/20'
                    : 'bg-white/[0.02] border-white/10 opacity-60'
            }`}>
                {!isPro && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-white/10 text-white/60 text-xs font-medium rounded-full">
                        {t('dashboard.pricing.currentPlan')}
                    </div>
                )}

                <div className="flex items-center gap-3 mb-4 mt-2">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Users className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Free</h3>
                        <p className="text-xs text-white/40">{t('dashboard.pricing.freePlan')}</p>
                    </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black">NT$0</span>
                    <span className="text-white/40 text-sm">{t('dashboard.pricing.freePlan')}</span>
                </div>

                <div className="space-y-3 mb-6">
                    {features.map((feature) => (
                        <div key={feature.text} className="flex items-center gap-3 text-sm">
                            {feature.included ? (
                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            ) : (
                                <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                            )}
                            <span className={feature.included ? 'text-white/70' : 'text-white/30'}>
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white/70 font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                    {t('dashboard.pricing.browseFree')}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    // Pro variant
    return (
        <div className="relative">
            {/* Glow Effect for Pro */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl blur opacity-20" />

            <div className={`relative p-6 rounded-2xl border ${
                isPro
                    ? 'bg-purple-900/20 border-purple-500/30'
                    : 'bg-[#111] border-white/10'
            }`}>
                {isPro && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {t('dashboard.pricing.purchased')}
                    </div>
                )}
                {!isPro && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold rounded-full">
                        {t('dashboard.pricing.recommended')}
                    </div>
                )}

                <div className="flex items-center gap-3 mb-4 mt-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Crown className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Pro</h3>
                        <p className="text-xs text-white/40">{t('dashboard.pricing.proLifetime')}</p>
                    </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black">NT$2,000</span>
                    <span className="text-white/40 text-sm">{t('dashboard.pricing.oneTime')}</span>
                </div>

                <div className="space-y-3 mb-6">
                    {features.map((feature) => (
                        <div key={feature.text} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                                feature.highlight ? 'text-purple-400' : 'text-green-400'
                            }`} />
                            <span className={feature.highlight ? 'text-purple-200' : 'text-white/70'}>
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

                {isPro ? (
                    <Link
                        href="/pro/S01"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-all"
                    >
                        {t('dashboard.pricing.browsePro')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                ) : (
                    <div className="space-y-3">
                        {/* 金流測試中提示 */}
                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                            <div className="flex items-center gap-2 mb-1">
                                <AlertCircle className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-yellow-300">
                                    {t('dashboard.pricing.paymentTesting')}
                                </span>
                            </div>
                            <p className="text-xs text-yellow-200/70">
                                {t('dashboard.pricing.paymentTestingDesc')}
                            </p>
                        </div>

                        {/* 禁用的購買按鈕 */}
                        <button
                            disabled
                            className="flex items-center justify-center gap-2 w-full py-3 bg-white/30 text-white/50 font-bold rounded-xl cursor-not-allowed"
                        >
                            {t('dashboard.pricing.comingSoon')}
                        </button>

                        {/* 試用入口 */}
                        <Link
                            href="/pro/S01"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600/20 border border-purple-500/30 text-purple-300 font-medium rounded-xl hover:bg-purple-600/30 transition-all"
                        >
                            <Sparkles className="w-4 h-4" />
                            {t('dashboard.pricing.tryProStyles')}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
