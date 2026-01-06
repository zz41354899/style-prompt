import { supabase } from '@/lib/supabaseClient';
import { Purchase } from '@/lib/purchaseService';

// ============================================
// Admin Service - 管理後台 API 服務
// ============================================

// 型別定義
export interface AdminUser {
    id: string;
    email: string;
    display_name: string;
    avatar_url?: string;
    status: 'active' | 'suspended' | 'deleted';
    created_at: string;
    updated_at: string;
    app_metadata?: {
        role?: string;
    };
}

export interface AdminSubscription {
    id: string;
    user_id: string;
    stripe_subscription_id?: string;
    plan: 'free' | 'pro_monthly' | 'pro_yearly' | 'lifetime';
    status: 'active' | 'canceled' | 'past_due' | 'expired';
    amount: number;
    currency: string;
    current_period_start?: string;
    current_period_end?: string;
    cancel_at_period_end: boolean;
    created_at: string;
    profiles?: {
        email: string;
        display_name: string;
    };
}

export interface AdminAnalytics {
    totalUsers: number;
    proUsers: number;
    freeUsers: number;
    conversionRate: number;
    totalRevenue: number;
    monthlyRevenue: number;
    dau: number;
}

// ============================================
// API 函數
// ============================================

/**
 * 取得所有使用者（需要 Admin 權限）
 */
export const fetchUsers = async (): Promise<{ data: AdminUser[] | null; error: Error | null }> => {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Failed to fetch users:', error);
            return { data: null, error: new Error(error.message) };
        }

        return { data: data as AdminUser[], error: null };
    } catch (e) {
        return { data: null, error: e as Error };
    }
};

/**
 * 取得所有訂閱（買斷制不需要，回傳空陣列）
 */
export const fetchSubscriptions = async (): Promise<{ data: AdminSubscription[] | null; error: Error | null }> => {
    // 買斷制不需要訂閱表，回傳空陣列
    return { data: [], error: null };
};

/**
 * 取得統計資料（需要 Admin 權限）
 */
export const fetchAnalytics = async (): Promise<{ data: AdminAnalytics | null; error: Error | null }> => {
    try {
        // 取得使用者數量
        const { count: totalUsers, error: usersError } = await supabase
            .from('profiles')
            .select('*', { count: 'exact', head: true });

        if (usersError) throw usersError;

        // 取得 Pro 訂閱數量
        const { count: proUsers, error: subError } = await supabase
            .from('subscriptions')
            .select('*', { count: 'exact', head: true })
            .neq('plan', 'free')
            .eq('status', 'active');

        if (subError) throw subError;

        const total = totalUsers || 0;
        const pro = proUsers || 0;
        const free = total - pro;
        const conversionRate = total > 0 ? Math.round((pro / total) * 100 * 10) / 10 : 0;

        // TODO: 實作更完整的收入計算
        const analytics: AdminAnalytics = {
            totalUsers: total,
            proUsers: pro,
            freeUsers: free,
            conversionRate,
            totalRevenue: 0,      // 需要從 purchases 計算
            monthlyRevenue: 0,    // 需要從 subscriptions 計算
            dau: 0,               // 需要從 activity logs 計算
        };

        return { data: analytics, error: null };
    } catch (e) {
        return { data: null, error: e as Error };
    }
};

export const updateUserStatus = async (
    userId: string,
    status: 'active' | 'suspended' | 'deleted'
): Promise<{ error: Error | null }> => {
    try {
        const { error } = await supabase
            .from('profiles')
            .update({ status })
            .eq('id', userId);

        if (error) {
            return { error: new Error(error.message) };
        }

        return { error: null };
    } catch (e) {
        return { error: e as Error };
    }
};

/**
 * 真正刪除使用者 (從 Supabase Auth 移除)
 * 需要使用 Admin API
 */
export const deleteUser = async (
    userId: string
): Promise<{ error: Error | null }> => {
    try {
        // 這需要在後端 API route 執行,因為需要 service role key
        // 前端無法直接刪除 Auth 使用者
        const response = await fetch('/api/admin/delete-user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });

        const result = await response.json();

        if (!response.ok || result.error) {
            return { error: new Error(result.error || 'Failed to delete user') };
        }

        return { error: null };
    } catch (e) {
        return { error: e as Error };
    }
};

// ============================================
// Contact Submissions 聯絡表單管理
// ============================================

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: 'pending' | 'replied' | 'archived';
    created_at: string;
}

/**
 * 取得所有聯絡表單提交
 */
export const fetchContactSubmissions = async (): Promise<{
    data: ContactSubmission[] | null;
    error: Error | null;
}> => {
    try {
        const { data, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Failed to fetch contact submissions:', error);
            return { data: null, error: new Error(error.message) };
        }

        return { data: data as ContactSubmission[], error: null };
    } catch (e) {
        return { data: null, error: e as Error };
    }
};

