const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

const nav = [
  { icon: "ri-dashboard-line", label: "Overview" },
  { icon: "ri-folder-line", label: "Projects & Sprints", badge: "4" },
  { icon: "ri-kanban-view", label: "Kanban Boards" },
  { icon: "ri-timer-line", label: "Time Tracking" },
  { icon: "ri-receipt-line", label: "Invoicing & Quotes" },
  { icon: "ri-group-line", label: "Team & Guests" },
];

export default function Sidebar({ tab, setTab, onLogin }: { tab: string; setTab: (t: string) => void; onLogin?: () => void }) {
  return (
    <aside className="hidden md:flex w-60 flex-col bg-white border-r border-slate-200 shrink-0">
      <div className="h-16 flex items-center gap-2.5 px-5 border-b border-slate-100">
        <img src={LOGO} alt="FlowSpace" className="h-11 w-11 object-contain" />
        <span className="font-semibold tracking-tight text-slate-800">FlowSpace</span>
      </div>

      <div className="px-3.5 py-3 border-b border-slate-100">
        <button className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-left">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-6 w-6 rounded bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">SK</div>
            <div className="truncate">
              <p className="text-xs font-semibold text-slate-800 truncate">Studio Kroma</p>
              <p className="text-[11px] text-slate-500 truncate">Solo Sprint • Pro</p>
            </div>
          </div>
          <i className="ri-expand-up-down-line text-slate-400"></i>
        </button>
      </div>

      <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
        {nav.map((n) => (
          <button
            key={n.label}
            onClick={() => setTab(n.label)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              tab === n.label ? "bg-emerald-50 text-emerald-700 font-medium" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <i className={`${n.icon} text-lg`}></i>
            <span className="truncate">{n.label}</span>
            {n.badge && <span className="ml-auto text-xs bg-emerald-100 text-emerald-700 px-1.5 rounded">{n.badge}</span>}
          </button>
        ))}

        <div className="pt-4">
          <p className="px-3 text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Recent favorites</p>
          <div className="mt-2 space-y-1">
            <a href="#/" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm truncate">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>Brand Refresh 2025
            </a>
            <a href="#/" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm truncate">
              <span className="h-2 w-2 rounded-full bg-slate-300"></span>FinTech Client Portal
            </a>
          </div>
        </div>
      </nav>

      <div className="p-3 border-t border-slate-100">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
          <div className="h-8 w-8 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-semibold">SJ</div>
          <div className="text-xs min-w-0">
            <p className="font-medium text-slate-800 truncate">Sarah Jenkins</p>
            <p className="text-slate-500 truncate">Lead Designer</p>
          </div>
          <button onClick={onLogin} className="ml-auto p-1 text-slate-400 hover:text-emerald-600 transition-colors" title="Sign in">
            <i className="ri-login-circle-line text-lg"></i>
          </button>
        </div>
      </div>
    </aside>
  );
}
