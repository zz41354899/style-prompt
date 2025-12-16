import { ArrowUpRight, Gem } from 'lucide-react';

export const S10LuxuryEditorial = () => {
  return (
    <div className="min-h-full bg-[#FAF8F5] text-[#1a1a1a] p-4 md:p-10" style={{ fontFamily: 'Georgia, Times, serif' }}>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 md:mb-20 pb-6 border-b border-[#e0d5c7]">
        <div className="hidden md:block text-[10px] tracking-[0.5em] uppercase text-[#9a8b7a]">Est. 2024</div>
        <div className="flex items-center gap-4">
          <div className="w-px h-8 bg-[#d4c5b5]" />
          <span className="text-2xl md:text-3xl tracking-[0.15em] font-light">ÉLÉGANCE</span>
          <div className="w-px h-8 bg-[#d4c5b5]" />
        </div>
        <div className="hidden md:block text-[10px] tracking-[0.5em] uppercase text-[#9a8b7a]">Paris</div>
      </header>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-20">
        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#9a8b7a] mb-6">The Art of Living</div>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.1] mb-6 md:mb-8 tracking-[-0.02em]">
            Luxury<br />
            <em className="font-normal italic text-[#9a8b7a]">Editorial Aesthetics</em>
          </h1>
          <p className="text-[#666] leading-[1.9] mb-10 text-[15px]">
            Discover eternal elegance in the details. Every choice is a display of taste,
            every moment deserves to be cherished. We believe true luxury comes from the relentless pursuit of perfection.
          </p>
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase cursor-default">
            <span className="border-b border-[#1a1a1a] pb-1">
              Explore Collection
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="bg-[#e8e2da] aspect-[3/4] relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-[10px] tracking-[0.3em] uppercase">Vol. I</div>
              <div className="text-white text-lg font-light mt-1">Spring Collection</div>
            </div>
          </div>
          <div className="bg-[#d4c5b5] aspect-[3/4] relative group overflow-hidden mt-12">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-[10px] tracking-[0.3em] uppercase">Vol. II</div>
              <div className="text-white text-lg font-light mt-1">Timeless Pieces</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-b border-[#e0d5c7] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { num: 'I', title: 'Exquisite Craftsmanship', desc: 'Craftsmanship', detail: 'Every piece is meticulously crafted by artisans' },
            { num: 'II', title: 'Timeless Design', desc: 'Timeless Design', detail: 'Aesthetics that transcend time,魅力 that endures' },
            { num: 'III', title: 'Unique Experience', desc: 'Unique Experience', detail: 'Creating an exclusive luxury lifestyle for you' },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl font-light text-[#c4b5a5] mb-6 group-hover:text-[#9a8b7a] transition-colors">
                {item.num}
              </div>
              <div className="text-xl mb-2 font-light">{item.title}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a8b7a] mb-4">{item.desc}</div>
              <div className="text-sm text-[#888] leading-relaxed max-w-[200px] mx-auto">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <Gem className="w-8 h-8 text-[#c4b5a5] mx-auto mb-8" />
          <blockquote className="text-3xl font-light italic leading-[1.6] mb-8 text-[#333]">
            "True luxury lies not in possession, but in experiencing every meticulously crafted moment of life."
          </blockquote>
          <cite className="text-[10px] tracking-[0.4em] uppercase text-[#9a8b7a] not-italic">
            — Editorial Philosophy
          </cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#9a8b7a] pt-8 border-t border-[#e0d5c7]">
        <span>© MMXXIV Élégance</span>
        <div className="flex items-center gap-6">
          <span className="cursor-default">Instagram</span>
          <span className="cursor-default">Pinterest</span>
        </div>
        <span>Crafted with Excellence</span>
      </footer>
    </div>
  );
};
