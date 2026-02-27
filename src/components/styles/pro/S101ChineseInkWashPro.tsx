import React, { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import {
    Menu,
    X,
    Feather,
    Mountain,
    Droplets,
    Wind,
    ArrowRight,
    Pen,
    Sparkles,
    Eye,
    Layers,
    CircleDot,
    Quote,
    ChevronDown,
    Check,
} from 'lucide-react';

export const S101ChineseInkWashPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState<number | null>(0);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isDesktop = deviceMode === 'desktop';
    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen bg-[#F5F0E8] text-[#0D0D0D] overflow-x-hidden selection:bg-[#C41E3A]/20 selection:text-[#0D0D0D]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@300;400;500;700&family=LXGW+WenKai:wght@300;400;700&display=swap');
                .font-serif-cn { font-family: 'Noto Serif SC', 'STSong', 'SimSun', serif; }
                .font-sans-cn { font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif; }
                .font-kai { font-family: 'LXGW WenKai', 'KaiTi', 'Noto Serif SC', serif; }

                .ink-wash-hero {
                    background:
                        radial-gradient(ellipse at 30% 20%, rgba(26,26,26,0.07) 0%, transparent 50%),
                        radial-gradient(ellipse at 70% 80%, rgba(26,26,26,0.05) 0%, transparent 40%),
                        radial-gradient(ellipse at 50% 50%, rgba(26,26,26,0.02) 0%, transparent 70%);
                }

                .ink-splash {
                    position: relative;
                }
                .ink-splash::before {
                    content: '';
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    background: radial-gradient(circle, rgba(26,26,26,0.06) 0%, rgba(26,26,26,0.02) 40%, transparent 70%);
                    border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%;
                    top: -30px;
                    right: -30px;
                    pointer-events: none;
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
                    display: inline-block;
                }

                .seal-stamp-lg {
                    color: #C41E3A;
                    border: 3px solid #C41E3A;
                    padding: 8px 12px;
                    font-size: 16px;
                    line-height: 1;
                    letter-spacing: 0.15em;
                    transform: rotate(-5deg);
                    opacity: 0.8;
                    display: inline-block;
                }

                .paper-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
                    opacity: 0.03;
                }

                .ink-card {
                    background: #FFFDF7;
                    border: 1px solid rgba(26,26,26,0.08);
                    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .ink-card:hover {
                    box-shadow: 0 12px 48px rgba(26,26,26,0.1);
                    border-color: rgba(26,26,26,0.18);
                    transform: translateY(-2px);
                }

                .ink-card-dark {
                    background: #1A1614;
                    border: 1px solid rgba(255,253,247,0.08);
                    color: #EDE7DB;
                    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .ink-card-dark:hover {
                    box-shadow: 0 12px 48px rgba(0,0,0,0.3);
                    border-color: rgba(255,253,247,0.15);
                }

                .brush-divider {
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(26,26,26,0.12) 20%, rgba(26,26,26,0.12) 80%, transparent);
                }

                .brush-divider-thick {
                    height: 4px;
                    background: linear-gradient(90deg, transparent 0%, rgba(26,26,26,0.03) 10%, rgba(26,26,26,0.18) 30%, rgba(26,26,26,0.2) 50%, rgba(26,26,26,0.18) 70%, rgba(26,26,26,0.03) 90%, transparent 100%);
                    border-radius: 2px;
                }

                .gold-accent {
                    color: #B8963E;
                }

                .gold-border {
                    border-color: rgba(184, 150, 62, 0.3);
                }

                .mist-overlay {
                    background: linear-gradient(180deg,
                        transparent 0%,
                        rgba(245,240,232,0.3) 30%,
                        rgba(245,240,232,0.6) 50%,
                        rgba(245,240,232,0.3) 70%,
                        transparent 100%
                    );
                    pointer-events: none;
                }

                .mountain-bg {
                    background: linear-gradient(180deg, transparent 0%, transparent 55%,
                        rgba(26,26,26,0.03) 60%, rgba(26,26,26,0.06) 70%,
                        rgba(26,26,26,0.04) 80%, rgba(26,26,26,0.02) 90%, transparent 100%);
                }

                .scroll-border {
                    border: 2px solid rgba(26,26,26,0.1);
                    box-shadow: inset 0 0 0 4px #F5F0E8, inset 0 0 0 5px rgba(26,26,26,0.06);
                }

                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }

                @keyframes inkFade {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .ink-fade-in {
                    animation: inkFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }

                @keyframes brushStroke {
                    from { width: 0; }
                    to { width: 100%; }
                }

                .pricing-popular {
                    position: relative;
                }
                .pricing-popular::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border: 2px solid #C41E3A;
                    opacity: 0.3;
                    pointer-events: none;
                }
            `}</style>

            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 paper-texture pointer-events-none z-[60]" />

            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-[#F5F0E8]/85 backdrop-blur-md border-b border-[#0D0D0D]/6">
                <div
                    className="max-w-[1200px] mx-auto flex items-center justify-between"
                    style={{ padding: `${spacing.sm} ${spacing.lg}` }}
                >
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="seal-stamp font-serif-cn font-bold">墨</div>
                        <div className="flex flex-col">
                            <span className="font-serif-cn font-bold text-lg tracking-[0.15em] leading-tight">墨韻</span>
                            <span className="font-sans-cn text-[10px] text-[#8A8478] tracking-[0.2em]">INK RHYME</span>
                        </div>
                    </div>

                    {!responsive.nav.showMobile && (
                        <nav className="flex items-center gap-8">
                            {['理念', '作品', '工藝', '定價', '聯繫'].map((item) => (
                                <a key={item} href="#" className="font-sans-cn text-sm text-[#4A4540] hover:text-[#0D0D0D] transition-colors tracking-[0.15em] relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0D0D0D] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-3">
                        <button className="font-sans-cn text-sm bg-[#0D0D0D] text-[#F5F0E8] px-6 py-2.5 hover:bg-[#2C2C2C] transition-colors tracking-[0.15em]">
                            開始創作
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#0D0D0D]">
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-[#F5F0E8]/95 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#FFFDF7] border-l border-[#0D0D0D]/8 p-8 pt-20">
                        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-[#0D0D0D]"><X size={20} /></button>
                        <div className="flex flex-col gap-6">
                            {['理念', '作品', '工藝', '定價', '聯繫'].map((item) => (
                                <a key={item} href="#" onClick={() => setMenuOpen(false)} className="font-serif-cn text-xl text-[#0D0D0D] tracking-[0.2em] hover:text-[#C41E3A] transition-colors">
                                    {item}
                                </a>
                            ))}
                            <div className="brush-divider mt-4 mb-2" />
                            <button className="font-sans-cn text-sm bg-[#0D0D0D] text-[#F5F0E8] px-6 py-3 tracking-[0.15em] w-full">
                                開始創作
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center ink-wash-hero overflow-hidden" style={{ padding: `0 ${spacing.lg}` }}>
                {/* Mountain background */}
                <div className="absolute inset-0 mountain-bg pointer-events-none" />

                {/* Decorative vertical text */}
                {isDesktop && (
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 vertical-text font-kai text-[#B0A89A]/40 text-sm tracking-[0.5em]">
                        水墨丹青・意在筆先
                    </div>
                )}

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div className="seal-stamp-lg font-serif-cn mb-10">
                        水墨之道
                    </div>

                    <h1 className={`font-serif-cn font-black ${isMobile ? 'text-4xl' : 'text-6xl md:text-8xl'} leading-[1.2] mb-8 tracking-[0.05em]`}>
                        以墨為魂<br />
                        <span className="text-[#3A3530]">以白為境</span>
                    </h1>

                    <p className={`font-kai ${isMobile ? 'text-base' : 'text-xl'} text-[#4A4540] mb-12 max-w-2xl mx-auto leading-relaxed tracking-[0.08em]`}>
                        在留白與墨韻之間，尋找設計的本質。
                        以千年水墨美學，詮釋當代數位體驗。
                        一筆一墨，皆有深意。
                    </p>

                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center gap-4`}>
                        <button className="font-sans-cn bg-[#0D0D0D] text-[#F5F0E8] px-10 py-4 text-sm tracking-[0.2em] hover:bg-[#2C2C2C] transition-all duration-300 flex items-center justify-center gap-3 group">
                            開始探索
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="font-sans-cn border-2 border-[#0D0D0D]/15 text-[#0D0D0D] px-10 py-4 text-sm tracking-[0.2em] hover:border-[#0D0D0D]/30 transition-all duration-300">
                            觀看演示
                        </button>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-16 flex flex-col items-center gap-2 text-[#B0A89A]">
                        <span className="font-sans-cn text-xs tracking-[0.3em]">向下探索</span>
                        <ChevronDown size={16} className="animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-sans-cn text-xs text-[#8A8478] tracking-[0.4em] mb-4 uppercase">Philosophy</p>
                        <h2 className="font-serif-cn font-bold text-3xl md:text-5xl tracking-[0.05em] mb-4">墨分五色，意在筆先</h2>
                        <p className="font-kai text-[#4A4540] max-w-xl mx-auto tracking-wider">以焦、濃、重、淡、清五種墨色，構建完整的視覺語言體系</p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { icon: Droplets, title: '墨韻', subtitle: 'Ink Rhythm', desc: '層次分明的墨色變化，從濃墨重彩到淡墨輕煙，營造深邃的視覺層次與情感張力。' },
                            { icon: Wind, title: '留白', subtitle: 'White Space', desc: '以空為境，讓呼吸的空間成為設計中最有力的元素。留白不是空白，而是無聲的表達。' },
                            { icon: Mountain, title: '意境', subtitle: 'Artistic Mood', desc: '超越形似，追求神韻。在數位世界中傳遞東方美學特有的空靈與深遠意境。' },
                        ].map((item, i) => (
                            <div key={i} className="ink-card p-10 group ink-splash">
                                <div className="w-14 h-14 flex items-center justify-center mb-8 border border-[#0D0D0D]/8 group-hover:border-[#0D0D0D]/20 transition-colors">
                                    <item.icon size={26} className="text-[#4A4540]" strokeWidth={1.2} />
                                </div>
                                <h3 className="font-serif-cn font-bold text-2xl mb-1 tracking-[0.1em]">{item.title}</h3>
                                <p className="font-sans-cn text-[10px] text-[#8A8478] mb-4 tracking-[0.25em] uppercase">{item.subtitle}</p>
                                <p className="font-sans-cn text-sm text-[#4A4540] leading-[1.8] tracking-wider">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brush Divider */}
            <div className="brush-divider-thick mx-auto max-w-[600px]" />

            {/* Showcase / Vision Section */}
            <section className="bg-[#1A1614] text-[#EDE7DB]" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-10' : 'md:grid-cols-2 gap-16'} items-center`}>
                        <div>
                            <p className="font-sans-cn text-xs text-[#8A8478] tracking-[0.4em] mb-4 uppercase">Vision</p>
                            <h2 className="font-serif-cn font-bold text-3xl md:text-5xl mb-6 tracking-[0.05em] leading-snug">
                                一筆一墨<br />皆有深意
                            </h2>
                            <p className="font-kai text-[#B0A89A] leading-[2] mb-8 tracking-wider">
                                水墨畫不只是一種技法，更是一種哲學。每一個留白都是刻意的選擇，
                                每一筆墨色都承載著意義。我們將這份千年智慧融入現代數位設計之中，
                                讓古典美學在當代重新綻放。
                            </p>

                            <div className="flex gap-10 mb-8">
                                {[
                                    { num: '1000+', label: '年美學傳承' },
                                    { num: '五色', label: '墨韻層次' },
                                    { num: '∞', label: '留白意境' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="font-serif-cn font-bold text-3xl text-[#EDE7DB]">{stat.num}</div>
                                        <div className="font-sans-cn text-[10px] text-[#8A8478] tracking-[0.2em] mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <button className="font-sans-cn border border-[#EDE7DB]/20 text-[#EDE7DB] px-8 py-3 text-sm tracking-[0.2em] hover:border-[#EDE7DB]/40 hover:bg-[#EDE7DB]/5 transition-all duration-300 flex items-center gap-3 group">
                                深入了解 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Ink wash art display */}
                        <div className="relative aspect-[3/4] scroll-border overflow-hidden bg-gradient-to-b from-[#2C2C2C] to-[#1A1614]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <Mountain size={64} className="text-[#4A4540] mx-auto mb-6" strokeWidth={0.8} />
                                    <p className="font-serif-cn text-[#4A4540] text-xl tracking-[0.3em]">山水意境</p>
                                    <p className="font-kai text-[#3A3530] text-sm mt-2 tracking-widest">遠山含黛・煙波浩渺</p>
                                </div>
                            </div>
                            {/* Ink wash effects */}
                            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0D0D0D]/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0D0D0D]/15 to-transparent" />
                            {/* Seal stamp decoration */}
                            <div className="absolute bottom-8 right-8 seal-stamp font-serif-cn text-[10px]">墨韻</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bento Grid */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-sans-cn text-xs text-[#8A8478] tracking-[0.4em] mb-4 uppercase">Craftsmanship</p>
                        <h2 className="font-serif-cn font-bold text-3xl md:text-5xl tracking-[0.05em]">匠心工藝</h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-6'} gap-4`}>
                        {/* Large card */}
                        <div className="ink-card p-8 md:col-span-4 md:row-span-2 flex flex-col justify-between min-h-[280px]">
                            <div>
                                <Eye size={28} className="text-[#4A4540] mb-4" strokeWidth={1.2} />
                                <h3 className="font-serif-cn font-bold text-2xl mb-2 tracking-wider">宣紙質感</h3>
                                <p className="font-sans-cn text-sm text-[#4A4540] leading-[1.8] max-w-md tracking-wider">
                                    真實還原宣紙的纖維紋理與吸墨特性，讓每一個像素都散發出手工紙張的溫潤質感。
                                </p>
                            </div>
                            <div className="flex gap-4 mt-6">
                                {['焦', '濃', '重', '淡', '清'].map((tone, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <div
                                            className="w-10 h-10 rounded-sm"
                                            style={{ backgroundColor: `rgba(13,13,13,${1 - i * 0.2})` }}
                                        />
                                        <span className="font-serif-cn text-xs text-[#8A8478]">{tone}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Small cards */}
                        <div className="ink-card p-6 md:col-span-2 flex flex-col justify-between">
                            <Pen size={24} className="text-[#4A4540] mb-3" strokeWidth={1.2} />
                            <div>
                                <h4 className="font-serif-cn font-bold text-lg mb-1 tracking-wider">書法字型</h4>
                                <p className="font-sans-cn text-xs text-[#8A8478] leading-relaxed tracking-wider">楷書、行書、草書多種書體支援</p>
                            </div>
                        </div>
                        <div className="ink-card p-6 md:col-span-2 flex flex-col justify-between">
                            <Layers size={24} className="text-[#4A4540] mb-3" strokeWidth={1.2} />
                            <div>
                                <h4 className="font-serif-cn font-bold text-lg mb-1 tracking-wider">墨色層次</h4>
                                <p className="font-sans-cn text-xs text-[#8A8478] leading-relaxed tracking-wider">五色墨韻構建完整設計系統</p>
                            </div>
                        </div>

                        {/* Medium cards */}
                        <div className="ink-card p-6 md:col-span-3">
                            <CircleDot size={24} className="text-[#C41E3A] mb-3" strokeWidth={1.2} />
                            <h4 className="font-serif-cn font-bold text-lg mb-1 tracking-wider">印章元素</h4>
                            <p className="font-sans-cn text-xs text-[#8A8478] leading-relaxed tracking-wider">朱紅印章點綴，傳統與現代的完美融合</p>
                        </div>
                        <div className="ink-card p-6 md:col-span-3">
                            <Sparkles size={24} className="gold-accent mb-3" strokeWidth={1.2} />
                            <h4 className="font-serif-cn font-bold text-lg mb-1 tracking-wider">金箔點綴</h4>
                            <p className="font-sans-cn text-xs text-[#8A8478] leading-relaxed tracking-wider">細膩金箔裝飾，增添典雅華貴的氣質</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-[#EDE7DB]/60" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-sans-cn text-xs text-[#8A8478] tracking-[0.4em] mb-4 uppercase">Testimonials</p>
                        <h2 className="font-serif-cn font-bold text-3xl md:text-4xl tracking-[0.05em]">墨客心聲</h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { quote: '水墨風格讓我的作品集瞬間提升了一個層次，東方美學的力量不可思議。', name: '陳設計師', role: '品牌設計總監' },
                            { quote: '留白的運用恰到好處，每一個細節都能感受到千年文化的底蘊。', name: '林創意', role: '藝術指導' },
                            { quote: '終於找到了能完美融合傳統與現代的設計風格，客戶非常滿意。', name: '王開發', role: '全端工程師' },
                        ].map((item, i) => (
                            <div key={i} className="ink-card p-8">
                                <Quote size={24} className="text-[#B0A89A] mb-4" strokeWidth={1} />
                                <p className="font-kai text-sm text-[#3A3530] leading-[2] mb-6 tracking-wider">{item.quote}</p>
                                <div className="brush-divider mb-4" />
                                <div>
                                    <p className="font-serif-cn font-bold text-sm tracking-wider">{item.name}</p>
                                    <p className="font-sans-cn text-xs text-[#8A8478] tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-sans-cn text-xs text-[#8A8478] tracking-[0.4em] mb-4 uppercase">Pricing</p>
                        <h2 className="font-serif-cn font-bold text-3xl md:text-4xl tracking-[0.05em] mb-3">選擇墨道</h2>
                        <p className="font-kai text-[#4A4540] tracking-wider">從入門到精通，選擇適合您的創作之路</p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6 max-w-4xl mx-auto`}>
                        {[
                            { name: '淡墨', price: '免費', desc: '適合初學入門', features: ['基礎水墨調色盤', '3 種宣紙質感', '社群支援'], popular: false },
                            { name: '濃墨', price: '¥99/月', desc: '專業創作者首選', features: ['完整五色墨韻系統', '12 種宣紙質感', '印章生成器', '金箔裝飾元素', '優先技術支援'], popular: true },
                            { name: '焦墨', price: '¥299/月', desc: '團隊與企業方案', features: ['一切濃墨方案內容', '自訂墨色體系', '品牌印章設計', '專屬設計顧問', 'API 存取權限'], popular: false },
                        ].map((plan, i) => (
                            <div key={i} className={`ink-card p-8 flex flex-col ${plan.popular ? 'pricing-popular' : ''}`}>
                                {plan.popular && (
                                    <div className="seal-stamp font-serif-cn mb-4 self-start">推薦</div>
                                )}
                                <h3 className="font-serif-cn font-bold text-xl tracking-[0.1em] mb-1">{plan.name}</h3>
                                <p className="font-sans-cn text-xs text-[#8A8478] mb-4 tracking-wider">{plan.desc}</p>
                                <div className="font-serif-cn font-bold text-3xl mb-6">{plan.price}</div>
                                <ul className="flex-1 space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <Check size={14} className="text-[#4A4540] mt-0.5 shrink-0" />
                                            <span className="font-sans-cn text-sm text-[#4A4540] tracking-wider">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`font-sans-cn w-full py-3 text-sm tracking-[0.15em] transition-all duration-300 ${plan.popular ? 'bg-[#0D0D0D] text-[#F5F0E8] hover:bg-[#2C2C2C]' : 'border border-[#0D0D0D]/15 text-[#0D0D0D] hover:border-[#0D0D0D]/30'}`}>
                                    選擇方案
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#EDE7DB]/40" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-[800px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-sans-cn text-xs text-[#8A8478] tracking-[0.4em] mb-4 uppercase">FAQ</p>
                        <h2 className="font-serif-cn font-bold text-3xl md:text-4xl tracking-[0.05em]">常見問答</h2>
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: '水墨風格適合哪些類型的專案？', a: '水墨風格特別適合文化藝術、品牌形象、教育機構、茶道花藝等具有東方美學需求的專案，同時也能為科技產品帶來獨特的差異化設計。' },
                            { q: '是否支援響應式設計？', a: '完全支援。從桌面到行動裝置，水墨風格的留白原則與墨韻層次會自動適配不同螢幕尺寸，確保在任何裝置上都能呈現最佳效果。' },
                            { q: '可以自訂墨色和印章嗎？', a: '濃墨方案以上支援完整的墨色自訂，包括五色墨韻的色值調整、印章圖案生成，以及金箔裝飾的樣式選擇。' },
                            { q: '與其他設計系統相容嗎？', a: '是的，水墨風格的設計 Token 系統完全相容 Tailwind CSS、CSS Variables 等主流方案，可以輕鬆整合到您現有的設計工作流程中。' },
                        ].map((item, i) => (
                            <div key={i} className="ink-card">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-serif-cn font-bold text-sm tracking-wider pr-4">{item.q}</span>
                                    <ChevronDown size={16} className={`text-[#8A8478] shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} />
                                </button>
                                {faqOpen === i && (
                                    <div className="px-6 pb-6 ink-fade-in">
                                        <div className="brush-divider mb-4" />
                                        <p className="font-sans-cn text-sm text-[#4A4540] leading-[2] tracking-wider">{item.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-[#1A1614] text-[#EDE7DB] overflow-hidden" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                {/* Mist effect */}
                <div className="absolute inset-0 mist-overlay opacity-10" />
                <div className="absolute inset-0 mountain-bg opacity-30 rotate-180" />

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <div className="seal-stamp-lg font-serif-cn mb-8">誠邀</div>
                    <h2 className="font-serif-cn font-bold text-3xl md:text-5xl mb-6 tracking-[0.05em] leading-snug">
                        與墨同行<br />共繪未來
                    </h2>
                    <p className="font-kai text-[#B0A89A] mb-10 tracking-wider leading-[2] max-w-lg mx-auto">
                        讓千年水墨美學，為您的數位作品注入東方靈魂。<br />
                        從第一筆墨色開始，書寫屬於您的設計篇章。
                    </p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center gap-4`}>
                        <button className="font-sans-cn bg-[#C41E3A] text-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-[#A8182F] transition-all duration-300">
                            立即開始
                        </button>
                        <button className="font-sans-cn border border-[#EDE7DB]/20 text-[#EDE7DB] px-12 py-4 text-sm tracking-[0.2em] hover:border-[#EDE7DB]/40 transition-all duration-300">
                            預約演示
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#0D0D0D]/6 bg-[#EDE7DB]/30" style={{ padding: `${spacing.xl} ${spacing.lg}` }}>
                <div className="max-w-[1200px] mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'md:grid-cols-4 gap-12'} mb-12`}>
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="seal-stamp font-serif-cn font-bold text-xs">墨</div>
                                <span className="font-serif-cn font-bold tracking-[0.15em]">墨韻</span>
                            </div>
                            <p className="font-sans-cn text-xs text-[#8A8478] leading-relaxed tracking-wider">
                                以墨為魂，以白為境。<br />
                                千年美學的數位新生。
                            </p>
                        </div>
                        {[
                            { title: '產品', links: ['風格庫', '設計系統', '文檔', 'API'] },
                            { title: '資源', links: ['教學', '部落格', '社群', '案例'] },
                            { title: '關於', links: ['團隊', '聯繫我們', '隱私政策', '使用條款'] },
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="font-serif-cn font-bold text-sm mb-4 tracking-[0.1em]">{col.title}</h4>
                                <ul className="space-y-2">
                                    {col.links.map((link, j) => (
                                        <li key={j}>
                                            <a href="#" className="font-sans-cn text-xs text-[#8A8478] hover:text-[#0D0D0D] transition-colors tracking-wider">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="brush-divider mb-6" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-sans-cn text-[10px] text-[#8A8478] tracking-[0.15em]">
                            © 2024 墨韻設計 — 以墨為魂，以白為境
                        </p>
                        <p className="font-kai text-[10px] text-[#B0A89A] tracking-[0.2em]">
                            水墨丹青・匠心獨運
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
