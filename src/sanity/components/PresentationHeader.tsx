"use client";

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
  ourspace: "our-space",
  herstory: "herstory-course",
  branches: "explore",
  holistic: "holistic",
  manifesto: "manifesto",
  founder: "founder",
  eco: "eco",
  bestill: "be-still",
  podcast: "podcast",
  cta: "cta",
  final: "final-image",
  offerings: "offerings-cards",
  intro: "intro",
  features: "features",
  quote: "quote",
  course: "course-details",
};

function detectFromUrl(): { page?: string; section?: string } {
  try {
    const url = window.location.href;
    let docId: string | undefined;
    let fieldPath: string | undefined;

    /* Presentation tool URLs contain document ID and path in various formats */
    const idMatch = url.match(/[;/]id[=:]([^;&?/]+)/i) || url.match(/document[=:]([^;&?/]+)/i);
    const pathMatch = url.match(/[;/]path[=:]([^;&?/]+)/i);

    if (idMatch) docId = decodeURIComponent(idMatch[1]);
    if (pathMatch) fieldPath = decodeURIComponent(pathMatch[1]);

    /* Also try to read from the URL path segments for alternate formats */
    if (!docId) {
      for (const key of Object.keys(DOC_TO_PAGE)) {
        if (url.includes(key)) {
          docId = key;
          break;
        }
      }
    }

    const page = docId ? DOC_TO_PAGE[docId] : undefined;

    let section: string | undefined;
    if (fieldPath) {
      const clean = fieldPath.split("[")[0].split(".")[0].toLowerCase();
      for (const [prefix, sec] of Object.entries(FIELD_TO_SECTION)) {
        if (clean.startsWith(prefix.toLowerCase())) {
          section = sec;
          break;
        }
      }
    }

    return { page, section };
  } catch {
    return {};
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PresentationHeader(props: any) {
  const handleClick = useCallback(() => {
    const { page, section } = detectFromUrl();

    /* Store detected values so the initial value template can use them */
    try {
      if (page) sessionStorage.setItem("cr_page", page);
      if (section) sessionStorage.setItem("cr_section", section);
    } catch { /* ignore */ }

    /* Navigate to create a new Change Request */
    window.location.href = `/studio/structure/changeRequest;template=changeRequest-prefilled`;
  }, []);

  return (
    <>
      {props.renderDefault(props)}
      <div
        style={{
          position: "fixed",
          top: "12px",
          right: "16px",
          zIndex: 100000,
        }}
      >
        <button
          type="button"
          onClick={handleClick}
          onMouseDown={(e) => e.stopPropagation()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
            padding: "12px 22px",
            background: "#B8963E",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            lineHeight: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            userSelect: "none",
          }}
        >
          <EditIcon style={{ pointerEvents: "none" }} />
          <span style={{ pointerEvents: "none" }}>Flag for Change</span>
        </button>
      </div>
    </>
  );
}
