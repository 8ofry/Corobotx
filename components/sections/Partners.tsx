"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
  {
    label: "Industrial Robotics",
    name: "Shibaura Machine",
    desc: "SCARA · 6-Axis · Payload 1 – 50 kg · Reach up to 2.2 m",
    body:
      "Partnering to deploy ultra-high-speed assembly and material handling systems. Shibaura's mechanical rigidity paired with CorobotX motion planning reduces cycle times by up to 18%.",
    logo: "/images/partners/shibaura.jpg",
    metric: "+18%",
    metricLabel: "Cycle Gain",
  },
  {
    label: "Welding Systems",
    name: "OTC DAIHEN",
    desc: "Process: Arc · Laser · Synchro-Feed Tracking ±0.05 mm",
    body:
      "Delivering flawless seam tracking and spatter reduction. OTC DAIHEN's specialized welding technology combined with our adaptive vision systems ensures zero-defect structural joints.",
    logo: "/images/partners/otc-daihen.png",
    metric: "−42%",
    metricLabel: "Spatter",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      data-section="partners"
      className="relative flex min-h-[150vh] flex-col justify-end px-6 pb-32 pt-[60vh] md:px-12"
    >
      <div className="relative z-20 max-w-6xl">
        <p className="eyebrow mb-5">Strategic Partners</p>
        <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
          World-Class Hardware.
          <br />
          <span className="text-brand-ice">Proprietary Intelligence.</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg text-on-2">
          We integrate proven industrial chassis with our in-house control
          layer — delivering unmatched cycle-time performance, uptime, and
          serviceability.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card relative overflow-hidden p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow">
                    {p.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-medium text-on">{p.name}</h3>
                  <p className="mt-2 text-sm text-on-2">{p.desc}</p>
                </div>
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm bg-white/95 p-2">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="120px"
                    className="object-contain p-2"
                  />
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-on-2/85">
                {p.body}
              </p>

              <div className="mt-6 flex items-end gap-3 border-t border-border/40 pt-5">
                <div className="text-4xl font-semibold text-brand-ice">
                  {p.metric}
                </div>
                <div className="pb-1 font-mono text-[11px] uppercase tracking-wider text-on-2">
                  {p.metricLabel}
                </div>
                <div className="ml-auto inline-flex items-center gap-1 text-xs text-brand-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-glow" />
                  Verified Integration
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
