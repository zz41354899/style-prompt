'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProSubPageLayout } from '@/components/pro/ProSubPageLayout';

export default function ProPrivacyPage() {
    const { t } = useTranslation();

    return (
        <ProSubPageLayout
            title={t('pro.legal.privacy.title')}
            subtitle={t('pro.legal.lastUpdated')}
        >
            <div className="space-y-10 text-white/60 font-light leading-relaxed">
                <p className="text-lg text-white/70">{t('pro.legal.privacy.intro')}</p>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.privacy.s1Title')}</h2>
                    <p>{t('pro.legal.privacy.s1')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.privacy.s2Title')}</h2>
                    <p>{t('pro.legal.privacy.s2')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.privacy.s3Title')}</h2>
                    <p>{t('pro.legal.privacy.s3')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.privacy.s4Title')}</h2>
                    <p>{t('pro.legal.privacy.s4')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.privacy.s5Title')}</h2>
                    <p>{t('pro.legal.privacy.s5')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.privacy.s6Title')}</h2>
                    <p>{t('pro.legal.privacy.s6')}</p>
                </section>
            </div>
        </ProSubPageLayout>
    );
}
