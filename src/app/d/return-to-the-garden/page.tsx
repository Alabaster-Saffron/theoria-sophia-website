import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import HorizontalGallery from "@/components/HorizontalGallery";

export const metadata: Metadata = {
  title: "Return to the Garden — Documentary Pitch Deck",
  description:
    "A documentary film vision board — Return to the Garden: Bringers of the Garden, The Bees Speak",
  robots: "noindex, nofollow",
};

const P = "/images/pitch/rtg";

const mythosImages = [
  `${P}/mythos-garden-path.jpg`,
  `${P}/mythos-swans-flight.jpg`,
  `${P}/mythos-women-stream.jpg`,
  `${P}/mythos-misty-pond.jpg`,
  `${P}/mythos-woman-lotus.jpg`,
  `${P}/mythos-woman-river.jpg`,
  `${P}/mythos-flower-water.jpg`,
  `${P}/mythos-aerial-meadow.jpg`,
];

const beeImages = [
  `${P}/bee-mood-board.jpg`,
  `${P}/bee-straw-skep.jpg`,
  `${P}/bee-woven-hive.jpg`,
  `${P}/bee-sheltered-skep.jpg`,
  `${P}/bee-hanging-hive.jpg`,
  `${P}/bee-white-rose.jpg`,
  `${P}/bee-natural-skeps.jpg`,
];

const natureImages = [
  `${P}/nature-willow-light.jpg`,
  `${P}/nature-deer.jpg`,
  `${P}/nature-countryside.jpg`,
  `${P}/nature-waterfall.jpg`,
  `${P}/nature-sea-cave.jpg`,
];

const herstoryImages = [
  `${P}/herstory-shadow-linen.jpg`,
  `${P}/herstory-artemis.jpg`,
  `${P}/herstory-kore.jpg`,
  `${P}/herstory-honeycomb-stone.jpg`,
  `${P}/herstory-flower-of-life.jpg`,
  `${P}/herstory-bee-carving.jpg`,
  `${P}/herstory-terraces.jpg`,
  `${P}/herstory-sacred-spring.jpg`,
  `${P}/herstory-virgin-mary-house.jpg`,
];

const allScenes = Array.from(
  { length: 138 },
  (_, i) => `${P}/scenes/scene-${String(i + 1).padStart(3, "0")}.jpg`
);

/**
 * Small helper: a film-credit-style chapter mark with roman numeral.
 * Used to anchor each chapter dramatically.
 */
function ChapterMark({
  numeral,
  label,
  variant = "light",
}: {
  numeral: string;
  label: string;
  variant?: "light" | "dark";
}) {
  const numColor = variant === "dark" ? "text-gold-light/70" : "text-gold/80";
  const labelColor =
    variant === "dark" ? "text-white/50" : "text-brown-light/50";
  const lineColor =
    variant === "dark"
      ? "from-transparent via-gold-light/40 to-transparent"
      : "from-transparent via-gold/30 to-transparent";

  return (
    <div className="flex flex-col items-center">
      <p className={`font-serif text-2xl ${numColor} tracking-[0.4em]`}>
        {numeral}
      </p>
      <div className={`w-12 h-px bg-gradient-to-r ${lineColor} my-4`} />
      <p
        className={`font-sans text-[10px] tracking-[0.5em] uppercase ${labelColor}`}
      >
        {label}
      </p>
    </div>
  );
}

