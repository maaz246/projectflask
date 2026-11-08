"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";



interface DropdownItem {
  name: string;
  desc?: string;
  href: string;
}

const productLinks: DropdownItem[] = [
  { name: "Website Designing", desc: "We design your webiste UI/UX", href: "#" },
  { name: "Website development", desc: "We develop your webiste", href: "#" },
  { name: "Web Portal Development", desc: "We develop your Web Portal", href: "#" },
  { name: "Social Media Marketing", desc: "We do SMM", href: "#" },
];

const resourceLinks: DropdownItem[] = [
  { name: "Documentation", desc: "Complete guide to getting started", href: "#" },
  { name: "Video Tutorials", desc: "Watch step-by-step walkthroughs", href: "#" },
  { name: "Community Forum", desc: "Connect with fellow creators", href: "#" },
  { name: "Blog & Updates", desc: "Read latest news and releases", href: "#" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="header-wrapper sticky top-0 z-50 w-full bg-[#FAF8F5] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left section: Logo + Desktop Navigation */}
          <div className="flex items-center space-x-8 lg:space-x-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 shrink-0">
              <Image
                src="/flasktech-logo.svg"
                alt="Flasktech Logo"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] font-medium text-[#080808]">
              {/* Product Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("product")}
                  className="header-link inline-flex items-center gap-1.5 cursor-pointer py-2 text-[#080808] hover:text-black font-medium"
                  aria-expanded={activeDropdown === "product"}
                >
                  <span>Services</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "product" ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "product" && (
                  <div className="absolute left-0 mt-1 w-64 rounded-md border-2 border-black bg-white p-2 shadow-[4px_4px_0px_#000] z-50">
                    {productLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded px-3 py-2 text-sm text-[#080808] hover:bg-[#FAF8F5] transition-colors"
                      >
                        <div className="font-semibold">{item.name}</div>
                        {item.desc && (
                          <div className="text-xs text-neutral-500">{item.desc}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("resources")}
                  className="header-link inline-flex items-center gap-1.5 cursor-pointer py-2 text-[#080808] hover:text-black font-medium"
                  aria-expanded={activeDropdown === "resources"}
                >
                  <span>About us </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "resources" && (
                  <div className="absolute left-0 mt-1 w-64 rounded-md border-2 border-black bg-white p-2 shadow-[4px_4px_0px_#000] z-50">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded px-3 py-2 text-sm text-[#080808] hover:bg-[#FAF8F5] transition-colors"
                      >
                        <div className="font-semibold">{item.name}</div>
                        {item.desc && (
                          <div className="text-xs text-neutral-500">{item.desc}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Static Links */}
              <Link
                href="/blogs"
                className="header-link text-[#080808] hover:opacity-75 transition-opacity"
              >
                Blogs
              </Link>
              <Link
                href="/testimonials"
                className="header-link text-[#080808] hover:opacity-75 transition-opacity"
              >
                Testimonials
              </Link>
              <Link
                href="/portfolio"
                className="header-link text-[#080808] hover:opacity-75 transition-opacity"
              >
                Portfolio
              </Link>
            </nav>
          </div>

          {/* Right section: Log in + Get Started Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/login"
              className="text-[15px] font-bold text-[#080808] hover:opacity-75 transition-opacity"
            >
              Log in
            </Link>

            <Link
              href="/get-started"
              className="btn-yellow-cta"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              href="/get-started"
              className="btn-yellow-cta text-xs py-1.5 px-3"
            >
              Get Started
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#080808] hover:bg-black/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-3">
          <div className="space-y-1">
            <div className="font-semibold text-xs text-neutral-500 uppercase tracking-wider px-2 py-1">
              Product
            </div>
            {productLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-1.5 text-sm font-medium text-[#080808] hover:bg-black/5 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1 pt-2 border-t border-black/5">
            <div className="font-semibold text-xs text-neutral-500 uppercase tracking-wider px-2 py-1">
              Resources
            </div>
            {resourceLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-1.5 text-sm font-medium text-[#080808] hover:bg-black/5 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-black/5 space-y-2">
            <Link
              href="/try-it-live"
              className="block px-3 py-2 text-sm font-medium text-[#080808] hover:bg-black/5 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try It Live
            </Link>
            <Link
              href="/user-guide"
              className="block px-3 py-2 text-sm font-medium text-[#080808] hover:bg-black/5 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              User Guide
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-sm font-medium text-[#080808] hover:bg-black/5 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          <div className="pt-4 border-t border-black/10 flex flex-col gap-2">
            <Link
              href="/login"
              className="text-center py-2 text-sm font-medium text-[#080808]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/get-started"
              className="btn-yellow-cta w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
