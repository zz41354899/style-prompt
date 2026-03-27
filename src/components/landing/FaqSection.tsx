'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const FaqSection: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqCount = 3;
    const translationPrefix = 'landing.faq';

    return (
        <section id="faq" className="py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-20 underline decoration-purple-600 decoration-8 underline-offset-[12px]">
                        {t(`${translationPrefix}.title`)}
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-6"
                >
                    {Array.from({ length: faqCount }, (_, i) => i + 1).map((num, idx) => (
                        <motion.div
                            key={num}
                            variants={fadeIn}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === num ? null : num)}
                                className="w-full text-left transition-all duration-300 border border-white/5 rounded-[2rem] overflow-hidden bg-[#0a0a0a] hover:border-purple-500/20 p-8"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className="font-bold text-lg pr-8">
                                        {t(`${translationPrefix}.q${num}`)}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === num ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 p-2 rounded-full bg-white/5 text-white/20 ${openIndex === num ? 'bg-purple-600/20 text-purple-400' : ''}`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
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
                                            <p className="pt-8 text-white/40 leading-relaxed font-light text-sm">
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
