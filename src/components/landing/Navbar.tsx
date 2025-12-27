'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
    onScrollToSection: (e: React.MouseEvent, id: string) => void;
    toggleLanguage: () => void;
    currentLang: string;
}

export const Navbar: React.FC<NavbarProps> = ({
    onScrollToSection,
    toggleLanguage,
    currentLang
}) => {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        onClick={handleLogoClick}
                        className="flex items-center space-x-2 group"
                    >
                        <span className="text-xl font-bold tracking-tight">
                            Style<span className="text-purple-400">Prompts</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
                        {['features', 'workflow', 'pricing', 'faq'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={(e) => onScrollToSection(e, item)}
                                className="hover:text-white transition-colors relative group"
                            >
                                {t(`landing.nav.${item}`)}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500"
                                    whileHover={{ width: '100%' }}
                                />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white flex items-center gap-2"
                        >
                            <Languages className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase">{currentLang === 'zh-TW' ? 'EN' : 'TW'}</span>
                        </button>
                        <Link
                            href="/S01"
                            className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-600/20"
                        >
                            <span>{t('landing.nav.enterEditor')}</span>
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#0a0a0a] border-t border-white/5 relative z-[100]"
                    >
                        <div className="py-6 px-6 space-y-4">
                            {['features', 'workflow', 'pricing', 'faq'].map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => {
                                        const element = document.getElementById(item);
                                        if (element) {
                                            setMobileMenuOpen(false);
                                            setTimeout(() => {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }, 100);
                                        }
                                    }}
                                    className="block w-full py-3 text-left text-white/60 hover:text-white active:text-purple-400 transition-colors font-medium border-b border-white/5"
                                    style={{ touchAction: 'manipulation' }}
                                >
                                    {t(`landing.nav.${item}`)}
                                </button>
                            ))}
                            <Link
                                href="/S01"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full py-4 bg-purple-600 text-white text-sm font-bold rounded-2xl hover:bg-purple-500 active:bg-purple-700 transition-all text-center mt-4"
                                style={{ touchAction: 'manipulation' }}
                            >
                                {t('landing.nav.enterEditor')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
