'use client';

import React, { Suspense, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { usePurchase } from '@/hooks/usePurchase';
import { useTranslation } from 'react-i18next';
import {
    PaymentNotification,
    PricingCard,
    FAQSection,
    CurrentPlanBanner,
} from '@/components/dashboard/pricing';

function DashboardPricingContent() {
    const { hasPro, loading } = usePurchase();
    const { t } = useTranslation();

    const searchParams = useSearchParams();
    const router = useRouter();
    const paymentStatus = searchParams.get('status') as 'failed' | 'error' | 'unknown' | null;
    const errorMessage = searchParams.get('message');

    const dismissNotification = useCallback(() => {
        router.replace('/dashboard/pricing', { scroll: false });
    }, [router]);

    const isPro = hasPro;

    const freePlanFeatures = useMemo(() => [
        { text: t('dashboard.pricing.freeFeatures.f1'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f2'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f3'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f4'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f5'), included: false },
        { text: t('dashboard.pricing.freeFeatures.f6'), included: false },
    ], [t]);

    const proPlanFeatures = useMemo(() => [
        { text: t('dashboard.pricing.proFeatures.f1'), included: true },
        { text: t('dashboard.pricing.proFeatures.f2'), included: true },
        { text: t('dashboard.pricing.proFeatures.f3'), included: true },
        { text: t('dashboard.pricing.proFeatures.f4'), included: true, highlight: true },
        { text: t('dashboard.pricing.proFeatures.f5'), included: true, highlight: true },
        { text: t('dashboard.pricing.proFeatures.f6'), included: true, highlight: true },
    ], [t]);

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                {paymentStatus && (
                    <PaymentNotification
                        type={paymentStatus}
                        errorMessage={errorMessage}
                        onDismiss={dismissNotification}
                    />
                )}

                <h1 className="text-2xl font-bold mb-2">{t('dashboard.pricing.title')}</h1>
                <p className="text-white/50 mb-8">{t('dashboard.pricing.subtitle')}</p>

                <CurrentPlanBanner isPro={isPro} loading={loading} />

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <PricingCard variant="free" isPro={isPro} features={freePlanFeatures} />
                    <PricingCard variant="pro" isPro={isPro} features={proPlanFeatures} />
                </div>

                <FAQSection />
            </div>
        </div>
    );
}

// Loading fallback
function PricingLoadingFallback() {
    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
            </div>
        </div>
    );
}

export default function DashboardPricingPage() {
    return (
        <Suspense fallback={<PricingLoadingFallback />}>
            <DashboardPricingContent />
        </Suspense>
    );
}
