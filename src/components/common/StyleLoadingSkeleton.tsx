'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StyleLoadingSkeletonProps {
    variant?: 'card' | 'full';
}

/**
 * 風格元件載入骨架屏
 * 在風格元件延遲載入時顯示的佔位動畫
 */
export const StyleLoadingSkeleton: React.FC<StyleLoadingSkeletonProps> = ({
    variant = 'full'
}) => {


    if (variant === 'card') {
        return (
            <div className="relative overflow-hidden bg-slate-800/50 rounded-lg p-4 h-48">
                <div className="space-y-3">
                    <div className="h-4 bg-slate-700/50 rounded w-3/4" />
                    <div className="h-3 bg-slate-700/30 rounded w-1/2" />
                    <div className="h-20 bg-slate-700/30 rounded mt-4" />
                </div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                />
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden min-h-screen bg-slate-900">
            {/* Header Skeleton */}
            <div className="border-b border-slate-700/50 p-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-700/50 rounded" />
                        <div className="h-5 bg-slate-700/50 rounded w-24" />
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-4 bg-slate-700/30 rounded w-16" />
                        ))}
                        <div className="h-9 bg-slate-700/50 rounded w-24" />
                    </div>
                </div>
            </div>

            {/* Hero Skeleton */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="h-6 bg-slate-700/30 rounded w-40" />
                        <div className="space-y-3">
                            <div className="h-12 bg-slate-700/50 rounded w-full" />
                            <div className="h-12 bg-slate-700/50 rounded w-3/4" />
                        </div>
                        <div className="h-4 bg-slate-700/30 rounded w-full" />
                        <div className="h-4 bg-slate-700/30 rounded w-2/3" />
                        <div className="flex gap-3 pt-4">
                            <div className="h-12 bg-slate-700/50 rounded w-36" />
                            <div className="h-12 bg-slate-700/30 rounded w-36" />
                        </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between bg-slate-700/30 rounded p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-slate-600/50 rounded" />
                                    <div className="h-4 bg-slate-600/50 rounded w-16" />
                                </div>
                                <div className="h-5 bg-slate-600/50 rounded w-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Shimmer Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />

            {/* Loading Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-500 text-sm">
                <motion.div
                    className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
                <span>載入風格預覽中...</span>
            </div>
        </div>
    );
};

export default StyleLoadingSkeleton;
