'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { hasProVersion } from '@/data/styles';
import type { PreviewTier } from './LayoutContext';

export interface StyleItem {
    id: string;
    name: string;
    description: string;
}

interface StyleListItemProps {
    style: StyleItem;
    isSelected: boolean;
    previewTier: PreviewTier;
    onSelect: () => void;
}

export const StyleListItem: React.FC<StyleListItemProps> = ({
    style,
    isSelected,
    previewTier,
    onSelect,
}) => {
    const { t } = useTranslation();

    return (
        <button
            onClick={onSelect}
            className={`w-full text-left px-4 py-3 border-b border-white/5 transition-all ${isSelected
                ? 'bg-purple-500/10 border-l-2 border-l-purple-500'
                : 'hover:bg-white/5 border-l-2 border-l-transparent'
                }`}
        >
            <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/30">{style.id}</span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span
                            className={`text-sm font-medium truncate ${isSelected ? 'text-purple-300' : 'text-white/80'
                                }`}
                        >
                            {t(`styles.${style.id}.name`)}
                        </span>
                        {previewTier === 'pro' && (
                            <span className="px-1.5 py-0.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 rounded text-[10px] text-purple-300 font-medium">
                                Pro
                            </span>
                        )}
                    </div>
                    <div className="text-xs text-white/40 truncate mt-0.5">
                        {t(`styles.${style.id}.description`)}
                    </div>
                </div>
            </div>
        </button>
    );
};
