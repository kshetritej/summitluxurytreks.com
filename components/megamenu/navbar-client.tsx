"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MailIcon, PhoneIcon } from "lucide-react";
import { FullscreenOverlay } from "./fullscreen-overlay";
import type { NavItem } from "./types";
import LogoComponent from "../atoms/logo";

interface NavbarClientProps {
  items: NavItem[];
}

export function NavbarClient({ items }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* ── Slim utility bar ── */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 md:px-14 py-2 bg-primary  tracking-widest text-secondary">
        <Link
          href={"mailto:info@luxurysummitreks.com"}
          className="flex items-center gap-1 justify-center"
        >
          <MailIcon size={12} />
          info@luxurysummitreks.com
        </Link>
        <Link
          href={"mailto:info@luxurysummitreks.com"}
          className="flex items-center gap-1 justify-center"
        >
          <PhoneIcon size={12} />
          +977 98 413 28 947
        </Link>
      </div>

      <header className="sticky top-0 z-40 flex items-center justify-between px-8 md:px-14 py-5 bg-black/90 text-white backdrop-blur-sm ">
        <LogoComponent />
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Quick links"
        >
          {items
            .filter((item) => item.children.length === 0)
            .map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="px-4 py-2  text-sm uppercase  transition-colors"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={open}
            aria-label="Open full menu"
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            className="flex items-center gap-3 px-5 py-2.5 border   uppercase "
          >
            <span className="hidden sm:block">Experiences</span>
            <Menu size={16} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <FullscreenOverlay
        items={items}
        isOpen={isOpen}
        activeId={activeId}
        onClose={close}
        onSetActive={setActiveId}
      />
    </>
  );
}
