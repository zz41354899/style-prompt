'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Box, Globe, Zap } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const FeaturesSection: React.FC = () => {
    const { t } = useTranslation();

    const icons = [
        <Box key="box" className="w-6 h-6 text-purple-400" />,
        <Globe key="globe" className="w-6 h-6 text-purple-400" />,
        <Zap key="zap" className="w-6 h-6 text-purple-400" />
    ];

    return (
        <section id="features" className="py-24 sm:py-32 border-y border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={fadeIn} className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-white">{t('landing.features.title')}</motion.h2>
                    <motion.p variants={fadeIn} className="text-white/40 max-w-2xl mx-auto text-lg">{t('landing.features.subtitle')}</motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn}
                            whileHover={{ y: -5, borderColor: 'rgba(168,85,247,0.2)' }}
                            className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20"
                            >
                                {icons[i - 1]}
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4">{t(`landing.features.f${i}.title`)}</h3>
                            <p className="text-white/40 leading-relaxed font-light">{t(`landing.features.f${i}.desc`)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
