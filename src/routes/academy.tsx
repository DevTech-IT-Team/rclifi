import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  GraduationCap,
  BookOpen,
  Award,
  MonitorPlay,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan-500/20 selection:text-primary">
      <Header />
      <main>
        <AcademyHero />
        <WhyAcademy />
        {/* <CourseHighlights /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function AcademyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero pt-32 pb-20 sm:pb-28 border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl animate-beam" />
        <div
          className="absolute right-10 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl animate-beam"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur shadow-sm animate-fade-up">
              <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
              Powered by LiFi Lumen
            </span>

            <h1
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Master the Future of{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Optical Wireless
              </span>
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join the LiFi Academy and gain the specialized skills needed to design, deploy, and manage the world's most secure Fast light-based communication networks.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="https://lifilumen.com/academy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
              >
                Enroll Now
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-secondary hover:border-primary/30"
              >
                View Courses
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-white p-4 shadow-card">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 group flex items-center justify-center border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px]" />
                <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="h-20 w-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <GraduationCap className="h-10 w-10 text-cyan-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">LiFi Academy Portal</div>
                  <div className="text-sm text-cyan-200/70 font-mono">CERTIFIED OPTICAL ENGINEER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyAcademy() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      desc: "From basic optical physics to advanced enterprise deployment strategies, our courses cover every aspect of LiFi technology.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Award,
      title: "Industry Certification",
      desc: "Earn globally recognized certifications that validate your expertise in designing intrinsically safe and high-throughput optical networks.",
      color: "from-primary to-blue-800",
    },
    {
      icon: MonitorPlay,
      title: "Hands-on Virtual Labs",
      desc: "Access state-of-the-art simulators to practice beam alignment, POE injection, and security audits without needing physical hardware initially.",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Why Get Certified
          </span>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl text-foreground">
            Pioneering the Next Generation of IT
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As wireless networks evolve toward 6G, the demand for certified optical engineers is skyrocketing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-slate-50 p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 hover:bg-white"
              >
                <div>
                  <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${b.color} text-white shadow-soft`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{b.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CourseHighlights() {
  const courses = [
    {
      title: "Optical Wireless Fundamentals",
      level: "Beginner",
      modules: 4,
      duration: "2 Hours",
      desc: "Understand the core differences between RF (Wi-Fi/5G) and optical communication, focusing on spectrum benefits and physical security.",
    },
    {
      title: "Enterprise LiFi Deployment",
      level: "Intermediate",
      modules: 6,
      duration: "5 Hours",
      desc: "Learn to map ceiling grids, calculate beam coverage, and route POE backhauls for dense enterprise or hospital environments.",
    },
    {
      title: "Hazardous Area Installation (Oil & Gas)",
      level: "Advanced",
      modules: 8,
      duration: "8 Hours",
      desc: "Specialized training for deploying intrinsically safe optical nodes in Zone 0, 1, and 2 explosive environments.",
    },
  ];

  return (
    <section id="courses" className="relative bg-slate-50 py-24 sm:py-32 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Zap className="h-3.5 w-3.5" />
            Curriculum
          </span>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl text-foreground">
            Featured Learning Paths
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="rounded-3xl border border-border bg-white p-8 shadow-card flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${course.level === "Beginner" ? "bg-emerald-100 text-emerald-800" :
                  course.level === "Intermediate" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                  {course.level}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{course.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-grow">
                {course.desc}
              </p>

              <div className="mt-6 border-t border-border pt-4 flex items-center justify-between text-sm font-semibold">
                <span className="flex items-center gap-1 text-slate-500">
                  <BookOpen className="h-4 w-4" /> {course.modules} Modules
                </span>
                <a href="https://lifilumen.com/academy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 flex items-center gap-1">
                  View Syllabus <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-600/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
          <GraduationCap className="h-8 w-8 text-cyan-400" />
        </div>
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          Ready to become a LiFi Expert?
        </h2>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          Take your career to the next level. Join the LiFi Lumen Academy and start your journey towards optical wireless certification today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://lifilumen.com/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform hover:scale-105"
          >
            Create Your Free Account
            <ExternalLink className="h-4 w-4" />
          </a>
          {/* <a
            href="mailto:training@lifilumen.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-slate-700 hover:border-slate-600"
          >
            Contact Training Team
          </a> */}
        </div>
      </div>
    </section>
  );
}
