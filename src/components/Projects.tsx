import { useState } from "react";
import NewProjectModal, { type NewProject } from "./NewProjectModal";

type Project = {
  name: string;
  client: string;
  pct: number;
  tasks: string;
  due: string;
  color: string;
  tag: string;
  tagCls: string;
  team: string[];
};

const seedProjects: Project[] = [
  { name: "Brand Refresh 2025", client: "Studio Kroma", pct: 68, tasks: "24/35", due: "Jun 12, 2025", color: "bg-emerald-600", tag: "Design", tagCls: "bg-emerald-50 text-emerald-700", team: ["SJ", "MR", "AL"] },
  { name: "FinTech Client Portal", client: "Nova Retail", pct: 42, tasks: "11/26", due: "Jun 28, 2025", color: "bg-emerald-500", tag: "Development", tagCls: "bg-emerald-50 text-emerald-700", team: ["AL", "MR"] },
  { name: "Atelier Lumen Showcase Site", client: "Atelier Lumen", pct: 90, tasks: "18/20", due: "Jun 2, 2025", color: "bg-emerald-500", tag: "Web", tagCls: "bg-emerald-50 text-emerald-700", team: ["SJ", "AL"] },
  { name: "Nova Mobile App", client: "Nova Retail", pct: 15, tasks: "4/28", due: "Jul 20, 2025", color: "bg-amber-500", tag: "Mobile", tagCls: "bg-amber-50 text-amber-700", team: ["MR"] },
];

const sprints = [
  { n: "Sprint 14", period: "May 26 – Jun 1", pct: 68, state: "In progress", stateCls: "bg-emerald-50 text-emerald-700" },
  { n: "Sprint 13", period: "May 19 – 25", pct: 100, state: "Done", stateCls: "bg-emerald-50 text-emerald-700" },
  { n: "Sprint 15", period: "Jun 2 – 8", pct: 0, state: "Planned", stateCls: "bg-slate-100 text-slate-600" },
];

const avatarBg: Record<string, string> = { SJ: "bg-emerald-600", MR: "bg-emerald-500", AL: "bg-slate-700", NC: "bg-emerald-600" };

const tagCls: Record<string, string> = {
  Design: "bg-emerald-50 text-emerald-700",
  Development: "bg-emerald-50 text-emerald-700",
  Web: "bg-emerald-50 text-emerald-700",
  Mobile: "bg-amber-50 text-amber-700",
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(seedProjects);
  const [modal, setModal] = useState(false);

  const addProject = (p: NewProject) => {
    setProjects((prev) => [
      {
        name: p.name,
        client: p.client,
        pct: 0,
        tasks: "0/0",
        due: p.due || "To be defined",
        color: p.color,
        tag: p.category,
        tagCls: tagCls[p.category] ?? "bg-slate-100 text-slate-600",
        team: p.team.length ? p.team : ["SJ"],
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Projects &amp; Sprints</h1>
          <p className="text-sm text-slate-500 mt-1">{projects.length} active projects · 3 sprints in cycle</p>
        </div>
        <button
          onClick={() => setModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
        >
          <i className="ri-add-line"></i>New project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm hover:border-slate-300 transition-all">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${p.tagCls}`}>{p.tag}</span>
                <h3 className="font-semibold text-slate-800 mt-2 truncate">{p.name}</h3>
                <p className="text-xs text-slate-500">{p.client}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-700 shrink-0"><i className="ri-more-2-fill"></i></button>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-500">Progress</span><span className="font-semibold text-slate-800">{p.pct}%</span></div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.pct}%` }}></div></div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-2">
                {p.team.map((m) => (
                  <div key={m} className={`h-7 w-7 rounded-full ${avatarBg[m] ?? "bg-slate-400"} text-white text-[10px] flex items-center justify-center font-semibold border-2 border-white`}>{m}</div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><i className="ri-checkbox-multiple-line"></i>{p.tasks}</span>
                <span className="flex items-center gap-1"><i className="ri-calendar-line"></i>{p.due}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-slate-100"><h2 className="font-semibold text-slate-800">Sprint Cycles</h2></div>
        <div className="divide-y divide-slate-100">
          {sprints.map((s) => (
            <div key={s.n} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="sm:w-40 shrink-0">
                <p className="font-medium text-slate-800">{s.n}</p>
                <p className="text-xs text-slate-500">{s.period}</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600 rounded-full" style={{ width: `${s.pct}%` }}></div></div>
              </div>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded shrink-0 ${s.stateCls}`}>{s.state}</span>
              <span className="text-sm font-semibold text-slate-800 sm:w-12 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <NewProjectModal open={modal} onClose={() => setModal(false)} onCreate={addProject} />
    </div>
  );
}
