'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { styles, hasProVersion } from '@/data/styles';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLayoutContext } from './LayoutContext';
import { TierSwitcher } from './TierSwitcher';
import { StyleListItem } from './StyleListItem';
import { PromoBar } from './PromoBar';

export const MobileSidebar: React.FC = () => {
    const { t } = useTranslation();
    const {
        selectedStyle,
        previewTier,
        setPreviewTier,
        sidebarOpen,
        setSidebarOpen,
        handleStyleSelect,
    } = useLayoutContext();

    if (!sidebarOpen) {
        return null;
    }

    const filteredStyles = styles.filter((style) =>
        previewTier === 'free' ? true : hasProVersion(style.id)
    );

    const onStyleSelect = (styleId: string) => {
        handleStyleSelect(styleId);
        setSidebarOpen(false);
    };

    return (
        <div className="fixed inset-0 z-[60] lg:hidden">
            <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed left-0 top-0 bottom-0 w-80 bg-[#0a0a0a] flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h2 className="text-lg font-semibold text-white">
                        {t('layout.designStyles')}
                    </h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Free/Pro Mode Switcher - Mobile */}
                <div className="p-4 border-b border-white/10">
                    <TierSwitcher previewTier={previewTier} setPreviewTier={setPreviewTier} />
                    <PromoBar />
                    <div className="mt-4">
                        <LanguageSwitcher variant="sidebar" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {filteredStyles.map((style) => (
                        <StyleListItem
                            key={style.id}
                            style={style}
                            isSelected={selectedStyle === style.id}
                            previewTier={previewTier}
                            onSelect={() => onStyleSelect(style.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
