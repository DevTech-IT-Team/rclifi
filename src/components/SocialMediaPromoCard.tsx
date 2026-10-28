import { useState } from "react";
import { Download, Copy, Check, Share2, Sparkles, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";
import { LUMEN } from "../lib/lumen";

export function SocialMediaPromoCard() {
  const [copied, setCopied] = useState(false);
  const [activePlatform, setActivePlatform] = useState<"linkedin" | "x" | "instagram">("linkedin");

  const promoImageSrc = "/lumen/lumenfi-social-promo.jpg";

  const socialCaptions = {
    linkedin: `🚀 Welcome to the Future of High-Performance, Unhackable Wireless: The LumenFi LiFi Lamp! 💡🌐

Say goodbye to congested Wi-Fi radio frequencies and vulnerability to remote snooping. The LumenFi Optical Lamp transforms pure light into gigabit-speed, deterministic optical connectivity.

Key Highlights:
⚡ 1 Gbps+ Optical Throughput — Pure speed for data-intensive workflows
⏱️ Sub-1ms Latency — Eliminates jitter and bufferbloat for real-time applications
🛡️ Impenetrable Physical-Layer Security — Light cannot penetrate walls or be sniffed remotely
🌿 100% RF-Radiation Free — Safe for sensitive healthcare, defense, and living environments
💡 Dual-Role Luminaire — Luxury interior decor lamp with built-in LiFi

RC LiFi is proud to partner with Lumen LiFi and showcase the official LiFi Lamp.

👉 Pre-order your LumenFi LiFi Lamp today: ${LUMEN.product}
Learn more about optical wireless technology: https://rclifi.com

#LiFi #OpticalWireless #CyberSecurity #TechInnovation #NetworkEngineering #IEEE80211bb #SmartLighting #RCLiFi #LumenFi`,

    x: `⚡ Light Speed Ahead: Meet the LumenFi LiFi Lamp by RC LiFi!

💡 1 Gbps+ Optical Speed
⏱️ < 1ms Ultra-Low Latency
🛡️ Data confined to the light beam (Physical Security)
🌿 100% RF-Free

Pre-order the future of optical wireless now: ${LUMEN.product} #LiFi #TechNews #FutureTech`,

    instagram: `Light is the new Wi-Fi. 💡✨ 
Introducing the LumenFi Optical LiFi Lamp — merging luxury interior illumination with military-grade, 1Gbps+ optical wireless connectivity. 

✅ Sub-1ms real-time latency
✅ 100% RF-free & health-safe
✅ Impenetrable physical-layer security

Link in bio to pre-order your LiFi Lamp today!
#LiFi #TechAesthetic #NextGenTech #RCLiFi #SmartHome #CyberSecurity`
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(socialCaptions[activePlatform]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = promoImageSrc;
    link.download = "rclifi-lumenfi-social-promo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-primary/40 p-6 sm:p-10 text-white shadow-2xl">
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left: Graphic Visual Mockup */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="group relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-cyan-400/30 bg-black/60 shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]">
            <img
              src={promoImageSrc}
              alt="LumenFi Lamp Social Media Promotional Visual"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Overlay badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-cyan-300 backdrop-blur-md border border-cyan-400/30">
              <Sparkles className="h-3 w-3" />
              <span>Official RC LiFi Promotional Asset</span>
            </div>

            <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2.5 py-1 text-[10px] font-mono text-slate-300 backdrop-blur-md border border-white/10">
              1080 × 1080 px · 1:1 Social Format
            </div>
          </div>
        </div>

        {/* Right: Controls & Social Post Toolkit */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Share2 className="h-3.5 w-3.5" />
              Company Social Media Showcase
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Promotional Visual & Ready-to-Post Campaign
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Prepared for RC LiFi's company channels (LinkedIn, X/Twitter, Instagram). Highlight the LumenFi Lamp's revolutionary features with this high-converting marketing creative.
            </p>
          </div>

          {/* Platform Tab Selector */}
          <div className="flex items-center gap-2 rounded-xl bg-slate-900/90 p-1.5 border border-slate-800">
            <button
              onClick={() => setActivePlatform("linkedin")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
                activePlatform === "linkedin"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={() => setActivePlatform("x")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
                activePlatform === "x"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Twitter className="h-3.5 w-3.5" />
              <span>X (Twitter)</span>
            </button>
            <button
              onClick={() => setActivePlatform("instagram")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
                activePlatform === "instagram"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>Instagram</span>
            </button>
          </div>

          {/* Caption Preview Box */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-xs leading-relaxed text-slate-300">
            <div className="max-h-36 overflow-y-auto whitespace-pre-line pr-2 text-[11px] sm:text-xs scrollbar-thin">
              {socialCaptions[activePlatform]}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px]">
              <span className="text-slate-400">
                {activePlatform === "linkedin" ? "Professional Network Format" : activePlatform === "x" ? "Short-Form Microblogging" : "Engagement Caption & Hashtags"}
              </span>
              <button
                onClick={handleCopyCaption}
                className="inline-flex items-center gap-1.5 font-sans font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Caption Copied!" : "Copy Caption"}</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              <Download className="h-4 w-4" />
              Download High-Res Graphic
            </button>

            <button
              onClick={handleCopyCaption}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-slate-700"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-cyan-300" />}
              <span>{copied ? "Copied to Clipboard" : "Copy Post Text"}</span>
            </button>

            <a
              href={LUMEN.product}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors ml-auto"
            >
              <span>View Product Link</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
