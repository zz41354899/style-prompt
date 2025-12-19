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
    paletteStrategy: 'Primary colors only (red, blue, yellow) on white/black. No gradients.',
    typography: 'Geometric sans-serif. Bold weights. Grid-aligned.',
    radiusPolicy: 'Zero radius. All rectangles.',
    shadowPolicy: 'None. Flat color blocks only.',
    borderLanguage: 'Thick black lines. Grid dividers.',
    patterns: 'Color block compositions. Asymmetric grids.',
    motion: 'Stiff, mechanical. No easing.',
    dos: ['Use primary colors (red, blue, yellow)', 'Create grid-based compositions', 'Use thick black lines', 'Keep shapes geometric'],
    donts: ['Don\'t use gradients', 'Don\'t use curves or organic shapes', 'Don\'t mix too many colors', 'Don\'t break the grid'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S03"
    style_name: "Mondrian / De Stijl"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
    text:
      primary: "#000000"
      secondary: "#1A1A1A"
      muted: "#4A4A4A"
    brand:
      primary: "#DE0000"
      secondary: "#0033CC"
      accent: "#FFD700"
    border:
      strong: "#000000"
      subtle: "#000000"
    state:
      success: "#0033CC"
      warning: "#FFD700"
      error: "#DE0000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    none: none
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
  border:
    width:
      thin: 2
      medium: 4
      thick: 8
  typography:
    font:
      sans:
        primary: "Bebas Neue"
        fallback:
          - "Impact"
          - "Arial Black"
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
  'S04': {
    paletteStrategy: 'Limited palette. Often monochromatic with one accent.',
    typography: 'Helvetica, Univers, or similar grotesque. Strict hierarchy.',
    radiusPolicy: 'Zero to minimal (0-4px).',
    shadowPolicy: 'None. Rely on spacing and typography.',
    borderLanguage: 'Thin rules for structure. Grid lines.',
    patterns: 'Grid systems. Mathematical proportions.',
    motion: 'Precise and functional. No flourishes.',
    dos: ['Use grid systems rigorously', 'Emphasize sans-serif typography', 'Use asymmetric layouts', 'Keep design clean and functional'],
    donts: ['Don\'t use decorative fonts', 'Don\'t ignore the grid', 'Don\'t use excessive imagery', 'Don\'t add unnecessary ornamentation'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S04"
    style_name: "Swiss / International Typographic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#8A8A8A"
    brand:
      primary: "#E53935"
      accent: "#E53935"
    border:
      strong: "#1A1A1A"
      subtle: "#E0E0E0"
    state:
      success: "#1A1A1A"
      warning: "#E53935"
      error: "#E53935"
    focus:
      ring: "#1A1A1A"
  radius:
    none: 0
    sm: 0
    md: 4
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
  layout:
    container:
      content: 1024
      wide: 1200
    grid:
      desktop: 12
      tablet: 6
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 100
      normal: 150
    easing: ease
  typography:
    font:
      sans:
        primary: "Helvetica Neue"
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
  'S05': {
    paletteStrategy: 'Raw, unrefined colors. High contrast. Often monochrome.',
    typography: 'System fonts, monospace, or intentionally ugly fonts. Large sizes.',
    radiusPolicy: 'Zero. No rounding.',
    shadowPolicy: 'None or harsh, offset shadows.',
    borderLanguage: 'Thick, visible borders. Raw HTML aesthetic.',
    patterns: 'None or intentionally crude patterns.',
    motion: 'Abrupt or none. Intentionally jarring.',
    dos: ['Use raw, unpolished aesthetics', 'Embrace bold typography', 'Use high contrast', 'Be intentionally unconventional'],
    donts: ['Don\'t over-polish the design', 'Don\'t use subtle effects', 'Don\'t follow conventional layouts', 'Don\'t use soft colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S05"
    style_name: "Brutalist"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#EEEEEE"
    text:
      primary: "#000000"
      secondary: "#000000"
      muted: "#555555"
    brand:
      primary: "#0000FF"
      accent: "#FF0000"
    border:
      strong: "#000000"
      subtle: "#000000"
    state:
      success: "#0000FF"
      warning: "#000000"
      error: "#FF0000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    none: none
    harsh: "8px 8px 0 #000000"
  layout:
    container:
      content: 960
      wide: 1200
    grid:
      desktop: 12
      tablet: 6
      mobile: 1
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 0
      normal: 0
    easing: step-end
  border:
    width:
      thin: 2
      medium: 4
      thick: 6
  typography:
    font:
      sans:
        primary: "Courier New"
        fallback:
          - "Courier"
          - "monospace"
      mono:
        primary: "Courier New"
        fallback:
          - "Courier"
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 800, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 800, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 800, tracking: -0.005 }
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
  'S06': {
    paletteStrategy: 'Neon colors (cyan, magenta, yellow) on dark backgrounds. Glowing effects.',
    typography: 'Futuristic, tech-inspired fonts. Glowing text effects.',
    radiusPolicy: 'Mixed. Sharp for panels, rounded for buttons.',
    shadowPolicy: 'Neon glows. Colored shadows.',
    borderLanguage: 'Glowing borders. Circuit-like patterns.',
    patterns: 'Grid lines, circuit patterns, glitch effects.',
    motion: 'Glitch effects. Fast, erratic.',
    dos: ['Use neon colors on dark backgrounds', 'Add glitch effects sparingly', 'Use futuristic typography', 'Create depth with layers'],
    donts: ['Don\'t use warm, natural colors', 'Don\'t use traditional layouts', 'Don\'t make it too clean', 'Don\'t forget the tech aesthetic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S06"
    style_name: "Cyberpunk"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0A0A0F"
      secondary: "#12121A"
    text:
      primary: "#FFFFFF"
      secondary: "#00FFFF"
      muted: "#8888AA"
    brand:
      primary: "#00FFFF"
      secondary: "#FF00FF"
      accent: "#FFFF00"
    border:
      strong: "#00FFFF"
      subtle: "#FF00FF"
    state:
      success: "#00FF00"
      warning: "#FFFF00"
      error: "#FF00FF"
    focus:
      ring: "#00FFFF"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      thin: 1
      medium: 2
      strong: 3
  shadow:
    neon_cyan: "0 0 20px #00FFFF"
    neon_magenta: "0 0 20px #FF00FF"
    neon_yellow: "0 0 20px #FFFF00"
  layout:
    container:
      content: 1200
      wide: 1440
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
      normal: 300
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Orbitron"
        fallback:
          - "Rajdhani"
          - "Arial"
          - "sans-serif"
      mono:
        primary: "Share Tech Mono"
        fallback:
          - "Fira Code"
          - "monospace"
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
