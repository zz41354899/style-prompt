'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';
import { styles, hasProVersion } from '@/data/styles';
import { getThemeColor } from '@/data/themeColors';

// 取得 Pro 風格列表
const proStyles = styles.filter(s => hasProVersion(s.id));

export const ProStyleShowcase: React.FC = () => {
    return (
        <section id="showcase" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">Pro 專屬風格</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                        精選進階風格
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        每個 Pro 風格都經過精心設計，包含完整的設計系統指示詞，
                        讓 AI 產出更專業、更精緻的視覺效果。
                    </p>
                </motion.div>

                {/* Style Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {proStyles.map((style, index) => {
                        const themeColor = getThemeColor(style.id);
                        return (
                            <motion.div
                                key={style.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                            >
                                {/* Color Accent */}
                                <div
                                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                                    style={{
                                        background: `linear-gradient(135deg, ${themeColor}40, transparent 60%)`,
                                    }}
                                />

                                {/* Content */}
                                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-3"
                                            style={{ backgroundColor: themeColor }}
                                        >
                                            {style.id.replace('S', '')}
                                        </div>
                                        <h3 className="font-semibold text-white mb-1 text-sm leading-tight">
                                            {style.name}
                                        </h3>
                                        <p className="text-xs text-white/40 line-clamp-2">
                                            {style.description}
                                        </p>
                                    </div>

                                    {/* Hover Action */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-1 text-xs text-purple-400">
                                            <Eye className="w-3 h-3" />
                                            <span>預覽風格</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Pro Badge */}
                                <div className="absolute top-3 right-3">
                                    <div className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded-full">
                                        Pro
                                    </div>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="#pricing"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all"
                    >
                        <Sparkles className="w-4 h-4" />
                        解鎖所有 Pro 風格
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
