import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Book, Bookmark, Pen, Scroll, Library,
  Mail, MessageSquare, Quote, Heart
} from 'lucide-react';

export const S24Serif = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#1A1A1A] font-serif antialiased selection:bg-[#FDE047] selection:text-[#1A1A1A] overflow-x-hidden p-4 md:p-12">
      <style dangerouslySetInnerHTML={{ __html: `
        .paper-texture {
          background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
          opacity: 0.05;
        }
        .serif-border {
          border: 1px solid rgba(26, 26, 26, 0.1);
        }
        .serif-line {
          height: 1px;
          background: rgba(26, 26, 26, 0.2);
          width: 80px;
          margin: 0 auto;
        }
        .drop-cap::first-letter {
          float: left;
          font-size: 5rem;
          line-height: 0.8;
          padding-right: 0.5rem;
          font-weight: bold;
          color: #B8860B;
        }
        .italic-hover:hover {
          font-style: italic;
          letter-spacing: 0.05em;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}} />

      {/* Subtle paper background */}
      <div className="fixed inset-0 paper-texture pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {/* Navigation */}
        <header className="flex flex-col items-center gap-10 py-12 border-b-2 border-[#1A1A1A]/10">
          <div className="flex items-center gap-6 group cursor-pointer text-center">
            <div className="w-16 h-16 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center p-2 group-hover:bg-[#B8860B]/5 transition-colors">
               <Book size={32} className="text-[#B8860B]" strokeWidth={1} />
            </div>
            <div className="flex flex-col text-left">
               <span className="text-4xl font-light tracking-tight text-[#1A1A1A]">Curators</span>
               <span className="text-[11px] font-sans uppercase tracking-[0.4em] text-[#B8860B] mt-1 italic font-bold">Est. 1924 _ Digital Ed.</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-14 text-[12px] font-sans uppercase tracking-[0.3em] font-medium text-[#1A1A1A]/60">
              {['The Archive', 'Chronicles', 'Manuscripts', 'Contact'].map((item) => (
                <span key={item} className="hover:text-[#B8860B] cursor-pointer transition-all relative group italic-hover">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B8860B] group-hover:w-full transition-all duration-700" />
                </span>
              ))}
            </nav>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#B8860B] border border-[#B8860B]/20 rounded">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#FFFDF8] border-2 border-[#1A1A1A]/10 p-16 z-[100] relative text-center space-y-12 animate-fade">
             <div className="flex flex-col gap-10 text-2xl font-light italic text-[#1A1A1A]">
                {['The Archive', 'Chronicles', 'Manuscripts', 'Connect'].map((item) => (
                   <span key={item} className="text-[#1A1A1A]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 border border-[#1A1A1A] text-[10px] uppercase tracking-[0.4em]">
                Enter Portal
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-16 py-12">
           <div className="serif-line" />
           
           <div className="animate-fade">
              <h1 className={`font-light leading-snug tracking-tight text-[#1A1A1A] ${isMobile ? 'text-5xl px-4' : 'text-8xl'}`}>
                A Life <br /> 
                <span className="italic pl-12 underline decoration-[#B8860B]/30 underline-offset-8">Well Documented.</span>
              </h1>
           </div>
           
           <p className={`text-[#1A1A1A]/60 max-w-2xl mx-auto leading-loose italic ${isMobile ? 'text-lg px-6' : 'text-2xl tracking-wide'}`}>
             Preserving the art of the written word in a digital age. We believe in the power of timeless editorial design to elevate every story.
           </p>
           
           <div className="flex flex-wrap justify-center gap-12 pt-8">
              <button className="px-16 py-6 bg-[#1A1A1A] text-[#FFFDF8] text-[11px] font-sans uppercase tracking-[0.5em] hover:bg-[#B8860B] transition-all duration-700 flex items-center gap-6 group">
                 Open Volume
                 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1} />
              </button>
              <button className="px-16 py-6 border border-[#1A1A1A]/20 text-[#1A1A1A] text-[11px] font-sans uppercase tracking-[0.5em] hover:bg-black/5 transition-all">
                 Our Pedigree
              </button>
           </div>
           
           <div className="pt-24 flex justify-center opacity-20 group">
              <Scroll size={40} className="group-hover:scale-125 transition-transform duration-1000" strokeWidth={1} />
           </div>
        </section>

        {/* Editorial Feature Grid */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-y border-[#1A1A1A]/10">
          {[
            { icon: Bookmark, title: 'Curation', text: 'Meticulously selected assets that align with our historical standards.' },
            { icon: Pen, title: 'Penmanship', text: 'Crafting digital experiences with the precision of a master calligrapher.' },
            { icon: Library, title: 'Heritage', text: 'A library of structural patterns refined over decades of design practice.' }
          ].map((item, i) => (
            <div key={i} className="space-y-10 group hover:translate-y-[-5px] transition-all duration-1000 p-8 hover:bg-black/[0.02]">
               <div className="w-12 h-12 border border-[#1A1A1A]/20 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <item.icon size={22} className="text-[#B8860B]" strokeWidth={1.5} />
               </div>
               <h3 className="text-3xl font-light italic tracking-tight text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">{item.title}</h3>
               <p className="text-lg leading-relaxed text-[#1A1A1A]/50 font-serif border-l border-[#1A1A1A]/10 pl-8">
                  {item.text}
               </p>
               <div className="pt-4">
                  <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-[#B8860B] cursor-pointer hover:underline">Read Chapter</span>
               </div>
            </div>
          ))}
        </section>

        {/* Editorial Layout Split */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center px-6">
           <div className="lg:col-span-12">
              <div className="serif-line w-full opacity-10" />
           </div>
           
           <div className="lg:col-span-7 space-y-12 animate-fade">
              <p className="drop-cap text-xl leading-loose text-[#1A1A1A]/70 font-serif">
                Design is not just what it looks like and feels like. Design is how it works. In our curated volumes, we explore the intersection of functional digital architecture and the timeless beauty of 18th-century typography.
              </p>
              <div className="serif-line mx-0" />
              <div className="space-y-10 pt-6">
                 {[
                   'Classical Proportions in Grid Systems',
                   'Historical Typeface Revivals',
                   'Minimalist Ink-on-Paper Contrast',
                   'Editorial White Space Philosophy'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-10 group cursor-pointer hover:pl-4 transition-all duration-700">
                      <div className="w-1.5 h-1.5 bg-[#B8860B] group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-sans uppercase tracking-[0.3em] text-[#1A1A1A]/60 group-hover:text-[#1A1A1A] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] bg-white border border-[#1A1A1A]/10 p-16 shadow-2xl relative overflow-hidden transition-transform duration-1000 group-hover:scale-[1.03]">
                 <div className="absolute inset-4 border border-[#1A1A1A]/5" />
                 <div className="h-full border border-[#1A1A1A]/10 flex flex-col items-center justify-center p-12 text-center space-y-10 group-hover:border-[#B8860B]/30 transition-colors">
                    <Quote size={60} className="text-[#B8860B] opacity-10" />
                    <p className="text-3xl font-light italic leading-tight text-[#1A1A1A]">"Simplicity is the ultimate sophistication."</p>
                    <div className="serif-line opacity-20" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-[#1A1A1A]/40">C.L. Archive</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Subscription / Membership Tiers */}
        <section className="py-24 text-center">
           <h2 className="text-[12px] font-sans uppercase tracking-[1em] text-[#B8860B] mb-24 opacity-60 italic font-bold">Volume Subscriptions</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-[#1A1A1A]/10 py-16">
            {[
              { name: 'Reader', price: '0.00', color: 'gray' },
              { name: 'Scribe', price: '29.00', color: 'ochre', featured: true },
              { name: 'Patron', price: '89.00', color: 'black' }
            ].map((p, i) => (
              <div key={i} className={`p-12 flex flex-col items-center gap-10 transition-all duration-1000 ${p.featured ? 'bg-black/5 scale-[1.05]' : 'hover:bg-black/[0.02]'}`}>
                 <h4 className="text-[10px] font-sans uppercase tracking-[0.6em] text-[#1A1A1A]/40 font-bold">{p.name}</h4>
                 <div className="serif-line w-12" />
                 <div className="py-4">
                    <span className="text-6xl font-light tracking-tighter text-[#1A1A1A] italic">{p.price}</span>
                    <span className="block text-[9px] font-sans uppercase tracking-[0.4em] text-[#B8860B] mt-4 font-bold">Annual Volume Fee</span>
                 </div>
                 <ul className="space-y-4 text-[11px] font-sans uppercase tracking-[0.2em] text-[#1A1A1A]/40 h-24 italic">
                    <li>Digital Archive Access</li>
                    <li>Quarterly Manuscript</li>
                    <li>Private Salon Entry</li>
                 </ul>
                 <button className={`w-full py-5 border border-[#1A1A1A] text-[10px] font-sans uppercase tracking-[0.4em] transition-all duration-700 ${p.featured ? 'bg-[#1A1A1A] text-white hover:bg-[#B8860B] hover:border-[#B8860B]' : 'hover:bg-black/5'}`}>
                    Subscribe
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial FAQ Area */}
        <section className="py-24 max-w-3xl mx-auto space-y-16">
           <h2 className="text-center text-5xl font-light tracking-tight text-[#1A1A1A] italic">Common Inquiries.</h2>
           <div className="space-y-10">
              {[
                { q: 'What defines the Curators standard?', a: 'We measure every digital asset against a century of typographic history and editorial excellence.' },
                { q: 'Is the archive accessible offline?', a: 'Selected manuscripts are available for physical curation through our premium print-on-demand foundry.' },
                { q: 'Can I contribute to the volume?', a: 'Submissions are reviewed by our chief curators quarterly. We value depth of insight over speed of delivery.' }
              ].map((faq, i) => (
                 <div key={i} className="group cursor-pointer">
                    <button 
                       className="w-full flex justify-between items-center py-8 text-left border-b border-[#1A1A1A]/10 group-hover:border-[#B8860B]/30"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-xl font-light italic text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">{faq.q}</span>
                       <ChevronDown size={20} className={`text-[#B8860B]/50 transition-transform duration-700 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-8 pb-4 text-lg font-serif tracking-wide text-[#1A1A1A]/50 leading-relaxed animate-fade">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t-2 border-[#1A1A1A] text-center space-y-16">
           <div className="flex justify-center gap-20 mb-10">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <div key={i} className="text-[#1A1A1A]/30 hover:text-[#B8860B] transition-all transform hover:scale-125 duration-700 cursor-pointer">
                   <Icon size={24} strokeWidth={1} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-16 text-[10px] font-sans uppercase tracking-[0.5em] text-[#1A1A1A]/20 font-bold">
              <span className="hover:text-[#1A1A1A] cursor-pointer">Privacy Charter</span>
              <span className="hover:text-[#1A1A1A] cursor-pointer">Editorial Ethics</span>
              <span className="hover:text-[#1A1A1A] cursor-pointer">Library Terms</span>
           </div>
           
           <div className="flex flex-col items-center gap-10">
              <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center animate-fade">
                 <Heart size={20} className="text-[#B8860B]/30" strokeWidth={1} />
              </div>
              <p className="text-[9px] font-sans uppercase tracking-[1em] text-[#1A1A1A]/10 px-10 leading-loose max-w-4xl mx-auto italic">
                 © 2026 CURATORS DIGITAL ARCHIVE. ALL VOLUMES RESERVED.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
