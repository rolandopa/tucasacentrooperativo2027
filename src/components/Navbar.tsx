const LOGO_URL = 'https://i.ibb.co/CKm626ZM/descarga-1.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-4 md:gap-5">
          <img
            src={LOGO_URL}
            alt="Plataforma Operativa Tu Casa"
            className="h-20 w-20 md:h-24 md:w-24 rounded-2xl object-contain bg-white shadow-sm ring-1 ring-slate-200"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-navy-800 md:text-xl">
              Plataforma Operativa
            </span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-accent-sky">
              TU CASA
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
