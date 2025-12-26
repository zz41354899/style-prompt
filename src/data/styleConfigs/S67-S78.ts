import type { StyleDNAConfig } from './types';

export const S67_S72_Configs: Record<string, StyleDNAConfig> = {
  'S67': {
    paletteStrategy: 'Black, cyan, electric blue, HUD green.',
    typography: 'Monospace or futuristic sans.',
    radiusPolicy: 'Angled, chamfered or straight.',
    shadowPolicy: 'Glows, no realistic shadows.',
    borderLanguage: 'Targeting reticles, brackets.',
    patterns: 'Hexgrids, circuit lines.',
    motion: 'Glitches, scanning, instant snappy.',
    dos: ['Use HUD elements', 'Scan lines', 'Data density', 'Blue/Green glows'],
    donts: ['Don\'t be organic', 'Don\'t be slow', 'Don\'t use serif'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S67"
    style_name: "Cybernetic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0d1117"
      secondary: "#161b22"
    text:
      primary: "#00ff41"
      secondary: "#58a6ff"
      muted: "#8b949e"
    brand:
      primary: "#00ff41"
      accent: "#00d4ff"
    border:
      strong: "#00ff41"
      subtle: "rgba(0,255,65,0.2)"
    state:
      success: "#00ff41"
      warning: "#ff3d00"
      error: "#ff0055"
    focus:
      ring: "#00ff41"
  radius:
    none: 0
    sm: 0
    md: 2
    lg: 4
    chamfer: "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 20px rgba(0,255,65,0.4)"
    hud: "0 0 40px rgba(0,212,255,0.3)"
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
      fast: 100
      normal: 200
    easing: "steps(4)"
  typography:
    font:
      sans:
        primary: "Share Tech Mono"
        fallback:
          - "Fira Code"
          - "monospace"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 52, weight: 400, tracking: 0.05 }
      h2: { size: 36, line: 40, weight: 400, tracking: 0.03 }
      h3: { size: 24, line: 28, weight: 400, tracking: 0.02 }
      body: { size: 14, line: 22, weight: 400, tracking: 0.01 }
      small: { size: 12, line: 18, weight: 400, tracking: 0.02 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 112]
\`\`\``,
  },
  'S68': {
    paletteStrategy: 'Brass, copper, dark wood, rich velvet red.',
    typography: 'Victorian ornate serif.',
    radiusPolicy: 'Ornate scrolls and mechanical gears.',
    shadowPolicy: 'Deep moody shadows.',
    borderLanguage: 'Pipes, gears, rivets.',
    patterns: 'Damask, smoke, gear teeth.',
    motion: 'Mechanical ticking, rotating gears.',
    dos: ['Use textures', 'Gears/Cogs', 'Warm metallic', 'Victorian flair'],
    donts: ['Don\'t use neon', 'Don\'t be clean', 'Don\'t use plastic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S68"
    style_name: "Steampunk"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#2b2118"
      secondary: "#3d2e21"
    text:
      primary: "#F5E6D3"
      secondary: "#D4C4B0"
      muted: "#A89078"
    brand:
      primary: "#c19a6b"
      accent: "#b87333"
    border:
      strong: "#8B7355"
      subtle: "rgba(193,154,107,0.3)"
    state:
      success: "#7CB342"
      warning: "#FFB300"
      error: "#C62828"
    focus:
      ring: "#c19a6b"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    gear: "50%"
  border:
    width:
      hairline: 1
      rivet: 4
      pipe: 6
  shadow:
    deep: "0 8px 32px rgba(0,0,0,0.5)"
    brass: "inset 0 2px 4px rgba(193,154,107,0.3)"
  layout:
    container:
      content: 1100
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
      fast: 300
      normal: 600
    easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  typography:
    font:
      sans:
        primary: "Cinzel"
        fallback:
          - "Times New Roman"
          - "serif"
      display:
        primary: "IM Fell English"
        fallback:
          - "serif"
    scale:
      h1: { size: 52, line: 64, weight: 700, tracking: 0.02 }
      h2: { size: 40, line: 50, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 128]
\`\`\``,
  },
  'S69': {
    paletteStrategy: 'Deep purple, bioluminescent blue/pink.',
    typography: 'Alien hieroglyphs or flowy curves.',
    radiusPolicy: 'Biological curves, slime.',
    shadowPolicy: 'Internal glow.',
    borderLanguage: 'Membrane-like.',
    patterns: 'Cells, veins, nebula.',
    motion: 'Pulsing, breathing.',
    dos: ['Look organic', 'Alien flora', 'Mysterious lighting', 'Glow'],
    donts: ['Don\'t stick to grid', 'Don\'t use earth tones', 'Don\'t be geometric'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S69"
    style_name: "Alien"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1a0b2e"
      secondary: "#2d1b4e"
    text:
      primary: "#E0E0FF"
      secondary: "#B388FF"
      muted: "#7C4DFF"
    brand:
      primary: "#d500f9"
      accent: "#76ff03"
    border:
      strong: "#d500f9"
      subtle: "rgba(213,0,249,0.3)"
    state:
      success: "#76ff03"
      warning: "#FFAB00"
      error: "#FF1744"
    focus:
      ring: "#d500f9"
  radius:
    none: 0
    sm: 16
    md: 32
    lg: 9999
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%"
  border:
    width:
      hairline: 1
      membrane: 2
      strong: 4
  shadow:
    biolum: "0 0 40px rgba(213,0,249,0.5)"
    inner: "inset 0 0 30px rgba(118,255,3,0.2)"
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
      fast: 400
      normal: 800
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Orbitron"
        fallback:
          - "sans-serif"
      display:
        primary: "Audiowide"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: 0.04 }
      h2: { size: 42, line: 50, weight: 600, tracking: 0.02 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S70': {
    paletteStrategy: 'Parchment beige, ink black, magical gold/purple.',
    typography: 'Calligraphy or fantasy serif.',
    radiusPolicy: 'Hand drawn scrolls.',
    shadowPolicy: 'Candlelight flickering.',
    borderLanguage: 'Runes, worn paper edges.',
    patterns: 'Magic circles, stars.',
    motion: 'Sparkles, floating dust, writing.',
    dos: ['Use parchment texture', 'Magical effects', 'Old fonts', 'Runes'],
    donts: ['Don\'t look modern', 'Don\'t use sans-serif', 'Don\'t be sterile'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S70"
    style_name: "Fantasy"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#f5e6ca"
      secondary: "#EBD9B4"
    text:
      primary: "#2C1810"
      secondary: "#4A3728"
      muted: "#7D6B5D"
    brand:
      primary: "#9c27b0"
      accent: "#ffd700"
    border:
      strong: "#8D6E63"
      subtle: "rgba(141,110,99,0.4)"
    state:
      success: "#4CAF50"
      warning: "#FF9800"
      error: "#C62828"
    focus:
      ring: "#9c27b0"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    scroll: "40% 60% 60% 40% / 60% 40% 60% 40%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    parchment: "0 4px 16px rgba(0,0,0,0.2)"
    candle: "0 0 40px rgba(255,215,0,0.3)"
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
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Cinzel Decorative"
        fallback:
          - "serif"
      display:
        primary: "MedievalSharp"
        fallback:
          - "serif"
    scale:
      h1: { size: 52, line: 64, weight: 700, tracking: 0.02 }
      h2: { size: 40, line: 50, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S71': {
    paletteStrategy: 'Rust orange, olive green, dirt brown, slate grey.',
    typography: 'Stencil or distressed type.',
    radiusPolicy: 'Broken, uneven.',
    shadowPolicy: 'Gritty, dirty.',
    borderLanguage: 'Rusted metal, hazard tape.',
    patterns: 'Scratches, grime, hazard stripes.',
    motion: 'Jittery, failing tech.',
    dos: ['Look dirty', 'Survival theme', 'Distressed textures', 'Grunge'],
    donts: ['Don\'t be clean', 'Don\'t be perfect', 'Don\'t use bright primary colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S71"
    style_name: "Wasteland"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#3e2723"
      secondary: "#4e342e"
    text:
      primary: "#EFEBE9"
      secondary: "#D7CCC8"
      muted: "#A1887F"
    brand:
      primary: "#bf360c"
      accent: "#ffea00"
    border:
      strong: "#795548"
      subtle: "rgba(121,85,72,0.4)"
    state:
      success: "#7CB342"
      warning: "#ffea00"
      error: "#bf360c"
    focus:
      ring: "#ffea00"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    rough: "2px 8px 4px 6px"
  border:
    width:
      hairline: 1
      hazard: 4
      strong: 6
  shadow:
    grit: "2px 2px 0 rgba(0,0,0,0.3)"
    deep: "0 8px 24px rgba(0,0,0,0.5)"
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
    easing: "steps(3)"
  typography:
    font:
      sans:
        primary: "Teko"
        fallback:
          - "Impact"
          - "sans-serif"
      display:
        primary: "Black Ops One"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 60, weight: 700, tracking: 0.04 }
      h2: { size: 42, line: 46, weight: 600, tracking: 0.02 }
      h3: { size: 28, line: 34, weight: 500, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S72': {
    paletteStrategy: 'Stark white, black panels, glowing blue/orange indicators.',
    typography: 'Clean futuristic sans (Eurostile).',
    radiusPolicy: 'Pill shapes and perfect circles.',
    shadowPolicy: 'Soft clean ambient occlusion.',
    borderLanguage: 'Panel lines.',
    patterns: 'Grid lines, technical readouts.',
    motion: 'Smooth sliding panels, FUI.',
    dos: ['Clean sci-fi', 'Panel gaps', 'Functional UI', 'Space station'],
    donts: ['Don\'t be dirty', 'Don\'t be chaotic', 'Don\'t use serif'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S72"
    style_name: "Starship"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#eceff1"
      secondary: "#FFFFFF"
    text:
      primary: "#263238"
      secondary: "#455A64"
      muted: "#78909C"
    brand:
      primary: "#00b0ff"
      accent: "#FF6D00"
    border:
      strong: "#B0BEC5"
      subtle: "#CFD8DC"
    state:
      success: "#00E676"
      warning: "#FF6D00"
      error: "#FF1744"
    focus:
      ring: "#00b0ff"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    full: 9999
  border:
    width:
      panel: 1
      medium: 2
      strong: 3
  shadow:
    ambient: "0 2px 8px rgba(0,0,0,0.08)"
    panel: "0 4px 16px rgba(0,0,0,0.1)"
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
      fast: 200
      normal: 400
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Rajdhani"
        fallback:
          - "Roboto"
          - "sans-serif"
      mono:
        primary: "Space Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 52, line: 60, weight: 600, tracking: 0.02 }
      h2: { size: 40, line: 48, weight: 500, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 128]
\`\`\``,
  },
};

export const S73_S78_Configs: Record<string, StyleDNAConfig> = {
  'S73': {
    paletteStrategy: 'Pastel dabs, vibrant light, mixing colors.',
    typography: 'Artistic brush font or elegant serif.',
    radiusPolicy: 'Paint daubs.',
    shadowPolicy: 'Painted shadows.',
    borderLanguage: 'Brush strokes.',
    patterns: 'Canvas texture, paint strokes.',
    motion: 'Fading in, painting on.',
    dos: ['Look painted', 'Light and airy', 'Visible strokes', 'Monet vibes'],
    donts: ['Don\'t be sharp', 'Don\'t be digital', 'Don\'t use black'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S73"
    style_name: "Impressionist"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#e1f5fe"
      secondary: "#B3E5FC"
    text:
      primary: "#1565C0"
      secondary: "#1976D2"
      muted: "#64B5F6"
    brand:
      primary: "#81d4fa"
      accent: "#fff59d"
    border:
      strong: "#4FC3F7"
      subtle: "rgba(79,195,247,0.4)"
    state:
      success: "#A5D6A7"
      warning: "#FFE082"
      error: "#EF9A9A"
    focus:
      ring: "#81d4fa"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 32
    paint: "40% 60% 55% 45% / 55% 45% 55% 45%"
  border:
    width:
      stroke: 2
      medium: 4
      strong: 6
  shadow:
    soft: "0 8px 32px rgba(129,212,250,0.3)"
    paint: "4px 4px 0 rgba(255,245,157,0.5)"
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
      fast: 400
      normal: 800
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Dancing Script"
        fallback:
          - "cursive"
      body:
        primary: "Lora"
        fallback:
          - "serif"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: 0 }
      h2: { size: 42, line: 54, weight: 600, tracking: 0 }
      h3: { size: 28, line: 38, weight: 500, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 128]
\`\`\``,
  },
  'S74': {
    paletteStrategy: 'Muted earth tones, browns, greys, ochre.',
    typography: 'Blocky sans serif.',
    radiusPolicy: 'Sharp angles, fragmented geometry.',
    shadowPolicy: 'Hard planes.',
    borderLanguage: 'Facet lines.',
    patterns: 'Triangles, shattered planes.',
    motion: 'Shift and reassemble.',
    dos: ['Geometric abstraction', 'Multiple perspectives', 'Picasso vibes', 'Fragment'],
    donts: ['Don\'t be realistic', 'Don\'t be smooth', 'Don\'t be curvy'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S74"
    style_name: "Cubist"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#d7ccc8"
      secondary: "#EFEBE9"
    text:
      primary: "#3E2723"
      secondary: "#5D4037"
      muted: "#8D6E63"
    brand:
      primary: "#5d4037"
      accent: "#e65100"
    border:
      strong: "#795548"
      subtle: "rgba(121,85,72,0.3)"
    state:
      success: "#689F38"
      warning: "#e65100"
      error: "#C62828"
    focus:
      ring: "#5d4037"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      facet: 2
      medium: 3
      strong: 5
  shadow:
    hard: "4px 4px 0 rgba(0,0,0,0.2)"
    plane: "8px 8px 0 rgba(93,64,55,0.3)"
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
      normal: 400
    easing: "cubic-bezier(0.6, 0, 0.4, 1)"
  typography:
    font:
      sans:
        primary: "Bebas Neue"
        fallback:
          - "Impact"
          - "sans-serif"
      body:
        primary: "Roboto"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 64, line: 68, weight: 400, tracking: 0.05 }
      h2: { size: 48, line: 52, weight: 400, tracking: 0.03 }
      h3: { size: 32, line: 38, weight: 400, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S75': {
    paletteStrategy: 'Dreamlike gradients, odd juxtapositions.',
    typography: 'Surreal distorted type.',
    radiusPolicy: 'Melting shapes.',
    shadowPolicy: 'Long impossible shadows.',
    borderLanguage: 'Liquid edges.',
    patterns: 'Clouds, melting clocks, eyes.',
    motion: 'Morphing, floating.',
    dos: ['Be weird', 'Dali vibes', 'Dream logic', 'Unexpected'],
    donts: ['Don\'t be boring', 'Don\'t be standard', 'Don\'t make sense'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S75"
    style_name: "Surrealist"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#f3e5f5"
      secondary: "#E1BEE7"
    text:
      primary: "#4A148C"
      secondary: "#6A1B9A"
      muted: "#9C27B0"
    brand:
      primary: "#7b1fa2"
      accent: "#29b6f6"
    border:
      strong: "#AB47BC"
      subtle: "rgba(171,71,188,0.3)"
    state:
      success: "#66BB6A"
      warning: "#FFA726"
      error: "#EF5350"
    focus:
      ring: "#7b1fa2"
  radius:
    none: 0
    sm: 16
    md: 32
    lg: 48
    melt: "60% 40% 70% 30% / 30% 60% 40% 70%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    dream: "20px 30px 40px rgba(123,31,162,0.3)"
    float: "0 20px 60px rgba(0,0,0,0.2)"
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
      fast: 600
      normal: 1200
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Fredoka One"
        fallback:
          - "sans-serif"
      display:
        primary: "Grandstander"
        fallback:
          - "cursive"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: 0 }
      h2: { size: 42, line: 52, weight: 600, tracking: 0 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S76': {
    paletteStrategy: 'Sepia ink, parchment, faded red chalk.',
    typography: 'Humanist serif or handwriting.',
    radiusPolicy: 'Hand drawn circles.',
    shadowPolicy: 'Hatching lines.',
    borderLanguage: 'Ink lines.',
    patterns: 'Anatomical sketches, grid lines.',
    motion: 'Drawing in, ink heavy.',
    dos: ['Da Vinci vibes', 'Sketchy', 'Intellectual', 'Historical'],
    donts: ['Don\'t use modern colors', 'Don\'t be digital', 'Don\'t be shiny'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S76"
    style_name: "Renaissance"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#fff8e1"
      secondary: "#FFECB3"
    text:
      primary: "#3e2723"
      secondary: "#5D4037"
      muted: "#8D6E63"
    brand:
      primary: "#3e2723"
      accent: "#b71c1c"
    border:
      strong: "#6D4C41"
      subtle: "rgba(109,76,65,0.3)"
    state:
      success: "#558B2F"
      warning: "#FF8F00"
      error: "#b71c1c"
    focus:
      ring: "#3e2723"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      ink: 1
      medium: 2
      strong: 3
  shadow:
    parchment: "2px 2px 4px rgba(0,0,0,0.15)"
    ink: "1px 1px 2px rgba(62,39,35,0.3)"
  layout:
    container:
      content: 1000
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
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "EB Garamond"
        fallback:
          - "Georgia"
          - "serif"
      display:
        primary: "Noto Serif Display"
        fallback:
          - "serif"
    scale:
      h1: { size: 48, line: 60, weight: 500, tracking: 0.01 }
      h2: { size: 36, line: 46, weight: 500, tracking: 0 }
      h3: { size: 24, line: 32, weight: 500, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S77': {
    paletteStrategy: 'Indigo, prussian blue, salmon pink, washi white.',
    typography: 'Brush calligraphy.',
    radiusPolicy: 'Soft curves.',
    shadowPolicy: 'Flat layers.',
    borderLanguage: 'Black outlines.',
    patterns: 'Waves (Seigaiha), clouds.',
    motion: 'Slide ins, reveal.',
    dos: ['Japanese aesthetic', 'Flat colors', 'Woodblock texture', 'Nature'],
    donts: ['Don\'t use gradients', 'Don\'t be 3D', 'Don\'t be chaotic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S77"
    style_name: "Ukiyo-e"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#eceff1"
      secondary: "#FAFAFA"
    text:
      primary: "#1a237e"
      secondary: "#283593"
      muted: "#5C6BC0"
    brand:
      primary: "#1a237e"
      accent: "#ff8a65"
    border:
      strong: "#1a237e"
      subtle: "rgba(26,35,126,0.3)"
    state:
      success: "#43A047"
      warning: "#FB8C00"
      error: "#E53935"
    focus:
      ring: "#1a237e"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      outline: 2
      medium: 3
      strong: 5
  shadow:
    flat: "none"
    subtle: "2px 2px 0 rgba(26,35,126,0.1)"
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
      normal: 400
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Noto Serif JP"
        fallback:
          - "serif"
      display:
        primary: "Shippori Mincho"
        fallback:
          - "serif"
    scale:
      h1: { size: 48, line: 64, weight: 500, tracking: 0.02 }
      h2: { size: 36, line: 50, weight: 500, tracking: 0.01 }
      h3: { size: 24, line: 34, weight: 500, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S78': {
    paletteStrategy: 'Dark stone greys, deep reds, black.',
    typography: 'Blackletter / Old English.',
    radiusPolicy: 'Pointed arches (Ogee).',
    shadowPolicy: 'Deep castle shadows.',
    borderLanguage: 'Stone traceries.',
    patterns: 'Architectural details, quatrefoils.',
    motion: 'Slow, solemn.',
    dos: ['Medieval', 'Dark mode', 'Ornate', 'Verticality'],
    donts: ['Don\'t be cute', 'Don\'t be bright', 'Don\'t be modern'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S78"
    style_name: "Gothic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#212121"
      secondary: "#1A1A1A"
    text:
      primary: "#E0E0E0"
      secondary: "#BDBDBD"
      muted: "#757575"
    brand:
      primary: "#b71c1c"
      accent: "#757575"
    border:
      strong: "#424242"
      subtle: "rgba(66,66,66,0.5)"
    state:
      success: "#558B2F"
      warning: "#E65100"
      error: "#b71c1c"
    focus:
      ring: "#b71c1c"
  radius:
    none: 0
    sm: 0
    md: 4
    lg: 8
    arch: "50% 50% 0 0"
  border:
    width:
      stone: 2
      medium: 4
      strong: 6
  shadow:
    deep: "0 12px 40px rgba(0,0,0,0.6)"
    stone: "inset 0 4px 8px rgba(0,0,0,0.4)"
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
      fast: 400
      normal: 800
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "UnifrakturMaguntia"
        fallback:
          - "serif"
      body:
        primary: "Cinzel"
        fallback:
          - "serif"
    scale:
      h1: { size: 56, line: 68, weight: 400, tracking: 0.03 }
      h2: { size: 42, line: 52, weight: 400, tracking: 0.02 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
};
