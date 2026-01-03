'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Crown, Sparkles, ArrowRight, ShoppingBag, Layout, Utensils, Building2, GraduationCap, Activity, Check } from 'lucide-react';

// --- Visual Components ---

const BarChartVisual = () => (
    <div className="flex items-end justify-center px-4 h-32 gap-1.5 w-full">
        {[40, 70, 45, 90, 60, 80, 50, 75, 65, 95, 55, 85, 45, 70, 60, 80].map((h, i) => (
            <div key={i} className="relative flex-1 h-full flex items-end group/bar">
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.03, duration: 0.6, ease: "easeOut" }}
                    className={`w-full rounded-t-[2px] bg-gradient-to-t from-purple-900/40 to-purple-500 opacity-60 group-hover/bar:opacity-100 transition-opacity`}
                >
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/50" />
                </motion.div>
                {/* Random highlight dots */}
                {(i === 3 || i === 9 || i === 14) && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-emerald-400' : i === 9 ? 'bg-amber-400' : 'bg-rose-400'} shadow-[0_0_8px_currentColor]`}
                    />
                )}
            </div>
        ))}
    </div>
);

const PromptLibraryVisual = () => (
    <div className="w-full max-w-[420px] mx-auto font-mono text-[10px] sm:text-[11px] leading-relaxed select-none pointer-events-none">
        {/* Editor Window */}
        <div className="rounded-lg bg-[#0E0E12] border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center px-4 py-2 bg-[#18181B] border-b border-white/5 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 px-3 py-0.5 rounded-t-md bg-[#0E0E12] border-t border-x border-white/5 text-white/50 flex items-center gap-1.5">
                    <span className="text-blue-400 text-[10px]">{'{ }'}</span>
                    <span>style_prompt.md</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3 font-medium">
                <div>
                    <span className="text-blue-400">#</span> <span className="text-white">StylePrompts Library</span>
                </div>

                <div className="mt-4">
                    <span className="text-blue-400">##</span> <span className="text-purple-300">Objective</span>
                    <div className="text-white/60 pl-2 mt-1">
                        Design a <span className="text-amber-300">**SaaS Landing Page**</span> using the <span className="text-green-400">{`{{style}}`}</span> visual system.
                    </div>
                </div>

                <div className="mt-4">
                    <span className="text-blue-400">##</span> <span className="text-purple-300">Specifications</span>
                    <div className="text-white/60 pl-2 mt-1 space-y-1">
                        <div>- Typography: "Inter / JetBrains Mono"</div>
                        <div>- Palette: "Monochrome + Purple Accent"</div>
                        <div>- Components: "Hero, Features, Pricing"</div>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-white/40">
                    <span className="text-green-500">{'>'}</span> Generating optimized prompt... <span className="w-1.5 h-4 bg-purple-500 animate-pulse" />
                </div>
            </div>
        </div>
    </div>
);

