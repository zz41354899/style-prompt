import { Menu, Bell, Layers, Sparkles, ArrowRight, Check, Star, Quote, Shield, Zap, X } from 'lucide-react';
import { useState } from 'react';

export const S19AestheticHarmony = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const isMobile = deviceMode === 'mobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-full font-sans relative" style={{ background: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)' }}>
      {/* Navigation */}
      <header className={`${isMobile ? 'px-4 py-3' : 'px-6 py-4'} bg-white/60 backdrop-blur-md border-b border-[#E2E8F0]/50 sticky top-0 z-50`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              className="p-2 hover:bg-[#F8FAFC] rounded-xl transition-all duration-200 hover:scale-105"
              onClick={() => isMobile && setIsMenuOpen(!isMenuOpen)}
            >
              {isMobile && isMenuOpen ? (
                <X className="w-5 h-5 text-[#1E293B]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1E293B]" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <div className={`${isMobile ? 'w-7 h-7' : 'w-8 h-8'} rounded-xl bg-gradient-to-br from-[#9333ea] to-[#ec4899] flex items-center justify-center shadow-lg`}>
                <Sparkles className={`${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-white`} />
              </div>
              <span className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-[#1e293b]`}>AestheticUI</span>
            </div>
          </div>
          <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
            <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors">Features</a>
            <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors">Pricing</a>
            <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors">About</a>
            <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-[#F8FAFC] rounded-xl transition-all duration-200 hover:scale-105 relative">
              <Bell className="w-5 h-5 text-[#1e293b]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-[#EC4899] to-[#F43F5E] rounded-full" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#ec4899]/25 transition-all duration-200">
              Sign Up
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]/50 shadow-lg">
            <nav className="flex flex-col p-4">
              <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors py-2">Features</a>
              <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors py-2">Pricing</a>
              <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors py-2">About</a>
              <a href="#" className="text-[#475569] hover:text-[#1e293b] transition-colors py-2">Contact</a>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#ec4899]/25 transition-all duration-200 w-full">
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
        {/* Hero Section */}
        <section className={`bg-white rounded-3xl shadow-lg overflow-hidden ${isMobile ? 'mb-6' : 'mb-12'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
          <div className={`${isMobile ? 'h-96' : 'h-[500px]'} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea]/80 via-[#ec4899]/80 to-[#f472b6]/80" />
            <div className="absolute inset-0 bg-black/20" />
            <div className={`absolute ${isMobile ? 'bottom-8 left-6 right-6' : 'bottom-12 left-12 right-12'}`}>
              <div className="text-white/90 text-sm font-medium mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Design That Feels Good
              </div>
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-white mb-4 leading-tight`}>
                Build Beautiful Products Users Love
              </h1>
              <p className={`text-white/90 ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed mb-6 max-w-2xl`}>
                Aesthetic-Usability Effect design system. Create interfaces that not only look stunning but feel intuitive to use. Boost engagement and satisfaction.
              </p>
              <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4'}`}>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} bg-white text-[#9333ea] rounded-2xl font-semibold hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2`}>
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200`}>
                  Watch Demo
                </button>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#1E293B] mb-4`}>
              Everything You Need to Create Stunning UIs
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Our design system combines aesthetic beauty with proven usability principles to help you build products users love.
            </p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { 
                icon: <Layers className="w-6 h-6" />, 
                title: 'Design System', 
                desc: 'Complete component library with consistent design patterns',
                gradient: 'from-[#9333ea] to-[#ec4899]'
              },
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: 'Lightning Fast', 
                desc: 'Optimized components that load instantly and respond smoothly',
                gradient: 'from-[#ec4899] to-[#f472b6]'
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: 'Accessible by Default', 
                desc: 'WCAG AA compliant with keyboard navigation and screen reader support',
                gradient: 'from-[#a855f7] to-[#c084fc]'
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl ${isMobile ? 'p-6' : 'p-8'} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}>
                <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity`}
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                  <div className="bg-gradient-to-br text-white rounded-xl p-3"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className={`font-semibold text-[#1E293B] mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>{item.title}</h3>
                <p className={`text-[#475569] ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white rounded-3xl p-8 mb-12 shadow-lg">
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#1E293B] mb-8 text-center`}>
            Trusted by Design Teams Worldwide
          </h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                quote: "AestheticUI transformed our design process. Our user engagement increased by 40% after implementation.",
                author: "Sarah Chen",
                role: "Design Lead at TechCorp",
                rating: 5
              },
              {
                quote: "The perfect balance of beauty and usability. Our developers love how easy it is to implement.",
                author: "Michael Rodriguez",
                role: "Senior Designer at StartupX",
                rating: 5
              },
              {
                quote: "Finally, a design system that doesn't compromise on aesthetics for accessibility. Highly recommended!",
                author: "Emily Watson",
                role: "UX Director at DesignHub",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#9333ea] transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#E2E8F0] mb-4" />
                <p className="text-[#475569] mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9333ea] to-[#ec4899]" />
                  <div>
                    <div className="font-semibold text-[#1E293B]">{testimonial.author}</div>
                    <div className="text-sm text-[#94A3B8]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#1E293B] mb-4`}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-[#475569]">Choose the perfect plan for your team</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: "Starter",
                price: "$29",
                period: "per month",
                features: ["Up to 3 projects", "Basic components", "Community support", "1 year updates"],
                highlighted: false
              },
              {
                name: "Professional",
                price: "$79",
                period: "per month",
                features: ["Unlimited projects", "All components", "Priority support", "Lifetime updates", "Custom themes"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                features: ["Everything in Pro", "Custom components", "Dedicated support", "On-premise option", "SLA guarantee"],
                highlighted: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 ${plan.highlighted ? 'border-2 border-[#9333ea] shadow-xl' : 'border border-[#E2E8F0]'} hover:shadow-lg transition-all duration-300`}>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white text-sm font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1E293B]">{plan.price}</span>
                  <span className="text-[#475569]">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#475569]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white hover:shadow-lg' 
                    : 'border border-[#E2E8F0] text-[#1E293B] hover:border-[#9333ea]'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-r from-[#9333ea] to-[#ec4899] rounded-3xl ${isMobile ? 'p-6' : 'p-12'} mb-12 text-center`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-white mb-4`}>
            Ready to Build Something Beautiful?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of designers and developers already using AestheticUI to create amazing products.
          </p>
          <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4 justify-center'}`}>
            <button className="px-8 py-3 bg-white text-[#6366F1] rounded-xl font-semibold hover:shadow-xl transition-all duration-200">
              Start Free Trial
            </button>
            <button className="px-8 py-3 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#E2E8F0] pt-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9333ea] to-[#ec4899] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-[#1E293B]">AestheticUI</span>
              </div>
              <p className="text-[#475569] text-sm">
                Building beautiful, usable interfaces for the modern web.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Features</a></li>
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Pricing</a></li>
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">About</a></li>
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Blog</a></li>
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Twitter</a></li>
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">GitHub</a></li>
                <li><a href="#" className="text-[#475569] hover:text-[#1E293B] text-sm">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E2E8F0] mt-8 pt-8 text-center">
            <p className="text-[#94A3B8] text-sm">
              © 2024 AestheticUI. All rights reserved. Built with ❤️ for designers.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
