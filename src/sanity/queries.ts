import { getClient } from "./client";

export async function getHomePage() {
  const client = getClient();
  if (!client) return null;
  try {
    return await client.fetch(
      `*[_type == "homePage"][0]{
        heroTitle, heroTagline1, heroTagline2, heroCtaText, heroBackground,
        approachHeading, approachText, approachImage,
        dividerImage,
        ourSpaceHeading, ourSpaceTagline, ourSpaceSubtitle,
        herstoryHeading, herstorySubtitle, herstoryText, herstoryCtaText,
        branchesHeading, branchesSubtitle,
        branches[]{ title, subtitle, detail, image },
        holisticHeading, holisticText, holisticBackground,
        manifestoText, manifestoTagline, manifestoLeftImage, manifestoRightImage,
        founderLabel, founderName, founderBio, founderImage,
        ecoLabel, ecoHeading, ecoSubtitle, ecoText,
        ecoCarouselImages[]{ asset->{url} },
        beStillHeading, beStillTagline,
        beStillGalleryImages[]{ asset->{url} },
        podcastHeading, podcastText, podcastCoverImage, podcastBackground,
        ctaHeading, ctaText, ctaButtonText,
        finalImage
      }`
    );
  } catch {
    return null;
  }
}

export async function getOfferingsPage() {
  const client = getClient();
  if (!client) return null;
  try {
    return await client.fetch(
      `*[_type == "offeringsPage"][0]{
        heroTitle, heroSubtitle, heroDescription, heroBackground,
        offerings[]{ title, description, image, link },
        ctaHeading, ctaText, ctaButtonText
      }`
    );
  } catch {
    return null;
  }
}

export async function getAncientHerstoryPage() {
  const client = getClient();
  if (!client) return null;
  try {
    return await client.fetch(
      `*[_type == "ancientHerstoryPage"][0]{
        heroTitle, heroSubtitle, heroDescription, heroBackground,
        introHeading, introText,
        features[]{ title, description, image },
        quoteText, quoteBackground,
        courseHeading, courseItems[]{ title, text },
        ctaHeading, ctaText, ctaButtonText
      }`
    );
  } catch {
    return null;
  }
}
