import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Monitor, Folder, FileText, HardDrive, Trash2, Minus, Square, Info, Shield, Globe, Users, Power } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S32Windows95Pro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [startOpen, setStartOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [booting, setBooting] = useState(true);
    const [activeWindow, setActiveWindow] = useState('welcome'); // welcome, features, pricing, testimonials
    const [minimized, setMinimized] = useState<string[]>([]);

    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#008080',
        surface: '#C0C0C0',
        text: '#000000',
        blue: '#000080',
        white: '#FFFFFF',
        grayObj: '#808080',
        grayLight: '#DFDFDF'
    };

    // Win95 Borders
    const win = {
        outset: '2px solid #FFF',
        outsetShadow: 'inset -2px -2px #808080, inset 2px 2px #DFDFDF', // Classic 3D button feel
        inset: '2px solid #808080',
        insetShadow: 'inset 2px 2px #404040, inset -2px -2px #FFF', // Field inputs
        windowBorder: 'box-shadow: inset -1px -1px #000, inset 1px 1px #DFDFDF, inset -2px -2px #808080, inset 2px 2px #FFF',
        title: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)'
    };

    useEffect(() => {
        const timer = setTimeout(() => setBooting(false), 2000); // Quick boot sequence
        return () => clearTimeout(timer);
    }, []);

    const toggleWindow = (id: string) => {
        if (minimized.includes(id)) {
            setMinimized(prev => prev.filter(w => w !== id));
            setActiveWindow(id);
        } else if (activeWindow === id) {
            setMinimized(prev => [...prev, id]);
            setActiveWindow('');
        } else {
            setActiveWindow(id);
            setMinimized(prev => prev.filter(w => w !== id));
        }
    };

    if (booting) {
        return (
            <div className="min-h-screen bg-black text-white font-mono p-10 flex flex-col justify-between">
                <div>
                    <div className="mb-4">Award Modular BIOS v4.51PG, An Energy Star Ally</div>
                    <div className="mb-8">Copyright (C) 1984-95, Energy Star Inc.</div>
                    <div>PENTIUM-S CPU at 133MHz</div>
                    <div>Memory Test :  640K OK</div>
                    <div className="mt-4 animate-pulse">Wait...</div>
                </div>
                <div className="text-gray-500">Press DEL to enter SETUP</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"MS Sans Serif", "Segoe UI", sans-serif', fontSize: '14px', cursor: 'url("https://win98icons.alexmeub.com/icons/png/arrow-0.png"), auto' }}>

            <style>{`
                .win95-btn {
                    box-shadow: inset -1px -1px #000, inset 1px 1px #FFF, inset -2px -2px #808080, inset 2px 2px #DFDFDF;
                    background: ${colors.surface};
                    active: box-shadow: inset 1px 1px #000, inset -1px -1px #FFF, inset 2px 2px #808080, inset -2px -2px #DFDFDF;
                }
                .win95-btn:active {
                     box-shadow: inset 1px 1px #000, inset -1px -1px #FFF, inset 2px 2px #404040, inset -2px -2px #DFDFDF;
                     padding-top: 2px;
                     padding-left: 2px;
                }
                .win95-window {
                    box-shadow: 1px 1px 0 #000, inset 1px 1px #DFDFDF, inset -1px -1px #808080;
                    border: 2px solid ${colors.surface};
                    border-right-color: #404040;
                    border-bottom-color: #404040;
                }
                .win95-title-btn {
                    width: 16px; 
                    height: 14px; 
                    font-size: 10px; 
                    line-height: 10px; 
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${colors.surface};
                    box-shadow: inset -1px -1px #000, inset 1px 1px #FFF, inset -2px -2px #808080, inset 2px 2px #DFDFDF;
                }
                .dotted-focus {
                    border: 1px dotted #000;
                }
             `}</style>

            {/* Desktop Icons */}
            <div className="flex-1 p-4 grid gap-6 content-start w-full max-w-[200px]" style={{ gridTemplateColumns: '1fr' }}>
                {[
                    { id: 'welcome', icon: Monitor, label: 'My Computer' },
                    { id: 'features', icon: Folder, label: 'My Documents' },
                    { id: 'pricing', icon: HardDrive, label: 'Pricing.xls' },
                    { id: 'testimonials', icon: FileText, label: 'Reviews.txt' },
                    { id: 'recycle', icon: Trash2, label: 'Recycle Bin' },
                    { id: 'web', icon: Globe, label: 'Internet' }
                ].map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-1 group cursor-pointer w-20 text-center"
                        onDoubleClick={() => toggleWindow(item.id)}>
                        <item.icon size={32} className={`text-white drop-shadow-md mb-1 ${activeWindow === item.id ? 'opacity-50' : ''}`} />
                        <span className="text-white text-xs px-1 group-hover:bg-[#000080] group-hover:border-dotted group-hover:border-white border border-transparent shadow-[1px_1px_1px_#000]">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* --- WINDOWS --- */}

            <div className="absolute inset-0 pointer-events-none p-4 md:p-10 flex items-center justify-center">

                {/* 1. HERO / WELCOME WINDOW */}
                {(!minimized.includes('welcome') && (activeWindow === 'welcome' || activeWindow === '')) && (
                    <div className="win95-window pointer-events-auto bg-[#C0C0C0] w-full max-w-2xl shadow-2xl absolute top-10 md:top-20 md:left-20 animate-in zoom-in-95 duration-200">
                        <div className="p-1 flex justify-between items-center" style={{ background: win.title }}>
                            <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                                <Monitor size={14} /> <span>Welcome to Windows 95 Pro</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="win95-title-btn" onClick={() => setMinimized(prev => [...prev, 'welcome'])}><Minus size={10} /></button>
                                <button className="win95-title-btn"><Square size={8} /></button>
                                <button className="win95-title-btn" onClick={() => setActiveWindow('')}><X size={10} /></button>
                            </div>
                        </div>
                        {/* Menu Bar */}
                        <div className="flex gap-4 px-2 py-1 border-b border-gray-400 text-sm">
                            <span className="underline cursor-pointer">F</span>ile
                            <span className="underline cursor-pointer">E</span>dit
                            <span className="underline cursor-pointer">V</span>iew
                            <span className="underline cursor-pointer">H</span>elp
                        </div>
                        <div className="p-6 flex flex-col md:flex-row gap-6">
                            <div className="w-32 flex flex-col items-center">
                                <Monitor size={64} className="mb-2" />
                                <div className="text-center text-xs">This computer is optimized for styling.</div>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold mb-4 font-serif">The Classic Experience. Refined.</h1>
                                <p className="mb-4 leading-relaxed">
                                    Welcome to the most advanced retro UI kit. Featuring authentic bevels, accurate colors, and
                                    pixel-perfect typography. Compatible with modern nostalgia.
                                </p>

                                <div className="flex gap-4 mt-8">
                                    <button className="win95-btn px-6 py-2 font-bold min-w-[100px] dotted-focus active:translate-y-[1px]">
                                        Next &gt;
                                    </button>
                                    <button className="win95-btn px-6 py-2 min-w-[100px] active:translate-y-[1px]">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 py-1 border-t border-gray-400 text-xs text-gray-600 flex justify-between">
                            <span>1 object(s) selected</span>
                            <span>384KB</span>
                        </div>
                    </div>
                )}

                {/* 2. FEATURES WINDOW (FOLDER STYLE) */}
                {(!minimized.includes('features') && activeWindow === 'features') && (
                    <div className="win95-window pointer-events-auto bg-[#C0C0C0] w-full max-w-3xl shadow-2xl absolute top-16 md:top-32 md:left-32 z-10 animate-in zoom-in-95 duration-200">
                        <div className="p-1 flex justify-between items-center" style={{ background: win.title }}>
                            <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                                <Folder size={14} /> <span>C:\Windows\System32\Features</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="win95-title-btn" onClick={() => setMinimized(prev => [...prev, 'features'])}><Minus size={10} /></button>
                                <button className="win95-title-btn" onClick={() => setActiveWindow('')}><X size={10} /></button>
                            </div>
                        </div>
                        <div className="bg-white m-1 border-2 border-[#808080] border-t-[#404040] border-r-[#FFF] border-b-[#FFF] p-4 h-[400px] overflow-y-auto shadow-[inset_1px_1px_0_#000]">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {['UI Kit', 'Icons', 'Fonts', 'Sounds', 'Wallpapers', 'Screensavers', 'Themes', 'Network'].map((item) => (
                                    <div key={item} className="flex flex-col items-center gap-1 group cursor-pointer p-2 hover:bg-[#000080] hover:text-white border border-transparent hover:border-dotted hover:border-white">
                                        <Monitor size={32} className="text-current" />
                                        <span className="text-xs">{item}.exe</span>
                                    </div>
                                ))}
                                <div className="col-span-full border-t border-dashed border-gray-400 my-2"></div>
                                <div className="col-span-full flex gap-4">
                                    <div className="flex items-start gap-4">
                                        <Info size={32} className="text-blue-800" />
                                        <div>
                                            <h3 className="font-bold mb-1">System Requirements</h3>
                                            <p className="text-xs max-w-sm">Requires 486DX2-66Mhz or higher. 8MB RAM recommended. SVGA Display (800x600, 256 colors).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 text-xs px-2 flex gap-4 border-t border-gray-400 shadow-inner bg-[#C0C0C0]">
                            <span>8 object(s)</span>
                            <span>4.20MB</span>
                        </div>
                    </div>
                )}

                {/* 3. PRICING (EXCEL STYLE) */}
                {(!minimized.includes('pricing') && activeWindow === 'pricing') && (
                    <div className="win95-window pointer-events-auto bg-[#C0C0C0] w-full max-w-4xl shadow-2xl absolute top-12 md:top-24 md:left-10 z-20 animate-in zoom-in-95 duration-200">
                        <div className="p-1 flex justify-between items-center" style={{ background: win.title }}>
                            <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                                <HardDrive size={14} /> <span>Microsoft Excel - Pricing.xls</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="win95-title-btn" onClick={() => setMinimized(prev => [...prev, 'pricing'])}><Minus size={10} /></button>
                                <button className="win95-title-btn" onClick={() => setActiveWindow('')}><X size={10} /></button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-1 border-b border-gray-500 bg-[#C0C0C0]">
                            <span className="win95-btn px-2 h-6 flex items-center justify-center font-bold font-serif italic text-xs">f(x)</span>
                            <div className="bg-white border-2 border-[#808080] flex-1 h-6 shadow-inner flex items-center px-1 text-xs">
                                =SUM(FEATURES)
                            </div>
                        </div>
                        <div className="bg-white border-2 border-[#808080] overflow-x-auto">
                            <table className="w-full text-xs font-sans border-collapse">
                                <thead>
                                    <tr className="bg-[#DFDFDF] text-center font-bold">
                                        <th className="border border-gray-500 w-10"></th>
                                        <th className="border border-gray-500 w-32">A</th>
                                        <th className="border border-gray-500 w-32">B</th>
                                        <th className="border border-gray-500 w-32">C</th>
                                        <th className="border border-gray-500 w-48">D</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: 1, a: 'License Type', b: 'Home', c: 'Professional', d: 'Enterprise' },
                                        { id: 2, a: 'Price', b: '$19.95', c: '$49.95', d: '$99.95' },
                                        { id: 3, a: 'Components', b: 'Basic', c: 'All Included', d: 'Source Code' },
                                        { id: 4, a: 'Support', b: 'Forum', c: 'Email', d: '24/7 Pager' },
                                        { id: 5, a: '', b: '', c: '', d: '' },
                                        { id: 6, a: 'Select:', b: 'BUY_NOW()', c: 'BUY_NOW()', d: 'BUY_NOW()' },
                                    ].map((row, i) => (
                                        <tr key={i} className="leading-6">
                                            <td className="bg-[#DFDFDF] border border-gray-500 text-center font-bold">{row.id}</td>
                                            <td className={`border border-gray-300 px-2 ${i === 0 ? 'font-bold bg-gray-100' : ''}`}>{row.a}</td>
                                            <td className={`border border-gray-300 px-2 ${i === 1 && row.b ? 'text-green-800 font-bold' : ''}`}>
                                                {row.b === 'BUY_NOW()' ? <button className="win95-btn px-2 text-[10px] w-full h-5">Buy</button> : row.b}
                                            </td>
                                            <td className={`border border-gray-300 px-2 ${i === 1 && row.b ? 'text-green-800 font-bold' : ''} bg-yellow-50`}>
                                                {row.c === 'BUY_NOW()' ? <button className="win95-btn px-2 text-[10px] w-full h-5 font-bold">Buy</button> : row.c}
                                            </td>
                                            <td className={`border border-gray-300 px-2 ${i === 1 && row.b ? 'text-green-800 font-bold' : ''}`}>
                                                {row.d === 'BUY_NOW()' ? <button className="win95-btn px-2 text-[10px] w-full h-5">Buy</button> : row.d}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Status Bar */}
                        <div className="flex gap-4 px-2 py-1 text-xs border-t border-gray-500 bg-[#C0C0C0]">
                            <span>Ready</span>
                            <span className="ml-auto">NUM</span>
                        </div>
                    </div>
                )}

                {/* 4. TESTIMONIALS (NOTEPAD) */}
                {(!minimized.includes('testimonials') && activeWindow === 'testimonials') && (
                    <div className="win95-window pointer-events-auto bg-[#C0C0C0] w-full max-w-lg shadow-2xl absolute bottom-20 md:right-20 z-30 animate-in zoom-in-95 duration-200">
                        <div className="p-1 flex justify-between items-center" style={{ background: win.title }}>
                            <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                                <FileText size={14} /> <span>Reviews.txt - Notepad</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="win95-title-btn" onClick={() => setMinimized(prev => [...prev, 'testimonials'])}><Minus size={10} /></button>
                                <button className="win95-title-btn" onClick={() => setActiveWindow('')}><X size={10} /></button>
                            </div>
                        </div>
                        <div className="flex gap-4 px-2 py-1 border-b border-gray-400 text-sm">
                            <span className="underline cursor-pointer">F</span>ile
                            <span className="underline cursor-pointer">E</span>dit
                            <span className="underline cursor-pointer">S</span>earch
                            <span className="underline cursor-pointer">H</span>elp
                        </div>
                        <div className="h-64 md:h-80 bg-white border-2 border-[#808080] border-t-[#404040] border-r-[#FFF] border-b-[#FFF] p-1 font-mono text-sm overflow-y-auto shadow-inner">
                            <p>*** USER REVIEWS LOG ***</p>
                            <br />
                            <p className="mb-4">
                                <span className="font-bold">From: RetroFan99</span><br />
                                "Absolutely incredible. Felt like I was back in 1995 installing Windows from floppies. 10/10 would reboot again."
                            </p>
                            <p className="mb-4">
                                <span className="font-bold">From: SysAdmin_Dave</span><br />
                                "Stable, fast, and no BSODs yet. The Excel pricing table is a nice touch. Can it run Doom?"
                            </p>
                            <p className="mb-4">
                                <span className="font-bold">From: ClippyHater</span><br />
                                "It looks like you're trying to build a retro website. Would you like some help with that? Just kidding, great job."
                            </p>
                            <p className="blink">_</p>
                        </div>
                    </div>
                )}

            </div>

            {/* Taskbar */}
            <footer className="fixed bottom-0 left-0 right-0 h-[38px] flex items-center justify-between p-1 z-50 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-1px_0_#404040]">

                {/* Start Button & Menu */}
                <div className="relative">
                    {startOpen && (
                        <div className="absolute bottom-[36px] left-0 w-48 bg-[#C0C0C0] border-2 border-white border-r-[#404040] border-b-[#404040] shadow-xl flex">
                            <div className="w-8 bg-[#000080] text-white flex items-end justify-center py-2">
                                <span className="-rotate-90 text-lg font-bold tracking-widest whitespace-nowrap mb-4">WINDOWS 95</span>
                            </div>
                            <div className="flex-1 py-1">
                                {['Programs', 'Documents', 'Settings', 'Find', 'Help', 'Run...', 'Shut Down...'].map((item, i) => (
                                    <div key={item}
                                        className="px-4 py-2 hover:bg-[#000080] hover:text-white cursor-pointer flex items-center gap-2 group relative border-b border-transparent">
                                        {i < 3 && <Folder size={16} fill="#FFD700" className="text-yellow-600" />}
                                        {item.includes('Shut') && <Power size={16} />}
                                        {(i >= 3 && !item.includes('Shut')) && <FileText size={16} />}
                                        <span className="text-sm">{item}</span>
                                        {[0, 1, 2].includes(i) && <span className="ml-auto text-[10px]">▶</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <button onClick={() => setStartOpen(!startOpen)}
                        className={`px-2 h-[28px] font-bold flex items-center gap-1.5 border-2 ${startOpen ? 'border-[#808080] border-r-white border-b-white bg-gray-300 shadow-inner translate-y-[1px]' : 'border-white border-r-[#404040] border-b-[#404040] shadow-[1px_1px_0_#000] active:shadow-none active:border-[#808080] active:border-r-white active:border-b-white'}`}>
                        <Monitor size={18} className="text-black" />
                        <span className="italic">Start</span>
                    </button>
                </div>

                {/* Active Tasks */}
                <div className="flex-1 flex gap-1 px-2 overflow-x-auto">
                    {[
                        { id: 'welcome', label: 'Welcome' },
                        { id: 'features', label: 'System...' },
                        { id: 'pricing', label: 'Pricing.xls' },
                        { id: 'testimonials', label: 'Reviews.txt' }
                    ].map(tab => (
                        (!minimized.includes(tab.id) || minimized.includes(tab.id)) && (
                            <button key={tab.id}
                                onClick={() => toggleWindow(tab.id)}
                                className={`px-4 h-[28px] text-xs flex items-center gap-2 min-w-[120px] max-w-[150px] border-2 truncate ${activeWindow === tab.id ? 'bg-[#DFDFDF] border-[#808080] border-r-white border-b-white shadow-inner font-bold' : 'border-white border-r-[#404040] border-b-[#404040] shadow-[1px_1px_0_#000] active:translate-y-[1px]'}`}>
                                {tab.id === 'welcome' && <Monitor size={14} />}
                                {tab.id === 'features' && <Folder size={14} />}
                                {tab.id === 'pricing' && <HardDrive size={14} />}
                                {tab.id === 'testimonials' && <FileText size={14} />}
                                {tab.label}
                            </button>
                        )
                    ))}
                </div>

                {/* System Tray */}
                <div className="flex items-center gap-2 px-3 py-1 bg-[#C0C0C0] border-2 border-[#808080] border-r-white border-b-white shadow-inner h-[28px] min-w-[100px] justify-between text-xs">
                    <div className="flex gap-1">
                        <Shield size={12} />
                        <Users size={12} />
                    </div>
                    <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </footer>
        </div>
    );
};
