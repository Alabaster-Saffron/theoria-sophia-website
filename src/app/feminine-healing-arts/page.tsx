import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Feminine Healing Arts",
  description:
    "Theoria Sophia School — a sanctuary of online courses devoted to the feminine form, the inner garden, and the return to embodiment.",
};

const courses = [
  {
    title: "Healing Body Dysmorphia & Reclaiming our Feminine Blueprint",
    subtitle: "Finding Sanctuary within the Feminine Form",
    detail: "Theoria Sophia School — Now Enrolling",
    image: "/images/feminine-healing/fh-02.jpg",
    href: "/feminine-healing-arts/healing-body-dysmorphia",
    available: true,
  },
  {
    title: "Ancient Herstory",
    subtitle: "The mother lineage of the oracles of old",
    detail: "Theoria Sophia School",
    image: "/images/feminine-healing/fh-31.jpg",
    href: "#",
    available: false,
  },
  {
    title: "Preparing the Body for Conception",
    subtitle: "Sacred preparation for motherhood",
    detail: "Theoria Sophia School",
    image: "/images/feminine-healing/fh-26.jpg",
    href: "#",
    available: false,
  },
  {
    title: "Entering into the Bridal Chamber",
    subtitle: "Martial arts of the sacred feminine",
    detail: "Theoria Sophia School",
    image: "/images/feminine-healing/fh-22.jpg",
    href: "#",
    available: false,
  },
];

export default function FeminineHealingArtsPage() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-13.jpg"
          alt="The inner garden"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-cream-light/30 to-cream-light/85" />

        <div className="relative z-10 text-center px-6 animate-fade-up max-w-4xl">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={70}
            height={70}
            className="mx-auto mb-8 opacity-80 animate-breathe"
          />
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
            Theoria Sophia School Presents
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-wide mb-8 leading-[1.1]">
            Feminine Healing Arts
          </h1>
          <div className="gold-divider-wide" />
          <p className="font-serif text-xl md:text-2xl text-brown italic mt-8 max-w-2xl mx-auto leading-[1.6]">
            A sanctuary of online courses devoted to the feminine form, the inner garden, and the return to embodiment.
          </p>
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* ═══════════════════════ INVITATION ═══════════════════════ */}
      <section className="section-padding-lg bg-cream-light">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="fade" duration={1400}>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-8">
              An Invitation
            </p>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal italic leading-[1.4] font-light">
              Come home to the body as a living temple within the garden of creation.
            </p>
            <div className="ornament-line">
              <span className="text-gold-muted text-lg">&loz;</span>
            </div>
            <p className="font-serif text-lg md:text-xl text-brown-light/80 italic max-w-2xl mx-auto leading-[1.7]">
              Each offering is a doorway. A slow blooming. A remembrance of the garden that lives within you and blooms from within.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ COURSES ═══════════════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
              Our Offerings
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal tracking-wide">
              Online Courses
            </h2>
            <div className="gold-divider-wide" />
            <p className="mt-8 font-sans text-brown-light/70 text-sm tracking-wider max-w-md mx-auto">
              Four pathways into the living garden of the feminine
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {courses.map((course, i) => (
              <ScrollReveal
                key={course.title}
                delay={i * 100}
                direction={i % 2 === 0 ? "up" : "scale"}
              >
                <Link
                  href={course.href}
                  className={`group relative aspect-[4/5] overflow-hidden block ${
                    course.available ? "" : "pointer-events-none"
                  }`}
                  aria-disabled={!course.available}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent transition-all duration-700 group-hover:from-charcoal/75" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                    <p className="font-sans text-[10px] text-gold-light tracking-[0.3em] uppercase mb-3">
                      {course.detail}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-light mb-3 tracking-wide leading-[1.2]">
                      {course.title}
                    </h3>
                    <p className="font-serif text-base md:text-lg text-white/70 italic mb-5">
                      {course.subtitle}
                    </p>
                    {course.available ? (
                      <span className="inline-block font-sans text-[11px] tracking-[0.3em] uppercase text-gold-light border-b border-gold-light/40 pb-1 transition-all duration-500 group-hover:border-gold-light group-hover:tracking-[0.4em]">
                        Enter &nbsp;&rarr;
                      </span>
                    ) : (
                      <span className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-white/50">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CLOSING IMAGE ═══════════════════════ */}
      <section className="relative h-[55vh] overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-09.jpg"
          alt="Returning to the garden"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <Image
              src="/images/logotheoria.png"
              alt=""
              width={60}
              height={60}
              className="mx-auto opacity-60 animate-breathe"
            />
            <p className="font-serif text-2xl md:text-3xl text-charcoal italic mt-6">
              Be still, and bloom.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
