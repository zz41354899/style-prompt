'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Crown, Sparkles } from 'lucide-react';
import { useProLayoutContext, TRIAL_STYLE_COUNT } from './ProLayoutContext';
import { ProStyleListItem } from './ProStyleListItem';

export const ProDesktopSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { selectedStyle, handleStyleSelect, proStyles, isTrial, hasPro, isStyleLocked } = useProLayoutContext();

    return (
        <aside className="hidden lg:flex flex-col w-72 border-r border-white/5 bg-[#0a0a0a]/50 backdrop-blur-xl relative z-10">
            <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-4 h-4 text-purple-400" />
                    <h2 className="text-sm font-medium text-white/80">
                        {t('pro.sidebar.title')}
                    </h2>
                </div>
                <p className="text-xs text-white/40">
                    {t('pro.sidebar.stylesCount', { count: proStyles.length })}
                </p>
            </div>

            {/* 試用橫幅 */}
            {isTrial && (
                <div className="mx-3 mt-3 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-bold text-purple-300">{t('pro.sidebar.trialBanner')}</span>
                    </div>
                    <p className="text-[11px] text-white/60">
                        {t('pro.sidebar.trialProgress', { current: TRIAL_STYLE_COUNT, total: proStyles.length })}
                    </p>
                </div>
            )}

            <div className="flex-1 overflow-y-auto">
                {proStyles.map((style) => (
                    <ProStyleListItem
                        key={style.id}
                        style={style}
                        isSelected={selectedStyle === style.id}
                        isLocked={isStyleLocked(style.id)}
                        hasPro={hasPro}
                        onSelect={() => handleStyleSelect(style.id)}
                        showDescription={true}
                    />
                ))}
            </div>

            {/* Footer Link */}
            <div className="p-4 border-t border-white/10">
                <Link
                    href="/pro"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600/10 border border-purple-500/20 rounded-xl text-sm text-purple-300 hover:bg-purple-600/20 transition-colors"
                >
                    <Crown className="w-4 h-4" />
                    {t('pro.sidebar.proHomepage')}
                </Link>
            </div>
        </aside>
    );
};
