import { defineType, defineField } from "sanity";

export const ancientHerstoryPage = defineType({
  name: "ancientHerstoryPage",
  title: "Ancient Herstory Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Introduction" },
    { name: "features", title: "Features" },
    { name: "quote", title: "Quote" },
    { name: "courseDetails", title: "Course Details" },
    { name: "cta", title: "Call to Action" },
  ],
  fields: [
    // ─── Hero ───
    defineField({
      name: "heroTitle",
      title: "Title",
      type: "string",
      group: "hero",
      initialValue: "Ancient Her-story",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtitle",
      type: "string",
      group: "hero",
      initialValue: "Archive",
    }),
    defineField({
      name: "heroDescription",
      title: "Description",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroBackground",
      title: "Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // ─── Introduction ───
    defineField({
      name: "introHeading",
      title: "Heading",
      type: "string",
      group: "intro",
      initialValue: "The Lost Mother Archives",
    }),
    defineField({
      name: "introText",
      title: "Text (separate paragraphs with blank lines)",
      type: "text",
      group: "intro",
    }),

    // ─── Features ───
    defineField({
      name: "features",
      title: "Feature Columns",
      type: "array",
      group: "features",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
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

    // ─── Quote ───
    defineField({
      name: "quoteText",
      title: "Quote",
      type: "string",
      group: "quote",
      initialValue: "To remember is to restore.",
    }),
    defineField({
      name: "quoteBackground",
      title: "Background Image",
      type: "image",
      group: "quote",
      options: { hotspot: true },
    }),

    // ─── Course Details ───
    defineField({
      name: "courseHeading",
      title: "Section Heading",
      type: "string",
      group: "courseDetails",
      initialValue: "What You Will Explore",
    }),
    defineField({
      name: "courseItems",
      title: "Course Topics",
      type: "array",
      group: "courseDetails",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "text",
              title: "Description",
              type: "text",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),

    // ─── CTA ───
    defineField({
      name: "ctaHeading",
      title: "Heading",
      type: "string",
      group: "cta",
      initialValue: "Join the Archive",
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
      initialValue: "Inquire About Enrollment",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Ancient Herstory Page" };
    },
  },
});
