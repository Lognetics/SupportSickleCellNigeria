"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, moreNav, navLinks, site } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Lock scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm shadow-navy/5 backdrop-blur"
          : "bg-white"
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Icon.phone className="h-3.5 w-3.5" /> Emergency: {site.emergency}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon.mail className="h-3.5 w-3.5" /> hello@supportsicklecell.ng
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/get-support" className="hover:text-primary-light">
              Get Support
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/contact" className="hover:text-primary-light">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="SSCN home">
          <Logo className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block font-heading text-base font-extrabold text-navy">
              SSCN
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">
              Support Sickle Cell
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-navy hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary"
              onClick={() => setMoreOpen((o) => !o)}
            >
              More
              <Icon.chevron
                className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-60 pt-2">
                <div className="grid gap-0.5 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-navy/10">
                  {moreNav.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "bg-primary-soft text-primary"
                          : "text-ink hover:bg-grey"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href="/volunteer"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary lg:inline-flex"
          >
            Volunteer
          </Link>
          <Link
            href="/donate"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-primary/30 transition-all hover:bg-primary-dark active:scale-95 sm:inline-flex"
          >
            Donate Now
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-grey xl:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Icon.menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="flex items-center gap-2">
                <Logo className="h-8 w-8" />
                <span className="font-heading font-extrabold text-navy">SSCN</span>
              </span>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-grey"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <Icon.close className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-primary-soft text-primary"
                      : "text-navy hover:bg-grey"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-line p-4">
              <Link
                href="/volunteer"
                className="rounded-full border border-primary/30 px-4 py-3 text-center text-sm font-bold text-primary"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-white"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
