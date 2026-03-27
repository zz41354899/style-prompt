'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Monitor, Layers, Zap, Database } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

export interface BentoItem {
    id: number;
    title: string;
    desc: string;
    icon: React.ReactNode;
}

interface WorkflowBentoProps {
    onSelectBento?: (id: number) => void;
}

export const WorkflowBento: React.FC<WorkflowBentoProps> = ({ onSelectBento }) => {
    const { t } = useTranslation();

    const bentoItems: BentoItem[] = [
        { id: 1, title: t('landing.workflow.b1.title'), desc: t('landing.workflow.b1.desc'), icon: <Monitor className="w-5 h-5 text-purple-400" /> },
        { id: 2, title: t('landing.workflow.b2.title'), desc: t('landing.workflow.b2.desc'), icon: <Layers className="w-5 h-5 text-purple-400" /> },
        { id: 3, title: t('landing.workflow.b3.title'), desc: t('landing.workflow.b3.desc'), icon: <Zap className="w-5 h-5 text-purple-400" /> },
        { id: 4, title: t('landing.workflow.b4.title'), desc: t('landing.workflow.b4.desc'), icon: <Database className="w-5 h-5 text-purple-400" /> }
    ];

    return (
        <section id="workflow" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={fadeIn} className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-white">{t('landing.workflow.title')}</motion.h2>
                    <motion.p variants={fadeIn} className="text-white/40 max-w-2xl mx-auto text-lg font-light">{t('landing.workflow.subtitle')}</motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[360px]"
                >
                    {bentoItems.map((item) => {
                        const isLarge = item.id === 1 || item.id === 4;
                        return (
                            <motion.button
                                key={item.id}
                                variants={fadeIn}
                                whileHover={{ scale: 0.995 }}
                                onClick={() => onSelectBento?.(item.id)}
                                className={`${isLarge ? 'md:col-span-8' : 'md:col-span-4'} bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/5 flex flex-col group text-left transition-all hover:bg-white/[0.02] hover:border-purple-500/20 relative overflow-hidden cursor-pointer`}
                            >
                                <div className={`mb-8 ${isLarge ? 'max-w-sm' : ''}`}>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>

                                {/* B1: JSON List */}
                                {item.id === 1 && (
                                    <div className="flex-1 bg-[#151515] rounded-xl border border-white/5 p-5 overflow-hidden relative font-mono text-xs">
                                        <div className="absolute top-0 left-0 right-0 h-6 bg-[#202020] border-b border-white/5 flex items-center px-3 gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                            <span className="ml-2 text-white/20">styles.json</span>
                                        </div>
                                        <div className="mt-6 space-y-2 opacity-60">
                                            <div className="text-white/30">{"{ styles: ["}</div>
                                            <div className="pl-4 text-purple-300/50">{"{ id: 'S01', name: 'Tech Minimal' },"}</div>
                                            <div className="pl-4 text-white/20">{"{ id: 'S02', name: 'Monochrome' },"}</div>
                                            <motion.div
                                                animate={{ backgroundColor: ["rgba(168,85,247,0)", "rgba(168,85,247,0.2)", "rgba(168,85,247,0)"] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="pl-4 text-white font-bold rounded"
                                            >
                                                {"> { id: 'S03', name: 'Mondrian' }"}
                                            </motion.div>
                                            <div className="pl-4 text-white/20">{"{ id: 'S04', name: 'Swiss' },"}</div>
                                            <div className="text-white/30">{"]\ }"}</div>
                                        </div>
                                    </div>
                                )}

                                {/* B2: Config Code */}
                                {item.id === 2 && (
                                    <div className="flex-1 bg-[#1a1a2e] rounded-xl border border-purple-500/20 p-5 flex flex-col justify-center relative font-mono text-xs overflow-hidden">
                                        <div className="text-purple-300/80 leading-relaxed">
                                            <span className="text-pink-400">const</span> config = {"{"}<br />
                                            &nbsp;&nbsp;target: <span className="text-green-400">'SaaS'</span>,<br />
                                            &nbsp;&nbsp;optimization: <span className="text-blue-400">true</span>,<br />
                                            &nbsp;&nbsp;modules: [<span className="text-yellow-400">'All'</span>]<br />
                                            {"}"};
                                        </div>
                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="text-white/40">// Status:</span>
                                            <motion.span
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="text-green-400 font-bold"
                                            >
                                                Auto-Optimized
                                            </motion.span>
                                        </div>
                                    </div>
                                )}

                                {/* B3: CLI Copy */}
                                {item.id === 3 && (
                                    <div className="flex-1 bg-black rounded-xl border border-white/10 p-5 flex flex-col justify-center font-mono text-xs relative">
                                        <div className="text-gray-400">
                                            <span className="text-green-500">$</span> cp prompt.md clipboard
                                        </div>
                                        <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ width: ["0%", "100%"] }}
                                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                        <motion.div
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, delay: 1.5 }}
                                            className="mt-2 text-green-400"
                                        >
                                            Copied successfully!
                                        </motion.div>
                                    </div>
                                )}

                                {/* B4: Wireframe Preview */}
                                {item.id === 4 && (
                                    <div className="flex-1 bg-[#101010] rounded-xl border border-white/5 p-6 relative overflow-hidden flex items-center justify-center">
                                        <div className="w-3/4 h-3/4 border border-white/10 rounded lg flex flex-col gap-2 p-2 opacity-50">
                                            <div className="h-4 w-1/3 bg-white/10 rounded"></div>
                                            <div className="flex gap-2 h-full">
                                                <div className="w-1/4 h-full bg-white/5 rounded"></div>
                                                <div className="flex-1 h-full bg-white/5 rounded"></div>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ top: ["0%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-px bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                                        />
                                        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                                            PREVIEW MODE
                                        </div>
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export { type BentoItem as BentoItemType };
