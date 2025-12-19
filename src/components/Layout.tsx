import React from 'react';
import { Outlet, useNavigate, useParams, NavLink, Link } from 'react-router-dom';
import { X, Menu, Wand2, Monitor, Smartphone, Laptop, Eye, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '../data/styles';
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
};

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const Layout: React.FC = () => {
  const { styleId } = useParams<{ styleId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [deviceMode, setDeviceMode] = React.useState<DeviceMode>('desktop');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [showPromptModal, setShowPromptModal] = React.useState(false);
  
  // 使用 URL 參數作為唯一的真相來源
  const selectedStyle = styleId || 'S01';

  // 響應式設備模式檢測
  React.useEffect(() => {
    const updateDeviceMode = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceMode('mobile'); // 手機裝置預設為手機模式
      } else if (width < 1024) {
        setDeviceMode('tablet');
      } else {
        setDeviceMode('desktop');
      }
    };

    // 初始化設備模式
    updateDeviceMode();

    // 監聽螢幕大小變化
    window.addEventListener('resize', updateDeviceMode);

    // 清理事件監聽器
    return () => window.removeEventListener('resize', updateDeviceMode);
  }, []);

  const currentStyle = styles.find(s => s.id === selectedStyle);

  // Generate prompt for current style
  const generatePrompt = async () => {
    if (!currentStyle) return;
    
    try {
      // Simulate API call or prompt generation
      const prompt = `Design a ${currentStyle.name.toLowerCase()} website with the following characteristics:
${currentStyle.description}

Key Design Elements:
- Architecture: Modern, clean structure with balanced proportions
- DNA: ${currentStyle.name} aesthetic with ${currentStyle.id.toLowerCase()} color palette
- Considerations: Focus on user experience, accessibility, and responsive design

Implementation Guidelines:
- Use semantic HTML5 elements
- Implement responsive grid system
- Apply consistent spacing and typography
- Ensure cross-browser compatibility
- Optimize for performance and SEO`;

      console.log('Generated prompt:', prompt);
    } catch (error) {
      console.error('Failed to generate prompt:', error);
    }
  };

  // Handle style selection - only navigate in preview mode, not in builder mode
  const handleStyleSelect = (newStyleId: string) => {
    const currentPath = window.location.pathname;
    
    // In builder mode, don't navigate (style is managed internally by PromptBuilder)
    if (currentPath.includes('/builder')) {
      return;
    }
    
    // In preview mode, navigate to the new style
    navigate(`/${newStyleId}`);
  };

  return (
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
          <Link to="/" className="text-sm md:text-lg font-semibold text-white flex items-center gap-1 hover:opacity-80 transition-opacity">
            Style<span className="transition-colors duration-300" style={{ color: themeColors[selectedStyle || 'S01'] }}>Prompts</span>
            <span className="text-2xl md:text-3xl font-black transition-colors duration-300" style={{ color: themeColors[selectedStyle || 'S01'] }}>/</span>
          </Link>
        </div>

        {/* Middle Dynamic Island Navigation - Desktop */}
        <div className="hidden lg:flex items-center justify-between px-4 py-2 bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm flex-shrink-0" style={{ minWidth: '400px' }}>
          <NavLink
            to={styleId ? `/${styleId}` : '/'}
            className={({ isActive }) => `flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
            title={t('layout.preview')}
          >
            <Eye className="w-5 h-5" />
          </NavLink>
          <NavLink
            to={styleId ? `/builder/${styleId}` : '/builder'}
            className={({ isActive }) => `flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
            title={t('layout.promptBuilder')}
          >
            <Wand2 className="w-5 h-5" />
          </NavLink>
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
              deviceMode === 'desktop'
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
            title={t('layout.desktop')}
          >
            <Monitor className="w-5 h-5" />
          </button>
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
              deviceMode === 'tablet'
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
            title={t('layout.tablet')}
          >
            <Laptop className="w-5 h-5" />
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
              deviceMode === 'mobile'
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
            title={t('layout.mobile')}
          >
            <Smartphone className="w-5 h-5" />
          </button>
          <a
            href="https://buymeacoffee.com/zz41354899y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 text-white/40 hover:text-white/80 hover:bg-white/5"
            title={t('layout.buyMeACoffee')}
          >
            <Coffee className="w-5 h-5" />
          </a>
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
                className={`w-full text-left px-4 py-3 border-b border-white/5 transition-all ${
                  selectedStyle === style.id
                    ? 'bg-purple-500/10 border-l-2 border-l-purple-500'
                    : 'hover:bg-white/5 border-l-2 border-l-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/30">{style.id}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium truncate ${
                      selectedStyle === style.id ? 'text-purple-300' : 'text-white/80'
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
                    className={`w-full text-left px-4 py-3 border-b border-white/5 transition-all ${
                      selectedStyle === style.id
                        ? 'bg-purple-500/10 border-l-2 border-l-purple-500'
                        : 'hover:bg-white/5 border-l-2 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/30">{style.id}</span>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium truncate ${
                          selectedStyle === style.id ? 'text-purple-300' : 'text-white/80'
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
        <Outlet context={{ deviceMode, setDeviceMode, showPromptModal, setShowPromptModal, generatePrompt }} />
      </div>

      {/* Mobile Bottom Dynamic Island Navigation */}
      <div className="lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-between px-2 py-1.5 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl" style={{ width: 'auto', minWidth: '320px' }}>
          <NavLink
            to={`/${styleId || 'S01'}`}
            className={({ isActive }) => `flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={t('layout.preview')}
          >
            <Eye className="w-4 h-4" />
          </NavLink>
          <NavLink
            to={`/builder/${styleId || 'S01'}`}
            className={({ isActive }) => `flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={t('layout.promptBuilder')}
          >
            <Wand2 className="w-4 h-4" />
          </NavLink>
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
              deviceMode === 'desktop'
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={t('layout.desktop')}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
              deviceMode === 'tablet'
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={t('layout.tablet')}
          >
            <Laptop className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
              deviceMode === 'mobile'
                ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
            title={t('layout.mobile')}
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <a
            href="https://buymeacoffee.com/zz41354899y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 text-white/60 hover:text-white hover:bg-white/10"
            title={t('layout.buyMeACoffee')}
          >
            <Coffee className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Prompt Modal - Now handled by route */}
      
      {/* Language Switcher */}
      <LanguageSwitcher />
    </div>
  );
};
