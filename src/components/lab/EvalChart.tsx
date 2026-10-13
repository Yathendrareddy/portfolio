"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERIES = {
  baseline: { label: "Baseline", color: "#3987e5" },
  optimized: { label: "Optimized", color: "#199e70" },
} as const;

const datasets = {
  accuracy: {
    label: "Model accuracy",
    unit: "%",
    rows: [
      { metric: "Precision", baseline: 71, optimized: 89 },
      { metric: "Recall", baseline: 64, optimized: 85 },
      { metric: "F1 score", baseline: 67, optimized: 87 },
      { metric: "Coverage", baseline: 78, optimized: 92 },
    ],
  },
  speed: {
    label: "Pipeline throughput",
    unit: "%",
    rows: [
      { metric: "Validation", baseline: 55, optimized: 94 },
      { metric: "Ingestion", baseline: 62, optimized: 88 },
      { metric: "Review queue", baseline: 48, optimized: 81 },
      { metric: "Export", baseline: 70, optimized: 90 },
    ],
  },
} as const;

type DatasetKey = keyof typeof datasets;

export function EvalChart() {
  const [active, setActive] = useState<DatasetKey>("accuracy");
  const [hovered, setHovered] = useState<string | null>(null);
  const data = datasets[active];

  return (
    <div className="rounded-2xl border border-border bg-background-raised/40 p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="font-medium text-foreground">Evaluation comparison</h4>
          <p className="mt-1 text-sm text-muted">{data.label} before and after optimization</p>
        </div>
        <div className="flex gap-1 rounded-lg border border-border p-1">
          {(Object.keys(datasets) as DatasetKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                active === key ? "text-[#04120b]" : "text-muted hover:text-foreground"
              }`}
            >
              {active === key && (
                <motion.span
                  layoutId="eval-tab"
                  className="absolute inset-0 rounded-md bg-accent"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative">{datasets[key].label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 flex items-center gap-5">
        {Object.entries(SERIES).map(([key, s]) => (
          <div key={key} className="flex items-center gap-2 text-xs text-muted">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: s.color }}
              aria-hidden
            />
            {s.label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-6">
        {data.rows.map((row) => (
          <div key={row.metric} className="flex flex-col items-center">
            <div className="relative flex h-48 w-full items-end justify-center gap-[3px]">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border"
                aria-hidden
              />
              {(["baseline", "optimized"] as const).map((seriesKey) => {
                const value = row[seriesKey];
                const id = `${row.metric}-${seriesKey}`;
                return (
                  <div
                    key={seriesKey}
                    className="relative flex h-full w-5 items-end justify-center sm:w-6"
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered((h) => (h === id ? null : h))}
                  >
                    <AnimatePresence>
                      {hovered === id && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="absolute -top-7 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-[11px] font-medium text-foreground shadow-lg"
                          style={{ zIndex: 10 }}
                        >
                          {value}
                          {data.unit}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.div
                      layout
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full rounded-t-[4px]"
                      style={{ backgroundColor: SERIES[seriesKey].color }}
                    />
                  </div>
                );
              })}
            </div>
            <span className="mt-3 text-center text-xs text-muted">{row.metric}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
