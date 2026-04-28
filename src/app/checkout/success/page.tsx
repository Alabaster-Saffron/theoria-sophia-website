import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to the garden",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-light">
      <Image
        src="/images/feminine-healing/fh-04.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-cream-light/80" />

      <div className="relative z-10 max-w-xl mx-auto text-center px-6 py-24">
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
        <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide leading-[1.1]">
          Welcome, beloved
        </h1>
        <div className="gold-divider-wide" />
        <p className="mt-8 font-serif text-xl md:text-2xl text-brown italic leading-[1.6]">
          Your enrollment has been received.
        </p>
        <p className="mt-6 font-sans text-[15px] text-brown-light leading-[1.9] max-w-md mx-auto">
          A welcome letter and your course passcode are on their way to your inbox. If you do not see it within a few breaths, please check your other folders, or write to us so we can tend to it personally.
        </p>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-12 py-4 border border-brown-dark text-brown-dark font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold hover:text-white hover:border-gold"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
