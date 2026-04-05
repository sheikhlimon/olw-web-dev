import Container from "@/components/ui/container";
import StepCard from "@/components/ui/StepCard";
import Image from "next/image";

const STEPS = [
  {
    step: 1,
    title: "Add requirements & sign up today",
    icon: (
      <Image
        src="/images/getting-started/1.png"
        alt="Step 1"
        width={80}
        height={80}
        className="w-auto h-auto"
      />
    ),
  },
  {
    step: 2,
    title: "Connect with your CSM & onboarding team",
    icon: (
      <Image
        src="/images/getting-started/2.png"
        alt="Step 2"
        width={80}
        height={80}
        className="w-auto h-auto"
      />
    ),
  },
  {
    step: 3,
    title: "Meet your STR Assistant next week",
    icon: (
      <Image
        src="/images/getting-started/3.png"
        alt="Step 3"
        width={80}
        height={80}
        className="w-auto h-auto"
      />
    ),
  },
] as const;

export default function GettingStarted() {
  return (
    <section className="pt-5 pb-8 md:pb-10">
      <Container className="max-w-4xl">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Getting Started is <span className="text-[#e8457c]">Easy</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 place-items-center">
          {STEPS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
