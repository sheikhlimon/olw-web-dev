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

const CARD_WIDTH = 380;
const GAP = 24;

export default function Reviews() {
  const [active, setActive] = useState(2);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const next = useCallback(() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1)), []);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      if (!isPaused.current) next();
    }, 5000);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const offset = -(active * (CARD_WIDTH + GAP));

  return (
    <Container className="flex flex-col gap-12">
      <div className="text-center max-w-xl mx-auto flex flex-col gap-4">
        <h2 className="text-3xl font-bold">
          Check Our Clients <span className="text-primary">Review</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>

      <div
        className="overflow-visible"
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px + ${offset}px))`,
          }}
        >
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 transition-all duration-500 ease-out cursor-pointer ${
                i === active ? "scale-100 opacity-100 z-10" : "scale-90 opacity-80"
              }`}
              style={{ width: `${CARD_WIDTH}px` }}
              onClick={() => setActive(i)}
            >
              <TestimonialCard {...item} highlight={i === active} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
