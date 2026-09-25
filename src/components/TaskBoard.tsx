type Task = {
  n: string;
  d: string;
  tag: string;
  st: string;
  who: string;
  bg: string;
  due: string;
  t: string;
  done: boolean;
};

const badge: Record<string, string> = {
  "In progress": "bg-emerald-50 text-emerald-700",
  "To review": "bg-amber-50 text-amber-700",
  "To do": "bg-slate-100 text-slate-600",
  "Done": "bg-emerald-50 text-emerald-700",
};

const feed = [
  { who: "SJ", bg: "bg-emerald-600", txt: "completed the Accessibility audit checklist", when: "24 min ago" },
  { who: "MR", bg: "bg-emerald-500", txt: "commented on the Client Wireframes", when: "1h 12m ago" },
  { who: "AL", bg: "bg-slate-700", txt: "pushed a commit to stripe/webhook-tests", when: "2h ago" },
];

export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">
            Active sprint tasks <span className="text-xs text-slate-500 font-normal">· {tasks.length} items</span>
          </h2>
          <button className="text-slate-500 hover:text-slate-800"><i className="ri-filter-3-line"></i></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Task</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Assignee</th>
                <th className="py-3 px-4">Due date</th>
                <th className="py-3 px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {tasks.map((t) => (
                <tr key={t.n} className="hover:bg-slate-50/60 transition-colors group">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium group-hover:text-emerald-600 transition-colors ${t.done ? "line-through text-slate-400" : "text-slate-800"}`}>{t.n}</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600">{t.tag}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{t.d}</p>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium ${badge[t.st] ?? "bg-slate-100 text-slate-600"}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current"></span>{t.st}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <div className={`h-6 w-6 rounded-full ${t.bg} text-white text-[10px] flex items-center justify-center font-semibold`}>{t.who}</div>
                      <span className="text-xs text-slate-600">{t.who}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap text-xs text-slate-500">{t.due}</td>
                  <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs text-right text-slate-700">{t.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <button className="flex items-center gap-1.5 text-emerald-600 hover:underline font-medium"><i className="ri-add-circle-line"></i>Add a task</button>
          <a href="#/" className="text-slate-500 hover:text-slate-800 flex items-center gap-1">View full Kanban<i className="ri-arrow-right-s-line"></i></a>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2"><i className="ri-timer-line text-emerald-600 text-lg"></i><span className="font-semibold text-slate-800">Live timer</span></div>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-medium">Active</span>
          </div>
          <p className="text-[11px] uppercase tracking-wider text-slate-400">Current task</p>
          <p className="text-sm font-semibold text-slate-800 truncate mt-0.5">Design System tokens update</p>
          <div className="mt-3 py-3 px-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 block">TOTAL TIME TODAY</span>
              <span className="font-mono text-2xl font-bold text-slate-800">02:44:18</span>
            </div>
            <div className="flex gap-1.5">
              <button className="p-2 rounded bg-white border border-slate-200 hover:bg-slate-100"><i className="ri-pause-line"></i></button>
              <button className="p-2 rounded bg-red-600 text-white hover:opacity-90"><i className="ri-stop-line"></i></button>
            </div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-3"><span>Billable at €95/h</span><span className="font-semibold text-slate-800">260.15 €</span></div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4"><i className="ri-history-line text-emerald-600 text-lg"></i><h3 className="font-semibold text-slate-800">Team activity</h3></div>
          <div className="space-y-4">
            {feed.map((f) => (
              <div key={f.txt} className="flex items-start gap-3">
                <div className={`h-7 w-7 rounded-full ${f.bg} text-white text-[10px] flex items-center justify-center font-semibold shrink-0`}>{f.who}</div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-700"><span className="font-semibold">{f.who}</span> {f.txt}</p>
                  <span className="text-[11px] text-slate-400">{f.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
