import { useState, useCallback } from 'react';
import type { OperationalModule } from '@/data/modules';
import ModuleCard from './ModuleCard';
import PasswordGate from './PasswordGate';
import ImageModal from './ImageModal';

interface ModulesGridProps {
  modules: OperationalModule[];
  onPendingClick: (moduleName: string) => void;
}

export default function ModulesGrid({ modules, onPendingClick }: ModulesGridProps) {
  const [gatedModule, setGatedModule] = useState<OperationalModule | null>(null);
  const [popupModule, setPopupModule] = useState<OperationalModule | null>(null);

  const handleGatedClick = useCallback((module: OperationalModule) => {
    setGatedModule(module);
  }, []);

  const handlePopupClick = useCallback((module: OperationalModule) => {
    setPopupModule(module);
  }, []);

  const handleGateSuccess = useCallback(() => {
    if (gatedModule?.link) {
      window.open(gatedModule.link, '_blank', 'noopener,noreferrer');
    }
    setGatedModule(null);
  }, [gatedModule]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            index={index}
            onPendingClick={onPendingClick}
            onGatedClick={handleGatedClick}
            onPopupClick={handlePopupClick}
          />
        ))}
      </div>

      <PasswordGate
        open={gatedModule !== null}
        moduleTitle={gatedModule?.title ?? ''}
        password={gatedModule?.password ?? 'rionegro*2027'}
        onSuccess={handleGateSuccess}
        onCancel={() => setGatedModule(null)}
      />

      <ImageModal
        open={popupModule !== null}
        title={popupModule?.title ?? 'Esquema Operativo'}
        subtitle={popupModule?.subtitle}
        imageUrl={popupModule?.popupImage ?? ''}
        onClose={() => setPopupModule(null)}
      />
    </>
  );
}
