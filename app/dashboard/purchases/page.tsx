'use client';

import React from 'react';
import { CreditCard, Download, ExternalLink } from 'lucide-react';
import { usePurchase } from '@/hooks/usePurchase';

export default function DashboardPurchasesPage() {
    const { hasPro, loading } = usePurchase();

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">購買紀錄</h1>
                <p className="text-white/50 mb-8">查看您的購買歷史</p>

                {loading ? (
                    <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-center text-white/40">
                        載入中...
                    </div>
                ) : hasPro ? (
                    <div className="space-y-4">
                        {/* Purchase Record */}
                        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-xl">
                                        <CreditCard className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Pro 終身授權</h3>
                                        <p className="text-sm text-white/50 mb-2">StylePrompts Pro</p>
                                        <div className="flex items-center gap-2 text-xs text-green-400">
                                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                                            已啟用
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">NT$2,000</div>
                                    <div className="text-xs text-white/40">終身授權</div>
                                </div>
                            </div>
                        </div>

                        {/* Download Invoice */}
                        <button className="w-full p-4 bg-white/[0.02] border border-white/10 rounded-xl flex items-center justify-center gap-2 text-white/60 hover:text-white hover:bg-white/5 transition-all">
                            <Download className="w-4 h-4" />
                            下載收據
                        </button>
                    </div>
                ) : (
                    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                        <CreditCard className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">尚無購買紀錄</h3>
                        <p className="text-sm text-white/40 mb-4">
                            升級 Pro 後，您的購買紀錄將顯示在這裡。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
