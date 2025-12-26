import type { StyleDNAConfig } from './types';

export const S31_S36_Configs: Record<string, StyleDNAConfig> = {
  'S31': {
    paletteStrategy: 'Realistic textures: Leather (browns), Brushed Metal (silvers), Wood. High detailed gradients.',
    typography: 'Serif for elegance or systemic sans for UI elements. Embossed text effects.',
    radiusPolicy: 'Rounded corners realistic to materials (e.g. leather stitching).',
    shadowPolicy: 'Deep, realistic drop shadows and inner shadows to create volume.',
    borderLanguage: 'Stitching, bevels, metallic rims.',
    patterns: 'Leather grain, linen texture, brushed metal.',
    motion: 'Physical, heavy, mechanical transitions.',
    dos: ['Use realistic textures', 'Use inner shadows for depth', 'Mimic real-world mateirals', 'Pay attention to lighting direction'],
    donts: ['Don\'t use flat colors', 'Don\'t use impossible physics', 'Don\'t mix clashing materials', 'Don\'t ignore lighting consistency'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S31"
    style_name: "Skeuomorphic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#E0E0E0"
      secondary: "#D6D6D6"
    text:
      primary: "#2D2D2D"
      secondary: "#555555"
      muted: "#888888"
      embossed: "rgba(255,255,255,0.7)"
    brand:
      primary: "#8D6E63"
      accent: "#607D8B"
    border:
      strong: "#A1887F"
      subtle: "#BCAAA4"
    state:
      success: "#4CAF50"
      warning: "#FF9800"
      error: "#F44336"
    focus:
      ring: "#8D6E63"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  border:
    width:
      hairline: 1
      stitch: 2
      strong: 4
  shadow:
    pressed: "inset 2px 2px 5px rgba(0,0,0,0.2), inset -2px -2px 5px rgba(255,255,255,0.7)"
    raised: "2px 2px 5px rgba(0,0,0,0.2), -2px -2px 5px rgba(255,255,255,0.7)"
    deep: "0 8px 24px rgba(0,0,0,0.3)"
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
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Helvetica Neue"
        fallback:
          - "system-ui"
          - "sans-serif"
      serif:
        primary: "Georgia"
        fallback:
          - "Times New Roman"
          - "serif"
    scale:
      h1: { size: 48, line: 58, weight: 600, tracking: 0 }
      h2: { size: 36, line: 46, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S32': {
    paletteStrategy: 'Windows 95 Gray (#C0C0C0), Black, White, Navy Blue title bars.',
    typography: 'Pixelated sans-serif (MS Sans Serif) or System fonts.',
    radiusPolicy: 'Zero radius for windows, sligthly rounded for some modern interpretations but mostly sharp.',
    shadowPolicy: 'Classic bevels: Light top-left, dark bottom-right.',
    borderLanguage: 'Beveled edges (3D borders).',
    patterns: 'Dithered gradients, strict grids.',
    motion: 'Instant, snapping windows. No smooth reformations.',
    dos: ['Use #C0C0C0 background', 'Use beveled buttons', 'Use pixel fonts', 'Keep it nostalgic'],
    donts: ['Don\'t use smooth gradients', 'Don\'t use rounded corners (unless necessary)', 'Don\'t use transparency', 'Don\'t modernize it too much'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S32"
    style_name: "Windows 95"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#C0C0C0"
      secondary: "#FFFFFF"
      active: "#000080"
    text:
      primary: "#000000"
      secondary: "#808080"
      muted: "#808080"
      disabled: "#808080"
      inverse: "#FFFFFF"
    brand:
      primary: "#000080"
      accent: "#008080"
    border:
      strong: "#000000"
      subtle: "#808080"
      light: "#FFFFFF"
      shadow: "#808080"
    state:
      success: "#008000"
      warning: "#FFFF00"
      error: "#FF0000"
    focus:
      ring: "#000080"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    out: "inset 1px 1px #dfdfdf, inset -1px -1px #000000, inset 2px 2px #ffffff, inset -2px -2px #808080"
    in: "inset 1px 1px #000000, inset -1px -1px #dfdfdf, inset 2px 2px #808080, inset -2px -2px #ffffff"
  layout:
    container:
      content: 1024
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 8
      desktop: 16
  motion:
    duration:
      fast: 0
      normal: 0
    easing: "step-end"
  typography:
    font:
      sans:
        primary: "MS Sans Serif"
        fallback:
          - "Tahoma"
          - "sans-serif"
      mono:
        primary: "Courier New"
        fallback:
          - "monospace"
    scale:
      h1: { size: 24, line: 28, weight: 700, tracking: 0 }
      h2: { size: 18, line: 22, weight: 700, tracking: 0 }
      h3: { size: 14, line: 18, weight: 700, tracking: 0 }
      body: { size: 11, line: 16, weight: 400, tracking: 0 }
      small: { size: 10, line: 14, weight: 400, tracking: 0 }
  spacing:
    base: 4
    section_py:
      mobile: [24, 32]
      desktop: [40, 56]
\`\`\``,
  },
  'S33': {
    paletteStrategy: 'Silver, Chrome, Mercury, iridescent highlights. Dark or reflective background.',
    typography: 'Bold, futuristic, liquid-like fonts.',
    radiusPolicy: 'Fluid, amorphous shapes. Blobs.',
    shadowPolicy: 'High contrast reflections, specular highlights.',
    borderLanguage: 'None, or defined by light reflections.',
    patterns: 'Ripples, distortions, refractions.',
    motion: 'Flowing, dripping, morphing.',
    dos: ['Use metallic gradients', 'Use fluid shapes', 'Simulate reflection', 'Keep it slick'],
    donts: ['Don\'t use rough textures', 'Don\'t use geometric grids', 'Don\'t make it static', 'Don\'t use flat colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S33"
    style_name: "Liquid Metal"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#111111"
    text:
      primary: "#FFFFFF"
      secondary: "#AAAAAA"
      muted: "#666666"
    brand:
      primary: "#E0E0E0"
      accent: "#A0A0A0"
    border:
      strong: "#C0C0C0"
      subtle: "rgba(192,192,192,0.3)"
    state:
      success: "#4CAF50"
      warning: "#FFC107"
      error: "#F44336"
    focus:
      ring: "#E0E0E0"
  radius:
    none: 0
    sm: 16
    md: 32
    lg: 9999
    fluid: "50% 30% 60% 40% / 40% 60% 40% 60%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    metal: "inset 4px 4px 10px rgba(255,255,255,0.5), inset -4px -4px 10px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.2)"
    glow: "0 0 40px rgba(255,255,255,0.3)"
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
          - "Rajdhani"
          - "sans-serif"
      display:
        primary: "Audiowide"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: 0.02 }
      h2: { size: 42, line: 50, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S34': {
    paletteStrategy: 'Iridescent, pastel gradients (pink, cyan, purple), silver/white accents.',
    typography: 'Thin, modern sans-serif. Often white or holographic color.',
    radiusPolicy: 'Rounded, bubble-like.',
    shadowPolicy: 'Soft colored glows, pearl effects.',
    borderLanguage: 'Thin, glowing, or gradient borders.',
    patterns: 'Holographic foil textures, rainbows.',
    motion: 'Shimmering, tilting (parallax), floating.',
    dos: ['Use rainbow gradients', 'Use soft blurs', 'Simulate foil texture', 'Keep it ethereal'],
    donts: ['Don\'t use muddy colors', 'Don\'t use harsh blacks', 'Don\'t make it opaque', 'Don\'t be boring'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S34"
    style_name: "Holographic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F0F0F0"
      secondary: "#FFFFFF"
    text:
      primary: "#333333"
      secondary: "#666666"
      muted: "#999999"
    brand:
      primary: "#E0C3FC"
      accent: "#8EC5FC"
    gradient:
      holo: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 20%, #E0C3FC 40%, #A6C1EE 60%, #BFE9FF 80%, #C2E9FB 100%)"
    border:
      strong: "#E0C3FC"
      subtle: "rgba(224,195,252,0.4)"
    state:
      success: "#A5D6A7"
      warning: "#FFCC80"
      error: "#EF9A9A"
    focus:
      ring: "#8EC5FC"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 28
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    holo: "0 10px 20px rgba(255, 105, 180, 0.2), 0 6px 6px rgba(0, 255, 255, 0.1)"
    glow: "0 0 30px rgba(224, 195, 252, 0.5)"
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
        primary: "Montserrat"
        fallback:
          - "Lato"
          - "sans-serif"
      display:
        primary: "Quicksand"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 52, line: 62, weight: 300, tracking: 0.01 }
      h2: { size: 40, line: 50, weight: 300, tracking: 0 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 300, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S35': {
    paletteStrategy: 'Blueprint Blue (#0055AA), White lines. Technical high contrast.',
    typography: 'Technical lettering (hand-drawn technical or monospace).',
    radiusPolicy: 'Sharp or strictly geometric arcs.',
    shadowPolicy: 'None (flat) or schematic shading (hatching).',
    borderLanguage: 'White thin lines, dashed lines for hidden edges.',
    patterns: 'Grid paper, measurements, construction lines.',
    motion: 'Drawing effect, writing on path.',
    dos: ['Use blueprint blue', 'Use white lines', 'Show measurements', 'Make it look architectural'],
    donts: ['Don\'t use fills (mostly)', 'Don\'t use random colors', 'Don\'t ignore the grid', 'Don\'t make it messy'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S35"
    style_name: "Blueprint"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0A4F8B"
      secondary: "#003366"
    text:
      primary: "#FFFFFF"
      secondary: "rgba(255,255,255,0.7)"
      muted: "rgba(255,255,255,0.5)"
    brand:
      primary: "#FFFFFF"
      accent: "#87CEEB"
    border:
      strong: "#FFFFFF"
      subtle: "rgba(255,255,255,0.5)"
    state:
      success: "#90EE90"
      warning: "#FFD700"
      error: "#FF6B6B"
    focus:
      ring: "#FFFFFF"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
    curve: 999
  border:
    width:
      hairline: 1
      dashed: 1
      strong: 2
    style:
      primary: "solid"
      secondary: "dashed"
  shadow:
    none: "none"
    grid: "inset 0 0 0 1px rgba(255,255,255,0.1)"
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
      normal: 500
    easing: "linear"
  typography:
    font:
      sans:
        primary: "Architects Daughter"
        fallback:
          - "cursive"
      mono:
        primary: "Courier New"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 400, tracking: 0.02 }
      h2: { size: 36, line: 44, weight: 400, tracking: 0.01 }
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
  'S36': {
    paletteStrategy: 'Chalkboard Green or Black, Chalk White, Pastel accent chalks.',
    typography: 'Handwritten chalk style. Rough edges.',
    radiusPolicy: 'Rough, hand-drawn circles and boxes.',
    shadowPolicy: 'Smudge effects, dust.',
    borderLanguage: 'Hand-drawn lines, varying width.',
    patterns: 'Chalk dust, eraser marks, blackboard texture.',
    motion: 'Writing, erasing, dusty transitions.',
    dos: ['Use chalkboard texture', 'Use handwritten fonts', 'Allow imperfections', 'Use chalk colors'],
    donts: ['Don\'t use vector-perfect lines', 'Don\'t use digital colors', 'Don\'t make it too clean', 'Don\'t forget the dust'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S36"
    style_name: "Chalkboard"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#2B3A42"
      secondary: "#1F2B32"
    text:
      primary: "#FFFFFF"
      secondary: "#E0E0E0"
      muted: "#AAAAAA"
    brand:
      primary: "#FFFFFF"
      accent: "#FDFD96"
    chalk:
      yellow: "#FDFD96"
      pink: "#F1CBFF"
      blue: "#A7C7E7"
      green: "#B5EAD7"
      orange: "#FFD8B8"
    border:
      strong: "#FFFFFF"
      subtle: "rgba(255,255,255,0.4)"
    state:
      success: "#B5EAD7"
      warning: "#FDFD96"
      error: "#FF6B6B"
    focus:
      ring: "#FFFFFF"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    hand: "255px 15px 225px 15px / 15px 225px 15px 255px"
  border:
    width:
      chalk: 2
      medium: 3
      strong: 4
  shadow:
    dust: "0 2px 4px rgba(255,255,255,0.1)"
    smudge: "0 0 8px rgba(255,255,255,0.2)"
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
        primary: "Caveat"
        fallback:
          - "Kalam"
          - "cursive"
      display:
        primary: "Patrick Hand"
        fallback:
          - "cursive"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: 0 }
      h2: { size: 42, line: 54, weight: 600, tracking: 0 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0 }
      small: { size: 16, line: 26, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
};
