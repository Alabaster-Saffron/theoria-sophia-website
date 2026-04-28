import { NextResponse } from "next/server";
import { headers } from "next/headers";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";
import { sendWelcomeEmail } from "@/lib/courseWelcomeEmail";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set — rejecting webhook");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const signature = (await headers()).get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const productId = session.metadata?.productId;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name ?? "Beloved";

    if (!productId) {
      console.warn("[webhook] checkout.session.completed without productId metadata", session.id);
      return NextResponse.json({ received: true });
    }

    const product = getProduct(productId);
    if (!product) {
      console.warn("[webhook] unknown productId:", productId);
      return NextResponse.json({ received: true });
    }

    if (!customerEmail) {
      console.warn("[webhook] no customer_details.email on session", session.id);
      return NextResponse.json({ received: true });
    }

    const origin = new URL(request.url).origin;
    const courseUrl = `${origin}${product.coursePath}`;

    const result = await sendWelcomeEmail({
      toEmail: customerEmail,
      toName: customerName,
      courseName: product.name,
      passcode: product.coursePasscode,
      courseUrl,
    });

    console.log(
      `[webhook] checkout completed: ${product.id} → ${customerEmail} (email sent: ${result.sent})`
    );
  }

  return NextResponse.json({ received: true });
}
