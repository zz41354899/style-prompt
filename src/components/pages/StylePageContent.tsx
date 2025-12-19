'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Wand2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styleComponents } from '@/components/styles';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

interface StylePageContentProps {
  styleId: string;
}

export const StylePageContent: React.FC<StylePageContentProps> = ({ styleId }) => {
  const { t } = useTranslation();
  const SelectedComponent = styleComponents[styleId || 'S01'];
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

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
    <motion.div 
      className="min-h-screen bg-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.main 
        className="flex-1 overflow-auto pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SelectedComponent deviceMode={deviceMode} />
      </motion.main>

      <motion.div 
        className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-md md:max-w-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl shadow-2xl">
          <Link
            href="/"
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-colors"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">{t('stylePage.home')}</span>
          </Link>
          <div className="w-px h-5 md:h-6 bg-white/20" />
          <Link
            href={`/builder/${styleId || 'S01'}`}
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-colors"
          >
            <Wand2 className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">{t('stylePage.builder')}</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
