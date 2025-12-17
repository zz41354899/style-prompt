// Detailed Style DNA configuration
export interface StyleDNAConfig {
  paletteStrategy: string;
  typography: string;
  radiusPolicy: string;
  shadowPolicy: string;
  borderLanguage: string;
  patterns: string;
  motion: string;
  tokens?: string;
}

export const styleDNAConfigs: Record<string, StyleDNAConfig> = {
  'S01': {
    paletteStrategy: 'Neutral grays with a single accent color. Clean backgrounds, subtle borders.',
    typography: 'System fonts or geometric sans-serif. Clean hierarchy with consistent weights.',
    radiusPolicy: 'Small to medium radius (4-8px). Consistent across components.',
    shadowPolicy: 'Subtle elevation shadows. Minimal depth.',
    borderLanguage: 'Thin, subtle borders. Low contrast.',
    patterns: 'None. Pure minimalism.',
    motion: 'Subtle, quick transitions (150-200ms). Ease-out curves.',
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
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
    motion: 'Mechanical, linear movements.',
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
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
    motion: 'Functional, purposeful. No decoration.',
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
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
    motion: 'Jarring or none. No smooth transitions.',
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
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
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
    motion: 'Glitchy, flickering. Digital artifacts.',
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
      subtle: "#333344"
    state:
      success: "#00FFFF"
      warning: "#FFFF00"
      error: "#FF00FF"
    focus:
      ring: "#00FFFF"
  radius:
    none: 0
    sm: 2
    md: 8
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 20px currentColor"
    neon: "0 0 10px #00FFFF, 0 0 20px #00FFFF"
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
      fast: 50
      normal: 150
    easing: steps(4)
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
  'S07': {
    paletteStrategy: 'Gradient neons (pink, purple, cyan). Sunset palettes. Dark backgrounds.',
    typography: 'Retro-futuristic fonts. Chrome effects. Outlined text.',
    radiusPolicy: 'Rounded (8-16px). Soft edges.',
    shadowPolicy: 'Neon glows. Gradient shadows.',
    borderLanguage: 'Glowing outlines. Gradient borders.',
    patterns: 'Perspective grids. Sun/horizon imagery.',
    motion: 'Smooth, flowing. Pulsing glows.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S07"
    style_name: "Retro 80s (Synthwave)"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1A0A2E"
      secondary: "#16082A"
    text:
      primary: "#FFFFFF"
      secondary: "#FF6AD5"
      muted: "#9D8CFF"
    brand:
      primary: "#FF6AD5"
      secondary: "#C774E8"
      accent: "#00D4FF"
    border:
      strong: "#FF6AD5"
      subtle: "#4A2C6A"
    state:
      success: "#00D4FF"
      warning: "#FF6AD5"
      error: "#C774E8"
    focus:
      ring: "#00D4FF"
    gradient:
      sunset: "linear-gradient(180deg, #FF6AD5 0%, #C774E8 50%, #00D4FF 100%)"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 30px rgba(255,106,213,0.5)"
    neon: "0 0 20px #FF6AD5"
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
      fast: 200
      normal: 400
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S08': {
    paletteStrategy: 'Warm, muted colors. Earthy tones. Vintage palette.',
    typography: 'Vintage display fonts. Rounded sans-serif. Varied weights.',
    radiusPolicy: 'Rounded (8-16px). Organic feel.',
    shadowPolicy: 'Subtle or none. Rely on texture.',
    borderLanguage: 'Soft borders. Rounded shapes.',
    patterns: 'Paper grain, halftone dots, vintage textures.',
    motion: 'Gentle, organic movements.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S08"
    style_name: "Retro 60s–70s (Print Grain)"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5E6D3"
      secondary: "#EDD9C4"
    text:
      primary: "#3D2914"
      secondary: "#5C4033"
      muted: "#8B7355"
    brand:
      primary: "#C75B39"
      secondary: "#D4A574"
      accent: "#4A7C59"
    border:
      strong: "#5C4033"
      subtle: "#D4C4B0"
    state:
      success: "#4A7C59"
      warning: "#D4A574"
      error: "#C75B39"
    focus:
      ring: "#3D2914"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
    soft: "0 2px 8px rgba(61,41,20,0.1)"
  layout:
    container:
      content: 1080
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 200
      normal: 350
    easing: ease-out
  texture:
    grain: "url(/textures/paper-grain.png)"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S09': {
    paletteStrategy: 'Bold, clashing colors. Primary + pastels. High saturation.',
    typography: 'Playful, varied fonts. Mixed styles. Bold and fun.',
    radiusPolicy: 'Mixed. Geometric shapes.',
    shadowPolicy: 'Hard, offset shadows. Colorful.',
    borderLanguage: 'Thick, colorful borders. Squiggly lines.',
    patterns: 'Geometric shapes, confetti, zigzags, dots.',
    motion: 'Bouncy, playful. Exaggerated easing.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S09"
    style_name: "Memphis"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFEF0"
      secondary: "#FFE4E1"
    text:
      primary: "#1A1A1A"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#FF6B6B"
      secondary: "#4ECDC4"
      accent: "#FFE66D"
    border:
      strong: "#1A1A1A"
      subtle: "#FFB6C1"
    state:
      success: "#4ECDC4"
      warning: "#FFE66D"
      error: "#FF6B6B"
    focus:
      ring: "#1A1A1A"
    palette:
      pink: "#FF6B6B"
      teal: "#4ECDC4"
      yellow: "#FFE66D"
      purple: "#A855F7"
      blue: "#3B82F6"
  radius:
    none: 0
    sm: 4
    md: 12
    lg: 20
    circle: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    hard: "6px 6px 0 #1A1A1A"
    colorful: "6px 6px 0 #FF6B6B"
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
      fast: 150
      normal: 300
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S10': {
    paletteStrategy: 'Muted, sophisticated colors. Gold accents. Cream backgrounds.',
    typography: 'Elegant serifs. Refined spacing. Light weights.',
    radiusPolicy: 'Minimal (0-4px). Refined edges.',
    shadowPolicy: 'Subtle, soft shadows. Elegant depth.',
    borderLanguage: 'Thin, refined borders. Gold accents.',
    patterns: 'Subtle textures. Marble, linen.',
    motion: 'Slow, elegant transitions. Graceful.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S10"
    style_name: "Luxury Editorial"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAF8F5"
      secondary: "#F5F0E8"
    text:
      primary: "#1C1C1C"
      secondary: "#4A4A4A"
      muted: "#8A8A8A"
    brand:
      primary: "#B8860B"
      accent: "#D4AF37"
    border:
      strong: "#D4AF37"
      subtle: "#E8E0D5"
    state:
      success: "#1C1C1C"
      warning: "#D4AF37"
      error: "#B8860B"
    focus:
      ring: "#1C1C1C"
  radius:
    none: 0
    sm: 2
    md: 4
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    soft: "0 4px 20px rgba(0,0,0,0.06)"
    elegant: "0 8px 30px rgba(0,0,0,0.08)"
  layout:
    container:
      content: 1080
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 300
      normal: 500
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S11': {
    paletteStrategy: 'Muted, natural colors. Lots of white space. Subtle accents.',
    typography: 'Clean, minimal fonts. Light weights. Generous spacing.',
    radiusPolicy: 'Subtle (2-6px). Soft but not round.',
    shadowPolicy: 'Very subtle or none. Rely on space.',
    borderLanguage: 'Minimal, delicate borders.',
    patterns: 'None or subtle textures. Washi paper.',
    motion: 'Slow, deliberate. Zen-like.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S11"
    style_name: "Japanese Minimal"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFAF8"
      secondary: "#F5F5F0"
    text:
      primary: "#2C2C2C"
      secondary: "#5C5C5C"
      muted: "#9C9C9C"
    brand:
      primary: "#8B7355"
      accent: "#C4A77D"
    border:
      strong: "#D4D4D0"
      subtle: "#ECECEA"
    state:
      success: "#2C2C2C"
      warning: "#C4A77D"
      error: "#8B7355"
    focus:
      ring: "#2C2C2C"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 6
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
    subtle: "0 1px 3px rgba(0,0,0,0.04)"
  layout:
    container:
      content: 960
      wide: 1120
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 300
      normal: 600
    easing: ease-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 500, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 500, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 450, tracking: 0 }
      small: { size: 14, line: 22, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [80, 80]
      desktop: [160, 160]
\`\`\``,
  },
  'S12': {
    paletteStrategy: 'Earth tones. Greens, browns, creams. Natural palette.',
    typography: 'Organic, rounded fonts. Friendly and approachable.',
    radiusPolicy: 'Large radius (12-24px). Organic shapes.',
    shadowPolicy: 'Soft, natural shadows.',
    borderLanguage: 'Soft, curved borders. Organic shapes.',
    patterns: 'Leaf patterns, organic textures, watercolor.',
    motion: 'Flowing, natural movements.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S12"
    style_name: "Nature Organic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F9F6F0"
      secondary: "#EDE8DC"
    text:
      primary: "#2D3B2D"
      secondary: "#4A5D4A"
      muted: "#7A8B7A"
    brand:
      primary: "#4A7C59"
      secondary: "#8FBC8F"
      accent: "#D4A574"
    border:
      strong: "#4A7C59"
      subtle: "#D4E4D4"
    state:
      success: "#4A7C59"
      warning: "#D4A574"
      error: "#2D3B2D"
    focus:
      ring: "#4A7C59"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 32
    organic: "40% 60% 60% 40% / 60% 40% 60% 40%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    soft: "0 4px 16px rgba(45,59,45,0.1)"
    natural: "0 8px 24px rgba(45,59,45,0.12)"
  layout:
    container:
      content: 1080
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
      fast: 250
      normal: 400
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
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
      body: { size: 16, line: 26, weight: 450, tracking: 0 }
      small: { size: 14, line: 22, weight: 450, tracking: 0 }
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
  'S13': {
    paletteStrategy: 'Bold primary colors. White backgrounds. Systematic palette.',
    typography: 'Roboto or similar. Clear hierarchy. Medium weights.',
    radiusPolicy: 'Consistent (4-8px). Systematic.',
    shadowPolicy: 'Elevation system. Multiple levels.',
    borderLanguage: 'Minimal borders. Rely on shadows.',
    patterns: 'None. Clean surfaces.',
    motion: 'Responsive, meaningful. Standard curves.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S13"
    style_name: "Material-ish"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      surface: "#FFFFFF"
    text:
      primary: "#212121"
      secondary: "#757575"
      muted: "#9E9E9E"
    brand:
      primary: "#6200EE"
      secondary: "#03DAC6"
      accent: "#FF5722"
    border:
      strong: "#E0E0E0"
      subtle: "#F5F5F5"
    state:
      success: "#03DAC6"
      warning: "#FF5722"
      error: "#6200EE"
    focus:
      ring: "#6200EE"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    elevation1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    elevation2: "0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)"
    elevation3: "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)"
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
      normal: 250
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Roboto"
        fallback:
          - "Inter"
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S14': {
    paletteStrategy: 'Translucent colors. Gradient backgrounds. Frosted effects.',
    typography: 'Modern sans-serif. Clean and readable.',
    radiusPolicy: 'Large radius (16-24px). Soft, pill shapes.',
    shadowPolicy: 'Soft, diffused shadows. Layered depth.',
    borderLanguage: 'Subtle, light borders. Frosted edges.',
    patterns: 'Gradient blurs. Layered transparencies.',
    motion: 'Smooth, floating. Parallax effects.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S14"
    style_name: "Glassmorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "rgba(255,255,255,0.7)"
      secondary: "rgba(255,255,255,0.5)"
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    text:
      primary: "#1A1A2E"
      secondary: "#4A4A6A"
      muted: "#8A8AA0"
    brand:
      primary: "#667eea"
      accent: "#764ba2"
    border:
      strong: "rgba(255,255,255,0.3)"
      subtle: "rgba(255,255,255,0.1)"
    state:
      success: "#667eea"
      warning: "#764ba2"
      error: "#1A1A2E"
    focus:
      ring: "#667eea"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 28
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glass: "0 8px 32px rgba(0,0,0,0.1)"
    soft: "0 4px 16px rgba(0,0,0,0.08)"
  blur:
    glass: "blur(10px)"
    strong: "blur(20px)"
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
      fast: 200
      normal: 400
    easing: ease-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S15': {
    paletteStrategy: 'Monochromatic. Soft, muted backgrounds. Subtle color shifts.',
    typography: 'Clean sans-serif. Subtle shadows on text.',
    radiusPolicy: 'Large radius (12-20px). Soft, pillowy.',
    shadowPolicy: 'Dual shadows (light + dark). Embossed/debossed.',
    borderLanguage: 'None. Rely on shadows for definition.',
    patterns: 'None. Pure form.',
    motion: 'Subtle press effects. Tactile feedback.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S15"
    style_name: "Neumorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#E0E5EC"
      secondary: "#D1D9E6"
    text:
      primary: "#2D3748"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#6366F1"
      accent: "#8B5CF6"
    border:
      strong: transparent
      subtle: transparent
    state:
      success: "#6366F1"
      warning: "#8B5CF6"
      error: "#2D3748"
    focus:
      ring: "#6366F1"
  radius:
    none: 0
    sm: 12
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    raised: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff"
    inset: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff"
    pressed: "inset 2px 2px 5px #b8bec7, inset -2px -2px 5px #ffffff"
  layout:
    container:
      content: 1080
      wide: 1200
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
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S16': {
    paletteStrategy: 'Green/amber on black. Monochrome terminal colors.',
    typography: 'Monospace only. Fixed-width. Courier, Fira Code.',
    radiusPolicy: 'Zero. Sharp terminal aesthetic.',
    shadowPolicy: 'None or subtle glow.',
    borderLanguage: 'ASCII borders. Box-drawing characters.',
    patterns: 'Scanlines, CRT effects, matrix rain.',
    motion: 'Typing effects. Cursor blinks. Instant.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S16"
    style_name: "Terminal / Hacker"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0D0D0D"
      secondary: "#1A1A1A"
    text:
      primary: "#00FF00"
      secondary: "#00CC00"
      muted: "#008800"
    brand:
      primary: "#00FF00"
      accent: "#FFAA00"
    border:
      strong: "#00FF00"
      subtle: "#004400"
    state:
      success: "#00FF00"
      warning: "#FFAA00"
      error: "#00CC00"
    focus:
      ring: "#00FF00"
  radius:
    none: 0
    sm: 0
    md: 0
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
    glow: "0 0 10px #00FF00"
  layout:
    container:
      content: 1024
      wide: 1200
    grid:
      desktop: 1
      tablet: 1
      mobile: 1
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 0
      normal: 50
    easing: step-end
  font:
    mono: "'Fira Code', 'Courier New', monospace"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
      mono:
        primary: "Fira Code"
        fallback:
          - "JetBrains Mono"
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 48, line: 56, weight: 600, tracking: -0.02 }
      h2: { size: 32, line: 40, weight: 600, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: -0.005 }
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
  'S17': {
    paletteStrategy: 'Warm off-white base, near-black text, one bold primary color and one accent color. Flat color fields only (no gradients).',
    typography: 'Geometric sans-serif dominant, mono for system/metrics labels. High contrast, grid-driven hierarchy.',
    radiusPolicy: 'Mostly square. Radius limited to 0–8px for usability.',
    shadowPolicy: 'Minimal. Prefer outlines and stacking. Optional hard shadow for primary CTAs only.',
    borderLanguage: 'Thick rules, visible dividers, consistent stroke weights.',
    patterns: 'Optional paper grain or dot grid at very low opacity.',
    motion: 'Mechanical, short, intentional. No spring or playful easing.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S17"
    style_name: "Bauhaus Modernism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F6F2EA"
      secondary: "#EEE7DB"
      surface: "#F6F2EA"
    text:
      primary: "#0E0F12"
      secondary: "#2C2F36"
      muted: "#5A5F6B"
      on_accent: "#0E0F12"
    brand:
      primary: "#E53935"
      accent: "#FFC400"
    border:
      strong: "#0E0F12"
      subtle: "#C9C2B6"
    state:
      success: "#1E7F5A"
      warning: "#B7791F"
      error: "#C53030"
    focus:
      ring: "#FFC400"
  radius:
    none: 0
    sm: 4
    md: 8
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    default: "none"
    cta_hard: "4px 4px 0 0 #0E0F12"
  typography:
    font:
      sans:
        primary: "Space Grotesk"
        fallback:
          - "Inter"
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
          - "Roboto"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "IBM Plex Mono"
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1:
        size: 56
        line: 64
        weight: 600
        tracking: -0.02
      h2:
        size: 40
        line: 48
        weight: 600
        tracking: -0.01
      h3:
        size: 28
        line: 36
        weight: 600
        tracking: -0.005
      body:
        size: 16
        line: 24
        weight: 450
        tracking: 0
      small:
        size: 14
        line: 20
        weight: 450
        tracking: 0
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile:
        - 64
        - 80
      desktop:
        - 112
        - 128
    stack:
      xs: 8
      sm: 12
      md: 16
      lg: 24
      xl: 32
      2xl: 48
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
      micro: 120
      standard: 200
      enter: 320
    easing:
      mechanical: "cubic-bezier(0.2,0.8,0.2,1)"
\`\`\``,
  },
  'S18': {
    paletteStrategy: '8-bit color palette. Limited colors. Dithering for gradients.',
    typography: 'Pixel fonts. Fixed sizes. Bitmap aesthetic.',
    radiusPolicy: 'Zero. Pixel-perfect edges.',
    shadowPolicy: 'Pixel shadows. Offset by exact pixels.',
    borderLanguage: 'Pixel borders. 1-2px thick.',
    patterns: 'Dither patterns. Pixel art backgrounds.',
    motion: 'Frame-by-frame. No smooth transitions.',
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S18"
    style_name: "Retro Pixel UI"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    background:
      canvas: "#0B0E14"
      surface: "#11162A"
      surface_alt: "#1A2040"
    text:
      primary: "#E6E9FF"
      secondary: "#AAB0FF"
      muted: "#7A80C2"
      inverse: "#0B0E14"
    accent:
      primary: "#5CFFB1"
      secondary: "#FF5CAA"
      warning: "#FFD75C"
    border:
      default: "#2E3570"
      strong: "#5CFFB1"
    state:
      success: "#5CFFB1"
      warning: "#FFD75C"
      error: "#FF5CAA"
    focus:
      ring: "#5CFFB1"
  typography:
    fontFamily:
      display: "Press Start 2P, monospace"
      body: "Inter, system-ui, sans-serif"
    scale:
      h1: "32px"
      h2: "24px"
      h3: "20px"
      body: "16px"
      small: "14px"
    lineHeight:
      display: 1.3
      body: 1.6
    maxLineLength: "68ch"
  spacing:
    base: 8
    xs: 8
    sm: 16
    md: 24
    lg: 40
    xl: 64
    sectionY: 96
  radius:
    none: 0
    pixel: 2
  borderWidth:
    default: 1
  shadow:
    pixel_sm: "2px 2px 0 #000"
    pixel_md: "4px 4px 0 #000"
  layout:
    container:
      maxWidth: 1200
      paddingX: 24
    grid:
      columns: 12
      gutter: 24
  motion:
    duration:
      fast: "120ms"
      normal: "200ms"
    easing:
      step: "steps(4, end)"
  iconography:
    style: "pixel-outline"
    stroke: 1
  texture:
    pixelGrid:
      size: 8
      opacity: 0.04
\`\`\``,
  },
};
