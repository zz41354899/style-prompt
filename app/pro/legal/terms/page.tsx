'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProSubPageLayout } from '@/components/pro/ProSubPageLayout';

export default function ProTermsPage() {
    const { t } = useTranslation();

    return (
        <ProSubPageLayout
            title={t('pro.legal.terms.title')}
            subtitle={t('pro.legal.lastUpdated')}
        >
            <div className="space-y-10 text-white/60 font-light leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s1Title')}</h2>
                    <p>{t('pro.legal.terms.s1')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s2Title')}</h2>
                    <p>{t('pro.legal.terms.s2')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s3Title')}</h2>
                    <p>{t('pro.legal.terms.s3')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s4Title')}</h2>
                    <p>{t('pro.legal.terms.s4')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s5Title')}</h2>
                    <p>{t('pro.legal.terms.s5')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s6Title')}</h2>
                    <p>{t('pro.legal.terms.s6')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s7Title')}</h2>
                    <p>{t('pro.legal.terms.s7')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pro.legal.terms.s8Title')}</h2>
                    <p>{t('pro.legal.terms.s8')}</p>
                </section>
            </div>
        </ProSubPageLayout>
    );
}
