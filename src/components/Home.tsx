import { useState } from "react";

const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

const features = [
  { i: "ri-kanban-view", t: "Kanban Boards", d: "Visualize every sprint and drag tasks from backlog to delivery." },
  { i: "ri-timer-line", t: "Time Tracking", d: "Live timers, billable hours and automatic weekly reports." },
  { i: "ri-receipt-line", t: "Invoicing & Quotes", d: "Generate invoices and quotes, track payments and reminders in a glance." },
  { i: "ri-bar-chart-2-line", t: "Reports & Analytics", d: "Velocity, billing rate and team workload in a single dashboard." },
  { i: "ri-group-line", t: "Team & Guests", d: "Invite clients and collaborators, manage roles and workload." },
  { i: "ri-shield-check-line", t: "Security & Audit", d: "Full action history, access control and GDPR compliance." },
];

const stats = [
  { v: "12,400+", l: "Creative teams" },
  { v: "4.9/5", l: "Average rating" },
  { v: "38%", l: "Time saved" },
  { v: "99.9%", l: "Uptime" },
];

const testimonials = [
  { q: "FlowSpace replaced three tools. Our sprints are finally readable and invoicing happens on its own.", n: "Sarah Jenkins", r: "Lead Designer, Studio Kroma", who: "SJ", bg: "bg-emerald-600" },
  { q: "Time tracking and reports saved us nearly 6 hours a week. Absolutely essential.", n: "Marc Riviere", r: "Product Manager, Nova Retail", who: "MR", bg: "bg-emerald-500" },
  { q: "Clean, fast interface, and our clients love the shared portal. Instant adoption.", n: "Alex Laurent", r: "Full-Stack Developer", who: "AL", bg: "bg-slate-700" },
];

