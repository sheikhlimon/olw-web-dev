import Container from "@/components/ui/container";
import FAQItem from "@/components/ui/FAQItem";
import Image from "next/image";

const FAQS = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade anytime.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime with no extra fees.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, contact our support team to add custom info to your invoice.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is handled automatically each month. You can view and manage your invoices from your account settings.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Go to your account settings and update your email address. You'll receive a confirmation email to verify the change.",
  },
] as const;

export default function FAQ() {
  return (
    <section id="contact" className="pt-12 pb-10">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently asked <span className="text-[#e8457c]">questions</span>
            </h2>
            <p className="text-gray-700 mt-3 text-[15px]">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="bg-[#fafafa] rounded-2xl p-10">
            <div className="flex flex-col">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} {...faq} last={i === FAQS.length - 1} />
              ))}
            </div>
          </div>

          <div className="bg-[#fafafa] rounded-2xl p-8 flex flex-col items-center text-center gap-3">
            <div className="relative flex items-center justify-center h-16">
              <Image
                src="/images/questions/1.png"
                alt="Team member"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white object-cover -mr-4"
              />
              <Image
                src="/images/questions/2.png"
                alt="Team member"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-2 border-white object-cover z-10"
              />
              <Image
                src="/images/questions/3.png"
                alt="Team member"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white object-cover -ml-4"
              />
            </div>
            <p className="font-semibold text-[15px] text-gray-900">Still have Questions?</p>
            <p className="text-gray-400 text-sm">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <button className="bg-[#e8457c] hover:bg-[#d63a6e] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
