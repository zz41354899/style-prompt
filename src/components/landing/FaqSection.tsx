'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const FaqSection: React.FC = () => {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-20 underline decoration-purple-600 decoration-8 underline-offset-[12px]"
                >
                    {t('landing.faq.title')}
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-6"
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn}
                            className="border border-white/5 rounded-[2rem] overflow-hidden bg-[#0a0a0a] transition-colors hover:border-purple-500/20"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left transition-colors"
                            >
                                <span className="font-bold text-lg pr-8">{t(`landing.faq.q${i}`)}</span>
                                <motion.div
                                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`p-2 rounded-full bg-white/5 text-white/20 transition-all ${openFaq === i ? 'bg-purple-600/20 text-purple-400' : ''}`}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-white/40 leading-relaxed font-light text-sm">{t(`landing.faq.a${i}`)}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