const aiGallery = [
  { src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80", t: "Abstract brand system", d: "AI-generated color and shape exploration for a rebrand." },
  { src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", t: "Product concept render", d: "Photorealistic mockup generated from a text prompt." },
  { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", t: "Editorial illustration", d: "Custom artwork generated for a landing hero." },
  { src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80", t: "3D icon set", d: "Consistent iconography generated in one style." },
  { src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80", t: "UI background", d: "Gradient texture generated for a dashboard." },
  { src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=800&q=80", t: "Campaign visual", d: "Social-ready image generated in seconds." },
];

const plans = [
  { n: "Solo", icon: "ri-user-line", p: 0, d: "For freelancers getting started.", f: ["1 workspace", "3 active projects", "Unlimited time tracking"], cta: "Start for free", hi: false },
  { n: "Pro", icon: "ri-rocket-2-line", p: 19, d: "For studios and small teams.", f: ["Unlimited projects & sprints", "Invoicing & quotes", "Advanced reports", "Client guests"], cta: "Try 14 days", hi: true },
  { n: "Studio", icon: "ri-building-2-line", p: 49, d: "For growing agencies.", f: ["Everything in Pro", "Roles & permissions", "SSO & GDPR audit", "Priority support"], cta: "Contact us", hi: false },
];

const trust = [
  { i: "ri-bank-card-line", t: "No credit card required" },
  { i: "ri-refund-2-line", t: "Cancel anytime" },
  { i: "ri-customer-service-2-line", t: "Human support in 24h" },
];

export default function Home({ onLogin }: { onLogin?: () => void }) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5">
            <img src={LOGO} alt="FlowSpace" className="h-11 w-11 object-contain" />
            <span className="font-semibold tracking-tight text-slate-900">FlowSpace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#stats" className="hover:text-emerald-600 transition-colors">Results</a>
            <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-emerald-600 transition-colors">Testimonials</a>
            <a href="#/blog" className="hover:text-emerald-600 transition-colors">Blog</a>
            <a href="#/about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#/contact" className="text-emerald-600 font-medium">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={onLogin} className="hidden sm:inline-flex px-3.5 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors">Sign in</button>
            <a href="#/app" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
              Open app<i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="Creative team collaborating in a bright modern office" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-medium uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>New - Sprint 14 available
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Manage your creative projects<br className="hidden md:block" /> <span className="text-emerald-400">without friction</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-slate-200 leading-relaxed">
            FlowSpace brings sprints, time tracking, invoicing and collaboration into one elegant workspace. Focus on the work that matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#/app" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors">
              Open the dashboard<i className="ri-arrow-right-line"></i>
            </a>
            <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium transition-colors">
              <i className="ri-play-circle-line"></i>See features
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-300 text-sm">
            <span className="flex items-center gap-2"><i className="ri-check-line text-emerald-400"></i>No credit card</span>
            <span className="flex items-center gap-2"><i className="ri-check-line text-emerald-400"></i>Ready in 2 minutes</span>
            <span className="flex items-center gap-2"><i className="ri-check-line text-emerald-400"></i>Human support</span>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Features</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything your studio needs</h2>
              <p className="mt-4 text-slate-500 leading-relaxed">One tool to plan, produce, invoice and collaborate - built for demanding creative teams.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium"><i className="ri-check-line"></i>Kanban &amp; sprints</span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium"><i className="ri-check-line"></i>Time tracking</span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium"><i className="ri-check-line"></i>Invoicing</span>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Creative team reviewing a project dashboard together" className="w-full h-72 md:h-80 object-cover rounded-2xl border border-slate-200" />
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-white border border-slate-200 rounded-xl shadow-sm px-4 py-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl"><i className="ri-timer-line"></i></div>
                <div>
                  <p className="text-xs text-slate-500">Tracked this week</p>
                  <p className="text-sm font-bold text-slate-900">38h 35m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.t} className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className="h-11 w-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <i className={f.i}></i>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{f.t}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl md:text-4xl font-bold text-white">{s.v}</p>
              <p className="mt-1 text-sm text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">They chose FlowSpace</h2>
            <p className="mt-4 text-slate-500">Trusted by studios, freelancers and product teams across 40 countries.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80" alt="Designer working on a laptop" className="w-full h-52 object-cover rounded-xl border border-slate-200" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Team collaborating around a table" className="w-full h-52 object-cover rounded-xl border border-slate-200" />
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Creative professionals in a meeting" className="w-full h-52 object-cover rounded-xl border border-slate-200" />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.n} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
                <div className="flex gap-0.5 text-amber-400">
                  {[0, 1, 2, 3, 4].map((i) => <i key={i} className="ri-star-fill text-sm"></i>)}
                </div>
                <blockquote className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">"{t.q}"</blockquote>
                <figcaption className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-full ${t.bg} text-white text-xs flex items-center justify-center font-semibold`}>{t.who}</div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{t.n}</p>
                    <p className="text-xs text-slate-500">{t.r}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">AI Visuals</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Images generated by AI</h2>
            <p className="mt-4 text-slate-500">Generate on-brand visuals for your projects without leaving FlowSpace.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiGallery.map((g) => (
              <figure key={g.t} className="group relative overflow-hidden rounded-xl border border-slate-200">
                <img src={g.src} alt={g.t} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider">
                  <i className="ri-sparkling-2-line"></i>AI
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">{g.t}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{g.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-emerald-300/40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-widest shadow-lg shadow-emerald-600/25">
              <i className="ri-price-tag-3-line"></i>Pricing
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">Change or cancel anytime. No commitment, no hidden fees — just one calm workspace for your whole studio.</p>
          </div>

          <div className="mt-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white border border-slate-200 shadow-md shadow-slate-200/60">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? "bg-emerald-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${annual ? "bg-emerald-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
              >
                Annual
              </button>
              <span className="ml-1 mr-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold whitespace-nowrap">Save 20%</span>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((p) => {
              const price = annual ? Math.round(p.p * 0.8) : p.p;
              return (
                <div
                  key={p.n}
                  className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                    p.hi
                      ? "bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-600/10 md:-translate-y-4 md:scale-[1.04]"
                      : "bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  {p.hi && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 rounded-b-lg bg-emerald-600 text-white text-[11px] font-semibold shadow-sm whitespace-nowrap">
                      Most popular
                    </span>
                  )}
                  <div className={`px-7 pt-10 pb-7 ${p.hi ? "bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700" : ""}`}>
                    <div className="flex items-center justify-between">
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-xl ${p.hi ? "bg-white/15 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                        <i className={p.icon}></i>
                      </div>
                      {p.p === 0 && (
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${p.hi ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"}`}>Free</span>
                      )}
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${p.hi ? "text-white" : "text-slate-900"}`}>{p.n}</h3>
                    <p className={`mt-1 text-sm leading-relaxed ${p.hi ? "text-emerald-50" : "text-slate-500"}`}>{p.d}</p>
                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className={`text-6xl font-extrabold tracking-tighter ${p.hi ? "text-white" : "text-slate-900"}`}>${price}</span>
                      <span className={`text-sm font-medium ${p.hi ? "text-emerald-100" : "text-slate-500"}`}>/ mo</span>
                    </div>
                    <p className={`mt-1 text-[11px] ${p.hi ? "text-emerald-100" : "text-slate-400"}`}>
                      {p.p === 0 ? "Free forever" : annual ? "Billed annually · save 20%" : "Billed monthly"}
                    </p>
                  </div>
                  <div className="px-7 pb-8 pt-7 flex flex-col flex-1">
                    <ul className="space-y-4 flex-1">
                      {p.f.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className={`mt-0.5 h-4 w-4 rounded-full flex items-center justify-center shrink-0 ${p.hi ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                            <i className="ri-check-line text-[11px]"></i>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#/app"
                      className={`mt-8 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        p.hi
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      {p.cta}<i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {trust.map((t) => (
              <span key={t.t} className="flex items-center gap-2"><i className={`${t.i} text-emerald-600`}></i>{t.t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Gallery</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Made for creative work</h2>
            <p className="mt-4 text-slate-500">From the first sketch to the final invoice — FlowSpace fits every stage of your studio's workflow.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" alt="Designer sketching ideas on a notebook" className="w-full h-48 md:h-64 object-cover rounded-xl border border-slate-200 hover:shadow-sm transition-shadow" />
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Developer writing code on a laptop" className="w-full h-48 md:h-64 object-cover rounded-xl border border-slate-200 hover:shadow-sm transition-shadow" />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating around laptops" className="w-full h-48 md:h-64 object-cover rounded-xl border border-slate-200 hover:shadow-sm transition-shadow" />
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Business planning with charts and notes" className="w-full h-48 md:h-64 object-cover rounded-xl border border-slate-200 hover:shadow-sm transition-shadow" />
            <img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80" alt="Creative workspace with tools" className="w-full h-48 md:h-64 object-cover rounded-xl border border-slate-200 hover:shadow-sm transition-shadow" />
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" alt="Team meeting in a bright office" className="w-full h-48 md:h-64 object-cover rounded-xl border border-slate-200 hover:shadow-sm transition-shadow" />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80" alt="Creative team celebrating a project launch" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/95 via-emerald-600/90 to-emerald-700/95"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to streamline your projects?</h2>
          <p className="mt-4 text-emerald-50">Join 12,000+ creative teams shipping faster with FlowSpace.</p>
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

      <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-emerald-600/25 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl shadow-emerald-900/50 overflow-hidden">
            <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-emerald-900/30 blur-2xl pointer-events-none"></div>
            <div className="relative max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px] font-semibold uppercase tracking-widest">
                <i className="ri-sparkling-2-line"></i>Newsletter
              </span>
              <h3 className="mt-4 text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">Product tips, delivered monthly</h3>
              <p className="mt-3 text-sm md:text-base text-emerald-50 leading-relaxed">Join 8,000+ creatives getting workflow ideas, feature updates and studio stories. No spam, unsubscribe anytime.</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-emerald-50/90">
                <span className="flex items-center gap-1.5"><i className="ri-check-line"></i>One email a month</span>
                <span className="flex items-center gap-1.5"><i className="ri-check-line"></i>Unsubscribe in one click</span>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full lg:w-auto flex flex-col sm:flex-row gap-2.5 shrink-0">
              <div className="relative">
                <i className="ri-mail-line absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input type="email" required placeholder="you@studio.com" className="w-full sm:w-72 pl-10 pr-4 py-3.5 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition-all" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors shadow-lg shadow-slate-900/30">
                Subscribe<i className="ri-arrow-right-line"></i>
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10 py-14 md:py-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <img src={LOGO} alt="FlowSpace" className="h-12 w-12 object-contain" />
                <span className="font-semibold text-white tracking-tight text-lg">FlowSpace</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed max-w-xs">The all-in-one platform to manage your creative projects, from idea to invoice.</p>
              <div className="mt-6 flex items-center gap-2.5">
                {["ri-twitter-x-line", "ri-linkedin-fill", "ri-dribbble-line", "ri-github-fill"].map((s) => (
                  <a key={s} href="#/" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:-translate-y-0.5 flex items-center justify-center transition-all">
                    <i className={s}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide">Product</h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#features" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Features</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Pricing</a></li>
                <li><a href="#/app" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Dashboard</a></li>
                <li><a href="#/app" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Kanban boards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide">Company</h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#/about" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">About</a></li>
                <li><a href="#testimonials" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Testimonials</a></li>
                <li><a href="#/blog" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Blog</a></li>
                <li><a href="#/contact" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Contact</a></li>
                <li><a href="#/app" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Sign in</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide">Resources</h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#/" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Help center</a></li>
                <li><a href="#/" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Changelog</a></li>
                <li><a href="#/" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">API docs</a></li>
                <li><a href="#/" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide">Legal</h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#/privacy" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Privacy</a></li>
                <li><a href="#/terms" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Terms</a></li>
                <li><a href="#/privacy" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">Cookies</a></li>
                <li><a href="#/privacy" className="hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12">
            {[
              { i: "ri-shield-check-line", t: "SOC 2 compliant" },
              { i: "ri-lock-2-line", t: "GDPR ready" },
              { i: "ri-server-line", t: "EU-hosted data" },
              { i: "ri-flashlight-line", t: "99.9% uptime" },
            ].map((b) => (
              <div key={b.t} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 hover:border-emerald-500/40 hover:bg-white/10 transition-colors">
                <i className={`${b.i} text-emerald-400 text-base`}></i>{b.t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              (c) 2025 FlowSpace. All rights reserved.
            </span>
            <span className="flex items-center gap-5">
              <a href="#/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#/terms" className="hover:text-white transition-colors">Terms</a>
              <span className="flex items-center gap-1.5 text-slate-500"><i className="ri-global-line"></i>English (EU)</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
