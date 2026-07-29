import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Zap,
  Lightbulb,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <Pillars />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Technology", href: "#technology" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.12_0.06_258/0.88)] backdrop-blur-xl border-b border-cyan-500/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group relative flex items-center">
          {/* Ambient cyan light glow under logo */}
          <div className="absolute -inset-1.5 rounded-2xl bg-cyan-glow/25 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative flex items-center rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-white/10 via-white/5 to-white/10 px-3.5 py-1.5 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,210,255,0.3)]">
            <img
              src="/rclifilog-header.png"
              alt="RC LiFi Logo"
              className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(0,210,255,0.4)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-cyan-glow group py-1"
            >
              {n.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-cyan-glow transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-[oklch(0.15_0.06_258)] shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,210,255,0.6)] md:inline-flex"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero">
      {/* animated light beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-[oklch(0.82_0.16_220/0.25)] blur-3xl animate-beam" />
        <div
          className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.22_258/0.35)] blur-3xl animate-beam"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute inset-0 opacity-[0.08]" style={gridPattern} />
        {/* diagonal light beam */}
        <div className="absolute -top-40 left-1/2 h-[900px] w-[220px] -translate-x-1/2 rotate-12 bg-gradient-to-b from-cyan-glow/40 via-cyan-glow/10 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center px-6 pb-24 pt-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
          Optical Wireless Communication
        </span>
        <h1
          className="max-w-4xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Unbreakable,{" "}
          <span className="bg-gradient-to-r from-cyan-glow to-[oklch(0.75_0.18_240)] bg-clip-text text-transparent">
            Light-Based
          </span>{" "}
          Internet
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          RC LiFi replaces vulnerable radio waves with secure, high-speed optical wireless
          communication — confining your data to the room, eliminating interference, and
          guaranteeing reliability for mission-critical operations.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-[oklch(0.15_0.06_258)] shadow-glow transition-transform hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#technology"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Learn How It Works
          </a>
        </div>

        {/* stat row */}
        <div
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { k: "100 Gbps", v: "Peak throughput" },
            { k: "200,000 GHz", v: "Visible spectrum" },
            { k: "99.99%", v: "Uptime with failover" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl font-bold text-cyan-glow sm:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gridPattern: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 80%)",
};

/* ---------------- Mission / Vision ---------------- */

function MissionVision() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Driven by light. Built for trust.</h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <MvCard
            eyebrow="Mission"
            title="Deliver the fastest, most reliable light-based internet."
            body="To deliver the fastest, most reliable light-based wireless internet, offering superior speed and stability where traditional radio frequencies fail."
          />
          <MvCard
            eyebrow="Vision"
            title="Unbreakable connectivity, contained to the room."
            body="RC LiFi will deliver unbreakable, light-based internet by replacing vulnerable radio waves with secure, high-speed optical wireless communication. Our mission is simple: confine data to the room, eliminate interference, and guarantee reliability for mission-critical operations."
          />
        </div>
      </div>
    </section>
  );
}

