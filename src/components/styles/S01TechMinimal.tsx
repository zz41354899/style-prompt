import { useState } from 'react';
import { Cpu, Shield, Zap, ArrowRight, Activity, Server, Globe, Menu, X } from 'lucide-react';

export const S01TechMinimal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#09090b] text-white p-6 md:p-8 font-sans relative overflow-hidden">
      {/* 背景網格效果 */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* 漸層光暈 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-12 md:mb-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight">TechFlow</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <span className="text-sm text-zinc-400 cursor-default">Products</span>
          <span className="text-sm text-zinc-400 cursor-default">Solutions</span>
          <span className="text-sm text-zinc-400 cursor-default">About</span>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm">
            聯繫我們
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden relative z-20 mb-8 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
          <nav className="flex flex-col gap-2">
            <span className="px-4 py-3 text-sm text-zinc-300 rounded-lg cursor-default">Products</span>
            <span className="px-4 py-3 text-sm text-zinc-300 rounded-lg cursor-default">Solutions</span>
            <span className="px-4 py-3 text-sm text-zinc-300 rounded-lg cursor-default">About</span>
            <button className="mt-2 px-4 py-3 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium transition-colors">
              Contact Us
            </button>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="relative z-10 mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 mb-6">
          <Activity className="w-3 h-3" />
          <span>New Version 2.0 Released</span>
        </div>
        <h1 className="text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
          Building the next<br />generation of<br />digital infrastructure
        </h1>
        <p className="text-zinc-400 max-w-lg mb-10 text-lg leading-relaxed">
          Leverage cutting-edge cloud technology to build high-performance, high-availability digital solutions for your business.
        </p>
        <div className="flex gap-4">
          <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
            Start Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors">
            View Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 grid grid-cols-3 gap-6 mb-20">
        {[
          { icon: <Zap className="w-5 h-5" />, title: 'Extreme Speed', desc: 'Millisecond response, 99.99% uptime guarantee', gradient: 'from-amber-500 to-orange-600' },
          { icon: <Shield className="w-5 h-5" />, title: 'Enterprise Security', desc: 'SOC 2 certified, end-to-end encryption protection', gradient: 'from-emerald-500 to-teal-600' },
          { icon: <Globe className="w-5 h-5" />, title: 'Global Deployment', desc: '30+ data centers, edge computing support', gradient: 'from-blue-500 to-cyan-600' },
        ].map((item, i) => (
          <div key={i} className="group p-6 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-2xl transition-all">
            <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="relative z-10 p-8 bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 rounded-2xl">
        <div className="grid grid-cols-4 gap-8">
          {[
            { value: '99.99%', label: 'Service Uptime', icon: <Server className="w-4 h-4" /> },
            { value: '<10ms', label: 'Avg Latency', icon: <Zap className="w-4 h-4" /> },
            { value: '50K+', label: 'Active Developers', icon: <Activity className="w-4 h-4" /> },
            { value: '30+', label: 'Global Nodes', icon: <Globe className="w-4 h-4" /> },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-2 text-zinc-500 mb-2">
                {item.icon}
                <span className="text-xs uppercase tracking-wider">{item.label}</span>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
