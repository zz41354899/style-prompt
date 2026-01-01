'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface LoginGateProps {
    children: React.ReactNode;
    backLink?: string;
    variant?: 'free' | 'pro';
}

export const LoginGate: React.FC<LoginGateProps> = ({
    children,
    backLink = '/',
    variant = 'free'
}) => {
    const { user, loading, signIn, signUp } = useAuth();
    const [mode, setMode] = useState<'signin' | 'signup'>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 載入中
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-white/40">載入中...</div>
            </div>
        );
    }

    // 已登入，顯示內容
    if (user) {
        return <>{children}</>;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const { error } = mode === 'signin'
                ? await signIn(email, password)
                : await signUp(email, password);

            if (error) {
                setError(error.message);
            }
        } catch {
            setError('發生未預期的錯誤');
        } finally {
            setIsSubmitting(false);
        }
    };

    // 根據 variant 決定 Logo 樣式
    const isPro = variant === 'pro';

    // 未登入，顯示登入頁面
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6">
                <Link
                    href={backLink}
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                </Link>
            </div>

            {/* Centered Form */}
            <div className="min-h-screen flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-sm"
                >
                    {/* Logo Icon */}
                    <div className="flex justify-center mb-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPro
                                ? 'bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500'
                                : 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400'
                            }`}>
                            <span className="text-white text-sm font-bold">st</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-center mb-2">
                        {mode === 'signin' ? 'Welcome back' : 'Create account'}
                    </h1>
                    <p className="text-white/40 text-sm text-center mb-8">
                        {mode === 'signin'
                            ? (isPro ? 'Login to access Pro features' : 'Login to your account')
                            : 'Sign up for a new account'
                        }
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-white hover:bg-gray-100 disabled:bg-white/50 text-black font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    處理中...
                                </>
                            ) : (
                                <>
                                    <Mail className="w-4 h-4" />
                                    {mode === 'signin' ? 'Sign in with Email' : 'Sign up with Email'}
                                </>
                            )}
                        </button>
                    </form>

                    {/* Toggle Mode */}
                    <div className="mt-6 text-center">
                        {mode === 'signin' ? (
                            <button
                                onClick={() => { setMode('signup'); setError(null); }}
                                className="text-sm text-amber-500/80 hover:text-amber-400 transition-colors"
                            >
                                Don&apos;t have an account? <span className="underline">Sign Up</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => { setMode('signin'); setError(null); }}
                                className="text-sm text-amber-500/80 hover:text-amber-400 transition-colors"
                            >
                                Already have an account? <span className="underline">Sign In</span>
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
