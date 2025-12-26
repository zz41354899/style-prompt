import { useState } from 'react';
import { Shield, PieChart, Users, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S79CorporateClean = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F4F4F4] font-sans text-[#161616] overflow-x-hidden selection:bg-[#0F62FE] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        .font-corp { font-family: 'Inter', sans-serif; }
        
        .btn-primary {
          background-color: #0F62FE;
          color: white;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }
        .btn-primary:hover {
          background-color: #0353E9;
        }
        .card {
          background-color: white;
          padding: 24px;
          border-radius: 4px; /* Slight rounding for generic modern feel */
          border: 1px solid #E0E0E0;
        }
      `}</style>

            {/* Navbar */}
            <nav className="bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0F62FE] rounded-sm flex items-center justify-center text-white font-bold">C</div>
                        <span className="font-corp font-semibold text-xl tracking-tight">CorpSolution</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                            <a key={item} href="#" className="font-corp text-[#525252] hover:text-[#0F62FE] transition-colors text-sm font-medium">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`text-[#0F62FE] font-medium text-sm cursor-pointer hover:underline ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>Log in</span>
                        <button className="bg-[#0F62FE] text-white px-4 py-2 rounded-[4px] text-sm font-medium hover:bg-[#0353E9] transition-colors">
                            Get Started
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#161616]" /> : <Menu size={24} className="text-[#161616]" />}
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
                                Solutions
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Resources
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Pricing
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="py-20 px-6 bg-white border-b border-[#E0E0E0]">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div>
                        <h1 className={`${isMobile ? 'text-5xl' : 'text-5xl lg:text-6xl'} font-corp font-semibold text-[#161616] mb-6 leading-tight`}>
                            Enterprise scale.<br />
                            <span className="text-[#0F62FE]">Reliable results.</span>
                        </h1>

                        <p className="font-corp text-lg text-[#525252] mb-10 max-w-lg leading-relaxed">
                            Streamline your workflow with our integrated platform designed for high-performance teams. Secure, scalable, and simple.
                        </p>

                        <div className={`flex gap-4 flex-col ${isMobile ? '' : 'sm:flex-row'}`}>
                            <button className="btn-primary flex items-center justify-center gap-2">
                                Request Demo <ArrowRight size={18} />
                            </button>
                            <button className="px-6 py-3 border border-[#E0E0E0] text-[#161616] rounded-[4px] font-medium hover:bg-[#F4F4F4] transition-colors">
                                View Documentation
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-6 text-[#6F6F6F] text-sm font-medium">
                            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-[#0F62FE]" /> SOC2 Certified</span>
                            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-[#0F62FE]" /> 99.9% Uptime</span>
                        </div>
                    </div>

                    {/* Hero Image / Dashboard Mockup */}
                    <div className="bg-[#F4F4F4] rounded-lg border border-[#E0E0E0] p-4 shadow-sm relative">
                        <div className="bg-white rounded border border-[#E0E0E0] overflow-hidden shadow-sm">
                            {/* Fake UI Header */}
                            <div className="h-10 border-b border-[#E0E0E0] flex items-center px-4 gap-2 bg-white">
                                <div className="w-3 h-3 rounded-full bg-[#E0E0E0]" />
                                <div className="w-3 h-3 rounded-full bg-[#E0E0E0]" />
                                <div className="w-3 h-3 rounded-full bg-[#E0E0E0]" />
                            </div>
                            {/* Fake UI Body */}
                            <div className="p-8 grid grid-cols-3 gap-4 h-[300px]">
                                <div className="col-span-2 space-y-4">
                                    <div className="h-32 bg-[#F4F4F4] rounded w-full" />
                                    <div className="h-32 bg-[#F4F4F4] rounded w-full" />
                                </div>
                                <div className="col-span-1 space-y-4">
                                    <div className="h-full bg-[#F4F4F4] rounded w-full" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded shadow-lg border border-[#E0E0E0] flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#E8F0FE] rounded-full flex items-center justify-center text-[#0F62FE]">
                                <PieChart size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-[#525252]">Growth</div>
                                <div className="text-lg font-bold text-[#161616]">+124%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 bg-[#FAFAFA] border-b border-[#E0E0E0]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[#525252] text-sm font-semibold uppercase tracking-wider mb-8">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        <div className="text-xl font-bold font-corp">ACME Corp</div>
                        <div className="text-xl font-bold font-corp">GlobalBank</div>
                        <div className="text-xl font-bold font-corp">Stratosphere</div>
                        <div className="text-xl font-bold font-corp">Nebula</div>
                        <div className="text-xl font-bold font-corp">Umbrella</div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#161616] mb-4">Everything you need to scale</h2>
                        <p className="text-[#525252] text-lg">Our platform provides the infrastructure that modern teams need to move fast without breaking things.</p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and granular permission controls for your whole organization.' },
                            { icon: PieChart, title: 'Real-time Analytics', desc: 'Gain insights into your performance with our advanced dashboarding tools.' },
                            { icon: Users, title: 'Team Collaboration', desc: 'Built-in workflows to keep everyone on the same page, from marketing to engineering.' },
                        ].map((item, i) => (
                            <div key={i} className="card hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#E8F0FE] rounded-sm flex items-center justify-center text-[#0F62FE] mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-corp text-xl font-semibold text-[#161616] mb-3">{item.title}</h3>
                                <p className="font-corp text-[#525252] leading-relaxed">{item.desc}</p>
                                <a href="#" className="inline-block mt-4 text-[#0F62FE] font-medium hover:underline flex items-center gap-1">
                                    Learn more <ArrowRight size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#161616] text-[#C6C6C6] py-16">
                <div className={`max-w-7xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-4'} gap-12`}>
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-white mb-6">
                            <div className="w-6 h-6 bg-[#0F62FE] rounded-sm flex items-center justify-center text-white font-bold text-xs">C</div>
                            <span className="font-corp font-semibold text-lg">CorpSolution</span>
                        </div>
                        <p className="text-sm">Making business simple.</p>
                    </div>

                    {[
                        { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
                        { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
                        { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 className="text-white font-semibold mb-4">{col.title}</h4>
                            <ul className="space-y-3 text-sm">
                                {col.links.map(link => (
                                    <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={`max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#393939] text-sm flex flex-col ${isMobile ? 'items-center gap-4' : 'sm:flex-row justify-between'}`}>
                    <div>&copy; 2024 CorpSolution Inc.</div>
                    <div className="flex gap-4">
                        <span className="cursor-pointer hover:text-white">Twitter</span>
                        <span className="cursor-pointer hover:text-white">LinkedIn</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
