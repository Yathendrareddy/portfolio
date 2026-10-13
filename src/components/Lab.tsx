"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { WorkflowBuilder } from "@/components/lab/WorkflowBuilder";
import { EvalChart } from "@/components/lab/EvalChart";

const tabs = [
  { id: "workflow", label: "Workflow builder" },
  { id: "eval", label: "Evaluation chart" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Lab() {
  const [tab, setTab] = useState<TabId>("workflow");

  return (
    <section id="lab" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono-tight text-sm text-accent">04 — Component Lab</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Interact with the craft
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Two small, fully interactive widgets built to show the same frontend
            craft behind the case studies above — not just describe it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="inline-flex gap-1 rounded-lg border border-border p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  tab === t.id ? "text-[#04120b]" : "text-muted hover:text-foreground"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="lab-tab"
                    className="absolute inset-0 rounded-md bg-accent"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8">
          {tab === "workflow" ? <WorkflowBuilder /> : <EvalChart />}
        </div>
      </div>
    </section>
  );
}
