"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PILLARS = [
  { icon: "◆", title: "Precision Engineering", body: "Sub-millimeter repeatability" },
  { icon: "⚡", title: "Energy Optimized", body: "ISO 50001 aligned" },
  { icon: "✓", title: "Compliance Ready", body: "CE · IP67 · IP69K" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-12"
    >
      {/* Hero background — the cinematic Corobotx studio shot.
          The 3D arm is posed identically so it reads as a continuation of
          the photo, not a separate object floating on top of it. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero_section.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left scrim — keeps headline legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-transparent" />
        {/* Bottom bleed into navy site bg */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
        {/* Top bleed into navy site bg */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg/80 to-transparent" />
      </div>

      {/* Drifting scan line */}
      <div className="scan-line absolute left-0 right-0 top-[22%] h-px" />

      <div className="relative z-20 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="eyebrow mb-6"
        >
          Industrial Systems Integrator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
        >
          Engineering
          <br />
          <span className="text-brand-ice">Smart Automation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-on-2"
        >
          We design and deliver advanced{" "}
          <span className="text-on">Robotics, Industrial Automation, Energy
          Management and Building Management</span>{" "}
          solutions for smart factories and intelligent buildings across the
          MENA region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#solutions" className="btn-primary">
            Explore Solutions →
          </a>
          <a href="#cta" className="btn-outline">
            Request a Quote
          </a>
        </motion.div>

        {/* Trust pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 grid max-w-xl gap-3 sm:grid-cols-3"
        >
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-sm border border-border/60 bg-surface/40 p-4 backdrop-blur-sm"
            >
              <div className="mb-1 text-brand-glow">{p.icon}</div>
              <div className="text-sm font-medium text-on">{p.title}</div>
              <div className="mt-1 text-xs text-on-2/80">{p.body}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.3em] text-muted">
        Scroll to Explore
        <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-brand-glow to-transparent" />
      </div>
    </section>
  );
}
