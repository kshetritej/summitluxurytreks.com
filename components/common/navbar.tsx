import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import { LucideSmartphone } from "lucide-react";
import { Button } from "../ui/button";
import { siteConfig } from "@/constants";

export default async function Navbar() {
  const menuUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`;
  let menuData: any[] = [];

  try {
    const res = await fetch(menuUrl);
    const contentType = res.headers.get("content-type") || "";

    if (res.ok && contentType.includes("application/json")) {
      const data = await res.json().catch(() => null);
      menuData = data?.data?.items || [];
    } else {
      // Non-OK response or non-JSON body (e.g. HTML error page) — fall back safely
      console.warn("Navbar: failed to load menu.json", { url: menuUrl, status: res.status });
      menuData = [];
    }
  } catch (err) {
    console.warn("Navbar: error fetching menu", err);
    menuData = [];
  }

  return (
    <div
      id="site-navbar"
      className="bg-primary w-screen mx-auto sticky top-0 text-white shadow-b-sm flex flex-col gap-1 justify-between  z-999"
    >
      <div className="flex flex-row items-center w-screen justify-between p-2 container mx-auto">
        <LogoComponent />
        <MegaMenu items={menuData} />
        <Link
          href={siteConfig.whatsAppLink}
          target="_blank"
          className="hidden md:block"
        >
          <Button variant={"secondary"}>
            <LucideSmartphone />
            <div>{siteConfig.whatsAppNumber}</div>
          </Button>
        </Link>
        <MobileMenu items={menuData} />
      </div>
    </div>
  );
}
