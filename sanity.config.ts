import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";
import { projectId, dataset } from "./src/sanity/env";
import PresentationHeader from "./src/sanity/components/PresentationHeader";

export default defineConfig({
  name: "theoria-sophia",
  title: "Theoria Sophia",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      components: {
        unstable_header: {
          component: PresentationHeader,
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: "changeRequest-prefilled",
        title: "Change Request (from Presentation)",
        schemaType: "changeRequest",
        parameters: [
          { name: "page", type: "string" },
          { name: "section", type: "string" },
        ],
        value: (params: { page?: string; section?: string }) => ({
          page: params.page ?? "",
          section: params.section ?? "",
          status: "pending",
        }),
      },
    ],
  },
});
