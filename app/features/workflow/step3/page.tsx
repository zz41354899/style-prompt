'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Copy, Lock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Step3Page() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.workflowSteps.step3.title')}
            subtitle={t('pages.workflowSteps.step3.subtitle')}
        >
            {/* Visual Demo */}
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative font-mono">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 sm:p-16">
                    <div className="w-full max-w-2xl bg-black rounded-xl border border-white/20 overflow-hidden shadow-2xl">
                        <div className="h-8 bg-[#101010] border-b border-white/10 flex items-center px-4">
                            <span className="text-xs text-white/20">terminal</span>
                        </div>
                        <div className="p-8 font-mono text-sm sm:text-base space-y-4">
                            <div className="flex gap-3">
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
                                    className="text-green-400 pt-2"
                                >
                                    ✔ Copied to clipboard successfully.
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 }}
                                className="flex gap-3 pt-2"
                            >
                                <span className="text-green-500">$</span>
                                <div className="w-3 h-5 bg-white/50 animate-pulse"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Copy className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step3.f1.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step3.f1.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step3.f2.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step3.f2.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Shield className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step3.f3.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step3.f3.desc')}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-xl font-bold mb-4">{t('pages.workflowSteps.step3.cta')}</h3>
                <Link href="/S01" className="inline-block px-12 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
