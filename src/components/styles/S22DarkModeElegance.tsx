import { Monitor, Code, Terminal, Zap, ArrowRight, Check, Quote, Shield, Layers, X, Menu } from 'lucide-react';
import { useState } from 'react';

export const S22DarkModeElegance = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const isMobile = deviceMode === 'mobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-full font-sans relative" style={{ background: '#000000' }}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div style={{ 
          backgroundImage: 'linear-gradient(#333333 1px, transparent 1px), linear-gradient(90deg, #333333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} className="w-full h-full" />
      </div>

      {/* Navigation */}
      <header className={`relative z-50 ${isMobile ? 'px-4 py-3' : 'px-6 py-4'} border-b border-[#333333] bg-black`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#7C3AED] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-mono text-white font-bold">DarkUI</span>
          </div>
          <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
            <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono">Features</a>
            <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono">Pricing</a>
            <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono">About</a>
            <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {isMobile && (
              <button 
                className="p-2 text-[#666666] hover:text-[#00D9FF] transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
            {!isMobile && (
              <>
                <button className="p-2 text-[#666666] hover:text-[#00D9FF] transition-colors duration-200">
                  <Monitor className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white rounded-lg font-mono font-bold hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-200">
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#333333]">
            <nav className="flex flex-col p-4">
              <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono py-2">Features</a>
              <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono py-2">Pricing</a>
              <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono py-2">About</a>
              <a href="#" className="text-[#666666] hover:text-[#00D9FF] transition-colors font-mono py-2">Contact</a>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white rounded-lg font-mono font-bold hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-200 w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className={`relative z-10 ${isMobile ? 'p-4' : 'p-6'}`}>
        {/* Hero Section */}
        <section className={`bg-gradient-to-br from-[#141414] to-[#1A1A1A] rounded-lg overflow-hidden ${isMobile ? 'mb-6' : 'mb-12'} border border-[#333333] hover:border-[#00D9FF] transition-all duration-200`}>
          <div className={`${isMobile ? 'h-64' : 'h-[500px]'} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 via-transparent to-[#7C3AED]/10" />
            <div className={`absolute ${isMobile ? 'bottom-6 left-4 right-4' : 'bottom-12 left-12 right-12'}`}>
              <div className="flex items-center gap-2 text-[#00D9FF] font-mono text-sm mb-3">
                <Zap className="w-4 h-4" />
                _TECH_AESTHETIC_V2
              </div>
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-white mb-4 font-mono leading-tight`}>
                Precision in Darkness
              </h1>
              <p className={`text-[#B0B0B0] ${isMobile ? 'text-base' : 'text-lg'} font-mono leading-relaxed mb-6 max-w-2xl`}>
                Where high contrast meets sophisticated design. Every pixel optimized for maximum clarity and minimal eye strain.
              </p>
              <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4'}`}>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white rounded-lg font-mono font-bold hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-200 flex items-center justify-center gap-2`}>
                  EXECUTE
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} text-[#00D9FF] font-mono font-bold rounded-lg border-2 border-[#333333] hover:border-[#00D9FF] transition-all duration-200`}>
                  LEARN_MORE
                </button>
              </div>
            </div>
            {/* Tech Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent" />
              <div className="absolute top-20 right-0 w-32 h-px bg-[#7C3AED]/50" />
              <div className="absolute bottom-20 left-20 w-24 h-px bg-[#00D9FF]/50" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-white mb-4 font-mono`}>
              SYSTEM_FEATURES
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto font-mono">
              Technical precision meets elegant design for optimal user experience
            </p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { 
                icon: <Layers className="w-6 h-6" />, 
                title: 'High Contrast', 
                desc: '21:1 contrast ratio for AAA compliance',
                color: '#00D9FF'
              },
              { 
                icon: <Code className="w-6 h-6" />, 
                title: 'Code Aesthetic', 
                desc: 'Monospace fonts for technical precision',
                color: '#7C3AED'
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: 'Matrix Grid', 
                desc: 'Subtle grid patterns for structure',
                color: '#10B981'
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#141414] to-[#1A1A1A] rounded-lg p-6 border border-[#333333] hover:border-[#00D9FF] transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center border border-[#333333]">
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2 font-mono">{item.title}</h3>
                <p className="text-[#666666] text-sm font-mono leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`bg-gradient-to-br from-[#141414] to-[#1A1A1A] rounded-lg ${isMobile ? 'p-4' : 'p-8'} ${isMobile ? 'mb-6' : 'mb-12'} border border-[#333333]`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-white mb-8 text-center font-mono`}>
            DEPLOYMENT_REVIEWS
          </h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                quote: "The dark mode implementation is flawless. Our developers love the reduced eye strain during late night coding sessions.",
                author: "Marcus Chen",
                role: "Lead Developer at TechCorp",
                rating: 5
              },
              {
                quote: "Finally, a dark theme that respects contrast ratios. The precision in every detail is remarkable.",
                author: "Sarah Johnson",
                role: "CTO at DevStudio",
                rating: 5
              },
              {
                quote: "The monospace fonts and grid patterns create the perfect coding environment. Absolutely brilliant!",
                author: "David Kim",
                role: "Frontend Architect at CodeBase",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-black/50 rounded-lg p-6 border border-[#333333] hover:border-[#00D9FF] transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Terminal key={j} className="w-4 h-4 text-[#00D9FF]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#666666] mb-4" />
                <p className="text-[#B0B0B0] mb-4 font-mono text-sm italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#7C3AED]" />
                  <div>
                    <div className="font-bold text-white font-mono">{testimonial.author}</div>
                    <div className="text-sm text-[#666666] font-mono">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-white mb-4 font-mono`}>
              PRICING_PLANS
            </h2>
            <p className="text-[#666666] font-mono">Choose your deployment package</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: "DEVELOPER",
                price: "$59",
                period: "per month",
                features: ["Base components", "Up to 10 projects", "Community support", "6 months updates"],
                highlighted: false
              },
              {
                name: "ENTERPRISE",
                price: "$159",
                period: "per month",
                features: ["All components", "Unlimited projects", "Priority support", "Lifetime updates", "Custom themes"],
                highlighted: true
              },
              {
                name: "ULTIMATE",
                price: "Custom",
                period: "contact us",
                features: ["Everything in Pro", "Source code access", "Dedicated team", "SLA guarantee", "On-premise"],
                highlighted: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-gradient-to-br from-[#141414] to-[#1A1A1A] rounded-lg p-8 border ${plan.highlighted ? 'border-[#00D9FF]' : 'border-[#333333]'} hover:border-[#00D9FF] transition-all duration-200`}>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white text-sm font-mono font-bold rounded mb-4">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white font-mono">{plan.price}</span>
                  <span className="text-[#666666] font-mono">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#B0B0B0] font-mono text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-mono font-bold transition-all duration-200 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-[#00D9FF]/30' 
                    : 'bg-[#141414] text-white border-2 border-[#333333] hover:border-[#00D9FF]'
                }`}>
                  DEPLOY
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-br from-[#141414] to-[#1A1A1A] rounded-lg ${isMobile ? 'p-6' : 'p-12'} mb-12 text-center border border-[#333333]`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-white mb-4 font-mono`}>
            READY_TO_DEPLOY?
          </h2>
          <p className="text-[#666666] text-lg mb-8 max-w-2xl mx-auto font-mono">
            Join thousands of developers already using DarkUI for their critical applications.
          </p>
          <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4 justify-center'}`}>
            <button className="px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white rounded-lg font-mono font-bold hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-200">
              START_DEPLOYMENT
            </button>
            <button className="px-8 py-3 text-[#00D9FF] font-mono font-bold rounded-lg border-2 border-[#333333] hover:border-[#00D9FF] transition-all duration-200">
              SCHEDULE_DEMO
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#333333] pt-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#7C3AED] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white font-mono">DarkUI</span>
              </div>
              <p className="text-[#666666] text-sm font-mono">
                &gt; WHERE PRECISION MEETS ELEGANCE
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 font-mono">PRODUCT</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Features</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Pricing</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 font-mono">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">About</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Blog</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 font-mono">CONNECT</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Twitter</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">GitHub</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#00D9FF] text-sm font-mono">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333333] mt-8 pt-8 text-center">
            <p className="text-[#999999] text-sm font-mono">
              © 2024 DarkUI. All rights reserved. &lt;/&gt; CODE_DESIGN_SYSTEM
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
