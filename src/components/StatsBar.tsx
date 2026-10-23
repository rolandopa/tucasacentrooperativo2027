import { Database, MapPin, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  {
    icon: Database,
    label: 'Módulos Integrados',
    value: '6',
    color: 'text-accent-sky',
    glow: 'shadow-[0_0_20px_-6px_rgba(2,132,199,0.3)]',
    iconBg: 'bg-accent-sky/10',
  },
  {
    icon: Clock,
    label: 'Monitoreo GPS',
    value: '24/7',
    color: 'text-accent-orange',
    glow: 'shadow-[0_0_20px_-6px_rgba(234,88,12,0.3)]',
    iconBg: 'bg-accent-orange/10',
  },
  {
    icon: MapPin,
    label: 'Cobertura Territorial',
    value: '100%',
    color: 'text-accent-emerald',
    glow: 'shadow-[0_0_20px_-6px_rgba(5,150,105,0.3)]',
    iconBg: 'bg-accent-emerald/10',
  },
  {
    icon: ShieldCheck,
    label: 'Cifrado & Seguridad',
    value: 'AES-256',
    color: 'text-accent-violet',
    glow: 'shadow-[0_0_20px_-6px_rgba(124,58,237,0.3)]',
    iconBg: 'bg-accent-violet/10',
  },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="glass-card flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg} ${stat.color} ${stat.glow}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs font-medium text-navy-500">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
