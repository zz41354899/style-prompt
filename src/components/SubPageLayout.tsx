'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Wand2, Languages, ChevronRight, ArrowLeft } from 'lucide-react';

interface SubPageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export const SubPageLayout: React.FC<SubPageLayoutProps> = ({ children, title, subtitle }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(nextLang);
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center group">
                            <span className="text-xl font-bold tracking-tight">
                                Style<span className="text-purple-400">Prompts</span>
                            </span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <button onClick={toggleLanguage} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white flex items-center gap-2">
                                <Languages className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase">{i18n.language === 'zh-TW' ? 'EN' : 'TW'}</span>
                            </button>
                            <Link href="/S01" className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-500 transition-all">
                                <span>{t('landing.nav.enterEditor')}</span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/" className="inline-flex items-center space-x-2 text-white/40 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">{t('pages.backToHome')}</span>
                    </Link>
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-white/40 mb-16 font-light leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                    <div className="prose prose-invert max-w-none">
                        {children}
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-black">
                        {t('landing.footer.copyright')}
                    </p>
                </div>
            </footer>
        </div>
    );
};
