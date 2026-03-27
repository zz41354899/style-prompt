import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Leaf, Wind, Sun, Cloud, Heart, Trees as Tree,
  Bird, Droplets, Squirrel
} from 'lucide-react';

export const S20Nature = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D4222] font-sans antialiased selection:bg-[#BEF264] selection:text-[#2D4222] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .nature-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(45, 66, 34, 0.1);
          border-radius: 40px;
          box-shadow: 0 20px 40px -15px rgba(45, 66, 34, 0.05);
        }
        .organic-gradient {
          background: linear-gradient(135deg, #4A5D23 0%, #2D4222 100%);
        }
        .leaf-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4A5D23 1px, transparent 0);
          background-size: 30px 30px;
          opacity: 0.05;
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-sway {
          animation: sway 6s ease-in-out infinite;
        }
        .shadow-soft {
          box-shadow: 0 10px 30px rgba(45, 66, 34, 0.08);
        }
      `}} />

      {/* Decorative environment */}
      <div className="fixed inset-0 pointer-events-none leaf-pattern" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#BEF264] opacity-10 blur-[100px] rounded-full" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#4A5D23] opacity-5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto space-y-24 relative p-4 md:p-12">
        {/* Navigation */}
        <header className="flex items-center justify-between py-10 px-10 nature-card">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-[#4A5D23]/20 flex items-center justify-center bg-white shadow-soft group-hover:scale-110 transition-transform">
               <Tree size={24} className="text-[#4A5D23]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-bold tracking-tight text-[#2D4222]">Terra</span>
               <span className="text-[10px] uppercase tracking-widest text-[#4A5D23]/60 italic font-medium">Ecological Reserve</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D4222]/60">
              {['Reserve', 'Our Story', 'Impact', 'The Forest'].map((item) => (
                <span key={item} className="hover:text-[#4A5D23] cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#4A5D23] group-hover:w-full transition-all duration-500 rounded-full" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <button className="px-10 py-4 bg-[#2D4222] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#4A5D23] transition-all shadow-lg flex items-center gap-3">
               Start Planting
               <Leaf size={14} className="animate-sway" />
            </button>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 bg-white rounded-full shadow-soft border border-slate-100">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white/90 backdrop-blur-xl border border-[#2D4222]/10 p-12 z-[100] relative rounded-[40px] shadow-2xl space-y-12 animate-in fade-in duration-500">
             <div className="flex flex-col gap-10 text-xl font-bold text-[#2D4222] text-center">
                {['The Grove', 'Archives', 'Ecological Impact', 'Contact'].map((item) => (
                   <span key={item} className="text-[#2D4222]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 bg-[#2D4222] text-white rounded-full font-bold uppercase tracking-widest text-xs">
                Inquire Now
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-12 py-10 px-6">
           <div className="inline-flex items-center gap-3 bg-white border border-[#2D4222]/10 rounded-full px-5 py-2 shadow-soft animate-sway">
              <Sun size={16} className="text-[#FBBF24]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D4222]/60">Breathe deep. Live rooted.</span>
           </div>
           
           <h1 className={`font-bold leading-[1.1] tracking-tighter text-[#2D4222] ${isMobile ? 'text-5xl' : 'text-screen-lg md:text-[8rem]'}`}>
             Rooted in <br /> 
             <span className="text-[#4A5D23] italic">Harmony</span>
           </h1>
           
           <p className={`text-[#2D4222]/50 font-medium leading-relaxed max-w-2xl mx-auto ${isMobile ? 'text-lg' : 'text-2xl'}`}>
             Reconnect with the earth's natural rhythms. We design digital environments that feel as organic and revitalizing as a walk through the woods.
           </p>
           
           <div className="flex flex-wrap justify-center gap-10 pt-10">
              <button className="px-14 py-7 bg-[#2D4222] text-white text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-2xl flex items-center gap-5 group">
                 Join the Reserve
                 <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
              <button className="px-14 py-7 border-2 border-[#2D4222]/10 bg-white text-[#2D4222] text-xl font-bold rounded-full hover:bg-slate-50 transition-all shadow-soft">
                 Watch the Seasons
              </button>
           </div>
           
           <div className="pt-24 flex justify-center opacity-30">
              <div className="flex gap-2">
                 {[1,2,3].map(i => <div key={i} className="w-2 h-12 bg-[#2D4222] rounded-full animate-bounce" style={{ animationDelay: `${i*0.2}s` }} />)}
              </div>
           </div>
        </section>

        {/* Informational grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-6">
          {[
            { icon: Bird, title: 'Freedom of Movement', text: 'Fluid navigation patterns that follow the path of least resistance.' },
            { icon: Droplets, title: 'Fluid Resilience', text: 'Interfaces that adapt to any screen environment as naturally as water.' },
            { icon: Squirrel, title: 'Nutrient Cycles', text: 'Data management systems inspired by the circularity of forest ecosystems.' }
          ].map((item, i) => (
            <div key={i} className="nature-card p-12 space-y-10 group hover:translate-y-[-10px] transition-all duration-700 cursor-pointer">
               <div className="w-20 h-20 rounded-full bg-[#FDFBF7] border border-[#2D4222]/10 flex items-center justify-center text-[#4A5D23] shadow-soft group-hover:bg-[#4A5D23] group-hover:text-white transition-all">
                  <item.icon size={32} strokeWidth={1} />
               </div>
               <h3 className="text-3xl font-bold tracking-tight text-[#2D4222]">{item.title}</h3>
               <p className="text-lg leading-relaxed text-[#2D4222]/40 font-medium">
                  {item.text}
               </p>
               <div className="pt-6">
                  <span className="text-[12px] uppercase tracking-widest text-[#4A5D23] font-bold pb-1 border-b-2 border-[#4A5D23]/20 hover:border-[#4A5D23] transition-all">Discover Ecological Design</span>
               </div>
            </div>
          ))}
        </section>

        {/* Narrative Showcase */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-6">
           <div className="relative group p-4">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[#2D4222]/5 rounded-[80px]" />
              <div className="aspect-square bg-white border border-[#2D4222]/10 rounded-[80px] p-12 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center animate-sway">
                 <Tree size={280} className="text-[#4A5D23] opacity-10 absolute pointer-events-none" />
                 <div className="relative z-10 text-center space-y-10">
                    <Cloud size={100} className="mx-auto text-[#87CEEB] animate-bounce" style={{ animationDuration: '4s' }} />
                    <p className="text-4xl md:text-5xl font-bold tracking-tighter text-[#2D4222]">
                       Cultivating the <br /> <span className="text-[#4A5D23] italic underline decoration-[#BEF264] decoration-8 underline-offset-8">Digital Forest.</span>
                    </p>
                 </div>
              </div>
           </div>
           
           <div className="space-y-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.6em] text-[#4A5D23]">The Living System</span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#2D4222] leading-[1.1] tracking-tighter">Everything Is <br />Connected.</h2>
              <div className="w-24 h-2 bg-[#BEF264] rounded-full" />
              <p className="text-xl font-medium leading-relaxed text-[#2D4222]/50 italic border-l-4 border-[#4A5D23] pl-10">
                 We believe in the power of slow growth. Our design philosophy centers on long-term sustainability, psychological well-being, and ecological balance.
              </p>
              
              <div className="space-y-8 pt-10">
                 {[
                   'Biophilic Layout Structures',
                   'Earthy Color Harmonies',
                   'Breathable Whitespace Policy',
                   'Eco-Conscious Render Pipeline'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-8 group cursor-pointer hover:pl-4 transition-all duration-500">
                      <div className="w-4 h-4 rounded-full bg-[#BEF264] border-2 border-[#2D4222] transition-colors" />
                      <span className="text-lg font-bold text-[#2D4222]/70 group-hover:text-[#2D4222] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Pricing/Contribution Tiers */}
        <section className="py-24 text-center px-6">
           <h2 className="text-xs uppercase tracking-[0.8em] text-[#4A5D23] mb-20">Support the Ecosystem</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Sprout', price: 'Free', unit: 'Everlasting', color: '#BEF264' },
              { name: 'Seedling', price: '$12', unit: 'Monthly Growth', color: '#4A5D23', featured: true },
              { name: 'Ancient Oak', price: '$48', unit: 'Infinite Roots', color: '#FBBF24' }
            ].map((p, i) => (
              <div key={i} className={`p-16 nature-card flex flex-col items-center gap-12 transition-all duration-1000 ${p.featured ? '!bg-[#2D4222] text-white scale-[1.05]' : 'hover:scale-[1.02]'}`}>
                 {p.featured && <div className="absolute top-[-25px] bg-[#BEF264] text-[#2D4222] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg animate-bounce z-20">Most Resilient</div>}
                 <h4 className="text-xs font-bold uppercase tracking-[0.4em] transform opacity-60 italic">{p.name}</h4>
                 <div className="flex flex-col items-center gap-4">
                    <span className="text-7xl font-bold tracking-tight">{p.price}</span>
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${p.featured ? 'text-white/40' : 'text-[#4A5D23]/40'}`}>{p.unit}</span>
                 </div>
                 <div className="w-12 h-1 bg-current opacity-10 rounded-full" />
                 <ul className="space-y-4 text-sm font-medium opacity-50 h-24 italic">
                    <li>1 Native Tree Planted</li>
                    <li>Eco-Certified Hosting</li>
                    <li>Digital Habitat Access</li>
                 </ul>
                 <button className={`w-full py-6 rounded-full font-bold text-lg transition-all shadow-xl ${p.featured ? 'bg-[#BEF264] text-[#2D4222]' : 'bg-[#2D4222] text-white'}`}>
                    Start Growing
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ - Rooted Accordion */}
        <section className="py-24 max-w-4xl mx-auto space-y-20 px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-[#2D4222] text-center tracking-tight leading-tight">Wisdom from <br />the Ancient Grove.</h2>
           <div className="space-y-6">
              {[
                { q: 'What is biophilic design?', a: 'Biophilic design is the practice of connecting human environments with the natural world through the use of direct nature, indirect nature, and space and place conditions.' },
                { q: 'Is the reserve carbon neutral?', a: 'Every byte transferred over our network is offset through certified reforestation projects in the Amazon basin.' },
                { q: 'How can I contribute more?', a: 'Our Ancient Oak tier allows for dedicated ecosystem management roles within our decentralized reserve.' }
              ].map((faq, i) => (
                 <div key={i} className="nature-card p-10 group hover:border-[#4A5D23]/30 transition-colors">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-2xl font-bold text-[#2D4222] tracking-tight group-hover:text-[#4A5D23] transition-colors">{faq.q}</span>
                       <ChevronDown size={28} className={`text-[#4A5D23] transition-transform duration-700 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-10 text-xl font-medium text-[#2D4222]/50 leading-relaxed italic animate-in fade-in duration-1000">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 nature-card border-none space-y-20 flex flex-col items-center">
           <div className="flex justify-center gap-16 mb-10">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <div key={i} className="text-[#2D4222]/30 hover:text-[#4A5D23] transition-all transform hover:scale-125 duration-700 cursor-pointer">
                   <Icon size={28} strokeWidth={1} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-16 text-[11px] font-bold uppercase tracking-[0.4em] text-[#2D4222]/30 text-center">
              <span className="hover:text-[#4A5D23] cursor-pointer">Ecological Rights</span>
              <span className="hover:text-[#4A5D23] cursor-pointer">Climate Ethics</span>
              <span className="hover:text-[#4A5D23] cursor-pointer">Heritage Trust</span>
           </div>
           
           <div className="flex flex-col items-center gap-10">
              <div className="w-14 h-14 rounded-full bg-[#BEF264] flex items-center justify-center shadow-soft animate-sway">
                 <Leaf size={24} className="text-[#2D4222]" strokeWidth={1} />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[1em] text-[#2D4222]/20 text-center px-10 leading-loose">
                 © 2026 TERRA RESERVE WORLDWIDE. ALL BIOMES PROTECTED.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
