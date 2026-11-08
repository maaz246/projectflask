"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceTab {
  id: string;
  label: string;
  overview: string;
  deliveryTitle: string;
  checklist: string[];
  imageUrl: string;
}

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "web-designing",
    label: "Web Designing",
    overview:
      "We design custom, high-converting Figma UI/UX interfaces with branded design systems and mobile-first responsiveness.",
    deliveryTitle: "Included in our Web Designing service:",
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
    overview:
      "We engineer custom, lightning-fast Next.js and WordPress websites with clean code, smooth animations, and top-tier SEO.",
    deliveryTitle: "Included in our Web Development service:",
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
    overview:
      "We build high-converting Shopify and WooCommerce stores with streamlined product catalogs and seamless payment checkouts.",
    deliveryTitle: "Included in our Ecommerce Store service:",
    checklist: [
      "Custom WooCommerce & Shopify storefront design",
      "Stripe, PayPal & multi-currency payment gateways",
      "Smart product filtering, variants & inventory sync",
      "1-click mobile checkout & abandoned cart recovery",
    ],
    imageUrl: "/images/showcase/ecommerce-store.jpg",
  },
  {
    id: "blogging-website",
    label: "Blogging Website",
    overview:
      "We craft reader-first publication platforms with elegant typography, article categorization, and newsletter capture.",
    deliveryTitle: "Included in our Blogging Website service:",
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
    overview:
      "We engineer custom web portals and SaaS dashboards with role-based authentication, user analytics, and API integrations.",
    deliveryTitle: "Included in our Web Portals service:",
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
    overview:
      "We run data-driven digital growth campaigns, high-ROI ad creatives, and lead-generation funnels that scale your business.",
    deliveryTitle: "Included in our Social Media Marketing service:",
    checklist: [
      "High-converting Meta & Google ad creative sets",
      "Precision audience targeting & retargeting funnels",
      "Viral video hooks, copywriting & content calendar",
      "Real-time ROAS tracking & performance reports",
    ],
    imageUrl: "/images/showcase/social-media-marketing.jpg",
  },
];

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
  const [displayedOverview, setDisplayedOverview] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [isCanvasFading, setIsCanvasFading] = useState(false);

  const currentTab =
    SERVICE_TABS.find((t) => t.id === activeTabId) || SERVICE_TABS[0];

  // Typewriter effect & staggered checklist reveal
  useEffect(() => {
    let isCancelled = false;
    const fullText = currentTab.overview;

    setDisplayedOverview("");
    setIsTyping(true);
    setRevealedCount(0);

    let charIdx = 0;
    const typingSpeed = 16;

    const interval = setInterval(() => {
      if (isCancelled) return;
      charIdx++;
      setDisplayedOverview(fullText.slice(0, charIdx));

      if (charIdx >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);

        // Sequentially reveal checklist items down
        const delays = [140, 300, 460, 620];
        delays.forEach((delay, idx) => {
          setTimeout(() => {
            if (!isCancelled) {
              setRevealedCount(idx + 1);
            }
          }, delay);
        });
      }
    }, typingSpeed);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [activeTabId, currentTab.overview]);

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
        {/* 1. Hero Header Banner (Headline, Purple Studio Badge, CTAs)       */}
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
                  {/* Tilted Yellow Badge from Root with 4px border radius */}
                  <span
                    className="absolute inset-0 bg-[var(--bd-yellow,#FFC514)] -rotate-1.5 sm:-rotate-2 rounded-[4px] z-0 pointer-events-none transform origin-center"
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
        {/* 2. Interactive Showcase Stage (Big Slide + Service Scope Box)    */}
        {/* ================================================================ */}
        <div className="mt-14 sm:mt-18 lg:mt-22 relative w-full max-w-6xl mx-auto">
          {/* Big Slide Window (Displays clean image without overlays) */}
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

          {/* ============================================================== */}
          {/* Floating Service Content Box (Typewriter & Staggered Reveal)   */}
          {/* ============================================================== */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:-left-4 xl:-left-12 lg:top-14 z-20 w-full max-w-md lg:w-[410px] xl:w-[440px] mx-auto lg:mx-0">
            <div className="relative rounded-lg border-2 border-black bg-white shadow-[8px_8px_0px_#FFC514] sm:shadow-[10px_10px_0px_#FFC514] p-5 sm:p-6 transition-all duration-300">
              {/* Service Overview with Live Typewriter Effect */}
              <div className="mb-5 min-h-[56px] sm:min-h-[64px]">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  SERVICE OVERVIEW
                </span>
                <p className="text-base sm:text-[17px] font-bold text-[#080808] leading-snug">
                  {displayedOverview}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-4 bg-black ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
              </div>

              {/* Scope & Deliverables Section */}
              <div className="pt-4 border-t border-black/10">
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="w-1.5 h-3.5 bg-[#FFC514] inline-block" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    WHAT WE DELIVER
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#080808] mb-3">
                  {currentTab.deliveryTitle}
                </h3>

                {/* Staggered Checklist Revealing Down */}
                <ul className="space-y-2 text-xs sm:text-[13px] font-medium text-[#222222]">
                  {currentTab.checklist.map((item, idx) => {
                    const isRevealed = idx < revealedCount;
                    return (
                      <li
                        key={idx}
                        className={`flex items-start space-x-2.5 transition-all duration-300 transform ${
                          isRevealed
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center w-4 h-4 bg-[#FFC514] border border-black rounded-[2px] shrink-0 mt-0.5 shadow-[1px_1px_0px_#000]">
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

              {/* Card Footer: Agency Quality Guarantee + Send Inquiry CTA */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-neutral-500">
                  Custom Code · Fast Delivery
                </span>
                <Link
                  href="/get-started"
                  className="px-4 py-2 bg-[#FFC514] hover:bg-[#ffe043] active:translate-x-0.5 active:translate-y-0.5 text-[#080808] font-bold text-xs sm:text-sm border-2 border-black shadow-[2.5px_2.5px_0px_#080808] transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Send Inquiry
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
            SERVICES:
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
                    ? "bg-[#FFC514] text-[#080808] shadow-[3px_3px_0px_#080808] -translate-y-0.5"
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
