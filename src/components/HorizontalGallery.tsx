"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface HorizontalGalleryProps {
  images: string[];
  speed?: number; // pixels per second
}

export default function HorizontalGallery({
  images,
  speed = 30,
}: HorizontalGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = performance.now();

    function animate(now: number) {
      if (!pausedRef.current && track) {
        const dt = (now - lastTime) / 1000;
        offsetRef.current -= speed * dt;

        // Each image set is half the total width — reset when first set scrolls out
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= halfWidth) {
          offsetRef.current += halfWidth;
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      lastTime = now;
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed]);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex gap-5 will-change-transform">
        {allImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="flex-shrink-0 w-[320px] md:w-[400px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
