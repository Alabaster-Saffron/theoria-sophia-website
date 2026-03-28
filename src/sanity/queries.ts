import { sanityFetch } from "./live";

const HOME_QUERY = `*[_type == "homePage"][0]{
  _id,
  heroTitle, heroTagline1, heroTagline2, heroCtaText, heroBackground,
  approachHeading, approachText, approachImage,
  dividerImage,
  ourSpaceHeading, ourSpaceTagline, ourSpaceSubtitle,
  herstoryHeading, herstorySubtitle, herstoryText, herstoryCtaText,
  branchesHeading, branchesSubtitle,
  branches[]{ _key, title, subtitle, detail, image },
  holisticHeading, holisticText, holisticBackground,
  manifestoText, manifestoTagline, manifestoLeftImage, manifestoRightImage,
  founderLabel, founderName, founderBio, founderImage,
  ecoLabel, ecoHeading, ecoSubtitle, ecoText,
  ecoCarouselImages[]{ _key, asset->{url} },
  beStillHeading, beStillTagline,
  beStillGalleryImages[]{ _key, asset->{url} },
  podcastHeading, podcastText, podcastCoverImage, podcastBackground,
  ctaHeading, ctaText, ctaButtonText,
  finalImage
}`;

const OFFERINGS_QUERY = `*[_type == "offeringsPage"][0]{
  _id,
  heroTitle, heroSubtitle, heroDescription, heroBackground,
  offerings[]{ _key, title, description, image, link },
  ctaHeading, ctaText, ctaButtonText
}`;

const ANCIENT_HERSTORY_QUERY = `*[_type == "ancientHerstoryPage"][0]{
  _id,
  heroTitle, heroSubtitle, heroDescription, heroBackground,
  introHeading, introText,
  features[]{ _key, title, description, image },
  quoteText, quoteBackground,
  courseHeading, courseItems[]{ _key, title, text },
  ctaHeading, ctaText, ctaButtonText
}`;

export async function getHomePage() {
  try {
    const { data } = await sanityFetch({ query: HOME_QUERY });
    return data;
  } catch {
    return null;
  }
}

export async function getOfferingsPage() {
  try {
    const { data } = await sanityFetch({ query: OFFERINGS_QUERY });
    return data;
  } catch {
    return null;
  }
}

export async function getAncientHerstoryPage() {
  try {
    const { data } = await sanityFetch({ query: ANCIENT_HERSTORY_QUERY });
    return data;
  } catch {
    return null;
  }
}
