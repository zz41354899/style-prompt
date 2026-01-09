import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Heart, Activity, Stethoscope, ShieldCheck } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S83HealthMedicalPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFFFF', surface: '#F0FDFA', text: '#134E4A', muted: '#5B7D78', teal: '#14B8A6', navy: '#0F172A', mint: '#99F6E4', blue: '#0EA5E9' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Nunito", "Open Sans", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: '#E0F2F1', backgroundColor: colors.bg }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Heart size={24} style={{ color: colors.teal }} />
                        <span className="text-lg font-bold">MedCare</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Services', 'Doctors', 'Contact'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-teal-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-semibold text-white rounded-full" style={{ backgroundColor: colors.teal }}>Book Now</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: '#E0F2F1', backgroundColor: colors.surface }}>
                        {['Services', 'Doctors', 'Contact'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-semibold text-white rounded-full" style={{ backgroundColor: colors.teal }}>Book Now</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ backgroundColor: 'white' }}>
                        <Activity size={14} style={{ color: colors.teal }} />
                        <span className="text-sm font-medium" style={{ color: colors.teal }}>Healthcare Excellence</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.text }}>
                        Your Health, <span style={{ color: colors.teal }}>Our Priority</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Clean medical aesthetics with calming teal tones and professional healthcare feel.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-semibold text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.teal }}>Book Appointment <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-semibold rounded-full" style={{ backgroundColor: 'white', color: colors.teal }}>Find Doctor</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.text }}>Our Services</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Heart, title: 'Cardiology' }, { icon: Activity, title: 'Diagnostics' }, { icon: ShieldCheck, title: 'Preventive Care' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: colors.teal }} />
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Expert medical care.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.text }}>Health Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$49', hot: false }, { name: 'Premium', price: '$149', hot: true }, { name: 'Family', price: '$299', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: 'white', border: `2px solid ${plan.hot ? colors.teal : '#E0F2F1'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.teal }}>Recommended</div>}
                                <h3 className="font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.teal }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['Consultations', 'Lab tests', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.teal }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-semibold rounded-full" style={{ backgroundColor: plan.hot ? colors.teal : 'transparent', color: plan.hot ? 'white' : colors.teal, border: plan.hot ? 'none' : `1px solid ${colors.teal}` }}>Choose Plan</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.text }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Health Medical style?', a: 'Calming medical aesthetics that build patient trust.' },
                        { q: 'HIPAA compliant?', a: 'Yes, fully compliant with healthcare regulations.' },
                        { q: 'Customizable?', a: 'Full control over healthcare branding.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.surface }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.teal, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center" style={{ backgroundColor: colors.teal }}>
                    <Stethoscope size={40} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl font-bold mb-4 text-white">Start Your Health Journey</h2>
                    <button className="px-10 py-3 font-semibold rounded-full" style={{ backgroundColor: 'white', color: colors.teal }}>Book Now</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: '#E0F2F1', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold"><Heart size={20} style={{ color: colors.teal }} /> MedCare</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Health Medical</span>
                </div>
            </footer>
        </div>
    );
};
