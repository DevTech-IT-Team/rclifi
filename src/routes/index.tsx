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
  HelpCircle
} from "lucide-react";
import { RcLiFiLogo } from "../components/RcLiFiLogo";

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

/* ---------------- Header ---------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Mission", href: "#mission" },
    { label: "Features", href: "#features" },
    { label: "Demos & Sims", href: "#demos" },
    { label: "Kit & Setup", href: "#kit" },
    { label: "Oil & Gas", href: "#oil-gas" },
    { label: "Founder", href: "#founder" },
    { label: "Contact", href: "#contact" },
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
        <a href="#home" className="group flex items-center gap-2">
          <RcLiFiLogo className="h-10 sm:h-12 w-auto" variant="color" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary group py-1"
            >
              {n.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
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
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
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

/* ---------------- Hero Section ---------------- */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero pt-32 pb-20 sm:pb-28">
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

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur shadow-sm animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
              Light Fidelity (LiFi) — Next-Gen Optical Wireless
            </span>

            <h1
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Unbreakable Optical Connectivity at{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                224Gb/s Throughput
              </span>
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              RC LiFi replaces vulnerable radio frequency (RF) waves with secure, high-speed optical wireless communication: LiFi (Light Fidelity)—confining your data to the room, eliminating interference, and guaranteeing reliability for mission-critical operations.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
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
                View Starter Kit & Setup
              </a>
            </div>

            {/* Stat Row */}
            <div
              className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-border/80 pt-6 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">224Gb/s</div>
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
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-white p-4 shadow-card">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 group">
                <img
                  src="/lifi_light_bg.png"
                  alt="RC LiFi Optical Environment"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Floating Optical Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">LiFi Active Optical Link</span>
                    </div>
                    <span className="text-xs font-bold bg-cyan-500/30 px-2 py-0.5 rounded text-cyan-200">224Gb/s</span>
                  </div>
                  <p className="mt-1 text-xs text-white/80">Data confined 100% inside physical light cone.</p>
                </div>
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
        "Operating at frequencies around 200,000 GHz (200 THz) and extending up to 800,000 GHz, LiFi accesses a spectrum 10,000 times wider than the entire radio frequency range used by Wi-Fi. This vast bandwidth enables data transmission speeds exceeding 100 Gb/s in laboratory settings, offering a solution to the global 'spectrum crunch' and supporting ultra-high-density data environments without interference. Offering peak speeds of 224Gb/s.",
      items: [
        { title: "Spectrum Frequency Range", val: "200,000 GHz (200 THz) – 800,000 GHz" },
        { title: "10,000x Wider Spectrum", val: "Solves global RF spectrum crunch with zero interference" },
        { title: "Peak Speeds of 224Gb/s", val: "224Gb/s Throughput for ultra-high-density data environments" },
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
                className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all ${
                  mode === "wifi"
                    ? "bg-rose-600 text-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Vulnerable Wi-Fi (RF Leakage)
              </button>
              <button
                onClick={() => setMode("lifi")}
                className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all ${
                  mode === "lifi"
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
  const [activeTab, setActiveTab] = useState<"speed" | "media" | "beam">("speed");

  // Speed Sim State
  const [selectedTech, setSelectedTech] = useState<"wifi" | "fiveg" | "lifi">("lifi");

  // Media Sim State
  const [streamResolution, setStreamResolution] = useState<"4K" | "8K">("8K");
  const [activeStreams, setActiveStreams] = useState<number>(12);

  // Beam Sim State
  const [ceilingHeight, setCeilingHeight] = useState<number>(3.0); // meters
  const [beamAngle, setBeamAngle] = useState<number>(60); // degrees

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
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                activeTab === "speed"
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="h-4 w-4" /> Speed & Spectrum
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                activeTab === "media"
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Tv className="h-4 w-4" /> 4K/8K & Gaming
            </button>
            <button
              onClick={() => setActiveTab("beam")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                activeTab === "beam"
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sun className="h-4 w-4" /> Beam & Coverage
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
                  speed: "4.0 Gbps",
                  latency: "10 - 25 ms",
                  spectrum: "24 - 40 GHz",
                  security: "Licensed RF beamforming",
                  color: "border-slate-200 bg-slate-50",
                },
                {
                  id: "lifi",
                  title: "RC LiFi Optical",
                  speed: "224Gb/s Throughput",
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
                  className={`cursor-pointer rounded-2xl border p-6 transition-all ${item.color} ${
                    selectedTech === item.id ? "ring-2 ring-primary" : ""
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
                        className={`px-4 py-2 rounded-xl text-xs font-bold ${
                          streamResolution === "4K" ? "bg-primary text-white" : "bg-slate-100 text-foreground"
                        }`}
                      >
                        4K UHD (25 Mbps per stream)
                      </button>
                      <button
                        onClick={() => setStreamResolution("8K")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold ${
                          streamResolution === "8K" ? "bg-primary text-white" : "bg-slate-100 text-foreground"
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
                      🟢 224Gb/s Optical Backbone handles all {activeStreams} {streamResolution} feeds effortlessly with 99.8% headroom remaining.
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
      title: "USB LiFi Receiver Dongle / Module",
      desc: "Compact optical USB dongle enabling instant high-speed optical network reception for laptops and workstations.",
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
            What's Included in the Kit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything required to deploy your first high-speed optical LiFi cell right out of the box.
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
  // Checker state
  const [roomSize, setRoomSize] = useState<string>("medium");
  const [ceilingType, setCeilingType] = useState<string>("drop");
  const [poeAvailable, setPoeAvailable] = useState<boolean>(true);

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
      desc: "Verify optical alignment via status indicator LEDs and enjoy zero-lag 224Gb/s optical internet.",
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

        {/* Interactive Compatibility & Accessory Checker */}
        <div className="mt-16 rounded-3xl border border-primary/20 bg-white p-8 sm:p-12 shadow-card">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase text-cyan-800">
                <HelpCircle className="h-3.5 w-3.5" />
                Interactive Setup Compatibility Checker
              </div>
              <h3 className="text-2xl font-bold text-foreground">Determine Extra Required Accessories</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Answer a few quick room questions to check if you need extended range lenses or auxiliary POE power switches beyond the standard kit.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-foreground">1. Room Size / Coverage Area</label>
                  <select
                    value={roomSize}
                    onChange={(e) => setRoomSize(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-slate-50 p-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="small">Small Office / Desk Pod (&lt; 250 sq ft)</option>
                    <option value="medium">Conference Room / Office Suite (250 - 600 sq ft)</option>
                    <option value="large">Industrial Facility / High-Ceiling Rig (&gt; 600 sq ft)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">2. Ceiling Architecture</label>
                  <select
                    value={ceilingType}
                    onChange={(e) => setCeilingType(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-slate-50 p-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="drop">Standard Drop Grid Ceiling (T-Bar)</option>
                    <option value="hard">Hard Drywall / Concrete Ceiling</option>
                    <option value="high">High Structural Steel Rafters (&gt; 12ft)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="poe"
                    checked={poeAvailable}
                    onChange={(e) => setPoeAvailable(e.target.checked)}
                    className="h-4 w-4 rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="poe" className="text-xs font-medium text-foreground cursor-pointer">
                    We already have POE+ (Power over Ethernet) network switches installed.
                  </label>
                </div>
              </div>
            </div>

            {/* Checker Output Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/50 p-6 sm:p-8">
                <h4 className="text-base font-bold text-foreground">Recommended Setup Package:</h4>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" /> Standard RC LiFi Starter Kit (Included)
                  </div>

                  {roomSize === "large" && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <CheckCircle2 className="h-5 w-5" /> + 1x Multi-Spot Auxiliary Expansion Transceiver
                    </div>
                  )}

                  {ceilingType === "high" && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <CheckCircle2 className="h-5 w-5" /> + High-Ceiling Focus Optic Reflector Bracket
                    </div>
                  )}

                  {!poeAvailable && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
                      <CheckCircle2 className="h-5 w-5" /> + Standalone Gigabit POE+ Power Injector Wall Adapter
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-cyan-200 pt-4 text-xs text-muted-foreground">
                  Need a custom enterprise architectural site audit? Our technical engineering team provides full spatial optical surveys.
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
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-slate-100 p-4 shadow-card">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200">
                <img
                  src="/founder_placeholder.png"
                  alt="RC LiFi Founder & CEO"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg font-bold">RC LiFi Founder & Visionary</div>
                  <div className="text-xs text-cyan-300 font-mono">Leadership & Technology Architect</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <User className="h-3.5 w-3.5" />
              Leadership Profile
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-foreground leading-tight">
              Meet the Founder
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground italic border-l-4 border-primary pl-4 py-1">
                "We are dedicated to pioneering optical wireless communication, replacing legacy radio spectrum constraints with the uncompromised bandwidth, privacy, and speed of light."
              </p>
              <p>
                [Founder Biography Placeholder: Biography details, background in optical engineering, wireless defense communications, and commercial innovation will be updated here once provided by the client.]
              </p>
              <p>
                Under our leadership team, RC LiFi continues to push boundaries across energy, healthcare, defense, and high-density enterprise environments.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
              >
                Schedule Executive Briefing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer / Contact ---------------- */

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-12">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-20 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6">
            <RcLiFiLogo className="h-12 w-auto" variant="light" />

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Confining your data to the room. Eliminating radio frequency interference. Guaranteeing 224Gb/s optical wireless throughput for mission-critical operations.
            </p>

            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right contact details */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">Contact Information</h3>

            <div className="grid gap-4">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Address</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    3323 N Midland Dr, Suite 113<br />
                    Midland, TX 79707
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:4322227812"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition-all hover:border-cyan-400/50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Business Phone</div>
                  <div className="mt-1 text-sm font-semibold text-white">(432) 222-7812</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:RW@rclifi.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition-all hover:border-cyan-400/50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Email Direct</div>
                  <div className="mt-1 text-sm font-semibold text-white">RW@rclifi.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} RC LiFi. Light Fidelity Wireless Technology. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Patent & IP Notices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
