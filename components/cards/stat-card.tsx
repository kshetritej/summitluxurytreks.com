export function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/20">
        {icon}
      </div>

      <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider">
        {label}
      </div>

      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}
