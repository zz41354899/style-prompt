import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';

export type AccountStatus = 'active' | 'suspended' | 'pending_deletion' | 'deleted';

interface AccountStatusResult {
    status: AccountStatus;
    isChecking: boolean;
    lastChecked: Date | null;
    checkNow: () => Promise<void>;
}

/**
 * 帳戶狀態輪詢 Hook
 * 每隔指定時間檢查帳戶狀態，用於即時偵測 Admin 的操作
 * 預設 3 秒輪詢一次，確保即時性
 */
export function useAccountStatusPolling(
    userId: string | undefined,
    intervalMs: number = 3000
): AccountStatusResult {
    const [status, setStatus] = useState<AccountStatus>('active');
    const [isChecking, setIsChecking] = useState(false);
    const [lastChecked, setLastChecked] = useState<Date | null>(null);

    const checkAccountStatus = useCallback(async () => {
        if (!userId) return;
        
        setIsChecking(true);
        try {
            const { data: profile } = await supabase
                .from('profiles')
                .select('status, deletion_status')
                .eq('id', userId)
                .single();

            if (profile) {
                // 合併 status 和 deletion_status，優先使用 deletion_status
                const effectiveStatus: AccountStatus = 
                    profile.deletion_status === 'pending_deletion' || profile.deletion_status === 'deleted'
                        ? profile.deletion_status as AccountStatus
                        : (profile.status || 'active') as AccountStatus;
                
                setStatus(effectiveStatus);
            }
            setLastChecked(new Date());
        } catch (error) {
            console.error('Check account status error:', error);
        } finally {
            setIsChecking(false);
        }
    }, [userId]);

    // 初始檢查 + 定時輪詢
    useEffect(() => {
        if (!userId) return;

        // 初始檢查
        checkAccountStatus();

        // 設定定時輪詢
        const interval = setInterval(checkAccountStatus, intervalMs);

        return () => clearInterval(interval);
    }, [userId, intervalMs, checkAccountStatus]);

    return {
        status,
        isChecking,
        lastChecked,
        checkNow: checkAccountStatus,
    };
}
