import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Zap,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  CheckCircle2,
  Lock,
  Radio,
  Tv,
  Gamepad2,
  Sliders,
  Cpu,
  Settings,
  RefreshCw,
  Wifi,
  Sun,
  Maximize2,
  ChevronRight,
  Menu,
  X,
  User,
  Flame,
  Check,
  Sparkles,
  Layers,
  Activity,
  Server,
  Package,
  Wrench,
  HelpCircle,
  Quote
} from "lucide-react";
import { RcLiFiLogo } from "../components/RcLiFiLogo";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LumenFiShowcase } from "../components/LumenFiShowcase";
import { LUMEN } from "../lib/lumen";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <MissionStatement />
        <LumenFiShowcase />
        <NewContentSections />
        <SecurityVisualization />
        <OilAndGasSection />
        <MeetTheFounder />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero Section ---------------- */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero bg-checkerboard pt-40 pb-20 sm:pt-44 sm:pb-28">
      {/* Subtle Aurora Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl animate-beam" />
        <div
          className="absolute right-10 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl animate-beam"
          style={{ animationDelay: "3s" }}
        />
        {/* Optical Cone Beam Effect */}
        <div className="absolute -top-20 left-1/2 h-[750px] w-[350px] -translate-x-1/2 rotate-12 bg-gradient-to-b from-cyan-400/20 via-blue-500/5 to-transparent blur-2xl opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center flex flex-col items-center">
        <div className="mb-6 animate-fade-up">
          <RcLiFiLogo className="h-24 sm:h-32 w-auto mx-auto" variant="color" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-primary uppercase mb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          THE FUTURE IS BRIGHT
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          LIGHT SPEED AHEAD
        </h3>

        <h1
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] animate-fade-up max-w-4xl"
          style={{ animationDelay: "0.3s" }}
        >
          Unbreakable Optical Connectivity at{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            224Gb/s Throughput
          </span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl animate-fade-up mx-auto font-normal"
          style={{ animationDelay: "0.4s" }}
        >
          RC LiFi replaces vulnerable radio frequency (RF) waves with secure, high-speed optical wireless communication: LiFi (Light Fidelity)—unifying everyday <strong className="text-foreground font-semibold">Wi-Fi 7</strong> with light-speed <strong className="text-foreground font-semibold">Li-Fi</strong>, confining your data to the room, eliminating interference, and guaranteeing reliability for homes, workspaces, and mission-critical operations.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#lifi-lamp"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
          >
            Explore LiFi Lamp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={LUMEN.product}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-cyan-50 hover:border-cyan-500/60"
          >
            Pre-Order on LumenLiFi
            <ExternalLink className="h-4 w-4 text-cyan-600" />
          </a>
        </div>

        {/* Hero Visual Card */}
        <div className="mt-16 w-full max-w-5xl relative animate-fade-up" style={{ animationDelay: "0.65s" }}>
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-white p-4 shadow-card">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 group">
              <img
                src="/lifi_light_bg.png"
                alt="RC LiFi Optical Environment"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Optical Metric Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md text-white text-left max-w-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">LiFi Active Optical Link</span>
                  </div>
                  <span className="text-xs font-bold bg-cyan-500/30 px-2 py-0.5 rounded text-cyan-200">Optical Link Active</span>
                </div>
                <p className="mt-1 text-xs text-white/80">Data confined 100% inside physical light cone.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Mission Statement Section ---------------- */

function MissionStatement() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 text-white border-y border-slate-800/80">
      {/* Optical Light Beam & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top down optical beam cone */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-400/25 via-blue-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-8">
          <Sun className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          Our Mission Statement
        </div>

        {/* Primary Statement */}
        <blockquote className="relative">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug sm:leading-tight text-white max-w-4xl mx-auto">
            "To illuminate the future of secure wireless connectivity by{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              harnessing the power of light
            </span>
            ."
          </p>

          <p className="mt-8 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            We empower homes, small businesses, and critical industries to achieve{" "}
            <strong className="text-white font-semibold">interference-free communication</strong>,{" "}
            <strong className="text-white font-semibold">uncompromised data privacy</strong>, and{" "}
            <strong className="text-white font-semibold">high-throughput performance</strong> through advanced LiFi solutions that thrive where radio frequencies fail.
          </p>
        </blockquote>

        {/* Commitment Badge */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 inline-flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <span>RC LiFi Leadership Commitment</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
        </div>
      </div>
    </section>
  );
}



/* ---------------- New Content Sections (3 Pillars) ---------------- */

const ADVANTAGES = [
  {
    id: "bandwidth",
    icon: Zap,
    badge: "10,000× Spectrum",
    badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
    accentGradient: "from-cyan-500 to-blue-600",
    title: "Massive Optical Bandwidth",
    tagline: "Unclogging saturated radio channels with pure light.",
    summary:
      "Operating across 200–800 Terahertz of optical spectrum, LiFi bypasses crowded 2.4 / 5 / 6 GHz radio bands to eliminate packet congestion and electromagnetic noise.",
    highlights: [
      { title: "Zero RF Congestion", desc: "Immune to microwaves, baby monitors, and neighbor Wi-Fi noise." },
      { title: "Multi-User Density", desc: "Maintains high throughput without bandwidth collapse during peak hours." },
      { title: "Deterministic Response", desc: "Instantaneous optical turnaround for gaming, 4K/8K, and VR." },
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    badge: "100% Room Confined",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    accentGradient: "from-primary to-blue-800",
    title: "Physical-Layer Data Security",
    tagline: "Light cannot penetrate solid walls, doors, or glass.",
    summary:
      "Unlike radio signals that radiate through drywalls into public corridors and streets, light stays inside your room, making wireless interception physically impossible.",
    highlights: [
      { title: "Zero Perimeter Bleed", desc: "Network traffic stays strictly within opaque room boundaries." },
      { title: "Drive-By Sniffing Immune", desc: "Eliminates remote RF packet capture, eavesdropping, and wardriving." },
      { title: "Enterprise & SCIF Ready", desc: "Hardware-enforced isolation for legal, medical, and executive rooms." },
    ],
  },
  {
    id: "infrastructure",
    icon: Lightbulb,
    badge: "Lighting & Internet in One",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accentGradient: "from-emerald-500 to-cyan-600",
    title: "Dual-Role Luminaire Efficiency",
    tagline: "Turn functional room lighting into your wireless hub.",
    summary:
      "By modulating LED light intensity at imperceptible speeds, a single lamp illuminates your room while transmitting gigabit wireless data, reducing cabling and equipment overhead.",
    highlights: [
      { title: "Energy-Efficient LED", desc: "High-efficiency ambient illumination and high-speed data from one unit." },
      { title: "Reduced Cable Clutter", desc: "Eliminates messy Ethernet cables across living rooms and workspaces." },
      { title: "Wi-Fi 7 Harmony", desc: "Complements broad Wi-Fi 7 coverage for a seamless dual network." },
    ],
  },
];

function NewContentSections() {
  return (
    <section id="features" className="relative bg-slate-50/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
            Core Technological Advantages
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Engineered Where Radio Frequencies Fail
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how RC LiFi redefines bandwidth, privacy, and infrastructure efficiency for modern living and enterprise spaces.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${adv.accentGradient} text-white shadow-md`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${adv.badgeColor}`}>
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-cyan-700">
                    {adv.tagline}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {adv.summary}
                  </p>
                </div>

                <div className="mt-8 border-t border-border/70 pt-6 space-y-3.5">
                  {adv.highlights.map((h) => (
                    <div key={h.title} className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">{h.title}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">{h.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Security Room Containment Interactive Visualization ---------------- */

function SecurityVisualization() {
  const [mode, setMode] = useState<"wifi" | "lifi">("lifi");

  return (
    <section id="security" className="relative bg-white py-20 sm:py-28 border-y border-border/60 overflow-hidden scroll-mt-28">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-[120px] transition-colors duration-1000 ${mode === 'lifi' ? 'bg-cyan-500/5' : 'bg-rose-500/5'}`} />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${mode === 'lifi' ? 'bg-cyan-50 text-cyan-700' : 'bg-rose-50 text-rose-700'}`}>
              {mode === 'lifi' ? <Lock className="h-3.5 w-3.5" /> : <Wifi className="h-3.5 w-3.5" />}
              Physical Security Demo
            </span>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-foreground leading-[1.1]">
              Interactive Room Boundary <br /> Security Visualization
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Traditional Wi-Fi radiates through drywalls, glass, and doors, allowing eavesdroppers outside the perimeter to intercept packet traces. RC LiFi keeps 100% of data enclosed inside lit optical cones.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 rounded-3xl bg-slate-100/80 p-2 border border-border shadow-inner backdrop-blur-sm">
              <button
                onClick={() => setMode("wifi")}
                className={`relative flex-1 flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold transition-all duration-300 ${mode === "wifi"
                  ? "bg-white text-rose-600 shadow-md border border-rose-100"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-200/50"
                  }`}
              >
                {mode === "wifi" && <span className="absolute left-4 flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span></span>}
                <Radio className="h-4 w-4" />
                Vulnerable Wi-Fi
              </button>
              <button
                onClick={() => setMode("lifi")}
                className={`relative flex-1 flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold transition-all duration-300 ${mode === "lifi"
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-200/50"
                  }`}
              >
                {mode === "lifi" && <span className="absolute left-4 flex h-2.5 w-2.5"><span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span></span>}
                <ShieldCheck className="h-4 w-4" />
                RC LiFi Secured
              </button>
            </div>

            <div className={`mt-6 rounded-2xl border p-6 transition-all duration-500 ${mode === 'lifi' ? 'border-cyan-100 bg-cyan-50/50' : 'border-rose-100 bg-rose-50/50'}`}>
              <h4 className={`text-sm font-bold flex items-center gap-2 ${mode === 'lifi' ? 'text-cyan-800' : 'text-rose-800'}`}>
                {mode === "wifi" ? (
                  <><Flame className="h-4 w-4 text-rose-500" /> Wi-Fi Vulnerability:</>
                ) : (
                  <><CheckCircle2 className="h-4 w-4 text-cyan-500" /> RC LiFi Security Guarantee:</>
                )}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {mode === "wifi"
                  ? "Radio waves penetrate solid drywall and glass. Attackers sitting in neighboring offices or vehicles outside can intercept packet logs without physical break-in."
                  : "Optical light waves are completely stopped by walls, doors, and blinds. Zero packet emission outside room boundaries guarantees physical layer isolation."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className={`relative overflow-hidden rounded-[2.5rem] border-[8px] transition-colors duration-700 shadow-2xl group ${mode === 'lifi' ? 'border-cyan-950/20 shadow-cyan-900/20' : 'border-slate-900/10 shadow-rose-900/20'}`}>
              {/* Background Image */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <img
                  src="/secure_room.jpg"
                  alt="Secure Meeting Room"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${mode === 'wifi' ? 'scale-105 opacity-60 grayscale-[30%]' : 'scale-100 opacity-90'}`}
                />

                {/* Overlay Effects based on mode */}
                <div className={`absolute inset-0 transition-all duration-700 mix-blend-overlay ${mode === "lifi" ? "bg-cyan-600/40" : "bg-rose-900/60"}`} />

                {/* Mode: Wi-Fi */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${mode === "wifi" ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"}`}>
                  {/* RF Rings expanding outwards */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150%] aspect-square rounded-full border-[8px] border-rose-500/30 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-[100%] aspect-square rounded-full border-[6px] border-rose-500/40 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                    <div className="absolute w-[50%] aspect-square rounded-full border-[4px] border-rose-500/50 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
                  </div>

                  {/* Hacker Alert Outside */}
                  <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center gap-4 rounded-2xl bg-slate-900/95 p-4 border border-rose-500/50 shadow-[0_0_40px_rgba(244,63,94,0.4)] animate-bounce" style={{ animationDuration: '2s' }}>
                    <div className="h-12 w-12 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                      <Wifi className="h-6 w-6 text-rose-500 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-rose-500">Signal Intercepted</div>
                      <div className="text-sm text-rose-300">Outside perimeter</div>
                    </div>
                  </div>
                </div>

                {/* Mode: LiFi */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${mode === "lifi" ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>
                  {/* Confined Light Cone overlay */}
                  <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-b from-cyan-300/30 via-cyan-400/10 to-transparent blur-md"
                    style={{ clipPath: 'polygon(35% 0%, 65% 0%, 90% 100%, 10% 100%)' }} />

                  {/* Glowing Data Particles */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-2/3 h-2/3 bg-cyan-400/20 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                  </div>

                  {/* Secure Status Inside */}
                  <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center gap-4 rounded-2xl bg-slate-900/95 p-4 border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-transform hover:scale-105 cursor-default">
                    <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 relative">
                      <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-[spin_4s_linear_infinite]" />
                      <Lock className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-cyan-400">100% Room Confined</div>
                      <div className="text-sm text-cyan-200">Zero physical leakage</div>
                    </div>
                  </div>
                </div>

                {/* Overlay Scanning Line for cool factor */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 blur-[1px] animate-[slideDown_8s_linear_infinite]" />

                <style>{`
                  @keyframes slideDown {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(800px); opacity: 0; }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Interactive Demos & Simulations ---------------- */

function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState<"speed" | "media" | "beam" | "congestion">("speed");

  // Speed Sim State
  const [selectedTech, setSelectedTech] = useState<"wifi" | "fiveg" | "lifi">("lifi");

  // Media Sim State
  const [streamResolution, setStreamResolution] = useState<"4K" | "8K">("8K");
  const [activeStreams, setActiveStreams] = useState<number>(12);

  // Beam Sim State
  const [ceilingHeight, setCeilingHeight] = useState<number>(3.0); // meters
  const [beamAngle, setBeamAngle] = useState<number>(60); // degrees

  // Congestion Sim State
  const [userCount, setUserCount] = useState<number>(10);

  return (
    <section id="demos" className="relative bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sliders className="h-3.5 w-3.5" />
            Interactive Testbed
          </span>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl text-foreground">
            Live LiFi Performance Simulations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Test and benchmark RC LiFi against legacy wireless networks in real-time.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex rounded-2xl bg-white p-1.5 shadow-sm border border-border">
            <button
              onClick={() => setActiveTab("speed")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${activeTab === "speed"
                ? "bg-primary text-white shadow"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Zap className="h-4 w-4" /> Speed & Spectrum
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${activeTab === "media"
                ? "bg-primary text-white shadow"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Tv className="h-4 w-4" /> 4K/8K & Gaming
            </button>
            <button
              onClick={() => setActiveTab("beam")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${activeTab === "beam"
                ? "bg-primary text-white shadow"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Sun className="h-4 w-4" /> Beam & Coverage
            </button>
            <button
              onClick={() => setActiveTab("congestion")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${activeTab === "congestion"
                ? "bg-primary text-white shadow"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Activity className="h-4 w-4" /> Multi-User Congestion
            </button>
          </div>
        </div>

        {/* Tab 1: Speed & Spectrum Benchmark */}
        {activeTab === "speed" && (
          <div className="mt-12 rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-card">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  id: "wifi",
                  title: "Wi-Fi 6E (RF)",
                  speed: "1.2 Gbps",
                  latency: "15 - 45 ms",
                  spectrum: "2.4 / 5 / 6 GHz",
                  security: "Leaks through walls",
                  color: "border-slate-200 bg-slate-50",
                },
                {
                  id: "fiveg",
                  title: "5G mmWave",
                  speed: "10 - 20 Gbps Peak",
                  latency: "< 1 - 2 ms",
                  spectrum: "24 - 71 GHz",
                  security: "Line of Sight, Highly Attenuated",
                  color: "border-slate-200 bg-slate-50",
                },
                {
                  id: "lifi",
                  title: "RC LiFi Optical",
                  speed: "Fast Throughput",
                  latency: "< 0.5 ms",
                  spectrum: "200,000 - 800,000 GHz",
                  security: "100% Physical Room Isolation",
                  color: "border-primary bg-gradient-to-b from-blue-50/80 to-white shadow-glow",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedTech(item.id as any)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all ${item.color} ${selectedTech === item.id ? "ring-2 ring-primary" : ""
                    }`}
                >
                  {item.highlight && (
                    <span className="mb-3 inline-block rounded-full bg-cyan-600 px-3 py-0.5 text-xs font-extrabold text-white">
                      ★ TOP PERFORMANCE
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">Peak Speed</div>
                      <div className="text-2xl font-extrabold text-primary">{item.speed}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">Avg Ping / Latency</div>
                      <div className="text-lg font-bold text-foreground">{item.latency}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">Operating Spectrum</div>
                      <div className="text-sm font-semibold text-foreground">{item.spectrum}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">Security Boundary</div>
                      <div className="text-xs font-medium text-slate-700">{item.security}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: 4K/8K Streaming & Gaming Latency */}
        {activeTab === "media" && (
          <div className="mt-12 rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-card">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Multi-Channel 4K/8K Uncompressed Video</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Simulate concurrent ultra-high-definition video feeds without buffering or bandwidth congestion.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-foreground">Video Format Quality</label>
                    <div className="mt-2 flex gap-3">
                      <button
                        onClick={() => setStreamResolution("4K")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold ${streamResolution === "4K" ? "bg-primary text-white" : "bg-slate-100 text-foreground"
                          }`}
                      >
                        4K UHD (25 Mbps per stream)
                      </button>
                      <button
                        onClick={() => setStreamResolution("8K")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold ${streamResolution === "8K" ? "bg-primary text-white" : "bg-slate-100 text-foreground"
                          }`}
                      >
                        8K Uncompressed (100 Mbps per stream)
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold">
                      <span>Concurrent Active Streams: {activeStreams}</span>
                      <span className="text-primary font-extrabold">Total Bandwidth: {activeStreams * (streamResolution === "8K" ? 100 : 25)} Mbps</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={activeStreams}
                      onChange={(e) => setActiveStreams(parseInt(e.target.value))}
                      className="mt-2 w-full accent-primary"
                    />
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-4 border border-blue-200">
                    <div className="text-xs font-bold text-primary">LiFi Channel Capacity Status:</div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      🟢 Fast Optical Backbone handles all {activeStreams} {streamResolution} feeds effortlessly with 99.8% headroom remaining.
                    </div>
                  </div>
                </div>
              </div>

              {/* Gaming Performance Sub-card */}
              <div className="rounded-2xl border border-border bg-slate-950 p-6 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                    <Gamepad2 className="h-4 w-4" /> SUB-MILLISECOND GAMING PERFORMANCE
                  </div>
                  <h4 className="mt-3 text-xl font-bold">Zero Latency & Packet Jitter</h4>
                  <p className="mt-2 text-xs text-slate-400">
                    Traditional Wi-Fi suffers from lag spikes when nearby microwave ovens or neighboring routers broadcast. LiFi delivers instantaneous optical response.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
                  <div>
                    <div className="text-xs text-slate-400">Wi-Fi Jitter Spikes</div>
                    <div className="text-xl font-bold text-rose-400">+42 ms Ping</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">RC LiFi Latency</div>
                    <div className="text-xl font-bold text-cyan-400">0.2 ms Solid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Light Beam & Ceiling Coverage Simulator */}
        {activeTab === "beam" && (
          <div className="mt-12 rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-card">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Optical Coverage Beam Simulator</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Adjust ceiling height and beam dispersion angle to calculate room coverage diameter for RC LiFi optical transceivers.
                </p>

                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Ceiling Height: {ceilingHeight.toFixed(1)} meters</span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="6.0"
                    step="0.1"
                    value={ceilingHeight}
                    onChange={(e) => setCeilingHeight(parseFloat(e.target.value))}
                    className="mt-2 w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Beam Angle: {beamAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    step="5"
                    value={beamAngle}
                    onChange={(e) => setBeamAngle(parseInt(e.target.value))}
                    className="mt-2 w-full accent-primary"
                  />
                </div>

                <div className="rounded-2xl bg-cyan-50 p-4 border border-cyan-200">
                  <div className="text-xs font-bold text-cyan-800">Calculated Coverage Diameter:</div>
                  <div className="text-2xl font-extrabold text-primary">
                    {(2 * ceilingHeight * Math.tan(((beamAngle / 2) * Math.PI) / 180)).toFixed(2)} meters
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Sufficient to cover standard desk pods, executive office suites, or industrial workstations.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col items-center justify-between text-white overflow-hidden">
                  <div className="text-xs font-mono text-cyan-400">OPTICAL CONE GEOMETRY SIMULATION</div>

                  {/* Visual Beam Cone Representation */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute top-2 h-4 w-16 bg-cyan-400 rounded-b-md shadow-[0_0_15px_#00D4FF]" />
                    <div
                      className="absolute top-6 bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent transition-all duration-300"
                      style={{
                        width: `${Math.min(280, beamAngle * 3)}px`,
                        height: `${Math.min(180, ceilingHeight * 40)}px`,
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
                      }}
                    />
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Floor Optical Spot Size: {(2 * ceilingHeight * Math.tan(((beamAngle / 2) * Math.PI) / 180)).toFixed(2)}m
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Multi-User Congestion */}
        {activeTab === "congestion" && (
          <div className="mt-12 rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-card">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Multi-User Congestion Simulator</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  See how adding more users degrades traditional Wi-Fi due to shared RF spectrum contention, while LiFi maintains stable, dedicated bandwidth per user.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                      <span>Simulated Active Users: {userCount}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={userCount}
                      onChange={(e) => setUserCount(parseInt(e.target.value))}
                      className="w-full accent-primary"
                    />
                    <div className="mt-1 flex justify-between text-[10px] text-muted-foreground font-mono">
                      <span>1 User</span>
                      <span>50 Users</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {/* Wi-Fi Degradation */}
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                    <div className="flex items-center justify-between text-sm font-bold text-rose-800">
                      <span>Wi-Fi 6 (RF) Speed per User</span>
                      <span>{Math.max(5, Math.floor(1200 / userCount))} Mbps</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rose-200">
                      <div
                        className="h-full bg-rose-500 transition-all duration-300"
                        style={{ width: `${Math.max(5, (1200 / userCount) / 12)}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-rose-700/80">Spectrum is shared. Ping increases, speeds drop.</p>
                  </div>

                  {/* LiFi Stability */}
                  <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                    <div className="flex items-center justify-between text-sm font-bold text-primary">
                      <span>RC LiFi Speed per User</span>
                      <span>Consistently Fast</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cyan-200">
                      <div
                        className="h-full bg-cyan-500 transition-all duration-300"
                        style={{ width: `100%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-primary/80">Massive optical bandwidth prevents congestion.</p>
                  </div>
                </div>
              </div>

              {/* Visual Diagram */}
              <div className="lg:col-span-1">
                <div className="relative h-full min-h-[300px] rounded-2xl border border-slate-800 bg-slate-950 p-6 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-checkerboard opacity-20" />

                  {/* Central Router */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center">
                    <Radio className="h-6 w-6 text-slate-400" />
                  </div>

                  {/* Users */}
                  {Array.from({ length: Math.min(userCount, 50) }).map((_, i) => {
                    const angle = (i / userCount) * Math.PI * 2;
                    const radius = 80 + Math.random() * 60;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    // Calculate Wi-Fi collision visual based on count
                    const isCongested = userCount > 15 && Math.random() > 0.5;

                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full transition-all duration-500"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          backgroundColor: isCongested ? '#f43f5e' : '#06b6d4',
                          boxShadow: isCongested ? '0 0 15px #f43f5e' : '0 0 15px #06b6d4'
                        }}
                      />
                    );
                  })}

                  {userCount > 15 && (
                    <div className="absolute bottom-4 text-xs font-mono text-rose-400 font-bold text-center w-full animate-pulse">
                      RF Collision Domain Congested!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



/* ---------------- Oil & Gas Section ---------------- */

function OilAndGasSection() {
  return (
    <section id="oil-gas" className="relative bg-slate-900 py-24 sm:py-32 text-white overflow-hidden">
      {/* Industrial Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/oil_gas_bg.png"
          alt="Oil and Gas Hazardous Facilities"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-300 border border-amber-500/30">
            <Flame className="h-3.5 w-3.5" />
            Hazardous Area Solutions
          </span>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl text-white">
            Intrinsically Safe Optical Wireless for Oil & Gas
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Delivering high-throughput wireless telemetry where traditional radio frequency systems present spark hazards or fail against heavy steel structures.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Pillar 1: Safety & Compliance */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur shadow-xl hover:border-amber-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Intrinsically Safe Compliance</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                Unlike radio frequency signals, optical light carries zero spark or thermal ignition hazard. RC LiFi provides certified intrinsically safe data transfer engineered for Zone 0, 1, and 2 hazardous extraction and refining environments.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-800 pt-4 text-xs font-semibold text-amber-400 flex items-center gap-2">
              <Check className="h-4 w-4" /> Zone 0, 1 & 2 Explosion-Proof Rated
            </div>
          </div>

          {/* Pillar 2: Operational Efficiency */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur shadow-xl hover:border-cyan-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Dual Telemetry &amp; Lighting</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                Simultaneously provides explosion-proof illumination and multi-gigabit data telemetry across drilling rigs, booster stations, and refineries—substantially reducing industrial cabling costs and latency.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-800 pt-4 text-xs font-semibold text-cyan-400 flex items-center gap-2">
              <Check className="h-4 w-4" /> Real-time Telemetry &amp; Reduced Cabling
            </div>
          </div>

          {/* Pillar 3: Technological Superiority */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur shadow-xl hover:border-blue-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Heavy-Steel RF Immunity</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                Operates in the optical spectrum immune to electromagnetic interference, electric motor noise, and heavy steel structure attenuation that cripple legacy radio frequency networks.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-800 pt-4 text-xs font-semibold text-blue-400 flex items-center gap-2">
              <Check className="h-4 w-4" /> RF Interference & Noise Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About Me / Meet the Founder Section ---------------- */

function MeetTheFounder() {
  return (
    <section id="founder" className="relative bg-white py-24 sm:py-32 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-4 mb-16 relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <User className="h-3.5 w-3.5" />
            Leadership Profile
          </span>
          <h2 className="text-4xl font-extrabold sm:text-5xl text-foreground leading-tight tracking-tight">
            Meet the Founder
          </h2>
        </div>

        <div className="relative">
          {/* Landscape Image */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-200 shadow-2xl ring-1 ring-border/50">
            <div className="relative aspect-video md:aspect-[21/9]">
              <img
                src="/Robert White.jpg"
                alt="Robert White - Founder of RC LiFi"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60" />
            </div>
          </div>

          {/* Overlapping Content Card */}
          <div className="relative -mt-24 md:-mt-48 mx-4 md:mx-12 z-20">
            <div className="rounded-3xl border border-white/40 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                {/* Left Side: Name, Quote and CTA */}
                <div className="lg:w-1/3 flex flex-col justify-between space-y-10">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Robert White</h3>
                      <p className="text-primary font-bold tracking-wide uppercase text-sm mt-2">Founder of RC LiFi</p>
                    </div>

                    <div className="relative pt-6">
                      <Quote className="absolute top-0 left-0 h-10 w-10 text-primary/20 rotate-180 -translate-x-3 -translate-y-4" />
                      <p className="relative z-10 text-lg font-semibold text-slate-700 italic leading-relaxed">
                        "We are dedicated to pioneering optical wireless communication, replacing legacy radio spectrum constraints with the uncompromised bandwidth, security, and speed of light."
                      </p>
                    </div>
                  </div>

                  {/* CTA Block shifted to Left with Logo */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-6">
                    <RcLiFiLogo className="h-8 w-auto opacity-90" />
                    <p className="font-semibold text-slate-900 text-base leading-snug">
                      Ready to modernize your field communications with intrinsically safe, high-speed data?
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex justify-center w-full items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:bg-primary/90"
                    >
                      Let's Connect
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Bio */}
                <div className="lg:w-2/3 space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    <span className="text-5xl font-black text-primary float-left mr-3 mt-1 leading-none">M</span>y background in the energy sector spans over a decade, starting in 2013 as a commercial driver in the Permian Basin. Throughout those years, I drove truck across nearly every major sector of the field— supporting production facilities, gas plants, midstream facilities, cathodic protection, booster stations, drilling rigs, frac setups, and wireline operations. Since January 2023, I’ve also served as a Lease Operator overseeing daily operations.
                  </p>
                  <p>
                    Having spent years on the front lines of production, I saw a persistent industry challenge: <strong className="text-slate-900 font-semibold">the critical need for reliable, high-speed field connectivity where traditional networks fall short.</strong> I founded RC LiFi to solve this problem. We provide intrinsically safe Light Fidelity (LiFi) technology utilizing infrared transmission rather than radio frequencies. The result is secure, RF-free, high-speed data transfer built specifically for the demands of hazardous and signal-restricted oilfield environments.
                  </p>
                  <p>
                    When I’m not innovating field communications, I’m spending quality time with my family—the original inspiration that drove me to build a career in the Permian Basin and the foundation behind everything I do.
                  </p>
                  <p>
                    Under our leadership, RC LiFi is expanding access to next-generation optical wireless technology across all industries, including Oil & Gas, commercial enterprises, small businesses, and residential setups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

