import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { RcLiFiLogo } from "./RcLiFiLogo";
import { LUMEN } from "../lib/lumen";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", href: "/#home" },
    { label: "Mission", href: "/#mission" },
    { label: "Features", href: "/#features" },
    { label: "Demos & Sims", href: "/#demos", compact: true },
    { label: "Kit & Setup", href: "/#kit" },
    { label: "Oil & Gas", href: "/#oil-gas", compact: true },
    { label: "Academy", href: "/academy" },
    { label: "Gamer", href: "/gamer" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-card"
          : "bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <a
        href={LUMEN.site}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-slate-950 px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-cyan-100 hover:bg-slate-900 sm:text-xs"
      >
        <span>Authorized LumenFi reseller</span>
        <span className="hidden text-slate-500 sm:inline">·</span>
        <span className="inline-flex items-center gap-1 text-cyan-300">
          Pre-order the 
          Lifi Pillar on LumenLiFi
          <ExternalLink className="h-3 w-3" />
        </span>
      </a>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${scrolled ? "py-3" : "py-4"}`}>
        <a href="/#home" className="group flex items-center gap-2">
          <RcLiFiLogo className="h-10 sm:h-12 w-auto" variant="color" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {nav.map((n) => {
            const isInternalRoute = n.href.startsWith("/") && !n.href.includes("#");
            const itemClass = `relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary group py-1 ${n.compact ? "hidden xl:inline-flex" : ""}`;
            if (isInternalRoute) {
              return (
                <Link
                  key={n.href}
                  to={n.href}
                  className={`${itemClass} [&.active]:text-primary`}
                >
                  {n.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
                </Link>
              );
            }
            return (
              <a
                key={n.href}
                href={n.href}
                className={itemClass}
              >
                {n.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/30 hover:bg-secondary"
          >
            Get in Touch
          </a>
          <a
            href={LUMEN.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
          >
            Pre-Order LumenFi
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-foreground lg:hidden rounded-lg hover:bg-secondary"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-white px-6 py-6 shadow-xl animate-fade-up">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => {
              const isInternalRoute = n.href.startsWith("/") && !n.href.includes("#");
              if (isInternalRoute) {
                return (
                  <Link
                    key={n.href}
                    to={n.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary [&.active]:text-primary"
                  >
                    {n.label}
                  </Link>
                );
              }
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary"
                >
                  {n.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground"
            >
              Get in Touch
            </a>
            <a
              href={LUMEN.site}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
            >
              Pre-Order LumenFi
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
