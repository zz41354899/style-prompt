import { useState } from 'react';
import { Monitor, Folder, Globe, FileText, Trash2, HelpCircle, Star, ChevronRight, Menu, X } from 'lucide-react';

export const S32Windows95 = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [startOpen, setStartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    // Windows 95 bevel styles
    const bevelOut = "shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#000000,inset_2px_2px_#ffffff,inset_-2px_-2px_#808080]";
    const bevelIn = "shadow-[inset_1px_1px_#000000,inset_-1px_-1px_#dfdfdf,inset_2px_2px_#808080,inset_-2px_-2px_#ffffff]";

    const Button95 = ({ children, primary = false, className = '' }: { children: React.ReactNode, primary?: boolean, className?: string }) => (
        <button className={`px-6 py-1.5 bg-[#c0c0c0] ${bevelOut} active:${bevelIn} font-bold text-black text-sm ${className}`}>
            {primary && <span className="underline">{(children as string)[0]}</span>}
            {primary ? (children as string).slice(1) : children}
        </button>
    );

    return (
        <div className="min-h-screen bg-[#008080] font-sans selection:bg-[#000080] selection:text-white flex flex-col" onClick={() => { setStartOpen(false); setMenuOpen(false); }}>

            {/* Title Bar / Navigation */}
            <nav className="sticky top-0 z-50 bg-[#c0c0c0] border-b-2 border-[#808080]" onClick={(e) => e.stopPropagation()}>
                <div className="px-2 py-1 flex items-center justify-between">
                    <div className={`flex items-center gap-2 ${bevelOut} px-2 py-0.5 bg-[#000080] text-white`}>
                        <Monitor size={16} />
                        <span className="font-bold text-sm">RetroSoft.exe</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-1`}>
                        {['File', 'Edit', 'View', 'Help'].map((item) => (
                            <button key={item} className="px-3 py-1 hover:bg-[#000080] hover:text-white text-sm">
                                <span className="underline">{item[0]}</span>{item.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Window Controls */}
                    <div className="flex gap-1">
                        <button className={`w-5 h-5 bg-[#c0c0c0] ${bevelOut} flex items-center justify-center text-xs font-bold`}>_</button>
                        <button className={`w-5 h-5 bg-[#c0c0c0] ${bevelOut} flex items-center justify-center text-xs font-bold`}>□</button>
                        <button className={`w-5 h-5 bg-[#c0c0c0] ${bevelOut} flex items-center justify-center text-xs font-bold`} onClick={() => setMenuOpen(!menuOpen)}>
                            {isMobile ? (menuOpen ? '×' : '≡') : '×'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className={`bg-[#c0c0c0] border-t border-[#808080] ${bevelOut} p-2`}>
                        {['File', 'Edit', 'View', 'Help'].map((item) => (
                            <button key={item} className="block w-full text-left px-4 py-2 hover:bg-[#000080] hover:text-white text-sm">
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section - Program Window */}
            <section className="py-8 px-4 flex-1">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-[2px] bg-[#c0c0c0] ${bevelOut}`}>
                        {/* Window Title Bar */}
                        <div className="px-2 py-1 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Monitor size={16} />
                                <span className="font-bold text-sm">Welcome to RetroSoft</span>
                            </div>
                            <div className="flex gap-1">
                                <button className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[10px] text-black`}>_</button>
                                <button className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[10px] text-black`}>□</button>
                                <button className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[10px] text-black ml-1`}>×</button>
                            </div>
                        </div>

                        {/* Window Content */}
                        <div className={`bg-white ${bevelIn} p-6 ${isMobile ? 'text-center' : ''}`}>
                            <div className={`flex ${isMobile ? 'flex-col' : ''} gap-6 items-center`}>
                                <div className="text-6xl">💾</div>
                                <div className={isMobile ? 'text-center' : ''}>
                                    <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-black mb-2`}>Welcome to RetroSoft</h1>
                                    <p className="text-gray-700 mb-6">Experience the nostalgia of classic computing. Build beautiful retro interfaces with authentic Windows 95 aesthetics.</p>
                                    <div className={`flex gap-4 ${isMobile ? 'justify-center flex-wrap' : ''}`}>
                                        <Button95 primary>OK</Button95>
                                        <Button95>Cancel</Button95>
                                        <Button95>Help</Button95>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status Bar */}
                        <div className="flex justify-between px-2 py-1 text-xs border-t border-[#808080]">
                            <span>Ready</span>
                            <span>v1.0.0</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-8 px-4 bg-[#008080]">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-[2px] bg-[#c0c0c0] ${bevelOut}`}>
                        <div className="px-2 py-1 bg-[#000080] text-white flex items-center gap-2">
                            <Folder size={16} />
                            <span className="font-bold text-sm">Features</span>
                        </div>
                        <div className={`bg-white ${bevelIn} p-4`}>
                            <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
                                {[
                                    { icon: Monitor, name: 'Classic UI', desc: 'Authentic bevel shadows' },
                                    { icon: Folder, name: 'File Manager', desc: 'Organize with style' },
                                    { icon: Globe, name: 'Web Ready', desc: 'Modern compatibility' },
                                    { icon: FileText, name: 'Documentation', desc: 'Comprehensive guides' },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center group cursor-pointer p-2">
                                        <div className="mb-2">
                                            <item.icon size={32} className="text-[#000080] drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]" />
                                        </div>
                                        <span className="text-xs px-1 group-hover:bg-[#000080] group-hover:text-white border border-transparent group-hover:border-dotted group-hover:border-white">{item.name}</span>
                                        <span className="text-[10px] text-gray-500 mt-1">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Showcase */}
            <section className="py-8 px-4 bg-[#008080]">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-[2px] bg-[#c0c0c0] ${bevelOut}`}>
                        <div className="px-2 py-1 bg-[#000080] text-white flex items-center gap-2">
                            <HelpCircle size={16} />
                            <span className="font-bold text-sm">UI Components</span>
                        </div>
                        <div className={`bg-[#c0c0c0] p-4 ${bevelIn}`}>
                            <fieldset className="border-2 border-[#dfdfdf] border-l-[#808080] border-t-[#808080] p-4 mb-4">
                                <legend className="px-2 font-bold">Form Elements</legend>
                                <div className={`${isMobile ? 'space-y-4' : 'flex gap-8'}`}>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 rounded-full bg-white ${bevelIn} flex items-center justify-center`}>
                                                <div className="w-2 h-2 rounded-full bg-black" />
                                            </div>
                                            <label>Option 1</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 rounded-full bg-white ${bevelIn}`} />
                                            <label>Option 2</label>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 bg-white ${bevelIn} flex items-center justify-center`}>
                                                <span className="text-xs font-bold">✓</span>
                                            </div>
                                            <label>Checkbox</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 bg-white ${bevelIn}`} />
                                            <label>Unchecked</label>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Text input..." className={`px-2 py-1 bg-white ${bevelIn} w-40`} />
                                    </div>
                                </div>
                            </fieldset>

                            <div className="flex gap-4 flex-wrap">
                                <Button95 primary>Primary</Button95>
                                <Button95>Secondary</Button95>
                                <button className={`px-6 py-1.5 bg-[#c0c0c0] ${bevelIn} text-[#808080] text-sm`} disabled>Disabled</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-8 px-4 bg-[#008080]">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-[2px] bg-[#c0c0c0] ${bevelOut}`}>
                        <div className="px-2 py-1 bg-[#000080] text-white flex items-center gap-2">
                            <Star size={16} />
                            <span className="font-bold text-sm">Pricing</span>
                        </div>
                        <div className={`bg-white ${bevelIn} p-4`}>
                            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
                                {[
                                    { name: 'Personal', price: 'FREE', features: ['5 Projects', 'Basic Components', 'Community Support'] },
                                    { name: 'Professional', price: '$49', features: ['Unlimited Projects', 'All Components', 'Priority Support'], featured: true },
                                    { name: 'Enterprise', price: '$199', features: ['Everything', 'Custom Themes', 'Dedicated Support'] },
                                ].map((plan, i) => (
                                    <div key={i} className={`p-[2px] bg-[#c0c0c0] ${plan.featured ? bevelIn : bevelOut}`}>
                                        <div className={`p-4 ${plan.featured ? 'bg-[#000080] text-white' : 'bg-[#c0c0c0]'}`}>
                                            <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                                            <div className="text-2xl font-bold mb-4">{plan.price}</div>
                                            <ul className="space-y-2 mb-4 text-sm">
                                                {plan.features.map((f, j) => (
                                                    <li key={j}>• {f}</li>
                                                ))}
                                            </ul>
                                            <Button95 primary={plan.featured}>Select</Button95>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 px-4 bg-[#008080]">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-[2px] bg-[#c0c0c0] ${bevelOut}`}>
                        <div className="px-2 py-1 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white">
                            <span className="font-bold text-sm">📢 Get Started Today!</span>
                        </div>
                        <div className={`bg-white ${bevelIn} p-6 text-center`}>
                            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-4`}>Ready to Go Retro?</h2>
                            <p className="text-gray-600 mb-6">Join thousands of developers building nostalgic interfaces.</p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <Button95 primary>Download Now</Button95>
                                <Button95>Learn More</Button95>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taskbar */}
            <div className={`sticky bottom-0 h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center justify-between px-1 z-50`} onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-1 h-full py-1">
                    <button
                        onClick={() => setStartOpen(!startOpen)}
                        className={`h-full px-2 flex items-center gap-1 font-bold italic tracking-wider ${startOpen ? bevelIn : bevelOut} ${startOpen ? 'bg-[#e0e0e0]' : 'bg-[#c0c0c0]'}`}
                    >
                        <Monitor size={16} />
                        <span>Start</span>
                    </button>
                    <div className="w-[1px] h-full bg-[#808080] shadow-[1px_0_0_#ffffff] mx-1" />
                    <button className={`h-full px-4 flex items-center gap-2 ${bevelIn} bg-[#e0e0e0] font-bold ${isMobile ? 'text-xs' : ''} truncate max-w-[150px]`}>
                        <Monitor size={14} />
                        RetroSoft.exe
                    </button>
                </div>

                <div className={`h-full px-4 flex items-center gap-2 ${bevelIn} bg-[#c0c0c0] text-xs`}>
                    <span>12:00 PM</span>
                </div>

                {/* Start Menu */}
                {startOpen && (
                    <div className={`absolute bottom-10 left-1 ${isMobile ? 'w-40' : 'w-48'} bg-[#c0c0c0] ${bevelOut} flex flex-col p-1`}>
                        <div className="w-8 bg-[#000080] absolute left-0 bottom-0 top-0 flex items-end">
                            <span className="text-white text-sm font-bold -rotate-90 origin-bottom-left translate-x-2 -translate-y-4 whitespace-nowrap tracking-widest text-[#c0c0c0]">
                                RETRO<span className="text-white ml-1">95</span>
                            </span>
                        </div>
                        <div className="ml-8 flex flex-col">
                            {['Programs', 'Documents', 'Settings', 'Help', 'Shut Down...'].map((item, i) => (
                                <div key={i} className="px-4 py-2 hover:bg-[#000080] hover:text-white cursor-pointer flex items-center gap-2 text-sm">
                                    <Monitor size={16} />
                                    {item}
                                    {i < 3 && <span className="ml-auto">▸</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
