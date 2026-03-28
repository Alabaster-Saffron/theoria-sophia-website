import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getAncientHerstoryPage } from "@/sanity/queries";
import { resolveImage } from "@/sanity/image";
import { splitParagraphs } from "@/sanity/helpers";

export const metadata: Metadata = {
  title: "Ancient Herstory Archive",
  description:
    "An educational deep dive into the mother lineage of the oracles of old. Forgotten scriptures, teachings, and honey bee ancient wisdom.",
};

const defaultFeatures = [
  {
    title: "The Oracles",
    description:
      "Explore the lineage of ancient oracle traditions and the sacred feminine wisdom keepers who preserved the mysteries across millennia.",
    image: "/images/ancient-herstory-1.jpg",
  },
  {
    title: "Forgotten Scriptures",
    description:
      "Rediscover lost texts and teachings that illuminate the mother lineage \u2014 the hidden thread of wisdom woven through human history.",
    image: "/images/ancient-herstory-2.jpg",
  },
  {
    title: "Bee Wisdom",
    description:
      "The sacred role of the honeybee in ancient temples, the Melissae priestesses, and the living wisdom of the hive as a model for sacred community.",
    image: "/images/explore-IMG_2778.jpg",
  },
];

const defaultCourseItems = [
  {
    title: "The Garden of Eden",
    text: "A deep dive into the true story of Eve, the Garden, and the original blueprint for sacred living.",
  },
  {
    title: "Sophia & Creation",
    text: "Understanding Sophia as the feminine face of wisdom and her role in the creation narrative across traditions.",
  },
  {
    title: "The Melissae Priestesses",
    text: "The bee priestesses of ancient Greece and their connection to prophecy, healing, and the divine feminine.",
  },
  {
    title: "Lost Mother Archives",
    text: "Texts and teachings removed from the canonical record that preserve the mother lineage of spiritual wisdom.",
  },
];

export default async function AncientHerstoryPage() {
  const data = await getAncientHerstoryPage();

  const heroTitle = data?.heroTitle ?? "Ancient Her-story";
  const heroSubtitle = data?.heroSubtitle ?? "Archive";
  const heroDescription =
    data?.heroDescription ??
    "An educational deep dive into the mother lineage of the oracles of old";
  const heroBackground = resolveImage(
    data?.heroBackground,
    "/images/bee-hieroglyph.png"
  );

  const introHeading = data?.introHeading ?? "The Lost Mother Archives";
  const introParagraphs = splitParagraphs(data?.introText, [
    "This online course shares the mother lineage of the oracles of old \u2014 an educational deep dive into forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.",
    "Honey bee ancient wisdom from tenders of the garden of eden, a deep dive into the true story of Eve, the Garden, Sophia, and creation.",
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const features = (data?.features as any[]) ?? defaultFeatures;

  const quoteText = data?.quoteText ?? "To remember is to restore.";
  const quoteBackground = resolveImage(
    data?.quoteBackground,
    "/images/divider-image.jpg"
  );

  const courseHeading = data?.courseHeading ?? "What You Will Explore";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const courseItems = (data?.courseItems as any[]) ?? defaultCourseItems;

  const ctaHeading = data?.ctaHeading ?? "Join the Archive";
  const ctaText =
    data?.ctaText ??
    "Step into the living lineage of ancient wisdom. This course is an invitation to remember what has been forgotten and restore what has been lost.";
  const ctaButtonText = data?.ctaButtonText ?? "Inquire About Enrollment";

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroBackground}
          alt="Ancient Egyptian bee hieroglyph relief"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/60" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-charcoal tracking-wide mb-4">
            {heroTitle}
          </h1>
          <p className="font-serif text-2xl text-gold-muted italic mb-2">
            {heroSubtitle}
          </p>
          <div className="gold-divider" />
          <p className="mt-6 font-sans text-sm text-brown-light/80 max-w-md mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-cream-light section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Image
              src="/images/external-file-ornament.png"
              alt=""
              width={60}
              height={25}
              className="mx-auto mb-8 opacity-40"
            />
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6">
              {introHeading}
            </h2>
            <div className="gold-divider" />
            <div className="mt-8 space-y-5 font-sans text-brown-light leading-relaxed text-[15px]">
              {introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three-column feature */}
      <section className="bg-cream section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {features.map(
            (
              feature: {
                title: string;
                description: string;
                image: string | { asset?: { _ref?: string } };
              },
              i: number
            ) => (
              <ScrollReveal
                key={feature.title}
                delay={(i + 1) * 100}
                className="text-center"
              >
                <div className="relative aspect-square w-40 mx-auto mb-6 overflow-hidden rounded-full border-2 border-gold/20">
                  <Image
                    src={resolveImage(
                      feature.image,
                      "/images/ancient-herstory-1.jpg"
                    )}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-brown-light leading-relaxed">
                  {feature.description}
                </p>
              </ScrollReveal>
            )
          )}
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src={quoteBackground}
          alt="Sacred landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <p className="font-serif text-3xl md:text-4xl text-white font-light italic text-center px-6">
              &ldquo;{quoteText}&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-cream-light section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
              {courseHeading}
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {courseItems.map(
              (item: { title: string; text: string }, i: number) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="border-l-2 border-gold/30 pl-6">
                    <h3 className="font-serif text-xl font-light text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-brown-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <Image
              src="/images/logotheoria.png"
              alt="Theoria Sophia"
              width={60}
              height={60}
              className="mx-auto mb-8 opacity-50"
            />
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
