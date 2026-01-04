'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

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
 * Hook 用於從 Supabase 讀取更新日誌
 */
export const useChangelogs = () => {
    const [changelogs, setChangelogs] = useState<Changelog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchChangelogs = async () => {
            try {
                setLoading(true);

                const { data, error: fetchError } = await supabase
                    .from('changelogs')
                    .select('*')
                    .order('published_at', { ascending: false })
                    .limit(10); // 只取最新 10 筆

                if (fetchError) throw fetchError;

                setChangelogs(data || []);
            } catch (err) {
                console.error('Failed to fetch changelogs:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch changelogs');
            } finally {
                setLoading(false);
            }
        };

        fetchChangelogs();
    }, []);

    return { changelogs, loading, error };
};
