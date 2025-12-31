'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { getThemeColor } from '@/data/themeColors';
import { useProLayoutContext } from './ProLayoutContext';
import { useTranslation } from 'react-i18next';

export const ProMobileSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { sidebarOpen, setSidebarOpen, selectedStyle, handleStyleSelect, proStyles } = useProLayoutContext();

    return (
        <AnimatePresence>
            {sidebarOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 bg-black/60 z-40"
                        onClick={() => setSidebarOpen(false)}
                    />

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="lg:hidden fixed top-14 left-0 bottom-0 w-72 border-r border-white/10 bg-[#0a0a0a] z-50 flex flex-col"
                    >
                        <div className="p-4 border-b border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <Crown className="w-4 h-4 text-purple-400" />
                                <h2 className="text-sm font-medium text-white/80">Pro 風格資源庫</h2>
                            </div>
                            <p className="text-xs text-white/40">{proStyles.length} 個進階風格</p>
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
                                            ? 'bg-purple-600/10 border-l-2 border-l-purple-500'
                                            : 'hover:bg-white/5'
                                            }`}
                                    >
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                                            style={{ backgroundColor: themeColor }}
                                        >
                                            {style.id.replace('S', '')}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className={`text-sm font-medium truncate ${isSelected ? 'text-white' : 'text-white/70'}`}>
                                                {t(`styles.${style.id}.name`) || style.name}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};
