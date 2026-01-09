'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQSection: React.FC = () => {
    const { t } = useTranslation();

    const faqs = [
        { q: t('dashboard.pricing.faq.q1'), a: t('dashboard.pricing.faq.a1') },
        { q: t('dashboard.pricing.faq.q2'), a: t('dashboard.pricing.faq.a2') },
        { q: t('dashboard.pricing.faq.q3'), a: t('dashboard.pricing.faq.a3') },
    ];

    return (
        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
            <h2 className="font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                {t('dashboard.pricing.faq.title')}
            </h2>
            <div className="space-y-4 text-sm">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <p className="text-white/80 font-medium mb-1">{faq.q}</p>
                        <p className="text-white/40">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
