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
    description: 'Tech minimal style, clean and sleek interface design',
    promptPath: '/md/s_01_saa_s_full_landing_page.md',
  },
  { 
    id: 'S02', 
    name: 'Minimalist Monochrome', 
    description: 'Minimalist black and white editorial style, emphasizing typography and contrast',
    promptPath: '/md/s_02_saa_s_full_landing_page.md',
  },
  { 
    id: 'S03', 
    name: 'Mondrian / De Stijl', 
    description: 'Mondrian style, geometric color blocks and straight lines composition',
    promptPath: '/md/s_03_saa_s_full_landing_page.md'
  },
  { 
    id: 'S04', 
    name: 'Swiss / International Typographic', 
    description: 'Swiss International Typographic style, grid systems and sans-serif typography',
    promptPath: '/md/s_04_saa_s_full_landing_page.md'
  },
  { 
    id: 'S05', 
    name: 'Brutalist', 
    description: 'Brutalist, raw, bold, and unadorned design',
    promptPath: '/md/s_05_saa_s_full_landing_page.md'
  },
  { 
    id: 'S06', 
    name: 'Cyberpunk', 
    description: 'Cyberpunk, neon lights and futuristic tech aesthetic',
    promptPath: '/md/s_06_saa_s_full_landing_page.md'
  },
  { 
    id: 'S07', 
    name: 'Retro 80s (Synthwave)', 
    description: '80s retro synthwave, gradient neons and grid patterns',
    promptPath: '/md/s_07_saa_s_full_landing_page.md',
  },
  { 
    id: 'S08', 
    name: 'Retro 60s–70s (Print Grain)', 
    description: '60s-70s print style, vintage colors and grain texture',
    promptPath: '/md/s_08_saa_s_full_landing_page.md',
  },
  { 
    id: 'S09', 
    name: 'Memphis', 
    description: 'Memphis design, geometric shapes and vibrant colors',
    promptPath: '/md/s_09_saa_s_full_landing_page.md',
  },
  { 
    id: 'S10', 
    name: 'Luxury Editorial', 
    description: 'Luxury editorial style, elegant serif fonts and refined typography',
    promptPath: '/md/s_10_saa_s_full_landing_page.md',
  },
  { 
    id: 'S11', 
    name: 'Japanese Minimal', 
    description: 'Japanese minimalism, white space aesthetics and zen design',
    promptPath: '/md/s_11_saa_s_full_landing_page.md',
  },
  { 
    id: 'S12', 
    name: 'Nature Organic', 
    description: 'Natural organic style, soft curves and earth tone colors',
    promptPath: '/md/s_12_saa_s_full_landing_page.md',
  },
  { 
    id: 'S13', 
    name: 'Material-ish', 
    description: 'Material Design style, shadow layers and color systems',
    promptPath: '/md/s_13_saa_s_full_landing_page.md',
  },
  { 
    id: 'S14', 
    name: 'Glassmorphism', 
    description: 'Glassmorphism, frosted glass effects and transparent layers',
    promptPath: '/md/s_14_saa_s_full_landing_page.md',
  },
  { 
    id: 'S15', 
    name: 'Neumorphism', 
    description: 'Neumorphism design, soft shadows and embossed effects',
    promptPath: '/md/s_15_saa_s_full_landing_page.md',
  },
  { 
    id: 'S16', 
    name: 'Terminal / Hacker', 
    description: 'Terminal style, green text and hacker aesthetic',
    promptPath: '/md/s_16_saa_s_full_landing_page.md',
  },
];
