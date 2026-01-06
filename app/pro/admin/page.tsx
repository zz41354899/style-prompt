'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { Loader2 } from 'lucide-react';
import {
    fetchUsers,
    fetchPurchaseStats,
    fetchAnnouncementStats,
    fetchChangelogStats,
    fetchContactStats,
    AdminUser
} from '@/lib/admin/adminService';
import {
    Users,
    CreditCard,
    Megaphone,
    ScrollText,
    Mail,
    AlertCircle,
    RefreshCw,
    TrendingUp,
    AlertTriangle
} from 'lucide-react';

// 統計卡片元件
interface ModuleCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ElementType;
    color: 'blue' | 'green' | 'purple' | 'orange' | 'yellow';
    loading?: boolean;
    href?: string;
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
    yellow: {
        bg: 'from-yellow-500/20 to-yellow-600/10',
        border: 'border-yellow-500/30',
        icon: 'bg-yellow-500/20 text-yellow-400',
        text: 'text-yellow-400'
    }
};

const ModuleCard: React.FC<ModuleCardProps> = ({
    title,
    value,
    subtitle,
    icon: Icon,
    color,
    loading = false,
    href
}) => {
    const colors = colorMap[color];
    const router = useRouter();

    const handleClick = () => {
        if (href) router.push(href);
    };

    return (
        <div
            onClick={handleClick}
            className={`relative overflow-hidden rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-6 ${href ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm text-white/60 mb-2">{title}</p>
                    {loading ? (
                        <div className="h-9 flex items-center">
                            <Loader2 className="w-5 h-5 animate-spin text-white/40" />
                        </div>
                    ) : (
                        <>
                            <p className="text-3xl font-bold text-white mb-1">{value}</p>
                            {subtitle && <p className="text-xs text-white/40">{subtitle}</p>}
                        </>
                    )}
                </div>
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default function AdminDashboard() {
    const { user, role, loading: authLoading } = useAuth();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    // 資料狀態
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [purchaseStats, setPurchaseStats] = useState({ total: 0, thisMonth: 0, monthlyRevenue: 0 });
    const [announcementStats, setAnnouncementStats] = useState({ active: 0, draft: 0, total: 0 });
    const [changelogStats, setChangelogStats] = useState({ total: 0, latestVersion: 'N/A' });
    const [contactStats, setContactStats] = useState({ pending: 0, total: 0 });
    const [dataLoading, setDataLoading] = useState(true);
    const [dataError, setDataError] = useState<string | null>(null);

    // 權限檢查
    useEffect(() => {
        if (!authLoading) {
            if (!user) {
                router.replace('/pro/login?redirect=/pro/admin');
            } else if (role !== 'admin') {
                router.replace('/dashboard');
            } else {
                setIsChecking(false);
            }
        }
    }, [user, role, authLoading, router]);

    // 載入資料
    const loadData = async () => {
        setDataLoading(true);
        setDataError(null);

        try {
            const [
                usersResult,
                purchaseResult,
                announcementResult,
                changelogResult,
                contactResult
            ] = await Promise.all([
                fetchUsers(),
                fetchPurchaseStats(),
                fetchAnnouncementStats(),
                fetchChangelogStats(),
                fetchContactStats()
            ]);

            if (usersResult.error) {
                setDataError(usersResult.error.message);
            } else {
                setUsers(usersResult.data || []);
            }

            setPurchaseStats(purchaseResult);
            setAnnouncementStats(announcementResult);
            setChangelogStats(changelogResult);
            setContactStats(contactResult);
        } catch (e) {
            setDataError('載入資料失敗');
        } finally {
            setDataLoading(false);
        }
    };

    useEffect(() => {
        if (!isChecking && role === 'admin') {
            loadData();
        }
    }, [isChecking, role]);

    if (authLoading || isChecking) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                    <p className="text-white/60">Verifying access...</p>
                </div>
            </div>
        );
    }

    const totalUsers = users.length;
    const proUsers = users.filter(u => u.status === 'active').length;

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-white/60 mt-1">五大模組管理總覽</p>
                </div>
                <button
                    onClick={loadData}
                    disabled={dataLoading}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${dataLoading ? 'animate-spin' : ''}`} />
                    <span>重新整理</span>
                </button>
            </div>

            {/* 錯誤訊息 */}
            {dataError && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{dataError}</p>
                </div>
            )}

            {/* 五大模組統計卡片 */}
            <div>
                <h2 className="text-lg font-semibold text-white mb-4">五大模組總覽</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <ModuleCard
                        title="使用者"
                        value={totalUsers}
                        subtitle={`Pro: ${proUsers}`}
                        icon={Users}
                        color="blue"
                        loading={dataLoading}
                        href="/pro/admin/users"
                    />
                    <ModuleCard
                        title="購買記錄"
                        value={purchaseStats.total}
                        subtitle={`本月: ${purchaseStats.thisMonth}`}
                        icon={CreditCard}
                        color="green"
                        loading={dataLoading}
                        href="/pro/admin/subscriptions"
                    />
                    <ModuleCard
                        title="公告"
                        value={announcementStats.total}
                        subtitle={`活躍: ${announcementStats.active}`}
                        icon={Megaphone}
                        color="purple"
                        loading={dataLoading}
                        href="/pro/admin/announcements"
                    />
                    <ModuleCard
                        title="Changelog"
                        value={changelogStats.total}
                        subtitle={`最新: ${changelogStats.latestVersion}`}
                        icon={ScrollText}
                        color="orange"
                        loading={dataLoading}
                        href="/pro/admin/changelog"
                    />
                    <ModuleCard
                        title="聯絡表單"
                        value={contactStats.total}
                        subtitle={`待處理: ${contactStats.pending}`}
                        icon={Mail}
                        color="yellow"
                        loading={dataLoading}
                        href="/pro/admin/contacts"
                    />
                </div>
            </div>

            {/* 詳細統計 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 收入統計 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        本月收入
                    </h3>
                    <div className="text-4xl font-bold text-white mb-2">
                        NT$ {purchaseStats.monthlyRevenue.toLocaleString()}
                    </div>
                    <p className="text-sm text-white/50">
                        共 {purchaseStats.thisMonth} 筆購買
                    </p>
                </div>

                {/* 待辦事項 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        待辦事項
                    </h3>
                    <div className="space-y-3">
                        {contactStats.pending > 0 && (
                            <div
                                onClick={() => router.push('/pro/admin/contacts')}
                                className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg cursor-pointer hover:bg-yellow-500/20 transition-colors"
                            >
                                <span className="text-white/80">待處理聯絡表單</span>
                                <span className="px-2 py-1 bg-yellow-500/30 rounded text-yellow-400 text-sm font-bold">
                                    {contactStats.pending}
                                </span>
                            </div>
                        )}
                        {announcementStats.draft > 0 && (
                            <div
                                onClick={() => router.push('/pro/admin/announcements')}
                                className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg cursor-pointer hover:bg-purple-500/20 transition-colors"
                            >
                                <span className="text-white/80">草稿公告</span>
                                <span className="px-2 py-1 bg-purple-500/30 rounded text-purple-400 text-sm font-bold">
                                    {announcementStats.draft}
                                </span>
                            </div>
                        )}
                        {contactStats.pending === 0 && announcementStats.draft === 0 && (
                            <p className="text-white/40 text-center py-4">沒有待辦事項</p>
                        )}
                    </div>
                </div>
            </div>

            {/* 最近註冊使用者 */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">最近註冊使用者</h3>
                {dataLoading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-white/40" />
                    </div>
                ) : users.length === 0 ? (
                    <p className="text-white/40 text-center py-4">尚無使用者資料</p>
                ) : (
                    <div className="space-y-3">
                        {users.slice(0, 5).map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-white font-medium">
                                        {(user.display_name || user.email || '?').charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-medium truncate">
                                        {user.display_name || user.email?.split('@')[0] || '未命名'}
                                    </p>
                                    <p className="text-white/40 text-sm truncate">{user.email}</p>
                                </div>
                                <span className={`px-2 py-0.5 rounded text-xs ${user.status === 'active'
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-white/10 text-white/60'
                                    }`}>
                                    {user.status}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
