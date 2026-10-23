import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-12 md:pt-20">
      {/* Badge pill */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-sky/20 bg-accent-sky/5 px-4 py-1.5 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-accent-sky" />
          <span className="text-xs font-semibold tracking-wide text-accent-sky">
            ✦ Sistema Central de Gestión Territorial &amp; Operativa
          </span>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="mt-6 text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-800 md:text-5xl lg:text-6xl">
        <span className="shimmer-text">Plataforma Operativa Tu Casa</span>
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-navy-500 md:text-lg">
        Ecosistema unificado de captura de datos, geolocalización en tiempo real,
        seguimiento clínico-social y articulación de equipos en territorio.
      </p>
    </section>
  );
}
