import Image from "next/image";

function ToolCard({ logo }: any) {
  return (
    <div className="w-[290px] h-[139px] bg-white rounded-[11px] flex items-center justify-center hover:shadow-[0px_4px_30.3px_0px_#FF8AA847] transition">
      <Image
        src={logo}
        alt="Tool"
        width={120}
        height={40}
        className="w-auto h-auto object-contain"
      />
    </div>
  );
}

export default ToolCard;
