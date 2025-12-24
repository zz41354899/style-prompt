import { useState } from 'react';
import { Code2, Folder, Search, Menu, X, GitBranch, Settings } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S94CodeEditor = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className={`min-h-screen bg-[#282A36] font-mono text-[#F8F8F2] overflow-x-hidden selection:bg-[#44475A] selection:text-white flex flex-col ${isMobile ? '' : 'md:flex-row'}`}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');
        .font-code { font-family: 'Fira Code', monospace; }
        
        .syntax-pink { color: #FF79C6; }
        .syntax-purple { color: #BD93F9; }
        .syntax-cyan { color: #8BE9FD; }
        .syntax-green { color: #50FA7B; }
        .syntax-yellow { color: #F1FA8C; }
        .syntax-comment { color: #6272A4; }
        
        .line-num {
           counter-increment: lines;
           padding-right: 1.5rem;
           color: #6272A4;
           text-align: right;
           user-select: none;
        }
        .line-num::before {
           content: counter(lines);
        }
      `}</style>

            {/* Sidebar (Activity Bar) */}
            <aside className={`bg-[#191A21] w-16 ${isMobile ? 'hidden' : 'flex'} flex-col items-center py-4 gap-6 text-[#6272A4] border-r border-[#44475A]`}>
                <Folder size={28} className="text-[#F8F8F2] cursor-pointer" />
                <Search size={28} className="hover:text-[#F8F8F2] cursor-pointer transition-colors" />
                <GitBranch size={28} className="hover:text-[#F8F8F2] cursor-pointer transition-colors" />
                <div className="mt-auto">
                    <Settings size={28} className="hover:text-[#F8F8F2] cursor-pointer transition-colors" />
                </div>
            </aside>

            {/* Explorer Panel (Optional, hidden on small) */}
            <aside className={`bg-[#21222C] w-64 ${isMobile ? 'hidden' : 'xl:block'} p-4 border-r border-[#44475A]`}>
                <div className="text-xs uppercase font-bold text-[#6272A4] mb-4 pl-2">Explorer</div>
                <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 pl-2 py-1 bg-[#44475A]/50 text-[#F8F8F2] rounded cursor-pointer">
                        <span className="text-[#BD93F9] font-bold">src</span>
                    </div>
                    <div className="pl-6 py-1 text-[#F8F8F2] hover:bg-[#44475A] rounded cursor-pointer flex items-center gap-2">
                        <span className="text-[#F1FA8C]">JS</span> App.tsx
                    </div>
                    <div className="pl-6 py-1 text-[#F8F8F2] hover:bg-[#44475A] rounded cursor-pointer flex items-center gap-2">
                        <span className="text-[#FF79C6]">CSS</span> main.css
                    </div>
                    <div className="pl-6 py-1 text-[#F8F8F2] hover:bg-[#44475A] rounded cursor-pointer flex items-center gap-2">
                        <span className="text-[#8BE9FD]">JSON</span> package.json
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Tab Bar */}
                <div className="bg-[#191A21] flex text-sm overflow-x-auto">
                    <div className="px-4 py-3 bg-[#282A36] text-[#F8F8F2] border-t-2 border-[#BD93F9] flex items-center gap-2 min-w-[120px]">
                        <span className="text-[#F1FA8C]">JS</span> App.tsx <X size={14} className="ml-auto opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="px-4 py-3 bg-[#21222C] text-[#6272A4] flex items-center gap-2 border-r border-[#44475A] min-w-[120px] hover:bg-[#282A36] hover:text-[#F8F8F2] cursor-pointer transition-colors">
                        main.css
                    </div>

                    {/* Mobile Menu */}
                    <div className={`ml-auto ${isMobile ? 'block' : 'md:hidden'} p-3 text-[#F8F8F2] cursor-pointer`} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-[#282A36] px-4 py-2 text-sm text-[#6272A4] flex gap-2 items-center border-b border-[#44475A]">
                    src <span className="text-[#F8F8F2]">&gt;</span> App.tsx
                </div>

                {/* Editor Area */}
                <div className={`flex-1 ${isMobile ? 'p-6' : 'p-6 md:p-12'} font-code text-sm md:text-base leading-relaxed overflow-y-auto`}>
                    <div className="relative pl-12">
                        {/* Line Numbers Overlay (simplified for demo) */}
                        <div className="absolute left-0 top-0 bottom-0 text-[#6272A4] select-none text-right w-8 flex flex-col font-mono text-xs pt-1 opacity-50">
                            {Array.from({ length: 20 }).map((_, i) => <span key={i} className="h-6 md:h-7">{i + 1}</span>)}
                        </div>

                        {/* Code Content */}
                        <div className="space-y-1 md:space-y-1.5">
                            <div className="h-6 md:h-7"><span className="syntax-purple">import</span> React <span className="syntax-purple">from</span> <span className="syntax-green">'react'</span>;</div>
                            <div className="h-6 md:h-7"><span className="syntax-purple">import</span> {'{'} Hero {'}'} <span className="syntax-purple">from</span> <span className="syntax-green">'./components'</span>;</div>
                            <div className="h-6 md:h-7"></div>
                            <div className="h-6 md:h-7"><span className="syntax-comment">// Welcome to the Source Code</span></div>
                            <div className="h-6 md:h-7"><span className="syntax-pink">export</span> <span className="syntax-pink">const</span> <span className="syntax-yellow">Portfolio</span> = () ={'>'} {'{'}</div>
                            <div className="h-6 md:h-7 pl-4"><span className="syntax-pink">const</span> developer = {'{'}</div>
                            <div className="h-6 md:h-7 pl-8">name: <span className="syntax-green">"Antigravity"</span>,</div>
                            <div className="h-6 md:h-7 pl-8">skills: [<span className="syntax-green">"React"</span>, <span className="syntax-green">"TypeScript"</span>, <span className="syntax-green">"Design"</span>],</div>
                            <div className="h-6 md:h-7 pl-8">status: <span className="syntax-purple">"READY_TO_WORK"</span></div>
                            <div className="h-6 md:h-7 pl-4">{'}'};</div>
                            <div className="h-6 md:h-7"></div>
                            <div className="h-6 md:h-7 pl-4"><span className="syntax-pink">return</span> (</div>
                            <div className="h-6 md:h-7 pl-8">{'<'}<span className="syntax-cyan">div</span> className=<span className="syntax-green">"container"</span>{'>'}</div>
                            <div className="h-6 md:h-7 pl-12">{'<'}<span className="syntax-cyan">Hero</span> title=<span className="syntax-green">"Build the Future"</span> /{'}'}</div>
                            <div className="h-6 md:h-7 pl-12">{'<'}<span className="syntax-cyan">button</span> onClick={`{() => deploy()}`}{'>'}</div>
                            <div className="h-6 md:h-7 pl-16">Launch Project</div>
                            <div className="h-6 md:h-7 pl-12">{'</'}<span className="syntax-cyan">button</span>{'>'}</div>
                            <div className="h-6 md:h-7 pl-8">{'</'}<span className="syntax-cyan">div</span>{'>'}</div>
                            <div className="h-6 md:h-7 pl-4">);</div>
                            <div className="h-6 md:h-7">{'}'};</div>
                        </div>

                        {/* Interactive Button overlaying "Launch Project" */}
                        <div className="mt-8 ml-12">
                            <button className="bg-[#50FA7B] text-[#282A36] px-6 py-3 font-bold rounded hover:bg-[#8BE9FD] transition-colors shadow-lg">
                                Running Build...
                            </button>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="bg-[#191A21] px-4 py-1 text-xs text-[#F8F8F2] flex justify-between border-t border-[#44475A]">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><GitBranch size={10} /> main*</span>
                        <span>0 errors, 0 warnings</span>
                    </div>
                    <div className="flex gap-4">
                        <span>Ln 18, Col 42</span>
                        <span>UTF-8</span>
                        <span>TypeScript React</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
