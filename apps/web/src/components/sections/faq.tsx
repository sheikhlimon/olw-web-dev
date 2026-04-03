import Container from "@/components/ui/container";
import FAQItem from "@/components/ui/FAQItem";

const FAQS = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free onboarding call.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade anytime.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime with no extra fees.",
  },
] as const;

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Frequently asked <span className="text-primary">questions</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center gap-4 shadow-sm">
            <p className="font-semibold text-lg">Still have questions?</p>
            <p className="text-muted-foreground text-sm">
              Can't find the answer you're looking for? Please chat to our team.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg">Get in touch</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
