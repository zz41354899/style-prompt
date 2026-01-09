'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, LogOut, ChevronDown, Loader2 } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import { useTranslation } from 'react-i18next';

export const UserDropdown: React.FC = () => {
    const { user, signOut, profileName } = useAuth();
    const { t } = useTranslation();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 點擊外部關閉選單 - 使用 click 而非 mousedown 避免與按鈕事件衝突
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // 使用 setTimeout 確保 click 事件在其他事件處理完後才綁定
        const timer = setTimeout(() => {
            if (isOpen) {
                document.addEventListener('click', handleClickOutside);
            }
        }, 0);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const handleSignOut = async () => {
        if (isSigningOut) return;
        
        setIsSigningOut(true);
        setIsOpen(false);
        
        try {
            await signOut();
            // 根據當前路徑決定登出後導向
            const isProArea = window.location.pathname.startsWith('/pro');
            router.push(isProArea ? '/pro' : '/');
        } catch (error) {
            console.error('Sign out error:', error);
        } finally {
            setIsSigningOut(false);
        }
    };

    // 取得使用者顯示名稱或 email 前綴
    // 優先順序：profileName (資料庫) > user_metadata.name (OAuth) > email 前綴
    const displayName = profileName || user?.user_metadata?.name || user?.email?.split('@')[0] || t('userDropdown.defaultName');
    const avatarLetter = displayName.charAt(0).toUpperCase();

    return (
        <div ref={dropdownRef} className="relative">
            {/* Avatar Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 hover:bg-white/5 rounded-full transition-colors"
            >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    {avatarLetter}
                </div>
                <ChevronDown className={`hidden sm:block w-4 h-4 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Mobile Overlay */}
                        <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" onClick={() => setIsOpen(false)} />

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="
                                fixed right-4 left-4 top-20 z-50
                                sm:absolute sm:right-0 sm:left-auto sm:top-full sm:mt-2 sm:w-56
                                bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl overflow-hidden
                            "
                        >
                            {/* User Info */}
                            <div className="px-4 py-3 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                        {avatarLetter}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white truncate">{displayName}</p>
                                        <p className="text-xs text-white/40 truncate">{user?.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* 控制面板 */}
                            <div className="py-2">
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    {t('userDropdown.dashboard')}
                                </Link>
                            </div>

                            {/* Sign Out */}
                            <div className="border-t border-white/5 py-2">
                                <button
                                    onClick={handleSignOut}
                                    disabled={isSigningOut}
                                    className="flex items-center gap-3 px-4 py-2.5 w-full text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSigningOut ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <LogOut className="w-4 h-4" />
                                    )}
                                    {isSigningOut ? '登出中...' : t('userDropdown.signOut')}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
