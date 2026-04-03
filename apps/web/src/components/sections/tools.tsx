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
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Our <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {TOOLS.map(({ logo }, i) => (
            <ToolCard key={i} logo={logo} />
          ))}
        </div>
      </Container>
    </section>
  );
}
