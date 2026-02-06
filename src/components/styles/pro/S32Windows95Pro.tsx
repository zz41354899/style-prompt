import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Monitor, Folder, FileText, HardDrive, Trash2, Minus, Square, Info, Shield, Globe, Users, Power } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S32Windows95Pro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [startOpen, setStartOpen] = useState(false);
    const responsive = useResponsive(deviceMode);

    const colors = {
        bg: '#008080',
        surface: '#C0C0C0',
        text: '#000000',
        blue: '#000080',
        white: '#FFFFFF',
        grayObj: '#808080',
        grayLight: '#DFDFDF'
    };

    // Win95 Borders & Styles
    const win = {
        title: '#000080',
        titleInactive: '#808080'
    };

    return (
        <div className="min-h-screen relative"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"MS Sans Serif", "Segoe UI", sans-serif', fontSize: '14px', cursor: 'url("https://win98icons.alexmeub.com/icons/png/arrow-0.png"), auto' }}>

            <style>{`
                .win95-btn {
                    box-shadow: inset -1px -1px #000, inset 1px 1px #FFF, inset -2px -2px #808080, inset 2px 2px #DFDFDF;
                    background: ${colors.surface};
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
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
                    background: ${colors.surface};
                }
                .win95-title-btn {
                    width: 16px; 
                    height: 14px; 
                    font-size: 10px; 
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${colors.surface};
                    box-shadow: inset -1px -1px #000, inset 1px 1px #FFF, inset -2px -2px #808080, inset 2px 2px #DFDFDF;
                }
                .win95-inset {
                    box-shadow: inset 1px 1px #404040, inset -1px -1px #FFF, inset 2px 2px #000, inset -2px -2px #DFDFDF;
                    background: #FFF;
                }
                .win95-group-box {
                    border: 1px solid #808080;
                    border-bottom-color: #FFF;
                    border-right-color: #FFF;
                    position: relative;
                    padding: 16px;
                    margin-top: 8px;
                }
                .win95-group-label {
                    position: absolute;
                    top: -8px;
                    left: 8px;
                    background: ${colors.surface};
                    padding: 0 4px;
                }
                ::-webkit-scrollbar { width: 16px; background: #dfdfdf; }
                ::-webkit-scrollbar-thumb { background: #c0c0c0; border: 2px solid #dfdfdf; border-right-color: #404040; border-bottom-color: #404040; box-shadow: inset 1px 1px #dfdfdf; }
                ::-webkit-scrollbar-button { background: #c0c0c0; width: 16px; height: 16px; border: 2px solid #dfdfdf; border-right-color: #404040; border-bottom-color: #404040; box-shadow: inset 1px 1px #dfdfdf; }
             `}</style>

            {/* Main Content Container - Scrolling */}
            <div className="pb-16 max-w-5xl mx-auto p-4 md:p-8 space-y-12">

                {/* 1. HERO: Wizard Setup Style */}
                <section className="win95-window p-1">
                    <div className="flex justify-between items-center p-1 mb-1" style={{ background: win.title }}>
                        <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                            <Monitor size={14} /> <span>Windows 95 Pro Setup</span>
                        </div>
                        <div className="flex gap-1">
                            <button className="win95-title-btn"><Minus size={8} /></button>
                            <button className="win95-title-btn"><Square size={8} /></button>
                            <button className="win95-title-btn"><X size={8} /></button>
                        </div>
                    </div>
                    <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-[#C0C0C0]">
                        <div className="w-full md:w-1/3 aspect-[3/4] bg-[url('https://4.bp.blogspot.com/-F6F0yNq9Ljo/WvjL2zZ0wJI/AAAAAAAAGyE/yLpQ_fR6gqU/s1600/Windows%2B95%2BSetup%2B-%2BWelcome.png')] bg-cover border-2 border-gray-600 shadow-inner pixelated relative overflow-hidden hidden md:block">
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
                            <div className="absolute bottom-4 left-4 text-white font-bold drop-shadow-md">
                                Setup is initializing...
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold mb-6 font-serif">Welcome to the Retro Web Experience</h1>
                            <p className="mb-6 leading-relaxed">
                                Setup will install <strong>StylePrompt Pro</strong> on your computer. To continue, click Next.
                            </p>
                            <div className="win95-group-box mb-6">
                                <span className="text-gray-600 win95-group-label">Description</span>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Authentic 1995 aesthetics</li>
                                    <li>Pixel-perfect components</li>
                                    <li>No floppy disks required</li>
                                </ul>
                            </div>
                            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-400 border-white shadow-[0_1px_0_#FFF]">
                                <button className="win95-btn px-6 py-1.5 min-w-[80px]">&lt; Back</button>
                                <button className="win95-btn px-6 py-1.5 min-w-[80px] font-bold border-black">Next &gt;</button>
                                <button className="win95-btn px-6 py-1.5 min-w-[80px] ml-2">Cancel</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. FEATURES: Control Panel Style */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Folder size={24} className="text-yellow-600" fill="#FFD700" />
                            <h2 className="text-xl font-bold">Control Panel</h2>
                        </div>
                        <div className="h-0.5 flex-1 bg-gray-400 mx-4 border-b border-white"></div>
                        <span className="text-xs">4 object(s)</span>
                    </div>

                    <div className="win95-window p-4 bg-white win95-inset grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Monitor, label: 'Display' },
                            { icon: HardDrive, label: 'Add/Remove' },
                            { icon: Globe, label: 'Internet' },
                            { icon: Users, label: 'Users' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 p-4 hover:bg-[#000080] hover:text-white cursor-pointer group border border-transparent hover:border-dotted hover:border-white">
                                <item.icon size={32} />
                                <span className="text-center">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. PRICING: Excel Style */}
                <section className="win95-window p-1">
                    <div className="flex justify-between items-center p-1 mb-1" style={{ background: win.title }}>
                        <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                            <FileText size={14} /> <span>Pricing.xls - Microsoft Excel</span>
                        </div>
                        <div className="flex gap-1">
                            <button className="win95-title-btn"><Minus size={8} /></button>
                            <button className="win95-title-btn"><Square size={8} /></button>
                            <button className="win95-title-btn"><X size={8} /></button>
                        </div>
                    </div>

                    {/* Toolbar */}
                    <div className="bg-[#C0C0C0] p-1 border-b border-gray-600 mb-0.5 flex gap-1">
                        <div className="win95-btn w-6 h-6"><FileText size={14} /></div>
                        <div className="win95-btn w-6 h-6"><Folder size={14} /></div>
                        <div className="border-r border-gray-500 mx-1"></div>
                        <div className="win95-btn w-6 h-6 font-serif italic font-bold text-xs">A</div>
                        <div className="win95-btn w-6 h-6 font-bold text-xs">B</div>
                        <div className="win95-btn w-6 h-6 underline text-xs">U</div>
                    </div>

                    <div className="flex bg-[#C0C0C0] p-1 gap-2 items-center mb-1">
                        <div className="bg-white border text-xs px-2 py-0.5 w-16 shadow-inner">C3</div>
                        <div className="bg-white border text-xs px-2 py-0.5 flex-1 shadow-inner font-mono">=SUM(VALUE)</div>
                    </div>

                    <div className="bg-white overflow-x-auto win95-inset">
                        <table className="w-full text-xs font-sans border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-[#DFDFDF] text-center font-bold text-black/80">
                                    <th className="border border-gray-400 w-8"></th>
                                    <th className="border border-gray-400 w-32 shadow-out">A</th>
                                    <th className="border border-gray-400 w-32 shadow-out">B</th>
                                    <th className="border border-gray-400 w-32 shadow-out">C</th>
                                    <th className="border border-gray-400 w-32 shadow-out">D</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: 1, a: 'Plan', b: 'Starter', c: 'Professional', d: 'Enterprise' },
                                    { id: 2, a: 'Monthly Cost', b: '$19.00', c: '$49.00', d: '$99.00' },
                                    { id: 3, a: 'Users', b: '1', c: '5', d: 'Unlimited' },
                                    { id: 4, a: 'Storage', b: '1.44 MB', c: '700 MB', d: '10 GB' },
                                    { id: 5, a: '', b: '', c: '', d: '' },
                                    { id: 6, a: 'Action', b: 'BUY', c: 'BUY', d: 'BUY' }
                                ].map((row, i) => (
                                    <tr key={i} className="h-6">
                                        <td className="bg-[#DFDFDF] border border-gray-400 text-center font-bold px-1">{row.id}</td>
                                        <td className={`border border-gray-300 px-2 border-r/50 ${i === 0 ? 'bg-gray-100 font-bold' : ''}`}>{row.a}</td>
                                        <td className={`border border-gray-300 px-2 ${i === 5 ? '' : ''}`}>
                                            {row.b === 'BUY' ? <button className="win95-btn w-full h-5 text-[10px]">Install</button> : row.b}
                                        </td>
                                        <td className={`border border-gray-300 px-2 bg-yellow-50`}>
                                            {row.c === 'BUY' ? <button className="win95-btn w-full h-5 text-[10px] font-bold">Install</button> : row.c}
                                        </td>
                                        <td className={`border border-gray-300 px-2`}>
                                            {row.d === 'BUY' ? <button className="win95-btn w-full h-5 text-[10px]">Install</button> : row.d}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Sheet Tabs */}
                    <div className="bg-[#C0C0C0] flex items-end gap-0 px-1 pt-1 border-t border-gray-400">
                        <div className="bg-white px-3 py-0.5 text-xs font-bold rounded-t border-t border-l border-r border-gray-400 relative -mb-[1px] z-10 pb-1">Price List</div>
                        <div className="bg-[#DFDFDF] px-3 py-0.5 text-xs border-r border-gray-400 text-gray-600">Sheet 2</div>
                        <div className="bg-[#DFDFDF] px-3 py-0.5 text-xs border-r border-gray-400 text-gray-600">Sheet 3</div>
                    </div>
                </section>

                {/* 4. TESTIMONIALS: Notepad Style */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: 'REVIEW_1.TXT', text: "Best decision we made. It runs perfectly on our 486 DX2." },
                        { title: 'TODO.TXT', text: "1. Buy this software\n2. Install it\n3. ???\n4. Profit!" }
                    ].map((note, i) => (
                        <div key={i} className="win95-window p-1">
                            <div className="flex justify-between items-center p-1 mb-1" style={{ background: win.title }}>
                                <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                                    <FileText size={14} /> <span>{note.title} - Notepad</span>
                                </div>
                                <div className="flex gap-1">
                                    <button className="win95-title-btn"><Minus size={8} /></button>
                                    <button className="win95-title-btn"><X size={8} /></button>
                                </div>
                            </div>
                            <div className="flex gap-2 px-1 text-xs mb-1">
                                <span>File</span><span>Edit</span><span>Search</span><span>Help</span>
                            </div>
                            <div className="bg-white win95-inset p-2 font-mono text-sm h-32 whitespace-pre-line">
                                {note.text}
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 5. FOOTER: Shut Down Dialog */}
                <section className="flex justify-center py-10">
                    <div className="win95-window p-1 w-full max-w-sm">
                        <div className="flex justify-between items-center p-1 mb-4" style={{ background: win.titleInactive }}>
                            <div className="flex items-center gap-2 text-white font-bold text-sm px-1">
                                <span>Shut Down Windows</span>
                            </div>
                            <button className="win95-title-btn"><X size={8} /></button>
                        </div>
                        <div className="px-6 pb-6 flex gap-4">
                            <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" className="w-8 h-8" alt="icon" />
                            <div className="flex-1">
                                <p className="mb-4 text-sm">Are you sure you want to:</p>
                                <div className="space-y-2 text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="shutdown" className="win95-inset" />
                                        Shut down the computer?
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="shutdown" defaultChecked className="win95-inset" />
                                        Restart in MS-DOS mode?
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="shutdown" className="win95-inset" />
                                        Buy Pro Version?
                                    </label>
                                </div>
                                <div className="flex justify-center gap-4 mt-6">
                                    <button className="win95-btn px-6 py-1 min-w-[70px]">Yes</button>
                                    <button className="win95-btn px-6 py-1 min-w-[70px]">No</button>
                                    <button className="win95-btn px-6 py-1 min-w-[70px]">Help</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Taskbar */}
            <footer className="fixed bottom-0 left-0 right-0 h-[38px] flex items-center justify-between p-1 z-50 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-1px_0_#404040]">
                {/* Start Button & Menu */}
                <div className="relative">
                    {startOpen && (
                        <div className="absolute bottom-[36px] left-0 w-48 bg-[#C0C0C0] border-2 border-white border-r-[#404040] border-b-[#404040] shadow-xl flex z-50">
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
                        <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" className="w-5 h-5" alt="logo" />
                        <span className="italic">Start</span>
                    </button>
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
