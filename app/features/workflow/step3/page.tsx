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
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-16">
                    <div className="flex items-center gap-6 mb-8">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-3 h-3 rounded-full bg-purple-500"
                        />
                        <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                className="w-1/2 h-full bg-purple-500/50"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square bg-purple-600/10 rounded-3xl border border-purple-500/20 flex flex-col items-center justify-center"
                        >
                            <Lock className="w-16 h-16 text-purple-600/60" />
                            <span className="text-sm mt-4 text-purple-500/60 font-black uppercase tracking-widest">SECURE</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square bg-blue-600/10 rounded-3xl border border-blue-500/20 flex flex-col items-center justify-center"
                        >
                            <Shield className="w-16 h-16 text-blue-600/60" />
                            <span className="text-sm mt-4 text-blue-500/60 font-black uppercase tracking-widest">VERIFIED</span>
                        </motion.div>
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
