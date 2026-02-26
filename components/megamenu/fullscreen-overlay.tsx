"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "./types";
import LogoComponent from "../atoms/logo";
import { siteConfig } from "@/constants";

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
        "bg-accent text-white",
        "transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none",
      )}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-8 md:px-14 py-6 border-b border-white/10 flex-shrink-0">
        {/* Mobile: back button when a sub-panel is open, logo otherwise */}
        <div className="flex items-center gap-4">
          {/* Back button — mobile only, visible when a child panel is active */}
          <button
            onClick={() => onSetActive(null)}
            aria-label="Back to menu"
            className={cn(
              "md:hidden flex items-center gap-1.5 text-white/70 hover:text-white transition-all duration-300",
              activeItem
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none w-0 overflow-hidden",
            )}
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.15em] uppercase">
              Back
            </span>
          </button>

          <div
            role="button"
            onClick={onClose}
            className={cn(
              "transition-all duration-300",
              // Hide logo on mobile when sub-panel is open to make room
              activeItem
                ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
                : "opacity-100",
            )}
          >
            <LogoComponent />
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Body: viewport-width slider on mobile, side-by-side on md+ ── */}
      {/*
          Mobile:  a horizontal track that is 200vw wide.
                   Left half = category list, right half = sub-links.
                   We translate -50% when a child panel is active.
          Desktop: normal flex row, left col fixed width, right col fills rest.
        */}
      <div className="flex-1 overflow-hidden">
        {/* ── MOBILE sliding track ── */}
        <div
          className={cn(
            "flex md:hidden h-full w-[200vw]",
            "transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
            activeItem ? "-translate-x-1/2" : "translate-x-0",
          )}
        >
          {/* Slide 1 — category list */}
          <div className="w-screen h-full overflow-y-auto py-8 px-8 flex flex-col justify-between">
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
                        onClick={() => onSetActive(item.id)}
                        aria-expanded={isActive}
                        className="w-full text-left flex items-center justify-between px-4 py-3.5 rounded-sm text-[11px] tracking-[0.22em] uppercase font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span>{item.label}</span>
                        <span className="text-white/50 text-base leading-none">
                          →
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={onClose}
                        className="block px-4 py-3.5 rounded-sm text-[11px] tracking-[0.22em] uppercase font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/20 text-[11px] tracking-wider text-white/50 space-y-1 leading-relaxed">
              <p>{siteConfig.phoneNumber}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>

          {/* Slide 2 — sub-links */}
          <div className="w-screen h-full overflow-y-auto py-8 px-8">
            {activeItem && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <span className="block w-6 h-px bg-white/40" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/70">
                    {activeItem.label}
                  </span>
                </div>

                <ul className="space-y-3">
                  {activeItem.children.map((child, ci) => (
                    <li
                      key={child.id}
                      className="transition-all duration-400"
                      style={{ transitionDelay: `${ci * 45}ms` }}
                    >
                      <Link
                        href={child.url}
                        onClick={onClose}
                        className="group flex items-center gap-0 text-base text-white/80 hover:text-white transition-colors duration-150 py-1"
                      >
                        <span className="block w-0 group-hover:w-4 h-px bg-white/60 transition-all duration-200 mr-0 group-hover:mr-3 flex-shrink-0" />
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {activeItem.url !== "#" && (
                  <Link
                    href={activeItem.url}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 mt-10 text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white/80 transition-colors"
                  >
                    View all {activeItem.label} <span>→</span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── DESKTOP side-by-side layout ── */}
        <div className="hidden md:flex h-full">
          {/* Left column */}
          <nav
            aria-label="Main categories"
            className="w-[300px] lg:w-[340px] flex-shrink-0 border-r border-white/10 overflow-y-auto py-10 px-8 md:px-14 flex flex-col justify-between"
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
                            : "text-white/60 hover:text-white hover:bg-white/10",
                        )}
                      >
                        <span>{item.label}</span>
                        <span
                          className={cn(
                            "text-white/50 transition-transform duration-300 text-base leading-none",
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
                        className="block px-4 py-3 rounded-sm text-[11px] tracking-[0.22em] uppercase font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/20 text-[11px] tracking-wider text-white/40 space-y-1 leading-relaxed">
              <p>{siteConfig.phoneNumber}</p>
              <p>{siteConfig.email}</p>
            </div>
          </nav>

          {/* Right panel */}
          <div className="flex-1 overflow-y-auto relative">
            {/* Children panel */}
            <div
              className={cn(
                "absolute inset-0 p-10 px-16",
                "transition-all duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]",
                activeItem
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-6 pointer-events-none",
              )}
            >
              {activeItem && (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="block w-6 h-px bg-white/40" />
                    <span className="text-[10px] tracking-[0.35em] uppercase text-white/60">
                      {activeItem.label}
                    </span>
                  </div>

                  <ul className="space-y-3 max-w-sm">
                    {activeItem.children.map((child, ci) => (
                      <li
                        key={child.id}
                        style={{ transitionDelay: `${ci * 45}ms` }}
                      >
                        <Link
                          href={child.url}
                          onClick={onClose}
                          className="group flex items-center gap-0 text-sm text-white/70 hover:text-white transition-colors duration-150"
                        >
                          <span className="block w-0 group-hover:w-4 h-px bg-white/60 transition-all duration-200 mr-0 group-hover:mr-3 flex-shrink-0" />
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {activeItem.url !== "#" && (
                    <Link
                      href={activeItem.url}
                      onClick={onClose}
                      className="inline-flex items-center gap-2 mt-10 text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white/70 transition-colors"
                    >
                      View all {activeItem.label} <span>→</span>
                    </Link>
                  )}
                </>
              )}
            </div>

            {/* Default panel */}
            <div
              className={cn(
                "absolute inset-0 p-10 px-16 flex flex-col justify-between",
                "transition-opacity duration-300",
                activeItem ? "opacity-0 pointer-events-none" : "opacity-100",
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-lg">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
                    {siteConfig.address.country}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {siteConfig.address.district}, {siteConfig.address.street},
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </p>
                  <Link
                    href={`tel:${siteConfig.phoneNumber}`}
                    className="block text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {siteConfig.phoneNumber}
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="block text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>

              <div className="flex gap-6">
                {Object.keys(siteConfig.socials).map((key) => (
                  <Link
                    key={key}
                    // @ts-expect-error some object errors
                    href={siteConfig.socials[key]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors"
                  >
                    {key}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
