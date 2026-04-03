import Image from "next/image";

function ToolCard({ logo }: any) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-md transition">
      <Image src={logo} alt="Tool" width={120} height={40} className="object-contain" />
    </div>
  );
}

export default ToolCard;
