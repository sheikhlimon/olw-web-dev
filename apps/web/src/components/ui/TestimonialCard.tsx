import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  highlight?: boolean;
}

export default function TestimonialCard({ name, image, text, highlight }: TestimonialCardProps) {
  return (
    <div
      className={`rounded-xl p-6 flex items-start gap-4 transition-all duration-500 ease-out ${
        highlight ? "bg-white shadow-[0px_4px_77.4px_0px_#88888869]" : "bg-[#f5f5f5]"
      }`}
    >
      <Image
        src={image}
        alt={name}
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
      />

      <div className="flex flex-col gap-1.5 min-w-0">
        <h3 className="font-semibold text-base">{name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{text}</p>
        <div className="flex gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
