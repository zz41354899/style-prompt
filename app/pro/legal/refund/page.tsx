'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProSubPageLayout } from '@/components/pro/ProSubPageLayout';

export default function ProRefundPage() {
    const { t } = useTranslation();

    return (
        <ProSubPageLayout
            title={t('pro.legal.refund.title')}
            subtitle={t('pro.legal.lastUpdated')}
        >
            <div className="space-y-10 text-white/60 font-light leading-relaxed">
                <p className="text-lg text-white/70">{t('pro.legal.refund.intro')}</p>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.refund.s1Title')}</h2>
                    <p>{t('pro.legal.refund.s1')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.refund.s2Title')}</h2>
                    <p>{t('pro.legal.refund.s2')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.refund.s3Title')}</h2>
                    <p>{t('pro.legal.refund.s3')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.refund.s4Title')}</h2>
                    <p>{t('pro.legal.refund.s4')}</p>
                </section>
            </div>
        </ProSubPageLayout>
    );
}
