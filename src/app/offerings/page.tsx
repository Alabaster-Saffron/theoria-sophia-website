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
    title: "Women's Wellness Sanctuary",
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
  const heroBackground = resolveImage(
    data?.heroBackground,
    "/images/offerings-sand-dunes.jpg"
  );

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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroBackground}
          alt="Sacred landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/50" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="font-serif text-5xl md:text-7xl font-light text-charcoal tracking-wide mb-4">
            {heroTitle}
          </h1>
          <div className="gold-divider" />
          <p className="mt-6 font-serif text-xl text-brown-light italic max-w-lg mx-auto">
            {heroSubtitle}
          </p>
          <p className="mt-3 font-sans text-sm text-brown-light/70 max-w-md mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Ornament divider */}
      <section className="bg-cream-light py-12 text-center">
        <Image
          src="/images/external-file-ornament.png"
          alt=""
          width={80}
          height={34}
          className="mx-auto opacity-40"
        />
      </section>

      {/* Offerings Grid */}
      <section className="bg-cream-light section-padding">
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
              <ScrollReveal key={offering.title} delay={i * 100}>
                <div
                  className={`grid md:grid-cols-2 gap-0 mb-16 last:mb-0 overflow-hidden ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`relative h-72 md:h-auto min-h-[400px] ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={resolveImage(
                        offering.image,
                        "/images/ancient-herstory-1.jpg"
                      )}
                      alt={offering.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div
                    className={`flex items-center bg-cream p-10 md:p-16 ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="max-w-md">
                      <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">
                        {offering.title}
                      </h2>
                      <div className="gold-divider !mx-0" />
                      <p className="mt-6 font-sans text-brown-light text-sm leading-relaxed">
                        {offering.description}
                      </p>
                      {offering.link && (
                        <Link
                          href={offering.link}
                          className="inline-block mt-8 px-8 py-3 border border-gold/60 text-gold font-sans text-xs tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold hover:text-white"
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
      <section className="bg-cream section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
              {ctaHeading}
            </h2>
            <div className="gold-divider" />
            <p className="mt-8 font-sans text-brown-light leading-relaxed">
              {ctaText}
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-10 px-10 py-4 bg-gold text-white font-sans text-xs tracking-[0.3em] uppercase transition-all duration-500 hover:bg-gold-light hover:shadow-lg"
            >
              {ctaButtonText}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
