import Container from "@/components/ui/container";
import TestimonialCard from "@/components/ui/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Jenny Wilson",
    image: "/images/reviews/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    highlight: false,
  },
  {
    name: "Esther Howard",
    image: "/images/reviews/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    highlight: true,
  },
  {
    name: "Robert Fox",
    image: "/images/reviews/3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    highlight: false,
  },
] as const;

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center max-w-xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Check Our Clients <span className="text-primary">Review</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
