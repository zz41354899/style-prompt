import { useState, useEffect } from 'react';
import { Mail, Edit2, Star, Menu, X, Plus, Search, Archive, Trash2 } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S99MaterialYou = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Inbox');
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#FFFBFE] font-sans text-black overflow-hidden selection:bg-[#E8DEF8] selection:text-black relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300;400;500;600&display=swap');
        .font-m3 { font-family: 'Roboto Flex', sans-serif; }
        
        /* Dynamic Theme Colors (Mocked) */
        :root {
           --md-primary: #6750A4;
           --md-on-primary: #FFFFFF;
           --md-primary-container: #EADDFF;
           --md-on-primary-container: #21005D;
           --md-secondary-container: #E8DEF8;
           --md-on-secondary-container: #1D192B;
           --md-surface: #FFFBFE;
           --md-surface-variant: #E7E0EC;
        }
        
        .m3-fab {
           box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
           transition: all 0.2s cubic-bezier(0.2, 0.0, 0, 1.0);
        }
        .m3-fab:active {
           box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
           transform: scale(0.98);
        }
        
        .m3-card {
           border-radius: 20px;
           background: var(--md-surface);
           transition: background-color 0.2s ease;
        }
        .m3-card:hover {
           background: #F6F3F8;
        }
        
        .m3-nav-item {
           border-radius: 28px;
           transition: background-color 0.2s ease;
        }
        .m3-nav-item.active {
           background: var(--md-secondary-container);
           color: var(--md-on-secondary-container);
        }
        
        .ripple {
           position: relative;
           overflow: hidden;
        }
        .ripple::after {
           content: "";
           display: block;
           position: absolute;
           width: 100%; height: 100%;
           top: 0; left: 0;
           pointer-events: none;
           background-image: radial-gradient(circle, rgba(0,0,0,0.1) 10%, transparent 10.01%);
           background-repeat: no-repeat;
           background-position: 50%;
           transform: scale(10, 10);
           opacity: 0;
           transition: transform .5s, opacity 1s;
        }
        .ripple:active::after {
           transform: scale(0, 0);
           opacity: .2;
           transition: 0s;
        }
      `}</style>

            <div className="flex h-screen">
                {/* Navigation Rail / Drawer */}
                <nav className={`
            ${isMobile ? 'w-20' : 'w-80'} 
            bg-[#F3EDF7] p-4 flex flex-col gap-2 transition-all duration-300
         `}>
                    {responsive.nav.showDesktop ? (
                        <div className="px-4 py-3 font-m3 font-bold text-2xl text-[#1D1B20] mb-4">Mail</div>
                    ) : (
                        <div className="flex justify-center mb-4"><Menu size={24} /></div>
                    )}

                    <button className="flex items-center gap-4 bg-[#EADDFF] text-[#21005D] p-4 rounded-2xl hover:shadow-md transition-shadow mb-6 ripple w-fit min-w-[56px] h-14">
                        <Edit2 size={24} />
                        {responsive.nav.showDesktop && <span className="font-m3 font-medium">Compose</span>}
                    </button>

                    {[
                        { icon: Mail, label: "Inbox", count: "12" },
                        { icon: Star, label: "Starred", count: "" },
                        { icon: Archive, label: "Archived", count: "" },
                        { icon: Trash2, label: "Trash", count: "" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => setActiveTab(item.label)}
                            className={`flex items-center gap-3 px-6 py-4 m3-nav-item ripple ${activeTab === item.label ? 'active font-bold' : 'font-medium text-[#49454F] hover:bg-[#E8DEF8]/50'}`}
                        >
                            <item.icon size={24} />
                            {responsive.nav.showDesktop && (
                                <>
                                    <span className="flex-1 text-left">{item.label}</span>
                                    {item.count && <span className="text-xs">{item.count}</span>}
                                </>
                            )}
                        </button>
                    ))}
                </nav>


                {/* Main Content */}
                <main className="flex-1 flex flex-col relative bg-white rounded-tl-[24px] overflow-hidden shadow-2xl mr-2 my-2">
                    {/* Top Bar */}
                    <header className="h-16 px-6 flex items-center justify-between bg-white z-10">
                        <div className="bg-[#F3EDF7] rounded-full h-12 flex-1 max-w-2xl px-4 flex items-center gap-3 text-[#49454F]">
                            <Menu size={24} className={`${isMobile ? 'block' : 'lg:hidden'}`} onClick={() => setMenuOpen(!menuOpen)} />
                            <Search size={24} />
                            <input
                                type="text"
                                placeholder="Search mail"
                                className="bg-transparent border-none outline-none flex-1 font-m3"
                            />
                            <div className="w-8 h-8 rounded-full bg-[#6750A4] text-white flex items-center justify-center font-bold text-sm">A</div>
                        </div>
                    </header>

                    {/* Email List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-1">
                        <div className="font-m3 text-sm font-medium text-[#49454F] px-4 py-2">Today</div>
                        {[
                            { sender: "Material Design", subject: "Welcome to Material 3", time: "10:30 AM", snippet: "Discover dynamic color, new components, and more...", color: "bg-[#EADDFF]" },
                            { sender: "Dribbble", subject: "Top shots for you", time: "09:45 AM", snippet: "Check out the latest design trends in UI/UX this week.", color: "bg-[#FFD8E4]" },
                            { sender: "Github", subject: "Security alert", time: "08:15 AM", snippet: "We noticed a new login from a device in Taiwan...", color: "bg-[#F2F2F2]" },
                            { sender: "Figma Team", subject: "New collaboration features", time: "Yesterday", snippet: "Real-time cursors just got smoother. Try it now.", color: "bg-[#C4E7FF]" },
                        ].map((email, i) => (
                            <div key={i} className={`flex gap-4 ${isMobile ? 'p-3' : 'md:px-4 md:py-3'} m3-card cursor-pointer ripple group`}>
                                <div className={`w-10 h-10 rounded-full ${email.color} text-[#1D1B20] flex items-center justify-center font-bold shrink-0`}>
                                    {email.sender[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <span className={`font-m3 text-base ${i === 0 ? 'font-bold text-black' : 'font-medium text-[#1D1B20]'}`}>{email.sender}</span>
                                        <span className="text-xs text-[#49454F]">{email.time}</span>
                                    </div>
                                    <div className="font-m3 text-sm truncate text-[#1D1B20] mb-0.5">{email.subject}</div>
                                    <div className="font-m3 text-sm truncate text-[#49454F] group-hover:text-[#1D1B20] transition-colors">{email.snippet}</div>
                                </div>
                                <Star size={20} className="text-[#49454F] self-center opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>

                    {/* F.A.B. (Floating Action Button) for Mobile */}
                    <div className={`absolute bottom-6 right-6 ${isMobile ? 'block' : 'lg:hidden'}`}>
                        <button className="w-14 h-14 bg-[#EADDFF] text-[#21005D] rounded-[16px] m3-fab flex items-center justify-center ripple">
                            <Edit2 size={24} />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};
