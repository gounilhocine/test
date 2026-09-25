import { useState } from "react";

const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

type Mode = "signin" | "signup";

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (!open) return null;

  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const valid = emailOk && password.length >= 6 && (mode === "signin" || name.trim().length > 1);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 900);
  };

  const reset = () => {
    setDone(false);
    setLoading(false);
    setEmail("");
    setPassword("");
    setName("");
  };

  const close = () => {
    reset();
    onClose();
  };

  const switchMode = () => {
    setMode((m) => (m === "signin" ? "signup" : "signin"));
    setDone(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={close}></div>

      <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></span>

        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <img src={LOGO} alt="FlowSpace" className="h-11 w-11 object-contain rounded-lg shrink-0" />
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-slate-800 leading-tight">
              {done ? "You're in!" : mode === "signin" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-xs text-slate-500 truncate">
              {done ? "Redirecting to your workspace..." : mode === "signin" ? "Sign in to your FlowSpace workspace" : "Start your 14-day free trial"}
            </p>
          </div>
          <button onClick={close} className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Close">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {done ? (
          <div className="px-6 pb-8 pt-2 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
              <i className="ri-check-line"></i>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Signed in as <span className="font-medium text-slate-800">{email}</span>
            </p>
            <button onClick={close} className="mt-6 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
              <i className="ri-arrow-right-line"></i>Go to dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 pb-6 space-y-4 overflow-y-auto">
            {mode === "signup" && (
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Full name</span>
                <div className="relative mt-1.5">
                  <i className="ri-user-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </label>
            )}

            <label className="block">
              <span className="text-xs font-medium text-slate-600">Email address</span>
              <div className="relative mt-1.5">
                <i className="ri-mail-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@studiokroma.fr"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-xs font-medium text-slate-600">Password</span>
              <div className="relative mt-1.5">
                <i className="ri-lock-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700" title="Toggle password">
                  <i className={show ? "ri-eye-off-line" : "ri-eye-line"}></i>
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between">
              <button type="button" onClick={() => setRemember((r) => !r)} className="flex items-center gap-2 text-xs text-slate-600">
                <span className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${remember ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white"}`}>
                  {remember && <i className="ri-check-line text-[11px]"></i>}
                </span>
                Remember me
              </button>
              <button type="button" className="text-xs text-emerald-600 hover:underline font-medium">Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={!valid || loading}
              className={`w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${valid && !loading ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
            >
              {loading ? <i className="ri-loader-4-line animate-spin"></i> : <i className={mode === "signin" ? "ri-login-circle-line" : "ri-user-add-line"}></i>}
              {loading ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
            </button>

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200"></span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400">or continue with</span>
              <span className="h-px flex-1 bg-slate-200"></span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                <i className="ri-google-fill text-emerald-600"></i>Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                <i className="ri-github-fill"></i>GitHub
              </button>
            </div>

            <p className="text-center text-xs text-slate-500 pt-1">
              {mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button type="button" onClick={switchMode} className="text-emerald-600 hover:underline font-medium">
                {mode === "signin" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
