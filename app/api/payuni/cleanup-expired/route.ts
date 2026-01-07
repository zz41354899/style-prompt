/**
 * 清理過期/失敗的訂單 API
 * POST /api/payuni/cleanup-expired
 * 
 * 功能：刪除或標記過期的 pending/expired 訂單
 */
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const orderId = body.orderId as string | undefined;
        const action = body.action as 'delete' | 'expire' | undefined;

        if (!orderId) {
            return NextResponse.json(
                { error: '缺少訂單編號' },
                { status: 400 }
            );
        }

        // 根據 action 決定操作方式
        if (action === 'delete') {
            // 刪除 pending 或 expired 的訂單（讓用戶可以重新購買）
            const { data, error } = await supabaseAdmin
                .from('purchases')
                .delete()
                .eq('payuni_order_id', orderId)
                .in('status', ['pending', 'expired', 'fail'])
                .select();

            if (error) {
                console.error('刪除訂單失敗:', error);
                return NextResponse.json(
                    { error: '刪除訂單失敗', details: error.message },
                    { status: 500 }
                );
            }

            console.log(`✅ 已刪除訂單 ${orderId}:`, data?.length || 0, '筆');

            return NextResponse.json({
                success: true,
                deleted: data?.length || 0,
                message: `已刪除訂單 ${orderId}`,
            });

        } else {
            // 預設：標記為 expired
            const { data, error } = await supabaseAdmin
                .from('purchases')
                .update({
                    status: 'expired',
                    error_message: '訂單逾時未完成付款',
                })
                .eq('payuni_order_id', orderId)
                .eq('status', 'pending')
                .select();

            if (error) {
                console.error('標記訂單過期失敗:', error);
                return NextResponse.json(
                    { error: '標記訂單過期失敗', details: error.message },
                    { status: 500 }
                );
            }

            console.log(`✅ 已標記訂單 ${orderId} 為過期:`, data?.length || 0, '筆');

            return NextResponse.json({
                success: true,
                expired: data?.length || 0,
                message: `已標記訂單 ${orderId} 為過期`,
            });
        }

    } catch (error) {
        console.error('處理訂單錯誤:', error);
        return NextResponse.json(
            { error: '伺服器錯誤' },
            { status: 500 }
        );
    }
}
