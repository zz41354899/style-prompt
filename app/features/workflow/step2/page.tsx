'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Layers, Building2, ShoppingCart, Stethoscope, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Step2Page() {
    const { t } = useTranslation();

    const industries = [
        { name: 'SaaS 平台', icon: 'Sa', color: 'purple' },
        { name: '電商平台', icon: '商', color: 'blue' },
        { name: '醫療系統', icon: '醫', color: 'green' }
    ];

    return (
        <SubPageLayout
            title={t('pages.workflowSteps.step2.title')}
            subtitle={t('pages.workflowSteps.step2.subtitle')}
        >
            {/* Visual Demo */}
            <div className="aspect-video bg-[#050505] rounded-3xl border border-white/10 mb-16 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 p-16">
                    {industries.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ x: 10, scale: 1.02 }}
                            className="w-full max-w-md flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 transition-all cursor-pointer"
                        >
                            <div className={`w-16 h-16 ${item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'} rounded-2xl flex items-center justify-center font-black text-xl`}>{item.icon}</div>
                            <div className="flex-1 text-lg font-bold text-white/80">{item.name}</div>
                            <ArrowUpRight className="w-6 h-6 text-white/20" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Building2 className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step2.f1.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step2.f1.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <ShoppingCart className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step2.f2.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step2.f2.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <Stethoscope className="w-8 h-8 text-green-500 mb-4" />
                    <h4 className="font-bold mb-2">{t('pages.workflowSteps.step2.f3.title')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.workflowSteps.step2.f3.desc')}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-xl font-bold mb-4">{t('pages.workflowSteps.step2.cta')}</h3>
                <Link href="/S01" className="inline-block px-12 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
