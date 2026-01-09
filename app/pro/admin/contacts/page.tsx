'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import {
    fetchContactSubmissions,
    updateContactStatus,
    ContactSubmission
} from '@/lib/admin/adminService';
import {
    Mail,
    Search,
    Filter,
    Loader2,
    CheckCircle,
    Clock,
    Archive,
    AlertCircle,
    RefreshCw,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

type StatusFilter = 'all' | 'pending' | 'replied' | 'archived';

const statusConfig = {
    pending: { label: '待處理', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: Clock },
    replied: { label: '已回覆', color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: CheckCircle },
    archived: { label: '已歸檔', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30', icon: Archive }
};

export default function ContactsPage() {
    const { role } = useAuth();
    const [contacts, setContacts] = useState<ContactSubmission[]>([]);
    const [filteredContacts, setFilteredContacts] = useState<ContactSubmission[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    // 載入聯絡表單
    const loadContacts = async () => {
        setError(null);

        try {
            const { data, error: fetchError } = await fetchContactSubmissions();

            if (fetchError) {
                setError(fetchError.message);
            } else {
                setContacts(data || []);
            }
        } catch (e) {
            setError('載入聯絡表單失敗');
        }
    };

    // 更新狀態
    const handleStatusUpdate = async (id: string, newStatus: ContactSubmission['status']) => {
        setUpdatingId(id);
        const result = await updateContactStatus(id, newStatus);

        if (result.success) {
            // 更新本地狀態
            setContacts(prev =>
                prev.map(c => c.id === id ? { ...c, status: newStatus } : c)
            );
        } else {
            alert(`更新失敗: ${result.error}`);
        }

        setUpdatingId(null);
    };

    useEffect(() => {
        if (role === 'admin') {
            loadContacts();
        }
    }, [role]);

    // 篩選與搜尋
    useEffect(() => {
        let filtered = contacts;

        // 狀態篩選
        if (statusFilter !== 'all') {
            filtered = filtered.filter(c => c.status === statusFilter);
        }

        // 搜尋
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(term) ||
                c.email.toLowerCase().includes(term) ||
                c.subject.toLowerCase().includes(term)
            );
        }

        setFilteredContacts(filtered);
    }, [contacts, statusFilter, searchTerm]);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <Mail className="w-8 h-8 text-purple-400" />
                        聯絡表單管理
                    </h1>
                    <p className="text-white/60 mt-1">管理使用者提交的聯絡訊息</p>
                </div>
                <button
                    onClick={async () => {
                        const btn = document.activeElement as HTMLButtonElement;
                        btn?.blur();
                        await loadContacts();
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                >
                    <RefreshCw className="w-4 h-4" />
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm">總提交數</p>
                    <p className="text-2xl font-bold text-white mt-1">{contacts.length}</p>
                </div>
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm">待處理</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {contacts.filter(c => c.status === 'pending').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <p className="text-green-400 text-sm">已回覆</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {contacts.filter(c => c.status === 'replied').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-500/10 border border-gray-500/30">
                    <p className="text-gray-400 text-sm">已歸檔</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {contacts.filter(c => c.status === 'archived').length}
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
                        placeholder="搜尋姓名、Email 或主旨..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                    />
                </div>

                {/* Status Filter */}
                <div className="flex gap-2">
                    {(['all', 'pending', 'replied', 'archived'] as StatusFilter[]).map((status) => (
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

            {/* Contacts List */}
            <div className="space-y-3">
                {filteredContacts.length === 0 ? (
                    <div className="text-center py-12 text-white/40">
                        <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>沒有符合條件的聯絡表單</p>
                    </div>
                ) : (
                    filteredContacts.map((contact) => {
                        const StatusIcon = statusConfig[contact.status].icon;
                        const isExpanded = expandedId === contact.id;

                        return (
                            <div
                                key={contact.id}
                                className="rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all"
                            >
                                {/* Header */}
                                <div
                                    className="p-4 cursor-pointer flex items-center gap-4"
                                    onClick={() => setExpandedId(isExpanded ? null : contact.id)}
                                >
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">姓名</p>
                                            <p className="text-white font-medium">{contact.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">Email</p>
                                            <p className="text-white/80 text-sm">{contact.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">主旨</p>
                                            <p className="text-white/80 text-sm truncate">{contact.subject}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs mb-1">狀態</p>
                                            <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded border text-xs ${statusConfig[contact.status].color}`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {statusConfig[contact.status].label}
                                            </div>
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
                                        {/* Message */}
                                        <div>
                                            <p className="text-white/60 text-xs mb-2">訊息內容</p>
                                            <div className="p-3 bg-white/5 rounded-lg">
                                                <p className="text-white/80 whitespace-pre-wrap text-sm leading-relaxed">
                                                    {contact.message}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center justify-between">
                                            <p className="text-white/40 text-xs">
                                                提交時間: {new Date(contact.created_at).toLocaleString('zh-TW')}
                                            </p>
                                            <div className="flex gap-2">
                                                {contact.status !== 'replied' && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(contact.id, 'replied')}
                                                        disabled={updatingId === contact.id}
                                                        className="px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-sm hover:bg-green-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === contact.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <CheckCircle className="w-3 h-3" />
                                                        )}
                                                        標記為已回覆
                                                    </button>
                                                )}
                                                {contact.status !== 'archived' && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(contact.id, 'archived')}
                                                        disabled={updatingId === contact.id}
                                                        className="px-3 py-1.5 bg-gray-500/20 text-gray-400 border border-gray-500/30 rounded-lg text-sm hover:bg-gray-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === contact.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <Archive className="w-3 h-3" />
                                                        )}
                                                        歸檔
                                                    </button>
                                                )}
                                                {contact.status !== 'pending' && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(contact.id, 'pending')}
                                                        disabled={updatingId === contact.id}
                                                        className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-lg text-sm hover:bg-yellow-500/30 transition-colors disabled:opacity-50 flex items-center gap-1.5"
                                                    >
                                                        {updatingId === contact.id ? (
                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                        ) : (
                                                            <Clock className="w-3 h-3" />
                                                        )}
                                                        標記為待處理
                                                    </button>
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
        </div>
    );
}
