'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { User, Languages, Trash2, Loader2 } from 'lucide-react';

export default function DashboardSettingsPage() {
    const { user } = useAuth();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const [displayName, setDisplayName] = useState(user?.user_metadata?.display_name || '');
    const [isSaving, setIsSaving] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const toggleLanguage = () => {
        const newLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(newLang);
    };

    const handleSave = async () => {
        setIsSaving(true);
        // TODO: 實作保存邏輯
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
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
                                onChange={(e) => setDisplayName(e.target.value)}
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

                {/* Language Section */}
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Languages className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="font-bold">{t('common.language')}</h2>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => i18n.changeLanguage('zh-TW')}
                            className={`flex-1 px-4 py-3 rounded-xl border transition-all ${currentLang === 'zh-TW'
                                ? 'bg-purple-500/20 border-purple-500/30 text-purple-300'
                                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                                }`}
                        >
                            繁體中文
                        </button>
                        <button
                            onClick={() => i18n.changeLanguage('en')}
                            className={`flex-1 px-4 py-3 rounded-xl border transition-all ${currentLang === 'en'
                                ? 'bg-purple-500/20 border-purple-500/30 text-purple-300'
                                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                                }`}
                        >
                            English
                        </button>
                    </div>
                </div>

                {/* Danger Zone */}
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

                    {!showDeleteConfirm ? (
                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium rounded-xl transition-colors"
                        >
                            {t('dashboard.settings.deleteAccount')}
                        </button>
                    ) : (
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors"
                            >
                                {t('auth.back')}
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-xl transition-colors"
                            >
                                {t('dashboard.settings.deleteAccount')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
