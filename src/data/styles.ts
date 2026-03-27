export interface StyleData {
  id: string;
  name: string;
  description: string;
  industries: string[];
  mode?: 'light' | 'dark' | 'both';
  category: string;
}

export const INDUSTRIES = {
  TECH: 'tech',
  COMMERCE: 'commerce',
  CREATIVE: 'creative',
  PROFESSIONAL: 'professional',
  LUXURY: 'luxury',
  LIFESTYLE: 'lifestyle',
} as const;

export const CATEGORIES = {
  MINIMALIST: 'minimalist',
  ARTISTIC: 'artistic',
  LUXURY: 'luxury',
  FUTURISTIC: 'futuristic',
  CORPORATE: 'corporate',
  UNIQUE: 'unique',
} as const;

export type Industry = typeof INDUSTRIES[keyof typeof INDUSTRIES];
export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export const styles: StyleData[] = [
  // 極簡主義 (Minimalist)
  {
    id: 'S01',
    name: 'Tech Minimal',
    description: 'Tech minimal style, clean and sleek interface design',
    industries: [INDUSTRIES.TECH, INDUSTRIES.PROFESSIONAL],
    mode: 'both',
    category: CATEGORIES.MINIMALIST,
  },
  {
    id: 'S02',
    name: 'Minimalist Monochrome',
    description: 'Minimalist black and white editorial style, emphasizing typography and contrast',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.LUXURY],
    mode: 'both',
    category: CATEGORIES.MINIMALIST,
  },
  {
    id: 'S03',
    name: 'Swiss / International Typographic',
    description: 'Swiss International Typographic style, grid systems and sans-serif typography',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.PROFESSIONAL],
    mode: 'both',
    category: CATEGORIES.MINIMALIST,
  },
  {
    id: 'S04',
    name: 'Brutalist',
    description: 'Brutalist, raw, bold, and unadorned design',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.TECH],
    mode: 'both',
    category: CATEGORIES.ARTISTIC,
  },
  {
    id: 'S05',
    name: 'Japanese Minimal',
    description: 'Japanese minimalism, white space aesthetics and zen design',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.CREATIVE],
    mode: 'light',
    category: CATEGORIES.MINIMALIST,
  },
  {
    id: 'S06',
    name: 'Bauhaus Modernism',
    description: 'Bauhaus modernism, form follows function, geometric shapes and primary colors',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.PROFESSIONAL],
    mode: 'both',
    category: CATEGORIES.ARTISTIC,
  },
  {
    id: 'S07',
    name: 'Glassmorphism',
    description: 'Glassmorphism, frosted glass effect with transparency',
    industries: [INDUSTRIES.TECH, INDUSTRIES.CREATIVE],
    mode: 'both',
    category: CATEGORIES.FUTURISTIC,
  },
  {
    id: 'S08',
    name: 'Dark Mode Elegance',
    description: 'Elegant dark mode design with subtle accents',
    industries: [INDUSTRIES.TECH, INDUSTRIES.LIFESTYLE],
    mode: 'dark',
    category: CATEGORIES.MINIMALIST,
  },
  {
    id: 'S09',
    name: 'Corporate Clean',
    description: 'Clean corporate design, professional and trustworthy',
    industries: [INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.CORPORATE,
  },

  // 創意藝術 (Artistic)
  {
    id: 'S10',
    name: 'Memphis',
    description: 'Memphis design, geometric shapes and vibrant colors',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.LIFESTYLE],
    mode: 'both',
    category: CATEGORIES.ARTISTIC,
  },
  {
    id: 'S11',
    name: 'Neo-Brutalism',
    description: 'Neo-Brutalism, bold colors with harsh shadows and strong borders',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.TECH],
    mode: 'both',
    category: CATEGORIES.ARTISTIC,
  },
  {
    id: 'S12',
    name: 'Doodle Sketch',
    description: 'Hand-drawn doodle style, playful and creative',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.ARTISTIC,
  },
  {
    id: 'S13',
    name: 'Art Deco',
    description: 'Art Deco style, geometric patterns and luxury',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.LIFESTYLE],
    mode: 'both',
    category: CATEGORIES.LUXURY,
  },
  {
    id: 'S14',
    name: 'Art Nouveau',
    description: 'Art Nouveau style, organic forms and flowing lines',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.CREATIVE],
    mode: 'both',
    category: CATEGORIES.LUXURY,
  },
  {
    id: 'S15',
    name: 'Gothic',
    description: 'Gothic dark aesthetic, dramatic and mysterious',
    industries: [INDUSTRIES.LIFESTYLE, INDUSTRIES.CREATIVE],
    mode: 'dark',
    category: CATEGORIES.ARTISTIC,
  },

  // 未來科技 (Futuristic)
  {
    id: 'S16',
    name: 'Cyberpunk',
    description: 'Cyberpunk, neon lights and futuristic tech aesthetic',
    industries: [INDUSTRIES.LIFESTYLE, INDUSTRIES.TECH],
    mode: 'dark',
    category: CATEGORIES.FUTURISTIC,
  },
  {
    id: 'S17',
    name: 'Retro 80s (Synthwave)',
    description: '80s retro synthwave, gradient neons and grid patterns',
    industries: [INDUSTRIES.LIFESTYLE, INDUSTRIES.CREATIVE],
    mode: 'dark',
    category: CATEGORIES.FUTURISTIC,
  },
  {
    id: 'S18',
    name: 'Y2K Aesthetic',
    description: 'Y2K aesthetic, glossy and futuristic 2000s style',
    industries: [INDUSTRIES.LIFESTYLE, INDUSTRIES.CREATIVE],
    mode: 'both',
    category: CATEGORIES.FUTURISTIC,
  },

  // 精品奢華 (Luxury)
  {
    id: 'S19',
    name: 'Luxury Editorial',
    description: 'Luxury editorial style, elegant serif fonts and refined typography',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.COMMERCE],
    mode: 'both',
    category: CATEGORIES.LUXURY,
  },
  {
    id: 'S20',
    name: 'Nature Organic',
    description: 'Natural organic style, soft curves and earth tone colors',
    industries: [INDUSTRIES.LIFESTYLE, INDUSTRIES.COMMERCE],
    mode: 'light',
    category: CATEGORIES.UNIQUE,
  },
  {
    id: 'S21',
    name: 'Solarpunk',
    description: 'Solarpunk aesthetic, eco-futurism and sustainability',
    industries: [INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.UNIQUE,
  },
  {
    id: 'S22',
    name: 'Luxury Gold',
    description: 'Luxury gold theme, premium and exclusive',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.PROFESSIONAL],
    mode: 'dark',
    category: CATEGORIES.LUXURY,
  },
  {
    id: 'S23',
    name: 'Luxury Silver',
    description: 'Luxury silver theme, sleek and sophisticated',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.LUXURY,
  },
  {
    id: 'S24',
    name: 'Minimalist Serif',
    description: 'Minimalist serif typography, elegant and readable',
    industries: [INDUSTRIES.LUXURY, INDUSTRIES.CREATIVE],
    mode: 'light',
    category: CATEGORIES.MINIMALIST,
  },

  // 企業商務 (Corporate)
  {
    id: 'S25',
    name: 'Startup Vibrant',
    description: 'Vibrant startup design, energetic and modern',
    industries: [INDUSTRIES.TECH, INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.CORPORATE,
  },
  {
    id: 'S26',
    name: 'Enterprise Blue',
    description: 'Enterprise blue theme, professional and trustworthy',
    industries: [INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.CORPORATE,
  },
  {
    id: 'S27',
    name: 'Fintech Trust',
    description: 'Fintech design, secure and innovative',
    industries: [INDUSTRIES.PROFESSIONAL, INDUSTRIES.TECH],
    mode: 'both',
    category: CATEGORIES.CORPORATE,
  },

  // 特色風格 (Unique)
  {
    id: 'S28',
    name: 'Claymorphism',
    description: 'Claymorphism, soft 3D clay-like elements',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.PROFESSIONAL],
    mode: 'light',
    category: CATEGORIES.UNIQUE,
  },
  {
    id: 'S29',
    name: 'Cyber-Bio Noir',
    description: 'Bio-enhanced cybernetic style, featuring dark armor and intense red neon glows',
    industries: [INDUSTRIES.TECH, INDUSTRIES.LIFESTYLE],
    mode: 'dark',
    category: CATEGORIES.FUTURISTIC,
  },
  {
    id: 'S30',
    name: 'Aurora Borealis',
    description: 'Aurora borealis effect, colorful gradient lights',
    industries: [INDUSTRIES.CREATIVE, INDUSTRIES.LIFESTYLE],
    mode: 'dark',
    category: CATEGORIES.FUTURISTIC,
  },
];

// 根據分類獲取風格
export const getStylesByCategory = (category: Category): StyleData[] => {
  return styles.filter(style => style.category === category);
};

// 根據產業獲取風格
export const getStylesByIndustry = (industry: Industry): StyleData[] => {
  return styles.filter(style => style.industries.includes(industry));
};

// 獲取所有分類
export const getAllCategories = (): Category[] => {
  return Object.values(CATEGORIES);
};
