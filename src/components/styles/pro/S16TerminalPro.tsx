import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Terminal, Code, Cpu, Zap } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S16TerminalPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [typedText, setTypedText] = useState('');
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const fullText = '> Welcome to TerminalOS. The future is command-line.';

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    const colors = {
        bg: '#08090A',
        bgElevated: '#121417',
        primary: '#00FF66', // Matrix Green
        secondary: '#00E0FF', // Cyber Blue
        accent: '#FFB000', // Amber
        dim: '#00441B',
        muted: '#1A2F25',
        border: '#1E2D24',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden selection:bg-green-500/30"
            style={{
                backgroundColor: colors.bg,
                color: colors.primary,
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                textShadow: `0 0 5px ${colors.primary}33`
            }}>
            {/* CRT Overlay Effect */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]"
                style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
            <div className="fixed inset-0 pointer-events-none z-[101] animate-pulse opacity-[0.02]" style={{ backgroundColor: colors.primary }} />

            <header className="sticky top-0 z-40 backdrop-blur-sm" style={{ backgroundColor: `${colors.bg}CC`, borderBottom: `1px solid ${colors.border}` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: '12px 24px' }}>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-8 h-8 rounded border flex items-center justify-center transition-all group-hover:bg-green-500/10"
                            style={{ borderColor: colors.primary }}>
                            <Terminal size={14} />
                        </div>
                        <div className="flex flex-col -space-y-1">
                            <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em' }}>TERMINAL_<span style={{ color: colors.accent }}>OS</span></span>
                            <span style={{ fontSize: '10px', color: colors.dim, fontWeight: 500 }}>V.4.0.2-STABLE</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['./docs', './install', './pricing', './about'].map((item) => (
                                <span key={item} className="cursor-pointer transition-all hover:text-white hover:translate-y-[-1px]"
                                    style={{ fontSize: '13px', color: colors.primary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#00FF66]" />
                            <span style={{ fontSize: '11px', color: colors.primary, fontWeight: 700 }}>ONLINE</span>
                        </div>
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-green-500/30 rounded" style={{ color: colors.primary }}>
                                {menuOpen ? <X size={18} /> : <Terminal size={18} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in slide-in-from-top-4 duration-300" style={{ borderTop: `1px solid ${colors.border}`, padding: '24px', backgroundColor: colors.bgElevated }}>
                        {['./docs', './install', './pricing', './about'].map((item) => (
                            <div key={item} className="py-3 font-bold border-b border-white/5 active:bg-white/5" style={{ color: colors.primary }}>{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section style={{ padding: `${spacing.section} ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block px-3 py-1 rounded-sm mb-8 border border-green-500/20 bg-green-500/5" style={{ color: colors.primary, fontSize: '11px', fontWeight: 700 }}>
                        SYSTEM_AUTH_BYPASS: TRUE
                    </div>
                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr' }}>
                        <div>
                            <div className="flex items-center gap-2 mb-4" style={{ color: colors.dim, fontSize: '13px' }}>
                                <span style={{ color: colors.accent }}>┌─</span>
                                <span>[guest@terminal-os]</span>
                                <span style={{ color: colors.accent }}>─</span>
                                <span>(~/home)</span>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '32px' : '56px', fontWeight: 700, marginBottom: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                                <span style={{ color: colors.accent }}>$</span> {typedText}
                                <span className="animate-pulse bg-green-500/50" style={{ color: 'transparent' }}>_</span>
                            </h1>
                            <p style={{ fontSize: '18px', color: colors.primary, opacity: 0.8, marginBottom: '48px', maxWidth: '600px', lineHeight: 1.7 }}>
                                {'>'} Zero abstraction. Maximum output. Build at the speed of thought with our CLI-first development environment.
                            </p>
                            <div className="flex gap-6" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="flex items-center justify-center gap-3 px-8 py-4 rounded bg-green-500 text-black font-black transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] active:scale-95"
                                    style={{ fontSize: '15px' }}>
                                    $ npm install
                                </button>
                                <button className="flex items-center justify-center gap-3 px-8 py-4 rounded border border-green-500 text-green-500 font-bold transition-all hover:bg-green-500/10 active:scale-95"
                                    style={{ fontSize: '15px' }}>
                                    $ man docs
                                </button>
                            </div>
                        </div>

                        {!isMobile && (
                            <div className="p-8 rounded-lg border border-green-500/20 relative group bg-black/40 backdrop-blur-sm" style={{ boxShadow: `inset 0 0 40px rgba(0,255,102,0.05)` }}>
                                <div className="absolute top-2 left-4 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <pre className="mt-8 text-[13px] leading-relaxed overflow-x-auto" style={{ color: colors.primary }}>
                                    <code className="block">
                                        <span style={{ color: colors.dim }}>1 </span><span style={{ color: colors.secondary }}>async function</span> <span style={{ color: colors.accent }}>initServer</span>() {'{'}<br />
                                        <span style={{ color: colors.dim }}>2 </span>  <span style={{ color: colors.secondary }}>const</span> config = <span style={{ color: colors.secondary }}>await</span> fetchConfig();<br />
                                        <span style={{ color: colors.dim }}>3 </span>  console.<span style={{ color: colors.accent }}>log</span>(<span style={{ color: '#E6DB74' }}>'Booting OS...'</span>);<br />
                                        <span style={{ color: colors.dim }}>4 </span>  <span style={{ color: colors.secondary }}>return</span> config.<span style={{ color: colors.accent }}>start</span>();<br />
                                        <span style={{ color: colors.dim }}>5 </span>{'}'}<br /><br />
                                        <span style={{ color: colors.dim }}>6 </span><span style={{ color: colors.dim }}>// [SYSTEM] Listening on port 8080</span>
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-8" style={{ color: colors.dim, fontSize: '13px' }}>
                    <span style={{ color: colors.accent }}>┌─</span>
                    <span>[guest@terminal-os]</span>
                    <span style={{ color: colors.accent }}>─</span>
                    <span>(~/features)</span>
                </div>

                <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                    {[
                        { icon: Terminal, name: 'CORE_KERNEL', desc: 'Lightweight CLI architecture with zero GUI overhead for maximum performance.' },
                        { icon: Code, name: 'HACKABLE_SRC', desc: 'Fully open system. Extend every command with custom JavaScript modules.' },
                        { icon: Cpu, name: 'LOW_LATENCY', desc: 'Optimized execution engine with < 5ms response time across all operations.' },
                        { icon: Zap, name: 'PLUGIN_SYST', desc: 'Atomic plugin architecture. Hot-reload modules without restarting the shell.' },
                    ].map((item) => (
                        <div key={item.name} className="group p-8 rounded-lg border border-white/5 transition-all hover:border-green-500/30 hover:bg-green-500/[0.02]"
                            style={{ backgroundColor: colors.bgElevated }}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <item.icon size={20} className="group-hover:animate-pulse" />
                                    <span style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.1em' }}>{item.name}</span>
                                </div>
                                <span style={{ fontSize: '10px', color: colors.dim }}>[STATUS: OK]</span>
                            </div>
                            <p style={{ fontSize: '14px', color: colors.primary, opacity: 0.7, lineHeight: 1.6 }}>{`// ${item.desc}`}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 mb-12" style={{ color: colors.dim, fontSize: '13px' }}>
                        <span style={{ color: colors.accent }}>┌─</span>
                        <span>[guest@terminal-os]</span>
                        <span style={{ color: colors.accent }}>─</span>
                        <span>(~/pricing)</span>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'STDIO', price: '$0', cmd: 'apt-get install oss', features: ['Core CLI', 'Basic plugins', 'Community support'] },
                            { name: 'SUDO', price: '$29', cmd: 'apt-get install pro', features: ['Advanced shell', 'Priority support', 'Commercial license', 'Custom aliasing'] },
                            { name: 'ROOT', price: 'Custom', cmd: 'contact --sales', features: ['Cluster management', 'Dedicated support', 'Hotline access', 'Custom kernel'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-10 border transition-all hover:bg-green-500/[0.02]"
                                style={{
                                    backgroundColor: colors.bgElevated,
                                    borderColor: i === 1 ? colors.primary : colors.border,
                                    boxShadow: i === 1 ? `0 0 30px ${colors.primary}10` : 'none'
                                }}>
                                {i === 1 && (
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-green-500 text-black text-[10px] font-black italic">RECOMMENDED</div>
                                )}
                                <div className="mb-8">
                                    <div style={{ fontSize: '14px', fontWeight: 700, color: colors.accent, marginBottom: '8px' }}>{plan.name}</div>
                                    <div className="flex items-baseline gap-2">
                                        <span style={{ fontSize: '48px', fontWeight: 700 }}>{plan.price}</span>
                                        {plan.price !== 'Custom' && <span style={{ fontSize: '14px', color: colors.dim }}>/mo</span>}
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-3" style={{ fontSize: '13px', color: colors.primary, opacity: 0.8 }}>
                                            <span style={{ color: colors.accent }}>{'>'}</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-4 border border-green-500/50 text-green-500 font-bold transition-all hover:bg-green-500 hover:text-black active:scale-95"
                                    style={{ fontSize: '13px' }}>
                                    {`$ ${plan.cmd}`}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-2 mb-12" style={{ color: colors.dim, fontSize: '13px' }}>
                    <span style={{ color: colors.accent }}>┌─</span>
                    <span>[guest@terminal-os]</span>
                    <span style={{ color: colors.accent }}>─</span>
                    <span>(~/faq)</span>
                </div>

                <div className="space-y-4">
                    {[
                        { q: 'SYS_CAPABILITIES?', a: 'TerminalOS operates as a pure CLI wrapper. Supports all major shells including Bash, Zsh, and Fish.' },
                        { q: 'CROSS_PLATFORM?', a: 'Native support for Linux and MacOS. Windows supported via WSL2 or native PowerShell.' },
                        { q: 'GUI_MODE_SUPPORT?', a: 'Denied. Our philosophy centers on pure terminal efficiency. No graphical menus provided.' },
                    ].map((item, i) => (
                        <div key={i} className="border border-white/5 overflow-hidden" style={{ backgroundColor: colors.bgElevated }}>
                            <button className="w-full flex items-center justify-between p-6 text-left transition-all hover:bg-green-500/5" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                <span className="font-bold uppercase tracking-wider" style={{ fontSize: '14px' }}>[?] {item.q}</span>
                                <div className="transition-transform duration-300" style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <ChevronDown size={18} />
                                </div>
                            </button>
                            {expandedFaq === i && (
                                <div className="animate-in fade-in slide-in-from-top-2" style={{ padding: '0 24px 24px', fontSize: '14px', color: colors.primary, opacity: 0.8, lineHeight: 1.6 }}>
                                    {`&gt;&gt; ${item.a}`}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center border-2 border-green-500 relative overflow-hidden group"
                    style={{ padding: '80px 48px', boxShadow: `0 0 50px ${colors.primary}15` }}>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity"
                        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

                    <div className="relative z-10 font-black italic mb-8" style={{ fontSize: isMobile ? '32px' : '56px', letterSpacing: '-0.05em' }}>
                        INITIATE_SESSION://BUILD_NOW
                    </div>
                    <p className="mb-12 font-bold" style={{ fontSize: '18px', opacity: 0.8 }}>Ready to bridge the gap between human and machine?</p>
                    <button className="px-12 py-5 bg-green-500 text-black font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_#00FF66] hover:shadow-[0_0_50px_#00FF66]">
                        $ sudo start --now
                    </button>
                </div>
            </section>

            <footer style={{ padding: '64px 24px', borderTop: `1px solid ${colors.border}` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-8" style={{ flexDirection: isMobile ? 'column' : 'row', fontSize: '13px', fontWeight: 700 }}>
                    <div className="flex items-center gap-4">
                        <span style={{ color: colors.accent }}>::</span>
                        <span style={{ color: colors.primary }}>© 2025 TERMINAL_OS_KERNEL</span>
                    </div>
                    <div className="flex gap-8">
                        {['SSH_DOCS', 'GIT_REPOS', 'PRIV_POL'].map(item => (
                            <span key={item} className="cursor-pointer hover:text-white transition-colors">{item}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <span style={{ color: colors.dim }}>CONNECTION_STRENGTH:</span>
                        <span style={{ color: colors.accent }}>100%</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
