import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ModulesGrid from '@/components/ModulesGrid';
import Footer from '@/components/Footer';
import ToastContainer, { type ToastData } from '@/components/Toast';
import { operationalModules } from '@/data/modules';
import { useState, useCallback } from 'react';

function App() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showPendingToast = useCallback(() => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      {
        id,
        message: `Módulo CUIDA en fase de sincronización — Disponible próximamente`,
      },
    ]);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-command-center">
      {/* Tech grid overlay */}
      <div className="pointer-events-none fixed inset-0 bg-tech-grid" />
      {/* Ambient lighting */}
      <div className="pointer-events-none fixed inset-0 bg-ambient-neon animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pt-12 md:pt-16">
          <ModulesGrid modules={operationalModules} onPendingClick={showPendingToast} />
        </main>
        <Footer />
      </div>

      {/* Toast notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
