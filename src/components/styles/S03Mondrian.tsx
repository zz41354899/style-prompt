import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const S03Mondrian = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#F8F4E3] p-4 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center mb-4 px-2">
        <span className="text-lg font-black tracking-[0.2em]">DE STIJL</span>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-black/5 rounded transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mb-4 p-4 bg-[#1a1a1a]">
          <nav className="flex flex-col gap-3 text-xs font-bold tracking-wider">
            <span className="py-2 text-[#DD0100] cursor-default">作品</span>
            <span className="py-2 text-[#0047AB] cursor-default">理念</span>
            <span className="py-2 text-[#FADA00] cursor-default">聯繫</span>
          </nav>
        </div>
      )}

      {/* 蒙德里安風格網格 */}
      <div className="grid grid-cols-8 grid-rows-8 gap-[6px] h-[calc(100vh-2rem)] min-h-[600px]" 
        style={{ backgroundColor: '#1a1a1a' }}>
        
        {/* 頂部導航區 */}
        <div className="col-span-5 row-span-1 bg-[#F8F4E3] flex items-center justify-between px-6">
          <span className="text-xl font-black tracking-[0.2em] hidden md:block">DE STIJL</span>
          <nav className="hidden md:flex gap-6 text-xs font-bold tracking-wider">
            <span className="cursor-default">作品</span>
            <span className="cursor-default">理念</span>
            <span className="cursor-default">聯繫</span>
          </nav>
        </div>
        <div className="col-span-2 row-span-1 bg-[#DD0100]" />
        <div className="col-span-1 row-span-2 bg-[#FADA00]" />

        {/* 主要內容區 */}
        <div className="col-span-2 row-span-4 bg-[#0047AB] flex items-center justify-center relative overflow-hidden">
          <span className="text-white text-6xl font-black rotate-[-90deg] tracking-wider opacity-90">藝術</span>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white/60 text-[10px] tracking-[0.3em]">NEOPLASTICISM</div>
          </div>
        </div>
        <div className="col-span-4 row-span-3 bg-[#F8F4E3] p-8 flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.3em] text-[#666] mb-4">MONDRIAN / DE STIJL</div>
          <h1 className="text-4xl font-black leading-tight mb-4 tracking-tight">
            新造型<br />主義美學
          </h1>
          <p className="text-sm leading-relaxed text-[#444] max-w-sm">
            以垂直與水平線條、三原色與非色彩構成的純粹幾何美學。
            追求藝術的普遍性與絕對性。
          </p>
        </div>
        <div className="col-span-1 row-span-3 bg-[#F8F4E3]" />

        {/* 中間裝飾區 */}
        <div className="col-span-3 row-span-1 bg-[#1a1a1a] flex items-center px-6">
          <span className="text-white text-[10px] tracking-[0.4em] font-medium">PIET MONDRIAN · 1872-1944</span>
        </div>
        <div className="col-span-1 row-span-1 bg-[#DD0100]" />
        <div className="col-span-1 row-span-3 bg-[#FADA00]" />

        {/* 底部統計區 */}
        <div className="col-span-1 row-span-3 bg-[#DD0100] flex items-end p-4">
          <span className="text-white text-xs font-bold rotate-[-90deg] origin-left translate-y-full">RED</span>
        </div>
        <div className="col-span-4 row-span-3 bg-[#F8F4E3] p-6 flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: '1917', label: '風格派創立' },
              { num: '3', label: '原色系統' },
              { num: '90°', label: '直角構成' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black mb-1">{item.num}</div>
                <div className="text-[10px] tracking-wider text-[#666]">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-3 bg-[#1a1a1a] text-white text-xs font-bold tracking-wider hover:bg-[#333] transition-colors">
              探索作品
            </button>
            <button className="flex-1 py-3 border-3 border-[#1a1a1a] text-xs font-bold tracking-wider hover:bg-[#1a1a1a] hover:text-white transition-colors">
              了解更多
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-3 bg-[#0047AB] flex items-end justify-between p-4">
          <span className="text-white/60 text-[10px] tracking-wider">BLUE</span>
          <span className="text-white/60 text-[10px]">→</span>
        </div>
      </div>
    </div>
  );
};
