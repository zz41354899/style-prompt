'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import type { PreviewTier } from './LayoutContext';

export interface StyleItem {
    id: string;
    name: string;
    description: string;
    industries?: string[];
    mode?: 'light' | 'dark' | 'both';
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
            className={`w-full text-left px-4 py-3 border-b border-white/5 transition-all ${
                isSelected
                    ? 'bg-purple-500/10 border-l-2 border-l-purple-500'
                    : 'hover:bg-white/5 border-l-2 border-l-transparent'
            }`}
        >
            <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-white/30 mt-0.5">{style.id}</span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span
                            className={`text-sm font-medium truncate ${
                                isSelected ? 'text-purple-300' : 'text-white/80'
                            }`}
                        >
                            {t(`styles.${style.id}.name`, { defaultValue: style.name })}
                        </span>
                        {style.mode && style.mode !== 'both' && (
                            <div className="flex-shrink-0">
                                {style.mode === 'light' ? (
                                    <Sun className="w-3 h-3 text-yellow-400" />
                                ) : (
                                    <Moon className="w-3 h-3 text-blue-400" />
                                )}
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-white/40 line-clamp-1 mb-1.5">
                        {t(`styles.${style.id}.description`, { defaultValue: style.description })}
                    </div>
                    {style.industries && style.industries.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {style.industries.slice(0, 2).map((industry) => (
                                <span
                                    key={industry}
                                    className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded"
                                >
                                    {t(`industries.${industry}`, { defaultValue: industry })}
                                </span>
                            ))}
                            {style.industries.length > 2 && (
                                <span className="px-1.5 py-0.5 bg-white/5 text-white/40 text-[10px] rounded">
                                    +{style.industries.length - 2}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
};
