'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Clock, Mail } from 'lucide-react';

export default function AccountDeletedPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-8 h-8 text-yellow-400" />
                    </div>

                    <h1 className="text-2xl font-bold mb-3">帳戶已標記為待刪除</h1>
                    
                    <p className="text-white/60 mb-6">
                        您的帳戶已被標記為待刪除狀態。資料將保留 30 天，在此期間內您可以隨時登入恢復帳戶。
                    </p>

                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl mb-6 text-left">
                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-blue-200/80">
                                <p className="font-medium mb-1">如何恢復帳戶？</p>
                                <p>只需使用您的電子郵件和密碼重新登入，系統會自動詢問您是否要恢復帳戶。</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link
                            href="/auth/login"
                            className="block w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-colors"
                        >
                            返回登入頁面
                        </Link>
                        
                        <Link
                            href="/"
                            className="block w-full px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl transition-colors"
                        >
                            返回首頁
                        </Link>
                    </div>

                    <p className="text-xs text-white/40 mt-6">
                        30 天後，您的帳戶將被永久刪除且無法恢復
                    </p>
                </div>
            </div>
        </div>
    );
}
