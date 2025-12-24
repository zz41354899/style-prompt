import { useState } from 'react';
import { LayoutDashboard, Users, DollarSign, Activity, Menu, X, Filter, Download } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S95DataDashboard = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans text-[#333] overflow-x-hidden selection:bg-[#2196F3] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
        .font-condensed { font-family: 'Roboto Condensed', sans-serif; }
        .font-ui { font-family: 'Inter', sans-serif; }
        
        .card-shadow {
           box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
      `}</style>

            {/* Sidebar (Desktop) */}
            <div className={`fixed left-0 top-0 bottom-0 w-64 bg-[#212121] text-white ${isMobile ? 'hidden' : 'lg:flex'} flex-col p-4 z-50`}>
                <div className="flex items-center gap-3 px-4 mb-8">
                    <LayoutDashboard className="text-[#2196F3]" />
                    <span className="font-condensed font-bold text-xl uppercase tracking-wider">Analytics</span>
                </div>

                <div className="space-y-1 font-condensed tracking-wide">
                    {['Overview', 'Performance', 'Customers', 'Products', 'Settings'].map(item => (
                        <div key={item} className={`px-4 py-2 rounded cursor-pointer hover:bg-white/10 transition-colors ${item === 'Overview' ? 'bg-[#2196F3] text-white' : 'text-gray-400'}`}>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="mt-auto px-4 text-xs text-gray-500 font-ui">
                    v2.4.0 Build 8842
                </div>
            </div>

            {/* Main Content */}
            <div className={`${isMobile ? 'ml-0' : 'lg:ml-64'} min-h-screen flex flex-col`}>
                {/* Topbar */}
                <header className="bg-white h-16 border-b border-gray-200 flex justify-between items-center px-6 sticky top-0 z-40">
                    <h1 className="font-condensed font-bold text-lg text-gray-700 uppercase">Dashboard / Overview</h1>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-xs font-bold uppercase bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-50 text-gray-600">
                            <Filter size={14} /> Filter
                        </button>
                        <button className="flex items-center gap-2 text-xs font-bold uppercase bg-[#2196F3] text-white px-3 py-1.5 rounded hover:bg-[#1976D2] shadow-sm">
                            <Download size={14} /> Export
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className={`${isMobile ? 'block' : 'lg:hidden'} p-1`}>
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </header>
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
                                Overview
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Performance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Customers
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Products
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            )}

                {/* Dashboard Content */}
                <main className="p-6">
                    {/* KPI Cards */}
                    <div className={`grid grid-cols-1 ${isMobile ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-4'} gap-4 mb-6`}>
                        {[
                            { label: "Total Revenue", value: "$48,294", change: "+4.5%", icon: DollarSign, color: "text-green-500" },
                            { label: "Active Users", value: "2,842", change: "+12.2%", icon: Users, color: "text-blue-500" },
                            { label: "Bounce Rate", value: "42.3%", change: "-2.1%", icon: Activity, color: "text-orange-500" },
                            { label: "Avg. Session", value: "4m 32s", change: "+0.8%", icon: LayoutDashboard, color: "text-purple-500" },
                        ].map((kpi, i) => (
                            <div key={i} className="bg-white p-4 rounded card-shadow border border-gray-100">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-condensed text-gray-500 text-sm uppercase font-bold">{kpi.label}</span>
                                    <kpi.icon size={18} className="text-gray-400" />
                                </div>
                                <div className="flex items-end gap-3">
                                    <span className="font-ui font-semibold text-2xl text-gray-800">{kpi.value}</span>
                                    <span className={`text-xs font-bold mb-1 ${kpi.color}`}>{kpi.change}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Chart Area */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2 bg-white p-6 rounded card-shadow border border-gray-100 min-h-[300px]">
                            <h3 className="font-condensed font-bold text-gray-700 uppercase mb-4">Revenue Traffic Source</h3>
                            <div className="h-64 flex items-end gap-2">
                                {[30, 45, 35, 60, 50, 75, 55, 80, 70, 90, 65, 50, 40, 55, 45, 65, 50, 70, 60, 45].map((h, i) => (
                                    <div key={i} className="flex-1 bg-blue-50 rounded-t hover:bg-blue-100 transition-colors relative group">
                                        <div
                                            className="absolute bottom-0 left-0 right-0 bg-[#2196F3] rounded-t opacity-90 group-hover:opacity-100 transition-all"
                                            style={{ height: `${h}%` }}
                                        />
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">
                                            Val: {h * 120}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${isMobile ? 'col-span-1' : 'lg:col-span-1'} bg-white p-6 rounded card-shadow border border-gray-100 min-h-[300px]`}>
                            <h3 className="font-condensed font-bold text-gray-700 uppercase mb-4">Device Sessions</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Desktop', val: '65%', color: 'bg-blue-500' },
                                    { label: 'Mobile', val: '28%', color: 'bg-green-500' },
                                    { label: 'Tablet', val: '7%', color: 'bg-orange-400' },
                                ].map((d, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm font-ui text-gray-600 mb-1">
                                            <span>{d.label}</span>
                                            <span className="font-bold">{d.val}</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${d.color}`} style={{ width: d.val }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="bg-white rounded card-shadow border border-gray-100 overflow-hidden">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-condensed font-bold text-gray-700 uppercase">Recent Transactions</h3>
                            <a href="#" className="text-xs text-[#2196F3] font-bold hover:underline">View All</a>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-500 font-condensed uppercase text-xs font-bold">
                                    <tr>
                                        <th className="px-6 py-3">Order ID</th>
                                        <th className="px-6 py-3">Customer</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 font-ui text-gray-700">
                                    {[
                                        { id: '#SK2931', name: 'Alice Smith', date: 'Oct 24', status: 'Completed', amt: '$120.50' },
                                        { id: '#SK2932', name: 'Bob Jones', date: 'Oct 24', status: 'Pending', amt: '$85.00' },
                                        { id: '#SK2933', name: 'Charlie Day', date: 'Oct 23', status: 'Failed', amt: '$340.00' },
                                        { id: '#SK2934', name: 'Diana Prince', date: 'Oct 23', status: 'Completed', amt: '$1,205.00' },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3 font-mono text-xs">{row.id}</td>
                                            <td className="px-6 py-3 font-medium">{row.name}</td>
                                            <td className="px-6 py-3 text-gray-500">{row.date}</td>
                                            <td className="px-6 py-3">
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold ${row.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                    row.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                        'bg-red-100 text-red-700'
                                                    }`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3 text-right font-bold">{row.amt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
