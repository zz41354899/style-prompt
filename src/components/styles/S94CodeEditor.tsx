import { useState } from 'react';
import { Code2, Terminal, GitBranch, Layers, Zap, Shield, Menu, X, ArrowRight, Check, Star, Download } from 'lucide-react';

export const S94CodeEditor = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#1E1E1E] font-mono text-[#D4D4D4] selection:bg-[#264F78] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap');
                .font-code { font-family: 'Fira Code', monospace; }
                .font-ui { font-family: 'Inter', sans-serif; }
                
                .syntax-pink { color: #C586C0; }
                .syntax-blue { color: #569CD6; }
                .syntax-green { color: #6A9955; }
                .syntax-yellow { color: #DCDCAA; }
                .syntax-orange { color: #CE9178; }
                .syntax-cyan { color: #4EC9B0; }
                
                .glow-blue { box-shadow: 0 0 30px rgba(86, 156, 214, 0.3); }
            `}</style>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#252526] border-b border-[#3C3C3C]">
                <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#007ACC] rounded flex items-center justify-center">
                            <Code2 size={18} className="text-white" />
                        </div>
                        <span className="font-ui font-bold text-white">DevFlow</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
                            <a key={item} href="#" className="font-ui text-sm text-[#CCCCCC] hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className={`font-ui text-sm bg-[#007ACC] text-white ${isMobile ? 'px-4 py-2' : 'px-6 py-2'} rounded hover:bg-[#0098FF] transition-colors`}>
                            Download
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`${isMobile ? 'block' : 'hidden'} p-2 text-[#CCCCCC]`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#1E1E1E] border-t border-[#3C3C3C] p-4">
                        {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
                            <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block py-3 font-ui text-[#CCCCCC] hover:text-white border-b border-[#3C3C3C] last:border-0">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className={`${isMobile ? 'py-16' : 'py-24'} px-4`}>
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? '' : 'flex gap-12 items-center'}`}>
                        <div className={`flex-1 ${isMobile ? 'text-center mb-12' : ''}`}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#264F78] rounded-full text-xs font-ui text-[#9CDCFE] mb-6">
                                <Star size={12} /> v2.0 Released
                            </div>
                            <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-ui font-bold text-white mb-6 leading-tight`}>
                                Code Faster.<br />
                                <span className="text-[#007ACC]">Ship Sooner.</span>
                            </h1>
                            <p className={`font-ui ${isMobile ? 'text-base' : 'text-lg'} text-[#9D9D9D] mb-10 leading-relaxed ${isMobile ? '' : 'max-w-lg'}`}>
                                The next-generation code editor with AI-powered autocompletion, real-time collaboration, and lightning-fast performance.
                            </p>
                            <div className={`flex gap-4 ${isMobile ? 'justify-center flex-col' : ''}`}>
                                <button className="font-ui bg-[#007ACC] text-white px-8 py-4 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#0098FF] transition-colors">
                                    <Download size={20} /> Download Free
                                </button>
                                <button className="font-ui text-[#CCCCCC] px-8 py-4 rounded font-semibold border border-[#3C3C3C] hover:border-[#007ACC] transition-colors">
                                    View Documentation
                                </button>
                            </div>
                        </div>

                        {/* Code Preview */}
                        <div className={`flex-1 ${isMobile ? 'px-2' : ''}`}>
                            <div className="bg-[#1E1E1E] rounded-lg border border-[#3C3C3C] overflow-hidden glow-blue">
                                <div className="h-10 bg-[#252526] flex items-center px-4 gap-2 border-b border-[#3C3C3C]">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                    <span className="ml-4 text-xs text-[#8E8E8E]">app.tsx</span>
                                </div>
                                <div className="p-4 font-code text-sm leading-relaxed">
                                    <div><span className="syntax-pink">import</span> {'{ '}<span className="syntax-cyan">DevFlow</span>{' }'} <span className="syntax-pink">from</span> <span className="syntax-orange">'@devflow/core'</span>;</div>
                                    <div className="h-4"></div>
                                    <div><span className="syntax-green">// AI-powered development</span></div>
                                    <div><span className="syntax-blue">const</span> <span className="syntax-cyan">app</span> = <span className="syntax-yellow">createApp</span>({`{`}</div>
                                    <div className="pl-4">name: <span className="syntax-orange">"MyProject"</span>,</div>
                                    <div className="pl-4">ai: <span className="syntax-blue">true</span>,</div>
                                    <div className="pl-4">realtime: <span className="syntax-blue">true</span></div>
                                    <div>{`}`});</div>
                                    <div className="h-4"></div>
                                    <div>app.<span className="syntax-yellow">start</span>(); <span className="syntax-green">// 🚀 Ready!</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-[#252526]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ui font-bold text-white text-center mb-4`}>Powerful Features</h2>
                    <p className="text-center text-[#9D9D9D] mb-12 max-w-xl mx-auto font-ui">Built for developers who demand the best</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                        {[
                            { icon: Zap, title: 'Lightning Fast', desc: 'Sub-millisecond response times with our Rust-powered engine', color: '#DCDCAA' },
                            { icon: Terminal, title: 'Integrated Terminal', desc: 'Full-featured terminal with split panes and themes', color: '#4EC9B0' },
                            { icon: GitBranch, title: 'Git Integration', desc: 'Built-in Git with visual diff and merge conflict resolution', color: '#CE9178' },
                            { icon: Layers, title: 'Extensions', desc: 'Thousands of extensions to customize your workflow', color: '#569CD6' },
                            { icon: Shield, title: 'Secure by Design', desc: 'End-to-end encryption for cloud sync and collaboration', color: '#C586C0' },
                            { icon: Code2, title: 'AI Assistant', desc: 'Smart code completion and refactoring suggestions', color: '#007ACC' },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#1E1E1E] border border-[#3C3C3C] rounded-lg p-6 hover:border-[#007ACC] transition-colors">
                                <item.icon size={32} style={{ color: item.color }} className="mb-4" />
                                <h3 className="font-ui font-semibold text-white text-lg mb-2">{item.title}</h3>
                                <p className="font-ui text-sm text-[#9D9D9D]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ui font-bold text-white text-center mb-12`}>Simple Pricing</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Community', price: 'Free', features: ['Core editor', 'Extensions', 'Community support'], cta: 'Download' },
                            { name: 'Pro', price: '$9/mo', features: ['Everything in Free', 'AI Assistant', 'Cloud sync', 'Priority support'], featured: true, cta: 'Start Trial' },
                            { name: 'Team', price: '$29/mo', features: ['Everything in Pro', 'Team collaboration', 'Admin dashboard', 'SSO'], cta: 'Contact Sales' },
                        ].map((plan, i) => (
                            <div key={i} className={`rounded-lg p-8 ${plan.featured ? 'bg-[#007ACC] border-2 border-[#007ACC]' : 'bg-[#252526] border border-[#3C3C3C]'}`}>
                                {plan.featured && <div className="text-xs font-ui font-bold text-white/80 mb-2">MOST POPULAR</div>}
                                <h3 className="font-ui font-semibold text-xl text-white mb-2">{plan.name}</h3>
                                <div className="text-3xl font-ui font-bold text-white mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={`flex items-center gap-3 text-sm font-ui ${plan.featured ? 'text-white/90' : 'text-[#9D9D9D]'}`}>
                                            <Check size={16} className={plan.featured ? 'text-white' : 'text-[#007ACC]'} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded font-ui font-semibold ${plan.featured ? 'bg-white text-[#007ACC]' : 'bg-[#007ACC] text-white'} hover:opacity-90 transition-opacity`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-[#252526]">
                <div className="max-w-4xl mx-auto text-center">
                    <Terminal className="w-12 h-12 mx-auto mb-6 text-[#007ACC]" />
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ui font-bold text-white mb-6`}>Ready to Code?</h2>
                    <p className="text-[#9D9D9D] mb-8 max-w-lg mx-auto font-ui">Join millions of developers using DevFlow to build the future.</p>
                    <button className="font-ui bg-[#007ACC] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#0098FF] transition-colors">
                        Download Now — It's Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-[#3C3C3C]">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#007ACC] rounded flex items-center justify-center">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="font-ui font-bold text-white">DevFlow</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm text-[#9D9D9D] font-ui`}>
                            {['Features', 'Pricing', 'Docs', 'Blog', 'Changelog', 'GitHub'].map((item) => (
                                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center text-sm text-[#6E6E6E] pt-8 border-t border-[#3C3C3C] font-ui">
                        © 2024 DevFlow. Built with ❤️ for developers.
                    </div>
                </div>
            </footer>
        </div>
    );
};
