'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';

export default function TermsPage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.terms.title')}
            subtitle={t('pages.terms.subtitle')}
        >
            <div className="space-y-10 text-white/60 font-light leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.terms.acceptance.title')}</h2>
                    <p>{t('pages.terms.acceptance.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.terms.account.title')}</h2>
                    <p>{t('pages.terms.account.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.terms.usage.title')}</h2>
                    <p>{t('pages.terms.usage.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.terms.changes.title')}</h2>
                    <p>{t('pages.terms.changes.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.terms.disclaimer.title')}</h2>
                    <p>{t('pages.terms.disclaimer.desc')}</p>
                </section>

                <section className="pt-8 border-t border-white/5 text-sm">
                    <p>{t('pages.terms.lastUpdate')}</p>
                </section>
            </div>
        </SubPageLayout>
    );
}
