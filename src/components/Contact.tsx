import { useState } from "react";
import ContactMap from "./ContactMap";

const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

const channels = [
  { i: "ri-mail-line", l: "Email", v: "hello@flowspace.app", d: "We reply within 24h" },
  { i: "ri-phone-line", l: "Phone", v: "+33 1 84 80 12 34", d: "Mon-Fri, 9am-6pm CET" },
  { i: "ri-map-pin-line", l: "Office", v: "12 Rue de la Paix, Paris", d: "Visits by appointment" },
];

const subjects = ["Sales & pricing", "Product demo", "Technical support", "Partnership"];

const empty = { name: "", email: "", company: "", subject: subjects[0], message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof empty, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid = form.name.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) && form.message.trim().length > 5;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
    setForm(empty);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5">
            <img src={LOGO} alt="FlowSpace" className="h-12 w-12 object-contain" />
            <span className="font-semibold tracking-tight text-slate-900">FlowSpace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#/" className="hover:text-emerald-600 transition-colors">Home</a>
            <a href="#/about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#/contact" className="text-emerald-600 font-medium">Contact</a>
            <a href="#/app" className="hover:text-emerald-600 transition-colors">Dashboard</a>
          </nav>
          <a href="#/app" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
            Open app<i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="Modern office workspace" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-medium uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Contact us
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">Let's talk about your projects</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-200 leading-relaxed">
            Questions about pricing, a demo or a custom setup? Our team replies within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
                  <i className="ri-check-line"></i>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-900">Message sent!</h2>
                <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
                  <i className="ri-mail-send-line"></i>Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Send a message</span>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Tell us how we can help</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Full name *</span>
                    <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Sarah Jenkins" className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Email *</span>
                    <input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="sarah@studiokroma.fr" className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Company</span>
                    <input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Studio Kroma" className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-600">Subject</span>
                    <select value={form.subject} onChange={(e) => set("subject", e.target.value)} className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all">
                      {subjects.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-medium text-slate-600">Message *</span>
                  <textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={5} placeholder="Describe your project or question..." className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none" />
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5"><i className="ri-lock-line"></i>Your data stays private.</span>
                  <button type="submit" disabled={!valid} className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${valid ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
                    <i className="ri-send-plane-line"></i>Send message
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {channels.map((c) => (
              <div key={c.l} className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3 hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0"><i className={c.i}></i></div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{c.l}</p>
                  <p className="text-sm font-medium text-slate-800 truncate">{c.v}</p>
                  <p className="text-xs text-slate-500">{c.d}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl bg-slate-900 p-5 text-slate-300">
              <p className="text-sm font-semibold text-white">Prefer a live demo?</p>
              <p className="mt-1 text-xs leading-relaxed">Book a 20-minute walkthrough with our product team.</p>
              <a href="#/app" className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
                Open the dashboard<i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactMap />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Our office</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Come say hello in Paris</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">Drop by for a coffee and a live demo — we love meeting the teams we build for.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="relative lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80" alt="Map of our Paris office neighbourhood" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/25 via-slate-900/15 to-slate-900/45"></div>
              <div className="relative h-full min-h-[320px] flex items-center justify-center">
                <span className="relative flex flex-col items-center">
                  <span className="absolute top-0 h-14 w-14 rounded-full bg-emerald-400/40 animate-ping"></span>
                  <span className="relative h-11 w-11 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl shadow-lg border-4 border-white">
                    <i className="ri-map-pin-2-fill"></i>
                  </span>
                  <span className="mt-3 px-3 py-1 rounded-full bg-white/95 border border-slate-200 shadow-sm text-xs font-medium text-slate-700 whitespace-nowrap">
                    FlowSpace · 12 Rue de la Paix, Paris
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0"><i className="ri-map-pin-2-line"></i></div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Address</p>
                    <p className="text-sm font-medium text-slate-800">12 Rue de la Paix</p>
                    <p className="text-sm text-slate-500">75002 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0"><i className="ri-time-line"></i></div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Opening hours</p>
                    <div className="mt-1 space-y-0.5 text-sm">
                      <p className="flex justify-between gap-4"><span className="text-slate-500">Mon – Fri</span><span className="font-medium text-slate-800">9:00 – 18:00</span></p>
                      <p className="flex justify-between gap-4"><span className="text-slate-500">Saturday</span><span className="font-medium text-slate-800">10:00 – 14:00</span></p>
                      <p className="flex justify-between gap-4"><span className="text-slate-500">Sunday</span><span className="font-medium text-slate-400">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.openstreetmap.org/?mlat=48.8686&mlon=2.3317#map=16/48.8686/2.3317"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
              >
                <i className="ri-navigation-line"></i>Get directions
              </a>
            </div>
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
            <a href="#/app" className="hover:text-white transition-colors">Dashboard</a>
          </span>
          <span>(c) 2025 FlowSpace. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
