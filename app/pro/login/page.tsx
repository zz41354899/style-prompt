'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { LoginGate, AppLoader } from '@/components/common';

export default function ProLoginPage() {
    const router = useRouter();
    const { user, loading } = useAuth();
    const [showLoader, setShowLoader] = useState(false);

    // 登入成功後顯示載入動畫，然後跳轉
    useEffect(() => {
        if (!loading && user) {
            // 觸發載入動畫
            setShowLoader(true);
        }
    }, [user, loading]);

    // 如果正在顯示載入動畫
    if (showLoader) {
        return (
            <div className="min-h-screen bg-[#030303]">
                <AppLoader
                    minLoadTime={1800}
                    onComplete={() => router.replace('/pro')}
                />
            </div>
        );
    }

    // LoginGate 會處理載入和登入表單顯示
    return <LoginGate backLink="/pro" variant="pro">{null}</LoginGate>;
}
