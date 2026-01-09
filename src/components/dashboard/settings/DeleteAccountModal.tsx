'use client';

import React from 'react';
import { X, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DeleteAccountModalProps {
    isOpen: boolean;
    displayName: string;
    email: string;
    confirmName: string;
    deleteReason: string;
    isDeleting: boolean;
    deleteError: string | null;
    onClose: () => void;
    onConfirmNameChange: (value: string) => void;
    onDeleteReasonChange: (value: string) => void;
    onConfirmDelete: () => void;
}

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
    isOpen,
    displayName,
    email,
    confirmName,
    deleteReason,
    isDeleting,
    deleteError,
    onClose,
    onConfirmNameChange,
    onDeleteReasonChange,
    onConfirmDelete,
}) => {
    const { t } = useTranslation();
    const expectedName = displayName || email;
    const isNameMatched = confirmName === expectedName;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <h2 className="text-lg font-bold text-red-400">
                        {t('dashboard.settings.deleteModal.title')}
                    </h2>
                    <button
                        onClick={onClose}
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
                                <p className="font-medium mb-1">
                                    {t('dashboard.settings.deleteModal.softDeleteTitle')}
                                </p>
                                <p>{t('dashboard.settings.deleteModal.softDeleteDesc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* 確認輸入顯示名稱 */}
                    <div>
                        <label className="text-sm text-white/60 block mb-2">
                            {t('dashboard.settings.deleteModal.confirmLabel')}
                            <button
                                type="button"
                                onClick={() => onConfirmNameChange(expectedName)}
                                className="text-purple-400 font-medium ml-1 hover:text-purple-300 hover:underline transition-colors cursor-pointer"
                            >
                                {expectedName}
                            </button>
                            <span className="text-white/40 ml-1">
                                {t('dashboard.settings.deleteModal.confirmLabelSuffix')}
                            </span>
                        </label>
                        <input
                            type="text"
                            value={confirmName}
                            onChange={(e) => onConfirmNameChange(e.target.value)}
                            placeholder={expectedName}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                                confirmName && isNameMatched
                                    ? 'border-green-500/50 focus:border-green-500'
                                    : 'border-white/10 focus:border-purple-500/50'
                            }`}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white/60 block mb-2">
                            {t('dashboard.settings.deleteModal.reasonLabel')}
                        </label>
                        <textarea
                            value={deleteReason}
                            onChange={(e) => onDeleteReasonChange(e.target.value)}
                            placeholder={t('dashboard.settings.deleteModal.reasonPlaceholder')}
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
                        onClick={onClose}
                        disabled={isDeleting}
                        className="px-4 py-2 text-white/70 hover:text-white transition-colors disabled:opacity-50"
                    >
                        {t('dashboard.settings.deleteModal.cancel')}
                    </button>
                    <button
                        onClick={onConfirmDelete}
                        disabled={isDeleting || !isNameMatched}
                        className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
                    >
                        {isDeleting ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {t('dashboard.settings.deleteModal.processing')}
                            </>
                        ) : (
                            t('dashboard.settings.deleteModal.confirmDelete')
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
