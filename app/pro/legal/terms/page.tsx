'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function ProTermsPage() {
    return (
        <div className="min-h-screen bg-[#030303] text-white px-4 py-20">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/pro"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    返回首頁
                </Link>

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                        <FileText className="w-6 h-6 text-purple-400" />
                    </div>
                    <h1 className="text-3xl font-bold">服務條款</h1>
                </div>

                <p className="text-white/40 text-sm mb-8">最後更新日期：2024 年 12 月 31 日</p>

                {/* Content */}
                <div className="prose prose-invert prose-sm max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. 服務說明</h2>
                        <p className="text-white/60 leading-relaxed">
                            StylePrompts（以下簡稱「本服務」）是一個提供 AI 設計風格指示詞的數位服務平台。Pro 版本包含進階風格模板、Landing Page Template 及完整設計系統指示詞。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. 帳戶註冊</h2>
                        <p className="text-white/60 leading-relaxed">
                            使用本服務需註冊帳戶。您有責任維護帳戶安全，並對帳戶下的所有活動負責。若發現未經授權的使用，請立即通知我們。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. 付款與購買</h2>
                        <p className="text-white/60 leading-relaxed">
                            Pro 版本為一次性購買，終身授權。所有付款透過 Stripe 處理。完成付款後，您將立即獲得 Pro 版本的所有功能存取權限。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. 使用授權</h2>
                        <p className="text-white/60 leading-relaxed">
                            購買 Pro 版本後，您獲得將設計用於個人及商業專案的授權。此授權為非排他性、不可轉讓的授權。您不得轉售、分發或與他人共享 Pro 內容。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. 服務變更</h2>
                        <p className="text-white/60 leading-relaxed">
                            我們保留隨時修改、暫停或終止服務的權利。對於重大變更，我們會透過電子郵件或網站公告通知用戶。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">6. 聯繫我們</h2>
                        <p className="text-white/60 leading-relaxed">
                            如有任何問題，請透過電子郵件聯繫我們：support@styleprompts.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
