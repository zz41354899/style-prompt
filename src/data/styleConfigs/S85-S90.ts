
import { StyleDNAConfig } from './index';

export const S85_S90_Configs: Record<string, StyleDNAConfig> = {
  // S85: Kids / Playful
  S85: {
    paletteStrategy: 'Primary colors (Red, Yellow, Blue), bright, high saturation.',
    typography: 'Nunito, Comic Neue, or rounded sans-serif.',
    radiusPolicy: 'Large, exaggerated rounded corners (24px-32px).',
    shadowPolicy: 'Hard distinct shadows, non-blurred.',
    borderLanguage: 'Thick black or colored outlines.',
    patterns: 'Doodles, squiggles, confetti.',
    motion: 'Bouncy, elastic, fun.',
    dos: ['Use bright colors', 'Big buttons', 'Playful icons', 'Simple language'],
    donts: ['Don\'t be serious', 'Don\'t use small text', 'Don\'t use sharp corners'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S85"
    style_name: "Kids Playful"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFF9C4"
      secondary: "#FFFDE7"
    text:
      primary: "#37474F"
      secondary: "#546E7A"
      muted: "#78909C"
    brand:
      primary: "#FF5252"
      accent: "#448AFF"
    border:
      strong: "#37474F"
      subtle: "rgba(55,71,79,0.3)"
    state:
      success: "#4CAF50"
      warning: "#FFC107"
      error: "#FF5252"
    focus:
      ring: "#448AFF"
  radius:
    none: 0
    sm: 16
    md: 24
    lg: 32
    full: 9999
  border:
    width:
      outline: 3
      medium: 4
      strong: 6
  shadow:
    hard: "4px 4px 0 rgba(0,0,0,0.2)"
    pop: "6px 6px 0 #37474F"
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
      fast: 200
      normal: 400
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "Comic Neue"
          - "sans-serif"
      display:
        primary: "Fredoka One"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 48, line: 60, weight: 800, tracking: 0 }
      h2: { size: 36, line: 48, weight: 700, tracking: 0 }
      h3: { size: 24, line: 34, weight: 700, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },

  // S86: Gamer / RGB
  S86: {
    paletteStrategy: 'Black background, neon RGB (Red, Green, Blue) accents.',
    typography: 'Orbitron, Rajdhani, or aggressive futuristic sans.',
    radiusPolicy: 'Sharp angles, cut corners.',
    shadowPolicy: 'Neon glows, colored drop shadows.',
    borderLanguage: 'glowing borders, tech lines.',
    patterns: 'Hexagons, circuit lines, carbon fiber.',
    motion: 'Fast, glitchy, high refresh rate feel.',
    dos: ['Use dark mode', 'RGB lighting', 'Aggressive shapes', 'High contrast'],
    donts: ['Don\'t be subtle', 'Don\'t use pastel', 'Don\'t look "corporate"'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S86"
    style_name: "Gamer RGB"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050505"
      secondary: "#0A0A0A"
    text:
      primary: "#FFFFFF"
      secondary: "#B0B0B0"
      muted: "#666666"
    brand:
      primary: "#FF0055"
      accent: "#00FFDD"
    rgb:
      red: "#FF0055"
      green: "#00FF66"
      blue: "#00AAFF"
    border:
      strong: "#FF0055"
      subtle: "rgba(255,0,85,0.3)"
    state:
      success: "#00FF66"
      warning: "#FFAA00"
      error: "#FF0055"
    focus:
      ring: "#00FFDD"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    cut: "polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)"
  border:
    width:
      glow: 1
      medium: 2
      strong: 3
  shadow:
    neon_red: "0 0 20px rgba(255,0,85,0.5)"
    neon_cyan: "0 0 20px rgba(0,255,221,0.5)"
    rgb: "0 0 30px rgba(255,0,85,0.3), 0 0 60px rgba(0,255,221,0.2)"
  layout:
    container:
      content: 1200
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
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Orbitron"
        fallback:
          - "Rajdhani"
          - "sans-serif"
      mono:
        primary: "Share Tech Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 56, line: 60, weight: 700, tracking: 0.05 }
      h2: { size: 42, line: 48, weight: 600, tracking: 0.03 }
      h3: { size: 28, line: 34, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 128]
\`\`\``,
  },

  // S87: Luxury Gold
  S87: {
    paletteStrategy: 'Black, Gold, Rich dark textures.',
    typography: 'Playfair Display, Cinzel, or elegant serif.',
    radiusPolicy: 'Sharp or very slightly rounded (1px-2px).',
    shadowPolicy: 'Subtle ambient glows, gold reflections.',
    borderLanguage: 'Thin gold framing lines.',
    patterns: 'Marble, damask, subtle noise.',
    motion: 'Slow, elegant, fade-ins.',
    dos: ['Use gold', 'Serif fonts', 'Minimal layout', 'High quality imagery'],
    donts: ['Don\'t be cheap', 'Don\'t clutter', 'Don\'t use bright primary colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S87"
    style_name: "Luxury Gold"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0F0F0F"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#D4D4D4"
      muted: "#888888"
    brand:
      primary: "#D4AF37"
      accent: "#F4E08B"
    border:
      strong: "#D4AF37"
      subtle: "rgba(212,175,55,0.3)"
    state:
      success: "#4CAF50"
      warning: "#D4AF37"
      error: "#C62828"
    focus:
      ring: "#D4AF37"
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
    gold: "0 0 40px rgba(212,175,55,0.2)"
    deep: "0 12px 40px rgba(0,0,0,0.5)"
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
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Playfair Display"
        fallback:
          - "Georgia"
          - "serif"
      display:
        primary: "Cinzel"
        fallback:
          - "serif"
    scale:
      h1: { size: 56, line: 68, weight: 500, tracking: 0.04 }
      h2: { size: 42, line: 52, weight: 500, tracking: 0.02 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },

  // S88: Luxury Silver
  S88: {
    paletteStrategy: 'White, Silver, Platinum, Cool Greys.',
    typography: 'Montserrat, Lato (Ultralight weights).',
    radiusPolicy: 'Clean sharp edges.',
    shadowPolicy: 'Cool soft shadows, metallic sheen.',
    borderLanguage: 'Silver foil lines.',
    patterns: 'Subtle gradients, linen texture.',
    motion: 'Smooth, fluid, polished.',
    dos: ['Look expensive', 'Use whitespace', 'Cool tones', 'Silver gradients'],
    donts: ['Don\'t use gold', 'Don\'t be warm', 'Don\'t be heavy'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S88"
    style_name: "Luxury Silver"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFAFA"
      secondary: "#FFFFFF"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#888888"
    brand:
      primary: "#C0C0C0"
      accent: "#E0E0E0"
    border:
      strong: "#B0B0B0"
      subtle: "rgba(176,176,176,0.3)"
    state:
      success: "#43A047"
      warning: "#FB8C00"
      error: "#E53935"
    focus:
      ring: "#9E9E9E"
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
    silver: "0 4px 20px rgba(0,0,0,0.08)"
    metallic: "0 2px 8px rgba(192,192,192,0.3)"
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
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Montserrat"
        fallback:
          - "Lato"
          - "sans-serif"
      display:
        primary: "Cormorant Garamond"
        fallback:
          - "serif"
    scale:
      h1: { size: 52, line: 64, weight: 300, tracking: 0.04 }
      h2: { size: 40, line: 50, weight: 300, tracking: 0.02 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 300, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },

  // S89: Minimalist Serif (Kinfolk)
  S89: {
    paletteStrategy: 'Beige, Cream, Soft Brown, Charcoal.',
    typography: 'Beautiful serif headings, clean sans body.',
    radiusPolicy: 'Zero radius or very slight.',
    shadowPolicy: 'None or very subtle.',
    borderLanguage: 'None, relies on spacing.',
    patterns: 'Botanic photography, paper texture.',
    motion: 'Slow aesthetic fades.',
    dos: ['Use big photography', 'Serif titles', 'Lots of breathing room', 'Editorial'],
    donts: ['Don\'t clutter', 'Don\'t use bright colors', 'Don\'t be techy'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S89"
    style_name: "Minimalist Serif"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F9F7F2"
      secondary: "#FFFFFF"
    text:
      primary: "#2C2825"
      secondary: "#4A4036"
      muted: "#8D8278"
    brand:
      primary: "#4A4036"
      accent: "#8D8278"
    border:
      strong: "#D4CFC7"
      subtle: "#E8E4DE"
    state:
      success: "#6D8B74"
      warning: "#C99E5F"
      error: "#B85C5C"
    focus:
      ring: "#4A4036"
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
    subtle: "0 2px 8px rgba(0,0,0,0.04)"
    none: "none"
  layout:
    container:
      content: 960
      wide: 1080
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 20
      desktop: 32
  motion:
    duration:
      fast: 400
      normal: 800
    easing: "ease-out"
  typography:
    font:
      serif:
        primary: "Cormorant Garamond"
        fallback:
          - "Georgia"
          - "serif"
      sans:
        primary: "Lato"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 68, weight: 400, tracking: -0.01 }
      h2: { size: 42, line: 54, weight: 400, tracking: 0 }
      h3: { size: 28, line: 38, weight: 500, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [72, 96]
      desktop: [120, 160]
\`\`\``,
  },

  // S90: Brutalist Color
  S90: {
    paletteStrategy: 'Clashing colors (Pink/Green, Blue/Orange), high saturation.',
    typography: 'Bold grotesque sans, massive sizes.',
    radiusPolicy: 'Zero radius.',
    shadowPolicy: 'Hard solid black shadows.',
    borderLanguage: 'Thick black borders (3px+).',
    patterns: 'Grid lines, raw HTML elements.',
    motion: 'Jerky, instant, hover effects.',
    dos: ['Be bold', 'Clash colors', 'Use borders', 'Anti-design'],
    donts: ['Don\'t be subtle', 'Don\'t use gradients', 'Don\'t be "pretty"'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S90"
    style_name: "Brutalist Color"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFEB3B"
      secondary: "#FFF9C4"
    text:
      primary: "#000000"
      secondary: "#212121"
      muted: "#424242"
    brand:
      primary: "#000000"
      accent: "#FF00FF"
    clash:
      pink: "#FF00FF"
      green: "#00FF00"
      blue: "#0000FF"
      orange: "#FF6600"
    border:
      strong: "#000000"
      subtle: "#000000"
    state:
      success: "#00FF00"
      warning: "#FF6600"
      error: "#FF0000"
    focus:
      ring: "#0000FF"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      thin: 2
      medium: 4
      thick: 6
  shadow:
    hard: "6px 6px 0 #000000"
    brutal: "8px 8px 0 #000000"
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
      fast: 0
      normal: 100
    easing: "step-end"
  typography:
    font:
      sans:
        primary: "Archivo Black"
        fallback:
          - "Impact"
          - "sans-serif"
      body:
        primary: "Space Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 72, line: 76, weight: 900, tracking: -0.02 }
      h2: { size: 56, line: 60, weight: 900, tracking: -0.01 }
      h3: { size: 36, line: 42, weight: 800, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },
};
