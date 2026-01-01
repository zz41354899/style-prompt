'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronRight, Menu, X, Crown, Sparkles, LayoutGrid } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { UserDropdown } from '@/components/layout/UserDropdown';
import NotificationBell from '@/components/common/NotificationBell';

interface ProNavbarProps {
    onScrollToSection: (e: React.MouseEvent, id: string) => void;
    toggleLanguage: () => void;
    currentLang: string;
}

export const ProNavbar: React.FC<ProNavbarProps> = ({
    onScrollToSection,
    toggleLanguage,
    currentLang
}) => {
    const { t } = useTranslation();
    const { user, loading } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ['features', 'styles', 'pricing', 'faq'];

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={false}
                animate={{
                    width: isScrolled ? 'calc(100% - 32px)' : '100%',
                    top: isScrolled ? 16 : 0,
                    borderRadius: isScrolled ? 24 : 0,
                    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                    borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    boxShadow: isScrolled ? '0 25px 50px -12px rgba(88, 28, 135, 0.1)' : 'none'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`fixed z-50 backdrop-blur-xl left-0 right-0 mx-auto max-w-7xl`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/pro"
                            onClick={handleLogoClick}
                            className="flex items-center gap-3 group"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600 blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="relative w-9 h-9 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-xl flex items-center justify-center shadow-inner">
                                    <Sparkles className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white leading-none tracking-tight group-hover:text-purple-100 transition-colors">StylePrompts</span>
                            </div>
                            <span className="ml-1 px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase rounded-full flex items-center gap-1 shadow-[0_0_10px_-3px_rgba(168,85,247,0.3)]">
                                <Crown className="w-3 h-3" />
                                PRO
                            </span>

                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={(e) => onScrollToSection(e, item)}
                                    className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group/item"
                                >
                                    {t(`landing.nav.${item}`)}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover/item:w-full transition-all duration-300 opacity-0 group-hover/item:opacity-100" />
                                </a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleLanguage}
                                className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-1.5"
                            >
                                <Languages className="w-4 h-4" />
                                <span className="text-xs font-bold">{currentLang === 'zh-TW' ? 'EN' : 'TW'}</span>
                            </button>

                            {/* Notification Bell - 只有登入後顯示 */}
                            {user && <NotificationBell />}

                            {!loading && (
                                <>
                                    {user ? (
                                        <div className="hidden sm:flex items-center gap-4 pl-4 border-l border-white/10">
                                            {/* 瀏覽風格庫按鈕 - 只有登入後顯示 */}
                                            <Link
                                                href="/pro/S01"
                                                className="group flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
                                            >
                                                <LayoutGrid className="w-4 h-4" />
                                                資源庫
                                            </Link>
                                            <UserDropdown />
                                        </div>
                                    ) : (
                                        <div className="hidden sm:flex items-center gap-2 pl-2">
                                            <Link
                                                href="/pro/login"
                                                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] transition-all duration-300"
                                            >
                                                <span>登入</span>
                                                <ChevronRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    )}
                                </>
                            )}

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile Menu */}
                <AnimatePresence>
                    {
                        mobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="md:hidden bg-black/95 border-t border-white/5 overflow-hidden"
                            >
                                <div className="p-4 space-y-2">
                                    {navItems.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                const element = document.getElementById(item);
                                                if (element) {
                                                    setMobileMenuOpen(false);
                                                    setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
                                                }
                                            }}
                                            className="block w-full py-3 px-4 text-left text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                                        >
                                            {t(`landing.nav.${item}`)}
                                        </button>
                                    ))}

                                    {!loading && user && (
                                        <Link
                                            href="/pro/S01"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-2 w-full py-3 px-4 text-purple-400 hover:text-purple-300 hover:bg-white/5 rounded-lg transition-all font-medium"
                                        >
                                            <LayoutGrid className="w-4 h-4" />
                                            風格資源庫
                                        </Link>
                                    )}

                                    {!loading && !user && (
                                        <div className="pt-4 border-t border-white/5">
                                            <Link
                                                href="/pro/login"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block w-full py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-bold rounded-xl text-center"
                                            >
                                                登入
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.nav>
        </>
    );
};
