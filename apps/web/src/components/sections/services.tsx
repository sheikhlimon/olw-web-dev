import Container from "@/components/ui/container";
import ServiceCard from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    title: "Manage Property\nListings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/service/1.png",
  },
  {
    title: "Manage Customer\nBookings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/service/2.png",
  },
  {
    title: "Schedule House\nCleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/service/3.png",
  },
  {
    title: "Monitor Guest\nReviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/service/4.png",
  },
  {
    title: "Track & Report\nExpenses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/service/5.png",
  },
  {
    title: "Guest Inquiry\n& Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/service/6.png",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="pt-5 pb-8 md:pb-10">
      <Container>
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Our <span className="text-primary">Service</span>
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
