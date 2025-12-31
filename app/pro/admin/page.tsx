'use client';

import React from 'react';
import { mockUsers, mockSubscriptions, mockAnalytics } from '@/lib/admin/mockData';
import {
    Users,
    CreditCard,
    TrendingUp,
    DollarSign,
    Activity,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

// 統計卡片元件
interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ElementType;
    change?: number;
    changeLabel?: string;
    color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const colorMap = {
    blue: {
        bg: 'from-blue-500/20 to-blue-600/10',
        border: 'border-blue-500/30',
        icon: 'bg-blue-500/20 text-blue-400',
        text: 'text-blue-400'
    },
    green: {
        bg: 'from-green-500/20 to-green-600/10',
        border: 'border-green-500/30',
        icon: 'bg-green-500/20 text-green-400',
        text: 'text-green-400'
    },
    purple: {
        bg: 'from-purple-500/20 to-purple-600/10',
        border: 'border-purple-500/30',
        icon: 'bg-purple-500/20 text-purple-400',
        text: 'text-purple-400'
    },
    orange: {
        bg: 'from-orange-500/20 to-orange-600/10',
        border: 'border-orange-500/30',
        icon: 'bg-orange-500/20 text-orange-400',
        text: 'text-orange-400'
    },
    red: {
        bg: 'from-red-500/20 to-red-600/10',
        border: 'border-red-500/30',
        icon: 'bg-red-500/20 text-red-400',
        text: 'text-red-400'
    }
};

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    icon: Icon,
    change,
    changeLabel,
    color
}) => {
    const colors = colorMap[color];
    const isPositive = change && change > 0;

    return (
        <div className={`relative overflow-hidden rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-6`}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-white/60">{title}</p>
                    <p className="text-3xl font-bold text-white mt-1">{value}</p>
                    {change !== undefined && (
                        <div className="flex items-center gap-1 mt-2">
                            {isPositive ? (
                                <ArrowUpRight className="w-4 h-4 text-green-400" />
                            ) : (
                                <ArrowDownRight className="w-4 h-4 text-red-400" />
                            )}
                            <span className={isPositive ? 'text-green-400' : 'text-red-400'}>
                                {Math.abs(change)}%
                            </span>
                            {changeLabel && (
                                <span className="text-white/40 text-sm">{changeLabel}</span>
                            )}
                        </div>
                    )}
                </div>
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

// 最近活動列表
const RecentActivity: React.FC = () => {
    const recentUsers = mockUsers.slice(0, 5);

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">最近註冊使用者</h3>
            <div className="space-y-3">
                {recentUsers.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                            <span className="text-white font-medium">
                                {user.name.charAt(0)}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">{user.name}</p>
                            <p className="text-white/40 text-sm truncate">{user.email}</p>
                        </div>
                        <div className="flex flex-col items-end">
                            {user.is_pro ? (
                                <span className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400">
                                    Pro
                                </span>
                            ) : (
                                <span className="px-2 py-0.5 rounded text-xs bg-white/10 text-white/60">
                                    Free
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 訂閱狀態概覽
const SubscriptionOverview: React.FC = () => {
    const activeCount = mockSubscriptions.filter(s => s.status === 'active').length;
    const pastDueCount = mockSubscriptions.filter(s => s.status === 'past_due').length;
    const canceledCount = mockSubscriptions.filter(s => s.status === 'canceled').length;

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">訂閱狀態</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="text-white/80">Active</span>
                    </div>
                    <span className="text-white font-medium">{activeCount}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <span className="text-white/80">Past Due</span>
                    </div>
                    <span className="text-white font-medium">{pastDueCount}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span className="text-white/80">Canceled</span>
                    </div>
                    <span className="text-white font-medium">{canceledCount}</span>
                </div>
            </div>
        </div>
    );
};

export default function AdminDashboard() {
    const { totalUsers, proUsers, conversionRate, monthlyRevenue, dau } = mockAnalytics;

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-white/60 mt-1">歡迎回來，這是你的管理總覽</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="總使用者"
                    value={totalUsers}
                    icon={Users}
                    change={12.5}
                    changeLabel="vs 上月"
                    color="blue"
                />
                <StatCard
                    title="Pro 用戶"
                    value={proUsers}
                    icon={CreditCard}
                    change={8.2}
                    changeLabel="vs 上月"
                    color="purple"
                />
                <StatCard
                    title="轉換率"
                    value={`${conversionRate}%`}
                    icon={TrendingUp}
                    change={2.1}
                    changeLabel="vs 上月"
                    color="green"
                />
                <StatCard
                    title="本月收入"
                    value={`NT$ ${monthlyRevenue.toLocaleString()}`}
                    icon={DollarSign}
                    change={15.3}
                    changeLabel="vs 上月"
                    color="orange"
                />
            </div>

            {/* DAU Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <StatCard
                    title="日活躍用戶 (DAU)"
                    value={dau}
                    icon={Activity}
                    change={5.4}
                    changeLabel="vs 昨日"
                    color="red"
                />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentActivity />
                <SubscriptionOverview />
            </div>
        </div>
    );
}
