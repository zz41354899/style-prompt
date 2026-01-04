'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import {
    fetchAllPurchases
} from '@/lib/admin/adminService';
import { Purchase } from '@/lib/purchaseService';
import {
    ShoppingBag,
    Search,
    Filter,
    Loader2,
    CheckCircle,
    Clock,
    XCircle,
    AlertCircle,
    RefreshCw,
    ChevronDown,
    ChevronUp,
    Calendar,
    DollarSign
} from 'lucide-react';

type StatusFilter = 'all' | 'completed' | 'pending' | 'failed' | 'refunded';

const statusConfig = {
    completed: { label: '已完成', color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: CheckCircle },
    pending: { label: '待處理', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: Clock },
    failed: { label: '失敗', color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: XCircle },
    refunded: { label: '已退款', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30', icon: AlertCircle }
};

export default function PurchasesPage() {
    const { role } = useAuth();
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [filteredPurchases, setFilteredPurchases] = useState<Purchase[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // 載入所有購買記錄 (Admin 查看全部)
    const loadPurchases = async () => {
        setLoading(true);
        setError(null);

        try {
            const { data, error: fetchError } = await fetchAllPurchases();

            if (fetchError) {
                setError(fetchError.message || '載入購買記錄失敗');
            } else {
                setPurchases(data || []);
            }
        } catch (e) {
            setError('載入購買記錄失敗');
        } finally {
            setLoading(false);
        }
    };

    // 初始載入
    useEffect(() => {
        if (role === 'admin') {
            loadPurchases();
        }
    }, [role]);

    // 篩選與搜尋
    useEffect(() => {
        let filtered = purchases;

        // 狀態篩選
        if (statusFilter !== 'all') {
            filtered = filtered.filter(p => p.status === statusFilter);
        }

        // 搜尋
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(p =>
                p.gumroad_email?.toLowerCase().includes(term) ||
                p.gumroad_sale_id?.toLowerCase().includes(term) ||
                p.product_type.toLowerCase().includes(term)
            );
        }

        setFilteredPurchases(filtered);
    }, [purchases, statusFilter, searchTerm]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                    <p className="text-white/60">載入購買記錄...</p>
                </div>
            </div>
        );
    }

    const totalRevenue = purchases
        .filter(p => p.status === 'completed')
        .reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <ShoppingBag className="w-8 h-8 text-green-400" />
                        購買記錄管理
                    </h1>
                    <p className="text-white/60 mt-1">管理所有使用者的購買交易</p>
                </div>
                <button
                    onClick={loadPurchases}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    <span>重新整理</span>
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm">總交易數</p>
                    <p className="text-2xl font-bold text-white mt-1">{purchases.length}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <p className="text-green-400 text-sm">已完成</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {purchases.filter(p => p.status === 'completed').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm">待處理</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {purchases.filter(p => p.status === 'pending').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <p className="text-red-400 text-sm">失敗</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {purchases.filter(p => p.status === 'failed').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <p className="text-blue-400 text-sm">總收入</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        NT$ {(totalRevenue / 100).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                        type="text"
                        placeholder="搜尋 Email、交易 ID 或產品..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                    />
                </div>

                {/* Status Filter */}
                <div className="flex gap-2">
                    {(['all', 'completed', 'pending', 'failed', 'refunded'] as StatusFilter[]).map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-4 py-2 rounded-lg transition-all ${statusFilter === status
                                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                : 'bg-white/5 text-white/60 hover:bg-white/10'
                                }`}
                        >
                            {status === 'all' ? '全部' : statusConfig[status as keyof typeof statusConfig].label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Purchases List */}
            <div className="space-y-3">
                {filteredPurchases.length === 0 ? (
                    <div className="text-center py-12 text-white/40">
                        <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>沒有符合條件的購買記錄</p>
                    </div>
                ) : (
                    filteredPurchases.map((purchase) => {
                        const StatusIcon = statusConfig[purchase.status as keyof typeof statusConfig]?.icon || AlertCircle;
                        const isExpanded = expandedId === purchase.id;

                        return (
                            <div
                                key={purchase.id}
                                className="rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all"
                            >
                                {/* Header */}
                                <div
                                    className="p-4 cursor-pointer flex items-center gap-4"
                                    onClick={() => setExpandedId(isExpanded ? null : purchase.id)}
                                >
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4">
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">Email</p>
                                            <p className="text-white font-medium text-sm">{purchase.gumroad_email || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">產品</p>
                                            <p className="text-white/80 text-sm">{purchase.product_type}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">金額</p>
                                            <p className="text-white/80 text-sm">
                                                {purchase.currency} ${(purchase.amount / 100).toLocaleString()}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">狀態</p>
                                            <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded border text-xs ${statusConfig[purchase.status as keyof typeof statusConfig]?.color || 'bg-white/5 text-white/60'}`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {statusConfig[purchase.status as keyof typeof statusConfig]?.label || purchase.status}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">日期</p>
                                            <p className="text-white/80 text-sm">
                                                {new Date(purchase.created_at).toLocaleDateString('zh-TW')}
                                            </p>
                                        </div>
                                    </div>
                                    {isExpanded ? (
                                        <ChevronUp className="w-5 h-5 text-white/40" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-white/40" />
                                    )}
                                </div>

                                {/* Expanded Content */}
                                {isExpanded && (
                                    <div className="border-t border-white/10 p-4 bg-white/[0.02] space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-white/60 text-xs mb-1">Gumroad Sale ID</p>
                                                <p className="text-white/80 text-sm font-mono">{purchase.gumroad_sale_id || 'N/A'}</p>
                                            </div>
                                            {purchase.gumroad_license_key && (
                                                <div>
                                                    <p className="text-white/60 text-xs mb-1">License Key</p>
                                                    <p className="text-white/80 text-sm font-mono">{purchase.gumroad_license_key}</p>
                                                </div>
                                            )}
                                            {purchase.completed_at && (
                                                <div>
                                                    <p className="text-white/60 text-xs mb-1">完成時間</p>
                                                    <p className="text-white/80 text-sm">
                                                        {new Date(purchase.completed_at).toLocaleString('zh-TW')}
                                                    </p>
                                                </div>
                                            )}
                                            {purchase.notes && (
                                                <div className="col-span-2">
                                                    <p className="text-white/60 text-xs mb-1">備註</p>
                                                    <p className="text-white/80 text-sm">{purchase.notes}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
