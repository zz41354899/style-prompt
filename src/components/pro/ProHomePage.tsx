'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Sparkles, Zap, Shield, Palette, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useProLayoutContext } from './ProLayoutContext';
import { getThemeColor } from '@/data/themeColors';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const ProHomePage: React.FC = () => {
    const { t } = useTranslation();
    const { proStyles } = useProLayoutContext();

    return (
        <main className="flex-1 bg-[#0a0a0a] overflow-y-auto">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
                    >
                        <Crown className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">Pro 專屬</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        進階風格<span className="text-purple-400">資源庫</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/50 mb-8 max-w-2xl mx-auto"
                    >
                        解鎖 {proStyles.length} 個精心設計的進階風格模板，每個都包含完整的設計系統指示詞。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href={`/pro/${proStyles[0]?.id || 'S01'}`}
                            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-purple-600/20"
                        >
                            <span>開始瀏覽</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="#pricing"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-medium rounded-full transition-all"
                        >
                            查看方案
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: Palette, title: '進階風格', desc: `${proStyles.length} 個設計系統` },
                            { icon: Code2, title: '完整指示詞', desc: '隨時複製使用' },
                            { icon: Zap, title: '未來更新', desc: '免費獲得' },
                            { icon: Shield, title: '商業授權', desc: '可商用' },
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeIn}
                                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-colors"
                            >
                                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                                <p className="text-sm text-white/50">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Styles Grid */}
            <section className="py-16 px-4 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">全部 Pro 風格</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {proStyles.map((style, index) => {
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
                                        className="group block p-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 hover:bg-white/[0.07] transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                                                style={{ backgroundColor: color }}
                                            >
                                                {style.id.replace('S', '')}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-white truncate">
                                                    {t(`styles.${style.id}.name`) || style.name}
                                                </div>
                                                <div className="text-xs text-white/40 truncate">
                                                    {style.description}
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-16 px-4 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">一次購買，永久使用</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4">Pro 終身授權</h2>
                    <p className="text-white/50 mb-8">無訂閱，無隱藏費用。買一次就是你的。</p>

                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl mb-8">
                        <div className="text-5xl font-black mb-6">NT$2,000</div>
                        <Link
                            href="/api/stripe/checkout"
                            className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            立即購買
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            安全付款
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            14 天退款
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            即時交付
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
};
