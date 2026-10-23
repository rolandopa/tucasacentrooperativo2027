import { ArrowUpRight, Database, Activity, Radar, Smartphone, ShieldAlert, Siren, Globe, Lock } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { OperationalModule, ModuleTheme } from '@/data/modules';
import { themeConfig } from '@/data/modules';

const iconMap = {
  Database,
  Activity,
  Radar,
  Smartphone,
  ShieldAlert,
  Siren,
  Globe,
} as const;

interface ModuleCardProps {
  module: OperationalModule;
  index: number;
  onPendingClick: (moduleName: string) => void;
  onGatedClick: (module: OperationalModule) => void;
}

export default function ModuleCard({ module, index, onPendingClick, onGatedClick }: ModuleCardProps) {
  const theme = themeConfig[module.theme as ModuleTheme];
  const Icon = iconMap[module.iconName];

  const handleClick = () => {
    if (module.link === null) {
      onPendingClick(module.title);
    }
  };

  const isPending = module.link === null;
  const isImageOnly = Boolean(module.imageOnly);
  const isGated = Boolean(module.requiresPassword) && module.link !== null;

  /* ── Image-only card (RED & CUIDA) ── */
  if (isImageOnly) {
    const baseImgClass = `group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)] animate-float-in min-h-[200px]`;
    const cardStyle: CSSProperties = {
      animationDelay: `${index * 80}ms`,
      backgroundColor: module.cardBg ?? 'transparent',
    };

    if (isPending) {
      return (
        <button
          onClick={handleClick}
          className={`${baseImgClass} cursor-pointer`}
          style={cardStyle}
          aria-label={`Módulo ${module.title}`}
        >
          <img
            src={module.imageOnly!}
            alt={module.title}
            className="h-full w-full flex-1 object-contain p-4"
            style={{ minHeight: '200px' }}
          />
        </button>
      );
    }

    if (isGated) {
      return (
        <button
          onClick={() => onGatedClick(module)}
          className={`${baseImgClass} cursor-pointer`}
          style={cardStyle}
          aria-label={`Abrir ${module.title}`}
        >
          <img
            src={module.imageOnly!}
            alt={module.title}
            className="h-full w-full flex-1 object-contain p-4"
            style={{ minHeight: '200px' }}
          />
        </button>
      );
    }

    return (
      <a
        href={module.link ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={baseImgClass}
        style={cardStyle}
        aria-label={`Abrir ${module.title}`}
      >
        <img
          src={module.imageOnly!}
          alt={module.title}
          className="h-full w-full flex-1 object-contain p-4"
          style={{ minHeight: '200px' }}
        />
      </a>
    );
  }

  /* ── Standard card ── */
  const cardContent = (
    <>
      {/* Glow halo on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${theme.glow}, transparent 70%)`,
        }}
      />

      <div className="relative flex h-full flex-col gap-4 p-6">
        {/* Top row: icon + arrow */}
        <div className="flex items-start justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg} ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className={`h-7 w-7 ${theme.iconText}`} />
          </div>
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 opacity-0 transition-all duration-300 group-hover:opacity-100 ${theme.arrowColor}`}
          >
            {isPending ? (
              <Lock className="h-4 w-4" />
            ) : (
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            )}
          </div>
        </div>

        {/* Category badge */}
        <div className="flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${theme.badgeBg} ${theme.badgeText}`}
          >
            {module.category}
          </span>
          {isPending && (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-navy-500">
              Próximamente
            </span>
          )}
        </div>

        {/* Title + description */}
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-base font-bold leading-snug text-navy-800 md:text-lg">
            {module.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-navy-500">
            {module.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent to-transparent transition-all duration-500 group-hover:from-transparent group-hover:via-current group-hover:to-transparent"
          style={{ color: theme.color }}
        />
      </div>
    </>
  );

  const baseClass = `glass-card group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${theme.border} ${theme.hoverGlow} animate-float-in`;

  if (isPending) {
    return (
      <button
        onClick={handleClick}
        className={`${baseClass} text-left cursor-pointer`}
        style={{ animationDelay: `${index * 80}ms` }}
        aria-label={`Módulo ${module.title}`}
      >
        {cardContent}
      </button>
    );
  }

  if (isGated) {
    return (
      <button
        onClick={() => onGatedClick(module)}
        className={`${baseClass} text-left cursor-pointer`}
        style={{ animationDelay: `${index * 80}ms` }}
        aria-label={`Abrir ${module.title}`}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <a
      href={module.link ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} text-left`}
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`Abrir ${module.title}`}
    >
      {cardContent}
    </a>
  );
}
