import Image from "next/image";
import Container from "@/components/ui/container";

const LOGOS = [
  { src: "/images/logo-strip/1.svg", alt: "Partner 1" },
  { src: "/images/logo-strip/2.svg", alt: "Partner 2" },
  { src: "/images/logo-strip/3.svg", alt: "Partner 3" },
  { src: "/images/logo-strip/4.svg", alt: "Partner 4" },
  { src: "/images/logo-strip/5.svg", alt: "Partner 5" },
  { src: "/images/logo-strip/6.svg", alt: "Partner 6" },
  { src: "/images/logo-strip/7.svg", alt: "Partner 7" },
] as const;

export default function LogoStrip() {
  return (
    <section className="py-12">
      <Container>
        <p className="text-sm text-gray-500 text-center mb-8">
          Trusted by leaders in 50+ industries
        </p>
      </Container>
      <div className="bg-gray-50 py-6">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {LOGOS.map(({ src, alt }) => (
              <Image key={src} src={src} alt={alt} width={0} height={0} className="h-8 w-auto" />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
