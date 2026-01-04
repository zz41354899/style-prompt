import { useState, useEffect } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

export type UserRole = 'free' | 'pro' | 'admin';

export const useSupabaseAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState<UserRole>('free');
    const [roleError, setRoleError] = useState<string | null>(null);
    const [profileName, setProfileName] = useState<string | null>(null);

    // 從 app_metadata 取得使用者角色（安全方式）
    const getRoleFromUser = (user: User | null): UserRole => {
        if (!user) return 'free';
        const appRole = user.app_metadata?.role;
        if (appRole === 'admin') return 'admin';
        if (appRole === 'pro') return 'pro';
        return 'free';
    };

    // 計算權限
    const isAdmin = role === 'admin';
    const isPro = role === 'pro' || role === 'admin';

    useEffect(() => {
        // 取得 Supabase session
        const getInitialSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setSession(session);
                setUser(session?.user ?? null);

                // 從 app_metadata 取得角色
                if (session?.user) {
                    const userRole = getRoleFromUser(session.user);
                    setRole(userRole);

                    // 從 profiles 表取得顯示名稱
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('display_name')
                        .eq('id', session.user.id)
                        .single();

                    if (profile?.display_name) {
                        setProfileName(profile.display_name);
                    }
                }
            } catch (error) {
                console.warn('Supabase connection failed:', error);
            } finally {
                setLoading(false);
            }
        };

        getInitialSession();

        // 監聽 auth 狀態變化
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                setSession(session);
                setUser(session?.user ?? null);

                // 當登入狀態改變時，重新取得角色與 Profile
                if (session?.user) {
                    const userRole = getRoleFromUser(session.user);
                    setRole(userRole);

                    // 同時更新 Profile 名稱
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('display_name')
                        .eq('id', session.user.id)
                        .single();

                    if (profile?.display_name) {
                        setProfileName(profile.display_name);
                    }
                } else {
                    setRole('free');
                    setProfileName(null);
                }
                setLoading(false);
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    // 更新使用者名稱（同時更新 auth.users 和 profiles 表）
    const updateUserName = async (name: string): Promise<{ error: Error | null }> => {
        try {
            // 1. 更新 auth.users 的 user_metadata
            const { error: authError } = await supabase.auth.updateUser({
                data: { name, display_name: name }
            });
            if (authError) {
                return { error: new Error(authError.message) };
            }

            // 2. 更新 profiles 表
            if (user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .update({ display_name: name, updated_at: new Date().toISOString() })
                    .eq('id', user.id);

                if (profileError) {
                    console.warn('Failed to update profile:', profileError.message);
                    // 不回傳錯誤，因為 auth 已成功更新
                }

                // 更新本地 Profile 名稱狀態
                setProfileName(name);

                // 更新本地 user state (為了相容性)
                setUser({
                    ...user,
                    user_metadata: {
                        ...user.user_metadata,
                        name,
                        display_name: name
                    }
                });
            }

            return { error: null };
        } catch (e) {
            return { error: e as Error };
        }
    };

    const signInWithGoogle = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                    queryParams: {
                        prompt: 'select_account',
                    },
                },
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

    const signInWithGithub = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
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

    const signIn = async (email: string, password: string): Promise<{ error: AuthError | null }> => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            return { error };
        } catch (e) {
            return { error: e as AuthError };
        }
    };

    const signUp = async (email: string, password: string): Promise<{ error: AuthError | null }> => {
        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });
            return { error };
        } catch (e) {
            return { error: e as AuthError };
        }
    };

    return {
        user,
        session,
        loading,
        role,
        roleError,
        isAdmin,
        isPro,
        profileName,
        signIn,
        signUp,
        signInWithGoogle,
        signInWithGithub,
        signOut,
        updateUserName,
    };
};
