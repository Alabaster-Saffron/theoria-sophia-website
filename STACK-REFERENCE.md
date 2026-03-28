# Luxury Wellness Website — Stack Reference

Copy this file into any new website project so Claude understands the full stack, patterns, and gotchas from day one.

---

## Tech Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js (App Router) | 16.x | Server components by default, async data fetching |
| CSS | Tailwind CSS | v4 | Uses `@import "tailwindcss"` + `@theme inline` — NO tailwind.config file |
| Language | TypeScript | 5.x | Strict mode, `@/*` path alias maps to `./src/*` |
| CMS | Sanity | v5.18+ | Headless CMS with embedded Studio |
| CMS Bridge | next-sanity | v12.2+ | Provides `defineLive`, `VisualEditing`, draft mode helpers |
| Images | @sanity/image-url | v2.1+ | URL builder for Sanity image references |
| Fonts | Google Fonts | — | Cormorant Garamond (serif) + Raleway (sans) via `next/font/google` |
| Hosting | Vercel | — | GitHub integration, auto-deploy on push |
| Node | NVM-managed | v20.x | Full path: `/Users/azura/.nvm/versions/node/v20.20.0/bin` |

---

## Project Structure

```
├── sanity.config.ts              # Sanity Studio config (basePath: "/studio")
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout: fonts, Navigation, Footer, SanityLive, VisualEditing
│   │   ├── globals.css           # All CSS: variables, animations, utilities
│   │   ├── page.tsx              # Homepage (async server component)
│   │   ├── offerings/page.tsx    # Offerings page
│   │   ├── ancient-herstory/page.tsx  # Ancient Herstory page
│   │   ├── api/draft-mode/enable/route.ts  # Draft mode API for visual editing
│   │   └── studio/[[...tool]]/
│   │       ├── page.tsx          # Server component wrapper (noindex)
│   │       └── Studio.tsx        # Client component rendering NextStudio
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollReveal.tsx      # IntersectionObserver scroll animations
│   │   └── ImageCarousel.tsx     # Client-side image carousel
│   └── sanity/
│       ├── env.ts                # projectId, dataset, apiVersion exports
│       ├── client.ts             # Lazy Sanity client (returns null if unconfigured)
│       ├── live.ts               # defineLive with stega encoding for visual editing
│       ├── image.ts              # resolveImage() — handles Sanity refs + plain URLs + fallbacks
│       ├── helpers.ts            # splitParagraphs() for multi-paragraph text fields
│       ├── queries.ts            # GROQ queries using sanityFetch, returns null on failure
│       ├── structure.ts          # Custom Studio structure (singleton documents)
│       ├── components/
│       │   └── PresentationHeader.tsx  # "Flag for Change" button + modal in Presentation view
│       └── schemas/
│           ├── index.ts          # Exports schemaTypes array
│           ├── homePage.ts       # Home page schema with groups
│           ├── offeringsPage.ts  # Offerings page schema
│           ├── ancientHerstoryPage.ts  # Ancient Herstory schema
│           └── changeRequest.ts  # Change request flagging system
├── public/images/                # Static images (fallbacks when Sanity is unconfigured)
└── scripts/
    └── seed-sanity.mjs           # One-time script to populate Sanity with hardcoded content
```

---

## Sanity CMS Integration

### Core Pattern: Graceful Fallbacks

Every page works identically with OR without Sanity configured. The pattern:

```tsx
// In any page (async server component):
export default async function SomePage() {
  const data = await getSomePage();  // returns null if Sanity unavailable

  const title = data?.title ?? "Hardcoded Fallback";
  const image = resolveImage(data?.heroBackground, "/images/fallback.jpg");

  return <h1>{title}</h1>;
}
```

This means:
- Pages render with hardcoded defaults during development (no Sanity setup needed)
- Once Sanity is configured and content is seeded, CMS content takes over
- If Sanity ever goes down, the site still works

### Key Files

**`src/sanity/env.ts`** — Environment variable exports:
```ts
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";
```

**`src/sanity/client.ts`** — MUST be lazy to avoid build errors when projectId is empty:
```ts
import { createClient, type SanityClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";

let _client: SanityClient | null = null;

export function getClient(): SanityClient | null {
  if (!projectId) return null;
  if (!_client) {
    _client = createClient({ projectId, dataset, apiVersion, useCdn: true });
  }
  return _client;
}
```

**`src/sanity/live.ts`** — Stega encoding for click-to-edit in visual editing mode:
```ts
import { defineLive } from "next-sanity/live";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";

const client = createClient({
  projectId, dataset, apiVersion, useCdn: true,
  stega: { studioUrl: "/studio" },
});

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
```

