import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Command } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S93TerminalRetro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [text, setText] = useState('');
    const fullText = "INITIALIZING SYSTEM... LOADING ASSETS... DONE.";
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#111] font-mono text-[#FFB000] overflow-x-hidden selection:bg-[#FFB000] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        .font-retro { font-family: 'VT323', monospace; }
        
        .scanlines {
           background: linear-gradient(
              to bottom,
              rgba(255,255,255,0),
              rgba(255,255,255,0) 50%,
              rgba(0,0,0,0.2) 50%,
              rgba(0,0,0,0.2)
           );
           background-size: 100% 4px;
        }
        
        .crt-flicker {
           animation: flicker 0.15s infinite;
        }
        
        @keyframes flicker {
           0% { opacity: 0.97; }
           50% { opacity: 1; }
           100% { opacity: 0.98; }
        }
        
        .cursor-blink {
           animation: blink 1s step-end infinite;
        }
        @keyframes blink {
           0%, 100% { opacity: 1; }
           50% { opacity: 0; }
        }
        
        .glow-amber {
           text-shadow: 0 0 5px #FFB000, 0 0 10px #FFB000;
        }
      `}</style>

            {/* CRT Overlay */}
            <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-20" />
            <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />

            {/* Navbar */}
            <nav className="fixed w-full z-40 border-b-2 border-[#FFB000] bg-[#111]/90 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Terminal size={24} className="text-[#FFB000]" />
                        <span className="font-retro text-2xl tracking-widest glow-amber">TERMINAL</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['/HOME', '/ABOUT', '/LOGS'].map((item) => (
                            <a key={item} href="#" className="font-retro text-xl hover:bg-[#FFB000] hover:text-black px-2 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`font-retro text-xl animate-pulse ${isMobile ? 'hidden' : 'block'}`}>STATUS: ONLINE</span>
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
                                /HOME
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                /ABOUT
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                /LOGS
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto crt-flicker relative z-10">
                <div className="border-2 border-[#FFB000] p-8 mb-12 bg-[#1a1a1a]">
                    <div className="font-retro text-xl mb-4 opacity-70 border-b border-[#FFB000] pb-2 w-fit">
                        root@admin:~# execute_intro.exe
                    </div>

                    <h1 className={`font-retro ${isMobile ? 'text-6xl' : 'text-6xl md:text-8xl'} mb-6 glow-amber leading-none`}>
                        WELCOME TO <br />
                        THE MAINFRAME
                    </h1>

                    <p className="font-retro text-2xl mb-8 max-w-2xl leading-relaxed">
                        {text}<span className="inline-block w-3 h-6 bg-[#FFB000] cursor-blink align-middle ml-1" />
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-[#FFB000] text-black font-retro text-2xl px-6 py-2 hover:bg-white transition-colors uppercase">
                            [ Execute ]
                        </button>
                        <button className="border-2 border-[#FFB000] text-[#FFB000] font-retro text-2xl px-6 py-2 hover:bg-[#FFB000] hover:text-black transition-colors uppercase">
                            [ Abort ]
                        </button>
                    </div>
                </div>

                {/* Grid Data */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8`}>
                    <div className="border border-[#FFB000] p-4">
                        <h3 className="font-retro text-2xl border-b border-[#FFB000] mb-4 flex justify-between">
                            <span>SYSTEM_STATS</span>
                            <span>[ v1.02 ]</span>
                        </h3>
                        <div className="space-y-2 font-retro text-xl">
                            <div className="flex justify-between">
                                <span>CPU_LOAD</span>
                                <div className="w-32 h-4 bg-[#333] border border-[#FFB000] relative">
                                    <div className="absolute top-0 left-0 bottom-0 bg-[#FFB000] w-[45%]" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span>MEMORY</span>
                                <div className="w-32 h-4 bg-[#333] border border-[#FFB000] relative">
                                    <div className="absolute top-0 left-0 bottom-0 bg-[#FFB000] w-[72%]" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span>NETWORK</span>
                                <span className="animate-pulse">CONNECTED</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-[#FFB000] p-4">
                        <h3 className="font-retro text-2xl border-b border-[#FFB000] mb-4">LATEST_LOGS</h3>
                        <ul className="font-retro text-lg space-y-1 opacity-80">
                            <li>&gt; [12:00] User login detected</li>
                            <li>&gt; [12:01] Access granted level 4</li>
                            <li>&gt; [12:05] Downloading assets...</li>
                            <li>&gt; [12:05] Complete.</li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer className="border-t border-[#FFB000] py-8 bg-[#111] relative z-10 font-retro text-center opacity-60">
                NO SIGNAL INPUT DETECTED. CHECK CONNECTION.
            </footer>
        </div>
    );
};
