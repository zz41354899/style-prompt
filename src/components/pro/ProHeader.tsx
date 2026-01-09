'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { X, Menu, Home, Eye, Crown, ChevronRight } from 'lucide-react';
import { useProLayoutContext } from './ProLayoutContext';
import { useAuth } from '@/components/providers/AuthProvider';
import { UserDropdown } from '@/components/layout/UserDropdown';
import { AuthModal } from '@/components/common';

export const ProHeader: React.FC = () => {
    const pathname = usePathname();
    const { t } = useTranslation();
    const { selectedStyle, sidebarOpen, setSidebarOpen } = useProLayoutContext();
    const { user, loading } = useAuth();

    const [authModalOpen, setAuthModalOpen] = useState(false);
    const isEditorPage = pathname.includes('/pro/S');

    const openSignIn = () => setAuthModalOpen(true);

    return (
        <>
            <header className="flex-shrink-0 h-14 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-4 lg:px-6">
                {/* Left */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                    <Link
                        href="/pro"
                        className="text-lg font-semibold text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        Style<span className="text-purple-400">Prompts</span>
                        <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            Pro
                        </span>
                    </Link>
                </div>

                {/* Center Navigation */}
                <div className="hidden lg:flex items-center justify-center p-1 bg-white/5 border border-white/5 rounded-full">
                    <Link
                        href="/pro"
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${pathname === '/pro'
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Home className="w-4 h-4" />
                        <span>{t('pro.header.home')}</span>
                    </Link>
                    <div className="w-px h-4 bg-white/5 mx-1" />
                    <Link
                        href={`/pro/${selectedStyle || 'S01'}`}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isEditorPage
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Eye className="w-4 h-4" />
                        <span>{t('pro.header.preview')}</span>
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    {/* Auth - loading 時顯示骨架屏 */}
                    {loading ? (
                        <div className="hidden sm:block w-20 h-8 bg-white/10 rounded-full animate-pulse" />
                    ) : user ? (
                        <UserDropdown />
                    ) : (
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={openSignIn}
                                className="flex items-center gap-1.5 px-4 py-1.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-500 transition-all"
                            >
                                <span>登入</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
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
