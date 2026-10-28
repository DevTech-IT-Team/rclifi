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
    { label: "LiFi Lamp", href: "/#lifi-lamp" },
    { label: "IEEE Standards", href: "/standards" },
    { label: "Features", href: "/#features" },
    { label: "Security", href: "/#security" },
    { label: "Oil & Gas", href: "/#oil-gas", compact: true },
    { label: "Academy", href: "/academy" },
    { label: "Gaming", href: "/gamer" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-border/70 shadow-card"
        : "bg-gradient-to-b from-white/95 via-white/85 to-transparent backdrop-blur-md"
        }`}
    >
      <a
        href={LUMEN.product}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-slate-950 px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-cyan-100 hover:bg-slate-900 sm:text-xs transition-colors"
      >
        <span className="font-bold text-cyan-400">Official Lumen LiFi Technology Partner</span>
        <span className="hidden text-slate-500 sm:inline">·</span>
        <span className="inline-flex items-center gap-1.5 text-cyan-200">
          Dual Wi-Fi 7 &amp; Light-Speed LiFi · Pre-Order the LiFi Lamp
          <ExternalLink className="h-3 w-3 text-cyan-400" />
        </span>
      </a>

      {/* Side-aligned balanced header container */}
      <div className={`w-full max-w-[1536px] mx-auto flex items-center justify-between px-6 sm:px-8 xl:px-12 transition-all duration-300 ${scrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4"}`}>
        {/* Left / Side-Aligned Brand Anchor */}
        <a href="/#home" className="group flex items-center gap-3.5 shrink-0 transition-transform duration-200 hover:scale-[1.02]">
          <RcLiFiLogo
            className={`transition-all duration-300 ${scrolled ? "h-11 sm:h-13 lg:h-15" : "h-14 sm:h-16 lg:h-20"
              } w-auto`}
            variant="color"
          />
          {/* <div className="hidden 2xl:flex flex-col border-l border-border/80 pl-3 py-0.5 text-left select-none">
            <span className="text-[11px] font-bold tracking-wider uppercase text-foreground">RC LiFi</span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-tight">Optical Wireless</span>
          </div> */}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {nav.map((n) => {
            const isInternalRoute = n.href.startsWith("/") && !n.href.includes("#");
            const itemClass = `relative text-sm font-medium text-foreground/85 transition-colors hover:text-primary group py-1 ${n.compact ? "hidden 2xl:inline-flex" : ""}`;
            if (isInternalRoute) {
              return (
                <Link
                  key={n.href}
                  to={n.href}
                  className={`${itemClass} [&.active]:text-primary [&.active]:font-semibold`}
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

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-4 py-2.5 text-xs xl:text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-secondary"
          >
            Get in Touch
          </Link>
          <a
            href={LUMEN.product}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs xl:text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
          >
            Pre-Order LiFi Lamp
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-foreground lg:hidden rounded-lg hover:bg-secondary transition-colors"
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
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href={LUMEN.product}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
            >
              Pre-Order LiFi Lamp
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
