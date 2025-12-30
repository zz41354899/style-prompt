import { NextResponse } from 'next/server';

// TODO: 整合 Stripe
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { priceId } = body;

        // TODO: 驗證使用者身份（使用 Supabase JWT）
        // const authHeader = request.headers.get('Authorization');
        // const token = authHeader?.split(' ')[1];

        // TODO: 建立 Stripe Checkout Session
        // const session = await stripe.checkout.sessions.create({
        //     mode: 'payment',
        //     line_items: [{ price: priceId, quantity: 1 }],
        //     success_url: `${process.env.NEXT_PUBLIC_URL}/purchases?success=true`,
        //     cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
        // });

        // 暫時回傳模擬結果
        return NextResponse.json({
            message: 'Stripe checkout session will be created here',
            priceId,
            // url: session.url,
        });
    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
