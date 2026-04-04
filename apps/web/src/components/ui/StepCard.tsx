function StepCard({ step, title, icon }: any) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-[285px] h-[192px] border border-card-border rounded-xl flex items-center justify-center relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-sm font-semibold bg-white">
          0{step}
        </div>
        {icon}
      </div>

      <p className="font-semibold text-xl leading-none text-center max-w-[285px]">{title}</p>
    </div>
  );
}

export default StepCard;
