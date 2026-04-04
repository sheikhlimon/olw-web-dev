import Container from "@/components/ui/container";
import StepCard from "@/components/ui/StepCard";
import Image from "next/image";

const STEPS = [
  {
    step: 1,
    title: "Add requirements & sign up today",
    icon: <Image src="/images/getting-started/1.png" alt="Step 1" width={80} height={80} />,
  },
  {
    step: 2,
    title: "Connect with your CSM & onboarding team",
    icon: <Image src="/images/getting-started/2.png" alt="Step 2" width={80} height={80} />,
  },
  {
    step: 3,
    title: "Meet your STR Assistant next week",
    icon: <Image src="/images/getting-started/3.png" alt="Step 3" width={80} height={80} />,
  },
] as const;

export default function GettingStarted() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          {STEPS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
