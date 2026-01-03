'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProFaqSection: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: t('pro.faq.q1'), a: t('pro.faq.a1') },
        { q: t('pro.faq.q2'), a: t('pro.faq.a2') },
        { q: t('pro.faq.q3'), a: t('pro.faq.a3') },
        { q: t('pro.faq.q4'), a: t('pro.faq.a4') },
        { q: t('pro.faq.q5'), a: t('pro.faq.a5') },
    ];

    return (
        <section id="faq" className="py-24 bg-[#020202] relative">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-white/60" />
                        <span className="text-sm font-medium text-white/60">{t('pro.faq.badge')}</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">
                        {t('pro.faq.title')}
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full p-6 text-left bg-[#0a0a0a] border rounded-xl transition-all duration-300 ${openIndex === i
                                    ? 'border-purple-500/30 shadow-[0_4px_20px_-5px_rgba(168,85,247,0.1)]'
                                    : 'border-white/5 hover:border-white/10 hover:bg-[#111]'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className="font-semibold text-white">{faq.q}</span>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`p-1 rounded-lg flex-shrink-0 ${openIndex === i ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-white/40'
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-4 text-white/50 text-sm leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
