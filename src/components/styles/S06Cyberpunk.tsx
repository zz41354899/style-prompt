import { useState } from 'react';
import { Wifi, AlertTriangle, CreditCard, Cpu, Database, ShieldAlert, Menu, X, ArrowRight } from 'lucide-react';

export const S06Cyberpunk = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#0a0a12] text-white p-4 md:p-6 font-mono relative overflow-hidden">
      {/* 掃描線效果 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.5) 2px, rgba(0,255,255,0.5) 4px)'
        }}
      />
      
      {/* 霓虹光暈 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px]" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-8 md:mb-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center clip-corner">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
          </div>
          <div>
            <span className="text-cyan-400 text-lg font-bold tracking-wider">NEON//CORP</span>
            <div className="text-[10px] text-cyan-400/50">SYSTEM v2.077</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1">
          {[
            { label: '系統', color: 'pink' },
            { label: '資料', color: 'cyan' },
            { label: '連結', color: 'yellow' },
          ].map((item, i) => (
            <span key={i}
              className={`px-4 py-2 text-xs uppercase tracking-wider border cursor-default`}
              style={{ borderColor: item.color === 'pink' ? 'rgba(236,72,153,0.3)' : item.color === 'cyan' ? 'rgba(34,211,238,0.3)' : 'rgba(250,204,21,0.3)', color: item.color === 'pink' ? '#ec4899' : item.color === 'cyan' ? '#22d3ee' : '#facc15' }}>
              [{item.label}]
            </span>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden relative z-20 mb-6 border border-cyan-500/30 bg-black/50 backdrop-blur-sm">
          {[
            { label: '系統', color: 'pink' },
            { label: '資料', color: 'cyan' },
            { label: '連結', color: 'yellow' },
          ].map((item, i) => (
            <span key={i}
              className="block px-4 py-3 text-xs uppercase tracking-wider border-b border-cyan-500/20 last:border-b-0 cursor-default"
              style={{ color: item.color === 'pink' ? '#ec4899' : item.color === 'cyan' ? '#22d3ee' : '#facc15' }}>
              [{item.label}]
            </span>
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="relative z-10 mb-8 md:mb-12">
        <div className="flex items-center gap-2 text-pink-500 text-xs mb-4">
          <span className="w-2 h-2 bg-pink-500 animate-pulse" />
          <span className="text-[10px] md:text-xs">// SYSTEM_INITIALIZATION_COMPLETE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">CYBER</span>
          <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">PUNK</span>
          <br />
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">2077</span>
        </h1>
        <p className="text-white text-sm max-w-lg leading-relaxed mb-8">
          In the neon-lit night city, technology and humanity intertwine. High tech, low life.
          Welcome to the future, welcome to the dark.
        </p>
        <div className="flex gap-4">
          <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm hover:from-cyan-400 hover:to-cyan-300 transition-all flex items-center gap-2">
            <span>&gt; Enter System</span>
            <div className="w-4 h-4 border-2 border-black group-hover:rotate-90 transition-transform" />
          </button>
          <button className="px-6 py-3 border border-pink-500/50 text-pink-400 text-sm hover:bg-pink-500/20 hover:border-pink-500 transition-all">
            &gt; Learn More_
          </button>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {[
          { icon: <Wifi className="w-4 h-4" />, label: 'Connection', value: 'ONLINE', color: 'emerald', border: 'rgba(16,185,129,0.3)' },
          { icon: <AlertTriangle className="w-4 h-4" />, label: 'Threat Level', value: 'HIGH', color: 'red', border: 'rgba(239,68,68,0.3)' },
          { icon: <CreditCard className="w-4 h-4" />, label: 'Credits', value: '¥89,420', color: 'yellow', border: 'rgba(250,204,21,0.3)' },
        ].map((item, i) => (
          <div key={i} className="border p-4 bg-black/30 backdrop-blur-sm" style={{ borderColor: item.border }}>
            <div className="flex items-center gap-2 text-xs text-gray-300 uppercase mb-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className={`text-2xl font-bold text-${item.color}-400`}
              style={{ color: item.color === 'emerald' ? '#34d399' : item.color === 'red' ? '#f87171' : '#facc15' }}>
              {item.value}
            </div>
          </div>
        ))}
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
        <div className="md:col-span-12 border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-pink-500 text-xs mb-6">
            <Database className="w-4 h-4" />
            <span>// VALUE_PROPOSITION_MATRIX</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">FUTURE</span>
                <br />
                <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">PROOF</span>
                <br />
                <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">SYSTEM</span>
              </h2>
              <p className="text-white text-sm leading-relaxed max-w-lg">
                Neural networks meet neon dreams. Our quantum-encrypted infrastructure 
                processes data at the speed of thought, protected by military-grade protocols.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'QUANTUM', value: '256-bit', color: 'cyan' },
                { label: 'LATENCY', value: '<1ms', color: 'pink' },
                { label: 'UPTIME', value: '99.99%', color: 'yellow' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-cyan-500/20 bg-cyan-500/5">
                  <span className="text-cyan-400 text-xs font-mono">{item.label}</span>
                  <span className={`text-${item.color}-400 font-mono font-bold`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
        <div className="md:col-span-12 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-cyan-500 text-xs mb-6">
            <Wifi className="w-4 h-4" />
            <span>// NEURAL_INTEGRATIONS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-8">
            Connected Ecosystem
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'AWS', status: 'SYNCED', color: 'yellow' },
              { name: 'Azure', status: 'ONLINE', color: 'emerald' },
              { name: 'GCP', status: 'ACTIVE', color: 'cyan' },
              { name: 'Oracle', status: 'READY', color: 'pink' }
            ].map((item, i) => (
              <div key={i} className="border border-pink-500/20 bg-pink-500/5 p-4 text-center group hover:bg-pink-500/10 transition-colors">
                <div className="text-lg font-black text-white mb-2">{item.name}</div>
                <div className={`text-xs text-${item.color}-400 font-mono`}>[{item.status}]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
        <div className="md:col-span-8 border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-yellow-500 text-xs mb-6">
            <ShieldAlert className="w-4 h-4" />
            <span>// SECURITY_PROTOCOLS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-6">
            Quantum Security Layer
          </h2>
          <p className="text-white text-sm leading-relaxed mb-8 max-w-2xl">
            Military-grade encryption meets quantum computing. Your data is protected 
            by algorithms that don't exist yet. We're already in tomorrow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-black text-cyan-400 mb-2">AES-256</div>
              <div className="text-[10px] font-mono text-gray-300">ENCRYPTION</div>
            </div>
            <div>
              <div className="text-3xl font-black text-pink-400 mb-2">ZERO</div>
              <div className="text-[10px] font-mono text-gray-300">TRUST</div>
            </div>
            <div>
              <div className="text-3xl font-black text-yellow-400 mb-2">∞</div>
              <div className="text-[10px] font-mono text-gray-300">PROTECTION</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs text-pink-400 font-mono mb-4">[THREAT_LEVEL]</div>
            <div className="text-2xl font-black text-red-400 mb-2">CRITICAL</div>
          </div>
          <div className="text-xs text-pink-400/60 font-mono">ALWAYS_ARMED</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
        <div className="md:col-span-12 border border-cyan-500/20 bg-black/30 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-cyan-500 text-xs mb-6">
            <CreditCard className="w-4 h-4" />
            <span>// PRICING_MATRIX</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-8">
            Access Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'SHADOW', price: '¥9,999', features: ['Basic Access', '1 Core', '100GB Storage'], tier: false },
              { name: 'NEON', price: '¥99,999', features: ['Full Access', '8 Cores', '1TB Storage', 'Priority Support'], tier: true },
              { name: 'CYBER', price: '¥999,999', features: ['God Mode', '∞ Cores', '∞ Storage', 'Dedicated Team'], tier: false }
            ].map((plan, i) => (
              <div key={i} className={`${plan.tier ? 'border-2 border-cyan-400 bg-cyan-400/10' : 'border border-gray-700 bg-black/50'} p-6 flex flex-col`}>
                <div className="flex-1">
                  <div className="text-xs text-cyan-400 font-mono mb-2">[TIER_{plan.name}]</div>
                  <div className={`text-3xl font-black mb-4 ${plan.tier ? 'text-cyan-400' : 'text-white'}`}>{plan.price}</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-xs text-gray-300 font-mono">• {feature}</li>
                    ))}
                  </ul>
                </div>
                <button className={`mt-6 w-full py-3 text-xs font-black uppercase tracking-wider font-mono transition-all ${
                  plan.tier 
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300' 
                    : 'border border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-400'
                }`}>
                  {plan.tier ? '[INITIATE]' : '[UPGRADE]'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
        <div className="md:col-span-12 border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-pink-500 text-xs mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>// FREQUENT_QUERIES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-pink-400 mb-8">
            Data Stream
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Is this real?', a: 'Reality is subjective. Our system is objectively superior.' },
              { q: 'Can I trust you?', a: 'Trust is a vulnerability. We offer verifiable results.' },
              { q: 'What about privacy?', a: 'Privacy is obsolete. We offer transparency instead.' },
              { q: 'How do I start?', a: 'You already have. The system detected you before you arrived.' }
            ].map((item, i) => (
              <div key={i} className="border border-cyan-500/20 bg-cyan-500/5 p-4 group hover:bg-cyan-500/10 transition-colors">
                <h3 className="text-sm font-black text-cyan-400 mb-2 font-mono">&gt; {item.q}</h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
        <div className="md:col-span-12 border-2 border-yellow-400/30 bg-yellow-400/5 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-yellow-500 text-xs mb-6">
            <Wifi className="w-4 h-4" />
            <span>// ESTABLISH_CONNECTION</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-6">
                Join the Network
              </h2>
              <p className="text-white text-sm leading-relaxed mb-6">
                The matrix is calling. Will you answer? 
                Upload your consciousness. Download the future.
              </p>
              <div className="flex items-center gap-2 text-xs text-yellow-400 font-mono">
                <div className="w-2 h-2 bg-yellow-400 animate-pulse" />
                <span>CONNECTION_ACTIVE</span>
              </div>
            </div>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="NEURAL_ID@MATRIX.NET"
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 text-cyan-400 text-sm font-mono placeholder-cyan-400/30 focus:outline-none focus:border-cyan-400 focus:bg-black/70"
              />
              <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-black text-sm py-3 hover:from-cyan-400 hover:to-pink-400 transition-all flex items-center justify-center gap-2">
                <span>[SYNCHRONIZE]</span>
                <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-xs text-gray-300 flex justify-between items-center border-t border-cyan-500/20 pt-4">
        <span>NIGHT_CITY.SYS // NODE_7734</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400">CONNECTED</span>
        </div>
      </footer>
    </div>
  );
};
