'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { BentoItem } from './WorkflowBento';

interface BentoModalProps {
    selectedBento: number | null;
    bentoItems: BentoItem[];
    onClose: () => void;
}

export const BentoModal: React.FC<BentoModalProps> = ({
    selectedBento,
    bentoItems,
    onClose
}) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {selectedBento !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] max-w-4xl w-full relative shadow-[0_0_150px_rgba(139,92,246,0.15)] ring-1 ring-white/5 z-10 overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white/20 hover:text-white transition-colors p-2 sm:p-3 bg-white/5 rounded-full hover:scale-110 active:scale-95 transition-all text-sm z-20"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Visual Content Area */}
                        <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-[#050505] relative overflow-hidden font-mono flex-shrink-0">
                            {/* Card 1: Terminal List (Select Style) */}
                            {selectedBento === 1 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 md:p-10">
                                    <div className="w-full max-w-2xl bg-[#151515] rounded-lg sm:rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                        <div className="h-8 sm:h-10 bg-[#202020] border-b border-white/5 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
                                            <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-white/30">styles.json</span>
                                        </div>
                                        <div className="p-4 sm:p-8 space-y-2 sm:space-y-4 text-[10px] sm:text-sm md:text-base">
                                            <div className="text-white/30">{"{"}</div>
                                            <div className="pl-3 sm:pl-6 text-white/30">"styles": [</div>
                                            <div className="pl-6 sm:pl-12 space-y-1 sm:space-y-2">
                                                <div className="text-white/50 text-[9px] sm:text-sm">
                                                    {"{ \"id\": \"S01\", \"name\": \"Tech Minimal\", \"type\": \"SaaS\" },"}
                                                </div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="bg-purple-500/10 border border-purple-500/30 p-1 sm:p-2 rounded text-purple-300 -mx-1 sm:-mx-2 text-[9px] sm:text-sm"
                                                >
                                                    {"> { \"id\": \"S02\", \"name\": \"Monochrome\", \"type\": \"SaaS\" },"}
                                                </motion.div>
                                                <div className="text-white/50 text-[9px] sm:text-sm">
                                                    {"{ \"id\": \"S05\", \"name\": \"Brutalist\", \"type\": \"Portfolio\" }"}
                                                </div>
                                            </div>
                                            <div className="pl-3 sm:pl-6 text-white/30">]</div>
                                            <div className="text-white/30">{"}"}</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Card 2: Config Editor (Optimize) */}
                            {selectedBento === 2 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 md:p-10">
                                    <div className="w-full max-w-2xl bg-[#1a1a2e] rounded-lg sm:rounded-xl border border-purple-500/20 overflow-hidden shadow-2xl relative">
                                        <div className="h-8 sm:h-10 bg-[#151525] border-b border-purple-500/10 flex items-center px-3 sm:px-4 justify-between">
                                            <div className="text-[10px] sm:text-xs text-purple-300/50">config.ts</div>
                                            <div className="text-[8px] sm:text-[10px] text-green-400 font-bold px-1.5 sm:px-2 py-0.5 bg-green-500/10 rounded">OPTIMIZED</div>
                                        </div>
                                        <div className="p-4 sm:p-8 text-[10px] sm:text-sm md:text-base leading-relaxed">
                                            <div><span className="text-pink-400">export const</span> config = {"{"}</div>
                                            <div className="pl-3 sm:pl-6 space-y-0.5 sm:space-y-1">
                                                <div>industry: <span className="text-green-400">'SaaS'</span>,</div>
                                                <div>useCase: <span className="text-green-400">'Landing Page'</span>,</div>
                                                <div>
                                                    features: [
                                                    <span className="text-blue-400">'Hero'</span>,
                                                    <span className="text-blue-400">'Features'</span>,
                                                    <span className="text-blue-400">'Pricing'</span>
                                                    ],
                                                </div>
                                                <div>tone: <span className="text-green-400">'Professional'</span>,</div>
                                                <div>framework: <span className="text-green-400">'Next.js'</span></div>
                                            </div>
                                            <div>{"}"};</div>
                                        </div>
                                        <motion.div
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 text-green-500/50 text-[8px] sm:text-xs"
                                        >
                      // Automated Optimization Active
                                        </motion.div>
                                    </div>
                                </div>
                            )}

                            {/* Card 3: CLI Copy */}
                            {selectedBento === 3 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 md:p-10">
                                    <div className="w-full max-w-2xl bg-black rounded-lg sm:rounded-xl border border-white/20 overflow-hidden shadow-2xl">
                                        <div className="h-6 sm:h-8 bg-[#101010] border-b border-white/10 flex items-center px-3 sm:px-4">
                                            <span className="text-[10px] sm:text-xs text-white/20">terminal</span>
                                        </div>
                                        <div className="p-4 sm:p-8 font-mono text-[10px] sm:text-sm md:text-base space-y-2 sm:space-y-4">
                                            <div className="flex gap-2 sm:gap-3">
                                                <span className="text-green-500">$</span>
                                                <span className="text-white">style-prompts copy --id=S01</span>
                                            </div>
                                            <div className="space-y-1">
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="text-white/50"
                                                >
                                                    Fetching prompt template...
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 1.0 }}
                                                    className="text-white/50"
                                                >
                                                    Optimizing for SaaS...
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 1.5 }}
                                                    className="text-green-400 pt-1 sm:pt-2"
                                                >
                                                    ✔ Copied to clipboard successfully.
                                                </motion.div>
                                            </div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                                className="flex gap-2 sm:gap-3 pt-1 sm:pt-2"
                                            >
                                                <span className="text-green-500">$</span>
                                                <div className="w-2 sm:w-3 h-4 sm:h-5 bg-white/50 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Card 4: Wireframe Scan (Preview) */}
                            {selectedBento === 4 && (
                                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10">
                                    <div className="relative w-full h-full border-2 border-dashed border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 flex gap-2 sm:gap-4 opacity-50">
                                        {/* Mock Wireframe */}
                                        <div className="w-1/4 h-full bg-white/5 rounded-md sm:rounded-lg flex flex-col gap-1 sm:gap-2 p-1 sm:p-2">
                                            <div className="h-6 sm:h-8 w-full bg-white/10 rounded"></div>
                                            <div className="flex-1 w-full bg-white/5 rounded"></div>
                                        </div>
                                        <div className="flex-1 h-full bg-white/5 rounded-md sm:rounded-lg p-2 sm:p-4 flex flex-col gap-2 sm:gap-4">
                                            <div className="h-12 sm:h-20 w-full bg-white/10 rounded-md sm:rounded-lg"></div>
                                            <div className="grid grid-cols-2 gap-2 sm:gap-4 flex-1">
                                                <div className="bg-white/5 rounded-md sm:rounded-lg"></div>
                                                <div className="bg-white/5 rounded-md sm:rounded-lg"></div>
                                                <div className="bg-white/5 rounded-md sm:rounded-lg"></div>
                                                <div className="bg-white/5 rounded-md sm:rounded-lg"></div>
                                            </div>
                                        </div>

                                        {/* Scan Effect */}
                                        <motion.div
                                            animate={{ top: ['-20%', '120%'] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                            className="absolute left-0 right-0 h-12 sm:h-20 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 border-y border-purple-500/30 blur-[2px]"
                                        />
                                    </div>
                                    <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 px-2 sm:px-4 py-1 sm:py-2 bg-purple-600 text-white text-[10px] sm:text-xs font-bold rounded shadow-lg">
                                        RENDERING PREVIEW
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Title & Description */}
                        <div className="p-4 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 text-white tracking-tighter">{bentoItems.find(item => item.id === selectedBento)?.title}</h3>
                            <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-3 sm:mb-4">{bentoItems.find(item => item.id === selectedBento)?.desc}</p>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 sm:gap-3"><div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" /><span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-purple-400">StylePrompts</span></div>
                                <Link
                                    href={`/features/workflow/step${selectedBento}`}
                                    className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-black font-black rounded-xl sm:rounded-2xl hover:bg-slate-200 transition-all shadow-xl shadow-white/5 text-center text-sm sm:text-base"
                                >
                                    {t('landing.workflow.learnMore')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
