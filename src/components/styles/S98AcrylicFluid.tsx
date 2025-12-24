import { useState } from 'react';
import { Maximize2, Minimize2, MoreHorizontal, Settings, Folder, Image, Music, Video, User, Sun, Moon } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S98AcrylicFluid = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [darkMode, setDarkMode] = useState(true);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-[#202020] text-white' : 'bg-[#E3E3E3] text-black'} font-sans overflow-hidden transition-colors duration-500 relative selection:bg-[#60CDFF] selection:text-black`}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;600;700&display=swap');
        .font-fluent { font-family: 'Segoe UI', sans-serif; }
        
        .acrylic-material {
           background: ${darkMode ? 'rgba(32, 32, 32, 0.7)' : 'rgba(243, 243, 243, 0.7)'};
           backdrop-filter: blur(40px) saturate(125%);
           -webkit-backdrop-filter: blur(40px) saturate(125%);
        }
        
        .mica-surface {
           background: ${darkMode ? 'rgba(50, 50, 50, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
        }
        
        .noise-texture {
           position: absolute;
           top: 0; left: 0; right: 0; bottom: 0;
           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
           pointer-events: none;
           z-index: 10;
        }

        .fluent-shadow {
           box-shadow: 0 8px 16px rgba(0,0,0,${darkMode ? '0.3' : '0.1'});
        }
      `}</style>

            {/* Background Image (Abstract Fluid) */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay pointer-events-none" />
            <div className="noise-texture" />

            {/* Desktop Container */}
            <div className={`relative z-20 h-screen p-4 flex flex-col ${isMobile ? '' : 'md:flex-row'} gap-4`}>

                {/* Sidebar (Navigation) */}
                <aside className={`${isMobile ? 'w-full' : 'md:w-64'} acrylic-material rounded-xl flex flex-col p-2 fluent-shadow border border-white/5`}>
                    {/* Window Controls (Fake) */}
                    <div className="h-10 flex items-center px-4 gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors" />
                    </div>

                    <div className="space-y-1">
                        <button className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-fluent text-sm font-medium transition-all ${darkMode ? 'bg-white/10' : 'bg-black/5'}`}>
                            <Folder size={18} className="text-[#60CDFF]" /> Home
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-fluent text-sm font-medium hover:bg-white/5 transition-colors">
                            <Image size={18} className="text-orange-400" /> Gallery
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-fluent text-sm font-medium hover:bg-white/5 transition-colors">
                            <Music size={18} className="text-pink-400" /> Music
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-fluent text-sm font-medium hover:bg-white/5 transition-colors">
                            <Video size={18} className="text-purple-400" /> Videos
                        </button>
                    </div>

                    <div className="mt-auto">
                        <button className="w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-fluent text-sm font-medium hover:bg-white/5 transition-colors">
                            <Settings size={18} /> Settings
                        </button>
                        <div className={`mt-2 p-3 rounded-lg flex items-center gap-3 ${darkMode ? 'bg-black/20' : 'bg-white/40'} border border-white/5`}>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#60CDFF] to-[#0078D4] flex items-center justify-center font-bold text-white text-lg">
                                A
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-fluent text-sm font-semibold truncate">Antigravity</div>
                                <div className="font-fluent text-xs opacity-60 truncate">Admin</div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className={`flex-1 acrylic-material rounded-xl overflow-hidden flex flex-col fluent-shadow border border-white/5`}>
                    {/* Toolbar */}
                    <header className={`h-16 border-b border-white/5 flex justify-between items-center px-6 ${darkMode ? 'bg-black/10' : 'bg-white/40'}`}>
                        <h1 className="font-fluent text-xl font-semibold opacity-90">Quick Access</h1>

                        <div className="flex items-center gap-3">
                            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <div className="h-6 w-px bg-white/20 mx-1" />
                            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors"><Minimize2 size={18} /></button>
                            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors"><Maximize2 size={18} /></button>
                        </div>
                    </header>

                    {/* Content Scroll */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className={`grid grid-cols-1 ${isMobile ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-4`}>
                            {[
                                { name: "Project Alpha", type: "Folder", size: "12 items" },
                                { name: "Design System", type: "Figma", size: "240 MB" },
                                { name: "Q4 Report.pdf", type: "PDF", size: "2.4 MB" },
                                { name: "vacation_01.jpg", type: "Image", size: "4.5 MB" },
                                { name: "vacation_02.jpg", type: "Image", size: "3.2 MB" },
                                { name: "Notes.txt", type: "Text", size: "12 KB" },
                                { name: "Budget_2024.xlsx", type: "Excel", size: "45 KB" },
                                { name: "Podcast_Ep1.mp3", type: "Audio", size: "48 MB" },
                            ].map((file, i) => (
                                <div key={i} className={`mica-surface p-4 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-default fluent-shadow group`}>
                                    <div className="aspect-[4/3] rounded bg-gradient-to-br from-gray-500/20 to-gray-600/20 mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                        {file.type === 'Folder' ? <Folder size={48} className="text-[#FCD116]" /> :
                                            file.type === 'Info' ? <User size={48} className="text-[#60CDFF]" /> :
                                                <div className="font-fluent font-bold text-2xl opacity-30">{file.type.slice(0, 3)}</div>}
                                    </div>
                                    <div className="font-fluent font-medium text-sm truncate mb-0.5">{file.name}</div>
                                    <div className="font-fluent text-xs opacity-60 flex justify-between">
                                        <span>{file.type}</span>
                                        <span>{file.size}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
