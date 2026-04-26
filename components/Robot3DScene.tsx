"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Environment, ContactShadows, Sparkles } from "@react-three/drei";
import Robot3D, { type JointAngles } from "./Robot3D";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DEG = Math.PI / 180;

export default function Robot3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const anglesRef = useRef<JointAngles>({
    j1: 0,
    j2: 0,
    j3: 0,
    j4: 0,
    j5: 0,
    j6: 0,
    baseX: 0,
    baseY: 0,
    baseZ: 0,
    sparksOpacity: 0,
  });

  useEffect(() => {
    // R3F's internal ResizeObserver sometimes misses the first measurement
    // when the container starts hidden (Tailwind's `hidden md:block`) or
    // when navigation interrupts the initial layout. Force a resize burst
    // on mount, plus observe the container to catch later size changes.
    const fire = () => window.dispatchEvent(new Event("resize"));
    const burst = [16, 80, 250, 600].map((d) => setTimeout(fire, d));
    const ro = containerRef.current
      ? new ResizeObserver(fire)
      : null;
    if (ro && containerRef.current) ro.observe(containerRef.current);

    const a = anglesRef.current;
    gsap.set(a, {
      j1: 175 * DEG,    // Angle to face the camera more
      j2: -55 * DEG,    // Lower arm tilted forward
      j3: 40 * DEG,     // Upper arm extending outward
      j4: 0,
      j5: -5 * DEG,     // Wrist pointing forward/straight
      j6: 0,
      baseX: 0,
      baseY: 0,
      baseZ: 0,
      sparksOpacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // All keyframes keep J1 in the 145°–190° band — gripper stays on screen-LEFT
    // throughout, while J2/J3/J5 do the visible "reaching" motion.

    // 0: HERO → METHODOLOGY (Empty space transition): move left, face right, curl up
    tl.to(a, {
      j1: -10 * DEG,    // Face right
      j2: -55 * DEG,
      j3: 40 * DEG,
      j5: -5 * DEG,
      baseX: -1200,     // Move to the left side of the screen
      sparksOpacity: 0, // Still mostly folded
      ease: "power2.inOut",
    }, 0);

    // 1: METHODOLOGY (Content viewing): extend arm towards the text
    tl.to(a, {
      j1: -15 * DEG,
      j2: 25 * DEG,     // Lean forward towards text
      j3: 5 * DEG,      // Unfold upper arm
      j5: -45 * DEG,    // Point wrist towards text
      sparksOpacity: 0.5, // Starts expanding
      ease: "power1.inOut",
    }, 1);

    // 2: METHODOLOGY → SOLUTIONS: fully extend grip towards Solutions text on the right
    tl.to(a, {
      j1: -20 * DEG,    // Keep facing right
      j2: 35 * DEG,     // Lean further
      j3: -10 * DEG,    // Fully unfold upper arm
      j4: 30 * DEG,     // Twist wrist slightly
      j5: -60 * DEG,    // Point down at the cards
      baseX: -1200,     // Stay on the left!
      sparksOpacity: 1, // Fully expanded!
      ease: "power2.inOut",
    }, 2);

    // 3: SOLUTIONS → PARTNERS (Empty space transition): move to far right, face left
    tl.to(a, {
      j1: 170 * DEG,    // Face left
      j2: -20 * DEG,    // Curl up slightly
      j3: 60 * DEG,
      j4: 0,
      j5: 30 * DEG,
      j6: 90 * DEG,
      baseX: 1200,      // Move to far right ("rare right")
      sparksOpacity: 0, // Curled back up
      ease: "power3.inOut",
    }, 3);

    // 4: PARTNERS (Content viewing): extend arm over the partner logos
    tl.to(a, {
      j1: 165 * DEG,
      j2: 25 * DEG,     // Lean forward (to the left)
      j3: 5 * DEG,      // Unfold upper arm
      j4: 30 * DEG,
      j5: -30 * DEG,    // Point wrist at logos
      sparksOpacity: 0.5, // Expanding again
      ease: "power2.inOut",
    }, 4);

    // 5: PARTNERS → INDUSTRIES: move back to center right, pivot wrist
    tl.to(a, {
      j1: 150 * DEG,
      j2: -35 * DEG,
      j3: 60 * DEG,
      j4: 60 * DEG,
      j5: 30 * DEG,
      j6: 120 * DEG,
      baseX: 0,         // Move back to center right
      sparksOpacity: 0, // Retracted
      ease: "power2.inOut",
    }, 5);

    // 6: INDUSTRIES → CTA: full reach toward the "Request a Quote" CTA button
    tl.to(a, {
      j1: 185 * DEG,
      j2: -75 * DEG,
      j3: 25 * DEG,
      j4: 90 * DEG,
      j5: -20 * DEG,
      j6: 180 * DEG,
      sparksOpacity: 1, // Full reach
      ease: "power2.inOut",
    }, 6);

    ScrollTrigger.refresh();

    return () => {
      burst.forEach(clearTimeout);
      ro?.disconnect();
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10"
    >
      <Canvas
        shadows
        style={{ width: "100%", height: "100%" }}
        camera={{
          // Closer + slight 3/4 angle to match the photo's tight crop.
          position: [1200, -2600, 900],
          fov: 32,
          near: 10,
          far: 15000,
          up: [0, 0, 1],
        }}
        onCreated={({ camera, gl }) => {
          // Aim left-of-base so the arm sits in the right half and the
          // welder hovers over the empty content area on the left.
          camera.lookAt(-300, 0, 700);
          gl.setClearColor(0x000000, 0);
        }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        {/* Key light from the upper-front-right (warm steel) */}
        <directionalLight
          position={[2500, -2000, 3000]}
          intensity={1.7}
          color="#dde8f0"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-2000}
          shadow-camera-right={2000}
          shadow-camera-top={2000}
          shadow-camera-bottom={-2000}
          shadow-camera-near={500}
          shadow-camera-far={7000}
        />
        {/* Fill from screen-left, cool steel blue (matches brand) */}
        <directionalLight position={[-2500, -1500, 1500]} intensity={0.7} color="#327DA5" />
        {/* Rim from behind, brighter brand glow */}
        <directionalLight position={[-500, 2500, 1000]} intensity={0.55} color="#5D87A1" />

        <Suspense fallback={null}>
          <Environment preset="warehouse" environmentIntensity={0.8} />
        </Suspense>

        {/* Ambient floating dust particles */}
        <Sparkles count={400} scale={12000} size={15} speed={0.2} opacity={0.3} color="#88ccff" />

        <Suspense fallback={null}>
          <Robot3D anglesRef={anglesRef} />
        </Suspense>

        {/* Realistic ground shadow */}
        <ContactShadows 
          position={[300, -10, 0]} 
          opacity={0.8} 
          scale={3000} 
          blur={2.5} 
          far={1000} 
          resolution={512}
          color="#000000" 
        />
      </Canvas>
    </div>
  );
}
