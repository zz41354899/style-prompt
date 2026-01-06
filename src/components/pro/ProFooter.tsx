'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Sparkles, Coffee } from 'lucide-react';

export const ProFooter: React.FC = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="py-20 bg-[#020202] border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/pro" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-lg font-bold text-white">StylePrompts Pro</span>
                        </Link>
                        <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                            {t('pro.footer.description')}
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4">{t('pro.footer.product')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/pro/S01" className="text-sm text-white/40 hover:text-white transition-colors">
                                    {t('pro.footer.styles')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pro#templates" className="text-sm text-white/40 hover:text-white transition-colors">
                                    {t('pro.footer.templates')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pro#pricing" className="text-sm text-white/40 hover:text-white transition-colors">
                                    {t('pro.footer.pricing')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4">{t('pro.footer.legal')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/pro/legal/terms" className="text-sm text-white/40 hover:text-white transition-colors">
                                    {t('pro.footer.terms')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pro/legal/privacy" className="text-sm text-white/40 hover:text-white transition-colors">
                                    {t('pro.footer.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pro/legal/refund" className="text-sm text-white/40 hover:text-white transition-colors">
                                    {t('pro.footer.refund')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        {t('pro.footer.copyright')}
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/coffee"
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors"
                        >
                            <Coffee className="w-4 h-4" />
                            {t('layout.buyMeACoffee')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
