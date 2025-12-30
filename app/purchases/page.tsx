'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Receipt, Package } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { AuthProvider } from '@/components/providers/AuthProvider';

const PurchasesContent: React.FC = () => {
    const { user, loading } = useAuth();

    // TODO: 從 Supabase 或 Stripe 取得購買紀錄
    const purchases: {
        id: string;
        productName: string;
        amount: string;
        date: string;
        status: 'completed' | 'pending' | 'failed';
    }[] = [];

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030303] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">請先登入</h1>
                    <p className="text-white/60 mb-6">您需要登入才能查看購買紀錄</p>
                    <Link
                        href="/pro"
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-colors"
                    >
                        前往登入
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Header */}
            <header className="border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <Link href="/pro" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        返回
                    </Link>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <Receipt className="w-6 h-6 text-purple-400" />
                        購買紀錄
                    </h1>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                {purchases.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <Package className="w-16 h-16 text-white/20 mx-auto mb-6" />
                        <h2 className="text-xl font-semibold mb-2">尚無購買紀錄</h2>
                        <p className="text-white/50 mb-8">
                            升級至 Pro 方案，解鎖所有進階功能
                        </p>
                        <Link
                            href="/pricing"
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-colors"
                        >
                            查看方案
                        </Link>
                    </motion.div>
                ) : (
                    <div className="space-y-4">
                        {purchases.map((purchase) => (
                            <motion.div
                                key={purchase.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">{purchase.productName}</h3>
                                        <p className="text-sm text-white/50">{purchase.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">{purchase.amount}</p>
                                        <span className={`text-xs px-2 py-1 rounded-full ${purchase.status === 'completed'
                                                ? 'bg-green-500/20 text-green-400'
                                                : purchase.status === 'pending'
                                                    ? 'bg-yellow-500/20 text-yellow-400'
                                                    : 'bg-red-500/20 text-red-400'
                                            }`}>
                                            {purchase.status === 'completed' ? '已完成' :
                                                purchase.status === 'pending' ? '處理中' : '失敗'}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default function PurchasesPage() {
    return (
        <AuthProvider>
            <PurchasesContent />
        </AuthProvider>
    );
}
