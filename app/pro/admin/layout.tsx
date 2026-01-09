'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import {
    LayoutDashboard,
    Users,
    Shield,
    Megaphone,
    ScrollText,
    Mail,
    ShoppingBag,
    LogOut,
    Loader2
} from 'lucide-react';
import { createPortal } from 'react-dom';
import { GlassSidebar, type NavItem } from '@/components/shared';
import { LoadingSpinner } from '@/components/common';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const adminNavItems: NavItem[] = [
    { href: '/pro/admin', icon: LayoutDashboard, label: '總覽' },
    { href: '/pro/admin/users', icon: Users, label: '使用者管理' },
    { href: '/pro/admin/purchases', icon: ShoppingBag, label: '購買記錄' },
    { href: '/pro/admin/announcements', icon: Megaphone, label: '公告管理' },
    { href: '/pro/admin/changelog', icon: ScrollText, label: '版本更新' },
    { href: '/pro/admin/contacts', icon: Mail, label: '聯絡表單' },
    { href: '/pro/admin/audit-logs', icon: Shield, label: '審計日誌' }
];

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { user, isAdmin, loading, signOut } = useAuth();
    const router = useRouter();
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        if (!loading && !isAdmin) {
            router.replace('/pro');
        }
    }, [loading, isAdmin, router]);

    const handleSignOut = async () => {
        setIsSigningOut(true);
        try {
            await signOut();
            router.replace('/pro');
        } finally {
            setIsSigningOut(false);
            setShowConfirm(false);
        }
    };

    if (loading) {
        return <LoadingSpinner text="載入中..." fullScreen />;
    }

    if (!isAdmin) {
        return null;
    }

    return (
        <div className="h-screen bg-[#020202] flex relative overflow-hidden">
            {/* Global Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Sidebar - 使用共用的 GlassSidebar */}
            <GlassSidebar
                navItems={adminNavItems}
                sectionTitle="Management"
                logo={
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-white font-bold tracking-wide">Admin</p>
                            <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase">Panel</p>
                        </div>
                    </div>
                }
                userInfo={{
                    avatarLetter: user?.user_metadata?.name?.charAt(0) || 'A',
                    displayName: user?.user_metadata?.name || 'Admin',
                    email: user?.email
                }}
            />

            {/* Main Content */}
            <main className="flex-1 overflow-auto flex flex-col">
                {/* Header */}
                <header className="sticky top-0 z-10 px-8 py-4 flex items-center justify-between bg-[#020202]/80 backdrop-blur-lg border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <h1 className="text-lg font-bold text-white">Admin Panel</h1>
                    </div>
                    <button
                        onClick={() => setShowConfirm(true)}
                        disabled={isSigningOut}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-all disabled:opacity-50"
                    >
                        {isSigningOut ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <LogOut className="w-4 h-4" />
                        )}
                        {isSigningOut ? '登出中...' : '登出'}
                    </button>
                </header>

                <div className="flex-1 p-8">
                    {children}
                </div>
            </main>

            {/* Sign Out Confirm Dialog */}
            {showConfirm && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
                    <div className="w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-6 text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/20 flex items-center justify-center">
                                <LogOut className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">確認登出</h3>
                            <p className="text-white/60 text-sm">您確定要登出帳號嗎？</p>
                        </div>
                        <div className="flex border-t border-white/10">
                            <button
                                onClick={() => setShowConfirm(false)}
                                disabled={isSigningOut}
                                className="flex-1 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium disabled:opacity-50"
                            >
                                取消
                            </button>
                            <button
                                onClick={handleSignOut}
                                disabled={isSigningOut}
                                className="flex-1 px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors text-sm font-bold border-l border-white/10 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSigningOut && <Loader2 className="w-4 h-4 animate-spin" />}
                                {isSigningOut ? '登出中...' : '確認登出'}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
