"use client";

import { useRouter } from "sanity/router";
import { EditIcon } from "@sanity/icons";
import { useCallback } from "react";

/* Map Sanity document IDs → Change Request page values */
const DOC_TO_PAGE: Record<string, string> = {
  homePage: "homepage",
  offeringsPage: "offerings",
  ancientHerstoryPage: "ancient-herstory",
};

/* Map Sanity field name prefixes → Change Request section values */
const FIELD_TO_SECTION: Record<string, string> = {
  // Homepage
  hero: "hero",
  approach: "approach",
  divider: "divider",
  ourSpace: "our-space",
  herstory: "herstory-course",
  branches: "explore",
  holistic: "holistic",
  manifesto: "manifesto",
  founder: "founder",
  eco: "eco",
  beStill: "be-still",
  podcast: "podcast",
  cta: "cta",
  final: "final-image",
  // Offerings
  offerings: "offerings-cards",
  // Ancient Herstory
  intro: "intro",
  features: "features",
  quote: "quote",
  course: "course-details",
};

function detectSection(path: string | undefined): string | undefined {
  if (!path) return undefined;
  /* path might look like "heroTitle", "branches[0].title", "founderBio", etc. */
  const fieldRoot = path.replace(/\[.*$/, "").replace(/[A-Z].*$/, "");
  /* Also try the full camelCase prefix before the first uppercase letter */
  const camelPrefix = path.match(/^[a-z]+/)?.[0] ?? "";
  return FIELD_TO_SECTION[fieldRoot] ?? FIELD_TO_SECTION[camelPrefix] ?? undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PresentationHeader(props: any) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    /* Try to read the currently focused document/field from the router state */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const state = router.state as any;
    const docId = state?.id ?? state?.document ?? undefined;
    const fieldPath = state?.path ?? state?.fieldPath ?? undefined;

    const page = docId ? DOC_TO_PAGE[docId] : undefined;
    const section = detectSection(fieldPath);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = { type: "changeRequest" };
    if (page) params.template = "changeRequest-prefilled";
    if (page) params.page = page;
    if (section) params.section = section;

    router.navigateIntent("create", params);
  }, [router]);

  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <div style={{ flex: 1 }}>{props.renderDefault(props)}</div>
      <button
        type="button"
        onClick={handleClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "10px 18px",
          marginRight: "12px",
          background: "#B8963E",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
          lineHeight: 1,
          minHeight: "36px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span style={{ display: "inline-flex", pointerEvents: "none" }}>
          <EditIcon />
        </span>
        <span style={{ pointerEvents: "none" }}>Flag for Change</span>
      </button>
    </div>
  );
}
