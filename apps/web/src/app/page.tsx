import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import LogoStrip from "@/components/sections/logo-strip";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
    </main>
  );
}
