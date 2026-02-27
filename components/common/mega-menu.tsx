import {
  LucideChevronDown,
  LucideMessageCircle,
  LucideSmartphone,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { siteConfig } from "@/constants";

// This is a Server Component (no 'use client' at the top)
export function MegaMenu({ items }: { items: any }) {
  return (
    <nav className="items-center space-x-6 hidden md:flex">
      <ul className="flex gap-6">
        {items?.map((item: any) => (
          <li key={item.id} className="group py-4">
            {/* Main Link / Trigger */}
            <Link
              href={item.url || "#"}
              className="flex items-center gap-1 font-medium text-sm hover:text-white/90 transition-colors"
            >
              {item.label}
              {item.children.length > 0 && <LucideChevronDown size={12} />}
            </Link>

            {/* Dropdown Content - Controlled by CSS hover */}
            {item.children.length > 0 && (
              <div className="bg-white absolute z-999 left-0  top-16 hidden group-hover:block w-screen min-h-[30vh] pt-2 shadow-sm">
                <div className="container mx-auto p-6 grid sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
                  {item.children.map((child: any) => (
                    <div key={child.id} className="space-y-3">
                      {/* Sub-heading (e.g., Everest Region) */}
                      <Link
                        href={child.url}
                        className="font-bold  text-primary pb-1"
                      >
                        {child.label}
                      </Link>

                      {/* Nested Links */}
                      {child.children && (
                        <ul className="space-y-2 py-4">
                          {child.children.map((subChild: any) => (
                            <li key={subChild.id}>
                              <Link
                                href={subChild.url}
                                className="text-md text-gray-600  transition-colors block"
                              >
                                {subChild.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link href={`tel:${siteConfig.phoneNumber}`}>
        <Button variant={"secondary"}>
          <LucideSmartphone />
          <div>{siteConfig.phoneNumber}</div>
        </Button>
      </Link>
    </nav>
  );
}
