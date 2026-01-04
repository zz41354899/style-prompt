'use client';

import React, { createContext, useContext } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { useSupabaseAuth, UserRole } from '@/hooks/useSupabaseAuth';

// Re-export UserRole for convenience if needed, but preferably use from hook
export type { UserRole };

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    role: UserRole;
    roleError: string | null;
    isAdmin: boolean;
    isPro: boolean;
    profileName: string | null;
    signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signInWithGoogle: () => Promise<{ error: AuthError | null }>;
    signInWithGithub: () => Promise<{ error: AuthError | null }>;
    signOut: () => Promise<void>;
    updateUserName: (name: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const auth = useSupabaseAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

// 輔助函數：檢查使用者是否有 Pro 權限
export const hasProAccess = (user: User | null): boolean => {
    if (!user) return false;
    // 檢查 metadata 中的 hasPro (舊邏輯) 或 user_roles (新邏輯需要從 hook 獲取，這裡僅作為靜態檢查)
    // 由於 hasProAccess 通常用於 hook 外部或 SSR 場景，這裡保留 metadata 檢查作為後備
    return user.user_metadata?.hasPro === true;
};
