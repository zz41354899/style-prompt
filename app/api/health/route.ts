import { NextResponse } from 'next/server';

/**
 * Health Check API
 * 用於 Zeabur/Vercel 的健康檢查
 */
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'style-prompt',
        environment: process.env.NODE_ENV || 'development'
    });
}
