'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { Pagination, usePagination } from '@/components/common';
import {
    fetchUsers,
    updateUserStatus,
    deleteUser,
    AdminUser
} from '@/lib/admin/adminService';
import { restoreAccount } from '@/lib/accountService';
import {
    Users,
    Search,
    Loader2,
    CheckCircle,
    Ban,
    Trash2,
    AlertCircle,
    RefreshCw,
    ChevronDown,
    ChevronUp,
    Shield,
    RotateCcw
} from 'lucide-react';

type StatusFilter = 'all' | 'active' | 'suspended' | 'pending_deletion' | 'deleted';

const statusConfig = {
    active: { label: '正常', color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: CheckCircle },
    suspended: { label: '已停用', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: Ban },
    pending_deletion: { label: '待刪除', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30', icon: AlertCircle },
    deleted: { label: '已刪除', color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: Trash2 }
};

export default function AdminUsersPage() {
    const { role } = useAuth();
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('active'); // 預設顯示正常使用者
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    // 載入使用者
    const loadUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const { data, error: fetchError } = await fetchUsers();

            if (fetchError) {
                setError(fetchError.message);
            } else {
                setUsers(data || []);
            }
        } catch (e) {
            setError('載入使用者失敗');
        } finally {
            setLoading(false);
        }
    };

    // 更新使用者狀態
    const handleStatusUpdate = async (userId: string, newStatus: 'active' | 'suspended' | 'deleted', currentUser?: AdminUser) => {
        if (newStatus === 'deleted') {
            if (!confirm('⚠️ 確定要永久刪除此使用者嗎?\n\n此操作會:\n1. 刪除 Supabase Auth 帳號\n2. 刪除所有相關資料\n3. 無法復原!\n\n請再次確認是否要執行此操作?')) {
                return;
            }
        }

        setUpdatingId(userId);

        let result;
        if (newStatus === 'deleted') {
            // 真正刪除使用者
            result = await deleteUser(userId);
        } else if (newStatus === 'active' && currentUser && 
                   (currentUser.status === 'pending_deletion' || currentUser.deletion_status === 'pending_deletion')) {
            // 待刪除狀態要使用恢復帳戶 API
            const { data, error } = await restoreAccount(userId);
            if (!error && data?.success) {
                setUsers(prev =>
                    prev.map(u => u.id === userId ? { 
                        ...u, 
                        status: 'active' as const,
                        deletion_status: 'active' as const,
                        deleted_at: undefined,
                        deletion_reason: undefined,
                        can_recover_until: undefined
                    } : u)
                );
                setUpdatingId(null);
                return;
            } else {
                alert(`操作失敗: ${error?.message || data?.message || '未知錯誤'}`);
                setUpdatingId(null);
                return;
            }
        } else {
            // 更新狀態 (停用/啟用)
            result = await updateUserStatus(userId, newStatus);
        }

        if (!result.error) {
            if (newStatus === 'deleted') {
                // 刪除時從陣列中移除
                setUsers(prev => prev.filter(u => u.id !== userId));
            } else {
                // 其他狀態更新
                setUsers(prev =>
                    prev.map(u => u.id === userId ? { ...u, status: newStatus } : u)
                );
            }
        } else {
            alert(`操作失敗: ${result.error.message}`);
        }

        setUpdatingId(null);
    };

    // 恢復帳戶
    const handleRestoreAccount = async (userId: string) => {
        if (!confirm('確定要恢復此帳戶嗎？')) return;

        setUpdatingId(userId);

        const { data, error } = await restoreAccount(userId);

        if (!error && data?.success) {
            // 更新本地狀態為 active（包含 deletion_status）
            setUsers(prev =>
                prev.map(u => u.id === userId ? { 
                    ...u, 
                    status: 'active' as const,
                    deletion_status: 'active' as const,
                    deleted_at: undefined,
                    deletion_reason: undefined,
                    can_recover_until: undefined
                } : u)
            );
        } else {
            alert(`恢復失敗: ${error?.message || data?.message || '未知錯誤'}`);
        }

        setUpdatingId(null);
    };

    // 初始載入
    useEffect(() => {
        if (role === 'admin') {
            loadUsers();
        }
    }, [role]);

    // 篩選與搜尋
    useEffect(() => {
        let filtered = users;

        // 狀態篩選
        if (statusFilter !== 'all') {
            filtered = filtered.filter(u => u.status === statusFilter);
        }

        // 搜尋
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(u =>
                u.email?.toLowerCase().includes(term) ||
                u.display_name?.toLowerCase().includes(term)
            );
        }

        setFilteredUsers(filtered);
    }, [users, statusFilter, searchTerm]);

    // 分頁
    const {
        currentPage,
        totalPages,
        paginatedItems: paginatedUsers,
        setCurrentPage,
        startIndex,
        endIndex,
        totalItems
    } = usePagination(filteredUsers, 10);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                    <p className="text-white/60">載入使用者...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <Users className="w-8 h-8 text-blue-400" />
                        使用者管理
                    </h1>
                    <p className="text-white/60 mt-1">管理所有註冊使用者</p>
                </div>
                <button
                    onClick={loadUsers}
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm">總使用者</p>
                    <p className="text-2xl font-bold text-white mt-1">{users.length}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <p className="text-green-400 text-sm">正常</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {users.filter(u => u.status === 'active').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm">已停用</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {users.filter(u => u.status === 'suspended').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                    <p className="text-orange-400 text-sm">待刪除</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {users.filter(u => u.status === 'pending_deletion').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <p className="text-red-400 text-sm">已刪除</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {users.filter(u => u.status === 'deleted').length}
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
                        placeholder="搜尋 Email 或名稱..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                    />
                </div>

                {/* Status Filter */}
                <div className="flex gap-2">
                    {(['all', 'active', 'suspended', 'pending_deletion', 'deleted'] as StatusFilter[]).map((status) => (
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

            {/* Users List */}
            <div className="space-y-3">
                {filteredUsers.length === 0 ? (
                    <div className="text-center py-12 text-white/40">
                        <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>沒有符合條件的使用者</p>
                    </div>
                ) : (
                    paginatedUsers.map((user) => {
                        const StatusIcon = statusConfig[user.status]?.icon || CheckCircle;
                        const isExpanded = expandedId === user.id;

                        return (
                            <div
                                key={user.id}
                                className="rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all"
                            >
                                {/* Header */}
                                <div
                                    className="p-4 cursor-pointer flex items-center gap-4"
                                    onClick={() => setExpandedId(isExpanded ? null : user.id)}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-medium">
                                            {(user.display_name || user.email || '?').charAt(0).toUpperCase()}
                                        </span>
                                    </div>

                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">名稱</p>
                                            <p className="text-white font-medium text-sm">
                                                {user.display_name || user.email?.split('@')[0] || '未命名'}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">Email</p>
                                            <p className="text-white/80 text-sm truncate">{user.email || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">狀態</p>
                                            <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded border text-xs ${statusConfig[user.status]?.color || 'bg-white/5 text-white/60'}`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {statusConfig[user.status]?.label || user.status}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">註冊時間</p>
                                            <p className="text-white/80 text-sm">
                                                {new Date(user.created_at).toLocaleDateString('zh-TW')}
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
                                    <div className="border-t border-white/10 p-4 bg-white/[0.02] space-y-4">
                                        {/* User Details */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-white/60 text-xs mb-1">User ID</p>
                                                <p className="text-white/80 text-sm font-mono">{user.id}</p>
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs mb-1">顯示名稱</p>
                                                <p className="text-white/80 text-sm">{user.display_name || '未設定'}</p>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <p className="text-white/40 text-xs">
                                                建立時間: {new Date(user.created_at).toLocaleString('zh-TW')}
                                            </p>
                                            <div className="flex gap-2">
                                                {user.status !== 'active' && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(user.id, 'active', user)}
                                                        disabled={updatingId === user.id}
                                                        className="px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-sm hover:bg-green-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === user.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <CheckCircle className="w-3 h-3" />
                                                        )}
                                                        啟用
                                                    </button>
                                                )}
                                                {user.status !== 'suspended' && user.status !== 'deleted' && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(user.id, 'suspended')}
                                                        disabled={updatingId === user.id}
                                                        className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-lg text-sm hover:bg-yellow-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === user.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <Ban className="w-3 h-3" />
                                                        )}
                                                        停用
                                                    </button>
                                                )}
                                                {user.status !== 'deleted' && !user.email?.includes('admin') && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(user.id, 'deleted')}
                                                        disabled={updatingId === user.id}
                                                        className="px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm hover:bg-red-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === user.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <Trash2 className="w-3 h-3" />
                                                        )}
                                                        刪除
                                                    </button>
                                                )}
                                                {(user.status === 'pending_deletion' || user.status === 'deleted') && (
                                                    <button
                                                        onClick={() => handleRestoreAccount(user.id)}
                                                        disabled={updatingId === user.id}
                                                        className="px-3 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-sm hover:bg-blue-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === user.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <RotateCcw className="w-3 h-3" />
                                                        )}
                                                        恢復帳戶
                                                    </button>
                                                )}
                                                {user.email?.includes('admin') && (
                                                    <div className="px-3 py-1.5 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg text-sm flex items-center gap-1.5">
                                                        <Shield className="w-3 h-3" />
                                                        系統管理員 (受保護)
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <p className="text-sm text-white/50">
                        顯示第 {startIndex} - {endIndex} 筆，共 {totalItems} 筆
                    </p>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}
        </div>
    );
}
