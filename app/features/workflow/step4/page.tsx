'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Layout, Eye, Smartphone, Monitor, Plus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Step4Page() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.workflowSteps.step4.title')}
            subtitle={t('pages.workflowSteps.step4.subtitle')}
        >
            {/* Visual Demo */}
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative font-mono">
                <div className="absolute inset-0 flex items-center justify-center p-12 sm:p-24">
                    <div className="relative w-full h-full border-2 border-dashed border-white/10 rounded-xl p-4 flex gap-4 opacity-50 bg-[#101010]">
                        {/* Mock Wireframe */}
                        <div className="w-1/4 h-full bg-white/5 rounded-lg flex flex-col gap-2 p-2">
                            <div className="h-8 w-full bg-white/10 rounded"></div>
                            <div className="flex-1 w-full bg-white/5 rounded"></div>
                        </div>
                        <div className="flex-1 h-full bg-white/5 rounded-lg p-4 flex flex-col gap-4">
                            <div className="h-20 w-full bg-white/10 rounded-lg"></div>
                            <div className="grid grid-cols-2 gap-4 flex-1">
                                <div className="bg-white/5 rounded-lg"></div>
                                <div className="bg-white/5 rounded-lg"></div>
                                <div className="bg-white/5 rounded-lg"></div>
                                <div className="bg-white/5 rounded-lg"></div>
                            </div>
                        </div>

                        {/* Scan Effect */}
                        <motion.div
                            animate={{ top: ['-20%', '120%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute left-0 right-0 h-20 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 border-y border-purple-500/30 blur-[2px]"
                        />
                    </div>
                    <div className="absolute bottom-12 right-12 px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded shadow-lg">
                        RENDERING PREVIEW
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Eye className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step4.f1.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step4.f1.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Smartphone className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step4.f2.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step4.f2.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Monitor className="w-8 h-8 text-green-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step4.f3.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step4.f3.desc')}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-xl font-bold mb-4">{t('pages.workflowSteps.step4.cta')}</h3>
                <Link href="/S01" className="inline-block px-12 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
