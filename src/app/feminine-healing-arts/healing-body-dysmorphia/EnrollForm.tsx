"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnrollForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
    };

    if (!payload.email || !payload.name) {
      setStatus("error");
      setError("Please share your name and email.");
      return;
    }

    try {
      const res = await fetch("/api/feminine-healing-arts/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went tender. Please try again in a moment.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went tender. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-elevated p-10 md:p-12 text-center">
        <p className="font-serif text-2xl md:text-3xl text-charcoal italic mb-4">
          Welcome to the garden.
        </p>
        <div className="gold-divider" />
        <p className="mt-6 font-sans text-brown-light leading-[1.9] text-sm">
          A welcome letter and your course passcode are on their way to your inbox. If you do not see it within a few breaths, please check your other folders, or write to us so we can tend to it personally.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 text-left">
      <div>
        <label
          htmlFor="enroll-name"
          className="block font-sans text-[10px] tracking-[0.35em] uppercase text-brown-light/70 mb-3"
        >
          Your name
        </label>
        <input
          id="enroll-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full bg-transparent border-b border-brown-light/30 focus:border-gold focus:outline-none px-1 py-3 font-serif text-lg text-charcoal placeholder:text-brown-light/30 transition-colors"
          placeholder="Eve"
        />
      </div>

      <div>
        <label
          htmlFor="enroll-email"
          className="block font-sans text-[10px] tracking-[0.35em] uppercase text-brown-light/70 mb-3"
        >
          Your email
        </label>
        <input
          id="enroll-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-transparent border-b border-brown-light/30 focus:border-gold focus:outline-none px-1 py-3 font-serif text-lg text-charcoal placeholder:text-brown-light/30 transition-colors"
          placeholder="you@yourgarden.com"
        />
      </div>

      {error && (
        <p className="font-sans text-sm text-brown italic">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto inline-block px-12 py-5 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light hover:shadow-xl hover:tracking-[0.45em] disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "submitting" ? "Sending…" : "Buy this Course"}
      </button>

      <p className="font-sans text-[11px] text-brown-light/60 italic leading-[1.7] pt-2">
        Upon enrollment you&apos;ll receive a welcome letter with your course passcode. Follow the course intuitively, in your own rhythm.
      </p>
    </form>
  );
}
