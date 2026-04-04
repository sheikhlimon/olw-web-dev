import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const REASONS = [
  "Brilliant Client Service",
  "Flexibility & Adaptability",
  "We make it Personal",
  "We have expert in our team",
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-red-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Few Reasons Why you Choose us?</h2>

            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <ul className="flex flex-col gap-3">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✔</span>
                  {reason}
                </li>
              ))}
            </ul>

            <Button>Schedule A Meeting →</Button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/person.png"
              alt="Person"
              width={400}
              height={300}
              className="max-w-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
