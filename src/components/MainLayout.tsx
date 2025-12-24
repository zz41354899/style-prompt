'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu, Wand2, Eye, Coffee, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '@/data/styles';
import { LanguageSwitcher } from './LanguageSwitcher';

// 主題顏色映射
const themeColors: Record<string, string> = {
  'S01': '#3B82F6',
  'S02': '#6B7280',
  'S03': 'rgb(0, 71, 171)',
  'S04': '#E53935',
  'S05': '#00FF66',
  'S06': '#22D3EE',
  'S07': '#FF4FD8',
  'S08': '#FF6B35',
  'S09': '#FFEB3B',
  'S10': '#8B7355',
  'S11': '#D4A574',
  'S12': '#8B7355',
  'S13': '#6750A4',
  'S14': '#A855F7',
  'S15': '#E4E9F0',
  'S16': '#58a6ff',
  'S17': '#FF0000',
  'S18': 'rgb(92, 255, 177)',
  'S19': '#8B5CF6',
  'S20': '#00D9FF',
  'S21': '#D4A574',
  'S22': '#00D9FF',
  'S23': '#FF6B9D',
  'S24': '#06B6D4',
  'S25': '#F97316',
  'S26': '#10B981',
  'S27': '#EC4899',
  'S28': '#8B5CF6',
  'S29': '#14B8A6',
  'S30': '#F59E0B',
  'S31': '#EF4444',
  'S32': '#6366F1',
  'S33': '#84CC16',
  'S34': '#F472B6',
  'S35': '#22D3EE',
  'S36': '#A78BFA',
  'S37': '#FB923C',
  'S38': '#4ADE80',
  'S39': '#F87171',
  'S40': '#818CF8',
  'S41': '#FCD34D',
  'S42': '#2DD4BF',
  'S43': '#FB7185',
  'S44': '#A3E635',
  'S45': '#38BDF8',
  'S46': '#C084FC',
  'S47': '#FBBF24',
  'S48': '#34D399',
  'S49': '#F472B6',
  'S50': '#60A5FA',
  'S51': '#A855F7',
  'S52': '#FCA5A5',
  'S53': '#86EFAC',
  'S54': '#93C5FD',
  'S55': '#D8B4FE',
  'S56': '#FDE047',
  'S57': '#5EEAD4',
  'S58': '#FDA4AF',
  'S59': '#BEF264',
  'S60': '#7DD3FC',
  'S61': '#E879F9',
  'S62': '#FDBA74',
  'S63': '#6EE7B7',
  'S64': '#A5B4FC',
  'S65': '#F9A8D4',
  'S66': '#FEF08A',
  'S67': '#99F6E4',
  'S68': '#FECACA',
  'S69': '#D9F99D',
  'S70': '#BAE6FD',
  'S71': '#F5D0FE',
  'S72': '#FED7AA',
  'S73': '#A7F3D0',
  'S74': '#C7D2FE',
  'S75': '#FBCFE8',
  'S76': '#FEF9C3',
  'S77': '#A5F3FC',
  'S78': '#FECDD3',
  'S79': '#D4D4D8',
  'S80': '#E2E8F0',
  'S81': '#FF6B6B',
  'S82': '#4ECDC4',
  'S83': '#FFE66D',
  'S84': '#95E1D3',
  'S85': '#F38181',
  'S86': '#AA96DA',
  'S87': '#FCBAD3',
  'S88': '#FFFFD2',
  'S89': '#A8D8EA',
  'S90': '#AA96DA',
  'S91': '#FCBAD3',
  'S92': '#FFE5B4',
  'S93': '#98D8C8',
  'S94': '#F7DC6F',
  'S95': '#BB8FCE',
  'S96': '#85C1E9',
  'S97': '#F1948A',
  'S98': '#82E0AA',
  'S99': '#6750A4',
  'S100': '#F39C12',
};

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

interface LayoutContextType {
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;
  selectedStyle: string;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within MainLayout');
  }
  return context;
}

