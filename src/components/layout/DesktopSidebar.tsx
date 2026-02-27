'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { styles } from '@/data/styles';
import { useLayoutContext } from './LayoutContext';
import { StyleListItem } from './StyleListItem';

export const DesktopSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { selectedStyle, handleStyleSelect } = useLayoutContext();

    // Free 版本固定顯示所有 101 個風格，previewTier 固定為 'free'
    const previewTier = 'free';

    return (
        <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/10">
                <h2 className="text-sm font-medium text-white/80">
                    {t('layout.designStyles')}
                </h2>
                <p className="text-xs text-white/40 mt-1">
                    {t('layout.stylesAvailable', { count: styles.length })}
                </p>

                {/* Pro 升級提示 */}
                <Link
                    href="/pro"
                    className="mt-3 flex items-center gap-2 px-3 py-2 bg-purple-600/10 border border-purple-500/20 rounded-xl text-xs text-purple-300 hover:bg-purple-600/20 transition-colors group"
                >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>升級 Pro 解鎖進階風格</span>
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto">
                {styles.map((style) => (
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
