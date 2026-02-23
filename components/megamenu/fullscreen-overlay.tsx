"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "./types";
import LogoComponent from "../atoms/logo";

interface FullscreenOverlayProps {
  items: NavItem[];
  isOpen: boolean;
  activeId: string | null;
  onClose: () => void;
  onSetActive: (id: string | null) => void;
}

export function FullscreenOverlay({
  items,
  isOpen,
  activeId,
  onClose,
  onSetActive,
}: FullscreenOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock scroll & handle Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset active panel when overlay closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => onSetActive(null), 600);
      return () => clearTimeout(t);
    }
  }, [isOpen, onSetActive]);

  const activeItem = items.find((i) => i.id === activeId) ?? null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={cn(
        "fixed inset-0 z-50 flex flex-col",
        "bg-primary text-white",
        "transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none",
      )}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-8 md:px-14 py-6 border-b border-white/10 flex-shrink-0">
        <div role="button" onClick={onClose}>
          <LogoComponent />
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Split body ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left column — top-level items */}
        <nav
          aria-label="Main categories"
          className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0 border-r border-white/10 overflow-y-auto py-10 px-8 md:px-14 flex flex-col justify-between"
        >
          <ul className="space-y-1">
            {items.map((item, i) => {
              const hasChildren = item.children.length > 0;
              const isActive = activeId === item.id;

              return (
                <li
                  key={item.id}
                  className={cn(
                    "transition-all duration-500",
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4",
                  )}
                  style={{ transitionDelay: isOpen ? `${i * 55}ms` : "0ms" }}
                >
                  {hasChildren ? (
                    <button
                      onClick={() => onSetActive(isActive ? null : item.id)}
                      aria-expanded={isActive}
                      className={cn(
                        "w-full text-left flex items-center justify-between",
                        "px-4 py-3 rounded-sm",
                        "text-[11px] tracking-[0.22em] uppercase font-medium",
                        "transition-all duration-200",
                        isActive
                          ? "text-white bg-white/20"
                          : "text-black hover:text-white hover:bg-white/20",
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={cn(
                          "text-white/40 transition-transform duration-300 text-base leading-none",
                          isActive && "rotate-90",
                        )}
                      >
                        →
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={onClose}
                      className="block px-4 py-3 rounded-sm text-[11px] tracking-[0.22em] uppercase font-medium text-white/45 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Minimal contact hint */}
          <div className="mt-10 pt-8 border-t border-white  tracking-wider text-white/90 space-y-1 leading-relaxed">
            <p>+977 9841328947</p>
            <p>info@luxurysummitreks.com</p>
          </div>
        </nav>

        {/* Right panel — children or default contact */}
        <div className="flex-1 overflow-y-auto relative">
          {/* Children panel — slides in when a category is selected */}
          <div
            className={cn(
              "absolute inset-0 p-10 md:px-16",
              "transition-all duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]",
              activeItem
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-6 pointer-events-none",
            )}
          >
            {activeItem && (
              <>
                {/* Category label */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="block w-6 h-px bg-white/25" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/35">
                    {activeItem.label}
                  </span>
                </div>

                {/* Child links — simple flat list from API */}
                <ul className="space-y-3 max-w-sm">
                  {activeItem.children.map((child, ci) => (
                    <li
                      key={child.id}
                      className="transition-all duration-400"
                      style={{ transitionDelay: `${ci * 45}ms` }}
                    >
                      <Link
                        href={child.url}
                        onClick={onClose}
                        className="group flex items-center gap-0 text-sm text-white/55 hover:text-white transition-colors duration-150"
                      >
                        <span className="block w-0 group-hover:w-4 h-px bg-white/50 transition-all duration-200 mr-0 group-hover:mr-3 flex-shrink-0" />
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Link to category index page (if it has a real URL) */}
                {activeItem.url !== "#" && (
                  <Link
                    href={activeItem.url}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 mt-10 text-[10px] tracking-[0.3em] uppercase text-white/25 hover:text-white/60 transition-colors"
                  >
                    View all {activeItem.label} <span>→</span>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Default panel — visible when nothing is selected */}
          <div
            className={cn(
              "absolute inset-0 p-10 md:px-16 flex flex-col justify-between",
              "transition-opacity duration-300",
              activeItem ? "opacity-0 pointer-events-none" : "opacity-100",
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-lg">
              {/* Nepal office */}
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">
                  Nepal
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Kaski, Lakeside,
                  <br />
                  Pokhara, NEPAL
                </p>
                <Link
                  href="tel:+9779841328947"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  +977 9841328947{" "}
                </Link>
                <Link
                  href="mailto:info@summitluxurytreks.com"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@summitluxurytreks.com
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-6">
              {["YouTube", "Facebook", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
