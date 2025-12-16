import { Sun, Palette, Sparkles, Minus, Plus, Volume2, Power, Settings, Wifi } from 'lucide-react';

export const S15Neumorphism = () => {
  const neumorph = {
    background: '#e4e9f0',
    boxShadow: '10px 10px 20px #c8cdd4, -10px -10px 20px #ffffff'
  };
  
  const neumorphInset = {
    background: '#e4e9f0',
    boxShadow: 'inset 6px 6px 12px #c8cdd4, inset -6px -6px 12px #ffffff'
  };

  const neumorphSmall = {
    background: '#e4e9f0',
    boxShadow: '5px 5px 10px #c8cdd4, -5px -5px 10px #ffffff'
  };

  return (
    <div className="min-h-full p-4 md:p-10 font-sans" style={{ backgroundColor: '#e4e9f0' }}>
      {/* Header */}
      <header className="flex justify-between items-center mb-8 md:mb-16 p-4 md:p-5 rounded-2xl" style={neumorph}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={neumorphInset}>
            <Settings className="w-5 h-5 text-[#6b7280]" />
          </div>
          <span className="text-xl font-semibold text-[#4b5563]">Neumorphism</span>
        </div>
        <nav className="hidden md:flex gap-2">
          {['首頁', '設計', '關於'].map((item, i) => (
            <span key={i}
              className="px-5 py-2.5 rounded-xl text-sm text-[#6b7280] cursor-default"
              style={i === 0 ? neumorphInset : {}}>
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12">
        <div className="md:col-span-7 p-6 md:p-10 rounded-3xl" style={neumorph}>
          <div className="text-xs uppercase tracking-[0.2em] text-[#9ca3af] mb-6">Soft UI Design</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6 leading-tight">
            新擬態<br />
            <span className="text-[#6b7280]">設計美學</span>
          </h1>
          <p className="text-[#6b7280] mb-10 max-w-md leading-relaxed">
            柔和的陰影創造出凸起或凹陷的效果，讓元素彷彿從背景中浮現。
            這是一種介於扁平化與擬物化之間的設計風格。
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="px-8 py-4 rounded-2xl text-[#4b5563] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={neumorph}>
              開始使用
            </button>
            <button className="px-8 py-4 rounded-2xl text-[#9ca3af] font-medium"
              style={neumorphInset}>
              了解更多
            </button>
          </div>
        </div>
        
        {/* 控制面板示範 */}
        <div className="md:col-span-5 p-6 md:p-8 rounded-3xl" style={neumorph}>
          <div className="text-sm text-[#9ca3af] mb-6 uppercase tracking-wider">控制面板</div>
          
          {/* 音量控制 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <Volume2 className="w-5 h-5 text-[#6b7280]" />
              <span className="text-sm text-[#6b7280]">75%</span>
            </div>
            <div className="h-3 rounded-full relative" style={neumorphInset}>
              <div className="absolute left-0 top-0 bottom-0 w-3/4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]" />
              <div className="absolute left-[72%] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full" style={neumorph} />
            </div>
          </div>
          
          {/* 開關按鈕 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { icon: <Power className="w-5 h-5" />, active: true },
              { icon: <Wifi className="w-5 h-5" />, active: false },
              { icon: <Settings className="w-5 h-5" />, active: false },
            ].map((item, i) => (
              <button key={i} 
                className={`aspect-square rounded-2xl flex items-center justify-center transition-all ${
                  item.active ? 'text-[#6366f1]' : 'text-[#9ca3af]'
                }`}
                style={item.active ? neumorphInset : neumorphSmall}>
                {item.icon}
              </button>
            ))}
          </div>
          
          {/* 數值調整 */}
          <div className="flex items-center justify-between p-4 rounded-2xl" style={neumorphInset}>
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6b7280]" style={neumorphSmall}>
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-2xl font-bold text-[#4b5563]">24°C</span>
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6b7280]" style={neumorphSmall}>
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {[
          { icon: <Sun className="w-7 h-7" />, title: '光源一致', desc: '左上角光源，創造統一的視覺效果' },
          { icon: <Palette className="w-7 h-7" />, title: '單色系統', desc: '背景與元素使用相同色系' },
          { icon: <Sparkles className="w-7 h-7" />, title: '柔和過渡', desc: '漸進的陰影創造自然的深度' },
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl text-center" style={neumorph}>
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-[#6366f1]"
              style={neumorphInset}>
              {item.icon}
            </div>
            <div className="text-[#374151] font-semibold text-lg mb-2">{item.title}</div>
            <div className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#9ca3af]">
        © 2024 Neumorphism Design · Soft UI
      </footer>
    </div>
  );
};
