import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div
      id="site-navbar"
      className="bg-primary w-screen mx-auto sticky top-0 text-white shadow-b-sm flex flex-col gap-1 justify-between  z-999"
    >
      <div className="flex flex-row items-center w-screen justify-between p-2 container mx-auto">
        <LogoComponent />
        <MegaMenu items={menuData} />
        <MobileMenu items={menuData} />
      </div>
    </div>
  );
}
