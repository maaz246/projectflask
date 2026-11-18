"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ========================================================================
   Service Tab Data — Each tab drives the showcase slide + content box
   ======================================================================== */
interface ServiceTab {
  id: string;
  label: string;
  /** The user "prompt" shown in the chat box */
  userPrompt: string;
  /** Bold heading after FLASKTECHS AI label */
  doneHeading: string;
  /** 4 checklist bullet items */
  checklist: string[];
  /** Big slide background image */
  imageUrl: string;
}

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "web-designing",
    label: "Web Designing",
    userPrompt:
      "Design a modern portfolio website with bold typography and smooth animations.",
    doneHeading: "Done — your portfolio site is live and editable.",
    checklist: [
      "Bespoke Figma UI/UX wireframes & design system",
      "Complete brand typography & visual style guide",
      "Mobile, tablet & desktop responsive viewports",
      "Developer-ready design tokens & visual assets",
    ],
    imageUrl: "/images/showcase/web-designing.jpg",
  },
  {
    id: "web-development",
    label: "Web Development",
    userPrompt:
      "Build a high-performance corporate website with CMS and contact forms.",
    doneHeading: "Done — your corporate site is live and editable.",
    checklist: [
      "Clean semantic Next.js & WordPress architecture",
      "100/100 Google PageSpeed & Core Web Vitals score",
      "Cross-browser & all-device responsive optimization",
      "On-page SEO, schema markup & fast hosting setup",
    ],
    imageUrl: "/images/showcase/web-development.jpg",
  },
  {
    id: "ecommerce-store",
    label: "Ecommerce Store",
    userPrompt:
      "Build me an online shop for my candle business, with product pages and a checkout.",
    doneHeading: "Done — your shop site is live and editable.",
    checklist: [
      "Shop pages created",
      "9 products added with photos",
      "Cart and checkout set up",
      "Mobile layouts checked",
    ],
    imageUrl: "/images/showcase/ecommerce-store.jpg",
  },
  {
    id: "blogging-website",
    label: "Blogging Website",
    userPrompt:
      "Create a clean blog platform with categories, search, and newsletter signup.",
    doneHeading: "Done — your blog site is live and editable.",
    checklist: [
      "Reader-optimized typography & editorial layout",
      "Topic categories, tag filters & instant search bar",
      "Automated newsletter & RSS subscription integration",
      "Social sharing tools & monetization ad placements",
    ],
    imageUrl: "/images/showcase/blogging-website.jpg",
  },
  {
    id: "web-portals",
    label: "Web Portals",
    userPrompt:
      "Build a client dashboard portal with secure login and real-time analytics.",
    doneHeading: "Done — your portal is live and editable.",
    checklist: [
      "Role-based access control (RBAC) & secure auth",
      "Dynamic client & admin analytics dashboards",
      "Custom REST & GraphQL API endpoints & database",
      "Encrypted user data & automated daily cloud backups",
    ],
    imageUrl: "/images/showcase/web-portals.jpg",
  },
  {
    id: "social-media-marketing",
    label: "Social Media Marketing",
    userPrompt:
      "Launch a social media campaign with ad creatives and audience targeting.",
    doneHeading: "Done — your campaign is live and running.",
    checklist: [
      "High-converting Meta & Google ad creative sets",
      "Precision audience targeting & retargeting funnels",
      "Viral video hooks, copywriting & content calendar",
      "Real-time ROAS tracking & performance reports",
    ],
    imageUrl: "/images/showcase/social-media-marketing.jpg",
  },
];

/* ========================================================================
   Hero Component
   ======================================================================== */
interface HeroProps {
  className?: string;
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  videoCtaText?: string;
  onVideoClick?: () => void;
}

