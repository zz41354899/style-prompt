'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { apiCache } from '@/lib/cache';
import { RealtimeChannel } from '@supabase/supabase-js';

const CACHE_KEY = 'announcements:active';
const CACHE_TTL = 30 * 1000; // 30 秒（縮短快取時間，配合 Realtime）

interface Announcement {
    id: string;
    title: string;
    content: string;
    type: 'event' | 'notice' | 'alert';
    published_at: string;
    is_active: boolean;
    created_at: string;
    image_url?: string;
}

/**
 * Hook 用於從 Supabase 讀取公告（帶快取）
 */
export const useAnnouncements = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
        // 初始化時嘗試從快取讀取
        return apiCache.get<Announcement[]>(CACHE_KEY) || [];
    });
    const [loading, setLoading] = useState(() => !apiCache.get(CACHE_KEY));
    const [error, setError] = useState<string | null>(null);
    const mountedRef = useRef(true);

    const fetchAnnouncements = useCallback(async (forceRefresh = false) => {
        // 檢查快取
        if (!forceRefresh) {
            const cached = apiCache.get<Announcement[]>(CACHE_KEY);
            if (cached) {
                setAnnouncements(cached);
                setLoading(false);
                return;
            }
        }

        try {
            setLoading(true);

            const { data, error: fetchError } = await supabase
                .from('announcements')
                .select('*')
                .eq('is_active', true)
                .order('published_at', { ascending: false });

            if (fetchError) throw fetchError;
            if (!mountedRef.current) return;

            const result = data || [];
            apiCache.set(CACHE_KEY, result, CACHE_TTL);
            setAnnouncements(result);
        } catch (err) {
            if (!mountedRef.current) return;
            console.error('Failed to fetch announcements:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch announcements');
        } finally {
            if (mountedRef.current) setLoading(false);
        }
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        fetchAnnouncements();
        return () => { mountedRef.current = false; };
    }, [fetchAnnouncements]);

    // Realtime 訂閱：當公告變更時自動刷新
    const channelRef = useRef<RealtimeChannel | null>(null);

    useEffect(() => {
        const channel = supabase.channel('announcements-user', {
            config: { broadcast: { self: true } },
        });

        channel.on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'announcements',
            },
            (payload) => {
                console.log('[Realtime] 公告已更新:', payload.eventType);
                // 清除快取並重新取得資料
                apiCache.invalidate(CACHE_KEY);
                if (mountedRef.current) {
                    fetchAnnouncements(true);
                }
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
    }, [fetchAnnouncements]);

    const refresh = useCallback(() => {
        apiCache.invalidate(CACHE_KEY);
        return fetchAnnouncements(true);
    }, [fetchAnnouncements]);

    return { announcements, loading, error, refresh };
};
