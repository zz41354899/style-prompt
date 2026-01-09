'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { fetchAllChangelogs, createChangelog, updateChangelog, deleteChangelog, Changelog } from '@/lib/changelogService';
import { ScrollText, Plus, Edit, Trash2, Calendar, AlertCircle, Loader2, X, Check } from 'lucide-react';
import ImageUpload from '@/components/common/ImageUpload';

export default function AdminChangelogPage() {
    const { role } = useAuth();
    const [changelogs, setChangelogs] = useState<Changelog[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [editingChangelog, setEditingChangelog] = useState<Changelog | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // 表單狀態
    const [formData, setFormData] = useState({
        version: '',
        title: '',
        changes: [''],
        type: 'feature' as 'feature' | 'bugfix' | 'improvement',
        published_at: new Date().toISOString().split('T')[0],
        image_url: ''
    });

    const loadChangelogs = async () => {
        setError(null);

        try {
            const { data, error: fetchError } = await fetchAllChangelogs();

            if (fetchError) {
                setError('載入版本更新失敗');
            } else {
                setChangelogs(data || []);
            }
        } catch (e) {
            setError('載入版本更新失敗');
        }
    };

    useEffect(() => {
        if (role === 'admin') {
            loadChangelogs();
        }
    }, [role]);

    const handleOpenModal = (changelog?: Changelog) => {
        if (changelog) {
            setEditingChangelog(changelog);
            setFormData({
                version: changelog.version,
                title: changelog.title,
                changes: Array.isArray(changelog.changes) ? changelog.changes : [''],
                type: changelog.type,
                published_at: changelog.published_at ? changelog.published_at.split('T')[0] : new Date().toISOString().split('T')[0],
                image_url: changelog.image_url || ''
            });
        } else {
            setEditingChangelog(null);
            setFormData({
                version: '',
                title: '',
                changes: [''],
                type: 'feature',
                published_at: new Date().toISOString().split('T')[0],
                image_url: ''
            });
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingChangelog(null);
    };

    const handleSave = async () => {
        if (!formData.version || !formData.title || formData.changes.filter(c => c.trim()).length === 0) {
            setError('請填寫所有必填欄位');
            return;
        }

        setIsSaving(true);
        setError(null);

        try {
            const changelogData = {
                version: formData.version,
                title: formData.title,
                changes: formData.changes.filter(c => c.trim()),
                type: formData.type,
                published_at: formData.published_at
            };

            if (editingChangelog) {
                const { error } = await updateChangelog(editingChangelog.id, changelogData);
                if (error) {
                    setError('更新失敗');
                    setIsSaving(false);
                    return;
                }
            } else {
                const { error } = await createChangelog(changelogData as any);
                if (error) {
                    setError('新增失敗');
                    setIsSaving(false);
                    return;
                }
            }

            await loadChangelogs();
            handleCloseModal();
        } catch (e) {
            setError('操作失敗');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('確定要刪除此版本更新嗎？此操作無法復原!')) return;

        // 找到要刪除的 changelog
        const changelog = changelogs.find(c => c.id === id);
        
        // 如果有圖片,先刪除 Storage 中的圖片
        if (changelog?.image_url && changelog.image_url.includes('supabase')) {
            const { deleteImage } = await import('@/lib/storageService');
            await deleteImage(changelog.image_url, 'notifications');
        }

        const { error } = await deleteChangelog(id);
        if (error) {
            setError('刪除失敗');
        } else {
            await loadChangelogs();  // 已經有 await,保持不變
        }
    };

    const addChangeItem = () => {
        setFormData({ ...formData, changes: [...formData.changes, ''] });
    };

    const updateChangeItem = (index: number, value: string) => {
        const newChanges = [...formData.changes];
        newChanges[index] = value;
        setFormData({ ...formData, changes: newChanges });
    };

    const removeChangeItem = (index: number) => {
        setFormData({ ...formData, changes: formData.changes.filter((_, i) => i !== index) });
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'feature': return 'bg-green-500/20 text-green-400';
            case 'bugfix': return 'bg-red-500/20 text-red-400';
            case 'improvement': return 'bg-blue-500/20 text-blue-400';
            default: return 'bg-white/10 text-white/60';
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'feature': return '新功能';
            case 'bugfix': return '錯誤修復';
            case 'improvement': return '改進';
            default: return type;
        }
    };

    if (role !== 'admin') {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <ScrollText className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">存取被拒</h2>
                    <p className="text-white/60">您沒有權限查看此頁面</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <ScrollText className="w-8 h-8 text-orange-400" />
                        版本更新管理
                    </h1>
                    <p className="text-white/60 mt-1">管理所有版本更新記錄</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    <span>新增版本</span>
                </button>
            </div>

            {error && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            <div className="space-y-4">
                {changelogs.length === 0 ? (
                    <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
                        <ScrollText className="w-12 h-12 text-white/20 mx-auto mb-3" />
                        <p className="text-white/40">尚無版本更新記錄</p>
                    </div>
                ) : (
                    changelogs.map((changelog) => (
                        <div key={changelog.id} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-white">{changelog.version}</h3>
                                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getTypeColor(changelog.type)}`}>
                                            {getTypeLabel(changelog.type)}
                                        </span>
                                    </div>
                                    <p className="text-white/80 mb-3">{changelog.title}</p>
                                    <div className="flex items-center gap-2 text-sm text-white/40">
                                        <Calendar className="w-4 h-4" />
                                        {changelog.published_at ? new Date(changelog.published_at).toLocaleDateString('zh-TW') : '未發布'}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleOpenModal(changelog)}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        <Edit className="w-4 h-4 text-blue-400" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(changelog.id)}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4 text-red-400" />
                                    </button>
                                </div>
                            </div>
                            {Array.isArray(changelog.changes) && changelog.changes.length > 0 && (
                                <ul className="space-y-1 text-sm text-white/70">
                                    {changelog.changes.map((change, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span>{change}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
                    <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <h2 className="text-lg font-bold text-white">
                                {editingChangelog ? '編輯版本更新' : '新增版本更新'}
                            </h2>
                            <button onClick={handleCloseModal} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <X className="w-5 h-5 text-white/60" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div>
                                <label className="text-sm text-white/60 block mb-2">版本號 *</label>
                                <input
                                    type="text"
                                    value={formData.version}
                                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                                    placeholder="例如：v1.0.0"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60 block mb-2">標題 *</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="版本更新標題"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60 block mb-2">類型</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                >
                                    <option value="feature" className="bg-[#0a0a0a] text-white">新功能</option>
                                    <option value="bugfix" className="bg-[#0a0a0a] text-white">錯誤修復</option>
                                    <option value="improvement" className="bg-[#0a0a0a] text-white">改進</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-white/60 block mb-2">發布日期</label>
                                <input
                                    type="date"
                                    value={formData.published_at}
                                    onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60 block mb-2">
                                    封面圖片 <span className="text-white/30 text-xs">(選填)</span>
                                </label>
                                <ImageUpload
                                    value={formData.image_url}
                                    onChange={(url) => setFormData({ ...formData, image_url: url })}
                                    bucket="notifications"
                                    folder="changelogs"
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm text-white/60">更新內容 *</label>
                                    <button
                                        onClick={addChangeItem}
                                        className="text-xs text-purple-400 hover:text-purple-300"
                                    >
                                        + 新增項目
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {formData.changes.map((change, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={change}
                                                onChange={(e) => updateChangeItem(index, e.target.value)}
                                                placeholder="更新項目"
                                                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                                            />
                                            {formData.changes.length > 1 && (
                                                <button
                                                    onClick={() => removeChangeItem(index)}
                                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                                >
                                                    <X className="w-4 h-4 text-red-400" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                            <button
                                onClick={handleCloseModal}
                                disabled={isSaving}
                                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                取消
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white rounded-lg transition-colors"
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        儲存中...
                                    </>
                                ) : (
                                    '儲存'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
