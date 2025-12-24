'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';

export default function PrivacyPage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.privacy.title')}
            subtitle={t('pages.privacy.subtitle')}
        >
            <div className="space-y-10 text-white/60 font-light leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.privacy.collection.title')}</h2>
                    <p>{t('pages.privacy.collection.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.privacy.ownership.title')}</h2>
                    <p>{t('pages.privacy.ownership.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.privacy.security.title')}</h2>
                    <p>{t('pages.privacy.security.desc')}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('pages.privacy.cookies.title')}</h2>
                    <p>{t('pages.privacy.cookies.desc')}</p>
                </section>

                <section className="pt-8 border-t border-white/5 text-sm">
                    <p>{t('pages.privacy.lastUpdate')}</p>
                </section>
            </div>
        </SubPageLayout>
    );
}
