import { useEffect, useState } from 'react';

export function InstallScreen() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2E7D32] text-white p-4">
      <img src="/icon.svg" alt="Parque Itaimbe" className="w-32 h-32 mb-8" />
      <h1 className="text-3xl font-bold mb-4">Parque Itaimbe</h1>
      <p className="text-center mb-8">
        Para usar o aplicativo, por favor instale-o na sua tela inicial.
      </p>
      {isInstallable ? (
        <button
          onClick={handleInstallClick}
          className="bg-white text-[#2E7D32] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          Instalar Aplicativo
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-4">Para instalar o aplicativo:</p>
          <ol className="text-left space-y-2">
            <li>1. Abra o menu do navegador (três pontos)</li>
            <li>2. Selecione "Adicionar à tela inicial"</li>
            <li>3. Clique em "Adicionar"</li>
          </ol>
        </div>
      )}
    </div>
  );
} 