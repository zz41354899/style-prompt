'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

export type UserRole = 'free' | 'pro' | 'admin';
export type AccountStatus = 'active' | 'suspended' | 'pending_deletion' | 'deleted';

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    role: UserRole;
    roleError: string | null;
    isAdmin: boolean;
    isPro: boolean;
    profileName: string | null;
    accountStatus: AccountStatus;
    isSuspended: boolean;
    signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    signInWithGoogle: () => Promise<{ error: AuthError | null }>;
    signInWithGithub: () => Promise<{ error: AuthError | null }>;
    signOut: () => Promise<void>;
    updateUserName: (name: string) => Promise<{ error: Error | null }>;
    refreshSession: () => Promise<{ error: Error | AuthError | null }>;
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
    const [role, setRole] = useState<UserRole>('free');
    const [roleError] = useState<string | null>(null);
    const [profileName, setProfileName] = useState<string | null>(null);
    const [accountStatus, setAccountStatus] = useState<AccountStatus>('active');
    const mountedRef = useRef(true);
    const sessionRef = useRef<Session | null>(null);

    const getRoleFromUser = useCallback((user: User | null): UserRole => {
        if (!user) return 'free';
        const appRole = user.app_metadata?.role;
        if (appRole === 'admin') return 'admin';
        if (appRole === 'pro') return 'pro';
        return 'free';
    }, []);

    const isAdmin = role === 'admin';
    // 開源版本：所有用戶都有 Pro 權限
    const isPro = true;
    const isSuspended = accountStatus === 'suspended';

    // 優化的 profile 請求（包含帳戶狀態）
    const fetchProfile = useCallback(async (userId: string) => {
        if (!mountedRef.current) return;
        try {
            const { data: profile } = await supabase
                .from('profiles')
                .select('display_name, status, deletion_status')
                .eq('id', userId)
                .single();

            if (mountedRef.current && profile) {
                if (profile.display_name) {
                    setProfileName(profile.display_name);
                }
                // 合併 status 和 deletion_status，優先使用 deletion_status
                const effectiveStatus =
                    profile.deletion_status === 'pending_deletion' || profile.deletion_status === 'deleted'
                        ? profile.deletion_status
                        : (profile.status || 'active') as AccountStatus;
                setAccountStatus(effectiveStatus);
            }
        } catch {
            // 忽略錯誤
        }
    }, []);

    useEffect(() => {
        mountedRef.current = true;

        const getInitialSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (!mountedRef.current) return;

                sessionRef.current = session;
                setSession(session);
                setUser(session?.user ?? null);

                if (session?.user) {
                    setRole(getRoleFromUser(session.user));
                    fetchProfile(session.user.id);
                }
            } catch (error) {
                console.warn('[AuthProvider] Session error:', error);
            } finally {
                if (mountedRef.current) setLoading(false);
            }
        };

        getInitialSession();

        const timeout = setTimeout(() => {
            if (mountedRef.current) setLoading(false);
        }, 5000);

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (!mountedRef.current) return;

                sessionRef.current = session;
                setSession(session);
                setUser(session?.user ?? null);

                if (session?.user) {
                    setRole(getRoleFromUser(session.user));
                    fetchProfile(session.user.id);
                } else {
                    setRole('free');
                    setProfileName(null);
                    setAccountStatus('active');
                }
                setLoading(false);
            }
        );

        return () => {
            mountedRef.current = false;
            clearTimeout(timeout);
            subscription.unsubscribe();
        };
    }, [getRoleFromUser, fetchProfile]);

    const signOut = useCallback(async () => {
        try {
            await Promise.race([
                supabase.auth.signOut(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
            ]);
        } catch {
            setSession(null);
            setUser(null);
            setRole('free');
            setProfileName(null);
        }
    }, []);

    const refreshSession = useCallback(async () => {
        try {
            const { data, error } = await supabase.auth.refreshSession();
            if (error) return { error };
            if (data.session?.user) {
                setSession(data.session);
                setUser(data.session.user);
                sessionRef.current = data.session;
                setRole(getRoleFromUser(data.session.user));
            }
            return { error: null };
        } catch (e) {
            return { error: e as Error };
        }
    }, [getRoleFromUser]);

    const updateUserName = useCallback(async (name: string): Promise<{ error: Error | null }> => {
        if (!user) return { error: new Error('User not found') };

        const currentSession = sessionRef.current;
        const currentToken = currentSession?.access_token;
        if (!currentToken) return { error: new Error('No access token') };

        const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        try {
            const [authResult, profileResult] = await Promise.allSettled([
                fetch(`${sbUrl}/auth/v1/user`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentToken}`,
                        'apikey': sbKey!
                    },
                    body: JSON.stringify({ data: { name, display_name: name } })
                }),
                fetch(`${sbUrl}/rest/v1/profiles?id=eq.${user.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentToken}`,
                        'apikey': sbKey!,
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({ display_name: name, updated_at: new Date().toISOString() })
                })
            ]);

            if (authResult.status === 'rejected' || (authResult.status === 'fulfilled' && !authResult.value.ok)) {
                return { error: new Error('Auth update failed') };
            }

            setProfileName(name);
            setUser(prev => prev ? { ...prev, user_metadata: { ...prev.user_metadata, name, display_name: name } } : null);
            return { error: null };
        } catch (e) {
            return { error: e as Error };
        }
    }, [user]);

    const signInWithGoogle = useCallback(async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                    queryParams: { prompt: 'select_account' },
                },
            });
            return { error };
        } catch {
            return { error: { message: '無法連線至認證服務', name: 'AuthApiError', status: 500 } as AuthError };
        }
    }, []);

    const signInWithGithub = useCallback(async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: { redirectTo: `${window.location.origin}/auth/callback` },
            });
            return { error };
        } catch {
            return { error: { message: '無法連線至認證服務', name: 'AuthApiError', status: 500 } as AuthError };
        }
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            return { error };
        } catch (e) {
            return { error: e as AuthError };
        }
    }, []);

    const signUp = useCallback(async (email: string, password: string) => {
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            return { error };
        } catch (e) {
            return { error: e as AuthError };
        }
    }, []);

    const value = {
        user,
        session,
        loading,
        role,
        roleError,
        isAdmin,
        isPro,
        profileName,
        accountStatus,
        isSuspended,
        signIn,
        signUp,
        signInWithGoogle,
        signInWithGithub,
        signOut,
        updateUserName,
        refreshSession,
    };

    return (
        <AuthContext.Provider value={value}>
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
