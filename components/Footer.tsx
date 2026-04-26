"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-border/40 bg-bg/95 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <Image
            src="/images/brand/corobotx-logo.png"
            alt="Corobotx"
            width={160}
            height={32}
            className="h-7 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-on-2/80">
            Precision engineered industrial automation. Designing resilient,
            energy-optimized robotics and smart facility systems for the MENA
            region and beyond.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-brand-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-glow animate-pulse" />
            Systems Nominal
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow">
              Platform
            </div>
            <ul className="space-y-2 text-sm text-on-2">
              <li><a href="#solutions" className="hover:text-on">Solutions</a></li>
              <li><a href="#partners" className="hover:text-on">Partners</a></li>
              <li><a href="#industries" className="hover:text-on">Industries</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow">
              Company
            </div>
            <ul className="space-y-2 text-sm text-on-2">
              <li><a href="#methodology" className="hover:text-on">Methodology</a></li>
              <li><a href="#cta" className="hover:text-on">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-glow">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-on-2">
              <li>info@corobotx.com</li>
              <li className="text-on-2/70">Egypt · MENA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] items-center justify-between border-t border-border/30 pt-6 text-xs text-on-2/60">
        <div>© 2026 CorobotX Industrial Automation · Precision Engineered.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-on">Privacy</a>
          <a href="#" className="hover:text-on">Terms</a>
        </div>
      </div>
    </footer>
  );
}
