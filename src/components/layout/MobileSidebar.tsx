'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { X, Sparkles } from 'lucide-react';
import { styles } from '@/data/styles';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLayoutContext } from './LayoutContext';
import { StyleListItem } from './StyleListItem';

export const MobileSidebar: React.FC = () => {
    const { t } = useTranslation();
    const {
        selectedStyle,
        sidebarOpen,
        setSidebarOpen,
        handleStyleSelect,
    } = useLayoutContext();

    if (!sidebarOpen) {
        return null;
    }

    // Free 版本固定顯示所有 101 個風格
    const previewTier = 'free';

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

                {/* Pro 升級提示 & 語言切換 - Mobile */}
                <div className="p-4 border-b border-white/10 space-y-3">
                    <Link
                        href="/pro"
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 bg-purple-600/10 border border-purple-500/20 rounded-xl text-xs text-purple-300 hover:bg-purple-600/20 transition-colors"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>升級 Pro 解鎖進階風格</span>
                    </Link>
                    <LanguageSwitcher variant="sidebar" />
                </div>

                <div className="flex-1 overflow-y-auto">
                    {styles.map((style) => (
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
