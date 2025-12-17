import { Gem, Wind, Sparkles, Layers, ArrowRight, Circle, Shield, Check, Mail } from 'lucide-react';

export const S14Glassmorphism = () => {
  return (
    <div className="min-h-full p-4 md:p-8 font-sans relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      {/* 動態背景光球 */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-[100px] opacity-25" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-400 rounded-full filter blur-[80px] opacity-30" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-8 md:mb-16 p-4 md:p-5 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' }}>
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-xl font-semibold">Glassmorphism</span>
        </div>
        <nav className="hidden md:flex gap-8 text-white/70 text-sm">
          {['Home', 'Works', 'About', 'Contact'].map((item, i) => (
            <span key={i} className="cursor-default">
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Main Card */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-10">
        <div className="md:col-span-7 p-6 md:p-10 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          <div className="flex items-center gap-2 text-purple-300 text-xs mb-6">
            <Circle className="w-2 h-2 fill-current" />
            <span className="uppercase tracking-[0.2em]">UI Design Trend</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Glassmorphism<br />
            <span className="text-white/60">Design Aesthetics</span>
          </h1>
          <p className="text-white/60 mb-10 max-w-md leading-relaxed">
            Create layers and depth through frosted glass effects, making interfaces appear like transparent glass floating in air.
            Blur, transparency, gloss - the perfect combination of three.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="group px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 transition-all hover:gap-3"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <span>Start Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white/80 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="md:col-span-5 flex flex-col gap-4">
          {[
            { icon: <Gem className="w-6 h-6" />, title: 'Transparency', desc: '0.1 - 0.3 optimal effect', value: '20%' },
            { icon: <Wind className="w-6 h-6" />, title: 'Blur Radius', desc: 'Background blur degree', value: '24px' },
            { icon: <Sparkles className="w-6 h-6" />, title: 'Border Gloss', desc: 'Subtle highlight effect', value: '1px' },
          ].map((item, i) => (
            <div key={i} className="flex-1 p-5 rounded-2xl flex items-center gap-4"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white/80"
                style={{ background: 'rgba(255,255,255,0.1)' }}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-white font-medium mb-0.5">{item.title}</div>
                <div className="text-white/40 text-xs">{item.desc}</div>
              </div>
              <div className="text-white/60 font-mono text-sm">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 p-8 rounded-3xl mb-10"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-purple-300 text-xs mb-6">
            <Sparkles className="w-3 h-3" />
            <span className="uppercase tracking-[0.2em]">Design Philosophy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Depth Through<br />
            <span className="text-white/60">Transparency</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Glassmorphism creates visual hierarchy through layered transparency. 
            Each glass element floats above the background, creating depth while maintaining clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Visual Depth', desc: 'Multi-layered glass effects' },
            { title: 'Soft Focus', desc: 'Gentle blur for elegance' },
            { title: 'Light Play', desc: 'Subtle reflections and shine' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {[
          { title: 'Backdrop Filter', desc: 'CSS blur for glass effect', detail: '24px optimal blur radius' },
          { title: 'Layer System', desc: 'Stacked glass elements', detail: 'Creates visual hierarchy' },
          { title: 'Light Effects', desc: 'Subtle highlights', detail: 'Border and inner shadows' },
          { title: 'Color Theory', desc: 'Semi-transparent layers', detail: '0.1-0.3 opacity range' }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <h3 className="text-white font-medium mb-2">{item.title}</h3>
            <p className="text-white/60 text-sm mb-1">{item.desc}</p>
            <p className="text-white/40 text-xs">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Integrations */}
      <section className="relative z-10 p-8 rounded-3xl mb-10"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Platform Support</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Figma', 'Sketch', 'Adobe XD', 'Framer'].map((item) => (
            <div key={item} className="p-4 rounded-xl text-center text-white font-medium"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 p-8 rounded-2xl mb-10"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10M+', label: 'Designs Created' },
            { value: '95%', label: 'User Satisfaction' },
            { value: '50+', label: 'Templates' },
            { value: '24/7', label: 'Support' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 p-8 rounded-3xl mb-10"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
            style={{ background: 'rgba(255,255,255,0.1)' }}>
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Crystal Clear Security</h2>
            <p className="text-white/60 mb-6">
              Your designs are protected with enterprise-grade security. 
              Transparent as glass, secure as a vault.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                '256-bit encryption',
                'GDPR compliant',
                'Regular audits'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mb-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Pricing Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: '$19/mo', features: ['Basic templates', 'Community support'] },
            { name: 'Professional', price: '$49/mo', features: ['All templates', 'Priority support', 'Custom exports'] },
            { name: 'Enterprise', price: 'Custom', features: ['Everything', 'Dedicated support', 'White label'] }
          ].map((plan) => (
            <div key={plan.name} className="p-6 rounded-3xl text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <h3 className="text-white font-medium mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-6 text-white/60 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl font-medium text-white transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 p-8 rounded-3xl mb-10"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'What browsers support glassmorphism?', a: 'Modern browsers with backdrop-filter support. Chrome, Safari, Firefox, Edge.' },
            { q: 'Is it accessible?', a: 'Yes! We ensure WCAG AA compliance with proper contrast ratios.' },
            { q: 'Can I customize the blur?', a: 'Absolutely! Adjust blur radius from 0-100px to your preference.' },
            { q: 'Performance impact?', a: 'Minimal with GPU acceleration. Use sparingly for best results.' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-white font-medium mb-2">{item.q}</h3>
              <p className="text-white/60 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 p-8 rounded-3xl mb-20"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="text-center">
          <Mail className="w-8 h-8 text-white/60 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/60 mb-8">Ready to create stunning glass designs?</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
              style={{ backdropFilter: 'blur(10px)' }}
            />
            <button className="px-8 py-3 rounded-xl font-medium text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
