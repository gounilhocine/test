import { useState } from "react";

export type NewInvoice = {
  client: string;
  amount: string;
  date: string;
  due: string;
  status: string;
};

const clients = ["Studio Kroma", "FinTech Portal", "Nova Retail", "Atelier Lumen"];
const statuses = [
  { label: "Quote", cls: "bg-slate-100 text-slate-600" },
  { label: "Pending", cls: "bg-violet-50 text-violet-700" },
  { label: "Paid", cls: "bg-emerald-50 text-emerald-700" },
];

const empty: NewInvoice = { client: clients[0], amount: "", date: "", due: "", status: "Quote" };

function Label({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide">
      <i className={`${icon} text-emerald-600 text-sm`}></i>
      {children}
    </span>
  );
}

export default function NewInvoiceModal({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (i: NewInvoice) => void;
}) {
  const [form, setForm] = useState<NewInvoice>(empty);
  if (!open) return null;

  const set = (k: keyof NewInvoice, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid = form.amount.trim().length > 0 && form.client.trim().length > 0;

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
            <i className="ri-receipt-line"></i>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-slate-800 leading-tight">New invoice</h2>
            <p className="text-xs text-slate-500 truncate">Create an invoice or a quote</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Close">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          <div>
            <Label icon="ri-user-line">Client</Label>
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

          <label className="block">
            <Label icon="ri-money-euro-circle-line">Amount (€)</Label>
            <input
              value={form.amount}
              onChange={(e) => set("amount", e.target.value)}
              placeholder="4 850,00"
              className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="block">
              <Label icon="ri-calendar-line">Issued</Label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </label>
            <label className="block">
              <Label icon="ri-calendar-check-line">Due</Label>
              <input
                type="date"
                value={form.due}
                onChange={(e) => set("due", e.target.value)}
                className="mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </label>
          </div>

          <div>
            <Label icon="ri-flag-line">Status</Label>
            <div className="mt-2 flex gap-2">
              {statuses.map((s) => {
                const active = form.status === s.label;
                return (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => set("status", s.label)}
                    className={`flex-1 px-2 py-2 rounded-lg text-xs font-medium border transition-all ${
                      active ? `${s.cls} border-transparent ring-2 ring-emerald-500/40` : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
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
            <i className="ri-add-line"></i>Create invoice
          </button>
        </div>
      </div>
    </div>
  );
}
