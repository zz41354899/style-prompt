import type { StyleDNAConfig } from './types';

export const S19_S24_Configs: Record<string, StyleDNAConfig> = {
  'S19': {
    paletteStrategy: 'Elegant theme with creams, subtle golds, and stark black. High-end fashion feel.',
    typography: 'Refined serif (Bodoni MT) with high stroke contrast mixed with minimalist sans.',
    radiusPolicy: 'Zero radius (0px). Architectural luxury precision.',
    shadowPolicy: 'Very subtle or none. Reliance on whitespace and layout balance.',
    borderLanguage: 'Hairline borders (0.5px) used sparingly for structure.',
    patterns: 'High-end editorial magazine grids.',
    motion: 'Slow, graceful fade-in transitions.',
    dos: ['Use high-contrast serif typography', 'Maximize whitespace', 'Maintain architectural precision'],
    donts: ['Don\'t use rounded corners', 'Don\'t use bright colors', 'Don\'t use bouncy animations'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S19"
    style_name: "Luxury Editorial"
    industry: "Luxury / E-commerce"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FDFCF0"
      secondary: "#F9F9F9"
    text:
      primary: "#111111"
    brand:
      primary: "#000000"
      accent: "#D4AF37"
  radius: { none: 0 }
  border:
    width: { hairline: 0.5, medium: 1 }
  typography:
    font:
      serif: { primary: "Bodoni MT" }
      sans: { primary: "Inter" }
    scale:
      h1: { size: 60, weight: 400, tracking: 0.05 }
      body: { size: 18, weight: 400 }
\`\`\``,
  },
  'S20': {
    paletteStrategy: 'Earthy greens, browns, soft terracottas, and warm whites.',
    typography: 'Humanist sans-serif or soft, approachable serif (Lora). Approacheable.',
    radiusPolicy: 'Organic, irregular curves or very large border-radius (32px).',
    shadowPolicy: 'Soft, diffused, natural-looking shadows.',
    borderLanguage: 'None or soft, colored borders (sage or clay colors).',
    patterns: 'Leaf motifs, organic blobs, and subtle grain textures.',
    motion: 'Gentle, flowing, natural easing curves.',
    dos: ['Use earthy palettes', 'Use organic fluid shapes', 'Add subtle noise textures'],
    donts: ['Don\'t use harsh vector lines', 'Don\'t use pure black', 'Don\'t use neon colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S20"
    style_name: "Nature Organic"
    industry: "Lifestyle / Eco"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F9F6F0"
      secondary: "#EDE9DF"
    text:
      primary: "#2C1E1B"
    brand:
      primary: "#4F6D43"
      accent: "#C1795E"
  radius:
    lg: 32
    organic: "60% 40% 30% 70% / 60% 30% 70% 40%"
  typography:
    font:
      sans: { primary: "Nunito" }
      serif: { primary: "Lora" }
    scale:
      h1: { size: 56, weight: 600 }
\`\`\``,
  },
  'S21': {
    paletteStrategy: 'Natural greens, warm yellows, white/cream. Sustainable and hopeful feel.',
    typography: 'Rounded sans-serif (Quicksand) or soft serif.',
    radiusPolicy: 'Organic, heavily rounded corners.',
    shadowPolicy: 'Soft, diffused "sunlight" shadows.',
    borderLanguage: 'Organic lines and leaf shapes.',
    patterns: 'Leaves, hexagons, and nature textures.',
    motion: 'Gentle, growing, flowing transitions.',
    dos: ['Use nature-inspired colors', 'Emphasize sustainability', 'Use organic shapes'],
    donts: ['Don\'t use industrial grays', 'Don\'t use sharp shapes', 'Don\'t use synthetic neons'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S21"
    style_name: "Solarpunk"
    industry: "SaaS / Energy"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FDFCF8"
      secondary: "#F0FDF4"
    brand:
      primary: "#10B981"
      accent: "#F59E0B"
  radius:
    lg: 24
    organic: "60% 40% 50% 50% / 40% 60% 50% 50%"
  typography:
    font:
      sans: { primary: "Quicksand" }
    scale:
      h1: { size: 52, weight: 700 }
\`\`\``,
  },
  'S22': {
    paletteStrategy: 'Deep obsidian black and 24K gold. High luxury, heavy contrast.',
    typography: 'Ultra-refined serif (Bodoni) with high stroke contrast.',
    radiusPolicy: 'Strict sharp edges (0px) for architectural luxury.',
    shadowPolicy: 'Subtle gold glows or deep velvet-like shadows.',
    borderLanguage: 'Thin gold hairlines (0.5px). Double headers.',
    patterns: 'Silk textures and gold foil grain.',
    motion: 'Extremely slow, deliberate fades.',
    dos: ['Use absolute black and gold', 'Apply high-stroke-contrast serifs', 'Keep whitespace expansive'],
    donts: ['Don\'t use rounded corners', 'Don\'t use playful colors', 'Don\'t use standard SaaS shadows'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S22"
    style_name: "Luxury Gold"
    industry: "High-End Luxury"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#0A0A0A"
    text:
      primary: "#D4AF37"
    brand:
      primary: "#D4AF37"
      accent: "#C5A037"
  radius: { none: 0 }
  border:
    width: { hairline: 0.5 }
  shadow:
    gold_glow: "0 0 20px rgba(212, 175, 55, 0.3)"
  typography:
    font:
      serif: { primary: "Bodoni MT" }
    scale:
      h1: { size: 64, weight: 400, tracking: 0.1 }
\`\`\``,
  },
  'S23': {
    paletteStrategy: 'Brushed silver, platinum, and cool whites. Modern luxury.',
    typography: 'Sophisticated modern sans-serif with wide tracking (Montserrat).',
    radiusPolicy: 'Subtle rounding (4px) for a "machined" feel.',
    shadowPolicy: 'Cool, diffused silver shadows with metallic reflections.',
    borderLanguage: 'Silver/Chrome thin lines. Machined precision weight.',
    patterns: 'Brushed metal textures and light refractions.',
    motion: 'Slick, effortless, weightless movements.',
    dos: ['Use cool silver tones', 'Combine with deep navy or black', 'Wide tracking'],
    donts: ['Don\'t use warm gold', 'Don\'t use heavy textures', 'Don\'t use handwritten fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S23"
    style_name: "Luxury Silver"
    industry: "Tech Luxury"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#E5E5E5"
      secondary: "#D1D5DB"
    text:
      primary: "#111827"
    brand:
      primary: "#9CA3AF"
      accent: "#6B7280"
  radius: { sm: 4 }
  shadow:
    silver: "0 10px 30px rgba(156, 163, 175, 0.2)"
  typography:
    font:
      sans: { primary: "Montserrat" }
    scale:
      h1: { size: 56, weight: 300, tracking: 0.05 }
\`\`\``,
  },
  'S24': {
    paletteStrategy: 'High-end fashion editorial. Creams and stark black. Focus on typography.',
    typography: 'Ultra-refined serif (Didot/Bodoni) with high contrast.',
    radiusPolicy: 'Strict sharp edges (0px). Architectural grid.',
    shadowPolicy: 'Subtle, elegant drop shadows.',
    borderLanguage: 'Minimally used borders, hairline weight.',
    patterns: 'High-end editorial grids and high-fashion dividers.',
    motion: 'Slow, graceful transitions.',
    dos: ['Use high-stroke-contrast serifs', 'Keep whitespace expansive', 'Maintain precision'],
    donts: ['Don\'t use rounded corners', 'Don\'t use casual fonts', 'Don\'t overcrowd'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S24"
    style_name: "Minimalist Serif"
    industry: "Creative / SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFAFA"
      secondary: "#FFFFFF"
    text:
      primary: "#000000"
    brand:
      primary: "#000000"
  radius: { none: 0 }
  shadow:
    soft: "0 10px 30px rgba(0,0,0,0.05)"
  typography:
    font:
      serif: { primary: "Bodoni MT", fallback: ["Didot"] }
    scale:
      h1: { size: 64, weight: 400, tracking: -0.01 }
\`\`\``,
  },
};
