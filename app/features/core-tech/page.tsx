'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Box, Cpu, Zap, Globe } from 'lucide-react';

export default function CoreTechPage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.coreTech.title')}
            subtitle={t('pages.coreTech.subtitle')}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                        <Box className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t('pages.coreTech.atomic.title')}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{t('pages.coreTech.atomic.desc')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                        <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t('pages.coreTech.rendering.title')}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{t('pages.coreTech.rendering.desc')}</p>
                </div>
            </div>

            <section className="space-y-8">
                <h2 className="text-2xl font-bold border-b border-white/5 pb-4">{t('pages.coreTech.advantagesTitle')}</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1"><Zap className="w-5 h-5 text-purple-500" /></div>
                        <div>
                            <h4 className="font-bold mb-2">{t('pages.coreTech.lowLatency.title')}</h4>
                            <p className="text-white/40 text-sm font-light">{t('pages.coreTech.lowLatency.desc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1"><Cpu className="w-5 h-5 text-purple-500" /></div>
                        <div>
                            <h4 className="font-bold mb-2">{t('pages.coreTech.metadata.title')}</h4>
                            <p className="text-white/40 text-sm font-light">{t('pages.coreTech.metadata.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </SubPageLayout>
    );
}
