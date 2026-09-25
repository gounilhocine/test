import { useState } from "react";

export type NewCard = {
  title: string;
  desc: string;
  column: string;
  tag: string;
  priority: string;
  assignee: string;
  due: string;
};

const columns = ["To do", "In progress", "To review", "Done"];

const tags = [
  { label: "UI", cls: "bg-emerald-50 text-emerald-700" },
  { label: "Backend", cls: "bg-emerald-50 text-emerald-700" },
  { label: "Content", cls: "bg-slate-100 text-slate-600" },
  { label: "Review", cls: "bg-amber-50 text-amber-700" },
  { label: "Quality", cls: "bg-emerald-50 text-emerald-700" },
  { label: "DevOps", cls: "bg-slate-100 text-slate-600" },
];

const priorities = [
  { label: "Low", cls: "bg-slate-100 text-slate-600", ring: "ring-slate-400", icon: "ri-arrow-down-line" },
  { label: "Medium", cls: "bg-emerald-50 text-emerald-700", ring: "ring-emerald-500", icon: "ri-subtract-line" },
  { label: "High", cls: "bg-amber-50 text-amber-700", ring: "ring-amber-500", icon: "ri-arrow-up-line" },
];

const members = [
  { name: "Sarah Jenkins", who: "SJ", bg: "bg-emerald-600" },
  { name: "Marc Rivière", who: "MR", bg: "bg-emerald-500" },
  { name: "Alex Laurent", who: "AL", bg: "bg-slate-700" },
  { name: "Nina Costa", who: "NC", bg: "bg-emerald-600" },
];

const empty: NewCard = { title: "", desc: "", column: columns[0], tag: tags[0].label, priority: "Medium", assignee: members[0].name, due: "" };

function Label({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide">
      <i className={`${icon} text-emerald-600 text-sm`}></i>
      {children}
    </span>
  );
}

export default function NewCardModal({
  open,
  onClose,
  onCreate,
  defaultColumn,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (c: NewCard) => void;
  defaultColumn?: string;
}) {
  const [form, setForm] = useState<NewCard>(empty);
  if (!open) return null;

  const set = (k: keyof NewCard, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid = form.title.trim().length > 0;
  const activeTag = tags.find((t) => t.label === form.tag) ?? tags[0];
  const activePriority = priorities.find((p) => p.label === form.priority) ?? priorities[1];
  const activeMember = members.find((m) => m.name === form.assignee) ?? members[0];
  const activeColumn = defaultColumn && form.column === empty.column ? defaultColumn : form.column;

  const submit = () => {
    if (!valid) return;
    onCreate({ ...form, column: activeColumn });
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
            <i className="ri-add-box-line"></i>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-slate-800 leading-tight">New card</h2>
            <p className="text-xs text-slate-500 truncate">Add a card to the Kanban board</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Close">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          <label className="block">
            <Label icon="ri-text">Card title</Label>
            <input
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Pricing page mockups"
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </label>

          <label className="block">
            <Label icon="ri-align-left">Description</Label>
            <textarea
              value={form.desc}
              onChange={(e) => set("desc", e.target.value)}
              rows={3}
              placeholder="Details and acceptance criteria..."
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
            />
          </label>

          <div>
            <Label icon="ri-layout-column-line">Column</Label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {columns.map((c) => {
                const active = activeColumn === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => set("column", c)}
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
            <Label icon="ri-price-tag-3-line">Tag</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => {
                const active = form.tag === t.label;
                return (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => set("tag", t.label)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      active ? `${t.cls} border-transparent ring-2 ring-emerald-500/40` : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <Label icon="ri-user-line">Assignee</Label>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Label icon="ri-flag-line">Priority</Label>
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
              <Label icon="ri-calendar-line">Due date</Label>
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

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Card preview</p>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${activeTag.cls}`}>{activeTag.label}</span>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${activePriority.cls}`}>{activePriority.label}</span>
              </div>
              <p className="text-sm font-medium text-slate-800 leading-snug">{form.title.trim() || "Untitled card"}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <span className={`h-6 w-6 rounded-full ${activeMember.bg} text-white text-[10px] flex items-center justify-center font-semibold`}>{activeMember.who}</span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <i className="ri-layout-column-line"></i>{activeColumn}
                  {form.due && <><i className="ri-calendar-line ml-2"></i>{form.due}</>}
                </span>
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
            <i className="ri-add-line"></i>Create card
          </button>
        </div>
      </div>
    </div>
  );
}
