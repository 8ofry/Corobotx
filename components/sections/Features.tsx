"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Sub-millimeter precision",
    body: "Six-axis control with closed-loop feedback. Repeatability ±0.02 mm.",
  },
  {
    title: "Adaptive gripping",
    body: "Tactile sensors adjust force per material — from circuit boards to produce.",
  },
  {
    title: "Swap in 90 seconds",
    body: "Magnetic tool heads. No recalibration, no downtime, no engineer required.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      data-section="features"
      className="relative flex min-h-screen items-center px-6 md:px-12"
    >
      <div className="max-w-5xl">
        <h2 className="mb-12 text-4xl font-semibold md:text-6xl">
          Built to work.
          <br />
          <span className="text-white/50">Not to impress.</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="mb-3 h-1 w-8 rounded bg-accent" />
              <h3 className="mb-2 text-xl font-medium">{f.title}</h3>
              <p className="text-sm text-white/60">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
