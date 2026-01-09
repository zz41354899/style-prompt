'use client';

import React, { useState } from 'react';
import { useAnnouncements } from '@/hooks/useAnnouncements';
import { useChangelogs } from '@/hooks/useChangelogs';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

type TabType = 'all' | 'changelog' | 'announcements';
type NotificationItem = {
    id: string;
    type: 'changelog' | 'announcement';
    title: string;
    date: string;
    content?: string;
    image_url?: string;
    version?: string;
};

export default function AnnouncementsPage() {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState<TabType>('all');

    const { announcements, loading: announcementsLoading } = useAnnouncements();
    const { changelogs, loading: changelogsLoading } = useChangelogs();

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(i18n.language === 'zh-TW' ? 'zh-TW' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get type label
    const getTypeLabel = (type: 'changelog' | 'announcement') => {
        return type === 'changelog' ? t('notification.changelog') : t('notification.announcements');
    };

    // Merge and sort all notifications
    const allNotifications: NotificationItem[] = [
        ...changelogs.map(log => ({
            id: log.id,
            type: 'changelog' as const,
            title: log.title,
            date: log.published_at,
            content: Array.isArray(log.changes) ? log.changes.join('\n') : '',
            image_url: (log as any).image_url,
            version: log.version
        })),
        ...announcements.map(ann => ({
            id: ann.id,
            type: 'announcement' as const,
            title: ann.title,
            date: ann.published_at || ann.created_at,
            content: ann.content,
            image_url: ann.image_url
        }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter notifications based on active tab
    const filteredNotifications = activeTab === 'all' 
        ? allNotifications
        : allNotifications.filter(item => 
            activeTab === 'changelog' ? item.type === 'changelog' : item.type === 'announcement'
        );

    return (
        <div className="min-h-full p-8">
            {/* Header - Centered */}
            <div className="text-center pt-4 pb-6">
                <h1 className="text-2xl font-semibold text-white mb-6">
                    {t('dashboard.announcements.title')}
                </h1>

                {/* Tabs - Centered */}
                <div className="inline-flex gap-2 bg-white/5 p-1 rounded-lg">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'all'
                                ? 'bg-white/10 text-white'
                                : 'text-white/50 hover:text-white'
                        }`}
                    >
                        {t('notification.all')}
                    </button>
                    <button
                        onClick={() => setActiveTab('changelog')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'changelog'
                                ? 'bg-white/10 text-white'
                                : 'text-white/50 hover:text-white'
                        }`}
                    >
                        {t('notification.changelog')}
                    </button>
                    <button
                        onClick={() => setActiveTab('announcements')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'announcements'
                                ? 'bg-white/10 text-white'
                                : 'text-white/50 hover:text-white'
                        }`}
                    >
                        {t('notification.announcements')}
                    </button>
                </div>
            </div>

            {/* Content - Vertical List */}
            <div className="max-w-4xl mx-auto pb-12">
                {filteredNotifications.length === 0 ? (
                    <div className="py-20 text-center text-white/40">
                        {t('notification.noNotifications')}
                    </div>
                ) : (
                    <div className="divide-y divide-white/10">
                        {filteredNotifications.map((item) => (
                            <div key={item.id} className="py-8">
                                {/* Left: Type & Date | Right: Image & Content */}
                                <div className="flex gap-8">
                                    {/* Left Column - Type & Date */}
                                    <div className="w-32 flex-shrink-0">
                                        <div className="text-white/60 text-sm font-medium">
                                            {getTypeLabel(item.type)}
                                        </div>
                                        <div className="text-white/40 text-sm mt-1">
                                            {formatDate(item.date)}
                                        </div>
                                    </div>

                                    {/* Right Column - Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Image */}
                                        {item.image_url && (
                                            <div className="mb-4 rounded-lg overflow-hidden border border-white/10 bg-black/30">
                                                <Image
                                                    src={item.image_url}
                                                    alt={item.title}
                                                    width={800}
                                                    height={400}
                                                    className="w-full h-auto"
                                                    unoptimized
                                                />
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-white mb-2">
                                            {item.title}
                                        </h3>

                                        {/* Content */}
                                        {item.content && (
                                            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap line-clamp-3">
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
