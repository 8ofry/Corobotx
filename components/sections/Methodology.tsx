"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    icon: "▣",
    title: "Intelligent Computing",
    body: "Edge + cloud hybrid control",
  },
  {
    icon: "⇆",
    title: "MES / ERP Connectivity",
    body: "Unified data flow",
  },
  {
    icon: "◉",
    title: "Machine Vision",
    body: "Deep-learning defect detection",
  },
  {
    icon: "▤",
    title: "SPC & Reporting",
    body: "Real-time analytics",
  },
  {
    icon: "✦",
    title: "Robotics Control",
    body: "Multi-robot coordination",
  },
  {
    icon: "{ }",
    title: "Industrial Software",
    body: "Custom workflow automation",
  },
];

const STATS = [
  { value: "30%", label: "Cycle-Time Reduction", sub: "Across deployed robotic cells" },
  { value: "24/7", label: "Continuous Operation", sub: "Predictive maintenance telemetry" },
  { value: "99.7%", label: "Uptime Target", sub: "PLC/SCADA redundant architecture" },
  { value: "12+", label: "Industries Served", sub: "MENA region deployments" },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      data-section="methodology"
      className="relative flex min-h-[150vh] flex-col items-end justify-end px-6 pb-32 pt-[60vh] md:px-12"
    >
      <div className="relative z-20 max-w-4xl text-right">
        <p className="eyebrow mb-5">Operating Principle</p>
        <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
          Transforming
          <br />
          <span className="text-brand-ice">Industrial Operations.</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-2">
          CorobotX bridges heavy industry and high-intelligence computing. We
          turn traditional manufacturing and facility management into seamless,
          data-driven, highly automated ecosystems — optimizing performance,
          reducing downtime and maximizing operational efficiency.
        </p>

        {/* 6 methodology pillars */}
        <p className="eyebrow mb-4 mt-14">Our Methodology</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="card group p-5"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border/70 bg-surface-2 text-brand-glow">
                {p.icon}
              </div>
              <div className="text-base font-medium text-on">{p.title}</div>
              <div className="mt-1 text-sm text-on-2/80">{p.body}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-l border-brand pl-4"
            >
              <div className="text-3xl font-semibold text-brand-ice md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-on-2">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-on-2/60">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
