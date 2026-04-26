"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    no: "01",
    title: "Manufacturing & Assembly",
    body: "End-to-end automation for automotive, electronics, and heavy machinery — 24/7 production lines with predictive maintenance.",
  },
  {
    no: "02",
    title: "Food & Beverage",
    body: "High-speed pick, pack and palletizing logic adhering to IP67 / IP69K sanitary compliance.",
  },
  {
    no: "03",
    title: "Pharmaceuticals",
    body: "Cleanroom-certified robotics for sterile handling, sorting and packaging of biologicals.",
  },
  {
    no: "04",
    title: "Logistics & Warehousing",
    body: "AGV fleet management and complex sorting algorithms for high-throughput fulfillment.",
  },
  {
    no: "05",
    title: "Commercial Real Estate",
    body: "Autonomous mobile robots for facility maintenance, floor cleaning, and secure transport.",
  },
  {
    no: "06",
    title: "Energy & Utilities",
    body: "Remote telemetry, substation monitoring and automated valve / switch control for grid-adjacent ops.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      data-section="industries"
      className="relative flex min-h-screen items-center px-6 py-32 md:px-12"
    >
      <div className="relative z-20 max-w-5xl">
        <p className="eyebrow mb-5">Industries Served</p>
        <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
          Deployed Across
          <br />
          <span className="text-brand-ice">Critical Sectors.</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg text-on-2">
          Every sector has its own constraints — IP ratings, cleanroom class,
          tolerance budgets, throughput targets. We tune the stack to match.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/30 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.no}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-bg p-7 transition-colors hover:bg-surface-2/40"
            >
              <div className="font-mono text-[11px] tracking-[0.25em] text-brand-glow">
                / {ind.no}
              </div>
              <h3 className="mt-3 text-xl font-medium text-on">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-2/80">
                {ind.body}
              </p>
              <div className="absolute inset-x-7 bottom-5 h-px bg-gradient-to-r from-brand to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