function MvCard({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity group-hover:opacity-80" />
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-bold text-foreground">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

/* ---------------- Pillars ---------------- */

const pillars = [
  {
    icon: ShieldCheck,
    title: "Absolute Security by Design",
    intro:
      "LiFi's core advantage is physical containment: light cannot penetrate walls. Data stays strictly within the illuminated zone, preventing external eavesdropping and signal leakage.",
    bullets: [
      {
        h: "Zero External Hacking",
        b: "Unlike Wi-Fi, signals do not bleed into corridors or neighboring buildings. An attacker must be physically inside the lit room to intercept data.",
      },
      {
        h: "Military-Grade Encryption",
        b: "FIPS 140-3 validated crypto engines and IEEE 802.11bb standards layer digital encryption over physical security — built for defense, government, and enterprise.",
      },
      {
        h: "RF-Free Zones",
        b: "Ideal for hospitals, aircraft, industrial plants, and oil & gas — anywhere radio frequencies are dangerous or prohibited. Zero electromagnetic interference.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Unmatched Reliability & Performance",
    intro:
      "RC LiFi transforms existing LED infrastructure into a robust, high-bandwidth network backbone — speeds up to 100 Gbps with ultra-low latency.",
    bullets: [
      {
        h: "Interference Immunity",
        b: "Operating on the visible light spectrum (200,000 GHz), LiFi avoids the congestion of crowded Wi-Fi bands (2.4/5/6 GHz).",
      },
      {
        h: "Stable Connectivity",
        b: "Unaffected by radio jamming or atmospheric conditions, ensuring consistent performance for robotics and HD video streaming.",
      },
      {
        h: "Hybrid Redundancy",
        b: "Deployed alongside Wi-Fi or wired backbones. If line-of-sight is blocked, the system seamlessly fails over — maintaining 99.99% uptime.",
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "Light-Based Internet Architecture",
    intro:
      "Our vision leverages Optical Wireless Communication (OWC) to turn every light fixture into a secure data access point.",
    bullets: [
      {
        h: "Plug-and-Play Deployment",
        b: "Uses existing LED lighting grids — deployed in minutes, no drilling or complex cabling.",
      },
      {
        h: "Precise Localization",
        b: "The directional nature of light enables centimeter-level indoor positioning, useful for asset tracking and access control.",
      },
      {
        h: "Scalable Density",
        b: "Each fixture is an independent access point, supporting thousands of simultaneous connections without bandwidth degradation.",
      },
    ],
  },
];

function Pillars() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[oklch(0.97_0.01_240)] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" style={gridPatternLight} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why RC LiFi
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Three pillars of a{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.5_0.2_240)] bg-clip-text text-transparent">
              new network
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Physical security, uncompromised performance, and light-native architecture — engineered
            for environments where failure is not an option.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const gridPatternLight: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(oklch(0.28 0.13 258) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28 0.13 258) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
  maskImage: "radial-gradient(ellipse 60% 40% at 50% 30%, black 30%, transparent 80%)",
  opacity: 0.06,
};

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const Icon = pillar.icon;
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient shadow-glow">
          <Icon className="h-6 w-6 text-[oklch(0.15_0.06_258)]" strokeWidth={2.2} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Pillar {index + 1}
        </span>
      </div>
      <h3 className="text-2xl font-bold leading-tight text-foreground">{pillar.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.intro}</p>

      <ul className="mt-6 space-y-4 border-t border-border pt-6">
        {pillar.bullets.map((b) => (
          <li key={b.h} className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-gradient shadow-glow" />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">{b.h}</div>
              <div className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{b.b}</div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ---------------- Footer / Contact ---------------- */

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-hero text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.22_258/0.35)] blur-3xl" />
        <div className="absolute -right-20 top-0 h-[360px] w-[360px] rounded-full bg-[oklch(0.82_0.16_220/0.25)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-glow">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 max-w-md text-white/70">
              Deploying LiFi in a mission-critical environment? We'd love to hear about your use
              case — from defense and healthcare to industrial and enterprise networks.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-cyan-glow hover:text-cyan-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ContactCard
              Icon={Mail}
              label="Email"
              value="rclif@tuta.com"
              href="mailto:rclif@tuta.com"
            />
            <ContactCard Icon={Phone} label="Phone" value="TBA" />
            <ContactCard Icon={MapPin} label="Address" value="TBA" />
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-8 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(0,210,255,0.12)]">
          {/* Ambient cyan backlight */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-glow/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="group rounded-2xl border border-cyan-400/30 bg-black/40 px-6 py-3.5 backdrop-blur-md shadow-[0_0_25px_rgba(0,210,255,0.25)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,210,255,0.4)]">
              <img
                src="/rclifilog-header.png"
                alt="RC LiFi Logo"
                className="h-14 sm:h-18 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(0,210,255,0.5)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-1 max-w-sm text-xs text-white/70 sm:text-sm">
              Confining data to the room. Eliminating interference. Unbreakable optical wireless connectivity.
            </p>
            <div className="my-1 h-px w-20 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-60" />
            <p className="text-xs text-white/50">© 2026 RC LiFi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:border-cyan-glow/60 hover:bg-white/10"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient shadow-glow">
        <Icon className="h-5 w-5 text-[oklch(0.15_0.06_258)]" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-white/50">{label}</div>
        <div className="mt-0.5 truncate text-base font-medium text-white group-hover:text-cyan-glow">
          {value}
        </div>
      </div>
    </Wrapper>
  );
}
