'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronRight, Menu, X, Sparkles } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { UserDropdown } from '@/components/layout/UserDropdown';
import { AuthModal } from '@/components/AuthModal';

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
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openSignIn = () => {
        setAuthModalMode('signin');
        setAuthModalOpen(true);
    };

    const openSignUp = () => {
        setAuthModalMode('signup');
        setAuthModalOpen(true);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/pro"
                            onClick={handleLogoClick}
                            className="flex items-center space-x-2 group"
                        >
                            <span className="text-xl font-bold tracking-tight">
                                Style<span className="text-purple-400">Prompts</span>
                            </span>
                            <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Pro
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

                            {/* Auth Section */}
                            {!loading && (
                                <>
                                    {user ? (
                                        <UserDropdown />
                                    ) : (
                                        <div className="hidden sm:flex items-center gap-2">
                                            <button
                                                onClick={openSignIn}
                                                className="px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
                                            >
                                                登入
                                            </button>
                                            <button
                                                onClick={openSignUp}
                                                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-600/20"
                                            >
                                                <span>免費註冊</span>
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}

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

                                {/* Mobile Auth Buttons */}
                                {!loading && !user && (
                                    <div className="space-y-3 pt-4">
                                        <button
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                openSignIn();
                                            }}
                                            className="block w-full py-4 bg-white/5 text-white text-sm font-bold rounded-2xl hover:bg-white/10 transition-all text-center"
                                        >
                                            登入
                                        </button>
                                        <button
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                openSignUp();
                                            }}
                                            className="block w-full py-4 bg-purple-600 text-white text-sm font-bold rounded-2xl hover:bg-purple-500 active:bg-purple-700 transition-all text-center"
                                        >
                                            免費註冊
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Auth Modal */}
            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                defaultMode={authModalMode}
            />
        </>
    );
};
