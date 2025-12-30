'use client';

import { useAuth, hasProAccess } from '@/components/providers/AuthProvider';

// 測試帳號列表（與 AuthProvider 同步）
const TEST_PRO_EMAILS = ['test@styleprompts.com'];

/**
 * Hook 用於檢查使用者購買狀態
 */
export const usePurchase = () => {
    const { user, loading } = useAuth();

    // 檢查是否有 Pro 權限
    const hasPro = (() => {
        if (!user) return false;

        // 先檢查 user_metadata（測試帳號）
        if (hasProAccess(user)) return true;

        // 檢查是否為測試 Pro 帳號
        if (user.email && TEST_PRO_EMAILS.includes(user.email.toLowerCase())) {
            return true;
        }

        // TODO: 未來從 Supabase/Stripe 查詢真實購買狀態
        return false;
    })();

    return {
        hasPro,
        loading,
        user
    };
};
