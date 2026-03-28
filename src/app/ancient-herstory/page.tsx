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
  const heroBackground = resolveImage(data?.heroBackground, "/images/ancient-herstory-hero.jpeg");

  const introHeading = data?.introHeading ?? "The Lost Mother Archives";
  const introParagraphs = splitParagraphs(data?.introText, [
    "This online course shares the mother lineage of the oracles of old \u2014 an educational deep dive into forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.",
    "Honey bee ancient wisdom from tenders of the garden of eden, a deep dive into the true story of Eve, the Garden, Sophia, and creation.",
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const features = (data?.features as any[]) ?? defaultFeatures;

  const quoteText = data?.quoteText ?? "To remember is to restore.";
  const quoteBackground = resolveImage(data?.quoteBackground, "/images/divider-image.jpg");

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
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroBackground}
          alt="Ancient Egyptian bee hieroglyph relief"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/50 via-cream-light/30 to-cream-light/70" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-charcoal tracking-wider mb-4">
            {heroTitle}
          </h1>
          <p className="font-serif text-2xl text-gold-muted italic mb-4">
            {heroSubtitle}
          </p>
          <div className="gold-divider-wide" />
          <p className="mt-8 font-sans text-sm text-brown-light/70 max-w-md mx-auto leading-[1.9]">
            {heroDescription}
          </p>
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* Introduction */}
      <section className="section-padding-lg">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <Image
              src="/images/external-file-ornament.png"
              alt=""
              width={50}
              height={20}
              className="mx-auto mb-10 opacity-25"
            />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 tracking-wide">
              {introHeading}
            </h2>
            <div className="gold-divider-wide" />
            <div className="mt-10 space-y-6 font-sans text-brown-light leading-[1.9] text-[15px]">
              {introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Columns */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
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
                delay={(i + 1) * 150}
                direction="scale"
                className="text-center"
              >
                <div className="relative aspect-square w-36 mx-auto mb-8 overflow-hidden rounded-full border border-gold/20 shadow-lg">
                  <Image
                    src={resolveImage(feature.image, "/images/ancient-herstory-1.jpg")}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-brown-light leading-[1.9]">
                  {feature.description}
                </p>
              </ScrollReveal>
            )
          )}
        </div>
      </section>

      {/* Quote Divider */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={quoteBackground}
          alt="Sacred landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="gradient-fade-top" style={{ background: "linear-gradient(to top, transparent, var(--cream))" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal direction="scale" duration={1400}>
            <div className="text-center px-6">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/50 mx-auto mb-6" />
              <p className="font-serif text-3xl md:text-5xl text-white font-light italic tracking-wide">
                &ldquo;{quoteText}&rdquo;
              </p>
              <div className="w-px h-10 bg-gradient-to-t from-transparent to-white/50 mx-auto mt-6" />
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream-light" />
      </section>

      {/* Course Details */}
      <section className="section-padding-lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide mb-4">
              {courseHeading}
            </h2>
            <div className="gold-divider-wide" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {courseItems.map(
              (item: { title: string; text: string }, i: number) => (
                <ScrollReveal
                  key={item.title}
                  delay={i * 100}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div className="border-l border-gold/30 pl-8">
                    <h3 className="font-serif text-2xl font-light text-charcoal mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-brown-light leading-[1.9]">
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
      <section className="section-padding-lg bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <Image
              src="/images/logotheoria.png"
              alt="Theoria Sophia"
              width={50}
              height={50}
              className="mx-auto mb-10 opacity-30 animate-breathe"
            />
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
