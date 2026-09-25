const members = [
  { n: "Sarah Jenkins", r: "Lead Designer", e: "sarah@studiokroma.fr", who: "SJ", bg: "bg-emerald-600", role: "Admin", roleCls: "bg-emerald-50 text-emerald-700", load: 82 },
  { n: "Marc Rivière", r: "Product Manager", e: "marc@studiokroma.fr", who: "MR", bg: "bg-emerald-500", role: "Member", roleCls: "bg-slate-100 text-slate-600", load: 64 },
  { n: "Alex Laurent", r: "Full-Stack Developer", e: "alex@studiokroma.fr", who: "AL", bg: "bg-slate-700", role: "Member", roleCls: "bg-slate-100 text-slate-600", load: 91 },
  { n: "Nina Costa", r: "UX Researcher", e: "nina@studiokroma.fr", who: "NC", bg: "bg-emerald-600", role: "Guest", roleCls: "bg-amber-50 text-amber-700", load: 38 },
];

const invites = [
  { e: "paul@novaretail.com", role: "Member", when: "Sent 2 days ago" },
  { e: "lea@atelierlumen.fr", role: "Guest", when: "Sent 5 days ago" },
];

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Team &amp; Guests</h1>
          <p className="text-sm text-slate-500 mt-1">4 active members · 2 pending invitations</p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
          <i className="ri-user-add-line"></i>Invite a member
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[{ l: "Members", v: "4", i: "ri-group-line" }, { l: "Invitations", v: "2", i: "ri-mail-send-line" }, { l: "Average load", v: "69%", i: "ri-speed-up-line" }].map((k) => (
          <div key={k.l} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-500 text-sm mb-2"><span>{k.l}</span><i className={`${k.i} text-emerald-600 text-lg`}></i></div>
            <span className="text-2xl font-bold text-slate-800">{k.v}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-slate-100"><h2 className="font-semibold text-slate-800">Workspace members</h2></div>
        <div className="divide-y divide-slate-100">
          {members.map((m) => (
            <div key={m.n} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50/60 transition-colors">
              <div className={`h-10 w-10 rounded-full ${m.bg} text-white text-xs flex items-center justify-center font-semibold shrink-0`}>{m.who}</div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-800 truncate">{m.n}</p>
                <p className="text-xs text-slate-500 truncate">{m.r} · {m.e}</p>
              </div>
              <div className="sm:w-40 shrink-0">
                <div className="flex justify-between text-[11px] mb-1"><span className="text-slate-500">Load</span><span className="font-semibold text-slate-700">{m.load}%</span></div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{ width: `${m.load}%` }}></div></div>
              </div>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded shrink-0 ${m.roleCls}`}>{m.role}</span>
              <button className="text-slate-400 hover:text-slate-700 shrink-0"><i className="ri-more-2-fill"></i></button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h2 className="font-semibold text-slate-800 mb-4">Pending invitations</h2>
        <div className="space-y-3">
          {invites.map((i) => (
            <div key={i.e} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <i className="ri-mail-line text-slate-400"></i>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800 truncate">{i.e}</p>
                <p className="text-[11px] text-slate-500">{i.role} · {i.when}</p>
              </div>
              <button className="text-xs text-emerald-600 hover:underline font-medium">Resend</button>
              <button className="text-xs text-slate-500 hover:text-red-600 font-medium">Cancel</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
