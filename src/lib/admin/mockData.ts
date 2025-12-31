// ============================================
// Admin Mock Data
// ============================================

// User Types
export interface MockUser {
    id: string;
    email: string;
    name: string;
    avatar_url?: string;
    role: 'user' | 'admin';
    is_pro: boolean;
    status: 'active' | 'suspended' | 'deleted';
    pro_expires_at?: string;
    created_at: string;
    last_login_at: string;
}

// Subscription Types
export interface MockSubscription {
    id: string;
    user_id: string;
    user_name: string;
    user_email: string;
    stripe_subscription_id: string;
    plan: 'free' | 'pro_monthly' | 'pro_yearly' | 'lifetime';
    status: 'active' | 'canceled' | 'past_due' | 'expired';
    amount: number;
    current_period_start: string;
    current_period_end: string;
    cancel_at_period_end: boolean;
}

// Purchase Types
export interface MockPurchase {
    id: string;
    user_id: string;
    user_email: string;
    stripe_payment_intent_id: string;
    product_type: string;
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed' | 'refunded';
    created_at: string;
}

// Analytics Types
export interface MockAnalytics {
    totalUsers: number;
    proUsers: number;
    freeUsers: number;
    conversionRate: number;
    totalRevenue: number;
    monthlyRevenue: number;
    dau: number;
    registrationTrend: { date: string; count: number }[];
}

// ============================================
// Mock Users Data
// ============================================
export const mockUsers: MockUser[] = [
    {
        id: 'usr_001',
        email: 'alice@example.com',
        name: 'Alice Wang',
        role: 'user',
        is_pro: true,
        status: 'active',
        pro_expires_at: '2025-06-15T00:00:00Z',
        created_at: '2024-11-20T08:30:00Z',
        last_login_at: '2025-12-30T14:22:00Z'
    },
    {
        id: 'usr_002',
        email: 'bob.chen@gmail.com',
        name: 'Bob Chen',
        role: 'user',
        is_pro: true,
        status: 'active',
        pro_expires_at: '2025-03-10T00:00:00Z',
        created_at: '2024-10-05T12:00:00Z',
        last_login_at: '2025-12-29T09:15:00Z'
    },
    {
        id: 'usr_003',
        email: 'carol@company.tw',
        name: 'Carol Lin',
        role: 'user',
        is_pro: false,
        status: 'active',
        created_at: '2024-12-01T16:45:00Z',
        last_login_at: '2025-12-28T20:00:00Z'
    },
    {
        id: 'usr_004',
        email: 'david.wu@outlook.com',
        name: 'David Wu',
        role: 'user',
        is_pro: true,
        status: 'active',
        pro_expires_at: '2025-12-31T00:00:00Z',
        created_at: '2024-09-15T10:20:00Z',
        last_login_at: '2025-12-31T08:00:00Z'
    },
    {
        id: 'usr_005',
        email: 'emily@startup.io',
        name: 'Emily Huang',
        role: 'user',
        is_pro: false,
        status: 'suspended',
        created_at: '2024-08-22T14:30:00Z',
        last_login_at: '2025-11-15T11:00:00Z'
    },
    {
        id: 'usr_006',
        email: 'frank.lee@mail.com',
        name: 'Frank Lee',
        role: 'user',
        is_pro: false,
        status: 'active',
        created_at: '2024-12-10T09:00:00Z',
        last_login_at: '2025-12-30T16:45:00Z'
    },
    {
        id: 'usr_007',
        email: 'grace@design.co',
        name: 'Grace Chen',
        role: 'user',
        is_pro: true,
        status: 'active',
        pro_expires_at: '2025-08-20T00:00:00Z',
        created_at: '2024-07-01T11:15:00Z',
        last_login_at: '2025-12-31T10:30:00Z'
    },
    {
        id: 'usr_008',
        email: 'henry@freelance.net',
        name: 'Henry Tsai',
        role: 'user',
        is_pro: false,
        status: 'deleted',
        created_at: '2024-06-15T08:00:00Z',
        last_login_at: '2025-10-01T12:00:00Z'
    },
    {
        id: 'usr_009',
        email: 'iris.yang@gmail.com',
        name: 'Iris Yang',
        role: 'user',
        is_pro: true,
        status: 'active',
        pro_expires_at: '2025-04-30T00:00:00Z',
        created_at: '2024-11-01T13:20:00Z',
        last_login_at: '2025-12-30T18:00:00Z'
    },
    {
        id: 'usr_010',
        email: 'jack@tech.tw',
        name: 'Jack Liu',
        role: 'user',
        is_pro: false,
        status: 'active',
        created_at: '2024-12-20T15:30:00Z',
        last_login_at: '2025-12-31T09:00:00Z'
    },
    {
        id: 'usr_011',
        email: 'karen@agency.com',
        name: 'Karen Su',
        role: 'user',
        is_pro: true,
        status: 'active',
        pro_expires_at: '2025-07-15T00:00:00Z',
        created_at: '2024-10-10T10:00:00Z',
        last_login_at: '2025-12-29T14:30:00Z'
    },
    {
        id: 'usr_012',
        email: 'leo@creative.io',
        name: 'Leo Chang',
        role: 'user',
        is_pro: false,
        status: 'active',
        created_at: '2024-12-25T11:45:00Z',
        last_login_at: '2025-12-31T07:15:00Z'
    }
];

