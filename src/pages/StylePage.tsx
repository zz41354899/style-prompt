import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, Wand2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styleComponents } from '../components/styles';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const StylePage: React.FC = () => {
  const { styleId } = useParams<{ styleId: string }>();
  const { t } = useTranslation();
  const SelectedComponent = styleComponents[styleId || 'S01'];
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  // Detect device mode based on window width
  useEffect(() => {
    const updateDeviceMode = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceMode('mobile');
      } else if (width < 1024) {
        setDeviceMode('tablet');
      } else {
        setDeviceMode('desktop');
      }
    };

    updateDeviceMode();
    window.addEventListener('resize', updateDeviceMode);
    return () => window.removeEventListener('resize', updateDeviceMode);
  }, []);

  if (!SelectedComponent) {
    return (
      <main className="flex-1 bg-white overflow-auto flex items-center justify-center">
        <div className="text-gray-600">{t('stylePage.styleNotFound')}</div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        <SelectedComponent deviceMode={deviceMode} />
      </main>

      {/* Bottom Navigation Bar - RWD */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-md md:max-w-none">
        <div className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl shadow-2xl">
          <Link
            to={`/${styleId || 'S01'}`}
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-colors"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">{t('stylePage.home')}</span>
          </Link>
          <div className="w-px h-5 md:h-6 bg-white/20" />
          <Link
            to={`/builder/${styleId || 'S01'}`}
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-colors"
          >
            <Wand2 className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">{t('stylePage.builder')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
