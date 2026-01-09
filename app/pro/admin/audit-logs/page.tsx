'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { fetchAllAuditLogs, AuditLog } from '@/lib/auditService';
import { Shield, Search, Filter, Calendar, User, Activity, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminAuditLogsPage() {
    const { role } = useAuth();
    const [logs, setLogs] = useState<AuditLog[]>([]);
    const [filteredLogs, setFilteredLogs] = useState<AuditLog[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [actionFilter, setActionFilter] = useState<string>('all');

    // 載入審計日誌
    const loadLogs = async () => {
        setError(null);

        try {
            const { data, error: fetchError } = await fetchAllAuditLogs();

            if (fetchError) {
                setError('載入審計日誌失敗');
            } else {
                setLogs(data || []);
            }
        } catch (e) {
            setError('載入審計日誌失敗');
        }
    };

    // 初始載入與自動重新整理
    useEffect(() => {
        if (role === 'admin') {
            loadLogs();
        }
    }, [role]);

    // 篩選與搜尋
    useEffect(() => {
        let filtered = logs;

        // 動作篩選
        if (actionFilter !== 'all') {
            filtered = filtered.filter(log => log.action === actionFilter);
        }

        // 搜尋
        if (searchTerm) {
            filtered = filtered.filter(log =>
                log.user_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.user_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.action.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredLogs(filtered);
    }, [logs, searchTerm, actionFilter]);

    // 取得所有動作類型
    const actionTypes = ['all', ...Array.from(new Set(logs.map(log => log.action)))];

    // 格式化動作名稱
    const formatAction = (action: string) => {
        const actionMap: Record<string, string> = {
            'account_soft_delete': '刪除帳號',
            'account_restore': '恢復帳號',
        };
        return actionMap[action] || action;
    };

    // 取得動作顏色
    const getActionColor = (action: string) => {
        if (action.includes('delete')) return 'text-red-400 bg-red-500/10';
        if (action.includes('restore')) return 'text-green-400 bg-green-500/10';
        return 'text-blue-400 bg-blue-500/10';
    };

    if (role !== 'admin') {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">存取被拒</h2>
                    <p className="text-white/60">您沒有權限查看此頁面</p>
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
                        <Activity className="w-8 h-8 text-purple-400" />
                        審計日誌
                    </h1>
                    <p className="text-white/60 mt-1">查看所有系統操作記錄</p>
                </div>
                <button
                    onClick={async () => {
                        const btn = document.activeElement as HTMLButtonElement;
                        btn?.blur();
                        await loadLogs();
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                >
                    <Activity className="w-4 h-4" />
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

            {/* 搜尋與篩選 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 搜尋 */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                        type="text"
                        placeholder="搜尋使用者或動作..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50"
                    />
                </div>

                {/* 動作篩選 */}
                <div className="relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <select
                        value={actionFilter}
                        onChange={(e) => setActionFilter(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer"
                    >
                        {actionTypes.map(action => (
                            <option key={action} value={action} className="bg-[#0a0a0a]">
                                {action === 'all' ? '所有動作' : formatAction(action)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 統計 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-white/60 text-sm mb-1">總記錄數</p>
                    <p className="text-2xl font-bold text-white">{logs.length}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-white/60 text-sm mb-1">篩選結果</p>
                    <p className="text-2xl font-bold text-white">{filteredLogs.length}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-white/60 text-sm mb-1">獨立使用者</p>
                    <p className="text-2xl font-bold text-white">
                        {new Set(logs.map(log => log.user_id)).size}
                    </p>
                </div>
            </div>

            {/* 日誌列表 */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-white/60 uppercase tracking-wider">
                                    時間
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-white/60 uppercase tracking-wider">
                                    使用者
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-white/60 uppercase tracking-wider">
                                    動作
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-white/60 uppercase tracking-wider">
                                    詳細資訊
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredLogs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-white/40">
                                        沒有找到審計日誌
                                    </td>
                                </tr>
                            ) : (
                                filteredLogs.map((log) => (
                                    <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-sm text-white/80">
                                                <Calendar className="w-4 h-4 text-white/40" />
                                                {new Date(log.created_at).toLocaleString('zh-TW')}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-white/40" />
                                                <div>
                                                    <p className="text-sm font-medium text-white">
                                                        {log.user_name || '未命名'}
                                                    </p>
                                                    <p className="text-xs text-white/40">{log.user_email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActionColor(log.action)}`}>
                                                {formatAction(log.action)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {log.details ? (
                                                <div className="max-w-md">
                                                    <pre className="text-xs text-white/80 bg-white/5 p-3 rounded-lg overflow-x-auto border border-white/10">
                                                        {JSON.stringify(log.details, null, 2)}
                                                    </pre>
                                                </div>
                                            ) : (
                                                <span className="text-xs text-white/40">無</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
