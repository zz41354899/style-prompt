import type { StyleDNAConfig } from './types';

export const S01_S06_Configs: Record<string, StyleDNAConfig> = {
  'S01': {
    paletteStrategy: 'Neutral grays with a single accent color. Clean backgrounds, subtle borders.',
    typography: 'System fonts or geometric sans-serif. Clean hierarchy with consistent weights.',
    radiusPolicy: 'Small to medium radius (4-8px). Consistent across components.',
    shadowPolicy: 'Subtle elevation shadows. Minimal depth.',
    borderLanguage: 'Thin, subtle borders. Low contrast.',
    patterns: 'None. Pure minimalism.',
    motion: 'Subtle, quick transitions (150-200ms). Ease-out curves.',
    dos: ['Use clean lines and ample whitespace', 'Keep typography simple and readable', 'Use subtle animations', 'Maintain consistent spacing'],
    donts: ['Don\'t use excessive decorations', 'Don\'t overcrowd the layout', 'Don\'t use too many colors', 'Don\'t use heavy shadows'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S01"
    style_name: "Tech Minimal"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F8F9FA"
    text:
      primary: "#1A1A1A"
      secondary: "#6B7280"
      muted: "#9CA3AF"
    brand:
      primary: "#3B82F6"
      accent: "#10B981"
    border:
      strong: "#E5E7EB"
      subtle: "#F3F4F6"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#3B82F6"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 4px 6px rgba(0,0,0,0.07)"
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 150
      normal: 200
    easing: ease-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
          - "Roboto"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S02': {
    paletteStrategy: 'Pure black and white with occasional gray. No colors.',
    typography: 'Bold editorial fonts. Strong contrast between sizes. Serif or geometric sans.',
    radiusPolicy: 'Sharp corners (0-2px). Architectural precision.',
    shadowPolicy: 'None or hard shadows only.',
    borderLanguage: 'Thick black rules. Strong dividers.',
    patterns: 'None. Typography is the pattern.',
    motion: 'Minimal. Instant or very quick transitions.',
    dos: ['Use strong black and white contrast', 'Emphasize typography hierarchy', 'Use bold editorial layouts', 'Keep imagery minimal'],
    donts: ['Don\'t use colors unless intentional', 'Don\'t add unnecessary elements', 'Don\'t use rounded corners excessively', 'Don\'t use playful animations'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S02"
    style_name: "Minimalist Monochrome"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#000000"
      accent: "#000000"
    border:
      strong: "#000000"
      subtle: "#E0E0E0"
    state:
      success: "#000000"
      warning: "#000000"
      error: "#000000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 2
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
    hard: "4px 4px 0 #000000"
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 0
      normal: 100
    easing: linear
  typography:
    font:
      sans:
        primary: "Playfair Display"
        fallback:
          - "Georgia"
          - "Times New Roman"
          - "serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S03': {
    paletteStrategy: 'High contrast, limited palette. Essential colors, often pure black/white with one or two vibrant accents.',
    typography: 'Strict grid alignment. Helvetica or similar grotesque sans-serifs. Highly structured.',
    radiusPolicy: 'Zero radius (0px). Sharp, crisp, unyielding edges.',
    shadowPolicy: 'None. Complete absence of depth. Flat blocks only.',
    borderLanguage: 'Prominent, thick, structural black lines acting as grid dividers.',
    patterns: 'None or strict geometric matrices.',
    motion: 'Instantaneous or rigid linear transitions. No playful bounces.',
    dos: ['Use a strict modular grid', 'Employ high-contrast typography', 'Use clear, unambiguous iconography', 'Maximize negative space systematically'],
    donts: ['Don\'t use gradients or drop shadows', 'Don\'t use rounded corners', 'Don\'t center-align text unnecessarily', 'Don\'t use decorative elements'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S03"
    style_name: "Swiss Design"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5F0"
      secondary: "#EAEAEA"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#8A8A8A"
    brand:
      primary: "#E02424"
      accent: "#0055FF"
    border:
      strong: "#000000"
      subtle: "#000000"
    state:
      success: "#0E9F6E"
      warning: "#E3A008"
      error: "#E02424"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    none: none
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 6
      mobile: 4
    gutter:
      mobile: 16
      desktop: 32
  motion:
    duration:
      fast: 100
      normal: 200
    easing: "linear"
  typography:
    font:
      sans:
        primary: "Helvetica Neue"
        fallback:
          - "Arial"
          - "sans-serif"
      mono:
        primary: "Space Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: -0.02 }
      h2: { size: 48, line: 56, weight: 700, tracking: -0.01 }
      h3: { size: 32, line: 40, weight: 600, tracking: 0 }
      body: { size: 18, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [128, 160]
\`\`\``,
  },
  'S04': {
    paletteStrategy: 'High contrast black and white. Raw, unrefined color choices. Occasional primary yellow or red as accents.',
    typography: 'Heavyweight sans-serif (e.g., Helvetica, Archivo Black). Large, overlapping headlines. Monospaced secondary text.',
    radiusPolicy: 'Strict zero radius (0px). Everything is sharp and rectangular.',
    shadowPolicy: 'Hard, opaque drop shadows (no blur, 100% opacity). Multi-layered shadows create depth.',
    borderLanguage: 'Thick, prominent black borders (1-3px) on all containers and buttons.',
    patterns: 'Concrete textures, halftone dots, large-scale grids.',
    motion: 'Instant transitions. No easing or very aggressive, fast cubic-beziers.',
    dos: ['Use thick black borders', 'Prioritize raw typography over imagery', 'Keep everything 100% sharp', 'Use high-contrast black/white layouts'],
    donts: ['Don\'t use border-radius', 'Don\'t use soft shadows or blurs', 'Don\'t use subtle gradients', 'Don\'t use delicate or script fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S04"
    style_name: "Brutalist"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#EAEAEA"
    text:
      primary: "#000000"
      secondary: "#1A1A1A"
      muted: "#666666"
    brand:
      primary: "#000000"
      accent: "#FF3E00"
    border:
      strong: "#000000"
      subtle: "#1A1A1A"
    state:
      success: "#000000"
      warning: "#FF3E00"
      error: "#000000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    hard: "4px 4px 0 #000000"
    extreme: "8px 8px 0 #000000"
  layout:
    container:
      content: 1120
      wide: 1400
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 100
      normal: 200
    easing: "cubic-bezier(0,0,1,1)"
  typography:
    font:
      sans:
        primary: "Archivo Black"
        fallback:
          - "Helvetica"
          - "Arial"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 60, line: 64, weight: 900, tracking: -0.04 }
      h2: { size: 44, line: 48, weight: 900, tracking: -0.02 }
      h3: { size: 32, line: 36, weight: 900, tracking: -0.01 }
      body: { size: 18, line: 26, weight: 500, tracking: 0 }
      small: { size: 14, line: 20, weight: 500, tracking: 0 }
    measure:
      hero_max: "44ch"
      body_max: "64ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S05': {
    paletteStrategy: 'Muted, natural colors. Lots of white space. Subtle accents.',
    typography: 'Clean, minimal fonts. Light weights. Generous spacing.',
    radiusPolicy: 'Subtle (2-6px). Soft but not round.',
    shadowPolicy: 'Very subtle or none. Rely on space.',
    borderLanguage: 'Minimal, delicate borders.',
    patterns: 'None or subtle textures. Washi paper.',
    motion: 'Slow, deliberate. Zen-like.',
    dos: ['Embrace whitespace (ma)', 'Use subtle, natural colors', 'Create balance and harmony', 'Use delicate typography'],
    donts: ['Don\'t overcrowd the design', 'Don\'t use bold, loud colors', 'Don\'t add unnecessary elements', 'Don\'t break the zen'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S05"
    style_name: "Japanese Minimal"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FAF9F6"
    text:
      primary: "#2D2D2D"
      secondary: "#5A5A5A"
      muted: "#9CA3AF"
    brand:
      primary: "#2D2D2D"
      accent: "#C5A059"
    border:
      strong: "#E5E7EB"
      subtle: "#F3F4F6"
    focus:
      ring: "#2D2D2D"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
  border:
    width:
      hairline: 1
      medium: 1
  shadow:
    none: none
  layout:
    container:
      content: 1000
      wide: 1200
  motion:
    duration:
      fast: 300
      normal: 500
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Noto Sans JP"
        fallback: ["Inter", "sans-serif"]
      serif:
        primary: "Noto Serif JP"
        fallback: ["serif"]
    scale:
      h1: { size: 48, line: 60, weight: 300, tracking: 0.05 }
      h2: { size: 36, line: 44, weight: 300, tracking: 0.02 }
      h3: { size: 24, line: 32, weight: 400, tracking: 0.02 }
      body: { size: 16, line: 28, weight: 300, tracking: 0.05 }
      small: { size: 14, line: 22, weight: 300, tracking: 0.05 }
  spacing:
    base: 8
    section_py:
      mobile: [80, 100]
      desktop: [120, 160]
\`\`\``,
  },
  'S06': {
    paletteStrategy: 'Primary colors only. Red, blue, yellow. Bold contrasts.',
    typography: 'Geometric sans-serif. Bold. Grid-aligned.',
    radiusPolicy: 'Mixed. Circles and rectangles.',
    shadowPolicy: 'None or hard shadows.',
    borderLanguage: 'Thick black borders. Geometric.',
    patterns: 'Geometric shapes. Circles, squares, triangles.',
    motion: 'Linear transitions. No easing.',
    dos: ['Use bold geometry and rules', 'Keep copy concise', 'Treat layout like a poster', 'Accessibility of text must be considered'],
    donts: ['Don\'t use gradients or glassmorphism', 'Don\'t over-animate', 'Don\'t round everything', 'Don\'t make the button text white'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S06"
    style_name: "Bauhaus Modernism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#FF0000"
      secondary: "#0000FF"
      accent: "#FFFF00"
    border:
      strong: "#000000"
      subtle: "#E0E0E0"
    state:
      success: "#0000FF"
      warning: "#FFFF00"
      error: "#FF0000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 0
    circle: 9999
  border:
    width:
      hairline: 2
      medium: 4
      strong: 6
  shadow:
    none: none
    hard: "4px 4px 0 #000000"
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 100
      normal: 200
    easing: linear
  typography:
    font:
      sans:
        primary: "Helvetica Now"
        fallback:
          - "Bebas Neue"
          - "Arial"
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
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
};
