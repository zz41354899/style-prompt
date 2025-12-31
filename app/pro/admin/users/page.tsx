'use client';

import React, { useState, useMemo } from 'react';
import { mockUsers, type MockUser } from '@/lib/admin/mockData';
import {
    Search,
    Filter,
    MoreVertical,
    UserX,
    Trash2,
    Crown,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

type FilterType = 'all' | 'pro' | 'free' | 'suspended' | 'deleted';

export default function AdminUsersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<FilterType>('all');
    const [selectedUser, setSelectedUser] = useState<MockUser | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Filter and search users
    const filteredUsers = useMemo(() => {
        return mockUsers.filter((user) => {
            // Apply search
            const matchesSearch =
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase());

            // Apply filter
            let matchesFilter = true;
            switch (filter) {
                case 'pro':
                    matchesFilter = user.is_pro && user.status === 'active';
                    break;
                case 'free':
                    matchesFilter = !user.is_pro && user.status === 'active';
                    break;
                case 'suspended':
                    matchesFilter = user.status === 'suspended';
                    break;
                case 'deleted':
                    matchesFilter = user.status === 'deleted';
                    break;
                default:
                    matchesFilter = true;
            }

            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, filter]);

    // Pagination
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Status badge component
    const StatusBadge: React.FC<{ status: MockUser['status'] }> = ({ status }) => {
        const styles = {
            active: 'bg-green-500/20 text-green-400 border-green-500/30',
            suspended: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
            deleted: 'bg-red-500/20 text-red-400 border-red-500/30'
        };
        const labels = {
            active: '活躍',
            suspended: '停用',
            deleted: '已刪除'
        };

        return (
            <span className={`px-2 py-0.5 rounded border text-xs ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">使用者管理</h1>
                <p className="text-white/60 mt-1">管理所有註冊使用者</p>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                        type="text"
                        placeholder="搜尋使用者名稱或 Email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                    />
                </div>

                {/* Filter */}
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-white/40" />
                    <div className="flex gap-2">
                        {(['all', 'pro', 'free', 'suspended', 'deleted'] as FilterType[]).map((f) => (
                            <button
                                key={f}
                                onClick={() => { setFilter(f); setCurrentPage(1); }}
                                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${filter === f
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                {f === 'all' ? '全部' :
                                    f === 'pro' ? 'Pro' :
                                        f === 'free' ? 'Free' :
                                            f === 'suspended' ? '停用' : '已刪除'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">使用者</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">方案</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">狀態</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">註冊時間</th>
                            <th className="text-left px-4 py-3 text-sm font-medium text-white/60">最後登入</th>
                            <th className="text-right px-4 py-3 text-sm font-medium text-white/60">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                                onClick={() => setSelectedUser(user)}
                            >
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                            <span className="text-white font-medium">
                                                {user.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{user.name}</p>
                                            <p className="text-white/40 text-sm">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    {user.is_pro ? (
                                        <span className="flex items-center gap-1.5 text-purple-400">
                                            <Crown className="w-4 h-4" />
                                            Pro
                                        </span>
                                    ) : (
                                        <span className="text-white/60">Free</span>
                                    )}
                                </td>
                                <td className="px-4 py-3">
                                    <StatusBadge status={user.status} />
                                </td>
                                <td className="px-4 py-3 text-white/60 text-sm">
                                    {formatDate(user.created_at)}
                                </td>
                                <td className="px-4 py-3 text-white/60 text-sm">
                                    {formatDate(user.last_login_at)}
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
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                        <p className="text-sm text-white/40">
                            顯示 {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredUsers.length)} / {filteredUsers.length} 筆
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white/60"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="text-sm text-white/60">
                                {currentPage} / {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white/60"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* User Detail Sidebar */}
            {selectedUser && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setSelectedUser(null)}
                    />
                    <div className="relative w-full max-w-md bg-[#0f0f1a] border-l border-white/10 h-full overflow-y-auto">
                        <div className="p-6 space-y-6">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">使用者詳情</h2>
                                <button
                                    onClick={() => setSelectedUser(null)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/60"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl text-white font-bold">
                                        {selectedUser.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">{selectedUser.name}</h3>
                                <p className="text-white/60">{selectedUser.email}</p>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    {selectedUser.is_pro && (
                                        <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 text-sm">
                                            <Crown className="w-3 h-3" />
                                            Pro
                                        </span>
                                    )}
                                    <StatusBadge status={selectedUser.status} />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">使用者 ID</p>
                                    <p className="text-white font-mono text-sm mt-1">{selectedUser.id}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">註冊時間</p>
                                    <p className="text-white mt-1">{formatDate(selectedUser.created_at)}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/40 text-sm">最後登入</p>
                                    <p className="text-white mt-1">{formatDate(selectedUser.last_login_at)}</p>
                                </div>
                                {selectedUser.is_pro && selectedUser.pro_expires_at && (
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <p className="text-white/40 text-sm">Pro 到期時間</p>
                                        <p className="text-white mt-1">{formatDate(selectedUser.pro_expires_at)}</p>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="space-y-2 pt-4 border-t border-white/10">
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 transition-colors">
                                    <UserX className="w-5 h-5" />
                                    {selectedUser.status === 'suspended' ? '解除停用' : '停用帳號'}
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-colors">
                                    <Trash2 className="w-5 h-5" />
                                    刪除帳號
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
