import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import { getHomePage } from "@/sanity/queries";
import { resolveImage } from "@/sanity/image";
import { splitParagraphs } from "@/sanity/helpers";

/* ── Fallback data (used when Sanity is not configured) ── */

const defaultEcoImages = [
  "/images/eco-carousel-01.jpg",
  "/images/eco-carousel-02.jpg",
  "/images/eco-carousel-03.jpg",
  "/images/eco-carousel-04.jpg",
  "/images/eco-carousel-05.jpg",
  "/images/eco-carousel-06.jpeg",
  "/images/eco-carousel-07.jpg",
  "/images/eco-carousel-08.jpg",
  "/images/eco-carousel-09.jpg",
];

const defaultGalleryImages = [
  "/images/gallery-01.jpg",
  "/images/gallery-02.jpg",
  "/images/gallery-03.jpg",
  "/images/gallery-04.jpg",
  "/images/gallery-05.jpg",
  "/images/gallery-06.jpg",
  "/images/gallery-07.jpg",
  "/images/gallery-08.jpg",
];

const defaultBranches = [
  {
    title: "Honey Bee Educational Center",
    subtitle: "Creating sanctuaries for the pollinators",
    detail: "Theoria Sophia non-profit",
    image: "/images/explore-IMG_2778.jpg",
  },
  {
    title: "Women's Wellness Sanctuary",
    subtitle: "Wealth, wellness, and health",
    detail: "Core Theoria Sophia theology",
    image: "/images/sacred-union-photo.jpg",
  },
  {
    title: "Eco Jewelry & Fashion",
    subtitle: "Amari",
    detail: "Earth-based designs",
    image: "/images/jewelry-IMG_0508.jpeg",
  },
  {
    title: "Sanctuary Design",
    subtitle: "Azura Inc.",
    detail: "Creating sanctuaries",
    image: "/images/fashion-1V1A5902.jpeg",
  },
  {
    title: "Farm to Table",
    subtitle: "Recipes & organic living",
    detail: "Coming soon",
    image: "/images/cooking-section.jpg",
  },
  {
    title: "Sacred Travel",
    subtitle: "Finding sanctuaries around the globe",
    detail: "Heaven on earth locations",
    image: "/images/travel-section.jpg",
  },
];

