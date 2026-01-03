'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Eye } from 'lucide-react';
import { styles, hasProVersion } from '@/data/styles';
import { getThemeColor } from '@/data/themeColors';
import { useTranslation } from 'react-i18next';

export const ProStyleShowcase: React.FC = () => {
    const { t } = useTranslation();
    const proStyles = styles.filter(s => hasProVersion(s.id));

    return (
        <section id="styles" className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Crown className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">{t('pro.showcase.badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        {t('pro.showcase.title')}
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl mx-auto">
                        {t('pro.showcase.subtitle')}
                    </p>
                </motion.div>

                {/* Styles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {proStyles.slice(0, 6).map((style, index) => {
                        const color = getThemeColor(style.id);
                        return (
                            <motion.div
                                key={style.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/pro/${style.id}`}
                                    className="group relative block h-full p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-indigo-500/50 transition-all duration-500"
                                >
                                    <div className="relative h-full p-6 bg-[#080808] rounded-[22px] overflow-hidden flex flex-col">
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Header */}
                                        <div className="relative flex items-start justify-between mb-8">
                                            <div className="flex items-center gap-5">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg"
                                                    style={{ backgroundColor: color }}
                                                >
                                                    {style.id.replace('S', '')}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">
                                                        {t(`styles.${style.id}.name`) || style.name}
                                                    </h3>
                                                    <div className="mt-1 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-purple-300 font-bold uppercase tracking-wider group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-colors w-fit">
                                                        Pro
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 bg-white/5 rounded-full text-white/40 group-hover:text-white group-hover:bg-purple-600 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-all duration-300 transform group-hover:-rotate-45">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="relative text-sm text-white/40 line-clamp-2 mb-6 flex-1">
                                            {t(`styles.${style.id}.description`) || style.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="relative flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                            <div className="flex items-center gap-2 text-xs font-medium text-white/40 group-hover:text-purple-300 transition-colors">
                                                <Eye className="w-4 h-4" />
                                                <span>{t('preview.open')}</span>
                                            </div>
                                            <div className="text-xs text-white/20 font-mono">
                                                #{style.id}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/pro/S01"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-purple-600/20"
                    >
                        {t('pro.showcase.viewAll')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
