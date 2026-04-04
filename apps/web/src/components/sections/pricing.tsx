"use client";

import Container from "@/components/ui/container";
import PricingCard from "@/components/ui/PricingCard";
import Image from "next/image";
import { useState } from "react";

const PRICING_PLANS = [
  {
    title: "Freebie",
    price: 0,
    description: "Ideal for individuals who need quick access to basic features.",
    features: ["20,000+ graphics", "Stock images"],
    highlight: false,
  },
  {
    title: "Professional",
    price: 25,
    description: "Ideal for individuals who need advanced features and tools for client work.",
    features: ["Everything included"],
    highlight: false,
  },
  {
    title: "Enterprise",
    price: 100,
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    features: ["Full access"],
    highlight: false,
  },
] as const;

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (monthlyPrice: number) => {
    if (isYearly) {
      return Math.round(monthlyPrice * 12 * 0.75); // 25% discount
    }
    return monthlyPrice;
  };

  return (
    <section id="pricing" className="pt-5 pb-8 md:pb-10">
      <Container>
        <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            Airbnb Assistant <span className="text-primary">pricing</span>
          </h2>
          <p className="text-gray-600">Choose a plan that's right for you</p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <span className={`text-sm ${!isYearly ? "text-primary font-semibold" : ""}`}>
            Pay Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
              isYearly ? "bg-primary" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? "text-primary font-semibold" : ""}`}>
            Pay Yearly
          </span>
          <Image
            src="/images/pricing/1.png"
            alt="Save 25%"
            width={80}
            height={30}
            className="w-auto h-auto mt-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              price={getPrice(plan.price)}
              billingType={isYearly ? "year" : "month"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
