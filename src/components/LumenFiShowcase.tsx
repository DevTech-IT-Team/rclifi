import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ExternalLink,
  ArrowRight,
  Wifi,
  Zap,
  Sparkles,
  Check,
  Info,
  Layers,
  Sun,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { LUMEN } from "../lib/lumen";

type FinishId = "all" | "white" | "black" | "silver" | "gold";
type LookId = "all" | "workspace" | "gaming" | "homeoffice" | "vanity" | "living" | "bedroom";

interface FinishOption {
  id: FinishId;
  label: string;
  colorHex?: string;
}

const FINISH_OPTIONS: FinishOption[] = [
  { id: "all", label: "All Finishes" },
  { id: "white", label: "White", colorHex: "#F4F1EA" },
  { id: "black", label: "Black", colorHex: "#1a2332" },
  { id: "silver", label: "Silver", colorHex: "#C5CED8" },
  { id: "gold", label: "Gold", colorHex: "#C9A227" },
];

interface LookCategory {
  id: LookId;
  label: string;
  badge: string;
  finishName: string;
  finishHex: string;
  headline: string;
  description: string;
  notes: string;
  bulletPoints: string[];
  image: string;
}

const LOOK_CATEGORIES: Record<Exclude<LookId, "all">, LookCategory> = {
  workspace: {
    id: "workspace",
    label: "Workspace",
    badge: "Workspace Inspiration",
    finishName: "White finish",
    finishHex: "#F4F1EA",
    headline: "Turn a corner into a desk",
    description:
      "The LiFi Lamp lights the room and carries your connection. You can make an unused corner work harder — add a standing-desk shelf for your laptop, a lower tray for a router, and use the top beam as a task light.",
    notes:
      "We do not ship hooks or shelves on the Lamp. This look is inspiration: clip on what your home needs, keep cables off the floor, and let the Lamp stay décor and LiFi while the extras make it useful.",
    bulletPoints: [
      "Add a standing-desk shelf for your laptop",
      "Keep a router on a lower tray, off the floor",
      "Hang a hook for headphones beside you",
      "Use the overhead light as a task lamp",
    ],
    image: "/lumen/lamp-workspace.jpg",
  },
  gaming: {
    id: "gaming",
    label: "Gaming",
    badge: "Gaming & Media Setup",
    finishName: "Black finish",
    finishHex: "#1a2332",
    headline: "Zero ping spikes for your battlestation",
    description:
      "In fast-paced competitive multiplayer, milliseconds matter. Light travels with deterministic sub-millisecond response, eliminating radio frequency congestion and packet jitter from household devices.",
    notes:
      "Position the LiFi Lamp beside your gaming desk or television console. Enjoy unthrottled optical wireless bandwidth and pristine tickrate reliability.",
    bulletPoints: [
      "Sub-1ms deterministic optical ping times",
      "Zero interference from neighboring Wi-Fi or microwave noise",
      "Confines gaming network data strictly to your room",
      "Modern stealth aesthetic that complements RGB gaming gear",
    ],
    image: "/lumen/pole-living.png",
  },
  homeoffice: {
    id: "homeoffice",
    label: "Home office",
    badge: "Executive Office",
    finishName: "Silver finish",
    finishHex: "#C5CED8",
    headline: "Executive clarity and confidential data",
    description:
      "High-bandwidth 4K video conferencing, instant multi-gigabyte cloud transfers, and military-grade physical boundary protection for sensitive legal, financial, and executive corporate work.",
    notes:
      "Light cannot pass through walls or windows. Remote wardriving and wireless eavesdropping are physically blocked by room boundaries.",
    bulletPoints: [
      "Fast 1+ Gbps optical throughput for large files",
      "Unbreakable physical-layer room containment",
      "Comfortable ambient LED task lighting for long workdays",
      "Eliminates messy Ethernet cabling across living floors",
    ],
    image: "/lumen/lamp-emitter-detail.jpg",
  },
  vanity: {
    id: "vanity",
    label: "Vanity",
    badge: "Vanity & Dressing",
    finishName: "Gold finish",
    finishHex: "#C9A227",
    headline: "Elegant ambient lighting with hidden speed",
    description:
      "Styled beside a vanity or dressing table, the luxury brushed gold finish delivers flattering, flicker-free ambient lighting while keeping tablets and personal devices connected at light speed.",
    notes:
      "Dual-use architectural design seamlessly blends high-speed data transmission into your interior aesthetic without unsightly antennae or routers.",
    bulletPoints: [
      "Flicker-free high CRI illumination",
      "Luxury warm brushed metallic gold finish",
      "Connects tablets, phones, and smart mirrors",
      "Zero electromagnetic emissions for a clean space",
    ],
    image: "/lumen/pole-living.png",
  },
  living: {
    id: "living",
    label: "Living space",
    badge: "Living Room Decor",
    finishName: "White finish",
    finishHex: "#F4F1EA",
    headline: "Decor that lights your home and connects your family",
    description:
      "Positioned beside your living room sofa or display shelving, the LiFi Lamp creates a warm, welcoming atmosphere while providing an invisible optical wireless broadband hotspot.",
    notes:
      "Ideal for open-plan living rooms where multiple family members stream 4K/8K content simultaneously without throughput drops.",
    bulletPoints: [
      "Replaces clutter with an elegant floor luminaire",
      "Simultaneous 4K/8K multi-stream support",
      "Natural warm lighting spectrum",
      "Complements modern residential architectural design",
    ],
    image: "/lumen/lamp-workspace.jpg",
  },
  bedroom: {
    id: "bedroom",
    label: "Bedroom",
    badge: "Restful Bedroom",
    finishName: "Gold finish",
    finishHex: "#C9A227",
    headline: "100% RF-Free, biocompatible lighting",
    description:
      "Unlike conventional Wi-Fi routers that constantly radiate radio-frequency waves through sleeping quarters, the LiFi Lamp transmits data strictly through light, leaving your bedroom 100% free of electromagnetic RF radiation.",
    notes:
      "Safe, soothing lighting designed for healthy sleep hygiene with zero electromagnetic radiation exposure.",
    bulletPoints: [
      "100% zero radio-frequency electromagnetic radiation",
      "Health-safe for nurseries, bedrooms, and clinics",
      "Soothing dimmable warm ambient light",
      "Turns off connection when lights are switched off",
    ],
    image: "/lumen/pole-living.png",
  },
};

