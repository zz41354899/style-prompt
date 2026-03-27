'use client';

import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Sparkles } from 'lucide-react';
import { styles, type Category } from '@/data/styles';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLayoutContext } from './LayoutContext';
import { StyleListItem } from './StyleListItem';
import { CategoryFilter } from './CategoryFilter';

export const MobileSidebar: React.FC = () => {
    const { t } = useTranslation();
    const {
        selectedStyle,
        sidebarOpen,
        setSidebarOpen,
        handleStyleSelect,
    } = useLayoutContext();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    // 根據選擇的分類篩選風格（必須在 early return 之前呼叫，確保 Hook 順序一致）
    const filteredStyles = useMemo(() => {
        if (!selectedCategory) {
            return styles;
        }
        return styles.filter(style => style.category === selectedCategory);
    }, [selectedCategory]);

    if (!sidebarOpen) {
        return null;
    }

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
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <h2 className="text-lg font-semibold text-white">
                            {t('common.curated_styles')}
                        </h2>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 border-b border-white/10 space-y-3">
                    {/* 分類篩選器 */}
                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                    
                    <p className="text-xs text-white/40">
                        {t('filters.showing_count', { count: filteredStyles.length })}
                    </p>
                </div>

                {/* 語言切換 - Mobile */}
                <div className="px-4 py-3 border-b border-white/10">
                    <LanguageSwitcher variant="sidebar" />
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
