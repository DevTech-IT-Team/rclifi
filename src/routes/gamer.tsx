import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Gamepad2, Zap, ShieldCheck, Wifi, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/gamer")({
  component: GamerPage,
});

const SUPPORTED_GAMES = [
  {
    id: 1,
    title: "Grand Theft Auto VI",
    description: "Download massive map updates in seconds and experience the bustling streets of Leonida with zero multiplayer lag.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Call of Duty: Warzone",
    description: "In battle royale, milliseconds matter. LiFi ensures your hit registration is immediate with zero ping spikes.",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    description: "Stream high-fidelity assets without stuttering. Ensure your connection keeps up with next-gen graphics.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Valorant",
    description: "Get the ultimate competitive edge. Uninterrupted optical wireless means no more dropping packets mid-firefight.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
  },
];

function GamerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/gta6-hero.jpg" 
              alt="Next-Gen Gaming Environment" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-black text-sm font-bold tracking-widest uppercase shadow-glow">
              <Gamepad2 className="w-4 h-4" />
              <span>Gaming Powered by Light</span>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl mx-auto inline-block">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg mb-4">
                Play Without Limits
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/95 font-medium drop-shadow-md">
                Experience ultra-smooth, zero-latency gaming. With RC LiFi, you get optical speeds and zero interference for the most demanding open-world and competitive multiplayer titles.
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
                <h3 className="text-xl font-bold mb-3">Zero Latency</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Radio waves get congested. Light doesn't. Enjoy near-zero ping times for instantaneous reaction speeds in competitive matches.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Interference</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Microwaves, neighbor's routers, and bluetooth devices won't disrupt your connection. Your LiFi connection is pristine and uninterrupted.
                </p>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Maximum Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If the light is contained in your gaming room, so is your network data. Say goodbye to DDoS vulnerabilities and local network snooping.
                </p>
              </div>
           </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Feed: Games Grid */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border-b pb-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Experience Seamless Gameplay</h2>
              <p className="text-muted-foreground mt-2">Dominate these massive worlds and fast-paced arenas with the power of light.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUPPORTED_GAMES.map((game) => (
                <article key={game.id} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">LiFi Verified</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {game.description}
                    </p>
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
                Upgrade your gaming setup with RC LiFi. Experience light-speed downloads and the lowest latency possible for competitive play.
              </p>
              <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-soft relative z-10 flex items-center justify-center gap-2 group">
                Order Your Kit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
