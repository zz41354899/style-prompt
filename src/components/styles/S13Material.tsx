import { Palette, Home, Search, Heart, User, Menu, Bell, Plus, Layers, Grid3X3, Type } from 'lucide-react';

export const S13Material = () => {
  return (
    <div className="min-h-full bg-[#F5F5F5] font-sans relative">
      {/* App Bar */}
      <header className="bg-[#6750A4] text-white px-4 py-3 flex items-center gap-4 shadow-md">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-xl font-medium flex-1">Material You</span>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#F2B8B5] rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#EADDFF] flex items-center justify-center">
          <User className="w-5 h-5 text-[#6750A4]" />
        </div>
      </header>

      <div className="p-4">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-6">
          <div className="h-44 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 50%, #D0BCFF 100%)' }}>
            <div className="absolute bottom-4 left-6 right-6">
              <div className="text-white/60 text-xs font-medium mb-1">Material Design 3</div>
              <h1 className="text-2xl font-medium text-white">質感設計系統</h1>
            </div>
            {/* 裝飾圓形 */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-white/5" />
          </div>
          <div className="p-6">
            <p className="text-[#49454F] mb-6 leading-relaxed">
              基於動態色彩的設計系統，強調個人化、無障礙與表達性。讓每個介面都獨一無二。
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-[#6750A4] text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-[#6750A4]/30 transition-all">
                開始使用
              </button>
              <button className="px-6 py-3 text-[#6750A4] font-medium text-sm border border-[#79747E] rounded-full hover:bg-[#6750A4]/5 transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {[
            { icon: <Grid3X3 className="w-6 h-6" />, title: '網格系統', desc: '4dp 基準網格', color: '#6750A4', bg: '#EADDFF' },
            { icon: <Palette className="w-6 h-6" />, title: '動態色彩', desc: '從桌布提取主題', color: '#7D5260', bg: '#FFD8E4' },
            { icon: <Layers className="w-6 h-6" />, title: '高度系統', desc: '色調陰影層次', color: '#006A6A', bg: '#A8EFF0' },
            { icon: <Type className="w-6 h-6" />, title: '字體比例', desc: 'Roboto 字體家族', color: '#7D5700', bg: '#FFDDB3' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center"
                style={{ backgroundColor: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <div className="font-medium text-[#1D1B20] mb-1">{item.title}</div>
              <div className="text-sm text-[#49454F]">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Chips */}
        <div className="mb-6">
          <div className="text-xs font-medium text-[#49454F] mb-3 uppercase tracking-wider">標籤</div>
          <div className="flex gap-2 flex-wrap">
            {[
              { label: '元件', active: true },
              { label: '佈局', active: false },
              { label: '色彩', active: false },
              { label: '字體', active: false },
              { label: '圖標', active: false },
            ].map((chip, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                chip.active 
                  ? 'bg-[#E8DEF8] text-[#6750A4]' 
                  : 'bg-[#E7E0EC] text-[#49454F] hover:bg-[#D0BCFF]/30'
              }`}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-[#EADDFF] rounded-2xl p-6 mb-20">
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
            {[
              { num: '3.0', label: '版本' },
              { num: '1000+', label: '元件' },
              { num: '∞', label: '可能性' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-medium text-[#6750A4] mb-1">{item.num}</div>
                <div className="text-xs text-[#49454F]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="absolute bottom-24 right-4 w-14 h-14 bg-[#EADDFF] rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
        <Plus className="w-6 h-6 text-[#6750A4]" />
      </button>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-[#F3EDF7] px-2 py-2">
        <div className="flex justify-around">
          {[
            { icon: <Home className="w-6 h-6" />, label: '首頁', active: true },
            { icon: <Search className="w-6 h-6" />, label: '搜尋', active: false },
            { icon: <Heart className="w-6 h-6" />, label: '收藏', active: false },
            { icon: <User className="w-6 h-6" />, label: '個人', active: false },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center py-2 px-5 rounded-2xl transition-colors">
              <div className={`p-1 rounded-full ${item.active ? 'bg-[#EADDFF]' : ''}`}>
                <span className={item.active ? 'text-[#6750A4]' : 'text-[#49454F]'}>{item.icon}</span>
              </div>
              <span className={`text-xs mt-1 font-medium ${item.active ? 'text-[#6750A4]' : 'text-[#49454F]'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
