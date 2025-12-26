import { NextRequest, NextResponse } from 'next/server';

// ============================================
// 伺服器端活動驗證 - 防呆機制
// ============================================

// 活動配置 (與 styles.ts 同步)
const PROMO_CONFIG = {
    name: 'Happy New Year 2026',
    startDate: new Date('2025-12-26T00:00:00+08:00'),
    endDate: new Date('2026-01-05T23:59:59+08:00'),
    proStyleRange: { start: 1, end: 10 },
} as const;

// 伺服器端時間檢查 (無法被客戶端繞過)
function isPromoActiveServer(): boolean {
    const now = new Date();
    return now >= PROMO_CONFIG.startDate && now <= PROMO_CONFIG.endDate;
}

// 驗證是否可以訪問 Pro 風格
function canAccessProStyleServer(styleId: string): boolean {
    // 解析風格 ID
    const num = parseInt(styleId.replace('S', ''), 10);

    // 檢查是否在 Pro 範圍內
    if (isNaN(num) || num < PROMO_CONFIG.proStyleRange.start || num > PROMO_CONFIG.proStyleRange.end) {
        return false;
    }

    // 檢查活動是否進行中 (使用伺服器時間)
    return isPromoActiveServer();
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
                // 記錄可疑請求 (可選: 發送到日誌服務)
                console.warn(`[PROMO_GUARD] Unauthorized Pro access attempt: ${styleId} at ${new Date().toISOString()}`);

                return NextResponse.json(
                    {
                        error: 'Pro access not available',
                        reason: isPromoActiveServer() ? 'Style not in Pro range' : 'Promotion has ended',
                        promoStatus: {
                            isActive: isPromoActiveServer(),
                            endDate: PROMO_CONFIG.endDate.toISOString(),
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
            promoStatus: {
                isActive: isPromoActiveServer(),
                name: PROMO_CONFIG.name,
                endDate: PROMO_CONFIG.endDate.toISOString(),
            },
            serverTime: new Date().toISOString(),
        });

    } catch (error) {
        console.error('[PROMO_GUARD] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET 端點: 查詢活動狀態
export async function GET() {
    const now = new Date();
    const isActive = isPromoActiveServer();
    const remainingMs = isActive ? PROMO_CONFIG.endDate.getTime() - now.getTime() : 0;

    return NextResponse.json({
        promoName: PROMO_CONFIG.name,
        isActive,
        startDate: PROMO_CONFIG.startDate.toISOString(),
        endDate: PROMO_CONFIG.endDate.toISOString(),
        serverTime: now.toISOString(),
        remainingHours: isActive ? Math.floor(remainingMs / (1000 * 60 * 60)) : 0,
        remainingMinutes: isActive ? Math.floor(remainingMs / (1000 * 60)) : 0,
        proStyleRange: PROMO_CONFIG.proStyleRange,
    });
}