// 從路徑中提取 styleId
function extractStyleId(pathname: string): string {
  // /builder/S01 -> S01
  // /S01 -> S01
  // / -> S01
  const builderMatch = pathname.match(/^\/builder\/([A-Z]\d+)/);
  if (builderMatch) return builderMatch[1];

  const styleMatch = pathname.match(/^\/([A-Z]\d+)/);
  if (styleMatch) return styleMatch[1];

  return 'S01';
}

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedStyle = extractStyleId(pathname);
  const currentStyle = styles.find(s => s.id === selectedStyle);
  const isBuilderPage = pathname.includes('/builder');

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

  const handleStyleSelect = (newStyleId: string) => {
    if (isBuilderPage) {
      return;
    }
    router.push(`/${newStyleId}`);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <LayoutContext.Provider value={{ deviceMode, setDeviceMode, selectedStyle }}>
      <div className="h-screen bg-[#0a0a0a] flex flex-col pt-6">
        {/* Header */}
        <header className="flex-shrink-0 h-12 md:h-14 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-2 md:px-4 lg:px-6 pb-6">
          {/* Left Logo */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2.5 md:p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5 md:w-5 md:h-5" /> : <Menu className="w-5 h-5 md:w-5 md:h-5" />}
            </button>
            <Link
              href="/"
              onClick={handleLogoClick}
              className="text-sm md:text-lg font-semibold text-white flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              Style<span className="transition-colors duration-300" style={{ color: themeColors[selectedStyle || 'S01'] }}>Prompts</span>
              <span className="text-2xl md:text-3xl font-black transition-colors duration-300" style={{ color: themeColors[selectedStyle || 'S01'] }}>/</span>
            </Link>
          </div>

          {/* Middle Dynamic Island Navigation - Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm flex-shrink-0">
            <Link
              href="/"
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 text-white/40 hover:text-white/80 hover:bg-white/5"
              title={t('layout.home')}
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              href={selectedStyle ? `/${selectedStyle}` : '/'}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${!isBuilderPage
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              title={t('layout.preview')}
            >
              <Eye className="w-5 h-5" />
            </Link>
            <Link
              href={selectedStyle ? `/builder/${selectedStyle}` : '/builder'}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${isBuilderPage
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              title={t('layout.promptBuilder')}
            >
              <Wand2 className="w-5 h-5" />
            </Link>
          </div>

          {/* Right - Style Name Display */}
          <div className="flex items-center">
            {currentStyle && (
              <div className="text-right">
                <div className="text-xs text-white/60">{t('layout.currentStyle')}</div>
                <div
                  className="text-sm font-medium text-white truncate"
                  style={{ color: themeColors[currentStyle.id] }}
                >
                  {t(`styles.${currentStyle.id}.name`)}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar - Desktop */}
          <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-sm font-medium text-white/80">{t('layout.designStyles')}</h2>
              <p className="text-xs text-white/40 mt-1">{t('layout.stylesAvailable', { count: styles.length })}</p>
            </div>
            <div className="flex-1 overflow-y-auto">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => handleStyleSelect(style.id)}
                  className={`w-full text-left px-4 py-3 border-b border-white/5 transition-all ${selectedStyle === style.id
                    ? 'bg-purple-500/10 border-l-2 border-l-purple-500'
                    : 'hover:bg-white/5 border-l-2 border-l-transparent'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white/30">{style.id}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium truncate ${selectedStyle === style.id ? 'text-purple-300' : 'text-white/80'
                        }`}>
                        {t(`styles.${style.id}.name`)}
                      </div>
                      <div className="text-xs text-white/40 truncate mt-0.5">
                        {t(`styles.${style.id}.description`)}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Mobile Sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
              <div className="fixed left-0 top-0 bottom-0 w-80 bg-[#0a0a0a] flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <h2 className="text-lg font-semibold text-white">{t('layout.designStyles')}</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => {
                        handleStyleSelect(style.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 border-b border-white/5 transition-all ${selectedStyle === style.id
                        ? 'bg-purple-500/10 border-l-2 border-l-purple-500'
                        : 'hover:bg-white/5 border-l-2 border-l-transparent'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-white/30">{style.id}</span>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium truncate ${selectedStyle === style.id ? 'text-purple-300' : 'text-white/80'
                            }`}>
                            {t(`styles.${style.id}.name`)}
                          </div>
                          <div className="text-xs text-white/40 truncate mt-0.5">
                            {t(`styles.${style.id}.description`)}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Page Content */}
          {children}
        </div>

        {/* Mobile Bottom Dynamic Island Navigation */}
        <div className="lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center justify-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
            <Link
              href="/"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 text-white/60 hover:text-white hover:bg-white/10"
              title={t('layout.home')}
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              href={`/${selectedStyle || 'S01'}`}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 ${!isBuilderPage
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              title={t('layout.preview')}
            >
              <Eye className="w-5 h-5" />
            </Link>
            <Link
              href={`/builder/${selectedStyle || 'S01'}`}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 ${isBuilderPage
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              title={t('layout.promptBuilder')}
            >
              <Wand2 className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </LayoutContext.Provider>
  );
};
