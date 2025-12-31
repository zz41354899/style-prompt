'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        q: 'Pro 版包含哪些內容？',
        a: 'Pro 版包含 10+ 精心設計的進階風格模板、6 種產業 Landing Page Template，每個模板都附有完整的設計系統指示詞。您還能獲得未來所有更新，以及優先客服支援。'
    },
    {
        q: '購買後如何使用 Pro 風格？',
        a: '購買完成後，登入您的帳戶即可在風格資源庫中看到所有 Pro 風格。每個 Pro 風格都有專屬標籤，可直接複製完整指示詞。'
    },
    {
        q: '可以退款嗎？',
        a: '數位商品售出後恕不退費。若遇結帳異常或重複扣款等技術問題，請聯繫客服，我們將透過 Stripe 協助處理退款。'
    },
    {
        q: '未來會有更多 Pro 風格嗎？',
        a: '是的！我們會持續新增更多進階風格。所有已購買 Pro 的用戶都能免費獲得未來所有更新，無需額外付費。'
    },
    {
        q: 'Pro 風格可以商業使用嗎？',
        a: '可以。Pro 版授權包含商業使用權，您可以將生成的設計用於商業專案。'
    }
];

export const ProFaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#020202] relative">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-white/60" />
                        <span className="text-sm font-medium text-white/60">常見問題</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">
                        有疑問？這裡有答案
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full p-6 text-left bg-[#0a0a0a] border rounded-xl transition-all duration-300 ${openIndex === i
                                    ? 'border-purple-500/30 shadow-[0_4px_20px_-5px_rgba(168,85,247,0.1)]'
                                    : 'border-white/5 hover:border-white/10 hover:bg-[#111]'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className="font-semibold text-white">{faq.q}</span>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`p-1 rounded-lg flex-shrink-0 ${openIndex === i ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-white/40'
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-4 text-white/50 text-sm leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
