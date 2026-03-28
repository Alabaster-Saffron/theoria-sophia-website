import { defineType, defineField } from "sanity";

export const offeringsPage = defineType({
  name: "offeringsPage",
  title: "Offerings Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "offerings", title: "Offerings" },
    { name: "cta", title: "Call to Action" },
  ],
  fields: [
    // ─── Hero ───
    defineField({
      name: "heroTitle",
      title: "Title",
      type: "string",
      group: "hero",
      initialValue: "Offerings",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtitle",
      type: "string",
      group: "hero",
      initialValue: "Women's Healing Arts",
    }),
    defineField({
      name: "heroDescription",
      title: "Description",
      type: "text",
      group: "hero",
    }),
    defineField({
      name: "heroBackground",
      title: "Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // ─── Offerings ───
    defineField({
      name: "offerings",
      title: "Offerings",
      type: "array",
      group: "offerings",
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
            defineField({
              name: "link",
              title: "Link (leave empty for no button)",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
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
      initialValue: "Ready to Begin?",
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
  ],
  preview: {
    prepare() {
      return { title: "Offerings Page" };
    },
  },
});
