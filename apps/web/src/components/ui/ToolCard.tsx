import Image from "next/image";

function ToolCard({ logo }: any) {
  return (
    <div className="w-[290px] aspect-[290/139] bg-white rounded-lg flex items-center justify-center hover:shadow-[0px_4px_30.3px_0px_#FF8AA847] transition cursor-pointer">
      <Image
        src={logo}
        alt="Tool"
        width={120}
        height={32}
        className="w-auto h-auto object-contain"
      />
    </div>
  );
}

export default ToolCard;
