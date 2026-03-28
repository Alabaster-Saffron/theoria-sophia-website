/**
 * Seeds the Sanity dataset with the current hardcoded site content.
 *
 * Usage:
 *   SANITY_TOKEN=<your-write-token> node scripts/seed-sanity.mjs
 */

import { createClient } from "@sanity/client";

const projectId = "wt6pkyeq";
const dataset = "production";
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error("Error: Set SANITY_TOKEN environment variable first.");
  console.error(
    'Create a token at: https://www.sanity.io/manage/project/wt6pkyeq/api#tokens'
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Home Page ───
const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroTitle: "Theoria Sophia",
  heroTagline1: "Theoria \u2014 To Behold",
  heroTagline2: "Sophia \u2014 Wisdom",
  heroCtaText: "Explore",

  approachHeading: "Our Approach",
  approachText: `This space is a sanctuary for women to find safety, love, and peace within their bodies and lives.

We are devoted to bringing content and products that restore humanity\u2019s natural connection to nature, and their true authentic selves.

While also focusing on the health of eco architecture and design, food and travel, and health and wellness.`,

  ourSpaceHeading: "Our Space",
  ourSpaceTagline:
    "Theoria Sophia is a sanctuary for fostering peace on earth and within the body.",
  ourSpaceSubtitle: "To restore natural beauty and cultivate inner gnosis.",

  herstoryHeading: "Ancient Her-story",
  herstorySubtitle: "Online Course",
  herstoryText: `Sharing the mother lineage of the oracles of old.

An educational deep dive into forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.

Honey bee ancient wisdom from tenders of the garden of eden, a deep dive into the true story of Eve, the Garden, Sophia, and creation.`,
  herstoryCtaText: "Learn More",

  branchesHeading: "Explore",
  branchesSubtitle: "Branches on the tree of this living wellness sanctuary",
  branches: [
    {
      _key: "branch-1",
      title: "Honey Bee Educational Center",
      subtitle: "Creating sanctuaries for the pollinators",
      detail: "Theoria Sophia non-profit",
    },
    {
      _key: "branch-2",
      title: "Women\u2019s Wellness Sanctuary",
      subtitle: "Wealth, wellness, and health",
      detail: "Core Theoria Sophia theology",
    },
    {
      _key: "branch-3",
      title: "Eco Jewelry & Fashion",
      subtitle: "Amari",
      detail: "Earth-based designs",
    },
    {
      _key: "branch-4",
      title: "Sanctuary Design",
      subtitle: "Azura Inc.",
      detail: "Creating sanctuaries",
    },
    {
      _key: "branch-5",
      title: "Farm to Table",
      subtitle: "Recipes & organic living",
      detail: "Coming soon",
    },
    {
      _key: "branch-6",
      title: "Sacred Travel",
      subtitle: "Finding sanctuaries around the globe",
      detail: "Heaven on earth locations",
    },
  ],

  holisticHeading: "Holistic Approach",
  holisticText:
    "Experience the harmonious blend of ancient healing traditions and modern wellness techniques, as our dedicated team takes you on a transformative wellness journey.",

  manifestoText: `Claim sanctuary within your body, and treat it with the utmost respect.

We were born into a garden of splendor and love.

Restore the body, restore the garden of earth, and restore the family back to wholeness.

Theoria Sophia is in devotion to restoring the inner garden of the true feminine essence.`,
  manifestoTagline: "Comfortable. Relaxed. Embodied.",

  founderLabel: "Meet our Founder",
  founderName: "Zefirah",
  founderBio: `Led by a deep devotion to the sacred feminine and a reverence for the earth, Zefirah founded Theoria Sophia as a living sanctuary \u2014 a space where ancient wisdom meets modern healing.

Her work weaves together the threads of forgotten traditions, ecological stewardship, and holistic wellness into a tapestry of transformation for women seeking to come home to themselves.`,

  ecoLabel: "Our Sister Company",
  ecoHeading: "Eco Based Living",
  ecoSubtitle: "Azura",
  ecoText: `Azura is our building and design team focused on eco-based architecture and design. We create homes, systems, and structures centered on feng shui, environmental health, biomimicry, and luxury living.

Our design team also does interior design for private clients and fix-and-flip projects for personal hire.

Along with all of Azura\u2019s building systems, we create pollinator habitats in our landscaping to give back to the natural world, while creating a zen and romantic atmosphere.`,

  beStillHeading: "Be still, and breathe.",
  beStillTagline:
    "Our goal is to help humanity find peace and restore the garden of life.",

  podcastHeading: "Listen to our Podcast",
  podcastText:
    "Join us for conversations on ancient wisdom, sacred living, and the journey home to the true self.",

  ctaHeading: "Begin Your Journey",
  ctaText:
    "Embark on a journey to rejuvenation. Connect with us and experience the transformative power of personalized holistic care.",
  ctaButtonText: "Connect With Us",
};

