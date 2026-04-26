import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import ScrollReveal from "@/components/ScrollReveal";
import CourseGate from "./CourseGate";

export const metadata: Metadata = {
  title: "Course Material — Healing Body Dysmorphia",
  description:
    "Course material for Healing Body Dysmorphia & Reclaiming our Feminine Blueprint.",
  robots: { index: false, follow: false },
};

const COOKIE_NAME = "fha-hbd-unlocked";

interface CourseSection {
  number: string;
  title: string;
  summary: string;
  recorded?: boolean;
}

const sections: CourseSection[] = [
  {
    number: "01",
    title: "Telling My Story",
    summary:
      "An intimate opening — Zefirah shares her own becoming. The dysmorphia, the wounds, the long unwinding, and the bloom of self-love that finally returned.",
  },
  {
    number: "02",
    title: "False Programming & the Patriarchal Manipulation",
    summary:
      "A slideshow journey through the intentional re-writing of the feminine — why it happened, who benefited, and how its echoes still shape the way women see themselves today.",
  },
  {
    number: "03",
    title: "Re-sensitizing & Finding Sanctuary in the Feminine Form",
    summary:
      "Coming back into the body slowly. Practices and reflections for softening the armoring, unwinding the fascia, and remembering the body as a sanctuary worthy of reverence.",
  },
  {
    number: "04",
    title: "Ancient Women — Embracing the Feminine Before the Patriarchy",
    summary:
      "A slideshow video honoring the ancient feminine — the priestesses, the matriarchs, the oracles, the mother-goddesses who held the garden long before the rewrite.",
  },
  {
    number: "05",
    title: "Beyond the Mind Loop of Insecurity",
    summary:
      "Finding motivation beyond looks. Igniting the passion of true purpose, fulfilling your soul’s assignment, and discovering the freedom that lives on the other side of the inner critic.",
  },
  {
    number: "06",
    title: "Self-Hypnosis & Re-Wiring the Nervous System",
    summary:
      "Mind-untangling techniques. Accepting the wounded part of ourselves while gently rewiring the nervous system out of chronic fight-or-flight, into rest and devotion.",
  },
  {
    number: "07",
    title: "Awakening the Inner Garden",
    summary:
      "Aligning with nature. Inner alchemy. The slow, deliberate cultivation of the garden that lives within — through breath, presence, and reverence for the body’s seasons.",
  },
  {
    number: "08",
    title: "Sensuality vs. Seduction",
    summary:
      "Sensuality overflows from within and is natural. Seduction is putting on a show to source validation from outside the self. This section unwinds the difference, gently.",
  },
  {
    number: "09",
    title: "Pornography, Media & the Untangling",
    summary:
      "Untangling from porn culture and media programming. Knowing what is true. Knowing thyself. Aligning to a partner whose morals match your soul’s reverence.",
  },
  {
    number: "10",
    title: "Meditation — Tending the Temple",
    summary:
      "Unveiling the bride of God. A recorded meditation for reconnecting with the body as sacred ground — the original temple, the original garden, the original Eden.",
    recorded: true,
  },
  {
    number: "11",
    title: "Connecting with the Masculine & the Feminine",
    summary:
      "Intimately and in friendship. How to relate to the masculine within and around you. How to relate to the feminine. Honoring both as living forces in your daily life.",
  },
  {
    number: "12",
    title: "Somatically Healing from Trauma",
    summary:
      "Returning to the body after dissociation. Practices for releasing trauma stored in the tissues, the fascia, and the lineage. A gentle, non-rushed return home.",
  },
  {
    number: "13",
    title: "Returning to the Garden Practice",
    summary:
      "The closing arc. A daily living practice for embodying the garden. For walking through this earth as a doorway of beauty, presence, and self-sourced love.",
  },
];

interface SelfCareStrip {
  title: string;
  description: string;
  image: string;
}

const selfCareStrips: SelfCareStrip[] = [
  {
    title: "Self-Care Practice — Morning Devotion",
    description: "A short ritual for greeting the body upon waking. Add your video or written practice here.",
    image: "/images/feminine-healing/fh-52.jpg",
  },
  {
    title: "Self-Care Practice — Tending the Temple",
    description: "A mid-day softening. Bath, breath, oil, prayer. Add your video or written practice here.",
    image: "/images/feminine-healing/fh-08.jpg",
  },
  {
    title: "Self-Care Practice — Evening Return",
    description: "A closing ceremony for releasing the day. Add your video or written practice here.",
    image: "/images/feminine-healing/fh-53.jpg",
  },
];

