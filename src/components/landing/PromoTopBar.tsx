'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronRight } from 'lucide-react';

export const PromoTopBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 滾動超過 100px 就隱藏
            if (currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-2.5 px-4 text-center overflow-hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

            <Link
                href="/pro"
                className="relative z-10 inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
                <Sparkles className="w-4 h-4" />
                <span>
                    Introducing <strong>StylePrompts Pro</strong> — 解鎖 10+ 進階風格模板
                </span>
                <ChevronRight className="w-4 h-4" />
            </Link>
        </div>
    );
};
