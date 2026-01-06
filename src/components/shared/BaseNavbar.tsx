'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronRight, Menu, X, Sparkles } from 'lucide-react';

export interface BaseNavbarProps {
    variant: 'free' | 'pro';
    navItems: string[];
    onScrollToSection: (e: React.MouseEvent, id: string) => void;
    toggleLanguage: () => void;
    currentLang: string;
    /** Desktop 右側額外內容 (例如：認證按鈕、CTA) */
    rightContent?: React.ReactNode;
    /** Mobile 選單額外內容 */
    mobileExtraContent?: React.ReactNode;
    /** Nav 區額外連結 */
    extraNavLinks?: React.ReactNode;
}

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
    variant,
    navItems,
    onScrollToSection,
    toggleLanguage,
    currentLang,
    rightContent,
    mobileExtraContent,
    extraNavLinks
}) => {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [promoBarVisible, setPromoBarVisible] = useState(true);

    const isPro = variant === 'pro';

    // 監聽滾動，與 PromoTopBar 保持同步
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setPromoBarVisible(false);
            } else {
                setPromoBarVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Free 版本：PromoBar 顯示時 top-10，隱藏時 top-0
    // Pro 版本：始終 top-0
    const topPosition = isPro ? 'top-0' : (promoBarVisible ? 'top-10' : 'top-0');

    return (
        <nav className={`fixed ${topPosition} left-0 right-0 z-50 ${isPro ? 'bg-[#030303]/80' : 'bg-[#030303]/70'} backdrop-blur-xl border-b ${isPro ? 'border-white/[0.08]' : 'border-white/5'} supports-[backdrop-filter]:bg-[#030303]/60 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href={isPro ? '/pro' : '/'}
                        onClick={handleLogoClick}
                        className="flex items-center space-x-2 group"
                    >
                        <span className="text-xl font-bold tracking-tight">
                            Style<span className="text-purple-400">Prompts</span>
                        </span>
                        {isPro && (
                            <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Pro
                            </span>
                        )}
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
                        {navItems.map((item) => (
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
                        {extraNavLinks}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white flex items-center gap-2"
                        >
                            <Languages className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase">{currentLang === 'zh-TW' ? 'EN' : 'TW'}</span>
                        </button>

                        {/* Custom Right Content */}
                        {rightContent}

                        {/* Mobile Menu Toggle */}
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
                            {navItems.map((item) => (
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

                            {/* Mobile Extra Content */}
                            {mobileExtraContent}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
