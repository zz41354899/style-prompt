import { useState } from 'react';
import { PenTool, Mic, Camera, Book, Menu, X, Settings, Wallet, Music, Compass } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S31Skeuomorphic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures (CSS patterns simulation)
    const leatherTexture = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`;

    const woodTexture = `linear-gradient(90deg, #d2b48c 0%, #deb887 50%, #d2b48c 100%)`; // Simplified wood for CSS

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-[#e0e0e0] flex flex-col items-center py-10 selection:bg-[#8D6E63] selection:text-white">
            {/* Main Container / Desk */}
            <div
                className={`w-full max-w-5xl bg-[#8D6E63] rounded-[30px] ${isMobile ? 'p-4' : 'p-8'} shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_2px_5px_rgba(255,255,255,0.2)] border-t border-[#a1887f] relative overflow-hidden`}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%), ${leatherTexture}` }}
            >
                {/* Stitching effect */}
                <div className="absolute inset-2 border-2 border-dashed border-[#5D4037] opacity-50 rounded-[24px] pointer-events-none" />

                {/* Notebook App Interface */}
                <div className={`bg-[#fdfbf7] rounded-[4px] shadow-[2px_4px_15px_rgba(0,0,0,0.3)] relative min-h-[800px] flex ${isMobile ? 'flex-col' : 'flex-row'} overflow-hidden`}>
                    {/* Spiral Binding */}
                    <div className="absolute left-0 w-8 h-full bg-gradient-to-r from-[#ddd] to-[#eee] z-20 flex flex-col items-center py-4 space-y-4 shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-6 h-2 bg-gradient-to-b from-[#888] to-[#bbb] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.3)] transform -rotate-3" />
                        ))}
                    </div>

                    {/* Sidebar (Leather Tab) */}
                    <div className={`${isMobile ? 'w-full' : 'w-64'} bg-[#3E2723] text-[#D7CCC8] p-6 pt-12 relative z-10 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.5)] flex flex-col`} style={{ backgroundImage: leatherTexture }}>
                        <div className="flex items-center gap-3 mb-10 text-[#FFECB3] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                            <Book size={28} />
                            <span className="font-serif font-bold text-2xl tracking-wide">Journal</span>
                        </div>

                        <nav className="space-y-4 flex-1">
                            {[
                                { name: 'Dashboard', icon: Compass },
                                { name: 'Notes', icon: PenTool },
                                { name: 'Voice Memos', icon: Mic },
                                { name: 'Gallery', icon: Camera },
                                { name: 'Wallet', icon: Wallet },
                            ].map((item, i) => (
                                <button
                                    key={i}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                           ${i === 1 ? 'bg-gradient-to-b from-[#5D4037] to-[#4E342E] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)] text-[#FFECB3]' : 'hover:bg-[#4E342E] shadow-[0_1px_0_rgba(255,255,255,0.05)]'}
                        `}
                                >
                                    <item.icon size={18} className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                                    <span className="font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{item.name}</span>
                                </button>
                            ))}
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
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
                                ...Array(20)
                            </a>
                        </div>
                    </div>
                </div>
            )}

                        <div className="pt-6 border-t border-[#5D4037] mt-auto">
                            <button className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100">
                                <Settings size={16} />
                                Settings
                            </button>
                        </div>
                    </div>

                    {/* Main Content (Paper) */}
                    <div className={`flex-1 bg-[#fdfbf7] p-8 ${isMobile ? 'pl-12' : 'pl-12'} relative`} style={{ backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '100% 2rem' }}>
                        {/* Search Bar - Metallic */}
                        <div className="flex justify-between items-center mb-10">
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search notes..."
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-[#ccc] bg-[#f5f5f5] shadow-[inset_1px_2px_5px_rgba(0,0,0,0.1),0_1px_0_#fff] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
                                />
                                <Compass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="flex gap-4 ml-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#eee] to-[#ccc] shadow-[0_2px_5px_rgba(0,0,0,0.2),inset_0_1px_0_#fff] flex items-center justify-center border border-[#bbb] cursor-pointer active:scale-95 active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)]">
                                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" />
                                </div>
                            </div>
                        </div>

                        {/* Note Cards */}
                        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'} gap-6`}>
                            {/* Sticky Note */}
                            <div className="bg-[#fff9c4] p-6 shadow-[2px_4px_8px_rgba(0,0,0,0.15)] transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#f0f0f0] opacity-50 rotate-[-2deg] shadow-sm transform skew-x-12" />
                                <h3 className="font-handwriting text-xl font-bold mb-2 text-[#f57f17]">Project Ideas</h3>
                                <ul className="list-disc pl-4 font-handwriting text-gray-700 space-y-1">
                                    <li>Redesign homepage</li>
                                    <li>Update user flow</li>
                                    <li>Fix navigation bug</li>
                                </ul>
                            </div>

                            {/* Polaroid Photo */}
                            <div className="bg-white p-3 pb-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="bg-gray-200 h-40 w-full mb-3 flex items-center justify-center overflow-hidden inner-shadow">
                                    <div className="inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&auto=format&fit=crop)' }}></div>
                                </div>
                                <div className="font-handwriting text-center text-gray-500">Office View - 2024</div>
                            </div>

                            {/* Audio Player (Metallic) */}
                            <div className="bg-gradient-to-b from-[#e0e0e0] to-[#d0d0d0] rounded-xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.2),inset_0_1px_0_#fff] border border-[#bbb] flex flex-col items-center">
                                <div className="w-full h-24 bg-[#333] rounded-lg mb-4 shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center">
                                    <div className="w-full h-1/2 flex items-end gap-[2px] px-2 opacity-80">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="flex-1 bg-[#4CAF50] animate-pulse" style={{ height: `${Math.random() * 100}%` }} />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="w-12 h-12 rounded-full bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] shadow-[0_3px_5px_rgba(0,0,0,0.2),inset_0_1px_0_#fff] flex items-center justify-center text-gray-600 active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] active:scale-95 border border-[#ccc]">
                                        <Music size={20} />
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] shadow-[0_3px_5px_rgba(0,0,0,0.2),inset_0_1px_0_#fff] flex items-center justify-center text-red-500 active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] active:scale-95 border border-[#ccc]">
                                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_5px_red]" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Toggle Switch */}
                        <div className="mt-12 p-6 bg-[#f5f5f5] rounded-xl border border-[#ddd] shadow-inner">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-gray-600 drop-shadow-[0_1px_0_#fff]">Sync to Cloud</span>
                                <div className="relative w-16 h-8 bg-[#ddd] rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] p-1 cursor-pointer">
                                    <div className="w-6 h-6 bg-gradient-to-b from-white to-[#f0f0f0] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] transform translate-x-8 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
