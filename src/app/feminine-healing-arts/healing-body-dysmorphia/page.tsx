import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import EnrollForm from "./EnrollForm";

export const metadata: Metadata = {
  title: "Healing Body Dysmorphia & Reclaiming our Feminine Blueprint",
  description:
    "Theoria Sophia School Presents — Finding Sanctuary within the Feminine Form. Returning to the garden found within and on this precious planet.",
};

const story = [
  "I am delighted to be sharing this content after a lifetime of deeply struggling with body dysmorphia, disordered eating, a ten-year spinal injury, and other body-limiting injuries. Layers of sexual abuse and childhood hardships shaped the soil I grew in.",
  "I myself was born without ninety percent of my hearing — it took nine years outside of the womb for my ear canals to fully develop so I could hear like other children. I spent years in the resource room with a speech impediment, learning cognitive abilities that I did not fully heal until my mid-twenties after deep somatic work.",
  "I was also born with a birthmark on my nose called a nameshioma. I was teased so badly that I begged my parents to have it surgically removed when I was ten. It did not change the way I felt about myself. The dysmorphic relationship to my face was already infused into my psyche. As a little girl, so many people would ask me what was wrong with my face. I thought I was deformed. Even once the birthmark was gone, I still felt ugly and insecure.",
  "By the time I was twelve, growing up in a dysmorphic society, I began to rebel. I felt like I didn’t have control over my own body or how people related to it. I went into a deep depression. I had on-and-off eating disorders, would intentionally hurt myself, and started smoking and drinking at a very young age — creating a new identity from the awkward insecure artsy girl to the rebel wild child. Male teachers began to sexualize me, as well as friends’ fathers. I grew up with my own grandfather as a pedophile, and was consistently around him and his perverted friends. My foundational years were a gauntlet of initiations.",
  "By the time I started having sex at sixteen, I didn’t know what I was doing or how to protect myself. I was projected to be a slut, called slut in the school hallways. When I was eighteen, I felt I had to fulfill the rumors and lost control of my self-respect. That year I received the most amount of sexual chaos, including many times of painful sex. I was out of my body. I then went directly into an abusive psychological relationship for two years where I was constantly being put into danger and manipulated.",
  "When I was twenty-one I met my husband and began my deep re-wiring and healing journey. It took many years of hard, devoted work. One day after years of healing my mother looked at me and said, “I feel like you are returning closer to who you were as a little girl, like your energy is returning back to who you most naturally are.” After healing not just from this life, but many layers of ancestral trauma, I am finally finding my baseline — which is love embodied.",
  "I spent years snowballing into what I call the monster’s mind, the inner critic that never felt good enough. The beauty I was seeking wasn’t just surface — it was something beneath the skin, an inner light. I was always beautiful but could not see it, desperate for anyone to confirm I was worthy of loving myself. After years of dancing between my own inner hell and heaven, I finally began re-wiring my brain and my connection with my body as a sanctuary. In this self-love something started blooming from within me — an inner radiance, a garden of love and beauty.",
  "This is how I found what true beauty is. Beauty is found in nature, in what is natural, in what is healthy. Beauty is found in the poetry of life and death, of the journey of self-discovery and coming into union with God and creation over and over again. Beauty isn’t skin deep — it’s in the energy within your body, the way you treat yourself and others, the way you see and relate to the world around you.",
];

