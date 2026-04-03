import Container from "@/components/ui/container";
import ServiceCard from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    title: "Service 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: null,
  },
  {
    title: "Service 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: null,
  },
  {
    title: "Service 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: null,
  },
  {
    title: "Service 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: null,
  },
  {
    title: "Service 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: null,
  },
  {
    title: "Service 6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: null,
  },
] as const;

export default function Services() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Our <span className="text-primary">Service</span>
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
