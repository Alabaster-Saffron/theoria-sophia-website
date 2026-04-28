import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-light">
      <div className="relative z-10 max-w-md mx-auto text-center px-6 py-24">
        <Image
          src="/images/logotheoria.png"
          alt="Theoria Sophia"
          width={56}
          height={56}
          className="mx-auto mb-8 opacity-60 animate-breathe"
        />
        <h1 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide leading-[1.1]">
          No charge made
        </h1>
        <div className="gold-divider-wide" />
        <p className="mt-8 font-sans text-[15px] text-brown-light leading-[1.9]">
          Your checkout was cancelled and nothing has been charged. Whenever you are ready, the garden is here.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/feminine-healing-arts/healing-body-dysmorphia"
            className="inline-block px-10 py-4 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light"
          >
            Return to Course
          </Link>
          <Link
            href="/"
            className="inline-block px-10 py-4 border border-brown-dark text-brown-dark font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-brown-dark hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
