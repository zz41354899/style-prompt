import { useState } from 'react';
import { Settings, Wrench, Shield, Menu, X, ArrowRight, Database } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S63BrushedSteel = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Metal Texture
    const steel = "url('https://www.transparenttextures.com/patterns/brushed-alum.png')";

    return (
        <div className="min-h-screen bg-[#cfd8dc] font-sans text-[#263238] overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;700&display=swap');
        .font-mech { font-family: 'Orbitron', sans-serif; }
        .font-sans { font-family: 'Roboto', sans-serif; }
        
        .metal-panel {
           background-color: #eceff1;
           background-image: ${steel};
           box-shadow: 
              inset 1px 1px 0 rgba(255,255,255,0.7),
              inset -1px -1px 0 rgba(0,0,0,0.3),
              5px 5px 10px rgba(0,0,0,0.2);
           border: 1px solid #b0bec5;
        }
        .screw-head {
           width: 12px;
           height: 12px;
           border-radius: 50%;
           background: linear-gradient(135deg, #cfd8dc, #90a4ae);
           box-shadow: inset 1px 1px 1px rgba(255,255,255,0.8), inset -1px -1px 1px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.3);
           display: flex;
           align-items: center;
           justify-content: center;
        }
        .screw-head::after {
           content: '';
           width: 8px;
           height: 2px;
           background: #546e7a;
           transform: rotate(45deg);
        }
        .engraved {
           color: #546e7a;
           text-shadow: 1px 1px 0 #ffffff, -1px -1px 0 #90a4ae;
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0 bg-repeat" style={{ backgroundImage: steel }} />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center metal-panel px-6 py-3 rounded-sm">
                    <div className="flex items-center gap-3">
                        <Settings size={28} className="text-[#37474f] animate-[spin_10s_linear_infinite]" />
                        <span className="font-mech text-2xl font-bold text-[#37474f] engraved">TITAN</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-1 bg-[#cfd8dc] p-1 rounded-sm shadow-inner`}>
                        {['Products', 'Specs', 'Support', 'Dealers'].map((item) => (
                            <a key={item} href="#" className="font-mech text-xs font-bold text-[#546e7a] hover:bg-[#b0bec5] hover:text-[#263238] px-6 py-2 rounded-sm transition-all uppercase tracking-wider">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#546e7a] text-white font-mech text-xs font-bold hover:bg-[#455a64] uppercase tracking-widest shadow-[inset_0_2px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.3)] active:scale-95 transition-all text-shadow">
                            Request Quote
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>
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
                                Products
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Specs
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Support
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Dealers
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div className="metal-panel p-10 relative">
                        {/* Corner Screws */}
                        <div className="absolute top-2 left-2 screw-head" />
                        <div className="absolute top-2 right-2 screw-head" />
                        <div className="absolute bottom-2 left-2 screw-head" />
                        <div className="absolute bottom-2 right-2 screw-head" />

                        <div className="inline-block bg-[#263238] text-[#cfd8dc] px-3 py-1 font-mech text-xs uppercase tracking-widest mb-6 rounded-sm">
                            Model: X-9000
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-mech font-bold leading-tight mb-8 text-[#263238] engraved`}>
                            PRECISION <br />
                            ENGINEERING
                        </h1>

                        <p className="font-sans text-lg text-[#455a64] mb-10 max-w-lg leading-relaxed border-l-4 border-[#546e7a] pl-6 bg-[#cfd8dc]/50 py-2">
                            Uncompromising durability. Forged from aerospace-grade alloys. Built to withstand the impossible.
                        </p>

                        <div className="flex gap-4">
                            <button className="flex-1 px-6 py-4 bg-[#eceff1] text-[#37474f] font-mech font-bold uppercase tracking-widest border-2 border-[#b0bec5] hover:bg-white hover:border-[#546e7a] transition-all relative overflow-hidden group">
                                <span className="relative z-10 flex items-center justify-center gap-2">Spec Sheet <Database size={16} /></span>
                            </button>
                            <button className="flex-1 px-6 py-4 bg-[#37474f] text-[#cfd8dc] font-mech font-bold uppercase tracking-widest hover:bg-[#263238] shadow-[0_4px_0_#000] active:translate-y-1 active:shadow-none transition-all">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Product Showcase */}
                    <div className={`relative h-[500px] w-full flex items-center justify-center p-8 metal-panel ${isMobile ? 'rounded-full' : 'rounded-lg'}`}>
                        <div className="absolute inset-4 border border-[#90a4ae] rounded-lg opacity-50" />

                        <div className="relative z-10 w-64 h-64 bg-gradient-to-br from-[#eceff1] to-[#b0bec5] rounded-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center group cursor-pointer">
                            <Settings size={120} className="text-[#546e7a] group-hover:rotate-180 transition-transform duration-[2s] ease-in-out drop-shadow-lg" />

                            {/* Shiny Reflection */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-white/80 to-transparent opacity-50 pointer-events-none" />
                        </div>

                        {/* Labels */}
                        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-[1px] bg-[#546e7a]" />
                        <div className="absolute top-1/2 left-14 transform -translate-y-1/2 text-xs font-mech text-[#546e7a]">AXLE</div>

                        <div className="absolute bottom-10 right-10 text-right">
                            <div className="text-4xl font-mech font-bold text-[#37474f]">12.5KG</div>
                            <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#78909c]">Net Weight</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 px-4 bg-[#b0bec5] border-y border-[#90a4ae]">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-1`}>
                    {[
                        { icon: Shield, title: 'Titanium', desc: 'Grade 5 reinforced plating.' },
                        { icon: Wrench, title: 'Modular', desc: 'Fully serviceable components.' },
                        { icon: Database, title: 'Warranty', desc: '10-Year industrial guarantee.' },
                    ].map((item, i) => (
                        <div key={i} className="metal-panel p-8 text-center hover:scale-105 transition-transform z-0 hover:z-10 bg-[#eceff1]">
                            <item.icon size={48} className="mx-auto text-[#546e7a] mb-6 drop-shadow-md" />
                            <h3 className="font-mech text-2xl text-[#37474f] engraved mb-2">{item.title}</h3>
                            <p className="font-sans text-[#607d8b] text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-16 pb-8 bg-[#263238] text-[#b0bec5] border-t-4 border-[#546e7a]">
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
                    <div className="mb-8 p-4 border border-[#455a64] rounded-sm bg-[#37474f]">
                        <span className="font-mech text-2xl text-[#eceff1] tracking-[0.3em]">TITAN INDUSTRIES</span>
                    </div>

                    <div className="flex gap-12 font-mech text-xs uppercase tracking-widest text-[#78909c] mb-8">
                        <a href="#" className="hover:text-white transition-colors">Legal</a>
                        <a href="#" className="hover:text-white transition-colors">Patents</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="font-sans text-xs text-[#546e7a]">
                        &copy; 2024 HEAVY METAL S.A.
                    </div>
                </div>
            </footer>
        </div>
    );
};
