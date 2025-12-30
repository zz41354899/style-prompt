'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultMode?: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
    isOpen,
    onClose,
    defaultMode = 'signin',
}) => {
    const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { signIn, signUp } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const { error } = mode === 'signin'
                ? await signIn(email, password)
                : await signUp(email, password);

            if (error) {
                setError(error.message);
            } else {
                onClose();
                setEmail('');
                setPassword('');
            }
        } catch {
            setError('發生未預期的錯誤');
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        setMode(mode === 'signin' ? 'signup' : 'signin');
        setError(null);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-white">
                                    {mode === 'signin' ? '登入' : '註冊'}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-white/60" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                        <input
                                            type="email"
                                            placeholder="電子郵件"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                        <input
                                            type="password"
                                            placeholder="密碼"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            minLength={6}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            處理中...
                                        </>
                                    ) : (
                                        mode === 'signin' ? '登入' : '註冊'
                                    )}
                                </button>
                            </form>

                            {/* Toggle Mode */}
                            <div className="mt-6 text-center text-sm text-white/50">
                                {mode === 'signin' ? (
                                    <>
                                        還沒有帳號？{' '}
                                        <button
                                            onClick={toggleMode}
                                            className="text-purple-400 hover:text-purple-300 font-medium"
                                        >
                                            立即註冊
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        已有帳號？{' '}
                                        <button
                                            onClick={toggleMode}
                                            className="text-purple-400 hover:text-purple-300 font-medium"
                                        >
                                            立即登入
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
