"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      data-section="cta"
      className="relative flex min-h-screen items-center px-6 py-32 md:px-12"
    >
      {/* Soft glow behind content */}
      <div className="glow-orb left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="eyebrow justify-center mb-5"
        >
          Initiate Connection
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-semibold leading-[1.05] md:text-7xl"
        >
          Ready to Automate
          <br />
          <span className="text-brand-ice">Your Operation?</span>
        </motion.h2>

        <p className="mx-auto mt-7 max-w-xl text-lg text-on-2">
          Book a discovery call with our engineering team. We translate
          operational bottlenecks into streamlined, energy-optimized robotic
          solutions.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:info@corobotx.com"
            id="cta-button"
            className="btn-primary"
          >
            Request a Quote ✉
          </a>
          <a href="#solutions" className="btn-outline">
            Browse Solutions
          </a>
        </motion.div>

        {/* Contact strip */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href="mailto:info@corobotx.com"
            className="group rounded-sm border border-border/50 bg-surface/30 p-5 text-left transition-colors hover:border-brand"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow">
              // Email
            </div>
            <div className="mt-2 text-base font-medium text-on">
              info@corobotx.com
            </div>
            <div className="mt-1 text-xs text-on-2/70">
              Reply within one business day with topology + cycle-time model.
            </div>
          </a>
          <div className="rounded-sm border border-border/50 bg-surface/30 p-5 text-left">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow">
              // Headquarters
            </div>
            <div className="mt-2 text-base font-medium text-on">
              Egypt · MENA Region
            </div>
            <div className="mt-1 text-xs text-on-2/70">
              Authorized OEM Partners — Shibaura · OTC DAIHEN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
