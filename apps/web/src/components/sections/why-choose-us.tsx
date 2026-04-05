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
    <section className="pt-5 pb-8 md:pb-10">
      <Container>
        <div className="bg-[#FDE8EC] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[30px] font-bold leading-tight text-gray-900">
              Few Reasons Why you
              <br />
              Choose us?
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <ul className="flex flex-col gap-3 mt-6">
              {REASONS.map((reason) => (
                <li
                  key={reason}
                  className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FAC4D2] flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-[#E8456B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {reason}
                </li>
              ))}
            </ul>

            <Button
              className="mt-7 px-6 rounded-[5px] bg-[#E8456B] text-white hover:bg-[#E8456B]/90"
              style={{ height: "50px", fontSize: "1rem" }}
            >
              Schedule A Meeting →
            </Button>
          </div>

          <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
            <div className="relative w-fit">
              <div className="relative z-10 w-[200px] md:w-[320px] -ml-5">
                <Image
                  src="/images/choose-us/person.png"
                  alt="Person"
                  width={280}
                  height={374}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[320px] h-[200px] md:w-[520px] md:h-[320px] rounded-l-full rounded-r-full bg-[#FAC4D2]/60 shadow-[inset_3px_-5px_4px_0px_rgba(0,0,0,0.07)]">
                <div className="hidden md:block absolute left-0 top-[3%] -translate-x-[5%] -translate-y-1/2 z-20">
                  <Image
                    src="/images/choose-us/hotel.png"
                    alt="Hotel"
                    width={1245}
                    height={649}
                    className="w-[220px] h-auto drop-shadow-md"
                  />
                </div>

                <div className="hidden md:block absolute left-0 bottom-[15%] -translate-x-[15%] translate-y-1/2 z-20">
                  <Image
                    src="/images/choose-us/calendar.png"
                    alt="Calendar"
                    width={1153}
                    height={989}
                    className="w-[200px] h-auto drop-shadow-md"
                  />
                </div>

                <div className="hidden md:block absolute right-0 top-[3%] translate-x-[5%] -translate-y-1/2 z-20">
                  <Image
                    src="/images/choose-us/compny.png"
                    alt="Company"
                    width={945}
                    height={965}
                    className="w-[175px] h-auto drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
