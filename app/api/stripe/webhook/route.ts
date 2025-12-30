import { NextResponse } from 'next/server';

// TODO: 整合 Stripe Webhook
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
    try {
        const body = await request.text();
        const signature = request.headers.get('stripe-signature');

        // TODO: 驗證 Webhook 簽名
        // const event = stripe.webhooks.constructEvent(body, signature!, webhookSecret);

        // TODO: 處理不同事件類型
        // switch (event.type) {
        //     case 'checkout.session.completed':
        //         // 處理購買成功
        //         break;
        //     case 'payment_intent.payment_failed':
        //         // 處理付款失敗
        //         break;
        // }

        console.log('Webhook received:', { signature, bodyLength: body.length });

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 400 }
        );
    }
}
