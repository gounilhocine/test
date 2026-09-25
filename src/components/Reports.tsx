const velocity = [
  { s: "S10", v: 24, c: 22 },
  { s: "S11", v: 28, c: 26 },
  { s: "S12", v: 22, c: 24 },
  { s: "S13", v: 31, c: 30 },
  { s: "S14", v: 26, c: 18 },
];

const byProject = [
  { n: "Brand Refresh 2025", h: "18h 20m", pct: 48, color: "bg-emerald-600" },
  { n: "FinTech Client Portal", h: "14h 05m", pct: 36, color: "bg-emerald-500" },
  { n: "Lumen Showcase Site", h: "06h 10m", pct: 16, color: "bg-emerald-500" },
];

const kpis = [
  { l: "Average velocity", v: "26 pts", i: "ri-speed-up-line", t: "+8%" },
  { l: "Billing rate", v: "82%", i: "ri-percent-line", t: "+3%" },
  { l: "Tasks delivered", v: "131", i: "ri-checkbox-circle-line", t: "this quarter" },
  { l: "Average lead time", v: "2.4 j", i: "ri-timer-line", t: "-0.6 j" },
];

const maxV = Math.max(...velocity.map((v) => v.v));

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Reports &amp; Analytics</h1>
          <p className="text-sm text-slate-500 mt-1">Performance over the last 5 sprints · Q2 2025</p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
          <i className="ri-download-2-line"></i>Export report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.l} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-500 text-sm mb-2"><span>{k.l}</span><i className={`${k.i} text-emerald-600 text-lg`}></i></div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{k.v}</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">{k.t}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-slate-800">Velocity per sprint</h2>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-emerald-600"></span>Planned</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-slate-300"></span>Completed</span>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 h-52">
            {velocity.map((v) => (
              <div key={v.s} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center gap-1 h-44">
                  <div className="w-1/2 bg-emerald-600 rounded-t" style={{ height: `${(v.v / maxV) * 100}%` }} title={`Planifié: ${v.v}`}></div>
                  <div className="w-1/2 bg-slate-300 rounded-t" style={{ height: `${(v.c / maxV) * 100}%` }} title={`Réalisé: ${v.c}`}></div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">{v.s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 mb-4">Time per project</h2>
          <div className="space-y-4">
            {byProject.map((p) => (
              <div key={p.n}>
                <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-600 font-medium truncate">{p.n}</span><span className="text-slate-800 font-semibold">{p.h}</span></div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.pct}%` }}></div></div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-baseline">
            <span className="text-xs text-slate-500">Total</span>
            <span className="text-xl font-bold text-slate-800">38h 35m</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <i className="ri-lightbulb-line text-emerald-600 text-2xl"></i>
          <p className="text-sm text-slate-700">Sprint 14 completion rate is ahead by <strong className="text-emerald-700">12%</strong> on the quarterly average.</p>
        </div>
        <button className="px-3.5 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm text-slate-700 font-medium transition-colors shrink-0">View details</button>
      </div>
    </div>
  );
}
