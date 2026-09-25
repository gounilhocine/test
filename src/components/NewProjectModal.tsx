import { useState } from "react";

export type NewProject = {
  name: string;
  client: string;
  category: string;
  due: string;
  team: string[];
  color: string;
};

const clients = ["Studio Kroma", "Nova Retail", "Atelier Lumen", "Internal"];

const categories = [
  { label: "Design", cls: "bg-emerald-50 text-emerald-700" },
  { label: "Development", cls: "bg-emerald-50 text-emerald-700" },
  { label: "Web", cls: "bg-emerald-50 text-emerald-700" },
  { label: "Mobile", cls: "bg-amber-50 text-amber-700" },
];

const members = [
  { name: "Sarah Jenkins", who: "SJ", bg: "bg-emerald-600" },
  { name: "Marc Rivière", who: "MR", bg: "bg-emerald-500" },
  { name: "Alex Laurent", who: "AL", bg: "bg-slate-700" },
  { name: "Nina Costa", who: "NC", bg: "bg-emerald-600" },
];

const colors = [
  { label: "Emerald", cls: "bg-emerald-600" },
  { label: "Teal", cls: "bg-emerald-500" },
  { label: "Amber", cls: "bg-amber-500" },
  { label: "Slate", cls: "bg-slate-700" },
];

const empty: NewProject = { name: "", client: clients[0], category: "Design", due: "", team: ["SJ"], color: "bg-emerald-600" };

function Label({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide">
      <i className={`${icon} text-emerald-600 text-sm`}></i>
      {children}
    </span>
  );
}

export default function NewProjectModal({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (p: NewProject) => void;
}) {
  const [form, setForm] = useState<NewProject>(empty);
  if (!open) return null;

  const set = (k: keyof NewProject, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleMember = (who: string) =>
    setForm((f) => ({
      ...f,
      team: f.team.includes(who) ? f.team.filter((m) => m !== who) : [...f.team, who],
    }));

  const valid = form.name.trim().length > 0;
  const activeCat = categories.find((c) => c.label === form.category) ?? categories[0];

  const submit = () => {
    if (!valid) return;
    onCreate(form);
    setForm(empty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        <div className="relative flex items-center gap-3 px-6 py-4 border-b border-slate-100">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></span>
          <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
            <i className="ri-folder-add-line"></i>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-slate-800 leading-tight">New project</h2>
            <p className="text-xs text-slate-500 truncate">Create a project and start planning sprints</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Close">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          <label className="block">
            <Label icon="ri-text">Project name</Label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. Lumen Showcase Site"
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </label>

          <div>
            <Label icon="ri-building-line">Client</Label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {clients.map((c) => {
                const active = form.client === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => set("client", c)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-left text-sm transition-all ${
                      active ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500/30" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate">{c}</span>
                    {active && <i className="ri-check-line ml-auto text-emerald-600 shrink-0"></i>}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <Label icon="ri-price-tag-3-line">Category</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = form.category === c.label;
                return (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => set("category", c.label)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      active ? `${c.cls} border-transparent ring-2 ring-emerald-500/40` : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <Label icon="ri-group-line">Team</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {members.map((m) => {
                const active = form.team.includes(m.who);
                return (
                  <button
                    key={m.who}
                    type="button"
                    onClick={() => toggleMember(m.who)}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="block">
              <Label icon="ri-calendar-line">Due date</Label>
              <input
                type="date"
                value={form.due}
                onChange={(e) => set("due", e.target.value)}
                className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </label>
            <div>
              <Label icon="ri-palette-line">Color</Label>
              <div className="mt-2 flex gap-2">
                {colors.map((c) => {
                  const active = form.color === c.cls;
                  return (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => set("color", c.cls)}
                      title={c.label}
                      className={`h-9 w-9 rounded-lg ${c.cls} transition-all ${active ? "ring-2 ring-offset-2 ring-emerald-500" : "opacity-70 hover:opacity-100"}`}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Project preview</p>
            <div className="flex items-center gap-3">
              <span className={`h-9 w-9 rounded-lg ${form.color} shrink-0`}></span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">{form.name.trim() || "Untitled project"}</p>
                <p className="text-xs text-slate-500 truncate">{form.client} · {activeCat.label}{form.due ? ` · due ${form.due}` : ""}</p>
              </div>
              <div className="ml-auto flex -space-x-2 shrink-0">
                {form.team.map((who) => {
                  const m = members.find((x) => x.who === who);
                  return (
                    <span key={who} className={`h-7 w-7 rounded-full ${m?.bg ?? "bg-slate-400"} text-white text-[10px] flex items-center justify-center font-semibold border-2 border-white`}>
                      {who}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-100 transition-colors">Cancel</button>
          <button
            onClick={submit}
            disabled={!valid}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              valid ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <i className="ri-add-line"></i>Create project
          </button>
        </div>
      </div>
    </div>
  );
}
