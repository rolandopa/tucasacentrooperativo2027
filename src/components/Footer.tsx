import { Building2, HeartHandshake, Headphones, Mail, Users } from 'lucide-react';

const LOGO_URL = 'https://i.ibb.co/CKm626ZM/descarga-1.png';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200/60 bg-white/50 backdrop-blur-sm">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-sky/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Plataforma Operativa Tu Casa"
                className="h-10 w-10 rounded-xl object-cover ring-1 ring-slate-200"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-navy-800">Plataforma Operativa Tu Casa</span>
                <span className="text-[11px] font-semibold tracking-widest text-accent-sky">
                  CENTRO DE MANDO
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-500">
              Articulación institucional para la transformación social y el cuidado de la vida.
            </p>
          </div>

          {/* Alliances column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-400">
              Alianzas Institucionales
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-sm text-navy-500">
                <Building2 className="h-4 w-4 shrink-0 text-accent-sky/70" />
                Alcaldía de Rionegro
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-500">
                <Users className="h-4 w-4 shrink-0 text-accent-emerald/70" />
                Secretaría de Familia
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-500">
                <HeartHandshake className="h-4 w-4 shrink-0 text-accent-violet/70" />
                Pastoral Social Sonsón Rionegro
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-400">
              Soporte Técnico
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-sm text-navy-500">
                <Headphones className="h-4 w-4 shrink-0 text-accent-orange/70" />
                Mesa de Ayuda / Soporte
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-500">
                <Mail className="h-4 w-4 shrink-0 text-accent-sky/70" />
                soporte@plataformatucasa.gov.co
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/60 pt-6 md:flex-row">
          <p className="text-xs text-navy-400">
            © 2026 Plataforma Operativa Tu Casa — Todos los derechos reservados.
          </p>
          <p className="text-xs text-navy-400">
            Rionegro, Antioquia — Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
