import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// ============================================
// 伺服器端 Pro 風格驗證（整合使用者認證）
// 包含試用模式邏輯：前 20 個風格可供登入用戶複製
// ============================================

// Pro 風格配置
const PRO_CONFIG = {
    proStyleRange: { start: 1, end: 100 },
    trialStyleCount: 20, // 試用用戶可複製的風格數量
} as const;

// 取得風格的數字索引
function getStyleIndex(styleId: string): number {
    const num = parseInt(styleId.replace('S', ''), 10);
    return isNaN(num) ? -1 : num;
}

// 驗證是否可以訪問 Pro 風格（僅檢查 styleId 範圍）
function isStyleInProRange(styleId: string): boolean {
    const num = getStyleIndex(styleId);

    // 檢查是否在 Pro 範圍內
    if (num < PRO_CONFIG.proStyleRange.start || num > PRO_CONFIG.proStyleRange.end) {
        return false;
    }

    return true;
}

// 檢查是否在試用範圍內（前 20 個）
function isStyleInTrialRange(styleId: string): boolean {
    const num = getStyleIndex(styleId);
    return num >= 1 && num <= PRO_CONFIG.trialStyleCount;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { styleId, tier } = body;

        // 驗證必要參數
        if (!styleId) {
            return NextResponse.json(
                { error: 'Missing styleId parameter' },
                { status: 400 }
            );
        }

        // 如果請求 Pro 版，驗證權限
        if (tier === 'pro') {
            // 1. 檢查 styleId 是否在 Pro 範圍
            const isInRange = isStyleInProRange(styleId);

            if (!isInRange) {
                console.warn(`[PRO_GUARD] Style ${styleId} not in Pro range`);
                return NextResponse.json(
                    {
                        error: 'Pro access not available',
                        reason: 'Style not in Pro range',
                    },
                    { status: 403 }
                );
            }

            // 2. 檢查使用者認證和權限
            const cookieStore = await cookies();
            const supabase = createServerClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                {
                    cookies: {
                        get(name: string) {
                            return cookieStore.get(name)?.value;
                        },
                    },
                }
            );

            const { data: { user }, error: authError } = await supabase.auth.getUser();

            // 檢查是否登入
            if (authError || !user) {
                console.warn(`[PRO_GUARD] Unauthenticated access attempt for ${styleId}`);
                return NextResponse.json(
                    {
                        error: 'Authentication required',
                        reason: 'Please log in to access Pro styles',
                    },
                    { status: 401 }
                );
            }

            // 檢查使用者角色
            const role = user.app_metadata?.role;
            const isPro = role === 'pro' || role === 'admin';

            // 如果不是 Pro 用戶，檢查是否在試用範圍內
            if (!isPro) {
                const isInTrialRange = isStyleInTrialRange(styleId);

                if (!isInTrialRange) {
                    // 超出試用範圍，需要升級
                    console.warn(`[PRO_GUARD] Trial limit exceeded: ${user.email} (role: ${role || 'free'}) attempted ${styleId} (index > ${PRO_CONFIG.trialStyleCount})`);
                    return NextResponse.json(
                        {
                            error: 'Pro subscription required',
                            reason: `This style requires Pro. Trial includes the first ${PRO_CONFIG.trialStyleCount} styles.`,
                            userRole: role || 'free',
                            trialLimit: PRO_CONFIG.trialStyleCount,
                        },
                        { status: 403 }
                    );
                }

                // 在試用範圍內，允許存取（但標記為試用）
                console.log(`[PRO_GUARD] ✅ Trial access granted: ${user.email} → ${styleId}`);
                return NextResponse.json({
                    success: true,
                    styleId,
                    tier: 'trial',
                    isTrial: true,
                    trialLimit: PRO_CONFIG.trialStyleCount,
                    serverTime: new Date().toISOString(),
                });
            }

            // Pro/Admin 用戶，完全存取
            console.log(`[PRO_GUARD] ✅ Pro access granted: ${user.email} → ${styleId}`);
        }

        // 驗證通過，返回成功
        return NextResponse.json({
            success: true,
            styleId,
            tier: tier || 'free',
            isTrial: false,
            serverTime: new Date().toISOString(),
        });

    } catch (error) {
        console.error('[PRO_GUARD] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET 端點: 查詢 Pro 狀態（需要認證）
export async function GET() {
    try {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    get(name: string) {
                        return cookieStore.get(name)?.value;
                    },
                },
            }
        );

        const { data: { user } } = await supabase.auth.getUser();

        const role = user?.app_metadata?.role;
        const isPro = role === 'pro' || role === 'admin';

        return NextResponse.json({
            isAuthenticated: !!user,
            isPro: isPro,
            isTrial: !!user && !isPro,
            role: role || 'free',
            serverTime: new Date().toISOString(),
            proStyleRange: PRO_CONFIG.proStyleRange,
            trialStyleCount: PRO_CONFIG.trialStyleCount,
        });
    } catch (error) {
        console.error('[PRO_GUARD] GET Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
