export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-5 w-0.75 rounded-full bg-sky-600" />
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
    </div>
  );
}
