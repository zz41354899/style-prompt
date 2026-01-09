'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { Crown, CreditCard, Settings, Bell } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlassSidebar, type NavItem } from '@/components/shared';
import { LoadingSpinner } from '@/components/common';
import { useAccountStatusPolling } from '@/hooks/useAccountStatusPolling';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardContent: React.FC<DashboardLayoutProps> = ({ children }) => {
    const { user, isPro, loading } = useAuth();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const router = useRouter();
    
    // 使用統一的帳戶狀態輪詢 hook
    const { status: localAccountStatus } = useAccountStatusPolling(user?.id);

    // 導航項目
    const navItems: NavItem[] = [
        { href: '/dashboard/pricing', label: t('dashboard.nav.pricing'), icon: Crown },
        { href: '/dashboard/purchases', label: t('dashboard.nav.purchases'), icon: CreditCard },
        { href: '/dashboard/announcements', label: t('dashboard.nav.announcements'), icon: Bell },
        { href: '/dashboard/settings', label: t('dashboard.nav.settings'), icon: Settings },
    ];

    // 返回連結
    const backLink = {
        href: isPro ? '/pro' : '/',
        text: isPro ? t('dashboard.nav.backToPro') : t('dashboard.nav.backToLibrary')
    };

    // 語系切換
    const toggleLanguage = () => {
        const newLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(newLang);
    };

    // 未登入重導向
    useEffect(() => {
        if (!loading && !user) {
            router.replace('/');
        }
    }, [loading, user, router]);

    // 帳戶狀態變化時重導向
    useEffect(() => {
        if (!loading && user) {
            if (localAccountStatus === 'suspended') {
                router.replace('/auth/suspended');
            } else if (localAccountStatus === 'deleted') {
                router.replace('/auth/deleted');
            }
            // pending_deletion 可以繼續使用 dashboard（讓用戶看到恢復選項）
        }
    }, [loading, user, localAccountStatus, router]);

    if (loading || !user) {
        return <LoadingSpinner text={t('auth.loading')} fullScreen />;
    }

    return (
        <div className="h-screen bg-[#020202] flex relative overflow-hidden">
            {/* Global Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Sidebar - 使用共用的 GlassSidebar */}
            <GlassSidebar
                navItems={navItems}
                sectionTitle="Dashboard"
                backLink={backLink}
                languageToggle={{
                    currentLang,
                    onToggle: toggleLanguage
                }}
                userInfo={{
                    avatarLetter: user?.email?.charAt(0).toUpperCase() || 'U',
                    displayName: user?.email || '',
                    email: user?.email,
                    memberType: isPro ? t('dashboard.member.proMember') : t('dashboard.member.freeMember'),
                    memberTypeClass: isPro ? 'text-purple-400' : 'text-blue-400'
                }}
            />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto flex flex-col">
                {/* Header */}
                <header className="sticky top-0 z-10 px-8 py-4 flex items-center justify-end bg-[#020202]/80 backdrop-blur-lg border-b border-white/5" />

                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    // AuthProvider 已在根 layout.tsx 中提供，這裡不需要重複包裝
    return <DashboardContent>{children}</DashboardContent>;
}
