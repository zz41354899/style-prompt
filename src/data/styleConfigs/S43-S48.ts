import type { StyleDNAConfig } from './types';

export const S43_S48_Configs: Record<string, StyleDNAConfig> = {
  'S43': {
    paletteStrategy: 'Vibrant polygons with computed lighting (facets). Bright saturated colors.',
    typography: 'Geometric Sans (low detail, clean shapes).',
    radiusPolicy: 'Sharp, angular edges.',
    shadowPolicy: 'Hard faceted shadows (no blurs).',
    borderLanguage: 'None (edges defined by color change).',
    patterns: 'Triangular meshes, crystalline structures.',
    motion: 'Snappy rotations, faceted transitions.',
    dos: ['Use triangles', 'Use flat shading', 'Keep it geometric', 'Simulate 3D'],
    donts: ['Don\'t use gradients', 'Don\'t use curves', 'Don\'t use realistic textures', 'Don\'t clutter'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S43"
    style_name: "Low Poly"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#2C3E50"
      secondary: "#34495E"
    text:
      primary: "#FFFFFF"
      secondary: "#BDC3C7"
      muted: "#7F8C8D"
    brand:
      primary: "#9B59B6"
      accent: "#3498DB"
    accent:
      purple: "#9B59B6"
      blue: "#3498DB"
      green: "#2ECC71"
    border:
      strong: "#7F8C8D"
      subtle: "rgba(127,140,141,0.3)"
    state:
      success: "#2ECC71"
      warning: "#F39C12"
      error: "#E74C3C"
    focus:
      ring: "#9B59B6"
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
    facet: "inset 0 0 20px rgba(0,0,0,0.2)"
    polygon: "8px 8px 0 rgba(0,0,0,0.3)"
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
        primary: "Exo 2"
        fallback:
          - "Montserrat"
          - "sans-serif"
      display:
        primary: "Orbitron"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 52, line: 60, weight: 700, tracking: 0.01 }
      h2: { size: 40, line: 48, weight: 600, tracking: 0 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S44': {
    paletteStrategy: 'Pastel colors with distinct light/dark sides for 3D effect.',
    typography: 'Monospace or Technical Sans.',
    radiusPolicy: 'Consistent rounding or sharp, depending on object type.',
    shadowPolicy: 'Long casting shadows (45 degrees).',
    borderLanguage: 'Optional thick outlines for cartoonish look.',
    patterns: 'Isometric grids, stacked layers.',
    motion: 'Elevator lifts, sliding on grid axes.',
    dos: ['Use strict 30-degree angles', 'Stack elements', 'Use consistent lighting', ' Build vertically'],
    donts: ['Don\'t mix perspectives', 'Don\'t flatter the design', 'Don\'t ignore depth', 'Don\'t use random angles'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S44"
    style_name: "Isometric"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F0F4F8"
      secondary: "#D9E2EC"
    text:
      primary: "#102A43"
      secondary: "#486581"
      muted: "#829AB1"
    brand:
      primary: "#62B0E8"
      accent: "#4098D7"
    cube:
      top: "#62B0E8"
      left: "#4098D7"
      right: "#102A43"
    border:
      strong: "#9FB3C8"
      subtle: "#BCCCDC"
    state:
      success: "#4CAF50"
      warning: "#FF9800"
      error: "#F44336"
    focus:
      ring: "#62B0E8"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
    soft: 8
  border:
    width:
      outline: 2
      medium: 3
      strong: 4
  shadow:
    iso: "10px 10px 0px rgba(0,0,0,0.1)"
    deep: "15px 15px 0px rgba(0,0,0,0.15)"
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
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Space Grotesk"
        fallback:
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 600, tracking: 0 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0 }
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
  'S45': {
    paletteStrategy: 'Blocky colors, pixel art palette translated to 3D.',
    typography: 'Pixel fonts or chunky Sans Serif.',
    radiusPolicy: 'Zero radius (cubes).',
    shadowPolicy: 'Drop shadows or ambient occlusion.',
    borderLanguage: 'None or voxel edges.',
    patterns: 'Voxel grids, staircases, block terrain.',
    motion: 'Step-by-step movement, building up blocks.',
    dos: ['Think in cubes', 'Use grid layouts', 'Simulate Minecraft/Lego', 'Keep it chunky'],
    donts: ['Don\'t use smooth curves', 'Don\'t use high-res textures', 'Don\'t break the grid', 'Don\'t get too serious'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S45"
    style_name: "Voxel"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#87CEEB"
      secondary: "#B0E0E6"
      ground: "#2ECC71"
    text:
      primary: "#2C3E50"
      secondary: "#34495E"
      muted: "#7F8C8D"
    brand:
      primary: "#2ECC71"
      accent: "#F39C12"
    block:
      dirt: "#8B4513"
      stone: "#7F8C8D"
      grass: "#2ECC71"
      water: "#3498DB"
    border:
      strong: "#34495E"
      subtle: "#7F8C8D"
    state:
      success: "#2ECC71"
      warning: "#F39C12"
      error: "#E74C3C"
    focus:
      ring: "#3498DB"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      pixel: 2
      medium: 4
      strong: 6
  shadow:
    block: "4px 4px 0 rgba(0,0,0,0.2)"
    voxel: "8px 8px 0 rgba(0,0,0,0.3)"
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
    easing: "steps(4)"
  typography:
    font:
      sans:
        primary: "VT323"
        fallback:
          - "Press Start 2P"
          - "monospace"
      display:
        primary: "Press Start 2P"
        fallback:
          - "monospace"
    scale:
      h1: { size: 36, line: 44, weight: 400, tracking: 0.02 }
      h2: { size: 28, line: 36, weight: 400, tracking: 0.01 }
      h3: { size: 20, line: 28, weight: 400, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [72, 96]
\`\`\``,
  },
  'S46': {
    paletteStrategy: 'Pastel pinks, blues, yellows with black patterns.',
    typography: 'Geometrical Sans, quirky display fonts.',
    radiusPolicy: 'Mixed: some pills, some circles, some triangles.',
    shadowPolicy: 'Offset hard shadows (confetti style).',
    borderLanguage: 'Squiggles, zigzags, dots.',
    patterns: 'Confetti, bacteria shapes, grids, squiggles.',
    motion: 'Floating, bouncing, rotating.',
    dos: ['Use geometric shapes', 'Be playful', 'Mix patterns', 'Use asymmetry'],
    donts: ['Don\'t align everything', 'Don\'t be boring', 'Don\'t adhere to a strict grid', 'Don\'t use muted colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S46"
    style_name: "Abstract Memphis"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFF0F5"
      secondary: "#FFFFFF"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#FF69B4"
      accent: "#00CED1"
    shape:
      pink: "#FF69B4"
      cyan: "#00CED1"
      yellow: "#FFD700"
      black: "#000000"
    border:
      strong: "#000000"
      subtle: "#333333"
    state:
      success: "#32CD32"
      warning: "#FFD700"
      error: "#FF6347"
    focus:
      ring: "#00CED1"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 9999
    wild: "50% 20% / 10% 40%"
  border:
    width:
      outline: 3
      medium: 4
      strong: 6
  shadow:
    hard: "8px 8px 0 #000"
    offset: "6px 6px 0 #FF69B4"
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
        primary: "Fredoka One"
        fallback:
          - "Quicksand"
          - "sans-serif"
      display:
        primary: "Bungee"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: 0.01 }
      h2: { size: 42, line: 50, weight: 400, tracking: 0 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S47': {
    paletteStrategy: 'Concrete greys, raw materials, metallic accents.',
    typography: 'Massive, bold, industrial Sans Serif.',
    radiusPolicy: 'Minimal or zero.',
    shadowPolicy: 'Deep, heavy shadows to show mass.',
    borderLanguage: 'Thick, structural borders.',
    patterns: 'Concrete textures, metal grids.',
    motion: 'Heavy impacts, slow sturdy movements.',
    dos: ['Use large text', 'Show structure', 'Use raw materials', 'Be imposing'],
    donts: ['Don\'t decorate', 'Don\'t be soft', 'Don\'t use delicate fonts', 'Don\'t hide the grid'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S47"
    style_name: "Brutalist 3D"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#D3D3D3"
      secondary: "#A9A9A9"
    text:
      primary: "#111111"
      secondary: "#333333"
      muted: "#666666"
      accent: "#FF4500"
    brand:
      primary: "#111111"
      accent: "#FF4500"
    border:
      strong: "#111111"
      subtle: "#666666"
    state:
      success: "#228B22"
      warning: "#FF4500"
      error: "#DC143C"
    focus:
      ring: "#111111"
  radius:
    none: 0
    sm: 0
    md: 2
    lg: 4
  border:
    width:
      thin: 2
      medium: 4
      thick: 8
  shadow:
    deep: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff"
    brutal: "12px 12px 0 #111111"
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
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Archivo Black"
        fallback:
          - "Impact"
          - "sans-serif"
      body:
        primary: "Inter"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 80, line: 84, weight: 900, tracking: -0.02 }
      h2: { size: 56, line: 60, weight: 900, tracking: -0.01 }
      h3: { size: 36, line: 42, weight: 700, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 128]
\`\`\``,
  },
  'S48': {
    paletteStrategy: 'Liquid gradients, iridescent colors, oil slicks.',
    typography: 'Warped or floating Sans Serif.',
    radiusPolicy: 'Organic, fluid shapes (blobs).',
    shadowPolicy: 'Soft, colored glows.',
    borderLanguage: 'None, edges defined by liquidity.',
    patterns: 'Lava lamp blobs, ripples, waves.',
    motion: 'Morphing, flowing, dripping.',
    dos: ['Use organic shapes', 'Use gradients', 'Make it flow', 'Simulate liquid'],
    donts: ['Don\'t use straight lines', 'Don\'t use solid flat colors', 'Don\'t be static', 'Don\'t use sharp corners'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S48"
    style_name: "Fluid 3D"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#0A0A0A"
    text:
      primary: "#FFFFFF"
      secondary: "#E0E0E0"
      muted: "#888888"
    brand:
      primary: "#FF00CC"
      accent: "#3333FF"
    gradient:
      main: "linear-gradient(45deg, #FF00CC, #3333FF)"
      alt: "linear-gradient(135deg, #00FF88, #00CCFF)"
    border:
      strong: "#FF00CC"
      subtle: "rgba(255,0,204,0.3)"
    state:
      success: "#00FF88"
      warning: "#FFCC00"
      error: "#FF3366"
    focus:
      ring: "#FF00CC"
  radius:
    none: 0
    sm: 24
    md: 48
    lg: 9999
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 60px rgba(255,0,204,0.5)"
    soft: "0 20px 60px rgba(0,0,0,0.4)"
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
      fast: 500
      normal: 1000
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Comfortaa"
        fallback:
          - "Varela Round"
          - "sans-serif"
      display:
        primary: "Righteous"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: 0 }
      h2: { size: 42, line: 50, weight: 600, tracking: 0 }
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
};
