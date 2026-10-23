export type ModuleTheme = 'cyan' | 'emerald' | 'orange' | 'violet' | 'rose' | 'sky';

export interface OperationalModule {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  link: string | null;
  theme: ModuleTheme;
  iconName: ModuleIconName;
  /** If provided, the card displays only this image filling the entire card. */
  imageOnly?: string;
  /** Background color for image-only cards, filling the area around the image. */
  cardBg?: string;
  /** If true, the card asks for a password before opening the destination link. */
  requiresPassword?: boolean;
}

export type ModuleIconName =
  | 'Database'
  | 'Activity'
  | 'Radar'
  | 'Smartphone'
  | 'ShieldAlert'
  | 'Siren'
  | 'Globe';

export const themeConfig: Record<
  ModuleTheme,
  {
    color: string;
    glow: string;
    iconBg: string;
    iconText: string;
    border: string;
    hoverGlow: string;
    badgeBg: string;
    badgeText: string;
    arrowColor: string;
  }
> = {
  cyan: {
    color: '#00C2E8',
    glow: 'rgba(0,194,232,0.20)',
    iconBg: 'bg-accent-cyan/10',
    iconText: 'text-accent-cyan',
    border: 'hover:border-accent-cyan/50',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-8px_rgba(0,194,232,0.30)]',
    badgeBg: 'bg-accent-cyan/10',
    badgeText: 'text-accent-sky',
    arrowColor: 'text-accent-cyan',
  },
  emerald: {
    color: '#059669',
    glow: 'rgba(5,150,105,0.20)',
    iconBg: 'bg-accent-emerald/10',
    iconText: 'text-accent-emerald',
    border: 'hover:border-accent-emerald/50',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-8px_rgba(5,150,105,0.30)]',
    badgeBg: 'bg-accent-emerald/10',
    badgeText: 'text-accent-emerald',
    arrowColor: 'text-accent-emerald',
  },
  orange: {
    color: '#EA580C',
    glow: 'rgba(234,88,12,0.20)',
    iconBg: 'bg-accent-orange/10',
    iconText: 'text-accent-orange',
    border: 'hover:border-accent-orange/50',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-8px_rgba(234,88,12,0.30)]',
    badgeBg: 'bg-accent-orange/10',
    badgeText: 'text-accent-orange',
    arrowColor: 'text-accent-orange',
  },
  violet: {
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.20)',
    iconBg: 'bg-accent-violet/10',
    iconText: 'text-accent-violet',
    border: 'hover:border-accent-violet/50',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-8px_rgba(124,58,237,0.30)]',
    badgeBg: 'bg-accent-violet/10',
    badgeText: 'text-accent-violet',
    arrowColor: 'text-accent-violet',
  },
  rose: {
    color: '#E11D48',
    glow: 'rgba(225,29,72,0.20)',
    iconBg: 'bg-accent-rose/10',
    iconText: 'text-accent-rose',
    border: 'hover:border-accent-rose/50',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-8px_rgba(225,29,72,0.30)]',
    badgeBg: 'bg-accent-rose/10',
    badgeText: 'text-accent-rose',
    arrowColor: 'text-accent-rose',
  },
  sky: {
    color: '#0284C7',
    glow: 'rgba(2,132,199,0.20)',
    iconBg: 'bg-accent-sky/10',
    iconText: 'text-accent-sky',
    border: 'hover:border-accent-sky/50',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-8px_rgba(2,132,199,0.30)]',
    badgeBg: 'bg-accent-sky/10',
    badgeText: 'text-accent-sky',
    arrowColor: 'text-accent-sky',
  },
};

