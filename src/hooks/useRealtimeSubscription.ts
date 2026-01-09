'use client';

import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { adminQueryKeys } from './useAdminData';
import { RealtimeChannel } from '@supabase/supabase-js';

type TableName = 'announcements' | 'changelogs';

/**
 * 訂閱 Supabase Realtime 變更，自動刷新 TanStack Query 快取
 * @param tables 要訂閱的資料表名稱陣列
 */
export function useRealtimeSubscription(tables: TableName[] = ['announcements', 'changelogs']) {
    const queryClient = useQueryClient();
    const channelRef = useRef<RealtimeChannel | null>(null);

    useEffect(() => {
        // 建立 Realtime channel
        const channel = supabase.channel('admin-realtime', {
            config: {
                broadcast: { self: true },
            },
        });

        // 為每個表設置訂閱
        tables.forEach((table) => {
            channel.on(
                'postgres_changes',
                {
                    event: '*', // 監聽所有事件 (INSERT, UPDATE, DELETE)
                    schema: 'public',
                    table,
                },
                (payload) => {
                    console.log(`[Realtime] ${table} 變更:`, payload.eventType);

                    // 根據表名刷新對應的 query
                    if (table === 'announcements') {
                        queryClient.invalidateQueries({ queryKey: adminQueryKeys.announcements() });
                        queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
                    } else if (table === 'changelogs') {
                        queryClient.invalidateQueries({ queryKey: adminQueryKeys.changelogs() });
                        queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
                    }
                }
            );
        });

        // 訂閱 channel
        channel.subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('[Realtime] 已連接，正在監聽:', tables.join(', '));
            } else if (status === 'CHANNEL_ERROR') {
                console.error('[Realtime] 連接錯誤');
            }
        });

        channelRef.current = channel;

        // 清理函數
        return () => {
            if (channelRef.current) {
                console.log('[Realtime] 取消訂閱');
                supabase.removeChannel(channelRef.current);
                channelRef.current = null;
            }
        };
    }, [queryClient, tables]);
}

/**
 * 用於用戶端的公告即時訂閱 hook
 * 當公告變更時自動刷新快取
 */
export function useAnnouncementsRealtime(onUpdate?: () => void) {
    const channelRef = useRef<RealtimeChannel | null>(null);

    useEffect(() => {
        const channel = supabase.channel('announcements-client', {
            config: {
                broadcast: { self: true },
            },
        });

        channel.on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'announcements',
            },
            (payload) => {
                console.log('[Realtime] 公告更新:', payload.eventType);
                onUpdate?.();
            }
        );

        channel.subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('[Realtime] 公告訂閱已連接');
            }
        });

        channelRef.current = channel;

        return () => {
            if (channelRef.current) {
                supabase.removeChannel(channelRef.current);
                channelRef.current = null;
            }
        };
    }, [onUpdate]);
}
