'use client';

import React from 'react';
import { Crown, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CurrentPlanBannerProps {
    isPro: boolean;
    loading: boolean;
}

export const CurrentPlanBanner: React.FC<CurrentPlanBannerProps> = ({
    isPro,
    loading,
}) => {
    const { t } = useTranslation();

    return (
        <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-white/60">{t('dashboard.pricing.currentPlan')}：</span>
                {loading ? (
                    <span className="text-white/40">{t('auth.loading')}</span>
                ) : isPro ? (
                    <span className="flex items-center gap-2 text-purple-400 font-semibold">
                        <Crown className="w-4 h-4" />
                        {t('dashboard.pricing.proLifetime')}
                    </span>
                ) : (
                    <span className="text-white/80 font-medium">{t('dashboard.pricing.freePlan')}</span>
                )}
            </div>
            {isPro && (
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                    {t('dashboard.pricing.activated')}
                </div>
            )}
        </div>
    );
};