const teachings = [
  {
    title: "The Garden of Eve, Reclaimed",
    body:
      "The story was manipulated by the patriarchy. The true story is that Eve was a Mother Goddess, an origin Mother of this garden called Earth. The serpent was the kundalini life force within the tree of life. Eve wasn’t seduced — she was called to go deeper into the mystery school of this earth. To know thyself as the Gods, to be able to procreate. The fallen patriarchy is who cast us from the Garden of Eden — not Eve. They re-wrote the story to continue separating people from the garden, from the Mother, from themselves.",
  },
  {
    title: "The Body as Sanctuary",
    body:
      "Many women’s bodies are in chronic fight or flight — being told they must try harder and be better, over and over, since they were little girls. Overly sexualized from a very young age through media, home, society, and trauma-informed behavior. A psychological warfare on the feminine form, creating dissociation and a woman who never feels at home in her body. If a woman does not understand that her body is a sanctuary, she will always be trying to fill an open void of disconnection — externally sourcing for validation, never feeling satisfied. True self-love comes from within one’s own heart and one’s own connection to one’s body.",
  },
  {
    title: "Returning to the Garden",
    body:
      "We are the doorway. We invite humanity to live in beauty and peace. In loving our bodies, in finding sanctuary within our bodies, we begin to return to the garden — for the garden lives within us and blooms from within us. We were made in God’s image. We as humanity were made in the image of Mother and Father God. When we begin to relate to this earth as a living school, we become more conscious and lucid within our life experience. It is time to reclaim our bodies, restore homeostasis, become the source of our own power, and restore the garden of creation on this precious earth.",
  },
];

const whoFor = [
  "Women of every age, race, religion, spiritual path, body, and orientation.",
  "Teenagers sixteen and older.",
  "Teenagers thirteen and older with the signature of a parent.",
];

