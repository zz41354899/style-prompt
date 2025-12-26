import type { StyleDNAConfig } from './types';

export const S49_S54_Configs: Record<string, StyleDNAConfig> = {
  'S49': {
    paletteStrategy: 'Washed out pastels, translucent layers, paper textures.',
    typography: 'Artistic Serif or handwritten Script.',
    radiusPolicy: 'Organic, bleeding edges.',
    shadowPolicy: 'Soft, diffuse spreading shadows (wet look).',
    borderLanguage: 'None or rough irregular pencil lines.',
    patterns: 'Paper grain, paint splashes, wet edges.',
    motion: 'Flowing, seeping, slow fade-ins.',
    dos: ['Use texture', 'Layer transparencies', 'Be subtle', 'Use natural colors'],
    donts: ['Don\'t use sharp vectors', 'Don\'t use harsh blacks', 'Don\'t be rigid', 'Don\'t use solid fills'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S49"
    style_name: "Watercolor"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFAF0"
      secondary: "#F5F5DC"
      paper: "#F5F5DC"
    text:
      primary: "#4A4A4A"
      secondary: "#6A6A6A"
      muted: "#8A8A8A"
    brand:
      primary: "rgba(65, 105, 225, 0.7)"
      accent: "rgba(255, 182, 193, 0.8)"
    paint:
      blue: "rgba(65, 105, 225, 0.5)"
      pink: "rgba(255, 182, 193, 0.6)"
      green: "rgba(144, 238, 144, 0.4)"
      yellow: "rgba(255, 255, 150, 0.5)"
    border:
      strong: "rgba(74,74,74,0.3)"
      subtle: "rgba(74,74,74,0.1)"
    state:
      success: "rgba(144, 238, 144, 0.7)"
      warning: "rgba(255, 200, 100, 0.7)"
      error: "rgba(255, 100, 100, 0.7)"
    focus:
      ring: "rgba(65, 105, 225, 0.5)"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 32
    organic: "30% 70% 70% 30% / 30% 30% 70% 70%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    wet: "0 8px 32px rgba(100,100,100,0.15)"
    soft: "0 4px 16px rgba(0,0,0,0.08)"
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
      fast: 500
      normal: 1000
    easing: "ease-in-out"
  typography:
    font:
      serif:
        primary: "Amatic SC"
        fallback:
          - "cursive"
      body:
        primary: "Lato"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: 0.02 }
      h2: { size: 42, line: 54, weight: 600, tracking: 0.01 }
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
  'S50': {
    paletteStrategy: 'Mixed media colors, newsprint greys, bright cutouts.',
    typography: 'Ransom note style, mixed fonts.',
    radiusPolicy: 'Rough cut edges (scissors).',
    shadowPolicy: 'Hard drop shadows to suggest layered paper.',
    borderLanguage: 'White paper borders, torn edges.',
    patterns: 'Halftones, ripped paper, tape textures.',
    motion: 'Stop motion, jerky movements.',
    dos: ['Mix retro photos', 'Use tape textures', 'Overlapping elements', 'Look handmade'],
    donts: ['Don\'t align perfectly', 'Don\'t be clean', 'Don\'t use flat digital colors', 'Don\'t use gradients'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S50"
    style_name: "Collage"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#EAEAEA"
      secondary: "#F5F5F5"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#7A7A7A"
    brand:
      primary: "#D32F2F"
      accent: "#FBC02D"
    accent:
      red: "#D32F2F"
      yellow: "#FBC02D"
      tape: "rgba(255, 255, 255, 0.6)"
    border:
      strong: "#1A1A1A"
      subtle: "#AAAAAA"
    state:
      success: "#388E3C"
      warning: "#FBC02D"
      error: "#D32F2F"
    focus:
      ring: "#1A1A1A"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    rough: 2
  border:
    width:
      paper: 2
      medium: 3
      strong: 4
  shadow:
    paper: "4px 4px 0 rgba(0,0,0,0.2)"
    stack: "6px 6px 0 rgba(0,0,0,0.25)"
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
      display:
        primary: "Abril Fatface"
        fallback:
          - "serif"
      body:
        primary: "Permanent Marker"
        fallback:
          - "cursive"
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: 0 }
      h2: { size: 40, line: 48, weight: 400, tracking: 0 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },
  'S51': {
    paletteStrategy: 'Black ink on white/cream paper. Minimal color accents.',
    typography: 'Handwritten, sketchy fonts.',
    radiusPolicy: 'Wobbly hand-drawn circles and boxes.',
    shadowPolicy: 'Hatched shading lines.',
    borderLanguage: 'Sketchy, uneven stroke widths.',
    patterns: 'Doodles, scribbles, cross-hatching.',
    motion: 'Drawing animations, wiggle effect.',
    dos: ['Use subtle wobbly lines', 'Look like a sketchbook', 'Keep it simple', 'Use negative space'],
    donts: ['Don\'t use straight vector lines', 'Don\'t perfect the shapes', 'Don\'t overuse color', 'Don\'t use digital effects'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S51"
    style_name: "Hand Drawn"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FDFBF7"
    text:
      primary: "#2C3E50"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#2C3E50"
      accent: "#E74C3C"
    ink:
      primary: "#2C3E50"
      accent: "#E74C3C"
      blue: "#3B82F6"
    border:
      strong: "#2C3E50"
      subtle: "rgba(44,62,80,0.3)"
    state:
      success: "#48BB78"
      warning: "#ECC94B"
      error: "#E74C3C"
    focus:
      ring: "#2C3E50"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    sketch: "255px 15px 225px 15px / 15px 225px 15px 255px"
  border:
    width:
      stroke: 2
      medium: 3
      strong: 4
  shadow:
    sketch: "2px 2px 0 rgba(44,62,80,0.1)"
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
        primary: "Patrick Hand"
        fallback:
          - "Caveat"
          - "cursive"
      display:
        primary: "Kalam"
        fallback:
          - "cursive"
    scale:
      h1: { size: 52, line: 64, weight: 400, tracking: 0 }
      h2: { size: 40, line: 52, weight: 400, tracking: 0 }
      h3: { size: 28, line: 38, weight: 400, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0 }
      small: { size: 16, line: 26, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S52': {
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
    style_id: "S52"
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
      muted: "#666666"
    brand:
      primary: "#EC008C"
      accent: "#00ADEF"
    accent:
      cyan: "#00ADEF"
      magenta: "#EC008C"
      yellow: "#FFF200"
      black: "#000000"
    border:
      strong: "#000000"
      subtle: "#333333"
    state:
      success: "#00FF00"
      warning: "#FFF200"
      error: "#FF0000"
    focus:
      ring: "#00ADEF"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  border:
    width:
      outline: 4
      medium: 6
      strong: 8
  shadow:
    halftone: "8px 8px 0 #000"
    pop: "12px 12px 0 #000"
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
    easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  typography:
    font:
      sans:
        primary: "Bangers"
        fallback:
          - "Impact"
          - "sans-serif"
      body:
        primary: "Comic Neue"
        fallback:
          - "Comic Sans MS"
          - "cursive"
    scale:
      h1: { size: 64, line: 68, weight: 400, tracking: 0.02 }
      h2: { size: 48, line: 52, weight: 400, tracking: 0.01 }
      h3: { size: 32, line: 38, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S53': {
    paletteStrategy: 'Neon sprays on dark concrete/brick walls.',
    typography: 'Graffiti tags, bubble letters.',
    radiusPolicy: 'None or sprayed soft edges.',
    shadowPolicy: 'Spray glow or drip shadows.',
    borderLanguage: 'Spray paint outlines.',
    patterns: 'Brick walls, paint drips, splatters.',
    motion: 'Spray reveal, dripping paint.',
    dos: ['Use street art vibes', 'Use vibrant neon', 'Look urban', 'Be rebellious'],
    donts: ['Don\'t use corporate fonts', 'Don\'t be clean', 'Don\'t use white backgrounds', 'Don\'t be orderly'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S53"
    style_name: "Graffiti"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1A1A1A"
      secondary: "#333333"
    text:
      primary: "#FFFFFF"
      secondary: "#E0E0E0"
      muted: "#999999"
    brand:
      primary: "#39FF14"
      accent: "#FF00FF"
    spray:
      green: "#39FF14"
      pink: "#FF00FF"
      cyan: "#00FFFF"
      yellow: "#FFFF00"
    border:
      strong: "#39FF14"
      subtle: "rgba(57,255,20,0.3)"
    state:
      success: "#39FF14"
      warning: "#FFFF00"
      error: "#FF0040"
    focus:
      ring: "#39FF14"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  border:
    width:
      spray: 3
      medium: 4
      strong: 6
  shadow:
    spray: "0 0 20px rgba(57,255,20,0.5)"
    drip: "0 8px 0 rgba(0,0,0,0.3)"
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
        primary: "Creepster"
        fallback:
          - "Permanent Marker"
          - "cursive"
      display:
        primary: "Bungee Shade"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 400, tracking: 0.03 }
      h2: { size: 48, line: 56, weight: 400, tracking: 0.02 }
      h3: { size: 32, line: 40, weight: 400, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S54': {
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
    style_id: "S54"
    style_name: "Art Nouveau"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5DC"
      secondary: "#EADDCA"
    text:
      primary: "#3D3D3D"
      secondary: "#5A5A5A"
      muted: "#7A7A7A"
    brand:
      primary: "#C5A059"
      accent: "#556B2F"
    accent:
      gold: "#C5A059"
      green: "#556B2F"
      red: "#8B4513"
    border:
      strong: "#8B7355"
      subtle: "#C4B896"
    state:
      success: "#556B2F"
      warning: "#C5A059"
      error: "#8B4513"
    focus:
      ring: "#C5A059"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    ornate: 16
  border:
    width:
      delicate: 1
      medium: 2
      ornate: 3
  shadow:
    soft: "0 4px 16px rgba(0,0,0,0.1)"
    nature: "0 8px 24px rgba(107,85,53,0.15)"
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
      fast: 400
      normal: 800
    easing: "ease-in-out"
  typography:
    font:
      serif:
        primary: "Cinzel Decorative"
        fallback:
          - "serif"
      body:
        primary: "Playfair Display"
        fallback:
          - "Georgia"
          - "serif"
    scale:
      h1: { size: 52, line: 64, weight: 400, tracking: 0.02 }
      h2: { size: 40, line: 52, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 400, tracking: 0 }
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
