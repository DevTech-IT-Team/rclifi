import { ExternalLink } from "lucide-react";
import { LUMEN } from "../lib/lumen";

export function LumenFiBanner() {
  return (
    <section id="lumenfi" className="relative bg-white scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-r from-slate-950 via-slate-900 to-primary text-white shadow-soft">
          <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-10">
            <div className="flex flex-1 items-start gap-5 sm:items-center">
              <img
                src={LUMEN.poleImage}
                alt="LumenFi Lifi Pillar"
                className="h-24 w-20 shrink-0 rounded-2xl object-cover object-[center_15%] ring-1 ring-white/20 sm:h-28 sm:w-24"
              />
              <div className="min-w-0 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Shop LumenFi · Authorized reseller
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Order the Lifi Pillar on LumenLiFi
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-slate-300">
                  RC LiFi showcases the product. Purchases and pre-orders are completed on the official LumenFi store.
                </p>
              </div>
            </div>

            <a
              href={LUMEN.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-all hover:-translate-y-0.5 hover:bg-cyan-300 lg:self-center"
            >
              Pre-Order Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
