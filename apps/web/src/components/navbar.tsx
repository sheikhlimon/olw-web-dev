import Image from "next/image";
import Link from "next/link";

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
    <header className="h-[89px] flex items-center justify-between px-8">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </Link>

      {/* Links */}
      <nav className="flex gap-6">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={label === "Home" ? "text-pink-500" : ""}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Button */}
      <Link
        href="#contact"
        className="bg-pink-500 text-white px-4 py-2 rounded-md"
      >
        Schedule A Meeting →
      </Link>
    </header>
  );
}