**`src/sanity/image.ts`** — Handles both Sanity image references and plain URL strings:
```ts
export function resolveImage(
  image: SanityImageSource | string | undefined,
  fallback: string
): string {
  if (!image) return fallback;
  if (typeof image === "string") return image;
  if (!projectId) return fallback;
  try { return urlFor(image).auto("format").url(); }
  catch { return fallback; }
}
```

**`src/sanity/helpers.ts`** — For multi-paragraph text fields (Sanity `text` type, split on double newlines):
```ts
export function splitParagraphs(text: string | null | undefined, fallback: string[]): string[] {
  if (!text) return fallback;
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return paragraphs.length > 0 ? paragraphs : fallback;
}
```

### Sanity Schema Pattern

Each page is a **singleton document** with a fixed ID (e.g., `homePage`, `offeringsPage`). The Studio structure enforces this — users see one entry per page, not a list.

Schema conventions:
- Use `groups` to organize fields into tabs in the Studio
- `string` for single-line text (titles, labels)
- `text` for multi-paragraph content (instruction: "separate paragraphs with blank lines")
- `image` with `options: { hotspot: true }` for all images
- `array` of objects for repeating items (offerings, course topics, branches)
- `initialValue` on fields to show defaults in Studio

### GROQ Queries

Queries use `sanityFetch` from `live.ts` (which includes stega encoding). Each query function returns `null` on failure so pages can fall back to defaults.

Include `_id` and `_key` fields in queries — these are needed for stega click-to-edit mapping.

### Visual Editing (Presentation Tool)

The Sanity Studio has a "Presentation" tab that shows a live preview of the site. Users can click on text/images in the preview and jump directly to the corresponding field in the Studio.

This requires:
1. `presentationTool` plugin in `sanity.config.ts` pointing to `/api/draft-mode/enable`
2. Draft mode API route at `src/app/api/draft-mode/enable/route.ts`
3. `stega: { studioUrl: "/studio" }` in the live.ts client
4. `<SanityLive />` always rendered in layout
5. `<VisualEditing />` conditionally rendered when `draftMode().isEnabled`
6. CORS origins added for the domain in Sanity dashboard (sanity.io/manage)

### Studio Route

Sanity Studio is embedded at `/studio` using a Next.js catch-all route:
- `src/app/studio/[[...tool]]/page.tsx` — Server wrapper with `noindex` metadata
- `src/app/studio/[[...tool]]/Studio.tsx` — Client component with `"use client"` rendering `<NextStudio />`
- `basePath: "/studio"` in `sanity.config.ts` — **REQUIRED** or Studio shows "Tool not found"

### Seeding Content

`scripts/seed-sanity.mjs` uses `createOrReplace` with fixed document IDs to populate all pages with the hardcoded default content. Run once after creating a new Sanity project:

```bash
SANITY_TOKEN=your-editor-token node scripts/seed-sanity.mjs
```

---

## Tailwind CSS v4

This project uses Tailwind v4, which is significantly different from v3:

- **No `tailwind.config.js`** — configuration is done in CSS
- Import: `@import "tailwindcss";` (not `@tailwind base/components/utilities`)
- Theme customization uses `@theme inline { }` block in globals.css
- Custom colors are mapped from CSS variables: `--color-gold: var(--gold);`
- Custom fonts: `--font-serif: var(--font-cormorant);`

### Design System (CSS Custom Properties)

```css
:root {
  --cream: #F5F0E8;
  --cream-light: #FAF7F2;
  --cream-dark: #EDE5D8;
  --gold: #B8963E;
  --gold-light: #D4B86A;
  --gold-muted: #C5A96A;
  --taupe: #C4B5A5;
  --taupe-dark: #A89888;
  --brown: #6B5E50;
  --brown-dark: #4A3F34;
  --brown-light: #8B7D6B;
  --charcoal: #2C2622;
}
```

### Reusable CSS Classes

| Class | Purpose |
|-------|---------|
| `gold-divider` | 80px centered gold gradient line |
| `gold-divider-wide` | 120px wider variant |
| `section-padding` | Responsive section padding (5rem mobile → 8rem desktop) |
| `section-padding-lg` | Larger variant (7rem → 12rem) |
| `gradient-fade-bottom` | Transparent-to-cream gradient at section bottom |
| `gradient-fade-top` | Transparent-to-cream gradient at section top |
| `card-elevated` | Glassmorphism card with hover lift |
| `text-gradient-gold` | Gold gradient text effect |
| `ornament-line` | Decorative line with gap for content |
| `image-zoom` | Subtle zoom on hover |
| `image-reveal` | Zoom + brightness on hover |
| `parallax-bg` | Fixed background attachment (scroll on mobile) |

