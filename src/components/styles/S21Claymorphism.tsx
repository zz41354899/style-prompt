import { Palette, Layers, Sparkles, ArrowRight, Check, Quote, Shield, Zap, Star, X, Menu } from 'lucide-react';
import { useState } from 'react';

export const S21Claymorphism = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const isMobile = deviceMode === 'mobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-full font-sans relative" style={{ background: 'linear-gradient(145deg, #F9F3ED 0%, #EAD7C0 100%)' }}>
      {/* Navigation */}
      <header className={`${isMobile ? 'px-4 py-3' : 'px-6 py-4'} relative z-50`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#D4A574]" />
            </div>
            <span className="text-2xl font-bold text-[#4A3426]">ClayUI</span>
          </div>
          <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
            <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors">Features</a>
            <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors">Pricing</a>
            <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors">About</a>
            <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {isMobile && (
              <button 
                className="w-12 h-12 rounded-3xl bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] flex items-center justify-center hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-[#D4A574]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#D4A574]" />
                )}
              </button>
            )}
            {!isMobile && (
              <>
                <button className="w-12 h-12 rounded-3xl bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] flex items-center justify-center hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300">
                  <Palette className="w-6 h-6 text-[#D4A574]" />
                </button>
                <button className="px-4 py-2 bg-gradient-to-br from-[#D4A574] to-[#C19660] text-white rounded-2xl font-bold shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300">
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]/50 shadow-lg">
            <nav className="flex flex-col p-4">
              <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors py-2">Features</a>
              <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors py-2">Pricing</a>
              <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors py-2">About</a>
              <a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] transition-colors py-2">Contact</a>
              <button className="mt-4 px-4 py-2 bg-gradient-to-br from-[#D4A574] to-[#C19660] text-white rounded-2xl font-bold shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300 w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
        {/* Hero Section */}
        <section className={`bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] rounded-3xl ${isMobile ? 'p-4' : 'p-8'} ${isMobile ? 'mb-6' : 'mb-12'} shadow-[15px_15px_30px_rgba(155,123,89,0.4),-15px_-15px_30px_rgba(255,255,255,0.8)] hover:shadow-[20px_20px_40px_rgba(155,123,89,0.5),-20px_-20px_40px_rgba(255,255,255,0.9)] transition-all duration-500`}>
          <div className={`${isMobile ? 'h-64' : 'h-[500px]'} rounded-2xl mb-6 relative overflow-hidden bg-gradient-to-br from-[#D4A574]/20 to-[#E67E22]/20 shadow-[inset_5px_5px_15px_rgba(155,123,89,0.2),inset_-5px_-5px_15px_rgba(255,255,255,0.7)]`}>
            <div className={`absolute ${isMobile ? 'bottom-6 left-4 right-4' : 'bottom-12 left-12 right-12'}`}>
              <div className="inline-flex items-center gap-2 text-[#D4A574] font-semibold mb-4">
                <Layers className="w-5 h-5" />
                Tactile Design System
              </div>
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-[#4A3426] mb-4 leading-tight`}>
                Mold Your Digital Experience
              </h1>
              <p className={`text-[#6B5B4F] ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed mb-6 max-w-2xl`}>
                Experience the warmth of claymorphic design where every element feels soft, moldable, and delightfully tactile.
              </p>
              <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4'}`}>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} bg-gradient-to-br from-[#D4A574] to-[#C19660] text-white rounded-2xl font-bold shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2`}>
                  Start Molding
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] text-[#4A3426] rounded-2xl font-bold shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            </div>
            {/* Clay texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#D4A574] blur-2xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#E67E22] blur-2xl" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#4A3426] mb-4`}>
              Soft & Playful Features
            </h2>
            <p className="text-[#6B5B4F] max-w-2xl mx-auto">
              Every element crafted to feel warm, tactile, and delightfully interactive
            </p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { 
                icon: <Layers className="w-6 h-6" />, 
                title: 'Soft Shadows', 
                desc: 'Gentle pressed-in effects create inviting depth',
                color: '#D4A574'
              },
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: 'Rounded Forms', 
                desc: 'Extra rounded corners feel organic and friendly',
                color: '#E67E22'
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: 'Tactile Feel', 
                desc: 'Visual feedback mimics real clay interactions',
                color: '#82B366'
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] rounded-3xl p-6 shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[10px_10px_20px_rgba(155,123,89,0.4),-10px_-10px_20px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center shadow-[inset_3px_3px_6px_rgba(155,123,89,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] group-hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300"
                  style={{ backgroundColor: item.color + '20' }}>
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#4A3426] text-lg mb-2">{item.title}</h3>
                <p className="text-[#6B5B4F] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] rounded-3xl ${isMobile ? 'p-4' : 'p-8'} ${isMobile ? 'mb-6' : 'mb-12'} shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)]`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#4A3426] mb-8 text-center`}>
            Loved by Designers Worldwide
          </h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                quote: "The claymorphic design made our app feel so warm and inviting. User engagement increased by 35%!",
                author: "Emma Johnson",
                role: "Product Designer at Playful",
                rating: 5
              },
              {
                quote: "Finally, a design system that doesn't feel cold and corporate. Our users love the tactile experience.",
                author: "Carlos Rodriguez",
                role: "Creative Director at SoftTech",
                rating: 5
              },
              {
                quote: "The soft shadows and rounded forms create such a friendly atmosphere. Absolutely delightful!",
                author: "Sophie Chen",
                role: "UX Lead at FriendlyApps",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/50 rounded-2xl p-6 shadow-[5px_5px_10px_rgba(155,123,89,0.2),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[10px_10px_20px_rgba(155,123,89,0.3),-10px_-10px_20px_rgba(255,255,255,0.8)] transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#E67E22] text-[#E67E22]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D4A574]/30 mb-4" />
                <p className="text-[#6B5B4F] mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C19660]" />
                  <div>
                    <div className="font-bold text-[#4A3426]">{testimonial.author}</div>
                    <div className="text-sm text-[#9C8B7A]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#4A3426] mb-4`}>
              Choose Your Clay Package
            </h2>
            <p className="text-[#6B5B4F]">Flexible pricing for creative projects</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: "Starter",
                price: "$49",
                period: "per month",
                features: ["Basic clay elements", "Up to 5 projects", "Community support", "3 months updates"],
                highlighted: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "per month",
                features: ["All clay components", "Unlimited projects", "Priority support", "Lifetime updates", "Custom colors"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                features: ["Everything in Pro", "Custom components", "Dedicated support", "Source code access", "Training sessions"],
                highlighted: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] rounded-2xl p-8 shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] ${plan.highlighted ? 'border-2 border-[#D4A574]' : ''} hover:shadow-[10px_10px_20px_rgba(155,123,89,0.4),-10px_-10px_20px_rgba(255,255,255,0.8)] transition-all duration-300`}>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-br from-[#D4A574] to-[#C19660] text-white text-sm font-bold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#4A3426] mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#4A3426]">{plan.price}</span>
                  <span className="text-[#6B5B4F]">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#82B366]" />
                      <span className="text-[#6B5B4F]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-[#D4A574] to-[#C19660] text-white shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)]' 
                    : 'bg-white/50 text-[#4A3426] hover:bg-white/70'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-br from-[#D4A574]/20 to-[#E67E22]/20 rounded-3xl ${isMobile ? 'p-6' : 'p-12'} mb-12 text-center shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)]`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#4A3426] mb-4`}>
            Ready to Get Your Hands Dirty?
          </h2>
          <p className="text-[#6B5B4F] text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of designers who are already creating delightful experiences with ClayUI.
          </p>
          <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4 justify-center'}`}>
            <button className="px-8 py-3 bg-gradient-to-br from-[#D4A574] to-[#C19660] text-white rounded-xl font-bold shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-3 bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] text-[#4A3426] rounded-xl font-bold shadow-[5px_5px_10px_rgba(155,123,89,0.3),-5px_-5px_10px_rgba(255,255,255,0.7)] hover:shadow-[inset_5px_5px_10px_rgba(155,123,89,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D4A574]/30 pt-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-[#F9F3ED] to-[#EAD7C0] shadow-[3px_3px_6px_rgba(155,123,89,0.3),-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#D4A574]" />
                </div>
                <span className="font-bold text-[#4A3426]">ClayUI</span>
              </div>
              <p className="text-[#6B5B4F] text-sm">
                Soft to the touch, warm to the soul.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#4A3426] mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Features</a></li>
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Pricing</a></li>
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#4A3426] mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">About</a></li>
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Blog</a></li>
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#4A3426] mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Twitter</a></li>
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">GitHub</a></li>
                <li><a href="#" className="text-[#6B5B4F] hover:text-[#4A3426] text-sm">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#D4A574]/30 mt-8 pt-8 text-center">
            <p className="text-[#9C8B7A] text-sm">
              © 2024 ClayUI. All rights reserved. Molded with ❤️ for creators.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
