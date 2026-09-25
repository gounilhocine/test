import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import TaskBoard from "./components/TaskBoard";
import KanbanBoard from "./components/KanbanBoard";
import TimeTracking from "./components/TimeTracking";
import Invoices from "./components/Invoices";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Settings from "./components/Settings";
import Reports from "./components/Reports";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import MobileNav from "./components/MobileNav";
import NewTaskModal, { type NewTask } from "./components/NewTaskModal";
import LoginModal from "./components/LoginModal";
import { useSeo } from "./lib/seo";

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

const seedTasks: Task[] = [
  { n: "Design System tokens update", d: "Harmonize color and typography variables", tag: "UI Tokens", st: "In progress", who: "SJ", bg: "bg-emerald-600", due: "Today, 6:00 PM", t: "04h 15m", done: false },
  { n: "Client Wireframes presentation (FinTech)", d: "Prepare the Figma deck and validate the flow", tag: "Review", st: "To review", who: "MR", bg: "bg-emerald-500", due: "Tomorrow, 11:30 AM", t: "06h 40m", done: false },
  { n: "Stripe Webhooks integration test", d: "Handle payment failures and notifications", tag: "Backend", st: "In progress", who: "AL", bg: "bg-slate-700", due: "May 29, 2025", t: "02h 50m", done: false },
  { n: "WCAG AA accessibility audit", d: "Contrast ratios and keyboard navigation", tag: "Quality", st: "Done", who: "SJ", bg: "bg-emerald-600", due: "Yesterday", t: "03h 10m", done: true },
];

const kpis = [
  { l: "Billable hours", i: "ri-timer-line", v: "38.5h", t: "+12%", s: "Out of 40h planned this week" },
  { l: "Active tasks", i: "ri-loader-4-line", v: "8", tag: "2 to review", s: "3 in UI validation phase" },
  { l: "Completion rate", i: "ri-checkbox-circle-line", v: "94%", t: "+4%", s: "Deadlines met this quarter" },
  { l: "Upcoming deliverables", i: "ri-calendar-2-line", v: "3", tag: "In 48h", s: "Sprint review Thursday at 2:00 PM" },
];

function Overview({ tasks }: { tasks: Task[] }) {
  return (
    <div className="space-y-6">
      <section className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Tuesday, May 27, 2025</span>
            <span className="text-slate-300">•</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-medium">Sprint 14</span>
          </div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mt-1">
            Hi Sarah, you have <span className="text-emerald-600">5 priority tasks</span> today.
          </h1>
          <p className="text-sm text-slate-500 mt-1">Client validation phase for the brand refresh and final mockup delivery.</p>
        </div>
        <div className="shrink-0 md:w-72 bg-slate-50 border border-slate-200 rounded-lg p-4">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-medium text-slate-700">Sprint progress</span>
            <span className="font-semibold text-emerald-600">68% complete</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-600 h-full rounded-full" style={{ width: "68%" }}></div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-500 mt-2">
            <span>24 tasks done</span>
            <span>6 remaining</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.l} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
            <div className="flex items-center justify-between text-slate-500 text-sm mb-2">
              <span>{k.l}</span>
              <i className={`${k.i} text-emerald-600 text-lg`}></i>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{k.v}</span>
              {k.t && <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">{k.t}</span>}
              {k.tag && <span className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{k.tag}</span>}
            </div>
            <p className="text-xs text-slate-500 mt-1.5">{k.s}</p>
          </div>
        ))}
      </div>

      <TaskBoard tasks={tasks} />

      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <i className="ri-information-line text-emerald-600 text-xl"></i>
          <p className="text-sm text-slate-700">
            Next team sync in <strong className="text-emerald-700">1h 30m</strong> on Google Meet. The weekly report is ready to export.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm text-slate-700 transition-colors">View agenda</button>
          <button className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm font-medium transition-colors">Export PDF</button>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState("Overview");
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);

  const addTask = (t: NewTask) => {
    setTasks((prev) => [
      { n: t.title, d: t.desc || "New task added to the sprint", tag: t.project, st: "To do", who: "SJ", bg: "bg-emerald-600", due: t.due || "To be defined", t: "00h 00m", done: false },
      ...prev,
    ]);
  };

  const render = () => {
    switch (tab) {
      case "Projects & Sprints":
        return <Projects />;
      case "Kanban Boards":
        return <KanbanBoard />;
      case "Time Tracking":
        return <TimeTracking />;
      case "Invoicing & Quotes":
        return <Invoices />;
      case "Team & Guests":
        return <Team />;
      case "Reports":
        return <Reports />;
      case "Settings":
        return <Settings />;
      default:
        return <Overview tasks={tasks} />;
    }
  };

  return (
    <div className="h-screen flex bg-slate-50 text-slate-800 overflow-hidden">
      <Sidebar tab={tab} setTab={setTab} onLogin={() => setLogin(true)} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onNewTask={() => setModal(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
          <div className="max-w-7xl mx-auto">{render()}</div>
        </main>
      </div>
      <MobileNav tab={tab} setTab={setTab} />
      <NewTaskModal open={modal} onClose={() => setModal(false)} onCreate={addTask} />
      <LoginModal open={login} onClose={() => setLogin(false)} />
    </div>
  );
}

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "/");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace(/^#/, "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();
  const [login, setLogin] = useState(false);
  useSeo(route);
  if (route.startsWith("/app")) return <Dashboard />;
  if (route.startsWith("/about")) return <About />;
  if (route.startsWith("/contact")) return <Contact />;
  if (route.startsWith("/blog/")) {
    const id = Number(route.split("/")[2]);
    return <BlogPost id={Number.isFinite(id) && id > 0 ? id : 1} />;
  }
  if (route.startsWith("/blog")) return <Blog />;
  if (route.startsWith("/privacy")) return <Privacy />;
  if (route.startsWith("/terms")) return <Terms />;
  return (
    <>
      <Home onLogin={() => setLogin(true)} />
      <LoginModal open={login} onClose={() => setLogin(false)} />
    </>
  );
}
