'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    const prefix = 'landing.footer';
    const homeLink = '/';
    const legalBase = '/legal';

    const freeLinks = {
        system: [
            { key: 'coreTech', path: '/features/core-tech' },
            { key: 'visualWorkflow', path: '/features/workflow' },
            { key: 'promptEditor', path: '/features/editor' }
        ],
        legal: [
            { key: 'privacy', path: '/legal/privacy' },
            { key: 'terms', path: '/legal/terms' }
        ]
    };

    return (
        <footer className="border-t border-white/5 relative overflow-hidden py-24 bg-[#030303]">
            <div className="mx-auto px-4 max-w-7xl">
                <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-3">
                        <Link href={homeLink} className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold tracking-tight">
                                Style<span className="text-purple-400">Prompts</span>
                            </span>
                        </Link>
                        <p className="text-white/30 text-sm mb-6 max-w-xs">
                            {t(`${prefix}.tagline`)}
                        </p>
                    </div>

                    {/* Links Column 1 - System */}
                    <div>
                        <h4 className="uppercase tracking-wider mb-4 text-white text-[10px] font-black tracking-widest mb-8 opacity-40">
                            {t('landing.footer.system')}
                        </h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            {freeLinks.system.map(item => (
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
                        <h4 className="uppercase tracking-wider mb-4 text-white text-[10px] font-black tracking-widest mb-8 opacity-40">
                            {t('landing.footer.security')}
                        </h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            {freeLinks.legal.map(item => (
                                <li key={item.key}>
                                    <Link href={item.path} className="hover:text-white transition-colors">
                                        {t(`${prefix}.${item.key}`)}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/coffee" className="hover:text-white transition-colors flex items-center gap-2">
                                    {t('landing.footer.coffee')} ☕
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-12 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/20 font-black">
                        {t(`${prefix}.copyright`)}
                    </p>
                </div>
            </div>
        </footer>
    );
};
