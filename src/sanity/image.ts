import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { getClient } from "./client";
import { projectId } from "./env";

function getBuilder() {
  const client = getClient();
  if (!client) return null;
  return imageUrlBuilder(client);
}

export function urlFor(source: SanityImageSource) {
  const builder = getBuilder();
  if (!builder) throw new Error("Sanity client not configured");
  return builder.image(source);
}

/**
 * Resolves an image to a URL string.
 * Handles both Sanity image references and plain URL strings.
 */
export function resolveImage(
  image: SanityImageSource | string | undefined,
  fallback: string
): string {
  if (!image) return fallback;
  if (typeof image === "string") return image;
  if (!projectId) return fallback;
  try {
    return urlFor(image).auto("format").url();
  } catch {
    return fallback;
  }
}
