import { useState } from 'react';
import { ArrowUpRight, Circle, Menu, X } from 'lucide-react';

export const S02MinimalistMonochrome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#fafafa] text-[#0a0a0a] p-6 md:p-10 font-serif">
      {/* Header */}
      <header className="flex justify-between items-center mb-16 md:mb-24">
        <div className="flex items-center gap-3">
          <Circle className="w-3 h-3 fill-black" />
          <span className="text-xs tracking-[0.3em] uppercase font-sans">Studio</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-xs tracking-[0.15em] uppercase font-sans">
          <span className="cursor-default">Work</span>
          <span className="cursor-default">About</span>
          <span className="cursor-default">Contact</span>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mb-8 py-4 border-t border-b border-[#e0e0e0]">
          <nav className="flex flex-col gap-4 text-xs tracking-[0.15em] uppercase font-sans">
            <span className="py-2 cursor-default">Work</span>
            <span className="py-2 cursor-default">About</span>
            <span className="py-2 cursor-default">Contact</span>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="mb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <h1 className="text-[5.5rem] font-light leading-[0.85] tracking-[-0.03em] mb-12">
              極簡<br />
              <span className="text-[#666]">黑白美學</span>
            </h1>
          </div>
          <div className="col-span-4 flex flex-col justify-end pb-4">
            <p className="text-sm leading-[1.8] text-[#555] mb-6 font-sans">
              透過純粹的黑與白，探索設計的本質。
              每一個留白都是刻意的選擇，每一條線都有其意義。
            </p>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-sans cursor-default">
              <span>Explore</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-7 bg-[#0a0a0a] aspect-[4/3] relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-white text-xs tracking-[0.15em] uppercase font-sans mb-2">01 / Featured</div>
            <div className="text-white text-xl font-light">Monochrome Series</div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col gap-4">
          <div className="flex-1 bg-[#e8e8e8] p-6 flex flex-col justify-between">
            <div className="text-xs tracking-[0.15em] uppercase font-sans text-[#888]">02 / Archive</div>
            <div className="text-xl font-light">Editorial Design</div>
          </div>
          <div className="flex-1 bg-[#0a0a0a] p-6 flex flex-col justify-between">
            <div className="text-xs tracking-[0.15em] uppercase font-sans text-[#666]">03 / Process</div>
            <div className="text-xl font-light text-white">Typography Study</div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 border-t border-[#e0e0e0]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <div className="text-[120px] font-light leading-none text-[#e8e8e8]">"</div>
          </div>
          <div className="col-span-8 pt-8">
            <blockquote className="text-3xl font-light leading-[1.4] tracking-[-0.01em] mb-8">
              設計不是添加更多，而是去除多餘，直到只剩下本質。
            </blockquote>
            <cite className="text-xs tracking-[0.2em] uppercase font-sans not-italic text-[#888]">
              — Design Philosophy
            </cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center text-xs tracking-[0.15em] uppercase font-sans text-[#888] pt-8 border-t border-[#e0e0e0]">
        <span>© 2024</span>
        <span>Taipei, Taiwan</span>
        <span>All Rights Reserved</span>
      </footer>
    </div>
  );
};
