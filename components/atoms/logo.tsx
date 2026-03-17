import Link from "next/link";
import Image from "next/image";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <Link href="/" className="flex items-center gap-1 font-bold">
      <Image
        src={"/summit-luxury-logo-white.png"}
        alt="Summit Luxury Logo"
        width={150}
        height={150}
        className="w-auto h-auto"
      />
    </Link>
  );
}
