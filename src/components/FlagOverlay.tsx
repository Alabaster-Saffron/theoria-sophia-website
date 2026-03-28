"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/* ─── Types ─── */
interface FlagEntry {
  id: string;
  timestamp: string;
  page: string;
  section: string;
  element: string;
  notes: string;
  imageFilename?: string;
}

/* ─── Helpers ─── */

/** Walk up from a clicked element to find the nearest identifiable section */
function findSection(el: HTMLElement): { section: string; sectionEl: HTMLElement | null } {
  let current: HTMLElement | null = el;
  while (current && current !== document.body) {
    // Check for explicit data-section or id
    const label =
      current.getAttribute("data-section") ||
      current.getAttribute("id") ||
      (current.tagName === "SECTION" ? current.getAttribute("aria-label") : null);
    if (label) return { section: label, sectionEl: current };

    // If it's a <section> without a label, use its index
    if (current.tagName === "SECTION") {
      const sections = Array.from(document.querySelectorAll("section"));
      const idx = sections.indexOf(current);
      return { section: `section-${idx + 1}`, sectionEl: current };
    }
    current = current.parentElement;
  }
  return { section: "unknown", sectionEl: null };
}

/** Describe the clicked element in human terms */
function describeElement(el: HTMLElement): string {
  const tag = el.tagName.toLowerCase();

  if (tag === "img" || (tag === "div" && el.style.backgroundImage)) {
    const alt = el.getAttribute("alt");
    const src = el.getAttribute("src");
    if (alt) return `Image: "${alt}"`;
    if (src) return `Image: ${src.split("/").pop()}`;
    return "Background image";
  }

  const text = el.textContent?.trim().slice(0, 80);
  if (text) return `Text: "${text}${(el.textContent?.trim().length ?? 0) > 80 ? "…" : ""}"`;

  return `<${tag}> element`;
}

/* ─── Styles ─── */
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 99998,
  cursor: "crosshair",
  pointerEvents: "auto",
};

const popupStyle: React.CSSProperties = {
  position: "fixed",
  zIndex: 99999,
  background: "#fff",
  borderRadius: "12px",
  padding: "24px",
  width: "380px",
  maxWidth: "90vw",
  maxHeight: "80vh",
  overflow: "auto",
  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
  fontFamily: "inherit",
  background: "#fff",
  color: "#333",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 600,
  color: "#888",
  marginBottom: "6px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const btnPrimary: React.CSSProperties = {
  padding: "10px 24px",
  background: "#B8963E",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 20px",
  background: "transparent",
  color: "#666",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
  cursor: "pointer",
};

/* ─── Banner ─── */
function FlagBanner() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100001,
        background: "#B8963E",
        color: "#fff",
        textAlign: "center",
        padding: "10px 16px",
        fontSize: "14px",
        fontWeight: 600,
        fontFamily: "system-ui, -apple-system, sans-serif",
        letterSpacing: "0.02em",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      FLAG MODE — Click anything you want changed
    </div>
  );
}

