'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Layout, FileText, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Step2Page() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.workflowSteps.step2.title')}
            subtitle={t('pages.workflowSteps.step2.subtitle')}
        >
            {/* Visual Demo */}
            <div className="aspect-[4/3] sm:aspect-video bg-[#050505] rounded-2xl sm:rounded-3xl border border-white/10 mb-8 sm:mb-16 overflow-hidden relative font-mono">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8 md:p-16">
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
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-16">
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5">
                    <Layout className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mb-3 sm:mb-4" />
                    <h4 className="font-bold mb-2 text-sm sm:text-base">{t('pages.workflowSteps.step2.f1.title')}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{t('pages.workflowSteps.step2.f1.desc')}</p>
                </div>
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-3 sm:mb-4" />
                    <h4 className="font-bold mb-2 text-sm sm:text-base">{t('pages.workflowSteps.step2.f2.title')}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{t('pages.workflowSteps.step2.f2.desc')}</p>
                </div>
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5 sm:col-span-2 md:col-span-1">
                    <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mb-3 sm:mb-4" />
                    <h4 className="font-bold mb-2 text-sm sm:text-base">{t('pages.workflowSteps.step2.f3.title')}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{t('pages.workflowSteps.step2.f3.desc')}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4">{t('pages.workflowSteps.step2.cta')}</h3>
                <Link href="/S01" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-purple-600 text-white font-black rounded-xl sm:rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20 text-sm sm:text-base">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
