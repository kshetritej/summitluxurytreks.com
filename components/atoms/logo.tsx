import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideMountain } from "lucide-react";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
      <Link href="/" className="flex items-center gap-1 font-bold">
        <span className="text-orange-700">
          <LucideMountain />
        </span>
        Summit Luxury Treks
      </Link>
  );
}
