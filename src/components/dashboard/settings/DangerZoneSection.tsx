'use client';

import React from 'react';
import { Trash2, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PendingDeletion {
    deleted_at: string;
    deletion_reason: string | null;
    can_recover_until: string;
    remaining_days: number;
}

interface DangerZoneSectionProps {
    pendingDeletion: PendingDeletion | null;
    isRestoring: boolean;
    restoreError: string | null;
    onRestore: () => void;
    onShowDeleteModal: () => void;
}

export const DangerZoneSection: React.FC<DangerZoneSectionProps> = ({
    pendingDeletion,
    isRestoring,
    restoreError,
    onRestore,
    onShowDeleteModal,
}) => {
    const { t } = useTranslation();

    if (pendingDeletion) {
        return (
            <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <h2 className="font-bold text-orange-400">帳戶待刪除</h2>
                </div>

                <div className="space-y-4">
                    <p className="text-white/70 text-sm">
                        您的帳戶將在{' '}
                        <span className="text-orange-400 font-bold">
                            {pendingDeletion.remaining_days} 天
                        </span>{' '}
                        後被永久刪除。在此期間內，您可以隨時恢復帳戶。
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
                        onClick={onRestore}
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
        );
    }

    return (
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
                onClick={onShowDeleteModal}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium rounded-xl transition-colors"
            >
                {t('dashboard.settings.deleteAccount')}
            </button>
        </div>
    );
};