export default async function Home() {
  const data = await getHomePage();

  /* ── Resolve all content with fallbacks ── */
  const heroTitle = data?.heroTitle ?? "Theoria Sophia";
  const heroTagline1 = data?.heroTagline1 ?? "Theoria \u2014 To Behold";
  const heroTagline2 = data?.heroTagline2 ?? "Sophia \u2014 Wisdom";
  const heroCtaText = data?.heroCtaText ?? "Explore";
  const heroBackground = resolveImage(
    data?.heroBackground,
    "/images/IMG_5655-hero-bg.jpeg"
  );

  const approachHeading = data?.approachHeading ?? "Our Approach";
  const approachParagraphs = splitParagraphs(data?.approachText, [
    "This space is a sanctuary for women to find safety, love, and peace within their bodies and lives.",
    "We are devoted to bringing content and products that restore humanity\u2019s natural connection to nature, and their true authentic selves.",
    "While also focusing on the health of eco architecture and design, food and travel, and health and wellness.",
  ]);
  const approachImage = resolveImage(
    data?.approachImage,
    "/images/our-approach-bg.jpg"
  );

  const dividerImg = resolveImage(
    data?.dividerImage,
    "/images/divider-image.jpg"
  );

  const ourSpaceHeading = data?.ourSpaceHeading ?? "Our Space";
  const ourSpaceTagline =
    data?.ourSpaceTagline ??
    "Theoria Sophia is a sanctuary for fostering peace on earth and within the body.";
  const ourSpaceSubtitle =
    data?.ourSpaceSubtitle ??
    "To restore natural beauty and cultivate inner gnosis.";

  const herstoryHeading = data?.herstoryHeading ?? "Ancient Her-story";
  const herstorySubtitle = data?.herstorySubtitle ?? "Online Course";
  const herstoryParagraphs = splitParagraphs(data?.herstoryText, [
    "Sharing the mother lineage of the oracles of old.",
    "An educational deep dive into forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.",
    "Honey bee ancient wisdom from tenders of the garden of eden, a deep dive into the true story of Eve, the Garden, Sophia, and creation.",
  ]);
  const herstoryCtaText = data?.herstoryCtaText ?? "Learn More";

  const branchesHeading = data?.branchesHeading ?? "Explore";
  const branchesSubtitle =
    data?.branchesSubtitle ??
    "Branches on the tree of this living wellness sanctuary";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const branches = (data?.branches as any[]) ?? defaultBranches;

  const holisticHeading = data?.holisticHeading ?? "Holistic Approach";
  const holisticText =
    data?.holisticText ??
    "Experience the harmonious blend of ancient healing traditions and modern wellness techniques, as our dedicated team takes you on a transformative wellness journey.";
  const holisticBackground = resolveImage(
    data?.holisticBackground,
    "/images/manifesto-left.jpg"
  );

  const manifestoParagraphs = splitParagraphs(data?.manifestoText, [
    "Claim sanctuary within your body, and treat it with the utmost respect.",
    "We were born into a garden of splendor and love.",
    "Restore the body, restore the garden of earth, and restore the family back to wholeness.",
    "Theoria Sophia is in devotion to restoring the inner garden of the true feminine essence.",
  ]);
  const manifestoTagline =
    data?.manifestoTagline ?? "Comfortable. Relaxed. Embodied.";
  const manifestoLeftImage = resolveImage(
    data?.manifestoLeftImage,
    "/images/manifesto-left.jpg"
  );
  const manifestoRightImage = resolveImage(
    data?.manifestoRightImage,
    "/images/manifesto-right.jpg"
  );

  const founderLabel = data?.founderLabel ?? "Meet our Founder";
  const founderName = data?.founderName ?? "Zefirah";
  const founderBio = splitParagraphs(data?.founderBio, [
    "Led by a deep devotion to the sacred feminine and a reverence for the earth, Zefirah founded Theoria Sophia as a living sanctuary \u2014 a space where ancient wisdom meets modern healing.",
    "Her work weaves together the threads of forgotten traditions, ecological stewardship, and holistic wellness into a tapestry of transformation for women seeking to come home to themselves.",
  ]);
  const founderImage = resolveImage(
    data?.founderImage,
    "/images/founder-zefirah.jpg"
  );

  const ecoLabel = data?.ecoLabel ?? "Our Sister Company";
  const ecoHeading = data?.ecoHeading ?? "Eco Based Living";
  const ecoSubtitle = data?.ecoSubtitle ?? "Azura";
  const ecoParagraphs = splitParagraphs(data?.ecoText, [
    "Azura is our building and design team focused on eco-based architecture and design. We create homes, systems, and structures centered on feng shui, environmental health, biomimicry, and luxury living.",
    "Our design team also does interior design for private clients and fix-and-flip projects for personal hire.",
    "Along with all of Azura\u2019s building systems, we create pollinator habitats in our landscaping to give back to the natural world, while creating a zen and romantic atmosphere.",
  ]);
  const ecoImages =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data?.ecoCarouselImages as any[])?.map(
      (img: { asset?: { url?: string } }) => img?.asset?.url ?? ""
    ) ?? defaultEcoImages;

  const beStillHeading = data?.beStillHeading ?? "Be still, and breathe.";
  const beStillTagline =
    data?.beStillTagline ??
    "Our goal is to help humanity find peace and restore the garden of life.";
  const galleryImages =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data?.beStillGalleryImages as any[])?.map(
      (img: { asset?: { url?: string } }) => img?.asset?.url ?? ""
    ) ?? defaultGalleryImages;

  const podcastHeading = data?.podcastHeading ?? "Listen to our Podcast";
  const podcastText =
    data?.podcastText ??
    "Join us for conversations on ancient wisdom, sacred living, and the journey home to the true self.";
  const podcastCoverImage = resolveImage(
    data?.podcastCoverImage,
    "/images/podcast-logo.jpg"
  );
  const podcastBackground = resolveImage(
    data?.podcastBackground,
    "/images/podcast-cover-bg.jpg"
  );

  const ctaHeading = data?.ctaHeading ?? "Begin Your Journey";
  const ctaText =
    data?.ctaText ??
    "Embark on a journey to rejuvenation. Connect with us and experience the transformative power of personalized holistic care.";
  const ctaButtonText = data?.ctaButtonText ?? "Connect With Us";

  const finalImg = resolveImage(data?.finalImage, "/images/inquire-bg.jpg");

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={heroBackground}
          alt="Ethereal nature background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/40" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia logo"
            width={120}
            height={120}
            className="mx-auto mb-8 animate-scale-in"
          />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-wide mb-6">
            {heroTitle}
          </h1>
          <div className="gold-divider" />
          <p className="font-serif text-xl md:text-2xl text-brown-light italic mt-6 animate-fade-in animate-delay-3">
            {heroTagline1}
          </p>
          <p className="font-serif text-xl md:text-2xl text-brown-light italic animate-fade-in animate-delay-4">
            {heroTagline2}
          </p>

          <div className="mt-12 animate-fade-in animate-delay-5">
            <Link
              href="#approach"
              className="inline-block px-8 py-3 border border-gold/60 text-gold font-sans text-xs tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold hover:text-white hover:tracking-[0.35em]"
            >
              {heroCtaText}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-5">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/40 mx-auto" />
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section id="approach" className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          <div className="relative h-64 md:h-auto">
            <Image
              src={approachImage}
              alt="Ancient wisdom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-charcoal/20" />
          </div>

          <div className="flex items-center justify-center bg-cream section-padding">
            <ScrollReveal className="max-w-lg">
              <Image
                src="/images/external-file-ornament.png"
                alt=""
                width={60}
                height={25}
                className="mb-6 opacity-50"
              />
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
                {approachHeading}
              </h2>
              <div className="gold-divider !mx-0" />
              <div className="mt-8 space-y-5 font-sans text-brown-light leading-relaxed text-[15px]">
                {approachParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH DIVIDER IMAGE ===== */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={dividerImg}
          alt="Sacred space"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/20" />
      </section>

      {/* ===== OUR SPACE ===== */}
      <section className="bg-cream-light section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
              {ourSpaceHeading}
            </h2>
            <div className="gold-divider" />
            <p className="mt-8 font-serif text-xl md:text-2xl text-brown-light italic leading-relaxed">
              {ourSpaceTagline}
            </p>
            <p className="mt-4 font-serif text-lg text-brown-light/80 italic">
              {ourSpaceSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ANCIENT HERSTORY COURSE ===== */}
      <section className="bg-cream section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
              {herstoryHeading}
            </h2>
            <p className="font-serif text-xl text-gold-muted italic">
              {herstorySubtitle}
            </p>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <ScrollReveal delay={100}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/ancient-herstory-1.jpg"
                  alt="Ancient wisdom teachings"
                  fill
                  className="object-cover image-zoom"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="text-center px-4">
              <div className="relative aspect-square w-48 mx-auto mb-8 overflow-hidden rounded-full border-2 border-gold/20">
                <Image
                  src="/images/ancient-herstory-2.jpg"
                  alt="Vessel of wisdom"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="space-y-4 font-sans text-brown-light text-sm leading-relaxed">
                {herstoryParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                href="/ancient-herstory"
                className="inline-block mt-8 px-8 py-3 border border-gold/60 text-gold font-sans text-xs tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold hover:text-white"
              >
                {herstoryCtaText}
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/bee-hieroglyph.png"
                  alt="Ancient Egyptian bee hieroglyph"
                  fill
                  className="object-cover image-zoom"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EXPLORE BRANCHES ===== */}
      <section className="bg-cream-light section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
              {branchesHeading}
            </h2>
            <div className="gold-divider" />
            <p className="mt-6 font-sans text-brown-light text-sm tracking-wide">
              {branchesSubtitle}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map(
              (
                branch: {
                  title: string;
                  subtitle: string;
                  detail: string;
                  image: string | { asset?: { _ref?: string } };
                },
                i: number
              ) => (
                <ScrollReveal key={branch.title} delay={i * 100}>
                  <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                    <Image
                      src={resolveImage(branch.image, "/images/explore-IMG_2778.jpg")}
                      alt={branch.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl font-light mb-1">
                        {branch.title}
                      </h3>
                      <p className="font-sans text-sm text-white/70">
                        {branch.subtitle}
                      </p>
                      <p className="font-sans text-xs text-gold-light mt-1 tracking-wide uppercase">
                        {branch.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== HOLISTIC APPROACH ===== */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src={holisticBackground}
          alt="Holistic healing"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/85" />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">
              {holisticHeading}
            </h2>
            <div className="gold-divider" />
            <p className="mt-8 font-sans text-brown-light leading-relaxed">
              {holisticText}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BODY MANIFESTO ===== */}
      <section className="bg-cream section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={manifestoLeftImage}
                alt="Sacred feminine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="text-center px-4">
            <div className="space-y-5 font-serif text-lg md:text-xl text-brown italic leading-relaxed">
              {manifestoParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 1 ? "text-gold-muted" : undefined}
                >
                  {p}
                </p>
              ))}
              <div className="gold-divider" />
              <p className="font-sans text-sm tracking-[0.2em] uppercase text-brown-light/60 !mt-8">
                {manifestoTagline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={manifestoRightImage}
                alt="Inner garden"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="bg-cream-light section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden max-w-md mx-auto">
              <Image
                src={founderImage}
                alt={`${founderName}, founder of Theoria Sophia`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              {founderLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
              {founderName}
            </h2>
            <div className="gold-divider !mx-0" />
            <div className="mt-8 space-y-4 font-sans text-brown-light leading-relaxed text-[15px]">
              {founderBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ECO LIVING / AZURA ===== */}
      <section className="bg-cream section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              {ecoLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-2">
              {ecoHeading}
            </h2>
            <p className="font-serif text-2xl text-gold-muted italic mb-6">
              {ecoSubtitle}
            </p>
            <div className="gold-divider !mx-0" />
            <div className="mt-8 space-y-4 font-sans text-brown-light leading-relaxed text-[15px]">
              {ecoParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ImageCarousel images={ecoImages} aspectRatio="4/3" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BE STILL AND BREATHE ===== */}
      <section className="bg-cream-light section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
              {beStillHeading}
            </h2>
            <div className="gold-divider" />
            <p className="mt-6 font-serif text-lg text-brown-light italic">
              {beStillTagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ImageCarousel images={galleryImages} aspectRatio="16/9" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PODCAST ===== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={podcastBackground}
          alt="Podcast background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
          <ScrollReveal>
            <Image
              src={podcastCoverImage}
              alt="Theoria Sophia Podcast"
              width={200}
              height={200}
              className="rounded-2xl mx-auto mb-10 shadow-2xl"
            />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
              {podcastHeading}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6" />
            <p className="font-sans text-white/70 text-sm max-w-md mx-auto">
              {podcastText}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BOOK SESSION CTA ===== */}
      <section className="bg-cream-light section-padding">
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
              href="#contact"
              className="inline-block mt-10 px-10 py-4 bg-gold text-white font-sans text-xs tracking-[0.3em] uppercase transition-all duration-500 hover:bg-gold-light hover:shadow-lg"
            >
              {ctaButtonText}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL IMAGE ===== */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={finalImg}
          alt="Sanctuary"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/30 to-cream-light/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={80}
            height={80}
            className="opacity-60"
          />
        </div>
      </section>
    </>
  );
}
