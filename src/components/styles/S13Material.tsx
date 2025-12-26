import { Palette, Home, Search, Heart, User, Menu, Bell, Plus, Layers, Grid3X3, Type, Shield, Check, Mail } from 'lucide-react';

export const S13Material = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-full bg-[#F5F5F5] font-sans relative">
      {/* App Bar */}
      <header className="bg-[#6750A4] text-white px-4 py-3 flex items-center gap-4 shadow-md">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-xl font-medium flex-1">Material You</span>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#F2B8B5] rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#EADDFF] flex items-center justify-center">
          <User className="w-5 h-5 text-[#6750A4]" />
        </div>
      </header>

      <div className="p-4">
        {/* Hero Card */}
        <div className={`bg-white rounded-3xl shadow-sm overflow-hidden mb-6 ${isMobile ? '' : 'flex'}`}>
          <div className={`${isMobile ? 'h-44' : 'w-1/2 min-h-[200px]'} relative overflow-hidden`}
            style={{ background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 50%, #D0BCFF 100%)' }}>
            <div className="absolute bottom-4 left-6 right-6">
              <div className="text-white/60 text-xs font-medium mb-1">Material Design 3</div>
              <h1 className="text-2xl font-medium text-white">Material Design System</h1>
            </div>
            {/* 裝飾圓形 */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-white/5" />
          </div>
          <div className={`p-6 ${isMobile ? '' : 'flex-1 flex flex-col justify-center'}`}>
            <p className="text-[#49454F] mb-6 leading-relaxed">
              A design system based on dynamic colors, emphasizing personalization, accessibility, and expression. Making every interface unique.
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-[#6750A4] text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-[#6750A4]/30 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 text-[#6750A4] font-medium text-sm border border-[#79747E] rounded-full hover:bg-[#6750A4]/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-3 mb-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
          {[
            { icon: <Grid3X3 className="w-6 h-6" />, title: 'Grid System', desc: '4dp baseline grid', color: '#6750A4', bg: '#EADDFF' },
            { icon: <Palette className="w-6 h-6" />, title: 'Dynamic Colors', desc: 'Theme from wallpaper', color: '#7D5260', bg: '#FFD8E4' },
            { icon: <Layers className="w-6 h-6" />, title: 'Elevation System', desc: 'Tone shadow layers', color: '#006A6A', bg: '#A8EFF0' },
            { icon: <Type className="w-6 h-6" />, title: 'Type Scale', desc: 'Roboto font family', color: '#7D5700', bg: '#FFDDB3' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center"
                style={{ backgroundColor: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <div className="font-medium text-[#1D1B20] mb-1">{item.title}</div>
              <div className="text-sm text-[#49454F]">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Chips */}
        <div className="mb-6">
          <div className="text-xs font-medium text-[#49454F] mb-3 uppercase tracking-wider">Tags</div>
          <div className="flex gap-2 flex-wrap">
            {[
              { label: 'Components', active: true },
              { label: 'Layout', active: false },
              { label: 'Color', active: false },
              { label: 'Typography', active: false },
              { label: 'Icons', active: false },
            ].map((chip, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${chip.active
                ? 'bg-[#E8DEF8] text-[#6750A4]'
                : 'bg-[#E7E0EC] text-[#49454F] hover:bg-[#D0BCFF]/30'
                }`}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-medium text-[#1D1B20] mb-4">Why Material Design?</h2>
          <p className="text-[#49454F] mb-6 leading-relaxed">
            Material Design 3 creates adaptive, accessible, and expressive interfaces.
            It brings your brand to life through dynamic color, motion, and components.
          </p>
          <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { title: 'Adaptive Design', desc: 'Adapts to any screen size' },
              { title: 'Accessibility First', desc: 'WCAG compliant out of the box' },
              { title: 'Personalization', desc: 'Dynamic theming for everyone' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-[#F7F2FA]">
                <div className="w-10 h-10 rounded-full bg-[#6750A4] mx-auto mb-3" />
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#49454F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-3 mb-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
          {[
            { title: 'Component Library', desc: 'Pre-built UI components', detail: 'Buttons, cards, dialogs, and more' },
            { title: 'Motion System', desc: 'Meaningful transitions', detail: 'Smooth, purposeful animations' },
            { title: 'Color System', desc: 'Dynamic color schemes', detail: 'Automatically generated themes' },
            { title: 'Typography', desc: 'Clear hierarchy', detail: 'Roboto font with scale system' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-medium text-[#1D1B20] mb-2">{item.title}</h3>
              <p className="text-sm text-[#49454F] mb-1">{item.desc}</p>
              <p className="text-xs text-[#79747E]">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-medium text-[#1D1B20] mb-4">Platform Support</h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
            {['Android', 'iOS', 'Web', 'Flutter'].map((item) => (
              <div key={item} className="p-4 rounded-2xl bg-[#F7F2FA] text-center">
                <div className="text-sm font-medium text-[#6750A4]">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-medium text-[#1D1B20] mb-4">By the Numbers</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
            {[
              { value: '50M+', label: 'Apps using Material' },
              { value: '100+', label: 'Countries' },
              { value: '4.8★', label: 'Developer rating' },
              { value: '24/7', label: 'Support' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-medium text-[#6750A4] mb-1">{item.value}</div>
                <div className="text-xs text-[#49454F]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-[#E8DEF8] rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-[#6750A4] mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-medium text-[#1D1B20] mb-2">Security & Privacy</h2>
              <p className="text-[#49454F] mb-4">
                Built with security best practices. Your data and designs are always protected.
              </p>
              <div className="grid gap-3" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                {[
                  'End-to-end encryption',
                  'SOC 2 compliant',
                  'Regular security audits'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6750A4]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-medium text-[#1D1B20] mb-4">Pricing Plans</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { name: 'Community', price: 'Free', features: ['Open source', 'Basic components', 'Community support'] },
              { name: 'Professional', price: '$29/mo', features: ['All components', 'Premium support', 'Custom themes'] },
              { name: 'Enterprise', price: 'Custom', features: ['Everything', 'Dedicated team', 'SLA guarantee'] }
            ].map((plan) => (
              <div key={plan.name} className="p-5 rounded-2xl border border-[#E7E0EC]">
                <h3 className="font-medium mb-2">{plan.name}</h3>
                <div className="text-2xl font-medium text-[#6750A4] mb-4">{plan.price}</div>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-[#49454F] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6750A4]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#6750A4] text-white rounded-full font-medium text-sm hover:bg-[#6750A4]/90 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-medium text-[#1D1B20] mb-4">Frequently Asked</h2>
          <div className="space-y-4">
            {[
              { q: 'What is Material Design 3?', a: 'The latest evolution of Material Design, focusing on personalization and dynamic color.' },
              { q: 'Can I use it in my project?', a: 'Yes! Material Design is open source and free to use in any project.' },
              { q: 'Is it accessible?', a: 'Accessibility is built into every component with WCAG AA compliance.' },
              { q: 'How do I get started?', a: 'Check out our documentation and component library to begin building.' }
            ].map((item, i) => (
              <div key={i} className="border-b border-[#E7E0EC] pb-4 last:border-0">
                <h3 className="font-medium text-[#1D1B20] mb-2">{item.q}</h3>
                <p className="text-sm text-[#49454F]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#6750A4] rounded-2xl p-6 mb-20 text-white">
          <Mail className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-medium mb-2">Get in Touch</h2>
          <p className="text-white/80 mb-6">Have questions? We're here to help.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button className="px-6 py-3 bg-white text-[#6750A4] rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="absolute bottom-24 right-4 w-14 h-14 bg-[#EADDFF] rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
        <Plus className="w-6 h-6 text-[#6750A4]" />
      </button>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-[#F3EDF7] px-2 py-2">
        <div className="flex justify-around">
          {[
            { icon: <Home className="w-6 h-6" />, label: 'Home', active: true },
            { icon: <Search className="w-6 h-6" />, label: 'Search', active: false },
            { icon: <Heart className="w-6 h-6" />, label: 'Favorites', active: false },
            { icon: <User className="w-6 h-6" />, label: 'Profile', active: false },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center py-2 px-5 rounded-2xl transition-colors">
              <div className={`p-1 rounded-full ${item.active ? 'bg-[#EADDFF]' : ''}`}>
                <span className={item.active ? 'text-[#6750A4]' : 'text-[#49454F]'}>{item.icon}</span>
              </div>
              <span className={`text-xs mt-1 font-medium ${item.active ? 'text-[#6750A4]' : 'text-[#49454F]'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
