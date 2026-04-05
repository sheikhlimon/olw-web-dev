export default function PricingCard({
  title,
  price,
  features,
  highlight,
  billingType,
  description,
}: any) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col gap-6 border bg-white border-border hover:bg-primary hover:text-white hover:border-primary transition group max-w-sm w-full`}
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-1 text-muted-foreground group-hover:text-white/70">
          {description}
        </p>
      </div>

      <div className="text-4xl font-bold">
        ${price}
        <span className="text-sm font-normal"> / {billingType === "year" ? "Year" : "Month"}</span>
      </div>

      <button
        className={`py-2 rounded-md text-sm border-[1.5px] border-primary text-primary bg-white cursor-pointer`}
      >
        Get Started Now
      </button>

      <ul className="flex flex-col gap-3 text-sm font-manrope">
        {features.map((item: any, i: number) => (
          <li key={i} className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FAC4D2] flex-shrink-0 group-hover:bg-white/30">
              <svg
                className="w-3 h-3 text-[#E8456B] group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
