import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import HorizontalGallery from "@/components/HorizontalGallery";
import { getHomePage } from "@/sanity/queries";
import { resolveImage } from "@/sanity/image";
import { splitParagraphs } from "@/sanity/helpers";

/* ── Fallback data ── */

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
    title: "Women\u2019s Wellness Sanctuary",
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

  /* ── Resolve content ── */
  const heroTitle = data?.heroTitle ?? "Theoria Sophia";
  const heroTagline1 = data?.heroTagline1 ?? "Theoria \u2014 To Behold";
  const heroTagline2 = data?.heroTagline2 ?? "Sophia \u2014 Wisdom";
  const heroCtaText = data?.heroCtaText ?? "Explore";
  const heroBackground = resolveImage(data?.heroBackground, "/images/IMG_5655-hero-bg.jpeg");

  const approachHeading = data?.approachHeading ?? "Our Approach";
  const approachParagraphs = splitParagraphs(data?.approachText, [
    "This space is a sanctuary for women to find safety, love, and peace within their bodies and lives.",
    "We are devoted to bringing content and products that restore humanity\u2019s natural connection to nature, and their true authentic selves.",
    "While also focusing on the health of eco architecture and design, food and travel, and health and wellness.",
  ]);
  const approachImage = resolveImage(data?.approachImage, "/images/our-approach-bg.jpg");

  const dividerImg = resolveImage(data?.dividerImage, "/images/divider-image.jpg");

  const ourSpaceHeading = data?.ourSpaceHeading ?? "Our Space";
  const ourSpaceTagline = data?.ourSpaceTagline ?? "Theoria Sophia is a sanctuary for fostering peace on earth and within the body.";
  const ourSpaceSubtitle = data?.ourSpaceSubtitle ?? "To restore natural beauty and cultivate inner gnosis.";

  const herstoryHeading = data?.herstoryHeading ?? "Ancient Her-story";
  const herstorySubtitle = data?.herstorySubtitle ?? "Online Course";
  const herstoryParagraphs = splitParagraphs(data?.herstoryText, [
    "Sharing the mother lineage of the oracles of old.",
    "An educational deep dive into forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.",
    "Honey bee ancient wisdom from tenders of the garden of eden, a deep dive into the true story of Eve, the Garden, Sophia, and creation.",
  ]);
  const herstoryCtaText = data?.herstoryCtaText ?? "Learn More";

  const branchesHeading = data?.branchesHeading ?? "Explore";
  const branchesSubtitle = data?.branchesSubtitle ?? "Branches on the tree of this living wellness sanctuary";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawBranches = (data?.branches as any[]) ?? null;
  const branches = rawBranches
    ? rawBranches.map((b, i) => ({
        ...defaultBranches[i],
        ...b,
        image: b?.image?.asset ? b.image : defaultBranches[i]?.image ?? "/images/explore-IMG_2778.jpg",
      }))
    : defaultBranches;

  const holisticHeading = data?.holisticHeading ?? "Holistic Approach";
  const holisticText = data?.holisticText ?? "Experience the harmonious blend of ancient healing traditions and modern wellness techniques, as our dedicated team takes you on a transformative wellness journey.";
  const holisticBackground = resolveImage(data?.holisticBackground, "/images/manifesto-left.jpg");

  const manifestoParagraphs = splitParagraphs(data?.manifestoText, [
    "Claim sanctuary within your body, and treat it with the utmost respect.",
    "We were born into a garden of splendor and love.",
    "Restore the body, restore the garden of earth, and restore the family back to wholeness.",
    "Theoria Sophia is in devotion to restoring the inner garden of the true feminine essence.",
  ]);
  const manifestoTagline = data?.manifestoTagline ?? "Comfortable. Relaxed. Embodied.";
  const manifestoLeftImage = resolveImage(data?.manifestoLeftImage, "/images/manifesto-left.jpg");
  const manifestoRightImage = resolveImage(data?.manifestoRightImage, "/images/manifesto-right.jpg");

  const founderLabel = data?.founderLabel ?? "Meet our Founder";
  const founderName = data?.founderName ?? "Zefirah";
  const founderBio = splitParagraphs(data?.founderBio, [
    "Led by a deep devotion to the sacred feminine and a reverence for the earth, Zefirah founded Theoria Sophia as a living sanctuary \u2014 a space where ancient wisdom meets modern healing.",
    "Her work weaves together the threads of forgotten traditions, ecological stewardship, and holistic wellness into a tapestry of transformation for women seeking to come home to themselves.",
  ]);
  const founderImage = resolveImage(data?.founderImage, "/images/founder-zefirah.jpg");

  const ecoLabel = data?.ecoLabel ?? "Our Sister Company";
  const ecoHeading = data?.ecoHeading ?? "Eco Based Living";
  const ecoSubtitle = data?.ecoSubtitle ?? "Azura";
  const ecoParagraphs = splitParagraphs(data?.ecoText, [
    "Azura is our building and design team focused on eco-based architecture and design. We create homes, systems, and structures centered on feng shui, environmental health, biomimicry, and luxury living.",
    "Our design team also does interior design for private clients and fix-and-flip projects for personal hire.",
    "Along with all of Azura\u2019s building systems, we create pollinator habitats in our landscaping to give back to the natural world, while creating a zen and romantic atmosphere.",
  ]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ecoImages = (data?.ecoCarouselImages as any[])?.map((img: { asset?: { url?: string } }) => img?.asset?.url ?? "") ?? defaultEcoImages;

  const beStillHeading = data?.beStillHeading ?? "Be still, and breathe.";
  const beStillTagline = data?.beStillTagline ?? "Our goal is to help humanity find peace and restore the garden of life.";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const galleryImages = (data?.beStillGalleryImages as any[])?.map((img: { asset?: { url?: string } }) => img?.asset?.url ?? "") ?? defaultGalleryImages;

  const podcastHeading = data?.podcastHeading ?? "Listen to our Podcast";
  const podcastText = data?.podcastText ?? "Join us for conversations on ancient wisdom, sacred living, and the journey home to the true self.";
  const podcastCoverImage = resolveImage(data?.podcastCoverImage, "/images/podcast-logo.jpg");
  const podcastBackground = resolveImage(data?.podcastBackground, "/images/podcast-cover-bg.jpg");

  const ctaHeading = data?.ctaHeading ?? "Begin Your Journey";
  const ctaText = data?.ctaText ?? "Embark on a journey to rejuvenation. Connect with us and experience the transformative power of personalized holistic care.";
  const ctaButtonText = data?.ctaButtonText ?? "Connect With Us";

  const finalImg = resolveImage(data?.finalImage, "/images/inquire-bg.jpg");

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={heroBackground}
          alt="Ethereal nature background"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/30 via-cream-light/20 to-cream-light/70" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia logo"
            width={100}
            height={100}
            className="mx-auto mb-10 animate-scale-in animate-float"
          />
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-brown tracking-wider mb-8">
            {heroTitle}
          </h1>
          <div className="gold-divider-wide" />
          <p className="font-serif text-xl md:text-2xl text-brown italic mt-8 animate-fade-in animate-delay-3">
            {heroTagline1}
          </p>
          <p className="font-serif text-xl md:text-2xl text-brown italic mt-1 animate-fade-in animate-delay-4">
            {heroTagline2}
          </p>

          <div className="mt-14 animate-fade-in animate-delay-5">
            <Link
              href="#approach"
              className="inline-block px-10 py-4 border border-brown-dark text-brown-dark font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold hover:text-white hover:tracking-[0.45em] hover:border-gold"
            >
              {heroCtaText}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-6">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/30 to-gold/60 mx-auto" />
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* ═══════════════════════ OUR APPROACH (Sticky Image) ═══════════════════════ */}
      <div id="approach" className="relative">
        {/* Sticky background image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
          <Image
            src={approachImage}
            alt="Ancient wisdom"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cream-light/30" />
        </div>

        {/* Approach text overlaid on image */}
        <div className="-mt-screen relative">
          <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center px-6">
              <ScrollReveal direction="fade" duration={1400}>
                <div className="bg-cream-light/85 backdrop-blur-sm p-12 md:p-20">
                  <Image
                    src="/images/external-file-ornament.png"
                    alt=""
                    width={50}
                    height={20}
                    className="mx-auto mb-8 opacity-30"
                  />
                  <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal mb-6 tracking-wide">
                    {approachHeading}
                  </h2>
                  <div className="gold-divider-wide" />
                  <div className="mt-10 space-y-6 font-sans text-brown-light leading-[1.9] text-[15px]">
                    {approachParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Divider that slides over the image */}
          <div className="relative">
            <div className="h-32 bg-gradient-to-b from-transparent to-cream-light" />
            <div className="bg-cream-light">
              <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <Image
                  src={dividerImg}
                  alt="Sacred space"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  style={{ objectPosition: "center 40%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ScrollReveal direction="scale">
                    <div className="text-center">
                      <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60 mx-auto mb-6" />
                      <Image
                        src="/images/logotheoria.png"
                        alt=""
                        width={250}
                        height={250}
                        className="mx-auto opacity-80"
                      />
                      <div className="w-px h-12 bg-gradient-to-t from-transparent to-white/60 mx-auto mt-6" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>

          {/* Our Space slides over the image */}
          <section className="section-padding-lg bg-cream-light relative">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal direction="fade" duration={1400}>
                <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-8">
                  {ourSpaceHeading}
                </p>
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal italic leading-[1.4] font-light">
                  {ourSpaceTagline}
                </p>
                <div className="ornament-line">
                  <span className="text-gold-muted text-lg">&loz;</span>
                </div>
                <p className="font-serif text-xl md:text-2xl text-brown-light/70 italic">
                  {ourSpaceSubtitle}
                </p>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════ ANCIENT HERSTORY COURSE ═══════════════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              {herstorySubtitle}
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              {herstoryHeading}
            </h2>
            <div className="gold-divider-wide" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <ScrollReveal direction="left" delay={100}>
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

            <ScrollReveal delay={200} className="text-center px-2">
              <div className="relative aspect-square w-44 mx-auto mb-10 overflow-hidden rounded-full border border-gold/20 shadow-lg">
                <Image
                  src="/images/ancient-herstory-2.jpg"
                  alt="Vessel of wisdom"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="space-y-5 font-sans text-brown-light text-sm leading-[1.9]">
                {herstoryParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                href="/ancient-herstory"
                className="inline-block mt-10 px-10 py-4 border border-gold/50 text-gold font-sans text-[11px] tracking-[0.3em] uppercase transition-all duration-700 hover:bg-gold hover:text-white"
              >
                {herstoryCtaText}
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
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

      {/* ═══════════════════════ EXPLORE BRANCHES ═══════════════════════ */}
      <section className="section-padding-lg">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide mb-4">
              {branchesHeading}
            </h2>
            <div className="gold-divider-wide" />
            <p className="mt-8 font-sans text-brown-light/70 text-sm tracking-wider max-w-md mx-auto">
              {branchesSubtitle}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <ScrollReveal key={branch.title} delay={i * 80} direction={i % 2 === 0 ? "up" : "scale"}>
                  <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                    <Image
                      src={resolveImage(branch.image, "/images/explore-IMG_2778.jpg")}
                      alt={branch.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent transition-all duration-700 group-hover:from-charcoal/70" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-700 group-hover:translate-y-[-4px]">
                      <p className="font-sans text-[10px] text-gold-light tracking-[0.3em] uppercase mb-2">
                        {branch.detail}
                      </p>
                      <h3 className="font-serif text-2xl font-light mb-1 tracking-wide">
                        {branch.title}
                      </h3>
                      <p className="font-sans text-sm text-white/60">
                        {branch.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOLISTIC + MANIFESTO ═══════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src={holisticBackground}
          alt="Holistic healing"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <ScrollReveal direction="fade" duration={1400}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              {holisticHeading}
            </p>
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-[1.6] font-light italic">
              {holisticText}
            </p>
            <div className="gold-divider-wide mt-8" />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ BODY MANIFESTO ═══════════════════════ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2.5fr_1fr] gap-10 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={manifestoLeftImage}
                alt="Sacred feminine"
                fill
                className="object-cover image-reveal"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="text-center px-4 md:px-8">
            <div className="space-y-8">
              {manifestoParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={`font-serif text-xl md:text-2xl leading-[1.6] italic ${
                    i === 1
                      ? "text-gradient-gold text-2xl md:text-3xl"
                      : "text-brown"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="ornament-line">
              <span className="text-gold-muted text-lg">&loz;</span>
            </div>
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brown-light/50">
              {manifestoTagline}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={manifestoRightImage}
                alt="Inner garden"
                fill
                className="object-cover image-reveal"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ FOUNDER ═══════════════════════ */}
      <section className="section-padding-lg bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" duration={1200}>
            <div className="relative overflow-hidden max-w-lg mx-auto shadow-2xl">
              <Image
                src={founderImage}
                alt={`${founderName}, founder of Theoria Sophia`}
                width={600}
                height={750}
                className="w-full h-auto object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} duration={1200}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              {founderLabel}
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-charcoal mb-6 tracking-wide">
              {founderName}
            </h2>
            <div className="gold-divider !mx-0" />
            <div className="mt-10 space-y-5 font-sans text-brown-light leading-[1.9] text-[15px]">
              {founderBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ ECO LIVING / AZURA ═══════════════════════ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              {ecoLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal mb-2 tracking-wide">
              {ecoHeading}
            </h2>
            <p className="font-serif text-2xl text-gold-muted italic mb-8">
              {ecoSubtitle}
            </p>
            <div className="gold-divider !mx-0" />
            <div className="mt-10 space-y-5 font-sans text-brown-light leading-[1.9] text-[15px]">
              {ecoParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <ImageCarousel images={ecoImages} aspectRatio="4/3" />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ BE STILL ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto text-center mb-14 px-6">
          <ScrollReveal direction="fade" duration={1400}>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide mb-4">
              {beStillHeading}
            </h2>
            <div className="gold-divider-wide" />
            <p className="mt-8 font-serif text-lg md:text-xl text-brown-light/70 italic max-w-lg mx-auto">
              {beStillTagline}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <HorizontalGallery images={galleryImages} speed={30} />
        </ScrollReveal>
      </section>

      {/* ═══════════════════════ PODCAST ═══════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src={podcastBackground}
          alt="Podcast background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="gradient-fade-top" style={{ background: "linear-gradient(to top, transparent, var(--cream))" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-24">
          <ScrollReveal direction="scale">
            <Image
              src={podcastCoverImage}
              alt="Theoria Sophia Podcast"
              width={180}
              height={180}
              className="rounded-2xl mx-auto mb-12 shadow-2xl"
            />
            <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
              {podcastHeading}
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8" />
            <p className="font-sans text-white/60 text-sm leading-[1.9] max-w-md mx-auto">
              {podcastText}
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream-light" />
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="section-padding-lg">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <Image
              src="/images/logotheoria.png"
              alt=""
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
              href="#contact"
              className="inline-block mt-12 px-12 py-5 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light hover:shadow-xl hover:tracking-[0.45em]"
            >
              {ctaButtonText}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ FINAL IMAGE ═══════════════════════ */}
      <section className="relative h-[45vh] overflow-hidden">
        <Image
          src={finalImg}
          alt="Sanctuary"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/50 via-transparent to-cream-light/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={70}
            height={70}
            className="opacity-50 animate-breathe"
          />
        </div>
      </section>
    </>
  );
}
