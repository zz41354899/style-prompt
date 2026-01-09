'use client';

import React from 'react';
import { Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getThemeColor } from '@/data/themeColors';

interface StyleInfo {
    id: string;
    name: string;
    description?: string;
}

interface ProStyleListItemProps {
    style: StyleInfo;
    isSelected: boolean;
    isLocked: boolean;
    hasPro: boolean;
    onSelect: () => void;
    /** 是否顯示描述文字 (desktop sidebar 顯示，mobile 不顯示) */
    showDescription?: boolean;
}

export const ProStyleListItem: React.FC<ProStyleListItemProps> = ({
    style,
    isSelected,
    isLocked,
    hasPro,
    onSelect,
    showDescription = true
}) => {
    const { t } = useTranslation();
    const themeColor = getThemeColor(style.id);

    return (
        <button
            onClick={() => !isLocked && onSelect()}
            disabled={isLocked}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-white/5 ${
                isSelected
                    ? 'bg-purple-600/10 border-l-2 border-l-purple-500 shadow-[inset_0_0_20px_-10px_rgba(168,85,247,0.3)]'
                    : isLocked
                        ? 'opacity-50 cursor-not-allowed hover:bg-white/[0.02]'
                        : 'hover:bg-white/5'
            }`}
        >
            {/* Style ID Badge */}
            <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg ${isLocked ? 'grayscale' : ''}`}
                style={{ backgroundColor: themeColor }}
            >
                {isLocked ? <Lock className="w-3 h-3" /> : style.id.replace('S', '')}
            </div>

            {/* Style Info */}
            <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium truncate ${
                    isSelected ? 'text-white' : isLocked ? 'text-white/40' : 'text-white/70'
                }`}>
                    {t(`styles.${style.id}.name`) || style.name}
                </div>
                {showDescription && style.description && (
                    <div className="text-xs text-white/40 truncate">
                        {t(`styles.${style.id}.description`) || style.description}
                    </div>
                )}
            </div>

            {/* Status Tag */}
            {isLocked ? (
                <div className="px-1.5 py-0.5 bg-white/10 border border-white/20 rounded text-[10px] text-white/50 font-medium">
                    <Lock className="w-3 h-3" />
                </div>
            ) : hasPro ? (
                <div className="px-1.5 py-0.5 bg-purple-600/20 border border-purple-500/30 rounded text-[10px] text-purple-300 font-medium">
                    {t('pro.sidebar.proTag')}
                </div>
            ) : (
                <div className="px-1.5 py-0.5 bg-green-600/20 border border-green-500/30 rounded text-[10px] text-green-300 font-medium">
                    {t('pro.sidebar.trialTag')}
                </div>
            )}
        </button>
    );
};
