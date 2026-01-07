'use client';

import React, { useEffect, useState } from 'react';
import { CreditCard, Download, Loader2, Calendar, CheckCircle } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { fetchUserPurchases, Purchase } from '@/lib/purchaseService';

export default function DashboardPurchasesPage() {
    const { user, loading: authLoading } = useAuth();
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPurchases() {
            console.log('=== Dashboard Purchases Debug ===');
            console.log('Auth Loading:', authLoading);
            console.log('User:', user?.email, user?.id);

            if (authLoading) {
                console.log('Still loading auth, waiting...');
                return;
            }

            if (!user) {
                console.log('No user, stopping');
                setLoading(false);
                return;
            }

            console.log('Fetching purchases for user:', user.id);
            setLoading(true);
            setError(null);

            const { data, error: fetchError } = await fetchUserPurchases(user.id);

            console.log('Fetch result:', { data, error: fetchError });

            if (fetchError) {
                console.error('Error fetching purchases:', fetchError);
                setError(`載入購買記錄失敗: ${fetchError.message || fetchError}`);
            } else {
                console.log('Purchases loaded:', data?.length || 0);
                setPurchases(data || []);
            }

            setLoading(false);
        }

        loadPurchases();
    }, [user, authLoading]);

    if (loading) {
        return (
            <div className="p-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-2">購買紀錄</h1>
                    <p className="text-white/50 mb-8">查看您的購買歷史</p>
                    <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">購買紀錄</h1>
                <p className="text-white/50 mb-8">查看您的購買歷史</p>

                {error && (
                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {purchases.length === 0 ? (
                    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                        <CreditCard className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">尚無購買紀錄</h3>
                        <p className="text-sm text-white/40 mb-4">
                            升級 Pro 後,您的購買紀錄將顯示在這裡。
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
                                                {purchase.product_type === 'lifetime_pro' ? 'Pro 終身授權' : purchase.product_type}
                                            </h3>
                                            <p className="text-sm text-white/50 mb-2">StylePrompts Pro</p>
                                            <div className="flex items-center gap-4 text-xs text-white/40">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(purchase.created_at).toLocaleDateString('zh-TW')}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    {purchase.status === 'SUCCESS' ? (
                                                        <>
                                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                                            <span className="text-green-400">已完成</span>
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
                                            {purchase.product_type === 'lifetime_pro' ? '終身授權' : ''}
                                        </div>
                                    </div>
                                </div>
                                {purchase.gumroad_sale_id && (
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <p className="text-xs text-white/30">
                                            訂單編號: {purchase.gumroad_sale_id}
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
