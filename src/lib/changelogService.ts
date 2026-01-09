import { supabase } from './supabaseClient';

export interface Changelog {
    id: string;
    version: string;
    title: string;
    changes: any[];
    type: 'feature' | 'bugfix' | 'improvement';
    published_at: string | null;
    image_url?: string;
    created_at: string;
}

/**
 * 獲取所有 Changelog
 */
export async function fetchAllChangelogs(): Promise<{
    data: Changelog[] | null;
    error: any;
}> {
    try {
        const { data, error } = await supabase
            .from('changelogs')
            .select('*')
            .order('published_at', { ascending: false, nullsFirst: false })
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Failed to fetch changelogs:', error);
            return { data: null, error };
        }

        return { data: data as Changelog[], error: null };
    } catch (e) {
        console.error('Unexpected error fetching changelogs:', e);
        return { data: null, error: e };
    }
}

/**
 * 建立 Changelog
 */
export async function createChangelog(changelog: Omit<Changelog, 'id' | 'created_at'>): Promise<{
    data: Changelog | null;
    error: any;
}> {
    try {
        const { data, error } = await supabase
            .from('changelogs')
            .insert([changelog])
            .select()
            .single();

        if (error) {
            console.error('Failed to create changelog:', error);
            return { data: null, error };
        }

        return { data: data as Changelog, error: null };
    } catch (e) {
        console.error('Unexpected error creating changelog:', e);
        return { data: null, error: e };
    }
}

/**
 * 更新 Changelog
 */
export async function updateChangelog(id: string, updates: Partial<Changelog>): Promise<{
    data: Changelog | null;
    error: any;
}> {
    try {
        const { data, error } = await supabase
            .from('changelogs')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Failed to update changelog:', error);
            return { data: null, error };
        }

        return { data: data as Changelog, error: null };
    } catch (e) {
        console.error('Unexpected error updating changelog:', e);
        return { data: null, error: e };
    }
}

/**
 * 刪除 Changelog
 */
export async function deleteChangelog(id: string): Promise<{
    error: any;
}> {
    try {
        const { error } = await supabase
            .from('changelogs')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Failed to delete changelog:', error);
            return { error };
        }

        return { error: null };
    } catch (e) {
        console.error('Unexpected error deleting changelog:', e);
        return { error: e };
    }
}
