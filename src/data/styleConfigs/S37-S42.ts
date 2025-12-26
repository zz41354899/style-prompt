import type { StyleDNAConfig } from './types';

export const S37_S42_Configs: Record<string, StyleDNAConfig> = {
  'S37': {
    paletteStrategy: 'Newsprint Grey (#F0F0F0), Ink Black (#1A1A1A). High contrast monochrome.',
    typography: 'Classic Serif (Times New Roman or similar) for body, Bold Serif/Sans for headlines.',
    radiusPolicy: 'Sharp edges (0px) or very slight rounding for paper sections.',
    shadowPolicy: 'Flat or subtle drop shadows to distinguish paper sheets.',
    borderLanguage: 'Thin hairlines, double lines, dividers.',
    patterns: 'Halftone dots, paper grain, ink bleed.',
    motion: 'Page flip, scrolling ticker.',
    dos: ['Use multiple columns', 'Use justified text', 'Use bold headlines', 'Keep it monochromatic'],
    donts: ['Don\'t use vibrant colors', 'Don\'t use excessive negative space', 'Don\'t use glossy effects', 'Don\'t make it chaotic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S37"
    style_name: "Newspaper"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5F0"
      secondary: "#EAEAE0"
    text:
      primary: "#1A1A1A"
      secondary: "#444444"
      muted: "#666666"
      accent: "#800000"
    brand:
      primary: "#1A1A1A"
      accent: "#800000"
    border:
      strong: "#1A1A1A"
      subtle: "#CCCCCC"
    state:
      success: "#2E7D32"
      warning: "#F57C00"
      error: "#C62828"
    focus:
      ring: "#1A1A1A"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
  border:
    width:
      hairline: 1
      double: 3
      strong: 4
  shadow:
    paper: "0 2px 4px rgba(0,0,0,0.1)"
    none: "none"
  layout:
    container:
      content: 1200
      wide: 1400
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 12
      desktop: 20
  motion:
    duration:
      fast: 200
      normal: 400
    easing: "ease-out"
  typography:
    font:
      serif:
        primary: "Playfair Display"
        fallback:
          - "Georgia"
          - "serif"
      body:
        primary: "Merriweather"
        fallback:
          - "Times New Roman"
          - "serif"
    scale:
      h1: { size: 56, line: 64, weight: 900, tracking: -0.02 }
      h2: { size: 36, line: 44, weight: 700, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [72, 96]
\`\`\``,
  },
  'S38': {
    paletteStrategy: 'High fashion contrast. Black/White base with bold accent colors (Hot Pink, Electric Blue).',
    typography: 'Didone (Bodoni/Didot) for titles, clean geometric Sans for geometric layouts.',
    radiusPolicy: 'Zero radius for images, sharp cuts.',
    shadowPolicy: 'None or hard, defining shadows.',
    borderLanguage: 'Thick framing borders or no borders (full bleed).',
    patterns: 'Large typography integration, overlapping text/images.',
    motion: 'Parallax, smooth sliding, mask reveals.',
    dos: ['Use high quality imagery', 'Use large titles', 'Overlay text on images', 'Be bold'],
    donts: ['Don\'t use small text everywhere', 'Don\'t use low res images', 'Don\'t clutter', 'Don\'t use default fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S38"
    style_name: "Magazine"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F2F2F2"
    text:
      primary: "#000000"
      secondary: "#555555"
      muted: "#888888"
      inverse: "#FFFFFF"
    brand:
      primary: "#000000"
      accent: "#FF1493"
    border:
      strong: "#000000"
      subtle: "#E0E0E0"
    state:
      success: "#00C853"
      warning: "#FF9100"
      error: "#D50000"
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
      frame: 4
      strong: 8
  shadow:
    hard: "8px 8px 0 rgba(0,0,0,0.2)"
    none: "none"
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
      fast: 300
      normal: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      serif:
        primary: "Bodoni Moda"
        fallback:
          - "Didot"
          - "serif"
      sans:
        primary: "Inter"
        fallback:
          - "Helvetica"
          - "sans-serif"
    scale:
      h1: { size: 80, line: 84, weight: 400, tracking: -0.02 }
      h2: { size: 56, line: 60, weight: 400, tracking: -0.01 }
      h3: { size: 36, line: 42, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 12, line: 18, weight: 500, tracking: 0.05 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [120, 160]
\`\`\``,
  },
  'S39': {
    paletteStrategy: 'CMYK primaries (Cyan, Magenta, Yellow, Black). Halftone textures.',
    typography: 'Comic Sans style lettering, SFX text (Boom! Pow!).',
    radiusPolicy: 'Hand-drawn panels, varying/rough borders.',
    shadowPolicy: 'Hard black drop shadows (pop art style).',
    borderLanguage: 'Thick black outlines.',
    patterns: 'Ben-Day dots, speed lines, jagged bursts.',
    motion: 'Panel sliding, scale bouncing (pop-in).',
    dos: ['Use speech bubbles', 'Use halftone patterns', 'Use thick outlines', 'Have fun'],
    donts: ['Don\'t use subtle gradients', 'Don\'t be serious', 'Don\'t use thin fonts', 'Don\'t ignore the panel layout'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S39"
    style_name: "Comic Book"
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
      primary: "#FFE800"
      accent: "#FF0000"
    accent:
      yellow: "#FFE800"
      red: "#FF0000"
      blue: "#00AEEF"
      black: "#000000"
    border:
      strong: "#000000"
      subtle: "#333333"
    state:
      success: "#00C853"
      warning: "#FFE800"
      error: "#FF0000"
    focus:
      ring: "#00AEEF"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    comic: "2px 8px 4px 6px"
  border:
    width:
      outline: 3
      medium: 4
      strong: 6
  shadow:
    pop: "4px 4px 0px #000000"
    hard: "6px 6px 0px #000000"
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
      h1: { size: 56, line: 60, weight: 400, tracking: 0.02 }
      h2: { size: 42, line: 48, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 34, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },
  'S40': {
    paletteStrategy: 'Warm, sun-faded colors. Sepia tones, muted blues and greens.',
    typography: 'Handwritten scripts, stamp fonts.',
    radiusPolicy: 'Slightly rounded corners (worn paper).',
    shadowPolicy: 'Soft, lifting shadows (card effect).',
    borderLanguage: 'Postage stamp edges, uneven paper edges.',
    patterns: 'Paper texture, postmarks, watercolor stains.',
    motion: 'Flip (front/back), slide in.',
    dos: ['Use paper textures', 'Use handwriting', 'Make it personal', 'Simulate travel'],
    donts: ['Don\'t use pristine lines', 'Don\'t use neon colors', 'Don\'t look digital', 'Don\'t crowd the space'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S40"
    style_name: "Postcard"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FDFBF7"
      secondary: "#E6E2D8"
    text:
      primary: "#2C3E50"
      secondary: "#5D6D7E"
      muted: "#85929E"
      stamp: "#C0392B"
    brand:
      primary: "#2C3E50"
      accent: "#C0392B"
    border:
      strong: "#C4B8A4"
      subtle: "#E6E2D8"
    state:
      success: "#27AE60"
      warning: "#F39C12"
      error: "#C0392B"
    focus:
      ring: "#2C3E50"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
    card: 4
  border:
    width:
      perforated: 1
      medium: 2
      strong: 3
  shadow:
    lifted: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"
    card: "0 8px 16px rgba(0,0,0,0.1)"
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
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Indie Flower"
        fallback:
          - "Caveat"
          - "cursive"
      display:
        primary: "Pacifico"
        fallback:
          - "cursive"
    scale:
      h1: { size: 48, line: 60, weight: 400, tracking: 0 }
      h2: { size: 36, line: 48, weight: 400, tracking: 0 }
      h3: { size: 24, line: 34, weight: 400, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S41': {
    paletteStrategy: 'White frame, saturated/filtered photo area. Marker ink colors.',
    typography: 'Marker handwriting (Sharpie style).',
    radiusPolicy: 'Sharp corners on photo, rounded on frame.',
    shadowPolicy: 'Realistic drop shadows to simulate stacking.',
    borderLanguage: 'Thick white borders (classic instant photo).',
    patterns: 'Film grain, light leaks, vignette.',
    motion: 'Developing (fade in), stacking, tilting.',
    dos: ['Use the classic frame ratio', 'Use marker fonts', 'Simulate film imperfections', 'Create nostalgia'],
    donts: ['Don\'t remove the white border', 'Don\'t use digital fonts in the handwritten area', 'Don\'t align perfectly', 'Don\'t look sterile'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S41"
    style_name: "Polaroid"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#EAEAEA"
      secondary: "#F5F5F5"
      frame: "#FFFFFF"
    text:
      primary: "#222222"
      secondary: "#555555"
      muted: "#888888"
      marker: "#222222"
    brand:
      primary: "#222222"
      accent: "#0066CC"
    border:
      strong: "#D0D0D0"
      subtle: "#E8E8E8"
    state:
      success: "#4CAF50"
      warning: "#FF9800"
      error: "#F44336"
    focus:
      ring: "#0066CC"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    frame: 2
  border:
    width:
      frame: 12
      medium: 2
      strong: 4
  shadow:
    stack: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    photo: "0 4px 8px rgba(0,0,0,0.15)"
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
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Permanent Marker"
        fallback:
          - "Shadows Into Light"
          - "cursive"
      body:
        primary: "Inter"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 48, line: 56, weight: 400, tracking: 0 }
      h2: { size: 36, line: 44, weight: 400, tracking: 0 }
      h3: { size: 24, line: 32, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S42': {
    paletteStrategy: 'Faded paper colors (yellows, pinks, blues), Black ink. Grunge textures.',
    typography: 'Monospace (typewriter), Dot matrix.',
    radiusPolicy: 'Perforated edges, torn corners.',
    shadowPolicy: 'Flat, close to surface.',
    borderLanguage: 'Dotted lines (tear lines), barcode strips.',
    patterns: 'Barcode, QR code, noise, ink stamps.',
    motion: 'Tearing, printing, sliding out.',
    dos: ['Use perforated lines', 'Use monospace fonts', 'Simulate ink bleed', 'Keep it functional'],
    donts: ['Don\'t use gradients', 'Don\'t use variable width fonts', 'Don\'t clean it up too much', 'Don\'t use rounded buttons'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S42"
    style_name: "Ticket Stub"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFF8E1"
      secondary: "#FFE0B2"
    text:
      primary: "#263238"
      secondary: "#455A64"
      muted: "#78909C"
      warning: "#D84315"
    brand:
      primary: "#263238"
      accent: "#D84315"
    border:
      strong: "#90A4AE"
      subtle: "#B0BEC5"
      perforation: "#B0BEC5"
    state:
      success: "#388E3C"
      warning: "#F57C00"
      error: "#D84315"
    focus:
      ring: "#263238"
  radius:
    none: 0
    sm: 4
    md: 6
    lg: 8
    stub: 6
  border:
    width:
      hairline: 1
      perforated: 2
      strong: 3
    style:
      perforation: "2px dashed #B0BEC5"
  shadow:
    flat: "0 1px 2px rgba(0,0,0,0.1)"
    stub: "0 2px 4px rgba(0,0,0,0.15)"
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
      fast: 150
      normal: 300
    easing: "linear"
  typography:
    font:
      mono:
        primary: "Courier Prime"
        fallback:
          - "Space Mono"
          - "monospace"
      display:
        primary: "Special Elite"
        fallback:
          - "Courier"
          - "monospace"
    scale:
      h1: { size: 36, line: 44, weight: 400, tracking: 0.02 }
      h2: { size: 28, line: 36, weight: 400, tracking: 0.01 }
      h3: { size: 20, line: 28, weight: 400, tracking: 0 }
      body: { size: 14, line: 22, weight: 400, tracking: 0.01 }
      small: { size: 12, line: 18, weight: 400, tracking: 0.02 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [72, 96]
\`\`\``,
  },
};
