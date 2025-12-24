import { useState } from 'react';
import { Hammer, HardHat, TriangleAlert, Settings, Menu, X, ArrowRight, Construction, Truck, Warehouse } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S30Industrial = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Hazard Stripe Pattern
    const hazardPattern = `repeating-linear-gradient(45deg, #FACC15, #FACC15 10px, #000000 10px, #000000 20px)`;

    return (
        <div className="min-h-screen font-mono text-gray-900 bg-[#E5E5E5] selection:bg-black selection:text-[#FACC15]">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b-4 border-black bg-[#E5E5E5]">
                <div className="max-w-7xl mx-auto flex justify-between items-stretch">
                    <div className="flex items-center px-6 py-4 bg-black text-[#FACC15] gap-3">
                        <Hammer size={24} />
                        <span className="text-2xl font-black uppercase tracking-tighter">FORGE</span>
                    </div>

                    <div className={`flex-1 ${responsive.nav.showDesktop ? 'flex' : 'hidden'} justify-end divide-x-2 divide-black/10 border-l-2 border-black/10 items-stretch`}>
                        {['Equipment', 'Projects', 'Safety', 'Contacts'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="px-8 flex items-center bg-transparent hover:bg-black hover:text-[#FACC15] transition-colors font-bold uppercase tracking-wide text-sm"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="flex items-center px-8 bg-[#FACC15] border-l-4 border-black font-black uppercase cursor-pointer hover:bg-yellow-400">
                            Get Quote
                        </div>
                    </div>

                    {responsive.nav.showMobile && (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="px-6 border-l-4 border-black hover:bg-black hover:text-[#FACC15] transition-colors"
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    )}
                </div>

                {/* Hazard strip bottom border */}
                <div className="w-full h-3" style={{ background: hazardPattern }} />
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Equipment
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Projects
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Safety
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Equipment
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Projects
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Safety
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Equipment
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Projects
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Safety
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-0 border-4 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]`}>
                    {/* Main Content */}
                    <div className={`${isMobile ? '' : 'col-span-7'} p-8 ${isMobile ? '' : 'p-16'} flex flex-col justify-center ${isMobile ? 'border-b-4' : 'border-r-4'} border-black relative`}>
                        <div className="absolute top-4 left-4 border border-black px-2 py-0.5 text-[10px] font-bold uppercase">
                            Ref: #F8-294
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-black uppercase leading-[0.8] mb-8 tracking-tighter`}>
                            Build<br />
                            The<br />
                            <span className="text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop')] bg-cover">Future</span>
                        </h1>

                        <p className="text-xl font-bold text-gray-500 mb-12 max-w-md">
               // Heavy duty infrastructure for the modern web. Reliable. Scalable. Indestructible.
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                            <button className="px-8 py-4 bg-black text-[#FACC15] font-black uppercase text-lg hover:bg-[#FACC15] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all flex items-center gap-3 border-2 border-black">
                                Start Project <ArrowRight size={24} />
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-black text-black font-black uppercase text-lg hover:bg-gray-100 transition-colors">
                                Specifications
                            </button>
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className={`${isMobile ? '' : 'col-span-5'} bg-[#F3F4F6] relative flex flex-col`}>
                        {/* Status Bar */}
                        <div className="border-b-4 border-black p-4 flex justify-between items-center bg-black text-white">
                            <span className="font-bold uppercase flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                System Online
                            </span>
                            <span className="font-mono text-xs">V.3.0.1</span>
                        </div>

                        {/* Illustration Area */}
                        <div className="flex-1 p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                            <div className="relative z-10 w-64 h-64 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                                <Construction size={80} className="text-black" />
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#FACC15] border-2 border-black" />
                                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#FACC15] border-2 border-black" />
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-black/10 -z-10" />
                                <div className="absolute left-1/2 top-0 h-full w-1 bg-black/10 -z-10" />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 border-t-4 border-black">
                            <div className="p-6 border-r-4 border-black bg-[#FACC15]">
                                <div className="text-4xl font-black mb-1">99.9%</div>
                                <div className="text-xs font-bold uppercase tracking-wider">Uptime</div>
                            </div>
                            <div className="p-6 bg-white">
                                <div className="text-4xl font-black mb-1">0ms</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Latency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-16 border-b border-white/20 pb-6">
                        <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-black uppercase`}>Capabilities</h2>
                        <div className={`${isMobile ? 'hidden' : 'block'} text-right`}>
                            <div className="text-[#FACC15] font-mono text-sm">SEC-02</div>
                            <div className="text-gray-500 text-xs uppercase">Authorized Personnel Only</div>
                        </div>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { title: 'Fabrication', icon: Settings, desc: 'Custom automated workflows built to rigorous standards.' },
                            { title: 'Logistics', icon: Truck, desc: 'Global content delivery network with redundant pathways.' },
                            { title: 'Storage', icon: Warehouse, desc: 'High-density data retention with immutable backups.' },
                        ].map((service, i) => (
                            <div key={i} className="border-2 border-white/20 p-8 hover:bg-[#FACC15] hover:border-[#FACC15] hover:text-black transition-all group cursor-pointer">
                                <div className="flex justify-between items-start mb-8">
                                    <service.icon size={40} className="text-[#FACC15] group-hover:text-black" />
                                    <span className="font-mono text-2xl font-bold opacity-30">0{i + 1}</span>
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-4">{service.title}</h3>
                                <p className="font-mono text-sm leading-relaxed opacity-70 group-hover:opacity-100">
                                    {service.desc}
                                </p>
                                <div className="mt-8 h-1 w-full bg-white/20 group-hover:bg-black/20">
                                    <div className="h-full bg-[#FACC15] group-hover:bg-black w-1/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warning CTA */}
            <section className="py-24 px-4 bg-[#FACC15]">
                <div className={`max-w-5xl mx-auto border-4 border-black bg-white ${isMobile ? 'p-8' : 'p-16'} shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden`}>
                    {/* Background stripes opacity */}
                    <div className="absolute inset-0 pointer-events-none opacity-5" style={{ background: `repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 10px)` }} />

                    <div className="relative z-10 flex flex-col items-center">
                        <TriangleAlert size={48} className="mb-6" />
                        <h2 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-black uppercase mb-6 leading-none tracking-tighter`}>
                            Proceed with<br />Construction
                        </h2>
                        <p className="text-xl font-bold max-w-xl mx-auto mb-10 text-gray-600">
                            Ready to break ground? Initialize your project today with our industrial-grade toolkit.
                        </p>
                        <button className="px-12 py-5 bg-black text-white font-black uppercase text-xl hover:scale-105 transition-transform shadow-2xl">
                            Initialize
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#E5E5E5] pt-20 pb-10 border-t-4 border-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-12 mb-16`}>
                        <div className={`${isMobile ? '' : 'col-span-2'}`}>
                            <div className="flex items-center gap-3 mb-6">
                                <Hammer size={32} />
                                <span className="text-3xl font-black uppercase tracking-tighter">FORGE</span>
                            </div>
                            <div className="font-mono text-sm max-w-xs">
                                HEAVY INDUSTRY DESIGN SYSTEM<br />
                                EST. 2024 • ISO 9001 CERTIFIED
                            </div>
                        </div>

                        <div>
                            <h4 className="font-black uppercase mb-6 border-b-2 border-black pb-2 inline-block">Sitemap</h4>
                            <ul className="space-y-3 font-bold text-sm uppercase">
                                <li><a href="#" className="hover:bg-black hover:text-[#FACC15] px-1 -ml-1">Home</a></li>
                                <li><a href="#" className="hover:bg-black hover:text-[#FACC15] px-1 -ml-1">About</a></li>
                                <li><a href="#" className="hover:bg-black hover:text-[#FACC15] px-1 -ml-1">Services</a></li>
                                <li><a href="#" className="hover:bg-black hover:text-[#FACC15] px-1 -ml-1">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-black uppercase mb-6 border-b-2 border-black pb-2 inline-block">Office</h4>
                            <address className="not-italic font-mono text-sm space-y-2">
                                <p>Sector 7G</p>
                                <p>Industrial District</p>
                                <p>Metropolis, MP 54321</p>
                            </address>
                        </div>
                    </div>

                    <div className={`border-t-2 border-black pt-8 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500`}>
                        <p>© 2024 Forge Industries.</p>
                        <div className={`flex gap-4 ${isMobile ? 'mt-4' : 'mt-0'}`}>
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Safety</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
