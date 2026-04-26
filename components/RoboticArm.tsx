"use client";

import { forwardRef } from "react";

export type ArmRefs = {
  base: SVGGElement | null;
  shoulder: SVGGElement | null;
  elbow: SVGGElement | null;
  wrist: SVGGElement | null;
  gripperL: SVGGElement | null;
  gripperR: SVGGElement | null;
  glow: SVGCircleElement | null;
};

type Props = {
  setRef: (key: keyof ArmRefs, el: SVGGElement | SVGCircleElement | null) => void;
};

const RoboticArm = forwardRef<SVGSVGElement, Props>(function RoboticArm(
  { setRef },
  ref,
) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 600 800"
      className="h-full w-full"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Cream-body cylindrical shading — horizontal for vertical segments */}
        <linearGradient id="bodyCyl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6e6a62" />
          <stop offset="15%" stopColor="#b3ada0" />
          <stop offset="45%" stopColor="#f1ede4" />
          <stop offset="55%" stopColor="#f1ede4" />
          <stop offset="85%" stopColor="#a8a294" />
          <stop offset="100%" stopColor="#5a564f" />
        </linearGradient>

        {/* Slimmer forearm shading */}
        <linearGradient id="bodyCylThin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5c5950" />
          <stop offset="20%" stopColor="#b3ada0" />
          <stop offset="50%" stopColor="#f5f2ec" />
          <stop offset="80%" stopColor="#a8a294" />
          <stop offset="100%" stopColor="#4f4c44" />
        </linearGradient>

        {/* Joint drum — face-on cylinder (vertical stops = rim darkness) */}
        <linearGradient id="drumFace" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a3832" />
          <stop offset="10%" stopColor="#7a7568" />
          <stop offset="45%" stopColor="#e4dfd4" />
          <stop offset="55%" stopColor="#e4dfd4" />
          <stop offset="90%" stopColor="#706b5e" />
          <stop offset="100%" stopColor="#2d2b26" />
        </linearGradient>

        {/* Darker inner drum (the "end cap" of a joint) */}
        <radialGradient id="drumCap" cx="0.5" cy="0.45" r="0.55">
          <stop offset="0%" stopColor="#2a2925" />
          <stop offset="70%" stopColor="#141311" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>

        {/* Base dark metallic */}
        <linearGradient id="baseMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2d36" />
          <stop offset="100%" stopColor="#0d0f15" />
        </linearGradient>

        {/* LED ring glow */}
        <radialGradient id="ledRing" cx="0.5" cy="0.5" r="0.5">
          <stop offset="60%" stopColor="#ff6b1a" stopOpacity="0" />
          <stop offset="85%" stopColor="#ff6b1a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff6b1a" stopOpacity="0" />
        </radialGradient>

        {/* Orange accent stripe */}
        <linearGradient id="accentStripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9530f" />
          <stop offset="50%" stopColor="#ff8b3d" />
          <stop offset="100%" stopColor="#c9530f" />
        </linearGradient>

        {/* Tip spotlight */}
        <radialGradient id="tipGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffd166" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#ff6b1a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff6b1a" stopOpacity="0" />
        </radialGradient>

        {/* Soft drop shadow */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle noise for wear (optional feel) */}
        <pattern id="panel" width="4" height="40" patternUnits="userSpaceOnUse">
          <rect width="4" height="40" fill="transparent" />
          <line x1="0" y1="20" x2="4" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* ============ BASE ============ */}
      <g
        ref={(el) => setRef("base", el)}
        style={{ transformOrigin: "300px 760px", transformBox: "view-box" }}
        filter="url(#softShadow)"
      >
        {/* Floor contact shadow */}
        <ellipse cx="300" cy="792" rx="135" ry="12" fill="#000" opacity="0.55" />

        {/* Mount flange (widest, bottom) */}
        <rect x="190" y="748" width="220" height="20" rx="4" fill="url(#baseMetal)" />
        {/* Bolt heads */}
        {[210, 250, 300, 350, 390].map((cx) => (
          <circle key={cx} cx={cx} cy="758" r="4" fill="#0a0c12" stroke="#3a3d47" strokeWidth="0.5" />
        ))}

        {/* Base cylinder body */}
        <rect x="230" y="680" width="140" height="70" rx="6" fill="url(#baseMetal)" />
        {/* Brand plate */}
        <rect x="252" y="702" width="96" height="18" rx="3" fill="#050608" stroke="#2a2d36" strokeWidth="0.5" />
        <text x="300" y="715" textAnchor="middle" fontSize="9" fontFamily="ui-sans-serif, system-ui" fontWeight="700" fill="#6a6d75" letterSpacing="2">
          COROBOTX
        </text>
        {/* Vent slats */}
        <g opacity="0.6">
          {[728, 732, 736, 740].map((y) => (
            <line key={y} x1="250" y1={y} x2="350" y2={y} stroke="#000" strokeWidth="0.7" />
          ))}
        </g>

        {/* LED status ring at top of base (above the rotation axis visually) */}
        <rect x="235" y="668" width="130" height="14" rx="3" fill="#0d0f15" />
        <rect x="243" y="672" width="114" height="6" rx="2" fill="url(#ledRing)" opacity="0.9" />

        {/* ============ SHOULDER ============ */}
        <g
          ref={(el) => setRef("shoulder", el)}
          style={{ transformOrigin: "300px 700px", transformBox: "view-box" }}
        >
          {/* Shoulder knuckle — big drum */}
          <rect x="232" y="618" width="136" height="70" rx="14" fill="url(#drumFace)" />
          {/* Knuckle end cap (the bolt circle face) */}
          <circle cx="300" cy="653" r="22" fill="url(#drumCap)" />
          <circle cx="300" cy="653" r="22" fill="none" stroke="#5a564f" strokeWidth="1" />
          {/* Small bolts around end cap */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const cx = 300 + Math.cos(rad) * 16;
            const cy = 653 + Math.sin(rad) * 16;
            return <circle key={deg} cx={cx} cy={cy} r="1.6" fill="#e4dfd4" opacity="0.7" />;
          })}
          {/* Orange accent stripe on knuckle */}
          <rect x="232" y="682" width="136" height="3" fill="url(#accentStripe)" />

          {/* Upper arm segment */}
          <rect x="258" y="500" width="84" height="120" rx="10" fill="url(#bodyCyl)" />
          {/* Panel overlay for subtle variation */}
          <rect x="258" y="500" width="84" height="120" rx="10" fill="url(#panel)" opacity="0.8" />
          {/* Panel seam lines */}
          <line x1="260" y1="540" x2="340" y2="540" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
          <line x1="260" y1="582" x2="340" y2="582" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
          {/* Center highlight line */}
          <line x1="300" y1="502" x2="300" y2="618" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          {/* Side dark line */}
          <line x1="268" y1="502" x2="268" y2="618" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
          <line x1="332" y1="502" x2="332" y2="618" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />

          {/* Cable running alongside */}
          <path
            d="M 352 520 Q 362 540 352 560 Q 342 580 352 600 Q 360 615 352 625"
            stroke="#1a1b1f"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 352 520 Q 362 540 352 560 Q 342 580 352 600 Q 360 615 352 625"
            stroke="#3a3b40"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />

          {/* ============ ELBOW ============ */}
          <g
            ref={(el) => setRef("elbow", el)}
            style={{ transformOrigin: "300px 500px", transformBox: "view-box" }}
          >
            {/* Elbow knuckle drum */}
            <rect x="248" y="468" width="104" height="60" rx="12" fill="url(#drumFace)" />
            <circle cx="300" cy="498" r="18" fill="url(#drumCap)" />
            <circle cx="300" cy="498" r="18" fill="none" stroke="#5a564f" strokeWidth="1" />
            {[0, 72, 144, 216, 288].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 300 + Math.cos(rad) * 13;
              const cy = 498 + Math.sin(rad) * 13;
              return <circle key={deg} cx={cx} cy={cy} r="1.3" fill="#e4dfd4" opacity="0.7" />;
            })}
            <rect x="248" y="522" width="104" height="2.5" fill="url(#accentStripe)" />

            {/* Forearm segment (thinner than upper arm) */}
            <rect x="270" y="340" width="60" height="130" rx="8" fill="url(#bodyCylThin)" />
            <rect x="270" y="340" width="60" height="130" rx="8" fill="url(#panel)" opacity="0.8" />
            <line x1="272" y1="380" x2="328" y2="380" stroke="rgba(0,0,0,0.18)" strokeWidth="0.7" />
            <line x1="272" y1="420" x2="328" y2="420" stroke="rgba(0,0,0,0.18)" strokeWidth="0.7" />
            <line x1="300" y1="342" x2="300" y2="468" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
            <line x1="277" y1="342" x2="277" y2="468" stroke="rgba(0,0,0,0.22)" strokeWidth="0.6" />
            <line x1="323" y1="342" x2="323" y2="468" stroke="rgba(0,0,0,0.22)" strokeWidth="0.6" />

            {/* Cable on forearm */}
            <path
              d="M 338 360 Q 346 380 338 400 Q 330 420 338 440 Q 344 460 338 470"
              stroke="#1a1b1f"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* ============ WRIST ============ */}
            <g
              ref={(el) => setRef("wrist", el)}
              style={{ transformOrigin: "300px 320px", transformBox: "view-box" }}
            >
              {/* Wrist knuckle */}
              <rect x="265" y="298" width="70" height="44" rx="10" fill="url(#drumFace)" />
              <circle cx="300" cy="320" r="14" fill="url(#drumCap)" />
              <circle cx="300" cy="320" r="14" fill="none" stroke="#5a564f" strokeWidth="0.8" />
              {[0, 90, 180, 270].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const cx = 300 + Math.cos(rad) * 10;
                const cy = 320 + Math.sin(rad) * 10;
                return <circle key={deg} cx={cx} cy={cy} r="1.1" fill="#e4dfd4" opacity="0.8" />;
              })}
              <rect x="265" y="338" width="70" height="2" fill="url(#accentStripe)" />

              {/* Wrist housing — the "hand" body */}
              <rect x="278" y="262" width="44" height="40" rx="6" fill="url(#bodyCylThin)" />
              <line x1="280" y1="285" x2="320" y2="285" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7" />
              <line x1="300" y1="262" x2="300" y2="302" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />

              {/* Tool flange — dark mounting disc */}
              <rect x="285" y="252" width="30" height="12" rx="2" fill="#1a1d29" />
              <circle cx="300" cy="258" r="3" fill="#0a0c12" stroke="#2a2d36" strokeWidth="0.5" />

              {/* Gripper base mount */}
              <rect x="290" y="244" width="20" height="10" rx="2" fill="#0f1118" />

              {/* Left finger */}
              <g
                ref={(el) => setRef("gripperL", el)}
                style={{ transformOrigin: "295px 244px", transformBox: "view-box" }}
              >
                {/* Finger body — metallic with step */}
                <rect x="285" y="214" width="12" height="32" rx="2" fill="#2a2d36" />
                <rect x="286" y="216" width="10" height="28" rx="1" fill="url(#drumFace)" />
                {/* Inner gripping pad (orange) */}
                <rect x="293" y="220" width="3" height="22" fill="url(#accentStripe)" />
                {/* Tip */}
                <rect x="285" y="210" width="12" height="6" rx="1" fill="#0a0c12" />
              </g>

              {/* Right finger */}
              <g
                ref={(el) => setRef("gripperR", el)}
                style={{ transformOrigin: "305px 244px", transformBox: "view-box" }}
              >
                <rect x="303" y="214" width="12" height="32" rx="2" fill="#2a2d36" />
                <rect x="304" y="216" width="10" height="28" rx="1" fill="url(#drumFace)" />
                <rect x="304" y="220" width="3" height="22" fill="url(#accentStripe)" />
                <rect x="303" y="210" width="12" height="6" rx="1" fill="#0a0c12" />
              </g>

              {/* Tip glow between fingers */}
              <circle
                ref={(el) => setRef("glow", el)}
                cx="300"
                cy="208"
                r="16"
                fill="url(#tipGlow)"
                opacity="0"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});

export default RoboticArm;
