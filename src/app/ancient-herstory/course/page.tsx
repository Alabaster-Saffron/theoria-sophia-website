import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import ScrollReveal from "@/components/ScrollReveal";
import CourseGate from "./CourseGate";

export const metadata: Metadata = {
  title: "Course Material — Ancient Herstory",
  description:
    "Course material for Ancient Herstory — The Mother Lineage of the Oracles.",
  robots: { index: false, follow: false },
};

const COOKIE_NAME = "course-ancient-herstory-unlocked";

interface CourseSection {
  number: string;
  title: string;
  summary: string;
  recorded?: boolean;
}

const sections: CourseSection[] = [
  {
    number: "01",
    title: "Introduction — The Mother Lineage",
    summary:
      "An invocation. A re-orientation. We begin not with a date or a place, but with the lineage itself — the unbroken thread of women who have tended the sacred relationship between the human world and the living earth.",
  },
  {
    number: "02",
    title: "The Garden of Eden, Re-told",
    summary:
      "The original story, before the patriarchal rewrite. Eve as Mother Goddess, the serpent as kundalini life force, the tree of life as a doorway. A re-claiming of the most foundational myth in our cultural memory.",
  },
  {
    number: "03",
    title: "Sophia & the Mother of Creation",
    summary:
      "The wisdom keeper at the heart of creation. Sophia as the breath, the form, the holy intelligence. We trace her through Gnostic texts, Old Testament traces, and the living traditions that have remembered her name.",
  },
  {
    number: "04",
    title: "The Melissae — Priestesses of Ephesus",
    summary:
      "The bee priestesses of Artemis. Their rituals, their oracles, their relationship with the temple hives. A deep dive into one of the most sacred feminine traditions of the ancient world.",
  },
  {
    number: "05",
    title: "The Bee as Sacred Oracle",
    summary:
      "The bee in Egyptian, Mayan, Cretan, and Anatolian traditions. The hexagonal geometry. The dance language. Why every wisdom keeper culture revered her.",
    recorded: true,
  },
  {
    number: "06",
    title: "Forgotten Scriptures",
    summary:
      "Gnostic gospels, Nag Hammadi texts, the Pistis Sophia. What was removed from the canon, why, and what these voices teach us about the sacred feminine that the patriarchal church could not allow.",
  },
  {
    number: "07",
    title: "The Magdalene Traditions of Anatolia",
    summary:
      "Mary Magdalene as priestess, partner, and wisdom keeper. The traditions that preserved her teaching — in southern France, in the Black Sea, in the House of the Virgin Mary itself.",
  },
  {
    number: "08",
    title: "Mesopotamian & Egyptian Threads",
    summary:
      "Inanna, Ishtar, Isis, Hathor. Cylinder seals, temple hymns, hieroglyphs of the bee. The mother lineages that flow from the cradle of civilization into our own time.",
  },
  {
    number: "09",
    title: "The Mayan Stingless Bee Lineage",
    summary:
      "The Melipona bees of the Yucatán and the women who have tended them for thousands of years. A living tradition, still here, still teaching.",
    recorded: true,
  },
  {
    number: "10",
    title: "Living the Mother Memory",
    summary:
      "The closing arc. A practice for embodying what we've remembered. How to live as a wisdom keeper in this time. How to tend your own inner temple.",
  },
];

const sectionImages = [
  "/images/feminine-healing/fh-21.jpg",
  "/images/feminine-healing/fh-31.jpg",
  "/images/pitch/rtg/herstory-shadow-linen.jpg",
  "/images/pitch/rtg/herstory-artemis.jpg",
  "/images/pitch/rtg/herstory-honeycomb-stone.jpg",
  "/images/pitch/rtg/herstory-flower-of-life.jpg",
  "/images/pitch/rtg/herstory-bee-carving.jpg",
  "/images/pitch/rtg/herstory-terraces.jpg",
  "/images/pitch/rtg/herstory-sacred-spring.jpg",
  "/images/pitch/rtg/herstory-virgin-mary-house.jpg",
];

function CourseSectionBlock({
  section,
  image,
  index,
}: {
  section: CourseSection;
  image: string;
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <ScrollReveal direction="up" delay={50}>
      <article className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div
          className={`relative aspect-[4/5] overflow-hidden ${reverse ? "md:order-2" : ""}`}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover image-zoom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-6 left-6 bg-cream-light/90 backdrop-blur-sm px-5 py-3">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">
              Section {section.number}
            </p>
          </div>
        </div>
        <div className={`px-2 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
            {section.recorded ? "Recorded Practice" : "Course Material"}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-wide leading-[1.2] mb-6">
            {section.title}
          </h3>
          <div className="gold-divider !mx-0" />
          <p className="mt-8 font-sans text-brown-light leading-[1.95] text-[15px]">
            {section.summary}
          </p>

          <div className="mt-10 border border-taupe/30 bg-cream/50 p-8">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-brown-light/60 mb-3">
              Content Placeholder
            </p>
            <p className="font-serif text-base md:text-lg text-brown italic leading-[1.6]">
              Video, audio, and written material for this section will be placed here.
            </p>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default async function CourseContentPage() {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get(COOKIE_NAME)?.value === "1";

  if (!unlocked) {
    return <CourseGate />;
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-21.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-cream-light/30 to-cream-light/85" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={60}
            height={60}
            className="mx-auto mb-8 opacity-80 animate-breathe"
          />
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white mb-4">
            Theoria Sophia School &middot; Course Material
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal tracking-wide leading-[1.1]">
            Ancient Herstory
            <span className="block font-serif text-2xl md:text-3xl text-brown italic mt-4">
              The mother lineage of the oracles
            </span>
          </h1>
          <div className="gold-divider-wide" />
          <p className="font-serif text-lg md:text-xl text-brown italic mt-6 max-w-2xl mx-auto leading-[1.6]">
            Welcome, beloved. Follow the course intuitively, in your own rhythm.
          </p>
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="section-padding bg-cream-light">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              Course Contents
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide italic">
              The Path of Remembrance
            </h2>
            <div className="gold-divider-wide" />
          </ScrollReveal>

          <ol className="space-y-3">
            {sections.map((s) => (
              <li
                key={s.number}
                className="flex items-baseline gap-6 border-b border-taupe/20 pb-3"
              >
                <span className="font-sans text-[10px] tracking-[0.35em] text-gold-muted w-12 shrink-0">
                  {s.number}
                </span>
                <a
                  href={`#section-${s.number}`}
                  className="font-serif text-lg md:text-xl text-charcoal hover:text-gold transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="bg-cream-light">
        {sections.map((section, i) => (
          <section
            key={`section-${section.number}`}
            id={`section-${section.number}`}
            className="section-padding scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto px-6">
              <CourseSectionBlock
                section={section}
                image={sectionImages[i] ?? sectionImages[0]}
                index={i}
              />
            </div>
          </section>
        ))}
      </div>

      {/* CLOSING */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/pitch/rtg/herstory-virgin-mary-house.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/40 via-transparent to-cream-light/85" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <Image
              src="/images/logotheoria.png"
              alt=""
              width={60}
              height={60}
              className="mx-auto opacity-60 animate-breathe mb-6"
            />
            <p className="font-serif text-2xl md:text-3xl text-charcoal italic max-w-2xl">
              The mothers have always been speaking. Now we listen.
            </p>
            <p className="mt-3 font-sans text-[11px] tracking-[0.4em] uppercase text-gold">
              Theoria Sophia &middot; Be still &middot; And remember
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
