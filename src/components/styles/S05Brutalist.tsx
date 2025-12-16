import { useState } from 'react';
import { ArrowRight, X, Menu } from 'lucide-react';

export const S05Brutalist = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#F5F5F0] text-black p-3 font-mono">
      {/* Header */}
      <header className="border-[3px] border-black bg-white mb-3">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <X className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-black uppercase tracking-tight">BRUTAL</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {['首頁', '作品', '關於', '聯繫'].map((item, i) => (
              <span key={i}
                className="px-4 py-2 text-xs uppercase font-bold tracking-wider cursor-default">
                {item}
              </span>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 border-[3px] border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t-[3px] border-black">
            {['首頁', '作品', '關於', '聯繫'].map((item, i) => (
              <span key={i}
                className="block px-4 py-3 text-xs uppercase font-bold tracking-wider border-b border-black/20 cursor-default">
                {item}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-7 border-[3px] border-black bg-[#FF4D4D] p-6 md:p-8 min-h-[280px] md:min-h-[320px] flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase font-bold mb-4 text-black/60">[宣言 001]</div>
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight mb-6">
              粗獷<br />主義<br />設計
            </h1>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-sm font-bold uppercase max-w-xs leading-relaxed">
              RAW. HONEST. UNPOLISHED.<br />
              NO BULLSHIT DESIGN.
            </p>
            <ArrowRight className="w-12 h-12" strokeWidth={3} />
          </div>
        </div>
        
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="flex-1 border-[3px] border-black bg-[#00FF66] p-6 flex flex-col justify-between min-h-[120px]">
            <div className="text-xs uppercase font-bold text-black/60">[功能 001]</div>
            <div>
              <div className="text-2xl md:text-3xl font-black uppercase mb-1">無裝飾</div>
              <div className="text-xs font-bold uppercase text-black/60">NO DECORATION</div>
            </div>
          </div>
          <div className="flex-1 border-[3px] border-black bg-[#FFFF00] p-6 flex flex-col justify-between min-h-[120px]">
            <div className="text-xs uppercase font-bold text-black/60">[功能 002]</div>
            <div>
              <div className="text-2xl md:text-3xl font-black uppercase mb-1">原始材料</div>
              <div className="text-xs font-bold uppercase text-black/60">RAW MATERIALS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
        {[
          { num: '01', label: '混凝土', en: 'CONCRETE' },
          { num: '02', label: '鋼鐵', en: 'STEEL' },
          { num: '03', label: '玻璃', en: 'GLASS' },
          { num: '04', label: '真實', en: 'TRUTH' },
        ].map((item, i) => (
          <div key={i} className="border-[3px] border-black bg-white p-4 group hover:bg-black hover:text-white transition-colors">
            <div className="text-4xl font-black mb-2">{item.num}</div>
            <div className="text-sm font-black uppercase">{item.label}</div>
            <div className="text-[10px] font-bold uppercase text-black/40 group-hover:text-white/40 mt-1">{item.en}</div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="border-[3px] border-black bg-black text-white p-4 md:p-6 mb-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="text-[10px] uppercase font-bold text-white/40 mb-2">&gt;&gt; 行動呼籲_</div>
            <div className="text-xl md:text-3xl font-black uppercase tracking-tight">立即體驗粗獷之美</div>
          </div>
          <button className="border-[3px] border-white px-6 md:px-8 py-3 md:py-4 font-black uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-3 w-full md:w-auto justify-center">
            <span>進入</span>
            <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] uppercase font-bold text-black/60">
        <span>© 2024 BRUTAL.IST</span>
        <span className="hidden md:block">NO COOKIES · NO TRACKING · NO BS</span>
        <span>V.1.0.0</span>
      </footer>
    </div>
  );
};
