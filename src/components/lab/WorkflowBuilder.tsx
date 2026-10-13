"use client";

import { useState, useRef } from "react";
import { Reorder, AnimatePresence, motion } from "framer-motion";
import { GripVertical, Play, RotateCcw, Check } from "lucide-react";

type Step = {
  id: string;
  label: string;
  detail: string;
};

const initialSteps: Step[] = [
  { id: "ingest", label: "Ingest dataset", detail: "Pull raw records from source" },
  { id: "validate", label: "Validate schema", detail: "Check types & required fields" },
  { id: "normalize", label: "Normalize values", detail: "Standardize units & formats" },
  { id: "evaluate", label: "Run evaluation", detail: "Score against benchmark" },
  { id: "review", label: "Flag for review", detail: "Route anomalies to a reviewer" },
];

type RunState = "idle" | "running" | "done";

export function WorkflowBuilder() {
  const [steps, setSteps] = useState(initialSteps);
  const [runState, setRunState] = useState<RunState>("idle");
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setRunState("running");
    setActiveIndex(0);
    steps.forEach((_, i) => {
      const t = setTimeout(() => {
        setActiveIndex(i + 1);
        if (i === steps.length - 1) setRunState("done");
      }, (i + 1) * 650);
      timeouts.current.push(t);
    });
  };

  const reset = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setRunState("idle");
    setActiveIndex(-1);
  };

  return (
    <div className="rounded-2xl border border-border bg-background-raised/40 p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="font-medium text-foreground">Pipeline configurator</h4>
          <p className="mt-1 text-sm text-muted">
            Drag to reorder steps, then run the pipeline to see it execute in order.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={reset}
            disabled={runState === "idle"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-foreground disabled:opacity-30"
            aria-label="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={run}
            disabled={runState === "running"}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#04120b] disabled:opacity-60"
          >
            <Play className="h-3.5 w-3.5" />
            Run pipeline
          </motion.button>
        </div>
      </div>

      <Reorder.Group
        axis="y"
        values={steps}
        onReorder={(v) => runState === "idle" && setSteps(v)}
        className="space-y-2.5"
      >
        {steps.map((step, i) => {
          const status: RunState | "pending" =
            runState === "idle" ? "idle" : i < activeIndex ? "done" : i === activeIndex && runState === "running" ? "running" : "pending";
          return (
            <Reorder.Item
              key={step.id}
              value={step}
              drag={runState === "idle" ? "y" : false}
              className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4 py-3 select-none"
              whileDrag={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}
            >
              <GripVertical
                className={`h-4 w-4 shrink-0 text-muted ${runState === "idle" ? "cursor-grab" : "opacity-30"}`}
              />
              <span className="font-mono-tight w-5 shrink-0 text-xs text-muted">{i + 1}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{step.label}</p>
                <p className="text-xs text-muted">{step.detail}</p>
              </div>
              <StepBadge status={status} />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
}

function StepBadge({ status }: { status: RunState | "pending" }) {
  return (
    <div className="w-20 shrink-0 text-right">
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-muted"
          >
            ready
          </motion.span>
        )}
        {status === "pending" && (
          <motion.span
            key="pending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-full bg-border/60 px-2 py-0.5 text-[11px] font-medium text-muted"
          >
            queued
          </motion.span>
        )}
        {status === "running" && (
          <motion.span
            key="running"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="h-2.5 w-2.5 rounded-full border-[1.5px] border-accent/40 border-t-accent"
            />
            running
          </motion.span>
        )}
        {status === "done" && (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
          >
            <Check className="h-3 w-3" />
            done
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
