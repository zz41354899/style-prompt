import { supabase } from './supabaseClient';

export interface Purchase {
    id: string;
    user_id: string;
    gumroad_sale_id: string;
    gumroad_email?: string;
    gumroad_license_key?: string;
    product_type: string;
    amount: number;
    currency: string;
    status: string;
    created_at: string;
    completed_at?: string;
    notes?: string;
}

/**
 * 獲取使用者的購買記錄
 */
export async function fetchUserPurchases(userId: string): Promise<{
    data: Purchase[] | null;
    error: any;
}> {
    try {
        const { data, error } = await supabase
            .from('purchases')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Failed to fetch user purchases:', error);
            return { data: null, error };
        }

        return { data: data as Purchase[], error: null };
    } catch (e) {
        console.error('Unexpected error fetching purchases:', e);
        return { data: null, error: e };
    }
}