export const operationalModules: OperationalModule[] = [
  {
    id: 'base-datos',
    title: 'Base de Datos',
    subtitle: 'Registro Maestro',
    category: 'Registro Maestro',
    description:
      'Consolidado central de beneficiarios, fichas poblacionales e historial de atención comunitaria.',
    link: 'https://www.appsheet.com/start/d80a0973-f8ce-4217-95a2-d79d35feb44a',
    theme: 'cyan',
    iconName: 'Database',
    imageOnly: 'https://i.ibb.co/MQ94ncW/ca034418-904e-4b1a-98e4-1b75ebfc526a.jpg',
    cardBg: '#ffffff',
  },
  {
    id: 'red-seguimiento',
    title: 'RED: Registro, Evolución y Seguimiento',
    subtitle: 'Atención Biopsicosocial',
    category: 'Atención Biopsicosocial',
    description:
      'Expediente digital, evolución individual, diagnósticos de salud y seguimiento terapéutico.',
    link: 'https://www.appsheet.com/start/6759e221-2eac-4477-ad65-cf051a985dbf',
    theme: 'emerald',
    iconName: 'Activity',
    imageOnly: 'https://i.ibb.co/cK5zTsK1/logo-RED.png',
    cardBg: '#ffffff',
    requiresPassword: true,
  },
  {
    id: 'mapa-tactico',
    title: 'Mapa Táctico: Cubrimiento en Tiempo Real',
    subtitle: 'Geolocalización GPS',
    category: 'Geolocalización GPS',
    description:
      'Monitoreo satelital activo, rutas de patrullaje y despliegue territorial de gestores en vivo.',
    link: 'https://www.followmee.com/login.aspx',
    theme: 'orange',
    iconName: 'Radar',
    imageOnly: 'https://i.ibb.co/GQKwqtHJ/d2994071-2d83-4b57-a2bb-8c5126fb05bd.jpg',
    cardBg: '#ffffff',
  },
  {
    id: 'tu-casa-app',
    title: 'Plataforma Tu CasaApp',
    subtitle: 'Aplicativo Web',
    category: 'Aplicativo Web',
    description:
      'Acceso directo a la suite interactiva de herramientas de gestión y servicios Tu Casa.',
    link: 'https://apptucasa.netlify.app/',
    theme: 'violet',
    iconName: 'Smartphone',
    imageOnly: 'https://i.ibb.co/0pPMVd6W/1eaf0217-6c91-4128-bbff-5b2c8601173f.jpg',
    cardBg: '#ffffff',
    requiresPassword: true,
  },
  {
    id: 'cuida',
    title: 'CUIDA',
    subtitle: 'Canal Crítico',
    category: 'Canal Crítico',
    description:
      'Ruta de atención prioritaria y respuesta rápida ante contingencias sociales y habitanza en calle.',
    link: null,
    theme: 'rose',
    iconName: 'ShieldAlert',
    imageOnly: 'https://i.ibb.co/QvZm9sBb/5d802040-9082-47d6-8d3c-005b53f6c847.jpg',
    cardBg: '#ffffff',
  },
  {
    id: 'matriz-casos',
    title: 'Matriz de Casos y Emergencias Sociales',
    subtitle: 'Gestión de Contingencias',
    category: 'Gestión de Contingencias',
    description:
      'Registro, clasificación y seguimiento de casos sociales y emergencias territoriales con respuesta coordinada.',
    link: 'https://www.appsheet.com/start/d606979e-5bc5-49dd-b646-8889d5b6fb11',
    theme: 'sky',
    iconName: 'Siren',
    imageOnly: 'https://i.ibb.co/HTPz6XBM/a5072758-238e-49bd-9770-c359d7ed4abb.jpg',
    cardBg: '#ffffff',
  },
  {
    id: 'tu-casa-web',
    title: 'Tu Casa Web',
    subtitle: 'Sitio Institucional',
    category: 'Sitio Institucional',
    description:
      'Acceso directo al portal web institucional Tu Casa con información, servicios y novedades del programa.',
    link: 'https://tucasarionegro.netlify.app/',
    theme: 'cyan',
    iconName: 'Globe',
    imageOnly: 'https://i.ibb.co/CKm626ZM/descarga-1.png',
    cardBg: '#ffffff',
  },
];
