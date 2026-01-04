'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import {
    LayoutDashboard,
    Users,
    CreditCard,
    ChevronRight,
    Shield,
    LogOut,
    Megaphone,
    ScrollText,
    Mail,
    ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const adminNavItems = [
    {
        href: '/pro/admin',
        icon: LayoutDashboard,
        label: '總覽'
    },
    {
        href: '/pro/admin/users',
        icon: Users,
        label: '使用者管理'
    },
    {
        href: '/pro/admin/purchases',
        icon: ShoppingBag,
        label: '購買記錄'
    },
    {
        href: '/pro/admin/announcements',
        icon: Megaphone,
        label: '公告管理'
    },
    {
        href: '/pro/admin/changelog',
        icon: ScrollText,
        label: '版本更新'
    },
    {
        href: '/pro/admin/contacts',
        icon: Mail,
        label: '聯絡表單'
    }
];

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { user, role, isAdmin, loading, signOut } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        console.log('=== ADMIN LAYOUT DEBUG ===');
        console.log('loading:', loading);
        console.log('user:', user?.email);
        console.log('role:', role);
        console.log('isAdmin:', isAdmin);
        console.log('========================');

        if (!loading && !isAdmin) {
            console.warn('❌ Admin layout: Not admin, redirecting to /pro');
            // 非 Admin 導回 /pro
            router.replace('/pro');
        }
    }, [loading, isAdmin, router, user, role]);

    // Loading 狀態
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                    <p className="text-white/60">載入中...</p>
                </div>
            </div>
        );
    }

    // 非 Admin 不渲染內容
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

            {/* Sidebar - Floating Glass Design */}
            <aside className="w-64 relative z-20 flex flex-col my-8 ml-8">
                <div className="h-full rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 flex flex-col overflow-hidden relative shadow-2xl shadow-black/50">
                    {/* Inner Glow */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    {/* Logo Area */}
                    <div className="p-6 pb-2">
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold tracking-wide">Admin</p>
                                <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase">Panel</p>
                            </div>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 p-4 space-y-1">
                        <h2 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 pl-3 mt-4">Management</h2>
                        {adminNavItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== '/pro/admin' && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-white/50 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]" />
                                    )}
                                    <item.icon className={`w-4 h-4 transition-colors ${isActive ? 'text-purple-400' : 'text-white/60 group-hover:text-white'}`} />
                                    <span className="relative flex-1 font-medium text-sm tracking-wide">{item.label}</span>
                                    {isActive && (
                                        <ChevronRight className="w-3 h-3 text-purple-400" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Info + Logout */}
                    <div className="p-4 mt-auto">
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                        {user?.user_metadata?.name?.charAt(0) || 'A'}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-xs font-bold truncate">
                                        {user?.user_metadata?.name || 'Admin'}
                                    </p>
                                    <p className="text-white/40 text-[10px] truncate">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={async () => {
                                    await signOut();
                                    router.replace('/pro');
                                }}
                                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all uppercase tracking-wide"
                            >
                                <LogOut className="w-3 h-3" />
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
