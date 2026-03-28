import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "approach", title: "Our Approach" },
    { name: "ourSpace", title: "Our Space" },
    { name: "ancientHerstory", title: "Ancient Herstory" },
    { name: "branches", title: "Explore Branches" },
    { name: "holisticApproach", title: "Holistic Approach" },
    { name: "manifesto", title: "Body Manifesto" },
    { name: "founder", title: "Founder" },
    { name: "ecoLiving", title: "Eco Living" },
    { name: "beStill", title: "Be Still" },
    { name: "podcast", title: "Podcast" },
    { name: "cta", title: "Call to Action" },
  ],
  fields: [
    // ─── Hero ───
    defineField({
      name: "heroTitle",
      title: "Title",
      type: "string",
      group: "hero",
      initialValue: "Theoria Sophia",
    }),
    defineField({
      name: "heroTagline1",
      title: "Tagline 1",
      type: "string",
      group: "hero",
      initialValue: "Theoria — To Behold",
    }),
    defineField({
      name: "heroTagline2",
      title: "Tagline 2",
      type: "string",
      group: "hero",
      initialValue: "Sophia — Wisdom",
    }),
    defineField({
      name: "heroCtaText",
      title: "Button Text",
      type: "string",
      group: "hero",
      initialValue: "Explore",
    }),
    defineField({
      name: "heroBackground",
      title: "Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // ─── Our Approach ───
    defineField({
      name: "approachHeading",
      title: "Heading",
      type: "string",
      group: "approach",
      initialValue: "Our Approach",
    }),
    defineField({
      name: "approachText",
      title: "Text (separate paragraphs with blank lines)",
      type: "text",
      group: "approach",
    }),
    defineField({
      name: "approachImage",
      title: "Image",
      type: "image",
      group: "approach",
      options: { hotspot: true },
    }),

    // ─── Divider ───
    defineField({
      name: "dividerImage",
      title: "Divider Image",
      type: "image",
      options: { hotspot: true },
    }),

    // ─── Our Space ───
    defineField({
      name: "ourSpaceHeading",
      title: "Heading",
      type: "string",
      group: "ourSpace",
      initialValue: "Our Space",
    }),
    defineField({
      name: "ourSpaceTagline",
      title: "Tagline",
      type: "string",
      group: "ourSpace",
    }),
    defineField({
      name: "ourSpaceSubtitle",
      title: "Subtitle",
      type: "string",
      group: "ourSpace",
    }),

    // ─── Ancient Herstory ───
    defineField({
      name: "herstoryHeading",
      title: "Heading",
      type: "string",
      group: "ancientHerstory",
      initialValue: "Ancient Her-story",
    }),
    defineField({
      name: "herstorySubtitle",
      title: "Subtitle",
      type: "string",
      group: "ancientHerstory",
      initialValue: "Online Course",
    }),
    defineField({
      name: "herstoryText",
      title: "Description (separate paragraphs with blank lines)",
      type: "text",
      group: "ancientHerstory",
    }),
    defineField({
      name: "herstoryCtaText",
      title: "Button Text",
      type: "string",
      group: "ancientHerstory",
      initialValue: "Learn More",
    }),

    // ─── Branches ───
    defineField({
      name: "branchesHeading",
      title: "Heading",
      type: "string",
      group: "branches",
      initialValue: "Explore",
    }),
    defineField({
      name: "branchesSubtitle",
      title: "Subtitle",
      type: "string",
      group: "branches",
    }),
    defineField({
      name: "branches",
      title: "Branches",
      type: "array",
      group: "branches",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({ name: "detail", title: "Detail", type: "string" }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
    }),

    // ─── Holistic Approach ───
    defineField({
      name: "holisticHeading",
      title: "Heading",
      type: "string",
      group: "holisticApproach",
      initialValue: "Holistic Approach",
    }),
    defineField({
      name: "holisticText",
      title: "Text",
      type: "text",
      group: "holisticApproach",
    }),
    defineField({
      name: "holisticBackground",
      title: "Background Image",
      type: "image",
      group: "holisticApproach",
      options: { hotspot: true },
    }),

    // ─── Manifesto ───
    defineField({
      name: "manifestoText",
      title: "Quotes (separate paragraphs with blank lines)",
      type: "text",
      group: "manifesto",
    }),
    defineField({
      name: "manifestoTagline",
      title: "Tagline",
      type: "string",
      group: "manifesto",
      initialValue: "Comfortable. Relaxed. Embodied.",
    }),
    defineField({
      name: "manifestoLeftImage",
      title: "Left Image",
      type: "image",
      group: "manifesto",
      options: { hotspot: true },
    }),
    defineField({
      name: "manifestoRightImage",
      title: "Right Image",
      type: "image",
      group: "manifesto",
      options: { hotspot: true },
    }),

    // ─── Founder ───
    defineField({
      name: "founderLabel",
      title: "Label",
      type: "string",
      group: "founder",
      initialValue: "Meet our Founder",
    }),
    defineField({
      name: "founderName",
      title: "Name",
      type: "string",
      group: "founder",
      initialValue: "Zefirah",
    }),
    defineField({
      name: "founderBio",
      title: "Bio (separate paragraphs with blank lines)",
      type: "text",
      group: "founder",
    }),
    defineField({
      name: "founderImage",
      title: "Photo",
      type: "image",
      group: "founder",
      options: { hotspot: true },
    }),

    // ─── Eco Living ───
    defineField({
      name: "ecoLabel",
      title: "Label",
      type: "string",
      group: "ecoLiving",
      initialValue: "Our Sister Company",
    }),
    defineField({
      name: "ecoHeading",
      title: "Heading",
      type: "string",
      group: "ecoLiving",
      initialValue: "Eco Based Living",
    }),
    defineField({
      name: "ecoSubtitle",
      title: "Subtitle",
      type: "string",
      group: "ecoLiving",
      initialValue: "Azura",
    }),
    defineField({
      name: "ecoText",
      title: "Description (separate paragraphs with blank lines)",
      type: "text",
      group: "ecoLiving",
    }),
    defineField({
      name: "ecoCarouselImages",
      title: "Carousel Images",
      type: "array",
      group: "ecoLiving",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    // ─── Be Still ───
    defineField({
      name: "beStillHeading",
      title: "Heading",
      type: "string",
      group: "beStill",
      initialValue: "Be still, and breathe.",
    }),
    defineField({
      name: "beStillTagline",
      title: "Tagline",
      type: "string",
      group: "beStill",
    }),
    defineField({
      name: "beStillGalleryImages",
      title: "Gallery Images",
      type: "array",
      group: "beStill",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    // ─── Podcast ───
    defineField({
      name: "podcastHeading",
      title: "Heading",
      type: "string",
      group: "podcast",
      initialValue: "Listen to our Podcast",
    }),
    defineField({
      name: "podcastText",
      title: "Description",
      type: "text",
      group: "podcast",
    }),
    defineField({
      name: "podcastCoverImage",
      title: "Cover Image",
      type: "image",
      group: "podcast",
      options: { hotspot: true },
    }),
    defineField({
      name: "podcastBackground",
      title: "Background Image",
      type: "image",
      group: "podcast",
      options: { hotspot: true },
    }),

    // ─── CTA ───
    defineField({
      name: "ctaHeading",
      title: "Heading",
      type: "string",
      group: "cta",
      initialValue: "Begin Your Journey",
    }),
    defineField({
      name: "ctaText",
      title: "Description",
      type: "text",
      group: "cta",
    }),
    defineField({
      name: "ctaButtonText",
      title: "Button Text",
      type: "string",
      group: "cta",
      initialValue: "Connect With Us",
    }),

    // ─── Final Image ───
    defineField({
      name: "finalImage",
      title: "Final Section Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
