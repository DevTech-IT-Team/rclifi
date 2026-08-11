import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { RcLiFiLogo } from "./RcLiFiLogo";

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
    { label: "Demos & Sims", href: "/#demos" },
    { label: "Kit & Setup", href: "/#kit" },
    { label: "Oil & Gas", href: "/#oil-gas" },
    { label: "Academy", href: "/academy" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-card py-3"
          : "bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/#home" className="group flex items-center gap-2">
          <RcLiFiLogo className="h-10 sm:h-12 w-auto" variant="color" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => {
            const isInternalRoute = n.href.startsWith("/") && !n.href.includes("#");
            if (isInternalRoute) {
              return (
                <Link
                  key={n.href}
                  to={n.href}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary group py-1 [&.active]:text-primary"
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
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary group py-1"
              >
                {n.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
          >
            Get in Touch
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
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
