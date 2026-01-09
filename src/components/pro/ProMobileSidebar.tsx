'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';
import { useProLayoutContext, TRIAL_STYLE_COUNT } from './ProLayoutContext';
import { useTranslation } from 'react-i18next';
import { ProStyleListItem } from './ProStyleListItem';

export const ProMobileSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { sidebarOpen, setSidebarOpen, selectedStyle, handleStyleSelect, proStyles, isTrial, hasPro, isStyleLocked } = useProLayoutContext();

    const onStyleSelect = (styleId: string) => {
        handleStyleSelect(styleId);
        setSidebarOpen(false);
    };

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
                                <h2 className="text-sm font-medium text-white/80">{t('pro.sidebar.title')}</h2>
                            </div>
                            <p className="text-xs text-white/40">{t('pro.sidebar.stylesCount', { count: proStyles.length })}</p>
                        </div>

                        {/* 試用橫幅 */}
                        {isTrial && (
                            <div className="mx-3 mt-3 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                    <span className="text-xs font-bold text-purple-300">{t('pro.sidebar.trialBanner')}</span>
                                </div>
                                <p className="text-[11px] text-white/60">
                                    {t('pro.sidebar.trialProgress', { current: TRIAL_STYLE_COUNT, total: proStyles.length })}
                                </p>
                            </div>
                        )}

                        <div className="flex-1 overflow-y-auto">
                            {proStyles.map((style) => (
                                <ProStyleListItem
                                    key={style.id}
                                    style={style}
                                    isSelected={selectedStyle === style.id}
                                    isLocked={isStyleLocked(style.id)}
                                    hasPro={hasPro}
                                    onSelect={() => onStyleSelect(style.id)}
                                    showDescription={false}
                                />
                            ))}
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};
