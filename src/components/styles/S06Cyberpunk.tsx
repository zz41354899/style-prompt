import { useState } from 'react';
import { Wifi, AlertTriangle, CreditCard, Cpu, Eye, Database, ShieldAlert, Menu, X } from 'lucide-react';

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
        <p className="text-gray-400 text-sm max-w-lg leading-relaxed mb-8">
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
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase mb-2">
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

      {/* Features */}
      <section className="relative z-10 border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm p-6 mb-6">
        <div className="flex items-center gap-2 text-pink-500 text-xs mb-6">
          <Database className="w-4 h-4" />
          <span>// AVAILABLE_MODULES</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Cpu className="w-4 h-4" />, label: 'Neural Link', status: 'ACTIVE' },
            { icon: <Eye className="w-4 h-4" />, label: 'Cybernetics', status: 'READY' },
            { icon: <Database className="w-4 h-4" />, label: 'Data Hack', status: 'STANDBY' },
            { icon: <ShieldAlert className="w-4 h-4" />, label: 'Black Market', status: 'LOCKED' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 border border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
              <span className="text-[10px] text-cyan-400/60">[{item.status}]</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-xs text-gray-600 flex justify-between items-center border-t border-cyan-500/20 pt-4">
        <span>NIGHT_CITY.SYS // NODE_7734</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400">CONNECTED</span>
        </div>
      </footer>
    </div>
  );
};
