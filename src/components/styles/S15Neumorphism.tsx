import { useState } from 'react';
import { Minus, Plus, Volume2, Power, Settings, Wifi, Shield, Check, Mail, Menu, X } from 'lucide-react';

export const S15Neumorphism = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';
  
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
    <div className="min-h-full font-sans" style={{ backgroundColor: '#e4e9f0', padding: isMobile ? '16px' : '40px' }}>
      {/* Header */}
      <header className="flex justify-between items-center mb-8 md:mb-16 p-4 md:p-5 rounded-2xl" style={neumorph}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={neumorphInset}>
            <Settings className="w-5 h-5 text-[#6b7280]" />
          </div>
          <span className="text-xl font-semibold text-[#4b5563]">Neumorphism</span>
        </div>
        <nav className={`${deviceMode === 'desktop' ? 'flex' : 'hidden'} gap-2`}>
          {['Home', 'Design', 'About'].map((item, i) => (
            <span key={i}
              className="px-5 py-2.5 rounded-xl text-sm text-[#6b7280] cursor-default"
              style={i === 0 ? neumorphInset : {}}>
              {item}
            </span>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        {(isMobile || isTablet) && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6b7280]"
            style={neumorphSmall}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mb-8 p-6 rounded-3xl" style={neumorph}>
          {['Home', 'Design', 'About'].map((item, i) => (
            <div key={i} className="py-3 text-sm text-[#6b7280] cursor-default hover:text-[#4b5563] transition-colors">
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="grid mb-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: isMobile ? '24px' : '32px' }}>
        <div className="rounded-3xl" style={{ ...neumorph, gridColumn: isMobile ? 'span 1' : 'span 7', padding: isMobile ? '24px' : '40px' }}>
          <div className="text-xs uppercase tracking-[0.2em] text-[#9ca3af] mb-6">Soft UI Design</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6 leading-tight">
            Neumorphism<br />
            <span className="text-[#6b7280]">Design Aesthetics</span>
          </h1>
          <p className="text-[#6b7280] mb-10 max-w-md leading-relaxed">
            Soft shadows create raised or depressed effects, making elements appear to emerge from the background.
            This is a design style between flat design and skeuomorphism.
          </p>
          <div className="flex gap-3" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            <button className="px-8 py-4 rounded-2xl text-[#4b5563] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={neumorph}>
              Get Started
            </button>
            <button className="px-8 py-4 rounded-2xl text-[#9ca3af] font-medium"
              style={neumorphInset}>
              Learn More
            </button>
          </div>
        </div>
        
        {/* 控制面板示範 */}
        <div className="rounded-3xl" style={{ ...neumorph, gridColumn: isMobile ? 'span 1' : 'span 5', padding: isMobile ? '24px' : '32px' }}>
          <div className="text-sm text-[#9ca3af] mb-6 uppercase tracking-wider">Control Panel</div>
          
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

      {/* Value Proposition */}
      <section className="p-8 rounded-3xl mb-12" style={neumorph}>
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.2em] text-[#9ca3af] mb-6">Design Philosophy</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#374151] mb-6">
            Soft Design<br />
            <span className="text-[#6b7280]">Tactile Experience</span>
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Neumorphism creates interfaces that feel tangible and responsive. 
            Through subtle shadows and soft edges, elements appear to emerge from or recede into the surface.
          </p>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { title: 'Visual Depth', desc: 'Elements appear to float' },
            { title: 'Soft Interaction', desc: 'Gentle press/release feedback' },
            { title: 'Unified Aesthetic', desc: 'Consistent light source' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl text-center" style={neumorphInset}>
              <h3 className="text-[#374151] font-semibold mb-2">{item.title}</h3>
              <p className="text-[#9ca3af] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 mb-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
        {[
          { title: 'Dual Shadow System', desc: 'Light and dark shadows', detail: 'Creates depth illusion' },
          { title: 'Inset Elements', desc: 'Pressed-in appearance', detail: 'For active states' },
          { title: 'Raised Elements', desc: 'Floating appearance', detail: 'For inactive states' },
          { title: 'Subtle Animations', desc: 'Scale and shadow changes', detail: 'On interaction' }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-3xl" style={neumorph}>
            <h3 className="text-[#374151] font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-[#6b7280] text-sm mb-1">{item.desc}</p>
            <p className="text-[#9ca3af] text-xs">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Integrations */}
      <section className="p-8 rounded-3xl mb-12" style={neumorph}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#374151] mb-4">Design Tools</h2>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
          {['Figma', 'Sketch', 'Adobe XD', 'Principle'].map((item) => (
            <div key={item} className="p-4 rounded-2xl text-center text-[#6b7280] font-medium" style={neumorphSmall}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="p-8 rounded-3xl mb-12" style={neumorph}>
        <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
          {[
            { value: '2020', label: 'Trending Year' },
            { value: '100K+', label: 'Designers' },
            { value: '4.5★', label: 'Rating' },
            { value: '24/7', label: 'Support' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-[#374151] mb-2">{item.value}</div>
              <div className="text-xs text-[#9ca3af] uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="p-8 rounded-3xl mb-12" style={neumorph}>
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6b7280]" style={neumorphInset}>
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#374151] mb-4">Secure & Soft</h2>
            <p className="text-[#6b7280] mb-6">
              Your designs are protected with bank-level security. 
              Soft on the eyes, hard on threats.
            </p>
            <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
              {[
                'End-to-end encryption',
                'Regular security updates',
                'Privacy by design'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6366f1]" />
                  <span className="text-sm text-[#6b7280]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#374151] mb-4">Pricing Plans</h2>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { name: 'Basic', price: '$19/mo', features: ['Basic components', 'Community support'] },
            { name: 'Pro', price: '$49/mo', features: ['All components', 'Priority support', 'Source files'] },
            { name: 'Team', price: '$99/mo', features: ['Everything', 'Team collaboration', 'Custom designs'] }
          ].map((plan) => (
            <div key={plan.name} className="p-6 rounded-3xl text-center" style={neumorph}>
              <h3 className="text-[#374151] font-semibold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-[#374151] mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-6 text-sm text-[#6b7280]">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-2xl text-[#4b5563] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" style={neumorphSmall}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="p-8 rounded-3xl mb-12" style={neumorph}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#374151] mb-4">Frequently Asked</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'Is neumorphism accessible?', a: 'With proper contrast ratios, yes. We ensure WCAG AA compliance.' },
            { q: 'Performance impact?', a: 'Minimal. Uses CSS box-shadow, no images or complex effects.' },
            { q: 'Can I customize colors?', a: 'Yes! Any monochrome color scheme works with neumorphism.' },
            { q: 'Mobile friendly?', a: 'Absolutely! Responsive and touch-optimized.' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl" style={neumorphInset}>
              <h3 className="text-[#374151] font-semibold mb-2">{item.q}</h3>
              <p className="text-[#6b7280] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="p-8 rounded-3xl mb-20" style={neumorph}>
        <div className="text-center">
          <Mail className="w-8 h-8 text-[#6b7280] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#374151] mb-4">Get in Touch</h2>
          <p className="text-[#6b7280] mb-8">Ready to create soft, beautiful interfaces?</p>
          <div className="flex justify-center gap-4 max-w-md mx-auto" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-2xl text-[#374151] placeholder-[#9ca3af] focus:outline-none"
              style={{ ...neumorphInset, border: 'none' }}
            />
            <button className="px-8 py-3 rounded-2xl text-[#4b5563] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" style={neumorphSmall}>
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#9ca3af]">
        © 2024 Neumorphism Design · Soft UI
      </footer>
    </div>
  );
};
