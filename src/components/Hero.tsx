"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { profile } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pipelineSteps = [
  { label: "Ingest dataset", status: "done" },
  { label: "Validate schema", status: "done" },
  { label: "Run evaluation", status: "active" },
  { label: "Review results", status: "pending" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="noise-grid relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-raised/60 px-3 py-1 text-xs text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Open to Design Engineer roles
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.headline.replace(/\.$/, "")}.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.subhead}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-[#04120b] shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]"
            >
              View case studies
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={profile.resumeHref}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent/60 hover:text-accent transition-colors"
            >
              Resume
              <FileDown className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="rounded-2xl border border-border bg-background-raised/70 p-5 backdrop-blur-sm shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono-tight text-xs text-muted">pipeline_run.ts</span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              </div>
            </div>
            <ul className="space-y-3">
              {pipelineSteps.map((step, i) => (
                <motion.li
                  key={step.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-background/60 px-3 py-2.5"
                >
                  <span className="font-mono-tight text-sm text-foreground/90">{step.label}</span>
                  <StatusChip status={step.status} />
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="absolute -z-10 -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

function StatusChip({ status }: { status: string }) {
  if (status === "done") {
    return (
      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
        done
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-2.5 w-2.5 rounded-full border-[1.5px] border-accent/40 border-t-accent"
        />
        running
      </span>
    );
  }
  return (
    <span className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-medium text-muted">
      queued
    </span>
  );
}
