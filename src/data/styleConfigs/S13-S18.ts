import type { StyleDNAConfig } from './types';

export const S13_S18_Configs: Record<string, StyleDNAConfig> = {
  'S13': {
    paletteStrategy: 'Playful pastel palette. Bright, cheerful colors. Hand-drawn aesthetic.',
    typography: 'Mixed fonts. Handwritten feel with sans-serif readability. Varied styles.',
    radiusPolicy: 'Mixed. Organic shapes. Hand-drawn feel.',
    shadowPolicy: 'Soft, playful shadows. Colorful depth.',
    borderLanguage: 'Hand-drawn borders. Doodle patterns.',
    patterns: 'Crayon textures. Doodle patterns. Playful elements.',
    motion: 'Bouncy, playful animations (300-500ms). Fun easing.',
    dos: ['Use hand-drawn elements', 'Add playful patterns', 'Use vibrant colors', 'Create organic shapes'],
    donts: ['Don\'t be too rigid', 'Don\'t use perfect lines', 'Don\'t forget the fun', 'Don\'t make it too serious'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S13"
    style_name: "Doodle Sketch"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FFFEF0"
    text:
      primary: "#3D3D3D"
      secondary: "#5A5A5A"
      muted: "#888888"
    brand:
      primary: "#FF6B9D"
      secondary: "#66D9EF"
      accent: "#A8E6CF"
    border:
      strong: "#5A5A5A"
      subtle: "#E0E0E0"
      doodle: "#FFB347"
    state:
      success: "#A8E6CF"
      warning: "#FFDAB9"
      error: "#FF6B9D"
    focus:
      ring: "#66D9EF"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    organic: "40% 60% 60% 40% / 60% 40% 60% 40%"
  border:
    width:
      hairline: 2
      medium: 3
      strong: 4
  shadow:
    soft: "0 4px 12px rgba(61,61,61,0.1)"
    colorful: "0 4px 12px rgba(255,107,157,0.2)"
    handdrawn: "2px 2px 0 #FFB347"
  layout:
    container:
      content: 1100
      wide: 1260
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 18
      desktop: 26
  motion:
    duration:
      fast: 300
      normal: 400
      slow: 500
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans:
        primary: "Comic Neue"
        fallback:
          - "Comic Sans MS"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 500, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [80, 96]
      desktop: [128, 144]
\`\`\``,
  },
  'S14': {
    paletteStrategy: 'Minimal cyan/blue palette. Clean tech aesthetic. High contrast.',
    typography: 'Geometric monospace. Tech feel. Clean lines.',
    radiusPolicy: 'Minimal (0-4px). Sharp, tech aesthetic.',
    shadowPolicy: 'Subtle tech shadows. Glow effects.',
    borderLanguage: 'Thin tech borders. Cyan accents.',
    patterns: 'Tech grid patterns. Minimal lines.',
    motion: 'Fast, precise animations (150-300ms). Tech feel.',
    dos: ['Use clean geometric lines', 'Create minimal compositions', 'Use cyan/blue accents', 'Keep it precise'],
    donts: ['Don\'t add unnecessary details', 'Don\'t use complex shapes', 'Don\'t overcomplicate', 'Don\'t break the minimalism'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S14"
    style_name: "Minimalist Line Art"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0F172A"
      secondary: "#1E293B"
    text:
      primary: "#FFFFFF"
      secondary: "#94A3B8"
      muted: "#64748B"
    brand:
      primary: "#06B6D4"
      secondary: "#3B82F6"
      accent: "#10B981"
    border:
      strong: "#334155"
      subtle: "#1E293B"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#06B6D4"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    tech: "0 0 20px rgba(6, 182, 212, 0.3)"
    elevation: "0 4px 16px rgba(0,0,0,0.2)"
  layout:
    container:
      content: 1040
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 12
      desktop: 20
  motion:
    duration:
      fast: 150
      normal: 200
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "JetBrains Mono"
        fallback: ["monospace"]
      mono:
        primary: "JetBrains Mono"
        fallback: ["monospace"]
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
\`\`\``,
  },
  'S15': {
    paletteStrategy: 'Gold, black, navy blue, emerald green. Luxury contrast.',
    typography: 'Geometric sans or stylized serif (e.g., Broadway style).',
    radiusPolicy: 'Sharp angles mixed with perfect circles.',
    shadowPolicy: 'Hard shadows or gold glow.',
    borderLanguage: 'Double lines, gold borders.',
    patterns: 'Sunbursts, fans, geometric repetitions.',
    motion: 'Fast, precise, elegant.',
    dos: ['Use gold accents', 'Use geometric patterns', 'Keep typography elegant', 'Use high contrast'],
    donts: ['Don\'t use slopy fonts', 'Don\'t use grunge textures', 'Don\'t use cheap-looking colors', 'Don\'t clutter'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S15"
    style_name: "Art Deco"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0F172A"
      secondary: "#1E293B"
    text:
      primary: "#FCD34D"
      secondary: "#E2E8F0"
      muted: "#94A3B8"
    brand:
      primary: "#D4AF37"
      accent: "#059669"
    border:
      strong: "#D4AF37"
    state:
      success: "#059669"
      warning: "#D4AF37"
      error: "#DC2626"
    focus:
      ring: "#D4AF37"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
    circle: 9999
  border:
    width:
      thin: 1
      medium: 2
      thick: 4
  shadow:
    gold: "0 0 30px rgba(212,175,55,0.4)"
    hard: "8px 8px 0 rgba(0,0,0,0.3)"
  layout:
    container:
      content: 1080
      wide: 1200
  motion:
    duration:
      fast: 150
      normal: 300
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans: { primary: "Josefin Sans", fallback: ["sans-serif"] }
      display: { primary: "Playfair Display", fallback: ["serif"] }
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: 0.05 }
      h2: { size: 42, line: 50, weight: 500, tracking: 0.03 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
\`\`\``,
  },
  'S16': {
    paletteStrategy: 'CMYK primaries, extremely vibrant and contrasting.',
    typography: 'Bold comic fonts, Ben-Day dots.',
    radiusPolicy: 'Standard rounding or sharp.',
    shadowPolicy: 'Black halftone drop shadows.',
    borderLanguage: 'Thick black outlines.',
    patterns: 'Ben-Day dots, starbursts, stripes.',
    motion: 'Pop-in, comic pow effects.',
    dos: ['Use halftones', 'Use bold outlines', 'Be loud', 'Reference Lichtenstein/Warhol'],
    donts: ['Don\'t use muted colors', 'Don\'t be subtle', 'Don\'t use realistic gradients', 'Don\'t take itself seriously'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S16"
    style_name: "Pop Art"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F0F0F0"
    text:
      primary: "#000000"
      secondary: "#333333"
    brand:
      primary: "#EC008C"
      accent: "#00ADEF"
    border:
      strong: "#000000"
  radius:
    none: 0
    sm: 4
    md: 8
  border:
    width:
      outline: 4
  shadow:
    halftone: "8px 8px 0 #000"
  typography:
    font:
      sans: { primary: "Bangers", fallback: ["Impact"] }
      body: { primary: "Comic Neue", fallback: ["cursive"] }
    scale:
      h1: { size: 64, line: 68, weight: 400, tracking: 0.02 }
\`\`\``,
  },
  'S17': {
    paletteStrategy: 'Muted golds, olive greens, floral tones.',
    typography: 'Ornamental, flowing Serif.',
    radiusPolicy: 'Complex curves, floral motifs.',
    shadowPolicy: 'Soft, natural shadows.',
    borderLanguage: 'Intricate floral borders.',
    patterns: 'Vines, flowers, Mucha-style curves.',
    motion: 'Growing vines, elegant fades.',
    dos: ['Use curves', 'Be ornamental', 'Reference nature', 'Use muted elegance'],
    donts: ['Don\'t use straight lines', 'Don\'t use neon', 'Don\'t be minimal', 'Don\'t be industrial'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S17"
    style_name: "Art Nouveau"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5DC"
      secondary: "#EADDCA"
    text:
      primary: "#3D3D3D"
    brand:
      primary: "#C5A059"
      accent: "#556B2F"
    border:
      strong: "#8B7355"
  radius:
    none: 0
    sm: 8
    md: 16
    ornate: 16
  shadow:
    soft: "0 4px 16px rgba(0,0,0,0.1)"
  typography:
    font:
      serif: { primary: "Cinzel Decorative", fallback: ["serif"] }
      body: { primary: "Playfair Display", fallback: ["serif"] }
    scale:
      h1: { size: 52, line: 64, weight: 400, tracking: 0.02 }
\`\`\``,
  },
  'S18': {
    paletteStrategy: 'Crimson red, deep blacks, dark purples. High contrast, dramatic lighting.',
    typography: 'Ornate blackletter or gothic serif headings. Clean but elegant serif body.',
    radiusPolicy: 'Sharp corners. Pointed arches (if possible in CSS shapes).',
    shadowPolicy: 'Deep, dramatic drop shadows and inner glows.',
    borderLanguage: 'Intricate, thick borders. Often framing content like a stained glass window.',
    patterns: 'Damask textures, intricate lace, architectural motifs.',
    motion: 'Slow, dramatic fades. Ethereal, floating movements.',
    dos: ['Use dark, rich colors', 'Use elegant, ornate typography', 'Create a sense of drama', 'Use intricate borders'],
    donts: ['Don\'t use bright, cheerful colors', 'Don\'t use modern, geometric grotesques', 'Don\'t make it looking flimsy', 'Don\'t skimp on contrast'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S18"
    style_name: "Gothic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0A0A0A"
      secondary: "#1A1515"
    text:
      primary: "#EAEAEA"
    brand:
      primary: "#8B0000"
      accent: "#4B0082"
    border:
      strong: "#8B0000"
  radius:
    none: 0
    arch: "50% 50% 0 0 / 100% 100% 0 0"
  shadow:
    deep: "0 10px 30px rgba(0,0,0,0.8)"
  typography:
    font:
      serif: { primary: "UnifrakturMaguntia", fallback: ["serif"] }
      body: { primary: "Crimson Text", fallback: ["serif"] }
    scale:
      h1: { size: 60, line: 68, weight: 400, tracking: 0 }
\`\`\``,
  },
};
