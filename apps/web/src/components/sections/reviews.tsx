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

  const next = useCallback(() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1)), []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused.current) next();
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  return (
    <Container>
      <div className="text-center max-w-xl mx-auto flex flex-col gap-4 mb-12">
        <h2 className="text-3xl font-bold">
          Check Our Clients <span className="text-primary">Review</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>

      <div
        className="flex items-center justify-center gap-6"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        {TESTIMONIALS.map((item, i) => {
          const isCenter = i === active;
          const isVisible = Math.abs(i - active) <= 1;

          if (!isVisible) return null;

          return (
            <div
              key={i}
              className="flex-shrink-0 w-full max-w-[420px] transition-all duration-500 ease-out cursor-pointer"
              style={{
                opacity: isCenter ? 1 : 0.6,
                transform: `scale(${isCenter ? 1 : 0.9})`,
              }}
              onClick={() => setActive(i)}
            >
              <TestimonialCard {...item} highlight={isCenter} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
