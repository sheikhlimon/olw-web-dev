function TestimonialCard({ name, image, text, highlight }: any) {
  return (
    <div
      className={`rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition ${
        highlight ? "bg-white" : "bg-gray-100"
      }`}
    >
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover" />

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{text}</p>

        <div className="text-yellow-400">★★★★★</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
