import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Globe,
  Award,
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
  Layers,
  ArrowRight,
  HelpCircle,
  Activity,
  Lock,
} from "lucide-react";
import { LUMEN } from "../lib/lumen";

export const Route = createFileRoute("/standards")({
  component: StandardsPage,
});

const TECHNICAL_ADVANTAGES = [
  {
    icon: Radio,
    title: "Reduced Radio-Frequency Congestion",
    badge: "10,000× Spectrum Capacity",
    highlight: "Unclogging the Saturated 2.4 / 5 / 6 GHz Bands",
    description:
      "Modern Wi-Fi is choked by billions of smartphones, IoT devices, and neighboring routers competing for limited radio frequency spectrum. Li-Fi operates in the vast, unregulated optical spectrum (infrared and visible light) spanning over 400 Terahertz—providing more than 10,000 times the total bandwidth capacity of the entire radio frequency spectrum combined.",
    benefits: [
      "Zero interference with Wi-Fi, 5G, Bluetooth, or radar",
      "Immune to microwave, elevator motor, and industrial RF noise",
      "Massive multi-user density without throughput collapse",
      "Virtually limitless optical spectrum headroom",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Physical-Layer Security via Light",
    badge: "Room-Confined PHY Layer",
    highlight: "Light Cannot Penetrate Opaque Walls",
    description:
      "Traditional Wi-Fi radiates through drywall, windows, and floors into public corridors and parking lots, inviting remote packet sniffing and drive-by attacks. Light is completely blocked by opaque surfaces. If an attacker cannot see into your room, they physically cannot capture or inject data into your network stream.",
    benefits: [
      "Eliminates remote wardriving and RF sniffing",
      "Physical boundary enforcement for SCIFs and executive boardrooms",
      "Zero signal bleed between adjacent offices or hotel rooms",
      "Hardware-enforced access boundary at the speed of light",
    ],
  },
  {
    icon: Zap,
    title: "Deterministic Low-Latency Transmission",
    badge: "< 1 ms Ping Response",
    highlight: "Collision-Free Optical Wireless Channel",
    description:
      "Standard Wi-Fi relies on contention and back-off algorithms (CSMA/CA) that introduce jitter and ping spikes during traffic surges. Li-Fi's direct optical line-of-sight communication delivers deterministic, sub-millisecond latencies with virtually zero packet loss, critical for real-time telemetry, pro gaming, robotics, and cloud computing.",
    benefits: [
      "Sub-millisecond round-trip packet response",
      "Zero ping spikes during multi-device 4K/8K streaming",
      "Real-time microsecond synchronization for robotics and VR/AR",
      "Deterministic data flow without bufferbloat",
    ],
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Transmission Medium",
    wifi: "Radio Frequency (2.4 GHz, 5 GHz, 6 GHz)",
    lifi: "Light Waves (Near-Infrared & Visible Light: 400–800 THz)",
    winner: "LiFi (10,000x wider bandwidth spectrum)",
  },
  {
    feature: "Signal Penetration & Security",
    wifi: "Leans through walls, floors, and windows (vulnerable to external interception)",
    lifi: "Strictly confined to the illuminated room (physically blocked by walls)",
    winner: "LiFi (Impenetrable physical-layer containment)",
  },
  {
    feature: "Electromagnetic Interference",
    wifi: "Susceptible to microwaves, radar, medical gear, and heavy motors",
    lifi: "100% immune to electromagnetic radio interference (EMI)",
    winner: "LiFi (Ideal for hospitals and industrial plants)",
  },
  {
    feature: "Round-Trip Latency",
    wifi: "Variable (10ms – 60ms+ with jitter and bufferbloat under load)",
    lifi: "Deterministic (< 1ms sub-millisecond response)",
    winner: "LiFi (Instantaneous response for gaming and robotics)",
  },
  {
    feature: "RF Radiation Exposure",
    wifi: "Continuous radio-frequency electromagnetic emission",
    lifi: "Zero RF radiation; biocompatible and health-safe",
    winner: "LiFi (Safe for bedrooms, nurseries, and clinics)",
  },
  {
    feature: "Mobility & Coverage Range",
    wifi: "Non-line-of-sight across multiple rooms (whole-home)",
    lifi: "Line-of-sight cone within the illuminated cell (room-by-room)",
    winner: "Hybrid (Wi-Fi for roaming, LiFi for high-performance zones)",
  },
];

const FUTURE_APPLICATIONS = [
  {
    icon: Smartphone,
    title: "Consumer Electronics",
    subtitle: "Smartphones, Laptops & AR/VR Headsets",
    description:
      "With IEEE 802.11bb standardization, major silicon fabricators (Qualcomm, MediaTek, Intel) can integrate native optical photodiode transceivers directly into future mobile chipsets, enabling universal plug-free gigabit wireless for consumer devices.",
  },
  {
    icon: Plane,
    title: "Public Spaces & Commercial Aviation",
    subtitle: "Aircraft Cabins, High-Density Terminals & Trains",
    description:
      "LiFi provides dedicated gigabit internet to every passenger seat in commercial aircraft cabins without generating electromagnetic fields that could interfere with sensitive navigation instrumentation or cockpit avionics.",
  },
  {
    icon: Building2,
    title: "Secure Environments",
    subtitle: "Government SCIFs, Defense & Boardrooms",
    description:
      "Military command centers, intelligence agencies, and corporate executive suites where radio-frequency emissions are strictly prohibited to prevent espionage and satisfy strict TEMPEST physical security requirements.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Hospitals",
    subtitle: "Operating Rooms, MRI Suites & Intensive Care",
    description:
      "Modern surgical theaters and diagnostic imaging suites prohibit RF Wi-Fi due to electromagnetic disruption of biometric monitoring equipment. LiFi provides high-speed optical telemetry without RF hazards.",
  },
  {
    icon: Factory,
    title: "Industrial Automation & Robotics",
    subtitle: "Automated Guided Vehicles (AGVs) & Cleanrooms",
    description:
      "Industrial robotic assembly lines and chemical processing facilities require optical wireless to prevent electrical arcing/sparks and avoid the extreme electromagnetic noise generated by heavy industrial machinery.",
  },
];

const FAQS = [
  {
    q: "Does IEEE 802.11bb replace Wi-Fi?",
    a: "No. IEEE 802.11bb is designed to complement Wi-Fi rather than replace it. Because it operates within the same 802.11 protocol family, devices can seamlessly utilize a hybrid architecture—using Wi-Fi for general whole-building roaming and switching to Li-Fi for extreme speed, zero latency, and absolute security inside specific rooms.",
  },
  {
    q: "What optical wavelengths are used by IEEE 802.11bb?",
    a: "The IEEE 802.11bb standard specifies operation in the 800 nm to 1000 nm optical band (near-infrared) as well as visible light (380 nm to 750 nm). Near-infrared is invisible to human eyes, allowing gigabit optical networking even when room lights are dimmed or switched off at night.",
  },
  {
    q: "How does the 802.11bb standard support integration with existing IT infrastructure?",
    a: "Because IEEE 802.11bb uses the standard 802.11 Medium Access Control (MAC) layer, enterprise network controllers, routers, RADIUS authentication servers, and operating systems (Windows, macOS, Linux, iOS, Android) recognize Li-Fi access points as standard 802.11 interfaces without requiring proprietary networking software.",
  },
  {
    q: "Why is physical-layer security so critical in 802.11bb?",
    a: "In traditional Wi-Fi, security relies entirely on mathematical encryption (such as WPA3), which is vulnerable to protocol bugs, credential theft, and future quantum computing decryption. Li-Fi introduces physical-layer security: optical signals cannot penetrate walls, so unauthorized eavesdropping from outside the room is physically impossible regardless of computing power.",
  },
];

function StandardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />

      <main className="pt-36 sm:pt-40 pb-24">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-hero bg-checkerboard pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-border/60">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl animate-beam" />
            <div
              className="absolute right-10 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl animate-beam"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 text-center flex flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary backdrop-blur shadow-sm animate-fade-up">
              <Globe className="h-3.5 w-3.5 text-cyan-600" />
              <span>Global Protocol Foundation · IEEE 802.11bb</span>
            </div>

            <h1
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-4xl leading-[1.1] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              The Standard for Optical Wireless:{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                IEEE 802.11bb
              </span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Optical wireless communication is a globally ratified, standardized technology operating alongside Wi-Fi and Ethernet. Discover how IEEE 802.11bb unites optical data transmission with existing enterprise networking architectures.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#advantages"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
              >
                Key Technical Advantages
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-secondary hover:border-primary/30"
              >
                Wi-Fi vs. 802.11bb Comparison
              </a>
              <a
                href="#applications"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-50 px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-cyan-100"
              >
                Future Industry Applications
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="rounded-2xl border border-border bg-white/80 p-4 backdrop-blur shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">2023</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Ratified by IEEE</div>
              </div>
              <div className="rounded-2xl border border-border bg-white/80 p-4 backdrop-blur shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 font-mono">400+ THz</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Optical Spectrum</div>
              </div>
              <div className="rounded-2xl border border-border bg-white/80 p-4 backdrop-blur shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">&lt; 1 ms</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Deterministic Latency</div>
              </div>
              <div className="rounded-2xl border border-border bg-white/80 p-4 backdrop-blur shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">100%</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Physical Security</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Pillar: What is IEEE? & What is IEEE 802.11bb? */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Pillar 1: What is IEEE? */}
            <div className="relative rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-soft">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                      Global Governing Body
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                      What is IEEE?
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-6">
                  The <strong className="text-foreground">Institute of Electrical and Electronics Engineers (IEEE)</strong> is the world’s largest technical professional organization, uniting over <strong className="text-foreground">420,000 engineers, scientists, and technology leaders</strong> across 160+ countries.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  IEEE is the foundational governing authority responsible for establishing the global technical standards that power the modern digital economy. Without IEEE standardization, devices from different manufacturers worldwide would not be able to communicate.
                </p>

                <div className="space-y-3.5 border-t border-border/80 pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-foreground">Architects of Modern Networking:</strong> IEEE created both <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-slate-800">IEEE 802.3</code> (Ethernet) and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-slate-800">IEEE 802.11</code> (Wi-Fi).
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-foreground">Neutral Open Standards:</strong> Prevents single-vendor proprietary monopolies, ensuring global interoperability across Apple, Samsung, Intel, Cisco, and beyond.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-foreground">Decades of Proven Governance:</strong> Decades of rigorous scientific peer review ensure enterprise-grade safety, security, and global compatibility.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground flex items-center justify-between">
                <span>Learn more at official IEEE portal</span>
                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-1"
                >
                  ieee.org <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Pillar 2: The IEEE 802.11bb Standard */}
            <div className="relative rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-cyan-500/5 p-8 sm:p-10 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-600 text-white shadow-soft">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Ratified Worldwide in 2023
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                      The IEEE 802.11bb Standard
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-6">
                  Ratified globally by the IEEE 802.11 Working Group in 2023, <strong className="text-foreground">IEEE 802.11bb</strong> officially defines the physical layer (PHY) and system architectures for Light Communications (LiFi), integrating optical transmission into the world's most dominant wireless standard family.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  By standardizing light transmission at the MAC layer, IEEE 802.11bb enables Li-Fi to operate alongside Wi-Fi, Ethernet, and 5G using existing operating system networking stacks and enterprise controllers.
                </p>

                <div className="space-y-3.5 border-t border-border/80 pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-foreground">Unified 802.11 Protocol Stack:</strong> Reuses the proven Medium Access Control (MAC) layer, making Li-Fi natively compatible with existing network software.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-foreground">Accelerates Commercial Silicon:</strong> Enables chipmakers to integrate optical transceivers alongside standard Wi-Fi/Bluetooth baseband processors in future devices.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-foreground">Seamless Enterprise Roaming:</strong> Devices can dynamically transition between RF Wi-Fi coverage and high-security Li-Fi cells without dropping active sessions.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground flex items-center justify-between">
                <span>IEEE 802.11bb Working Group</span>
                <span className="font-mono font-bold text-primary">Status: Active & Ratified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Three Core Technical Advantages */}
        <section id="advantages" className="max-w-7xl mx-auto px-6 mt-24 scroll-mt-28 space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
              <Layers className="h-3.5 w-3.5" />
              Technical Superiority
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Three Breakthrough Technical Advantages
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              How IEEE 802.11bb optical wireless solves the three fundamental physical bottlenecks of traditional radio-frequency networking.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TECHNICAL_ADVANTAGES.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1.5"
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

                    <h3 className="text-xl font-bold text-foreground">
                      {adv.title}
                    </h3>

                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                      {adv.highlight}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {adv.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/80 pt-4 space-y-2">
                    {adv.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/85 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed Comparison Table: Wi-Fi vs IEEE 802.11bb */}
        <section id="comparison" className="max-w-7xl mx-auto px-6 mt-24 scroll-mt-28 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Activity className="h-3.5 w-3.5" />
              Side-by-Side Analysis
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Wi-Fi (RF) vs. IEEE 802.11bb (LiFi)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Examining the foundational physical and operational differences between traditional radio waves and optical wireless transmission.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-card">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-slate-50/75">
                  <th className="p-4 sm:p-5 font-bold text-foreground">Technical Feature</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-700">Traditional Wi-Fi (RF)</th>
                  <th className="p-4 sm:p-5 font-bold text-cyan-800 bg-cyan-50/40">IEEE 802.11bb (LiFi)</th>
                  <th className="p-4 sm:p-5 font-bold text-foreground hidden md:table-cell">Strategic Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-foreground">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground text-xs sm:text-sm">
                      {row.wifi}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-foreground bg-cyan-50/20 text-xs sm:text-sm">
                      <span className="text-cyan-900 font-semibold">{row.lifi}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-xs text-primary font-medium hidden md:table-cell">
                      {row.winner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Future Applications Across 5 Sectors */}
        <section id="applications" className="max-w-7xl mx-auto px-6 mt-24 scroll-mt-28 space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
              <Globe className="h-3.5 w-3.5" />
              Ecosystem Roadmap
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Future Applications of IEEE 802.11bb
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Standardization empowers enterprise adopters and device manufacturers across critical infrastructure sectors worldwide.
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
                      <h3 className="text-base font-bold text-foreground">
                        {app.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto px-6 mt-24 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              Technical Deep-Dive
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions About IEEE 802.11bb
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-start gap-2.5">
                  <span className="text-cyan-600 font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Inquire Call-to-Action Banner */}
        <section className="max-w-7xl mx-auto px-6 mt-24">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-12 text-white shadow-soft relative overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
                  Ready to Deploy IEEE 802.11bb?
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Bring Standardized Optical Wireless to Your Facility
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  RC LiFi assists commercial enterprises, healthcare systems, and defense contractors in designing, deploying, and managing carrier-grade IEEE 802.11bb optical wireless cells.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-300 hover:-translate-y-0.5"
                >
                  Contact Our Systems Engineers
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/academy"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  LiFi Academy Certification
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
