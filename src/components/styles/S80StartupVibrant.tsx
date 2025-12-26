import { useState } from 'react';
import { Rocket, Zap, Globe, Menu, X, ArrowRight, Play } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S80StartupVibrant = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-white font-sans text-[#0A2540] overflow-x-hidden selection:bg-[#635BFF] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Inter:wght@400;500&display=swap');
        .font-brand { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        
        .bg-mesh {
          background-color: #f7f9fc;
          background-image: 
            radial-gradient(at 0% 0%, hsla(253,100%,68%,0.2) 0px, transparent 50%),
            radial-gradient(at 100% 0%, hsla(189,100%,50%,0.2) 0px, transparent 50%);
        }
        
        .btn-pill {
          border-radius: 9999px;
          transition: transform 0.2s cubic-bezier(0.3, 0, 0.5, 1), box-shadow 0.2s;
        }
        .btn-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(99, 91, 255, 0.4);
        }
        
        .tilt-card {
           transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
           transition: transform 0.5s ease;
        }
        .tilt-card:hover {
           transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-[#635BFF] rounded-xl flex items-center justify-center text-white transform -rotate-6 shadow-md">
                            <Rocket size={20} className="transform rotate-6" />
                        </div>
                        <span className="font-brand font-bold text-2xl tracking-tight text-[#0A2540]">LaunchPad</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Product', 'Solutions', 'Developers', 'Pricing'].map((item) => (
                            <a key={item} href="#" className="font-body text-[#425466] hover:text-[#0A2540] font-medium transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`text-[#0A2540] font-bold text-sm cursor-pointer hover:opacity-80 ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>Sign in</span>
                        <button className="bg-[#635BFF] text-white px-6 py-2.5 text-sm font-bold btn-pill hover:bg-[#5851E3]">
                            Start Now
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#0A2540]" /> : <Menu size={24} className="text-[#0A2540]" />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50 pointer-events-auto" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Product
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
                                Developers
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
            <section className="pt-40 pb-24 px-6 bg-mesh relative overflow-hidden">
                {/* Decorative blobbies */}
                <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" />
                <div className="absolute top-20 -right-20 w-96 h-96 bg-[#635BFF] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse delay-1000" />

                <div className={`max-w-6xl mx-auto relative z-10 grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div className={`${isMobile ? 'text-center' : 'lg:text-left'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF0FF] text-[#635BFF] font-bold text-xs uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span> New Release 2.0
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-7xl'} font-brand font-extrabold text-[#0A2540] mb-6 leading-[1.1] tracking-tight`}>
                            Payments infrastructure <br />
                            for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#00D4FF]">internet</span>
                        </h1>

                        <p className={`font-body text-xl text-[#425466] mb-10 max-w-lg mx-auto ${isMobile ? '' : 'lg:mx-0'} leading-relaxed`}>
                            Millions of businesses of all sizes—from startups to large enterprises—use our software to accept payments.
                        </p>

                        <div className={`flex gap-4 justify-center ${isMobile ? '' : 'lg:justify-start'}`}>
                            <button className="bg-[#0A2540] text-white px-8 py-4 rounded-full font-bold btn-pill flex items-center gap-2">
                                Start Building <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 text-[#0A2540] font-bold flex items-center gap-2 hover:bg-gray-50 rounded-full transition-colors">
                                <Play size={18} className="fill-[#0A2540]" /> Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Floating Cards UI */}
                    <div className="relative h-[480px] w-full hidden lg:block">
                        <div className="absolute top-10 right-10 w-[80%] h-full bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border border-gray-100 p-8 transform rotate-3 transition-transform duration-500 hover:rotate-0">
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-2xl font-brand font-bold">Total Revenue</div>
                                <span className="bg-[#E3F9E5] text-[#0E6245] px-2 py-1 rounded text-xs font-bold">+12.5%</span>
                            </div>
                            <div className="h-40 flex items-end justify-between gap-2 mb-8">
                                {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                                    <div key={i} className="w-full bg-[#635BFF] rounded-t-sm opacity-90 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-100 rounded w-full"></div>
                                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                            </div>
                        </div>

                        {/* Overlapping Card */}
                        <div className="absolute bottom-20 left-0 w-[50%] bg-white rounded-xl shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25)] p-6 border border-gray-100 transform -rotate-3 hover:scale-105 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#00D4FF] flex items-center justify-center text-white">
                                    <Zap size={20} fill="white" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#0A2540]">New Sale</div>
                                    <div className="text-xs text-gray-500">Just now via API</div>
                                </div>
                            </div>
                            <div className="text-3xl font-brand font-bold text-[#0A2540]">$1,240.00</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 px-6 bg-white relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                        {[
                            { icon: Globe, title: 'Global Coverage', desc: 'Accept payments from around the world with a single integration.' },
                            { icon: Zap, title: 'Instant Payouts', desc: 'Get your funds instantly, 24/7, even on weekends and holidays.' },
                            { icon: Rocket, title: 'Scale Faster', desc: 'Launch new markets and products with our pre-built flows.' },
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="w-12 h-12 rounded-full bg-[#EBF0FF] flex items-center justify-center text-[#635BFF] mb-6 group-hover:bg-[#635BFF] group-hover:text-white transition-colors duration-300">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-brand text-xl font-bold text-[#0A2540] mb-3">{item.title}</h3>
                                <p className="font-body text-[#425466] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#f7f9fc] py-20 px-6 border-t border-gray-200">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-4'} gap-12 text-sm`}>
                    <div className="col-span-1">
                        <div className="font-brand font-bold text-xl text-[#0A2540] mb-4">LaunchPad</div>
                        <p className="text-[#425466]">© 2024 LaunchPad Inc.</p>
                    </div>

                    {['Products', 'Resources', 'Support'].map((col) => (
                        <div key={col}>
                            <h4 className="font-bold text-[#0A2540] mb-4">{col}</h4>
                            <ul className="space-y-3">
                                {['Overview', 'Features', 'Solutions', 'Tutorials'].map((link) => (
                                    <li key={link}><a href="#" className="text-[#425466] hover:text-[#635BFF] transition-colors">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
};
