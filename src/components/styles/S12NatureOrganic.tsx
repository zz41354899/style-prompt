import { Leaf, Sprout, TreeDeciduous, Wind, Droplets, Sun } from 'lucide-react';

export const S12NatureOrganic = () => {
  return (
    <div className="min-h-full p-4 md:p-8 font-sans relative overflow-hidden"
      style={{ backgroundColor: '#F7F4EE' }}
    >
      {/* 有機形狀背景裝飾 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8E2D5] opacity-50 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4E2C8] opacity-30 translate-y-1/3 -translate-x-1/4" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-10 md:mb-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#8FA67A] to-[#5D7052] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl text-[#3D4A35] font-medium">Natura</span>
            <div className="text-[10px] tracking-[0.2em] text-[#8FA67A] uppercase">Organic Design</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-[#6B7B5E]">
          {['Home', 'Products', 'Philosophy', 'Contact'].map((item, i) => (
            <span key={i} className="cursor-default">
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-20">
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[#8FA67A] mb-6">
            <Wind className="w-4 h-4" />
            <span className="text-xs tracking-[0.2em] uppercase">Sustainable Living</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#3D4A35] leading-[1.2] mb-6 md:mb-8">
            With Nature<br />
            <span className="text-[#8FA67A] font-normal">Harmonious Coexistence</span>
          </h1>
          <p className="text-[#6B7B5E] leading-[1.9] mb-10 max-w-md">
            Embrace the warmth of the earth, feel the flowing beauty of organic curves.
            Every design originates from nature's inspiration, every choice is a commitment to the planet.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#5D7052] to-[#6B7B5E] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#5D7052]/20 transition-all">
              Explore Nature
            </button>
            <button className="px-8 py-4 border border-[#8FA67A] text-[#5D7052] rounded-full text-sm font-medium hover:bg-[#8FA67A]/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block md:col-span-6 relative">
          {/* 有機形狀裝飾 */}
          <div className="relative w-full aspect-square">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#D4E2C8] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" />
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-[#C4A77D]/30 rounded-[60%_40%_30%_70%/50%_60%_40%_50%]" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#8FA67A]/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
        {[
          { icon: <Droplets className="w-6 h-6" />, title: 'Organic Curves', desc: 'Flowing natural lines, like meandering streams', color: '#8FA67A' },
          { icon: <Sun className="w-6 h-6" />, title: 'Earth Tones', desc: 'Warm natural colors from soil and sunlight', color: '#C4A77D' },
          { icon: <Sprout className="w-6 h-6" />, title: 'Sustainable Design', desc: 'Eco-friendly design philosophy, protecting our home', color: '#5D7052' },
        ].map((item, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white transition-transform group-hover:scale-110" 
              style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
            <div className="text-lg text-[#3D4A35] mb-3 font-medium">{item.title}</div>
            <div className="text-sm text-[#6B7B5E] leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="relative z-10 bg-gradient-to-r from-[#5D7052] to-[#6B7B5E] text-white rounded-[2rem] p-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: '100%', label: 'Natural Materials', icon: <Leaf className="w-5 h-5" /> },
            { num: '50+', label: 'Plant Inspired', icon: <Sprout className="w-5 h-5" /> },
            { num: '0', label: 'Carbon Footprint', icon: <Wind className="w-5 h-5" /> },
            { num: '∞', label: 'Sustainable Cycle', icon: <TreeDeciduous className="w-5 h-5" /> },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-3 text-[#B8C9A9]">{item.icon}</div>
              <div className="text-4xl font-light mb-2">{item.num}</div>
              <div className="text-sm text-[#B8C9A9]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6B7B5E] pt-6 border-t border-[#E0D8C8]">
        <span>© 2024 Natura Design</span>
        <div className="flex items-center gap-6">
          {[Leaf, Sprout, TreeDeciduous].map((Icon, i) => (
            <Icon key={i} className="w-5 h-5 hover:text-[#5D7052] transition-colors cursor-pointer" />
          ))}
        </div>
        <span className="text-xs tracking-[0.15em] uppercase">Made with Nature</span>
      </footer>
    </div>
  );
};
