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

        <nav className="flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className={label === "Home" ? "text-primary" : ""}>
              {label}
            </Link>
          ))}
        </nav>

        <Button href="#contact">Schedule A Meeting →</Button>
      </Container>
    </header>
  );
}
