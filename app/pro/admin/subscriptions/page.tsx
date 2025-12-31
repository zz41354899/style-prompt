'use client';

import React, { useState } from 'react';
import { mockSubscriptions, mockUsers, type MockSubscription } from '@/lib/admin/mockData';
import {
    Crown,
    MoreVertical,
    CheckCircle,
    XCircle,
    AlertCircle,
    RefreshCw,
    X
} from 'lucide-react';

export default function AdminSubscriptionsPage() {
    const [selectedSubscription, setSelectedSubscription] = useState<MockSubscription | null>(null);

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Format amount
    const formatAmount = (amount: number) => {
        return `NT$ ${amount.toLocaleString()}`;
    };

    // Plan badge
    const PlanBadge: React.FC<{ plan: MockSubscription['plan'] }> = ({ plan }) => {
        const styles = {
            free: 'bg-white/10 text-white/60',
            pro_monthly: 'bg-purple-500/20 text-purple-400',
            pro_yearly: 'bg-blue-500/20 text-blue-400',
            lifetime: 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400'
        };
        const labels = {
            free: 'Free',
            pro_monthly: 'Pro 月訂閱',
            pro_yearly: 'Pro 年訂閱',
            lifetime: '終身版'
        };

        return (
            <span className={`px-2 py-0.5 rounded text-xs ${styles[plan]}`}>
                {labels[plan]}
            </span>
        );
    };

    // Status badge
    const StatusBadge: React.FC<{ status: MockSubscription['status'] }> = ({ status }) => {
        const configs = {
            active: { icon: CheckCircle, color: 'text-green-400 bg-green-500/20', label: 'Active' },
            canceled: { icon: XCircle, color: 'text-red-400 bg-red-500/20', label: 'Canceled' },
            past_due: { icon: AlertCircle, color: 'text-orange-400 bg-orange-500/20', label: 'Past Due' },
            expired: { icon: XCircle, color: 'text-white/40 bg-white/10', label: 'Expired' }
        };
        const { icon: Icon, color, label } = configs[status];

        return (
            <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-xs ${color}`}>
                <Icon className="w-3 h-3" />
                {label}
            </span>
        );
    };

    // Get user by ID
    const getUserById = (userId: string) => {
        return mockUsers.find(u => u.id === userId);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">訂閱管理</h1>
                <p className="text-white/60 mt-1">管理 Pro 訂閱和付款狀態</p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-green-400 text-sm">Active</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {mockSubscriptions.filter(s => s.status === 'active').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <p className="text-orange-400 text-sm">Past Due</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {mockSubscriptions.filter(s => s.status === 'past_due').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 text-sm">Canceled</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {mockSubscriptions.filter(s => s.status === 'canceled').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-purple-400 text-sm">總月收入</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        NT$ {mockSubscriptions.reduce((sum, s) => {
                            if (s.status === 'active' && s.plan === 'pro_monthly') return sum + s.amount;
                            return sum;
                        }, 0).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Subscriptions Table */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">使用者</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">方案</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">狀態</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">金額</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">週期結束</th>
                            <th className="text-right px-4 py-3 text-sm font-medium text-white/60">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockSubscriptions.map((subscription) => {
                            const user = getUserById(subscription.user_id);
                            return (
                                <tr
                                    key={subscription.id}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                                    onClick={() => setSelectedSubscription(subscription)}
                                >
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                                <span className="text-white font-medium">
                                                    {subscription.user_name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{subscription.user_name}</p>
                                                <p className="text-white/40 text-sm">{subscription.user_email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <PlanBadge plan={subscription.plan} />
                                    </td>
                                    <td className="px-4 py-3">
                                        <StatusBadge status={subscription.status} />
                                    </td>
                                    <td className="px-4 py-3 text-white">
                                        {formatAmount(subscription.amount)}
                                    </td>
                                    <td className="px-4 py-3 text-white/60 text-sm">
                                        {formatDate(subscription.current_period_end)}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); }}
                                            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                                        >
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Subscription Detail Modal */}
            {selectedSubscription && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setSelectedSubscription(null)}
                    />
                    <div className="relative w-full max-w-lg bg-[#0f0f1a] border border-white/10 rounded-xl overflow-hidden">
                        <div className="p-6 space-y-6">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">訂閱詳情</h2>
                                <button
                                    onClick={() => setSelectedSubscription(null)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/60"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-xl text-white font-bold">
                                        {selectedSubscription.user_name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">{selectedSubscription.user_name}</p>
                                    <p className="text-white/60 text-sm">{selectedSubscription.user_email}</p>
                                </div>
                            </div>

                            {/* Subscription Details */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">方案</p>
                                    <div className="mt-1">
                                        <PlanBadge plan={selectedSubscription.plan} />
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">狀態</p>
                                    <div className="mt-1">
                                        <StatusBadge status={selectedSubscription.status} />
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">金額</p>
                                    <p className="text-white font-medium mt-1">
                                        {formatAmount(selectedSubscription.amount)}
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">週期結束</p>
                                    <p className="text-white font-medium mt-1">
                                        {formatDate(selectedSubscription.current_period_end)}
                                    </p>
                                </div>
                            </div>

                            {/* Stripe ID */}
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <p className="text-white/40 text-sm">Stripe Subscription ID</p>
                                <p className="text-white font-mono text-sm mt-1">
                                    {selectedSubscription.stripe_subscription_id}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                                <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 hover:bg-purple-500/30 transition-colors">
                                    <Crown className="w-5 h-5" />
                                    {selectedSubscription.status === 'active' ? '撤銷 Pro' : '授予 Pro'}
                                </button>
                                <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 transition-colors">
                                    <RefreshCw className="w-5 h-5" />
                                    處理退款
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
