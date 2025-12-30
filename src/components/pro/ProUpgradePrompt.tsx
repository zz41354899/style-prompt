'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Lock, Sparkles, ArrowRight, X } from 'lucide-react';

interface ProUpgradePromptProps {
    isOpen: boolean;
    onClose: () => void;
    styleName?: string;
}

export const ProUpgradePrompt: React.FC<ProUpgradePromptProps> = ({
    isOpen,
    onClose,
    styleName
}) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-[#0c0c0c] border border-purple-500/20 rounded-2xl w-full max-w-md p-8 shadow-2xl overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Glow */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/30">
                        <Lock className="w-8 h-8 text-white" />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
                        <Crown className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">Pro 專屬功能</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">
                        解鎖 Pro 風格
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">
                        {styleName ? (
                            <>
                                <span className="text-purple-400 font-medium">{styleName}</span> 是 Pro 專屬風格。
                                升級 Pro 即可複製完整指示詞！
                            </>
                        ) : (
                            <>升級 Pro 解鎖所有進階風格與完整指示詞！</>
                        )}
                    </p>

                    {/* Features */}
                    <div className="mb-6 p-4 bg-white/5 rounded-xl">
                        <div className="text-xs text-white/40 mb-3 uppercase tracking-wide">Pro 版包含</div>
                        <div className="space-y-2 text-sm text-white/70">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span>10+ 進階風格模板</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span>完整設計系統指示詞</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span>未來更新免費</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/pro#pricing"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-600/30 group"
                    >
                        <Crown className="w-4 h-4" />
                        升級 Pro
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Price Hint */}
                    <p className="mt-3 text-xs text-white/30">
                        一次購買 · 永久使用
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};
