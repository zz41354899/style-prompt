import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// ============================================
// 伺服器端 Pro 風格驗證（開源版本）
// 所有登入使用者都可以存取所有 Pro 風格
// ============================================

// Pro 風格配置（保留以供參考）
const PRO_CONFIG = {
    proStyleRange: { start: 1, end: 100 },
    trialStyleCount: 20, // 已廢棄，保留向下相容
} as const;

// 取得風格的數字索引
function getStyleIndex(styleId: string): number {
    const num = parseInt(styleId.replace('S', ''), 10);
    return isNaN(num) ? -1 : num;
}

// 驗證是否在 Pro 風格範圍（僅檢查 styleId 範圍）
function isStyleInProRange(styleId: string): boolean {
    const num = getStyleIndex(styleId);

    // 檢查是否在 Pro 範圍內
    if (num < PRO_CONFIG.proStyleRange.start || num > PRO_CONFIG.proStyleRange.end) {
        return false;
    }

    return true;
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

            // 開源版本：所有登入使用者都有完整 Pro 存取權
            // (已移除 Pro 角色檢查，所有功能免費開放)
            console.log(`[PRO_GUARD] ✅ Access granted (open source): ${user.email} → ${styleId}`);
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

        // 開源版本：所有登入使用者都視為 Pro
        const isLoggedIn = !!user;

        return NextResponse.json({
            isAuthenticated: isLoggedIn,
            isPro: isLoggedIn, // 登入即享有 Pro 權限
            isTrial: false,   // 開源版無試用概念
            role: isLoggedIn ? 'pro' : 'free', // 登入即為 Pro
            serverTime: new Date().toISOString(),
            proStyleRange: PRO_CONFIG.proStyleRange,
            trialStyleCount: PRO_CONFIG.trialStyleCount,
            isOpenSource: true, // 標記為開源版本
        });
    } catch (error) {
        console.error('[PRO_GUARD] GET Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
