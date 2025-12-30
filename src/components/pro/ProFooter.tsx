'use client';

import React from 'react';
import Link from 'next/link';
import { Crown } from 'lucide-react';

export const ProFooter: React.FC = () => {
    return (
        <footer className="py-24 bg-[#030303] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                Style<span className="text-purple-500">Prompts</span>
                            </span>
                            <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                <Crown className="w-3 h-3" />
                                Pro
                            </span>
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed max-w-sm font-light">
                            專業級 AI 視覺風格指示詞庫。10+ 進階風格模板，讓您的設計更上一層樓。
                        </p>
                    </div>

                    {/* Pro 專區 */}
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">Pro 專區</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            <li><Link href="/pro" className="hover:text-white transition-colors">Pro 首頁</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">定價方案</Link></li>
                            <li><Link href="/purchases" className="hover:text-white transition-colors">購買紀錄</Link></li>
                            <li><Link href="/settings" className="hover:text-white transition-colors">帳戶設定</Link></li>
                        </ul>
                    </div>

                    {/* 產品 */}
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">產品</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            <li><Link href="/" className="hover:text-white transition-colors">免費版</Link></li>
                            <li><Link href="/pro#showcase" className="hover:text-white transition-colors">Pro 風格</Link></li>
                            <li><Link href="/pro#pricing" className="hover:text-white transition-colors">升級 Pro</Link></li>
                        </ul>
                    </div>

                    {/* 法律與支援 */}
                    <div>
                        <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">法律與支援</h4>
                        <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">隱私權政策</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">使用條款</Link></li>
                            <li><Link href="/legal/refund" className="hover:text-white transition-colors">退款政策</Link></li>
                            <li><Link href="/coffee" className="hover:text-white transition-colors flex items-center gap-2">請我喝咖啡 ☕</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-black">
                    <div>© 2024-2025 StylePrompts. All rights reserved.</div>
                    <div className="text-white/30">
                        一次購買，永久使用 · 不支援退款
                    </div>
                </div>
            </div>
        </footer>
    );
};
