import Container from "@/components/ui/container";
import ToolCard from "@/components/ui/ToolCard";

const TOOLS = [
  { logo: "/images/tools/1.png" },
  { logo: "/images/tools/2.png" },
  { logo: "/images/tools/3.png" },
  { logo: "/images/tools/4.png" },
  { logo: "/images/tools/5.png" },
  { logo: "/images/tools/6.png" },
  { logo: "/images/tools/4.png" },
  { logo: "/images/tools/5.png" },
  { logo: "/images/tools/6.png" },
] as const;

export default function Tools() {
  return (
    <section className="pt-5 pb-8 md:pb-10">
      <Container>
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Our <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </Container>

      <div className="bg-gray-50 mt-12 md:mt-20 lg:mt-24 py-8 md:py-10 pb-16 md:pb-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-fit mx-auto">
            {TOOLS.map(({ logo }, i) => (
              <ToolCard key={i} logo={logo} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