const WHY_LIFI_PILLARS = [
  {
    icon: Wifi,
    title: "WiFi 7 boosted signal",
    description:
      "Stronger coverage across every room — next-gen WiFi 7 keeps your home fast, stable, and ready for more devices.",
    badge: "Next-Gen Wireless",
  },
  {
    icon: Zap,
    title: "LiFi (Optical Internet)",
    description:
      "Internet through light — secure, low-interference connectivity that works alongside WiFi for light-speed performance.",
    badge: "< 1ms Latency",
  },
  {
    icon: Sun,
    title: "Fashionable & decorative",
    description:
      "Designed to look at home in modern interiors — a sleek Lamp that elevates your space while it connects it.",
    badge: "4 Finishes",
  },
  {
    icon: Layers,
    title: "Practical & versatile",
    description:
      "One Lamp, many uses — clip on standing shelves, manage cables, rest screens and smart gear. Built for real rooms and real routines.",
    badge: "Modular Routine",
  },
];

export function LumenFiShowcase() {
  const [selectedFinish, setSelectedFinish] = useState<FinishId>("all");
  const [activeLook, setActiveLook] = useState<LookId>("workspace");

  const currentLook: LookCategory =
    activeLook === "all" ? LOOK_CATEGORIES.workspace : LOOK_CATEGORIES[activeLook];

  return (
    <section id="lifi-lamp" className="relative bg-[#F4F8FC] py-20 sm:py-28 scroll-mt-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 space-y-20">
        {/* 1. Clean Top Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
              Indoor LiFi
            </span>
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-800">
              Pre-Order Available
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0D2240]">
            LiFi Lamp
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[#0D2240]/75 max-w-2xl">
            An indoor decor Lamp for your home — stylish lighting with built-in LiFi technology. Meet the LiFi lamp: a smart light that doubles as a secure, high-speed wireless connection.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={LUMEN.product}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#0D2240] px-7 text-sm font-semibold text-white shadow-soft transition-opacity hover:opacity-90"
            >
              Pre-Order on LumenLiFi
              <ExternalLink className="h-4 w-4" />
            </a>
            {/* <a
              href={LUMEN.product}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-[#0D2240]/20 bg-white px-7 text-sm font-semibold text-[#0D2240] transition-colors hover:border-[#0D2240]/40"
            >
              For More Info Visit lifilumen.com
              <ArrowRight className="h-4 w-4 text-cyan-600" />
            </a> */}
          </div>
        </div>

        {/* 2. LiFi Lamp Catalogue & Finishes */}
        <div className="rounded-3xl border border-[#0D2240]/10 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#0D2240]/10 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                LiFi Lamp Catalogue
              </p>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0D2240] mt-1">
                Make the LiFi Lamp useful at home
              </h3>
            </div>

            {/* Finishes Switcher */}
            <div>
              <p className="text-xs font-semibold text-[#0D2240]/60 mb-2.5">
                Available in 4 finishes
              </p>
              <div className="flex flex-wrap gap-2">
                {FINISH_OPTIONS.map((finish) => {
                  const isSelected = selectedFinish === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${isSelected
                          ? "border-[#0D2240] bg-[#0D2240] text-white shadow-sm"
                          : "border-[#0D2240]/15 bg-white text-[#0D2240]/80 hover:border-[#0D2240]/30"
                        }`}
                    >
                      {finish.colorHex && (
                        <span
                          className="h-3 w-3 shrink-0 rounded-full border border-black/15 shadow-inner"
                          style={{ backgroundColor: finish.colorHex }}
                          aria-hidden="true"
                        />
                      )}
                      <span>{finish.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Room Look Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {(
              [
                { id: "workspace", label: "Workspace" },
                { id: "gaming", label: "Gaming" },
                { id: "homeoffice", label: "Home office" },
                { id: "vanity", label: "Vanity" },
                { id: "living", label: "Living space" },
                { id: "bedroom", label: "Bedroom" },
              ] as const
            ).map((tab) => {
              const isActive = activeLook === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveLook(tab.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${isActive
                      ? "bg-[#0D2240] text-white shadow-sm"
                      : "bg-[#0D2240]/5 text-[#0D2240]/60 hover:text-[#0D2240] hover:bg-[#0D2240]/10"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Look Details & Image Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center pt-2">
            {/* Left Image */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#0D2240]/10 aspect-[4/3] bg-slate-100 shadow-soft">
                <img
                  src={currentLook.image}
                  alt={currentLook.headline}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-[#0D2240]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {currentLook.badge}
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#EBF5FF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0D2240]">
                  {currentLook.label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#0D2240]/70">
                  <span
                    className="h-2.5 w-2.5 rounded-full border border-black/15 shadow-inner"
                    style={{ backgroundColor: currentLook.finishHex }}
                    aria-hidden="true"
                  />
                  <span>{currentLook.finishName}</span>
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D2240]">
                {currentLook.headline}
              </h4>

              <p className="text-sm sm:text-base leading-relaxed text-[#0D2240]/75">
                {currentLook.description}
              </p>

              <p className="text-xs leading-relaxed text-[#0D2240]/60 italic bg-slate-50 p-3 rounded-xl border border-[#0D2240]/8">
                {currentLook.notes}
              </p>

              <ul className="space-y-2 pt-1">
                {currentLook.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#0D2240]/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={LUMEN.product}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D2240] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-soft"
                >
                  Pre-Order Now
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Why LiFi Lamp (4 Clean Cards directly from lifilumen.com) */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D2240]">
              Why LiFi Lamp
            </h3>
            <p className="text-sm sm:text-base text-[#0D2240]/65">
              Home décor that lights your room and connects your devices with LiFi — launching soon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_LIFI_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-[#0D2240]/10 bg-[#0D2240] p-7 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-cyan-300 mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                      {pillar.badge}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1 mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-cyan-300 font-semibold">
                    <span>LumenFi LiFi</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Clean Call to Action & "For More Info" Box */}
        <div className="relative overflow-hidden rounded-3xl border border-[#0D2240]/10 bg-gradient-to-r from-[#0D2240] via-[#143356] to-[#0D2240] p-8 sm:p-12 text-white shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Lumen LiFi Systems
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Dual-Spectrum Optical Wireless &amp; Ambient Lighting in One Column
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/75">
                RC LiFi delivers official Lumen LiFi systems, enterprise engineering support, and deployment across North America. Explore full technical specifications, hardware options, and pre-orders on the official store at{" "}
                <a
                  href={LUMEN.product}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200 font-semibold"
                >
                  lifilumen.com/lifi-lamp
                </a>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={LUMEN.product}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#0D2240] transition-opacity hover:opacity-90 shadow-md"
              >
                Pre-Order LiFi Lamp
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                Contact RC LiFi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
