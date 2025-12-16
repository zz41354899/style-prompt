export interface StyleData {
  id: string;
  name: string;
  description: string;
  prompt?: string;
  promptPath?: string;
}

export const styles: StyleData[] = [
  { 
    id: 'S01', 
    name: 'Tech Minimal', 
    description: '科技極簡風格，乾淨俐落的介面設計',
    promptPath: '/md/s_01_saa_s_full_landing_page.md',
  },
  { 
    id: 'S02', 
    name: 'Minimalist Monochrome', 
    description: '極簡黑白編輯風格，強調排版與對比',
    promptPath: '/md/s_02_saa_s_full_landing_page.md',
  },
  { 
    id: 'S03', 
    name: 'Mondrian / De Stijl', 
    description: '蒙德里安風格，幾何色塊與直線構成',
    prompt: 'Create a Mondrian/De Stijl inspired design with primary colors (red #DD0100, blue #0047AB, yellow #FADA00), black grid lines, rectangular blocks, asymmetric composition, and bold geometric shapes. Use cream/off-white background.'
  },
  { 
    id: 'S04', 
    name: 'Swiss / International Typographic', 
    description: '瑞士國際字體風格，網格系統與無襯線字體',
    prompt: 'Design a Swiss International Typographic style layout with strict grid system, Helvetica-style sans-serif fonts, red accent color (#E53935), mathematical precision, clean alignment, and emphasis on typography as the main design element.'
  },
  { 
    id: 'S05', 
    name: 'Brutalist', 
    description: '粗獷主義，原始、大膽、不修飾的設計',
    prompt: 'Create a brutalist web design with thick black borders (3px+), raw unpolished aesthetic, bold monospace typography, high contrast colors (neon green, yellow, red), box shadows, and intentionally rough/unrefined elements. No rounded corners.'
  },
  { 
    id: 'S06', 
    name: 'Cyberpunk', 
    description: '賽博龐克，霓虹燈光與未來科技感',
    prompt: 'Design a cyberpunk UI with dark background (#0a0a12), neon colors (cyan, pink, yellow), glowing effects, scan lines overlay, futuristic typography, tech-inspired icons, and holographic/glitch aesthetics. Include terminal-style elements.'
  },
  { 
    id: 'S07', 
    name: 'Retro 80s (Synthwave)', 
    description: '80年代復古合成波，漸層霓虹與網格',
    prompt: 'Create a synthwave/retrowave design with gradient sunset colors (orange, pink, purple), perspective grid floor, chrome text effects, neon glows, 80s typography, and retro-futuristic elements. Include sun with horizontal stripes.'
  },
  { 
    id: 'S08', 
    name: 'Retro 60s–70s (Print Grain)', 
    description: '60-70年代印刷風格，復古色調與顆粒質感',
    prompt: 'Design a 60s-70s retro print style with warm earth tones (orange #E65100, brown #5D4037), paper texture/grain overlay, concentric circles, serif typography, rounded buttons, and vintage poster aesthetics.'
  },
  { 
    id: 'S09', 
    name: 'Memphis', 
    description: 'Memphis 設計，幾何圖形與鮮豔色彩',
    prompt: 'Create a Memphis design style with bold geometric shapes (circles, triangles, squiggles), vibrant colors (pink #FF6B9D, teal #00D4AA, yellow #FFE135, purple #7C4DFF), thick black outlines, playful patterns, and postmodern aesthetic.'
  },
  { 
    id: 'S10', 
    name: 'Luxury Editorial', 
    description: '奢華編輯風格，優雅襯線字體與精緻排版',
    prompt: 'Design a luxury editorial layout with elegant serif typography (Georgia/Times), muted cream background (#FAF8F5), gold/bronze accents, generous whitespace, sophisticated image treatments, and high-end magazine aesthetic.'
  },
  { 
    id: 'S11', 
    name: 'Japanese Minimal', 
    description: '日式極簡，留白美學與禪意設計',
    prompt: 'Create a Japanese minimal design with extensive whitespace (Ma concept), subtle ink wash elements, delicate typography, muted colors, zen-inspired simplicity, and traditional Japanese aesthetic principles. Include kanji decorative elements.'
  },
  { 
    id: 'S12', 
    name: 'Nature Organic', 
    description: '自然有機風格，柔和曲線與大地色系',
    prompt: 'Design a nature-inspired organic UI with earth tones (green #5D7052, beige), blob/organic shapes, rounded corners (2rem+), leaf/plant icons, soft gradients, and sustainable/eco-friendly aesthetic.'
  },
  { 
    id: 'S13', 
    name: 'Material-ish', 
    description: 'Material Design 風格，陰影層次與色彩系統',
    prompt: 'Create a Material Design 3 (Material You) interface with dynamic color system, rounded corners (2xl), elevation shadows, purple primary color (#6750A4), pill-shaped buttons, and Google-style component design.'
  },
  { 
    id: 'S14', 
    name: 'Glassmorphism', 
    description: '玻璃擬態，毛玻璃效果與透明層次',
    prompt: 'Design a glassmorphism UI with frosted glass effects (backdrop-blur: 20px+), semi-transparent backgrounds (rgba white 0.1-0.2), subtle borders, colorful gradient blobs in background, and layered depth perception.'
  },
  { 
    id: 'S15', 
    name: 'Neumorphism', 
    description: '新擬態設計，柔和陰影與凸起效果',
    prompt: 'Create a neumorphic design with soft UI elements, light gray background (#e4e9f0), dual shadows (light and dark), pressed/extruded effects, monochromatic color scheme, and tactile button states.'
  },
  { 
    id: 'S16', 
    name: 'Terminal / Hacker', 
    description: '終端機風格，綠色文字與駭客美學',
    prompt: 'Design a terminal/hacker aesthetic with dark background (#0d1117), green phosphor text (#00ff41), monospace font, command-line interface elements, ASCII art, system monitoring displays, and matrix-inspired visuals.'
  },
];
