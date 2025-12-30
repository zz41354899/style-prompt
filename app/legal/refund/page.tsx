'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { AuthProvider } from '@/components/providers/AuthProvider';

const RefundPolicyContent: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Header */}
            <header className="border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <Link href="/pro" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        返回
                    </Link>
                    <h1 className="text-2xl font-bold">退款政策</h1>
                    <p className="text-white/50 text-sm mt-2">最後更新：2024 年 12 月</p>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    {/* Important Notice */}
                    <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-400 mb-2">重要提醒</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                StylePrompts Pro 為數位商品，採一次性付款方式。由於數位商品的特性，一旦購買完成即無法退款。請在購買前仔細閱讀以下條款。
                            </p>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-purple-400">1. 不支援退款政策</h2>
                        <p className="text-white/60 leading-relaxed">
                            由於 StylePrompts Pro 是數位產品，購買後您將立即獲得所有 Pro 風格的完整存取權限。因此，我們無法提供退款服務。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-purple-400">2. 購買前建議</h2>
                        <ul className="text-white/60 leading-relaxed space-y-2 list-disc list-inside">
                            <li>請先瀏覽我們的 <Link href="/pro#showcase" className="text-purple-400 hover:underline">風格展示區</Link> 了解各 Pro 風格的特點</li>
                            <li>確認 Pro 風格符合您的設計需求</li>
                            <li>如有任何疑問，歡迎在購買前聯繫我們</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-purple-400">3. Pro 版本內容</h2>
                        <p className="text-white/60 leading-relaxed">
                            購買 Pro 版後，您將獲得：
                        </p>
                        <ul className="text-white/60 leading-relaxed space-y-2 list-disc list-inside">
                            <li>10+ 進階風格模板的完整存取權限</li>
                            <li>每個風格的完整設計系統指示詞</li>
                            <li>未來所有更新免費獲得</li>
                            <li>商業使用授權</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-purple-400">4. 例外情況</h2>
                        <p className="text-white/60 leading-relaxed">
                            以下情況我們可能會協助處理：
                        </p>
                        <ul className="text-white/60 leading-relaxed space-y-2 list-disc list-inside">
                            <li>重複付款 - 如您不小心重複購買，請立即聯繫我們</li>
                            <li>技術問題 - 如因我們的技術問題導致您無法使用服務，我們會全力協助解決</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-purple-400">5. 聯絡我們</h2>
                        <p className="text-white/60 leading-relaxed">
                            如有任何問題或疑慮，請透過以下方式聯繫我們：
                        </p>
                        <p className="text-white/60">
                            Email：<a href="mailto:support@styleprompts.com" className="text-purple-400 hover:underline">support@styleprompts.com</a>
                        </p>
                    </section>
                </motion.div>
            </main>
        </div>
    );
};

export default function RefundPolicyPage() {
    return (
        <AuthProvider>
            <RefundPolicyContent />
        </AuthProvider>
    );
}
