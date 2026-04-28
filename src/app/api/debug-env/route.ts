// TEMPORARY diagnostic endpoint — remove after confirming env vars.
// Returns which Stripe-related env vars are present (not their values).

import { NextResponse } from "next/server";

export async function GET() {
  const presence = {
    STRIPE_SECRET_KEY: !!process.env.STRIPE_SECRET_KEY,
    STRIPE_SECRET_KEY_length: process.env.STRIPE_SECRET_KEY?.length ?? 0,
    STRIPE_SECRET_KEY_prefix: process.env.STRIPE_SECRET_KEY?.slice(0, 4) ?? null,
    STRIPE_WEBHOOK_SECRET: !!process.env.STRIPE_WEBHOOK_SECRET,
    RESEND_API_KEY: !!process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: !!process.env.RESEND_FROM_EMAIL,
    BLOB_READ_WRITE_TOKEN: !!process.env.BLOB_READ_WRITE_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    deployment_id: process.env.VERCEL_DEPLOYMENT_ID ?? null,
  };

  return NextResponse.json(presence);
}
