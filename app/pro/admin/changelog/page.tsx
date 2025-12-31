'use client';

import React, { useState } from 'react';
import { mockChangelogs, type MockChangelog } from '@/lib/admin/mockData';
import {
    Plus,
    Sparkles,
    Bug,
    Zap,
    MoreVertical,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function AdminChangelogPage() {
    const [changelogs] = useState<MockChangelog[]>(mockChangelogs);
    const [expandedId, setExpandedId] = useState<string | null>(changelogs[0]?.id || null);

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Type config
    const getTypeConfig = (type: MockChangelog['type']) => {
        const configs = {
            feature: { icon: Sparkles, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', label: '新功能' },
            fix: { icon: Bug, color: 'bg-red-500/20 text-red-400 border-red-500/30', label: '修復' },
            improvement: { icon: Zap, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', label: '改進' }
        };
        return configs[type];
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Changelog</h1>
                    <p className="text-white/60 mt-1">管理版本更新紀錄</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors">
                    <Plus className="w-5 h-5" />
                    新增版本
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-purple-400 text-sm">新功能</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {changelogs.filter(c => c.type === 'feature').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 text-sm">修復</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {changelogs.filter(c => c.type === 'fix').length}
                    </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-blue-400 text-sm">改進</p>
                    <p className="text-2xl font-bold text-white mt-1">
                        {changelogs.filter(c => c.type === 'improvement').length}
                    </p>
                </div>
            </div>

            {/* Changelog List */}
            <div className="space-y-4">
                {changelogs.map((log) => {
                    const typeConfig = getTypeConfig(log.type);
                    const isExpanded = expandedId === log.id;

                    return (
                        <div
                            key={log.id}
                            className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                        >
                            {/* Header */}
                            <div
                                className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
                                onClick={() => setExpandedId(isExpanded ? null : log.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Version Badge */}
                                        <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-mono font-semibold text-sm">
                                            {log.version}
                                        </span>

                                        {/* Type Badge */}
                                        <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-xs ${typeConfig.color}`}>
                                            <typeConfig.icon className="w-3 h-3" />
                                            {typeConfig.label}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-white">
                                            {log.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="text-white/40 text-sm">
                                            {formatDate(log.publishedAt)}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); }}
                                            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                                        >
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                        {isExpanded ? (
                                            <ChevronUp className="w-5 h-5 text-white/40" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-white/40" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="px-6 pb-6 border-t border-white/10 pt-4">
                                    <h4 className="text-white/60 text-sm mb-3">更新內容：</h4>
                                    <ul className="space-y-2">
                                        {log.changes.map((change, index) => (
                                            <li key={index} className="flex items-start gap-2 text-white/80">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                {change}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
