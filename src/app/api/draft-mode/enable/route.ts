import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/sanity/env";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

export const { GET } = defineEnableDraftMode({ client });
