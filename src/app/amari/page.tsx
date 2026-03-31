import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amari",
  description: "Amari — Eco Jewelry & Fashion by Theoria Sophia",
};

export default function AmariPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-light">
      <div className="text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-light text-charcoal tracking-wide mb-6">
          Amari
        </h1>
        <div className="gold-divider-wide" />
        <p className="mt-8 font-sans text-brown-light text-lg">Coming soon</p>
      </div>
    </section>
  );
}
