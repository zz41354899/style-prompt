'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/providers/AuthProvider';
import { motion } from 'framer-motion';
import { Loader2, Github, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Globe } from '@/components/common/Globe';
import { GlobeLoader } from '@/components/common/GlobeLoader';

// Google Icon Component
const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

// ============================================
// LoginGate Props
// ============================================
interface LoginGateProps {
    children?: React.ReactNode;
    backLink?: string;
    variant?: 'pro' | 'default';
}

export const LoginGate: React.FC<LoginGateProps> = ({ children }) => {
    const { t } = useTranslation();
    const { user, signInWithGoogle, signInWithGithub, loading } = useAuth();

    // Form states
    const [error, setError] = useState<string | null>(null);
    const [localLoading, setLocalLoading] = useState<string | null>(null);

    const handleSocialLogin = async (provider: 'google' | 'github') => {
        if (loading || localLoading) return;
        setError(null);
        setLocalLoading(provider);
        try {
            const { error: authError } = provider === 'google'
                ? await signInWithGoogle()
                : await signInWithGithub();

            if (authError) {
                setError(authError.message);
            }
        } catch (err) {
            console.error(`${provider} login error:`, err);
        } finally {
            setLocalLoading(null);
        }
    };

    const isLoading = (provider: string) => loading || localLoading === provider;

    // 只在初始認證檢查時顯示載入畫面
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
                <GlobeLoader
                    size={160}
                    text={t('auth.loading')}
                />
            </div>
        );
    }

    // ============================================
    // Gate 邏輯：已登入則顯示 children
    // ============================================
    if (user) {
        return <>{children}</>;
    }

    // ============================================
    // 未登入：顯示登入表單
    // ============================================
    return (
        <div className="min-h-screen bg-[#141414] text-white font-sans grid lg:grid-cols-2">
            {/* Left Column: Login */}
            <div className="relative flex flex-col h-full z-10">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-between items-center p-6 lg:p-8"
                >
                    <Link href="/pro" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300">
                            SP
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                            StylePrompts
                            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text border border-purple-500/30 rounded shadow-sm align-middle">
                                PRO
                            </span>
                        </span>
                    </Link>
                </motion.header>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24">
                    <div className="w-full max-w-sm space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="text-center space-y-2"
                        >
                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                {t('auth.welcome')}
                            </h1>
                            <p className="text-gray-400">
                                {t('auth.subtitle')}
                            </p>
                        </motion.div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>{error}</span>
                            </motion.div>
                        )}

                        {/* Social Login Buttons */}
                        <div className="space-y-3">
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                whileHover={{ scale: 1.02, backgroundColor: "#252525" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSocialLogin('google')}
                                disabled={!!localLoading}
                                className="w-full h-12 flex items-center justify-center gap-3 bg-[#1a1a1a] border border-[#333] text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                            >
                                {isLoading('google') ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                                ) : (
                                    <>
                                        <GoogleIcon />
                                        <span>{t('auth.continueWithGoogle')}</span>
                                    </>
                                )}
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                                whileHover={{ scale: 1.02, backgroundColor: "#2f363d" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSocialLogin('github')}
                                disabled={!!localLoading}
                                className="w-full h-12 flex items-center justify-center gap-3 bg-[#24292e] text-white rounded-lg transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                            >
                                {isLoading('github') ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                                ) : (
                                    <>
                                        <Github className="w-5 h-5 text-white" />
                                        <span>{t('auth.continueWithGithub')}</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 lg:p-8 flex flex-col items-center gap-4 text-sm text-gray-500"
                >
                    <div className="flex items-center justify-center gap-6">
                        <Link href="/pro/legal/terms" className="hover:text-gray-300 transition-colors">
                            {t('pro.footer.terms')}
                        </Link>
                        <Link href="/pro/legal/privacy" className="hover:text-gray-300 transition-colors">
                            {t('pro.footer.privacy')}
                        </Link>
                        <Link href="/pro/legal/refund" className="hover:text-gray-300 transition-colors">
                            {t('pro.footer.refund')}
                        </Link>
                    </div>
                    <LanguageSwitcher variant="header" />
                </motion.footer>
            </div>

            {/* Right Column: Globe Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden lg:flex relative bg-[#000000] overflow-hidden items-end justify-center"
            >
                {/* Purple ambient glow at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

                <div className="relative w-full h-full flex items-end justify-center z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20" />
                    <Globe className="scale-[1.8] translate-y-[35%]" />
                </div>
            </motion.div>
        </div>
    );
};
