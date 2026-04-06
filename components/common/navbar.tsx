import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import { LucidePlusCircle } from "lucide-react";
import { Button } from "../ui/button";

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
        <Link href={"/design-your-trip"} className="hidden md:flex">
          <Button variant={"secondary"} size={"lg"}>
            <LucidePlusCircle /> Customize your Trip
          </Button>
        </Link>
        {/*<Link
          href={siteConfig.whatsAppLink}
          target="_blank"
          className="hidden md:flex gap-2 items-center"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-white rounded-md p-1">
              <Image
                src={"/whatsapp-logo.png"}
                alt="whatsapp-icon-logo"
                height={40}
                width={40}
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-xl">
                +{siteConfig.whatsAppNumber}
              </div>
              <span>Direct Call or WhatsApp</span>
            </div>
          </div>
        </Link>*/}
        <MobileMenu items={menuData} />
      </div>
    </div>
  );
}
