import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const S04Swiss = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-white text-black p-4 sm:p-6 md:p-8 font-sans relative overflow-x-hidden">
      {/* 網格背景提示 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="flex md:grid md:grid-cols-12 gap-4 mb-12 md:mb-16 pb-6 border-b-2 border-black justify-between items-end">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-2">International Typographic Style</div>
            <div className="text-3xl md:text-5xl font-black tracking-[-0.02em]">Swiss Design</div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex md:col-span-4 flex-col items-end justify-end">
            <div className="flex gap-8 text-sm font-medium">
              <span className="cursor-default">Works</span>
              <span className="cursor-default">Philosophy</span>
              <span className="cursor-default">Contact</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mb-8 p-4 border-2 border-black">
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <span className="py-2 cursor-default">Works</span>
              <span className="py-2 cursor-default">Philosophy</span>
              <span className="py-2 cursor-default">Contact</span>
            </nav>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-4 flex items-start justify-center md:justify-start">
            <div className="text-[50px] sm:text-[60px] md:text-[180px] font-black leading-[0.8] text-[#E53935] tracking-[-0.05em]">
              Aa
            </div>
          </div>
          <div className="col-span-12 md:col-span-1" />
          <div className="col-span-12 md:col-span-7 pt-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-6 text-center md:text-left">Helvetica · Grid · Clarity</div>
            <h1 className="text-2xl md:text-3xl font-bold leading-[1.2] mb-6 tracking-[-0.01em] text-center md:text-left">
              Clear, Objective,<br />
              Function-Driven Design
            </h1>
            <p className="text-sm leading-[1.8] text-[#555] max-w-md mx-auto md:mx-0 mb-8 text-center md:text-left">
              Swiss International Typographic style emphasizes rigorous grid systems, sans-serif typography,
              and clear information communication. Design should be universal, timeless, and transcultural.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center md:justify-start">
              <button className="px-4 py-3 sm:px-6 bg-black text-white text-xs font-bold tracking-wider hover:bg-[#333] transition-colors">
                Explore Works
              </button>
              <button className="px-4 py-3 sm:px-6 border-2 border-black text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-4 bg-black text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#666] mb-1">Principle 01</div>
              <div className="text-xl sm:text-2xl font-bold mb-2">Grid System</div>
            </div>
            <div className="text-xs text-[#888] tracking-wider">GRID SYSTEM</div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#E53935] text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-1">Principle 02</div>
              <div className="text-xl sm:text-2xl font-bold mb-2">Sans Serif</div>
            </div>
            <div className="text-xs text-white/70 tracking-wider">SANS-SERIF</div>
          </div>
          <div className="col-span-12 md:col-span-4 border-2 border-black p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-1">Principle 03</div>
              <div className="text-xl sm:text-2xl font-bold mb-2">Negative Space</div>
            </div>
            <div className="text-xs text-[#999] tracking-wider">WHITE SPACE</div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-12 gap-4 mb-16 py-12 border-t-2 border-b-2 border-black">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-4">Why Swiss Design</div>
            <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] mb-4 tracking-[-0.01em]">
              Universal Design<br />Principles
            </h2>
            <p className="text-sm leading-[1.8] text-[#555] max-w-md">
              Our approach combines mathematical precision with visual clarity, creating designs that transcend cultural boundaries and stand the test of time.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center text-[20px] font-black">01</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Grid Discipline</h3>
                  <p className="text-sm leading-[1.6] text-[#555]">Every element aligns to a mathematical grid, ensuring visual harmony and structural integrity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center text-[20px] font-black">02</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Typography First</h3>
                  <p className="text-sm leading-[1.6] text-[#555]">Clear hierarchy through type scale, weight, and spacing creates instant visual organization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center text-[20px] font-black">03</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Objective Clarity</h3>
                  <p className="text-sm leading-[1.6] text-[#555]">Remove subjectivity, focus on function. Design serves content, not ego.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center text-[20px] font-black">04</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Universal Language</h3>
                  <p className="text-sm leading-[1.6] text-[#555]">Visual communication that works across cultures, languages, and contexts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-8 text-center">Seamless Integrations</div>
            <div className="border-2 border-black p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Adobe', 'Figma', 'Sketch', 'XD'].map((tool) => (
                  <div key={tool} className="text-center group cursor-pointer">
                    <div className="text-2xl font-black mb-2 group-hover:text-[#0057FF] transition-colors">{tool}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">DESIGN TOOL</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="border-2 border-black p-8">
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-4">Security & Reliability</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.01em]">
                Enterprise-Grade Security
              </h2>
              <p className="text-sm leading-[1.8] text-[#555] mb-6 max-w-2xl">
                Swiss precision extends to our security infrastructure. End-to-end encryption, SOC 2 Type II compliance, and 99.9% uptime guarantee.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black mb-2">99.9%</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-2">256-bit</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">Encryption</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-2">24/7</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="bg-[#0057FF] text-white p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-1">Compliance</div>
                <div className="text-2xl font-bold mb-2">ISO 27001</div>
              </div>
              <div className="text-xs text-white/70 tracking-wider">CERTIFIED</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-8 text-center">Simple Pricing</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Starter', price: 'Free', features: ['3 Projects', 'Basic Templates', 'Community Support'] },
                { name: 'Professional', price: '$29/mo', features: ['Unlimited Projects', 'Advanced Templates', 'Priority Support', 'Team Collaboration'], highlighted: true },
                { name: 'Enterprise', price: 'Custom', features: ['Custom Solutions', 'Dedicated Support', 'SLA Guarantee', 'White Label'] }
              ].map((plan, i) => (
                <div key={i} className={`${plan.highlighted ? 'border-2 border-black bg-black text-white' : 'border-2 border-black'} p-8 flex flex-col`}>
                  <div className="flex-1">
                    <div className="text-[10px] tracking-[0.3em] uppercase ${plan.highlighted ? 'text-white/60' : 'text-[#999]'} mb-2">{plan.name.toUpperCase()}</div>
                    <div className={`text-3xl font-black mb-4 ${plan.highlighted ? 'text-white' : 'text-black'}`}>{plan.price}</div>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className={`text-sm ${plan.highlighted ? 'text-white' : 'text-black'}`}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className={`mt-6 w-full py-3 text-xs font-bold tracking-wider uppercase transition-colors ${
                    plan.highlighted 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}>
                    {plan.highlighted ? 'Start Free Trial' : 'Contact Sales'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-8 text-center">Frequently Asked Questions</div>
            <div className="space-y-4">
              {[
                { q: 'What makes Swiss design different?', a: 'Swiss design emphasizes clarity, grid systems, and objectivity. It removes decorative elements to focus purely on function and communication.' },
                { q: 'Can I switch plans anytime?', a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.' },
                { q: 'Do you offer custom templates?', a: 'Professional and Enterprise plans include custom template creation by our design team.' },
                { q: 'Is my data secure?', a: 'We use enterprise-grade security with 256-bit encryption, regular security audits, and full GDPR compliance.' }
              ].map((item, i) => (
                <div key={i} className="border-2 border-black p-6">
                  <h3 className="text-lg font-bold mb-2">{item.q}</h3>
                  <p className="text-sm leading-[1.6] text-[#555]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12">
            <div className="border-2 border-black p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-4">Get Started</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.01em]">
                    Ready to Transform<br />Your Design Process?
                  </h2>
                  <p className="text-sm leading-[1.8] text-[#555] mb-6">
                    Join thousands of teams already using Swiss Design principles to create clearer, more effective communications.
                  </p>
                </div>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full px-4 py-3 border-2 border-black text-sm font-medium placeholder-black/30 focus:outline-none focus:border-[#0057FF]"
                  />
                  <button className="w-full bg-black text-white px-6 py-3 text-xs font-bold tracking-wider uppercase hover:bg-[#333] transition-colors">
                    Start Free Trial
                  </button>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#999] text-center">
                    No credit card required • 14-day free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-12 gap-4 mb-12 py-8 border-t-2 border-b-2 border-black">
          {[
            { num: '1950', label: 'Origin Era' },
            { num: '12', label: 'Column Grid' },
            { num: '∞', label: 'Influence' },
            { num: '100%', label: 'Functionality' },
          ].map((item, i) => (
            <div key={i} className="col-span-6 sm:col-span-3 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{item.num}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#999]">
          <span>Basel · Zürich · Switzerland</span>
          <span>© 2024 Swiss Design</span>
        </footer>
      </div>
    </div>
  );
};
