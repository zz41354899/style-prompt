'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { X, Menu, Home, Eye, ChevronRight, Languages, LayoutGrid } from 'lucide-react';
import { styles } from '@/data/styles';
import { getThemeColor } from '@/data/themeColors';
import { useLayoutContext } from './LayoutContext';
import { useAuth } from '@/hooks/useAuth';
import { UserDropdown } from './UserDropdown';
import { AuthModal } from '@/components/common';
import NotificationBell from '@/components/common/NotificationBell';

export const Header: React.FC = () => {
    const pathname = usePathname();
    const { t, i18n } = useTranslation();
    const { selectedStyle, sidebarOpen, setSidebarOpen } = useLayoutContext();
    const { user, loading } = useAuth();

    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language || 'zh-TW');

    const currentStyle = styles.find(s => s.id === selectedStyle);
    const themeColor = getThemeColor(selectedStyle);

    const handleLogoClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const openSignIn = () => {
        setAuthModalOpen(true);
    };

    const toggleLanguage = () => {
        const newLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };

    return (
        <>
            <header className="flex-shrink-0 h-12 md:h-14 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-2 md:px-4 lg:px-6 pb-6">
                {/* Left Logo */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2.5 md:p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {sidebarOpen ? (
                            <X className="w-5 h-5 md:w-5 md:h-5" />
                        ) : (
                            <Menu className="w-5 h-5 md:w-5 md:h-5" />
                        )}
                    </button>
                    <Link
                        href="/"
                        onClick={handleLogoClick}
                        className="text-sm md:text-lg font-semibold text-white flex items-center gap-1 hover:opacity-80 transition-opacity"
                    >
                        Style
                        <span
                            className="transition-colors duration-300"
                            style={{ color: themeColor }}
                        >
                            Prompts
                        </span>
                        <span
                            className="text-2xl md:text-3xl font-black transition-colors duration-300"
                            style={{ color: themeColor }}
                        >
                            /
                        </span>
                    </Link>
                </div>

                {/* Middle Navigation - Desktop (Segmented Pill) */}
                <div className="hidden lg:flex items-center justify-center p-1 bg-white/5 border border-white/5 rounded-full backdrop-blur-sm">
                    <Link
                        href="/"
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${pathname === '/'
                            ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Home className="w-4 h-4" />
                        <span>{t('layout.home')}</span>
                    </Link>
                    <div className="w-px h-4 bg-white/5 mx-1" />
                    <Link
                        href={`/${selectedStyle || 'S01'}`}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${pathname !== '/'
                            ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Eye className="w-4 h-4" />
                        <span>{t('layout.preview')}</span>
                    </Link>
                </div>

                {/* Right - Auth & Style Name */}
                <div className="flex items-center gap-3">
                    {/* Current Style Display */}
                    {currentStyle && (
                        <div className="hidden md:block text-right">
                            <div className="text-xs text-white/60">{t('layout.currentStyle')}</div>
                            <div
                                className="text-sm font-medium text-white truncate"
                                style={{ color: themeColor }}
                            >
                                {t(`styles.${currentStyle.id}.name`)}
                            </div>
                        </div>
                    )}

                    {/* Notification Bell - 只有登入後顯示 */}
                    {user && <NotificationBell />}

                    {/* Auth - 只有已登入時顯示用戶選單 */}
                    {!loading && user && (
                        <div className="flex items-center gap-2">
                            {/* 瀏覽風格庫按鈕 */}
                            <Link
                                href={`/${selectedStyle || 'S01'}`}
                                className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all"
                            >
                                <LayoutGrid className="w-4 h-4" />
                                <span>{t('layout.browseStyles')}</span>
                            </Link>
                            <UserDropdown />
                        </div>
                    )}
                </div>
            </header>

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                defaultMode="signin"
            />
        </>
    );
};
