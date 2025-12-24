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
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-8 p-16">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-0.5 bg-white/5 relative overflow-hidden">
                            <motion.div
                                animate={{ x: i % 2 === 0 ? ['-100%', '200%'] : ['200%', '-100%'] }}
                                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'linear', delay: i * 0.2 }}
                                className={`absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent ${i === 0 ? 'via-purple-500' : i === 1 ? 'via-blue-500' : i === 2 ? 'via-pink-500' : i === 3 ? 'via-cyan-500' : 'via-green-500'} to-transparent`}
                            />
                        </div>
                    ))}
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
