import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Leaf, Sprout, TreeDeciduous, Sun, Wind, Cloud } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S12NatureOrganicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S12 Eco-Luxury Design Tokens
    const colors = {
        bg: { primary: '#EBE9E4', secondary: '#E6E2DD', elevated: '#F5F5F0', accent: '#D5D9C8' }, // Warm Stone / Linen
        border: { subtle: 'rgba(74, 85, 53, 0.08)', strong: 'rgba(74, 85, 53, 0.15)' },
        text: { primary: '#2A3022', secondary: '#5C6152', muted: '#8F9485', inverse: '#FFFFFF' }, // Deep Moss
        brand: { primary: '#4A5535', secondary: '#7C856C', accent: '#A8B398' }, // Olive / Sage
        forest: { deep: '#1F2618', light: '#F1F3ED', leaf: '#4A5535' }
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: colors.bg.primary,
                color: colors.text.primary,
                fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
                letterSpacing: '-0.01em'
            }}>
            {/* Organic Background Blobs */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] opacity-[0.4] mix-blend-multiply blur-[80px] animate-pulse"
                    style={{ backgroundColor: colors.bg.secondary, borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] opacity-[0.3] mix-blend-multiply blur-[80px]"
                    style={{ backgroundColor: colors.brand.accent, borderRadius: '60% 40% 30% 70% / 50% 60% 50% 40%' }} />
            </div>
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: `${colors.bg.primary}ee`, borderBottom: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: `${spacing.md} ${spacing.lg}` }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                            <Leaf size={20} color="white" />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: colors.text.primary }}>Evergreen</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <span key={item} className="cursor-pointer transition-colors hover:opacity-70" style={{ fontSize: '14px', color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="transition-all hover:shadow-lg" style={{ padding: '10px 24px', backgroundColor: colors.brand.primary, color: colors.text.inverse, borderRadius: '24px', fontSize: '14px', fontWeight: 500 }}>
                                Get Started
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: colors.text.secondary }}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div style={{ borderTop: `1px solid ${colors.border.subtle}`, padding: spacing.lg, backgroundColor: colors.bg.elevated }}>
                        <div className="space-y-4">
                            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <div key={item} style={{ fontSize: '16px', color: colors.text.secondary, padding: '12px 0' }}>{item}</div>
                            ))}
                            <button className="w-full transition-all hover:shadow-lg mt-4" style={{ padding: '12px 24px', backgroundColor: colors.brand.primary, color: colors.text.inverse, borderRadius: '24px', fontSize: '14px', fontWeight: 500 }}>
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section className="relative min-h-[90vh] flex items-center pt-20" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                {/* Background Texture */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
                    style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }} />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        {/* Text Content */}
                        <div className="md:col-span-6 md:pr-12">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="h-px w-8 bg-[#4A5535]" />
                                <span className="text-xs uppercase tracking-[0.2em] text-[#5C6152] font-medium">Conscious Living</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-[#2A3022] leading-[1.1]">
                                <span className="italic block font-light text-[#7C856C]">Return to</span>
                                the Source.
                            </h1>

                            <p className="text-lg md:text-xl text-[#5C6152] leading-relaxed mb-12 font-light max-w-md">
                                A curated collection of organic elements designed to restore balance to your digital environment.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <button className="group flex items-center gap-4 bg-[#4A5535] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#3E472C] transition-colors">
                                    Explore Collection
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="flex items-center gap-2 px-8 py-4 text-[#4A5535] text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">
                                    Our Story
                                </button>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="md:col-span-6 relative">
                            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-t-[200px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3ab778ca3?q=80&w=2574&auto=format&fit=crop"
                                    alt="Organic Texture"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-[#4A5535] mix-blend-overlay opacity-20" />

                                {/* Floating Label */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-[#8F9485] mb-1">Featured</div>
                                            <div className="font-serif text-[#2A3022] text-lg">The Stone Collection</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-[#4A5535]/20 flex items-center justify-center">
                                            <Leaf size={16} className="text-[#4A5535]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D5D9C8] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-pulse" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#A8B398] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-pulse delay-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES (Organic Grid) ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif text-[#2A3022] mb-6">Rooted in Principles</h2>
                        <div className="w-24 h-1 bg-[#4A5535]/20 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Leaf, title: 'Sustainable Core', desc: 'Built with longevity and ecological balance in mind.', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5d2294c?q=80&w=2696&auto=format&fit=crop' },
                            { icon: Wind, title: 'Fluid Motion', desc: 'Interfaces that move with the ease of a summer breeze.', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2674&auto=format&fit=crop' },
                            { icon: Cloud, title: 'Natural Focus', desc: 'Removing the synthetic to reveal the essential beauty.', img: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=2574&auto=format&fit=crop' },
                        ].map((item, i) => (
                            <div key={item.title} className="group relative h-[400px] rounded-[32px] overflow-hidden">
                                {/* Background Image */}
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-[#1F2618]/40 group-hover:bg-[#1F2618]/20 transition-colors" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                                            <item.icon size={20} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                                        <p className="text-white/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== VALUE PROPOSITION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px' }}>
                        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            {[
                                { value: '100%', label: 'Sustainable', color: colors.brand.primary },
                                { value: '500+', label: 'Projects', color: colors.brand.accent },
                                { value: '0', label: 'Carbon Footprint', color: colors.brand.secondary },
                                { value: '∞', label: 'Possibilities', color: colors.brand.primary },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center" style={{ padding: '32px', backgroundColor: colors.bg.secondary, borderRadius: '20px' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: stat.color, marginBottom: '8px' }}>{stat.value}</div>
                                    <div style={{ fontSize: '13px', color: colors.text.muted }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 600, marginBottom: '24px' }}>Our Promise</h2>
                            <div className="space-y-5">
                                {[
                                    { title: 'Biophilic Design', desc: 'Connecting people with nature through every element.' },
                                    { title: 'Natural Materials', desc: 'Sustainably sourced, always earth-friendly.' },
                                    { title: 'Harmonious Spaces', desc: 'Balance between form, function, and feeling.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.brand.primary}15` }}>
                                            <Check size={16} color={colors.brand.primary} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '14px', color: colors.text.secondary }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING (Sanctuary Cards) ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.primary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif text-[#2A3022] mb-6">Invest in Calm</h2>
                        <p className="text-[#5C6152] font-light">Sustainable plans for organic growth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'Seedling', price: '$29', color: '#A8B398', features: ['Core Components', 'Basic Support', 'Community Access'] },
                            { name: 'Grove', price: '$79', color: '#4A5535', features: ['Advanced Features', 'Priority Support', 'Component Library', 'Design Files'], highlight: true },
                            { name: 'Forest', price: '$199', color: '#2A3022', features: ['Unlimited Access', '24/7 Support', 'Custom Integration', 'Team License'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className={`relative p-8 md:p-12 rounded-[32px] transition-all duration-500 ${plan.highlight ? 'bg-[#4A5535] text-white shadow-[0_20px_40px_rgba(74,85,53,0.2)] transform md:-translate-y-4' : 'bg-white text-[#2A3022] border border-[#E6E2DD]'}`}>
                                <h3 className="text-sm uppercase tracking-[0.25em] mb-8 font-medium opacity-80">{plan.name}</h3>
                                <div className="text-5xl font-serif mb-8">{plan.price}</div>
                                <ul className="space-y-4 mb-12">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm tracking-wide font-light opacity-90">
                                            <Check size={16} className={plan.highlight ? 'text-[#D5D9C8]' : 'text-[#4A5535]'} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl text-xs uppercase tracking-[0.2em] transition-colors ${plan.highlight ? 'bg-white text-[#4A5535] hover:bg-[#F5F5F0]' : 'bg-[#F5F5F0] text-[#2A3022] hover:bg-[#E6E2DD]'}`}>
                                    Start Growing
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'Is the design system sustainable?', a: 'Yes, we follow conscious design principles that prioritize long-term utility and minimal digital waste.' },
                            { q: 'Can I customize the organic shapes?', a: 'Every shape is SVG-based and fully customizable to fit your specific brand rhythm.' },
                            { q: 'What is "Evergreen" updates?', a: 'Our commitment to continuous growth—you receive all future components and refinements for life.' },
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden transition-all duration-300" style={{ borderRadius: '24px', backgroundColor: colors.bg.elevated, border: `1px solid ${colors.brand.primary}10`, boxShadow: expandedFaq === i ? '0 12px 24px -8px rgba(45,51,33,0.1)' : 'none' }}>
                                <button className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '18px', fontWeight: 600, color: colors.text.primary }}>{item.q}</span>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300" style={{ backgroundColor: `${colors.brand.primary}10`, transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <ChevronDown size={18} color={colors.brand.primary} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div style={{ padding: '0 24px 24px', fontSize: '16px', color: colors.text.secondary, lineHeight: 1.7, fontWeight: 400 }}>{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center" style={{ padding: '64px 40px', background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`, borderRadius: '32px', color: colors.text.inverse }}>
                    <h2 style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: 600, marginBottom: '16px' }}>Connect with Nature</h2>
                    <p style={{ fontSize: '17px', opacity: 0.9, marginBottom: '32px' }}>Ready to bring organic harmony to your space?</p>
                    <div className="flex justify-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row', maxWidth: '400px', margin: '0 auto' }}>
                        <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '16px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '15px' }} />
                        <button style={{ padding: '16px 32px', backgroundColor: colors.bg.elevated, color: colors.brand.primary, borderRadius: '12px', fontSize: '15px', fontWeight: 600 }}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: `${spacing.lg}`, borderTop: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-[14px] flex items-center justify-center transition-transform group-hover:rotate-[15deg] duration-500"
                            style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`, boxShadow: `0 8px 16px ${colors.brand.primary}30` }}>
                            <Leaf size={20} color="white" />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: colors.text.primary }}>Evergreen</span>
                    </div>
                    <span style={{ fontSize: '13px', color: colors.text.muted }}>© 2025 Natura Design. Made with 💚</span>
                    <div className="flex gap-4">
                        {[Leaf, TreeDeciduous, Sprout].map((Icon, i) => (
                            <Icon key={i} size={18} color={colors.text.muted} className="hover:opacity-70 cursor-pointer" />
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
