'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Sparkles, Coffee, Github, Twitter } from 'lucide-react';

export const ProFooter: React.FC = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    const links = {
        product: [
            { label: 'Pro 風格', href: '/pro/S01' },
            { label: '定價方案', href: '/pro#pricing' },
            { label: 'FAQ', href: '/pro#faq' },
        ],
        legal: [
            { label: '服務條款', href: '/pro/legal/terms' },
            { label: '隱私權政策', href: '/pro/legal/privacy' },
            { label: '退費政策', href: '/pro/legal/refund' },
        ],
    };

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
                            專業級 AI 設計風格資源庫，讓你的介面從普通變非凡。
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4">產品</h4>
                        <ul className="space-y-2">
                            {links.product.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4">法律</h4>
                        <ul className="space-y-2">
                            {links.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © {year} StylePrompts. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/coffee"
                            className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors"
                        >
                            <Coffee className="w-4 h-4" />
                            支持我們
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
