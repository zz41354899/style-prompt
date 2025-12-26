import type { StyleDNAConfig } from './types';

export const S25_S30_Configs: Record<string, StyleDNAConfig> = {
  'S25': {
    paletteStrategy: 'Pastel, paper-like colors. White, beige, light blue, soft shadows.',
    typography: 'Handwritten or serif headings. Clean sans-serif body.',
    radiusPolicy: 'Slightly irregular or rounded edges to mimic paper cuts.',
    shadowPolicy: 'Layered, deep shadows to create depth (cutout effect).',
    borderLanguage: 'None or subtle torn paper edges.',
    patterns: 'Paper texture, grain, noise.',
    motion: 'Fold, unfold, slide in like paper sheets.',
    dos: ['Use layered shadows', 'Use pastel colors', 'Mimic physical paper properties', 'Keep layouts clean'],
    donts: ['Don\'t use neon colors', 'Don\'t use flat design without depth', 'Don\'t use harsh metallic gradients', 'Don\'t make it too perfect'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S25"
    style_name: "Paper Craft"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5F0"
      secondary: "#EBEBE0"
      paper: "#FFFFFF"
    text:
      primary: "#2C2C2C"
      secondary: "#595959"
      muted: "#999999"
    brand:
      primary: "#FF6B6B"
      accent: "#4ECDC4"
    border:
      strong: "#D1D1D1"
      subtle: "#E5E5E5"
    state:
      success: "#4ECDC4"
      warning: "#FFE66D"
      error: "#FF6B6B"
    focus:
      ring: "#4ECDC4"
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
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    md: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"
    lg: "0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.1)"
    cutout: "inset 0 2px 4px rgba(0,0,0,0.1)"
  layout:
    container:
      content: 1100
      wide: 1300
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 32
  motion:
    duration:
      fast: 200
      normal: 400
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "sans-serif"
      serif:
        primary: "Lora"
        fallback:
          - "serif"
    scale:
      h1: { size: 48, line: 58, weight: 700, tracking: 0 }
      h2: { size: 36, line: 46, weight: 600, tracking: 0 }
      h3: { size: 24, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S26': {
    paletteStrategy: 'Vibrant colors, white background. Material Design 3 inspired.',
    typography: 'Google Sans or Roboto. Friendly and readable.',
    radiusPolicy: 'Rounded corners (12px-24px).',
    shadowPolicy: 'Subtle, consistent elevation usage.',
    borderLanguage: 'Minimal borders, focus on fill colors and spacing.',
    patterns: 'Shape containers, slight gradients.',
    motion: 'Standard Material ease. Playful but functional.',
    dos: ['Use consistent rounded corners', 'Use vibrant primary colors', 'Follow material spacing guidelines', 'Use meaningful motion'],
    donts: ['Don\'t use sharp corners', 'Don\'t use heavy textures', 'Don\'t clutter the UI', 'Don\'t use complex gradients'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S26"
    style_name: "Flat 2.0"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F3F4F6"
    text:
      primary: "#111827"
      secondary: "#4B5563"
      muted: "#9CA3AF"
    brand:
      primary: "#6366F1"
      accent: "#8B5CF6"
    border:
      strong: "#E5E7EB"
      subtle: "#F3F4F6"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#6366F1"
  radius:
    none: 0
    sm: 8
    md: 12
    lg: 24
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
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
      normal: 300
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Roboto"
        fallback:
          - "system-ui"
          - "sans-serif"
      display:
        primary: "Google Sans"
        fallback:
          - "Roboto"
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 800, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S27': {
    paletteStrategy: 'Hot pink, electric blue, silver/chrome, black.',
    typography: 'Extended sans-serif, futuristic fonts.',
    radiusPolicy: 'Mixed: Pills and sharp angles.',
    shadowPolicy: 'Glows, metallic reflections.',
    borderLanguage: 'Thick metallic borders or none.',
    patterns: 'Blobs, liquid metal, grid backgrounds, stars.',
    motion: 'Bouncy, fast, energetic.',
    dos: ['Use chrome textures', 'Use bright neon colors', 'Use futuristic shapes', 'Embrace 2000s tech nostalgia'],
    donts: ['Don\'t make it boring', 'Don\'t use muted colors', 'Don\'t stick to standard grids', 'Don\'t ignore the vibe'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S27"
    style_name: "Y2K Aesthetic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#D1D5DB"
      muted: "#9CA3AF"
    brand:
      primary: "#FF00FF"
      accent: "#00FFFF"
    chrome:
      silver: "#C0C0C0"
      highlight: "#E8E8E8"
    border:
      strong: "#FF00FF"
      subtle: "rgba(255,0,255,0.3)"
    state:
      success: "#00FF00"
      warning: "#FFFF00"
      error: "#FF0066"
    focus:
      ring: "#00FFFF"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 20
    pill: 9999
  border:
    width:
      hairline: 1
      chrome: 3
      strong: 4
  shadow:
    glow: "0 0 15px #FF00FF"
    chrome: "0 0 30px rgba(192,192,192,0.5)"
    neon: "0 0 20px #00FFFF"
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
      normal: 300
    easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  typography:
    font:
      sans:
        primary: "Righteous"
        fallback:
          - "sans-serif"
      mono:
        primary: "Space Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: 0.02 }
      h2: { size: 42, line: 50, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S28': {
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
    style_id: "S28"
    style_name: "Solarpunk"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FDFCF8"
      secondary: "#F0FDF4"
    text:
      primary: "#064E3B"
      secondary: "#047857"
      muted: "#10B981"
    brand:
      primary: "#10B981"
      accent: "#F59E0B"
    nature:
      leaf: "#22C55E"
      sun: "#FBBF24"
      sky: "#0EA5E9"
    border:
      strong: "#A7F3D0"
      subtle: "#D1FAE5"
    state:
      success: "#22C55E"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#10B981"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 24
    xl: 32
    organic: "60% 40% 50% 50% / 40% 60% 50% 50%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    soft: "0 4px 20px rgba(16,185,129,0.15)"
    sunlight: "0 8px 32px rgba(251,191,36,0.2)"
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
      normal: 600
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Quicksand"
        fallback:
          - "Merriweather Sans"
          - "sans-serif"
      display:
        primary: "Comfortaa"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 52, line: 64, weight: 700, tracking: 0 }
      h2: { size: 40, line: 50, weight: 600, tracking: 0 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S29': {
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
    style_id: "S29"
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
    luxury:
      gold: "#D4AF37"
      emerald: "#059669"
      navy: "#1E3A5F"
    border:
      strong: "#D4AF37"
      subtle: "rgba(212,175,55,0.3)"
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
      double: 6
  shadow:
    gold: "0 0 30px rgba(212,175,55,0.4)"
    hard: "8px 8px 0 rgba(0,0,0,0.3)"
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
      fast: 150
      normal: 300
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Josefin Sans"
        fallback:
          - "sans-serif"
      display:
        primary: "Playfair Display"
        fallback:
          - "serif"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: 0.05 }
      h2: { size: 42, line: 50, weight: 500, tracking: 0.03 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S30': {
    paletteStrategy: 'Safety yellow, black, concrete gray. Warning stripes.',
    typography: 'Stencil fonts, bold industrial sans-serif.',
    radiusPolicy: 'Chamfered corners or slightly rounded industrial.',
    shadowPolicy: 'Heavy drop shadows, utilitarian.',
    borderLanguage: 'Thick, dashed, or hazard stripes.',
    patterns: 'Caution tape, concrete texture, blueprints.',
    motion: 'Mechanical, clunky (in a good way).',
    dos: ['Use safety yellow', 'Use industrial textures', 'Use bold, readable fonts', 'Make it look functional'],
    donts: ['Don\'t use delicate serifs', 'Don\'t use pastel colors', 'Don\'t hide the structure', 'Don\'t make it too soft'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S30"
    style_name: "Industrial"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F3F4F6"
      secondary: "#E5E7EB"
    text:
      primary: "#111827"
      secondary: "#374151"
      muted: "#6B7280"
    brand:
      primary: "#FACC15"
      accent: "#000000"
    industrial:
      yellow: "#FACC15"
      black: "#000000"
      concrete: "#9CA3AF"
    border:
      strong: "#000000"
      subtle: "#6B7280"
      hazard: "#FACC15"
    state:
      success: "#22C55E"
      warning: "#FACC15"
      error: "#DC2626"
    focus:
      ring: "#FACC15"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    chamfer: "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))"
  border:
    width:
      hairline: 1
      medium: 2
      thick: 4
      stripe: 6
  shadow:
    heavy: "6px 6px 0 rgba(0,0,0,0.3)"
    industrial: "0 8px 24px rgba(0,0,0,0.2)"
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
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Chakra Petch"
        fallback:
          - "sans-serif"
      mono:
        primary: "Roboto Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: 0.02 }
      h2: { size: 42, line: 50, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
};
