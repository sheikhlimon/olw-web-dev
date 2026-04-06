function StepCard({ step, title, icon }: any) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="relative w-full max-w-[285px] aspect-[285/192] mx-auto">
        <div className="absolute top-3 left-4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#e8457c] bg-white flex items-center justify-center text-sm font-semibold z-10">
          0{step}
        </div>
        <div className="w-full h-full border border-[#f0b6c8] rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>

      <p className="font-semibold text-base leading-snug text-center">{title}</p>
    </div>
  );
}

export default StepCard;
