'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CreditCard, Check, Sparkles } from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';

const PricingContent: React.FC = () => {
    const { user } = useAuth();

    const plans = [
        {
            name: 'Free',
            price: 'NT$0',
            period: '永久免費',
            description: '開始探索 AI 視覺風格',
            features: [
                '100+ 免費風格提示詞',
                '基礎預覽功能',
                '社群支援',
            ],
            cta: '開始使用',
            href: '/S01',
            popular: false,
        },
        {
            name: 'Pro',
            price: 'NT$2,000',
            period: '一次買斷',
            description: '解鎖所有進階功能',
            features: [
                '所有 Free 功能',
                '10+ Pro 專屬風格（持續增加）',
                '進階客製化選項',
                '優先支援',
                '未來更新免費',
            ],
            cta: user ? '升級至 Pro' : '登入後購買',
            href: user ? '/dashboard/pricing' : '/pro',
            popular: true,
        },
    ];

    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Header */}
            <header className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <Link href={user ? '/pro' : '/'} className="text-xl font-bold">
                        Style<span className="text-purple-400">Prompts</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        選擇適合您的方案
                    </h1>
                    <p className="text-lg text-white/60">
                        一次購買，永久使用，未來更新免費
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border ${plan.popular
                                ? 'border-purple-500/40 bg-purple-500/5'
                                : 'border-white/10 bg-white/[0.02]'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" />
                                    推薦
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/50 text-sm mb-4">{plan.description}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className="text-white/50">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-white/70">
                                        <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.href}
                                className={`block w-full py-4 rounded-xl text-center font-semibold transition-all ${plan.popular
                                    ? 'bg-purple-600 hover:bg-purple-500 text-white'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <CreditCard className="w-5 h-5" />
                                    {plan.cta}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default function PricingPage() {
    // AuthProvider 已在根 layout.tsx 中提供
    return <PricingContent />;
}
