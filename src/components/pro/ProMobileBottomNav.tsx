'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Eye, Crown } from 'lucide-react';
import { useProLayoutContext } from './ProLayoutContext';

export const ProMobileBottomNav: React.FC = () => {
    const pathname = usePathname();
    const { selectedStyle } = useProLayoutContext();
    const isEditorPage = pathname.includes('/pro/S');

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-around px-4 z-50">
            <Link
                href="/pro"
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${pathname === '/pro'
                    ? 'text-purple-400'
                    : 'text-white/40 hover:text-white'
                    }`}
            >
                <Home className="w-5 h-5" />
                <span className="text-xs font-medium">首頁</span>
            </Link>

            <Link
                href={`/pro/${selectedStyle || 'S01'}`}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${isEditorPage
                    ? 'text-purple-400'
                    : 'text-white/40 hover:text-white'
                    }`}
            >
                <Eye className="w-5 h-5" />
                <span className="text-xs font-medium">預覽</span>
            </Link>

            <Link
                href="/pro#pricing"
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-white/40 hover:text-white transition-all"
            >
                <Crown className="w-5 h-5" />
                <span className="text-xs font-medium">方案</span>
            </Link>
        </nav>
    );
};
