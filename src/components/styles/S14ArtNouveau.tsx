import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Flower, Wind, Leaf, Sun, Heart
} from 'lucide-react';

export const S14ArtNouveau = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3728] font-serif antialiased selection:bg-[#E2D1C3] selection:text-[#4A3728] overflow-x-hidden p-4 md:p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .nouveau-border {
          border: 2px solid #BC9A7B;
          border-radius: 60px 15px 100px 15px / 15px 100px 15px 60px;
        }
        .whiplash-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #BC9A7B, transparent);
          border-radius: 50%;
          transform: skewX(-20deg);
        }
        .organic-bg {
          background-image: radial-gradient(circle at 10px 10px, #BC9A7B 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.05;
        }
        .soft-gold-text {
          color: #B8860B;
        }
        .curvy-shadow {
          box-shadow: 20px 20px 60px #e5ddd4, -20px -20px 60px #ffffff;
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none organic-bg" />
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-[#F3E5AB] opacity-20 blur-[100px] rounded-full animate-pulse" />
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-[#BC9A7B] opacity-10 blur-[100px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto space-y-20 relative">
        {/* Navigation */}
        <header className="flex items-center justify-between py-10 border-b border-[#BC9A7B]/20">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-16 h-16 nouveau-border flex items-center justify-center bg-white transform group-hover:scale-110 transition-transform duration-700 overflow-hidden relative">
               <div className="absolute inset-0 bg-[#FDFBF7] opacity-50" />
               <Flower size={32} className="text-[#BC9A7B] relative z-10" strokeWidth={1} />
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-light tracking-widest uppercase italic">Flora</span>
               <div className="whiplash-line w-full opacity-40 mt-1" />
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-light">
              {['Garden', 'Archive', 'Collection', 'Atelier'].map((item) => (
                <span key={item} className="hover:text-[#BC9A7B] cursor-pointer transition-all relative group italic">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#BC9A7B] group-hover:w-full transition-all duration-700" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-8">
              <button className="px-10 py-3 rounded-full border border-[#BC9A7B] uppercase tracking-widest text-[10px] hover:bg-[#BC9A7B] hover:text-white transition-all duration-700 shadow-sm">
                Join Archive
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#BC9A7B]">
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#FDFBF7] border border-[#BC9A7B]/30 p-12 z-[100] relative text-center rounded-[40px] shadow-2xl space-y-12">
             <div className="flex flex-col gap-10 text-xl font-light tracking-widest uppercase italic">
                {['Garden', 'Archive', 'Collection', 'Atelier'].map((item) => (
                   <span key={item} className="text-[#4A3728]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 bg-[#BC9A7B] text-white rounded-full font-bold uppercase tracking-widest text-xs">
                Enter Atelier
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-10">
           <div className="space-y-12 relative">
              <div className="absolute -top-10 -left-10 text-[#BC9A7B] opacity-10 pointer-events-none">
                 <Leaf size={120} strokeWidth={0.5} />
              </div>
              
              <div className="inline-block px-4 py-1 text-[10px] uppercase tracking-[0.4em] border-l-2 border-[#BC9A7B] text-[#BC9A7B] font-light italic">
                 Ephemeral & Eternal
              </div>
              
              <h1 className={`font-light leading-none italic text-[#4A3728] ${isMobile ? 'text-5xl' : 'text-[7.5rem]'}`}>
                Organic <br /> 
                <span className="text-[#BC9A7B] pl-4 lg:pl-12">Poetry</span>
              </h1>
              
              <p className={`text-[#4A3728]/60 font-light leading-relaxed max-w-xl italic ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                Embrace the grace of a winding line. We design products that breathe, flow, and grow with the rhythm of nature's finest curves.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-6">
                 <button className="px-12 py-6 bg-[#4A3728] text-white rounded-[40px_10px_40px_10px] text-lg font-light italic hover:scale-105 transition-all duration-700 shadow-xl flex items-center gap-4 group">
                    Begin Journey
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                 </button>
                 <button className="px-12 py-6 border border-[#BC9A7B] text-[#BC9A7B] rounded-[10px_40px_10px_40px] text-lg font-light italic hover:bg-[#BC9A7B]/5 transition-all">
                    View Gallery
                 </button>
              </div>
           </div>

           <div className="relative group p-10">
              <div className="absolute inset-0 bg-[#BC9A7B]/5 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000" />
              <div className="aspect-[4/5] bg-white rounded-[100px_40px_100px_40px] border border-[#BC9A7B]/30 p-12 shadow-2xl relative overflow-hidden group-hover:rotate-1 transition-transform duration-700">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-[#FDFBF7] -mr-24 -mt-24 rounded-full border border-[#BC9A7B]/10 z-0" />
                 <div className="h-full border border-[#BC9A7B]/20 rounded-[80px_30px_80px_30px] p-8 flex flex-col justify-center items-center relative z-10 backdrop-blur-sm">
                    <Flower size={160} strokeWidth={0.5} className="text-[#BC9A7B] animate-float" />
                    <p className="mt-12 text-[10px] uppercase tracking-[0.5em] text-[#BC9A7B] italic">The Whisp of Creation</p>
                    <div className="whiplash-line w-24 mt-8 opacity-40" />
                 </div>
              </div>
           </div>
        </section>

        {/* Feature grid */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Leaf, title: 'Organic Growth', desc: 'Interfaces that adapt and evolve naturally without disruption.' },
            { icon: Wind, title: 'Whisper Flow', desc: 'Seamless transitions as light and effortless as a summer breeze.' },
            { icon: Sun, title: 'Lucid Bloom', desc: 'Radiant clarity achieved through layered translucency and light.' },
            { icon: Heart, title: 'Handcrafted', desc: 'Every pixel set with the intentionality of a master artisan gallery.' }
          ].map((item, i) => (
            <div key={i} className="space-y-8 p-10 rounded-[60px_20px_60px_20px] bg-white border border-[#BC9A7B]/10 hover:border-[#BC9A7B]/30 transition-all duration-700 group cursor-pointer hover:shadow-lg">
               <div className="w-16 h-16 rounded-full border border-[#BC9A7B]/30 flex items-center justify-center text-[#BC9A7B] group-hover:bg-[#BC9A7B] group-hover:text-white transition-all duration-700">
                  <item.icon size={28} strokeWidth={1} />
               </div>
               <h3 className="text-2xl font-light italic text-[#4A3728]">{item.title}</h3>
               <p className="text-sm font-light italic leading-loose text-[#4A3728]/50">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Split Section */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-1000">
              <div className="absolute inset-0 -z-10 bg-[#E2D1C3] opacity-30 blur-3xl rounded-full" />
              <div className="bg-white nouveau-border p-12 lg:p-20 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-4 left-4 text-[#BC9A7B]/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                    <Flower size={200} strokeWidth={0.5} />
                 </div>
                 <div className="relative z-10 space-y-10">
                    <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-[#4A3728]">
                       "Beauty is the flower of utility. If the form does not please the eye, it can never truly serve the purpose."
                    </p>
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full border border-[#BC9A7B] p-1">
                          <div className="w-full h-full rounded-full bg-[#E2D1C3]" />
                       </div>
                       <div>
                          <p className="text-sm font-light italic text-[#4A3728]">Isabel Vernière</p>
                          <p className="text-[10px] uppercase tracking-widest text-[#BC9A7B]">Chief Curator</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="space-y-12">
              <h2 className="text-5xl font-light italic text-[#4A3728] leading-tight max-w-lg">The Harmony of Curvature.</h2>
              <div className="whiplash-line w-32 opacity-40" />
              <p className="text-lg font-light italic leading-loose text-[#4A3728]/60">
                Forget the grid. Embrace the flow. Our design philosophy is rooted in the organic movements of the natural world, where straight lines are a rarity and beauty is everywhere.
              </p>
              <ul className="space-y-8 italic text-[#4A3728]/80 font-light">
                 {[
                   'Flowing Whiplash Borders',
                   'Vibrating Floral Motifs',
                   'Asymmetrical Balance Logic',
                   'Stained Glass Color Theory'
                 ].map((text, i) => (
                   <li key={i} className="flex items-center gap-6 group cursor-pointer hover:pl-4 transition-all duration-500">
                      <div className="w-6 h-6 border border-[#BC9A7B] rounded-full flex items-center justify-center p-1 group-hover:bg-[#BC9A7B] transition-colors">
                         <div className="w-full h-full rounded-full border border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xl tracking-tight">{text}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-24 text-center space-y-20">
           <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.8em] text-[#BC9A7B]">Curated Tiers</h2>
              <div className="whiplash-line w-24 mx-auto opacity-40" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { name: 'Seedling', price: 'Free', desc: 'Access to basic garden' },
               { name: 'Blossom', price: '€24', desc: 'Full atelier access', featured: true },
               { name: 'Conservatory', price: '€99', desc: 'Infinite growth suite' }
             ].map((p, i) => (
               <div key={i} className={`p-16 rounded-[100px_40px_100px_40px] border border-[#BC9A7B]/20 space-y-10 hover:shadow-2xl transition-all duration-1000 ${p.featured ? 'bg-[#F3E5AB]/10 border-[#BC9A7B]/50 relative' : 'bg-white'}`}>
                  {p.featured && <div className="absolute top-4 right-8 bg-[#BC9A7B] text-white px-4 py-1 text-[8px] uppercase tracking-widest rounded-full">Beloved</div>}
                  <h4 className="text-2xl font-light italic text-[#4A3728]">{p.name}</h4>
                  <div className="flex flex-col items-center">
                    <span className="text-6xl font-light italic text-[#4A3728]">{p.price}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#BC9A7B] mt-2 italic">per moon cycle</span>
                  </div>
                  <p className="text-xs italic text-[#4A3728]/50">{p.desc}</p>
                  <button className={`w-full py-5 rounded-full uppercase tracking-widest text-xs transition-all duration-700 ${p.featured ? 'bg-[#4A3728] text-white shadow-xl' : 'border border-[#BC9A7B] text-[#BC9A7B]'}`}>
                     Select Path
                  </button>
               </div>
             ))}
           </div>
        </section>

        {/* FAQ Area */}
        <section className="py-24 max-w-3xl mx-auto space-y-16">
           <h2 className="text-3xl font-light italic text-[#4A3728] text-center">Gentle Inquiries</h2>
           <div className="space-y-6">
              {[
                { q: 'Is it sustainable?', a: 'Our philosophy and architecture are built on lasting principles that avoid the decay of passing trends.' },
                { q: 'How does the whiplash line work?', a: 'It is a mathematical curve that simulates tension and movement, guiding the eye with natural flow.' },
                { q: 'Can I request a custom bloom?', a: 'Members of our Conservatory tier may request bespoke floral decorations for their private instances.' }
              ].map((faq, i) => (
                 <div key={i} className="border border-[#BC9A7B]/20 rounded-[40px_15px_40px_15px] p-8 bg-white/50 backdrop-blur-sm group hover:border-[#BC9A7B]/40 transition-colors">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-lg italic font-light text-[#4A3728]">{faq.q}</span>
                       <ChevronDown size={24} className={`text-[#BC9A7B] transition-transform duration-700 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-8 text-sm italic font-light text-[#4A3728]/60 leading-relaxed animate-in fade-in duration-700">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 -z-10">
              <div className="w-full h-full organic-bg opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#F3E5AB] opacity-30 blur-[150px] rounded-full" />
           </div>
           
           <h2 className="text-5xl md:text-8xl font-light italic text-[#4A3728] leading-tight mb-16">Return to <br />the Garden.</h2>
           <button className="px-16 py-8 bg-[#4A3728] text-white rounded-[60px_15px_60px_15px] text-2xl font-light italic shadow-2xl hover:scale-110 transition-all duration-1000 uppercase tracking-widest">
              Join the Flora
           </button>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t border-[#BC9A7B]/20 flex flex-col items-center space-y-16">
           <div className="flex gap-16 text-[#BC9A7B]">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-[#4A3728] transition-all transform hover:scale-125 duration-500"><Icon size={24} strokeWidth={1} /></a>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-12 text-[10px] uppercase tracking-[0.4em] text-[#4A3728]/40 italic text-center">
              <span className="hover:text-[#BC9A7B] cursor-pointer">Archive Privacy</span>
              <span className="hover:text-[#BC9A7B] cursor-pointer">Floral Ethics</span>
              <span className="hover:text-[#BC9A7B] cursor-pointer">The Whiplash Standard</span>
           </div>
           
           <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#BC9A7B] p-2 animate-float">
                 <Flower size={20} className="text-[#BC9A7B]" />
              </div>
              <p className="mt-8 text-[9px] uppercase tracking-[0.6em] text-[#BC9A7B]/60 text-center">
                 © 2026 FLORA ATELIER DE FRANCE. TOUT DROIT RÉSERVÉ.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
