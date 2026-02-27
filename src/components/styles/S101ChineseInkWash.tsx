import { useState } from 'react';
import { Menu, X, Feather, Mountain, Droplets, Wind, ArrowRight, Pen } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S101ChineseInkWash = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isDesktop = deviceMode === 'desktop';

    return (
        <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A] overflow-x-hidden selection:bg-[#C41E3A]/20 selection:text-[#1A1A1A]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
                .font-serif-cn { font-family: 'Noto Serif SC', 'STSong', 'SimSun', serif; }
                .font-sans-cn { font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif; }

                .ink-wash-bg {
                    background: radial-gradient(ellipse at 50% 0%, rgba(26,26,26,0.06) 0%, transparent 60%),
                                radial-gradient(ellipse at 80% 100%, rgba(26,26,26,0.04) 0%, transparent 50%);
                }

                .ink-stroke {
                    position: relative;
                }
                .ink-stroke::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #1A1A1A 15%, #1A1A1A 85%, transparent);
                    opacity: 0.2;
                }

                .seal-stamp {
                    color: #C41E3A;
                    border: 2px solid #C41E3A;
                    padding: 4px 8px;
                    font-size: 12px;
                    line-height: 1;
                    letter-spacing: 0.1em;
                    transform: rotate(-3deg);
                    opacity: 0.85;
                }

                .paper-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
                    opacity: 0.03;
                }

                .mountain-silhouette {
                    background: linear-gradient(180deg, transparent 0%, transparent 60%, rgba(26,26,26,0.04) 60%, rgba(26,26,26,0.08) 75%, rgba(26,26,26,0.03) 85%, transparent 100%);
                    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M0,200 L0,120 Q100,40 200,100 Q300,20 400,80 Q500,10 600,60 Q700,0 800,70 Q900,30 1000,90 Q1100,50 1200,110 L1200,200 Z' fill='black'/%3E%3C/svg%3E");
                    mask-size: 100% 100%;
                    mask-repeat: no-repeat;
                }

                .ink-card {
                    background: #FFFDF7;
                    border: 1px solid rgba(26,26,26,0.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .ink-card:hover {
                    box-shadow: 0 8px 32px rgba(26,26,26,0.08);
                    border-color: rgba(26,26,26,0.2);
                }

                .brush-divider {
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(26,26,26,0.15) 20%, rgba(26,26,26,0.15) 80%, transparent);
                }
            `}</style>

            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 paper-texture pointer-events-none z-50" />

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-[#F5F0E8]/90 backdrop-blur-sm border-b border-[#1A1A1A]/8">
                <div className="max-w-[1080px] mx-auto flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="seal-stamp font-serif-cn font-bold">墨</div>
                        <span className="font-serif-cn font-bold text-xl tracking-wider">墨韻</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['理念', '作品', '工藝', '聯繫'].map((item) => (
                            <a key={item} href="#" className="font-sans-cn text-sm text-[#4A4540] hover:text-[#1A1A1A] transition-colors tracking-widest">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="font-sans-cn text-sm bg-[#1A1A1A] text-[#F5F0E8] px-5 py-2 hover:bg-[#2C2C2C] transition-colors tracking-wider">
                            探索
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#1A1A1A]">
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-[#F5F0E8]/95 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#FFFDF7] border-l border-[#1A1A1A]/10 p-8 pt-20">
                        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6"><X size={20} /></button>
                        <div className="flex flex-col gap-6">
                            {['理念', '作品', '工藝', '聯繫'].map((item) => (
                                <a key={item} href="#" onClick={() => setMenuOpen(false)} className="font-serif-cn text-lg text-[#1A1A1A] tracking-widest">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center px-6 ink-wash-bg">
                {/* Mountain silhouette background */}
                <div className="absolute inset-0 mountain-silhouette opacity-40 pointer-events-none" />

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-block seal-stamp font-serif-cn mb-8">
                        水墨之道
                    </div>

                    <h1 className={`font-serif-cn font-black ${isMobile ? 'text-4xl' : 'text-5xl md:text-7xl'} leading-tight mb-6 tracking-wide`}>
                        以墨為魂<br />
                        <span className="text-[#4A4540]">以白為境</span>
                    </h1>

                    <p className={`font-sans-cn ${isMobile ? 'text-base' : 'text-lg'} text-[#4A4540] mb-10 max-w-xl mx-auto leading-relaxed tracking-wider`}>
                        在留白與墨韻之間，尋找設計的本質。
                        以千年水墨美學，詮釋當代數位體驗。
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="font-sans-cn bg-[#1A1A1A] text-[#F5F0E8] px-8 py-3 text-sm tracking-widest hover:bg-[#2C2C2C] transition-colors flex items-center gap-2">
                            開始探索 <ArrowRight size={16} />
                        </button>
                        <button className="font-sans-cn border border-[#1A1A1A]/20 text-[#1A1A1A] px-8 py-3 text-sm tracking-widest hover:border-[#1A1A1A]/40 transition-colors">
                            了解更多
                        </button>
                    </div>
                </div>
            </section>

            {/* Brush Divider */}
            <div className="brush-divider mx-auto max-w-[800px]" />

            {/* Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1080px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-sans-cn text-sm text-[#8A8478] tracking-[0.3em] mb-3">核心理念</p>
                        <h2 className="font-serif-cn font-bold text-3xl md:text-4xl tracking-wider">墨分五色，意在筆先</h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Droplets, title: '墨韻', subtitle: 'Ink Rhythm', desc: '層次分明的墨色變化，從濃到淡，營造深邃的視覺層次。' },
                            { icon: Wind, title: '留白', subtitle: 'White Space', desc: '以空為境，讓呼吸的空間成為設計中最有力的元素。' },
                            { icon: Mountain, title: '意境', subtitle: 'Artistic Mood', desc: '超越形似，追求神韻，在數位世界中傳遞東方美學的意境。' },
                        ].map((item, i) => (
                            <div key={i} className="ink-card p-8 group">
                                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-[#1A1A1A]/10">
                                    <item.icon size={24} className="text-[#4A4540]" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif-cn font-bold text-xl mb-1 tracking-wider">{item.title}</h3>
                                <p className="font-sans-cn text-xs text-[#8A8478] mb-3 tracking-widest uppercase">{item.subtitle}</p>
                                <p className="font-sans-cn text-sm text-[#4A4540] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brush Divider */}
            <div className="brush-divider mx-auto max-w-[800px]" />

            {/* Showcase Section */}
            <section className="py-20 px-6 bg-[#EDE7DB]/50">
                <div className="max-w-[1080px] mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>
                        <div>
                            <p className="font-sans-cn text-sm text-[#8A8478] tracking-[0.3em] mb-3">設計哲學</p>
                            <h2 className="font-serif-cn font-bold text-3xl md:text-4xl mb-6 tracking-wider leading-snug">
                                一筆一墨<br />皆有深意
                            </h2>
                            <p className="font-sans-cn text-[#4A4540] leading-relaxed mb-6 tracking-wider">
                                水墨畫不只是一種技法，更是一種哲學。每一個留白都是刻意的選擇，
                                每一筆墨色都承載著意義。我們將這份千年智慧融入現代數位設計之中。
                            </p>
                            <div className="flex gap-8 mb-8">
                                {[
                                    { num: '1000+', label: '年美學傳承' },
                                    { num: '五色', label: '墨韻層次' },
                                    { num: '∞', label: '留白意境' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="font-serif-cn font-bold text-2xl text-[#1A1A1A]">{stat.num}</div>
                                        <div className="font-sans-cn text-xs text-[#8A8478] tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ink wash art placeholder */}
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#FFFDF7] to-[#EDE7DB] border border-[#1A1A1A]/8 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <Feather size={48} className="text-[#B0A89A] mx-auto mb-4" strokeWidth={1} />
                                    <p className="font-serif-cn text-[#B0A89A] text-lg tracking-widest">山水意境</p>
                                </div>
                            </div>
                            {/* Decorative ink strokes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A1A1A]/5 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-48 h-24 bg-gradient-to-tr from-[#1A1A1A]/3 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative">
                <div className="absolute inset-0 mountain-silhouette opacity-20 pointer-events-none rotate-180" />
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <div className="seal-stamp inline-block font-serif-cn mb-6">誠邀</div>
                    <h2 className="font-serif-cn font-bold text-3xl md:text-4xl mb-4 tracking-wider">
                        與墨同行
                    </h2>
                    <p className="font-sans-cn text-[#4A4540] mb-8 tracking-wider leading-relaxed">
                        讓千年水墨美學，為您的數位作品注入東方靈魂。
                    </p>
                    <button className="font-sans-cn bg-[#C41E3A] text-white px-10 py-3 text-sm tracking-widest hover:bg-[#A8182F] transition-colors">
                        立即開始
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#1A1A1A]/8 py-12 px-6 bg-[#EDE7DB]/30">
                <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="seal-stamp font-serif-cn font-bold text-xs">墨</div>
                        <span className="font-serif-cn text-sm tracking-wider">墨韻設計</span>
                    </div>
                    <p className="font-sans-cn text-xs text-[#8A8478] tracking-wider">
                        © 2024 墨韻 — 以墨為魂，以白為境
                    </p>
                </div>
            </footer>
        </div>
    );
};
