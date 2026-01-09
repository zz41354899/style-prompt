'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { useTranslation } from 'react-i18next';
import {
    ProfileSection,
    DangerZoneSection,
    DeleteAccountModal,
} from '@/components/dashboard/settings';
import { useAccountStatusPolling } from '@/hooks/useAccountStatusPolling';

interface PendingDeletion {
    deleted_at: string;
    deletion_reason: string | null;
    can_recover_until: string;
    remaining_days: number;
}

export default function DashboardSettingsPage() {
    const { user, updateUserName, profileName } = useAuth();
    const { t } = useTranslation();
    
    // 使用統一的帳戶狀態輪詢 hook
    const { status: accountStatus } = useAccountStatusPolling(user?.id);

    // Profile state
    const initialName = profileName || user?.user_metadata?.display_name || user?.user_metadata?.name || '';
    const [displayName, setDisplayName] = useState(initialName);
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);

    // Delete account state
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
    const [confirmName, setConfirmName] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [pendingDeletion, setPendingDeletion] = useState<PendingDeletion | null>(null);
    const [isRestoring, setIsRestoring] = useState(false);
    const [restoreError, setRestoreError] = useState<string | null>(null);

    // 當 user 或 profileName 變化時更新 displayName
    useEffect(() => {
        const name = profileName || user?.user_metadata?.display_name || user?.user_metadata?.name || '';
        setDisplayName(name);
    }, [user, profileName]);

    // 根據帳戶狀態更新 pendingDeletion UI
    useEffect(() => {
        async function syncDeletionStatus() {
            if (!user?.id) return;

            if (accountStatus === 'pending_deletion') {
                const { getAccountDeletionStatus, calculateRemainingDays } = await import('@/lib/accountService');
                const { data, error } = await getAccountDeletionStatus(user.id);

                if (!error && data && data.can_recover_until) {
                    const remainingDays = calculateRemainingDays(data.can_recover_until);
                    setPendingDeletion({
                        deleted_at: data.deleted_at || '',
                        deletion_reason: data.deletion_reason,
                        can_recover_until: data.can_recover_until,
                        remaining_days: remainingDays,
                    });
                }
            } else if (accountStatus === 'active') {
                // 帳戶已被恢復（可能是 Admin 恢復的）
                setPendingDeletion(null);
            }
        }

        syncDeletionStatus();
    }, [user?.id, accountStatus]);

    const handleDisplayNameChange = useCallback((value: string) => {
        setDisplayName(value);
        setSaveError(null);
        setSaveSuccess(false);
    }, []);

    const handleSave = useCallback(async () => {
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
    }, [displayName, updateUserName]);

    const handleRestore = useCallback(async () => {
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

            setPendingDeletion(null);
            setIsRestoring(false);
        } catch (err) {
            console.error('Restore error:', err);
            setRestoreError('發生未預期的錯誤');
            setIsRestoring(false);
        }
    }, [user?.id]);

    const handleCloseDeleteModal = useCallback(() => {
        setShowDeleteModal(false);
        setDeleteReason('');
        setConfirmName('');
        setDeleteError(null);
    }, []);

    const handleConfirmDelete = useCallback(async () => {
        if (!user?.id) return;

        setIsDeleting(true);
        setDeleteError(null);

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

            const now = new Date();
            const canRecoverUntil = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();

            setPendingDeletion({
                deleted_at: now.toISOString(),
                deletion_reason: deleteReason || null,
                can_recover_until: canRecoverUntil,
                remaining_days: 30,
            });

            handleCloseDeleteModal();
            setIsDeleting(false);
        } catch (err) {
            clearTimeout(timeoutId);
            console.error('Delete error:', err);
            setDeleteError('發生未預期的錯誤');
            setIsDeleting(false);
        }
    }, [user?.id, deleteReason, handleCloseDeleteModal]);

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">{t('dashboard.settings.title')}</h1>
                <p className="text-white/50 mb-8">{t('dashboard.settings.subtitle')}</p>

                <ProfileSection
                    displayName={displayName}
                    onDisplayNameChange={handleDisplayNameChange}
                    email={user?.email || ''}
                    isSaving={isSaving}
                    saveSuccess={saveSuccess}
                    saveError={saveError}
                    onSave={handleSave}
                />

                <DangerZoneSection
                    pendingDeletion={pendingDeletion}
                    isRestoring={isRestoring}
                    restoreError={restoreError}
                    onRestore={handleRestore}
                    onShowDeleteModal={() => setShowDeleteModal(true)}
                />
            </div>

            <DeleteAccountModal
                isOpen={showDeleteModal}
                displayName={displayName}
                email={user?.email || ''}
                confirmName={confirmName}
                deleteReason={deleteReason}
                isDeleting={isDeleting}
                deleteError={deleteError}
                onClose={handleCloseDeleteModal}
                onConfirmNameChange={setConfirmName}
                onDeleteReasonChange={setDeleteReason}
                onConfirmDelete={handleConfirmDelete}
            />
        </div>
    );
}
