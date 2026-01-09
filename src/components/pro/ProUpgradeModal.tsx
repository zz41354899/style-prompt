'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Lock, Sparkles, ArrowRight, Coffee } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ProUpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
    styleName?: string;
}

export const ProUpgradeModal: React.FC<ProUpgradeModalProps> = ({
    isOpen,
    onClose,
    styleName = '此風格'
}) => {
    const { t } = useTranslation();
    // ESC 鍵關閉
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Header */}
                        <div className="p-8 pb-0 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl mb-4">
                                <Lock className="w-8 h-8 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{t('proModal.title')}</h2>
                            <p className="text-white/50 text-sm">
                                {t('proModal.subtitle', { styleName })}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="space-y-3 mb-6">
                                {[
                                    t('proModal.feature1'),
                                    t('proModal.feature2'),
                                    t('proModal.feature3'),
                                    t('proModal.feature4'),
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm">
                                        <div className="p-1 bg-purple-500/20 rounded">
                                            <Sparkles className="w-3 h-3 text-purple-400" />
                                        </div>
                                        <span className="text-white/70">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-3xl font-black">NT$2,000</span>
                                </div>
                                <p className="text-xs text-white/40 mt-1">{t('proModal.oneTimePurchase')}</p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                                <Link
                                    href="/pro#pricing"
                                    onClick={onClose}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                >
                                    {t('proModal.upgradeCTA')}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                <Link
                                    href="/coffee"
                                    onClick={onClose}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 text-white/80 font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                    <Coffee className="w-4 h-4" />
                                    {t('proModal.buyCoffee')}
                                </Link>

                                <button
                                    onClick={onClose}
                                    className="w-full py-3 text-white/40 text-sm hover:text-white transition-colors"
                                >
                                    {t('proModal.maybeLater')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
