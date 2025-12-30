'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ProFooter: React.FC = () => {
    const proFeatures = [
        '10+ 進階風格模板',
        '完整設計系統指示詞',
        '未來所有更新免費',
        '商業使用授權',
    ];

    return (
        <footer className="py-24 bg-[#030303] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand & Pro Intro */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                Style<span className="text-purple-500">Prompts</span>
                            </span>
                            <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                <Crown className="w-3 h-3" />
                                Pro
                            </span>
                        </div>

                        {/* Pro Features */}
                        <div className="mb-6 space-y-2">
                            {proFeatures.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                                    <Check className="w-4 h-4 text-purple-500" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#pricing"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors group"
                        >
                            <Sparkles className="w-4 h-4" />
                            立即升級
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Pro 專區 */}
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">Pro 專區</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            <li><Link href="/pro" className="hover:text-white transition-colors">Pro 首頁</Link></li>
                            <li><Link href="/pro/S01" className="hover:text-white transition-colors">Pro 編輯器</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">定價方案</Link></li>
                            <li><Link href="/purchases" className="hover:text-white transition-colors">購買紀錄</Link></li>
                            <li><Link href="/settings" className="hover:text-white transition-colors">帳戶設定</Link></li>
                        </ul>
                    </div>

                    {/* 法律與支援 */}
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">法律與支援</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">隱私權政策</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">使用條款</Link></li>
                            <li><Link href="/legal/refund" className="hover:text-white transition-colors">退款政策</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">免費版</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-black">
                    <div>© 2024-2025 StylePrompts Pro. All rights reserved.</div>
                    <div className="text-purple-400/50">
                        一次購買 · 永久使用 · 不支援退款
                    </div>
                </div>
            </div>
        </footer>
    );
};
