'use client';

import React from 'react';

export default function AdminChangelogPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-white">Changelog 管理</h1>
                <p className="text-white/60 mt-1">即將上線...</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
                <p className="text-white/60">此功能正在開發中，請稍後再回來查看。</p>
                <p className="text-white/40 text-sm mt-2">將使用真實 Supabase 資料</p>
            </div>
        </div>
    );
}
