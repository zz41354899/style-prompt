'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { apiCache } from '@/lib/cache';

const CACHE_KEY = 'changelogs:recent';
const CACHE_TTL = 5 * 60 * 1000; // 5 分鐘

interface Changelog {
    id: string;
    version: string;
    title: string;
    changes: string[]; // JSONB array
    type: 'feature' | 'fix' | 'improvement';
    published_at: string;
    created_at: string;
}

/**
 * Hook 用於從 Supabase 讀取更新日誌（帶快取）
 */
export const useChangelogs = () => {
    const [changelogs, setChangelogs] = useState<Changelog[]>(() => {
        return apiCache.get<Changelog[]>(CACHE_KEY) || [];
    });
    const [loading, setLoading] = useState(() => !apiCache.get(CACHE_KEY));
    const [error, setError] = useState<string | null>(null);
    const mountedRef = useRef(true);

    const fetchChangelogs = useCallback(async (forceRefresh = false) => {
        if (!forceRefresh) {
            const cached = apiCache.get<Changelog[]>(CACHE_KEY);
            if (cached) {
                setChangelogs(cached);
                setLoading(false);
                return;
            }
        }

        try {
            setLoading(true);

            const { data, error: fetchError } = await supabase
                .from('changelogs')
                .select('*')
                .order('published_at', { ascending: false })
                .limit(10);

            if (fetchError) throw fetchError;
            if (!mountedRef.current) return;

            const result = data || [];
            apiCache.set(CACHE_KEY, result, CACHE_TTL);
            setChangelogs(result);
        } catch (err) {
            if (!mountedRef.current) return;
            console.error('Failed to fetch changelogs:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch changelogs');
        } finally {
            if (mountedRef.current) setLoading(false);
        }
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        fetchChangelogs();
        return () => { mountedRef.current = false; };
    }, [fetchChangelogs]);

    const refresh = useCallback(() => {
        apiCache.invalidate(CACHE_KEY);
        return fetchChangelogs(true);
    }, [fetchChangelogs]);

    return { changelogs, loading, error, refresh };
};
