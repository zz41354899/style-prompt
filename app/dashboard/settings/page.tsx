'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import { useTranslation } from 'react-i18next';
import { User, Trash2, Loader2, Check, AlertCircle, X } from 'lucide-react';

export default function DashboardSettingsPage() {
    const router = useRouter();
    const { user, updateUserName, profileName } = useAuth();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // 優先從 profileName (資料庫同步) 取得顯示名稱，其次才是 metadata
    const initialName = profileName || user?.user_metadata?.display_name || user?.user_metadata?.name || '';
    const [displayName, setDisplayName] = useState(initialName);
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [pendingDeletion, setPendingDeletion] = useState<any>(null);
    const [isRestoring, setIsRestoring] = useState(false);
    const [restoreError, setRestoreError] = useState<string | null>(null);

    // 當 user 或 profileName 變化時更新 displayName
    useEffect(() => {
        const name = profileName || user?.user_metadata?.display_name || user?.user_metadata?.name || '';
        setDisplayName(name);
    }, [user, profileName]);

    // 檢查待刪除狀態
    useEffect(() => {
        async function checkDeletionStatus() {
            if (!user?.id) return;

            const { getAccountDeletionStatus, calculateRemainingDays } = await import('@/lib/accountService');
            const { data, error } = await getAccountDeletionStatus(user.id);

            if (!error && data && data.deletion_status === 'pending_deletion' && data.can_recover_until) {
                const remainingDays = calculateRemainingDays(data.can_recover_until);
                setPendingDeletion({
                    deleted_at: data.deleted_at || '',
                    deletion_reason: data.deletion_reason,
                    can_recover_until: data.can_recover_until,
                    remaining_days: remainingDays,
                });
            }
        }

        checkDeletionStatus();
    }, [user]);

    const handleSave = async () => {
        if (!displayName.trim()) {
            setSaveError('請輸入顯示名稱');
            return;
        }

        setIsSaving(true);
        setSaveError(null);
        setSaveSuccess(false);

        const { error } = await updateUserName(displayName.trim());

        setIsSaving(false);

        if (error) {
            setSaveError(error.message);
        } else {
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }
    };

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">{t('dashboard.settings.title')}</h1>
                <p className="text-white/50 mb-8">{t('dashboard.settings.subtitle')}</p>

                {/* Profile Section */}
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <User className="w-5 h-5 text-purple-400" />
                        </div>
                        <h2 className="font-bold">{t('dashboard.settings.profile')}</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-white/60 block mb-2">{t('dashboard.settings.displayName')}</label>
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => {
                                    setDisplayName(e.target.value);
                                    setSaveError(null);
                                    setSaveSuccess(false);
                                }}
                                placeholder={user?.email?.split('@')[0]}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-white/60 block mb-2">{t('dashboard.settings.email')}</label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                disabled
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 cursor-not-allowed"
                            />
                        </div>

                        {/* 錯誤訊息 */}
                        {saveError && (
                            <div className="flex items-center gap-2 text-red-400 text-sm">
                                <AlertCircle className="w-4 h-4" />
                                <span>{saveError}</span>
                            </div>
                        )}

                        {/* 成功訊息 */}
                        {saveSuccess && (
                            <div className="flex items-center gap-2 text-green-400 text-sm">
                                <Check className="w-4 h-4" />
                                <span>儲存成功！</span>
                            </div>
                        )}

                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white font-medium rounded-xl transition-colors"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    {t('auth.processing')}
                                </>
                            ) : (
                                t('dashboard.settings.save')
                            )}
                        </button>
                    </div>
                </div>

                {/* Danger Zone / Restore Zone */}
                {pendingDeletion ? (
                    <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-500/20 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-orange-400" />
                            </div>
                            <h2 className="font-bold text-orange-400">帳戶待刪除</h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white/70 text-sm">
                                您的帳戶將在 <span className="text-orange-400 font-bold">{pendingDeletion.remaining_days} 天</span> 後被永久刪除。
                                在此期間內，您可以隨時恢復帳戶。
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <p className="text-xs text-white/50 mb-1">刪除時間</p>
                                    <p className="text-sm text-white">
                                        {new Date(pendingDeletion.deleted_at).toLocaleDateString('zh-TW')}
                                    </p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <p className="text-xs text-white/50 mb-1">恢復期限</p>
                                    <p className="text-sm text-white">
                                        {new Date(pendingDeletion.can_recover_until).toLocaleDateString('zh-TW')}
                                    </p>
                                </div>
                            </div>

                            {restoreError && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{restoreError}</span>
                                </div>
                            )}

                            <button
                                onClick={async () => {
                                    if (!user?.id) return;
                                    
                                    setIsRestoring(true);
                                    setRestoreError(null);

                                    try {
                                        const { restoreAccount } = await import('@/lib/accountService');
                                        const { data, error } = await restoreAccount(user.id);

                                        if (error || !data?.success) {
                                            setRestoreError(data?.message || '恢復帳戶失敗，請稍後再試');
                                            setIsRestoring(false);
                                            return;
                                        }

                                        // 恢復成功，重新整理頁面
                                        window.location.reload();
                                    } catch (err) {
                                        console.error('Restore error:', err);
                                        setRestoreError('發生未預期的錯誤');
                                        setIsRestoring(false);
                                    }
                                }}
                                disabled={isRestoring}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white font-medium rounded-xl transition-colors"
                            >
                                {isRestoring ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        恢復中...
                                    </>
                                ) : (
                                    '恢復我的帳戶'
                                )}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                                <Trash2 className="w-5 h-5 text-red-400" />
                            </div>
                            <h2 className="font-bold text-red-400">{t('dashboard.settings.dangerZone')}</h2>
                        </div>

                        <p className="text-white/50 text-sm mb-4">
                            {t('dashboard.settings.deleteWarning')}
                        </p>

                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium rounded-xl transition-colors"
                        >
                            {t('dashboard.settings.deleteAccount')}
                        </button>
                    </div>
                )}
            </div>

            {/* 刪除帳號 Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
                    <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <h2 className="text-lg font-bold text-red-400">刪除帳戶</h2>
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setDeleteReason('');
                                    setDeleteError(null);
                                }}
                                className="p-1 text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                    <div className="text-xs text-yellow-200/80">
                                        <p className="font-medium mb-1">軟刪除說明</p>
                                        <p>您的帳戶將被標記為待刪除狀態，但資料會保留 30 天。在此期間內，您可以隨時登入恢復帳戶。30 天後，帳戶將被永久刪除。</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-white/60 block mb-2">
                                    刪除原因（選填）
                                </label>
                                <textarea
                                    value={deleteReason}
                                    onChange={(e) => setDeleteReason(e.target.value)}
                                    placeholder="請告訴我們您刪除帳戶的原因，這將幫助我們改進服務..."
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                                />
                            </div>

                            {deleteError && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{deleteError}</span>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setDeleteReason('');
                                    setDeleteError(null);
                                }}
                                disabled={isDeleting}
                                className="px-4 py-2 text-white/70 hover:text-white transition-colors disabled:opacity-50"
                            >
                                取消
                            </button>
                            <button
                                onClick={async () => {
                                    if (!user?.id) return;
                                    
                                    setIsDeleting(true);
                                    setDeleteError(null);

                                    // 設定 10 秒超時
                                    const timeoutId = setTimeout(() => {
                                        setDeleteError('處理超時，請稍後再試');
                                        setIsDeleting(false);
                                    }, 10000);

                                    try {
                                        const { softDeleteAccount } = await import('@/lib/accountService');
                                        const { data, error } = await softDeleteAccount(user.id, deleteReason || undefined);

                                        clearTimeout(timeoutId);

                                        if (error || !data?.success) {
                                            setDeleteError(data?.message || '刪除帳戶失敗，請稍後再試');
                                            setIsDeleting(false);
                                            return;
                                        }

                                        // 刪除成功，直接重新整理頁面以顯示恢復區域
                                        window.location.reload();
                                    } catch (err) {
                                        clearTimeout(timeoutId);
                                        console.error('Delete error:', err);
                                        setDeleteError('發生未預期的錯誤');
                                        setIsDeleting(false);
                                    }
                                }}
                                disabled={isDeleting}
                                className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 text-white font-medium rounded-xl transition-colors"
                            >
                                {isDeleting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        處理中...
                                    </>
                                ) : (
                                    '確認刪除'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
