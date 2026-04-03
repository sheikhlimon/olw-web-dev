function StepCard({ step, title, icon }: any) {
  return (
    <div className="flex flex-col items-center text-center gap-4 relative">
      <div className="absolute -top-4 left-4 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-sm font-semibold bg-white">
        {step}
      </div>

      <div className="w-full border rounded-xl p-10 flex justify-center">{icon}</div>

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}

export default StepCard;
