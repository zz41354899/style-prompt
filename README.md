# 🎨 Style Prompt

一個為 **AI Agent** 與**前端開發者**量身打造的專業 UI 風格庫與提示詞（Prompt）工具。收錄 30 種精選的高級設計風格，助您快速構建具備現代美感的 React + Tailwind CSS 應用。

[![Next.js](https://img.shields.io/badge/Next.js-15/16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-black?logo=shadcnui)](https://ui.shadcn.com/)

---

## ✨ 核心特色

- 🚀 **Agents Skill 整合**：首創「AI 技能化」架構，讓 AI Agent 能主動發現、分析並實作特定的設計風格。
- 🎨 **30 種專業風格 (S01-S30)**：從極簡科技到奢華精品，涵蓋 6 大分類與多個產業需求。
- 🧬 **設計 DNA 提取**：每種風格均附帶完整的設計規範（策略、規則、YAML 令牌），確開發的一致性。
- 📋 **一鍵預製提示詞**：內建經過工程化優化的提示詞，可直接用於 Claude、ChatGPT 或其他 AI 助手生成組件。
- 📱 **響應式預覽**：支援桌面與行動端預覽，所有組件均基於 Tailwind CSS 響應式策略。

---

## 🏗️ 技術棧

- **核心框架**：Next.js 15 (App Router)
- **開發語言**：TypeScript
- **樣式系統**：Tailwind CSS + CSS Variables
- **組件庫**：Shadcn UI (Radix UI)
- **圖標庫**：Lucide React
- **動畫**：Framer Motion

---

## 📂 探索 30 種設計風格

### ⚪ 極簡主義 (Minimalist)
- **S01 Tech Minimal** - 科技極簡，銳利有序
- **S02 Minimalist Monochrome** - 黑白編輯感，強調排版
- **S03 Swiss Design** - 瑞士國際主義，網格系統
- **S05 Japanese Minimal** - 日式禪意，留白美學
- **S08 Dark Mode Elegance** - 優雅深色，細膩過渡
- **S24 Minimalist Serif** - 襯線極簡，人文氣息

### 🎨 創意藝術 (Artistic)
- **S04 Brutalist** - 粗獷主義，大膽不羈
- **S06 Bauhaus Modernism** - 包浩斯，形式追隨功能
- **S10 Memphis** - 孟菲斯，幾何、色彩與幽默
- **S11 Neo-Brutalism** - 新粗獷，高對比陰影與描邊
- **S12 Doodle Sketch** - 手繪塗鴉，親切感滿點
- **S15 Gothic** - 哥德式暗黑，神秘劇情感

### 💎 精品奢華 (Luxury)
- **S13 Art Deco** - 裝飾藝術，幾何圖騰與華麗
- **S14 Art Nouveau** - 新藝術，流動的植物線條
- **S19 Luxury Editorial** - 奢華編輯風格，高端時尚感
- **S22 Luxury Gold** - 尊爵金，核心奢華體驗
- **S23 Luxury Silver** - 曜石銀，冷冽精緻美學

### 🚀 未來科技 (Futuristic)
- **S07 Glassmorphism** - 玻璃擬態，通透質感
- **S16 Cyberpunk** - 賽博龐克，霓虹與科技感
- **S17 Retro 80s (Synthwave)** - 80 年代合成波，漸變網格
- **S18 Y2K Aesthetic** - 千禧美學，銀色、光澤與大膽
- **S29 Cyber-Bio Noir** - 機械仿生，深色裝甲感
- **S30 Aurora Borealis** - 極光色彩，動態流光感

### 🏢 企業商務 (Corporate)
- **S09 Corporate Clean** - 企業清爽，專業信任感
- **S25 Startup Vibrant** - 新創活力，大膽配色與現代感
- **S26 Enterprise Blue** - 總體商務，穩定與可靠
- **S27 Fintech Trust** - 金融科技，安全與創新並重

### 🌿 特色風格 (Unique)
- **S20 Nature Organic** - 自然有機，泥土色調與流體
- **S21 Solarpunk** - 太陽龐克，生態文明與永續科技
- **S28 Claymorphism** - 黏土擬態，軟萌 3D 質感

---

## 🤖 AI Agent 使用說明

本專案不僅是一個前端展示，更是一個 **Agents Skill**。如果你正在與 AI 助手協作，可以指引它：

1. **讀取技能定義**：閱讀 `.agents/skills/style-prompt/SKILL.md`。
2. **獲取設計 DNA**：根據 `styleId` 讀取 `references/S[ID]-[Name].md` 獲取精確的 tokens。
3. **實作組件**：使用 reference 文件底部的 `Assembled Prompt` 指令，AI 將能完美產出該風格的 React 組件。

---

## 🚀 快速開始

### 環境需求
- Node.js 18.17+
- npm 或 pnpm

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 構建生產版本
```bash
npm run build
```

---

## 🤝 參與貢獻

我們歡迎任何形式的貢獻，不論是新的風格構想、Bug 修復或文檔改進。
1. Fork 本專案
2. 建立您的特性分支 (`git checkout -b feature/AmazingStyle`)
3. 提交您的更改 (`git commit -m 'Add some AmazingStyle'`)
4. 推送到分支 (`git push origin feature/AmazingStyle`)
5. 開啟一個 Pull Request

---

## ☕ 支持

如果這個專案對你有幫助，歡迎通支持我的開發工作：
[Buy Me a Coffee](https://buymeacoffee.com/zz41354899y)

---

**Made with ❤️ by [Nocts](https://github.com/zz41354899)**
