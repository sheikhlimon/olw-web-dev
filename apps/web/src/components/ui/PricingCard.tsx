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
      className={`rounded-xl p-6 flex flex-col gap-6 border bg-white border-border hover:bg-primary hover:text-white hover:border-primary transition group`}
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
          <li key={i} className="flex items-center gap-2">
            <span>✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
