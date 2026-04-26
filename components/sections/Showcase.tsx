"use client";

import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section
      id="showcase"
      data-section="showcase"
      className="relative flex min-h-screen items-center px-6 md:px-12"
    >
      <div className="max-w-4xl">
        <h2 className="mb-8 text-4xl font-semibold md:text-6xl">
          One arm.
          <br />
          <span className="text-accent">A thousand jobs.</span>
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2"
        >
          {[
            "Electronics assembly",
            "Food & beverage packing",
            "Laboratory pipetting",
            "Warehouse kitting",
          ].map((job, i) => (
            <motion.div
              key={job}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg">{job}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
