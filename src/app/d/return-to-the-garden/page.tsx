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

export default function ReturnToTheGardenPage() {
  return (
    <>
      {/* ───────────────────── 1. HERO ───────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={`${P}/hero-garden-gate-v2.png`}
          alt="A garden gate bathed in golden morning light, wildflowers lining the path"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(44,38,34,0.45) 0%, rgba(44,38,34,0.3) 40%, rgba(44,38,34,0.1) 65%, rgba(245,240,232,0.6) 85%, rgba(245,240,232,1) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white/70 mb-8 animate-fade-up">
            A Documentary Film
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-wider leading-[1.1] animate-fade-up animate-delay-1">
            Return to
            <br />
            the Garden
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent mx-auto my-8 animate-fade-up animate-delay-2" />
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/80 italic tracking-wide animate-fade-up animate-delay-2">
            Honey Bees, Bringers of the Garden
          </p>
          <p className="mt-10 font-sans text-[10px] tracking-[0.4em] uppercase text-gold-light/80 animate-fade-up animate-delay-3">
            A Theoria Sophia Production
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up animate-delay-4">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-brown-light/50">
            Scroll
          </p>
          <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent animate-breathe" />
        </div>
      </section>

      {/* ───────────────────── 2. VISION STATEMENT ───────────────────── */}
      <section className="section-padding-lg bg-cream-light">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <Image
              src="/images/logotheoria.png"
              alt="Theoria Sophia"
              width={40}
              height={40}
              className="mx-auto mb-12 opacity-25"
            />
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal font-light italic leading-relaxed tracking-wide">
              &ldquo;What if the oldest wisdom keepers on Earth have been
              speaking to us all along &mdash; and we simply forgot how to
              listen?&rdquo;
            </p>
            <div className="gold-divider-wide mt-10 mb-10" />
            <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
              <p>
                Return to the Garden is a feature-length documentary following
                the ancient, unbroken thread between women, honey bees, and the
                living garden. Filmed across sacred sites from Anatolia to the
                English countryside, from Mayan bee sanctuaries to Swiss alpine
                meadows, this film weaves together the voices of wisdom keepers,
                naturalists, and everyday stewards of the Earth.
              </p>
              <p>
                This is not a film made from behind a desk. The interviews are
                walking, swimming, planting, breathing kinds of conversations
                &mdash; embodied, intimate, and alive. The camera moves the way
                the garden breathes: slowly, intentionally, with reverence.
              </p>
              <p>
                The story unfolds through the perspective of the honey bee
                &mdash; nature&rsquo;s oldest oracle &mdash; as a guide into a
                world we have forgotten we belong to.
              </p>
            </div>
            <div className="ornament-line mt-14 mb-6" />
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-brown-light/50">
              Feature-Length Documentary &nbsp;|&nbsp; In Development
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────────────── 3. ENTER THE GARDEN — MYTHOS ───────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              Chapter One
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              Enter the Garden
            </h2>
            <div className="gold-divider-wide mt-6" />
          </ScrollReveal>

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
                <p>
                  The film opens like a dream. We are drawn into a garden that
                  feels both ancient and alive &mdash; mist rising from still
                  ponds, white swans lifting into flight, wildflowers trembling
                  in the morning light. Women move through water and meadow with
                  an ease that feels remembered rather than performed.
                </p>
                <p>
                  These opening sequences are not narrated. They are felt. The
                  viewer is invited to slow down, to let the beauty of the
                  natural world do what it has always done &mdash; awaken
                  something deep within us.
                </p>
                <p>
                  Through lingering, romantic cinematography we establish the
                  tone of the entire film: reverent, unhurried, and breathing
                  with life. This is the garden we came from. This is the garden
                  we are being called to return to.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <ImageCarousel
                images={mythosImages}
                interval={6000}
                aspectRatio="3/4"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────── 4. THE BEES SPEAK ───────────────────── */}
      {/* Parallax transition */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={`${P}/bee-hive-entrance.jpg`}
          alt="Looking up into a hive entrance, a single bee in flight surrounded by the colony"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, rgba(237,229,216,1), rgba(237,229,216,0))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal direction="scale" duration={1400}>
            <div className="text-center px-6">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold-light/60 mx-auto mb-6" />
              <p className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light italic tracking-wide">
                The Fifth Element
              </p>
              <p className="mt-4 font-sans text-sm text-white/60 tracking-widest uppercase">
                The honey bee as nature&rsquo;s oracle
              </p>
              <div className="w-px h-10 bg-gradient-to-t from-transparent to-gold-light/60 mx-auto mt-6" />
            </div>
          </ScrollReveal>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(245,240,232,1), rgba(245,240,232,0))",
          }}
        />
      </section>

      {/* Bee content */}
      <section className="section-padding bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">
            <ScrollReveal direction="left" delay={200}>
              <ImageCarousel
                images={beeImages}
                interval={5500}
                aspectRatio="4/5"
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
                <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-2">
                  Chapter Two
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide mb-6">
                  The Bees Speak
                </h2>
                <p>
                  At the heart of this documentary is the honey bee &mdash; not
                  as a subject of science alone, but as a spiritual teacher, a
                  living thread connecting us to the most ancient forms of
                  wisdom. From the hand-woven skep hives of the English
                  countryside to the sacred log hives of the Mayan Melipona
                  tradition, we journey into a world where beekeeping is an act
                  of devotion.
                </p>
                <p>
                  We meet the keepers who tend bees the old way &mdash; without
                  chemicals, without extraction, without force. Their hands move
                  with the same quiet reverence as the women who once tended the
                  temple hives of Artemis at Ephesus.
                </p>
                <p>
                  The bee is the fifth element. She builds in perfect geometry.
                  She communicates in dance. She gives without being asked. This
                  film asks: what can she teach us about how to live?
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────── 5. THE LIVING GARDEN — NATURE ───────────────────── */}
      <section className="relative h-[65vh] overflow-hidden">
        <Image
          src={`${P}/nature-willow-light.jpg`}
          alt="Sunlight streaming through weeping willows onto a still pond with birds"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,240,232,1), rgba(245,240,232,0))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal direction="fade" duration={1600}>
            <div className="text-center px-6">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide">
                The Garden Is Alive
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto my-6" />
              <p className="font-serif text-lg md:text-xl text-white/70 italic max-w-lg mx-auto">
                There is a beauty in the natural world so deep it can wake you
                from the longest sleep
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(237,229,216,1), rgba(237,229,216,0))",
          }}
        />
      </section>

      <section className="py-12 bg-cream">
        <HorizontalGallery images={natureImages} speed={20} />
      </section>

      {/* ───────────────────── 6. ANCIENT WISDOM — HERSTORY ───────────────────── */}
      <section className="section-padding-lg bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              Chapter Four
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              Ancient Herstory
            </h2>
            <div className="gold-divider-wide mt-6 mb-10" />
            <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
              <p>
                Beneath every temple, every ancient garden, every carved stone
                rosette lies a forgotten lineage of women who tended the sacred
                relationship between the human world and the living earth. From
                the Melissae priestesses of Ephesus to the Magdalene traditions
                of Anatolia, from Mesopotamian cylinder seals to Mayan stingless
                bee ceremonies &mdash; the garden keepers have always known.
              </p>
              <p>
                This chapter traces the ancient thread of feminine wisdom
                through sacred sites, archaeological discoveries, and living
                traditions that have survived into our own time. It is not a
                history lesson. It is a remembering.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <HorizontalGallery images={herstoryImages} speed={22} />
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="scale" duration={1400}>
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold/40 mx-auto mb-6" />
            <p className="font-serif text-2xl md:text-3xl text-charcoal font-light italic tracking-wide leading-relaxed">
              &ldquo;From the temples of Artemis to the House of the Virgin Mary
              &mdash; the garden keepers have always known.&rdquo;
            </p>
            <div className="w-px h-8 bg-gradient-to-t from-transparent to-gold/40 mx-auto mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────────────── 7. THE CRISIS — PROBLEMS ───────────────────── */}
      <section className="section-padding-lg bg-cream-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="fade" duration={1600}>
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-brown-light/40 mb-4">
                Chapter Five
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal tracking-wide">
                The Threat
              </h2>
              <div className="w-12 h-px bg-brown-light/20 mx-auto mt-6" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" duration={1600} delay={200}>
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto mb-14">
              {[
                { src: `${P}/problems-insemination.jpg`, alt: "Artificial insemination of queen bee" },
                { src: `${P}/problems-mating-flight.jpg`, alt: "Bees captured mid-flight" },
                { src: `${P}/problems-queen-marking.jpg`, alt: "Queen bee being marked and handled" },
                { src: `${P}/problems-queen-cells.jpg`, alt: "Rows of artificial queen cells in commercial operation" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden rounded-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 250px"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" duration={1600} delay={400}>
            <div className="text-center space-y-6 font-sans text-[15px] text-brown-light leading-[1.9] max-w-2xl mx-auto">
              <p>
                But the garden is under threat. Industrial beekeeping has turned
                the queen into a commodity &mdash; artificially inseminated,
                wing-clipped, marked, and replaced on schedule. The hive, once a
                sacred space, has become a factory. Bees are shipped across
                continents, dosed with chemicals, and worked until they collapse.
              </p>
              <p>
                This is not the relationship we were meant to have. This is the
                moment in the film where the beauty pauses, and we are asked to
                look clearly at what we have done &mdash; and what we are losing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────────────── 8. THE RETURN — SOLUTIONS ───────────────────── */}
      <section className="section-padding-lg bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              Chapter Six
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              The Return
            </h2>
            <div className="gold-divider-wide mt-6" />
          </ScrollReveal>

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
            <ScrollReveal direction="left" delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm max-w-md mx-auto">
                <Image
                  src={`${P}/solutions-elder-garden.jpg`}
                  alt="An elder woman tending her garden at dusk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={400}>
              <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
                <p>
                  The return begins with the simplest of acts: a woman, her
                  hands in the soil, tending what is alive. Across the world,
                  people are remembering the old ways &mdash; planting gardens,
                  keeping bees without taking, living in rhythm with the seasons.
                </p>
                <p>
                  These are not experts or celebrities. They are grandmothers,
                  artists, keepers of small plots of earth who understand that
                  the garden is not a metaphor. It is the most practical thing
                  there is.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
            <ScrollReveal direction="left" delay={200} className="md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm max-w-md mx-auto">
                <Image
                  src={`${P}/solutions-cycling.jpg`}
                  alt="Two people cycling through a tree-lined path in golden light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={400} className="md:order-1">
              <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
                <p>
                  The solutions are not complicated. They are ancient. Move
                  slowly. Live close to the earth. Build communities that mirror
                  the hive &mdash; cooperative, generous, alive. Ride your
                  bicycle. Know your neighbors. Let the weeds grow.
                </p>
                <p>
                  This chapter follows real people who have chosen a different
                  way &mdash; not as protest, but as joy. Their lives are the
                  proof that returning to the garden is not only possible, but
                  deeply beautiful.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm max-w-md mx-auto">
                <Image
                  src={`${P}/solutions-mother-child.jpg`}
                  alt="A mother and her child harvesting vegetables together in a garden bed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={400}>
              <div className="space-y-6 font-sans text-[15px] text-brown-light leading-[1.9]">
                <p>
                  And so the garden continues &mdash; not as nostalgia, but as
                  inheritance. A mother shows her child how to pull a zucchini
                  from the vine. A beekeeper opens the hive with bare hands and
                  quiet prayer. Geese waddle home past wisteria at dusk.
                </p>
                <p>
                  This is not a film about going back. It is a film about going
                  forward &mdash; with the wisdom of everything that came before
                  us, carried in our hands like a flower offered to water.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────── 9. CALL TO ACTION ───────────────────── */}
      <section className="section-padding-lg bg-cream-light">
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
              Join the Journey
            </h2>
            <div className="gold-divider-wide" />
            <p className="mt-10 font-sans text-[15px] text-brown-light leading-[1.9] max-w-lg mx-auto">
              We are looking for collaborators, interview subjects, and kindred
              spirits who feel the call to return. If you are a wisdom keeper, a
              beekeeper, a tender of the earth, a storyteller, or simply someone
              who believes that the garden is worth protecting &mdash; we would
              love to hear from you.
            </p>
            <Link
              href="mailto:hello@theoriasophia.com"
              className="inline-block mt-12 px-12 py-5 bg-gold text-white font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold-light hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <div className="mt-20 pt-10 border-t border-taupe/20">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brown-light/40">
                A Theoria Sophia Production
              </p>
              <Link
                href="/"
                className="inline-block mt-3 font-sans text-[11px] text-gold-muted hover:text-gold transition-colors duration-300"
              >
                theoriasophia.com
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
