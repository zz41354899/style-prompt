'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 sm:py-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0a0a0a]" />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"
            />
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-7xl font-bold mb-10 tracking-tighter leading-[1.1]"
                >
                    {t('finalCta.title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/40 mb-16 max-w-2xl mx-auto font-light"
                >
                    {t('finalCta.subtitle')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                >
                    <Link
                        href="/S01"
                        className="w-full sm:w-auto px-16 py-6 bg-purple-600 text-white font-black rounded-[2rem] hover:bg-purple-500 transition-all shadow-[0_20px_60px_rgba(168,85,247,0.3)] group relative overflow-hidden active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-3">{t('finalCta.button')}<ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
