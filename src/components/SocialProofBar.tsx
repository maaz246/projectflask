"use client";

import Image from "next/image";

/* ==========================================================================
   Icons for "WORKS WITH" Developer Toolbar
   Pixel-accurate SVGs matching Breakdance / Claude / OpenAI / Cursor / OpenCode
   ========================================================================== */

/** Claude / Anthropic 16-ray sunburst asterisk */
function ClaudeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 fill-white`}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M8 0.5a.75.75 0 0 1 .75.75v1.8a.75.75 0 0 1-1.5 0V1.25A.75.75 0 0 1 8 0.5zm5.303 2.197a.75.75 0 0 1 0 1.06l-1.272 1.273a.75.75 0 1 1-1.061-1.06l1.273-1.273a.75.75 0 0 1 1.06 0zM15.5 8a.75.75 0 0 1-.75.75h-1.8a.75.75 0 0 1 0-1.5h1.8A.75.75 0 0 1 15.5 8zm-2.197 5.303a.75.75 0 0 1-1.06 0l-1.273-1.272a.75.75 0 1 1 1.06-1.061l1.273 1.273a.75.75 0 0 1 0 1.06zM8 15.5a.75.75 0 0 1-.75-.75v-1.8a.75.75 0 0 1 1.5 0v1.8A.75.75 0 0 1 8 15.5zm-5.303-2.197a.75.75 0 0 1 0-1.06l1.272-1.273a.75.75 0 1 1 1.061 1.06l-1.273 1.273a.75.75 0 0 1-1.06 0zM0.5 8a.75.75 0 0 1 .75-.75h1.8a.75.75 0 0 1 0 1.5H1.25A.75.75 0 0 1 0.5 8zm2.197-5.303a.75.75 0 0 1 1.06 0l1.273 1.272a.75.75 0 1 1-1.06 1.061L2.697 3.757a.75.75 0 0 1 0-1.06z" />
      <circle cx="8" cy="8" r="2.2" />
    </svg>
  );
}

/** OpenAI geometric spiral swirl logo */
function OpenAIIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 fill-white`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.771-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.746-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.76a4.485 4.485 0 0 1 2.366-1.973V12.4a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.76zm16.597 3.855l-5.833-3.387L15.119 8.06a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.674 8.105v-5.659a.79.79 0 0 0-.409-.682zm2.01-3.023l-.141-.085-4.779-2.782a.776.776 0 0 0-.785 0L9.409 10.09V7.763a.08.08 0 0 1 .033-.061l4.839-2.791a4.5 4.5 0 0 1 6.669 4.689zM8.307 10.641l3.69-2.132 3.69 2.132v4.264l-3.69 2.132-3.69-2.132z" />
    </svg>
  );
}

/** Cursor 3D isometric cube icon */
function CursorIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Top face */}
      <path d="M12 2L21 7.5L12 13L3 7.5L12 2Z" fill="#FFFFFF" />
      {/* Left face */}
      <path d="M3 7.5L12 13V22L3 16.5V7.5Z" fill="#7E7E7E" />
      {/* Right face */}
      <path d="M12 13L21 7.5V16.5L12 22V13Z" fill="#C4C4C4" />
    </svg>
  );
}

/** OpenCode square split terminal icon */
function OpenCodeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer square border */}
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        rx="1"
        stroke="#FFFFFF"
        strokeWidth="1.6"
      />
      {/* Filled left block */}
      <rect x="3.5" y="3.5" width="4.5" height="9" fill="#FFFFFF" />
    </svg>
  );
}

/* ==========================================================================
   SocialProofBar Component
   Exact recreation of the dark strip below the Hero banner
   ========================================================================== */

interface SocialProofBarProps {
  className?: string;
  boldHeadline?: string;
  restHeadline?: string;
}

export default function SocialProofBar({
  className = "",
  boldHeadline = "100,000+ creators",
  restHeadline = "build with Flasktechs",
}: SocialProofBarProps) {
  // 5 realistic portrait avatars
  const avatars = [
    { src: "/images/avatars/avatar-1.jpg", alt: "Creator 1", grayscale: false },
    { src: "/images/avatars/avatar-2.jpg", alt: "Creator 2", grayscale: true }, // Black & white portrait like in screenshot
    { src: "/images/avatars/avatar-3.jpg", alt: "Creator 3", grayscale: false },
    { src: "/images/avatars/avatar-4.jpg", alt: "Creator 4", grayscale: false },
    { src: "/images/avatars/avatar-5.jpg", alt: "Creator 5", grayscale: false },
  ];

  return (
    <section
      className={`w-full bg-[#0C0B0A] border-t border-[#262421] border-b border-[#262421] py-3 select-none ${className}`}
      aria-label="Social Proof and Supported Tools"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* ================================================================ */}
        {/* 1. Left: 5 Overlapping Circular Avatars + Bold/Light Text        */}
        {/* ================================================================ */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Overlapping Avatar Stack (Left to Right) */}
          <div className="flex -space-x-2 shrink-0">
            {avatars.map((avatar, idx) => (
              <div
                key={idx}
                className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-full ring-2 ring-[#0C0B0A] overflow-hidden bg-neutral-800 shrink-0 ${
                  avatar.grayscale ? "grayscale" : ""
                }`}
                style={{ zIndex: idx + 1 }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Social Proof Headline */}
          <p className="font-sans text-[13px] sm:text-[14px] leading-tight text-white tracking-tight">
            <span className="font-bold text-white">{boldHeadline}</span>{" "}
            <span className="font-normal text-[#D5D0C6]">{restHeadline}</span>
          </p>
        </div>

        {/* ================================================================ */}
        {/* 2. Right: "WORKS WITH" + Single Connected Segmented Box Toolbar */}
        {/* ================================================================ */}
        <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap justify-center shrink-0">
          {/* Muted Warm Stone Label */}
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9B9483] leading-none shrink-0">
            WORKS WITH
          </span>

          {/* Connected Segmented Box Toolbar with 1px internal dividers */}
          <div className="inline-flex items-center border border-[#2D2B28] divide-x divide-[#2D2B28] bg-[#0E0D0B] rounded-[2px] overflow-hidden shadow-sm">
            {/* Cell 1: Claude */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 hover:bg-white/[0.04] transition-colors cursor-default">
              <ClaudeIcon />
              <span className="font-sans text-white text-[11px] sm:text-[12px] font-medium tracking-tight">
                Claude
              </span>
            </div>

            {/* Cell 2: OpenAI */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 hover:bg-white/[0.04] transition-colors cursor-default">
              <OpenAIIcon />
              <span className="font-sans text-white text-[11px] sm:text-[12px] font-medium tracking-tight">
                OpenAI
              </span>
            </div>

            {/* Cell 3: Cursor */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 hover:bg-white/[0.04] transition-colors cursor-default">
              <CursorIcon />
              <span className="font-sans text-white text-[11px] sm:text-[12px] font-medium tracking-tight">
                Cursor
              </span>
            </div>

            {/* Cell 4: OpenCode */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 hover:bg-white/[0.04] transition-colors cursor-default">
              <OpenCodeIcon />
              <span className="font-sans text-white text-[11px] sm:text-[12px] font-medium tracking-tight">
                OpenCode
              </span>
            </div>

            {/* Cell 5: + Any MCP Agent */}
            <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 hover:bg-white/[0.04] transition-colors cursor-default">
              <span className="font-bold text-[#F59E0B] text-[12px] sm:text-[13px] leading-none">
                +
              </span>
              <span className="font-sans text-white text-[11px] sm:text-[12px] font-medium tracking-tight whitespace-nowrap">
                Any MCP Agent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
