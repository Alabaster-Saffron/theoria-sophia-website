"use client";

import { EditIcon } from "@sanity/icons";
import { useCallback, useRef, useState } from "react";
import { useClient } from "sanity";
import { usePresentationParams } from "sanity/presentation";

/* Map Sanity document type/ID → Change Request page values */
const DOC_TO_PAGE: Record<string, string> = {
  homepage: "homepage",
  homePage: "homepage",
  offeringspage: "offerings",
  offeringsPage: "offerings",
  ancientherstorypage: "ancient-herstory",
  ancientHerstoryPage: "ancient-herstory",
};

const PAGE_OPTIONS = [
  { title: "Homepage", value: "homepage" },
  { title: "Offerings", value: "offerings" },
  { title: "Ancient Herstory", value: "ancient-herstory" },
  { title: "General / Sitewide", value: "general" },
];

const SECTION_OPTIONS = [
  { title: "Hero", value: "hero" },
  { title: "Our Approach", value: "approach" },
  { title: "Divider", value: "divider" },
  { title: "Our Space", value: "our-space" },
  { title: "Ancient Herstory Course", value: "herstory-course" },
  { title: "Explore Branches", value: "explore" },
  { title: "Holistic Approach", value: "holistic" },
  { title: "Body Manifesto", value: "manifesto" },
  { title: "Founder — Zefirah", value: "founder" },
  { title: "Eco Based Living / Azura", value: "eco" },
  { title: "Be Still", value: "be-still" },
  { title: "Podcast", value: "podcast" },
  { title: "Call to Action", value: "cta" },
  { title: "Final Image", value: "final-image" },
  { title: "Offerings Cards", value: "offerings-cards" },
  { title: "Introduction", value: "intro" },
  { title: "Features", value: "features" },
  { title: "Quote Divider", value: "quote" },
  { title: "Course Details", value: "course-details" },
  { title: "Navigation", value: "navigation" },
  { title: "Footer", value: "footer" },
  { title: "Colors / Fonts", value: "styling" },
  { title: "Other", value: "other" },
];

/* Map Sanity field name prefixes → Change Request section values */
const FIELD_TO_SECTION: [string, string][] = [
  ["heroT", "hero"],
  ["heroBa", "hero"],
  ["heroS", "hero"],
  ["heroC", "hero"],
  ["approach", "approach"],
  ["divider", "divider"],
  ["ourSpace", "our-space"],
  ["herstory", "herstory-course"],
  ["branches", "explore"],
  ["holistic", "holistic"],
  ["manifesto", "manifesto"],
  ["founder", "founder"],
  ["eco", "eco"],
  ["beStill", "be-still"],
  ["podcast", "podcast"],
  ["cta", "cta"],
  ["final", "final-image"],
  ["offerings", "offerings-cards"],
  ["intro", "intro"],
  ["features", "features"],
  ["quote", "quote"],
  ["course", "course-details"],
];

function detectSection(fieldPath: string | undefined): string {
  if (!fieldPath) return "";
  /* Clean up: remove array keys like [_key=="xxx"], take first segment */
  const clean = fieldPath.split("[")[0].split(".")[0];
  for (const [prefix, sec] of FIELD_TO_SECTION) {
    if (clean.startsWith(prefix)) {
      return sec;
    }
  }
  return "";
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  fontFamily: "inherit",
  background: "#fff",
  color: "#333",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  fontWeight: 600,
  color: "#666",
  marginBottom: "6px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PresentationHeader(props: any) {
  const client = useClient({ apiVersion: "2024-01-01" });
  const presentationParams = usePresentationParams();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("");
  const [section, setSection] = useState("");
  const [notes, setNotes] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = useCallback(() => {
    /* Read from Presentation tool's internal state */
    const docId = presentationParams.id ?? "";
    const docType = presentationParams.type ?? "";
    const fieldPath = presentationParams.path ?? "";

    const detectedPage = DOC_TO_PAGE[docId] ?? DOC_TO_PAGE[docType] ?? "";
    const detectedSection = detectSection(fieldPath);

    setPage(detectedPage);
    setSection(detectedSection);
    setNotes("");
    setImageFile(null);
    setImagePreview(null);
    setSubmitted(false);
    setOpen(true);
  }, [presentationParams]);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      setImageFile(file);
      if (file) {
        const url = URL.createObjectURL(file);
        setImagePreview(url);
      } else {
        setImagePreview(null);
      }
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (!notes.trim()) return;
    setSubmitting(true);
    try {
      /* Upload image to Sanity if provided */
      let imageRef: { _type: string; asset: { _type: string; _ref: string } } | undefined;
      if (imageFile) {
        const asset = await client.assets.upload("image", imageFile, {
          filename: imageFile.name,
        });
        imageRef = {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
        };
      }

      await client.create({
        _type: "changeRequest",
        page: page || "general",
        section: section || "other",
        notes: notes.trim(),
        status: "pending",
        ...(imageRef ? { replacementImage: imageRef } : {}),
      });
      setSubmitted(true);
      setTimeout(() => setOpen(false), 1200);
    } catch (err) {
      console.error("Failed to create change request:", err);
      alert("Failed to create change request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }, [client, page, section, notes, imageFile]);

  return (
    <>
      {props.renderDefault(props)}

      {/* Floating button — bottom right, pill shape */}
      <button
        type="button"
        onClick={handleOpen}
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 100000,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "7px",
          padding: "14px 24px",
          background: "#B8963E",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap",
          lineHeight: 1,
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          userSelect: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)";
        }}
      >
        <EditIcon style={{ pointerEvents: "none", fontSize: "16px" }} />
        <span style={{ pointerEvents: "none" }}>Flag for Change</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200000,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "32px",
              width: "440px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                  &#10003;
                </div>
                <p style={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                  Change request submitted!
                </p>
              </div>
            ) : (
              <>
                <h2
                  style={{
                    margin: "0 0 8px",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  Flag for Change
                </h2>
                <p
                  style={{
                    margin: "0 0 24px",
                    fontSize: "13px",
                    color: "#888",
                  }}
                >
                  Click on text in the preview first to auto-detect the section.
                  For images or backgrounds, just select the page &amp; section
                  and describe which image in your notes.
                </p>

                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Page</label>
                  <select
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">Select page...</option>
                    {PAGE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Section</label>
                  <select
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">Select section...</option>
                    {SECTION_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>What do you want changed?</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder='e.g. "Replace the background image" or "Make this heading text larger"'
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle}>
                    Replacement Image (optional)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      color: imageFile ? "#333" : "#999",
                      textAlign: "left",
                    }}
                  >
                    {imageFile ? imageFile.name : "Click to upload an image..."}
                  </button>
                  {imagePreview && (
                    <div style={{ marginTop: "8px", position: "relative" }}>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          maxHeight: "160px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          border: "1px solid #eee",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                          if (fileInputRef.current)
                            fileInputRef.current.value = "";
                        }}
                        style={{
                          position: "absolute",
                          top: "4px",
                          right: "4px",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          border: "none",
                          background: "rgba(0,0,0,0.6)",
                          color: "#fff",
                          fontSize: "14px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1,
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    style={{
                      padding: "10px 20px",
                      background: "transparent",
                      color: "#666",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting || !notes.trim()}
                    style={{
                      padding: "10px 24px",
                      background:
                        submitting || !notes.trim() ? "#ccc" : "#B8963E",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor:
                        submitting || !notes.trim() ? "not-allowed" : "pointer",
                    }}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
