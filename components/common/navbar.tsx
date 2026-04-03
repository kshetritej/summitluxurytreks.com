import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import { LucideSmartphone, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { siteConfig } from "@/constants";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div
      id="site-navbar"
      className="bg-primary mx-auto sticky top-0 text-white shadow-b-sm flex flex-col gap-1 justify-between z-999 py-3"
    >
      <div className="flex flex-row items-center w-screen justify-between container mx-auto">
        <LogoComponent />
        <MegaMenu items={menuData} />
        <Link
          href={siteConfig.whatsAppLink}
          target="_blank"
          className="hidden md:flex gap-2 items-center"
        >
          <Button variant={"secondary"} className="rounded-full">
            <MessageSquare />
            <div>{siteConfig.whatsAppNumber}</div>
          </Button>
        </Link>
        <MobileMenu items={menuData} />
      </div>
    </div>
  );
}
