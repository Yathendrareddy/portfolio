"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section id="work" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono-tight text-sm text-accent">02 — Case Studies</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From dense data to clear decisions
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Two deep dives into shipping production interfaces for complex, high-stakes
            workflows — the problem, the design decisions, the implementation, and the outcome.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 0.08}>
              <motion.article
                whileHover={{ borderColor: "var(--accent)" }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-border bg-background-raised/40 p-8 sm:p-10"
              >
                <div className="flex flex-col gap-10 lg:flex-row">
                  <div className="lg:w-1/3">
                    <span className="font-mono-tight text-sm text-muted">{study.tag}</span>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-accent">{study.company}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{study.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid flex-1 gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="font-mono-tight text-xs uppercase tracking-wider text-muted">
                        The Problem
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                        {study.problem}
                      </p>

                      <h4 className="mt-6 font-mono-tight text-xs uppercase tracking-wider text-muted">
                        Implementation
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                        {study.implementation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono-tight text-xs uppercase tracking-wider text-muted">
                        Design Decisions
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {study.decisions.map((d) => (
                          <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-6 font-mono-tight text-xs uppercase tracking-wider text-muted">
                        Outcome
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {study.outcome.map((o) => (
                          <li key={o} className="flex gap-2.5 text-sm leading-relaxed text-accent">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