// ============================================
// Mock Subscriptions Data
// ============================================
export const mockSubscriptions: MockSubscription[] = [
    {
        id: 'sub_001',
        user_id: 'usr_001',
        user_name: 'Alice Wang',
        user_email: 'alice@example.com',
        stripe_subscription_id: 'sub_1QXyz123456',
        plan: 'pro_yearly',
        status: 'active',
        amount: 2388,
        current_period_start: '2024-06-15T00:00:00Z',
        current_period_end: '2025-06-15T00:00:00Z',
        cancel_at_period_end: false
    },
    {
        id: 'sub_002',
        user_id: 'usr_002',
        user_name: 'Bob Chen',
        user_email: 'bob.chen@gmail.com',
        stripe_subscription_id: 'sub_1QAbc789012',
        plan: 'pro_monthly',
        status: 'active',
        amount: 249,
        current_period_start: '2025-02-10T00:00:00Z',
        current_period_end: '2025-03-10T00:00:00Z',
        cancel_at_period_end: false
    },
    {
        id: 'sub_003',
        user_id: 'usr_004',
        user_name: 'David Wu',
        user_email: 'david.wu@outlook.com',
        stripe_subscription_id: 'sub_1QDef345678',
        plan: 'lifetime',
        status: 'active',
        amount: 4999,
        current_period_start: '2024-09-15T00:00:00Z',
        current_period_end: '2099-12-31T00:00:00Z',
        cancel_at_period_end: false
    },
    {
        id: 'sub_004',
        user_id: 'usr_007',
        user_name: 'Grace Chen',
        user_email: 'grace@design.co',
        stripe_subscription_id: 'sub_1QGhi901234',
        plan: 'pro_yearly',
        status: 'active',
        amount: 2388,
        current_period_start: '2024-08-20T00:00:00Z',
        current_period_end: '2025-08-20T00:00:00Z',
        cancel_at_period_end: false
    },
    {
        id: 'sub_005',
        user_id: 'usr_009',
        user_name: 'Iris Yang',
        user_email: 'iris.yang@gmail.com',
        stripe_subscription_id: 'sub_1QJkl567890',
        plan: 'pro_monthly',
        status: 'past_due',
        amount: 249,
        current_period_start: '2024-12-30T00:00:00Z',
        current_period_end: '2025-01-30T00:00:00Z',
        cancel_at_period_end: false
    },
    {
        id: 'sub_006',
        user_id: 'usr_011',
        user_name: 'Karen Su',
        user_email: 'karen@agency.com',
        stripe_subscription_id: 'sub_1QMno123456',
        plan: 'pro_yearly',
        status: 'active',
        amount: 2388,
        current_period_start: '2024-07-15T00:00:00Z',
        current_period_end: '2025-07-15T00:00:00Z',
        cancel_at_period_end: true
    },
    {
        id: 'sub_007',
        user_id: 'usr_008',
        user_name: 'Henry Tsai',
        user_email: 'henry@freelance.net',
        stripe_subscription_id: 'sub_1QPqr789012',
        plan: 'pro_monthly',
        status: 'canceled',
        amount: 249,
        current_period_start: '2025-09-01T00:00:00Z',
        current_period_end: '2025-10-01T00:00:00Z',
        cancel_at_period_end: true
    }
];

