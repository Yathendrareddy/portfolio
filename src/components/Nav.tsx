"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";

const links = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#lab", label: "Lab", id: "lab" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-[55]"
    >
      <div
        className={`mx-auto max-w-5xl mt-3 flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-border bg-background-raised/80 backdrop-blur-xl shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-mono-tight text-sm font-medium tracking-tight text-foreground"
        >
          YA<span className="text-accent">.</span>
        </a>
        <nav className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-1.5 text-sm transition-colors ${
                active === l.id ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-border/60"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm rounded-full border border-border px-4 py-1.5 text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          Say hello
        </a>
      </div>
    </motion.header>
  );
}
