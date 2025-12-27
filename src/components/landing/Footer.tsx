'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-24 bg-[#030303] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
                    <div className="col-span-2 lg:col-span-3">
                        <div className="flex items-center space-x-2 mb-8">
                            <span className="text-2xl font-black tracking-tighter text-white">Style<span className="text-purple-500">Prompts</span></span>
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed max-w-sm font-light">{t('landing.footer.description')}</p>
                    </div>
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">{t('landing.footer.system')}</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            {[
                                { key: 'coreTech', path: '/features/core-tech' },
                                { key: 'visualWorkflow', path: '/features/workflow' },
                                { key: 'promptEditor', path: '/features/editor' },
                                { key: 'membership', path: '/features/membership' }
                            ].map(item => (
                                <li key={item.key}>
                                    <Link href={item.path} className="hover:text-white transition-colors">
                                        {t(`landing.footer.${item.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">{t('landing.footer.security')}</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">{t('landing.footer.privacy')}</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">{t('landing.footer.terms')}</Link></li>
                            <li><Link href="/coffee" className="hover:text-white transition-colors flex items-center gap-2">{t('landing.footer.coffee')} ☕</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] text-white/20 font-black">
                    <div>{t('landing.footer.copyright')}</div>
                </div>
            </div>
        </footer>
    );
};
