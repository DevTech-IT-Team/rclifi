import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from "lucide-react";
import { RcLiFiLogo } from "./RcLiFiLogo";

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
