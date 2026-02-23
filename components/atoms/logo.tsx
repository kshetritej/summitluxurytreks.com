import Link from "next/link";
import { LucideMountain } from "lucide-react";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <Link href="/" className="flex items-center gap-1 font-bold text-secondary">
      <span>
        <LucideMountain />
      </span>
      Summit Luxury Treks
    </Link>
  );
}
