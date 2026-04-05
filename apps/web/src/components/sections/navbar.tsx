"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 sticky top-0 bg-white z-50">
      <Container className="h-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={32}
            className="w-auto h-auto"
          />
        </Link>

        <nav className="hidden lg:flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-primary hover:underline hover:[text-shadow:0_0_0.5px_currentColor]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contact"
            size="sm"
            className="px-6 rounded-[5px]"
            style={{ height: "50px", fontSize: "1rem" }}
          >
            Schedule A Meeting →
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </Container>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary hover:underline py-1"
              >
                {label}
              </Link>
            ))}
            <Button
              href="#contact"
              onClick={() => setIsOpen(false)}
              size="sm"
              className="px-6 rounded-[5px]"
              style={{ height: "50px", fontSize: "1rem" }}
            >
              Schedule A Meeting →
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
