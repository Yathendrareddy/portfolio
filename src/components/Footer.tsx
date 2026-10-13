"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="noise-grid relative overflow-hidden rounded-3xl border border-border bg-background-raised/50 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000_30%,transparent_100%)]" />
            <p className="font-mono-tight text-sm text-accent">05 — Contact</p>
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&rsquo;s build something precise.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Open to Design Engineer and product frontend roles. Based in {profile.location}.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-[#04120b] shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent/60 hover:text-accent transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© 2026 {profile.name}</p>
          <p className="font-mono-tight">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
