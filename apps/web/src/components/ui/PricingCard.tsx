export default function PricingCard({ title, price, features, highlight }: any) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col gap-6 border ${
        highlight ? "bg-primary text-white border-primary" : "bg-white border-border"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="text-4xl font-bold">
        ${price}
        <span className="text-sm font-normal"> / Month</span>
      </div>

      <button
        className={`py-2 rounded-md text-sm ${
          highlight ? "bg-white text-primary" : "border border-primary text-primary"
        }`}
      >
        Get Started Now
      </button>

      <ul className="flex flex-col gap-3 text-sm">
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
