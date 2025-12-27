'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { isNewYearPromoActive } from '@/data/styles';

export const PromoBar: React.FC = () => {
    const { t } = useTranslation();

    if (!isNewYearPromoActive()) {
        return null;
    }

    return (
        <div className="mt-2 px-3 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg text-center">
            <div className="text-amber-300 text-xs font-medium">
                {t('layout.newYearPromo.title')}
            </div>
            <div className="text-amber-200/70 text-[10px] mt-0.5">
                {t('layout.newYearPromo.subtitle')}
            </div>
        </div>
    );
};
