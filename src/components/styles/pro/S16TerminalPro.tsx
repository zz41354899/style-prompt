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
        bg: '#0D0208', // Deep Void
        bgElevated: '#1A0B0C',
        primary: '#00FF41', // Phosphor Green
        secondary: '#008F11', // Darker Green
        accent: '#FF3C3C', // Error Red / Alert
        dim: '#003B00',
        muted: '#1A2F25',
        border: '#33FF00',
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

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block px-2 py-1 mb-8 border border-green-500/30 bg-green-500/10" style={{ color: colors.primary, fontSize: '11px', fontWeight: 700, fontFamily: 'monospace' }}>
                        [SYSTEM_READY] :: KERNEL_V.9.0.1
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr' }}>
                        <div>
                            {/* ASCII Art Logo (Hidden on mobile for space) */}
                            {!isMobile && (
                                <pre className="text-[10px] leading-[10px] mb-8 text-green-500/50 select-none whitespace-pre overflow-hidden">
                                    {`
  ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
  ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
     ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
     ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
     ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
     ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
`}
                                </pre>
                            )}

                            <h1 style={{ fontSize: isMobile ? '32px' : '56px', fontWeight: 700, marginBottom: '32px', lineHeight: 1.1, letterSpacing: '-0.02em', textShadow: '0 0 10px rgba(0,255,65,0.5)' }}>
                                <span style={{ color: colors.primary }}>usr@mnt:~$</span> {typedText}
                                <span className="animate-pulse bg-green-500 inline-block w-4 h-12 ml-2 align-middle" />
                            </h1>
                            <p style={{ fontSize: '18px', color: colors.primary, opacity: 0.8, marginBottom: '48px', maxWidth: '600px', lineHeight: 1.7, borderLeft: `2px solid ${colors.dim}`, paddingLeft: '16px' }}>
                                // A pure command-line interface for the modern web. <br />
                                // Bypass the GUI. Access the mainframe directly.
                            </p>
                            <div className="flex gap-6" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-black font-black transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] active:scale-95 uppercase tracking-widest text-sm">
                                    [ EXECUTE_INIT ]
                                </button>
                                <button className="flex items-center justify-center gap-3 px-8 py-4 border border-green-500 text-green-500 font-bold transition-all hover:bg-green-500/10 active:scale-95 uppercase tracking-widest text-sm">
                                    [ READ_MANUAL ]
                                </button>
                            </div>
                        </div>

                        {!isMobile && (
                            <div className="p-1 rounded-sm border border-green-500/30 relative group bg-black backdrop-blur-sm" style={{ boxShadow: `0 0 20px ${colors.dim}` }}>
                                <div className="absolute top-0 left-0 w-full h-8 bg-green-500/10 border-b border-green-500/20 flex items-center px-4 justify-between">
                                    <span className="text-xs text-green-500 font-bold">bash — 80x24</span>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full border border-green-500/50" />
                                        <div className="w-2 h-2 rounded-full border border-green-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                </div>
                                <div className="mt-10 p-4 font-mono text-sm h-full overflow-hidden">
                                    <div className="text-green-500/50 mb-2"># Initializing Protocol...</div>
                                    <div className="text-green-500 mb-1">
                                        <span className="text-white">{'>'}</span> npm install @terminal/core
                                    </div>
                                    <div className="text-white/70 mb-4">
                                        + @terminal/core@4.2.0<br />
                                        added 142 packages in 0.8s
                                    </div>

                                    <div className="text-green-500 mb-1">
                                        <span className="text-white">{'>'}</span> ./deploy-mainframe.sh --force
                                    </div>
                                    <div className="text-primary animate-pulse">
                                        [⣿⣿⣿⣿⣿⣿] 100% Uploading consciousness...
                                    </div>
                                </div>
                                {/* CRT Scanline for the terminal window */}
                                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-8" style={{ color: colors.dim, fontSize: '13px' }}>
                    <span style={{ color: colors.accent }}>┌─</span>
                    <span>[guest@terminal-os]</span>
                    <span style={{ color: colors.accent }}>─</span>
                    <span>(~/modules)</span>
                </div>

                <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                    {[
                        { icon: Terminal, name: 'KERNEL_CORE', desc: 'Direct hardware access. 0ms latency processing.', status: 'ACTIVE' },
                        { icon: Code, name: 'OPEN_SOURCE', desc: 'MIT Licensed. Fork, modify, and deploy at will.', status: 'PUBLIC' },
                        { icon: Cpu, name: 'MULTI_THREAD', desc: '128-core parallel execution pipeline enabled.', status: 'READY' },
                        { icon: Zap, name: 'NET_Runner', desc: 'Gibson-grade encryption protocols active.', status: 'SECURE' },
                    ].map((item, idx) => (
                        <div key={item.name} className="group p-6 border border-green-500/30 transition-all hover:bg-green-500/10 hover:border-green-500"
                            style={{ backgroundColor: 'rgba(0,20,0,0.4)', position: 'relative', overflow: 'hidden' }}>
                            {/* Corner markers */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500" />

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span style={{ color: colors.primary }}>{`0${idx + 1}`}</span>
                                    <span style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.1em', color: 'white' }}>{item.name}</span>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 border ${item.status === 'SECURE' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'}`}>
                                    [{item.status}]
                                </span>
                            </div>
                            <p style={{ fontSize: '14px', color: colors.primary, opacity: 0.7, lineHeight: 1.6, fontFamily: 'monospace' }}>
                                {`>> ${item.desc}`}
                            </p>
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
                        <span>(~/subscriptions)</span>
                    </div>

                    <div className="grid gap-0 border border-green-500/20" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'LOCALHOST', price: '$0.00', cmd: 'apt-get install free', features: ['Single User', '128MB Storage', 'Community Wiki'] },
                            { name: 'SYSADMIN', price: '$29.99', isRec: true, cmd: 'sudo apt-get install pro', features: ['Root Access', 'Unlimited Storage', 'Priority Ticket'] },
                            { name: 'MAINFRAME', price: 'CUSTOM', cmd: 'contact --enterprise', features: ['Cluster Deploy', '24/7 Hotline', 'Custom Kernel'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-8 md:border-r border-green-500/20 last:border-r-0 hover:bg-green-500/5 transition-colors"
                                style={{
                                    backgroundColor: i === 1 ? 'rgba(0, 255, 65, 0.03)' : 'transparent',
                                }}>
                                {i === 1 && (
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-pulse" />
                                )}
                                <div className="mb-8 font-mono text-center">
                                    <div style={{ fontSize: '12px', color: colors.dim, marginBottom: '8px' }}>[{plan.name}_TIER]</div>
                                    <div className="flex items-center justify-center gap-2">
                                        <span style={{ fontSize: '32px', fontWeight: 700, color: i === 1 ? colors.primary : 'white' }}>{plan.price}</span>
                                        {plan.price !== 'CUSTOM' && <span style={{ fontSize: '12px', color: colors.dim }}>/mo</span>}
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 pl-4 border-l border-green-500/10">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-3" style={{ fontSize: '12px', color: colors.primary, opacity: 0.9 }}>
                                            <span style={{ color: colors.accent }}>+</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 border border-green-500 text-green-500 font-bold transition-all hover:bg-green-500 hover:text-black active:scale-95 text-xs tracking-wider uppercase">
                                    <span className="animate-pulse mr-2">{'>'}</span>
                                    {plan.cmd}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-3xl mx-auto mb-20">
                <div className="flex items-center gap-2 mb-8" style={{ color: colors.dim, fontSize: '13px' }}>
                    <span style={{ color: colors.accent }}>┌─</span>
                    <span>[guest@terminal-os]</span>
                    <span style={{ color: colors.accent }}>─</span>
                    <span>(~/man/faq)</span>
                </div>

                <div className="border border-green-500/20 bg-black/50 p-6 font-mono text-sm">
                    <div className="mb-4 text-green-500 opacity-50 border-b border-green-500/20 pb-2">
                        MANUAL PAGE: FAQ(1) -- SECTION 1: GENERAL
                    </div>

                    <div className="space-y-6">
                        {[
                            { q: 'NAME', a: 'TerminalOS -- A pure CLI wrapper operating system.' },
                            { q: 'SYNOPSIS', a: 'terminal [OPTION]... [FILE]...' },
                            { q: 'DESCRIPTION', a: 'TerminalOS is designed for efficiency. No GUIs. No bloat. Just pure input/output streams.' },
                            { q: 'COMPATIBILITY', a: 'Full support for POSIX standards. Works on all major architectures (x86, ARM).' },
                            { q: 'BUGS', a: 'Report bugs to /dev/null or our issue tracker.' },
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="font-bold text-white mb-1" style={{ fontSize: '13px' }}>{item.q}</div>
                                <div className="pl-8 text-green-500 opacity-80 leading-relaxed" style={{ fontSize: '13px' }}>{item.a}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-4 border-t border-green-500/20 text-xs text-green-500/40 text-center animate-pulse">
                        PRESS [Q] TO QUIT
                    </div>
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