// ============================================
// Mock Purchases Data
// ============================================
export const mockPurchases: MockPurchase[] = [
    {
        id: 'pur_001',
        user_id: 'usr_001',
        user_email: 'alice@example.com',
        stripe_payment_intent_id: 'pi_1QXyz123456',
        product_type: 'Pro 年訂閱',
        amount: 2388,
        currency: 'TWD',
        status: 'completed',
        created_at: '2024-06-15T08:30:00Z'
    },
    {
        id: 'pur_002',
        user_id: 'usr_002',
        user_email: 'bob.chen@gmail.com',
        stripe_payment_intent_id: 'pi_1QAbc789012',
        product_type: 'Pro 月訂閱',
        amount: 249,
        currency: 'TWD',
        status: 'completed',
        created_at: '2025-02-10T12:00:00Z'
    },
    {
        id: 'pur_003',
        user_id: 'usr_004',
        user_email: 'david.wu@outlook.com',
        stripe_payment_intent_id: 'pi_1QDef345678',
        product_type: 'Pro 終身版',
        amount: 4999,
        currency: 'TWD',
        status: 'completed',
        created_at: '2024-09-15T10:20:00Z'
    },
    {
        id: 'pur_004',
        user_id: 'usr_007',
        user_email: 'grace@design.co',
        stripe_payment_intent_id: 'pi_1QGhi901234',
        product_type: 'Pro 年訂閱',
        amount: 2388,
        currency: 'TWD',
        status: 'completed',
        created_at: '2024-08-20T11:15:00Z'
    },
    {
        id: 'pur_005',
        user_id: 'usr_009',
        user_email: 'iris.yang@gmail.com',
        stripe_payment_intent_id: 'pi_1QJkl567890',
        product_type: 'Pro 月訂閱',
        amount: 249,
        currency: 'TWD',
        status: 'completed',
        created_at: '2024-12-30T13:20:00Z'
    },
    {
        id: 'pur_006',
        user_id: 'usr_011',
        user_email: 'karen@agency.com',
        stripe_payment_intent_id: 'pi_1QMno123456',
        product_type: 'Pro 年訂閱',
        amount: 2388,
        currency: 'TWD',
        status: 'completed',
        created_at: '2024-07-15T10:00:00Z'
    },
    {
        id: 'pur_007',
        user_id: 'usr_005',
        user_email: 'emily@startup.io',
        stripe_payment_intent_id: 'pi_1QEml345678',
        product_type: 'Pro 月訂閱',
        amount: 249,
        currency: 'TWD',
        status: 'refunded',
        created_at: '2024-11-01T14:30:00Z'
    },
    {
        id: 'pur_008',
        user_id: 'usr_003',
        user_email: 'carol@company.tw',
        stripe_payment_intent_id: 'pi_1QCar789012',
        product_type: 'Pro 月訂閱',
        amount: 249,
        currency: 'TWD',
        status: 'failed',
        created_at: '2025-12-28T20:00:00Z'
    }
];

// ============================================
// Mock Analytics Data
// ============================================
const today = new Date();
const getDateString = (daysAgo: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
};

