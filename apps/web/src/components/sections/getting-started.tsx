import Container from "@/components/ui/container";
import StepCard from "@/components/ui/StepCard";

const STEPS = [
  { step: 1, title: "Step One", icon: null },
  { step: 2, title: "Step Two", icon: null },
  { step: 3, title: "Step Three", icon: null },
] as const;

export default function GettingStarted() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {STEPS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