// ─── Offerings Page ───
const offeringsPage = {
  _id: "offeringsPage",
  _type: "offeringsPage",
  heroTitle: "Offerings",
  heroSubtitle: "Women\u2019s Healing Arts",
  heroDescription:
    "Returning to peace in the body, sanctuary in the body, and health in the body. Creating in the beauty way, heaven on earth.",

  offerings: [
    {
      _key: "offering-1",
      title: "Ancient Her-story Online Course",
      description:
        "A deep dive into the mother lineage of the oracles of old. Forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.",
      link: "/ancient-herstory",
    },
    {
      _key: "offering-2",
      title: "Women\u2019s Wellness Sanctuary",
      description:
        "Holistic healing arts for the body, mind, and spirit. Restoring the inner garden of the true feminine essence through ancient and modern practices.",
      link: "",
    },
    {
      _key: "offering-3",
      title: "Eco Design & Architecture",
      description:
        "Through our sister company Azura, we create homes and structures centered on feng shui, environmental health, biomimicry, and luxury living.",
      link: "",
    },
    {
      _key: "offering-4",
      title: "Honey Bee Educational Center",
      description:
        "Creating sanctuaries for the pollinators. Education on the sacred role of the honeybee in ancient wisdom traditions and ecological stewardship.",
      link: "",
    },
  ],

  ctaHeading: "Ready to Begin?",
  ctaText:
    "Each offering is a doorway into deeper connection \u2014 with yourself, the earth, and the sacred wisdom that lives within you.",
  ctaButtonText: "Connect With Us",
};

// ─── Ancient Herstory Page ───
const ancientHerstoryPage = {
  _id: "ancientHerstoryPage",
  _type: "ancientHerstoryPage",
  heroTitle: "Ancient Her-story",
  heroSubtitle: "Archive",
  heroDescription:
    "An educational deep dive into the mother lineage of the oracles of old",

  introHeading: "The Lost Mother Archives",
  introText: `This online course shares the mother lineage of the oracles of old \u2014 an educational deep dive into forgotten scriptures, teachings, and ways of being in connection to the lost mother archives.

Honey bee ancient wisdom from tenders of the garden of eden, a deep dive into the true story of Eve, the Garden, Sophia, and creation.`,

  features: [
    {
      _key: "feature-1",
      title: "The Oracles",
      description:
        "Explore the lineage of ancient oracle traditions and the sacred feminine wisdom keepers who preserved the mysteries across millennia.",
    },
    {
      _key: "feature-2",
      title: "Forgotten Scriptures",
      description:
        "Rediscover lost texts and teachings that illuminate the mother lineage \u2014 the hidden thread of wisdom woven through human history.",
    },
    {
      _key: "feature-3",
      title: "Bee Wisdom",
      description:
        "The sacred role of the honeybee in ancient temples, the Melissae priestesses, and the living wisdom of the hive as a model for sacred community.",
    },
  ],

  quoteText: "To remember is to restore.",

  courseHeading: "What You Will Explore",
  courseItems: [
    {
      _key: "course-1",
      title: "The Garden of Eden",
      text: "A deep dive into the true story of Eve, the Garden, and the original blueprint for sacred living.",
    },
    {
      _key: "course-2",
      title: "Sophia & Creation",
      text: "Understanding Sophia as the feminine face of wisdom and her role in the creation narrative across traditions.",
    },
    {
      _key: "course-3",
      title: "The Melissae Priestesses",
      text: "The bee priestesses of ancient Greece and their connection to prophecy, healing, and the divine feminine.",
    },
    {
      _key: "course-4",
      title: "Lost Mother Archives",
      text: "Texts and teachings removed from the canonical record that preserve the mother lineage of spiritual wisdom.",
    },
  ],

  ctaHeading: "Join the Archive",
  ctaText:
    "Step into the living lineage of ancient wisdom. This course is an invitation to remember what has been forgotten and restore what has been lost.",
  ctaButtonText: "Inquire About Enrollment",
};

// ─── Seed ───
async function seed() {
  console.log("Seeding Sanity content...\n");

  for (const doc of [homePage, offeringsPage, ancientHerstoryPage]) {
    try {
      const result = await client.createOrReplace(doc);
      console.log(`  \u2713 ${result._type} (${result._id})`);
    } catch (err) {
      console.error(`  \u2717 Failed to create ${doc._type}:`, err.message);
    }
  }

  console.log("\nDone! Your content is now in Sanity.");
  console.log(
    "Visit your Studio at http://localhost:3000/studio to see and edit it."
  );
}

seed();
