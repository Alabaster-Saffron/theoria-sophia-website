"use client";

import { useState } from "react";

const PRODUCT_ID = "healing-body-dysmorphia";
const PRICE_USD = 222;

export default function EnrollForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: PRODUCT_ID }),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok || !body?.url) {
        throw new Error(body?.error || "Could not start checkout. Please try again.");
      }

      window.location.href = body.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went tender. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8 text-center">
      <div>
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-muted mb-3">
          Your Investment
        </p>
        <p className="font-serif text-5xl md:text-6xl font-light text-charcoal">
          ${PRICE_USD}
          <span className="font-sans text-sm text-brown-light/60 ml-2 align-middle">USD</span>
        </p>
      </div>

      {error && (
        <p className="font-sans text-sm text-brown italic">{error}</p>
      )}

      <button
        type="button"
        onClick={startCheckout}
        disabled={submitting}
        className="w-full md:w-auto inline-block px-14 py-5 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light hover:shadow-xl hover:tracking-[0.45em] disabled:opacity-60 disabled:cursor-wait"
      >
        {submitting ? "Opening Checkout…" : "Buy this Course"}
      </button>

      <p className="font-sans text-[11px] text-brown-light/60 italic leading-[1.7] max-w-md mx-auto">
        Secure checkout via Stripe. Upon purchase you&apos;ll receive a welcome letter and your course passcode by email. Follow the course intuitively, in your own rhythm.
      </p>
    </div>
  );
}
