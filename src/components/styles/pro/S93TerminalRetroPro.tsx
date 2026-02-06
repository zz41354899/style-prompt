import React, { useState, useEffect } from 'react';
import {
    Terminal,
    Cpu,
    Shield,
    Globe,
    Menu,
    X,
    ChevronRight,
    Command,
    Hash,
    Activity,
    Server,
    Lock
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S93TerminalRetroPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [text, setText] = useState('');
    const fullText = "INITIALIZING SECURE CONNECTION...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#0D0D0D] text-[#33FF00] font-mono selection:bg-[#33FF00] selection:text-black overflow-x-hidden relative">
            {/* 
        TERMINAL RETRO THEME
        - Background: #0D0D0D (CRT Black)
        - Primary Color: #33FF00 (Phosphor Green)
        - Font: Monospace
        - Effects: Scanlines, glow, text-shadow
      */}

            {/* CRT OVERLAY EFFECTS */}
            <div className="fixed inset-0 pointer-events-none z-50">
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
                {/* Flicker */}
                <div className="absolute inset-0 bg-white/5 opacity-5 animate-pulse pointer-events-none"></div>
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
            </div>

            <style>{`
        .phosphor-glow {
          text-shadow: 0 0 10px rgba(51, 255, 0, 0.7), 0 0 20px rgba(51, 255, 0, 0.5);
        }
        .box-glow {
          box-shadow: 0 0 15px rgba(51, 255, 0, 0.3), inset 0 0 15px rgba(51, 255, 0, 0.1);
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

            {/* NAVIGATION */}
            <nav className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur border-b border-[#33FF00]/30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 phosphor-glow">
                        <Terminal size={20} />
                        <span className="font-bold tracking-widest text-lg">&gt;_MAINFRAME</span>
                    </div>

                    {/* Desktop Nav */}
                    {!isMobile && !isTablet && (
                        <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
                            {['Services', 'Protocol', 'Access', 'Logs'].map((item) => (
                                <a key={item} href="#" className="hover:text-white hover:underline decoration-[#33FF00] underline-offset-4 transition-colors">
                                    ./{item.toLowerCase()}
                                </a>
                            ))}
                            <button className="px-4 py-1 border border-[#33FF00] hover:bg-[#33FF00] hover:text-black transition-all font-bold">
                                [ EXECUTE ]
                            </button>
                        </div>
                    )}

                    {(isMobile || isTablet) && (
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            <main className="relative z-30">
                {/* HERO */}
                <section className="py-24 md:py-32 px-6 border-b border-[#33FF00]/20">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-2 py-1 bg-[#33FF00]/10 border border-[#33FF00]/50 text-xs mb-4">
                                SYSTEM STATUS: ONLINE
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight phosphor-glow">
                                SECURE YOUR <br />
                                DIGITAL INFRASTRUCTURE
                            </h1>

                            <div className="h-24 bg-black border border-[#33FF00]/30 p-4 rounded font-mono text-sm leading-relaxed overflow-hidden">
                                <span className="text-opacity-70 text-[#33FF00]">{text}</span>
                                <span className="inline-block w-2.5 h-5 bg-[#33FF00] align-middle cursor-blink ml-1"></span>
                            </div>

                            <p className="opacity-70 text-lg md:max-w-md">
                                Advanced cybersecurity protocols for the modern decentralized web. Encrypt everything. Trust no one.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-8 py-4 bg-[#33FF00] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors box-glow">
                                    Initiate Scan
                                </button>
                                <button className="px-8 py-4 border border-[#33FF00] text-[#33FF00] font-bold uppercase tracking-wider hover:bg-[#33FF00]/10 transition-colors">
                                    View Documentation
                                </button>
                            </div>
                        </div>

                        {/* ASCII / Graphic Element */}
                        <div className="relative font-mono text-[10px] leading-[10px] md:text-xs opacity-50 select-none hidden md:block animate-pulse">
                            <pre>
                                {`
       .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
dX.    9Xb      .dXb    __                     __    dXb.     dXP     .Xb
9XXb._       _.dXXXXb dXXXXbo.               .odXXXXb dXXXXb._       _.dXXP
 9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP
  \`9XXXXXXXXXXXXXXXXXXXXX'~   ~"OOO8b   d8OOO"~   ~"XXXXXXXXXXXXXXXXXXXXXP'
    \`9XXXXXXXXXXXP' \`9XX'   DIE    \`98v8P'  HUMAN   \`XXP' \`9XXXXXXXXXXXP'
        ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~
                        )b.  .dbo.dP'\`v'\`9b.odb.  .dX(
                      ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.
                     dXXXXXXXXXXXP'   .   \`9XXXXXXXXXXXb
                    dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb
                    9XXb'   \`XXXXXb.dX|Xb.dXXXXX'   \`dXXP
                     "      gXXXXXXXXX|XXXXXXXXXp      "
                          dXXXXXP'"  |  "\`9XXXXXb
                          \`"         |         "\`
`}
                            </pre>
                            {/* Floating Labels */}
                            <div className="absolute top-10 right-10 border border-[#33FF00] px-2 bg-black text-xs">Target: 127.0.0.1</div>
                            <div className="absolute bottom-20 left-10 border border-[#33FF00] px-2 bg-black text-xs">Port: 8080 [OPEN]</div>
                        </div>
                    </div>
                </section>


                {/* MODULES GRID */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-16 border-b border-[#33FF00]/30 pb-4">
                            <Hash size={24} />
                            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#33FF00]">System Modules</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Shield, title: "Firewall Node", desc: "Active packet filtering and intrusion detection system." },
                                { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 bit encryption for all data transmission." },
                                { icon: Activity, title: "Threat Monitoring", desc: "Real-time heuristics analysis and anomaly detection." },
                                { icon: Server, title: "Decentralized Storage", desc: "Sharded data distribution across secure nodes." },
                                { icon: Globe, title: "Global CDN", desc: "Low latency content delivery via secure edge locations." },
                                { icon: Command, title: "Command Line API", desc: "Full control via our robust CLI tools." }
                            ].map((mod, i) => (
                                <div key={i} className="border border-[#33FF00]/30 p-8 hover:bg-[#33FF00]/5 transition-colors group cursor-pointer box-glow">
                                    <div className="flex justify-between items-start mb-6">
                                        <mod.icon size={32} className="group-hover:animate-pulse" />
                                        <span className="text-xs opacity-50">[0{i + 1}]</span>
                                    </div>
                                    <h3 className="text-xl font-bold uppercase mb-4 phosphor-glow">{mod.title}</h3>
                                    <p className="opacity-70 text-sm leading-relaxed">{mod.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* CODE BLOCK SECTION */}
                <section className="py-24 px-6 bg-[#090909] border-y border-[#33FF00]/20">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8 phosphor-glow">
                                Developer First
                            </h2>
                            <p className="mb-8 opacity-80 leading-relaxed">
                                Integrate our security protocols directly into your CI/CD pipeline.
                                Built for developers who live in the terminal.
                            </p>
                            <ul className="space-y-4 font-mono text-sm">
                                {['npm install @mainframe/secure', 'mainframe init --force', 'mainframe deploy'].map((cmd, i) => (
                                    <li key={i} className="flex gap-4 items-center border-l-2 border-[#33FF00] pl-4">
                                        <span className="opacity-50">$</span>
                                        <span>{cmd}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black border border-[#33FF00]/30 p-6 rounded shadow-[8px_8px_0_rgba(51,255,0,0.2)]">
                            <div className="flex gap-2 mb-4 opacity-50">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre className="text-xs overflow-x-auto text-[#33FF00]">
                                {`const Secure = require('mainframe');

// Initialize Protection
const firewall = new Secure.Firewall({
  mode: 'STRICT',
  logging: true,
  retries: 3
});

await firewall.connect();
console.log('System Secure.');`}
                            </pre>
                        </div>
                    </div>
                </section>


                {/* PRICING TABLE ASCII */}
                <section className="py-24 px-6 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 phosphor-glow">Access Levels</h2>

                    <div className="max-w-4xl mx-auto border-2 border-[#33FF00] p-1 md:p-2">
                        <div className="border border-[#33FF00] grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#33FF00]">

                            {/* Basic */}
                            <div className="p-8 hover:bg-[#33FF00]/10 transition-colors">
                                <h3 className="text-xl font-bold uppercase mb-2">User</h3>
                                <div className="text-4xl font-bold mb-6">$0</div>
                                <ul className="text-sm space-y-3 opacity-70 mb-8 text-left pl-4 list-disc">
                                    <li>Public Access</li>
                                    <li>Basic Encryption</li>
                                    <li>Community Support</li>
                                </ul>
                                <button className="w-full py-2 border border-[#33FF00] hover:bg-[#33FF00] hover:text-black uppercase text-sm font-bold">
                                    Login
                                </button>
                            </div>

                            {/* Pro */}
                            <div className="p-8 bg-[#33FF00]/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#33FF00] text-black text-[10px] px-2 py-0.5 font-bold uppercase">
                                    Recommended
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-2">Admin</h3>
                                <div className="text-4xl font-bold mb-6">$29<span className="text-sm opacity-50">/mo</span></div>
                                <ul className="text-sm space-y-3 opacity-70 mb-8 text-left pl-4 list-disc">
                                    <li>Root Access</li>
                                    <li>Advanced Firewall</li>
                                    <li>24/7 Monitoring</li>
                                    <li>Priority Uplink</li>
                                </ul>
                                <button className="w-full py-2 bg-[#33FF00] text-black hover:bg-white hover:text-black uppercase text-sm font-bold box-glow">
                                    Upgrade
                                </button>
                            </div>

                            {/* Enterprise */}
                            <div className="p-8 hover:bg-[#33FF00]/10 transition-colors">
                                <h3 className="text-xl font-bold uppercase mb-2">System</h3>
                                <div className="text-4xl font-bold mb-6">Custom</div>
                                <ul className="text-sm space-y-3 opacity-70 mb-8 text-left pl-4 list-disc">
                                    <li>Dedicated Node</li>
                                    <li>Custom Protocols</li>
                                    <li>On-premise Setup</li>
                                </ul>
                                <button className="w-full py-2 border border-[#33FF00] hover:bg-[#33FF00] hover:text-black uppercase text-sm font-bold">
                                    Contact
                                </button>
                            </div>

                        </div>
                    </div>
                </section>


                {/* FOOTER */}
                <footer className="py-12 px-6 border-t border-[#33FF00]/30 text-xs uppercase tracking-widest text-[#33FF00]/60">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Terminal size={16} />
                            <span>Mainframe Systems Inc.</span>
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-[#33FF00]">Info</a>
                            <a href="#" className="hover:text-[#33FF00]">Help</a>
                            <a href="#" className="hover:text-[#33FF00]">Exit</a>
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
}
