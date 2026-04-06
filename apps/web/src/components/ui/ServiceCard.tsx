import Image from "next/image";

export default function ServiceCard({ title, desc, icon }: any) {
  return (
    <div className="border border-card-border rounded-xl p-6 flex flex-col gap-4 items-start text-left bg-white hover:shadow-[0px_4px_90.3px_0px_#D7CDCF78] transition max-w-sm">
      <div className="h-12 w-12">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="w-full h-full object-contain"
          sizes="(max-width: 768px) 48px"
        />
      </div>
      <h3 className="font-semibold text-lg whitespace-pre-line">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
      <button className="border border-primary rounded-full px-4 py-2 text-primary text-sm mt-2 cursor-pointer">
        Read More
      </button>
    </div>
  );
}
