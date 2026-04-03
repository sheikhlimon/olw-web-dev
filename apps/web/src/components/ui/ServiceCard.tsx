export default function ServiceCard({ title, desc, icon }: any) {
  return (
    <div className="border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition">
      <div className="h-12 w-12">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
      <button className="text-red-500 text-sm mt-2">Read More</button>
    </div>
  );
}
