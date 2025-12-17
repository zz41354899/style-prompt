import { useState } from 'react';
import { ArrowRight, X, Menu } from 'lucide-react';

export const S05Brutalist = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#F5F5F0] text-black p-3 font-mono">
      {/* Header */}
      <header className="border-[3px] border-black bg-white mb-3">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <X className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-black uppercase tracking-tight">BRUTAL</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {['Home', 'Works', 'About', 'Contact'].map((item, i) => (
              <span key={i}
                className="px-4 py-2 text-xs uppercase font-bold tracking-wider cursor-default">
                {item}
              </span>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 border-[3px] border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t-[3px] border-black">
            {['Home', 'Works', 'About', 'Contact'].map((item, i) => (
              <span key={i}
                className="block px-4 py-3 text-xs uppercase font-bold tracking-wider border-b border-black/20 cursor-default">
                {item}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-7 border-[3px] border-black bg-[#FF4D4D] p-6 md:p-8 min-h-[280px] md:min-h-[320px] flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase font-bold mb-4 text-black/60">[Manifesto 001]</div>
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight mb-6">
              Brutalist<br />Design
            </h1>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-sm font-bold uppercase max-w-xs leading-relaxed">
              RAW. HONEST. UNPOLISHED.<br />
              NO BULLSHIT DESIGN.
            </p>
            <ArrowRight className="w-12 h-12" strokeWidth={3} />
          </div>
        </div>
        
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="flex-1 border-[3px] border-black bg-[#00FF66] p-6 flex flex-col justify-between min-h-[120px]">
            <div className="text-xs uppercase font-bold text-black/60">[Function 001]</div>
            <div>
              <div className="text-2xl md:text-3xl font-black uppercase mb-1">No Decoration</div>
              <div className="text-xs font-bold uppercase text-black/60">NO DECORATION</div>
            </div>
          </div>
          <div className="flex-1 border-[3px] border-black bg-[#FFFF00] p-6 flex flex-col justify-between min-h-[120px]">
            <div className="text-xs uppercase font-bold text-black/60">[Function 002]</div>
            <div>
              <div className="text-2xl md:text-3xl font-black uppercase mb-1">Raw Materials</div>
              <div className="text-xs font-bold uppercase text-black/60">RAW MATERIALS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-12 border-[3px] border-black bg-white p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[VALUE_PROPOSITION_001]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-6">
                NO BULLSHIT<br />DESIGN
              </h2>
              <p className="text-sm font-bold uppercase leading-relaxed text-black/80">
                We strip away the unnecessary. What remains is pure function. 
                No animations. No gradients. No compromises. Just brutal honesty.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">01</div>
                <span className="text-sm font-bold">STRUCTURE OVER STYLE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">02</div>
                <span className="text-sm font-bold">FUNCTION OVER FORM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">03</div>
                <span className="text-sm font-bold">TRUTH OVER TRENDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-12 border-[3px] border-black bg-white p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[FEATURES_001]</div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-8">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'RAW INTERFACE', desc: 'No polish. Just function. Pure unfiltered design.' },
              { title: 'BRUTAL GRIDS', desc: 'Mathematical precision. No exceptions.' },
              { title: 'MONOCHROME ONLY', desc: 'Black. White. Nothing else needed.' },
              { title: 'ZERO ANIMATION', desc: 'Static. Stable. Reliable. No motion sickness.' },
              { title: 'SYSTEM FONTS', desc: 'What you have is what you get. No downloads.' },
              { title: 'INSTANT LOADS', desc: 'No bloat. No waiting. Just content.' }
            ].map((feature, i) => (
              <div key={i} className="border-[2px] border-black p-4 group hover:bg-black hover:text-white transition-colors">
                <div className="text-lg font-black uppercase mb-2">{feature.title}</div>
                <div className="text-xs font-bold uppercase text-black/60 group-hover:text-white/60">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-12 border-[3px] border-black bg-[#FF4D4D] p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[INTEGRATIONS_001]</div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-8">
            We Work With Nothing
          </h2>
          <p className="text-sm font-bold uppercase leading-relaxed max-w-2xl mb-8">
            NO APIS. NO PLUGINS. NO ECOSYSTEM. STANDALONE FOREVER.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['NONE', 'ZERO', 'NULL', 'VOID'].map((item) => (
              <div key={item} className="border-[2px] border-black bg-white p-4 text-center">
                <div className="text-2xl font-black">{item}</div>
                <div className="text-[10px] font-bold uppercase text-black/60">INTEGRATION</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-8 border-[3px] border-black bg-white p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[SECURITY_001]</div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-6">
            BRUTAL SECURITY
          </h2>
          <p className="text-sm font-bold uppercase leading-relaxed mb-8">
            No encryption. No authentication. No protection. 
            If someone wants in, they get in. Total transparency.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">0%</div>
              <div className="text-[10px] font-bold uppercase text-black/60">ENCRYPTION</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">OPEN</div>
              <div className="text-[10px] font-bold uppercase text-black/60">ACCESS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">ALL</div>
              <div className="text-[10px] font-bold uppercase text-black/60">DATA</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 border-[3px] border-black bg-black text-white p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase font-black text-white/60 mb-4">[COMPLIANCE]</div>
            <div className="text-2xl font-black mb-2">NONE</div>
          </div>
          <div className="text-xs font-bold uppercase text-white/60">NO CERTIFICATION</div>
        </div>
      </div>

      {/* Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-12 border-[3px] border-black bg-white p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[PRICING_001]</div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-8">
            BRUTAL PRICING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: 'BASIC', price: 'FREE', features: ['1 Project', 'Black & White', 'No Support'], brutal: false },
              { name: 'BRUTAL', price: '$99', features: ['Infinite Projects', 'Black & White', 'No Support'], brutal: true },
              { name: 'ULTIMATE', price: '$999', features: ['Everything', 'Black & White', 'Still No Support'], brutal: false }
            ].map((plan, i) => (
              <div key={i} className={`${plan.brutal ? 'border-[3px] border-black bg-black text-white' : 'border-[3px] border-black bg-white'} p-6 flex flex-col`}>
                <div className="flex-1">
                  <div className="text-xs uppercase font-black mb-2">{plan.name}</div>
                  <div className={`text-3xl font-black mb-4 ${plan.brutal ? 'text-white' : 'text-black'}`}>{plan.price}</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`text-xs font-bold uppercase ${plan.brutal ? 'text-white' : 'text-black'}`}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <button className={`mt-6 w-full py-3 text-xs font-black uppercase tracking-wider transition-colors ${
                  plan.brutal 
                    ? 'bg-white text-black hover:bg-gray-100' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  {plan.brutal ? 'PAY NOW' : 'SIGN UP'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-12 border-[3px] border-black bg-white p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[FAQ_001]</div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-8">
            Questions? Too Bad.
          </h2>
          <div className="space-y-4">
            {[
              { q: 'WHY SO BRUTAL?', a: 'Because beauty is a lie. Function is truth.' },
              { q: 'NO SUPPORT REALLY?', a: 'Yes. No support. Figure it out yourself.' },
              { q: 'CAN I GET A REFUND?', a: 'No. All sales are final. Forever.' },
              { q: 'WHY NO FEATURES?', a: 'Features are bloat. We offer purity.' }
            ].map((item, i) => (
              <div key={i} className="border-[2px] border-black p-4 group hover:bg-black hover:text-white transition-colors">
                <h3 className="text-sm font-black uppercase mb-2">{item.q}</h3>
                <p className="text-xs font-bold uppercase text-black/60 group-hover:text-white/60">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
        <div className="md:col-span-12 border-[3px] border-black bg-[#FFFF00] p-6 md:p-8">
          <div className="text-xs uppercase font-black text-black/60 mb-6">[CONTACT_001]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-6">
                Still Want In?
              </h2>
              <p className="text-sm font-bold uppercase leading-relaxed text-black/80">
                FINE. EMAIL US. MIGHT RESPOND. MIGHT NOT.
                NO GUARANTEES. NO PROMISES. JUST TRY.
              </p>
            </div>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL"
                className="w-full px-4 py-3 border-[2px] border-black bg-white text-sm font-black uppercase placeholder-black/30 focus:outline-none"
              />
              <button className="w-full bg-black text-white px-6 py-3 text-xs font-black uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
                <span>SUBMIT</span>
                <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
        {[
          { num: '01', label: 'Concrete', en: 'CONCRETE' },
          { num: '02', label: 'Steel', en: 'STEEL' },
          { num: '03', label: 'Glass', en: 'GLASS' },
          { num: '04', label: 'Truth', en: 'TRUTH' },
        ].map((item, i) => (
          <div key={i} className="border-[3px] border-black bg-white p-4 group hover:bg-black hover:text-white transition-colors">
            <div className="text-4xl font-black mb-2">{item.num}</div>
            <div className="text-sm font-black uppercase">{item.label}</div>
            <div className="text-[10px] font-bold uppercase text-black/40 group-hover:text-white/40 mt-1">{item.en}</div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="border-[3px] border-black bg-black text-white p-4 md:p-6 mb-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="text-[10px] uppercase font-bold text-white/40 mb-2">&gt;&gt; Call to Action_</div>
            <div className="text-xl md:text-3xl font-black uppercase tracking-tight">Experience Brutal Beauty Now</div>
          </div>
          <button className="border-[3px] border-white px-6 md:px-8 py-3 md:py-4 font-black uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-3 w-full md:w-auto justify-center">
            <span>Enter</span>
            <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] uppercase font-bold text-black/60">
        <span>© 2024 BRUTAL.IST</span>
        <span className="hidden md:block">NO COOKIES · NO TRACKING · NO BS</span>
        <span>V.1.0.0</span>
      </footer>
    </div>
  );
};
