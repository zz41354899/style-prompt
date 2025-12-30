'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Crown } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/motion';

const proFaqs = [
    {
        q: 'Pro 版包含哪些內容？',
        a: 'Pro 版包含 10+ 精心設計的進階風格模板，每個模板都附有完整的設計系統指示詞。您還能獲得未來所有更新，以及優先客服支援。'
    },
    {
        q: '購買後如何使用 Pro 風格？',
        a: '購買完成後，登入您的帳戶即可在編輯器中看到所有 Pro 風格。每個 Pro 風格都有專屬「Pro」標籤，可直接複製完整指示詞。'
    },
    {
        q: '可以退款嗎？',
        a: '因為數位商品的特性，Pro 版採一次性付款方式，購買後無法退款。請在購買前確認 Pro 風格是否符合您的需求，您可以先瀏覽我們的風格展示區了解各風格特點。'
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
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Crown className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">常見問題</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Pro 版常見問題
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-4"
                >
                    {proFaqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn}
                            className="border border-white/5 rounded-2xl overflow-hidden bg-[#0a0a0a] transition-colors hover:border-purple-500/20"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                            >
                                <span className="font-semibold text-base pr-6">{faq.q}</span>
                                <motion.div
                                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`p-2 rounded-full bg-white/5 text-white/20 transition-all flex-shrink-0 ${openFaq === i ? 'bg-purple-600/20 text-purple-400' : ''}`}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
