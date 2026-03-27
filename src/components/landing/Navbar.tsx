'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight, Coffee } from 'lucide-react';
import { BaseNavbar } from '@/components/shared';

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

    // Free 版導航項目
    const navItems = ['features', 'workflow', 'faq'];

    return (
        <BaseNavbar
            variant="free"
            navItems={navItems}
            onScrollToSection={onScrollToSection}
            toggleLanguage={toggleLanguage}
            currentLang={currentLang}
            extraNavLinks={
                <>
                    <Link
                        href="/install"
                        className="hover:text-white transition-colors relative group"
                    >
                        {t('landing.nav.install')}
                        <motion.span
                            className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500"
                            whileHover={{ width: '100%' }}
                        />
                    </Link>
                    <Link
                        href="/coffee"
                        className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
                    >
                        <Coffee className="w-3.5 h-3.5" />
                        {t('layout.buyMeACoffee')}
                    </Link>
                </>
            }
            rightContent={
                <Link
                    href="/S01"
                    className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-600/20"
                >
                    <span>{t('landing.nav.enterEditor')}</span>
                    <ChevronRight className="w-4 h-4" />
                </Link>
            }
            mobileExtraContent={
                <>
                    <Link
                        href="/install"
                        className="block w-full py-3 text-left text-white/60 hover:text-white active:text-purple-400 transition-colors font-medium border-b border-white/5"
                    >
                        {t('landing.nav.install')}
                    </Link>
                    <Link
                        href="/S01"
                        className="block w-full py-4 bg-purple-600 text-white text-sm font-bold rounded-2xl hover:bg-purple-500 active:bg-purple-700 transition-all text-center mt-4"
                        style={{ touchAction: 'manipulation' }}
                    >
                        {t('landing.nav.enterEditor')}
                    </Link>
                </>
            }
        />
    );
};
