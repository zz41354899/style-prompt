'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Home, Eye } from 'lucide-react';
import { useLayoutContext } from './LayoutContext';

export const MobileBottomNav: React.FC = () => {
    const pathname = usePathname();
    const { t } = useTranslation();
    const { selectedStyle } = useLayoutContext();

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-xl border-t border-white/10 pb-safe">
            <div className="flex items-center h-16">
                <Link
                    href="/"
                    className={`flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors ${pathname === '/' ? 'text-white' : 'text-white/40 hover:text-white/60'
                        }`}
                >
                    <Home
                        className={`w-5 h-5 ${pathname === '/' ? 'fill-white/20' : ''}`}
                    />
                    <span className="text-[10px] font-medium">{t('layout.home')}</span>
                </Link>
                <Link
                    href={`/${selectedStyle || 'S01'}`}
                    className={`flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors ${pathname !== '/' ? 'text-white' : 'text-white/40 hover:text-white/60'
                        }`}
                >
                    <Eye
                        className={`w-5 h-5 ${pathname !== '/' ? 'fill-white/20' : ''}`}
                    />
                    <span className="text-[10px] font-medium">{t('layout.preview')}</span>
                </Link>
            </div>
        </div>
    );
};
