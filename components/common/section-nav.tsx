"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

export function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [offsetTop, setOffsetTop] = useState(0);

  // Read navbar height ONCE and store as CSS-safe value
  useEffect(() => {
    const navbar = document.getElementById("site-navbar");
    if (navbar) {
      setOffsetTop(navbar.offsetHeight);
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: `-${offsetTop}px 0px -50% 0px`,
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, offsetTop]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offsetTop - 8;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-[var(--section-nav-top)] z-50 bg-background shadow-y-sm md:px-12 pt-2"
      style={
        {
          "--section-nav-top": `${offsetTop}px`,
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`p-2 px-1 text-base font-medium whitespace-nowrap border-b-2 transition-colors flex items-center  gap-2 ${
                activeSection === section.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
