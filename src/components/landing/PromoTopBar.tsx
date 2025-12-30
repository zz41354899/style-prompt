'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';

export const PromoTopBar: React.FC = () => {
    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-2.5 px-4 text-center relative overflow-hidden"
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
        </motion.div>
    );
};
