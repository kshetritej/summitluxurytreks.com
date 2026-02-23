import { MegaMenu } from "@/components/megamenu";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div className="sticky top-0 z-999">
      <MegaMenu />
      <div className="max-w-6xl flex gap-1 justify-between items-center container mx-auto px-1">
        {/*<div className="flex gap-4 items-center justify-between">
          <LogoComponent dark />
        </div>*/}
        {/*<div className="flex gap-1 items-center justify-center">
          <div className="hidden md:flex">
          </div>
          <div className="md:hidden">
            <MobileMenu items={menuData} />
          </div>
        </div>*/}
      </div>
    </div>
  );
}
