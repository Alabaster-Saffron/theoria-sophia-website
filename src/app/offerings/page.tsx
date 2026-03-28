import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getOfferingsPage } from "@/sanity/queries";
import { resolveImage } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Offerings",
  description:
    "Women's healing arts — returning to peace, sanctuary, and health in the body. Creating in the beauty way, heaven on earth.",
};

const defaultOfferings = [
  {
    title: "Ancient Her-story Online Course",
    description:
      "A deep dive into the mother lineage of the oracles of old. Forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.",
    image: "/images/ancient-herstory-1.jpg",
    link: "/ancient-herstory",
  },
  {
    title: "Women\u2019s Wellness Sanctuary",
    description:
      "Holistic healing arts for the body, mind, and spirit. Restoring the inner garden of the true feminine essence through ancient and modern practices.",
    image: "/images/sacred-union-photo.jpg",
    link: "",
  },
  {
    title: "Eco Design & Architecture",
    description:
      "Through our sister company Azura, we create homes and structures centered on feng shui, environmental health, biomimicry, and luxury living.",
    image: "/images/eco-carousel-01.jpg",
    link: "",
  },
  {
    title: "Honey Bee Educational Center",
    description:
      "Creating sanctuaries for the pollinators. Education on the sacred role of the honeybee in ancient wisdom traditions and ecological stewardship.",
    image: "/images/explore-IMG_2778.jpg",
    link: "",
  },
];

export default async function OfferingsPage() {
  const data = await getOfferingsPage();

  const heroTitle = data?.heroTitle ?? "Offerings";
  const heroSubtitle = data?.heroSubtitle ?? "Women\u2019s Healing Arts";
  const heroDescription =
    data?.heroDescription ??
    "Returning to peace in the body, sanctuary in the body, and health in the body. Creating in the beauty way, heaven on earth.";
  const heroBackground = resolveImage(data?.heroBackground, "/images/offerings-sand-dunes.jpg");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const offerings = (data?.offerings as any[]) ?? defaultOfferings;

  const ctaHeading = data?.ctaHeading ?? "Ready to Begin?";
  const ctaText =
    data?.ctaText ??
    "Each offering is a doorway into deeper connection \u2014 with yourself, the earth, and the sacred wisdom that lives within you.";
  const ctaButtonText = data?.ctaButtonText ?? "Connect With Us";

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroBackground}
          alt="Sacred landscape"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-cream-light/20 to-cream-light/70" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={70}
            height={70}
            className="mx-auto mb-8 animate-float"
          />
          <h1 className="font-serif text-6xl md:text-8xl font-light text-charcoal tracking-wider mb-6">
            {heroTitle}
          </h1>
          <div className="gold-divider-wide" />
          <p className="mt-8 font-serif text-xl md:text-2xl text-brown italic max-w-lg mx-auto">
            {heroSubtitle}
          </p>
          <p className="mt-4 font-sans text-sm text-brown-light/60 max-w-md mx-auto leading-[1.9]">
            {heroDescription}
          </p>
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* Offerings */}
      <section className="section-padding-lg">
        <div className="max-w-6xl mx-auto">
          {offerings.map(
            (
              offering: {
                title: string;
                description: string;
                image: string | { asset?: { _ref?: string } };
                link?: string;
              },
              i: number
            ) => (
              <ScrollReveal
                key={offering.title}
                delay={100}
                direction={i % 2 === 0 ? "left" : "right"}
                duration={1200}
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 mb-24 last:mb-0 overflow-hidden ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`relative h-80 md:h-auto min-h-[450px] ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={resolveImage(offering.image, "/images/ancient-herstory-1.jpg")}
                      alt={offering.title}
                      fill
                      className="object-cover image-reveal"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div
                    className={`flex items-center bg-cream p-10 md:p-20 ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="max-w-md">
                      <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal mb-4 tracking-wide">
                        {offering.title}
                      </h2>
                      <div className="gold-divider !mx-0" />
                      <p className="mt-8 font-sans text-brown-light text-sm leading-[1.9]">
                        {offering.description}
                      </p>
                      {offering.link && (
                        <Link
                          href={offering.link}
                          className="inline-block mt-10 px-10 py-4 border border-gold/50 text-gold font-sans text-[11px] tracking-[0.3em] uppercase transition-all duration-700 hover:bg-gold hover:text-white"
                        >
                          Explore
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-lg bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide mb-4">
              {ctaHeading}
            </h2>
            <div className="gold-divider-wide" />
            <p className="mt-10 font-sans text-brown-light leading-[1.9] max-w-lg mx-auto">
              {ctaText}
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-12 px-12 py-5 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light hover:shadow-xl"
            >
              {ctaButtonText}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
