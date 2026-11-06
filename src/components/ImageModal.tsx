import { useEffect, useState } from 'react';
import { X, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageModalProps {
  open: boolean;
  title: string;
  subtitle?: string;
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({
  open,
  title,
  subtitle,
  imageUrl,
  onClose,
}: ImageModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (open) {
      setZoomLevel(1);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 animate-float-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
        {/* Accent top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent-orange via-accent-sky to-accent-emerald" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div className="flex flex-col pr-4">
            <h2 id="image-modal-title" className="text-base font-bold text-navy-800 sm:text-lg">
              {title}
            </h2>
            {subtitle && (
              <span className="text-xs font-medium text-navy-500">
                {subtitle}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="rounded-lg p-1 text-navy-600 transition-colors hover:bg-white hover:text-navy-900 disabled:opacity-40"
                aria-label="Alejar"
                title="Alejar imagen"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-2 text-xs font-semibold tabular-nums text-navy-700 hover:text-navy-900"
                title="Restablecer tamaño"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="rounded-lg p-1 text-navy-600 transition-colors hover:bg-white hover:text-navy-900 disabled:opacity-40"
                aria-label="Acercar"
                title="Acercar imagen"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  onClick={handleResetZoom}
                  className="ml-1 rounded-lg p-1 text-navy-500 transition-colors hover:bg-white hover:text-navy-900"
                  aria-label="Restablecer"
                  title="Restablecer zoom"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-navy-700 transition-colors hover:bg-slate-100"
              title="Abrir imagen completa en nueva pestaña"
            >
              <ExternalLink className="h-3.5 w-3.5 text-accent-sky" />
              <span className="hidden sm:inline">Ver original</span>
            </a>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-navy-500 transition-colors hover:bg-slate-200 hover:text-navy-800"
              aria-label="Cerrar ventana"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image Content container */}
        <div className="relative flex flex-1 items-center justify-center overflow-auto bg-slate-900/5 p-3 sm:p-6">
          <div className="flex items-center justify-center transition-transform duration-200 ease-out">
            <img
              src={imageUrl}
              alt={title}
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-md transition-transform duration-200"
              loading="eager"
            />
          </div>
        </div>

        {/* Footer info bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/80 px-5 py-3 text-xs text-navy-500 sm:px-6">
          <span className="font-medium">Esquema Operativo — Visualización en tiempo real</span>
          <span className="text-[11px] text-navy-400">Presiona Esc o el botón cerrar para volver al centro de mando</span>
        </div>
      </div>
    </div>
  );
}
