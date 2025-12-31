'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCcw, AlertCircle } from 'lucide-react';

export default function ProRefundPage() {
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
                        <RefreshCcw className="w-6 h-6 text-purple-400" />
                    </div>
                    <h1 className="text-3xl font-bold">退費政策</h1>
                </div>

                <p className="text-white/40 text-sm mb-8">最後更新日期：2024 年 12 月 31 日</p>

                {/* Important Notice */}
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-8 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-orange-200 text-sm">
                        <strong>重要說明：</strong>StylePrompts Pro 為數位商品，售出後原則上恕不退費。請在購買前詳細了解產品內容。
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-sm max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. 退費原則</h2>
                        <p className="text-white/60 leading-relaxed">
                            由於本產品為數位商品，購買後即可立即存取所有內容，因此原則上不接受退費申請。請在購買前確認產品符合您的需求。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. 可退費情況</h2>
                        <p className="text-white/60 leading-relaxed mb-4">
                            以下情況我們將協助處理退費：
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-white/60">
                            <li><strong>重複扣款：</strong>同一筆訂單重複扣款</li>
                            <li><strong>結帳異常：</strong>付款成功但未獲得存取權限</li>
                            <li><strong>技術問題：</strong>因系統錯誤導致無法正常使用</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. 退費流程</h2>
                        <p className="text-white/60 leading-relaxed">
                            若符合退費條件，請聯繫客服並提供：訂單編號、購買時使用的電子郵件、問題描述及相關截圖。確認後，我們將透過 Stripe 在 5-10 個工作天內處理退款。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. 聯繫客服</h2>
                        <p className="text-white/60 leading-relaxed">
                            退費相關問題請聯繫：support@styleprompts.com<br />
                            請在郵件主旨註明「退費申請」以加快處理速度。
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
