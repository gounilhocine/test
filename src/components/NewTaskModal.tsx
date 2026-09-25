import { useState } from "react";

export type NewTask = {
  title: string;
  desc: string;
  project: string;
  assignee: string;
  priority: string;
  due: string;
};

const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

const projects = [
  { name: "Brand Refresh 2025", dot: "bg-emerald-600" },
  { name: "FinTech Client Portal", dot: "bg-emerald-500" },
  { name: "Lumen Showcase Site", dot: "bg-emerald-500" },
  { name: "Internal", dot: "bg-slate-400" },
];

const members = [
  { name: "Sarah Jenkins", who: "SJ", bg: "bg-emerald-600" },
  { name: "Marc Rivière", who: "MR", bg: "bg-emerald-500" },
  { name: "Alex Laurent", who: "AL", bg: "bg-slate-700" },
  { name: "Nina Costa", who: "NC", bg: "bg-emerald-600" },
];

const priorities = [
  { label: "Low", cls: "bg-slate-100 text-slate-600", ring: "ring-slate-400", icon: "ri-arrow-down-line" },
  { label: "Medium", cls: "bg-emerald-50 text-emerald-700", ring: "ring-emerald-500", icon: "ri-subtract-line" },
  { label: "High", cls: "bg-amber-50 text-amber-700", ring: "ring-amber-500", icon: "ri-arrow-up-line" },
];

const empty: NewTask = { title: "", desc: "", project: projects[0].name, assignee: members[0].name, priority: "Medium", due: "" };

function SectionLabel({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide">
      <i className={`${icon} text-emerald-600 text-sm`}></i>
      {children}
    </span>
  );
}

export default function NewTaskModal({ open, onClose, onCreate }: { open: boolean; onClose: () => void; onCreate: (t: NewTask) => void }) {
  const [form, setForm] = useState<NewTask>(empty);
  if (!open) return null;

  const set = (k: keyof NewTask, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid = form.title.trim().length > 0;
  const activeMember = members.find((m) => m.name === form.assignee) ?? members[0];
  const activeProject = projects.find((p) => p.name === form.project) ?? projects[0];
  const activePriority = priorities.find((p) => p.label === form.priority) ?? priorities[1];

  const submit = () => {
    if (!valid) return;
    onCreate(form);
    setForm(empty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="relative flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-violet-50 via-white to-white">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600"></span>
          <img src={LOGO} alt="FlowSpace" className="h-12 w-12 object-contain rounded-lg shrink-0" />
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-slate-800 leading-tight">New task</h2>
            <p className="text-xs text-slate-500 truncate">Add a task to the current sprint</p>
          </div>
          <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Sprint 14
          </span>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Close">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          <label className="block">
            <div className="flex items-center justify-between">
              <SectionLabel icon="ri-text">Task title</SectionLabel>
              <span className={`text-[11px] ${form.title.length > 70 ? "text-amber-600" : "text-slate-400"}`}>{form.title.length}/80</span>
            </div>
            <input
              value={form.title}
              maxLength={80}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Pricing page mockups"
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </label>

          <label className="block">
            <SectionLabel icon="ri-align-left">Description</SectionLabel>
            <textarea
              value={form.desc}
              onChange={(e) => set("desc", e.target.value)}
              rows={3}
              placeholder="Details, specifications and acceptance criteria..."
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
            />
          </label>

          {/* Project picker */}
          <div>
            <SectionLabel icon="ri-folder-line">Project</SectionLabel>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {projects.map((p) => {
                const active = form.project === p.name;
                return (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => set("project", p.name)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-left text-sm transition-all ${
                      active ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500/30" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${p.dot}`}></span>
                    <span className="truncate">{p.name}</span>
                    {active && <i className="ri-check-line ml-auto text-emerald-600 shrink-0"></i>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Assignee picker */}
          <div>
            <SectionLabel icon="ri-user-line">Assignee</SectionLabel>
            <div className="mt-2 flex flex-wrap gap-2">
              {members.map((m) => {
                const active = form.assignee === m.name;
                return (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => set("assignee", m.name)}
                    className={`flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border text-sm transition-all ${
                      active ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500/30" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`h-6 w-6 rounded-full ${m.bg} text-white text-[10px] flex items-center justify-center font-semibold`}>{m.who}</span>
                    <span className="truncate">{m.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Priority + Due */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <SectionLabel icon="ri-flag-line">Priority</SectionLabel>
              <div className="mt-2 flex gap-2">
                {priorities.map((p) => {
                  const active = form.priority === p.label;
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => set("priority", p.label)}
                      className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs font-medium border transition-all ${
                        active ? `${p.cls} border-transparent ring-2 ${p.ring}` : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <i className={`${p.icon} text-sm`}></i>
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <label className="block">
              <SectionLabel icon="ri-calendar-line">Due date</SectionLabel>
              <div className="relative mt-2">
                <i className="ri-calendar-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  type="date"
                  value={form.due}
                  onChange={(e) => set("due", e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </label>
          </div>

          {/* Live summary */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Task preview</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600">
                <span className={`h-2 w-2 rounded-full ${activeProject.dot}`}></span>{activeProject.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600">
                <span className={`h-4 w-4 rounded-full ${activeMember.bg} text-white text-[8px] flex items-center justify-center font-semibold`}>{activeMember.who}</span>
                {activeMember.name}
              </span>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${activePriority.cls}`}>
                <i className={`${activePriority.icon} text-xs`}></i>{activePriority.label}
              </span>
              {form.due && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600">
                  <i className="ri-calendar-line text-xs"></i>{form.due}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400">
            <i className="ri-information-line"></i>The task will be added to the current sprint
          </span>
          <div className="flex gap-2 ml-auto">
            <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-100 transition-colors">Cancel</button>
            <button
              onClick={submit}
              disabled={!valid}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                valid ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              <i className="ri-add-line"></i>Create task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
