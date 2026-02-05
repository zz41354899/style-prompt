'use client';

import { useAuth } from '@/components/providers/AuthProvider';

/**
 * Hook 用於檢查使用者購買狀態
 * 整合 AuthProvider 的權限系統
 */
export const usePurchase = () => {
    const { user, role, loading } = useAuth();

    // Open Source 版本：直接設為 true
    // 未來如果要恢復付費制，可在此整合 subscriptions 表的檢查 logic
    // 未來可從 subscriptions 表查詢更詳細的訂閱資訊：
    // - 訂閱方案（monthly/yearly/lifetime）
    // - 到期日期
    // - 訂閱狀態（active/canceled/past_due）

    return {
        hasPro: true, // Open Source version: All users have Pro access
        role,
        loading,
        user
    };
};
