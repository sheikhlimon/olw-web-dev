import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <header className="h-16 flex items-center justify-between px-8 sticky top-0 bg-white z-50">
      {/* Logo */}
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={100} height={32} />
      </Link>

      {/* Links */}
      <nav className="flex gap-6">
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={label} href={href} className={label === "Home" ? "text-primary" : ""}>
            {label}
          </Link>
        ))}
      </nav>

      {/* Button */}
      <Button href="#contact" size="sm">
        Schedule A Meeting →
      </Button>
    </header>
  );
}
