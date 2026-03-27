import { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Zap, Box, Star,
  Music, Smile, Check,
  ChevronDown, ChevronUp, Github, Twitter, Linkedin,
  Sparkles, Rocket, Play
} from 'lucide-react';

const COLORS = {
  pink: '#FF61D2',
  yellow: '#FFE100',
  cyan: '#00F0FF',
  lime: '#C1FF00',
  purple: '#7000FF',
  black: '#000000',
  white: '#FFFFFF',
};

const MemphisShape = ({ type, color, size, top, left, rotate, delay = 0 }: any) => {
  const styles = {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    transform: `rotate(${rotate}deg)`,
    animationDelay: `${delay}s`,
  };

  if (type === 'circle') return <div className="absolute rounded-full border-4 border-black animate-float" style={styles} />;
  if (type === 'square') return <div className="absolute border-4 border-black animate-float" style={styles} />;
  if (type === 'triangle') return (
    <div className="absolute animate-float" style={{ ...styles, backgroundColor: 'transparent', width: 0, height: 0, borderLeft: `${size/2}px solid transparent`, borderRight: `${size/2}px solid transparent`, borderBottom: `${size}px solid ${color}`, filter: 'drop-shadow(4px 4px 0px black)' }} />
  );
  if (type === 'dots') return (
    <div className="absolute opacity-20" style={{ ...styles, backgroundColor: 'transparent', backgroundImage: `radial-gradient(${color} 2px, transparent 2px)`, backgroundSize: '10px 10px' }} />
  );
  return null;
};

