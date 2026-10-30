import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  User,
  ShieldCheck,
} from "lucide-react";
import { LUMEN } from "../lib/lumen";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const TOPICS = [
  "LiFi Lamp Inquiry",
  "Enterprise & SCIF Security",
  "Oil & Gas Hazardous Zone Telemetry",
  "IEEE 802.11bb Standards",
  "General Question",
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "LiFi Lamp Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "LiFi Lamp Inquiry",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />

      <main className="pt-36 sm:pt-44 pb-24">
        {/* Simple & Clean Header */}
        <section className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Let's Connect
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Have a question about the LiFi Lamp, optical wireless security, or field telemetry? Send us a message and our team will get back to you promptly.
          </p>
        </section>

        {/* Form and Contact Info Grid */}
        <section className="mx-auto max-w-6xl px-6 mt-12 sm:mt-16">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border/80 bg-white p-7 sm:p-10 shadow-card">
                {submitted ? (
                  <div className="text-center py-10 space-y-5 animate-fade-up">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        Message Sent!
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-foreground">{formData.name}</strong>. We have received your message and Robert White or a member of our team will get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-full border border-border bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                        Send a Message
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Fill in your details below and we will respond as soon as possible.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-semibold text-foreground mb-1.5 block">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-slate-50/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold text-foreground mb-1.5 block">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-slate-50/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Phone */}
                      <div>
                        <label className="text-xs font-semibold text-foreground mb-1.5 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(432) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-slate-50/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      {/* Topic */}
                      <div>
                        <label className="text-xs font-semibold text-foreground mb-1.5 block">
                          Topic
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-slate-50/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          {TOPICS.map((topic) => (
                            <option key={topic} value={topic}>
                              {topic}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-semibold text-foreground mb-1.5 block">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you? Tell us about your project, home setup, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-border/80 bg-slate-50/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                        We respect your privacy. Zero spam.
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Column: Direct Contact & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="rounded-3xl border border-border/80 bg-white p-7 sm:p-8 shadow-card">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Robert White</h3>
                    <p className="text-xs font-semibold text-primary">Founder · RC LiFi</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Feel free to reach out directly by phone, email, or by filling out the form.
                </p>

                <div className="space-y-3.5 border-t border-border/70 pt-5">
                  {/* Phone */}
                  {/* Toll-Free Phone */}
                  <a
                    href="tel:4322227812"
                    href="tel:18777254341"
                    className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-slate-50/70 p-3.5 transition-all hover:border-primary/40 hover:bg-white"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Phone
                        Toll-Free Phone
                      </div>
                      <div className="text-sm font-semibold text-foreground">(432) 222-7812</div>
                      <div className="text-sm font-semibold text-foreground">
                        (877) RCLIFI1 <span className="text-muted-foreground font-normal text-xs">/ (877) 725-4341</span>
                      </div>
                    </div>
                  </a>

                  {/* Main Business Phone */}
                  <a
                    href="tel:14322227812"
                    className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-slate-50/70 p-3.5 transition-all hover:border-primary/40 hover:bg-white"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Main Business Phone
                      </div>
                      <div className="text-sm font-semibold text-foreground">1 (432) 222-7812</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:Robert@rclifi.com"
                    className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-slate-50/70 p-3.5 transition-all hover:border-primary/40 hover:bg-white"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Email
                      </div>
                      <div className="text-sm font-semibold text-foreground">Robert@rclifi.com</div>
                    </div>
                  </a>

                  {/* Office HQ */}
                  <div className="flex items-start gap-3.5 rounded-2xl border border-border/80 bg-slate-50/70 p-3.5">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-white mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Office Location
                      </div>
                      <div className="text-xs font-semibold text-foreground mt-0.5 leading-relaxed">
                        7 Briercroft Office Park<br />
                        Lubbock, Texas 79412
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LiFi Lamp Pre-Order Banner */}
              <div className="rounded-3xl border border-border/80 bg-slate-900 p-6 text-white shadow-card space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    Lumen LiFi Hardware
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Pre-Order the LiFi Lamp
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Direct consumer pre-orders for all 4 lamp finishes are available on the official store.
                  </p>
                </div>
                <a
                  href={LUMEN.product}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-transform hover:scale-[1.02]"
                >
                  Visit lifilumen.com
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
