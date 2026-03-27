'use client';

import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { styles, type Category } from '@/data/styles';
import { useLayoutContext } from './LayoutContext';
import { StyleListItem } from './StyleListItem';
import { CategoryFilter } from './CategoryFilter';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const DesktopSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { selectedStyle, handleStyleSelect } = useLayoutContext();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const previewTier = 'free';

    // 根據選擇的分類篩選風格
    const filteredStyles = useMemo(() => {
        if (!selectedCategory) {
            return styles;
        }
        return styles.filter(style => style.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <h2 className="text-sm font-medium text-white/80">
                        {t('common.curated_styles')}
                    </h2>
                </div>
                
                {/* 語言切換 - Desktop */}
                <div className="mb-3">
                    <LanguageSwitcher variant="sidebar" />
                </div>
                
                {/* 分類篩選器 */}
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
                
                <p className="text-xs text-white/40 mt-3">
                    {t('filters.showing_count', { count: filteredStyles.length })}
                </p>
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
