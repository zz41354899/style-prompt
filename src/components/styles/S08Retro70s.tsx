export const S08Retro70s = () => {
  return (
    <div className="min-h-full p-4 md:p-8 font-serif relative"
      style={{ 
        backgroundColor: '#F7E8D0',
      }}
    >
      {/* 顆粒質感覆蓋層 */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 md:mb-16 pb-6 border-b-[3px] border-[#5D4037]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E65100] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#F7E8D0]" />
            </div>
            <span className="text-2xl md:text-3xl font-black text-[#5D4037] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              GROOVY
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.15em] text-[#5D4037] font-sans font-medium">
            <span className="cursor-default">首頁</span>
            <span className="cursor-default">作品</span>
            <span className="cursor-default">聯繫</span>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* 復古同心圓 */}
            <div className="md:col-span-4 max-w-[200px] md:max-w-none mx-auto md:mx-0">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full bg-[#E65100]" />
                <div className="absolute inset-[15%] rounded-full bg-[#FF8F00]" />
                <div className="absolute inset-[30%] rounded-full bg-[#FFB300]" />
                <div className="absolute inset-[45%] rounded-full bg-[#5D4037]" />
                <div className="absolute inset-[60%] rounded-full bg-[#F7E8D0]" />
              </div>
            </div>
            <div className="md:col-span-8 text-center md:text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-[#8D6E63] mb-4 font-sans">
                60s-70s Print Aesthetic
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#5D4037] mb-6 leading-[1.1] tracking-tight">
                復古印刷<br />風格設計
              </h1>
              <p className="text-[#6D4C41] max-w-md leading-relaxed mb-8 text-lg">
                回到 60-70 年代的印刷美學，溫暖的大地色調、顆粒質感與復古字體的完美結合。
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <button className="px-8 py-4 bg-[#E65100] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#BF360C] transition-colors rounded-full">
                  探索作品
                </button>
                <button className="px-8 py-4 border-2 border-[#5D4037] text-[#5D4037] font-bold uppercase tracking-wider text-sm hover:bg-[#5D4037] hover:text-white transition-colors rounded-full">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-16">
          {[
            { title: '大地色系', desc: '溫暖的橘棕色調', color: '#E65100' },
            { title: '顆粒質感', desc: '手工印刷的觸感', color: '#5D4037' },
            { title: '復古字體', desc: '經典的襯線設計', color: '#FF8F00' },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl relative overflow-hidden group" 
              style={{ backgroundColor: item.color }}>
              <div className="absolute top-4 right-4 text-white/20 text-6xl font-black">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="text-white text-xl font-bold mb-3">{item.title}</div>
                <div className="text-white/80 text-sm leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Quote */}
        <section className="py-12 border-t-[3px] border-b-[3px] border-[#5D4037] mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl text-[#E65100]/30 mb-4">"</div>
            <blockquote className="text-3xl italic text-[#5D4037] leading-relaxed mb-6">
              設計是時代的鏡子，反映著我們的夢想與渴望。
            </blockquote>
            <cite className="text-sm text-[#8D6E63] uppercase tracking-[0.2em] not-italic font-sans">
              — 復古設計哲學
            </cite>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { num: '1965', label: '黃金年代' },
            { num: '∞', label: '創意無限' },
            { num: '100%', label: '手工質感' },
            { num: '70s', label: '經典風格' },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
              <div className="text-4xl font-black text-[#E65100] mb-2">{item.num}</div>
              <div className="text-xs text-[#8D6E63] uppercase tracking-[0.2em] font-sans">{item.label}</div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm text-[#8D6E63] pt-6 border-t border-[#D7CCC8]">
          <span>© 1970 GROOVY DESIGN CO.</span>
          <span className="uppercase tracking-[0.15em] font-sans">Made with ♥ in California</span>
        </footer>
      </div>
    </div>
  );
};