export const mockAnalytics: MockAnalytics = {
    totalUsers: 1247,
    proUsers: 312,
    freeUsers: 935,
    conversionRate: 25.0,
    totalRevenue: 286350,
    monthlyRevenue: 42500,
    dau: 423,
    registrationTrend: [
        { date: getDateString(6), count: 18 },
        { date: getDateString(5), count: 24 },
        { date: getDateString(4), count: 15 },
        { date: getDateString(3), count: 32 },
        { date: getDateString(2), count: 28 },
        { date: getDateString(1), count: 21 },
        { date: getDateString(0), count: 35 }
    ]
};

// ============================================
// Announcement Types
// ============================================
export interface MockAnnouncement {
    id: string;
    title: string;
    content: string;
    type: 'event' | 'notice' | 'alert';
    startAt: string;
    endAt: string;
    isActive: boolean;
    createdAt: string;
}

// ============================================
// Changelog Types
// ============================================
export interface MockChangelog {
    id: string;
    version: string;
    title: string;
    changes: string[];
    type: 'feature' | 'fix' | 'improvement';
    publishedAt: string;
}

// ============================================
// Mock Announcements Data
// ============================================
export const mockAnnouncements: MockAnnouncement[] = [
    {
        id: 'ann_001',
        title: '🎉 2025 新年快樂！',
        content: '感謝您一年來的支持！新年期間 Pro 方案享 8 折優惠。',
        type: 'event',
        startAt: '2024-12-31T00:00:00Z',
        endAt: '2025-01-03T23:59:59Z',
        isActive: true,
        createdAt: '2024-12-30T10:00:00Z'
    },
    {
        id: 'ann_002',
        title: '🔧 系統維護通知',
        content: '我們將於 1/5 凌晨 2:00-4:00 進行系統維護，届時服務將暫時中斷。',
        type: 'notice',
        startAt: '2025-01-03T00:00:00Z',
        endAt: '2025-01-05T04:00:00Z',
        isActive: true,
        createdAt: '2024-12-28T14:00:00Z'
    },
    {
        id: 'ann_003',
        title: '⚠️ 重要安全更新',
        content: '請所有用戶更新密碼以確保帳號安全。',
        type: 'alert',
        startAt: '2024-12-20T00:00:00Z',
        endAt: '2024-12-31T23:59:59Z',
        isActive: false,
        createdAt: '2024-12-20T08:00:00Z'
    }
];

// ============================================
// Mock Changelog Data
// ============================================
export const mockChangelogs: MockChangelog[] = [
    {
        id: 'log_001',
        version: 'v1.3.0',
        title: '新增 Admin 後台管理系統',
        changes: [
            '新增使用者管理頁面',
            '新增訂閱管理功能',
            '新增數據分析儀表板',
            '新增公告與 Changelog 管理'
        ],
        type: 'feature',
        publishedAt: '2025-01-01T00:00:00Z'
    },
    {
        id: 'log_002',
        version: 'v1.2.1',
        title: '修復登入相關問題',
        changes: [
            '修復 Google 登入偶發失敗問題',
            '修復 Session 過期未正確處理的問題',
            '改善登入頁面載入速度'
        ],
        type: 'fix',
        publishedAt: '2024-12-28T16:00:00Z'
    },
    {
        id: 'log_003',
        version: 'v1.2.0',
        title: 'Pro 版本功能升級',
        changes: [
            '新增 10 款專業風格模板',
            '改善 AI 生成品質',
            '新增匯出 PNG/SVG 功能'
        ],
        type: 'feature',
        publishedAt: '2024-12-20T10:00:00Z'
    },
    {
        id: 'log_004',
        version: 'v1.1.5',
        title: '效能優化',
        changes: [
            '減少首頁載入時間 40%',
            '優化圖片壓縮演算法',
            '改善手機版使用體驗'
        ],
        type: 'improvement',
        publishedAt: '2024-12-15T12:00:00Z'
    }
];
