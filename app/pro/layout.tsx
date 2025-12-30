'use client';

import React from 'react';
import { AuthProvider } from '@/components/providers/AuthProvider';

interface ProLayoutProps {
    children: React.ReactNode;
}

export default function ProLayout({ children }: ProLayoutProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