export default function Hero({
  className = "",
  badgeText = "TRUSTED BY 1,000+ CLIENTS",
  titleLine1 = "WEB DESIGN",
  titleLine2 = "STUDIO",
  description = "We design and develop high-converting websites, digital storefronts, and custom web applications that scale your business.",
  ctaText = "Get Started",
  ctaHref = "/get-started",
  videoCtaText = "Explore our work",
  onVideoClick,
}: HeroProps) {
  const [activeTabId, setActiveTabId] = useState("web-designing");
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [isTypingPrompt, setIsTypingPrompt] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [isCanvasFading, setIsCanvasFading] = useState(false);

  const currentTab =
    SERVICE_TABS.find((t) => t.id === activeTabId) || SERVICE_TABS[0];

  /* ------------------------------------------------------------------
     Typewriter for user prompt → then reveal AI response + checklist
     ------------------------------------------------------------------ */
  useEffect(() => {
    let isCancelled = false;
    const fullPrompt = currentTab.userPrompt;

    setDisplayedPrompt("");
    setIsTypingPrompt(true);
    setShowResponse(false);
    setRevealedCount(0);

    let charIdx = 0;
    const typingSpeed = 18;

    const interval = setInterval(() => {
      if (isCancelled) return;
      charIdx++;
      setDisplayedPrompt(fullPrompt.slice(0, charIdx));

      if (charIdx >= fullPrompt.length) {
        clearInterval(interval);
        setIsTypingPrompt(false);

        // After prompt is done, show the response block
        setTimeout(() => {
          if (!isCancelled) {
            setShowResponse(true);

            // Sequentially reveal checklist items
            const delays = [200, 400, 600, 800];
            delays.forEach((delay, idx) => {
              setTimeout(() => {
                if (!isCancelled) {
                  setRevealedCount(idx + 1);
                }
              }, delay);
            });
          }
        }, 300);
      }
    }, typingSpeed);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [activeTabId, currentTab.userPrompt]);

  const handleTabSelect = (tabId: string) => {
    if (tabId === activeTabId) return;
    setIsCanvasFading(true);
    setActiveTabId(tabId);
    setTimeout(() => {
      setIsCanvasFading(false);
    }, 200);
  };

  return (
    <section
      className={`relative w-full bg-dotted-pattern border-b border-black/10 overflow-hidden ${className}`}
      aria-label="Hero"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
        {/* ================================================================ */}
        {/* 1. Hero Header Banner (Headline, Purple Studio Badge, CTAs)     */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Badge + Large Headline */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#080808] px-2.5 py-1 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 sm:mb-5 select-none">
              <span className="w-2 h-2 bg-[#FFD200] shrink-0" aria-hidden="true" />
              <span>{badgeText}</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[82px] leading-[1.05] tracking-tight text-[#080808]">
              <span className="block">{titleLine1}</span>
              <span className="block mt-2 sm:mt-3">
                <span className="relative inline-block px-3 sm:px-5 py-0.5 sm:py-1">
                  {/* Tilted Purple Badge with 4px border radius */}
                  <span
                    className="absolute inset-0 bg-[#C4A1E0] -rotate-1.5 sm:-rotate-2 rounded-[4px] z-0 pointer-events-none transform origin-center"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-[#080808]">
                    {titleLine2}
                    {!titleLine2.endsWith(".") ? "." : ""}
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column: Description + Action Buttons */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end space-y-6 lg:pb-2">
            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#262626] font-normal max-w-md">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#FFD200] text-[#080808] font-bold text-base border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 cursor-pointer"
              >
                {ctaText}
              </Link>

              <button
                type="button"
                onClick={onVideoClick}
                className="inline-flex items-center gap-2.5 font-bold text-base text-[#080808] hover:opacity-75 transition-opacity cursor-pointer group py-2"
              >
                <svg
                  className="w-3.5 h-3.5 fill-black transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{videoCtaText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 2. Interactive Showcase Stage (Big Slide + Chat-Style Box)      */}
        {/* ================================================================ */}
        <div className="mt-14 sm:mt-18 lg:mt-22 relative w-full max-w-6xl mx-auto">
          {/* Big Slide Window */}
          <div className="relative w-full rounded-lg sm:rounded-xl border-2 border-black bg-neutral-900 shadow-[6px_6px_0px_#080808] sm:shadow-[10px_10px_0px_#080808] overflow-hidden lg:ml-20 xl:ml-28 lg:w-[calc(100%-5rem)] xl:w-[calc(100%-7rem)]">
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] overflow-hidden">
              <Image
                src={currentTab.imageUrl}
                alt={currentTab.label}
                fill
                sizes="(max-width: 1024px) 100vw, 1100px"
                className={`object-cover object-top transition-opacity duration-300 ${
                  isCanvasFading ? "opacity-40" : "opacity-100"
                }`}
                priority
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* Floating Chat-Style Content Box                               */}
          {/* Mimics the Breakdance builder card: user prompt → AI reply   */}
          {/* ============================================================ */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:-left-4 xl:-left-12 lg:top-14 z-20 w-full max-w-md lg:w-[410px] xl:w-[440px] mx-auto lg:mx-0">
            <div className="relative rounded-lg border-2 border-black bg-white shadow-[8px_8px_0px_#FFC514] sm:shadow-[10px_10px_0px_#FFC514] p-5 sm:p-6 transition-all duration-300">
              
              {/* ── Header: ✦ YOUR AI AGENT ── */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[var(--bd-yellow)] text-sm">✦</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#080808]">
                  YOUR AI AGENT
                </span>
              </div>

              {/* ── User Prompt Section ── */}
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--bd-yellow)] block mb-2">
                  YOU
                </span>
                <p className="text-base sm:text-lg font-bold text-[#080808] leading-snug">
                  &ldquo;{displayedPrompt}
                  {isTypingPrompt && (
                    <span className="inline-block w-0.5 h-4 bg-black ml-0.5 align-middle animate-pulse" />
                  )}
                  {!isTypingPrompt && <>&rdquo;</>}
                </p>
              </div>

              {/* ── Divider ── */}
              <div className="border-t border-black/10 mb-5" />

              {/* ── FLASKTECHS AI Response ── */}
              <div
                className={`transition-all duration-400 ${
                  showResponse
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {/* Label */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-4 bg-[var(--bd-yellow)] inline-block rounded-[1px]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                    FLASKTECHS AI
                  </span>
                </div>

                {/* Done heading */}
                <h3 className="text-base sm:text-lg font-bold text-[#080808] mb-4 leading-snug">
                  {currentTab.doneHeading}
                </h3>

                {/* Checklist */}
                <ul className="space-y-2.5 text-[13px] sm:text-sm font-medium text-[#222222]">
                  {currentTab.checklist.map((item, idx) => {
                    const isRevealed = idx < revealedCount;
                    return (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 transition-all duration-300 transform ${
                          isRevealed
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center w-[18px] h-[18px] bg-[var(--bd-yellow)] border border-black rounded-[3px] shrink-0 mt-0.5 shadow-[1px_1px_0px_#000]">
                          <svg
                            className="w-2.5 h-2.5 text-black stroke-[3]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* ── Footer: Agent Pills + Send Button ── */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="text-[12px] text-neutral-400 font-medium">
                  Claude · ChatGPT · Any Agent
                </span>
                <Link
                  href="/get-started"
                  className="px-4 py-2 bg-white hover:bg-[#FFF8DC] text-[#080808] font-bold text-xs sm:text-sm border-2 border-black shadow-[2.5px_2.5px_0px_#080808] hover:shadow-[1.5px_1.5px_0px_#080808] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Send
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3. Bottom Service Tabs                                           */}
        {/* ================================================================ */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-neutral-500 mr-1 sm:mr-2 select-none">
            ASK FOR ANYTHING
          </span>

          {SERVICE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabSelect(tab.id)}
                className={`text-xs sm:text-sm font-bold tracking-tight px-3.5 sm:px-4 py-2 border-2 border-black transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-[var(--bd-yellow)] text-[#080808] shadow-[3px_3px_0px_#080808] -translate-y-0.5"
                    : "bg-white text-[#080808] shadow-[1px_1px_0px_#080808] hover:bg-[#FAF8F2] hover:-translate-y-0.5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
