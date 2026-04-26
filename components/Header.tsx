"use client";

import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "Industries", href: "#industries" },
  { label: "Methodology", href: "#methodology" },
  { label: "Contact", href: "#cta" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-bg/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-10">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/brand/logo_white.png"
            alt="Corobotx"
            width={180}
            height={36}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 font-mono text-[12px] uppercase tracking-[0.2em] text-on-2 transition-colors hover:text-on hover:bg-surface-2/60"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="ml-auto lg:ml-6 inline-flex items-center gap-2 border border-brand text-brand-ice px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-brand hover:text-white"
        >
          Request Quote →
        </a>
      </div>
    </header>
  );
}
