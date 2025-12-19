import { Square, Triangle, ArrowRight, Grid3X3, Ruler, Check, Quote, Star, Shield, X, Menu } from 'lucide-react';
import { useState } from 'react';

export const S24MinimalistLineArt = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const isMobile = deviceMode === 'mobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-full font-sans relative bg-[#0f172a] text-white overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div style={{ 
          backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} className="absolute inset-0" />
      </div>
      {/* Animated Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#06b6d4] rounded-full filter blur-3xl opacity-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6] rounded-full filter blur-3xl opacity-10 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <header className={`relative z-50 ${isMobile ? 'px-4 py-3' : 'px-6 py-4'} backdrop-blur-md bg-[#0f172a]/80 border-b border-[#1e293b]`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-[#06b6d4] flex items-center justify-center">
              <Grid3X3 className="w-6 h-6 text-[#06b6d4]" />
            </div>
            <span className="text-2xl font-black tracking-wider text-white">LineArt</span>
          </div>
          <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {isMobile && (
              <button 
                className="p-3 border-2 border-[#06b6d4] hover:bg-[#06b6d4] text-[#06b6d4] hover:text-white transition-all duration-300"
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
                <button className="p-3 border-2 border-[#06b6d4] hover:bg-[#06b6d4] text-[#06b6d4] hover:text-white transition-all duration-300">
                  <Ruler className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-black hover:shadow-lg hover:shadow-[#06b6d4]/25 transition-all duration-300">
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b]">
            <nav className="flex flex-col p-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Contact</a>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-black hover:shadow-lg hover:shadow-[#06b6d4]/25 transition-all duration-300 w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className={`relative z-10 ${isMobile ? 'p-4' : 'p-6'}`}>
        {/* Hero Section */}
        <section className={`bg-[#1e293b]/50 backdrop-blur-lg rounded-3xl overflow-hidden ${isMobile ? 'mb-6' : 'mb-12'} border border-[#06b6d4]/30 hover:border-[#06b6d4]/50 transition-all duration-300`}>
          <div className={`${isMobile ? 'h-64' : 'h-[500px]'} relative bg-gradient-to-br from-[#0f172a] to-[#1e293b]`}>
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div style={{ 
                backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} className="absolute inset-0" />
            </div>
            <div className={`absolute ${isMobile ? 'bottom-6 left-4 right-4' : 'bottom-12 left-12 right-12'}`}>
              <div className="flex items-center gap-2 text-xs font-black mb-4 text-[#06b6d4]">
                <Square className="w-4 h-4" />
                <Triangle className="w-4 h-4" />
                <Shield className="w-4 h-4" />
                TECH • PRECISION • FUTURE
              </div>
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black mb-4 leading-none text-white`} style={{ 
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                LESS IS MORE
              </h1>
              <p className={`text-sm ${isMobile ? 'text-base' : 'text-lg'} font-medium max-w-2xl leading-tight mb-6 text-gray-300`}>
                Pure geometric precision. Every element aligned to grid. No decoration, only essential structure.
              </p>
              <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4'}`}>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-black hover:shadow-lg hover:shadow-[#06b6d4]/25 transition-all duration-300 flex items-center justify-center gap-2`}>
                  EXPLORE
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className={`${isMobile ? 'w-full px-6 py-3' : 'px-8 py-4'} border-2 border-[#06b6d4] text-[#06b6d4] font-black hover:bg-[#06b6d4] hover:text-white transition-all duration-300`}>
                  LEARN
                </button>
              </div>
            </div>
            {/* Cyan Accent Line */}
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]" />
          </div>
        </section>

        {/* Features Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black mb-4 text-white`} style={{ 
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              SYSTEM FEATURES
            </h2>
            <p className="text-gray-300 font-medium max-w-2xl mx-auto">
              Pure geometric precision with essential structure only
            </p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              { 
                icon: <Square className="w-6 h-6" />, 
                title: 'PRECISION', 
                desc: 'Every pixel aligned to grid',
                lines: 'h-px bg-[#06b6d4] absolute top-1/2 left-0 right-0'
              },
              { 
                icon: <Triangle className="w-6 h-6" />, 
                title: 'CLARITY', 
                desc: 'No unnecessary elements',
                lines: 'h-px bg-[#06b6d4] absolute top-1/3 left-0 right-0'
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: 'FOCUS', 
                desc: 'Single accent color only',
                lines: 'h-px bg-[#06b6d4] absolute top-2/3 left-0 right-0'
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#1e293b]/50 backdrop-blur-lg border border-[#06b6d4]/30 p-6 relative overflow-hidden hover:border-[#06b6d4]/50 transition-all duration-300 cursor-pointer">
                <div className={item.lines} />
                <div className="w-12 h-12 border-2 border-[#06b6d4] bg-[#0f172a] mb-4 flex items-center justify-center relative text-[#06b6d4]">
                  {item.icon}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#06b6d4]" />
                </div>
                <h3 className="font-black text-lg mb-2 tracking-wide text-white">{item.title}</h3>
                <p className="text-sm font-medium leading-tight text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`bg-[#1e293b]/50 backdrop-blur-lg rounded-3xl ${isMobile ? 'p-4' : 'p-8'} ${isMobile ? 'mb-6' : 'mb-12'} border border-[#06b6d4]/30`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black mb-8 text-center text-white`} style={{ 
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            CLIENT FEEDBACK
          </h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                quote: "The minimalist approach transformed our brand. Clean, precise, and exactly what we needed.",
                author: "John Smith",
                role: "Design Director at Minimal",
                rating: 5
              },
              {
                quote: "Finally, a design system that respects simplicity. No unnecessary elements, pure function.",
                author: "Sarah Lee",
                role: "Creative Lead at Simple",
                rating: 5
              },
              {
                quote: "The grid-based layout brings perfect order to our designs. Absolutely essential.",
                author: "Mike Chen",
                role: "UX Architect at Clean",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#0f172a]/50 border border-[#06b6d4]/30 p-6 hover:border-[#06b6d4]/50 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#06b6d4] text-[#06b6d4]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-gray-300 mb-4 font-medium italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-[#06b6d4] bg-[#1e293b]" />
                  <div>
                    <div className="font-black text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={`${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="text-center mb-8">
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black mb-4 text-white`} style={{ 
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              PRICING PLANS
            </h2>
            <p className="text-gray-300 font-medium">Simple. Transparent. Minimal.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: "BASIC",
                price: "$29",
                period: "per month",
                features: ["Essential elements", "Up to 3 projects", "Email support", "1 year updates"],
                highlighted: false
              },
              {
                name: "PRO",
                price: "$69",
                period: "per month",
                features: ["All components", "Unlimited projects", "Priority support", "Lifetime updates", "Grid system"],
                highlighted: true
              },
              {
                name: "ENTERPRISE",
                price: "Custom",
                period: "contact us",
                features: ["Everything in Pro", "Custom components", "Dedicated support", "Source code", "Training"],
                highlighted: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-[#1e293b]/50 backdrop-blur-lg border ${plan.highlighted ? 'border-[#06b6d4]' : 'border-[#06b6d4]/30'} p-8 hover:border-[#06b6d4]/50 transition-all duration-300`}>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white text-sm font-black mb-4">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-black mb-2 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 font-medium">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#06b6d4]" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 font-black transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white hover:shadow-lg hover:shadow-[#06b6d4]/25' 
                    : 'bg-[#0f172a] text-white border-2 border-[#06b6d4]/30 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/10'
                }`}>
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 backdrop-blur-lg rounded-3xl ${isMobile ? 'p-6' : 'p-12'} mb-12 text-center border border-[#06b6d4]/30`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black mb-4 text-white`} style={{ 
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            READY TO START?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Join thousands of designers who embrace minimalism.
          </p>
          <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex gap-4 justify-center'}`}>
            <button className="px-8 py-3 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-black hover:shadow-lg hover:shadow-[#06b6d4]/25 transition-all duration-300">
              START FREE TRIAL
            </button>
            <button className="px-8 py-3 border-2 border-[#06b6d4] text-[#06b6d4] font-black hover:bg-[#06b6d4] hover:text-white transition-all duration-300">
              SCHEDULE DEMO
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-black pt-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center shadow-lg shadow-[#06b6d4]/25">
                  <Grid3X3 className="w-4 h-4" />
                </div>
                <span className="font-black text-white">MinimalUI</span>
              </div>
              <p className="text-white text-sm font-medium">
                Structure • Clarity • Precision
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">PRODUCT</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Features</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Pricing</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Blog</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">CONNECT</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Twitter</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">GitHub</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-white mt-8 pt-8 text-center">
            <p className="text-white text-sm font-medium">
              © 2024 MinimalUI. All rights reserved. Less is more.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
