import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import LogoStrip from "@/components/sections/logo-strip";
import Services from "@/components/sections/services";
import Pricing from "@/components/sections/pricing";
import Tools from "@/components/sections/tools";
import GettingStarted from "@/components/sections/getting-started";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Reviews from "@/components/sections/reviews";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
      <Pricing />
      <Tools />
      <GettingStarted />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}
