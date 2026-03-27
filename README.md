# StylePrompts

一個現代化的設計風格展示與提示詞生成工具，提供 **50 種精選專業設計風格**的完整提示詞模板，支援產業分類篩選、響應式預覽和一鍵複製功能。

## ✨ 功能特色

- 🎨 **50 種精選設計風格**：從 101 個風格中精選出最實用的 50 個專業設計風格
- 🏢 **產業分類系統**：12 個產業分類，快速找到適合您行業的設計風格
- � **智能篩選**：支援產業、模式（Light/Dark）和關鍵字搜尋
- � **響應式預覽**：支援桌面和手機版預覽，使用 iframe 隔離展示
- 📋 **一鍵複製**：快速複製完整的設計提示詞到剪貼板
- 🎯 **專業提示詞**：每種風格都包含詳細的設計規範和技術指南
- 💻 **現代化 UI**：基於 Next.js + TypeScript + Tailwind CSS 的現代化介面
- 🌙 **深色主題**：專業的深色主題設計，提升使用體驗
- ✨ **風格瀏覽器**：全新的風格瀏覽頁面，提供更好的瀏覽體驗

## 🎨 精選 50 個設計風格

### 現代科技 (10 個)
- **S01 - Tech Minimal** - 科技極簡風格
- **S02 - Minimalist Monochrome** - 極簡黑白編輯風格
- **S04 - Swiss / International Typographic** - 瑞士國際字體風格
- **S05 - Brutalist** - 粗獷主義
- **S11 - Japanese Minimal** - 日式極簡
- **S13 - Material-ish** - Material Design 風格
- **S14 - Glassmorphism** - 玻璃擬態
- **S22 - Dark Mode Elegance** - 深色模式優雅風格
- **S79 - Corporate Clean** - 企業清爽風格
- **S99 - Material 3** - Material 3 設計

### 創意藝術 (8 個)
- **S09 - Memphis** - Memphis 設計
- **S17 - Bauhaus Modernism** - 包浩斯現代主義
- **S23 - Doodle Sketch** - 塗鴉素描風格
- **S24 - Minimalist Line Art** - 極簡線條藝術
- **S29 - Art Deco** - 裝飾藝術
- **S52 - Pop Art** - 普普藝術
- **S54 - Art Nouveau** - 新藝術風格
- **S78 - Gothic** - 哥德式風格

### 復古懷舊 (6 個)
- **S06 - Cyberpunk** - 賽博龐克
- **S07 - Retro 80s (Synthwave)** - 80年代合成波
- **S08 - Retro 60s–70s (Print Grain)** - 60-70年代印刷風格
- **S27 - Y2K Aesthetic** - Y2K 美學
- **S32 - Windows 95** - Windows 95 風格
- **S68 - Steampunk** - 蒸汽龐克

### 電商生活 (7 個)
- **S10 - Luxury Editorial** - 奢華編輯風格
- **S12 - Nature Organic** - 自然有機風格
- **S28 - Solarpunk** - 太陽龐克
- **S84 - Eco / Green** - 生態環保風格
- **S87 - Luxury Gold** - 奢華金色
- **S88 - Luxury Silver** - 奢華銀色
- **S89 - Minimalist Serif** - 極簡襯線風格

### 金融企業 (5 個)
- **S80 - Startup Vibrant** - 新創活力風格
- **S81 - Enterprise Blue** - 企業藍色
- **S82 - Fintech Trust** - 金融科技信任風格
- **S95 - Data Dashboard** - 數據儀表板
- **S30 - Industrial** - 工業風格

### 健康教育 (4 個)
- **S83 - Health / Medical** - 醫療保健風格
- **S85 - Kids / Playful** - 兒童趣味風格
- **S19 - Aesthetic Harmony** - 美學和諧
- **S21 - Claymorphism** - 黏土擬態

### 技術開發 (5 個)
- **S16 - Terminal / Hacker** - 終端機風格
- **S94 - Code Editor** - 程式碼編輯器風格
- **S92 - OLED** - OLED 顯示風格
- **S96 - HUD** - 抬頭顯示器風格
- **S67 - Cybernetic** - 機械電子風格

### 特效風格 (5 個)
- **S20 - Aurora Borealis** - 極光風格
- **S34 - Holographic** - 全息投影風格
- **S33 - Liquid Metal** - 液態金屬風格
- **S97 - Frosted Glass (Strong)** - 強毛玻璃風格
- **S98 - Acrylic** - 壓克力風格

## 🏢 產業分類

每個風格都標記了適用的產業，方便快速找到最適合的設計風格：

- **Tech/SaaS** - 科技與 SaaS 產品
- **E-commerce** - 電子商務
- **Creative/Agency** - 創意與設計公司
- **Finance** - 金融服務
- **Health/Medical** - 醫療保健
- **Education** - 教育培訓
- **Entertainment** - 娛樂媒體
- **Luxury/Fashion** - 奢侈品與時尚
- **Food/Restaurant** - 餐飲美食
- **Real Estate** - 房地產
- **Non-profit** - 非營利組織
- **Corporate** - 企業公司

## 🚀 快速開始

### 環境需求

- Node.js 16+ 
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 📁 專案結構

```
style-prompt/
├── public/
│   ├── md/                    # 提示詞 Markdown 檔案
│   │   ├── s_01_saa_s_full_landing_page.md
│   │   ├── s_02_saa_s_full_landing_page.md
│   │   └── ...
│   └── vite.svg
├── src/
│   ├── components/            # 設計風格組件
│   │   ├── S01TechMinimal.tsx
│   │   ├── S02MinimalistMonochrome.tsx
│   │   └── ...
│   ├── data/
│   │   └── styles.ts         # 風格數據配置
│   ├── App.tsx               # 主應用組件
│   └── main.tsx              # 應用入口
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ 技術棧

- **框架**：React 18 + TypeScript
- **構建工具**：Vite
- **樣式**：Tailwind CSS
- **圖標**：Lucide React
- **字體**：Inter、IBM Plex Sans、Source Serif

## 📖 使用說明

1. **選擇風格**：從左側列表選擇想要的設計風格
2. **預覽效果**：在中央區域查看風格預覽
3. **切換設備**：使用頂部按鈕切換桌面/手機預覽模式
4. **查看提示詞**：點擊「Get Prompt」按鈕查看完整的設計提示詞
5. **複製使用**：點擊「Copy Prompt」一鍵複製提示詞到剪貼板
6. **支持項目**：點擊右上角咖啡圖標支持項目開發

## 🎯 提示詞特色

每種設計風格的提示詞都包含：

- **設計目標**：明確的設計方向和目標受眾
- **色彩系統**：完整的色彩配置和色值
- **字體規範**：字體選擇和排版規則
- **視覺元素**：圖標、圓角、陰影等視覺規範
- **佈局原則**：網格系統和間距規範
- **互動設計**：動畫和交互效果指南
- **技術實現**：具體的代碼實現建議

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個項目！

## 📄 許可證

MIT License

## ☕ 支持

如果這個項目對你有幫助，歡迎通過 [Buy Me a Coffee](https://buymeacoffee.com/zz41354899y) 支持我的開發工作。

---

**Made with ❤️ by zz413**
