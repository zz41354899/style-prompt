'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { CheckCircle2, Star, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function MembershipPage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.membership.title')}
            subtitle={t('pages.membership.subtitle')}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                {/* Free Plan */}
                <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] flex flex-col group">
                    <div className="mb-10">
                        <span className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4 block">{t('landing.pricing.free.use')}</span>
                        <h3 className="text-3xl font-black mb-6">{t('landing.pricing.free.name')}</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black">NT$0</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-12 flex-1">
                        <li className="flex items-center gap-3 text-white/40 text-sm font-light"><CheckCircle2 className="w-4 h-4 text-purple-600" /> {t('landing.pricing.free.f1')}</li>
                        <li className="flex items-center gap-3 text-white/40 text-sm font-light"><CheckCircle2 className="w-4 h-4 text-purple-600" /> {t('landing.pricing.free.f2')}</li>
                        <li className="flex items-center gap-3 text-white/40 text-sm font-light"><CheckCircle2 className="w-4 h-4 text-purple-600" /> {t('landing.pricing.free.f3')}</li>
                    </ul>
                    <Link href="/S01" className="w-full py-5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-center transition-all border border-purple-500/20">
                        {t('landing.pricing.startNow')}
                    </Link>
                </div>

                {/* Pro Plan */}
                <div className="p-10 rounded-[3rem] border border-purple-500/40 bg-purple-500/[0.03] flex flex-col relative overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.1)]">
                    <div className="absolute top-8 right-8 px-4 py-1.5 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">{t('landing.pricing.comingSoon')}</div>
                    <div className="mb-10">
                        <span className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4 block flex items-center gap-2"><Star className="w-3 h-3" /> {t('landing.pricing.pro.use')}</span>
                        <h3 className="text-3xl font-black mb-6">{t('landing.pricing.pro.name')}</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black">NT$2000</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-12 flex-1">
                        <li className="flex items-center gap-3 text-white/80 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-purple-500" /> {t('landing.pricing.pro.f1')}</li>
                        <li className="flex items-center gap-3 text-white/80 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-purple-500" /> {t('landing.pricing.pro.f2')}</li>
                        <li className="flex items-center gap-3 text-white/80 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-purple-500" /> {t('landing.pricing.pro.f3')}</li>
                    </ul>
                    <button disabled className="w-full py-5 rounded-2xl bg-white/5 text-white/20 font-black text-center cursor-not-allowed">
                        {t('landing.pricing.comingSoon')}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-white/5">
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.01]">
                    <Zap className="w-6 h-6 text-purple-500 shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">{t('pages.membership.flexible.title')}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{t('pages.membership.flexible.desc')}</p>
                    </div>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.01]">
                    <Shield className="w-6 h-6 text-purple-500 shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">{t('pages.membership.enterprise.title')}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{t('pages.membership.enterprise.desc')}</p>
                    </div>
                </div>
            </div>
        </SubPageLayout>
    );
}
