import { Button } from "@/components/ui/button";
import svg from "../public/not-found-illustration.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-[60vh]">
      <p className="font-bold text-3xl">Page not Found!</p>
      <img className="w-60 " src={svg.src} />
      <Link href={"/"}>
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
