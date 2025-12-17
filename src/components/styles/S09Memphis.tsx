import { Sparkles, Shield, Check, Mail, Star, Zap, Circle, Triangle, HelpCircle, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const S09Memphis = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <Star className="w-5 h-5 text-black" fill="black" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight"
            style={{ textShadow: '3px 3px 0 #00D4AA' }}>
            MEMPHIS
          </span>
        </div>
        <nav className={`${deviceMode === 'desktop' ? 'flex' : 'hidden'} gap-3`}>
          {['Play', 'Design', 'About'].map((item, i) => (
            <span key={i} 
              className="px-5 py-2.5 border-[3px] border-black font-bold text-sm cursor-default text-black"
              style={{ 
                backgroundColor: ['#FF6B9D', '#00D4AA', '#7C4DFF'][i], 
                boxShadow: '4px 4px 0 #000' 
              }}
            >
              {item}
            </span>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        {deviceMode === 'mobile' || deviceMode === 'tablet' && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2.5 border-[3px] border-black bg-[#FFE135] font-bold text-sm"
            style={{ boxShadow: '4px 4px 0 #000' }}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mb-8 border-b-[3px] border-black bg-white">
          {['Play', 'Design', 'About'].map((item, i) => (
            <div key={i} 
              className="px-5 py-4 border-b-[3px] border-black font-bold text-sm cursor-default text-black"
              style={{ 
                backgroundColor: ['#FF6B9D', '#00D4AA', '#7C4DFF'][i],
                borderBottom: i < 2 ? '3px solid black' : 'none'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

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
            <p className="text-lg max-w-md mb-8 font-medium text-black leading-relaxed">
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
                Learn More
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative lg:hidden md:block">
            {/* 裝飾性堆疊圖形 */}
            <div className="relative w-full aspect-square">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#FFE135] border-[3px] border-black" style={{ boxShadow: '6px 6px 0 #000' }} />
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-[#00D4AA] border-[3px] border-black rounded-full" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#FF6B9D] border-[3px] border-black rotate-12" style={{ boxShadow: '4px 4px 0 #000' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-[#7C4DFF] font-bold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>WHY MEMPHIS?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-[0.95] mb-6">
            <span className="text-[#FF6B9D]">Break</span>
            <span className="text-[#00D4AA]">The</span>
            <span className="text-[#FFE135]" style={{ textShadow: '3px 3px 0 #000' }}>Rules</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-medium text-black leading-relaxed">
            Why be boring when you can be bold? Memphis design rejects minimalism and embraces 
            joy through playful colors, bold shapes, and unexpected combinations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Bold Expression', desc: 'Stand out with fearless design', color: '#FF6B9D' },
            { title: 'Playful Energy', desc: 'Bring joy to every interaction', color: '#00D4AA' },
            { title: 'Creative Freedom', desc: 'No rules, just pure creativity', color: '#FFE135' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border-[3px] border-black group hover:translate-x-1 hover:-translate-y-1 transition-transform"
              style={{ boxShadow: '6px 6px 0 #000' }}>
              <div className="w-12 h-12 rounded-full border-[3px] border-black mb-4" style={{ backgroundColor: item.color }} />
              <h3 className="font-black text-xl mb-2 text-black">{item.title}</h3>
              <p className="text-sm text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Geometric Chaos', desc: 'Controlled chaos through shapes', color: '#7C4DFF', icon: <Zap className="w-6 h-6" /> },
            { title: 'Color Explosion', desc: 'Vibrant palettes that pop', color: '#FF6B9D', icon: <Star className="w-6 h-6" /> },
            { title: 'Pattern Party', desc: 'Dots, stripes, and squiggles', color: '#00D4AA', icon: <Circle className="w-6 h-6" /> },
            { title: 'Typography Fun', desc: 'Bold fonts with personality', color: '#FFE135', icon: <Triangle className="w-6 h-6" /> }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border-[3px] border-black group hover:translate-x-1 hover:-translate-y-1 transition-transform flex items-start gap-4"
              style={{ boxShadow: '6px 6px 0 #000' }}>
              <div className="w-14 h-14 rounded-full border-[3px] border-black flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.color }}>
                <span className="text-black">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-black text-xl mb-2 text-black">{item.title}</h3>
                <p className="text-sm text-black">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black leading-[0.95] mb-6">
            <span className="text-[#7C4DFF]">Party</span>
            <span className="text-[#FF6B9D]">With</span>
            <span className="text-[#00D4AA]">Everyone</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Figma', 'Sketch', 'Adobe', 'Framer'].map((item, i) => {
            const bgColor = ['#FFE135', '#00D4AA', '#FF6B9D', '#7C4DFF'][i];
            const textColor = ['#000', '#000', '#000', '#FFF'][i];
            return (
              <div key={item} className="p-6 border-[3px] border-black text-center font-black text-lg hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ 
                  boxShadow: '6px 6px 0 #000',
                  backgroundColor: bgColor,
                  color: textColor
                }}>
                {item}
              </div>
            );
          })}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-16">
        {[
          { value: '10K+', label: 'Designers', color: '#FF6B9D' },
          { value: '500+', label: 'Patterns', color: '#00D4AA' },
          { value: '100%', label: 'Fun', color: '#FFE135' },
          { value: '∞', label: 'Ideas', color: '#7C4DFF' }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white border-[3px] border-black text-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
            style={{ boxShadow: '6px 6px 0 #000' }}>
            <div className="text-3xl font-black mb-2" style={{ 
              color: item.color,
              textShadow: item.color === '#FFE135' ? '1px 1px 0 rgba(0,0,0,0.3)' : 'none'
            }}>{item.value}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-black">{item.label}</div>
          </div>
        ))}
      </section>

      {/* Security */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="p-8 bg-white border-[3px] border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#7C4DFF] rounded-full border-[3px] border-black flex items-center justify-center">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-black mb-2 text-black">Secure & Fun</h2>
              <p className="text-black">Your creativity is protected with colorful security</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              '256-bit colorful encryption',
              'GDPR compliant with style',
              'Regular rainbow audits'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#00D4AA]" />
                <span className="font-bold text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black leading-[0.95] mb-6">
            <span className="text-[#FFE135]" style={{ textShadow: '3px 3px 0 #000' }}>Price</span>
            <span className="text-[#FF6B9D]">Tags</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Playful', price: '$9/mo', features: ['Basic shapes', '5 colors', 'Email support'], color: '#FFE135' },
            { name: 'Bold', price: '$29/mo', features: ['All shapes', 'Unlimited colors', 'Priority support', 'Custom patterns'], color: '#FF6B9D' },
            { name: 'Chaotic', price: '$99/mo', features: ['Everything', 'Team access', 'Dedicated support', 'Exclusive patterns'], color: '#7C4DFF' }
          ].map((plan) => (
            <div key={plan.name} className="p-6 bg-white border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform"
              style={{ boxShadow: '8px 8px 0 #000' }}>
              <h3 className="font-black text-xl mb-2 text-black">{plan.name}</h3>
              <div className="text-3xl font-black mb-4 text-black" style={{ color: plan.color }}>{plan.price}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFE135]" fill="#FFE135" />
                    <span className="font-bold text-black">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 font-bold text-black border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ backgroundColor: plan.color, boxShadow: '4px 4px 0 #000' }}>
                Start Playing
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black leading-[0.95] mb-6">
            <span className="text-black">Curious</span>
            <span className="text-black">?</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Is Memphis design too chaotic?', a: 'Chaotic is fun! We keep it playful but usable.' },
            { q: 'Can I use this for serious projects?', a: 'Yes! Serious projects need fun too.' },
            { q: 'Are these colors accessible?', a: 'We ensure high contrast with bold colors.' },
            { q: 'Can I mix patterns?', a: 'The more patterns, the merrier!' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform"
              style={{ boxShadow: '6px 6px 0 #000' }}>
              <h3 className="font-black text-lg mb-2 flex items-center gap-2 text-black">
                <HelpCircle className="w-5 h-5 text-[#FF6B9D]" />
                {item.q}
              </h3>
              <p className="text-black">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 mb-8 md:mb-16">
        <div className="p-8 bg-white border-[3px] border-black text-center" style={{ boxShadow: '8px 8px 0 #000' }}>
          <Mail className="w-12 h-12 mx-auto mb-4 text-[#7C4DFF]" />
          <h2 className="text-3xl font-black mb-4 text-black">Let's Create!</h2>
          <p className="text-black mb-6">Ready to add some fun to your designs?</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@colorful.email"
              className="flex-1 px-6 py-3 border-[3px] border-black text-black placeholder-gray-500 focus:outline-none focus:border-[#FF6B9D]"
            />
            <button className="px-8 py-3 bg-[#FF6B9D] text-white font-bold border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform flex items-center gap-2"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              Send
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
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
