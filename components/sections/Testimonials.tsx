"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className="relative flex min-h-screen items-center px-6 md:px-12"
    >
      <div className="max-w-3xl">
        <h2 className="mb-10 text-4xl font-semibold md:text-6xl">
          Trusted on the line.
        </h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-10"
        >
          <p className="text-2xl leading-relaxed text-white/85 md:text-3xl">
            “We replaced three single-purpose machines with one Corobotx arm.
            Throughput went up <span className="text-accent">42%</span>, and we
            reconfigure the cell in an afternoon — not a quarter.”
          </p>
          <footer className="mt-6 flex items-center gap-3 text-sm text-white/50">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent2" />
            <div>
              <div className="font-medium text-white/80">Maya Chen</div>
              <div>Plant Manager, Northwind Electronics</div>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
