'use client';

import React from 'react';
import { mockAnalytics, mockPurchases } from '@/lib/admin/mockData';
import {
    Users,
    Crown,
    TrendingUp,
    DollarSign,
    Activity,
    ArrowUpRight
} from 'lucide-react';

export default function AdminAnalyticsPage() {
    const { totalUsers, proUsers, freeUsers, conversionRate, totalRevenue, monthlyRevenue, dau, registrationTrend } = mockAnalytics;

    // Find max count for chart scaling
    const maxCount = Math.max(...registrationTrend.map(d => d.count));

    // Format date for chart
    const formatChartDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    };

    // Format amount
    const formatAmount = (amount: number) => {
        return `NT$ ${amount.toLocaleString()}`;
    };

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">數據分析</h1>
                <p className="text-white/60 mt-1">查看使用統計和收入報表</p>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-blue-400 text-sm">總使用者</p>
                            <p className="text-3xl font-bold text-white mt-1">{totalUsers}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-green-400 text-sm">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>+12.5%</span>
                        <span className="text-white/40">vs 上月</span>
                    </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-purple-400 text-sm">Pro 用戶</p>
                            <p className="text-3xl font-bold text-white mt-1">{proUsers}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                            <Crown className="w-6 h-6 text-purple-400" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-green-400 text-sm">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>+8.2%</span>
                        <span className="text-white/40">vs 上月</span>
                    </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-400 text-sm">轉換率</p>
                            <p className="text-3xl font-bold text-white mt-1">{conversionRate}%</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-green-400" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-green-400 text-sm">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>+2.1%</span>
                        <span className="text-white/40">vs 上月</span>
                    </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-orange-400 text-sm">日活躍 (DAU)</p>
                            <p className="text-3xl font-bold text-white mt-1">{dau}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                            <Activity className="w-6 h-6 text-orange-400" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-green-400 text-sm">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>+5.4%</span>
                        <span className="text-white/40">vs 昨日</span>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Registration Trend Chart */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-lg font-semibold text-white mb-6">註冊趨勢（近 7 天）</h3>
                    <div className="flex items-end justify-between gap-2 h-48">
                        {registrationTrend.map((day, index) => (
                            <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                                <div
                                    className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg transition-all hover:opacity-80"
                                    style={{ height: `${(day.count / maxCount) * 100}%` }}
                                />
                                <span className="text-xs text-white/40">{formatChartDate(day.date)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Distribution */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-lg font-semibold text-white mb-6">用戶分佈</h3>
                    <div className="flex items-center gap-8">
                        {/* Donut Chart (simplified) */}
                        <div className="relative w-40 h-40">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                {/* Background circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="12"
                                />
                                {/* Pro segment */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="url(#purpleGradient)"
                                    strokeWidth="12"
                                    strokeDasharray={`${conversionRate * 2.51} 251`}
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-white">{conversionRate}%</span>
                                <span className="text-xs text-white/40">Pro 比例</span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                                <div>
                                    <p className="text-white font-medium">Pro 用戶</p>
                                    <p className="text-white/40 text-sm">{proUsers} 人</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-white/20" />
                                <div>
                                    <p className="text-white font-medium">Free 用戶</p>
                                    <p className="text-white/40 text-sm">{freeUsers} 人</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Revenue Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Cards */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-amber-400" />
                        </div>
                        <p className="text-amber-400 font-medium">累計總收入</p>
                    </div>
                    <p className="text-3xl font-bold text-white">{formatAmount(totalRevenue)}</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-green-400" />
                        </div>
                        <p className="text-green-400 font-medium">本月收入</p>
                    </div>
                    <p className="text-3xl font-bold text-white">{formatAmount(monthlyRevenue)}</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Activity className="w-5 h-5 text-blue-400" />
                        </div>
                        <p className="text-blue-400 font-medium">ARPU</p>
                    </div>
                    <p className="text-3xl font-bold text-white">
                        {formatAmount(Math.round(totalRevenue / proUsers))}
                    </p>
                </div>
            </div>

            {/* Recent Purchases */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white">最近購買紀錄</h3>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="text-left px-6 py-3 text-sm font-medium text-white/60">使用者</th>
                            <th className="text-left px-6 py-3 text-sm font-medium text-white/60">產品</th>
                            <th className="text-left px-6 py-3 text-sm font-medium text-white/60">金額</th>
                            <th className="text-left px-6 py-3 text-sm font-medium text-white/60">狀態</th>
                            <th className="text-left px-6 py-3 text-sm font-medium text-white/60">時間</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPurchases.slice(0, 5).map((purchase) => (
                            <tr key={purchase.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-white">{purchase.user_email}</td>
                                <td className="px-6 py-4 text-white/80">{purchase.product_type}</td>
                                <td className="px-6 py-4 text-white font-medium">{formatAmount(purchase.amount)}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-xs ${purchase.status === 'completed'
                                        ? 'bg-green-500/20 text-green-400'
                                        : purchase.status === 'refunded'
                                            ? 'bg-orange-500/20 text-orange-400'
                                            : 'bg-white/10 text-white/60'
                                        }`}>
                                        {purchase.status === 'completed' ? '完成' :
                                            purchase.status === 'refunded' ? '已退款' : purchase.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-white/60 text-sm">
                                    {new Date(purchase.created_at).toLocaleDateString('zh-TW')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
