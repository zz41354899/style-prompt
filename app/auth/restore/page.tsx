'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function RestoreAccountPage() {
    const router = useRouter();

    useEffect(() => {
        // 直接導向 dashboard，恢復功能已在 dashboard layout 中處理
        router.push('/dashboard/pricing');
    }, [router]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
                <p className="text-white/60">重新導向中...</p>
            </div>
        </div>
    );
}
