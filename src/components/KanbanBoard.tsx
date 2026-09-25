import { useState } from "react";
import NewCardModal, { type NewCard } from "./NewCardModal";

type Card = {
  n: string;
  tag: string;
  tagCls: string;
  who: string;
  bg: string;
  due: string;
  prio: string;
  prioCls: string;
};

type Column = {
  title: string;
  accent: string;
  cards: Card[];
};

const tagCls: Record<string, string> = {
  UI: "bg-emerald-50 text-emerald-700",
  Backend: "bg-emerald-50 text-emerald-700",
  Content: "bg-slate-100 text-slate-600",
  Review: "bg-amber-50 text-amber-700",
  Quality: "bg-emerald-50 text-emerald-700",
  DevOps: "bg-slate-100 text-slate-600",
};

const prioCls: Record<string, string> = {
  Low: "bg-slate-100 text-slate-600",
  Medium: "bg-emerald-50 text-emerald-700",
  High: "bg-amber-50 text-amber-700",
};

const memberBg: Record<string, string> = { SJ: "bg-emerald-600", MR: "bg-emerald-500", AL: "bg-slate-700", NC: "bg-emerald-600" };

const seed: Column[] = [
  {
    title: "To do",
    accent: "bg-slate-400",
    cards: [
      { n: "Write the creative brief", tag: "Content", tagCls: tagCls.Content, who: "SJ", bg: memberBg.SJ, due: "May 30", prio: "Low", prioCls: prioCls.Low },
      { n: "Pricing page mockups", tag: "UI", tagCls: tagCls.UI, who: "MR", bg: memberBg.MR, due: "May 31", prio: "High", prioCls: prioCls.High },
      { n: "Configure client domain", tag: "DevOps", tagCls: tagCls.DevOps, who: "AL", bg: memberBg.AL, due: "Jun 2", prio: "Low", prioCls: prioCls.Low },
    ],
  },
  {
    title: "In progress",
    accent: "bg-emerald-500",
    cards: [
      { n: "Design System tokens update", tag: "UI", tagCls: tagCls.UI, who: "SJ", bg: memberBg.SJ, due: "Today", prio: "High", prioCls: prioCls.High },
      { n: "Stripe Webhooks integration test", tag: "Backend", tagCls: tagCls.Backend, who: "AL", bg: memberBg.AL, due: "May 29", prio: "High", prioCls: prioCls.High },
    ],
  },
  {
    title: "To review",
    accent: "bg-amber-500",
    cards: [
      { n: "Client Wireframes presentation", tag: "Review", tagCls: tagCls.Review, who: "MR", bg: memberBg.MR, due: "Tomorrow", prio: "Medium", prioCls: prioCls.Medium },
      { n: "Landing page copywriting", tag: "Content", tagCls: tagCls.Content, who: "SJ", bg: memberBg.SJ, due: "May 30", prio: "Medium", prioCls: prioCls.Medium },
    ],
  },
  {
    title: "Done",
    accent: "bg-emerald-500",
    cards: [
      { n: "WCAG AA accessibility audit", tag: "Quality", tagCls: tagCls.Quality, who: "SJ", bg: memberBg.SJ, due: "Yesterday", prio: "High", prioCls: prioCls.High },
      { n: "Vercel CI/CD setup", tag: "DevOps", tagCls: tagCls.DevOps, who: "AL", bg: memberBg.AL, due: "May 26", prio: "Low", prioCls: prioCls.Low },
    ],
  },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(seed);
  const [modal, setModal] = useState(false);
  const [target, setTarget] = useState<string | undefined>(undefined);

  const openModal = (col?: string) => {
    setTarget(col);
    setModal(true);
  };

  const addCard = (c: NewCard) => {
    const who = c.assignee.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    const card: Card = {
      n: c.title,
      tag: c.tag,
      tagCls: tagCls[c.tag] ?? "bg-slate-100 text-slate-600",
      who,
      bg: memberBg[who] ?? "bg-emerald-600",
      due: c.due || "To be defined",
      prio: c.priority,
      prioCls: prioCls[c.priority] ?? prioCls.Medium,
    };
    setColumns((prev) => prev.map((col) => (col.title === c.column ? { ...col, cards: [card, ...col.cards] } : col)));
  };

  const total = columns.reduce((sum, c) => sum + c.cards.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Kanban Board</h1>
          <p className="text-sm text-slate-500 mt-1">Sprint 14 · Brand Refresh 2025 · {total} active tasks</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            <i className="ri-filter-3-line"></i>Filter
          </button>
          <button onClick={() => openModal()} className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
            <i className="ri-add-line"></i>New card
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
        {columns.map((col) => (
          <div key={col.title} className="bg-slate-100/70 border border-slate-200 rounded-xl p-3">
            <div className="flex items-center justify-between px-1 pb-3">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${col.accent}`}></span>
                <span className="text-sm font-semibold text-slate-700">{col.title}</span>
                <span className="text-xs text-slate-500 bg-white border border-slate-200 rounded px-1.5">{col.cards.length}</span>
              </div>
              <button className="text-slate-400 hover:text-slate-700"><i className="ri-more-2-fill"></i></button>
            </div>

            <div className="space-y-3">
              {col.cards.map((c) => (
                <div key={c.n} className="bg-white border border-slate-200 rounded-lg p-3.5 hover:shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${c.tagCls}`}>{c.tag}</span>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${c.prioCls}`}>{c.prio}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 leading-snug">{c.n}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                    <div className={`h-6 w-6 rounded-full ${c.bg} text-white text-[10px] flex items-center justify-center font-semibold`}>{c.who}</div>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1"><i className="ri-calendar-line"></i>{c.due}</span>
                  </div>
                </div>
              ))}
              <button
                onClick={() => openModal(col.title)}
                className="w-full py-2 rounded-lg border border-dashed border-slate-300 text-xs text-slate-500 hover:bg-white hover:text-emerald-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <i className="ri-add-line"></i>Add a card
              </button>
            </div>
          </div>
        ))}
      </div>

      <NewCardModal open={modal} onClose={() => setModal(false)} onCreate={addCard} defaultColumn={target} />
    </div>
  );
}
