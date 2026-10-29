import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  Building,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Info,
  Clock,
  Sparkles,
} from "lucide-react";

export type LegalTab = "privacy" | "terms";

interface LegalPageLayoutProps {
  initialTab?: LegalTab;
}

export function LegalPageLayout({ initialTab = "privacy" }: LegalPageLayoutProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />

      <main className="pb-24">
        {/* Top Hero Banner */}
        <section className="relative isolate overflow-hidden bg-hero pt-36 pb-12 sm:pt-44 sm:pb-16 border-b border-border/60">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl animate-beam" />
            <div
              className="absolute right-10 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl animate-beam"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <Scale className="h-3.5 w-3.5" />
              Legal &amp; Compliance Center
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Privacy Policy &amp; Terms of Service
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transparent, secure, and privacy-first. We safeguard your information with the same uncompromising commitment to security that powers our physical LiFi optical technology.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-600" />
                Last Updated: October 2026
              </span>
              <span>•</span>
              <span>RC LiFi LLC</span>
              <span>•</span>
              <span>Lubbock, Texas</span>
            </div>

            {/* Tab Selector */}
            <div className="mt-10 inline-flex rounded-2xl bg-slate-100 p-1.5 shadow-inner border border-border/80">
              <button
                type="button"
                onClick={() => setActiveTab("privacy")}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${activeTab === "privacy"
                    ? "bg-white text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <ShieldCheck className="h-4 w-4" />
                Privacy Policy
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("terms")}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all ${activeTab === "terms"
                    ? "bg-white text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <FileText className="h-4 w-4" />
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-5xl px-6 mt-12 sm:mt-16">
          {activeTab === "privacy" ? <PrivacyPolicyContent /> : <TermsOfServiceContent />}
        </section>

        {/* Clean CTA Card */}
        <section className="mx-auto max-w-5xl px-6 mt-16">
          <div className="rounded-3xl border border-border/80 bg-slate-900 p-8 sm:p-10 text-white shadow-card">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  Have Questions?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Have questions about our Privacy or Terms?
                </h3>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Reach out to our team with any questions, data requests, or compliance inquiries.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] shrink-0"
              >
                Connect with Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- Privacy Policy Tab Content ---------------- */

function PrivacyPolicyContent() {
  return (
    <div className="rounded-3xl border border-border/80 bg-white p-8 sm:p-12 shadow-sm space-y-12">
      {/* Intro Header */}
      <div className="border-b border-border/70 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          Zero-Sale Data Privacy Guarantee
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          RC LiFi Privacy Policy
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          At RC LiFi ("RC LiFi", "we", "us", or "our"), privacy is not an afterthought—it is the foundational premise of our company. Just as our Light Fidelity (LiFi) hardware restricts communication physically within room boundaries so it cannot bleed into public streets or neighboring units, we apply the exact same uncompromising philosophy to protecting your personal and corporate data.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">1</span>
          Information We Collect
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We collect only information that is strictly necessary to communicate with you, process hardware pre-orders, and provide optical engineering consultation:
        </p>
        <ul className="space-y-2.5 text-sm text-slate-700 pl-4 border-l-2 border-primary/20">
          <li>
            <strong className="text-foreground">Direct Inquiries &amp; Contact:</strong> When you submit a contact form or email us, we collect your full name, email address, telephone number, topic of interest, and the specific details of your inquiry.
          </li>
          <li>
            <strong className="text-foreground">Commercial &amp; Enterprise Requests:</strong> For inquiries regarding SCIF rooms, enterprise installations, or hazardous oil &amp; gas telemetry, we may collect company name, facility location, and technical project scope under non-disclosure protocols.
          </li>
          <li>
            <strong className="text-foreground">Technical Usage Data:</strong> Minimal server logs including IP address, operating system, browser type, referring pages, and interaction timestamps are collected solely for diagnostics, DDoS protection, and site security.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">2</span>
          How We Use Your Information
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We use your collected information strictly for legitimate commercial and engineering purposes:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/80 bg-slate-50/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Inquiry Fulfillment</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To answer questions regarding the LiFi Lamp, Wi-Fi 7 integration, IEEE 802.11bb compatibility, and pre-orders.
            </p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-slate-50/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Engineering Consultation</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To calculate optical link budgets, room coverage parameters, and custom integration feasibility for clients.
            </p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-slate-50/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Direct Updates</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To send direct responses and manufacturing updates on LumenLiFi hardware pre-orders (never spam).
            </p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-slate-50/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Security &amp; Legal Compliance</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To safeguard our infrastructure, detect malicious activity, and comply with state and federal legal obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">3</span>
          Zero-Sale &amp; Information Sharing Policy
        </h3>
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/40 p-5 text-sm text-emerald-950 space-y-2">
          <div className="font-bold flex items-center gap-2 text-emerald-900">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            We Never Sell, Rent, or Monetize Your Personal Data
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            RC LiFi does not participate in third-party data brokerage, advertising networks, or user profiling. We share information only with trusted infrastructure processors (such as secure email servers and Cloudflare hosting) strictly necessary to deliver this site under binding confidentiality agreements.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">4</span>
          Optical Physical-Layer Security &amp; Digital Safeguards
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our online platforms utilize Transport Layer Security (TLS 1.3) with 256-bit AES encryption for all data in transit. Internally, customer communications are stored in cryptographically secured environments with restricted access.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For clients deploying RC LiFi hardware, optical transmission provides physical-layer confinement: data is modulated across 400–800 THz light waves that cannot penetrate drywall, curtains, or opaque glass, permanently neutralizing remote RF packet sniffing.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">5</span>
          Your Rights Under Privacy Laws (CCPA, TDPSA, GDPR)
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Regardless of your jurisdiction, RC LiFi respects your universal right to data dignity. You have the right to:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-700">
          <li className="flex items-center gap-2 rounded-xl border border-border/80 bg-slate-50 p-3">
            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
            Request a copy of any personal data we hold about you.
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-border/80 bg-slate-50 p-3">
            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
            Request prompt correction of inaccurate or outdated details.
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-border/80 bg-slate-50 p-3">
            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
            Request permanent deletion and erasure of your records.
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-border/80 bg-slate-50 p-3">
            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
            Opt out of any non-essential future communication at any time.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="space-y-4 border-t border-border/70 pt-8">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">6</span>
          Contact the Data Privacy Officer
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For any privacy questions, access requests, or regulatory inquiries, contact us directly:
        </p>
        <div className="rounded-2xl border border-border/80 bg-slate-50 p-6 space-y-3 text-sm text-slate-700">
          <div className="font-bold text-foreground">RC LiFi LLC — Privacy Office</div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>7 Briercroft Office Park, Lubbock, Texas 79412, USA</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary shrink-0" />
            <span>Toll-Free: (877) RCLIFI1 / (877) 725-4341 · Direct: 1 (432) 222-7812</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary shrink-0" />
            <span>Robert@rclifi.com </span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Terms of Service Tab Content ---------------- */

function TermsOfServiceContent() {
  return (
    <div className="rounded-3xl border border-border/80 bg-white p-8 sm:p-12 shadow-sm space-y-12">
      {/* Intro Header */}
      <div className="border-b border-border/70 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800">
          <FileText className="h-3.5 w-3.5 text-blue-600" />
          Terms of Use &amp; Service Agreement
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          RC LiFi Terms &amp; Conditions
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Welcome to RC LiFi. These Terms and Conditions ("Terms") govern your access to and use of rclifi.com (the "Website"), as well as all technical whitepapers, architectural specifications, inquiries, and commercial engagement provided by RC LiFi LLC.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">1</span>
          Acceptance of Terms
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          By accessing, browsing, or using this Website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must immediately discontinue use of the Website.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">2</span>
          Proprietary Rights &amp; Intellectual Property
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All materials published on this Website—including but not limited to technical schematics, optical wireless network topologies, patent-pending optical engineering designs, the RC LiFi logo, text, graphics, photographic assets, and software code—are the proprietary intellectual property of RC LiFi LLC and Robert White, protected under United States and international copyright, trademark, and patent laws.
        </p>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-50/50 p-4 text-xs text-amber-900 leading-relaxed">
          <strong>Notice:</strong> No content or schematics from this Website may be copied, reproduced, reverse-engineered, republished, transmitted, or distributed in any form without prior express written permission from RC LiFi leadership.
        </div>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">3</span>
          Hardware Specifications &amp; Pre-Orders
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Specifications described on this site (such as 224 Gbps aggregate throughput, IEEE 802.11bb standardization, and sub-millisecond optical ping rates) represent advanced engineering milestones and theoretical spectrum capabilities under active development.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Pre-orders for the consumer LiFi Lamp processed via our partner storefront at <strong className="text-foreground">lifilumen.com</strong> are subject to the specific purchase terms, fulfillment schedules, manufacturer warranties, and return policies posted on that platform.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">4</span>
          Permitted Use &amp; Code of Conduct
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You agree to use this Website strictly for lawful informational and business inquiries. You agree that you will NOT:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-4 border-l-2 border-primary/20">
          <li>Probe, scan, or test the vulnerability of our servers, hosting infrastructure, or network.</li>
          <li>Use automated scrapers, web crawlers, or data mining tools to extract technical data without written authorization.</li>
          <li>Submit forged, fraudulent, or impersonated contact inquiries.</li>
          <li>Transmit any worms, viruses, or destructive code to our platforms.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">5</span>
          Disclaimer of Warranties
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This Website and all included informational content are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, statutory, or implied. RC LiFi makes no warranties that the site will be uninterrupted, error-free, or entirely free from minor typographical inaccuracies.
        </p>
      </section>

      {/* Section 6 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">6</span>
          Limitation of Liability
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          To the maximum extent permitted by applicable law, in no event shall RC LiFi LLC, its officers, directors, employees, or founder Robert White be liable for any direct, indirect, punitive, incidental, special, or consequential damages resulting from your use of or inability to access this Website.
        </p>
      </section>

      {/* Section 7 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">7</span>
          Governing Law &amp; Jurisdiction
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          These Terms and any dispute or controversy arising out of your use of this Website shall be governed by and construed in accordance with the laws of the <strong className="text-foreground">State of Texas</strong>, United States, without regard to its conflict of law principles. Any legal proceeding shall be instituted exclusively in the state or federal courts located in Lubbock County, Texas.
        </p>
      </section>

      {/* Section 8 */}
      <section className="space-y-4 border-t border-border/70 pt-8">
        <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-mono">8</span>
          Official Notices &amp; Contact Information
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For questions regarding these Terms and Conditions or to request commercial licensing permissions, contact:
        </p>
        <div className="rounded-2xl border border-border/80 bg-slate-50 p-6 space-y-3 text-sm text-slate-700">
          <div className="font-bold text-foreground">RC LiFi LLC — Legal Administration</div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>7 Briercroft Office Park, Lubbock, Texas 79412, USA</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary shrink-0" />
            <span>Toll-Free: (877) RCLIFI1 / (877) 725-4341 · Direct: 1 (432) 222-7812</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary shrink-0" />
            <span>Robert@rclifi.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}

