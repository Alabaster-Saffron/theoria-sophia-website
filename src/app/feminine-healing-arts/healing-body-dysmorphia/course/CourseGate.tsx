"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CourseGate() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/feminine-healing-arts/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "That passcode does not match.");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went tender. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/feminine-healing/fh-07.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-cream-light/85" />

      <div className="relative z-10 max-w-md w-full mx-auto text-center px-6 py-24">
        <Image
          src="/images/logotheoria.png"
          alt="Theoria Sophia"
          width={64}
          height={64}
          className="mx-auto mb-8 opacity-80 animate-breathe"
        />
        <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
          Theoria Sophia School
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide leading-[1.2]">
          The Garden Awaits
        </h1>
        <div className="gold-divider-wide" />
        <p className="mt-6 font-serif text-lg md:text-xl text-brown italic leading-[1.6]">
          Enter your course passcode below, found in your email.
        </p>

        <form onSubmit={onSubmit} className="mt-12 space-y-5 text-left">
          <div>
            <label
              htmlFor="passcode"
              className="block font-sans text-[10px] tracking-[0.35em] uppercase text-brown-light/70 mb-3 text-center"
            >
              Course Passcode
            </label>
            <input
              id="passcode"
              name="passcode"
              type="password"
              required
              autoComplete="off"
              autoFocus
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-transparent border-b border-brown-light/40 focus:border-gold focus:outline-none px-1 py-3 font-serif text-lg text-charcoal text-center tracking-[0.15em] transition-colors"
            />
          </div>

          {error && (
            <p className="font-sans text-sm text-brown italic text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-block px-12 py-4 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light hover:tracking-[0.45em] disabled:opacity-60 disabled:cursor-wait"
          >
            {submitting ? "Opening…" : "Enter"}
          </button>
        </form>

        <p className="mt-10 font-sans text-[11px] text-brown-light/60 italic leading-[1.7]">
          Don&apos;t have a passcode yet?{" "}
          <a
            href="/feminine-healing-arts/healing-body-dysmorphia#enroll"
            className="text-gold underline-offset-4 hover:underline"
          >
            Reserve your place &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
