'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Coffee } from 'lucide-react';

interface FooterProps {
    /** 'free' 或 'pro' 變體 */
    variant?: 'free' | 'pro';
}

export const Footer: React.FC<FooterProps> = ({ variant = 'free' }) => {
    const { t } = useTranslation();
    const isPro = variant === 'pro';
    const prefix = isPro ? 'pro.footer' : 'landing.footer';
    const homeLink = isPro ? '/pro' : '/';
    const legalBase = isPro ? '/pro/legal' : '/legal';

    // Free 版連結
    const freeLinks = {
        system: [
            { key: 'coreTech', path: '/features/core-tech' },
            { key: 'visualWorkflow', path: '/features/workflow' },
            { key: 'promptEditor', path: '/features/editor' },
            { key: 'membership', path: '/features/membership' }
        ],
        legal: [
            { key: 'privacy', path: '/legal/privacy' },
            { key: 'terms', path: '/legal/terms' }
        ]
    };

    // Pro 版連結
    const proLinks = {
        product: [
            { key: 'styles', path: '/pro/S01' },
            { key: 'templates', path: '/pro#templates' },
            { key: 'pricing', path: '/pro#pricing' }
        ],
        legal: [
            { key: 'terms', path: '/pro/legal/terms' },
            { key: 'privacy', path: '/pro/legal/privacy' },
            { key: 'refund', path: '/pro/legal/refund' }
        ]
    };

    return (
        <footer className={`border-t border-white/5 relative overflow-hidden ${isPro ? 'py-20 bg-[#020202]' : 'py-24 bg-[#030303]'}`}>
            {isPro && (
                <>
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
                </>
            )}
            <div className={`mx-auto px-4 ${isPro ? 'max-w-6xl' : 'max-w-7xl'}`}>
                <div className={`grid gap-8 ${isPro ? 'grid-cols-2 md:grid-cols-4 mb-12' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24'}`}>
                    {/* Brand */}
                    <div className={isPro ? 'col-span-2' : 'col-span-2 lg:col-span-3'}>
                        <Link href={homeLink} className="flex items-center gap-2 mb-4">
                            {isPro && (
                                <div className="w-8 h-8 bg-black border border-white/20 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-sm">SP</span>
                                </div>
                            )}
                            <span className={isPro ? 'text-lg font-bold text-white' : 'text-2xl font-black tracking-tighter text-white'}>
                                Style<span className="text-purple-500">Prompts</span>{isPro && ' Pro'}
                            </span>
                        </Link>
                        <p className={`leading-relaxed max-w-xs ${isPro ? 'text-sm text-white/40' : 'text-white/30 text-sm font-light'}`}>
                            {t(`${prefix}.description`)}
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className={`uppercase tracking-wider mb-4 ${isPro ? 'text-xs font-bold text-white/60' : 'text-white text-[10px] font-black tracking-widest mb-8 opacity-40'}`}>
                            {isPro ? t('pro.footer.product') : t('landing.footer.system')}
                        </h4>
                        <ul className={`space-y-${isPro ? '2' : '4'} text-${isPro ? 'sm' : '[13px]'} text-white/40 font-medium`}>
                            {(isPro ? proLinks.product : freeLinks.system).map(item => (
                                <li key={item.key}>
                                    <Link href={item.path} className="hover:text-white transition-colors">
                                        {t(`${prefix}.${item.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 - Legal */}
                    <div>
                        <h4 className={`uppercase tracking-wider mb-4 ${isPro ? 'text-xs font-bold text-white/60' : 'text-white text-[10px] font-black tracking-widest mb-8 opacity-40'}`}>
                            {isPro ? t('pro.footer.legal') : t('landing.footer.security')}
                        </h4>
                        <ul className={`space-y-${isPro ? '2' : '4'} text-${isPro ? 'sm' : '[13px]'} text-white/40 font-medium`}>
                            {(isPro ? proLinks.legal : freeLinks.legal).map(item => (
                                <li key={item.key}>
                                    <Link href={item.path} className="hover:text-white transition-colors">
                                        {t(`${prefix}.${item.key}`)}
                                    </Link>
                                </li>
                            ))}
                            {!isPro && (
                                <li>
                                    <Link href="/coffee" className="hover:text-white transition-colors flex items-center gap-2">
                                        {t('landing.footer.coffee')} ☕
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className={`border-t border-white/5 ${isPro ? 'pt-8 flex flex-col md:flex-row items-center justify-between gap-4' : 'pt-12 text-center'}`}>
                    <p className={`text-xs ${isPro ? 'text-white/30' : 'uppercase tracking-[0.2em] text-white/20 font-black'}`}>
                        {t(`${prefix}.copyright`)}
                    </p>
                    {isPro && (
                        <Link href="/coffee" className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                            <Coffee className="w-4 h-4" />
                            {t('layout.buyMeACoffee')}
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    );
};