/* ─── Main Component ─── */
export default function FlagOverlay() {
  const searchParams = useSearchParams();
  const isActive = searchParams.has("flag");

  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);
  const [popup, setPopup] = useState<{
    x: number;
    y: number;
    section: string;
    element: string;
    page: string;
  } | null>(null);
  const [notes, setNotes] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  // Update highlight box position on hover
  useEffect(() => {
    if (!hoveredEl || !highlightRef.current) return;
    const rect = hoveredEl.getBoundingClientRect();
    const hl = highlightRef.current;
    hl.style.top = `${rect.top - 2}px`;
    hl.style.left = `${rect.left - 2}px`;
    hl.style.width = `${rect.width + 4}px`;
    hl.style.height = `${rect.height + 4}px`;
    hl.style.display = "block";
  }, [hoveredEl]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (popup) return; // Don't change highlight while popup is open
      // Get element under cursor (look through the overlay)
      const overlay = e.currentTarget as HTMLElement;
      overlay.style.pointerEvents = "none";
      const under = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      overlay.style.pointerEvents = "auto";

      if (under && under !== document.body && under !== document.documentElement) {
        setHoveredEl(under);
      } else {
        setHoveredEl(null);
        if (highlightRef.current) highlightRef.current.style.display = "none";
      }
    },
    [popup]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (popup) return;
      e.preventDefault();
      e.stopPropagation();

      if (!hoveredEl) return;

      const { section } = findSection(hoveredEl);
      const element = describeElement(hoveredEl);
      const page = window.location.pathname === "/" ? "homepage" : window.location.pathname.slice(1);

      // Position popup near the click, but keep it on screen
      const x = Math.min(e.clientX + 12, window.innerWidth - 400);
      const y = Math.min(e.clientY + 12, window.innerHeight - 300);

      setPopup({ x, y, section, element, page });
      setNotes("");
      setImageFile(null);
      setImagePreview(null);
      setSubmitted(false);
    },
    [hoveredEl, popup]
  );

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!popup || !notes.trim()) return;
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("page", popup.page);
      formData.append("section", popup.section);
      formData.append("element", popup.element);
      formData.append("notes", notes.trim());
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch("/api/flag", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
      setTimeout(() => {
        setPopup(null);
        setSubmitted(false);
        setHoveredEl(null);
        if (highlightRef.current) highlightRef.current.style.display = "none";
      }, 1200);
    } catch (err) {
      console.error("Flag submit failed:", err);
      alert("Failed to submit flag. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }, [popup, notes, imageFile]);

  const closePopup = useCallback(() => {
    setPopup(null);
    setHoveredEl(null);
    if (highlightRef.current) highlightRef.current.style.display = "none";
  }, []);

  if (!isActive) return null;

  return (
    <>
      <FlagBanner />

      {/* Highlight box */}
      <div
        ref={highlightRef}
        style={{
          position: "fixed",
          display: "none",
          border: "2px solid #B8963E",
          background: "rgba(184, 150, 62, 0.08)",
          borderRadius: "4px",
          pointerEvents: "none",
          zIndex: 99997,
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Invisible overlay to capture mouse events */}
      {!popup && (
        <div
          style={overlayStyle}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        />
      )}

      {/* Popup */}
      {popup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99998,
            background: "rgba(0,0,0,0.3)",
          }}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              ...popupStyle,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px", color: "#B8963E" }}>&#10003;</div>
                <p style={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>Flagged!</p>
              </div>
            ) : (
              <>
                <h3 style={{ margin: "0 0 4px", fontSize: "18px", fontWeight: 600, color: "#333" }}>
                  Flag for Change
                </h3>
                <p style={{ margin: "0 0 20px", fontSize: "12px", color: "#999" }}>
                  {popup.page} &rsaquo; {popup.section}
                </p>

                {/* What was clicked */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>You clicked</label>
                  <div
                    style={{
                      padding: "10px 12px",
                      background: "#f8f7f4",
                      borderRadius: "6px",
                      fontSize: "13px",
                      color: "#555",
                      lineHeight: 1.4,
                      wordBreak: "break-word",
                    }}
                  >
                    {popup.element}
                  </div>
                </div>

                {/* Notes */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>What do you want changed?</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder='e.g. "Replace this image" or "Make this text larger"'
                    rows={3}
                    autoFocus
                    style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
                  />
                </div>

                {/* Image upload */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>Replacement Image (optional)</label>
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
                    {imageFile ? imageFile.name : "Click to upload..."}
                  </button>
                  {imagePreview && (
                    <div style={{ marginTop: "8px", position: "relative" }}>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          maxHeight: "120px",
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
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        style={{
                          position: "absolute",
                          top: "4px",
                          right: "4px",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          border: "none",
                          background: "rgba(0,0,0,0.6)",
                          color: "#fff",
                          fontSize: "13px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                  <button type="button" onClick={closePopup} style={btnSecondary}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting || !notes.trim()}
                    style={{
                      ...btnPrimary,
                      opacity: submitting || !notes.trim() ? 0.5 : 1,
                      cursor: submitting || !notes.trim() ? "not-allowed" : "pointer",
                    }}
                  >
                    {submitting ? "Saving..." : "Flag It"}
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
