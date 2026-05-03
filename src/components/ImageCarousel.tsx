"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  aspectRatio?: string;
  contain?: boolean;
}

export default function ImageCarousel({
  images,
  interval = 5000,
  aspectRatio = "3/2",
  contain = false,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  // Pause auto-rotate when flag mode is active so the image being
  // flagged doesn't change mid-click. Using window.location.search
  // (read in an effect) instead of useSearchParams so this shared
  // component doesn't require a Suspense boundary at every callsite.
  const [flagMode, setFlagMode] = useState(false);
  useEffect(() => {
    const check = () => {
      const params = new URLSearchParams(window.location.search);
      setFlagMode(params.has("flag"));
    };
    check();
    window.addEventListener("popstate", check);
    return () => window.removeEventListener("popstate", check);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (flagMode) return; // Hold the current frame while flagging
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, flagMode]);

  return (
    <div className="relative overflow-hidden bg-cream-dark/30 rounded-sm" style={{ aspectRatio }}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className={contain ? "object-contain" : "object-cover"}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Prev / Next arrows — pointer-events disabled in flag mode so the
          flagger's elementFromPoint sees the image, not the button. */}
      <button
        onClick={prev}
        className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/40 transition-all duration-300 ${
          flagMode ? "pointer-events-none" : ""
        }`}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={next}
        className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/40 transition-all duration-300 ${
          flagMode ? "pointer-events-none" : ""
        }`}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Dot indicators */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ${
          flagMode ? "pointer-events-none" : ""
        }`}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-white/90 w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
