import LogoComponent from "@/components/atoms/logo";
import { AtSign, Phone } from "lucide-react";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div className="sticky top-0 bg-background shadow-b-md border-b p-2 z-999">
      <div className="max-w-6xl mx-auto p-2 flex justify-end gap-2 pb-4">
        <p className="flex gap-1 items-center">
          <AtSign className="size-4" /> mail@govindatravels.com |
        </p>
        <p className="flex gap-1 items-center">
          <Phone className="size-4" /> +977 9841328947
        </p>
      </div>
      <div className="max-w-6xl flex gap-1 justify-between items-center container mx-auto px-1">
        <div className="flex gap-4 items-center justify-between">
          <LogoComponent dark />
        </div>
        <div className="flex gap-1 items-center justify-center">
          <div className="hidden md:flex">
            <MegaMenu />
          </div>
          <div className="md:hidden">
            <MobileMenu items={menuData} />
          </div>
          {/* <div className="hidden md:flex">
                        <SearchBox />
                    </div>
                    <MobileNav /> */}
        </div>
      </div>
    </div>
  );
}