### Animation Classes

| Class | Effect |
|-------|--------|
| `animate-fade-up` | Fade in + slide up |
| `animate-fade-in` | Simple fade |
| `animate-scale-in` | Fade + scale from 92% |
| `animate-blur-in` | Fade + blur removal |
| `animate-breathe` | Pulsing opacity (infinite) |
| `animate-float` | Gentle vertical float (infinite) |
| `animate-delay-1` through `animate-delay-6` | Staggered delays |

---

## ScrollReveal Component

Custom IntersectionObserver component for scroll-triggered animations:

```tsx
<ScrollReveal direction="left" delay={200} duration={1200}>
  <div>Content slides in from left on scroll</div>
</ScrollReveal>
```

Directions: `up`, `left`, `right`, `fade`, `scale`

---

## Environment Variables

### Required for Sanity

```env
# .env.local (no quotes around values!)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your-viewer-token
```

### Setting Up on Vercel

**CRITICAL**: Use `printf` not `echo` to avoid trailing newlines that break Sanity:

```bash
printf 'your-project-id' | npx vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
printf 'production' | npx vercel env add NEXT_PUBLIC_SANITY_DATASET production
printf 'your-token' | npx vercel env add SANITY_API_READ_TOKEN production
```

If you used `echo` and get errors like `projectId can only contain a-z, 0-9 and dashes`, remove the env var and re-add with `printf`.

---

## Sanity Project Setup (New Project)

1. Create project at sanity.io/manage or `npx sanity init`
2. Note the project ID
3. Add CORS origins in Sanity dashboard (sanity.io/manage → project → API → CORS):
   - `http://localhost:3000` (with credentials)
   - `https://your-domain.vercel.app` (with credentials)
4. Create API token with Viewer role (for read access + visual editing)
5. Optionally create Editor token (for seeding script only)
6. Set environment variables (see above)
7. Run seed script to populate initial content

---

## Vercel Deployment

- Connected via GitHub integration (push to main → auto deploy)
- Environment variables set via Vercel CLI or dashboard
- `.vercelignore` excludes: screenshots, .playwright-mcp, site-audit.md, .git

---

## Playwright MCP (Browser Automation)

Used for taking screenshots, scraping pages, and visual testing.

