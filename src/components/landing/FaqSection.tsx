'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

interface FaqSectionProps {
    /** 'free' 或 'pro' 變體 */
    variant?: 'free' | 'pro';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ variant = 'free' }) => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const isPro = variant === 'pro';

    // 根據變體決定 FAQ 數量和翻譯 key
    const faqCount = isPro ? 5 : 3;
    const translationPrefix = isPro ? 'pro.faq' : 'landing.faq';

    return (
        <section id="faq" className={isPro ? 'py-24 bg-[#020202] relative' : 'py-24 sm:py-32'}>
            {isPro && <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />}
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: isPro ? 20 : 0, scale: isPro ? 1 : 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {isPro && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                            <HelpCircle className="w-4 h-4 text-white/60" />
                            <span className="text-sm font-medium text-white/60">{t(`${translationPrefix}.badge`)}</span>
                        </div>
                    )}
                    <h2 className={isPro 
                        ? 'text-4xl font-black mb-4' 
                        : 'text-3xl font-bold mb-20 underline decoration-purple-600 decoration-8 underline-offset-[12px]'
                    }>
                        {t(`${translationPrefix}.title`)}
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className={isPro ? 'space-y-3' : 'space-y-6'}
                >
                    {Array.from({ length: faqCount }, (_, i) => i + 1).map((num, idx) => (
                        <motion.div
                            key={num}
                            variants={fadeIn}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === num ? null : num)}
                                className={`w-full text-left transition-all duration-300 ${isPro 
                                    ? `p-6 bg-[#0a0a0a] border rounded-xl ${openIndex === num 
                                        ? 'border-purple-500/30 shadow-[0_4px_20px_-5px_rgba(168,85,247,0.1)]' 
                                        : 'border-white/5 hover:border-white/10 hover:bg-[#111]'}`
                                    : `border border-white/5 rounded-[2rem] overflow-hidden bg-[#0a0a0a] hover:border-purple-500/20 p-8`
                                }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className={isPro ? 'font-semibold text-white' : 'font-bold text-lg pr-8'}>
                                        {t(`${translationPrefix}.q${num}`)}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === num ? 180 : 0 }}
                                        transition={{ duration: isPro ? 0.2 : 0.3 }}
                                        className={`flex-shrink-0 ${isPro 
                                            ? `p-1 rounded-lg ${openIndex === num ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-white/40'}`
                                            : `p-2 rounded-full bg-white/5 text-white/20 ${openIndex === num ? 'bg-purple-600/20 text-purple-400' : ''}`
                                        }`}
                                    >
                                        <ChevronDown className={isPro ? 'w-4 h-4' : 'w-5 h-5'} />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === num && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <p className={isPro 
                                                ? 'pt-4 text-white/50 text-sm leading-relaxed'
                                                : 'pt-8 text-white/40 leading-relaxed font-light text-sm'
                                            }>
                                                {t(`${translationPrefix}.a${num}`)}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
