'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
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
                <Link
                    href="/coffee"
                    className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
                >
                    <Coffee className="w-3.5 h-3.5" />
                    贊助咖啡
                </Link>
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
