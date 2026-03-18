import Link from "next/link";
import { LucideMountain } from "lucide-react";
import { siteConfig } from "@/constants";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <Link href="/" className="flex items-center gap-1 font-bold">
      <span>
        <LucideMountain />
      </span>
      {siteConfig.name}
    </Link>
  );
}
