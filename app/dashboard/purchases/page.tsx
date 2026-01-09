'use client';

import React, { useEffect, useState } from 'react';
import { CreditCard, Calendar, CheckCircle } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { fetchUserPurchases, Purchase } from '@/lib/purchaseService';
import { useTranslation } from 'react-i18next';

export default function DashboardPurchasesPage() {
    const { t } = useTranslation();
    const { user, loading: authLoading } = useAuth();
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [initialLoading, setInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPurchases(isInitial = false) {
            if (authLoading) {
                return;
            }

            if (!user) {
                setInitialLoading(false);
                return;
            }

            try {
                const { data, error: fetchError } = await fetchUserPurchases(user.id);

                if (fetchError) {
                    console.error('Error fetching purchases:', fetchError);
                    setError(`${t('dashboard.purchases.loadError')}: ${fetchError.message || fetchError}`);
                } else {
                    setPurchases(data || []);
                    setError(null);
                }
            } catch (e) {
                console.error('Unexpected error:', e);
                setError(t('dashboard.purchases.unexpectedError'));
            }

            if (isInitial) {
                setInitialLoading(false);
            }
        }

        if (!authLoading && user) {
            loadPurchases(true);
            
            // 每 15 秒自動重新整理（背景更新）
            const interval = setInterval(() => loadPurchases(false), 15000);
            return () => clearInterval(interval);
        } else if (!authLoading && !user) {
            setInitialLoading(false);
        }
    }, [user, authLoading, t]);

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">{t('dashboard.purchases.title')}</h1>
                <p className="text-white/50 mb-8">{t('dashboard.purchases.subtitle')}</p>

                {error && (
                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {purchases.length === 0 ? (
                    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                        <CreditCard className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{t('dashboard.purchases.noPurchases')}</h3>
                        <p className="text-sm text-white/40 mb-4">
                            {t('dashboard.purchases.noPurchasesDesc')}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {purchases.map((purchase) => (
                            <div
                                key={purchase.id}
                                className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.04] transition-colors"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-500/10 rounded-xl">
                                            <CreditCard className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                {purchase.product_type === 'lifetime_pro' ? t('dashboard.purchases.proLifetime') : purchase.product_type}
                                            </h3>
                                            <p className="text-sm text-white/50 mb-2">StylePrompts Pro</p>
                                            <div className="flex items-center gap-4 text-xs text-white/40">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(purchase.created_at).toLocaleDateString('zh-TW')}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    {purchase.status === 'success' ? (
                                                        <>
                                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                                            <span className="text-green-400">{t('dashboard.purchases.completed')}</span>
                                                        </>
                                                    ) : (
                                                        <span>{purchase.status}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold">
                                            {purchase.currency === 'TWD' ? 'NT$' : purchase.currency}
                                            {purchase.amount.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-white/40">
                                            {purchase.product_type === 'lifetime_pro' ? t('dashboard.purchases.lifetimeAccess') : ''}
                                        </div>
                                    </div>
                                </div>
                                {purchase.gumroad_sale_id && (
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <p className="text-xs text-white/30">
                                            {t('dashboard.purchases.orderId')}: {purchase.gumroad_sale_id}
                                        </p>
                                        {purchase.gumroad_license_key && (
                                            <p className="text-xs text-white/30 mt-1">
                                                License Key: {purchase.gumroad_license_key}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
