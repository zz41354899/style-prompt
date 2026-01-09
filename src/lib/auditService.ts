import { supabase } from './supabaseClient';

export interface AuditLog {
    id: string;
    user_id: string;
    action: string;
    details: any;
    created_at: string;
    user_email?: string;
    user_name?: string;
}

/**
 * 獲取所有審計日誌（僅 Admin）
 */
export async function fetchAllAuditLogs(): Promise<{
    data: AuditLog[] | null;
    error: any;
}> {
    try {
        const { data, error } = await supabase
            .from('audit_logs')
            .select(`
                id,
                user_id,
                action,
                details,
                created_at
            `)
            .order('created_at', { ascending: false })
            .limit(500);

        if (error) {
            console.error('Failed to fetch audit logs:', error);
            return { data: null, error };
        }

        // 獲取使用者資訊
        if (data && data.length > 0) {
            const userIds = [...new Set(data.map(log => log.user_id))];
            const { data: profiles } = await supabase
                .from('profiles')
                .select('id, email, display_name')
                .in('id', userIds);

            const profileMap = new Map(profiles?.map(p => [p.id, p]) || []);

            const enrichedData = data.map(log => ({
                ...log,
                user_email: profileMap.get(log.user_id)?.email,
                user_name: profileMap.get(log.user_id)?.display_name,
            }));

            return { data: enrichedData, error: null };
        }

        return { data: data as AuditLog[], error: null };
    } catch (e) {
        console.error('Unexpected error fetching audit logs:', e);
        return { data: null, error: e };
    }
}

/**
 * 獲取特定使用者的審計日誌
 */
export async function fetchUserAuditLogs(userId: string): Promise<{
    data: AuditLog[] | null;
    error: any;
}> {
    try {
        const { data, error } = await supabase
            .from('audit_logs')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(100);

        if (error) {
            console.error('Failed to fetch user audit logs:', error);
            return { data: null, error };
        }

        return { data: data as AuditLog[], error: null };
    } catch (e) {
        console.error('Unexpected error fetching user audit logs:', e);
        return { data: null, error: e };
    }
}
