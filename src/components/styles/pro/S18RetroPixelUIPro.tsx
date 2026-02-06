import { useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown, ChevronUp, Gamepad2, Zap, Trophy, Heart } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S18RetroPixelUIPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#202028', // Dark Grey Cartridge
        bgElevated: '#2D2D35',
        primary: '#3BFFAC', // Mint Green (GameBoy Light)
        secondary: '#FF0055', // Rad Red
        accent: '#FFCC00', // Pac-Man Yellow
        text: '#E0E0E0',
        border: '#000000',
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

            {/* ========== HERO ========== */}
            <section style={{ padding: `100px ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="mb-12 animate-bounce-slow">
                        <div className="inline-block px-6 py-2 bg-black border-4 border-white/20" style={{ boxShadow: `6px 6px 0 ${colors.secondary}` }}>
                            <span style={{ fontSize: '16px', color: colors.primary, letterSpacing: '0.2em' }}>/// SYSTEM_READY ///</span>
                        </div>
                    </div>

                    <h1 style={{ fontSize: isMobile ? '40px' : '88px', fontFamily: '"Press Start 2P", cursive', lineHeight: 1.2, marginBottom: '40px', letterSpacing: '-0.05em', textShadow: `6px 6px 0 ${colors.bg}, 6px 6px 0 ${colors.secondary}` }}>
                        <span className="block mb-4" style={{ color: '#FFF' }}>INSERT</span>
                        <span style={{ color: colors.accent }}>COIN</span> TO START
                    </h1>

                    <p style={{ fontSize: '24px', color: colors.text, marginBottom: '64px', maxWidth: '640px', lineHeight: 1.6, fontFamily: '"VT323", monospace' }}>
                        &gt; A RETROGRADE DESIGN SYSTEM FOR THE MODERN WEB. <span className="animate-pulse">_</span>
                    </p>

                    <div className="flex gap-8 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="group relative px-12 py-6 bg-primary font-bold hover:translate-y-2 hover:shadow-none transition-all"
                            style={{
                                backgroundColor: colors.secondary,
                                color: '#FFF',
                                border: '4px solid #000',
                                boxShadow: `8px 8px 0 #000`,
                                fontSize: '20px',
                                fontFamily: '"Press Start 2P", cursive'
                            }}>
                            START GAME
                        </button>
                        <button className="px-12 py-6 border-4 transition-all hover:bg-white/10"
                            style={{
                                borderColor: '#FFF',
                                color: '#FFF',
                                border: '4px solid #FFF',
                                boxShadow: `8px 8px 0 #000`,
                                fontSize: '20px',
                                fontFamily: '"Press Start 2P", cursive'
                            }}>
                            OPTIONS
                        </button>
                    </div>

                    <div className="mt-24 p-6 bg-black/50 border-4 border-white/10 backdrop-blur-md rounded-sm inline-flex gap-12">
                        {['HIGH_SCORE: 999999', 'WORLD: 1-1', 'TIME: 042'].map(val => (
                            <div key={val} className="text-xl font-bold tracking-widest text-white/80 font-mono">{val}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== STATS ========== */}
            {/* ========== STATS ========== */}
            <section style={{ padding: '64px 24px', backgroundColor: colors.bgElevated, borderTop: `4px solid #FFF`, borderBottom: `4px solid #FFF` }}>
                <div className="max-w-6xl mx-auto grid gap-8" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
                    {[
                        { icon: Trophy, value: '999K', label: 'HI_SCORE', color: colors.accent },
                        { icon: Heart, value: '100%', label: 'HEALTH', color: colors.secondary },
                        { icon: Zap, value: 'MAX', label: 'POWER', color: colors.primary },
                        { icon: Gamepad2, value: '1UP', label: 'LIVES', color: '#00FF00' },
                    ].map((stat) => (
                        <div key={stat.label} className="group text-center p-8 bg-black border-4 border-white/10 transition-all hover:scale-105 active:scale-95"
                            style={{ boxShadow: `8px 8px 0 rgba(0,0,0,0.5)` }}>
                            <div className="mb-6 flex justify-center">
                                <stat.icon size={32} style={{ color: stat.color }} className="animate-pulse" />
                            </div>
                            <div className="font-black mb-2 tracking-widest font-mono" style={{ fontSize: '32px', color: stat.color, textShadow: `2px 2px 0 #000` }}>{stat.value}</div>
                            <div className="font-bold tracking-[0.2em] opacity-50 uppercase" style={{ fontSize: '14px', fontFamily: '"Press Start 2P", cursive' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-2 bg-white text-black mb-6" style={{ boxShadow: `8px 8px 0 ${colors.secondary}` }}>
                            <span className="font-black tracking-widest text-xs font-mono">POWER_UPS_AVAILABLE</span>
                        </div>
                        <h2 style={{ fontSize: isMobile ? '32px' : '64px', fontFamily: '"Press Start 2P", cursive', lineHeight: 1.2, textShadow: `4px 4px 0 ${colors.secondary}` }}>CORE_SYSTEMS</h2>
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        {[
                            { title: 'PIXEL_PERFECT', desc: 'Auto-aligns elements to the 8px grid.', color: colors.primary, icon: Zap },
                            { title: 'CRT_SHADER', desc: 'Simulates phosphors and scanlines.', color: colors.secondary, icon: Heart },
                            { title: 'CHIP_TUNES', desc: 'Audio engine for UI interactions.', color: colors.accent, icon: Trophy },
                            { title: 'SPRITE_LIB', desc: 'Includes 500+ 8-bit icons.', color: '#00FF00', icon: Gamepad2 },
                        ].map((item) => (
                            <div key={item.title} className="group relative bg-[#111] border-4 border-white/20 p-2 transition-all hover:-translate-y-2"
                                style={{ boxShadow: `12px 12px 0 #000` }}>
                                {/* Cartridge Label */}
                                <div className="h-full p-8 border-2 border-dashed border-white/10 flex flex-col items-start relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 bg-white text-black font-black text-xs">ROM_01</div>
                                    <div className="mb-6 p-4 bg-black border-2 border-white/20">
                                        <item.icon size={40} style={{ color: item.color }} />
                                    </div>
                                    <h3 className="font-bold mb-4 font-mono text-3xl" style={{ color: item.color }}>{item.title}</h3>
                                    <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#AAA' }}>{item.desc}</p>
                                </div>
                                {/* Cartridge Bottom */}
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-black opacity-50" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bgElevated, borderTop: `4px solid ${colors.primary}`, borderBottom: `4px solid ${colors.secondary}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontFamily: '"Press Start 2P", cursive', textShadow: '4px 4px 0 #000' }}>SELECT WORLD</h2>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'WORLD 1-1', price: 'FREE', color: colors.primary, feat: ['2 Players', '3 Lives', 'No Saves'] },
                            { name: 'WORLD 4-1', price: '$29', color: colors.secondary, feat: ['Multiplayer', '∞ Lives', 'Save State'], hot: true },
                            { name: 'BOSS RUSH', price: '$99', color: colors.accent, feat: ['Debug Mode', 'All Assets', 'God Mode'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="flex flex-col relative bg-black p-2 transition-all hover:-translate-y-4"
                                style={{
                                    boxShadow: plan.hot ? `0 0 0 4px ${plan.color}, 8px 8px 0 #000` : `4px 4px 0 #000`
                                }}>
                                <div className={`h-full p-8 border-4 flex flex-col items-center text-center`} style={{ borderColor: plan.color }}>
                                    {plan.hot && <span className="absolute -top-6 bg-white text-black px-4 py-1 font-black text-xs border-4 border-black animate-bounce">BEST VALUE</span>}

                                    <h3 className="font-black mb-8" style={{ fontSize: '24px', color: plan.color, fontFamily: '"Press Start 2P", cursive' }}>{plan.name}</h3>
                                    <div className="mb-8">
                                        <div style={{ fontSize: '48px', fontWeight: 900, textShadow: `4px 4px 0 #333` }}>{plan.price}</div>
                                    </div>

                                    <ul className="space-y-4 mb-12 w-full text-left">
                                        {plan.feat.map((f) => (
                                            <li key={f} className="flex items-center gap-3 font-mono text-lg text-white/80">
                                                <div className="w-2 h-2" style={{ backgroundColor: plan.color }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full py-4 text-black font-black font-mono text-xl hover:opacity-80 active:translate-y-1 transition-all"
                                        style={{ backgroundColor: plan.color, boxShadow: `4px 4px 0 #333` }}>
                                        SELECT
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontFamily: '"Press Start 2P", cursive' }}>HINT_SYSTEM</h2>
                    </div>

                    <div className="bg-black/80 border-4 border-white p-2" style={{ boxShadow: `8px 8px 0 #000` }}>
                        <div className="border-2 border-white/20 p-8">
                            {[
                                { q: 'HOW_TO_PLAY?', a: 'JUST CLICK AND DRAG. THE SYSTEM IS INTUITIVE LIKE AN NES CONTROLLER.' },
                                { q: 'IS_IT_RETRO?', a: 'YES. WE USE AUTHENTIC 8-BIT COLOR PALETTES AND FONTS.' },
                                { q: 'CHEAT_CODES?', a: 'TRY KONAMI CODE ON THE DASHBOARD :D' },
                            ].map((item, i) => (
                                <div key={i} className="mb-8 last:mb-0">
                                    <div className="flex items-start gap-4 mb-2 cursor-pointer hover:text-primary transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <div className="mt-1 animate-pulse" style={{ color: colors.accent }}>►</div>
                                        <div className="font-bold font-mono text-xl">{item.q}</div>
                                    </div>
                                    {expandedFaq === i && (
                                        <div className="pl-8 text-lg font-mono text-white/60 typing-effect">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
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
