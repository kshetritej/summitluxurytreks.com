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
  let menuUnavailable = false;

  try {
    const res = await fetch(menuUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const contentType = res.headers.get("content-type") || "";

    if (res.ok && contentType.includes("application/json")) {
      const data = await res.json().catch(() => null);
      menuData = data?.data?.items || [];
    } else {
      // Non-OK response or non-JSON body (e.g. HTML error page) — fall back safely
      console.warn("Navbar: failed to load menu.json", {
        url: menuUrl,
        status: res.status,
      });
      menuData = [];
      menuUnavailable = true;
    }
  } catch (err) {
    console.warn("Navbar: error fetching menu", err);
    menuData = [];
    menuUnavailable = true;
  }

  return (
    <div
      id="site-navbar"
      className="bg-primary w-screen mx-auto sticky top-0 text-white shadow-b-sm flex flex-col gap-1 justify-between  z-999"
    >
      <div className="flex flex-row items-center w-screen justify-between p-2 container mx-auto">
        <LogoComponent />
        {!menuUnavailable ? (
          <MegaMenu items={menuData} />
        ) : (
          <div className="hidden md:block text-sm text-white/90">
            Menu unavailable
          </div>
        )}
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
        {!menuUnavailable ? (
          <MobileMenu items={menuData} />
        ) : (
          <div className="md:hidden text-sm text-white/90">
            Menu unavailable
          </div>
        )}
      </div>
    </div>
  );
}
