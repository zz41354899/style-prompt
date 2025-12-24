import { useState } from 'react';
import { Database, ShieldCheck, Server, Menu, X, ChevronRight, Search } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S81EnterpriseBlue = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans text-[#1C1E21] overflow-x-hidden selection:bg-[#003366] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        .font-ent { font-family: 'Roboto', sans-serif; }
        
        .nav-link {
          color: #CFD8DC;
          font-weight: 500;
          font-size: 14px;
          padding: 0 12px;
          height: 64px;
          display: flex;
          align-items: center;
          border-bottom: 3px solid transparent;
          transition: all 0.2s;
        }
        .nav-link:hover {
          background-color: #002244;
          color: white;
        }
        .nav-link.active {
          border-bottom-color: #4FC3F7;
          color: white;
          background-color: #002244;
        }
        
        .panel {
          background: white;
          border: 1px solid #DCE1E6;
          border-radius: 2px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        
        .btn-dense {
          padding: 6px 16px;
          font-size: 13px;
          border-radius: 2px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>

            {/* Top Bar */}
            <nav className="bg-[#003366] text-white h-[64px] shadow-sm sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-4 h-full flex justify-between items-center">
                    <div className="flex items-center h-full">
                        <div className="flex items-center gap-2 mr-8">
                            <Database size={24} className="text-[#4FC3F7]" />
                            <span className="font-ent font-bold text-xl tracking-wide uppercase">Oracleus</span>
                        </div>

                        <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} h-full items-center`}>
                            <a href="#" className="nav-link active">Dashboard</a>
                            <a href="#" className="nav-link">Reports</a>
                            <a href="#" className="nav-link">Administration</a>
                            <a href="#" className="nav-link">System Health</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className={`relative ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>
                            <input type="text" placeholder="Search resources..." className="bg-[#002244] border border-[#004080] rounded-[2px] px-3 py-1.5 text-sm w-64 text-white focus:outline-none focus:border-[#4FC3F7]" />
                            <Search size={14} className="absolute right-3 top-2.5 text-[#819CA9]" />
                        </div>

                        <div className="w-8 h-8 rounded-full bg-[#0055AA] flex items-center justify-center text-xs font-bold border border-[#4FC3F7]">JD</div>

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
                                Dashboard
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Reports
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Administration
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                System Health
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
                                Dashboard
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Reports
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Administration
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                System Health
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
                                Create New Instance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                View Audit Logs
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Manage Users
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                System Config
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Sub-nav / Breadcrumbs */}
            <div className="bg-white border-b border-[#DCE1E6] py-2 px-4 shadow-sm">
                <div className="max-w-[1400px] mx-auto flex items-center text-xs text-[#546E7A] font-ent">
                    <span className="hover:text-[#0055AA] cursor-pointer">Home</span>
                    <ChevronRight size={12} className="mx-2" />
                    <span className="hover:text-[#0055AA] cursor-pointer">Systems</span>
                    <ChevronRight size={12} className="mx-2" />
                    <span className="text-[#263238] font-bold">Overview</span>
                </div>
            </div>

            {/* Main Content Area */}
            <main className={`max-w-[1400px] mx-auto p-6 grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-4'} gap-6`}>

                {/* Sidebar / Context Panel */}
                <aside className={`${isMobile ? 'col-span-1' : 'lg:col-span-1'} space-y-4`}>
                    <div className="panel p-4">
                        <h3 className="text-[#37474F] font-bold text-sm uppercase mb-4 border-b border-[#DCE1E6] pb-2">Quick Actions</h3>
                        <ul className="space-y-2 text-sm text-[#0055AA] font-medium">
                            {['Create New Instance', 'View Audit Logs', 'Manage Users', 'System Config'].map(item => (
                                <li key={item}><a href="#" className="hover:underline flex items-center gap-2"><ChevronRight size={12} /> {item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="panel p-4 bg-[#E3F2FD] border-[#90CAF9]">
                        <div className="flex items-start gap-3">
                            <ShieldCheck size={20} className="text-[#0055AA] mt-1" />
                            <div>
                                <h4 className="font-bold text-[#003366] text-sm mb-1">System Secure</h4>
                                <p className="text-xs text-[#455A64]">Last scan completed 12 mins ago. No vulnerabilities found.</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Hero / Dashboard */}
                <section className={`${isMobile ? 'col-span-1' : 'lg:col-span-3'} space-y-6`}>
                    <div className="flex justify-between items-end border-b border-[#CFD8DC] pb-4">
                        <div>
                            <h1 className="text-2xl font-ent text-[#263238] font-light">System Overview</h1>
                            <p className="text-sm text-[#546E7A] mt-1">Real-time monitoring of enterprise resources.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn-dense bg-white border border-[#CFD8DC] text-[#455A64] hover:bg-[#F5F5F5]">Refresh</button>
                            <button className="btn-dense bg-[#0055AA] text-white hover:bg-[#004080]">Generate Report</button>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-4`}>
                        {[
                            { label: 'Total Requests', value: '24.5M', delta: '+2.4%', good: true },
                            { label: 'Avg Latency', value: '42ms', delta: '-12%', good: true },
                            { label: 'Error Rate', value: '0.04%', delta: '+0.01%', good: false },
                        ].map((metric, i) => (
                            <div key={i} className="panel p-5">
                                <div className="text-xs text-[#546E7A] uppercase tracking-wide font-bold mb-2">{metric.label}</div>
                                <div className="text-3xl text-[#263238] font-light mb-2">{metric.value}</div>
                                <div className={`text-xs font-bold ${metric.good ? 'text-green-600' : 'text-red-600'}`}>
                                    {metric.delta} <span className="text-[#90A4AE] font-normal">vs last week</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Data Table Mockup */}
                    <div className="panel">
                        <div className="px-6 py-4 border-b border-[#DCE1E6] flex justify-between items-center bg-[#FAFAFA]">
                            <h3 className="font-bold text-[#37474F] text-sm">Active Nodes</h3>
                            <button className="text-[#0055AA] text-xs font-bold hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm font-ent">
                                <thead className="bg-[#F5F5F5] text-[#546E7A]">
                                    <tr>
                                        <th className="px-6 py-3 font-medium">Node ID</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Region</th>
                                        <th className="px-6 py-3 font-medium">Load</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E0E0E0]">
                                    {[1, 2, 3, 4].map((row) => (
                                        <tr key={row} className="hover:bg-[#F1F8E9]">
                                            <td className="px-6 py-3 font-mono text-[#0055AA]">us-east-{row}8b</td>
                                            <td className="px-6 py-3"><span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />Running</td>
                                            <td className="px-6 py-3 text-[#37474F]">Virginia, USA</td>
                                            <td className="px-6 py-3 text-[#37474F]">{20 + row * 12}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-[#DCE1E6] py-8 mt-12">
                <div className="max-w-[1400px] mx-auto px-6 text-xs text-[#90A4AE] flex justify-between">
                    <div>
                        &copy; 2024 Oracleus Enterprise Solutions. All rights reserved. <br />
                        Version 24.0.1 (Build 8842)
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-[#0055AA] underline">Privacy Policy</a>
                        <a href="#" className="hover:text-[#0055AA] underline">Service Level Agreement</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
