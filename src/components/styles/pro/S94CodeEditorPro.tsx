import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Code, FileCode, Braces, Hash } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S94CodeEditorPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1E1E1E', surface: '#252526', text: '#D4D4D4', muted: '#808080', blue: '#569CD6', green: '#4EC9B0', yellow: '#DCDCAA', orange: '#CE9178', purple: '#C586C0', lineNum: '#858585' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Fira Code", "Consolas", monospace' }}>
            {/* Navigation - Tab Bar Style */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="px-4 py-3 border-r flex items-center gap-2" style={{ borderColor: colors.bg, backgroundColor: colors.bg }}>
                            <Code size={18} style={{ color: colors.blue }} />
                            <span className="text-sm">DevCode</span>
                        </div>
                        {!isMobile && (
                            <div className="flex">
                                {['index.tsx', 'styles.css', 'config.json'].map((tab, i) => (
                                    <div key={tab} className="px-4 py-3 text-sm border-r flex items-center gap-2" style={{ borderColor: colors.bg, backgroundColor: i === 0 ? colors.bg : 'transparent', color: i === 0 ? colors.text : colors.muted }}>
                                        <FileCode size={14} />
                                        {tab}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {!isMobile && <button className="px-4 py-2 mr-4 text-sm" style={{ backgroundColor: colors.blue, color: 'white' }}>Run ▶</button>}
                    {isMobile && <button className="p-3" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.bg, backgroundColor: colors.surface }}>
                        {['index.tsx', 'styles.css', 'config.json'].map((tab) => (<div key={tab} className="py-2 text-sm" style={{ color: colors.muted }}>{tab}</div>))}
                        <button className="w-full mt-3 py-2 text-sm" style={{ backgroundColor: colors.blue, color: 'white' }}>Run ▶</button>
                    </div>
                )}
            </header>

            {/* Hero - Code Style */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <div className="p-6 rounded" style={{ backgroundColor: colors.surface }}>
                        <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: colors.lineNum }}>
                            <span>1</span><span style={{ color: colors.purple }}>import</span> <span style={{ color: colors.text }}>{'{ '}</span><span style={{ color: colors.yellow }}>CodeEditor</span><span style={{ color: colors.text }}>{' }'}</span> <span style={{ color: colors.purple }}>from</span> <span style={{ color: colors.orange }}>&apos;./styles&apos;</span><span style={{ color: colors.text }}>;</span>
                        </div>
                        <h1 className="mb-4 leading-tight" style={{ fontSize: isMobile ? '32px' : '48px' }}>
                            <span style={{ color: colors.blue }}>const</span> <span style={{ color: colors.yellow }}>editor</span> = <span style={{ color: colors.orange }}>&quot;Code Editor&quot;</span>;
                        </h1>
                        <p className="mb-6" style={{ color: colors.green }}>// IDE-inspired aesthetics with syntax highlighting and developer-friendly design.</p>
                        <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="px-6 py-2 text-sm text-white flex items-center gap-2" style={{ backgroundColor: colors.blue }}>Execute <ArrowRight size={16} /></button>
                            <button className="px-6 py-2 text-sm border" style={{ borderColor: colors.muted, color: colors.text }}>View Docs</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl mb-8"><span style={{ color: colors.green }}>// </span>Features</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Braces, title: 'Syntax Colors', color: colors.yellow }, { icon: Hash, title: 'Line Numbers', color: colors.blue }, { icon: Code, title: 'Mono Font', color: colors.green }].map((item) => (
                            <div key={item.title} className="p-4 rounded" style={{ backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: item.color }} />
                                <h3 className="text-sm mb-1" style={{ color: item.color }}>{item.title}</h3>
                                <p className="text-xs" style={{ color: colors.muted }}>Developer focused.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl mb-8"><span style={{ color: colors.green }}>// </span>Plans</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Starter', price: '$0', hot: false }, { name: 'Pro', price: '$12', hot: true }, { name: 'Team', price: '$29', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-4 rounded" style={{ backgroundColor: colors.surface, border: plan.hot ? `1px solid ${colors.blue}` : 'none' }}>
                                {plan.hot && <div className="absolute -top-2 right-2 px-2 text-xs" style={{ backgroundColor: colors.blue, color: 'white' }}>Popular</div>}
                                <h3 className="text-sm mb-1" style={{ color: colors.yellow }}>{plan.name}</h3>
                                <div className="text-3xl mb-4" style={{ color: colors.blue }}>{plan.price}<span className="text-sm" style={{ color: colors.muted }}>/mo</span></div>
                                <ul className="space-y-1 mb-4 text-sm">
                                    {['All themes', 'Extensions', 'Sync'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-sm rounded" style={{ backgroundColor: plan.hot ? colors.blue : colors.bg, color: plan.hot ? 'white' : colors.text }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl mb-8"><span style={{ color: colors.green }}>// </span>FAQ</h2>
                    <div className="space-y-0">
                        {[{ q: 'What is Code Editor style?', a: 'IDE-inspired aesthetics with syntax highlighting colors.' },
                        { q: 'Customizable themes?', a: 'Dark, light, and custom color schemes available.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b" style={{ borderColor: colors.bg }}>
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
                <div className="max-w-3xl mx-auto p-8 text-center rounded" style={{ backgroundColor: colors.surface }}>
                    <Code size={32} className="mx-auto mb-4" style={{ color: colors.blue }} />
                    <h2 className="text-xl mb-4"><span style={{ color: colors.yellow }}>startCoding</span><span style={{ color: colors.text }}>();</span></h2>
                    <button className="px-8 py-2 text-sm" style={{ backgroundColor: colors.blue, color: 'white' }}>Get Started</button>
                </div>
            </section>

            {/* Footer - Status Bar Style */}
            <footer style={{ padding: '8px 16px', backgroundColor: colors.blue }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-white">
                    <div className="flex items-center gap-4">
                        <span>DevCode</span>
                        <span>UTF-8</span>
                    </div>
                    <span>© 2025 Code Editor</span>
                </div>
            </footer>
        </div>
    );
};
