export const S11JapaneseMinimal = () => {
  return (
    <div className="min-h-full bg-[#FAFAF8] text-[#2d2d2d] p-6 md:p-12 font-sans relative">
      {/* 背景裝飾 - 淡墨圓 */}
      <div className="absolute top-1/4 right-12 w-64 h-64 rounded-full bg-[#f0ede8] opacity-60" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-16 md:mb-32">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-light" style={{ fontFamily: 'serif' }}>和</div>
          <div className="w-px h-6 bg-[#d4d0c8]" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#999]">Wa Design</span>
        </div>
        <nav className="hidden md:flex gap-12 text-xs tracking-[0.25em]">
          <span className="cursor-default">作品</span>
          <span className="cursor-default">理念</span>
          <span className="cursor-default">聯繫</span>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24">
        <div className="hidden md:block md:col-span-2">
          <div className="text-[140px] font-light text-[#e8e4de] leading-none" style={{ fontFamily: 'serif' }}>
            静
          </div>
        </div>
        <div className="md:col-span-6 pt-4 md:pt-8">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-8">Japanese Minimalism</div>
          <h1 className="text-3xl md:text-4xl font-light leading-[1.4] mb-8 md:mb-10 tracking-wide">
            日式極簡<br />
            <span className="text-[#a0a0a0]">留白之美</span>
          </h1>
          <p className="text-sm leading-[2.2] text-[#666] mb-12 max-w-md">
            在空間中尋找平衡，在簡約中發現深意。
            每一處留白都是刻意的呼吸，讓心靈得以安住。
            這是一種生活的藝術，也是一種精神的修行。
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs tracking-[0.25em] border-b border-[#2d2d2d] pb-1.5 hover:opacity-40 transition-opacity">
              探索
            </button>
            <div className="w-8 h-px bg-[#d4d0c8]" />
            <span className="text-xs tracking-[0.2em] text-[#a0a0a0]">詳細了解</span>
          </div>
        </div>
        <div className="hidden md:flex md:col-span-4 items-end justify-end">
          <div className="text-right">
            <div className="text-[80px] font-light text-[#f0ede8] leading-none mb-4" style={{ fontFamily: 'serif' }}>
              美
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[#bbb]">BEAUTY</div>
          </div>
        </div>
      </main>

      {/* Minimal divider */}
      <div className="relative z-10 flex items-center gap-4 mb-20">
        <div className="w-16 h-px bg-[#2d2d2d]" />
        <div className="w-2 h-2 rounded-full bg-[#d4d0c8]" />
      </div>

      {/* Features */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-24">
        {[
          { jp: '間', title: '空間', desc: '留白的藝術', en: 'Ma' },
          { jp: '侘', title: '侘寂', desc: '不完美之美', en: 'Wabi' },
          { jp: '禅', title: '禪意', desc: '內心的平靜', en: 'Zen' },
        ].map((item, i) => (
          <div key={i} className="group">
            <div className="text-5xl font-light text-[#e0dcd6] mb-6 group-hover:text-[#c4c0b8] transition-colors" 
              style={{ fontFamily: 'serif' }}>
              {item.jp}
            </div>
            <div className="text-sm mb-2 font-medium">{item.title}</div>
            <div className="text-xs text-[#999] mb-1">{item.desc}</div>
            <div className="text-[10px] tracking-[0.3em] text-[#ccc] uppercase">{item.en}</div>
          </div>
        ))}
      </section>

      {/* Quote */}
      <section className="relative z-10 py-12 border-t border-[#e8e4de] mb-16">
        <div className="max-w-lg">
          <blockquote className="text-xl font-light leading-[1.8] text-[#555] italic mb-4">
            "簡約不是缺乏，而是恰到好處的豐盈。"
          </blockquote>
          <cite className="text-[10px] tracking-[0.3em] text-[#999] not-italic uppercase">
            — 日本美學
          </cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] tracking-[0.25em] text-[#999]">
        <span>京都 · 東京</span>
        <span>© 2024 和 DESIGN</span>
        <span>日本</span>
      </footer>
    </div>
  );
};
