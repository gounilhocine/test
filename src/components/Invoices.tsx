import { useState } from "react";
import NewInvoiceModal, { type NewInvoice } from "./NewInvoiceModal";
import InvoiceDetail from "./InvoiceDetail";

type Invoice = {
  id: string;
  client: string;
  amount: string;
  date: string;
  due: string;
  status: string;
};

const seedInvoices: Invoice[] = [
  { id: "FAC-2025-018", client: "Studio Kroma", amount: "4 850,00 €", date: "27 Mai 2025", due: "10 Juin 2025", status: "Paid" },
  { id: "FAC-2025-017", client: "FinTech Portal", amount: "7 200,00 €", date: "20 Mai 2025", due: "03 Juin 2025", status: "Pending" },
  { id: "DEV-2025-009", client: "Nova Retail", amount: "2 400,00 €", date: "18 Mai 2025", due: "01 Juin 2025", status: "Quote" },
  { id: "FAC-2025-016", client: "Studio Kroma", amount: "3 150,00 €", date: "12 Mai 2025", due: "26 Mai 2025", status: "Overdue" },
  { id: "FAC-2025-015", client: "Atelier Lumen", amount: "5 600,00 €", date: "05 Mai 2025", due: "19 Mai 2025", status: "Paid" },
];

const statusCls: Record<string, string> = {
  "Paid": "bg-emerald-50 text-emerald-700",
  "Pending": "bg-violet-50 text-violet-700",
  "Quote": "bg-slate-100 text-slate-600",
  "Overdue": "bg-red-50 text-red-700",
};

const kpis = [
  { l: "Revenue this month", v: "23 200 €", i: "ri-money-euro-circle-line", t: "+18%" },
  { l: "Pending", v: "7 200 €", i: "ri-time-line", t: "2 invoices" },
  { l: "Overdue", v: "3 150 €", i: "ri-alert-line", t: "1 invoice" },
  { l: "Open quotes", v: "2 400 €", i: "ri-file-list-3-line", t: "1 quote" },
];

export default function Invoices() {
  const [invoices, setInvoices] = useState<Invoice[]>(seedInvoices);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<Invoice | null>(null);

  const addInvoice = (i: NewInvoice) => {
    const prefix = i.status === "Quote" ? "DEV" : "FAC";
    const num = String(1000 + invoices.length + 19).slice(1);
    setInvoices((prev) => [
      {
        id: `${prefix}-2025-0${num}`,
        client: i.client,
        amount: i.amount.includes("€") ? i.amount : `${i.amount} €`,
        date: i.date || "Today",
        due: i.due || "To be defined",
        status: i.status,
      },
      ...prev,
    ]);
  };

  if (selected) {
    return <InvoiceDetail invoice={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Invoicing &amp; Quotes</h1>
          <p className="text-sm text-slate-500 mt-1">Track payments and commercial proposals</p>
        </div>
        <button
          onClick={() => setModal(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
        >
          <i className="ri-add-line"></i>New invoice
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.l} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-500 text-sm mb-2"><span>{k.l}</span><i className={`${k.i} text-emerald-600 text-lg`}></i></div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{k.v}</span>
              <span className="text-xs text-slate-500">{k.t}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-800">Quarterly revenue goal</h2>
          <span className="text-sm font-semibold text-emerald-700">68 400 € / 90 000 €</span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" style={{ width: "76%" }}></div>
        </div>
        <p className="text-xs text-slate-500 mt-2">76% of the goal reached · €21,600 left to invoice</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Recent documents <span className="text-xs text-slate-500 font-normal">· {invoices.length}</span></h2>
          <div className="flex items-center gap-2">
            <button className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1"><i className="ri-filter-3-line"></i>Filter</button>
            <button className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1"><i className="ri-download-2-line"></i>Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Reference</th>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Issued</th>
                <th className="py-3 px-4">Due</th>
                <th className="py-3 px-4 text-right">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {invoices.map((inv) => (
                <tr key={inv.id} onClick={() => setSelected(inv)} className="hover:bg-slate-50/60 transition-colors group cursor-pointer">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium text-emerald-700 group-hover:underline">{inv.id}</td>
                  <td className="py-3.5 px-4 text-slate-700">{inv.client}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{inv.date}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{inv.due}</td>
                  <td className="py-3.5 px-4 text-right font-semibold text-slate-800">{inv.amount}</td>
                  <td className="py-3.5 px-4">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${statusCls[inv.status] ?? "bg-slate-100 text-slate-600"}`}>{inv.status}</span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <button className="text-slate-400 group-hover:text-slate-700 transition-colors"><i className="ri-more-2-fill"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <NewInvoiceModal open={modal} onClose={() => setModal(false)} onCreate={addInvoice} />
    </div>
  );
}
