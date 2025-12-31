'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Lock, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

interface ProUpgradePromptProps {
    isOpen: boolean;
    onClose: () => void;
    styleName?: string;
}

export const ProUpgradePrompt: React.FC<ProUpgradePromptProps> = ({
    isOpen,
    onClose,
    styleName = '此風格'
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030303]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg text-center"
            >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/10 border border-purple-500/20 rounded-3xl mb-6">
                    <Lock className="w-10 h-10 text-purple-400" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-black mb-3">需要 Pro 授權</h1>
                <p className="text-white/50 mb-8 max-w-sm mx-auto">
                    「{styleName}」是 Pro 專屬風格，升級後即可存取所有進階內容。
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <Link
                        href="/pro#pricing"
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                        <Crown className="w-5 h-5" />
                        升級 Pro
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white/70 font-medium rounded-2xl hover:bg-white/10 transition-all"
                    >
                        返回
                    </button>
                </div>

                {/* Pricing Preview */}
                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl max-w-xs mx-auto">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-white/40 line-through text-sm">NT$3,600</span>
                        <span className="text-2xl font-black">NT$2,000</span>
                    </div>
                    <p className="text-xs text-white/40">一次購買，終身使用</p>
                </div>
            </motion.div>
        </div>
    );
};