export default function HealingBodyDysmorphiaPage() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-05.jpg"
          alt="Peonies blooming, the inner garden"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-cream-light/30 to-cream-light/85" />

        <div className="relative z-10 text-center px-6 animate-fade-up max-w-5xl">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={70}
            height={70}
            className="mx-auto mb-8 animate-breathe"
          />
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4 animate-fade-in animate-delay-2">
            Theoria Sophia School Presents
          </p>
          <p className="font-serif text-lg md:text-xl text-brown-light italic mb-8 animate-fade-in animate-delay-3">
            Finding Sanctuary within the Feminine Form
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal tracking-wide leading-[1.1]">
            Healing Body Dysmorphia
            <span className="block font-serif text-2xl md:text-4xl lg:text-5xl text-brown italic mt-4">
              & reclaiming our feminine blueprint
            </span>
          </h1>
          <div className="gold-divider-wide" />
          <p className="font-serif text-lg md:text-xl text-brown italic mt-8 max-w-2xl mx-auto leading-[1.6] animate-fade-in animate-delay-4">
            Returning to the garden found within, and on this precious planet.
          </p>
          <div className="mt-12 animate-fade-in animate-delay-5">
            <Link
              href="#enroll"
              className="inline-block px-10 py-4 border border-brown-dark text-brown-dark font-sans text-[11px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-gold hover:text-white hover:tracking-[0.45em] hover:border-gold"
            >
              Reserve Your Place
            </Link>
          </div>
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* ═══════════════════════ INVITATION ═══════════════════════ */}
      <section className="section-padding-lg bg-cream-light">
        <div className="max-w-3xl mx-auto text-center px-6">
          <ScrollReveal direction="fade" duration={1400}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-8">
              An Invitation
            </p>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal italic leading-[1.4] font-light">
              Re-soften. Find peace within. Bring the feminine body back into the garden of love and creation.
            </p>
            <div className="ornament-line">
              <span className="text-gold-muted text-lg">&loz;</span>
            </div>
            <p className="font-serif text-lg md:text-xl text-brown-light/80 italic max-w-2xl mx-auto leading-[1.7]">
              This course is a slow blooming. A remembrance. A homecoming to the body that has always been your sanctuary.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ MANIFESTO IMAGES ═══════════════════════ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2.5fr_1fr] gap-10 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/feminine-healing/fh-15.jpg"
                alt="The blooming feminine"
                fill
                className="object-cover image-reveal"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="text-center px-4 md:px-8">
            <div className="space-y-8">
              <p className="font-serif text-xl md:text-2xl leading-[1.6] italic text-brown">
                We were born into a garden of splendor and love.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-[1.6] italic text-gradient-gold">
                The garden lives within us.
              </p>
              <p className="font-serif text-xl md:text-2xl leading-[1.6] italic text-brown">
                It blooms from within.
              </p>
            </div>
            <div className="ornament-line">
              <span className="text-gold-muted text-lg">&loz;</span>
            </div>
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brown-light/50">
              Soft. Sensual. Self-sourced.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/feminine-healing/fh-19.jpg"
                alt="The inner garden"
                fill
                className="object-cover image-reveal"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ TEACHINGS ═══════════════════════ */}
      <section className="section-padding-lg bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
              The Teachings
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              The Wisdom Within
            </h2>
            <div className="gold-divider-wide" />
          </ScrollReveal>

          <div className="space-y-20">
            {teachings.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 100} direction="up">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal italic mb-6 tracking-wide">
                    {t.title}
                  </h3>
                  <div className="gold-divider" />
                  <p className="mt-8 font-sans text-brown-light leading-[1.95] text-[15px] md:text-base">
                    {t.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRIPTYCH ═══════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-cream-light">
        {[
          "/images/feminine-healing/fh-42.jpg",
          "/images/feminine-healing/fh-25.jpg",
          "/images/feminine-healing/fh-24.jpg",
        ].map((src, i) => (
          <div key={src} className="relative aspect-[3/4] md:aspect-square overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover image-zoom"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/30" />
            {i === 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-serif text-2xl md:text-3xl text-white italic text-center px-6 leading-[1.4]">
                  Be still,
                  <br />
                  and breathe.
                </p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ═══════════════════════ FOUNDER STORY ═══════════════════════ */}
      <section className="section-padding-lg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start px-6">
          <ScrollReveal direction="left" duration={1200}>
            <div className="relative overflow-hidden shadow-2xl sticky top-28">
              <Image
                src="/images/feminine-healing/fh-43.jpg"
                alt="Zefirah, founder of Theoria Sophia"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} duration={1200}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              A Personal Reflection
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal mb-6 tracking-wide">
              From Zefirah
            </h2>
            <div className="gold-divider !mx-0" />
            <div className="mt-10 space-y-6 font-sans text-brown-light leading-[1.95] text-[15px]">
              {story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ THE PROMISE ═══════════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-13.jpg"
          alt="The blooming garden"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <ScrollReveal direction="fade" duration={1400}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              What this Course Offers
            </p>
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-[1.6] font-light italic">
              The wisdom of reconnecting with the feminine form in love, presence, and self-respect.
            </p>
            <div className="gold-divider-wide mt-8" />
            <p className="mt-10 font-sans text-brown-light leading-[1.95] text-[15px] max-w-2xl mx-auto">
              Re-wiring the mind and nervous system from thousands of years of suppression. Restoring and reclaiming the relaxed, sexy, self-sourced feminine. A return to the garden — within and around us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ WHO IS THIS FOR ═══════════════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto text-center px-6">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              For Whom
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide italic">
              This sanctuary is for you.
            </h2>
            <div className="gold-divider-wide" />
            <ul className="mt-12 space-y-6">
              {whoFor.map((line, i) => (
                <li
                  key={i}
                  className="font-serif text-lg md:text-xl text-brown italic leading-[1.6]"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-12 font-sans text-brown-light/80 leading-[1.9] text-sm max-w-xl mx-auto">
              Accessible to all women regardless of age, race, religious or spiritual beliefs, body, or sexual orientation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ ENROLL ═══════════════════════ */}
      <section
        id="enroll"
        className="relative section-padding-lg overflow-hidden bg-cream-light scroll-mt-24"
      >
        <Image
          src="/images/feminine-healing/fh-37.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream-light/80" />

        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <ScrollReveal direction="fade" duration={1400}>
            <Image
              src="/images/logotheoria.png"
              alt=""
              width={56}
              height={56}
              className="mx-auto mb-8 opacity-60 animate-breathe"
            />
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
              Enrollment
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              Reserve Your Place
            </h2>
            <div className="gold-divider-wide" />
            <p className="mt-8 font-sans text-brown-light leading-[1.9] text-[15px] max-w-lg mx-auto">
              Upon enrollment you will receive a welcome letter and a passcode to enter into the course material. Follow the course intuitively, in your own rhythm — let it bloom in you slowly.
            </p>

            <div className="mt-12">
              <EnrollForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ FINAL IMAGE ═══════════════════════ */}
      <section className="relative h-[55vh] overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-41.jpg"
          alt="Returning to the garden"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-serif text-2xl md:text-4xl text-charcoal italic max-w-2xl">
              The garden has always been within you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
