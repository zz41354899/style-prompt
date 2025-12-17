import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Tablet, Menu, X, Copy, Check, Info, Coffee } from 'lucide-react';
import { createPortal } from 'react-dom';
import { styles } from './data/styles';
import {
  S01TechMinimal,
  S02MinimalistMonochrome,
  S03Mondrian,
  S04Swiss,
  S05Brutalist,
  S06Cyberpunk,
  S07Synthwave,
  S08Retro70s,
  S09Memphis,
  S10LuxuryEditorial,
  S11JapaneseMinimal,
  S12NatureOrganic,
  S13Material,
  S14Glassmorphism,
  S15Neumorphism,
  S16Terminal,
  S17BauhausModernism,
  S18RetroPixelUI,
} from './components/styles';

const styleComponents: Record<string, React.FC> = {
  S01: S01TechMinimal,
  S02: S02MinimalistMonochrome,
  S03: S03Mondrian,
  S04: S04Swiss,
  S05: S05Brutalist,
  S06: S06Cyberpunk,
  S07: S07Synthwave,
  S08: S08Retro70s,
  S09: S09Memphis,
  S10: S10LuxuryEditorial,
  S11: S11JapaneseMinimal,
  S12: S12NatureOrganic,
  S13: S13Material,
  S14: S14Glassmorphism,
  S15: S15Neumorphism,
  S16: S16Terminal,
  S17: S17BauhausModernism,
  S18: S18RetroPixelUI,
};

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

// 主題顏色映射 - 從組件中提取的實際主題色
const themeColors: Record<string, string> = {
  'S01': '#3B82F6', // Blue (TechMinimal - hover:text-blue-600)
  'S02': '#6B7280', // Gray (MinimalistMonochrome - 主要使用灰色調)
  'S03': 'rgb(0, 71, 171)', // Red (Mondrian - 使用純紅色)
  'S04': '#E53935', // Red (Swiss - #E53935)
  'S05': '#00FF66', // Black (Brutalist - 主要使用黑色)
  'S06': '#22D3EE', // Cyan (Cyberpunk - #22d3ee)
  'S07': '#FF4FD8', // Pink (Synthwave - #FF4FD8)
  'S08': '#FF6B35', // Orange (Retro70s - 橙色調)
  'S09': '#FFEB3B', // Yellow (Memphis - 黃色背景)
  'S10': '#8B7355', // Brown (Luxury Editorial - 棕色調)
  'S11': '#D4A574', // Beige (Japanese Minimal - 米色調)
  'S12': '#8B7355', // Brown (Nature Organic - #F7F4EE 背景)
  'S13': '#6750A4', // Blue (Material Design - Material Blue)
  'S14': '#A855F7', // Purple (Glassmorphism - 紫色光暈)
  'S15': '#E4E9F0', // Light Gray (Neumorphism - #e4e9f0 背景)
  'S16': '#58a6ff', // GitHub Blue (Terminal - #58a6ff)
  'S17': '#FF0000', // Red (Bauhaus - 紅色、黃色、藍色)
  'S18': 'rgb(92, 255, 177)', // Retro Pixel Green
};

