import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Gamepad2, Zap, ShieldCheck, Wifi, CheckCircle2, ExternalLink } from "lucide-react";
import { LUMEN } from "../lib/lumen";

export const Route = createFileRoute("/gamer")({
  component: GamerPage,
});

interface GameItem {
  id: number;
  title: string;
  category: "all" | "open-world" | "fps";
  badge: string;
  description: string;
  image: string;
  latencyBenefit: string;
}

const SUPPORTED_GAMES: GameItem[] = [
  {
    id: 1,
    title: "Grand Theft Auto VI (GTA 6)",
    category: "open-world",
    badge: "Next-Gen Open World",
    description:
      "Massive online multiplayer demands uncompromising bandwidth. RC LiFi eliminates asset-streaming stutters, rubberbanding, and server packet delays across Vice City with instantaneous gigabit optical wireless.",
    image: "/gta6-hero.jpg",
    latencyBenefit: "Sub-1ms packet turnaround for 100+ player lobbies",
  },
  {
    id: 2,
    title: "World of Warcraft",
    category: "open-world",
    badge: "MMORPG & Raids",
    description:
      "Flawless raid execution and arena dominance. Zero ping spikes, zero jitter, and deterministic sub-millisecond response during 40-player mythic boss encounters, battlegrounds, and high-stakes PvP.",
    image: "/games/wow-raid.jpg",
    latencyBenefit: "Zero packet loss during high-density raid spell casts",
  },
  {
    id: 3,
    title: "Counter-Strike 2",
    category: "fps",
    badge: "Competitive Esports",
    description:
      "Every frame and millisecond matters. LiFi ensures absolute precision with sub-millisecond latency and pristine tickrate consistency for tier-1 competitive matchmaking.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    latencyBenefit: "Deterministic ping with zero RF interference",
  },
  {
    id: 4,
    title: "Call of Duty: Warzone",
    category: "fps",
    badge: "Battle Royale",
    description:
      "In fast-paced battle royale, milliseconds dictate survival. LiFi ensures your hit registration is immediate with zero micro-stutters across sprawling map zones.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    latencyBenefit: "Instantaneous hit-scan verification & low ping",
  },
  {
    id: 5,
    title: "Valorant",
    category: "fps",
    badge: "Tactical Shooter",
    description:
      "Get the ultimate competitive edge. Uninterrupted optical wireless means no more dropping packets mid-firefight or losing gunfights to Wi-Fi bufferbloat.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    latencyBenefit: "Sub-millisecond optical transport layer",
  },
  {
    id: 6,
    title: "Apex Legends",
    category: "fps",
    badge: "High-Mobility BR",
    description:
      "Experience fast-paced movement, wall-bounces, and intense vertical gunfights without the frustration of packet loss or rubberbanding.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
    latencyBenefit: "Stable 0% packet loss connection",
  },
  {
    id: 7,
    title: "Battlefield 6",
    category: "fps",
    badge: "Combined Arms Warfare",
    description:
      "LiFi powers modern multiplayer gaming with near-zero latency and instant massive-map downloads, guaranteeing seamless connectivity across expansive 128-player combat zones.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    latencyBenefit: "High-bandwidth continuous optical stream",
  },
  {
    id: 8,
    title: "Deadlock",
    category: "fps",
    badge: "Hero Shooter",
    description:
      "LiFi unleashes light-speed precision, delivering near-zero latency, ultra-low ping, and instantaneous reaction speeds for decisive lane dominance.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    latencyBenefit: "Near-zero jitter for frame-perfect abilities",
  },
];

function GamerPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "open-world" | "fps">("all");

  const filteredGames = selectedCategory === "all"
    ? SUPPORTED_GAMES
    : SUPPORTED_GAMES.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />
      
      <main className="pt-36 sm:pt-40 pb-20">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/gta6-hero.jpg" 
              alt="Next-Gen Gaming Environment - GTA 6 & Optical Gaming" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/40 to-black/30" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-glow">
              <Gamepad2 className="w-4 h-4 text-cyan-400" />
              <span>Gaming Powered by Light</span>
            </div>
            
            <div className="bg-black/50 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl mx-auto inline-block max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg mb-4">
                Play Without Limits
              </h1>
              <p className="max-w-2xl mx-auto text-base md:text-xl text-white/95 font-medium drop-shadow-md leading-relaxed">
                Experience ultra-smooth, zero-latency gaming. With RC LiFi, you get optical gigabit throughput and zero interference for the most demanding open-world sagas like <strong className="text-cyan-300">GTA 6</strong>, high-stakes raids in <strong className="text-cyan-300">World of Warcraft</strong>, and pro competitive shooters.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 mt-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zero Latency (<span className="text-cyan-600 font-mono">&lt;1ms</span>)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Radio waves get congested and buffer packets. Light travels in direct line of sight with deterministic sub-millisecond responses for instantaneous reaction speeds.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zero Radio Interference</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Microwaves, neighbor's routers, baby monitors, and bluetooth devices won't disrupt your connection. Your LiFi channel is 100% optical and immune to RF noise.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Maximum Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If light is contained within your gaming room, so is your network traffic. Say goodbye to local network packet sniffing, IP leaks, and wireless exploits.
                </p>
              </div>
           </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Feed: Games Grid */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Featured Gaming Lineup</h2>
                <p className="text-muted-foreground mt-1 text-sm">Dominate massive open worlds, 40-player raids, and competitive arenas with optical light.</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 border border-border">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All ({SUPPORTED_GAMES.length})
                </button>
                <button
                  onClick={() => setSelectedCategory("open-world")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === "open-world"
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Open World & RPG
                </button>
                <button
                  onClick={() => setSelectedCategory("fps")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === "fps"
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Shooters
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGames.map((game) => (
                <article key={game.id} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{game.badge}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-cyan-300 border border-cyan-400/20">
                      LiFi Verified
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="pt-3 border-t border-border/80 flex items-center gap-2 text-xs text-cyan-700 font-semibold">
                      <Zap className="h-3.5 w-3.5 shrink-0" />
                      <span>{game.latencyBenefit}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap className="w-32 h-32 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground border-b pb-3 mb-4 flex items-center gap-2 relative z-10">
                <Gamepad2 className="text-primary w-5 h-5" /> Get Connected
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                Upgrade your gaming setup with the official LumenFi LiFi Lamp. Pre-order directly on LumenLiFi.
              </p>
              <a
                href={LUMEN.product}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-soft relative z-10 flex items-center justify-center gap-2 group"
              >
                Order LiFi Lamp on LumenLiFi <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground border-b pb-3 mb-4">
                Why Gamers Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  "No WiFi Dropouts Mid-Match", 
                  "Gigabit Download Speeds", 
                  "Unhackable LAN Network", 
                  "Zero Ping Spikes", 
                ].map((tag, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </section>
      </main>

      <Footer />
    </div>
  );
}