**`.mcp.json`** — Must use full NVM node path:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "/Users/azura/.nvm/versions/node/v20.20.0/bin/npx",
      "args": ["@playwright/mcp@latest", "--caps=vision", "--viewport-size=1920x1080"],
      "env": {
        "PATH": "/Users/azura/.nvm/versions/node/v20.20.0/bin:/usr/local/bin:/usr/bin:/bin"
      }
    }
  }
}
```

This file is machine-specific. When starting a new project, update the NVM path if the node version changes.

---

## NVM Path Handling

When running CLI tools in Bash, the NVM-managed node may not be on PATH. Use the full path:

```bash
/Users/azura/.nvm/versions/node/v20.20.0/bin/npx <command>
/Users/azura/.nvm/versions/node/v20.20.0/bin/node <script>
```

Or prepend to PATH:
```bash
export PATH="/Users/azura/.nvm/versions/node/v20.20.0/bin:$PATH" && npx <command>
```

---

## Known Gotchas & Lessons Learned

1. **Sanity client crashes without projectId** — Always use the lazy `getClient()` pattern that returns `null` when `projectId` is empty. Never create a client eagerly at module scope with `createClient()` unless you guard for empty projectId.

2. **`basePath: "/studio"` is required** in `sanity.config.ts` — Without it, the Studio loads but shows "Tool not found" errors.

3. **Vercel env var newlines** — `echo` pipes include a trailing newline that corrupts Sanity project IDs and dataset names. Always use `printf` when piping to `vercel env add`.

4. **SanityImageSource import** — Import from `@sanity/image-url` directly, not from `@sanity/image-url/lib/types/types` (path changed in newer versions).

5. **CORS origins** — Must be added manually at sanity.io/manage for both localhost and production URLs, with credentials enabled.

6. **Multi-paragraph text** — Sanity `text` fields store plain text. Use double newlines to separate paragraphs and `splitParagraphs()` helper to convert to array for rendering.

7. **Singleton documents** — Use custom `structure.ts` with fixed document IDs and `S.document().schemaType("pageName").documentId("pageName")` so the Studio shows one entry per page.

8. **Image hotspot** — Always add `options: { hotspot: true }` to image fields so editors can control crop focus.

9. **`object-top` for portrait photos** — When showing people in cropped containers, use `object-top` on the `<Image>` so heads aren't cut off.

---

## Change Requests (Flag for Change System)

A built-in system for flagging site changes directly from the Sanity Studio Presentation view. A floating "Flag for Change" button appears in Presentation mode, opening a modal where you can describe changes, pick the page/section, and upload a replacement image — all without leaving the preview.

### Components

**`src/sanity/schemas/changeRequest.ts`** — Document type with fields:
- `page` — string dropdown (Homepage, Offerings, Ancient Herstory, General)
- `section` — string dropdown (Hero, Approach, Explore, Founder, etc.)
- `notes` — text field for describing the change
- `replacementImage` — optional image upload with hotspot
- `status` — radio: Pending / Done

**`src/sanity/components/PresentationHeader.tsx`** — Custom Presentation tool header:
- Floating gold pill button (bottom-right, `position: fixed`, `z-index: 100000`)
- Opens a modal overlay (`z-index: 200000`) with the form
- Uses `useClient()` from `sanity` to create documents via API
- Uploads images via `client.assets.upload("image", file)`
- Auto-detects current page from `usePresentationParams()` hook
- Stays in Presentation mode throughout (no navigation)

**`src/sanity/queries.ts`** — includes `getPendingChangeRequests()`:
```ts
const PENDING_CHANGES_QUERY = `*[_type == "changeRequest" && status == "pending"] | order(_createdAt desc) {
  _id, page, section, notes, replacementImage, status, _createdAt
}`;
```

### Setup for a New Project

1. **Create the schema** — Copy `src/sanity/schemas/changeRequest.ts`. Update the `page` options list to match your site's pages. Update the `section` options list to match your site's sections.

2. **Register the schema** — Add to `src/sanity/schemas/index.ts`:
```ts
import { changeRequest } from "./changeRequest";
export const schemaTypes = [...otherSchemas, changeRequest];
```

3. **Add to Studio structure** — In `src/sanity/structure.ts`, add at the top of items:
```ts
import { EditIcon } from "@sanity/icons";
// ...
S.listItem()
  .title("Change Requests")
  .icon(EditIcon)
  .child(
    S.documentTypeList("changeRequest")
      .title("Change Requests")
      .defaultOrdering([{ field: "status", direction: "asc" }])
  ),
S.divider(),
```

4. **Create the header component** — Copy `src/sanity/components/PresentationHeader.tsx`. Update `PAGE_OPTIONS`, `SECTION_OPTIONS`, and `FIELD_TO_SECTION` to match your site's pages and sections.

5. **Register in sanity.config.ts** — Add the Presentation header and initial value template:
```ts
import PresentationHeader from "./src/sanity/components/PresentationHeader";

export default defineConfig({
  // ...
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        previewMode: { enable: "/api/draft-mode/enable" },
      },
      components: {
        unstable_header: {
          component: PresentationHeader,
        },
      },
    }),
    visionTool(),
  ],
  // ...
});
```

6. **Add the query** — In `src/sanity/queries.ts`, add `getPendingChangeRequests()` so Claude can fetch all pending requests at the start of a session.

### User Workflow

1. Go to Studio → **Presentation** tab
2. Browse the live site preview
3. Click the gold **"Flag for Change"** button (bottom-right)
4. Modal opens: pick page, pick section, type notes, optionally upload replacement image
5. Hit **Submit** → checkmark confirmation → modal closes
6. Tell Claude **"check change requests"** → Claude queries pending requests and works through them
7. Claude marks each request as **Done** after completing

### Notes

- The `unstable_header` API is prefixed "unstable" but is functional in Sanity v5.18+
- Images can't be clicked in the Presentation preview (only stega-encoded text can) — use the section dropdown and describe the image in notes
- The modal uses `useClient()` to create documents directly, requiring the Sanity token to have write access
- Change requests show as yellow dots (pending) or green checkmarks (done) in the Studio list

---

## Adding a New Page

1. Create schema in `src/sanity/schemas/newPage.ts` (follow existing pattern with groups)
2. Add to `src/sanity/schemas/index.ts` exports
3. Add to `src/sanity/structure.ts` as a new singleton list item
4. Add GROQ query in `src/sanity/queries.ts`
5. Create page at `src/app/new-route/page.tsx` (async server component with fallbacks)
6. Add navigation link in `Navigation.tsx`
7. Seed content via script or manually in Studio
