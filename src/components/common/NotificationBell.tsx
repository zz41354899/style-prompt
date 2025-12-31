'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bell, X, Sparkles, Bug, Zap, PartyPopper, AlertTriangle, Megaphone } from 'lucide-react';
import { mockAnnouncements, mockChangelogs, type MockAnnouncement, type MockChangelog } from '@/lib/admin/mockData';

type TabType = 'announcements' | 'changelog';

export default function NotificationBell() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>('announcements');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const panelRef = useRef<HTMLDivElement>(null);

    // 從 localStorage 讀取通知設定
    useEffect(() => {
        const stored = localStorage.getItem('notificationsEnabled');
        if (stored !== null) {
            setNotificationsEnabled(stored === 'true');
        }
    }, []);

    // 取得目前有效的公告
    const activeAnnouncements = mockAnnouncements.filter(a => {
        const now = new Date();
        const start = new Date(a.startAt);
        const end = new Date(a.endAt);
        return a.isActive && now >= start && now <= end;
    });

    // 計算未讀數量（只在通知啟用時顯示）
    const unreadCount = notificationsEnabled ? activeAnnouncements.length + mockChangelogs.length : 0;

    // 點擊外部關閉
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return '今天';
        if (diffDays === 1) return '昨天';
        if (diffDays < 7) return `${diffDays} 天前`;

        return date.toLocaleDateString('zh-TW', {
            month: 'short',
            day: 'numeric'
        });
    };

    // Announcement type icon
    const getAnnouncementIcon = (type: MockAnnouncement['type']) => {
        const icons = {
            event: PartyPopper,
            notice: Megaphone,
            alert: AlertTriangle
        };
        return icons[type];
    };

    // Changelog type config
    const getChangelogConfig = (type: MockChangelog['type']) => {
        const configs = {
            feature: { icon: Sparkles, color: 'text-purple-400' },
            fix: { icon: Bug, color: 'text-red-400' },
            improvement: { icon: Zap, color: 'text-blue-400' }
        };
        return configs[type];
    };

    return (
        <div className="relative" ref={panelRef}>
            {/* Bell Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                )}
            </button>

            {/* Notification Panel */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-96 max-h-[480px] rounded-xl border border-white/10 bg-[#0f0f1a] shadow-2xl overflow-hidden z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <h3 className="text-lg font-semibold text-white">通知</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/60"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-white/10">
                        <button
                            onClick={() => setActiveTab('announcements')}
                            className={`flex-1 px-4 py-3 text-sm transition-colors ${activeTab === 'announcements'
                                ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/10'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            公告 ({activeAnnouncements.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('changelog')}
                            className={`flex-1 px-4 py-3 text-sm transition-colors ${activeTab === 'changelog'
                                ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/10'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            更新日誌 ({mockChangelogs.length})
                        </button>
                    </div>

                    {/* Content */}
                    <div className="overflow-y-auto max-h-[340px]">
                        {activeTab === 'announcements' ? (
                            // Announcements List
                            <div className="divide-y divide-white/5">
                                {activeAnnouncements.length === 0 ? (
                                    <div className="p-8 text-center text-white/40">
                                        目前沒有公告
                                    </div>
                                ) : (
                                    activeAnnouncements.map((announcement) => {
                                        const Icon = getAnnouncementIcon(announcement.type);
                                        return (
                                            <div
                                                key={announcement.id}
                                                className="p-4 hover:bg-white/5 transition-colors cursor-pointer"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${announcement.type === 'event'
                                                        ? 'bg-purple-500/20 text-purple-400'
                                                        : announcement.type === 'alert'
                                                            ? 'bg-orange-500/20 text-orange-400'
                                                            : 'bg-blue-500/20 text-blue-400'
                                                        }`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-white font-medium truncate">
                                                            {announcement.title}
                                                        </p>
                                                        <p className="text-white/60 text-sm mt-1 line-clamp-2">
                                                            {announcement.content}
                                                        </p>
                                                        <p className="text-white/40 text-xs mt-2">
                                                            {formatDate(announcement.createdAt)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        ) : (
                            // Changelog List
                            <div className="divide-y divide-white/5">
                                {mockChangelogs.map((log) => {
                                    const config = getChangelogConfig(log.type);
                                    return (
                                        <div
                                            key={log.id}
                                            className="p-4 hover:bg-white/5 transition-colors cursor-pointer"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 ${config.color}`}>
                                                    <config.icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="px-2 py-0.5 rounded bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs font-mono">
                                                            {log.version}
                                                        </span>
                                                        <span className="text-white/40 text-xs">
                                                            {formatDate(log.publishedAt)}
                                                        </span>
                                                    </div>
                                                    <p className="text-white font-medium mt-1">
                                                        {log.title}
                                                    </p>
                                                    <p className="text-white/60 text-sm mt-1">
                                                        {log.changes.length} 項更新
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
