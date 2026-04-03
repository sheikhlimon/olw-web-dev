import Container from "@/components/ui/container";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 flex flex-col items-center text-center gap-4 shadow-sm">
          <div className="flex -space-x-3">
            <Image
              src="/images/reviews/1.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border"
            />
            <Image
              src="/images/reviews/2.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border"
            />
            <Image
              src="/images/reviews/3.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border"
            />
          </div>

          <h3 className="text-lg font-semibold">Still have Questions?</h3>

          <p className="text-sm text-muted-foreground">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>

          <button className="bg-primary text-white px-6 py-2 rounded-lg">Get in touch</button>
        </div>
      </Container>
    </section>
  );
}
