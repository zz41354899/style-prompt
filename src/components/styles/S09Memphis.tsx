import { Star, Circle, Triangle, Square, Sparkles } from 'lucide-react';

export const S09Memphis = () => {
  return (
    <div className="min-h-full bg-[#FFF5F7] p-4 md:p-8 font-sans relative overflow-hidden">
      {/* 裝飾性幾何圖形 */}
      <div className="absolute top-8 right-12 w-24 h-24 bg-[#00D4AA] rounded-full" />
      <div className="absolute top-32 right-32 w-16 h-16 bg-[#FFE135] rotate-45" />
      <div className="absolute top-20 left-[60%] w-20 h-20 border-[6px] border-[#FF6B9D] rounded-full" />
      <div className="absolute bottom-32 left-8 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-[#7C4DFF]" />
      <div className="absolute bottom-16 right-16 w-12 h-12 bg-[#FF6B9D]" />
      <div className="absolute top-1/2 left-4 w-8 h-32 bg-[#00D4AA]" />
      
      {/* 波浪線裝飾 */}
      <svg className="absolute top-40 left-20 w-32 h-8 text-[#FFE135]" viewBox="0 0 100 20">
        <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="4"/>
      </svg>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-8 md:mb-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF6B9D] rounded-full flex items-center justify-center border-[3px] border-black"
            style={{ boxShadow: '3px 3px 0 #000' }}>
            <Star className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight"
            style={{ textShadow: '3px 3px 0 #00D4AA' }}>
            MEMPHIS
          </span>
        </div>
        <nav className="hidden md:flex gap-3">
          {[
            { label: 'Home', color: '#FFE135' },
            { label: 'Design', color: '#00D4AA' },
            { label: 'About', color: '#FF6B9D' },
          ].map((item, i) => (
            <span key={i}
              className="px-5 py-2.5 border-[3px] border-black font-bold text-sm cursor-default"
              style={{ backgroundColor: item.color, boxShadow: '4px 4px 0 #000' }}>
              {item.label}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-[#7C4DFF] font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Post-Modern Design</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[0.95] mb-6 md:mb-8">
              <span className="text-[#FF6B9D]">Playful</span>
              <span className="text-[#00D4AA]">Design</span>
              <br />
              <span className="text-[#7C4DFF]">Infinite</span>
              <span className="text-[#FFE135]" style={{ textShadow: '3px 3px 0 #000' }}>Possibilities</span>
            </h1>
            <p className="text-lg max-w-md mb-8 font-medium text-gray-700 leading-relaxed">
              Memphis design breaks rules, creating joyful visual experiences with bold colors and geometric shapes!
              Embrace chaos, reject boredom.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <button className="px-8 py-4 bg-[#FF6B9D] text-white font-black text-lg border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform flex items-center gap-2"
                style={{ boxShadow: '5px 5px 0 #000' }}>
                <span>Start Exploring</span>
                <span className="text-xl">→</span>
              </button>
              <button className="px-8 py-4 bg-white font-black text-lg text-black border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: '5px 5px 0 #7C4DFF' }}>
                了解更多
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative hidden md:block">
            {/* 裝飾性堆疊圖形 */}
            <div className="relative w-full aspect-square">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#FFE135] border-[3px] border-black" style={{ boxShadow: '6px 6px 0 #000' }} />
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-[#00D4AA] border-[3px] border-black rounded-full" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#FF6B9D] border-[3px] border-black rotate-12" style={{ boxShadow: '4px 4px 0 #000' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
        {[
          { icon: <Circle className="w-8 h-8" />, title: 'Geometric Shapes', desc: 'A carnival of circles, triangles, and squares', color: '#00D4AA' },
          { icon: <Triangle className="w-8 h-8" />, title: 'Vibrant Colors', desc: 'Bold color clashes, reject the mundane', color: '#FFE135' },
          { icon: <Square className="w-8 h-8" />, title: 'Asymmetry', desc: 'Break balance, create tension', color: '#7C4DFF' },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white border-[3px] border-black group hover:translate-x-1 hover:-translate-y-1 transition-transform"
            style={{ boxShadow: '6px 6px 0 #000' }}>
            <div className="w-14 h-14 rounded-full border-[3px] border-black flex items-center justify-center mb-4"
              style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
            <div className="font-black text-xl mb-2">{item.title}</div>
            <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* 彩色條紋分隔線 */}
      <div className="relative z-10 h-6 mb-8 border-y-[3px] border-black"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #FF6B9D 0px, #FF6B9D 25px, #FFE135 25px, #FFE135 50px, #00D4AA 50px, #00D4AA 75px, #7C4DFF 75px, #7C4DFF 100px)'
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-black text-sm">
          <span className="text-[#FF6B9D]">©</span>
          <span className="text-[#00D4AA]"> 1981</span>
          <span className="text-[#FFE135]" style={{ textShadow: '1px 1px 0 #000' }}> MEMPHIS</span>
          <span className="text-[#7C4DFF]"> GROUP</span>
        </div>
        <div className="flex gap-2">
          {['#FF6B9D', '#FFE135', '#00D4AA', '#7C4DFF'].map((color, i) => (
            <div key={i} className="w-6 h-6 border-2 border-black" style={{ backgroundColor: color }} />
          ))}
        </div>
      </footer>
    </div>
  );
};
