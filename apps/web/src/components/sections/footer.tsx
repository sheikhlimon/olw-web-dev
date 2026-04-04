import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Works", href: "#works" },
    { label: "Career", href: "#career" },
  ],
  help: [
    { label: "Customer Support", href: "#" },
    { label: "Delivery Details", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  resources: [
    { label: "Free eBooks", href: "#" },
    { label: "Development Tutorial", href: "#" },
    { label: "How to - Blog", href: "#" },
    { label: "Youtube Playlist", href: "#" },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="bg-white pt-16 border-t border-[#D6D6D6]">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="w-20">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={80}
                height={26}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
              accumsan porta lectus.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                𝕏
              </Link>
              <Link href="#" className="hover:text-foreground">
                f
              </Link>
              <Link href="#" className="hover:text-foreground">
                📷
              </Link>
              <Link href="#" className="hover:text-foreground">
                in
              </Link>
            </div>
          </div>

          <div className="flex justify-around">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {FOOTER_LINKS.company.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Help</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {FOOTER_LINKS.help.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {FOOTER_LINKS.resources.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-12 bg-[#230B41] text-white text-center py-4 text-sm">
        © Copyright 2024, All Rights Reserved by OneLittleWeb
      </div>
    </footer>
  );
}
