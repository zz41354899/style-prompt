import { supabase } from '@/lib/supabaseClient';

export interface SoftDeleteResult {
    success: boolean;
    message: string;
    can_recover_until?: string;
}

export interface RestoreResult {
    success: boolean;
    message: string;
}

export interface DeletionStatus {
    deletion_status: 'active' | 'pending_deletion' | 'deleted';
    deleted_at: string | null;
    deletion_reason: string | null;
    can_recover_until: string | null;
}

/**
 * 軟刪除使用者帳戶
 * @param userId 使用者 ID
 * @param reason 刪除原因（選填）
 */
export async function softDeleteAccount(
    userId: string,
    reason?: string
): Promise<{ data: SoftDeleteResult | null; error: Error | null }> {
    try {
        const { data, error } = await supabase.rpc('soft_delete_account', {
            user_id_param: userId,
            reason_param: reason || null,
        });

        if (error) {
            console.error('Soft delete error:', error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error('Soft delete exception:', error);
        return { data: null, error: error as Error };
    }
}

/**
 * 恢復軟刪除的帳戶
 * @param userId 使用者 ID
 */
export async function restoreAccount(
    userId: string
): Promise<{ data: RestoreResult | null; error: Error | null }> {
    try {
        const { data, error } = await supabase.rpc('restore_account', {
            user_id_param: userId,
        });

        if (error) {
            console.error('Restore account error:', error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error('Restore account exception:', error);
        return { data: null, error: error as Error };
    }
}

/**
 * 永久刪除帳戶（僅管理員）
 * @param userId 使用者 ID
 */
export async function permanentlyDeleteAccount(
    userId: string
): Promise<{ data: SoftDeleteResult | null; error: Error | null }> {
    try {

        const { data, error } = await supabase.rpc('permanently_delete_account', {
            user_id_param: userId,
        });

        if (error) {
            console.error('Permanent delete error:', error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error('Permanent delete exception:', error);
        return { data: null, error: error as Error };
    }
}

/**
 * 取得帳戶刪除狀態
 * @param userId 使用者 ID
 */
export async function getAccountDeletionStatus(
    userId: string
): Promise<{ data: DeletionStatus | null; error: Error | null }> {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('deletion_status, deleted_at, deletion_reason, can_recover_until')
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Get deletion status error:', error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error('Get deletion status exception:', error);
        return { data: null, error: error as Error };
    }
}

/**
 * 取得所有待刪除的帳戶（管理員用）
 */
export async function getPendingDeletionAccounts(): Promise<{
    data: Array<{
        id: string;
        email: string;
        display_name: string | null;
        deleted_at: string;
        deletion_reason: string | null;
        can_recover_until: string;
    }> | null;
    error: Error | null;
}> {
    try {

        const { data, error } = await supabase
            .from('profiles')
            .select('id, email, display_name, deleted_at, deletion_reason, can_recover_until')
            .eq('deletion_status', 'pending_deletion')
            .order('deleted_at', { ascending: false });

        if (error) {
            console.error('Get pending deletions error:', error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (error) {
        console.error('Get pending deletions exception:', error);
        return { data: null, error: error as Error };
    }
}

/**
 * 計算剩餘恢復天數
 * @param canRecoverUntil 可恢復截止時間
 */
export function calculateRemainingDays(canRecoverUntil: string): number {
    const deadline = new Date(canRecoverUntil);
    const now = new Date();
    const diffTime = deadline.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
}
