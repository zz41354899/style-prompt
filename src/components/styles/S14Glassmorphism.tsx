import { Gem, Wind, Sparkles, Layers, ArrowRight, Circle } from 'lucide-react';

export const S14Glassmorphism = () => {
  return (
    <div className="min-h-full p-4 md:p-8 font-sans relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      {/* 動態背景光球 */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-[100px] opacity-25" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-400 rounded-full filter blur-[80px] opacity-30" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-8 md:mb-16 p-4 md:p-5 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' }}>
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-xl font-semibold">Glassmorphism</span>
        </div>
        <nav className="hidden md:flex gap-8 text-white/70 text-sm">
          {['首頁', '作品', '關於', '聯繫'].map((item, i) => (
            <span key={i} className="cursor-default">
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Main Card */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-10">
        <div className="md:col-span-7 p-6 md:p-10 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          <div className="flex items-center gap-2 text-purple-300 text-xs mb-6">
            <Circle className="w-2 h-2 fill-current" />
            <span className="uppercase tracking-[0.2em]">UI Design Trend</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            玻璃擬態<br />
            <span className="text-white/60">設計美學</span>
          </h1>
          <p className="text-white/60 mb-10 max-w-md leading-relaxed">
            透過毛玻璃效果創造層次感與深度，讓介面如同懸浮在空中的透明玻璃。
            模糊、透明、光澤，三者完美結合。
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="group px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 transition-all hover:gap-3"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <span>開始體驗</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white/80 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-all">
              了解更多
            </button>
          </div>
        </div>
        
        <div className="md:col-span-5 flex flex-col gap-4">
          {[
            { icon: <Gem className="w-6 h-6" />, title: '透明度', desc: '0.1 - 0.3 最佳效果', value: '20%' },
            { icon: <Wind className="w-6 h-6" />, title: '模糊半徑', desc: '背景模糊程度', value: '24px' },
            { icon: <Sparkles className="w-6 h-6" />, title: '邊框光澤', desc: '微妙的高光效果', value: '1px' },
          ].map((item, i) => (
            <div key={i} className="flex-1 p-5 rounded-2xl flex items-center gap-4"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white/80"
                style={{ background: 'rgba(255,255,255,0.1)' }}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-white font-medium mb-0.5">{item.title}</div>
                <div className="text-white/40 text-xs">{item.desc}</div>
              </div>
              <div className="text-white/60 font-mono text-sm">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 p-8 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { num: '2020', label: '流行年份' },
            { num: '24px', label: '推薦模糊' },
            { num: '0.15', label: '最佳透明度' },
            { num: '∞', label: '設計可能' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{item.num}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
