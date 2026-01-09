'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Crown, Sparkles, ArrowRight, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

interface PricingAdModalProps {
    isOpen: boolean;
    onClose: () => void;
    onContinueFree: () => void;
}

export const PricingAdModal: React.FC<PricingAdModalProps> = ({
    isOpen,
    onClose,
    onContinueFree,
}) => {
    const { t } = useTranslation();

    const handleContinueFree = () => {
        // 記錄已看過廣告
        sessionStorage.setItem('hasSeenPricingAd', 'true');
        onContinueFree();
    };

    const freeFeatures = [
        t('pricingAd.free.feature1'),
        t('pricingAd.free.feature2'),
        t('pricingAd.free.feature3'),
    ];

    const proFeatures = [
        t('pricingAd.pro.feature1'),
        t('pricingAd.pro.feature2'),
        t('pricingAd.pro.feature3'),
        t('pricingAd.pro.feature4'),
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="relative p-6 sm:p-8">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                                    <Crown className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    {t('pricingAd.title')}
                                </h2>
                                <p className="text-white/50 text-sm sm:text-base">
                                    {t('pricingAd.subtitle')}
                                </p>
                            </div>

                            {/* Plans Comparison */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {/* Free Plan */}
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-lg font-bold text-white">Free</span>
                                        <span className="px-2 py-0.5 text-xs font-medium text-white/60 bg-white/10 rounded-full">
                                            {t('pricingAd.free.badge')}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {freeFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                                                <Check className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pro Plan */}
                                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                                    {/* Popular Badge */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        {t('pricingAd.pro.recommended')}
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 mt-2">
                                        <span className="text-lg font-bold text-white">Pro</span>
                                        <span className="px-2 py-0.5 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full">
                                            NT$2,000
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {proFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-white/90">
                                                <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={handleContinueFree}
                                        className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all text-sm"
                                    >
                                        {t('pricingAd.continueFree')}
                                    </button>
                                    <Link
                                        href="/pro"
                                        className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                                    >
                                        {t('pricingAd.upgradePro')}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <Link
                                    href="/coffee"
                                    className="w-full py-3 px-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 font-medium rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                                >
                                    <Coffee className="w-4 h-4" />
                                    {t('pricingAd.buyCoffee')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
