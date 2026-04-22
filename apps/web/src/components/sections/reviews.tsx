"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Container from "@/components/ui/container";
import TestimonialCard from "@/components/ui/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Jenny Wilson",
    image: "/images/review/1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Esther Howard",
    image: "/images/review/2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Robert Fox",
    image: "/images/review/3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Jenny Wilson",
    image: "/images/review/1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Esther Howard",
    image: "/images/review/2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(2);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const paused = useRef(false);
  const touchStartX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1)), []);
  const prev = useCallback(() => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1)), []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused.current) next();
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const cardWidth =
    typeof window !== "undefined" && window.innerWidth < 640
      ? window.innerWidth - 48
      : typeof window !== "undefined" && window.innerWidth < 768
        ? 320
        : 400;
  const gap = 24;
  const offset = active * (cardWidth + gap);

  return (
    <section className="pt-5 pb-8 md:pb-10">
      <Container>
        <div className="text-center max-w-xl mx-auto flex flex-col gap-4 mb-12">
          <h2 className="text-3xl font-bold">
            Check Our Clients <span className="text-primary">Review</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </Container>

      <div
        className="w-full overflow-hidden py-4"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(50% - ${offset}px - ${cardWidth / 2}px))` }}
        >
          {TESTIMONIALS.map((item, i) => {
            const isCenter = i === active;

            return (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(100vw-3rem)] sm:w-80 md:w-[400px] cursor-pointer"
                style={{
                  opacity: isCenter ? 1 : 0.6,
                  transform: `scale(${isCenter ? 1 : 0.9})`,
                  transition: "opacity 500ms ease-out, transform 500ms ease-out",
                }}
                onClick={() => setActive(i)}
              >
                <TestimonialCard {...item} highlight={isCenter} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
