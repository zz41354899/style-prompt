import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const S04Swiss = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-white text-black p-6 md:p-8 font-sans relative">
      {/* 網格背景提示 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="flex md:grid md:grid-cols-12 gap-4 mb-12 md:mb-16 pb-6 border-b-2 border-black justify-between items-end">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-2">International Typographic Style</div>
            <div className="text-3xl md:text-5xl font-black tracking-[-0.02em]">Swiss Design</div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex md:col-span-4 flex-col items-end justify-end">
            <div className="flex gap-8 text-sm font-medium">
              <span className="cursor-default">Works</span>
              <span className="cursor-default">Philosophy</span>
              <span className="cursor-default">Contact</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mb-8 p-4 border-2 border-black">
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <span className="py-2 cursor-default">Works</span>
              <span className="py-2 cursor-default">Philosophy</span>
              <span className="py-2 cursor-default">Contact</span>
            </nav>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-4 flex items-start">
            <div className="text-[180px] font-black leading-[0.8] text-[#E53935] tracking-[-0.05em]">
              Aa
            </div>
          </div>
          <div className="col-span-1" />
          <div className="col-span-7 pt-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-6">Helvetica · Grid · Clarity</div>
            <h1 className="text-3xl font-bold leading-[1.2] mb-6 tracking-[-0.01em]">
              Clear, Objective,<br />
              Function-Driven Design
            </h1>
            <p className="text-sm leading-[1.8] text-[#555] max-w-md mb-8">
              Swiss International Typographic style emphasizes rigorous grid systems, sans-serif typography,
              and clear information communication. Design should be universal, timeless, and transcultural.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white text-xs font-bold tracking-wider hover:bg-[#333] transition-colors">
                Explore Works
              </button>
              <button className="px-6 py-3 border-2 border-black text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-4 bg-black text-white p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#666] mb-1">Principle 01</div>
              <div className="text-2xl font-bold mb-2">Grid System</div>
            </div>
            <div className="text-xs text-[#888] tracking-wider">GRID SYSTEM</div>
          </div>
          <div className="col-span-4 bg-[#E53935] text-white p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-1">Principle 02</div>
              <div className="text-2xl font-bold mb-2">Sans Serif</div>
            </div>
            <div className="text-xs text-white/70 tracking-wider">SANS-SERIF</div>
          </div>
          <div className="col-span-4 border-2 border-black p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-1">Principle 03</div>
              <div className="text-2xl font-bold mb-2">Negative Space</div>
            </div>
            <div className="text-xs text-[#999] tracking-wider">WHITE SPACE</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-12 gap-4 mb-12 py-8 border-t-2 border-b-2 border-black">
          {[
            { num: '1950', label: 'Origin Era' },
            { num: '12', label: 'Column Grid' },
            { num: '∞', label: 'Influence' },
            { num: '100%', label: 'Functionality' },
          ].map((item, i) => (
            <div key={i} className="col-span-3 text-center">
              <div className="text-4xl font-black mb-2">{item.num}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-[#999]">
          <span>Basel · Zürich · Switzerland</span>
          <span>© 2024 Swiss Design</span>
        </footer>
      </div>
    </div>
  );
};
