'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Crown } from 'lucide-react';
import { getThemeColor } from '@/data/themeColors';
import { useProLayoutContext } from './ProLayoutContext';

export const ProDesktopSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { selectedStyle, handleStyleSelect, proStyles } = useProLayoutContext();

    return (
        <aside className="hidden lg:flex flex-col w-72 border-r border-white/5 bg-[#0a0a0a]/50 backdrop-blur-xl relative z-10">
            <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-4 h-4 text-purple-400" />
                    <h2 className="text-sm font-medium text-white/80">
                        Pro 風格資源庫
                    </h2>
                </div>
                <p className="text-xs text-white/40">
                    {proStyles.length} 個進階風格
                </p>
            </div>

            <div className="flex-1 overflow-y-auto">
                {proStyles.map((style) => {
                    const themeColor = getThemeColor(style.id);
                    const isSelected = selectedStyle === style.id;

                    return (
                        <button
                            key={style.id}
                            onClick={() => handleStyleSelect(style.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-white/5 ${isSelected
                                ? 'bg-purple-600/10 border-l-2 border-l-purple-500 shadow-[inset_0_0_20px_-10px_rgba(168,85,247,0.3)]'
                                : 'hover:bg-white/5'
                                }`}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg"
                                style={{ backgroundColor: themeColor }}
                            >
                                {style.id.replace('S', '')}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className={`text-sm font-medium truncate ${isSelected ? 'text-white' : 'text-white/70'}`}>
                                    {t(`styles.${style.id}.name`) || style.name}
                                </div>
                                <div className="text-xs text-white/40 truncate">
                                    {style.description}
                                </div>
                            </div>
                            <div className="px-1.5 py-0.5 bg-purple-600/20 border border-purple-500/30 rounded text-[10px] text-purple-300 font-medium">
                                PRO
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Footer Link */}
            <div className="p-4 border-t border-white/10">
                <Link
                    href="/pro"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600/10 border border-purple-500/20 rounded-xl text-sm text-purple-300 hover:bg-purple-600/20 transition-colors"
                >
                    <Crown className="w-4 h-4" />
                    Pro 首頁
                </Link>
            </div>
        </aside>
    );
};
