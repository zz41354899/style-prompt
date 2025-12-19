'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '@/data/styles';
import { styleComponents } from '@/components/styles';
import { useLayoutContext } from '@/components/MainLayout';

interface PreviewContentProps {
  styleId: string;
}

export const PreviewContent: React.FC<PreviewContentProps> = ({ styleId }) => {
  const { deviceMode } = useLayoutContext();
  const { t } = useTranslation();
  const effectiveStyleId = styleId || 'S01';
  const currentStyle = styles.find(s => s.id === effectiveStyleId);
  const SelectedComponent = styleComponents[effectiveStyleId];

  useEffect(() => {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(scrollX, scrollY);
    });
    
    return () => cancelAnimationFrame(rafId);
  }, [deviceMode]);

  if (!currentStyle || !SelectedComponent) {
    return (
      <main className="flex-1 bg-[#111] overflow-hidden flex items-center justify-center">
        <div className="text-white/60">{t('preview.styleNotFound')}</div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#111] overflow-hidden flex flex-col p-2 md:p-4 lg:p-8">
      {/* Preview Info and Open Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-3 md:mb-4">
        <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm">
          <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="leading-tight">{t('preview.previewInfo')}</span>
        </div>
        <Link
          href={`/style/${effectiveStyleId}`}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white hover:bg-gray-100 text-black text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
        >
          {t('preview.open')}
        </Link>
      </div>

      {/* Device Frame */}
      <div className="flex-1 min-h-0">
        <div className="relative w-full h-full min-h-0">
          {/* Mobile Frame */}
          <div
            className={`
              absolute inset-0 transition-all duration-500 ease-in-out
              ${deviceMode === 'mobile' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
          >
            <div 
              className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col mx-auto"
              style={{ 
                width: '375px', 
                height: '812px',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            >
              <div className="flex-1 bg-white overflow-auto">
                <div className="min-h-full">
                  <SelectedComponent deviceMode={deviceMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Frame */}
          <div
            className={`
              absolute inset-0 transition-all duration-500 ease-in-out flex justify-center
              ${deviceMode === 'tablet' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
          >
            <div 
              className="h-full bg-white rounded-lg shadow-2xl overflow-auto min-h-0"
              style={{ width: '768px', maxWidth: '100%' }}
            >
              <div className="min-h-full w-full">
                <SelectedComponent deviceMode={deviceMode} />
              </div>
            </div>
          </div>

          {/* Desktop Frame */}
          <div
            className={`
              w-full h-full transition-all duration-500 ease-in-out
              ${deviceMode === 'desktop' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
          >
            <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-auto min-h-0">
              <div className="min-h-full w-full">
                <SelectedComponent deviceMode={deviceMode} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Open Button */}
      <div className="lg:hidden mt-4">
        <Link
          href={`/style/${effectiveStyleId}`}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-colors"
        >
          {t('preview.open')}
        </Link>
      </div>
    </main>
  );
};
