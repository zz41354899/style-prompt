import { useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown, ChevronUp, Gamepad2, Zap, Trophy, Heart } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S18RetroPixelUIPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#0A0612', // Deep Space
        bgElevated: '#1A1225',
        primary: '#00F2FF', // Arcade Cyan
        secondary: '#FF00D4', // Pixel Magenta
        accent: '#FFF200', // Power-up Yellow
        text: '#F0F0F0',
        border: '#FFFFFF20',
    };

    const spacing = responsive.spacing;
    const pixelShadow = `4px 4px 0px rgba(0,0,0,0.5)`;
    const neonCyan = `0 0 15px rgba(0, 242, 255, 0.4)`;
    const neonMagenta = `0 0 15px rgba(255, 0, 212, 0.4)`;

    return (
        <div className="min-h-screen relative overflow-hidden selection:bg-magenta-500/30"
            style={{
                backgroundColor: colors.bg,
                color: colors.text,
                fontFamily: '"VT323", monospace',
                imageRendering: 'pixelated'
            }}>
            {/* Google Fonts Import */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
            `}} />

            {/* CRT Scanline Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05]"
                style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 4px 100%' }} />

            {/* Scrolling Starfield Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0))` }} />
            {/* ========== HEADER ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-sm"
                style={{ backgroundColor: `${colors.bg}CC`, borderBottom: `4px solid ${colors.secondary}`, boxShadow: neonMagenta }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: '12px 24px' }}>
                    <div className="flex items-center gap-4 group cursor-pointer active:translate-y-1 transition-all">
                        <div className="w-10 h-10 bg-magenta-500 flex items-center justify-center relative"
                            style={{ backgroundColor: colors.secondary, boxShadow: `4px 4px 0 #000, 8px 8px 0 ${colors.primary}40` }}>
                            <Gamepad2 size={20} color="#000" />
                        </div>
                        <span style={{ fontSize: '24px', fontWeight: 900, fontFamily: '"Press Start 2P", cursive', letterSpacing: '-0.1em' }}>
                            <span style={{ color: colors.primary }}>PX</span>LOT
                        </span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['INSERT_COIN', 'LEVELS', 'TOP_PLAYERS', 'QUEST'].map((item) => (
                                <span key={item} className="cursor-pointer font-bold transition-all hover:text-white hover:scale-110 active:translate-y-1"
                                    style={{ fontSize: '14px', letterSpacing: '0.05em', color: colors.primary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-6">
                        <div className="px-3 py-1 bg-black/40 border-2 border-primary/30 flex items-center gap-2" style={{ borderColor: colors.primary }}>
                            <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ backgroundColor: colors.accent }} />
                            <span style={{ fontSize: '14px', color: colors.accent }}>CREDITS: 99</span>
                        </div>
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-4 border-black bg-magenta-500" style={{ backgroundColor: colors.secondary }}>
                                {menuOpen ? <X size={20} color="#000" /> : <Menu size={20} color="#000" />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in slide-in-from-top-4 duration-300"
                        style={{ borderTop: `4px solid ${colors.primary}`, padding: '32px', backgroundColor: colors.bgElevated }}>
                        {['START', 'OPTIONS', 'SCORES', 'QUIT'].map((item) => (
                            <div key={item} className="py-4 text-xl font-bold border-b-2 border-white/5 active:bg-white/5" style={{ color: colors.primary }}>{`> ${item}`}</div>
                        ))}
                    </div>
                )}
            </header>

            <section style={{ padding: `100px ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="mb-12 animate-bounce-slow">
                        <div className="inline-block p-4 border-4 border-dashed border-primary/40 bg-black/40" style={{ boxShadow: `0 0 20px ${colors.primary}20` }}>
                            <span style={{ fontSize: '14px', color: colors.accent, letterSpacing: '0.2em' }}>/// PLAYER_ONE_READY ///</span>
                        </div>
                    </div>

                    <h1 style={{ fontSize: isMobile ? '40px' : '72px', fontFamily: '"Press Start 2P", cursive', lineHeight: 1.4, marginBottom: '40px', letterSpacing: '-0.1em' }}>
                        <span style={{ color: colors.secondary, textShadow: `4px 4px 0 #000, ${neonMagenta}` }}>NEXT_GEN</span><br />
                        <span style={{ color: colors.primary, textShadow: `4px 4px 0 #000, ${neonCyan}` }}>8-BIT_ENGINE</span>
                    </h1>

                    <p style={{ fontSize: '20px', color: colors.text, opacity: 0.8, marginBottom: '56px', maxWidth: '600px', lineHeight: 1.8, fontWeight: 500 }}>
                        ELEVATE YOUR PIXELS TO THE NEXT LEVEL. CRYSTAL CLEAR ARCADE PERFORMANCE ON EVERY DEVICE.
                    </p>

                    <div className="flex gap-8 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="group relative px-10 py-5 bg-cyan-500 font-bold hover:translate-x-1 hover:translate-y-1 active:translate-y-2 transition-all"
                            style={{
                                backgroundColor: colors.primary,
                                color: '#000',
                                boxShadow: `4px 4px 0 #000, 8px 8px 0 ${colors.secondary}80`,
                                fontSize: '18px'
                            }}>
                            <div className="flex items-center gap-4">
                                <span>INSERT_COIN</span>
                                <ArrowRight size={20} />
                            </div>
                        </button>
                        <button className="px-10 py-5 border-4 transition-all hover:bg-white/5"
                            style={{
                                borderColor: colors.secondary,
                                color: colors.secondary,
                                boxShadow: `4px 4px 0 #000`,
                                fontSize: '18px'
                            }}>
                            VIEW_DEMO
                        </button>
                    </div>

                    <div className="mt-24 grid grid-cols-3 gap-12 border-4 border-white/5 p-8 bg-black/20 backdrop-blur-sm">
                        {['FPS: 144', 'GPU: 100%', 'MEM: OK'].map(val => (
                            <div key={val} className="text-xs font-bold tracking-widest opacity-60">{val}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== STATS ========== */}
            <section style={{ padding: '64px 24px', backgroundColor: colors.bgElevated, borderTop: `4px solid ${colors.secondary}`, borderBottom: `4px solid ${colors.primary}`, boxShadow: `inset 0 0 50px rgba(0,0,0,0.5)` }}>
                <div className="max-w-6xl mx-auto grid gap-8" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
                    {[
                        { icon: Trophy, value: '999K', label: 'HI_SCORE', color: colors.accent },
                        { icon: Heart, value: '100%', label: 'HEALTH', color: colors.secondary },
                        { icon: Zap, value: 'MAX', label: 'POWER', color: colors.primary },
                        { icon: Gamepad2, value: '1UP', label: 'LIVES', color: '#00FF00' },
                    ].map((stat) => (
                        <div key={stat.label} className="group text-center p-8 bg-black/40 border-2 border-white/10 transition-all hover:border-white/30 hover:-translate-y-2 active:translate-y-0"
                            style={{ boxShadow: `4px 4px 0 #000` }}>
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 border-2 border-dashed border-white/20 group-hover:border-white/40 transition-all">
                                    <stat.icon size={28} style={{ color: stat.color, filter: `drop-shadow(0 0 8px ${stat.color}80)` }} />
                                </div>
                            </div>
                            <div className="font-black mb-2 tracking-tighter" style={{ fontSize: '32px', color: stat.color, textShadow: `2px 2px 0 #000` }}>{stat.value}</div>
                            <div className="font-bold tracking-[0.2em] opacity-50 uppercase" style={{ fontSize: '12px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-2 border-2 border-primary mb-6" style={{ boxShadow: `4px 4px 0 ${colors.secondary}` }}>
                            <span className="font-black tracking-widest text-xs" style={{ color: colors.primary }}>POWER_UPS_AVAILABLE</span>
                        </div>
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontFamily: '"Press Start 2P", cursive', lineHeight: 1.2 }}>CORE_SYSTEMS</h2>
                    </div>

                    <div className="grid gap-10" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        {[
                            { title: 'PIXEL_GRID', desc: 'PERFECT 8X8 ALIGNMENT ENGINE FOR SUB-PIXEL PRECISION.', color: colors.primary, icon: Zap },
                            { title: 'NEON_RENDER', desc: 'HIGH-INTENSITY GLOW SHADERS FOR ARCADE-PERFECT VISUALS.', color: colors.secondary, icon: Heart },
                            { title: 'CHIP_OS', desc: 'FASTEST KERNEL EXECUTION IN THE RETRO ECOSYSTEM.', color: colors.accent, icon: Trophy },
                            { title: 'SPRITE_MAX', desc: 'DYNAMIC OBJECT LIFECYCLE MANAGEMENT AND ANIMATION.', color: '#00FF00', icon: Gamepad2 },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-10 bg-black/20 border-4 border-white/5 transition-all hover:bg-white/5 hover:border-white/10"
                                style={{ boxShadow: `8px 8px 0 #000` }}>
                                <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 group-hover:bg-primary transition-all" style={{ backgroundColor: item.color }} />
                                <div className="mb-8 p-4 inline-block bg-black/40 border-2 border-white/10" style={{ borderColor: `${item.color}40` }}>
                                    <item.icon size={32} style={{ color: item.color }} />
                                </div>
                                <h3 className="font-bold mb-4" style={{ fontSize: '24px', letterSpacing: '0.1em', color: item.color }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bgElevated, borderTop: `4px solid ${colors.primary}`, borderBottom: `4px solid ${colors.secondary}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontFamily: '"Press Start 2P", cursive' }}>STORE_MODE</h2>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'GUEST_PASS', price: 'FREE', color: colors.primary, feat: ['Limited Play', 'Ads', 'Public Sockets'] },
                            { name: 'PRO_PLAYER', price: '$29', color: colors.secondary, feat: ['Unlimited Credits', 'No Ads', 'Private Lobby'], hot: true },
                            { name: 'BOSS_LEVEL', price: '$99', color: colors.accent, feat: ['VIP Servers', 'Source Code', 'Dev Support'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="flex flex-col relative"
                                style={{
                                    padding: '64px 40px',
                                    backgroundColor: plan.hot ? colors.bg : 'transparent',
                                    border: `4px solid ${plan.hot ? plan.color : 'rgba(255,255,255,0.1)'}`,
                                    boxShadow: plan.hot ? `0 0 30px ${plan.color}20, 8px 8px 0 #000` : `8px 8px 0 #000`
                                }}>
                                {plan.hot && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black font-black text-xs tracking-widest whitespace-nowrap border-2 border-black animate-pulse shadow-sm">MOST_POPULAR</div>}
                                <div className="mb-8 font-black tracking-widest text-center" style={{ fontSize: '18px', color: plan.color }}>{plan.name}</div>
                                <div className="mb-12 text-center">
                                    <span style={{ fontSize: '48px', fontWeight: 900 }}>{plan.price}</span>
                                    <span style={{ fontSize: '14px', opacity: 0.4, marginLeft: '4px' }}>/CREDIT</span>
                                </div>
                                <ul className="space-y-6 mb-16 flex-grow">
                                    {plan.feat.map((f) => (
                                        <li key={f} className="flex items-center gap-4 font-bold" style={{ fontSize: '14px' }}>
                                            <ArrowRight size={16} style={{ color: plan.color }} />
                                            <span className="opacity-70">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-5 font-bold transition-all hover:scale-105 active:scale-95"
                                    style={{
                                        backgroundColor: plan.color,
                                        color: '#000',
                                        boxShadow: `4px 4px 0 #000`,
                                        fontSize: '16px'
                                    }}>
                                    PURCHASE_COINS
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontFamily: '"Press Start 2P", cursive' }}>HELP_MENU</h2>
                    </div>

                    <div className="border-4 border-white/5 bg-black/20 backdrop-blur-md" style={{ boxShadow: `8px 8px 0 #000` }}>
                        {[
                            { q: 'WHAT IS PIXEL_UI_PRO?', a: 'A HIGH-PERFORMANCE REACT DESIGN SYSTEM BUILT ON 8-BIT PRINCIPLES AND NEON AESTHETICS.' },
                            { q: 'COMPATIBILITY_MODE?', a: 'FULLY SUPPORTS ALL MODERN BROWSERS WHILE MAINTAINING RETRO VISUAL FIDELITY.' },
                            { q: 'INPUT_SYSTEMS?', a: 'NATIVE KEYBOARD AND GAMEPAD SUPPORT INCLUDED. PLUG AND PLAY READY.' },
                        ].map((item, i) => (
                            <div key={i} className="transition-all hover:bg-white/5 group"
                                style={{ borderBottom: i < 2 ? `4px solid rgba(255,255,255,0.05)` : 'none' }}>
                                <button className="w-full flex items-center justify-between p-10 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold group-hover:text-primary transition-colors" style={{ fontSize: '18px', color: colors.text }}>{`[0${i + 1}] ${item.q}`}</span>
                                    <div className="w-10 h-10 border-2 border-white/10 flex items-center justify-center group-hover:border-primary transition-all overflow-hidden"
                                        style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none' }}>
                                        <ChevronDown size={24} className="group-hover:text-primary" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-4" style={{ padding: '0 40px 40px', fontSize: '16px', lineHeight: 1.8, opacity: 0.5 }}>
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bgElevated, borderTop: `4px solid #FFF200` }}>
                <div className="max-w-4xl mx-auto text-center relative overflow-hidden p-16 border-4 border-yellow-400 group"
                    style={{ backgroundColor: colors.bg, boxShadow: `16px 16px 0 #000`, borderColor: colors.accent }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 opacity-20 animate-pulse" />
                    <div className="mb-12 flex justify-center gap-12 items-center">
                        <Heart size={48} className="animate-pulse" style={{ color: colors.secondary }} />
                        <div className="font-black text-6xl animate-bounce" style={{ color: colors.accent }}>X3</div>
                        <Gamepad2 size={48} className="animate-pulse shadow-glow" style={{ color: colors.primary }} />
                    </div>
                    <h2 className="mb-12" style={{ fontSize: isMobile ? '32px' : '48px', fontFamily: '"Press Start 2P", cursive', lineHeight: 1.4 }}>
                        INSERT_COIN_TO_<br />
                        <span className="text-white" style={{ textShadow: `0 0 20px ${colors.accent}80` }}>CONTINUE?</span>
                    </h2>
                    <div className="flex flex-col items-center gap-8">
                        <button className="px-16 py-6 bg-yellow-400 font-black text-2xl hover:scale-110 active:scale-95 transition-all"
                            style={{
                                backgroundColor: colors.accent,
                                color: '#000',
                                boxShadow: `4px 4px 0 #000, 8px 8px 0 ${colors.secondary}`
                            }}>
                            START_MISSION
                        </button>
                        <div className="font-bold tracking-widest text-white/40 animate-pulse">PRESS START TO BEGIN</div>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '80px 24px', borderTop: `8px solid #000` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-start gap-12" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6 bg-primary" style={{ backgroundColor: colors.primary, boxShadow: `2px 2px 0 #000` }} />
                            <span style={{ fontSize: '24px', fontWeight: 900, fontFamily: '"Press Start 2P", cursive' }}>PX LOT</span>
                        </div>
                        <p className="max-w-xs font-bold leading-relaxed opacity-40 uppercase tracking-widest" style={{ fontSize: '11px' }}>
                            NEXT GEN PIXEL ENGINE FOR MODERN ARCADE EXPERIENCE. BUILT FOR GLORY.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                        {['SYSTEM', 'STAGES', 'QUEST'].map(cat => (
                            <div key={cat}>
                                <div className="font-black mb-6 text-xs tracking-widest uppercase opacity-40" style={{ color: colors.primary }}>{cat}</div>
                                {['Manual', 'Status', 'Reset'].map(item => (
                                    <div key={item} className="mb-3 font-bold text-sm cursor-pointer hover:text-white transition-colors">{`> ${item}`}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-end gap-2 uppercase font-black" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
                        <span>© 2025 PIXEL_LOGIC</span>
                        <span style={{ color: colors.secondary }}>GAME_STATE: SAVED</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
