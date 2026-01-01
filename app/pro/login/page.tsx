'use client';

import { AuthProvider } from '@/components/providers/AuthProvider';
import { LoginGate } from '@/components/common';
import { redirect } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

// 這個頁面只是一個進入點，真正的登入邏輯由 LoginGate 處理
function LoginContent() {
    const { user, loading } = useAuth();

    // 已登入，重導向到資源庫
    if (!loading && user) {
        redirect('/pro/S01');
    }

    return (
        <LoginGate backLink="/pro" variant="pro">
            {/* 登入成功後會自動重導向 */}
            <div className="hidden" />
        </LoginGate>
    );
}

export default function ProLoginPage() {
    return (
        <AuthProvider>
            <LoginContent />
        </AuthProvider>
    );
}
