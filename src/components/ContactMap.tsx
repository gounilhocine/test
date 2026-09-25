import { useState } from "react";

type Spot = {
  id: string;
  name: string;
  kind: string;
  icon: string;
  address: string;
  city: string;
  hours: string;
  x: number;
  y: number;
  lat: number;
  lon: number;
};

const spots: Spot[] = [
  { id: "hq", name: "FlowSpace HQ", kind: "Head office", icon: "ri-building-4-line", address: "12 Rue de la Paix", city: "75002 Paris, France", hours: "Mon – Fri · 9:00 – 18:00", x: 46, y: 44, lat: 48.8686, lon: 2.3317 },
  { id: "studio", name: "Design Studio", kind: "Workshop space", icon: "ri-palette-line", address: "8 Boulevard des Capucines", city: "75009 Paris, France", hours: "Mon – Sat · 10:00 – 19:00", x: 63, y: 29, lat: 48.8712, lon: 2.3355 },
  { id: "cafe", name: "Café Lumière", kind: "Meet-up spot", icon: "ri-cup-line", address: "24 Rue Montorgueil", city: "75001 Paris, France", hours: "Every day · 8:00 – 20:00", x: 31, y: 67, lat: 48.8646, lon: 2.3472 },
];

const roads = [
  { x: 12, y: 0, w: 3, h: 100 },
  { x: 38, y: 0, w: 2, h: 100 },
  { x: 72, y: 0, w: 3, h: 100 },
  { x: 0, y: 22, w: 100, h: 2 },
  { x: 0, y: 58, w: 100, h: 3 },
  { x: 0, y: 82, w: 100, h: 2 },
];

export default function ContactMap() {
  const [active, setActive] = useState<Spot>(spots[0]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Interactive map</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Find us in Paris</h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Pick a location to drop the pin on the map. Drop by for a coffee and a live demo — we love meeting the teams we build for.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[360px] bg-emerald-50">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-100"></div>

            {roads.map((r, i) => (
              <span key={i} className="absolute bg-white/80" style={{ left: `${r.x}%`, top: `${r.y}%`, width: `${r.w}%`, height: `${r.h}%` }}></span>
            ))}

            <span className="absolute left-0 top-[68%] w-full h-[6%] bg-sky-200/70 -rotate-3"></span>
            <span className="absolute left-0 top-[70%] w-full h-[3%] bg-sky-300/60 -rotate-3"></span>

            <span className="absolute left-[20%] top-[30%] h-24 w-24 rounded-lg bg-emerald-100/70"></span>
            <span className="absolute left-[52%] top-[12%] h-20 w-28 rounded-lg bg-emerald-100/70"></span>
            <span className="absolute left-[60%] top-[62%] h-24 w-24 rounded-lg bg-emerald-100/70"></span>

            {spots.map((s) => {
              const on = s.id === active.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s)}
                  title={s.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-300"
                  style={{ left: `${s.x}%`, top: `${s.y}%`, zIndex: on ? 20 : 10 }}
                >
                  {on && <span className="absolute h-12 w-12 rounded-full bg-emerald-400/40 animate-ping"></span>}
                  <span className={`relative rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-all ${on ? "h-10 w-10 bg-emerald-600 text-white text-lg" : "h-7 w-7 bg-white text-emerald-600 text-xs hover:bg-emerald-50"}`}>
                    <i className={on ? "ri-map-pin-2-fill" : s.icon}></i>
                  </span>
                  {on && (
                    <span className="mt-2 px-3 py-1 rounded-full bg-white/95 border border-slate-200 shadow-sm text-[11px] font-semibold text-slate-700 whitespace-nowrap">
                      {s.name}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="absolute bottom-4 right-4 flex flex-col rounded-lg overflow-hidden border border-slate-200 bg-white/95 shadow-sm">
              <span className="h-9 w-9 flex items-center justify-center text-slate-600 border-b border-slate-200"><i className="ri-add-line"></i></span>
              <span className="h-9 w-9 flex items-center justify-center text-slate-600"><i className="ri-subtract-line"></i></span>
            </div>

            <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-sm text-xs font-medium text-slate-700">
              <i className="ri-map-pin-2-fill text-emerald-600"></i>
              {active.name}
            </span>
            <span className="absolute bottom-4 left-4 text-[10px] text-slate-400">Paris · France</span>
          </div>

          <div className="flex flex-col gap-4">
            {spots.map((s) => {
              const on = s.id === active.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s)}
                  className={`text-left rounded-xl border p-5 transition-all ${on ? "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500/30" : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-lg shrink-0 ${on ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                      <i className={s.icon}></i>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{s.kind}</p>
                      <p className="text-sm font-semibold text-slate-800 truncate">{s.name}</p>
                      <p className="text-xs text-slate-500 truncate">{s.address}</p>
                      <p className="text-xs text-slate-500 truncate">{s.city}</p>
                      <p className="mt-1.5 text-[11px] text-slate-400 flex items-center gap-1.5">
                        <i className="ri-time-line"></i>{s.hours}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            <a
              href={`https://www.openstreetmap.org/?mlat=${active.lat}&mlon=${active.lon}#map=16/${active.lat}/${active.lon}`}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
            >
              <i className="ri-navigation-line"></i>Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
