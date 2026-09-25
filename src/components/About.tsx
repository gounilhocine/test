const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

const stats = [
  { v: "2019", l: "Founded in Paris" },
  { v: "12,400+", l: "Creative teams" },
  { v: "38%", l: "Time saved on average" },
  { v: "4.9/5", l: "Average rating" },
];

const timeline = [
  { y: "2019", t: "A studio problem", d: "FlowSpace was born inside a design studio drowning in spreadsheets, timers and three disconnected tools." },
  { y: "2021", t: "First 1,000 teams", d: "We shipped Kanban boards, live time tracking and invoicing — and creative teams started switching over." },
  { y: "2023", t: "Reports & client portal", d: "Velocity analytics, shared guest portals and GDPR-grade audit trails arrived for growing agencies." },
  { y: "2025", t: "12,000+ teams", d: "Today FlowSpace powers studios, freelancers and product teams across 40 countries." },
];

const values = [
  { i: "ri-focus-3-line", t: "Calm by design", d: "Fewer clicks, less noise. The interface gets out of the way so the work can happen." },
  { i: "ri-shield-check-line", t: "Trust first", d: "Your data stays yours — encrypted, EU-hosted and never sold to anyone." },
  { i: "ri-rocket-2-line", t: "Ship faster", d: "Every feature exists to shorten the distance between an idea and an invoice." },
];

const team = [
  { n: "Sarah Jenkins", r: "Co-founder & Design Lead", who: "SJ", bg: "bg-emerald-600" },
  { n: "Marc Rivière", r: "Co-founder & Product", who: "MR", bg: "bg-emerald-500" },
  { n: "Alex Laurent", r: "Head of Engineering", who: "AL", bg: "bg-slate-700" },
  { n: "Nina Costa", r: "Head of Research", who: "NC", bg: "bg-emerald-600" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5">
            <img src={LOGO} alt="FlowSpace" className="h-11 w-11 object-contain" />
            <span className="font-semibold tracking-tight text-slate-900">FlowSpace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#/" className="hover:text-emerald-600 transition-colors">Home</a>
            <a href="#/about" className="text-emerald-600 font-medium">About</a>
            <a href="#/privacy" className="hover:text-emerald-600 transition-colors">Privacy</a>
            <a href="#/terms" className="hover:text-emerald-600 transition-colors">Terms</a>
            <a href="#/contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>
          <a href="#/app" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
            Open app<i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" alt="Creative team collaborating in a studio" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-medium uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Our story
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">Built by a studio,<br className="hidden md:block" /> <span className="text-emerald-400">for studios</span></h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-slate-200 leading-relaxed">
            FlowSpace started as an internal tool in a small Parisian design studio. Six years later it powers thousands of creative teams who just want to focus on the work.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Our mission</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Remove the friction between an idea and an invoice</h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Creative teams lose hours every week juggling boards, timers, spreadsheets and billing tools. We believe planning, producing and getting paid should live in one calm, beautiful place.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              So we obsess over the details — fast interactions, honest reports and interfaces that respect your attention — and we ship improvements every single week.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#/app" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
                Open the dashboard<i className="ri-arrow-right-line"></i>
              </a>
              <a href="#/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors">
                Talk to us<i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Designers working together" className="rounded-xl h-56 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="rounded-xl h-56 w-full object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Workshop session" className="rounded-xl h-56 w-full object-cover -mt-4" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Studio workspace" className="rounded-xl h-56 w-full object-cover mt-4" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl md:text-4xl font-bold text-white">{s.v}</p>
              <p className="mt-1 text-sm text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Milestones</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">How we got here</h2>
          </div>
          <div className="mt-12 space-y-6">
            {timeline.map((t) => (
              <div key={t.y} className="flex gap-5 bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className="shrink-0 h-12 w-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">{t.y}</div>
                <div>
                  <h3 className="font-semibold text-slate-900">{t.t}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{t.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Values</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What we stand for</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.t} className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className="h-11 w-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <i className={v.i}></i>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{v.t}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Team</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The people behind FlowSpace</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.n} className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className={`mx-auto h-16 w-16 rounded-full ${m.bg} text-white text-lg flex items-center justify-center font-semibold`}>{m.who}</div>
                <p className="mt-4 font-semibold text-slate-900">{m.n}</p>
                <p className="text-xs text-slate-500 mt-0.5">{m.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Join 12,000+ creative teams</h2>
          <p className="mt-4 text-emerald-50">Start free, no credit card required. See why studios choose FlowSpace.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#/app" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-emerald-700 font-medium hover:bg-emerald-50 transition-colors">
              Open the dashboard<i className="ri-arrow-right-line"></i>
            </a>
            <a href="#/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-800/40 border border-white/30 text-white font-medium hover:bg-emerald-800/60 transition-colors">
              Contact us<i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <img src={LOGO} alt="FlowSpace" className="h-10 w-10 object-contain" />
            <span className="text-white font-semibold">FlowSpace</span>
          </div>
          <span className="flex items-center gap-4">
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <a href="#/about" className="hover:text-white transition-colors">About</a>
            <a href="#/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#/contact" className="hover:text-white transition-colors">Contact</a>
          </span>
          <span>(c) 2025 FlowSpace. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
