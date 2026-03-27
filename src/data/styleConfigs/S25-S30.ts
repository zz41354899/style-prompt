import type { StyleDNAConfig } from './types';

export const S25_S30_Configs: Record<string, StyleDNAConfig> = {
  'S25': {
    paletteStrategy: 'High-end fashion editorial. Creams, subtle golds, stark black and white.',
    typography: 'Elegant serif headers (Didot, Bodoni), clean sans-serif body.',
    radiusPolicy: 'Zero radius. Sharp, magazine-like edges.',
    shadowPolicy: 'Subtle, elegant drop shadows on images, not UI elements.',
    borderLanguage: 'Thin, precise hairlines used for structure and separation.',
    patterns: 'None. Focus on large, high-quality typography and imagery.',
    motion: 'Smooth, slow reveals. Elegant fade-ins.',
    dos: ['Use high-contrast elegant typography', 'Embrace whitespace', 'Use thin elegant lines', 'Keep it sophisticated'],
    donts: ['Don\'t use bright, playful colors', 'Don\'t use thick, clunky borders', 'Don\'t crowd the layout', 'Don\'t use heavy drop shadows'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S25"
    style_name: "Luxury Editorial"
    industry: "Luxury/Fashion"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFAFA"
      secondary: "#F2EBE5"
    brand:
      primary: "#000000"
      accent: "#B89B72"
  radius: { none: 0 }
  typography:
    font:
      sans: { primary: "Inter", fallback: ["sans-serif"] }
      serif: { primary: "Playfair Display", fallback: ["serif"] }
    scale:
      h1: { size: 64, line: 72, weight: 400, tracking: -0.02 }
\`\`\``,
  },
  'S26': {
    paletteStrategy: 'Earthy greens, browns, soft terracottas, warm whites.',
    typography: 'Humanist sans-serif or soft, approachable serif.',
    radiusPolicy: 'Organic, irregular curves or very large border-radius.',
    shadowPolicy: 'Soft, diffused, natural-looking shadows.',
    borderLanguage: 'None or soft, colored borders.',
    patterns: 'Leaf motifs, organic blobs, grain/noise textures.',
    motion: 'Gentle, flowing, natural easing.',
    dos: ['Use earthy, natural palettes', 'Use organic, fluid shapes', 'Add subtle noise/grain', 'Make it feel approachable'],
    donts: ['Don\'t use harsh vector lines', 'Don\'t use pure black or white', 'Don\'t use strict grids entirely', 'Don\'t use neon colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S26"
    style_name: "Nature / Organic"
    industry: "Lifestyle/Eco"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F9F6F0"
      secondary: "#EDE9DF"
    brand:
      primary: "#4F6D43"
      accent: "#C1795E"
  radius:
    lg: 32
    organic: "60% 40% 30% 70% / 60% 30% 70% 40%"
  typography:
    font:
      sans: { primary: "Nunito", fallback: ["sans-serif"] }
      serif: { primary: "Lora", fallback: ["serif"] }
    scale:
      h1: { size: 56, line: 68, weight: 600 }
\`\`\``,
  },
  'S27': {
    paletteStrategy: 'Natural greens, warm yellows, white/cream. Organic feel.',
    typography: 'Rounded sans-serif or soft serif.',
    radiusPolicy: 'Organic, heavily rounded corners.',
    shadowPolicy: 'Soft, diffused sunlight shadows.',
    borderLanguage: 'Organic lines, leaf shapes.',
    patterns: 'Leaves, solar panels, hexagons, nature textures.',
    motion: 'Gentle, growing, flowing.',
    dos: ['Use nature-inspired colors', 'Emphasize sustainability', 'Use organic shapes', 'Keep it hopeful'],
    donts: ['Don\'t use industrial grays', 'Don\'t use sharp, aggressive shapes', 'Don\'t make it look dystopian', 'Don\'t use synthetic neons'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S27"
    style_name: "Solarpunk"
    industry: "SaaS"
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
      sans: { primary: "Quicksand", fallback: ["sans-serif"] }
    scale:
      h1: { size: 52, line: 64, weight: 700 }
\`\`\``,
  },
  'S28': {
    paletteStrategy: 'Deep forest greens, soft sage, and natural wood tones. Sustainability focus.',
    typography: 'Friendly modern sans-serif. High legibility, approachable.',
    radiusPolicy: 'Significant rounding (12-16px). Soft and non-threatening.',
    shadowPolicy: 'Minimal, soft elevation. Focus on flat surfaces with natural textures.',
    borderLanguage: 'Subtle green or earthy-toned borders. Leaf-like accents.',
    patterns: 'Recycled paper textures, subtle leaf patterns, grid of pods.',
    motion: 'Calm, slow transitions. Evokes a sense of peace and steady growth.',
    dos: ['Use sustainable-themed colors (Green/Brown)', 'Incorporate natural textures', 'Keep layout balanced and calm', 'Use soft, rounded UI elements'],
    donts: ['Don\'t use harsh industrial blacks', 'Don\'t use aggressive neons', 'Don\'t use sharp, corporate edges', 'Don\'t overcrowd the design'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S28"
    style_name: "Eco / Green"
    industry: "Sustainability"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FBFAF8"
      secondary: "#F1F8E9"
    brand:
      primary: "#2E7D32"
      accent: "#8BC34A"
  radius:
    md: 12
    lg: 16
  typography:
    font:
      sans: { primary: "Inter", fallback: ["sans-serif"] }
    scale:
      h1: { size: 52, line: 64, weight: 700 }
\`\`\``,
  },
  'S29': {
    paletteStrategy: 'Deep obsidian black and 24K gold. High luxury, heavy contrast.',
    typography: 'Ultra-refined serif (Didot/Bodoni) with high stroke contrast. Spaced headers.',
    radiusPolicy: 'Strict sharp edges (0px) for architectural luxury.',
    shadowPolicy: 'Subtle gold glows or deep velvet-like shadows. Elite depth.',
    borderLanguage: 'Thin gold hairlines (0.5px - 1px). Double borders for high-end feel.',
    patterns: 'Silk textures, gold foil grain, minimalist geometric motifs.',
    motion: 'Extremely slow, deliberate fades. Elegant reveal-on-scroll.',
    dos: ['Use absolute black and gold', 'Apply high-stroke-contrast serifs', 'Keep whitespace expansive', 'Use thin gold rules'],
    donts: ['Don\'t use rounded corners', 'Don\'t use playful/vibrant colors', 'Don\'t follow standard SaaS patterns', 'Don\'t use drop shadows'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S29"
    style_name: "Luxury Gold"
    industry: "High-End Luxury"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#0A0A0A"
    text:
      primary: "#D4AF37"
      secondary: "#E5E5E5"
    brand:
      primary: "#D4AF37"
      accent: "#C5A037"
  radius: { none: 0 }
  border:
    width: { hairline: 0.5, medium: 1 }
  shadow:
    gold_glow: "0 0 20px rgba(212, 175, 55, 0.3)"
  typography:
    font:
      serif: { primary: "Bodoni MT", fallback: ["serif"] }
    scale:
      h1: { size: 64, line: 72, weight: 400, tracking: 0.1 }
\`\`\``,
  },
  'S30': {
    paletteStrategy: 'Brushed silver, platinum, and cool whites. Modern luxury, tech-forward.',
    typography: 'Sophisticated modern sans-serif with wide tracking. Minimalist.',
    radiusPolicy: 'Subtle rounding (4px) or zero. "Machined" look.',
    shadowPolicy: 'Cool, diffused silver shadows. Soft metallic reflections.',
    borderLanguage: 'Silver/Chrome thin lines. Machined precision.',
    patterns: 'Brushed metal textures, light refractions, cool gradients.',
    motion: 'Slick, effortless movements. "Weightless" feel.',
    dos: ['Use cool silver and platinum tones', 'Combine with deep navy or solid black', 'Keep typography minimal and wide-tracked', 'Simulate metallic surfaces'],
    donts: ['Don\'t use warm gold or brass', 'Don\'t use heavy textures', 'Don\'t use handwritten fonts', 'Don\'t use vibrant colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S30"
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
      sans: { primary: "Montserrat", fallback: ["sans-serif"] }
    scale:
      h1: { size: 56, line: 64, weight: 300, tracking: 0.05 }
\`\`\``,
  },
};