export const S10Memphis = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFE100] selection:text-black overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes memphisFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: memphisFloat 6s ease-in-out infinite;
        }
        .memphis-shadow {
          box-shadow: 8px 8px 0px 0px #000;
        }
        .memphis-shadow-sm {
          box-shadow: 4px 4px 0px 0px #000;
        }
        .memphis-button-hover:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0px 0px #000;
        }
        .memphis-button-active:active {
          transform: translate(2px, 2px);
          box-shadow: 4px 4px 0px 0px #000;
        }
      `}} />

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <MemphisShape type="circle" color={COLORS.pink} size={80} top={10} left={5} rotate={0} />
        <MemphisShape type="triangle" color={COLORS.cyan} size={60} top={25} left={85} rotate={15} delay={1} />
        <MemphisShape type="square" color={COLORS.yellow} size={40} top={60} left={10} rotate={45} delay={2} />
        <MemphisShape type="dots" color={COLORS.black} size={200} top={40} left={70} rotate={0} />
        <MemphisShape type="circle" color={COLORS.lime} size={30} top={80} left={90} rotate={0} delay={0.5} />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FF61D2] border-4 border-black memphis-shadow-sm flex items-center justify-center transform rotate-3">
              <Sparkles size={24} strokeWidth={3} />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter italic">NEO-MEMPHIS</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-8">
              {['FEATURES', 'SAMPLES', 'PRICING', 'SUPPORT'].map((item) => (
                <span key={item} className="text-sm font-black hover:text-[#FF61D2] cursor-pointer transition-colors tracking-widest">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
              <span className="text-sm font-black cursor-pointer hover:underline underline-offset-4">LOGIN</span>
              <button className="px-6 py-2 bg-[#FFE100] border-4 border-black memphis-shadow-sm text-sm font-black transition-all memphis-button-hover memphis-button-active">
                GET STARTED
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-4 border-black bg-white">
              {menuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-[84px] left-0 right-0 bg-[#C1FF00] border-b-4 border-black p-8 z-50">
            <div className="flex flex-col gap-6">
              {['FEATURES', 'SAMPLES', 'PRICING', 'SUPPORT'].map((item) => (
                <span key={item} className="text-2xl font-black italic tracking-widest border-b-2 border-black pb-2">
                  {item}
                </span>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button className="w-full px-6 py-4 bg-white border-4 border-black memphis-shadow font-black text-xl italic uppercase">
                  LOGIN
                </button>
                <button className="w-full px-6 py-4 bg-[#FF61D2] border-4 border-black memphis-shadow font-black text-xl italic uppercase">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-visible border-b-4 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-[#C1FF00] border-4 border-black text-xs font-black uppercase mb-8 transform -rotate-2">
              DESIGN REVOLUTION 2026
            </div>
            
            <h1 className="font-black italic text-black leading-[0.9] mb-8 uppercase tracking-tighter"
                style={{ fontSize: isMobile ? '4rem' : '7rem' }}>
              BOLD <br />
              <span className="text-[#FF61D2] relative">
                VIBRANT
                <div className="absolute -bottom-2 -right-4 w-full h-8 bg-[#FFE100] -z-10 transform skew-x-12" />
              </span><br />
              CHAOTIC
            </h1>
            
            <p className="text-xl font-bold bg-white/80 p-6 border-4 border-black memphis-shadow-sm mb-12 max-w-xl leading-tight">
              Escape the monotonous minimalist web. We bring back the energy, patterns, and soul of the 80s with a modern technical punch.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-[#C1FF00] border-4 border-black memphis-shadow text-xl font-black transition-all memphis-button-hover memphis-button-active flex items-center gap-3">
                BUILD NOW <ArrowRight size={24} strokeWidth={4} />
              </button>
              <button className="px-10 py-5 bg-white border-4 border-black memphis-shadow text-xl font-black transition-all memphis-button-hover memphis-button-active flex items-center gap-3">
                EXPLORE <Play size={24} strokeWidth={4} fill="black" />
              </button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            {/* Visual Composition */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#00F0FF] border-4 border-black memphis-shadow rounded-full overflow-hidden">
               <div className="w-full h-full bg-[#7000FF] opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, black 20px, black 21px)' }} />
            </div>
            <div className="absolute top-10 left-10 w-40 h-80 bg-[#FF61D2] border-4 border-black transform -rotate-12 memphis-shadow animate-float" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#FFE100] border-4 border-black transform rotate-6 memphis-shadow-sm animate-float" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-4 border-4 border-black border-dashed flex items-center justify-center text-black">
                    <Rocket size={80} strokeWidth={3} />
                </div>
            </div>
            {/* Floating particles */}
            {hasMounted && [...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-6 h-6 border-4 border-black bg-white rounded-full animate-pulse" 
                     style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDelay: `${i*0.5}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 bg-[#FFE100] border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              WHY BE <br /><span className="bg-white px-2">NORMAL?</span>
            </h2>
            <p className="max-w-md text-xl font-bold italic border-b-4 border-black pb-2">
              Standard designs are boring. Our tools help you stand out from the noise of clean, corporate aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { color: '#00F0FF', icon: Zap, title: 'SPEED', text: 'Optimized for performance while maintaining heavy visuals. No compromises.' },
              { color: '#FF61D2', icon: Box, title: 'MODULAR', text: 'Interchangeable patterns and components built for modern React frameworks.' },
              { color: '#C1FF00', icon: Music, title: 'RHYTHM', text: 'Dynamic layouts that guide the user eye through strategic chaos.' }
            ].map((f, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3" />
                <div className="relative bg-white border-4 border-black p-10 h-full hover:-translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer">
                  <div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6" style={{ backgroundColor: f.color }}>
                    <f.icon size={32} strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl font-black italic mb-4 uppercase">{f.title}</h3>
                  <p className="text-lg font-bold leading-tight">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#7000FF] text-white border-b-4 border-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-full bg-black opacity-10 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none mb-12">
                WHAT <br />THEY <br /><span className="text-[#FFE100]">SAY</span>
              </h2>
              <div className="w-40 h-4 bg-[#FF61D2] border-t-4 border-b-4 border-black" />
            </div>

            <div className="space-y-12 text-black">
              {[
                { name: 'ALEX V.', role: 'CREATIVE DIR', text: 'THIS ARCHITECTURE IS INSANE. IT BREAKS EVERY RULE IN THE BEST WAY POSSIBLE.' },
                { name: 'SARA J.', role: 'UX DESIGNER', text: 'FINALLY, A FRAMEWORK THAT HAS ACTUAL PERSONALITY. MY CLIENTS LOVE THE VIBE.' }
              ].map((t, i) => (
                <div key={i} className="relative">
                  <div className="bg-white p-8 border-4 border-black memphis-shadow transform hover:rotate-1 transition-transform">
                    <div className="flex gap-1 mb-4 text-[#FF61D2]">
                      {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <p className="text-xl font-black italic mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#00F0FF] border-4 border-black rounded-full" />
                      <div>
                        <p className="font-black text-lg">{t.name}</p>
                        <p className="font-bold text-[#7000FF]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">CHOOSE YOUR VIBE</h2>
            <p className="text-xl font-bold max-w-2xl mx-auto bg-[#C1FF00] inline-block px-4 py-2 border-4 border-black">Simple pricing for complex designs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'STARTER', price: '$0', color: '#00F0FF', items: ['Basic Assets', 'Community Access', 'Single Project'] },
              { name: 'REBEL', price: '$49', color: '#FF61D2', items: ['Full Library', 'Unlimited Projects', 'Priority Chaos', 'SVG Patterns'], best: true },
              { name: 'LEGEND', price: '$999', color: '#FFE100', items: ['Custom Patterns', 'Enterprise License', 'Direct Contact'] }
            ].map((p, i) => (
              <div key={i} className={`relative flex flex-col border-4 border-black memphis-shadow transition-transform hover:-translate-y-2 cursor-pointer ${p.best ? 'lg:-translate-y-4' : ''}`}>
                {p.best && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-black text-[#FF61D2] font-black italic text-sm tracking-widest z-20">
                        MOST WANTED
                    </div>
                )}
                <div className="p-8 border-b-4 border-black" style={{ backgroundColor: p.color }}>
                  <h3 className="text-3xl font-black italic mb-2 uppercase">{p.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">{p.price}</span>
                    <span className="font-black text-sm uppercase">/ LIFE</span>
                  </div>
                </div>
                <div className="p-8 flex-grow bg-white">
                  <ul className="space-y-4 mb-10">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 font-bold text-lg">
                        <Check size={24} strokeWidth={4} className="text-black" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-black text-white font-black text-xl italic hover:bg-[#7000FF] transition-colors memphis-shadow-sm">
                    JOIN CLUB
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#C1FF00] border-b-4 border-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black uppercase italic mb-12 text-center">QUIZ ME</h2>
          <div className="space-y-6">
            {[
              { q: 'WHY ALL THE OUTLINES?', a: 'Because structure is beautiful in chaos!' },
              { q: 'IS THIS ACCESSIBLE?', a: 'High contrast is a core principle. We use pure blacks and vivid colors.' },
              { q: 'HOW DO I CUSTOMIZE IT?', a: 'Our tokens.ts allow you to swap palettes while keeping the thick border energy.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black memphis-shadow-sm">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center bg-white"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-xl font-black italic uppercase tracking-wider">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={28} strokeWidth={3} /> : <ChevronDown size={28} strokeWidth={3} />}
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 font-bold text-lg border-t-2 border-black/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-black text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #FF61D2 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.8] mb-12 tracking-tighter">
            QUIT BEING <br />BORING.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button className="px-12 py-6 bg-[#FF61D2] text-black border-4 border-white memphis-shadow font-black text-2xl italic hover:bg-white transition-colors">
              START CRAZY
            </button>
            <button className="px-12 py-6 bg-transparent text-white border-4 border-white memphis-shadow font-black text-2xl italic hover:bg-white hover:text-black transition-colors">
              VIEW GITHUB
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6 font-black italic">
              <div className="w-10 h-10 bg-[#7000FF] border-4 border-black memphis-shadow-sm flex items-center justify-center transform -rotate-6">
                <Sparkles size={20} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-xl uppercase tracking-tighter">NEO-MEMPHIS</span>
            </div>
            <p className="font-bold text-lg max-w-xs mb-8 uppercase italic">BRINGING BACK THE SOUL OF WEB DESIGN, ONE ZIGZAG AT A TIME.</p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <div key={i} className="w-12 h-12 border-4 border-black bg-[#00F0FF] flex items-center justify-center memphis-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                  <Icon size={24} strokeWidth={3} className="text-black" />
                </div>
              ))}
            </div>
          </div>
          
          {[
            { title: 'PLAY', links: ['Home', 'About', 'Contact'] },
            { title: 'TOOLS', links: ['Icons', 'Patterns', 'Colors'] },
            { title: 'LEGAL', links: ['Privacy', 'Terms', 'Cookie'] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-black italic text-xl mb-6 uppercase border-b-4 border-black inline-block">{col.title}</h4>
              <ul className="space-y-3 font-bold text-lg uppercase italic">
                {col.links.map(l => <li key={l} className="hover:text-[#FF61D2] transition-colors cursor-pointer">{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-black italic uppercase tracking-widest text-sm text-black">© 2026 NEO-MEMPHIS. STAY WEIRD.</p>
          <div className="flex items-center gap-2 font-black italic bg-[#FFE100] px-4 py-1 border-4 border-black text-black">
            POWERED BY CHAOS <Smile size={20} strokeWidth={3} />
          </div>
        </div>
      </footer>
    </div>
  );
};
