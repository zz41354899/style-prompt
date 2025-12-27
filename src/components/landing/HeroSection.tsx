'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, FileCode } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 md:mb-8">
                            <Sparkles className="w-3.5 h-3.5 mr-2 text-purple-400" />
                            <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">{t('landing.hero.badge')}</span>
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            {t('landing.hero.title')}
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-base md:text-lg text-white/40 mb-10 md:mb-12 max-w-xl leading-relaxed font-light">
                            {t('landing.hero.subtitle')}
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="/S01"
                                className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-600/20 flex items-center justify-center group"
                            >
                                {t('landing.hero.cta.primary')}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/5 text-white/60 hover:text-white font-semibold rounded-xl transition-all flex items-center justify-center">
                                {t('landing.hero.cta.secondary')}
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c] group aspect-[16/12] md:aspect-[16/10] min-h-[400px] md:min-h-0 font-mono flex flex-col ring-1 ring-white/5">
                            {/* Editor Header */}
                            <div className="h-10 bg-[#151515] border-b border-white/10 flex items-center px-4 justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5 mr-4">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                                    </div>
                                    <div className="flex items-center px-3 py-1 bg-[#1e1e1e] border-t-2 border-purple-500 rounded-t text-xs text-white/80 gap-2">
                                        <FileCode className="w-3.5 h-3.5 text-blue-400" />
                                        <span>style_prompt.md</span>
                                    </div>
                                </div>
                            </div>

                            {/* Editor Content */}
                            <div className="flex-1 p-6 text-sm overflow-hidden bg-[#1e1e1e] font-mono leading-relaxed relative">
                                {/* Line Numbers */}
                                <div className="absolute left-0 top-6 bottom-0 w-12 flex flex-col items-end pr-4 text-white/10 text-xs select-none">
                                    {[...Array(15)].map((_, i) => <div key={i}>{i + 1}</div>)}
                                </div>

                                {/* Typing Content */}
                                <div className="pl-8 space-y-1">
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <span className="text-blue-400 font-bold"># StylePrompts Library</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5 }}
                                        className="pt-2"
                                    >
                                        <span className="text-purple-400 font-bold">## Objective</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2 }}
                                    >
                                        <span className="text-gray-300">Design a </span>
                                        <span className="text-yellow-400">**SaaS Landing Page**</span>
                                        <span className="text-gray-300"> using the </span>
                                        <span className="text-green-400">{'{{style}}'}</span>
                                        <span className="text-gray-300"> visual system.</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.5 }}
                                        className="pt-2"
                                    >
                                        <span className="text-purple-400 font-bold">## Specifications</span>
                                    </motion.div>

                                    {[
                                        { label: 'Typography:', val: 'Inter / JetBrains Mono' },
                                        { label: 'Palette:', val: 'Monochrome + Purple Accent' },
                                        { label: 'Components:', val: 'Hero, Features, Pricing' }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 3 + (i * 0.4) }}
                                            className="flex gap-2"
                                        >
                                            <span className="text-gray-500">-</span>
                                            <span className="text-blue-300">{item.label}</span>
                                            <span className="text-orange-300">"{item.val}"</span>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 5.5 }}
                                        className="pt-4 flex items-center gap-2"
                                    >
                                        <span className="text-green-500">{'>'}</span>
                                        <span className="text-gray-400 italic">Generating optimized prompt...</span>
                                        <motion.div
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="w-2 h-4 bg-purple-500"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 w-60 h-60 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
