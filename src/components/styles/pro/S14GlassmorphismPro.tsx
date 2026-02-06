import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Zap, Shield } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S14GlassmorphismPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        glass: 'rgba(255, 255, 255, 0.45)',
        glassBorder: 'rgba(255, 255, 255, 0.4)',
        glassBorderDark: 'rgba(0, 0, 0, 0.1)',
        text: { primary: '#0F172A', secondary: '#475569', inverse: '#FFFFFF' },
        brand: {
            primary: '#6366F1', // Indigo
            secondary: '#8B5CF6', // Violet
            accent: '#D946EF', // Fuchsia
            glow: 'rgba(99, 102, 241, 0.3)'
        },
    };

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative" style={{ fontFamily: '"SF Pro Display", "Inter", system-ui, sans-serif' }}>
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FAFC]">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

                {/* Animated/Static Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-40" style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />
                <div className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-30" style={{ background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)' }} />
                <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-20" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full blur-[110px] opacity-25" style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }} />
            </div>

            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-4 z-50 mx-4">
                <div className="max-w-6xl mx-auto" style={{ ...glassStyle, padding: '10px 24px', borderRadius: '24px' }}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.accent})`, boxShadow: `0 4px 15px ${colors.brand.glow}` }}>
                                <Sparkles size={20} color="white" />
                            </div>
                            <span className="tracking-tight" style={{ fontSize: '20px', fontWeight: 700, color: colors.text.primary }}>Glassia</span>
                        </div>

                        {!isMobile && (
                            <nav className="flex items-center gap-8">
                                {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                                    <span key={item} className="cursor-pointer hover:text-indigo-600 transition-colors relative group" style={{ fontSize: '14px', fontWeight: 500, color: colors.text.secondary }}>
                                        {item}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
                                    </span>
                                ))}
                            </nav>
                        )}

                        <div className="flex items-center gap-3">
                            {!isMobile && (
                                <button className="transition-all hover:scale-105 active:scale-95" style={{ padding: '10px 24px', background: colors.text.primary, color: 'white', borderRadius: '14px', fontSize: '14px', fontWeight: 600 }}>
                                    Get Started
                                </button>
                            )}
                            {isMobile && (
                                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-xl transition-colors hover:bg-white/20" style={{ color: colors.text.primary }}>
                                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            )}
                        </div>
                    </div>

                    {menuOpen && isMobile && (
                        <div className="mt-4 pt-4 animate-in fade-in slide-in-from-top-4 duration-300" style={{ borderTop: `1px solid ${colors.glassBorder}` }}>
                            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                                <div key={item} className="px-2 py-3 active:bg-white/20 rounded-xl transition-colors" style={{ fontSize: '16px', fontWeight: 500, color: colors.text.secondary }}>{item}</div>
                            ))}
                            <button className="w-full mt-4 py-4" style={{ background: colors.text.primary, color: 'white', borderRadius: '16px', fontSize: '16px', fontWeight: 600 }}>
                                Get Started
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, perspective: '1000px' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '0' }}>
                        <div className="relative z-10 pr-12">
                            <div className="inline-flex items-center gap-2 mb-8" style={{ padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(20px)' }}>
                                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', color: colors.text.secondary, textTransform: 'uppercase' }}>Spatial Design Era</span>
                            </div>

                            <h1 className="tracking-tighter" style={{ fontSize: isMobile ? '48px' : '96px', fontWeight: 800, lineHeight: 0.95, color: colors.text.primary, marginBottom: '32px' }}>
                                Depth beyond <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Boundaries.</span>
                            </h1>

                            <p style={{ fontSize: '20px', lineHeight: 1.5, color: colors.text.secondary, marginBottom: '48px', maxWidth: '540px', fontWeight: 400 }}>
                                Experience the next dimension of interface design. Fully immersive, translucent, and beautiful.
                            </p>

                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="group relative overflow-hidden" style={{ padding: '16px 40px', borderRadius: '32px', background: '#0F172A', color: 'white', fontSize: '16px', fontWeight: 600 }}>
                                    <span className="relative z-10 flex items-center gap-2">
                                        Enter Experience
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                                <button className="transition-all hover:bg-white/50" style={{ padding: '16px 40px', borderRadius: '32px', background: 'rgba(255,255,255,0.3)', color: colors.text.primary, fontSize: '16px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.5)' }}>
                                    View Reel
                                </button>
                            </div>
                        </div>

                        {/* 3D Floating Glass Elements */}
                        <div className="relative h-[600px] flex items-center justify-center">
                            {/* Main Glass Card */}
                            <div className="absolute w-[400px] h-[500px] rounded-[48px] z-20 transition-transform duration-700 hover:scale-105"
                                style={{
                                    ...glassStyle,
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                                    transform: 'rotateY(-10deg) rotateX(5deg)',
                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.5)'
                                }}>
                                {/* Internal content */}
                                <div className="absolute inset-x-8 top-8 bottom-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center">
                                            <Sparkles size={24} className="text-white" />
                                        </div>
                                        <div className="px-3 py-1 bg-black/5 rounded-full text-xs font-bold text-white/50 border border-white/10">PRO</div>
                                    </div>
                                    <div>
                                        <div className="h-4 w-24 bg-white/40 rounded-full mb-4" />
                                        <div className="h-32 w-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl border border-white/20 backdrop-blur-md" />
                                    </div>
                                </div>
                            </div>

                            {/* Background Elements */}
                            <div className="absolute z-10 w-[300px] h-[400px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-[40px] blur-sm opacity-60"
                                style={{ transform: 'translate(100px, 40px) rotate(10deg)' }} />
                            <div className="absolute z-0 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px] -translate-x-20 -translate-y-20 animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES (Bento Grid) ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="tracking-tighter" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, color: colors.text.primary, marginBottom: '16px' }}>Glass Features</h2>
                        <p style={{ color: colors.text.secondary, fontSize: '18px' }}>Crafted for modern spatial interfaces</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Feature 1 - Large */}
                        <div className="md:col-span-2 relative overflow-hidden group" style={{ ...glassStyle, borderRadius: '40px', padding: '40px' }}>
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="w-16 h-16 rounded-3xl mb-6 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20">
                                    <Sparkles size={32} className="text-indigo-600" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#0F172A]">Real-time Blur</h3>
                                <p className="text-lg text-[#475569] max-w-md">Our engine calculates backdrop blur in real-time, ensuring 60fps performance on any device.</p>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700" />
                        </div>

                        {/* Feature 2 - Tall */}
                        <div className="md:row-span-2 relative overflow-hidden group" style={{ ...glassStyle, borderRadius: '40px', padding: '40px' }}>
                            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-16 h-16 rounded-3xl mb-auto flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20">
                                    <Zap size={32} className="text-purple-600" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#0F172A]">Instant <br />Render</h3>
                                <p className="text-lg text-[#475569]">Zero latency compositing for immediate visual feedback.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>

                        {/* Feature 3 - Standard */}
                        <div className="relative overflow-hidden group" style={{ ...glassStyle, borderRadius: '40px', padding: '40px' }}>
                            <div className="relative z-10">
                                <Shield size={40} className="text-pink-600 mb-6" />
                                <h3 className="text-2xl font-bold mb-2 text-[#0F172A]">Secure Layers</h3>
                                <p className="text-[#475569]">Encrypted visual data.</p>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-500" />
                        </div>

                        {/* Feature 4 - Standard */}
                        <div className="relative overflow-hidden group flex items-center justify-center text-center p-8" style={{ ...glassStyle, borderRadius: '40px', background: 'rgba(255,255,255,0.2)' }}>
                            <div>
                                <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">99%</h3>
                                <p className="text-[#475569] font-medium">Performance Score</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="tracking-tighter" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, color: colors.text.primary, marginBottom: '16px' }}>Pricing Plans</h2>
                        <p style={{ color: colors.text.secondary, fontSize: '18px' }}>Transparent pricing, literally.</p>
                    </div>

                    <div className="grid gap-8 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Basic', price: '$19', features: ['Core components', 'Basic support', '1 project'] },
                            { name: 'Vision', price: '$49', isPopular: true, features: ['All components', 'Priority support', 'Unlimited projects', 'Source files', 'Custom themes'] },
                            { name: 'Spatial', price: '$99', features: ['Everything in Pro', 'Team workspace', 'Dedicated support', 'Custom onboarding'] },
                        ].map((plan) => (
                            <div key={plan.name} className={`relative transition-all duration-300 group ${plan.isPopular ? 'scale-105 z-10' : 'hover:scale-102 hover:bg-white/40'}`}
                                style={{
                                    ...glassStyle,
                                    padding: '48px 40px',
                                    borderRadius: '40px',
                                    border: plan.isPopular ? '1px solid rgba(99, 102, 241, 0.5)' : glassStyle.border,
                                    boxShadow: plan.isPopular ? '0 20px 60px -12px rgba(99, 102, 241, 0.3)' : glassStyle.boxShadow
                                }}>
                                {plan.isPopular && (
                                    <div className="absolute top-0 right-0 p-6">
                                        <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
                                    </div>
                                )}
                                <h3 style={{ fontSize: '20px', fontWeight: 700, color: colors.text.primary, marginBottom: '32px', letterSpacing: '-0.02em' }}>{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="tracking-tighter" style={{ fontSize: '64px', fontWeight: 800, color: colors.text.primary }}>{plan.price}</span>
                                    <span style={{ fontSize: '18px', fontWeight: 500, color: colors.text.secondary }}>/mo</span>
                                </div>
                                <ul className="space-y-5 mb-12 text-left">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-4" style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: 500 }}>
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                                <Check size={12} className="text-indigo-600" strokeWidth={3} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full h-14 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg"
                                    style={{
                                        background: plan.isPopular ? '#0F172A' : 'rgba(255,255,255,0.5)',
                                        color: plan.isPopular ? 'white' : colors.text.primary
                                    }}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="tracking-tight" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, color: colors.text.primary }}>Common Questions</h2>
                    </div>

                    <div className="grid gap-4">
                        {[
                            { q: 'What browsers support glassmorphism?', a: 'All modern browsers (Chrome, Safari, Edge, Firefox) fully support backdrop-filter. We provide graceful fallbacks for older browser versions.' },
                            { q: 'Is it production-ready and accessible?', a: 'Absolutely. We ensure all glass elements meet WCAG AA contrast requirements by dynamically adjusting background opacities.' },
                            { q: 'How customizable is the effect?', a: 'Every aspect from blur radius, saturation levels, border thickness to grain intensity is fully exposed via CSS variables or props.' },
                        ].map((item, i) => (
                            <div key={i} className="transition-all duration-300" style={{ ...glassStyle, borderRadius: '24px', overflow: 'hidden', border: expandedFaq === i ? `1px solid ${colors.brand.primary}40` : `1px solid ${colors.glassBorder}` }}>
                                <button className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/10" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '17px', fontWeight: 600, color: colors.text.primary }}>{item.q}</span>
                                    <div className={`p-2 rounded-full transition-transform duration-300 ${expandedFaq === i ? 'bg-indigo-500 text-white rotate-180' : 'bg-white/20'}`}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out ${expandedFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div style={{ padding: '0 24px 24px', fontSize: '16px', color: colors.text.secondary, lineHeight: 1.6 }}>{item.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-5xl mx-auto relative overflow-hidden" style={{ ...glassStyle, padding: isMobile ? '64px 24px' : '100px 48px', borderRadius: '48px', textAlign: 'center' }}>
                    {/* Decorative Blobs for CTA */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/20 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/20 blur-[100px] -z-10" />

                    <h2 className="tracking-tight" style={{ fontSize: isMobile ? '36px' : '64px', fontWeight: 800, color: colors.text.primary, marginBottom: '24px' }}>Ready to Elevate <br />Your Interface?</h2>
                    <p className="mx-auto" style={{ fontSize: '20px', color: colors.text.secondary, marginBottom: '48px', maxWidth: '600px' }}>Join thousands of designers creating the next generation of glassmorphic websites.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/30" style={{ padding: '20px 48px', background: colors.text.primary, color: 'white', borderRadius: '20px', fontSize: '18px', fontWeight: 700 }}>
                            Get Started for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '64px 24px 48px' }}>
                <div className="max-w-6xl mx-auto pt-16" style={{ borderTop: `1px solid ${colors.glassBorder}` }}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.accent})` }}>
                                <Sparkles size={16} color="white" />
                            </div>
                            <span style={{ fontSize: '20px', fontWeight: 700, color: colors.text.primary }}>Glassia</span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium" style={{ color: colors.text.secondary }}>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Dribbble</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Legal</a>
                        </div>
                        <span style={{ fontSize: '14px', color: colors.text.secondary, fontWeight: 500 }}>© 2025 Glassia. Premium UI Experience ✨</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
