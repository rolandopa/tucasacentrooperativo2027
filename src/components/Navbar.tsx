import { Clock, Headphones, Wifi } from 'lucide-react';
import { useClock } from '@/hooks/useClock';

const LOGO_URL = 'https://i.ibb.co/CKm626ZM/descarga-1.png';

export default function Navbar() {
  const { timeStr, dateStr } = useClock();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 md:flex-row md:gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Plataforma Operativa Tu Casa"
            className="h-12 w-12 rounded-2xl object-cover ring-1 ring-slate-200"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-navy-800 md:text-base">
              Plataforma Operativa
            </span>
            <span className="text-xs font-semibold tracking-widest text-accent-sky">
              TU CASA
            </span>
          </div>
        </div>

        {/* Operational indicators */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
          {/* Live clock */}
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-1.5">
            <Clock className="h-3.5 w-3.5 text-accent-sky" />
            <div className="flex flex-col leading-tight">
              <span className="font-mono text-sm font-semibold tabular-nums text-navy-800">
                {timeStr}
              </span>
              <span className="hidden text-[10px] capitalize text-navy-500 lg:block">
                {dateStr}
              </span>
            </div>
          </div>

          {/* Status pill */}
          <div className="flex items-center gap-2 rounded-xl border border-accent-emerald/30 bg-accent-emerald/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent-emerald" />
            </span>
            <span className="text-xs font-semibold text-accent-emerald">
              Servidores y Enlaces Operativos
            </span>
            <Wifi className="h-3.5 w-3.5 text-accent-emerald/70" />
          </div>

          {/* Support button */}
          <button className="group flex items-center gap-2 rounded-xl border border-accent-sky/40 bg-accent-sky/10 px-4 py-1.5 text-xs font-semibold text-accent-sky transition-all hover:border-accent-sky/60 hover:bg-accent-sky/15 hover:shadow-[0_0_20px_-4px_rgba(2,132,199,0.3)]">
            <Headphones className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
            Mesa de Ayuda / Soporte
          </button>
        </div>
      </div>
    </header>
  );
}
