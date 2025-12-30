'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

// ============================================
// 測試帳號配置（開發/測試用）
// ============================================
const TEST_ACCOUNTS = [
    {
        email: 'test@styleprompts.com',
        password: 'test1234',
        hasPro: true,
        name: 'Pro 測試用戶'
    },
    {
        email: 'free@styleprompts.com',
        password: 'free1234',
        hasPro: false,
        name: 'Free 測試用戶'
    }
];

// 建立模擬 User 物件
const createMockUser = (account: typeof TEST_ACCOUNTS[0]): User => ({
    id: `test-${account.email.replace('@', '-at-')}`,
    email: account.email,
    aud: 'authenticated',
    role: 'authenticated',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    app_metadata: {},
    user_metadata: {
        name: account.name,
        hasPro: account.hasPro
    },
    identities: [],
    factors: []
});

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    isTestMode: boolean;
    signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signOut: () => Promise<void>;
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
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [isTestMode, setIsTestMode] = useState(false);

    useEffect(() => {
        // 檢查是否有儲存的測試帳號 session
        const storedTestUser = localStorage.getItem('testUser');
        if (storedTestUser) {
            try {
                const testUser = JSON.parse(storedTestUser);
                setUser(testUser);
                setIsTestMode(true);
                setLoading(false);
                return;
            } catch {
                localStorage.removeItem('testUser');
            }
        }

        // 取得 Supabase session
        const getInitialSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setSession(session);
                setUser(session?.user ?? null);
            } catch (error) {
                console.warn('Supabase connection failed, test mode available');
            } finally {
                setLoading(false);
            }
        };

        getInitialSession();

        // 監聽 auth 狀態變化
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                if (!isTestMode) {
                    setSession(session);
                    setUser(session?.user ?? null);
                    setLoading(false);
                }
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, [isTestMode]);

    const signIn = async (email: string, password: string) => {
        // 檢查是否為測試帳號
        const testAccount = TEST_ACCOUNTS.find(
            acc => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password
        );

        if (testAccount) {
            const mockUser = createMockUser(testAccount);
            setUser(mockUser);
            setIsTestMode(true);
            localStorage.setItem('testUser', JSON.stringify(mockUser));
            console.log('🧪 測試模式登入成功:', testAccount.email);
            return { error: null };
        }

        // 嘗試 Supabase 登入
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            return { error };
        } catch {
            // 如果 Supabase 無法連線，嘗試測試帳號（寬鬆模式）
            const testAccountLoose = TEST_ACCOUNTS.find(
                acc => acc.email.toLowerCase() === email.toLowerCase()
            );
            if (testAccountLoose) {
                return {
                    error: {
                        message: '密碼錯誤（測試帳號密碼請參考文件）',
                        name: 'AuthApiError',
                        status: 400
                    } as AuthError
                };
            }
            return {
                error: {
                    message: '無法連線至認證服務',
                    name: 'AuthApiError',
                    status: 500
                } as AuthError
            };
        }
    };

    const signUp = async (email: string, password: string) => {
        // 檢查是否為測試帳號 email
        const isTestEmail = TEST_ACCOUNTS.some(
            acc => acc.email.toLowerCase() === email.toLowerCase()
        );

        if (isTestEmail) {
            return {
                error: {
                    message: '此為測試帳號，請直接登入',
                    name: 'AuthApiError',
                    status: 400
                } as AuthError
            };
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });
            return { error };
        } catch {
            return {
                error: {
                    message: '無法連線至認證服務',
                    name: 'AuthApiError',
                    status: 500
                } as AuthError
            };
        }
    };

    const signOut = async () => {
        if (isTestMode) {
            localStorage.removeItem('testUser');
            setUser(null);
            setIsTestMode(false);
            console.log('🧪 測試模式登出');
            return;
        }
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                loading,
                isTestMode,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// 輔助函數：檢查使用者是否有 Pro 權限
export const hasProAccess = (user: User | null): boolean => {
    if (!user) return false;
    return user.user_metadata?.hasPro === true;
};
