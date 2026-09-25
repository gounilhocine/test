const entries = [
  { task: "Design System tokens update", project: "Brand Refresh 2025", dur: "04h 15m", bill: true, who: "SJ", bg: "bg-emerald-600" },
  { task: "Client Wireframes presentation", project: "FinTech Portal", dur: "06h 40m", bill: true, who: "MR", bg: "bg-emerald-500" },
  { task: "Stripe Webhooks test", project: "FinTech Portal", dur: "02h 50m", bill: true, who: "AL", bg: "bg-slate-700" },
  { task: "WCAG AA accessibility audit", project: "Brand Refresh 2025", dur: "03h 10m", bill: false, who: "SJ", bg: "bg-emerald-600" },
];

const week = [
  { d: "Mon", h: 6.5 },
  { d: "Tue", h: 8.2 },
  { d: "Wed", h: 7.1 },
  { d: "Thu", h: 5.4 },
  { d: "Fri", h: 6.8 },
  { d: "Sat", h: 2.5 },
  { d: "Sun", h: 0 },
];

const maxH = Math.max(...week.map((w) => w.h));

export default function TimeTracking() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Time Tracking</h1>
          <p className="text-sm text-slate-500 mt-1">Week of May 26, 2025 · 38h 35m logged</p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
          <i className="ri-play-circle-line"></i>Start a timer
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { l: "Today", v: "02h 44m", i: "ri-timer-line" },
          { l: "This week", v: "38h 35m", i: "ri-calendar-line" },
          { l: "Billable", v: "82%", i: "ri-money-euro-circle-line" },
        ].map((k) => (
          <div key={k.l} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-500 text-sm mb-2">
              <span>{k.l}</span>
              <i className={`${k.i} text-emerald-600 text-lg`}></i>
            </div>
            <span className="text-2xl font-bold text-slate-800">{k.v}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h2 className="font-semibold text-slate-800 mb-5">Hours per day</h2>
        <div className="flex items-end justify-between gap-3 h-44">
          {week.map((w) => (
            <div key={w.d} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end justify-center h-36">
                <div
                  className="w-2/3 bg-emerald-500 rounded-t"
                  style={{ height: `${maxH ? (w.h / maxH) * 100 : 0}%` }}
                  title={`${w.h}h`}
                ></div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">{w.d}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Recent entries</h2>
          <button className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1">
            <i className="ri-download-2-line"></i>Export
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {entries.map((e) => (
            <div key={e.task} className="p-4 flex items-center gap-4 hover:bg-slate-50/60 transition-colors">
              <div className={`h-8 w-8 rounded-full ${e.bg} text-white text-[10px] flex items-center justify-center font-semibold shrink-0`}>
                {e.who}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800 truncate">{e.task}</p>
                <p className="text-xs text-slate-500 truncate">{e.project}</p>
              </div>
              <span className="font-mono text-sm text-slate-700 shrink-0">{e.dur}</span>
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded shrink-0 ${
                  e.bill ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
                }`}
              >
                {e.bill ? "Billable" : "Internal"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
