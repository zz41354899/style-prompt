import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S95DataDashboardPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0F172A', surface: '#1E293B', text: '#F1F5F9', muted: '#94A3B8', blue: '#3B82F6', green: '#22C55E', yellow: '#EAB308', red: '#EF4444', border: '#334155' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <BarChart3 size={24} style={{ color: colors.blue }} />
                        <span className="text-lg font-semibold">DataHub</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Dashboard', 'Reports', 'Settings'].map((item) => (<span key={item} className="text-sm cursor-pointer hover:text-white" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-4 py-2 text-sm text-white rounded" style={{ backgroundColor: colors.blue }}>Export</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
                        {['Dashboard', 'Reports', 'Settings'].map((item) => (<div key={item} className="py-2 text-sm" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-sm text-white rounded" style={{ backgroundColor: colors.blue }}>Export</button>
                    </div>
                )}
            </header>

            {/* Hero - Dashboard Cards Style */}
            <section style={{ padding: '40px 24px' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
                        {[{ label: 'Revenue', value: '$48.2K', change: '+12%', color: colors.green },
                        { label: 'Users', value: '2,847', change: '+8%', color: colors.blue },
                        { label: 'Orders', value: '1,234', change: '+23%', color: colors.yellow },
                        { label: 'Bounce', value: '32%', change: '-5%', color: colors.red }
                        ].map((stat) => (
                            <div key={stat.label} className="p-4 rounded-lg" style={{ backgroundColor: colors.surface }}>
                                <div className="text-xs mb-1" style={{ color: colors.muted }}>{stat.label}</div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs" style={{ color: stat.color }}>{stat.change}</div>
                            </div>
                        ))}
                    </div>
                    <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
                        <h1 className="mb-2 text-2xl font-bold">Data Dashboard Style</h1>
                        <p className="mb-6" style={{ color: colors.muted }}>Analytics-focused aesthetics with data cards, charts, and dashboard layouts.</p>
                        <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="px-6 py-2 text-sm text-white rounded flex items-center gap-2" style={{ backgroundColor: colors.blue }}>View Demo <ArrowRight size={16} /></button>
                            <button className="px-6 py-2 text-sm rounded border" style={{ borderColor: colors.border, color: colors.text }}>Documentation</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold mb-6">Components</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: BarChart3, title: 'Charts', color: colors.blue }, { icon: PieChart, title: 'Metrics', color: colors.green }, { icon: Activity, title: 'Real-time', color: colors.yellow }].map((item) => (
                            <div key={item.title} className="p-4 rounded-lg" style={{ backgroundColor: colors.surface }}>
                                <item.icon size={24} className="mb-3" style={{ color: item.color }} />
                                <h3 className="font-medium mb-1">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Dashboard ready.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold mb-6">Plans</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Starter', price: '$29', hot: false }, { name: 'Business', price: '$79', hot: true }, { name: 'Enterprise', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-4 rounded-lg" style={{ backgroundColor: colors.bg, border: plan.hot ? `1px solid ${colors.blue}` : `1px solid ${colors.border}` }}>
                                {plan.hot && <div className="absolute -top-2 right-2 px-2 text-xs rounded" style={{ backgroundColor: colors.blue, color: 'white' }}>Popular</div>}
                                <h3 className="font-medium mb-1">{plan.name}</h3>
                                <div className="text-3xl font-bold mb-4" style={{ color: colors.blue }}>{plan.price}<span className="text-sm font-normal" style={{ color: colors.muted }}>/mo</span></div>
                                <ul className="space-y-2 mb-4 text-sm">
                                    {['All charts', 'API access', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-sm rounded" style={{ backgroundColor: plan.hot ? colors.blue : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.border}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold mb-6">FAQ</h2>
                    <div className="space-y-0">
                        {[{ q: 'What is Data Dashboard?', a: 'Analytics-focused aesthetics with charts and data cards.' },
                        { q: 'Real-time data?', a: 'Yes, live data updates supported.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b py-1" style={{ borderColor: colors.border }}>
                                <button className="w-full flex items-center justify-between py-3 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="pb-3 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-8 text-center rounded-lg" style={{ backgroundColor: colors.surface }}>
                    <TrendingUp size={32} className="mx-auto mb-4" style={{ color: colors.green }} />
                    <h2 className="text-xl font-semibold mb-4">Start tracking data</h2>
                    <button className="px-8 py-2 text-sm rounded" style={{ backgroundColor: colors.blue, color: 'white' }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.border, padding: '20px 24px' }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><BarChart3 size={18} style={{ color: colors.blue }} /> DataHub</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Data Dashboard</span>
                </div>
            </footer>
        </div>
    );
};
