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
        <NewContentSections />
        <SecurityVisualization />
        <InteractiveDemos />
        <KitSection />
        <SetupSection />
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
    <section id="home" className="relative isolate overflow-hidden bg-hero bg-checkerboard pt-32 pb-20 sm:pb-28">
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
          <RcLiFiLogo className="h-16 sm:h-24 w-auto mx-auto" variant="color" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-primary uppercase mb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          THE FUTURE IS BRIGHT
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          LIGHT SPEED AHEAD
        </h3>

        {/* <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur shadow-sm animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
          Light Fidelity (LiFi) — Next-Gen Optical Wireless
        </span> */}

        <h1
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] animate-fade-up max-w-4xl"
          style={{ animationDelay: "0.4s" }}
        >
          Unbreakable Optical Connectivity at{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Fast Throughput
          </span>
        </h1>

        <p
          className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl animate-fade-up mx-auto"
          style={{ animationDelay: "0.5s" }}
        >
          RC LiFi replaces vulnerable radio frequency (RF) waves with secure, high-speed optical wireless communication: LiFi (Light Fidelity)—confining your data to the room, eliminating interference, and guaranteeing reliability for mission-critical operations.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#demos"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
          >
            Explore Live Demos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#kit"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-secondary hover:border-primary/30"
          >
            View LumenFi Kit & Setup
          </a>
        </div>

        {/* Stat Row */}
        <div
          className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-4 border-y border-border/80 py-6 animate-fade-up mx-auto"
          style={{ animationDelay: "0.7s" }}
        >
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">Fast</div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">Throughput Speed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600">200–800 THz</div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">Optical Spectrum</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">0 ms RF</div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">Leakage Hazard</div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="mt-16 w-full max-w-5xl relative animate-fade-up" style={{ animationDelay: "0.8s" }}>
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
                  <span className="text-xs font-bold bg-cyan-500/30 px-2 py-0.5 rounded text-cyan-200">Fast</span>
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
    <section id="mission" className="relative bg-white py-20 sm:py-24 border-y border-border/60">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          <Sun className="h-3.5 w-3.5" />
          Our Mission Statement
        </div>

        <div className="relative mt-8 rounded-3xl border border-primary/20 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white p-8 sm:p-14 shadow-card">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-foreground">
            "To illuminate the future of secure wireless connectivity by harnessing the power of light. We empower homes, small businesses, and critical industries to achieve interference-free communication, uncompromised data privacy, and high-throughput performance through advanced LiFi solutions that thrive where radio frequencies fail."
          </h2>

          <div className="mt-8 flex justify-center items-center gap-3 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            RC LiFi Leadership Commitment
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- New Content Sections (3 Pillars) ---------------- */

function NewContentSections() {
  const sections = [
    {
      id: "speed",
      icon: Zap,
      badge: "Performance & Spectrum",
      title: "Unmatched Speed and Bandwidth",
      fullText:
        "Operating at frequencies around 200,000 GHz (200 THz) and extending up to 800,000 GHz, LiFi accesses a spectrum 10,000 times wider than the entire radio frequency range used by Wi-Fi. This vast bandwidth enables data transmission speeds exceeding 100 Gb/s in laboratory settings, offering a solution to the global 'spectrum crunch' and supporting ultra-high-density data environments without interference. Offering peak speeds of Fast.",
      items: [
        { title: "Spectrum Frequency Range", val: "200,000 GHz (200 THz) – 800,000 GHz" },
        { title: "10,000x Wider Spectrum", val: "Solves global RF spectrum crunch with zero interference" },
        { title: "Peak Speeds of Fast", val: "Fast Throughput for ultra-high-density data environments" },
        { title: "Next-Gen 6G Compatible", val: "Native alignment with 6G and smart ecosystem architecture" },
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: "security",
      icon: ShieldCheck,
      badge: "Privacy & Physical Containment",
      title: "Enhanced Security and Reliability",
      fullText:
        "A defining feature of LiFi is its inherent physical security. Because light cannot penetrate opaque walls, data transmission is strictly confined to the illuminated area, eliminating the risk of external interception common with radio waves. This makes LiFi ideal for secure environments such as government facilities, hospitals, and financial institutions. Furthermore, LiFi is immune to electromagnetic interference, ensuring stable performance in sensitive areas like aircraft cabins and industrial plants where radio signals are restricted or hazardous.",
      items: [
        { title: "Confined Within Lit Room", val: "Light cannot penetrate opaque walls, doors, or partitions" },
        { title: "Zero RF Leakage", val: "Eliminates risk of external packet interception" },
        { title: "Electromagnetic Immunity", val: "Immune to EMI & signal jamming in sensitive environments" },
        { title: "Critical Industry Ready", val: "Ideal for government, healthcare, finance, defense, & industrial plants" },
      ],
      color: "from-primary to-blue-800",
    },
    {
      id: "integration",
      icon: Lightbulb,
      badge: "Infrastructure & Efficiency",
      title: "Seamless Integration and Efficiency",
      fullText:
        "LiFi technology transforms existing lighting fixtures into wireless access points, requiring minimal new infrastructure. By modulating light intensity at speeds imperceptible to the human eye, LED bulbs simultaneously provide illumination and high-speed internet access. This dual functionality results in significant energy savings and lower deployment costs compared to traditional radio-frequency systems. While LiFi requires a line-of-sight connection, its ability to operate in dense environments without signal degradation positions it as a powerful complement to Wi-Fi in the evolution toward 6G and smart city ecosystems.",
      items: [
        { title: "LED Lighting Reuse", val: "Transforms existing LED light fixtures into high-speed optical access points" },
        { title: "Dual Functionality", val: "Simultaneous room illumination and high-speed data transmission" },
        { title: "Energy & Cost Savings", val: "Lower deployment and cabling costs compared to RF systems" },
        { title: "Dense Environment Power", val: "Zero signal degradation in crowded smart city & enterprise spaces" },
      ],
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section id="features" className="relative bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Core Technological Advantages</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl text-foreground">
            Engineered Where Radio Frequencies Fail
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore how RC LiFi redefines bandwidth, privacy, and efficiency for modern enterprises.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${sec.color} text-white shadow-soft`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{sec.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-normal bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                    "{sec.fullText}"
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6 space-y-3">
                  {sec.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-foreground">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.val}</div>
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
    <section className="relative bg-white py-24 sm:py-32 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700">
              <Lock className="h-3.5 w-3.5" />
              Physical Security Demo
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-foreground leading-tight">
              Interactive Room Boundary Security Visualization
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Traditional Wi-Fi radiates through drywalls, glass, and doors, allowing eavesdroppers outside the perimeter to intercept packet traces. RC LiFi keeps 100% of data enclosed inside lit optical cones.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-100 p-1.5 border border-border">
              <button
                onClick={() => setMode("wifi")}
                className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all ${mode === "wifi"
                  ? "bg-rose-600 text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Vulnerable Wi-Fi (RF Leakage)
              </button>
              <button
                onClick={() => setMode("lifi")}
                className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all ${mode === "lifi"
                  ? "bg-primary text-white shadow shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                RC LiFi (Room Containment)
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-slate-50 p-5">
              <h4 className="text-sm font-bold text-foreground">
                {mode === "wifi" ? "⚠️ Wi-Fi Vulnerability:" : "🛡️ RC LiFi Security Guarantee:"}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                {mode === "wifi"
                  ? "Radio waves penetrate solid drywall and glass. Attackers sitting in neighboring offices or vehicles outside can intercept packet logs without physical break-in."
                  : "Optical light waves are completely stopped by walls, doors, and blinds. Zero packet emission outside room boundaries guarantees physical layer isolation."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-slate-900 p-6 sm:p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400">Security-Simulator-v2.2.exe</span>
                </div>
                <div className="text-xs font-semibold text-cyan-400">
                  Status: {mode === "lifi" ? "SECURE ROOM CONFINED" : "RF SIGNAL LEAKING OUTSIDE"}
                </div>
              </div>

              {/* Interactive Room Canvas Visual */}
              <div className="relative aspect-[16/10] rounded-2xl border border-slate-800 bg-slate-950 p-4 overflow-hidden">
                {/* Room Walls Representation */}
                <div className="absolute inset-8 rounded-xl border-4 border-dashed border-slate-600 bg-slate-900/60 p-4">
                  <div className="absolute top-2 left-3 text-xs font-mono text-slate-400 font-bold uppercase">
                    Confidential Room Area (Zone A)
                  </div>

                  {/* Ceiling Fixture */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className={`h-4 w-24 rounded-b-lg ${mode === "lifi" ? "bg-cyan-400 shadow-[0_0_20px_#00D4FF]" : "bg-blue-600"}`} />
                    {mode === "lifi" ? (
                      /* Cone beam inside room */
                      <div className="w-64 h-48 bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent clip-triangle" />
                    ) : (
                      /* Leaking RF Waves */
                      <div className="absolute top-4 inset-0 flex items-center justify-center">
                        <div className="h-48 w-48 rounded-full border-2 border-rose-500/40 animate-ping" />
                        <div className="h-72 w-72 rounded-full border-2 border-rose-500/20 animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Inside Device */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-lg bg-slate-800/90 px-3 py-1.5 border border-slate-700">
                    <Cpu className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs font-mono">Secure Client Workstation</span>
                  </div>
                </div>

                {/* Outside Perimeter Eavesdropper */}
                <div className="absolute bottom-2 right-2 flex items-center gap-2 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-700 text-xs">
                  <User className={`h-3.5 w-3.5 ${mode === "wifi" ? "text-rose-400" : "text-slate-500"}`} />
                  <span className={mode === "wifi" ? "text-rose-400 font-semibold" : "text-slate-500"}>
                    {mode === "wifi" ? "⚠️ Unauthorized Interception!" : "🚫 Signal Blocked by Wall"}
                  </span>
                </div>
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

/* ---------------- Kit Section ("What's Included in the Kit") ---------------- */

function KitSection() {
  const kitItems = [
    {
      icon: Sun,
      title: "Optical Transceiver Access Point",
      desc: "High-power ceiling unit converting Ethernet data streams into modulated invisible infrared & visible light signals.",
    },
    {
      icon: Cpu,
      title: "2x USB LiFi Receiver Dongles",
      desc: "Includes 2 compact optical dongles. Plugs directly into any device (computers, phones, gaming systems, TVs) via USB-C or standard USB-A adapters.",
    },
    {
      icon: Zap,
      title: "POE Injector & High-Grade Cabling",
      desc: "Power-over-Ethernet injector and shielded Category 6A cabling for seamless power and gigabit backhaul feed.",
    },
    {
      icon: Settings,
      title: "Optical Alignment Bracket & Hardware",
      desc: "Precision ceiling and wall mounting brackets with fine-tune optical alignment knobs for optimal beam targeting.",
    },
    {
      icon: ShieldCheck,
      title: "Management Suite & User Manual",
      desc: "Enterprise controller software license, alignment diagnostic software, and step-by-step setup documentation.",
    },
  ];

  return (
    <section id="kit" className="relative bg-white py-24 sm:py-32 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Package className="h-3.5 w-3.5" />
            Hardware Bundle
          </span>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl text-foreground">
            What's Included in the LumenFi Kit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything required to deploy your first high-speed optical LiFi cell right out of the box, including 2 connection dongles for your devices.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kitItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-border bg-slate-50/50 p-8 shadow-card transition-all duration-300 hover:bg-white hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground">ITEM 0{idx + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Setup Section & Compatibility Checker ---------------- */

function SetupSection() {
  // Dongle Calculator state
  const [laptops, setLaptops] = useState<number>(1);
  const [phones, setPhones] = useState<number>(1);
  const [tvs, setTvs] = useState<number>(0);
  const [consoles, setConsoles] = useState<number>(0);

  const totalDevices = laptops + phones + tvs + consoles;
  const donglesIncluded = 2;
  const extraDonglesNeeded = Math.max(0, totalDevices - donglesIncluded);

  const steps = [
    {
      step: "01",
      title: "Mount Optical Transceiver",
      desc: "Attach the transceiver bracket to your ceiling light fixture or overhead grid position.",
    },
    {
      step: "02",
      title: "Connect POE Ethernet Cable",
      desc: "Plug the Category 6A cable from your network switch or POE injector into the transceiver.",
    },
    {
      step: "03",
      title: "Plug USB Receiver into Client",
      desc: "Insert the RC LiFi compact receiver dongle into your desktop or laptop USB-C / USB-A port.",
    },
    {
      step: "04",
      title: "Instant Light Connection",
      desc: "Verify optical alignment via status indicator LEDs and enjoy zero-lag Fast optical internet.",
    },
  ];

  return (
    <section className="relative bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Wrench className="h-3.5 w-3.5" />
            Deployment Guide
          </span>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl text-foreground">
            What's Needed for Setup
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fast 4-step installation with zero specialized tools required.
          </p>
        </div>

        {/* 4 Step Walkthrough */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="text-3xl font-extrabold text-cyan-600">{s.step}</div>
              <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Dongle Calculator */}
        <div className="mt-16 rounded-3xl border border-primary/20 bg-white p-8 sm:p-12 shadow-card">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase text-cyan-800">
                <HelpCircle className="h-3.5 w-3.5" />
                Interactive Dongle Calculator
              </div>
              <h3 className="text-2xl font-bold text-foreground">How many dongles do I need?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter the number of devices you plan to connect <strong>simultaneously</strong> to your LiFi network. Each device requires one dongle.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-foreground">Laptops / Computers</label>
                  <input
                    type="number"
                    min="0"
                    value={laptops}
                    onChange={(e) => setLaptops(parseInt(e.target.value) || 0)}
                    className="mt-1 w-full rounded-xl border border-border bg-slate-50 p-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-foreground">Phones / Tablets</label>
                  <input
                    type="number"
                    min="0"
                    value={phones}
                    onChange={(e) => setPhones(parseInt(e.target.value) || 0)}
                    className="mt-1 w-full rounded-xl border border-border bg-slate-50 p-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-foreground">Smart TVs</label>
                  <input
                    type="number"
                    min="0"
                    value={tvs}
                    onChange={(e) => setTvs(parseInt(e.target.value) || 0)}
                    className="mt-1 w-full rounded-xl border border-border bg-slate-50 p-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-foreground">Gaming Consoles</label>
                  <input
                    type="number"
                    min="0"
                    value={consoles}
                    onChange={(e) => setConsoles(parseInt(e.target.value) || 0)}
                    className="mt-1 w-full rounded-xl border border-border bg-slate-50 p-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Checker Output Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/50 p-6 sm:p-8">
                <h4 className="text-base font-bold text-foreground">Required Dongles Summary:</h4>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                    <span>Total Simultaneous Devices:</span>
                    <span className="text-lg">{totalDevices}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-semibold text-emerald-700 border-t border-cyan-200 pt-3">
                    <span>Included in LumenFi Kit:</span>
                    <span className="text-lg">{donglesIncluded}</span>
                  </div>

                  {extraDonglesNeeded > 0 ? (
                    <div className="flex items-center justify-between text-sm font-bold text-amber-700 border-t border-cyan-200 pt-3">
                      <span>Extra Dongles Needed:</span>
                      <span className="text-xl">{extraDonglesNeeded}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-bold text-emerald-700 border-t border-cyan-200 pt-3">
                      <CheckCircle2 className="h-5 w-5" /> You are fully covered by the included kit!
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-cyan-200 pt-4 text-xs text-muted-foreground">
                  Note: Dongles connect via standard USB-C or USB-A ports. Most modern phones, laptops, and consoles support direct USB data networking.
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <h3 className="text-xl font-bold text-white">Safety and Compliance</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                "The primary value proposition of LiFi in oil and gas is intrinsically safe technology. Unlike Wi-Fi or cellular signals, light does not create sparks, making it ideal for Zone 0, 1, and 2 hazardous areas where explosive gases may be present."
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
              <h3 className="text-xl font-bold text-white">Operational Efficiency</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                "Highlights the dual benefit of illumination and data transmission. By using existing lighting infrastructure to transmit data, RC LiFi helps clients reduce cabling costs and latency while enabling real-time monitoring of drills, rigs, and refineries."
              </p>
            </div>
            <div className="mt-6 border-t border-slate-800 pt-4 text-xs font-semibold text-cyan-400 flex items-center gap-2">
              <Check className="h-4 w-4" /> Real-time Telemetry & Reduced Cabling
            </div>
          </div>

          {/* Pillar 3: Technological Superiority */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur shadow-xl hover:border-blue-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Technological Superiority</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                "Thrives where traditional radio frequencies cannot, addressing the specific pain point of the industry: the interference and restrictions placed on RF (Radio Frequency) devices in sensitive exploration and production sites."
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
                    <a
                      href="#contact"
                      className="inline-flex justify-center w-full items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:bg-primary/90"
                    >
                      Let's Connect
                      <ArrowRight className="h-4 w-4" />
                    </a>
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