/**
 * 更新聯絡表單狀態
 */
export const updateContactStatus = async (
    id: string,
    status: 'pending' | 'replied' | 'archived'
): Promise<{ success: boolean; error?: string }> => {
    try {
        const { error } = await supabase
            .from('contact_submissions')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.error('Failed to update contact status:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (e) {
        return { success: false, error: (e as Error).message };
    }
};

/**
 * 統計聯絡表單數據 (for Analytics)
 */
export const fetchContactStats = async (): Promise<{
    pending: number;
    total: number;
}> => {
    try {
        // 統計待處理
        const { count: pending } = await supabase
            .from('contact_submissions')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'pending');

        // 統計總數
        const { count: total } = await supabase
            .from('contact_submissions')
            .select('*', { count: 'exact', head: true });

        return {
            pending: pending || 0,
            total: total || 0
        };
    } catch (e) {
        console.error('Failed to fetch contact stats:', e);
        return { pending: 0, total: 0 };
    }
};

// ============================================
// 五大模組統計函數
// ============================================

/**
 * 統計購買記錄 (Purchases)
 */
export const fetchPurchaseStats = async (): Promise<{
    total: number;
    thisMonth: number;
    monthlyRevenue: number;
}> => {
    try {
        // 總購買數
        const { count: total, error: totalError } = await supabase
            .from('purchases')
            .select('*', { count: 'exact', head: true });

        if (totalError) {
            console.error('Error fetching total purchases:', totalError);
        }

        // 本月開始時間
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

        // 本月購買數
        const { count: thisMonth, error: monthError } = await supabase
            .from('purchases')
            .select('*', { count: 'exact', head: true })
            .gte('created_at', startOfMonth);

        if (monthError) {
            console.error('Error fetching month purchases:', monthError);
        }

        // 本月收入
        const { data: monthlyData, error: revenueError } = await supabase
            .from('purchases')
            .select('amount')
            .gte('created_at', startOfMonth)
            .eq('status', 'completed');  // 改為 completed

        if (revenueError) {
            console.error('Error fetching revenue:', revenueError);
        }

        const monthlyRevenue = monthlyData?.reduce((sum, p) => sum + (p.amount || 0), 0) || 0;

        return {
            total: total || 0,
            thisMonth: thisMonth || 0,
            monthlyRevenue
        };
    } catch (e) {
        console.error('Failed to fetch purchase stats:', e);
        return { total: 0, thisMonth: 0, monthlyRevenue: 0 };
    }
};

/**
 * 統計公告 (Announcements)
 */
export const fetchAnnouncementStats = async (): Promise<{
    active: number;
    draft: number;
    total: number;
}> => {
    try {
        // 活躍公告
        const { count: active } = await supabase
            .from('announcements')
            .select('*', { count: 'exact', head: true })
            .eq('is_active', true);

        // 草稿公告
        const { count: draft } = await supabase
            .from('announcements')
            .select('*', { count: 'exact', head: true })
            .eq('is_active', false);

        const total = (active || 0) + (draft || 0);

        return { active: active || 0, draft: draft || 0, total };
    } catch (e) {
        console.error('Failed to fetch announcement stats:', e);
        return { active: 0, draft: 0, total: 0 };
    }
};

/**
 * 統計 Changelog
 */
export const fetchChangelogStats = async (): Promise<{
    total: number;
    latestVersion: string;
}> => {
    try {
        // 總版本數
        const { count: total, error: countError } = await supabase
            .from('changelogs')
            .select('*', { count: 'exact', head: true });

        if (countError) {
            console.error('Error fetching changelog count:', countError);
        }

        // 最新版本
        const { data: latest, error: versionError } = await supabase
            .from('changelogs')
            .select('version')
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle();  // 使用 maybeSingle 避免錯誤

        if (versionError) {
            console.error('Error fetching latest version:', versionError);
        }

        return {
            total: total || 0,
            latestVersion: latest?.version || 'N/A'
        };
    } catch (e) {
        console.error('Failed to fetch changelog stats:', e);
        return { total: 0, latestVersion: 'N/A' };
    }
};

/**
 * 取得所有購買記錄 (Admin only)
 */
export const fetchAllPurchases = async (): Promise<{
    data: Purchase[] | null;
    error: Error | null;
}> => {
    try {
        const { data, error } = await supabase
            .from('purchases')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Failed to fetch all purchases:', error);
            return { data: null, error: new Error(error.message) };
        }

        return { data, error: null };
    } catch (e) {
        return { data: null, error: e as Error };
    }
};
