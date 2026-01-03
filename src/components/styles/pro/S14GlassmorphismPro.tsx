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
        backgroundColor: colors.glass,
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        border: `1px solid ${colors.glassBorder}`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
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
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '80px' }}>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 mb-8" style={{ padding: '8px 20px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '100px', border: `1px solid ${colors.glassBorder}`, backdropFilter: 'blur(10px)' }}>
                                <Sparkles size={14} className="text-indigo-600" />
                                <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em', color: colors.text.primary, textTransform: 'uppercase' }}>The Future of UI</span>
                            </div>
                            <h1 className="tracking-tight" style={{ fontSize: isMobile ? '42px' : '72px', fontWeight: 800, lineHeight: 1, color: colors.text.primary, marginBottom: '28px' }}>
                                Design with <br />
                                <span style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Glass Effects</span>
                            </h1>
                            <p style={{ fontSize: '18px', lineHeight: 1.6, color: colors.text.secondary, marginBottom: '40px', maxWidth: '540px' }}>
                                Create stunning interfaces with premium frosted glass aesthetics. Depth, blur, and transparency combined for the ultimate user experience.
                            </p>
                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20" style={{ padding: '18px 36px', background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`, color: 'white', borderRadius: '20px', fontSize: '16px', fontWeight: 600 }}>
                                    Explore Now
                                    <ArrowRight size={20} />
                                </button>
                                <button className="transition-all hover:bg-white/40" style={{ padding: '18px 36px', backgroundColor: 'rgba(255,255,255,0.2)', border: `1px solid ${colors.glassBorder}`, borderRadius: '20px', backdropFilter: 'blur(10px)', fontSize: '16px', fontWeight: 600, color: colors.text.primary }}>
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-400 rounded-full blur-[80px] opacity-20 animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400 rounded-full blur-[60px] opacity-20 animate-pulse delay-700" />

                            <div className="relative group transition-transform duration-500 hover:scale-105" style={{ width: '90%', aspectRatio: '1', ...glassStyle, borderRadius: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="absolute inset-0 rounded-[48px] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                </div>
                                <Sparkles size={120} color={colors.brand.primary} strokeWidth={0.5} className="relative z-10 drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="tracking-tight" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, color: colors.text.primary, marginBottom: '16px' }}>Glass Features</h2>
                        <p style={{ color: colors.text.secondary, fontSize: '18px' }}>Crafted for modern design systems</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Sparkles, title: 'Frosted Glass', desc: 'Advanced backdrop-filter blur effects that add literal depth and sophistication to any interface.' },
                            { icon: Zap, title: 'Performance', desc: 'GPU-accelerated blur effects optimized for butter-smooth scrolling and 60fps interaction.' },
                            { icon: Shield, title: 'Accessibility', desc: 'Thoughtfully engineered to maintain high contrast and WCAG compliance across all glass layers.' },
                        ].map((item) => (
                            <div key={item.title} className="group transition-all hover:-translate-y-2" style={{ ...glassStyle, padding: '40px 32px', borderRadius: '32px' }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 shadow-inner" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}15, ${colors.brand.secondary}15)`, border: `1px solid ${colors.brand.primary}10` }}>
                                    <item.icon size={28} color={colors.brand.primary} strokeWidth={1.5} />
                                </div>
                                <h3 className="tracking-tight" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '14px', color: colors.text.primary }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="tracking-tight" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, color: colors.text.primary, marginBottom: '16px' }}>Pricing Plans</h2>
                        <p style={{ color: colors.text.secondary, fontSize: '18px' }}>Choose the perfect scale for your design needs</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', alignItems: 'center' }}>
                        {[
                            { name: 'Basic', price: '$19', features: ['Core components', 'Basic support', '1 project'] },
                            { name: 'Professional', price: '$49', isPopular: true, features: ['All components', 'Priority support', 'Unlimited projects', 'Source files', 'Custom themes'] },
                            { name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Team workspace', 'Dedicated support', 'Custom onboarding'] },
                        ].map((plan) => (
                            <div key={plan.name} className={`relative transition-all duration-300 ${plan.isPopular ? 'scale-105 z-10' : 'hover:scale-102 hover:bg-white/40'}`} style={{ ...glassStyle, padding: plan.isPopular ? '56px 40px' : '48px 32px', borderRadius: '40px', border: plan.isPopular ? `2px solid ${colors.brand.primary}` : `1px solid ${colors.glassBorder}` }}>
                                {plan.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 rounded-full shadow-lg" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.accent})`, color: 'white', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Most Popular
                                    </div>
                                )}
                                <h3 style={{ fontSize: '18px', fontWeight: 600, color: plan.isPopular ? colors.brand.primary : colors.text.secondary, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8" style={{ color: colors.text.primary }}>
                                    <span style={{ fontSize: '56px', fontWeight: 800 }}>{plan.price}</span>
                                    <span style={{ fontSize: '18px', fontWeight: 500, opacity: 0.6 }}>/mo</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-left">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3" style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: 500 }}>
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                                <Check size={14} color={colors.brand.primary} strokeWidth={3} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full transition-all active:scale-95" style={{ padding: '16px', borderRadius: '18px', fontSize: '16px', fontWeight: 700, background: plan.isPopular ? `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` : 'rgba(255,255,255,0.3)', color: plan.isPopular ? 'white' : colors.text.primary, border: plan.isPopular ? 'none' : `1px solid ${colors.glassBorder}`, boxShadow: plan.isPopular ? `0 10px 30px ${colors.brand.glow}` : 'none' }}>
                                    {plan.isPopular ? 'Start Free Trial' : 'Get Started'}
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
