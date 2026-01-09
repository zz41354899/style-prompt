'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Crown, Lock, Sparkles } from 'lucide-react';
import { getThemeColor } from '@/data/themeColors';
import { useProLayoutContext, TRIAL_STYLE_COUNT } from './ProLayoutContext';
import { useTranslation } from 'react-i18next';

export const ProMobileSidebar: React.FC = () => {
    const { t } = useTranslation();
    const { sidebarOpen, setSidebarOpen, selectedStyle, handleStyleSelect, proStyles, isTrial, hasPro, isStyleLocked } = useProLayoutContext();

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
                            {proStyles.map((style) => {
                                const themeColor = getThemeColor(style.id);
                                const isSelected = selectedStyle === style.id;
                                const isLocked = isStyleLocked(style.id);

                                return (
                                    <button
                                        key={style.id}
                                        onClick={() => !isLocked && handleStyleSelect(style.id)}
                                        disabled={isLocked}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-white/5 ${isSelected
                                            ? 'bg-purple-600/10 border-l-2 border-l-purple-500'
                                            : isLocked
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'hover:bg-white/5'
                                            }`}
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${isLocked ? 'grayscale' : ''}`}
                                            style={{ backgroundColor: themeColor }}
                                        >
                                            {isLocked ? <Lock className="w-3 h-3" /> : style.id.replace('S', '')}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className={`text-sm font-medium truncate ${isSelected ? 'text-white' : isLocked ? 'text-white/40' : 'text-white/70'}`}>
                                                {t(`styles.${style.id}.name`) || style.name}
                                            </div>
                                        </div>
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
                            })}
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};
