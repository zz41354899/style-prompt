'use client';

import React, { useState } from 'react';
import { mockAnnouncements, type MockAnnouncement } from '@/lib/admin/mockData';
import {
    Plus,
    Calendar,
    Bell,
    AlertTriangle,
    PartyPopper,
    MoreVertical,
    Check,
    X,
    Clock
} from 'lucide-react';

export default function AdminAnnouncementsPage() {
    const [announcements] = useState<MockAnnouncement[]>(mockAnnouncements);

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Type badge
    const TypeBadge: React.FC<{ type: MockAnnouncement['type'] }> = ({ type }) => {
        const configs = {
            event: { icon: PartyPopper, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', label: '活動' },
            notice: { icon: Bell, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', label: '公告' },
            alert: { icon: AlertTriangle, color: 'bg-orange-500/20 text-orange-400 border-orange-500/30', label: '警告' }
        };
        const { icon: Icon, color, label } = configs[type];

        return (
            <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-xs ${color}`}>
                <Icon className="w-3 h-3" />
                {label}
            </span>
        );
    };

    // Check if announcement is currently active (based on date)
    const isCurrentlyActive = (announcement: MockAnnouncement) => {
        const now = new Date();
        const start = new Date(announcement.startAt);
        const end = new Date(announcement.endAt);
        return announcement.isActive && now >= start && now <= end;
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">公告管理</h1>
                    <p className="text-white/60 mt-1">管理活動公告與系統通知</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors">
                    <Plus className="w-5 h-5" />
                    新增公告
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-green-400 text-sm">進行中</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {announcements.filter(a => isCurrentlyActive(a)).length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-blue-400 text-sm">已排程</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {announcements.filter(a => a.isActive && new Date(a.startAt) > new Date()).length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm">已結束</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {announcements.filter(a => !a.isActive || new Date(a.endAt) < new Date()).length}
                    </p>
                </div>
            </div>

            {/* Announcements List */}
            <div className="space-y-4">
                {announcements.map((announcement) => {
                    const active = isCurrentlyActive(announcement);

                    return (
                        <div
                            key={announcement.id}
                            className={`p-6 rounded-xl border transition-all ${active
                                ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30'
                                : 'bg-white/5 border-white/10'
                                }`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <TypeBadge type={announcement.type} />
                                        {active ? (
                                            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs">
                                                <Check className="w-3 h-3" />
                                                進行中
                                            </span>
                                        ) : announcement.isActive ? (
                                            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs">
                                                <Clock className="w-3 h-3" />
                                                已排程
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-white/40 text-xs">
                                                <X className="w-3 h-3" />
                                                已停用
                                            </span>
                                        )}
                                    </div>

                                    {/* Title & Content */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {announcement.title}
                                    </h3>
                                    <p className="text-white/60 mb-4">
                                        {announcement.content}
                                    </p>

                                    {/* Dates */}
                                    <div className="flex items-center gap-6 text-sm">
                                        <div className="flex items-center gap-2 text-white/40">
                                            <Calendar className="w-4 h-4" />
                                            <span>開始：{formatDate(announcement.startAt)}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/40">
                                            <Calendar className="w-4 h-4" />
                                            <span>結束：{formatDate(announcement.endAt)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
