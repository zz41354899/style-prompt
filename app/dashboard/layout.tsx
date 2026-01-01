'use client';

import React from 'react';
import { usePathname, redirect } from 'next/navigation';
import Link from 'next/link';
import { AuthProvider, hasProAccess } from '@/components/providers/AuthProvider';
import { useAuth } from '@/hooks/useAuth';
import { Crown, CreditCard, Settings, ArrowLeft } from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const navItems = [
    { href: '/dashboard/pricing', label: '方案', icon: Crown },
    { href: '/dashboard/purchases', label: '購買紀錄', icon: CreditCard }, // Deprecated
    { href: '/dashboard/settings', label: '設定', icon: Settings }, // Deprecated
];

const DashboardContent: React.FC<DashboardLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const { user, loading } = useAuth();

    // 判斷使用者是否有 Pro 權限
    const isPro = hasProAccess(user);
    const backLink = isPro ? '/pro' : '/';
    const backText = isPro ? 'BACK TO PRO' : '返回資源庫';

    // 未登入重導向
    if (!loading && !user) {
        redirect('/');
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-white/40">載入中...</div>
            </div>
        );
    }

    return (
        <div className="h-screen bg-[#020202] flex relative overflow-hidden">
            {/* Global Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Sidebar - Floating Glass Design */}
            <aside className="w-64 relative z-20 flex flex-col my-8 ml-8">
                <div className="h-full rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 flex flex-col overflow-hidden relative shadow-2xl shadow-black/50">
                    {/* Inner Glow */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    <div className="p-6">
                        <Link href={backLink} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group mb-8">
                            <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium tracking-wide">{backText}</span>
                        </Link>

                        <div className="space-y-1">
                            <h2 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 pl-3">Dashboard</h2>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
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
                                        <div className={`relative p-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white shadow-lg' : 'bg-white/5 group-hover:bg-white/10'}`}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className="relative font-medium text-sm tracking-wide">{item.label}</span>
                                        {isActive && (
                                            <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)]" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-auto p-4">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">{user?.email?.charAt(0).toUpperCase()}</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className={`text-[10px] font-bold tracking-wider uppercase mb-0.5 ${isPro ? 'text-purple-400' : 'text-blue-400'}`}>{isPro ? 'Pro Member' : 'Free Member'}</div>
                                    <div className="text-xs text-white/80 truncate font-medium">{user?.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <AuthProvider>
            <DashboardContent>{children}</DashboardContent>
        </AuthProvider>
    );
}
