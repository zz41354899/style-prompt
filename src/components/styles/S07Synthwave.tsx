import { Play, Radio, Disc3, Sparkles, Zap, Shield, HelpCircle, Mail, ChevronRight, Star, Check, TrendingUp } from 'lucide-react';

export const S07Synthwave = () => {
  return (
    <div className="min-h-full text-white p-4 md:p-8 font-sans relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 40%, #0f3460 100%)'
      }}
    >
      {/* 太陽 */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-32 md:w-56 md:h-56">
        <div className="w-full h-full rounded-full relative"
          style={{
            background: 'linear-gradient(180deg, #ff6b6b 0%, #feca57 40%, #ff9ff3 100%)',
            boxShadow: '0 0 80px rgba(255,107,107,0.6), 0 0 120px rgba(255,107,107,0.3)'
          }}
        >
          {/* 太陽條紋 */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute left-0 right-0 bg-[#1a0a2e]" 
              style={{ 
                height: `${4 + i * 2}px`, 
                bottom: `${15 + i * 18}%`,
                opacity: 0.8
              }} 
            />
          ))}
        </div>
      </div>

      {/* 透視網格地板 */}
      <div className="absolute bottom-0 left-0 right-0 h-56"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,0,255,0.15) 100%)',
          backgroundImage: `
            linear-gradient(90deg, rgba(255,0,255,0.4) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,0,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 30px',
          transform: 'perspective(300px) rotateX(65deg)',
          transformOrigin: 'bottom'
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-10 md:mb-20">
        <div className="flex items-center gap-3">
          <Disc3 className="w-6 h-6 md:w-8 md:h-8 text-pink-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-lg md:text-2xl font-black tracking-wider uppercase"
            style={{ textShadow: '0 0 20px #ff6b6b, 0 0 40px #ff6b6b' }}>
            SYNTHWAVE
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em]">
          {['Home', 'Music', 'About'].map((item, i) => (
            <span key={i} className="cursor-default">
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 text-center mb-10 md:mb-20 pt-4 md:pt-8">
        <div className="text-xs uppercase tracking-[0.4em] text-pink-400/60 mb-4">
          ▲ RETRO FUTURE ▲
        </div>
        <h1 className="text-3xl md:text-7xl font-black mb-6 uppercase tracking-tight"
          style={{
            background: 'linear-gradient(90deg, #ff6b6b, #feca57, #ff9ff3, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Retro Future
        </h1>
        <p className="text-purple-300/80 max-w-lg mx-auto mb-10 leading-relaxed">
          Return to the 1980s vision of the future, perfect fusion of neon lights and electronic synthesizers.
          Let's drive the DeLorean through time together.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
          <button className="group px-6 py-3 md:px-8 md:py-4 font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-3"
            style={{
              background: 'linear-gradient(90deg, #ff6b6b, #ff9ff3)',
              boxShadow: '0 0 30px rgba(255,107,107,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" />
            <span>Start Journey</span>
          </button>
          <button className="px-6 py-3 md:px-8 md:py-4 font-bold uppercase tracking-wider rounded-lg border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all">
            Explore More
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 mb-12">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.4em] text-cyan-400/60 mb-4">
            ◆ VALUE PROPOSITION ◆
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #3CF2FF, #FF4FD8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Future Proof Your Workflow
          </h2>
          <p className="text-purple-300/80 max-w-3xl mx-auto leading-relaxed">
            Experience the power of tomorrow's technology today. Our synthwave-inspired platform 
            combines nostalgic aesthetics with cutting-edge performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Sparkles className="w-8 h-8" />, title: 'Neon Speed', desc: 'Lightning-fast processing with 80s style', color: '#3CF2FF' },
            { icon: <Zap className="w-8 h-8" />, title: 'Electric Dreams', desc: 'AI-powered automation', color: '#FF4FD8' },
            { icon: <TrendingUp className="w-8 h-8" />, title: 'Retro Growth', desc: 'Scale your business exponentially', color: '#4F6BFF' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl text-center"
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-4 flex justify-center"
                style={{ 
                  color: item.color,
                  filter: `drop-shadow(0 0 10px ${item.color})`
                }}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-purple-300/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 mb-12">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.4em] text-pink-400/60 mb-4">
            ◇ INTEGRATIONS ◇
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #ff6b6b, #feca57)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Connect Everything
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['AWS', 'GCP', 'AZURE', 'ORACLE'].map((item) => (
            <div key={item} className="p-4 rounded-lg text-center font-bold text-lg"
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.2)',
                textShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '99.9%', label: 'UPTIME', color: '#3CF2FF' },
            { value: '<1ms', label: 'LATENCY', color: '#FF4FD8' },
            { value: '10M+', label: 'USERS', color: '#4F6BFF' },
            { value: '24/7', label: 'SUPPORT', color: '#feca57' }
          ].map((item, i) => (
            <div key={i} className="text-center p-4 rounded-lg"
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div className="text-3xl font-black mb-2" style={{ color: item.color, textShadow: `0 0 20px ${item.color}` }}>
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-purple-300/60">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 mb-12">
        <div className="p-8 rounded-xl"
          style={{ 
            background: 'rgba(255,255,255,0.03)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-cyan-400" style={{ filter: 'drop-shadow(0 0 20px #3CF2FF)' }} />
            <div>
              <h2 className="text-2xl font-black mb-2">Quantum Security</h2>
              <p className="text-purple-300/80">Military-grade encryption meets retro aesthetics</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              '256-bit AES Encryption',
              'SOC 2 Type II Certified',
              'GDPR Compliant'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mb-12">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.4em] text-pink-400/60 mb-4">
            ◈ PRICING ◈
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #ff9ff3, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose Your Era
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'RETRO', price: '$9/mo', features: ['Basic Features', '1 User', '10GB Storage'], highlight: false },
            { name: 'SYNTHWAVE', price: '$29/mo', features: ['All Features', '5 Users', '100GB Storage', 'Priority Support'], highlight: true },
            { name: 'FUTURE', price: '$99/mo', features: ['Everything', 'Unlimited Users', '1TB Storage', 'Dedicated Support'], highlight: false }
          ].map((plan) => (
            <div key={plan.name} className={`p-6 rounded-xl ${plan.highlight ? 'border-2 border-cyan-400' : 'border border-purple-500/30'}`}
              style={{ 
                background: plan.highlight ? 'rgba(60,242,255,0.1)' : 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 className="text-xl font-black mb-2">{plan.name}</h3>
              <div className="text-3xl font-black mb-4" style={{ color: plan.highlight ? '#3CF2FF' : '#ffffff' }}>
                {plan.price}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 font-bold uppercase rounded-lg transition-all ${
                plan.highlight 
                  ? 'bg-cyan-400 text-black hover:bg-cyan-300' 
                  : 'border border-purple-500/50 hover:bg-purple-500/20'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mb-12">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.4em] text-pink-400/60 mb-4">
            ◉ FAQ ◉
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #4F6BFF, #FF4FD8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Questions From The Past
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Is this really from the 80s?', a: 'No, but it feels like it should be!' },
            { q: 'Can I use this with modern tools?', a: 'Absolutely! Retro aesthetics, modern power.' },
            { q: 'Do you have a time machine?', a: 'Working on it. DeLorean not included.' },
            { q: 'Can I customize the neon colors?', a: 'Yes! Full RGB spectrum available.' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                {item.q}
              </h3>
              <p className="text-purple-300/80">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 mb-12">
        <div className="p-8 rounded-xl text-center"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,159,243,0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <Mail className="w-12 h-12 mx-auto mb-4 text-pink-400" style={{ filter: 'drop-shadow(0 0 20px #ff9ff3)' }} />
          <h2 className="text-2xl font-black mb-4">Get In Touch</h2>
          <p className="text-purple-300/80 mb-6">Ready to travel back to the future?</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="px-6 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300/60 focus:outline-none focus:border-cyan-400"
            />
            <button className="px-8 py-3 font-bold uppercase rounded-lg flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(90deg, #ff6b6b, #ff9ff3)',
                boxShadow: '0 0 30px rgba(255,107,107,0.5)'
              }}
            >
              Send Message
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm text-purple-400/60 pt-6 border-t border-purple-500/20">
        <span>© 1985-2024</span>
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4" />
          <span>SYNTHWAVE DREAMS</span>
        </div>
        <span>MIAMI · TOKYO</span>
      </footer>
    </div>
  );
};
