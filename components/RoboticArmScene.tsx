"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoboticArm, { type ArmRefs } from "./RoboticArm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RoboticArmScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<ArmRefs>({
    base: null,
    shoulder: null,
    elbow: null,
    wrist: null,
    gripperL: null,
    gripperR: null,
    glow: null,
  });

  const setRef = (
    key: keyof ArmRefs,
    el: SVGGElement | SVGCircleElement | null,
  ) => {
    // @ts-expect-error — heterogeneous ref bag
    refs.current[key] = el;
  };

  useEffect(() => {
    const r = refs.current;
    if (!r.shoulder || !r.elbow || !r.wrist || !r.gripperL || !r.gripperR) {
      return;
    }

    // Resting pose
    gsap.set([r.shoulder, r.elbow, r.wrist, r.gripperL, r.gripperR], {
      rotate: 0,
    });
    gsap.set(r.glow, { opacity: 0 });

    // Idle "breathing"
    const idle = gsap.to(r.shoulder, {
      rotate: "+=1.5",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Scroll-driven master timeline.
    // Explicit numeric positions → each section = 1 unit of internal time.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // HERO → FEATURES (t=0..1) — arm reaches up-left, opens gripper
    tl.to(r.shoulder, { rotate: -18, ease: "power2.inOut" }, 0)
      .to(r.elbow, { rotate: -28, ease: "power2.inOut" }, 0)
      .to(r.wrist, { rotate: 12, ease: "power2.inOut" }, 0)
      .to(r.gripperL, { rotate: -18 }, 0.4)
      .to(r.gripperR, { rotate: 18 }, 0.4)
      .to(r.glow, { opacity: 0.7 }, 0.6);

    // FEATURES → SHOWCASE (t=1..2) — sweep right, close gripper
    tl.to(r.shoulder, { rotate: 24, ease: "power2.inOut" }, 1)
      .to(r.elbow, { rotate: 35, ease: "power2.inOut" }, 1)
      .to(r.wrist, { rotate: -20, ease: "power2.inOut" }, 1)
      .to(r.gripperL, { rotate: 0 }, 1.4)
      .to(r.gripperR, { rotate: 0 }, 1.4);

    // SHOWCASE → TESTIMONIALS (t=2..3) — bow down
    tl.to(r.shoulder, { rotate: -8, ease: "power3.inOut" }, 2)
      .to(r.elbow, { rotate: 50, ease: "power3.inOut" }, 2)
      .to(r.wrist, { rotate: -30, ease: "power3.inOut" }, 2)
      .to(r.glow, { opacity: 0.4 }, 2);

    // TESTIMONIALS → CTA (t=3..4) — extend, point at button
    tl.to(r.shoulder, { rotate: -32, ease: "power2.inOut" }, 3)
      .to(r.elbow, { rotate: -40, ease: "power2.inOut" }, 3)
      .to(r.wrist, { rotate: 30, ease: "power2.inOut" }, 3)
      .to(r.gripperL, { rotate: -25 }, 3.3)
      .to(r.gripperR, { rotate: 25 }, 3.3)
      .to(r.glow, { opacity: 1 }, 3.5);

    ScrollTrigger.refresh();

    return () => {
      idle.kill();
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden h-screen w-[55vw] max-w-[720px] opacity-90 md:block"
    >
      <RoboticArm setRef={setRef} />
    </div>
  );
}
