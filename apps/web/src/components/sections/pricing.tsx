import Container from "@/components/ui/container";
import PricingCard from "@/components/ui/PricingCard";

const PRICING_PLANS = [
  {
    title: "Freebie",
    price: 0,
    features: ["20,000+ graphics", "Stock images"],
    highlight: false,
  },
  {
    title: "Professional",
    price: 25,
    features: ["Everything included"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: 100,
    features: ["Full access"],
    highlight: false,
  },
] as const;

export default function Pricing() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            Airbnb Assistant <span className="text-red-500">pricing</span>
          </h2>
          <p className="text-gray-600">Choose a plan that's right for you</p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <span className="text-sm">Pay Monthly</span>
          <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
          <span className="text-sm">Pay Yearly</span>
          <span className="text-red-500 text-sm">Save 25%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
