import { NextRequest, NextResponse } from 'next/server';

// ============================================
// 伺服器端 Pro 風格驗證
// ============================================

// Pro 風格配置
const PRO_CONFIG = {
    proStyleRange: { start: 1, end: 21 },
} as const;

// Pro 永久啟用 (無時間限制)
function isProActive(): boolean {
    return true;
}

// 驗證是否可以訪問 Pro 風格
function canAccessProStyleServer(styleId: string): boolean {
    const num = parseInt(styleId.replace('S', ''), 10);

    // 檢查是否在 Pro 範圍內
    if (isNaN(num) || num < PRO_CONFIG.proStyleRange.start || num > PRO_CONFIG.proStyleRange.end) {
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
            const hasAccess = canAccessProStyleServer(styleId);

            if (!hasAccess) {
                console.warn(`[PRO_GUARD] Unauthorized Pro access attempt: ${styleId} at ${new Date().toISOString()}`);

                return NextResponse.json(
                    {
                        error: 'Pro access not available',
                        reason: 'Style not in Pro range',
                        proStatus: {
                            isActive: isProActive(),
                        }
                    },
                    { status: 403 }
                );
            }
        }

        // 驗證通過，返回成功
        return NextResponse.json({
            success: true,
            styleId,
            tier: tier || 'free',
            proStatus: {
                isActive: isProActive(),
            },
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

// GET 端點: 查詢 Pro 狀態
export async function GET() {
    return NextResponse.json({
        isActive: isProActive(),
        serverTime: new Date().toISOString(),
        proStyleRange: PRO_CONFIG.proStyleRange,
    });
}
