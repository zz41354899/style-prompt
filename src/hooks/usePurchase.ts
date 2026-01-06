'use client';

import { useAuth } from '@/components/providers/AuthProvider';

/**
 * Hook 用於檢查使用者購買狀態
 * 整合 AuthProvider 的權限系統
 */
export const usePurchase = () => {
    const { user, role, isPro, loading } = useAuth();

    // isPro 已經由 AuthProvider 計算：
    // isPro = (role === 'admin' || role === 'pro')
    //
    // 未來可從 subscriptions 表查詢更詳細的訂閱資訊：
    // - 訂閱方案（monthly/yearly/lifetime）
    // - 到期日期
    // - 訂閱狀態（active/canceled/past_due）

    return {
        hasPro: isPro,
        role,
        loading,
        user
    };
};
