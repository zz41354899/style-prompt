import { Sunset, Music, Car, Play, Radio, Disc3 } from 'lucide-react';

export const S07Synthwave = () => {
  return (
    <div className="min-h-full text-white p-4 md:p-8 font-sans relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 40%, #0f3460 100%)'
      }}
    >
      {/* 太陽 */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-32 md:w-56 md:h-56">
        <div className="w-full h-full rounded-full relative"
          style={{
            background: 'linear-gradient(180deg, #ff6b6b 0%, #feca57 40%, #ff9ff3 100%)',
            boxShadow: '0 0 80px rgba(255,107,107,0.6), 0 0 120px rgba(255,107,107,0.3)'
          }}
        >
          {/* 太陽條紋 */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute left-0 right-0 bg-[#1a0a2e]" 
              style={{ 
                height: `${4 + i * 2}px`, 
                bottom: `${15 + i * 18}%`,
                opacity: 0.8
              }} 
            />
          ))}
        </div>
      </div>

      {/* 透視網格地板 */}
      <div className="absolute bottom-0 left-0 right-0 h-56"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,0,255,0.15) 100%)',
          backgroundImage: `
            linear-gradient(90deg, rgba(255,0,255,0.4) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,0,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 30px',
          transform: 'perspective(300px) rotateX(65deg)',
          transformOrigin: 'bottom'
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-10 md:mb-20">
        <div className="flex items-center gap-3">
          <Disc3 className="w-6 h-6 md:w-8 md:h-8 text-pink-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-lg md:text-2xl font-black tracking-wider uppercase"
            style={{ textShadow: '0 0 20px #ff6b6b, 0 0 40px #ff6b6b' }}>
            SYNTHWAVE
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em]">
          {['Home', 'Music', 'About'].map((item, i) => (
            <span key={i} className="cursor-default">
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 text-center mb-10 md:mb-20 pt-4 md:pt-8">
        <div className="text-xs uppercase tracking-[0.4em] text-pink-400/60 mb-4">
          ▲ RETRO FUTURE ▲
        </div>
        <h1 className="text-3xl md:text-7xl font-black mb-6 uppercase tracking-tight"
          style={{
            background: 'linear-gradient(90deg, #ff6b6b, #feca57, #ff9ff3, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Retro Future
        </h1>
        <p className="text-purple-300/80 max-w-lg mx-auto mb-10 leading-relaxed">
          Return to the 1980s vision of the future, perfect fusion of neon lights and electronic synthesizers.
          Let's drive the DeLorean through time together.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
          <button className="group px-6 py-3 md:px-8 md:py-4 font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-3"
            style={{
              background: 'linear-gradient(90deg, #ff6b6b, #ff9ff3)',
              boxShadow: '0 0 30px rgba(255,107,107,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" />
            <span>Start Journey</span>
          </button>
          <button className="px-6 py-3 md:px-8 md:py-4 font-bold uppercase tracking-wider rounded-lg border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all">
            Explore More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
        {[
          { icon: <Sunset className="w-10 h-10" />, title: 'Sunset Gradient', desc: 'Classic orange-red-purple palette', color: '#ff6b6b' },
          { icon: <Music className="w-10 h-10" />, title: 'Synthesizer', desc: 'Soul of electronic music', color: '#feca57' },
          { icon: <Car className="w-10 h-10" />, title: 'Retro Sports Car', desc: 'DeLorean style', color: '#ff9ff3' },
        ].map((item, i) => (
          <div key={i} className="group text-center p-4 md:p-8 rounded-xl flex flex-col items-center transition-all hover:scale-105"
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="mb-4 p-4 rounded-full transition-all group-hover:scale-110"
              style={{ 
                color: item.color,
                boxShadow: `0 0 20px ${item.color}40`
              }}>
              {item.icon}
            </div>
            <div className="font-bold text-lg mb-2">{item.title}</div>
            <div className="text-sm text-purple-300/70">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm text-purple-400/60 pt-6 border-t border-purple-500/20">
        <span>© 1985-2024</span>
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4" />
          <span>SYNTHWAVE DREAMS</span>
        </div>
        <span>MIAMI · TOKYO</span>
      </footer>
    </div>
  );
};
