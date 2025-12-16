import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Menu, X, Copy, Check, Info, Coffee } from 'lucide-react';
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
};

type DeviceMode = 'desktop' | 'mobile';

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
      doc.body.style.background = 'white';
      doc.documentElement.style.height = '100%';

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
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1.5 md:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Menu className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
          <h1 className="text-sm md:text-lg font-semibold text-white">
            Style<span className="text-purple-400">Prompts</span>
          </h1>
        </div>

        {/* 中間裝置切換 */}
        <div className="flex items-center gap-0.5 md:gap-1 bg-white/5 rounded-lg p-0.5 md:p-1">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
              deviceMode === 'desktop'
                ? 'bg-white/10 text-white'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Monitor className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
              deviceMode === 'mobile'
                ? 'bg-white/10 text-white'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* 右側當前風格名稱和贊助按鈕 */}
        <div className="flex items-center gap-2">
          <div className="text-xs md:text-sm text-white/60 hidden md:block truncate max-w-[120px] lg:max-w-none">
            {currentStyle?.name}
          </div>
          <a
            href="https://buymeacoffee.com/zz41354899y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Support"
          >
            <Coffee className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Support</span>
          </a>
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
            <div className="flex items-center gap-2 text-white/40 text-[10px] md:text-xs">
              <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="leading-tight">Preview is for reference only, actual results may vary based on implementation</span>
            </div>
            <button
              onClick={() => setShowPromptModal(true)}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-500 hover:bg-purple-600 text-white text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
            >
              <Copy className="w-3 h-3 md:w-4 md:h-4" />
              <span>Get Prompt</span>
            </button>
          </div>

          {/* 預覽視窗 */}
          <div className="flex-1 flex items-center justify-center">
            <div 
              className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                deviceMode === 'desktop' 
                  ? 'w-full h-full max-w-full' 
                  : 'w-[375px] h-[667px] max-h-full'
              }`}
              style={{
                boxShadow: deviceMode === 'mobile' 
                  ? '0 0 0 8px #222, 0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowPromptModal(false)}
          />
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex-shrink-0 p-6 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{currentStyle?.name}</h3>
                  <p className="text-white/60 leading-relaxed max-w-xl">
                    {currentStyle?.description}
                  </p>
                </div>
                <button
                  onClick={() => setShowPromptModal(false)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Character Count */}
              <div className="flex items-center justify-end mt-4">
                <span className="text-sm text-white/40">
                  {(promptText?.length ?? 0).toLocaleString()} characters
                </span>
              </div>
            </div>
            
            {/* Code Block - Terminal Style */}
            <div className="mx-6 mb-4 max-h-[50vh] flex flex-col">
              <div className="flex-1 min-h-0 bg-[#1e1e1e] border border-white/10 rounded-xl flex flex-col overflow-hidden">
                {/* Terminal Header */}
                <div className="flex-shrink-0 flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#2d2d2d]">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>prompt.xml</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                
                {/* Terminal Content - Scrollable */}
                <div className="overflow-y-auto p-5 bg-[#1e1e1e]" style={{ maxHeight: 'calc(50vh - 44px)' }}>
                  {promptLoading ? (
                    <pre className="text-white/60 font-mono text-sm leading-[1.75] whitespace-pre-wrap break-words">Loading...</pre>
                  ) : (
                    <pre className="text-white/90 font-mono text-sm leading-[1.75] whitespace-pre-wrap break-words">{promptText}</pre>
                  )}
                  {promptError && (
                    <div className="mt-3 text-xs text-red-300">{promptError}</div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-t border-white/10">
              <span className="text-sm text-white/40">
                Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60 text-xs">Esc</kbd> to close
              </span>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors"
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
    </div>
  );
}

export default App;
