import type { StyleDNAConfig } from './types';

export const S55_S60_Configs: Record<string, StyleDNAConfig> = {
  'S55': {
    paletteStrategy: 'Deep blues, teals, foam whites.',
    typography: 'Fluid rounded sans-serif.',
    radiusPolicy: 'Rounded fluid shapes.',
    shadowPolicy: 'Soft blue glows, caustic light effects.',
    borderLanguage: 'None or translucent white.',
    patterns: 'Wave patterns, bubbles, caustic noises.',
    motion: 'Floating, swaying, ripple effects.',
    dos: ['Use gradients', 'Mimic water physics', 'Keep it cool', 'Use transparency'],
    donts: ['Don\'t use sharp corners', 'Don\'t use dry colors', 'Don\'t be static'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S55"
    style_name: "Oceanic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#001e2b"
      secondary: "#003344"
    text:
      primary: "#FFFFFF"
      secondary: "#B0E0E6"
      muted: "#5F9EA0"
    brand:
      primary: "#00f0ff"
      accent: "#20B2AA"
    border:
      strong: "#00CED1"
      subtle: "rgba(0,240,255,0.2)"
    state:
      success: "#00FA9A"
      warning: "#FFD700"
      error: "#FF6B6B"
    focus:
      ring: "#00f0ff"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 30px rgba(0,240,255,0.3)"
    caustic: "0 10px 40px rgba(32,178,170,0.2)"
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
      fast: 300
      normal: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Quicksand"
        fallback:
          - "Nunito"
          - "sans-serif"
      mono:
        primary: "Fira Code"
        fallback:
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 120]
\`\`\``,
  },
  'S56': {
    paletteStrategy: 'Forest greens, earthy browns, sun rays.',
    typography: 'Rustic serif or rounded organic.',
    radiusPolicy: 'Organic roughness or soft curves.',
    shadowPolicy: 'Dappled light shadows.',
    borderLanguage: 'Wood texture borders.',
    patterns: 'Leaf veins, wood grain, foliage.',
    motion: 'Gentle sway, rustling.',
    dos: ['Use textures', 'Feel organic', 'Layer depth', 'Use green heavily'],
    donts: ['Don\'t look plastic', 'Don\'t use neon', 'Don\'t align perfectly'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S56"
    style_name: "Forest"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1a2f1c"
      secondary: "#2d4a30"
    text:
      primary: "#F5F5DC"
      secondary: "#C8E6C9"
      muted: "#A5D6A7"
    brand:
      primary: "#4caf50"
      accent: "#8BC34A"
    border:
      strong: "#4caf50"
      subtle: "rgba(76,175,80,0.3)"
    state:
      success: "#81C784"
      warning: "#FFB74D"
      error: "#E57373"
    focus:
      ring: "#8BC34A"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    organic: "30% 70% 70% 30% / 30% 30% 70% 70%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    dappled: "0 4px 20px rgba(0,0,0,0.3)"
    leaf: "2px 4px 8px rgba(0,0,0,0.2)"
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
        primary: "Merriweather"
        fallback:
          - "Georgia"
          - "serif"
      mono:
        primary: "Source Code Pro"
        fallback:
          - "monospace"
    scale:
      h1: { size: 52, line: 64, weight: 700, tracking: -0.01 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },
  'S57': {
    paletteStrategy: 'Warm sands, oranges, scorched reds, bright sky blue.',
    typography: 'Weathered or sharp sans.',
    radiusPolicy: 'Eroded edges.',
    shadowPolicy: 'Hard hot shadows.',
    borderLanguage: 'None or slight dust.',
    patterns: 'Dunes, heat haze, cracks.',
    motion: 'Shimmering heat, wind blowing sand.',
    dos: ['Use warm gradients', 'Feel dry', 'High contrast', 'Minimalism'],
    donts: ['Don\'t use cool colors (except sky)', 'Don\'t look wet', 'Don\'t clutter'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S57"
    style_name: "Desert"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#f4a460"
      secondary: "#DEB887"
    text:
      primary: "#3E2723"
      secondary: "#5D4037"
      muted: "#795548"
    brand:
      primary: "#FF5722"
      accent: "#29b6f6"
    border:
      strong: "#8D6E63"
      subtle: "rgba(141,110,99,0.3)"
    state:
      success: "#29b6f6"
      warning: "#FFB300"
      error: "#D84315"
    focus:
      ring: "#FF5722"
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
    hot: "0 8px 32px rgba(255,87,34,0.3)"
    dust: "0 2px 8px rgba(0,0,0,0.15)"
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
      desktop: 32
  motion:
    duration:
      fast: 150
      normal: 300
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Oswald"
        fallback:
          - "Impact"
          - "sans-serif"
      mono:
        primary: "Courier New"
        fallback:
          - "monospace"
    scale:
      h1: { size: 60, line: 68, weight: 700, tracking: 0.02 }
      h2: { size: 42, line: 50, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S58': {
    paletteStrategy: 'Icy whites, pale cyans, deep freeze blues.',
    typography: 'Sharp, crystalline fonts.',
    radiusPolicy: 'Sharp jagged edges or smooth ice.',
    shadowPolicy: 'Reflective, glass-like properties.',
    borderLanguage: 'White frost borders.',
    patterns: 'Ice crystals, snowflakes, frost.',
    motion: 'Slow freeze, shatter effects.',
    dos: ['Use frost textures', 'Be bright', 'Sharp angles', 'Translucency'],
    donts: ['Don\'t use warm colors', 'Don\'t be soft/fuzzy', 'Don\'t be dark'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S58"
    style_name: "Polar"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#e0f7fa"
      secondary: "#B2EBF2"
    text:
      primary: "#01579B"
      secondary: "#0277BD"
      muted: "#4FC3F7"
    brand:
      primary: "#0277bd"
      accent: "#00ACC1"
    border:
      strong: "#4DD0E1"
      subtle: "rgba(77,208,225,0.3)"
    state:
      success: "#00BCD4"
      warning: "#FFB300"
      error: "#E91E63"
    focus:
      ring: "#0277bd"
  radius:
    none: 0
    sm: 2
    md: 6
    lg: 12
    crystal: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    frost: "0 4px 20px rgba(0,188,212,0.2)"
    crystal: "0 0 30px rgba(255,255,255,0.5)"
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
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
  typography:
    font:
      sans:
        primary: "Exo 2"
        fallback:
          - "Roboto"
          - "sans-serif"
      mono:
        primary: "Fira Code"
        fallback:
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 300, tracking: 0.04 }
      h2: { size: 40, line: 48, weight: 300, tracking: 0.02 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 120]
\`\`\``,
  },
  'S59': {
    paletteStrategy: 'Vibrant tropical greens, exotic flower pinks/yellows.',
    typography: 'Exotic display fonts.',
    radiusPolicy: 'Big organic curves.',
    shadowPolicy: 'Deep canopy shadows.',
    borderLanguage: 'Leaf outlines.',
    patterns: 'Monstera leaves, tiger stripes.',
    motion: 'Grow in, bounce.',
    dos: ['Be lush', 'Oversaturated colors', 'Dense layout', 'Exotic vibes'],
    donts: ['Don\'t be sparse', 'Don\'t be dull', 'Don\'t be techy'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S59"
    style_name: "Jungle"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#004d40"
      secondary: "#00695C"
    text:
      primary: "#FFFFFF"
      secondary: "#B2DFDB"
      muted: "#80CBC4"
    brand:
      primary: "#00e676"
      accent: "#ff4081"
    border:
      strong: "#00e676"
      subtle: "rgba(0,230,118,0.3)"
    state:
      success: "#00E676"
      warning: "#FFEB3B"
      error: "#FF5252"
    focus:
      ring: "#00e676"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 32
    leaf: "50% 0 50% 50%"
  border:
    width:
      hairline: 1
      medium: 3
      strong: 5
  shadow:
    canopy: "0 20px 60px rgba(0,0,0,0.4)"
    leaf: "4px 4px 0 rgba(0,0,0,0.2)"
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
      fast: 200
      normal: 400
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  typography:
    font:
      sans:
        primary: "Lobster"
        fallback:
          - "Pacifico"
          - "cursive"
      body:
        primary: "Lato"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 400, tracking: 0 }
      h2: { size: 44, line: 52, weight: 400, tracking: 0 }
      h3: { size: 28, line: 36, weight: 700, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 112]
\`\`\``,
  },
  'S60': {
    paletteStrategy: 'Charcoal blacks, magma reds, ash greys.',
    typography: 'Bold, cracked or burnt fonts.',
    radiusPolicy: 'Jagged rock edges.',
    shadowPolicy: 'Inner glow (magma).',
    borderLanguage: 'Cracked earth.',
    patterns: 'Lava flow, rock texture, smoke.',
    motion: 'Slow flow, particle embers.',
    dos: ['High contrast', 'Dark mode', 'Glowing elements', 'Texture heavy'],
    donts: ['Don\'t use water colors', 'Don\'t be clean', 'Don\'t be friendly'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S60"
    style_name: "Volcanic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#212121"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#BDBDBD"
      muted: "#757575"
    brand:
      primary: "#ff3d00"
      accent: "#FF6D00"
    border:
      strong: "#ff3d00"
      subtle: "rgba(255,61,0,0.3)"
    state:
      success: "#76FF03"
      warning: "#FFAB00"
      error: "#FF1744"
    focus:
      ring: "#ff3d00"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    jagged: "polygon(0 10%, 15% 0, 100% 5%, 85% 100%, 0 95%)"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    magma: "0 0 40px rgba(255,61,0,0.5)"
    ember: "0 4px 20px rgba(255,109,0,0.3)"
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
      fast: 300
      normal: 600
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Bebas Neue"
        fallback:
          - "Impact"
          - "sans-serif"
      mono:
        primary: "Share Tech Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 72, line: 76, weight: 400, tracking: 0.05 }
      h2: { size: 48, line: 52, weight: 400, tracking: 0.03 }
      h3: { size: 32, line: 40, weight: 400, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 128]
\`\`\``,
  },
};

export const S61_S66_Configs: Record<string, StyleDNAConfig> = {
  'S61': {
    paletteStrategy: 'Rich tans, browns, stitching yellows.',
    typography: 'Debossed or stamped style font.',
    radiusPolicy: 'Rounded corners (leather patch).',
    shadowPolicy: 'Soft ambient occlusion.',
    borderLanguage: 'Stitched dashed lines.',
    patterns: 'Leather grain.',
    motion: 'Tactile press.',
    dos: ['Use stitch effects', 'Leather texture', 'Gold/Brass accents', 'Warmth'],
    donts: ['Don\'t look flat', 'Don\'t look plastic', 'Don\'t use neon'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S61"
    style_name: "Leather"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#5d4037"
      secondary: "#4E342E"
    text:
      primary: "#EFEBE9"
      secondary: "#D7CCC8"
      muted: "#A1887F"
    brand:
      primary: "#fdd835"
      accent: "#FFB300"
    border:
      strong: "#A1887F"
      subtle: "rgba(161,136,127,0.4)"
    state:
      success: "#AED581"
      warning: "#FFD54F"
      error: "#E57373"
    focus:
      ring: "#fdd835"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      hairline: 1
      medium: 2
      stitch: "2px dashed"
  shadow:
    emboss: "inset 0 2px 4px rgba(0,0,0,0.3)"
    lift: "0 8px 24px rgba(0,0,0,0.3)"
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
    easing: "ease"
  typography:
    font:
      sans:
        primary: "Bitter"
        fallback:
          - "Georgia"
          - "serif"
      mono:
        primary: "Courier New"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 700, tracking: 0 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S62': {
    paletteStrategy: 'Indigo blues, white stitching, copper rivets.',
    typography: 'Bold slab serif (label style).',
    radiusPolicy: 'Soft fabric folds.',
    shadowPolicy: 'Fabric shadows.',
    borderLanguage: 'Double stitched lines.',
    patterns: 'Denim twill.',
    motion: 'Instant snap.',
    dos: ['Use denim texture', 'Stitching', 'Rivets/Tags', 'Casual vibe'],
    donts: ['Don\'t look silky', 'Don\'t be too formal', 'Don\'t look synthetic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S62"
    style_name: "Denim"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1a237e"
      secondary: "#283593"
    text:
      primary: "#FFFFFF"
      secondary: "#C5CAE9"
      muted: "#9FA8DA"
    brand:
      primary: "#FFFFFF"
      accent: "#bcaaa4"
    border:
      strong: "#FFFFFF"
      subtle: "rgba(255,255,255,0.3)"
    state:
      success: "#81C784"
      warning: "#FFB74D"
      error: "#E57373"
    focus:
      ring: "#FFFFFF"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
  border:
    width:
      hairline: 1
      medium: 2
      stitch: "3px double"
  shadow:
    fabric: "0 2px 8px rgba(0,0,0,0.2)"
    pocket: "inset 0 4px 8px rgba(0,0,0,0.15)"
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
        primary: "Roboto Slab"
        fallback:
          - "Rockwell"
          - "serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 52, line: 60, weight: 700, tracking: 0.01 }
      h2: { size: 38, line: 46, weight: 600, tracking: 0 }
      h3: { size: 26, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S63': {
    paletteStrategy: 'Silvers, greys, reflections.',
    typography: 'Industrial sans serif.',
    radiusPolicy: 'Micro-bevels.',
    shadowPolicy: 'Sharp metallic reflections.',
    borderLanguage: 'Beveled edges.',
    patterns: 'Brushed metal lines.',
    motion: 'Mechanical sliding.',
    dos: ['Look heavy', 'Reflective', 'Machined', 'Precision'],
    donts: ['Don\'t look soft', 'Don\'t look warm', 'Don\'t look organic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S63"
    style_name: "Brushed Steel"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#cfd8dc"
      secondary: "#B0BEC5"
    text:
      primary: "#263238"
      secondary: "#37474F"
      muted: "#546E7A"
    brand:
      primary: "#455A64"
      accent: "#607D8B"
    border:
      strong: "#90A4AE"
      subtle: "rgba(144,164,174,0.5)"
    state:
      success: "#4CAF50"
      warning: "#FFC107"
      error: "#F44336"
    focus:
      ring: "#455A64"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 6
  border:
    width:
      hairline: 1
      medium: 2
      bevel: 3
  shadow:
    metallic: "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)"
    machined: "inset 0 0 20px rgba(0,0,0,0.1)"
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
    easing: "linear"
  typography:
    font:
      sans:
        primary: "Rajdhani"
        fallback:
          - "Arial"
          - "sans-serif"
      mono:
        primary: "Share Tech Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 700, tracking: 0.02 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 500, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S64': {
    paletteStrategy: 'Black and dark grey weave.',
    typography: 'Race car digital font.',
    radiusPolicy: 'Sleek aerodynamic curves.',
    shadowPolicy: 'Subtle glossy highlights.',
    borderLanguage: 'Adhesive borders.',
    patterns: 'Carbon fiber weave.',
    motion: 'Fast, high FPS.',
    dos: ['Use the weave', 'High performance feel', 'Glossy finish', 'Sporty'],
    donts: ['Don\'t use bright backgrounds', 'Don\'t look heavy', 'Don\'t look retro'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S64"
    style_name: "Carbon Fiber"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#212121"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#BDBDBD"
      muted: "#757575"
    brand:
      primary: "#d50000"
      accent: "#FF1744"
    border:
      strong: "#424242"
      subtle: "rgba(66,66,66,0.5)"
    state:
      success: "#00E676"
      warning: "#FFEA00"
      error: "#FF1744"
    focus:
      ring: "#d50000"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    aero: "20px 4px"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    gloss: "0 1px 0 rgba(255,255,255,0.1)"
    deep: "0 8px 32px rgba(0,0,0,0.5)"
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
      h2: { size: 40, line: 46, weight: 600, tracking: 0.03 }
      h3: { size: 28, line: 34, weight: 500, tracking: 0.02 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
  'S65': {
    paletteStrategy: 'Vibrant translucent colors, black lead lines.',
    typography: 'Gothic or blackletter.',
    radiusPolicy: 'Sharp geometric glass panes.',
    shadowPolicy: 'Colored light projection.',
    borderLanguage: 'Thick black lead lines.',
    patterns: 'Mosaic, colored glass.',
    motion: 'Shine, light passing through.',
    dos: ['Use rich colors', 'Black outlines', 'Light effects', 'Artistic'],
    donts: ['Don\'t be dull', 'Don\'t be opaque', 'Don\'t use modern minimal'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S65"
    style_name: "Stained Glass"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#121212"
      secondary: "#1E1E1E"
    text:
      primary: "#FFFFFF"
      secondary: "#E0E0E0"
      muted: "#9E9E9E"
    brand:
      primary: "#b71c1c"
      accent: "#0d47a1"
    glass:
      red: "rgba(183,28,28,0.7)"
      blue: "rgba(13,71,161,0.7)"
      yellow: "rgba(251,192,45,0.7)"
      green: "rgba(46,125,50,0.7)"
    border:
      strong: "#000000"
      lead: "#1A1A1A"
    state:
      success: "#4CAF50"
      warning: "#FFC107"
      error: "#F44336"
    focus:
      ring: "#fbc02d"
  radius:
    none: 0
    sm: 0
    md: 0
    lg: 0
  border:
    width:
      hairline: 1
      lead: 3
      strong: 5
  shadow:
    glow: "0 0 30px currentColor"
    light: "0 0 60px rgba(255,255,255,0.2)"
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
      fast: 300
      normal: 600
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Cinzel"
        fallback:
          - "Times New Roman"
          - "serif"
      display:
        primary: "UnifrakturMaguntia"
        fallback:
          - "serif"
    scale:
      h1: { size: 52, line: 64, weight: 700, tracking: 0.02 }
      h2: { size: 38, line: 48, weight: 600, tracking: 0.01 }
      h3: { size: 26, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 128]
\`\`\``,
  },
  'S66': {
    paletteStrategy: 'Soft pastels, whites, gray textures.',
    typography: 'Rounded and cozy.',
    radiusPolicy: 'Very round.',
    shadowPolicy: 'Soft fabric occlusion.',
    borderLanguage: 'None or fuzzy.',
    patterns: 'Knitted loops, cloth grain.',
    motion: 'Squishy, soft.',
    dos: ['Feel comfy', 'Use pattern overlay', 'Soft colors', 'Hyge'],
    donts: ['Don\'t look hard', 'Don\'t look cold', 'Don\'t be sharp'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S66"
    style_name: "Knitwear"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#fff9c4"
      secondary: "#FFF59D"
    text:
      primary: "#5D4037"
      secondary: "#795548"
      muted: "#A1887F"
    brand:
      primary: "#dce775"
      accent: "#ffab91"
    border:
      strong: "#BCAAA4"
      subtle: "rgba(188,170,164,0.4)"
    state:
      success: "#AED581"
      warning: "#FFD54F"
      error: "#EF9A9A"
    focus:
      ring: "#dce775"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 32
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    soft: "0 4px 20px rgba(0,0,0,0.08)"
    cozy: "0 8px 32px rgba(0,0,0,0.06)"
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
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "Quicksand"
          - "sans-serif"
      mono:
        primary: "Source Code Pro"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 60, weight: 700, tracking: 0 }
      h2: { size: 36, line: 46, weight: 600, tracking: 0 }
      h3: { size: 24, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
};
