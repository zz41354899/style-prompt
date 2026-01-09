'use client';

import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Eye, EyeOff, Calendar, AlertCircle, Bell, Megaphone, Loader2, X, RefreshCw } from 'lucide-react';
import { type Announcement, type CreateAnnouncementInput } from '@/lib/admin/adminService';
import ImageUpload from '@/components/common/ImageUpload';
import ConfirmDialog from '@/components/common/ConfirmDialog';
import {
    useAnnouncements,
    useCreateAnnouncement,
    useUpdateAnnouncement,
    useDeleteAnnouncement,
    useToggleAnnouncementActive
} from '@/hooks/useAdminData';
import { useRealtimeSubscription } from '@/hooks/useRealtimeSubscription';

// 公告類型對應的圖標和顏色
const typeConfig = {
    event: { icon: Calendar, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    notice: { icon: Bell, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
    alert: { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
};

export default function AdminAnnouncementsPage() {
    // 啟用 Realtime 訂閱，自動同步公告變更
    useRealtimeSubscription(['announcements']);

    // React Query hooks
    const { data: announcements = [], isLoading, refetch } = useAnnouncements();
    const createMutation = useCreateAnnouncement();
    const updateMutation = useUpdateAnnouncement();
    const deleteMutation = useDeleteAnnouncement();
    const toggleMutation = useToggleAnnouncementActive();

    // UI 狀態
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Announcement | null>(null);

    // 表單狀態
    const [formData, setFormData] = useState<CreateAnnouncementInput>({
        title: '',
        content: '',
        type: 'notice',
        published_at: new Date().toISOString().slice(0, 10),
        is_active: true,
        image_url: '',
    });

    const isSaving = createMutation.isPending || updateMutation.isPending;

    // 開啟新增 Modal
    const handleCreate = () => {
        setEditingAnnouncement(null);
        setFormData({
            title: '',
            content: '',
            type: 'notice',
            published_at: new Date().toISOString().slice(0, 10),
            is_active: true,
            image_url: '',
        });
        setIsModalOpen(true);
    };

    // 開啟編輯 Modal
    const handleEdit = (announcement: Announcement) => {
        setEditingAnnouncement(announcement);
        setFormData({
            title: announcement.title,
            content: announcement.content,
            type: announcement.type,
            published_at: announcement.published_at?.slice(0, 10) || new Date().toISOString().slice(0, 10),
            is_active: announcement.is_active,
            image_url: announcement.image_url || '',
        });
        setIsModalOpen(true);
    };

    // 儲存公告
    const handleSave = async () => {
        if (!formData.title || !formData.content) {
            alert('請填寫標題和內容');
            return;
        }

        try {
            if (editingAnnouncement) {
                await updateMutation.mutateAsync({ id: editingAnnouncement.id, updates: formData });
            } else {
                await createMutation.mutateAsync(formData);
            }
            setIsModalOpen(false);
        } catch (error) {
            alert(editingAnnouncement ? '更新失敗' : '新增失敗');
        }
    };

    // 切換啟用狀態
    const handleToggleActive = async (id: string, currentActive: boolean) => {
        try {
            await toggleMutation.mutateAsync({ id, isActive: currentActive });
        } catch {
            alert('切換失敗');
        }
    };

    // 確認刪除
    const handleConfirmDelete = async () => {
        if (!deleteTarget) return;
        try {
            await deleteMutation.mutateAsync(deleteTarget);
            setDeleteTarget(null);
        } catch {
            alert('刪除失敗');
        }
    };

    // 格式化日期
    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // 檢查是否啟用
    const isCurrentlyActive = (announcement: Announcement) => {
        return announcement.is_active;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">公告管理</h1>
                    <p className="text-white/60 mt-1">發布和管理系統公告</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => refetch()}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        新增公告
                    </button>
                </div>
            </div>

            {/* 公告列表 */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                </div>
            ) : announcements.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
                    <Megaphone className="w-12 h-12 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60">尚無公告</p>
                    <p className="text-white/40 text-sm mt-1">點擊上方按鈕新增第一則公告</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {announcements.map((announcement) => {
                        const TypeIcon = typeConfig[announcement.type].icon;
                        const isActive = isCurrentlyActive(announcement);

                        return (
                            <div
                                key={announcement.id}
                                className={`rounded-xl border ${announcement.is_active ? 'border-white/10 bg-white/5' : 'border-white/5 bg-white/[0.02]'} p-6 transition-all`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    {/* 左側：類型圖標 + 內容 */}
                                    <div className="flex gap-4 flex-1">
                                        <div className={`w-10 h-10 rounded-lg ${typeConfig[announcement.type].bg} ${typeConfig[announcement.type].border} border flex items-center justify-center flex-shrink-0`}>
                                            <TypeIcon className={`w-5 h-5 ${typeConfig[announcement.type].color}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className={`font-semibold ${announcement.is_active ? 'text-white' : 'text-white/50'}`}>
                                                    {announcement.title}
                                                </h3>
                                                {/* 狀態標籤 */}
                                                {isActive ? (
                                                    <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded-full">
                                                        進行中
                                                    </span>
                                                ) : announcement.is_active ? (
                                                    <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs rounded-full">
                                                        已排程
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 text-xs rounded-full">
                                                        已停用
                                                    </span>
                                                )}
                                                {/* 類型標籤 */}
                                                <span className={`px-2 py-0.5 ${typeConfig[announcement.type].bg} ${typeConfig[announcement.type].border} border ${typeConfig[announcement.type].color} text-xs rounded-full capitalize`}>
                                                    {announcement.type === 'event' ? '活動' : announcement.type === 'notice' ? '通知' : '警告'}
                                                </span>
                                            </div>
                                            <p className={`text-sm mb-2 ${announcement.is_active ? 'text-white/70' : 'text-white/40'}`}>
                                                {announcement.content}
                                            </p>
                                            <div className="flex items-center gap-4 text-xs text-white/40">
                                                <span>發布日期：{formatDate(announcement.published_at)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 右側：操作按鈕 */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleToggleActive(announcement.id, announcement.is_active)}
                                            className={`p-2 rounded-lg transition-colors ${announcement.is_active
                                                ? 'text-green-400 hover:bg-green-500/10'
                                                : 'text-white/40 hover:bg-white/5'
                                                }`}
                                            title={announcement.is_active ? '停用公告' : '啟用公告'}
                                        >
                                            {announcement.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={() => handleEdit(announcement)}
                                            className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                            title="編輯"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setDeleteTarget(announcement)}
                                            disabled={deleteMutation.isPending}
                                            className="p-2 text-red-400/60 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                                            title="刪除"
                                        >
                                            {deleteMutation.isPending && deleteTarget?.id === announcement.id ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* 新增/編輯 Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
                    <div className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <h2 className="text-lg font-bold text-white">
                                {editingAnnouncement ? '編輯公告' : '新增公告'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1 text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            {/* 標題 */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">標題</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500"
                                    placeholder="輸入公告標題"
                                />
                            </div>

                            {/* 內容 */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">內容</label>
                                <textarea
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500 resize-none"
                                    placeholder="輸入公告內容"
                                />
                            </div>

                            {/* 圖片上傳 */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">
                                    封面圖片 <span className="text-white/40 text-xs">(選填)</span>
                                </label>
                                <ImageUpload
                                    value={formData.image_url || ''}
                                    onChange={(url) => setFormData({ ...formData, image_url: url })}
                                    bucket="notifications"
                                    folder="announcements"
                                />
                            </div>

                            {/* 類型 */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">類型</label>
                                <div className="flex gap-2">
                                    {(['notice', 'event', 'alert'] as const).map((type) => {
                                        const TypeIcon = typeConfig[type].icon;
                                        return (
                                            <button
                                                key={type}
                                                onClick={() => setFormData({ ...formData, type })}
                                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-colors ${formData.type === type
                                                    ? `${typeConfig[type].bg} ${typeConfig[type].border} ${typeConfig[type].color}`
                                                    : 'border-white/10 text-white/60 hover:bg-white/5'
                                                    }`}
                                            >
                                                <TypeIcon className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    {type === 'notice' ? '通知' : type === 'event' ? '活動' : '警告'}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 發布日期 */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">發布日期</label>
                                <input
                                    type="date"
                                    value={formData.published_at}
                                    onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            {/* 啟用狀態 */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setFormData({ ...formData, is_active: !formData.is_active })}
                                    className={`relative w-11 h-6 rounded-full transition-colors ${formData.is_active ? 'bg-purple-600' : 'bg-white/10'}`}
                                >
                                    <div
                                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${formData.is_active ? 'translate-x-5' : 'translate-x-0.5'}`}
                                    />
                                </button>
                                <span className="text-sm text-white/70">
                                    {formData.is_active ? '啟用' : '停用（儲存為草稿）'}
                                </span>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-white/70 hover:text-white transition-colors"
                            >
                                取消
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
                            >
                                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                                {editingAnnouncement ? '更新' : '發布'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 刪除確認對話框 */}
            <ConfirmDialog
                isOpen={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleConfirmDelete}
                title="刪除公告"
                message={`確定要刪除「${deleteTarget?.title}」嗎？此操作無法復原！`}
                confirmText="刪除"
                variant="danger"
                isLoading={deleteMutation.isPending}
            />
        </div>
    );
}
