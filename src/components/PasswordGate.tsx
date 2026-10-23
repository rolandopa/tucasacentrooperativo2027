import { useState, useRef, useEffect } from 'react';
import { Lock, X, ArrowRight, AlertCircle } from 'lucide-react';

interface PasswordGateProps {
  open: boolean;
  moduleTitle: string;
  password: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PasswordGate({
  open,
  moduleTitle,
  password,
  onSuccess,
  onCancel,
}: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setValue('');
      setError(false);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onCancel]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === password) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm animate-float-in"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 animate-float-in">
        {/* Accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-accent-sky via-accent-cyan to-accent-emerald" />

        <div className="flex items-start justify-between px-6 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-sky/10 ring-1 ring-accent-sky/30">
              <Lock className="h-5 w-5 text-accent-sky" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-navy-800">Acceso restringido</span>
              <span className="text-xs text-navy-500">Ingresa la contraseña para continuar</span>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="rounded-xl p-1.5 text-navy-400 transition-colors hover:bg-slate-100 hover:text-navy-700"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 pb-6 pt-4">
          <p className="mb-4 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-navy-600">
            {moduleTitle}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                Contraseña
              </span>
              <input
                ref={inputRef}
                type="password"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="••••••••"
                className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm font-medium text-navy-800 outline-none transition-all placeholder:text-navy-300 focus:ring-2 ${
                  error
                    ? 'border-accent-rose/50 focus:border-accent-rose focus:ring-accent-rose/20'
                    : 'border-slate-200 focus:border-accent-sky focus:ring-accent-sky/20'
                }`}
                autoComplete="off"
              />
            </label>

            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-accent-rose/10 px-3 py-2 text-xs font-semibold text-accent-rose animate-float-in">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Contraseña incorrecta. Intenta de nuevo.
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-navy-500 transition-colors hover:bg-slate-100 hover:text-navy-700"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="group flex items-center gap-2 rounded-xl bg-navy-800 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-navy-900 hover:shadow-[0_8px_24px_-8px_rgba(15,23,42,0.5)]"
              >
                Ingresar
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
