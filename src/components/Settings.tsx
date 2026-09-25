import { useState } from "react";

const notifPrefs = [
  { l: "Task notifications", d: "Alerts when a task is assigned to me", on: true },
  { l: "Deadline reminders", d: "Notification 24h before the due date", on: true },
  { l: "Weekly summary", d: "Performance report every Monday", on: false },
  { l: "Mentions & comments", d: "When a member mentions me", on: true },
];

export default function Settings() {
  const [prefs, setPrefs] = useState(notifPrefs);

  const toggle = (i: number) => setPrefs((p) => p.map((x, idx) => (idx === i ? { ...x, on: !x.on } : x)));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your profile, preferences and workspace</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h2 className="font-semibold text-slate-800 mb-4">Profile</h2>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-16 w-16 rounded-full bg-emerald-600 text-white text-lg flex items-center justify-center font-semibold">SJ</div>
              <div>
                <p className="font-medium text-slate-800">Sarah Jenkins</p>
                <p className="text-xs text-slate-500">Lead Designer · Studio Kroma</p>
                <button className="text-xs text-emerald-600 hover:underline font-medium mt-1">Change photo</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Full name</span>
                <input defaultValue="Sarah Jenkins" className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Email address</span>
                <input defaultValue="sarah@studiokroma.fr" className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Role</span>
                <input defaultValue="Lead Designer" className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Time zone</span>
                <input defaultValue="Europe/Paris (UTC+2)" className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
              </label>
            </div>
            <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-slate-100">
              <button className="px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition-colors">Cancel</button>
              <button className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">Save</button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h2 className="font-semibold text-slate-800 mb-4">Notifications</h2>
            <div className="divide-y divide-slate-100">
              {prefs.map((p, i) => (
                <div key={p.l} className="flex items-center justify-between py-3">
                  <div className="min-w-0 pr-4">
                    <p className="text-sm font-medium text-slate-800">{p.l}</p>
                    <p className="text-xs text-slate-500">{p.d}</p>
                  </div>
                  <button onClick={() => toggle(i)} className={`relative h-6 w-11 rounded-full transition-colors shrink-0 ${p.on ? "bg-emerald-600" : "bg-slate-300"}`}>
                    <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${p.on ? "left-[22px]" : "left-0.5"}`}></span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h2 className="font-semibold text-slate-800 mb-4">Billing</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Hourly rate</span><span className="font-medium text-slate-800">95 €/h</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Currency</span><span className="font-medium text-slate-800">EUR (€)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">VAT</span><span className="font-medium text-slate-800">20%</span></div>
            </div>
            <button className="mt-4 w-full py-2 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-colors">Edit</button>
          </div>

          <div className="bg-white border border-red-200 rounded-xl p-5">
            <h2 className="font-semibold text-red-700 mb-2">Danger zone</h2>
            <p className="text-xs text-slate-500 mb-4">These actions are irreversible. Proceed with caution.</p>
            <button className="w-full py-2 rounded-lg border border-red-200 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium">Delete workspace</button>
          </div>
        </div>
      </div>
    </div>
  );
}
