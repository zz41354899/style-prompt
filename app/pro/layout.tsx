'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { ProMainLayout } from '@/components/pro';

interface ProLayoutProps {
    children: React.ReactNode;
}

export default function ProLayout({ children }: ProLayoutProps) {
    const pathname = usePathname();

    // Pro Landing Page (/pro) 不使用 MainLayout
    const isLandingPage = pathname === '/pro';

    // Admin 頁面使用獨立的 Layout
    const isAdminPage = pathname.startsWith('/pro/admin');

    // 法律頁面使用獨立頁面
    const isLegalPage = pathname.startsWith('/pro/legal');

    return (
        <AuthProvider>
            {isLandingPage || isAdminPage || isLegalPage ? (
                children
            ) : (
                <ProMainLayout>
                    {children}
                </ProMainLayout>
            )}
        </AuthProvider>
    );
}
