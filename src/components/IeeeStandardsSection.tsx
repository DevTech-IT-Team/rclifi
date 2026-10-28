import { Link } from "@tanstack/react-router";
import {
  Globe,
  Award,
  Layers,
  Radio,
  ShieldCheck,
  Zap,
  Smartphone,
  Plane,
  Building2,
  HeartPulse,
  Factory,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Lock,
  ArrowRight,
} from "lucide-react";

const TECHNICAL_ADVANTAGES = [
  {
    icon: Radio,
    title: "Reduced Radio-Frequency Congestion",
    badge: "10,000× Spectrum Capacity",
    highlight: "Unclogging the Saturated 2.4 / 5 / 6 GHz Bands",
    description:
      "Modern Wi-Fi is choked by billions of smartphones, IoT gadgets, and neighbor routers competing for limited radio spectrum. Li-Fi operates in the unregulated optical spectrum (infrared and visible light) spanning over 400 Terahertz—providing more than 10,000 times the total bandwidth capacity of the entire radio frequency spectrum combined.",
    benefits: [
      "Zero interference with Wi-Fi, 5G, Bluetooth, or radar",
      "Immune to microwave, motor, and industrial RF noise",
      "Massive multi-user density without throughput collapse",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Physical-Layer Security via Light",
    badge: "Room-Confined PHY Layer",
    highlight: "Light Cannot Penetrate Opaque Walls",
    description:
      "Traditional Wi-Fi radiates through drywall, windows, and floors into public streets and parking lots, inviting packet sniffing and drive-by attacks. Light is completely blocked by opaque surfaces. If an attacker cannot see into your room, they physically cannot capture or inject data into your network stream.",
    benefits: [
      "Eliminates remote wardriving and RF sniffing",
      "Physical boundary enforcement for SCIFs and boardrooms",
      "No signal bleed between adjacent apartments or offices",
    ],
  },
  {
    icon: Zap,
    title: "Deterministic Low-Latency Transmission",
    badge: "< 1 ms Ping Response",
    highlight: "Collision-Free Optical Wireless Channel",
    description:
      "Standard Wi-Fi relies on contention and back-off algorithms that introduce jitter and ping spikes during traffic surges. Li-Fi's direct optical line-of-sight communication delivers deterministic, sub-millisecond latencies with virtually zero packet loss, critical for real-time telemetry, robotics, and competitive gaming.",
    benefits: [
      "Sub-millisecond round-trip packet response",
      "Zero ping spikes during multi-device streaming",
      "Real-time synchronization for robotics and VR/AR",
    ],
  },
];

const FUTURE_APPLICATIONS = [
  {
    icon: Smartphone,
    title: "Consumer Electronics",
    subtitle: "Smartphones, Laptops & AR/VR",
    description:
      "With IEEE 802.11bb standardization, leading silicon manufacturers can embed native optical receivers into smartphones, tablets, laptops, and ultra-low-latency AR/VR headsets, making LiFi as ubiquitous as Wi-Fi.",
  },
  {
    icon: Plane,
    title: "Public Spaces & Aviation",
    subtitle: "High-Density Lounges & Aircraft Cabins",
    description:
      "LiFi provides dedicated gigabit internet to every passenger seat on commercial flights without generating electromagnetic interference that could affect sensitive avionics and flight control systems.",
  },
  {
    icon: Building2,
    title: "Secure Environments",
    subtitle: "Defense, SCIFs & Corporate Boardrooms",
    description:
      "Government command posts, intelligence SCIF facilities, and legal boardrooms where radio transmitters and cellular devices are strictly banned for national security and intellectual property protection.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Hospitals",
    subtitle: "Operating Rooms, MRI Suites & ICUs",
    description:
      "Medical facilities require zero electromagnetic interference. LiFi safely enables high-speed transmission of MRI scans, robotic surgery telemetry, and real-time patient biometrics without RF risks.",
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    subtitle: "Robotics, AGVs & Hazardous Plants",
    description:
      "Automated guided vehicles (AGVs), robotic assembly lines, and explosive oil & gas environments where RF sparks are hazardous and electromagnetic noise from heavy machinery disrupts conventional wireless.",
  },
];

export function IeeeStandardsSection() {
  return (
    <section id="standards" className="relative bg-white py-24 sm:py-32 border-y border-border/60 scroll-mt-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-10 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-10 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 space-y-20">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
            <Globe className="h-3.5 w-3.5" />
            <span>Global Engineering Standards</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            IEEE & The IEEE 802.11bb Standard
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Optical wireless communication is not an experimental concept—it is a globally recognized, standardized networking protocol operating alongside Wi-Fi and Ethernet.
          </p>
        </div>

        {/* 1. What is IEEE? & What is IEEE 802.11bb? Side-by-Side Dual Pillars */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pillar A: What is IEEE? */}
          <div className="relative rounded-3xl border border-border bg-slate-50/70 p-8 sm:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-soft">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                  Global Authority
                </span>
                <h3 className="text-2xl font-black text-foreground">
                  What is IEEE?
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              The <strong className="text-foreground">Institute of Electrical and Electronics Engineers (IEEE)</strong> is the world’s largest technical professional organization dedicated to advancing technology for humanity. With over 420,000 members across 160+ countries, IEEE is the preeminent global body responsible for defining the networking standards that run our modern digital world.
            </p>

            <div className="space-y-3.5 border-t border-border/80 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground">The Architects of Modern Connectivity:</strong> IEEE established both <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-xs font-mono font-semibold text-slate-800">IEEE 802.3</code> (Ethernet) and <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-xs font-mono font-semibold text-slate-800">IEEE 802.11</code> (Wi-Fi).
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground">Guaranteed Global Interoperability:</strong> IEEE standards ensure that devices from thousands of independent vendors work together seamlessly without proprietary walled gardens.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground">Rigorous Consensus Process:</strong> Developed over years of peer review and testing by the world's foremost telecommunication scientists and industry leaders.
                </div>
              </div>
            </div>
          </div>

          {/* Pillar B: What is IEEE 802.11bb? */}
          <div className="relative rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-cyan-500/5 p-8 sm:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-600 text-white shadow-soft">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Ratified Standard (2023)
                </span>
                <h3 className="text-2xl font-black text-foreground">
                  The IEEE 802.11bb Standard
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Ratified globally by the IEEE in 2023, <strong className="text-foreground">IEEE 802.11bb</strong> formally establishes Light Communications (Li-Fi) as an official standard within the world-renowned 802.11 wireless family. It bridges optical transmission with standard enterprise IP networking.
            </p>

            <div className="space-y-3.5 border-t border-border/80 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground">Unified Protocol Stack:</strong> Operates directly with the same MAC (Medium Access Control) layer used by Wi-Fi, allowing Li-Fi to run seamlessly on existing enterprise network controllers and OS network stacks.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground">Why the Standard Matters:</strong> Accelerates mass-market commercial adoption, paving the way for smartphone, PC, and IoT chipmakers to build native Li-Fi silicon.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div className="text-sm">
                  <strong className="text-foreground">Dual-Band Synergy:</strong> Enables hybrid systems where devices automatically switch between RF Wi-Fi and optical LiFi depending on line of sight and security requirements.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Key Technical Advantages Breakdown */}
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
              <Layers className="h-3.5 w-3.5" />
              Technical Superiority
            </span>
            <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Three Game-Changing Technical Advantages
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              How IEEE 802.11bb optical wireless solves the three fundamental bottlenecks of traditional radio-frequency networking.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TECHNICAL_ADVANTAGES.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-slate-50/50 p-8 shadow-card transition-all duration-300 hover:bg-white hover:border-cyan-500/40 hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-soft">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-bold text-cyan-800">
                        {adv.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-foreground">
                      {adv.title}
                    </h4>

                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                      {adv.highlight}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {adv.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/80 pt-4 space-y-2">
                    {adv.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Future Applications Grid */}
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Globe className="h-3.5 w-3.5" />
              Ecosystem Roadmap
            </span>
            <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Future Applications of IEEE 802.11bb
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Standardization is unlocking optical wireless across critical industries worldwide.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FUTURE_APPLICATIONS.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className={`rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-card hover:border-primary/30 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-500/10 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-600">
                        {app.subtitle}
                      </div>
                      <h4 className="text-base font-bold text-foreground">
                        {app.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Informative IEEE Banner Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white shadow-soft relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
                Official Standards Compliance
              </span>
              <h4 className="text-2xl font-bold sm:text-3xl text-white">
                RC LiFi Products Align with IEEE 802.11bb Frameworks
              </h4>
              <p className="text-sm leading-relaxed text-slate-300">
                Our optical wireless hardware and the LumenFi Lamp ecosystem are engineered to conform with IEEE 802.11bb protocols, providing carrier-grade compatibility with existing enterprise switches and routers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/standards"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-300 hover:-translate-y-0.5"
              >
                View Full Standards Deep-Dive
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/academy"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Explore LiFi Academy
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Inquire Deployment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
