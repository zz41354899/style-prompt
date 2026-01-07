'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ProMainLayout } from '@/components/pro';
import { LoginGate } from '@/components/common';

interface ProLayoutProps {
    children: React.ReactNode;
}

export default function ProLayout({ children }: ProLayoutProps) {
    const pathname = usePathname();

    // Pro Landing Page (/pro) 不使用 MainLayout 也不需登入
    const isLandingPage = pathname === '/pro';

    // 登入頁面
    const isLoginPage = pathname === '/pro/login';

    // Admin 頁面使用獨立的 Layout
    const isAdminPage = pathname.startsWith('/pro/admin');

    // 法律頁面使用獨立頁面
    const isLegalPage = pathname.startsWith('/pro/legal');

    // 不需要登入的頁面
    const isPublicPage = isLandingPage || isLegalPage || isLoginPage;

    // AuthProvider 已在根 layout.tsx 中提供
    return (
        <>
            {isPublicPage ? (
                children
            ) : isAdminPage ? (
                children
            ) : (
                <LoginGate backLink="/pro" variant="pro">
                    <ProMainLayout>
                        {children}
                    </ProMainLayout>
                </LoginGate>
            )}
        </>
    );
}

