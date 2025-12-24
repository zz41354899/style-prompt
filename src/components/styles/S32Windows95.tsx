import { useState } from 'react';
import { Minus, Square, X, Folder, Monitor, Trash2, Globe, FileText, Menu } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S32Windows95 = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [startOpen, setStartOpen] = useState(false);
    const [activeWindow, setActiveWindow] = useState('My Computer');
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Windows 95 shadow styles
    const bevelOut = "shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#000000,inset_2px_2px_#ffffff,inset_-2px_-2px_#808080]";
    const bevelIn = "shadow-[inset_1px_1px_#000000,inset_-1px_-1px_#dfdfdf,inset_2px_2px_#808080,inset_-2px_-2px_#ffffff]";

    const Window = ({ title, children, active, onClose }: { title: string, children: React.ReactNode, active: boolean, onClose?: () => void }) => (
        <div className={`p-[2px] bg-[#c0c0c0] ${bevelOut} w-full max-w-2xl mb-8 ${active ? 'z-20 relative' : 'z-10'}`}>
            <div className={`px-2 py-1 flex justify-between items-center ${active ? 'bg-[#000080]' : 'bg-[#808080]'} text-white mb-1`}>
                <div className="flex items-center gap-2 font-bold text-sm tracking-wide">
                    <Monitor size={16} /> {/* Generic icon */}
                    {title}
                </div>
                <div className="flex gap-1">
                    <button className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} flex items-center justify-center active:bg-[#c0c0c0] active:${bevelIn}`}>
                        <Minus size={10} className="text-black" />
                    </button>
                    <button className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} flex items-center justify-center active:bg-[#c0c0c0] active:${bevelIn}`}>
                        <Square size={10} className="text-black" />
                    </button>
                    <button onClick={onClose} className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} flex items-center justify-center ml-1 active:bg-[#c0c0c0] active:${bevelIn}`}>
                        <X size={10} className="text-black" />
                    </button>
                </div>
            </div>

            {/* Menu Bar */}
            <div className="flex gap-4 px-2 mb-2 text-sm">
                <span className="underline cursor-pointer">F</span>ile
                <span className="underline cursor-pointer">E</span>dit
                <span className="underline cursor-pointer">V</span>iew
                <span className="underline cursor-pointer">H</span>elp
            </div>

            <div className={`bg-white p-4 h-64 overflow-y-auto ${bevelIn} text-black font-sans text-sm`}>
                {children}
            </div>

            <div className="flex justify-between items-center px-1 py-1 text-xs border-t border-[#808080] mt-1 shadow-[inset_0_1px_0_#ffffff]">
                <span>1 object(s) selected</span>
                <span>32KB</span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#008080] font-sans selection:bg-[#000080] selection:text-white flex flex-col overflow-hidden relative" onClick={() => setStartOpen(false)}>

            {/* Desktop Icons - hidden on mobile */}
            <div className={`p-4 grid grid-cols-1 gap-8 w-32 ${isMobile ? 'hidden' : 'fixed'} top-0 left-0 z-0`}>
                {[
                    { name: 'My Computer', icon: Monitor },
                    { name: 'Recycle Bin', icon: Trash2 },
                    { name: 'Network', icon: Globe },
                    { name: 'Documents', icon: Folder },
                    { name: 'Readme.txt', icon: FileText },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer w-20">
                        <item.icon size={32} className="text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)]" />
                        <span className="text-white text-xs text-center px-1 bg-transparent group-hover:bg-[#000080] border border-transparent group-hover:border-dotted group-hover:border-white truncate w-full">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 ${isMobile ? 'p-8' : 'p-16'} flex flex-col items-center justify-center z-10 pointer-events-none`}>
                <div className="pointer-events-auto">
                    <Window title="Welcome to StylePrompts.exe" active={true}>
                        <div className="flex gap-4 items-start">
                            <div className="bg-white p-2">
                                <span className="text-4xl">💾</span>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-2">Windows 95 Style</h2>
                                <p className="mb-4">
                                    This style brings back the classic aesthetic of the 90s OS.
                                    Pixel-perfect bevels, sharp edges, and that nostalgic teal background.
                                </p>

                                <div className="flex gap-4 mt-6">
                                    <button className={`px-6 py-1 bg-[#c0c0c0] ${bevelOut} active:${bevelIn} font-bold text-black focus:outline-none focus:ring-1 focus:ring-black border border-transparent`}>
                                        <span className="underline">O</span>K
                                    </button>
                                    <button className={`px-6 py-1 bg-[#c0c0c0] ${bevelOut} active:${bevelIn} text-black focus:outline-none focus:ring-1 focus:ring-black border border-transparent`}>
                                        Cancel
                                    </button>
                                    <button className={`px-6 py-1 bg-[#c0c0c0] ${bevelOut} active:${bevelIn} text-black focus:outline-none focus:ring-1 focus:ring-black border border-transparent`}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <fieldset className={`border-2 border-[#dfdfdf] border-l-[#808080] border-t-[#808080] p-4 relative`}>
                                <legend className="px-1 ml-2">Components</legend>
                                <div className="flex gap-4 items-center">
                                    <div className="flex items-center gap-1">
                                        <div className={`w-4 h-4 bg-white ${bevelIn} flex items-center justify-center`}>
                                            <div className="w-2 h-2 bg-black" />
                                        </div>
                                        <label>Radio 1</label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className={`w-4 h-4 bg-white ${bevelIn}`} />
                                        <label>Radio 2</label>
                                    </div>
                                    <div className="flex items-center gap-1 ml-4">
                                        <div className={`w-4 h-4 bg-white ${bevelIn} flex items-center justify-center`}>
                                            <div className="text-black font-bold leading-none mb-1">✓</div>
                                        </div>
                                        <label>Check</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </Window>
                </div>
            </div>

            {/* Taskbar */}
            <div className={`h-10 bg-[#c0c0c0] border-t border-[#ffffff] flex items-center justify-between px-1 shrink-0 z-50 ${isMobile ? 'sticky' : 'fixed'} bottom-0 w-full shadow-[0_-1px_0_#808080]`}>
                <div className="flex items-center gap-1 h-full py-1">
                    <button
                        onClick={(e) => { e.stopPropagation(); setStartOpen(!startOpen); }}
                        className={`h-full px-2 flex items-center gap-1 font-bold italic tracking-wider ${startOpen ? bevelIn : bevelOut} ${startOpen ? 'bg-[#e0e0e0]' : 'bg-[#c0c0c0]'}`}
                    >
                        <Monitor size={16} className={startOpen ? 'translate-x-[1px] translate-y-[1px]' : ''} />
                        <span className={startOpen ? 'translate-x-[1px] translate-y-[1px]' : ''}>Start</span>
                    </button>
                    <div className="w-[1px] h-full bg-[#808080] shadow-[1px_0_0_#ffffff] mx-1" />

                    <button className={`h-full px-4 flex items-center gap-2 ${bevelIn} bg-[#e0e0e0] font-bold w-48 truncate`}>
                        <Monitor size={14} />
                        Welcome to Styl...
                    </button>
                </div>

                <div className={`h-full px-4 flex items-center gap-2 ${bevelIn} bg-[#c0c0c0] text-xs`}>
                    <span>12:00 PM</span>
                </div>

                {/* Start Menu */}
                {startOpen && (
                    <div className={`absolute bottom-10 left-1 w-48 bg-[#c0c0c0] ${bevelOut} flex flex-col p-1`}>
                        <div className="w-8 bg-[#000080] absolute left-0 bottom-0 top-0 flex items-end">
                            <span className="text-white text-xl font-bold -rotate-90 origin-bottom-left translate-x-2 -translate-y-4 whitespace-nowrap tracking-widest text-[#c0c0c0]">
                                WINDOWS<span className="text-white ml-2">95</span>
                            </span>
                        </div>

                        <div className="ml-8 flex flex-col">
                            {['Programs', 'Documents', 'Settings', 'Find', 'Help', 'Run...', 'Shut Down...'].map((item, i) => (
                                <div key={i} className="px-4 py-2 hover:bg-[#000080] hover:text-white cursor-pointer flex items-center gap-2 text-sm group">
                                    <Monitor size={24} className="group-hover:text-white text-[#000080]" />
                                    {item}
                                    {(i === 0 || i === 1 || i === 2 || i === 3) && <span className="ml-auto">▸</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
