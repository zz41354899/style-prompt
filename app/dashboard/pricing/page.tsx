'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Crown, CheckCircle2, ArrowRight, Sparkles, X, Users, XCircle, AlertCircle, PartyPopper } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { usePurchase } from '@/hooks/usePurchase';
import { useTranslation } from 'react-i18next';

export default function DashboardPricingPage() {
    const { user } = useAuth();
    const { hasPro, loading } = usePurchase();
    const { t } = useTranslation();
    const [payLoading, setPayLoading] = React.useState(false);

    // 讀取 URL 參數
    const searchParams = useSearchParams();
    const router = useRouter();
    const paymentStatus = searchParams.get('status');
    const orderId = searchParams.get('order');
    const errorMessage = searchParams.get('message');

    // 從 useAuth 取得 refreshSession
    const { refreshSession } = useAuth() as { refreshSession: () => Promise<{ error: Error | null }> };

    // 追蹤是否已處理過付款成功
    const hasHandledPayment = React.useRef(false);

    // 付款成功時刷新 session 以取得最新的 Pro 狀態
    React.useEffect(() => {
        const handlePaymentSuccess = async () => {
            if (paymentStatus === 'success' && !hasHandledPayment.current) {
                hasHandledPayment.current = true;
                console.log('[Pricing] Payment success detected, waiting for webhook...');
                // 等待 notify webhook 處理完成
                await new Promise(resolve => setTimeout(resolve, 3000));
                console.log('[Pricing] Refreshing session...');
                // 刷新 session 取得最新的 app_metadata
                await refreshSession();
                console.log('[Pricing] Session refreshed, redirecting...');
                // 清除 URL 參數但保留成功通知
                router.replace('/dashboard/pricing?status=done', { scroll: false });
            }
        };
        handlePaymentSuccess();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paymentStatus]);

    // 關閉通知並清除 URL 參數
    const dismissNotification = () => {
        router.replace('/dashboard/pricing', { scroll: false });
    };

    // usePurchase 已經處理了所有邏輯（包括 admin = pro）
    const isPro = hasPro;

    const freePlanFeatures = [
        { text: t('dashboard.pricing.freeFeatures.f1'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f2'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f3'), included: true },
        { text: t('dashboard.pricing.freeFeatures.f4'), included: false },
        { text: t('dashboard.pricing.freeFeatures.f5'), included: false },
        { text: t('dashboard.pricing.freeFeatures.f6'), included: false },
    ];

    const proPlanFeatures = [
        { text: t('dashboard.pricing.proFeatures.f1'), included: true },
        { text: t('dashboard.pricing.proFeatures.f2'), included: true },
        { text: t('dashboard.pricing.proFeatures.f3'), included: true },
        { text: t('dashboard.pricing.proFeatures.f4'), included: true, highlight: true },
        { text: t('dashboard.pricing.proFeatures.f5'), included: true, highlight: true },
        { text: t('dashboard.pricing.proFeatures.f6'), included: true, highlight: true },
    ];

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                {/* 付款結果通知 */}
                {(paymentStatus === 'success' || paymentStatus === 'done') && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <PartyPopper className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-green-400">🎉 付款成功！</h3>
                            <p className="text-green-300/80 text-sm mt-1">
                                感謝您購買 StylePrompts Pro！您現在擁有所有 Pro 功能的存取權限。
                            </p>
                            {orderId && (
                                <p className="text-green-300/60 text-xs mt-2">
                                    訂單編號：{orderId}
                                </p>
                            )}
                            <p className="text-green-300/60 text-xs mt-1">
                                頁面將在 3 秒後自動刷新...
                            </p>
                        </div>
                        <button
                            onClick={dismissNotification}
                            className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                            <X className="w-4 h-4 text-green-400/60" />
                        </button>
                    </div>
                )}

                {paymentStatus === 'failed' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                            <XCircle className="w-5 h-5 text-red-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-red-400">付款失敗</h3>
                            <p className="text-red-300/80 text-sm mt-1">
                                {errorMessage || '付款處理時發生問題，請再試一次或使用其他付款方式。'}
                            </p>
                        </div>
                        <button
                            onClick={dismissNotification}
                            className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                            <X className="w-4 h-4 text-red-400/60" />
                        </button>
                    </div>
                )}

                {(paymentStatus === 'error' || paymentStatus === 'unknown') && (
                    <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                            <AlertCircle className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-yellow-400">付款狀態未知</h3>
                            <p className="text-yellow-300/80 text-sm mt-1">
                                無法確認付款狀態。如果您已完成付款，請稍候幾分鐘後刷新頁面查看。
                            </p>
                        </div>
                        <button
                            onClick={dismissNotification}
                            className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                            <X className="w-4 h-4 text-yellow-400/60" />
                        </button>
                    </div>
                )}

                <h1 className="text-2xl font-bold mb-2">{t('dashboard.pricing.title')}</h1>
                <p className="text-white/50 mb-8">{t('dashboard.pricing.subtitle')}</p>

                {/* Current Status Banner */}
                <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-white/60">{t('dashboard.pricing.currentPlan')}：</span>
                        {loading ? (
                            <span className="text-white/40">{t('auth.loading')}</span>
                        ) : isPro ? (
                            <span className="flex items-center gap-2 text-purple-400 font-semibold">
                                <Crown className="w-4 h-4" />
                                {t('dashboard.pricing.proLifetime')}
                            </span>
                        ) : (
                            <span className="text-white/80 font-medium">{t('dashboard.pricing.freePlan')}</span>
                        )}
                    </div>
                    {isPro && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                            <CheckCircle2 className="w-4 h-4" />
                            {t('dashboard.pricing.activated')}
                        </div>
                    )}
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Free Plan */}
                    <div className={`relative p-6 rounded-2xl border ${!isPro
                        ? 'bg-white/[0.03] border-white/20'
                        : 'bg-white/[0.02] border-white/10 opacity-60'
                        }`}>
                        {!isPro && (
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-white/10 text-white/60 text-xs font-medium rounded-full">
                                {t('dashboard.pricing.currentPlan')}
                            </div>
                        )}

                        <div className="flex items-center gap-3 mb-4 mt-2">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <Users className="w-5 h-5 text-white/60" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Free</h3>
                                <p className="text-xs text-white/40">{t('dashboard.pricing.freePlan')}</p>
                            </div>
                        </div>

                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-3xl font-black">NT$0</span>
                            <span className="text-white/40 text-sm">{t('dashboard.pricing.freePlan')}</span>
                        </div>

                        <div className="space-y-3 mb-6">
                            {freePlanFeatures.map((feature) => (
                                <div key={feature.text} className="flex items-center gap-3 text-sm">
                                    {feature.included ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    ) : (
                                        <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                                    )}
                                    <span className={feature.included ? 'text-white/70' : 'text-white/30'}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white/70 font-medium rounded-xl hover:bg-white/20 transition-all"
                        >
                            {t('dashboard.pricing.browseFree')}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Pro Plan */}
                    <div className={`relative ${isPro ? '' : ''}`}>
                        {/* Glow Effect for Pro */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl blur opacity-20" />

                        <div className={`relative p-6 rounded-2xl border ${isPro
                            ? 'bg-purple-900/20 border-purple-500/30'
                            : 'bg-[#111] border-white/10'
                            }`}>
                            {isPro && (
                                <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" />
                                    {t('dashboard.pricing.purchased')}
                                </div>
                            )}
                            {!isPro && (
                                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold rounded-full">
                                    {t('dashboard.pricing.recommended')}
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-4 mt-2">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <Crown className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Pro</h3>
                                    <p className="text-xs text-white/40">{t('dashboard.pricing.proLifetime')}</p>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-3xl font-black">NT$2,000</span>
                                <span className="text-white/40 text-sm">{t('dashboard.pricing.oneTime')}</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                {proPlanFeatures.map((feature) => (
                                    <div key={feature.text} className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${feature.highlight ? 'text-purple-400' : 'text-green-400'
                                            }`} />
                                        <span className={feature.highlight ? 'text-purple-200' : 'text-white/70'}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {isPro ? (
                                <Link
                                    href="/pro/S01"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-all"
                                >
                                    {t('dashboard.pricing.browsePro')}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            ) : (
                                <button
                                    onClick={async () => {
                                        if (!user?.email) return;
                                        setPayLoading(true);
                                        try {
                                            const response = await fetch('/api/payuni/create-order', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ email: user.email }),
                                            });
                                            const data = await response.json();
                                            if (data.formAction && data.formData) {
                                                const form = document.createElement('form');
                                                form.method = 'POST';
                                                form.action = data.formAction;
                                                Object.entries(data.formData).forEach(([key, value]) => {
                                                    const input = document.createElement('input');
                                                    input.type = 'hidden';
                                                    input.name = key;
                                                    input.value = String(value);
                                                    form.appendChild(input);
                                                });
                                                document.body.appendChild(form);
                                                form.submit();
                                            } else {
                                                alert(data.error || '建立訂單失敗');
                                            }
                                        } catch (err) {
                                            console.error(err);
                                            alert('金流系統暫時無法處理，請稍後再試');
                                        } finally {
                                            setPayLoading(false);
                                        }
                                    }}
                                    disabled={payLoading}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all disabled:opacity-50"
                                >
                                    {payLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                            {t('auth.loading')}
                                        </>
                                    ) : (
                                        <>
                                            {t('dashboard.pricing.upgradeNow')}
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
                    <h2 className="font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        {t('dashboard.pricing.faq.title')}
                    </h2>
                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="text-white/80 font-medium mb-1">{t('dashboard.pricing.faq.q1')}</p>
                            <p className="text-white/40">{t('dashboard.pricing.faq.a1')}</p>
                        </div>
                        <div>
                            <p className="text-white/80 font-medium mb-1">{t('dashboard.pricing.faq.q2')}</p>
                            <p className="text-white/40">{t('dashboard.pricing.faq.a2')}</p>
                        </div>
                        <div>
                            <p className="text-white/80 font-medium mb-1">{t('dashboard.pricing.faq.q3')}</p>
                            <p className="text-white/40">{t('dashboard.pricing.faq.a3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
