'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function ProPrivacyPage() {
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
                        <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h1 className="text-3xl font-bold">隱私權政策</h1>
                </div>

                <p className="text-white/40 text-sm mb-8">最後更新日期：2024 年 12 月 31 日</p>

                {/* Content */}
                <div className="prose prose-invert prose-sm max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. 資料收集</h2>
                        <p className="text-white/60 leading-relaxed">
                            我們收集的資料包括：電子郵件地址、帳戶偏好設定、使用記錄及付款資訊（由 Stripe 處理）。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. 資料使用</h2>
                        <p className="text-white/60 leading-relaxed">
                            您的資料僅用於：提供及改善服務、處理付款、發送重要通知及客戶支援。我們不會將您的資料出售給第三方。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. 資料儲存</h2>
                        <p className="text-white/60 leading-relaxed">
                            用戶資料儲存於 Supabase 雲端服務，採用業界標準的加密技術保護。付款資料由 Stripe 直接處理，我們不儲存完整的信用卡資訊。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Cookie 使用</h2>
                        <p className="text-white/60 leading-relaxed">
                            本網站使用 Cookie 來維持登入狀態及改善用戶體驗。您可以在瀏覽器設定中管理 Cookie 偏好。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. 資料刪除</h2>
                        <p className="text-white/60 leading-relaxed">
                            您可以隨時在帳戶設定中刪除您的帳戶。帳戶刪除後，您的所有個人資料將在 30 天內永久刪除。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">6. 聯繫我們</h2>
                        <p className="text-white/60 leading-relaxed">
                            如有隱私權相關問題，請聯繫：privacy@styleprompts.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
