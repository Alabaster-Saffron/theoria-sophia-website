import { defineType, defineField } from "sanity";

function getSessionValue(key: string): string | undefined {
  try {
    const val = typeof sessionStorage !== "undefined" ? sessionStorage.getItem(key) : null;
    if (val) sessionStorage.removeItem(key);
    return val ?? undefined;
  } catch {
    return undefined;
  }
}

export const changeRequest = defineType({
  name: "changeRequest",
  title: "Change Request",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      initialValue: () => getSessionValue("cr_page") ?? "",
      options: {
        list: [
          { title: "Homepage", value: "homepage" },
          { title: "Offerings", value: "offerings" },
          { title: "Ancient Herstory", value: "ancient-herstory" },
          { title: "General / Sitewide", value: "general" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      initialValue: () => getSessionValue("cr_section") ?? "",
      description: "Which section of the page (e.g. Hero, Explore, Founder)",
      options: {
        list: [
          // Homepage
          { title: "Hero", value: "hero" },
          { title: "Our Approach", value: "approach" },
          { title: "Divider", value: "divider" },
          { title: "Our Space", value: "our-space" },
          { title: "Ancient Herstory Course", value: "herstory-course" },
          { title: "Explore Branches", value: "explore" },
          { title: "Holistic Approach", value: "holistic" },
          { title: "Body Manifesto", value: "manifesto" },
          { title: "Founder — Zefirah", value: "founder" },
          { title: "Eco Based Living / Azura", value: "eco" },
          { title: "Be Still", value: "be-still" },
          { title: "Podcast", value: "podcast" },
          { title: "Call to Action", value: "cta" },
          { title: "Final Image", value: "final-image" },
          // Offerings
          { title: "Offerings Cards", value: "offerings-cards" },
          // Ancient Herstory
          { title: "Introduction", value: "intro" },
          { title: "Features", value: "features" },
          { title: "Quote Divider", value: "quote" },
          { title: "Course Details", value: "course-details" },
          // General
          { title: "Navigation", value: "navigation" },
          { title: "Footer", value: "footer" },
          { title: "Colors / Fonts", value: "styling" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "notes",
      title: "What do you want changed?",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "replacementImage",
      title: "Replacement Image (optional)",
      type: "image",
      description: "Upload a new image if you want to swap one out",
      options: { hotspot: true },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Done", value: "done" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "pending",
    }),
  ],
  orderings: [
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
    {
      title: "Newest First",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      page: "page",
      section: "section",
      notes: "notes",
      status: "status",
    },
    prepare({ page, section, notes, status }) {
      const emoji = status === "done" ? "\u2705" : "\ud83d\udfe1";
      const title = `${emoji} ${page ?? ""}${section ? ` > ${section}` : ""}`;
      return {
        title,
        subtitle: notes?.slice(0, 80) ?? "",
      };
    },
  },
});
