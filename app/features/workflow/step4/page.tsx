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
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative p-12">
                <div className="grid grid-cols-4 gap-4 h-full opacity-40">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="bg-white/5 rounded-2xl border border-white/10 p-4 flex flex-col gap-3"
                        >
                            <div className="h-2 w-full bg-white/10 rounded-full" />
                            <div className="flex-1 bg-white/[0.02] rounded-xl flex items-center justify-center">
                                <Layout className="w-8 h-8 text-white/10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 px-12 py-5 bg-white text-black rounded-2xl font-black flex items-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                >
                    <Plus className="w-6 h-6" /> Sync to Workspace
                </motion.div>
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