const sectionImages = [
  "/images/feminine-healing/fh-02.jpg",
  "/images/feminine-healing/fh-05.jpg",
  "/images/feminine-healing/fh-45.jpg",
  "/images/feminine-healing/fh-46.jpg",
  "/images/feminine-healing/fh-47.jpg",
  "/images/feminine-healing/fh-48.jpg",
  "/images/feminine-healing/fh-49.jpg",
  "/images/feminine-healing/fh-50.jpg",
  "/images/feminine-healing/fh-27.jpg",
  "/images/feminine-healing/fh-28.jpg",
  "/images/feminine-healing/fh-51.jpg",
  "/images/feminine-healing/fh-24.jpg",
  "/images/feminine-healing/fh-35.jpg",
];

function SelfCareStripBlock({ strip }: { strip: SelfCareStrip }) {
  return (
    <ScrollReveal direction="fade" duration={1200}>
      <div className="relative h-[60vh] md:h-[55vh] overflow-hidden">
        <Image
          src={strip.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-2xl text-center px-6 text-white">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-light mb-4">
              Self-Care Practice
            </p>
            <h3 className="font-serif text-3xl md:text-5xl font-light tracking-wide italic">
              {strip.title.replace("Self-Care Practice — ", "")}
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent mx-auto my-6" />
            <p className="font-serif text-lg md:text-xl italic text-white/80 leading-[1.6]">
              {strip.description}
            </p>
            <div className="mt-8 inline-block border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 font-sans text-[11px] tracking-[0.35em] uppercase text-white/70">
              Practice content placeholder
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

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

  const stripPositions = new Set([3, 7, 11]);
  const ordered: Array<
    | { kind: "section"; section: CourseSection; image: string; index: number }
    | { kind: "strip"; strip: SelfCareStrip }
  > = [];
  let stripIndex = 0;
  sections.forEach((section, i) => {
    ordered.push({ kind: "section", section, image: sectionImages[i] ?? sectionImages[0], index: i });
    if (stripPositions.has(i + 1) && stripIndex < selfCareStrips.length) {
      ordered.push({ kind: "strip", strip: selfCareStrips[stripIndex] });
      stripIndex += 1;
    }
  });

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-05.jpg"
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
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
            Theoria Sophia School &middot; Course Material
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal tracking-wide leading-[1.1]">
            Healing Body Dysmorphia
            <span className="block font-serif text-2xl md:text-3xl text-brown italic mt-4">
              & reclaiming our feminine blueprint
            </span>
          </h1>
          <div className="gold-divider-wide" />
          <p className="font-serif text-lg md:text-xl text-brown italic mt-6 max-w-2xl mx-auto leading-[1.6]">
            Welcome, beloved. Follow the course intuitively, in your own rhythm.
          </p>
        </div>

        <div className="gradient-fade-bottom" />
      </section>

      {/* ═══════════════════════ TABLE OF CONTENTS ═══════════════════════ */}
      <section className="section-padding bg-cream-light">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-muted mb-4">
              Course Contents
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide italic">
              The Path of the Garden
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

      {/* ═══════════════════════ SECTIONS ═══════════════════════ */}
      <div className="bg-cream-light">
        {ordered.map((item, i) => {
          if (item.kind === "strip") {
            return <SelfCareStripBlock key={`strip-${i}`} strip={item.strip} />;
          }
          return (
            <section
              key={`section-${item.section.number}`}
              id={`section-${item.section.number}`}
              className="section-padding scroll-mt-24"
            >
              <div className="max-w-6xl mx-auto px-6">
                <CourseSectionBlock
                  section={item.section}
                  image={item.image}
                  index={item.index}
                />
              </div>
            </section>
          );
        })}
      </div>

      {/* ═══════════════════════ CLOSING ═══════════════════════ */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/feminine-healing/fh-41.jpg"
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
              The garden has always been within you.
            </p>
            <p className="mt-3 font-sans text-[11px] tracking-[0.4em] uppercase text-gold">
              Be still &middot; and bloom
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
