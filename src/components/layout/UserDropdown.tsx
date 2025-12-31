'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LayoutDashboard, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export const UserDropdown: React.FC = () => {
    const { user, signOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 點擊外部關閉選單
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        await signOut();
        setIsOpen(false);
    };

    // 取得使用者顯示名稱或 email 前綴
    const displayName = user?.user_metadata?.name || user?.email?.split('@')[0] || '使用者';
    const avatarLetter = displayName.charAt(0).toUpperCase();

    return (
        <div ref={dropdownRef} className="relative">
            {/* Avatar Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded-full transition-colors"
            >
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {avatarLetter}
                </div>
                <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50"
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
                                控制面板
                            </Link>
                        </div>

                        {/* Sign Out */}
                        <div className="border-t border-white/5 py-2">
                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-3 px-4 py-2.5 w-full text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                登出
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
