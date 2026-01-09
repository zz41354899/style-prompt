'use client';

import React from 'react';
import { User, Loader2, Check, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProfileSectionProps {
    displayName: string;
    onDisplayNameChange: (value: string) => void;
    email: string;
    isSaving: boolean;
    saveSuccess: boolean;
    saveError: string | null;
    onSave: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
    displayName,
    onDisplayNameChange,
    email,
    isSaving,
    saveSuccess,
    saveError,
    onSave,
}) => {
    const { t } = useTranslation();

    return (
        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                    <User className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="font-bold">{t('dashboard.settings.profile')}</h2>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-sm text-white/60 block mb-2">
                        {t('dashboard.settings.displayName')}
                    </label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => onDisplayNameChange(e.target.value)}
                        placeholder={email?.split('@')[0]}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                </div>

                <div>
                    <label className="text-sm text-white/60 block mb-2">
                        {t('dashboard.settings.email')}
                    </label>
                    <input
                        type="email"
                        value={email}
                        disabled
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 cursor-not-allowed"
                    />
                </div>

                {saveError && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{saveError}</span>
                    </div>
                )}

                {saveSuccess && (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                        <Check className="w-4 h-4" />
                        <span>儲存成功！</span>
                    </div>
                )}

                <button
                    onClick={onSave}
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
    );
};
