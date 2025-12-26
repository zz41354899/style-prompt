'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Monitor, Palette, Grid3X3, Eye } from 'lucide-react';
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
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative font-mono">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 sm:p-16">
                    <div className="w-full max-w-2xl bg-[#151515] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="h-10 bg-[#202020] border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-4 text-xs text-white/30">styles.json</span>
                        </div>
                        <div className="p-8 space-y-4 text-sm sm:text-base opacity-60">
                            <div className="text-white/30">{"{ styles: ["}</div>
                            <div className="pl-6 text-purple-300/50">{"{ id: 'S01', name: 'Tech Minimal' },"}</div>
                            <div className="pl-6 text-white/20">{"{ id: 'S02', name: 'Monochrome' },"}</div>
                            <motion.div
                                animate={{ backgroundColor: ["rgba(168,85,247,0)", "rgba(168,85,247,0.2)", "rgba(168,85,247,0)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="pl-6 text-white font-bold rounded -ml-2 p-1"
                            >
                                {"> { id: 'S03', name: 'Mondrian' }"}
                            </motion.div>
                            <div className="pl-6 text-white/20">{"{ id: 'S04', name: 'Swiss' },"}</div>
                            <div className="text-white/30">{"] }"}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Palette className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step1.f1.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step1.f1.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Grid3X3 className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step1.f2.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step1.f2.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Eye className="w-8 h-8 text-pink-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step1.f3.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step1.f3.desc')}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-xl font-bold mb-4">{t('pages.workflowSteps.step1.cta')}</h3>
                <Link href="/S01" className="inline-block px-12 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
