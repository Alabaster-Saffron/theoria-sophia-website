"use client";

import { useRouter } from "sanity/router";
import { usePresentationParams } from "sanity/presentation";
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
  offerings: "offerings-cards",
  intro: "intro",
  features: "features",
  quote: "quote",
  course: "course-details",
};

function detectSection(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const clean = path.split("[")[0].split(".")[0];
  for (const [prefix, section] of Object.entries(FIELD_TO_SECTION)) {
    if (clean.toLowerCase().startsWith(prefix.toLowerCase())) {
      return section;
    }
  }
  return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PresentationHeader(props: any) {
  const router = useRouter();
  const params = usePresentationParams();

  const handleClick = useCallback(() => {
    const docId = params.id;
    const fieldPath = params.path;

    const page = docId ? DOC_TO_PAGE[docId] : undefined;
    const section = detectSection(fieldPath);

    if (page) {
      router.navigateIntent("create", {
        type: "changeRequest",
        template: "changeRequest-prefilled",
        page,
        ...(section ? { section } : {}),
      });
    } else {
      router.navigateIntent("create", { type: "changeRequest" });
    }
  }, [router, params]);

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
