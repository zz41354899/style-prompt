'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Layers, Wind, Send, CheckCircle2 } from 'lucide-react';

export default function WorkflowPage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.workflow.title')}
            subtitle={t('pages.workflow.subtitle')}
        >
            <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/20">
                        <Layers className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{t('pages.workflow.stage1.title')}</h3>
                        <p className="text-white/40 font-light leading-relaxed mb-6">{t('pages.workflow.stage1.desc')}</p>
                        <div className="flex items-center gap-2 text-purple-400 text-sm font-bold italic">
                            <CheckCircle2 className="w-4 h-4" /> {t('pages.workflow.stage1.note')}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20">
                        <Wind className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{t('pages.workflow.stage2.title')}</h3>
                        <p className="text-white/40 font-light leading-relaxed">{t('pages.workflow.stage2.desc')}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center shrink-0 border border-green-500/20">
                        <Send className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{t('pages.workflow.stage3.title')}</h3>
                        <p className="text-white/40 font-light leading-relaxed">{t('pages.workflow.stage3.desc')}</p>
                    </div>
                </div>
            </div>
        </SubPageLayout>
    );
}
