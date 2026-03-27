import type { StyleDNAConfig } from './types';

export const S13_S18_Configs: Record<string, StyleDNAConfig> = {
  'S13': {
    paletteStrategy: 'Black, gold, and deep jewel tones. High luxury and high contrast.',
    typography: 'Geometric serif or Art Deco display fonts (Cormorant Garamond). High precision.',
    radiusPolicy: 'Sharp or geometric cuts. High architectural precision.',
    shadowPolicy: 'Subtle gold glows or none. Emphasis on geometry and metallic sheen.',
    borderLanguage: 'Ornate geometric borders. Gold hairlines and sunburst motifs.',
    patterns: 'Sunbursts, fans, and geometric overlays in gold/black.',
    motion: 'Elegant, sophisticated slow transitions.',
    dos: ['Use geometric patterns', 'Apply gold and black palette', 'Emphasize luxury', 'Use high-contrast typography'],
    donts: ['Don\'t use rounded corners', 'Don\'t use casual fonts', 'Don\'t use bright non-luxury colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S13"
    style_name: "Art Deco"
    industry: "Luxury/Lifestyle"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#111111"
      secondary: "#1A1A1A"
    text:
      primary: "#D4AF37"
      secondary: "#B89B72"
      muted: "#786542"
    brand:
      primary: "#D4AF37"
      accent: "#C0C0C0"
    border:
      strong: "#D4AF37"
      subtle: "rgba(212, 175, 55, 0.2)"
    focus:
      ring: "#D4AF37"
  radius:
    none: 0
    sm: 2
  border:
    width: { hairline: 1, medium: 1, strong: 2 }
  shadow:
    gold_glow: "0 0 15px rgba(212, 175, 55, 0.3)"
  layout:
    container: { content: 1100, wide: 1200 }
  motion:
    duration: { fast: 300, normal: 600 }
    easing: "cubic-bezier(0.16, 1, 0.3, 1)"
  typography:
    font:
      serif: { primary: "Cormorant Garamond", fallback: ["serif"] }
      sans: { primary: "Montserrat", fallback: ["sans-serif"] }
    scale:
      h1: { size: 60, line: 68, weight: 600, tracking: 0.1 }
      h2: { size: 44, line: 52, weight: 500, tracking: 0.05 }
      body: { size: 18, line: 28, weight: 400, tracking: 0.02 }
  spacing:
    base: 12
    section_py: { mobile: [80, 100], desktop: [120, 160] }
\`\`\``,
  },
  'S14': {
    paletteStrategy: 'Soft, organic colors. Muted pastels mixed with dark gold or charcoal.',
    typography: 'Curvy, expressive serif fonts. Hand-lettered feel.',
    radiusPolicy: 'Organic, asymmetrical rounding. Whimsical shapes.',
    shadowPolicy: 'None or very soft, diffused shadows.',
    borderLanguage: 'Floral motifs, flowing lines, and decorative ironwork borders.',
    patterns: 'Vines, flowers, flowing hair motifs, and organic growth patterns.',
    motion: 'Slow, flowing, rhythmic transitions.',
    dos: ['Use flowing, organic lines', 'Incorporate floral motifs', 'Use expressive typography', 'Maintain a soft palette'],
    donts: ['Don\'t use strict grids', 'Don\'t use harsh geometric shapes', 'Don\'t use high-saturation neons'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S14"
    style_name: "Art Nouveau"
    industry: "SaaS/Creative"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FDFCF0"
      secondary: "#F0EAD6"
    text:
      primary: "#2C3E50"
      secondary: "#7F8C8D"
      muted: "#95A5A6"
    brand:
      primary: "#8E44AD"
      accent: "#27AE60"
    border:
      strong: "#D4AF37"
      subtle: "rgba(212, 175, 55, 0.2)"
    focus:
      ring: "#8E44AD"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 40
    pill: 9999
  border:
    width: { hairline: 1, medium: 2, strong: 3 }
  shadow:
    soft: "0 10px 30px rgba(0,0,0,0.05)"
  layout:
    container: { content: 1100, wide: 1200 }
  motion:
    duration: { fast: 400, normal: 800 }
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      serif: { primary: "Fraunces", fallback: ["serif"] }
      sans: { primary: "Quicksand", fallback: ["sans-serif"] }
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: 0.05 }
      h2: { size: 40, line: 48, weight: 600, tracking: 0.02 }
      body: { size: 18, line: 30, weight: 400, tracking: 0.05 }
  spacing:
    base: 10
    section_py: { mobile: [80, 100], desktop: [140, 180] }
\`\`\``,
  },
  'S15': {
    paletteStrategy: 'Deep black, charcoal, and dark burgundy/purple. High drama.',
    typography: 'Blackletter or tall, condensed serifs (UnifrakturMaguntia). Verticality.',
    radiusPolicy: 'Sharp, pointed arches and zero-radius corners.',
    shadowPolicy: 'Deep, heavy, dramatic shadows. Architectural depth.',
    borderLanguage: 'Pointed arches, wrought iron borders, and heavy stonework.',
    patterns: 'Stone textures, rose windows, and cross-hatching noise.',
    motion: 'Heavy, dramatic, slow-paced transitions.',
    dos: ['Use dramatic verticality', 'Apply heavy/dark palette', 'Incorporate architectural arches'],
    donts: ['Don\'t use light/airy whitespace', 'Don\'t use rounded corners', 'Don\'t use playful colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S15"
    style_name: "Gothic"
    industry: "SaaS/Creative"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#0D0D0D"
    text:
      primary: "#E0E0E0"
      secondary: "#8A8A8A"
      muted: "#4A4A4A"
    brand:
      primary: "#800000"
      accent: "#4B0082"
    border:
      strong: "#333333"
      subtle: "#1A1A1A"
    focus:
      ring: "#800000"
  radius:
    none: 0
    sm: 0
    md: 0
  border:
    width: { hairline: 1, medium: 2, strong: 4 }
  shadow:
    dramatic: "0 10px 40px rgba(0,0,0,0.9)"
  layout:
    container: { content: 1100, wide: 1200 }
  motion:
    duration: { fast: 400, normal: 800 }
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      serif: { primary: "Cinzel Decorative", fallback: ["serif"] }
      sans: { primary: "UnifrakturMaguntia", fallback: ["serif"] }
    scale:
      h1: { size: 60, line: 68, weight: 400, tracking: 0.1 }
      h2: { size: 44, line: 52, weight: 400, tracking: 0.05 }
      body: { size: 18, line: 30, weight: 400, tracking: 0.02 }
  spacing:
    base: 12
    section_py: { mobile: [100, 120], desktop: [180, 240] }
\`\`\``,
  },
  'S16': {
    paletteStrategy: 'High-contrast "Electric Cyan" and "Void Black". Pure black backgrounds (#000000) with atmospheric depth.',
    typography: 'Technical sans-serif (Orbitron) for headers. Wide-tracked mono (Rajdhani) for labels.',
    radiusPolicy: 'Strict binary: 0px tactical or 100% (Circle) identity disks.',
    shadowPolicy: 'Intense CSS Bloom mapping the glow of lightcycles.',
    borderLanguage: 'Thin 1px "Light Streak" borders using varying opacities.',
    patterns: '3D perspective grids, vertical light beams, and atmospheric digital fog.',
    motion: 'Fast, data-driven linear sweeps. Light-speed transitions.',
    dos: ['Use absolute black #000000', 'Prioritize lighting over color', 'Center a vertical light beam', 'Include recursive 3D planes'],
    donts: ['Don\'t use border-radius (unless circles)', 'Don\'t use soft modern shadows', 'Don\'t use organic shapes'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S16"
    style_name: "Cyberpunk / TRON"
    industry: "High-Tech / Digital Frontier"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#050505"
      beam: "rgba(0, 229, 255, 0.15)"
    text:
      primary: "#FFFFFF"
      secondary: "rgba(0, 229, 255, 0.7)"
      glow: "#00E5FF"
    brand:
      primary: "#00E5FF"
      accent: "#FF9100"
    border:
      glow: "rgba(0, 229, 255, 0.5)"
  radius: { none: 0, disk: 9999 }
  shadow:
    bloom: "0 0 15px rgba(0, 229, 255, 0.8), 0 0 30px rgba(0, 229, 255, 0.4)"
  motion:
    duration: { fast: 100, normal: 300, beam: 2000 }
  typography:
    font:
      display: "Orbitron"
      mono: "Rajdhani"
    scale:
      h1: { size: 72, tracking: 0.1, weight: 900 }
      body: { size: 16, weight: 400 }
\`\`\``,
  },
  'S17': {
    paletteStrategy: 'Vibrant neon pinks, cyans, and purples against dark grays. High saturation.',
    typography: 'Bold, geometric sans-serif (Bebas Neue) with glow effects. Retro-futuristic.',
    radiusPolicy: 'Soft rounding (8-12px) for a retro-tech feel.',
    shadowPolicy: 'Heavy colored glows (neon glows).',
    borderLanguage: 'Glowing borders in secondary neon colors.',
    patterns: 'Synthwave grids, sunbursts, scanlines.',
    motion: 'Smooth, glowing transitions. Pulsing neon effects.',
    dos: ['Use vibrant neon colors', 'Add synthwave grids', 'Include neon glow effects'],
    donts: ['Don\'t use muted colors', 'Don\'t use sharp, brutalist edges'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S17"
    style_name: "Retro 80s / Synthwave"
    industry: "Entertainment"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1A1A2E"
      secondary: "#16213E"
    text:
      primary: "#00FFFF"
      secondary: "#FF00FF"
    brand:
      primary: "#FF00FF"
      accent: "#00FFFF"
  radius: { md: 8 }
  shadow:
    neon: "0 0 20px #FF00FF"
  typography:
    font:
      sans: { primary: "Bebas Neue", fallback: ["sans-serif"] }
    scale:
      h1: { size: 64, weight: 700 }
\`\`\``,
  },
  'S18': {
    paletteStrategy: 'Glossy and futuristic 2000s style. Frosted and iridescent colors.',
    typography: 'Techno-style fonts (Michroma, Jura). Wide tracking.',
    radiusPolicy: 'Large, rounded corners (16-32px). Liquid-like feel.',
    shadowPolicy: 'Soft, glossy reflections and iridescent glows.',
    borderLanguage: 'Translucent glassmorphic borders with iridescent highlights.',
    patterns: 'Bubbles, spheres, translucent blobs, chrome textures.',
    motion: 'Fluid, morphing animations. Energy-filled.',
    dos: ['Use iridescent colors', 'Apply glossy reflections', 'Use large rounded corners'],
    donts: ['Don\'t use flat colors', 'Don\'t use sharp corners', 'Don\'t use heavy solid borders'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S18"
    style_name: "Y2K Aesthetic"
    industry: "Consumer Tech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#E5E7EB"
      secondary: "#D1D5DB"
      gradient: "linear-gradient(135deg, #FF00FF 0%, #00FFFF 100%)"
    brand:
      primary: "#FF00FF"
      accent: "#00FFFF"
  radius: { lg: 32, pill: 9999 }
  shadow:
    gloss: "inset 0 2px 4px rgba(255,255,255,0.5), 0 4px 12px rgba(0,0,0,0.1)"
  typography:
    font:
      sans: { primary: "Michroma" }
    scale:
      h1: { size: 56, weight: 600 }
\`\`\``,
  },
};
