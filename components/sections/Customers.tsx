"use client";

import Image from "next/image";

const LOGOS = [
  { name: "Pepsico", src: "/images/customers/pepsico.jpeg" },
  { name: "Unilever", src: "/images/customers/unilever.jpeg" },
  { name: "Savola", src: "/images/customers/savola.jpeg" },
  { name: "Mobica", src: "/images/customers/mobica.jpeg" },
  { name: "Sallab", src: "/images/customers/sallab.jpeg" },
  { name: "Knor", src: "/images/customers/knor.jpeg" },
  { name: "Naid", src: "/images/customers/naid.jpeg" },
  { name: "Samaya", src: "/images/customers/samaya.jpeg" },
  { name: "ITI", src: "/images/customers/iti.jpeg" },
  { name: "E-JUST", src: "/images/customers/Ejust.jpeg" },
];

export default function Customers() {
  return (
    <section
      id="customers"
      data-section="customers"
      className="relative flex min-h-[70vh] items-center px-6 py-24 md:px-12"
    >
      <div className="relative z-20 mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Trusted By</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              From global brands to local champions.
            </h2>
          </div>
          <p className="max-w-md text-sm text-on-2">
            Operating across food & beverage, education, manufacturing, and
            consumer goods throughout Egypt and the MENA region.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

          <div className="flex w-max animate-marquee gap-4">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div
                key={`${l.name}-${i}`}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-sm border border-border/40 bg-white/95 p-3 grayscale transition-all hover:grayscale-0"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={l.src}
                    alt={l.name}
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="mx-auto mt-16 max-w-3xl rounded-sm border border-border/50 bg-surface/40 p-8 backdrop-blur-sm">
          <blockquote className="text-xl leading-relaxed text-on/95 md:text-2xl">
            "We replaced three single-purpose machines with one CorobotX cell.
            Throughput went up{" "}
            <span className="text-brand-ice">42%</span>, and we reconfigure the
            line in an afternoon — not a quarter."
          </blockquote>
          <footer className="mt-5 flex items-center gap-3 text-sm text-on-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-brand-deep" />
            <div>
              <div className="font-medium text-on">Plant Operations Lead</div>
              <div className="text-on-2/70">F&B Manufacturer · Greater Cairo</div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
