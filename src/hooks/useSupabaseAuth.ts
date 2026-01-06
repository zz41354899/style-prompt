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
            async (event, session) => {
                console.log('[useSupabaseAuth] Auth State Change:', event, session?.user?.email);

                setSession(session);
                setUser(session?.user ?? null);

                // 當登入狀態改變時，重新取得角色與 Profile
                if (session?.user) {
                    const userRole = getRoleFromUser(session.user);
                    setRole(userRole);

                    // 同時更新 Profile 名稱
                    console.log('[useSupabaseAuth] Fetching profile on auth change...');
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('display_name')
                        .eq('id', session.user.id)
                        .single();

                    console.log('[useSupabaseAuth] Profile fetched on auth change:', profile?.display_name);

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

    // DEBUG: 監控 profileName 變化
    useEffect(() => {
        console.log('[useSupabaseAuth] profileName changed to:', profileName);
    }, [profileName]);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    // 更新使用者名稱（同時更新 auth.users 和 profiles 表）
    const updateUserName = async (name: string): Promise<{ error: Error | null }> => {
        try {
            if (!user) {
                console.error('[useSupabaseAuth] No user found for update');
                return { error: new Error('User not found') };
            }

            // DEBUG: 打印詳細環境變數與參數
            const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
            const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
            console.log('[useSupabaseAuth] Environment Check:', {
                urlExists: !!sbUrl,
                urlValue: sbUrl,
                keyExists: !!sbKey
            });
            console.log('[useSupabaseAuth] Target Name:', name);

            if (!name) {
                console.warn('[useSupabaseAuth] Warning: Name is empty');
            }

            // 建立超時 Promise
            const timeoutPromise = (ms: number, context: string) => new Promise((_, reject) =>
                setTimeout(() => reject(new Error(`${context} timed out after ${ms}ms`)), ms)
            );

            // 1. Auth Update (使用 Raw Fetch 繞過 potential client library issue)
            const updateAuthRaw = async () => {
                // 優化：直接使用 Hook 狀態中的 session，避免再次 await getSession() 卡住
                const currentToken = session?.access_token;

                if (!currentToken) {
                    console.error('[useSupabaseAuth] No access token in current session state');
                    throw new Error('No access token');
                }

                const targetUrl = `${sbUrl}/auth/v1/user`;
                console.log('[useSupabaseAuth] Fetching URL:', targetUrl);

                const response = await fetch(targetUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentToken}`,
                        'apikey': sbKey!
                    },
                    body: JSON.stringify({
                        data: { name, display_name: name }
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error('[useSupabaseAuth] Fetch Response Error:', response.status, errorData);
                    throw new Error(errorData.msg || errorData.error_description || `Auth update failed: ${response.status}`);
                }

                return await response.json();
            };

            const authUpdatePromise = Promise.race([
                updateAuthRaw(),
                timeoutPromise(10000, 'Auth update (fetch)')
            ]);

            // 2. Profile Update (也改用 Raw Fetch 以避免 Client Library 卡住)
            const updateProfileRaw = async () => {
                const currentToken = session?.access_token;
                if (!currentToken) throw new Error('No access token');

                const targetUrl = `${sbUrl}/rest/v1/profiles?id=eq.${user.id}`;

                const response = await fetch(targetUrl, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentToken}`,
                        'apikey': sbKey!,
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                        display_name: name,
                        updated_at: new Date().toISOString()
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error('[useSupabaseAuth] Profile Fetch Error:', response.status, errorData);
                    throw new Error(`Profile update failed: ${response.status}`);
                }

                return { success: true };
            };

            const profileUpdatePromise = Promise.race([
                updateProfileRaw(),
                timeoutPromise(10000, 'Profile update (fetch)')
            ]);

            // 使用 Promise.allSettled 確保任一邊失敗/超時都不會中斷流程
            const results = await Promise.allSettled([authUpdatePromise, profileUpdatePromise]);

            const authResult = results[0];
            const profileResult = results[1];

            // 檢查 Auth 更新結果
            if (authResult.status === 'rejected') {
                console.error('[useSupabaseAuth] Auth update CRASH/TIMEOUT (fetch):', authResult.reason);
                return { error: new Error('Auth update failed or timed out') };
            } else {
                console.log('[useSupabaseAuth] Auth update SUCCESS (fetch)');
            }

            // 檢查 Profile 更新結果
            if (profileResult.status === 'rejected') {
                console.warn('[useSupabaseAuth] Profile update CRASH/TIMEOUT:', profileResult.reason);
            } else {
                console.log('[useSupabaseAuth] Profile update SUCCESS (fetch)');
            }

            // 3. 更新本地狀態
            setProfileName(name);

            setUser(prevUser => {
                if (!prevUser) return null;
                return {
                    ...prevUser,
                    user_metadata: {
                        ...prevUser.user_metadata,
                        name,
                        display_name: name
                    }
                };
            });

            console.log('[useSupabaseAuth] All updates finished');
            return { error: null };
        } catch (e) {
            console.error('[useSupabaseAuth] Unexpected error during update:', e);
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
