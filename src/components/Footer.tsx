import { MapPin, Phone, Mail, Linkedin, ExternalLink } from "lucide-react";
import { RcLiFiLogo } from "./RcLiFiLogo";
import { LUMEN } from "../lib/lumen";

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/rclifi?s=11",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rc-li-fi-392260442?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "Telegram",
    href: "https://t.me/RCLIFI",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
      </svg>
    ),
  },
];

export function Footer() {
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
            <RcLiFiLogo className="h-14 sm:h-16 w-auto" variant="light" />

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Bridging light-speed LiFi and next-gen Wi-Fi 7. RC LiFi delivers physical-layer security, zero RF congestion, and uncompromised optical wireless performance for homes, executive workspaces, and critical enterprise environments.
            </p>

            <a
              href={LUMEN.product}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300 transition-colors hover:bg-cyan-400/20"
            >
              Explore LiFi Lamp on LumenLiFi
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-105"
                >
                  {icon}
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
                    7 Briercroft Office Park<br />
                    Lubbock, Texas 79412
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
                  <div className="mt-1 text-sm font-semibold text-white">Robert@rclifi.com</div>
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
