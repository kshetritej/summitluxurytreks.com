export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-5 w-0.75 rounded-full bg-primary" />
      <h2 className="text-lg font-semibold ">{title}</h2>
    </div>
  );
}
