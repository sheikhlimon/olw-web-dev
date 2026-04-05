import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-8">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: "top left",
        }}
      />

      {/* Center fade */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.5)_35%,rgba(255,255,255,0)_70%)]" />

      {/* Top shadow */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FF8AA8]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl gap-4 -mt-16">
        <Image
          src="/images/hero-section/1.png"
          alt=""
          width={80}
          height={80}
          className="hidden md:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src="/images/hero-section/2.png"
          alt=""
          width={80}
          height={80}
          className="hidden md:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src="/images/hero-section/3.png"
          alt=""
          width={80}
          height={80}
          className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
        />
        <Image
          src="/images/hero-section/4.png"
          alt=""
          width={80}
          height={80}
          className="hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
        />

        <h1 className="text-4xl font-bold">Airbnb Assistants For</h1>
        <h2 className="text-3xl">Property Management</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button
          href="#contact"
          className="mt-4 px-6 rounded-[5px]"
          style={{ height: "50px", fontSize: "1rem" }}
        >
          Schedule A Meeting →
        </Button>
        <a href="#pricing" className="font-medium text-sm underline mt-2">
          See Pricing
        </a>
      </div>
    </section>
  );
}
