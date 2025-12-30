'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Lock, Zap, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProUpgradeModalProps {
    styleName: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ProUpgradeModal: React.FC<ProUpgradeModalProps> = ({
    styleName,
    isOpen,
    onClose
}) => {
    const { t } = useTranslation();

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative bg-[#1a1a2e] border border-purple-500/20 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-pink-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="relative p-8 md:p-10 flex flex-col items-center text-center">

                            {/* Badge */}
                            <div className="mb-6 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
                                <span className="text-xs font-bold text-purple-300 tracking-wider uppercase flex items-center gap-1.5">
                                    <Lock className="w-3 h-3" />
                                    {t('proModal.locked') || 'PRO STYLE LOCKED'}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                {t('proModal.title')}
                            </h2>

                            {/* Subtitle */}
                            <p className="text-purple-200/60 mb-8 max-w-[80%]">
                                {t('proModal.subtitle', { styleName })}
                            </p>

                            {/* Features list */}
                            <div className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 mb-8 space-y-4">
                                <div className="flex items-start gap-4 text-left">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Sparkles className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white mb-0.5">{t('proModal.feature1_title') || '100+ Premium Styles'}</h3>
                                        <p className="text-xs text-white/50 leading-relaxed">{t('proModal.feature1')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-left">
                                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Zap className="w-4 h-4 text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white mb-0.5">{t('proModal.feature2_title') || 'Full Source Prompts'}</h3>
                                        <p className="text-xs text-white/50 leading-relaxed">{t('proModal.feature2')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-left">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Crown className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white mb-0.5">{t('proModal.feature3_title') || 'Prioritized Updates'}</h3>
                                        <p className="text-xs text-white/50 leading-relaxed">{t('proModal.feature3')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="w-full space-y-4">
                                <button
                                    disabled
                                    className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-900/40"
                                >
                                    <Sparkles className="w-5 h-5 fill-current animate-pulse" />
                                    {t('proModal.upgradeCTA')}
                                    <span className="absolute -top-3 -right-3 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg transform rotate-12">
                                        SOON
                                    </span>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="text-sm text-white/40 hover:text-white transition-colors py-2"
                                >
                                    {t('proModal.maybeLater')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
