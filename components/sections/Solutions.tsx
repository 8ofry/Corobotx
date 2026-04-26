"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MODULES = [
  {
    no: "01",
    title: "Industrial Robotics",
    body: "Advanced robotic integration for welding, handling, palletizing, and assembly — powered by industry-leading OEM partners.",
    image: "/images/products/welding-arms.jpeg",
    tags: ["Welding (MIG/TIG/Laser)", "Material Handling", "Palletizing", "Vision-Guided Assembly"],
  },
  {
    no: "02",
    title: "Energy Management",
    body: "Real-time telemetry, peak-load shedding, and efficiency analytics across the facility.",
    image: "/images/products/welding-cell.jpeg",
    tags: ["3-Phase Logging", "Load Balancing", "ISO 50001"],
  },
  {
    no: "03",
    title: "Automation Systems",
    body: "PLC / SCADA, machine vision, and custom control-panel design for zero-downtime operation.",
    image: "/images/products/shibaura-trio.jpeg",
    tags: ["PLC · SCADA", "Motion Control", "Machine Vision"],
  },
  {
    no: "04",
    title: "Building Management",
    body: "Intelligent control of HVAC, lighting, security and access — purpose-built for smart industrial facilities.",
    image: "/images/products/shibaura-range.jpeg",
    tags: ["HVAC Control Loops", "Automated Lighting", "Biometric Access", "CCTV"],
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      data-section="solutions"
      className="relative flex min-h-screen items-center px-6 py-32 md:px-12"
    >
      <div className="relative z-20 ml-auto max-w-4xl text-right">
        <p className="eyebrow mb-5">Core Framework</p>
        <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
          Solutions Engineered
          <br />
          <span className="text-brand-ice">for Continuous Duty.</span>
        </h2>
        <p className="ml-auto mt-7 max-w-2xl text-lg text-on-2">
          Four integrated pillars, one unified control layer. Built for
          high-density operations in hostile environments.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {MODULES.map((m, i) => (
            <motion.article
              key={m.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="card group overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/20 to-transparent" />
                <div className="absolute left-4 top-4 font-mono text-[11px] tracking-[0.25em] text-brand-glow">
                  / {m.no}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-on">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-2/85">
                  {m.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-border/50 bg-surface-2/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-on-2/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
