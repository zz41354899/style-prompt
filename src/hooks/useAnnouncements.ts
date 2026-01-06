'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Announcement {
    id: string;
    title: string;
    content: string;
    type: 'event' | 'notice' | 'alert';
    start_at: string;
    end_at: string;
    is_active: boolean;
    created_at: string;
}

/**
 * Hook 用於從 Supabase 讀取公告
 */
export const useAnnouncements = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                setLoading(true);
                const now = new Date().toISOString();

                const { data, error: fetchError } = await supabase
                    .from('announcements')
                    .select('*')
                    .eq('is_active', true)
                    .lte('start_at', now)
                    .gte('end_at', now)
                    .order('created_at', { ascending: false });

                if (fetchError) throw fetchError;

                setAnnouncements(data || []);
            } catch (err) {
                console.error('Failed to fetch announcements:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch announcements');
            } finally {
                setLoading(false);
            }
        };

        fetchAnnouncements();
    }, []);

    return { announcements, loading, error };
};
