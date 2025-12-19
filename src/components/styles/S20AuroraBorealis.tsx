import { Sparkles, Star, Moon, ArrowRight, Check, Quote, Shield, Layers, X, Menu } from 'lucide-react';
import { useState } from 'react';

export const S20AuroraBorealis = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const isMobile = deviceMode === 'mobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-full font-sans relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0F1428 100%)' }}>
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full animate-pulse" 
          style={{ 
            background: 'linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.1) 50%, transparent 70%)',
            animation: 'aurora 8s ease-in-out infinite'
          }} />
        <div className="absolute top-0 right-0 w-full h-full" 
          style={{ 
            background: 'linear-gradient(-45deg, transparent 40%, rgba(123, 47, 247, 0.1) 60%, transparent 80%)',
            animation: 'aurora 10s ease-in-out infinite reverse'
          }} />
      </div>

      {/* Navigation */}
      <header className={`relative z-50 ${isMobile ? 'px-4 py-3' : 'px-6 py-4'} border-b border-white/10 backdrop-blur-md bg-black/20`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7B2FF7] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-light text-white/90 tracking-wide">AuroraUI</span>
          </div>
          <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {isMobile && (
              <button 
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
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
                <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                  <Moon className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#7B2FF7] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300">
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
            <nav className="flex flex-col p-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors py-2">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors py-2">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors py-2">About</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors py-2">Contact</a>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#7B2FF7] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className={`relative z-10 ${isMobile ? 'p-4' : 'p-6'}`}>
        {/* Hero Section */}
        <section className={`bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden ${isMobile ? 'mb-6' : 'mb-12'} border border-white/10 hover:bg-white/10 transition-all duration-500`}>
          <div className={`${isMobile ? 'h-64' : 'h-[500px]'} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 via-[#7B2FF7]/20 to-[#00FF88]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className={`absolute ${isMobile ? 'bottom-6 left-4 right-4' : 'bottom-12 left-12 right-12'}`}>
              <div className="text-white/70 text-sm font-light mb-3 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Northern Lights Design System
              </div>
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-light text-white mb-4 leading-tight`}>
                Illuminate Your Digital Experience
              </h1>
              <p className={`text-white/80 ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed mb-6 max-w-2xl`}>
                Experience the mesmerizing beauty of aurora-inspired interfaces. Flowing gradients and ethereal glows that captivate your users.
              </p>
              <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4'}`}>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} bg-gradient-to-r from-[#00D4FF] to-[#7B2FF7] text-white rounded-2xl font-medium hover:shadow-xl hover:shadow-[#00D4FF]/25 transition-all duration-300 flex items-center justify-center gap-2`}>
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} text-white font-medium rounded-2xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300`}>
                  Watch Demo
                </button>
              </div>
            </div>
            {/* Animated Particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-[#7B2FF7] rounded-full animate-pulse delay-100" />
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#00FF88] rounded-full animate-pulse delay-200" />
          </div>
        </section>
        {/* Features Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-light text-white mb-4 tracking-wide`}>
              Ethereal Design Features
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Experience the magic of northern lights captured in digital interfaces
            </p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { 
                icon: <Layers className="w-6 h-6" />, 
                title: 'Flowing Gradients', 
                desc: 'Organic color transitions that mimic aurora movements',
                color: 'from-[#00D4FF] to-[#7B2FF7]'
              },
              { 
                icon: <Sparkles className="w-6 h-6" />, 
                title: 'Luminous Effects', 
                desc: 'Soft glows and ethereal shadows for atmospheric depth',
                color: 'from-[#7B2FF7] to-[#00FF88]'
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: 'Dark Canvas', 
                desc: 'Night-themed backgrounds that make colors pop',
                color: 'from-[#00FF88] to-[#00D4FF]'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-light text-white text-lg mb-2 tracking-wide">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`bg-white/5 backdrop-blur-lg rounded-3xl ${isMobile ? 'p-4' : 'p-8'} ${isMobile ? 'mb-6' : 'mb-12'} border border-white/10`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-light text-white mb-8 text-center tracking-wide`}>
            Loved by Digital Artists
          </h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                quote: "The aurora effects transformed our app into something magical. Users are mesmerized by the visual experience.",
                author: "Alex Kim",
                role: "Creative Director at PixelDream",
                rating: 5
              },
              {
                quote: "Finally, a design system that captures the beauty of northern lights. Absolutely stunning!",
                author: "Maya Patel",
                role: "Senior Designer at NightSky",
                rating: 5
              },
              {
                quote: "The ethereal glow effects create an unmatched atmospheric depth. Our engagement metrics soared.",
                author: "Jordan Lee",
                role: "UX Lead at AuroraTech",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF] transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/20 mb-4" />
                <p className="text-white/60 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B2FF7]" />
                  <div>
                    <div className="font-light text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/40">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-light text-white mb-4 tracking-wide`}>
              Choose Your Aurora Plan
            </h2>
            <p className="text-white/60">Select the perfect plan for your creative journey</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: "Starter",
                price: "$39",
                period: "per month",
                features: ["Basic aurora effects", "Up to 5 projects", "Community support", "6 months updates"],
                highlighted: false
              },
              {
                name: "Professional",
                price: "$89",
                period: "per month",
                features: ["All aurora effects", "Unlimited projects", "Priority support", "Lifetime updates", "Custom gradients"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                features: ["Everything in Pro", "Exclusive effects", "Dedicated support", "Source code access", "SLA guarantee"],
                highlighted: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${plan.highlighted ? 'border-[#00D4FF]' : 'border-white/10'} hover:bg-white/10 transition-all duration-500`}>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#00D4FF] to-[#7B2FF7] text-white text-sm font-light rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-light text-white mb-2 tracking-wide">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light text-white">{plan.price}</span>
                  <span className="text-white/60">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00FF88]" />
                      <span className="text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-light transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B2FF7] text-white hover:shadow-lg hover:shadow-[#00D4FF]/30' 
                    : 'border border-white/20 text-white/70 hover:border-[#00D4FF] hover:text-[#00D4FF]'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-r from-[#00D4FF]/20 to-[#7B2FF7]/20 backdrop-blur-lg rounded-3xl ${isMobile ? 'p-6' : 'p-12'} mb-12 text-center border border-white/10`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-light text-white mb-4 tracking-wide`}>
            Ready to Illuminate Your Vision?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using AuroraUI to craft magical digital experiences.
          </p>
          <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4 justify-center'}`}>
            <button className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#7B2FF7] text-white rounded-xl font-light hover:shadow-xl hover:shadow-[#00D4FF]/30 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-3 text-white font-light rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#7B2FF7] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-light text-white tracking-wide">AuroraUI</span>
              </div>
              <p className="text-white/60 text-sm">
                Where light dances across the digital canvas.
              </p>
            </div>
            <div>
              <h4 className="font-light text-white mb-4 tracking-wide">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Features</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Pricing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-white mb-4 tracking-wide">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Blog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-white mb-4 tracking-wide">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Twitter</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">GitHub</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/40 text-sm">
              © 2024 AuroraUI. All rights reserved. Crafted with ✨ for dreamers.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