export default function ReturnToTheGardenPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          I. HERO — full-bleed cinematic open
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src={`${P}/hero-garden-gate-v5.jpg`}
          alt="A garden gate bathed in golden morning light, wildflowers lining the path"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        {/* Layered gradients — darker top + bottom for cinematic letterbox feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,16,14,0.65) 0%, rgba(20,16,14,0.25) 30%, rgba(44,38,34,0.05) 55%, rgba(20,16,14,0.55) 90%, rgba(20,16,14,0.85) 100%)",
          }}
        />

        {/* Vertical chapter mark — far left, film credits style */}
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="flex flex-col items-center gap-3">
            <p className="font-serif text-xs text-gold-light/60 tracking-[0.5em] [writing-mode:vertical-rl] rotate-180">
              Documentary Film
            </p>
            <div className="w-px h-20 bg-gradient-to-b from-gold-light/40 to-transparent" />
          </div>
        </div>

        {/* Right side caption */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-20 bg-gradient-to-t from-gold-light/40 to-transparent" />
            <p className="font-serif text-xs text-gold-light/60 tracking-[0.5em] [writing-mode:vertical-rl]">
              Theoria Sophia
            </p>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-gold-light/80 mb-10 animate-fade-up">
            A Film by Zefirah &middot; In Development
          </p>
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light text-white tracking-wide leading-[0.95] animate-fade-up animate-delay-1">
            Return to
            <br />
            <span className="italic text-gold-light/95">the Garden</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-up animate-delay-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-light/60" />
            <span className="text-gold-light/80 text-xs">&loz;</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-light/60" />
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white/85 italic tracking-wide mt-10 animate-fade-up animate-delay-3">
            Honey Bees, Bringers of the Garden
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-up animate-delay-5 z-10">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-white/50">
            Scroll
          </p>
          <div className="w-px h-12 bg-gradient-to-b from-gold-light/60 to-transparent animate-breathe" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          II. PULL QUOTE & VISION — dark cinematic palette
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            src={`${P}/mythos-misty-pond.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 section-padding-lg">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal direction="fade" duration={1400}>
              <Image
                src="/images/logotheoria.png"
                alt="Theoria Sophia"
                width={56}
                height={56}
                className="mx-auto mb-12 opacity-50"
              />
            </ScrollReveal>

            <ScrollReveal direction="fade" duration={1600} delay={150}>
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/95 font-light italic leading-[1.25] tracking-wide text-center">
                &ldquo;What if the oldest wisdom keepers on Earth have been
                speaking to us all along&hellip; and we simply forgot how to
                listen?&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={300}>
              <div className="flex items-center justify-center gap-6 mt-16 mb-16">
                <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent to-gold/40" />
                <span className="text-gold-light/60 text-lg">&loz;</span>
                <div className="flex-1 max-w-[200px] h-px bg-gradient-to-l from-transparent to-gold/40" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={400}>
              <div className="space-y-7 font-sans text-[16px] md:text-[17px] text-white/70 leading-[1.95] max-w-3xl mx-auto">
                <p>
                  Return to the Garden is a feature-length documentary
                  following the ancient, unbroken thread between women, honey
                  bees, and the living garden. Filmed across sacred sites from
                  Anatolia to the English countryside, from Mayan bee
                  sanctuaries to Swiss alpine meadows, this film weaves
                  together the voices of wisdom keepers, naturalists, and
                  everyday stewards of the Earth.
                </p>
                <p>
                  This is not a film made from behind a desk. The interviews
                  are walking, swimming, planting, breathing kinds of
                  conversations, embodied, intimate, and alive. The camera
                  moves the way the garden breathes: slowly, intentionally,
                  with reverence.
                </p>
                <p>
                  The story unfolds through the perspective of the honey bee,
                  nature&rsquo;s oldest oracle, as a guide into a world we
                  have forgotten we belong to.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={500}>
              <p className="mt-20 font-sans text-[10px] tracking-[0.5em] uppercase text-gold-light/50 text-center">
                Feature-Length Documentary &middot; In Development
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          III. CHAPTER ONE — ENTER THE GARDEN (mythos)
          Layered: full-bleed mythos image + floating text card
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cream-light overflow-hidden">
        {/* Top film-credit chapter mark, generous breathing room */}
        <div className="pt-24 md:pt-32 pb-12">
          <ScrollReveal direction="fade">
            <ChapterMark numeral="I." label="Enter the Garden" variant="light" />
          </ScrollReveal>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-tight leading-[1.05] text-center mb-20 italic">
              The film opens
              <br />
              <span className="not-italic">like a dream.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <ScrollReveal direction="left" delay={150} className="md:col-span-7">
              <div className="relative">
                <ImageCarousel
                  images={mythosImages}
                  interval={6500}
                  aspectRatio="3/4"
                />
                {/* Floating credit tag */}
                <div className="absolute -bottom-4 -right-4 hidden md:block bg-cream-light px-6 py-3 border border-gold/30">
                  <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold-muted">
                    Mythos / Opening
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300} className="md:col-span-5 md:pt-12">
              <div className="space-y-7 font-sans text-[15px] md:text-[16px] text-brown leading-[1.95]">
                <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
                  We are drawn into a garden that feels both ancient and alive,
                  mist rising from still ponds, white swans lifting into flight,
                  wildflowers glistening in the morning light. Women move through
                  water and meadow with an ease that feels remembered rather
                  than performed.
                </p>
                <p>
                  The very first scene unfolds beneath the surface of water, a
                  woman suspended in alive magnetism, a primordial, raw, and
                  romantic expression of the feminine. Over this image, a
                  narrative voice begins an ancient folklore: how the oracles
                  came to be. There were once mermaid daughters in the great
                  sea of the Mother, until one day the Mother created the land,
                  and in that act she transformed her daughters into honey bees,
                  to tend the living garden of her creation.
                </p>
                <p>
                  These opening sequences are not just narrated. They are felt.
                  The viewer is invited to slow down, to let the beauty of the
                  natural world do what it has always done, awaken something
                  deep within us.
                </p>
                <p className="font-serif italic text-xl md:text-2xl text-brown-dark leading-[1.5] pt-4 border-t border-gold/20">
                  Through lingering, romantic cinematography we establish the
                  tone of the entire film: reverent, unhurried, and breathing
                  with life. This is the garden we came from. This is the
                  garden we are being called to return to.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IV. INTERSTITIAL — THE FIFTH ELEMENT
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src={`${P}/bee-hive-entrance.jpg`}
          alt="Looking up into a hive entrance, a single bee in flight surrounded by the colony"
          fill
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div
          className="absolute top-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,247,242,1), rgba(250,247,242,0))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to top, rgba(20,16,14,1), rgba(20,16,14,0))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal direction="scale" duration={1600}>
            <div className="text-center px-6">
              <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-light/70 mx-auto mb-8" />
              <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-gold-light/80 mb-6">
                The honey bee as nature&rsquo;s oracle
              </p>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-light italic tracking-wide">
                The Fifth
                <br />
                Element
              </h2>
              <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold-light/70 mx-auto mt-8" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          V. CHAPTER TWO — THE BEES SPEAK (dark continuation)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="pt-24 md:pt-32 pb-12">
          <ScrollReveal direction="fade">
            <ChapterMark numeral="II." label="The Bees Speak" variant="dark" />
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <ScrollReveal direction="left" delay={150} className="md:col-span-6">
              <ImageCarousel
                images={beeImages}
                interval={5500}
                aspectRatio="4/5"
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300} className="md:col-span-6">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] mb-10">
                Beekeeping <span className="italic text-gold-light/90">as devotion.</span>
              </h2>
              <div className="space-y-6 font-sans text-[15px] md:text-[16px] text-white/75 leading-[1.95]">
                <p>
                  At the heart of this documentary is the honey bee, not as a
                  subject of science alone, but as a spiritual teacher, a
                  living thread connecting us to the most ancient forms of
                  wisdom. From the hand-woven skep hives of the English
                  countryside to the sacred log hives of the Mayan Melipona
                  tradition, we journey into a world where beekeeping is an
                  act of devotion.
                </p>
                <p>
                  We meet the keepers who tend bees the old way, without
                  chemicals, without extraction, without force. Their hands
                  move with the same quiet reverence as the women who once
                  tended the temple hives of Artemis at Ephesus.
                </p>
                <p className="font-serif italic text-xl md:text-2xl text-gold-light/95 leading-[1.5] pt-4 border-t border-gold/30">
                  The bees as the fifth element. They build in perfect
                  geometry. They communicate in dance. They give without being
                  asked. This film asks: how to live in reverence to the
                  garden of creation, to life.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VI. INTERSTITIAL — THE GARDEN IS ALIVE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image
          src={`${P}/nature-willow-light.jpg`}
          alt="Sunlight streaming through weeping willows onto a still pond with birds"
          fill
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div
          className="absolute top-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,16,14,1), rgba(20,16,14,0))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to top, rgba(250,247,242,1), rgba(250,247,242,0))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal direction="fade" duration={1800}>
            <div className="text-center px-6 max-w-5xl">
              <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-white/70 mb-8">
                Chapter III &middot; The Living Garden
              </p>
              <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white font-light tracking-tight leading-[0.95]">
                The Garden
                <br />
                <span className="italic text-gold-light/95">is alive.</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-12">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/50" />
                <span className="text-gold-light/80">&loz;</span>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/50" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-white/80 italic max-w-2xl mx-auto mt-10 leading-[1.5]">
                There is a beauty in the natural world so deep it can wake you
                from the longest sleep
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal nature gallery */}
      <section className="py-14 bg-cream-light">
        <HorizontalGallery images={natureImages} speed={20} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VII. CHAPTER FOUR — ANCIENT HERSTORY (rich textured dark)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cream-dark overflow-hidden">
        {/* Dramatic offset image on right — peeks through */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-25 hidden md:block">
          <Image
            src={`${P}/herstory-artemis.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-cream-dark" />
        </div>

        <div className="relative pt-24 md:pt-32 pb-12">
          <ScrollReveal direction="fade">
            <ChapterMark numeral="IV." label="Ancient Herstory" variant="light" />
          </ScrollReveal>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-tight leading-[1.05] mb-16 max-w-4xl">
              <span className="italic text-gold/90">A remembering,</span>
              <br />
              not a history lesson.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={200}>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
              <div className="space-y-7 font-sans text-[15px] md:text-[16px] text-brown leading-[1.95]">
                <p>
                  Throughout the film, subtle suggestions and ties to the
                  ancient world are woven in, touching on Ancient Herstory.
                  This thread is expressed through artistic, poetic glimpses
                  of muse and nature, establishing a deeper sense of
                  inspiration for a world that could be filled with such
                  beauty and grace.
                </p>
              </div>
              <div className="space-y-7 font-sans text-[15px] md:text-[16px] text-brown leading-[1.95]">
                <p>
                  This chapter traces the ancient thread of feminine wisdom
                  through sacred sites, archaeological discoveries, and living
                  traditions that have survived into our own time. It is not a
                  history lesson. It is a remembering.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal herstory gallery */}
      <section className="py-10 bg-cream-dark">
        <HorizontalGallery images={herstoryImages} speed={22} />
      </section>

      {/* Big pull quote on dark */}
      <section className="relative bg-charcoal text-white py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10]">
          <Image
            src={`${P}/herstory-honeycomb-stone.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal direction="scale" duration={1400}>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-light/60 mx-auto mb-10" />
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-white/95 font-light italic tracking-wide leading-[1.3]">
              &ldquo;From the temples of Artemis to the House of the Virgin
              Mary, the garden keepers have always known.&rdquo;
            </p>
            <div className="w-px h-12 bg-gradient-to-t from-transparent to-gold-light/60 mx-auto mt-10" />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VIII. CHAPTER FIVE — THE THREAT (dramatic dark)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="pt-24 md:pt-32 pb-12">
          <ScrollReveal direction="fade">
            <ChapterMark numeral="V." label="The Threat" variant="dark" />
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] text-center mb-20 italic">
              The garden
              <br />
              <span className="not-italic text-gold-light/85">
                is under threat.
              </span>
            </h2>
          </ScrollReveal>

          {/* Larger problem image grid — full bleed feel */}
          <ScrollReveal direction="fade" duration={1600} delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mb-20">
              {[
                {
                  src: `${P}/problems-insemination.jpg`,
                  alt: "Artificial insemination of queen bee",
                },
                {
                  src: `${P}/problems-mating-flight.jpg`,
                  alt: "Bees captured mid-flight",
                },
                {
                  src: `${P}/problems-queen-marking.jpg`,
                  alt: "Queen bee being marked and handled",
                },
                {
                  src: `${P}/problems-queen-cells.jpg`,
                  alt: "Rows of artificial queen cells in commercial operation",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] overflow-hidden grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/30" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" duration={1600} delay={400}>
            <div className="space-y-8 font-sans text-[15px] md:text-[17px] text-white/75 leading-[2] max-w-3xl mx-auto">
              <p>
                Industrial beekeeping has turned the queen into a commodity,
                artificially inseminated, wing-clipped, marked, and replaced
                on schedule. The hive, once a sacred space, has become a
                factory. Bees are shipped across continents, dosed with
                chemicals, and worked so hard for their nectar, yet it is
                often replaced with non-organic refined sugar.
              </p>
              <p>
                This is not the relationship we were meant to have. This is
                the moment in the film where the beauty pauses, and we are
                asked to look clearly at what we have done, and what we are
                losing.
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-gold-light/90 leading-[1.5] pt-6 border-t border-gold/25">
                The honey bees are essential for our survival. They are truly
                the fifth element, for without them we will not survive on
                this precious planet. And yet we continue to treat life with
                disrespect, abusing our rights of living here. This part of
                the film will illuminate not only the bees, but the ways we
                have separated ourselves from the living garden of this
                precious planet, offering a feeling of contrast from the rest
                of the film, a glimpse of how we could be living if we
                reclaimed our sovereignty and restored our relationship with
                ourselves and the natural world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IX. CHAPTER SIX — THE RETURN (back to light, hopeful)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cream-light overflow-hidden">
        <div className="pt-24 md:pt-32 pb-12">
          <ScrollReveal direction="fade">
            <ChapterMark numeral="VI." label="The Return" variant="light" />
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-tight leading-[1.05] text-center mb-24 italic">
              The way home
              <br />
              <span className="not-italic">is the simplest.</span>
            </h2>
          </ScrollReveal>

          {/* Row 1: image-bleed left, text right with credit tag */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-32">
            <ScrollReveal direction="left" delay={200} className="md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                <Image
                  src={`${P}/solutions-elder-garden-v2.png`}
                  alt="An elder woman tending her garden at dusk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={400} className="md:col-span-5">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
                Scene Notes
              </p>
              <p className="font-serif text-3xl md:text-4xl text-charcoal italic leading-[1.4] mb-10">
                Documenting the simplicity of return.
              </p>
              <div className="space-y-6 font-sans text-[15px] md:text-[16px] text-brown leading-[1.95]">
                <p>
                  Within this part of the film I want to document the beauty
                  and simplicity of returning to the garden. Of living in a
                  state of peace on this precious planet. This will highlight
                  intimate interviews, people in the garden, women with their
                  wild horse sanctuaries, and other scenes illuminating what
                  becomes possible when we create sanctuaries for all living
                  life.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: text left, image right (reversed) */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-32">
            <ScrollReveal direction="left" delay={200} className="md:col-span-5 md:order-1">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
                Scene Notes
              </p>
              <p className="font-serif text-3xl md:text-4xl text-charcoal italic leading-[1.4] mb-10">
                Different not as protest, but as joy.
              </p>
              <div className="space-y-6 font-sans text-[15px] md:text-[16px] text-brown leading-[1.95]">
                <p>
                  This part of the film will highlight a nostalgic feeling of
                  freedom and beauty in the human experience.
                </p>
                <p>
                  This chapter follows real people who have chosen a different
                  way, not as protest, but as joy. Their lives are the proof
                  that returning to the garden is not only possible, but
                  deeply beautiful.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={400} className="md:col-span-7 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                <Image
                  src={`${P}/solutions-cycling.jpg`}
                  alt="Two people cycling through a tree-lined path in golden light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3: full-width cinematic closing image */}
          <ScrollReveal direction="fade" delay={200}>
            <div className="relative aspect-[16/10] overflow-hidden shadow-2xl">
              <Image
                src={`${P}/solutions-mother-child-v2.png`}
                alt="A mother and her child harvesting vegetables together in a garden bed"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          X. VISUAL TAPESTRY — full slow-scroll mood reel (138 images)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center px-6 mb-16">
          <ScrollReveal direction="fade" duration={1400}>
            <ChapterMark numeral="VII." label="Visual Tapestry" variant="dark" />
            <h2 className="mt-12 font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight italic leading-[1.1]">
              The full mood
              <br />
              <span className="not-italic text-gold-light/85">of the film.</span>
            </h2>
            <p className="mt-10 font-sans text-[14px] md:text-[15px] text-white/60 italic leading-[1.8] max-w-xl mx-auto">
              A slow drift through every scene, every reference, every
              atmosphere we are weaving toward.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <HorizontalGallery images={allScenes} speed={18} />
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          XI. CALL TO ACTION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cream-light overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]">
          <Image
            src={`${P}/mythos-aerial-meadow.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative section-padding-lg">
          <div className="max-w-3xl mx-auto text-center px-6">
            <ScrollReveal direction="fade" duration={1400}>
              <Image
                src="/images/logotheoria.png"
                alt="Theoria Sophia"
                width={64}
                height={64}
                className="mx-auto mb-12 opacity-50 animate-breathe"
              />
              <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-gold mb-6">
                Closing Invocation
              </p>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-tight leading-[1.05] italic">
                Join the
                <br />
                <span className="not-italic">Journey.</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-12">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
                <span className="text-gold text-sm">&loz;</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
              </div>
              <p className="mt-12 font-sans text-[15px] md:text-[16px] text-brown leading-[1.95] max-w-xl mx-auto">
                We are looking for collaborators, interview subjects, and
                kindred spirits who feel the call to return. If you are a
                wisdom keeper, a beekeeper, a tender of the earth, a
                storyteller, or simply someone who believes that the garden
                is worth protecting, we would love to hear from you.
              </p>
              <Link
                href="mailto:hello@theoriasophia.com"
                className="inline-block mt-14 px-14 py-5 bg-charcoal text-white font-sans text-[11px] tracking-[0.4em] uppercase transition-all duration-700 hover:bg-gold hover:tracking-[0.5em] shadow-xl"
              >
                Get in Touch
              </Link>
              <div className="mt-24 pt-10 border-t border-taupe/30">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-brown-light/60">
                  A Theoria Sophia Production &middot; A Film by Zefirah
                </p>
                <Link
                  href="/"
                  className="inline-block mt-4 font-sans text-[11px] tracking-[0.2em] text-gold-muted hover:text-gold transition-colors duration-300"
                >
                  theoriasophia.com
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
