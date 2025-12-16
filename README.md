# StylePrompts

一個現代化的設計風格展示與提示詞生成工具，提供 16 種專業設計風格的完整提示詞模板，支援響應式預覽和一鍵複製功能。

## ✨ 功能特色

- 🎨 **16 種設計風格**：涵蓋從極簡主義到賽博龐克的各種設計風格
- 📱 **響應式預覽**：支援桌面和手機版預覽，使用 iframe 隔離展示
- 📋 **一鍵複製**：快速複製完整的設計提示詞到剪貼板
- 🔍 **動態載入**：提示詞內容動態載入，優化性能
- 🎯 **專業提示詞**：每種風格都包含詳細的設計規範和技術指南
- 💻 **現代化 UI**：基於 React + TypeScript + Tailwind CSS 的現代化介面
- 🌙 **深色主題**：專業的深色主題設計，提升使用體驗

## 🎨 包含的設計風格

1. **S01 - Tech Minimal**：科技極簡風格，乾淨俐落的介面設計
2. **S02 - Minimalist Monochrome**：極簡黑白編輯風格，強調排版與對比
3. **S03 - Mondrian / De Stijl**：蒙德里安風格，幾何色塊與直線構成
4. **S04 - Swiss / International Typographic**：瑞士國際字體風格，網格系統與無襯線字體
5. **S05 - Brutalist**：粗獷主義，原始、大膽、不修飾的設計
6. **S06 - Cyberpunk**：賽博龐克，霓虹燈光與未來科技感
7. **S07 - Retro 80s (Synthwave)**：80年代復古合成波，漸層霓虹與網格
8. **S08 - Retro 60s–70s (Print Grain)**：60-70年代印刷風格，復古色調與顆粒質感
9. **S09 - Memphis**：Memphis 設計，幾何圖形與鮮豔色彩
10. **S10 - Luxury Editorial**：奢華編輯風格，優雅襯線字體與精緻排版
11. **S11 - Japanese Minimal**：日式極簡，留白美學與禪意設計
12. **S12 - Nature Organic**：自然有機風格，柔和曲線與大地色系
13. **S13 - Material-ish**：Material Design 風格，陰影層次與色彩系統
14. **S14 - Glassmorphism**：玻璃擬態，毛玻璃效果與透明層次
15. **S15 - Neumorphism**：新擬態設計，柔和陰影與凸起效果
16. **S16 - Terminal / Hacker**：終端機風格，綠色文字與駭客美學

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
