'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Palette, Grid3X3, Eye } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Step1Page() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.workflowSteps.step1.title')}
            subtitle={t('pages.workflowSteps.step1.subtitle')}
        >
            {/* Visual Demo */}
            <div className="aspect-[4/3] sm:aspect-video bg-[#050505] rounded-2xl sm:rounded-3xl border border-white/10 mb-8 sm:mb-16 overflow-hidden relative font-mono">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8 md:p-16">
                    <div className="w-full max-w-2xl bg-[#151515] rounded-lg sm:rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="h-8 sm:h-10 bg-[#202020] border-b border-white/5 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-white/30">styles.json</span>
                        </div>
                        <div className="p-4 sm:p-8 space-y-2 sm:space-y-4 text-[10px] sm:text-sm md:text-base opacity-60">
                            <div className="text-white/30">{"{ styles: ["}</div>
                            <div className="pl-3 sm:pl-6 text-purple-300/50">{"{ id: 'S01', name: 'Tech Minimal' },"}</div>
                            <div className="pl-3 sm:pl-6 text-white/20">{"{ id: 'S02', name: 'Monochrome' },"}</div>
                            <motion.div
                                animate={{ backgroundColor: ["rgba(168,85,247,0)", "rgba(168,85,247,0.2)", "rgba(168,85,247,0)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="pl-3 sm:pl-6 text-white font-bold rounded -ml-1 sm:-ml-2 p-0.5 sm:p-1"
                            >
                                {"> { id: 'S03', name: 'Mondrian' }"}
                            </motion.div>
                            <div className="pl-3 sm:pl-6 text-white/20">{"{ id: 'S04', name: 'Swiss' },"}</div>
                            <div className="text-white/30">{"] }"}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-16">
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5">
                    <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mb-3 sm:mb-4" />
                    <h4 className="font-bold mb-2 text-sm sm:text-base">{t('pages.workflowSteps.step1.f1.title')}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{t('pages.workflowSteps.step1.f1.desc')}</p>
                </div>
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5">
                    <Grid3X3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-3 sm:mb-4" />
                    <h4 className="font-bold mb-2 text-sm sm:text-base">{t('pages.workflowSteps.step1.f2.title')}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{t('pages.workflowSteps.step1.f2.desc')}</p>
                </div>
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5 sm:col-span-2 md:col-span-1">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mb-3 sm:mb-4" />
                    <h4 className="font-bold mb-2 text-sm sm:text-base">{t('pages.workflowSteps.step1.f3.title')}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{t('pages.workflowSteps.step1.f3.desc')}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4">{t('pages.workflowSteps.step1.cta')}</h3>
                <Link href="/S01" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-purple-600 text-white font-black rounded-xl sm:rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20 text-sm sm:text-base">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