function App() {
  const [selectedStyle, setSelectedStyle] = useState<string>('S01');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [promptText, setPromptText] = useState<string>('');
  const [promptLoading, setPromptLoading] = useState(false);
  const [promptError, setPromptError] = useState<string | null>(null);

  const SelectedComponent = styleComponents[selectedStyle];
  const currentStyle = styles.find(s => s.id === selectedStyle);
  
  // iframe 預覽相關
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeDoc, setIframeDoc] = useState<Document | null>(null);

  // Esc 鍵關閉 Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPromptModal) {
        setShowPromptModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPromptModal]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const setupIframe = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      // 複製主文檔的樣式到 iframe
      doc.head.innerHTML = '';
      const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
      styles.forEach((style) => {
        const clone = style.cloneNode(true);
        doc.head.appendChild(clone);
      });

      // 設置 iframe body 樣式
      doc.body.style.margin = '0';
      doc.body.style.padding = '0';
      doc.body.style.overflow = 'auto';
      doc.body.style.height = '100%';
      doc.body.style.background = 'transparent';
      doc.documentElement.style.height = '100%';
      doc.documentElement.style.background = 'transparent';

      setIframeDoc(doc);
    };

    // 初始設置
    setupIframe();
    
    // 監聽 iframe 載入
    iframe.addEventListener('load', setupIframe);
    
    return () => {
      iframe.removeEventListener('load', setupIframe);
    };
  }, []);

  // 當選擇的樣式改變時，重新渲染 iframe 內容
  useEffect(() => {
    if (iframeDoc && iframeDoc.body) {
      // 強制重新渲染
      setIframeDoc(null);
      setTimeout(() => {
        const iframe = iframeRef.current;
        if (iframe?.contentDocument) {
          setIframeDoc(iframe.contentDocument);
        }
      }, 0);
    }
  }, [selectedStyle]);

  // Prevent page jump when switching device mode
  useEffect(() => {
    // Save current scroll position
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    
    // Restore scroll position in next frame
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(scrollX, scrollY);
    });
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [deviceMode]);

  useEffect(() => {
    if (!showPromptModal) {
      setPromptLoading(false);
      setPromptError(null);
      return;
    }

    const fallbackPrompt = currentStyle?.prompt ?? '';
    const path = currentStyle?.promptPath;
    const controller = new AbortController();

    setPromptError(null);

    if (!path) {
      setPromptLoading(false);
      setPromptText(fallbackPrompt);
      return () => controller.abort();
    }

    setPromptLoading(true);

    (async () => {
      try {
        const res = await fetch(path, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const text = await res.text();
        setPromptText(text);
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;
        setPromptText(fallbackPrompt);
        setPromptError('Failed to load Prompt');
      } finally {
        setPromptLoading(false);
      }
    })();

    return () => controller.abort();
  }, [currentStyle?.id, currentStyle?.prompt, currentStyle?.promptPath, showPromptModal]);

  const handleCopyPrompt = async () => {
    const textToCopy = promptText || currentStyle?.prompt || '';
    if (!textToCopy) return;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a] overflow-hidden">
      {/* 頂部導航列 */}
      <header className="flex-shrink-0 h-12 md:h-14 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-2 md:px-4 lg:px-6">
        {/* 左側 Logo */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2.5 md:p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5 md:w-5 md:h-5" /> : <Menu className="w-5 h-5 md:w-5 md:h-5" />}
          </button>
          <h1 className="text-sm md:text-lg font-semibold text-white flex items-center gap-1">
            Style<span className="transition-colors duration-300" style={{ color: themeColors[selectedStyle] }}>Prompts</span>
            <span className="text-2xl md:text-3xl font-black transition-colors duration-300" style={{ color: themeColors[selectedStyle] }}>/</span>
          </h1>
        </div>

        {/* 中間裝置切換 - 桌面版 */}
        <div className="hidden md:flex items-center p-1 bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm flex-shrink-0">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
              deviceMode === 'desktop'
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop</span>
          </button>
          <div className="w-px h-4 bg-white/5 mx-1" />
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
              deviceMode === 'tablet'
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span>Tablet</span>
          </button>
          <div className="w-px h-4 bg-white/5 mx-1" />
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
              deviceMode === 'mobile'
                ? 'bg-white/10 text-white shadow-sm shadow-black/20'
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile</span>
          </button>
        </div>

        {/* 右側當前風格名稱 */}
        <div className="flex items-center gap-2">
          <div className="text-xs md:text-sm text-white/60 truncate max-w-[80px] sm:max-w-[120px] lg:max-w-none">
            {currentStyle?.name}
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* 左側樣式列表 - 桌面版 */}
        <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#0a0a0a]">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-sm font-medium text-white/80">Design Styles</h2>
            <p className="text-xs text-white/40 mt-1">{styles.length} styles available</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
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
                      {style.name}
                    </div>
                    <div className="text-xs text-white/40 truncate mt-0.5">
                      {style.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* 左側樣式列表 - 手機版 Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="relative w-72 max-w-[80vw] bg-[#0a0a0a] border-r border-white/10 flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-medium text-white/80">Design Styles</h2>
                  <p className="text-xs text-white/40 mt-1">{styles.length} styles available</p>
                </div>
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
                      setSelectedStyle(style.id);
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
                          {style.name}
                        </div>
                        <div className="text-xs text-white/40 truncate mt-0.5">
                          {style.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* 右側預覽區域 */}
        <main className="flex-1 bg-[#111] overflow-hidden flex flex-col p-2 md:p-4 lg:p-8">
          {/* 預覽說明與 Get Prompt 按鈕 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-3 md:mb-4">
            <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm">
              <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="leading-tight">Preview is for reference only, actual results may vary based on implementation</span>
            </div>
            <button
              onClick={() => setShowPromptModal(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white hover:bg-gray-100 text-black text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
            >
              <Copy className="w-3 h-3 md:w-4 md:h-4" />
              <span>Get Prompt</span>
            </button>
          </div>

          {/* 預覽視窗 */}
          <div className="flex-1 flex items-center justify-center min-h-0 relative">
            <div 
              className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 absolute ${
                deviceMode === 'desktop' 
                  ? 'inset-0 w-full h-full max-w-full' 
                  : deviceMode === 'tablet'
                  ? 'w-[768px] h-[1024px] max-h-full'
                  : 'w-[375px] h-[667px] max-h-full'
              }`}
              style={{
                boxShadow: deviceMode === 'mobile' 
                  ? '0 0 0 8px #222, 0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                  : deviceMode === 'tablet'
                  ? '0 0 0 12px #222, 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                flexShrink: 0
              }}
            >
              <iframe
                ref={iframeRef}
                className="w-full h-full border-none"
                title="Preview"
              />
              {iframeDoc?.body && createPortal(
                <SelectedComponent />,
                iframeDoc.body
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Prompt Modal */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowPromptModal(false)}
          />
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col mx-2">
            {/* Modal Header */}
            <div className="flex-shrink-0 p-4 sm:p-6 pb-3 sm:pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 pr-2">{currentStyle?.name}</h3>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {currentStyle?.description}
                  </p>
                </div>
                <button
                  onClick={() => setShowPromptModal(false)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Character Count */}
              <div className="flex items-center justify-end mt-3 sm:mt-4">
                <span className="text-sm text-white/40">
                  {(promptText?.length ?? 0).toLocaleString()} characters
                </span>
              </div>
            </div>
            
            {/* Code Block - Terminal Style */}
            <div className="mx-4 sm:mx-6 mb-4 max-h-[50vh] flex flex-col">
              <div className="flex-1 min-h-0 bg-[#1e1e1e] border border-white/10 rounded-xl flex flex-col overflow-hidden">
                {/* Terminal Header */}
                <div className="flex-shrink-0 flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 bg-[#2d2d2d]">
                  <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="truncate">prompt.xml</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                
                {/* Terminal Content - Scrollable */}
                <div className="overflow-y-auto p-3 sm:p-5 bg-[#1e1e1e]" style={{ maxHeight: 'calc(50vh - 44px)' }}>
                  {promptLoading ? (
                    <pre className="text-white/60 font-mono text-xs sm:text-sm leading-[1.75] whitespace-pre-wrap break-words">Loading...</pre>
                  ) : (
                    <pre className="text-white/90 font-mono text-xs sm:text-sm leading-[1.75] whitespace-pre-wrap break-words">{promptText}</pre>
                  )}
                  {promptError && (
                    <div className="mt-3 text-xs text-red-300">{promptError}</div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10">
              <span className="text-xs sm:text-sm text-white/40">
                Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60 text-xs">Esc</kbd> to close
              </span>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white hover:bg-gray-100 text-black font-medium rounded-lg transition-colors w-full sm:w-auto justify-center"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Support FAB */}
      <a
        href="https://buymeacoffee.com/zz41354899y"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-white hover:bg-gray-100 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group"
        title="Support"
      >
        <Coffee className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Support
        </span>
      </a>

      {/* Mobile FAB - Get Prompt */}
      <button
        onClick={() => setShowPromptModal(true)}
        className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-full shadow-lg transition-all hover:scale-105"
      >
        <Copy className="w-4 h-4" />
        <span>Get Prompt</span>
      </button>

      {/* Mobile Device Switcher - Floating */}
      <div className="md:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 flex items-center p-1 bg-gray-900 border border-gray-700 rounded-xl shadow-lg">
        <button
          onClick={() => setDeviceMode('desktop')}
          className={`flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
            deviceMode === 'desktop'
              ? 'bg-white/10 text-white shadow-sm shadow-black/20'
              : 'text-white/40 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          <Monitor className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-white/5 mx-1" />
        <button
          onClick={() => setDeviceMode('tablet')}
          className={`flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
            deviceMode === 'tablet'
              ? 'bg-white/10 text-white shadow-sm shadow-black/20'
              : 'text-white/40 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          <Tablet className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-white/5 mx-1" />
        <button
          onClick={() => setDeviceMode('mobile')}
          className={`flex items-center gap-1 px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
            deviceMode === 'mobile'
              ? 'bg-white/10 text-white shadow-sm shadow-black/20'
              : 'text-white/40 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          <Smartphone className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default App;
