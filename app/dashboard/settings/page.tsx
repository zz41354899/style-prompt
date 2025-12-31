'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Bell, Trash2, LogOut, AlertTriangle, X, Pencil, Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardSettingsPage() {
    const { user, signOut, updateUserName } = useAuth();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    // 編輯用戶名稱
    const [displayName, setDisplayName] = useState('');
    const [isEditingName, setIsEditingName] = useState(false);
    const [nameLoading, setNameLoading] = useState(false);

    // 從 localStorage 讀取通知設定
    useEffect(() => {
        const stored = localStorage.getItem('notificationsEnabled');
        if (stored !== null) {
            setNotificationsEnabled(stored === 'true');
        }
    }, []);

    // 儲存通知設定到 localStorage
    const handleToggleNotifications = () => {
        const newValue = !notificationsEnabled;
        setNotificationsEnabled(newValue);
        localStorage.setItem('notificationsEnabled', String(newValue));
    };

    useEffect(() => {
        if (user) {
            setDisplayName(user.user_metadata?.name || user.email?.split('@')[0] || '');
        }
    }, [user]);

    const handleSignOut = async () => {
        await signOut();
        window.location.href = '/pro';
    };

    const handleDeleteAccount = async () => {
        setDeleteLoading(true);
        try {
            // TODO: 串接後台刪除帳號 API
            // await fetch('/api/account/delete', { method: 'DELETE' });
            console.log('Delete account requested for:', user?.email);
            alert('刪除帳號功能即將推出，請聯繫客服處理。');
        } catch (error) {
            console.error('Delete account error:', error);
        } finally {
            setDeleteLoading(false);
            setShowDeleteModal(false);
        }
    };

    const handleSaveName = async () => {
        if (!displayName.trim()) return;

        setNameLoading(true);
        try {
            const { error } = await updateUserName(displayName.trim());
            if (error) {
                console.error('Update name error:', error);
                alert('更新失敗：' + error.message);
            } else {
                setIsEditingName(false);
            }
        } catch (error) {
            console.error('Update name error:', error);
        } finally {
            setNameLoading(false);
        }
    };

    return (
        <>
            <div className="p-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-2">設定</h1>
                    <p className="text-white/50 mb-8">管理您的帳戶設定</p>

                    {/* Profile Section */}
                    <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <User className="w-5 h-5 text-white/40" />
                            <h2 className="font-semibold">個人資料</h2>
                        </div>
                        <div className="space-y-4">
                            {/* 用戶 ID / 名稱 - 可編輯 */}
                            <div>
                                <label className="text-xs text-white/40 uppercase tracking-wider">用戶 ID</label>
                                <div className="mt-1 flex items-center gap-2">
                                    {isEditingName ? (
                                        <>
                                            <input
                                                type="text"
                                                value={displayName}
                                                onChange={(e) => setDisplayName(e.target.value)}
                                                className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                                                placeholder="輸入用戶 ID"
                                            />
                                            <button
                                                onClick={handleSaveName}
                                                disabled={nameLoading}
                                                className="p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all disabled:opacity-50"
                                            >
                                                <Check className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsEditingName(false);
                                                    setDisplayName(user?.user_metadata?.name || user?.email?.split('@')[0] || '');
                                                }}
                                                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex-1 p-3 bg-white/5 rounded-lg text-white/80">
                                                {displayName || '未設定'}
                                            </div>
                                            <button
                                                onClick={() => setIsEditingName(true)}
                                                className="p-3 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg transition-all"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Email - 唯讀 */}
                            <div>
                                <label className="text-xs text-white/40 uppercase tracking-wider">電子郵件（無法修改）</label>
                                <div className="mt-1 p-3 bg-white/5 rounded-lg text-white/50">
                                    {user?.email || 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Bell className="w-5 h-5 text-white/40" />
                            <h2 className="font-semibold">通知</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium">產品更新</div>
                                <div className="text-sm text-white/40">接收新功能和更新通知</div>
                            </div>
                            <button
                                onClick={handleToggleNotifications}
                                className={`w-12 h-6 rounded-full transition-all ${notificationsEnabled ? 'bg-purple-600' : 'bg-white/20'
                                    }`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                                    }`} />
                            </button>
                        </div>
                    </div>

                    {/* Danger Zone - Delete Account */}
                    <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Trash2 className="w-5 h-5 text-red-400" />
                            <h2 className="font-semibold text-red-400">危險區域</h2>
                        </div>
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="w-full p-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-left transition-all"
                        >
                            <div className="font-medium text-red-400">刪除帳號</div>
                            <div className="text-sm text-red-400/60">永久刪除您的帳號和所有資料</div>
                        </button>
                    </div>

                    {/* Sign Out */}
                    <button
                        onClick={handleSignOut}
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        登出
                    </button>
                </div>
            </div>

            {/* Delete Account Modal */}
            <AnimatePresence>
                {showDeleteModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setShowDeleteModal(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 text-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl mb-4">
                                    <AlertTriangle className="w-8 h-8 text-red-400" />
                                </div>

                                <h2 className="text-xl font-bold mb-2 text-red-400">刪除帳號</h2>
                                <p className="text-white/50 text-sm mb-6">
                                    確定要永久刪除您的帳號嗎？<br />
                                    此操作無法復原，所有資料將被永久刪除。
                                </p>

                                <div className="text-sm text-white/30 mb-6 p-3 bg-white/5 rounded-lg">
                                    即將刪除：<span className="text-white/60">{user?.email}</span>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShowDeleteModal(false)}
                                        className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
                                    >
                                        取消
                                    </button>
                                    <button
                                        onClick={handleDeleteAccount}
                                        disabled={deleteLoading}
                                        className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
                                    >
                                        {deleteLoading ? '處理中...' : '確認刪除'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
