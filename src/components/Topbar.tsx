const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

export default function Topbar({ onNewTask }: { onNewTask?: () => void }) {
  return (
    <header className="h-16 flex items-center gap-4 px-4 md:px-6 bg-white border-b border-slate-200 shrink-0">
      <a href="#/" className="md:hidden shrink-0">
        <img src={LOGO} alt="FlowSpace" className="h-10 w-10 object-contain" />
      </a>
      <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 min-w-0">
        <span className="hover:text-emerald-600 cursor-pointer truncate">Espaces</span>
        <span className="text-slate-300">/</span>
        <span className="hover:text-emerald-600 cursor-pointer truncate">Brand Refresh 2025</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium truncate">Overview</span>
      </div>

      <div className="relative flex-1 max-w-md ml-auto">
        <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input
          placeholder="Search tasks, files, members..."
          className="w-full pl-9 pr-14 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />
        <kbd className="hidden sm:block absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-white px-1.5 py-0.5 border border-slate-200 rounded">⌘K</kbd>
      </div>

      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-mono text-xs font-semibold text-emerald-700">02:44:18</span>
        <i className="ri-pause-circle-line text-slate-400 hover:text-red-500 cursor-pointer"></i>
      </div>

      <button className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors">
        <i className="ri-notification-3-line text-lg"></i>
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-emerald-500 border-2 border-white"></span>
      </button>

      <button onClick={onNewTask} className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
        <i className="ri-add-line"></i>
        <span className="hidden sm:inline">New task</span>
      </button>
    </header>
  );
}
