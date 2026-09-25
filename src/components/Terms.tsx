const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

const sections = [
  {
    t: "1. Acceptance of terms",
    b: "By accessing or using FlowSpace you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the platform.",
  },
  {
    t: "2. Accounts & responsibilities",
    b: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must be at least 16 years old to create a workspace.",
  },
  {
    t: "3. Subscriptions & billing",
    b: "Paid plans are billed in advance on a monthly or annual basis. Subscriptions renew automatically unless cancelled before the end of the current billing period. All fees are exclusive of applicable taxes.",
  },
  {
    t: "4. Acceptable use",
    b: "You agree not to misuse the service — including attempting to access it via unauthorized means, disrupting other users, or uploading malicious content. We reserve the right to suspend accounts that violate these rules.",
  },
  {
    t: "5. Intellectual property",
    b: "FlowSpace and its original content, features and functionality remain the exclusive property of FlowSpace. Content you upload remains yours; you grant us a limited licence to host and process it to operate the service.",
  },
  {
    t: "6. Limitation of liability",
    b: "FlowSpace is provided on an \"as is\" basis. To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from your use of the platform.",
  },
];

export default function Terms() {
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
            <a href="#/about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#/privacy" className="hover:text-emerald-600 transition-colors">Privacy</a>
            <a href="#/terms" className="text-emerald-600 font-medium">Terms</a>
            <a href="#/contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>
          <a href="#/app" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
            Open app<i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </header>

      <section className="bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Legal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-slate-300 leading-relaxed">Last updated: May 27, 2025. Please read these terms carefully before using FlowSpace.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-8">
          {sections.map((s) => (
            <div key={s.t} className="border-l-2 border-emerald-500 pl-5">
              <h2 className="text-lg font-semibold text-slate-900">{s.t}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.b}</p>
            </div>
          ))}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-900">Need clarification?</p>
              <p className="text-sm text-slate-500 mt-1">Reach out and we will walk you through the details.</p>
            </div>
            <a href="#/contact" className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors shrink-0">
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
