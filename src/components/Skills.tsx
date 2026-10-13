"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { skillGroups, experience, education } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono-tight text-sm text-accent">03 — Competencies</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The stack behind the craft
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.title} delay={idx * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-background-raised/40 p-6">
                <h3 className="font-mono-tight text-xs uppercase tracking-wider text-muted">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, borderColor: "var(--accent)", color: "var(--accent)" }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-14 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-mono-tight text-xs uppercase tracking-wider text-muted">
              Experience
            </h3>
            <ul className="mt-5 space-y-5">
              {experience.map((e) => (
                <li key={e.company} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-medium text-foreground">{e.company}</p>
                    <p className="text-sm text-muted">{e.title}</p>
                  </div>
                  <span className="shrink-0 font-mono-tight text-xs text-muted">{e.dates}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-mono-tight text-xs uppercase tracking-wider text-muted">
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.degree} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-medium text-foreground">{e.degree}</p>
                    <p className="text-sm text-muted">{e.school}</p>
                  </div>
                  <span className="shrink-0 font-mono-tight text-xs text-muted">{e.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
