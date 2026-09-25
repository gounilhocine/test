const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

export type Invoice = {
  id: string;
  client: string;
  amount: string;
  date: string;
  due: string;
  status: string;
};

const lineItems = [
  { d: "Brand identity redesign", q: 1, u: "3 200,00 €", t: "3 200,00 €" },
  { d: "Design System — UI components", q: 12, u: "95,00 €", t: "1 140,00 €" },
  { d: "Client scoping workshops", q: 4, u: "120,00 €", t: "480,00 €" },
  { d: "Delivery & documentation", q: 1, u: "30,00 €", t: "30,00 €" },
];

const statusCls: Record<string, string> = {
  "Paid": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Pending": "bg-violet-50 text-violet-700 border-violet-200",
  "Quote": "bg-slate-100 text-slate-600 border-slate-200",
  "Overdue": "bg-red-50 text-red-700 border-red-200",
};

export default function InvoiceDetail({ invoice, onBack }: { invoice: Invoice; onBack: () => void }) {
  return (
    <div className="space-y-6">
      {/* Action bar (hidden when printing) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>Back
          </button>
          <div>
            <h1 className="text-xl font-semibold text-slate-800">Invoice {invoice.id}</h1>
            <p className="text-xs text-slate-500">Document preview · {invoice.client}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            <i className="ri-mail-send-line"></i>Send
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
          >
            <i className="ri-printer-line"></i>Print / PDF
          </button>
        </div>
      </div>

      {/* Printable document */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 max-w-4xl mx-auto print:border-0 print:shadow-none print:p-0">
        {/* Document header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="FlowSpace" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-semibold text-slate-900 leading-tight">FlowSpace</p>
              <p className="text-xs text-slate-500">Studio Kroma · 12 Rue de la Paix, Paris</p>
              <p className="text-xs text-slate-500">contact@flowspace.app · +33 1 84 80 12 34</p>
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Invoice</p>
            <p className="font-mono text-lg font-bold text-slate-800">{invoice.id}</p>
            <span className={`inline-block mt-2 text-[11px] font-medium px-2 py-0.5 rounded border ${statusCls[invoice.status] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
              {invoice.status}
            </span>
          </div>
        </div>

        {/* Parties + dates */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-b border-slate-200">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Billed to</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{invoice.client}</p>
            <p className="text-xs text-slate-500">Procurement Dept.</p>
            <p className="text-xs text-slate-500">contact@client.fr</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Issue date</p>
            <p className="mt-1 text-sm text-slate-800">{invoice.date}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Due date</p>
            <p className="mt-1 text-sm text-slate-800">{invoice.due}</p>
          </div>
        </div>

        {/* Line items */}
        <div className="py-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-3 pr-4">Description</th>
                <th className="py-3 px-4 text-center">Qty</th>
                <th className="py-3 px-4 text-right">Unit price</th>
                <th className="py-3 pl-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {lineItems.map((l) => (
                <tr key={l.d}>
                  <td className="py-3 pr-4 text-slate-700">{l.d}</td>
                  <td className="py-3 px-4 text-center text-slate-500">{l.q}</td>
                  <td className="py-3 px-4 text-right text-slate-500">{l.u}</td>
                  <td className="py-3 pl-4 text-right font-medium text-slate-800">{l.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end pt-2">
          <div className="w-full sm:w-72 space-y-2 text-sm">
            <div className="flex justify-between text-slate-500"><span>Subtotal (excl. tax)</span><span className="text-slate-800">4 850,00 €</span></div>
            <div className="flex justify-between text-slate-500"><span>VAT (20%)</span><span className="text-slate-800">970,00 €</span></div>
            <div className="flex justify-between pt-2 border-t border-slate-200 font-semibold text-slate-900 text-base"><span>Total (incl. tax)</span><span>{invoice.amount}</span></div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
          <p className="font-medium text-slate-700">Payment terms</p>
          <p className="mt-1">Payment within 30 days by bank transfer. IBAN FR76 3000 4000 0300 0000 0000 123 · BIC BNPAFRPPXXX.</p>
          <p className="mt-3">Thank you for your trust. For any question, contact billing@flowspace.app.</p>
        </div>
      </div>
    </div>
  );
}
