const items = [
  { icon: "ri-dashboard-line", label: "Overview" },
  { icon: "ri-kanban-view", label: "Kanban Boards" },
  { icon: "ri-timer-line", label: "Time Tracking" },
  { icon: "ri-bar-chart-2-line", label: "Reports" },
  { icon: "ri-group-line", label: "Team & Guests" },
];

export default function MobileNav({ tab, setTab }: { tab: string; setTab: (t: string) => void }) {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 flex items-center justify-around px-1 py-1.5">
      {items.map((it) => (
        <button
          key={it.label}
          onClick={() => setTab(it.label)}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] transition-colors ${
            tab === it.label ? "text-emerald-700" : "text-slate-500"
          }`}
        >
          <i className={`${it.icon} text-lg`}></i>
          <span className="truncate max-w-[64px]">{it.label.split(" ")[0]}</span>
        </button>
      ))}
    </nav>
  );
}
