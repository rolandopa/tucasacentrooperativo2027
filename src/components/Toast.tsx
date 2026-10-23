import { useEffect, useState } from 'react';
import { Siren, X } from 'lucide-react';

export interface ToastData {
  id: number;
  message: string;
}

interface ToastProps {
  toast: ToastData;
  onDismiss: (id: number) => void;
}

function ToastItem({ toast, onDismiss }: ToastProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => onDismiss(toast.id), 300);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 rounded-2xl border border-accent-rose/30 bg-white/95 px-4 py-3.5 shadow-xl backdrop-blur-xl ${
        leaving ? 'animate-toast-out' : 'animate-toast-in'
      }`}
      style={{ boxShadow: '0 8px 32px -8px rgba(225,29,72,0.25)' }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-rose/10">
        <Siren className="h-5 w-5 text-accent-rose" />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm font-bold text-navy-800">Módulo en Sincronización</span>
        <span className="text-xs leading-relaxed text-navy-500">{toast.message}</span>
      </div>
      <button
        onClick={() => {
          setLeaving(true);
          setTimeout(() => onDismiss(toast.id), 300);
        }}
        className="rounded-lg p-1 text-navy-400 transition-colors hover:bg-slate-100 hover:text-navy-800"
        aria-label="Cerrar notificación"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: ToastData[];
  onDismiss: (id: number) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex w-full max-w-sm flex-col gap-3">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
