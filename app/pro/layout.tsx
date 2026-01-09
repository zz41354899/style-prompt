'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ProMainLayout } from '@/components/pro';
import { LoginGate } from '@/components/common';
import { useAuth } from '@/components/providers/AuthProvider';

// 帳戶狀態檢查 wrapper
const AccountStatusGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, accountStatus, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            if (accountStatus === 'suspended') {
                router.replace('/auth/suspended');
            } else if (accountStatus === 'pending_deletion' || accountStatus === 'deleted') {
                router.replace('/auth/deleted');
            }
        }
    }, [user, accountStatus, loading, router]);

    if (user && accountStatus !== 'active') {
        return null;
    }

    return <>{children}</>;
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // 公開頁面：不需要登入
    const isPublicPage = pathname === '/pro' || 
                         pathname === '/pro/login' || 
                         pathname.startsWith('/pro/legal') ||
                         pathname.startsWith('/pro/admin');

    if (isPublicPage) return <>{children}</>;

    return (
        <LoginGate backLink="/pro" variant="pro">
            <AccountStatusGuard>
                <ProMainLayout>{children}</ProMainLayout>
            </AccountStatusGuard>
        </LoginGate>
    );
}

