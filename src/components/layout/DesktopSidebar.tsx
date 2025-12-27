'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { styles, hasProVersion } from '@/data/styles';
import { useLayoutContext } from './LayoutContext';
import { TierSwitcher } from './TierSwitcher';
import { StyleListItem } from './StyleListItem';
import { PromoBar } from './PromoBar';

export const DesktopSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { selectedStyle, previewTier, setPreviewTier, handleStyleSelect } =
        useLayoutContext();

    const filteredStyles = styles.filter((style) =>
        previewTier === 'free' ? true : hasProVersion(style.id)
    );

    return (
        <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/10">
                <h2 className="text-sm font-medium text-white/80">
                    {t('layout.designStyles')}
                </h2>
                <p className="text-xs text-white/40 mt-1">
                    {previewTier === 'free'
                        ? t('layout.stylesAvailable', { count: styles.length })
                        : t('layout.proStylesAvailable', { count: 10 }) ||
                        `${10} 個進階風格預覽`}
                </p>

                {/* Free/Pro Mode Switcher */}
                <div className="mt-3">
                    <TierSwitcher previewTier={previewTier} setPreviewTier={setPreviewTier} />
                </div>
                <PromoBar />
            </div>

            <div className="flex-1 overflow-y-auto">
                {filteredStyles.map((style) => (
                    <StyleListItem
                        key={style.id}
                        style={style}
                        isSelected={selectedStyle === style.id}
                        previewTier={previewTier}
                        onSelect={() => handleStyleSelect(style.id)}
                    />
                ))}
            </div>
        </aside>
    );
};