const TemplatesVisual = () => (
    <div className="grid grid-cols-3 gap-3 p-2">
        {[
            { icon: ShoppingBag, color: 'text-rose-400', bg: 'bg-rose-400/10' },
            { icon: Layout, color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { icon: Utensils, color: 'text-amber-400', bg: 'bg-amber-400/10' },
            { icon: Building2, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
            { icon: GraduationCap, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { icon: Activity, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
        ].map((item, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                className={`aspect-square rounded-xl ${item.bg} flex items-center justify-center border border-white/5 hover:scale-105 transition-transform`}
            >
                <item.icon className={`w-5 h-5 ${item.color}`} />
            </motion.div>
        ))}
    </div>
);

const UpdatesVisual = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <div className="relative">
            {/* Glow */}
            <div className={`absolute -inset-4 bg-purple-500/20 blur-xl transition-opacity duration-500 ${isOn ? 'opacity-100' : 'opacity-0'}`} />

            <button
                onClick={(e) => { e.stopPropagation(); setIsOn(!isOn); }}
                className={`relative w-32 h-14 rounded-full p-1.5 transition-colors duration-300 ${isOn ? 'bg-[#1A1A22] border border-purple-500/30' : 'bg-[#1A1A22] border border-white/10'}`}
            >
                {/* Track text */}
                <div className="absolute inset-0 flex items-center justify-between px-4 text-[10px] font-bold tracking-wider uppercase">
                    <span className={`transition-opacity ${isOn ? 'opacity-100 text-purple-400' : 'opacity-20 text-white'}`}>On</span>
                    <span className={`transition-opacity ${!isOn ? 'opacity-100 text-white' : 'opacity-20 text-white'}`}>Off</span>
                </div>

                {/* Knobs */}
                <motion.div
                    animate={{ x: isOn ? '100%' : '0%' }}
                    className={`relative z-10 w-1/2 h-full rounded-full shadow-lg flex items-center justify-center transition-colors ${isOn ? 'bg-purple-600' : 'bg-[#2A2A35]'}`}
                >
                    {isOn && <Check className="w-4 h-4 text-white" />}
                </motion.div>
            </button>
        </div>
    );
};

// --- Main Component ---

export const ProFeaturesGrid: React.FC = () => {
    const { t } = useTranslation();
    const [activeFeature, setActiveFeature] = useState<string | null>(null);

    const getFeatureData = (id: string) => ({
        title: t(`pro.features.${id}.title`),
        subtitle: t(`pro.features.${id}.subtitle`),
        description: t(`pro.features.${id}.description`),
        stats: t(`pro.features.${id}.stats`),
    });

    // Styles
    const cardBase = "group relative bg-[#0B0C15] border border-white/[0.08] hover:border-white/[0.15] rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]";
    const highlight = "absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent";

    return (
        <section id="features" className="py-20 bg-[#020202] text-white">
            <div className="max-w-[1000px] mx-auto px-4">

                {/* Section Header */}
                <div className="flex items-center justify-between text-white/40 text-sm font-medium mb-8 px-2">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_currentColor]" />
                        Pro Features Collection
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">

                    {/* 1. Pro Styles (Chart) - Top Left 2 cols */}
                    <motion.div
                        onClick={() => setActiveFeature('proStyles')}
                        className={`${cardBase} md:col-span-2 h-[300px] flex flex-col`}
                    >
                        <div className={highlight} />
                        <div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[80px] pointer-events-none" />

                        {/* Visual */}
                        <div className="flex-1 flex items-end justify-center pb-8 px-6">
                            <BarChartVisual />
                        </div>

                        {/* Label */}
                        <div className="p-6 pt-0">
                            <h3 className="text-xl font-bold text-white mb-1">{t('pro.features.proStyles.title')}</h3>
                            <p className="text-sm text-white/40">{t('pro.features.proStyles.subtitle')}</p>
                        </div>
                    </motion.div>

                    {/* 2. Commercial (Big Stat) - Top Right 1 col */}
                    <motion.div
                        onClick={() => setActiveFeature('commercial')}
                        className={`${cardBase} h-[300px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0F0F1A] to-[#0B0C15]`}
                    >
                        <div className={highlight} />
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

                        <div className="relative z-10">
                            <div className="text-5xl font-black text-white tracking-tighter mb-2">
                                <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">OK</span>
                            </div>
                            <div className="px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider mb-8">
                                License
                            </div>
                            <p className="text-sm text-white/40 font-medium px-4">{t('pro.features.commercial.title')}</p>
                        </div>
                    </motion.div>

                    {/* 3. Premium (Big Stat) - Top Right 1 col */}
                    <motion.div
                        onClick={() => setActiveFeature('premium')}
                        className={`${cardBase} h-[300px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0F0F1A] to-[#0B0C15]`}
                    >
                        <div className={highlight} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/10 blur-[40px]" />

                        <div className="relative z-10">
                            <div className="text-5xl font-black text-white tracking-tighter mb-2">
                                VIP
                            </div>
                            <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-8">Support</p>
                            <p className="text-sm text-white/40 font-medium px-4">{t('pro.features.premium.title')}</p>
                        </div>
                    </motion.div>

                    {/* 4. Design System (Code) - Bottom Left 2 cols */}
                    <motion.div
                        onClick={() => setActiveFeature('designSystem')}
                        className={`${cardBase} md:col-span-2 h-[340px] flex flex-col`}
                    >
                        <div className={highlight} />
                        <div className="absolute -left-10 bottom-0 w-40 h-40 bg-blue-500/5 blur-[60px] pointer-events-none" />

                        <div className="flex-1 flex items-center justify-center p-8 pt-10">
                            <PromptLibraryVisual />
                        </div>

                        <div className="p-6 pt-0 mt-auto flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{t('pro.features.designSystem.title')}</h3>
                                <p className="text-sm text-white/40">{t('pro.features.designSystem.subtitle')}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                                <span className="text-lg">✨</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 5. Templates (Icons) - Bottom Right 1 col */}
                    <motion.div
                        onClick={() => setActiveFeature('templates')}
                        className={`${cardBase} h-[340px] flex flex-col items-center justify-center relative`}
                    >
                        <div className={highlight} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

                        {/* Grid effect background */}
                        <div className="absolute inset-x-4 inset-y-8 opacity-10"
                            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                        <div className="flex-1 w-full flex items-center justify-center p-6 pb-20 z-0">
                            <TemplatesVisual />
                        </div>

                        <div className="absolute bottom-0 inset-x-0 p-6 z-20 text-center">
                            <h3 className="text-lg font-bold text-white mb-1">6 Industries</h3>
                            <p className="text-xs text-white/40 uppercase tracking-wide font-medium">{t('pro.features.templates.title')}</p>
                        </div>
                    </motion.div>

                    {/* 6. Updates (Toggle) - Bottom Right 1 col */}
                    <motion.div
                        onClick={() => setActiveFeature('updates')}
                        className={`${cardBase} h-[340px] flex flex-col items-center justify-center bg-gradient-to-b from-[#0F0F1A] to-[#0B0C15]`}
                    >
                        <div className={highlight} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-purple-500/10 blur-[50px]" />

                        <div className="flex-1 flex items-center justify-center">
                            <UpdatesVisual />
                        </div>

                        <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-white mb-1">{t('pro.features.updates.title')}</h3>
                            <p className="text-xs text-white/40 uppercase tracking-wide font-medium">Auto-Enabled</p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setActiveFeature(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg bg-[#0B0C15] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500" />
                            {(() => {
                                const data = getFeatureData(activeFeature);
                                return (
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
                                                <p className="text-white/60">{data.subtitle}</p>
                                            </div>
                                            <button
                                                onClick={() => setActiveFeature(null)}
                                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 mb-8">
                                            <p className="text-white/80 leading-relaxed">
                                                {data.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 text-sm text-purple-400 font-medium">
                                            <Crown className="w-4 h-4" />
                                            <span>Included in Pro Plan</span>
                                        </div>
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
