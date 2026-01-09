import type { StyleDNAConfig } from './types';

// Pro 版進階風格配置 (S51-S100)
export const S51_S100_Pro_Configs: Record<string, StyleDNAConfig> = {
  'S51-Pro': {
    paletteStrategy: 'Hand-drawn sketch. Warm cream #FFF8E7 paper. Pencil gray #4A4A4A lines. Blue #5B8DD9 highlights.',
    typography: 'Handwriting fonts (Indie Flower, Patrick Hand). Sketchy natural feel.',
    radiusPolicy: 'Wobbly hand-drawn edges. Irregular curves.',
    shadowPolicy: 'Pencil sketch shadows, cross-hatching effects.',
    borderLanguage: 'Sketchy pencil lines, wobbly borders.',
    patterns: 'Notebook lines, margin rules, eraser smudges.',
    motion: 'Drawing line animations 200-500ms.',
    dos: [
      'Use hand-drawn pencil aesthetics',
      'Add notebook paper texture',
      'Create wobbly imperfect lines',
      'Use cross-hatching for shadows',
      'Add doodle elements',
      'Implement line-drawing animations'
    ],
    donts: [
      'Don\'t use clean digital lines',
      'Don\'t be too precise',
      'Don\'t forget the paper texture',
      'Don\'t use sharp corners'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S51-Pro"
    style_name: "Hand Drawn Pro"
    industry: "Creative/Education"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFF8E7"
      secondary: "#F5EED9"
      paper: "#FFFEF9"
    border:
      pencil: "#4A4A4A"
      subtle: "#9A9A8A"
    text:
      primary: "#2A2A2A"
      secondary: "#5A5A5A"
      muted: "#8A8A8A"
      blue: "#5B8DD9"
    brand:
      primary: "#5B8DD9"
      secondary: "#E85A5A"
      accent: "#4CAF50"
    status:
      success: "#4CAF50"
      warning: "#FFB74D"
      danger: "#E85A5A"
  typography:
    fontFamily:
      handwriting: "Indie Flower, Patrick Hand, cursive"
      sketch: "Architects Daughter, Caveat, cursive"
      body: "Kalam, Comic Neue, cursive"
    scale:
      h1: { size: 48, line: 60, weight: 400, tracking: 0 }
      h2: { size: 36, line: 48, weight: 400, tracking: 0 }
      h3: { size: 24, line: 34, weight: 400, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0 }
      small: { size: 14, line: 24, weight: 400, tracking: 0 }
  radius:
    wobbly: "5px 12px 8px 15px"
    sketch: "10px 5px 12px 8px"
  shadow:
    pencil: "2px 2px 0 rgba(74, 74, 74, 0.3)"
    sketch: "3px 3px 0 rgba(74, 74, 74, 0.2)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      draw: 600
    easing: "ease-out"
  sections:
    - "Sketch Navigation"
    - "Doodle Hero"
    - "Features List"
    - "How It Works"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Sketch Footer"
\`\`\``,
  },

  'S52-Pro': {
    paletteStrategy: 'Pop Art bold. Primary red #FF0000, yellow #FFFF00, blue #0066FF. Black outlines. Halftone patterns.',
    typography: 'Bold comic fonts (Bangers, Anton). Impactful display.',
    radiusPolicy: 'Varied for visual impact. 0-20px.',
    shadowPolicy: 'Hard offset shadows 4-6px. Ben-Day dots.',
    borderLanguage: 'Thick black outlines 3-5px.',
    patterns: 'Halftone dots, Ben-Day patterns.',
    motion: 'Pop explosion effects 100-300ms.',
    dos: [
      'Use bold primary pop colors',
      'Add halftone dot patterns',
      'Create comic panel layouts',
      'Use thick black outlines',
      'Add Warhol-inspired repetition',
      'Implement pop effect animations'
    ],
    donts: [
      'Don\'t be subtle',
      'Don\'t use muted colors',
      'Don\'t forget the halftone patterns',
      'Don\'t use thin lines'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S52-Pro"
    style_name: "Pop Art Pro"
    industry: "Art/Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#FFF5F0"
      yellow: "#FFFF00"
    border:
      outline: "#000000"
      strong: "#2A2A2A"
    text:
      primary: "#000000"
      secondary: "#2A2A2A"
      red: "#FF0000"
      blue: "#0066FF"
    brand:
      red: "#FF0000"
      yellow: "#FFFF00"
      blue: "#0066FF"
      pink: "#FF69B4"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      display: "Bangers, Anton, Impact, sans-serif"
      comic: "Comic Neue, Comic Sans MS, cursive"
    scale:
      h1: { size: 80, line: 84, weight: 400, tracking: 0.05 }
      h2: { size: 56, line: 60, weight: 400, tracking: 0.03 }
      h3: { size: 36, line: 42, weight: 400, tracking: 0.02 }
      body: { size: 18, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    none: 0
    bubble: 20
    circle: 9999
  shadow:
    hard: "5px 5px 0 #000000"
    pop: "4px 4px 0 #FF0000"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 200
      pop: 400
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  sections:
    - "Pop Navigation"
    - "Warhol Hero"
    - "Panel Grid"
    - "Feature Dots"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Pop Footer"
\`\`\``,
  },

  'S53-Pro': {
    paletteStrategy: 'Street graffiti. Dark wall #1A1A1A. Neon pink #FF00FF, cyan #00FFFF, yellow #FFFF00. Spray effects.',
    typography: 'Graffiti tag fonts (Permanent Marker, Bungee). Urban bold.',
    radiusPolicy: 'Organic spray shapes. Rounded drips.',
    shadowPolicy: 'Neon glows, spray mist.',
    borderLanguage: 'Spray paint edges, drip patterns.',
    patterns: 'Brick walls, spray drips, tag elements.',
    motion: 'Spray paint animations 200-500ms.',
    dos: [
      'Use neon graffiti colors',
      'Add spray paint drip effects',
      'Create urban street aesthetic',
      'Use brick wall textures',
      'Implement tag-style typography',
      'Add neon glow effects'
    ],
    donts: [
      'Don\'t be too clean',
      'Don\'t use corporate aesthetics',
      'Don\'t forget the urban grit',
      'Don\'t use light backgrounds'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S53-Pro"
    style_name: "Graffiti Pro"
    industry: "Urban/Street"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1A1A"
      secondary: "#2A2A2A"
      brick: "#4A3A3A"
    border:
      glow: "rgba(255, 0, 255, 0.5)"
      spray: "#FFFFFF"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
    brand:
      pink: "#FF00FF"
      cyan: "#00FFFF"
      yellow: "#FFFF00"
      green: "#00FF00"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      graffiti: "Permanent Marker, Bungee, cursive"
      tag: "Rubik Mono One, Anton, sans-serif"
      body: "Roboto, Arial, sans-serif"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: 0.02 }
      h2: { size: 48, line: 52, weight: 700, tracking: 0.01 }
      h3: { size: 32, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    spray: "20% 80% 60% 40% / 40% 20% 80% 60%"
    drip: "0 0 20px 20px"
  shadow:
    neon_pink: "0 0 30px rgba(255, 0, 255, 0.6)"
    neon_cyan: "0 0 30px rgba(0, 255, 255, 0.6)"
    spray: "0 0 20px rgba(255, 255, 255, 0.3)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      spray: 600
    easing: "ease-out"
  sections:
    - "Tag Navigation"
    - "Graffiti Hero"
    - "Spray Features"
    - "Gallery Wall"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Street Footer"
\`\`\``,
  },

  'S54-Pro': {
    paletteStrategy: 'Art Nouveau. Cream #FDF5E6, gold #D4AF37, forest green #228B22. Flowing organic lines.',
    typography: 'Decorative Art Nouveau fonts (Playfair Display). Elegant flourishes.',
    radiusPolicy: 'Organic flowing curves. Plant-like shapes.',
    shadowPolicy: 'Gold highlights, soft depth.',
    borderLanguage: 'Ornate floral borders, vine patterns.',
    patterns: 'Floral motifs, peacock feathers, organic curves.',
    motion: 'Elegant flowing animations 400-800ms.',
    dos: [
      'Use flowing organic lines',
      'Add floral and vine elements',
      'Implement gold accents',
      'Create elegant asymmetry',
      'Use Art Nouveau typography',
      'Add peacock feather motifs'
    ],
    donts: [
      'Don\'t use geometric shapes',
      'Don\'t use modern minimalism',
      'Don\'t forget the organic flow',
      'Don\'t use sharp angles'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S54-Pro"
    style_name: "Art Nouveau Pro"
    industry: "Art/Design"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FDF5E6"
      secondary: "#F5EBD7"
      elevated: "#FFFEF9"
    border:
      gold: "#D4AF37"
      subtle: "#C4A77D"
      green: "#228B22"
    text:
      primary: "#2C2416"
      secondary: "#5A4A3A"
      muted: "#8A7A6A"
      gold: "#D4AF37"
    brand:
      primary: "#D4AF37"
      secondary: "#228B22"
      accent: "#8B4513"
    status:
      success: "#228B22"
      warning: "#D4AF37"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Playfair Display, Cormorant Garamond, serif"
      body: "Lora, Georgia, serif"
      decorative: "Cinzel Decorative, serif"
    scale:
      h1: { size: 64, line: 76, weight: 400, tracking: 0.02 }
      h2: { size: 44, line: 56, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    organic: "30% 70% 60% 40% / 40% 30% 70% 60%"
    flowing: "20% 80% 50% 50% / 50% 20% 80% 50%"
  shadow:
    gold: "0 0 20px rgba(212, 175, 55, 0.3)"
    soft: "0 4px 20px rgba(0, 0, 0, 0.1)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      flow: 1000
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Ornate Navigation"
    - "Flowering Hero"
    - "Features Grid"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "Elegant CTA"
    - "Art Nouveau Footer"
\`\`\``,
  },

  'S55-Pro': {
    paletteStrategy: 'Deep ocean. Navy #0A1628, cyan #00CED1, coral #FF6B6B. Underwater bioluminescence.',
    typography: 'Flowing rounded fonts (Quicksand, Nunito). Fluid movement.',
    radiusPolicy: 'Bubble and wave shapes. Organic curves.',
    shadowPolicy: 'Underwater glows, bioluminescent effects.',
    borderLanguage: 'Wave patterns, bubble edges.',
    patterns: 'Bubbles, coral, seaweed, wave ripples.',
    motion: 'Floating wave animations 400-800ms.',
    dos: [
      'Use deep ocean color palette',
      'Add underwater light effects',
      'Create bubble and wave animations',
      'Use bioluminescent glows',
      'Implement coral and seaweed patterns',
      'Add floating particle effects'
    ],
    donts: [
      'Don\'t use land-based elements',
      'Don\'t use harsh bright colors',
      'Don\'t forget the depth feeling',
      'Don\'t use sharp geometric shapes'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S55-Pro"
    style_name: "Oceanic Pro"
    industry: "Marine/Environment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A1628"
      secondary: "#0F1E38"
      deep: "#050D18"
    border:
      glow: "rgba(0, 206, 209, 0.4)"
      coral: "#FF6B6B"
    text:
      primary: "#FFFFFF"
      secondary: "#A0C4D8"
      muted: "#6A8A9A"
      cyan: "#00CED1"
    brand:
      primary: "#00CED1"
      secondary: "#FF6B6B"
      accent: "#48D1CC"
    status:
      success: "#48D1CC"
      warning: "#FFD93D"
      danger: "#FF6B6B"
  typography:
    fontFamily:
      sans: "Quicksand, Nunito, sans-serif"
      display: "Comfortaa, Quicksand, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 600, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    bubble: 9999
    wave: "50% 20% 80% 30% / 30% 50% 20% 70%"
  shadow:
    glow_cyan: "0 0 40px rgba(0, 206, 209, 0.4)"
    underwater: "0 10px 40px rgba(0, 0, 0, 0.5)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      wave: 1200
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Surface Navigation"
    - "Deep Sea Hero"
    - "Coral Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Ocean Floor Footer"
\`\`\``,
  },

  'S56-Pro': {
    paletteStrategy: 'Deep forest. Dark green #1B3D2F, moss #4A7C59, wood brown #8B5A2B. Organic textures.',
    typography: 'Nature-inspired fonts (Playfair Display, Lato). Earthy elegance.',
    radiusPolicy: 'Organic leaf and bark shapes.',
    shadowPolicy: 'Dappled forest light, tree shadows.',
    borderLanguage: 'Bark texture, leaf edges.',
    patterns: 'Leaf patterns, wood grain, moss textures.',
    motion: 'Growing plant animations 400-800ms.',
    dos: [
      'Use deep forest greens and browns',
      'Add organic wood and leaf textures',
      'Create dappled light effects',
      'Use nature-inspired layouts',
      'Implement growing animations',
      'Add moss and bark details'
    ],
    donts: [
      'Don\'t use industrial elements',
      'Don\'t use neon colors',
      'Don\'t forget the organic feel',
      'Don\'t use geometric patterns'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S56-Pro"
    style_name: "Forest Pro"
    industry: "Nature/Environment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1B3D2F"
      secondary: "#254538"
      bark: "#3D2817"
    border:
      subtle: "#4A7C59"
      strong: "#8B5A2B"
    text:
      primary: "#F5F0E6"
      secondary: "#C4D4BC"
      muted: "#8A9A8A"
      moss: "#6B8E23"
    brand:
      primary: "#4A7C59"
      secondary: "#8B5A2B"
      accent: "#C4A77D"
    status:
      success: "#4A7C59"
      warning: "#C4A77D"
      danger: "#A05050"
  typography:
    fontFamily:
      serif: "Playfair Display, Georgia, serif"
      sans: "Lato, Open Sans, sans-serif"
    scale:
      h1: { size: 56, line: 68, weight: 600, tracking: -0.01 }
      h2: { size: 40, line: 52, weight: 600, tracking: -0.005 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    organic: "30% 70% 50% 50% / 50% 30% 70% 50%"
    bark: "8px 4px 12px 6px"
  shadow:
    dappled: "0 8px 32px rgba(0, 0, 0, 0.4)"
    tree: "4px 4px 16px rgba(0, 0, 0, 0.3)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      grow: 1000
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Canopy Navigation"
    - "Forest Hero"
    - "Features Grove"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Roots Footer"
\`\`\``,
  },

  'S57-Pro': {
    paletteStrategy: 'Desert sands. Sand #C4A77D, terracotta #CD5C5C, sunset orange #FF7F50. Heat patterns.',
    typography: 'Weathered fonts (Cinzel, Oswald). Desert sun-bleached.',
    radiusPolicy: 'Dune curve shapes. Soft flowing.',
    shadowPolicy: 'Heat haze effects, warm glows.',
    borderLanguage: 'Sand texture borders, cracked earth.',
    patterns: 'Dune textures, sand ripples, sun rays.',
    motion: 'Heat shimmer animations 300-600ms.',
    dos: [
      'Use warm desert sand palette',
      'Add heat haze and shimmer effects',
      'Create dune-like flowing shapes',
      'Use sun-bleached textures',
      'Implement sunset gradients',
      'Add cracked earth patterns'
    ],
    donts: [
      'Don\'t use cool colors',
      'Don\'t use lush vegetation',
      'Don\'t forget the heat feel',
      'Don\'t use sharp cold edges'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S57-Pro"
    style_name: "Desert Pro"
    industry: "Travel/Adventure"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#E8D5B7"
      secondary: "#D4C4A5"
      sand: "#C4A77D"
    border:
      subtle: "#B8A080"
      terracotta: "#CD5C5C"
    text:
      primary: "#3D2E1A"
      secondary: "#6B5A4A"
      muted: "#9A8A7A"
      orange: "#FF7F50"
    brand:
      primary: "#FF7F50"
      secondary: "#CD5C5C"
      accent: "#8B4513"
    status:
      success: "#6B8E23"
      warning: "#FF7F50"
      danger: "#CD5C5C"
  typography:
    fontFamily:
      display: "Cinzel, Georgia, serif"
      sans: "Oswald, Roboto Condensed, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 600, tracking: 0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    dune: "40% 60% 50% 50% / 50% 40% 60% 50%"
    soft: 16
  shadow:
    heat: "0 8px 40px rgba(255, 127, 80, 0.3)"
    warm: "0 4px 20px rgba(139, 69, 19, 0.2)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      shimmer: 800
    easing: "ease-out"
  sections:
    - "Oasis Navigation"
    - "Dune Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Sunset Footer"
\`\`\``,
  },

  'S58-Pro': {
    paletteStrategy: 'Arctic polar. Ice white #F0F8FF, frost blue #87CEEB, aurora green #7FFFD4. Crystal effects.',
    typography: 'Clean crisp fonts (Inter, Poppins). Ice-cold precision.',
    radiusPolicy: 'Crystal angular shapes. Ice facets.',
    shadowPolicy: 'Ice glows, aurora northern lights.',
    borderLanguage: 'Frost patterns, ice crystal edges.',
    patterns: 'Ice crystals, snowflakes, aurora borealis.',
    motion: 'Aurora shimmer animations 500-1000ms.',
    dos: [
      'Use cool arctic ice palette',
      'Add frost and crystal effects',
      'Create aurora borealis patterns',
      'Use ice facet shapes',
      'Implement snowflake elements',
      'Add cold breath/mist effects'
    ],
    donts: [
      'Don\'t use warm colors',
      'Don\'t use organic rounded shapes',
      'Don\'t forget the cold crystalline feel',
      'Don\'t use earthy textures'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S58-Pro"
    style_name: "Polar Pro"
    industry: "Winter/Arctic"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A1628"
      secondary: "#1A2638"
      ice: "#F0F8FF"
    border:
      frost: "rgba(135, 206, 235, 0.5)"
      ice: "#87CEEB"
    text:
      primary: "#FFFFFF"
      secondary: "#B0D4E8"
      muted: "#6A8A9A"
      aurora: "#7FFFD4"
    brand:
      primary: "#87CEEB"
      secondary: "#7FFFD4"
      accent: "#DDA0DD"
    status:
      success: "#7FFFD4"
      warning: "#FFD700"
      danger: "#FF6B6B"
  typography:
    fontFamily:
      sans: "Inter, Poppins, system-ui, sans-serif"
      display: "Montserrat, Poppins, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 600, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    crystal: 0
    ice: 4
    aurora: 16
  shadow:
    frost: "0 0 40px rgba(135, 206, 235, 0.4)"
    aurora: "0 0 60px rgba(127, 255, 212, 0.3)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      aurora: 1500
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Ice Navigation"
    - "Aurora Hero"
    - "Crystal Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Glacier Footer"
\`\`\``,
  },

  'S59-Pro': {
    paletteStrategy: 'Tropical jungle. Vibrant green #228B22, hibiscus pink #FF69B4, sunset orange #FFA500. Lush.',
    typography: 'Bold tropical fonts (Poppins, Montserrat). Vibrant energy.',
    radiusPolicy: 'Organic leaf shapes. Flowing curves.',
    shadowPolicy: 'Dappled tropical light. Warm shadows.',
    borderLanguage: 'Leaf edges, vine patterns.',
    patterns: 'Tropical foliage, monstera leaves, flowers.',
    motion: 'Swaying leaf animations 400-800ms.',
    dos: [
      'Use vibrant tropical greens',
      'Add exotic flower accents',
      'Create monstera leaf patterns',
      'Use tropical sunset colors',
      'Implement swaying animations',
      'Add bird and wildlife elements'
    ],
    donts: [
      'Don\'t be too minimal',
      'Don\'t use muted colors',
      'Don\'t forget the lush abundance',
      'Don\'t use geometric patterns'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S59-Pro"
    style_name: "Jungle Pro"
    industry: "Tropical/Travel"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A3D2F"
      secondary: "#254538"
      leaf: "#228B22"
    border:
      subtle: "#4A7C59"
      flower: "#FF69B4"
    text:
      primary: "#FFFFFF"
      secondary: "#C4D4BC"
      muted: "#8A9A8A"
      pink: "#FF69B4"
    brand:
      primary: "#228B22"
      secondary: "#FF69B4"
      accent: "#FFA500"
    status:
      success: "#228B22"
      warning: "#FFA500"
      danger: "#FF4500"
  typography:
    fontFamily:
      sans: "Poppins, Montserrat, sans-serif"
      display: "Comfortaa, Quicksand, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    leaf: "60% 40% 50% 50% / 40% 60% 50% 50%"
    organic: 20
  shadow:
    tropical: "0 8px 32px rgba(34, 139, 34, 0.3)"
    flower: "0 0 30px rgba(255, 105, 180, 0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      sway: 1200
    easing: "ease-in-out"
  sections:
    - "Canopy Navigation"
    - "Jungle Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Rainforest Footer"
\`\`\``,
  },

  'S60-Pro': {
    paletteStrategy: 'Volcanic lava. Deep black #0A0A0A, ember red #FF4500, molten orange #FF6600. Glowing cracks.',
    typography: 'Bold fiery fonts (Bebas Neue, Anton). Intense power.',
    radiusPolicy: 'Flowing lava shapes. Crack patterns.',
    shadowPolicy: 'Ember glows, heat radiation.',
    borderLanguage: 'Crack patterns, lava edges.',
    patterns: 'Lava cracks, ember particles, smoke.',
    motion: 'Pulsing ember glow 300-800ms.',
    dos: [
      'Use volcanic red/orange on black',
      'Add glowing crack patterns',
      'Create ember particle effects',
      'Use heat glow animations',
      'Implement lava flow effects',
      'Add smoke and ash elements'
    ],
    donts: [
      'Don\'t use cool colors',
      'Don\'t use soft shapes',
      'Don\'t forget the intense heat',
      'Don\'t use bright backgrounds'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S60-Pro"
    style_name: "Volcanic Pro"
    industry: "Gaming/Intense"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0A"
      secondary: "#1A1A1A"
      basalt: "#2A2A2A"
    border:
      ember: "#FF4500"
      glow: "rgba(255, 69, 0, 0.5)"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
      orange: "#FF6600"
    brand:
      primary: "#FF4500"
      secondary: "#FF6600"
      accent: "#FFD700"
    status:
      success: "#FFD700"
      warning: "#FF6600"
      danger: "#FF0000"
  typography:
    fontFamily:
      display: "Bebas Neue, Anton, Impact, sans-serif"
      sans: "Roboto, Arial, sans-serif"
    scale:
      h1: { size: 80, line: 84, weight: 700, tracking: 0.02 }
      h2: { size: 56, line: 60, weight: 700, tracking: 0.01 }
      h3: { size: 36, line: 42, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    crack: "10px 5px 15px 10px"
    flow: "40% 60% 50% 50% / 50% 40% 60% 50%"
  shadow:
    ember: "0 0 40px rgba(255, 69, 0, 0.6)"
    heat: "0 0 60px rgba(255, 102, 0, 0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      pulse: 1200
    easing: "ease-in-out"
  sections:
    - "Molten Navigation"
    - "Volcano Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Ash Footer"
\`\`\``,
  },

  'S61-Pro': {
    paletteStrategy: 'Leather texture. Rich brown #8B4513, saddle tan #C4A77D, brass #B8860B. Tooled craftsmanship.',
    typography: 'Vintage western serif (Playfair Display, Lora). Tooled quality.',
    radiusPolicy: 'Soft leather edges 8-16px. Stitched curves.',
    shadowPolicy: 'Embossed depth shadows. Leather indentation.',
    borderLanguage: 'Stitching borders, tooled patterns.',
    patterns: 'Leather grain, western tooling, brass rivets.',
    motion: 'Subtle leather depth 200-400ms.',
    dos: [
      'Use rich leather brown palette',
      'Add stitching detail elements',
      'Create tooled leather patterns',
      'Use brass accent buttons',
      'Implement embossed effects',
      'Add aged leather texture'
    ],
    donts: [
      'Don\'t use flat digital colors',
      'Don\'t forget the crafted feel',
      'Don\'t use modern minimalism',
      'Don\'t use bright colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S61-Pro"
    style_name: "Leather Pro"
    industry: "Luxury/Craft"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5EBD7"
      secondary: "#E8D5B7"
      leather: "#8B4513"
    border:
      stitch: "#C4A77D"
      strong: "#5A3A1A"
    text:
      primary: "#3A2A1A"
      secondary: "#5A4A3A"
      muted: "#8A7A6A"
      brass: "#B8860B"
    brand:
      primary: "#8B4513"
      secondary: "#B8860B"
      accent: "#C4A77D"
    status:
      success: "#6B8E4F"
      warning: "#B8860B"
      danger: "#8B0000"
  typography:
    fontFamily:
      serif: "Playfair Display, Lora, Georgia, serif"
      sans: "Source Sans Pro, sans-serif"
    scale:
      h1: { size: 56, line: 68, weight: 600, tracking: -0.01 }
      h2: { size: 40, line: 52, weight: 600, tracking: -0.005 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    leather: 12
    stitch: 8
  shadow:
    emboss: "inset 2px 2px 4px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.1)"
    depth: "0 4px 16px rgba(58, 42, 26, 0.3)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      slow: 500
    easing: "ease-out"
  sections:
    - "Leather Navigation"
    - "Tooled Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Stitched Footer"
\`\`\``,
  },

  'S62-Pro': {
    paletteStrategy: 'Denim blue. Indigo #3F51B5, washed blue #6B7A8F, copper rivets #B87333. Fabric texture.',
    typography: 'Workwear fonts (Oswald, Roboto). Honest craftsmanship.',
    radiusPolicy: 'Patch shapes 4-12px. Stitched edges.',
    shadowPolicy: 'Fabric depth shadows. Woven texture.',
    borderLanguage: 'Stitched edges, patch borders.',
    patterns: 'Denim weave texture, wear marks.',
    motion: 'Fabric ripple animations 200-400ms.',
    dos: [
      'Use authentic denim blue palette',
      'Add copper rivet details',
      'Create patch and stitch elements',
      'Use denim weave texture',
      'Implement selvage edge details',
      'Add wear and fade effects'
    ],
    donts: [
      'Don\'t use smooth digital surfaces',
      'Don\'t forget the fabric feel',
      'Don\'t use neon colors',
      'Don\'t be too polished'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S62-Pro"
    style_name: "Denim Pro"
    industry: "Fashion/Lifestyle"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#3F51B5"
      secondary: "#5C6BC0"
      washed: "#6B7A8F"
    border:
      stitch: "#FFD700"
      copper: "#B87333"
    text:
      primary: "#FFFFFF"
      secondary: "#E8E8F0"
      muted: "#A0A8B8"
      yellow: "#FFD700"
    brand:
      primary: "#3F51B5"
      secondary: "#B87333"
      accent: "#FFD700"
    status:
      success: "#4CAF50"
      warning: "#FFD700"
      danger: "#E85A5A"
  typography:
    fontFamily:
      display: "Oswald, Roboto Condensed, sans-serif"
      sans: "Roboto, Arial, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: 0.01 }
      h2: { size: 44, line: 52, weight: 600, tracking: 0 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    patch: 8
    stitch: 4
  shadow:
    fabric: "2px 2px 8px rgba(0,0,0,0.3)"
    rivet: "0 2px 4px rgba(0,0,0,0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      ripple: 500
    easing: "ease-out"
  sections:
    - "Denim Navigation"
    - "Patch Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Selvage Footer"
\`\`\``,
  },

  'S63-Pro': {
    paletteStrategy: 'Brushed steel. Metal gray #6B7280, silver #C0C0C0, dark steel #374151. Industrial precision.',
    typography: 'Industrial sans-serif (Roboto, Inter). Technical precision.',
    radiusPolicy: 'Minimal radius 2-6px. Sharp industrial.',
    shadowPolicy: 'Metallic reflections and highlights.',
    borderLanguage: 'Metal edges, industrial seams.',
    patterns: 'Brushed metal grain, bolt patterns.',
    motion: 'Metallic shine animations 200-400ms.',
    dos: [
      'Use brushed metal texture',
      'Add metallic reflections',
      'Create industrial bolt details',
      'Use precision engineering layout',
      'Implement steel-like surfaces',
      'Add industrial highlighting'
    ],
    donts: [
      'Don\'t use organic shapes',
      'Don\'t use warm colors',
      'Don\'t forget the metallic sheen',
      'Don\'t be too soft'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S63-Pro"
    style_name: "Brushed Steel Pro"
    industry: "Industrial/Engineering"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#374151"
      secondary: "#4B5563"
      steel: "#6B7280"
    border:
      subtle: "#6B7280"
      strong: "#9CA3AF"
    text:
      primary: "#FFFFFF"
      secondary: "#D1D5DB"
      muted: "#9CA3AF"
      silver: "#C0C0C0"
    brand:
      primary: "#C0C0C0"
      secondary: "#3B82F6"
      accent: "#EF4444"
    status:
      success: "#22C55E"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Roboto, Inter, system-ui, sans-serif"
      display: "Oswald, Roboto Condensed, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    none: 0
    sm: 2
    md: 4
  shadow:
    metal: "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
    industrial: "0 4px 16px rgba(0,0,0,0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      shine: 500
    easing: "ease-out"
  sections:
    - "Steel Navigation"
    - "Industrial Hero"
    - "Features"
    - "Specifications"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Metal Footer"
\`\`\``,
  },

  'S64-Pro': {
    paletteStrategy: 'Carbon fiber. Woven black #1A1A1A, glossy finish. Red accents #FF0000. Performance.',
    typography: 'High-tech fonts (Rajdhani, Exo 2). Performance racing.',
    radiusPolicy: 'Sport car curves 8-20px. Aerodynamic.',
    shadowPolicy: 'Glossy reflections, carbon depth.',
    borderLanguage: 'Carbon edges, sport stripes.',
    patterns: 'Woven carbon fiber pattern.',
    motion: 'Sporty quick animations 100-300ms.',
    dos: [
      'Use woven carbon fiber pattern',
      'Add glossy reflections',
      'Create performance racing aesthetic',
      'Use red/yellow sport accents',
      'Implement aerodynamic curves',
      'Add premium material feel'
    ],
    donts: [
      'Don\'t use matte dull surfaces',
      'Don\'t use organic shapes',
      'Don\'t forget the premium feel',
      'Don\'t be too playful'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S64-Pro"
    style_name: "Carbon Fiber Pro"
    industry: "Automotive/Sport"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0A"
      secondary: "#1A1A1A"
      carbon: "#2A2A2A"
    border:
      subtle: "#3A3A3A"
      red: "#FF0000"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
      red: "#FF0000"
    brand:
      primary: "#FF0000"
      secondary: "#FFD700"
      accent: "#00BFFF"
    status:
      success: "#00FF00"
      warning: "#FFD700"
      danger: "#FF0000"
  typography:
    fontFamily:
      display: "Rajdhani, Exo 2, Orbitron, sans-serif"
      sans: "Roboto, Arial, sans-serif"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: 0.02 }
      h2: { size: 48, line: 52, weight: 600, tracking: 0.01 }
      h3: { size: 32, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sport: 12
    aero: 20
  shadow:
    glossy: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
    carbon: "0 8px 32px rgba(0,0,0,0.6)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 200
      sport: 350
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Racing Navigation"
    - "Performance Hero"
    - "Features"
    - "Specifications"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Finish Line Footer"
\`\`\``,
  },

  'S65-Pro': {
    paletteStrategy: 'Stained glass. Jewel tones: ruby #E0115F, sapphire #0F52BA, emerald #50C878. Lead lines #2A2A2A.',
    typography: 'Gothic fonts (Cinzel, Playfair Display). Medieval elegance.',
    radiusPolicy: 'Glass panel shapes. Faceted edges.',
    shadowPolicy: 'Luminous glow through glass.',
    borderLanguage: 'Lead line borders 2-4px.',
    patterns: 'Glass mosaic, cathedral patterns.',
    motion: 'Light glow animations 400-800ms.',
    dos: [
      'Use jewel-toned glass panels',
      'Add dark lead line borders',
      'Create luminous glow effects',
      'Use faceted panel shapes',
      'Implement light passing through',
      'Add cathedral aesthetic'
    ],
    donts: [
      'Don\'t use flat matte colors',
      'Don\'t forget the lead lines',
      'Don\'t use modern minimal styles',
      'Don\'t make it too dark'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S65-Pro"
    style_name: "Stained Glass Pro"
    industry: "Art/Religious"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1A2E"
      secondary: "#16213E"
      dark: "#0F0F1E"
    border:
      lead: "#2A2A2A"
      gold: "#D4AF37"
    text:
      primary: "#FFFFFF"
      secondary: "#E0E0E0"
      muted: "#A0A0A0"
    brand:
      ruby: "#E0115F"
      sapphire: "#0F52BA"
      emerald: "#50C878"
      gold: "#D4AF37"
    status:
      success: "#50C878"
      warning: "#D4AF37"
      danger: "#E0115F"
  typography:
    fontFamily:
      display: "Cinzel, Playfair Display, Georgia, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 600, tracking: 0.02 }
      h2: { size: 44, line: 56, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    panel: 4
    facet: 0
  shadow:
    glow: "0 0 30px rgba(224, 17, 95, 0.3)"
    luminous: "0 0 50px rgba(80, 200, 120, 0.2)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      glow: 1200
    easing: "ease-in-out"
  sections:
    - "Cathedral Navigation"
    - "Rose Window Hero"
    - "Panel Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Mosaic Footer"
\`\`\``,
  },

  'S66-Pro': {
    paletteStrategy: 'Knitwear cozy. Cream #FDF5E6, cinnamon #D2691E, forest green #228B22. Cable patterns.',
    typography: 'Soft friendly fonts (Quicksand, Nunito). Warm comfort.',
    radiusPolicy: 'Soft rounded shapes 16-24px. Cozy pillows.',
    shadowPolicy: 'Fabric depth, soft shadows.',
    borderLanguage: 'Knit pattern borders.',
    patterns: 'Cable knit textures, Fair Isle patterns.',
    motion: 'Cozy soft animations 300-600ms.',
    dos: [
      'Use warm cozy color palette',
      'Add cable knit textures',
      'Create soft rounded shapes',
      'Use Fair Isle patterns',
      'Implement yarn-like elements',
      'Add hygge comfort feel'
    ],
    donts: [
      'Don\'t use cold industrial colors',
      'Don\'t use sharp edges',
      'Don\'t forget the textile feel',
      'Don\'t be too minimal'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S66-Pro"
    style_name: "Knitwear Pro"
    industry: "Lifestyle/Home"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FDF5E6"
      secondary: "#F5EBD7"
      cream: "#FFFAF0"
    border:
      subtle: "#D4C4A5"
      cinnamon: "#D2691E"
    text:
      primary: "#3A2A1A"
      secondary: "#5A4A3A"
      muted: "#8A7A6A"
      green: "#228B22"
    brand:
      primary: "#D2691E"
      secondary: "#228B22"
      accent: "#8B4513"
    status:
      success: "#228B22"
      warning: "#D2691E"
      danger: "#A52A2A"
  typography:
    fontFamily:
      sans: "Quicksand, Nunito, sans-serif"
      display: "Comfortaa, Quicksand, sans-serif"
    scale:
      h1: { size: 56, line: 68, weight: 600, tracking: -0.01 }
      h2: { size: 40, line: 52, weight: 600, tracking: -0.005 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    cozy: 20
    pillow: 24
  shadow:
    soft: "0 4px 20px rgba(58, 42, 26, 0.1)"
    cozy: "0 8px 32px rgba(58, 42, 26, 0.15)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 200
      normal: 400
      cozy: 700
    easing: "ease-out"
  sections:
    - "Cozy Navigation"
    - "Cable Knit Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Warm Footer"
\`\`\``,
  },

  'S67-Pro': {
    paletteStrategy: 'Cybernetic. Dark chrome #1A1A2E. Neon green #00FF00, circuit traces. AR overlays.',
    typography: 'HUD fonts (Share Tech Mono, Orbitron). Digital precision.',
    radiusPolicy: 'HUD panel shapes. Technical angles.',
    shadowPolicy: 'Circuit glows, data stream effects.',
    borderLanguage: 'Circuit trace borders, digital grids.',
    patterns: 'Circuit board patterns, data streams.',
    motion: 'Scanning animations 200-500ms.',
    dos: [
      'Use circuit board patterns',
      'Add AR/HUD overlay elements',
      'Create neon green accents',
      'Use digital data streams',
      'Implement scanning animations',
      'Add cybernetic implant aesthetic'
    ],
    donts: [
      'Don\'t use organic elements',
      'Don\'t use warm natural colors',
      'Don\'t forget the digital precision',
      'Don\'t be too soft'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S67-Pro"
    style_name: "Cybernetic Pro"
    industry: "Tech/Sci-Fi"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A15"
      secondary: "#15152A"
      chrome: "#1A1A2E"
    border:
      circuit: "#00FF00"
      subtle: "#3A3A5A"
    text:
      primary: "#FFFFFF"
      secondary: "#A0A0C0"
      muted: "#606080"
      neon: "#00FF00"
    brand:
      primary: "#00FF00"
      secondary: "#00BFFF"
      accent: "#FF00FF"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      mono: "Share Tech Mono, Fira Code, monospace"
      display: "Orbitron, Audiowide, sans-serif"
    scale:
      h1: { size: 64, line: 70, weight: 700, tracking: 0.05 }
      h2: { size: 44, line: 50, weight: 600, tracking: 0.03 }
      h3: { size: 28, line: 34, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.02 }
  radius:
    panel: 4
    hud: 2
  shadow:
    circuit: "0 0 20px rgba(0, 255, 0, 0.4)"
    glow: "0 0 40px rgba(0, 255, 0, 0.3)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 250
      scan: 600
    easing: "linear"
  sections:
    - "HUD Navigation"
    - "Cybernetic Hero"
    - "Circuit Features"
    - "Data Streams"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Matrix Footer"
\`\`\``,
  },

  'S68-Pro': {
    paletteStrategy: 'Steampunk brass. Copper #B87333, brass #D4AF37, dark wood #3D2817. Victorian machinery.',
    typography: 'Victorian decorative fonts (Playfair Display, Cinzel). Ornate elegance.',
    radiusPolicy: 'Gear and Victorian shapes. Ornate curves.',
    shadowPolicy: 'Brass reflections, gear shadows.',
    borderLanguage: 'Ornate Victorian borders, gear edges.',
    patterns: 'Gear mechanisms, cog patterns, steam pipes.',
    motion: 'Clockwork gear animations 400-800ms.',
    dos: [
      'Use brass and copper metals',
      'Add gear and cog elements',
      'Create Victorian ornate details',
      'Use steam pipe accents',
      'Implement clockwork animations',
      'Add aged patina effects'
    ],
    donts: [
      'Don\'t use modern tech styling',
      'Don\'t use plastic colors',
      'Don\'t forget the mechanical feel',
      'Don\'t be too minimal'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S68-Pro"
    style_name: "Steampunk Pro"
    industry: "Entertainment/Fashion"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1410"
      secondary: "#2A2420"
      wood: "#3D2817"
    border:
      brass: "#D4AF37"
      copper: "#B87333"
    text:
      primary: "#F5E6D3"
      secondary: "#C4A77D"
      muted: "#8A7A6A"
      gold: "#D4AF37"
    brand:
      primary: "#B87333"
      secondary: "#D4AF37"
      accent: "#8B0000"
    status:
      success: "#228B22"
      warning: "#D4AF37"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Playfair Display, Cinzel, Georgia, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 600, tracking: 0.02 }
      h2: { size: 44, line: 56, weight: 600, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    gear: 9999
    victorian: 8
  shadow:
    brass: "0 0 30px rgba(212, 175, 55, 0.3)"
    depth: "4px 4px 12px rgba(0, 0, 0, 0.4)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      clockwork: 1200
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Brass Navigation"
    - "Clockwork Hero"
    - "Gear Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Victorian Footer"
\`\`\``,
  },

  'S69-Pro': {
    paletteStrategy: 'Alien bioluminescent. Dark purple #1A0A2E, neon cyan #00FFFF, toxic green #39FF14. Organic alien.',
    typography: 'Alien-inspired fonts (Audiowide, Exo 2). Otherworldly.',
    radiusPolicy: 'Organic alien shapes. Blob morphs.',
    shadowPolicy: 'Bioluminescent glows.',
    borderLanguage: 'Organic alien membrane edges.',
    patterns: 'Alien textures, membrane patterns.',
    motion: 'Pulsing organic animations 500-1200ms.',
    dos: [
      'Use bioluminescent color effects',
      'Add organic alien shapes',
      'Create pulsing glow rhythms',
      'Use membrane textures',
      'Implement otherworldly aesthetic',
      'Add cosmic particle effects'
    ],
    donts: [
      'Don\'t use Earth-like elements',
      'Don\'t use familiar patterns',
      'Don\'t forget the alien feel',
      'Don\'t use warm human colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S69-Pro"
    style_name: "Alien Pro"
    industry: "Sci-Fi/Gaming"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0515"
      secondary: "#150A25"
      dark: "#1A0A2E"
    border:
      glow: "rgba(0, 255, 255, 0.5)"
      membrane: "#39FF14"
    text:
      primary: "#FFFFFF"
      secondary: "#A0A0E0"
      muted: "#606090"
      cyan: "#00FFFF"
    brand:
      primary: "#00FFFF"
      secondary: "#39FF14"
      accent: "#FF00FF"
    status:
      success: "#39FF14"
      warning: "#FFFF00"
      danger: "#FF0066"
  typography:
    fontFamily:
      display: "Audiowide, Exo 2, Orbitron, sans-serif"
      sans: "Rajdhani, Exo 2, sans-serif"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: 0.03 }
      h2: { size: 48, line: 52, weight: 600, tracking: 0.02 }
      h3: { size: 32, line: 38, weight: 600, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    organic: "40% 60% 55% 45% / 50% 40% 60% 50%"
    blob: "50% 50% 40% 60% / 40% 50% 50% 60%"
  shadow:
    bio: "0 0 50px rgba(0, 255, 255, 0.4)"
    toxic: "0 0 40px rgba(57, 255, 20, 0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 700
      pulse: 1500
    easing: "ease-in-out"
  sections:
    - "Alien Navigation"
    - "Bioluminescent Hero"
    - "Membrane Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Cosmic Footer"
\`\`\``,
  },

  'S70-Pro': {
    paletteStrategy: 'Fantasy magical. Deep purple #4B0082, enchanted gold #FFD700, mystical teal #20B2AA. Ethereal.',
    typography: 'Fantasy decorative fonts (Cinzel Decorative, Cormorant). Magical elegance.',
    radiusPolicy: 'Magical flowing shapes. Crystal facets.',
    shadowPolicy: 'Enchanted glows, sparkle effects.',
    borderLanguage: 'Vine and rune borders, magical frames.',
    patterns: 'Magical symbols, star patterns, runes.',
    motion: 'Sparkling magical animations 400-1000ms.',
    dos: [
      'Use enchanted magical palette',
      'Add sparkle and glow effects',
      'Create rune and symbol elements',
      'Use ethereal flowing shapes',
      'Implement magical particle effects',
      'Add fantasy typography'
    ],
    donts: [
      'Don\'t use modern tech elements',
      'Don\'t use harsh industrial colors',
      'Don\'t forget the ethereal glow',
      'Don\'t be too geometric'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S70-Pro"
    style_name: "Fantasy Pro"
    industry: "Gaming/Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A0A2E"
      secondary: "#2A1A4E"
      mystical: "#4B0082"
    border:
      gold: "#FFD700"
      subtle: "#6A4A8A"
    text:
      primary: "#FFFFFF"
      secondary: "#D0C0E0"
      muted: "#9A8AAA"
      gold: "#FFD700"
    brand:
      primary: "#FFD700"
      secondary: "#20B2AA"
      accent: "#FF69B4"
    status:
      success: "#20B2AA"
      warning: "#FFD700"
      danger: "#FF4500"
  typography:
    fontFamily:
      display: "Cinzel Decorative, Playfair Display, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 600, tracking: 0.03 }
      h2: { size: 44, line: 56, weight: 600, tracking: 0.02 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    magical: 16
    crystal: 8
  shadow:
    enchant: "0 0 40px rgba(255, 215, 0, 0.4)"
    mystical: "0 0 60px rgba(75, 0, 130, 0.5)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      sparkle: 1200
    easing: "ease-in-out"
  sections:
    - "Mystical Navigation"
    - "Enchanted Hero"
    - "Magic Features"
    - "Spellbook"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Realm Footer"
\`\`\``,
  },

  'S71-Pro': {
    paletteStrategy: 'Wasteland post-apocalyptic. Rust #B7410E, decay brown #6B4423, toxic yellow #CCCC00. Grunge.',
    typography: 'Distressed fonts (Bebas Neue, Impact). Weathered survival.',
    radiusPolicy: 'Damaged irregular edges. Rust holes.',
    shadowPolicy: 'Gritty harsh shadows.',
    borderLanguage: 'Rust and decay borders.',
    patterns: 'Rust textures, bullet holes, radiation signs.',
    motion: 'Flickering glitch animations 100-300ms.',
    dos: [
      'Use rust and decay colors',
      'Add distressed textures',
      'Create post-apocalyptic atmosphere',
      'Use hazard symbols',
      'Implement flickering effects',
      'Add wasteland grunge'
    ],
    donts: [
      'Don\'t be too clean',
      'Don\'t use bright happy colors',
      'Don\'t forget the decay feel',
      'Don\'t use perfect shapes'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S71-Pro"
    style_name: "Wasteland Pro"
    industry: "Gaming/Post-Apocalyptic"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1410"
      secondary: "#2A2016"
      rust: "#3A2A1A"
    border:
      rust: "#B7410E"
      subtle: "#6B4423"
    text:
      primary: "#E8D5B7"
      secondary: "#C4A77D"
      muted: "#8A7A6A"
      toxic: "#CCCC00"
    brand:
      primary: "#B7410E"
      secondary: "#CCCC00"
      accent: "#6B4423"
    status:
      success: "#CCCC00"
      warning: "#B7410E"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Bebas Neue, Impact, sans-serif"
      distressed: "Special Elite, Courier New, monospace"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: 0.02 }
      h2: { size: 48, line: 52, weight: 700, tracking: 0.01 }
      h3: { size: 32, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    damaged: "10px 5px 15px 8px"
    rust: "8px 12px 6px 14px"
  shadow:
    gritty: "4px 4px 0 rgba(0, 0, 0, 0.5)"
    harsh: "2px 2px 8px rgba(0, 0, 0, 0.6)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 50
      normal: 150
      flicker: 300
    easing: "step-end"
  sections:
    - "Survival Navigation"
    - "Wasteland Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Bunker Footer"
\`\`\``,
  },

  'S72-Pro': {
    paletteStrategy: 'Starship interior. Metallic gray #4B5563, holographic cyan #00D4FF, warning orange #FF6600. Space tech.',
    typography: 'Sci-fi display fonts (Orbitron, Exo 2). Starship precision.',
    radiusPolicy: 'Panel shapes 4-12px. Control surfaces.',
    shadowPolicy: 'Holographic glows, panel lighting.',
    borderLanguage: 'Panel borders, bulkhead seams.',
    patterns: 'Control panel layouts, star fields.',
    motion: 'Hologram flicker animations 200-500ms.',
    dos: [
      'Use starship interior colors',
      'Add holographic display elements',
      'Create control panel layouts',
      'Use bulkhead seam borders',
      'Implement hologram effects',
      'Add space ambient lighting'
    ],
    donts: [
      'Don\'t use Earth-bound aesthetics',
      'Don\'t use organic textures',
      'Don\'t forget the tech precision',
      'Don\'t be too colorful'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S72-Pro"
    style_name: "Starship Pro"
    industry: "Sci-Fi/Space"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1A2E"
      secondary: "#252538"
      panel: "#2A2A3E"
    border:
      subtle: "#4B5563"
      cyan: "#00D4FF"
    text:
      primary: "#FFFFFF"
      secondary: "#A0A0C0"
      muted: "#6A6A8A"
      cyan: "#00D4FF"
    brand:
      primary: "#00D4FF"
      secondary: "#FF6600"
      accent: "#8B5CF6"
    status:
      success: "#00FF88"
      warning: "#FF6600"
      danger: "#FF3366"
  typography:
    fontFamily:
      display: "Orbitron, Exo 2, sans-serif"
      sans: "Roboto, Arial, sans-serif"
    scale:
      h1: { size: 64, line: 70, weight: 700, tracking: 0.03 }
      h2: { size: 44, line: 50, weight: 600, tracking: 0.02 }
      h3: { size: 28, line: 34, weight: 600, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    panel: 8
    control: 4
  shadow:
    hologram: "0 0 30px rgba(0, 212, 255, 0.4)"
    panel: "0 4px 16px rgba(0, 0, 0, 0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      hologram: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Bridge Navigation"
    - "Command Hero"
    - "Systems Features"
    - "Holodeck Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Airlock Footer"
\`\`\``,
  },

  'S73-Pro': {
    paletteStrategy: 'Impressionist. Soft pastels, blended brushstrokes. Lavender #E6E6FA, soft pink #FFB6C1, sky blue #87CEEB.',
    typography: 'Artistic serif fonts (Playfair Display, Cormorant). Soft elegance.',
    radiusPolicy: 'Soft organic edges. Brushstroke shapes.',
    shadowPolicy: 'Painted soft shadows.',
    borderLanguage: 'Brushstroke edges, soft blends.',
    patterns: 'Painterly textures, soft color blending.',
    motion: 'Soft fade transitions 400-800ms.',
    dos: [
      'Use soft impressionist pastels',
      'Add brushstroke textures',
      'Create soft color blending',
      'Use painterly aesthetic',
      'Implement soft transitions',
      'Add artistic elegance'
    ],
    donts: [
      'Don\'t use hard digital edges',
      'Don\'t use bold primary colors',
      'Don\'t forget the artistic feel',
      'Don\'t be too precise'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S73-Pro"
    style_name: "Impressionist Pro"
    industry: "Art/Gallery"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FAF8FF"
      secondary: "#F5F0FA"
      canvas: "#FFFEF9"
    border:
      subtle: "#E0D8E8"
      soft: "#D8D0E0"
    text:
      primary: "#3A3A4A"
      secondary: "#5A5A6A"
      muted: "#8A8A9A"
    brand:
      lavender: "#E6E6FA"
      pink: "#FFB6C1"
      blue: "#87CEEB"
      gold: "#D4AF37"
    status:
      success: "#90EE90"
      warning: "#FFDAB9"
      danger: "#FFB6C1"
  typography:
    fontFamily:
      display: "Playfair Display, Cormorant Garamond, serif"
      body: "Lora, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 400, tracking: 0.02 }
      h2: { size: 44, line: 56, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    soft: 16
    brushstroke: "20% 80% 60% 40% / 40% 20% 80% 60%"
  shadow:
    painted: "0 4px 30px rgba(150, 130, 180, 0.2)"
    soft: "0 8px 40px rgba(100, 100, 120, 0.15)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 120
      tablet: 96
      mobile: 72
  motion:
    duration:
      fast: 300
      normal: 600
      fade: 1000
    easing: "ease-out"
  sections:
    - "Gallery Navigation"
    - "Canvas Hero"
    - "Features"
    - "Collection"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Artistic Footer"
\`\`\``,
  },

  'S74-Pro': {
    paletteStrategy: 'Cubist fragmented. Earth tones #8B7355, terracotta #CD5C5C, olive #808000. Multiple perspectives.',
    typography: 'Angular geometric fonts (Bebas Neue, Oswald). Fragmented.',
    radiusPolicy: 'Angular faceted shapes. No curves.',
    shadowPolicy: 'Facet depth shadows.',
    borderLanguage: 'Angular geometric borders.',
    patterns: 'Fragmented geometric patterns.',
    motion: 'Shifting perspective animations 300-600ms.',
    dos: [
      'Use fragmented geometric shapes',
      'Add multiple perspective views',
      'Create angular faceted surfaces',
      'Use earth tone palette',
      'Implement shifting animations',
      'Add cubist aesthetic'
    ],
    donts: [
      'Don\'t use smooth curves',
      'Don\'t use bright colors',
      'Don\'t forget the angular precision',
      'Don\'t be too organic'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S74-Pro"
    style_name: "Cubist Pro"
    industry: "Art/Design"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5EBD7"
      secondary: "#E8D5B7"
      canvas: "#FFFEF9"
    border:
      subtle: "#C4A77D"
      strong: "#8B7355"
    text:
      primary: "#3A2A1A"
      secondary: "#5A4A3A"
      muted: "#8A7A6A"
    brand:
      primary: "#8B7355"
      secondary: "#CD5C5C"
      accent: "#808000"
    status:
      success: "#808000"
      warning: "#CD5C5C"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Bebas Neue, Oswald, sans-serif"
      sans: "Roboto Condensed, Arial, sans-serif"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: 0 }
      h2: { size: 48, line: 52, weight: 600, tracking: 0 }
      h3: { size: 32, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    angular: 0
    facet: 2
  shadow:
    facet: "4px 4px 0 rgba(139, 115, 85, 0.3)"
    depth: "8px 8px 0 rgba(0, 0, 0, 0.2)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 200
      normal: 400
      shift: 700
    easing: "ease-out"
  sections:
    - "Angular Navigation"
    - "Fragmented Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Geometric Footer"
\`\`\``,
  },

  'S75-Pro': {
    paletteStrategy: 'Surrealist dreamscape. Deep blue #1A1A4E, dream purple #6B4E9E, melting gold #D4AF37. Unexpected.',
    typography: 'Dreamy fonts (Crimson Text, Lora). Flowing mysterious.',
    radiusPolicy: 'Morphing organic shapes. Melting curves.',
    shadowPolicy: 'Impossible dream shadows.',
    borderLanguage: 'Melting edges, morphing borders.',
    patterns: 'Dreamlike patterns, surreal elements.',
    motion: 'Morphing surreal animations 500-1200ms.',
    dos: [
      'Create unexpected visual juxtapositions',
      'Use dream-like color palette',
      'Add melting/morphing shapes',
      'Implement surreal imagery',
      'Create impossible shadows',
      'Add mysterious atmosphere'
    ],
    donts: [
      'Don\'t be too logical',
      'Don\'t use predictable layouts',
      'Don\'t forget the dream quality',
      'Don\'t be too realistic'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S75-Pro"
    style_name: "Surrealist Pro"
    industry: "Art/Creative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1A4E"
      secondary: "#2A2A5E"
      dream: "#0A0A2E"
    border:
      subtle: "#4A4A7E"
      gold: "#D4AF37"
    text:
      primary: "#FFFFFF"
      secondary: "#C0C0E0"
      muted: "#8A8AAA"
      gold: "#D4AF37"
    brand:
      primary: "#6B4E9E"
      secondary: "#D4AF37"
      accent: "#FF6B9D"
    status:
      success: "#50C878"
      warning: "#D4AF37"
      danger: "#FF6B9D"
  typography:
    fontFamily:
      display: "Crimson Text, Lora, Georgia, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 400, tracking: 0.02 }
      h2: { size: 44, line: 56, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    melting: "60% 40% 80% 20% / 30% 70% 50% 50%"
    dream: "20% 80% 40% 60% / 60% 40% 80% 20%"
  shadow:
    dream: "0 10px 60px rgba(107, 78, 158, 0.5)"
    impossible: "0 -10px 40px rgba(212, 175, 55, 0.3)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 120
      tablet: 96
      mobile: 72
  motion:
    duration:
      fast: 400
      normal: 800
      morph: 1500
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  sections:
    - "Floating Navigation"
    - "Dream Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Surreal Footer"
\`\`\``,
  },

  'S76-Pro': {
    paletteStrategy: 'Renaissance classical. Parchment #F5DEB3, gold leaf #D4AF37, deep red #8B0000. Classical elegance.',
    typography: 'Classical serif fonts (Playfair Display, Cinzel). Timeless elegance.',
    radiusPolicy: 'Elegant classical curves. Ornate frames.',
    shadowPolicy: 'Classical chiaroscuro lighting.',
    borderLanguage: 'Ornate gilded frames.',
    patterns: 'Heraldic patterns, damask.',
    motion: 'Elegant reveal animations 400-800ms.',
    dos: [
      'Use classical proportions',
      'Add gold leaf accents',
      'Create ornate frame borders',
      'Use chiaroscuro lighting',
      'Implement heraldic elements',
      'Add timeless elegance'
    ],
    donts: [
      'Don\'t use modern elements',
      'Don\'t use bright colors',
      'Don\'t forget the classical feel',
      'Don\'t be too minimal'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S76-Pro"
    style_name: "Renaissance Pro"
    industry: "Luxury/Art"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#2A1A0A"
      secondary: "#3A2A1A"
      parchment: "#F5DEB3"
    border:
      gold: "#D4AF37"
      subtle: "#8B7355"
    text:
      primary: "#F5DEB3"
      secondary: "#C4A77D"
      muted: "#8A7A6A"
      gold: "#D4AF37"
    brand:
      primary: "#D4AF37"
      secondary: "#8B0000"
      accent: "#228B22"
    status:
      success: "#228B22"
      warning: "#D4AF37"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Playfair Display, Cinzel, Georgia, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 400, tracking: 0.03 }
      h2: { size: 44, line: 56, weight: 400, tracking: 0.02 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    classical: 8
    frame: 4
  shadow:
    gilded: "0 0 30px rgba(212, 175, 55, 0.3)"
    depth: "0 8px 32px rgba(0, 0, 0, 0.4)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      reveal: 1000
    easing: "ease-out"
  sections:
    - "Classical Navigation"
    - "Grand Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Ornate Footer"
\`\`\``,
  },

  'S77-Pro': {
    paletteStrategy: 'Ukiyo-e Japanese woodblock. Indigo #1A237E, vermillion #E53935, off-white #FFFEF0. Bold outlines.',
    typography: 'Japanese-inspired fonts (Noto Serif JP, Playfair Display). Elegant flow.',
    radiusPolicy: 'Flowing wave shapes. Japanese curves.',
    shadowPolicy: 'Flat, minimal shadows. Print-like.',
    borderLanguage: 'Bold black outlines 2-3px.',
    patterns: 'Wave and cloud patterns, cherry blossoms.',
    motion: 'Paper reveal animations 300-600ms.',
    dos: [
      'Use bold flat color areas',
      'Add thick black outlines',
      'Create wave pattern elements',
      'Use Japanese woodblock aesthetic',
      'Implement cherry blossom motifs',
      'Add flowing composition'
    ],
    donts: [
      'Don\'t use gradients heavily',
      'Don\'t use 3D effects',
      'Don\'t forget the print quality',
      'Don\'t use many shadows'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S77-Pro"
    style_name: "Ukiyo-e Pro"
    industry: "Art/Japanese"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFEF0"
      secondary: "#F5F0E6"
      paper: "#FFF8E7"
    border:
      outline: "#1A1A1A"
      subtle: "#4A4A4A"
    text:
      primary: "#1A1A1A"
      secondary: "#3A3A3A"
      muted: "#6A6A6A"
      vermillion: "#E53935"
    brand:
      indigo: "#1A237E"
      vermillion: "#E53935"
      gold: "#C4A77D"
    status:
      success: "#388E3C"
      warning: "#C4A77D"
      danger: "#E53935"
  typography:
    fontFamily:
      display: "Noto Serif JP, Playfair Display, Georgia, serif"
      body: "Noto Sans JP, Lato, sans-serif"
    scale:
      h1: { size: 56, line: 72, weight: 400, tracking: 0.05 }
      h2: { size: 40, line: 56, weight: 400, tracking: 0.03 }
      h3: { size: 28, line: 40, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.02 }
  radius:
    none: 0
    wave: "50% 0% 50% 100% / 100% 0% 100% 0%"
  shadow:
    flat: "none"
    subtle: "2px 2px 0 rgba(0, 0, 0, 0.1)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      reveal: 700
    easing: "ease-out"
  sections:
    - "Wave Navigation"
    - "Woodblock Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Sakura Footer"
\`\`\``,
  },

  'S78-Pro': {
    paletteStrategy: 'Gothic dark. Deep purple #2D1B4E, blood red #8B0000, stone gray #4A4A4A. Ornate dark.',
    typography: 'Gothic blackletter fonts (Cinzel, Playfair Display). Dark elegance.',
    radiusPolicy: 'Pointed arch shapes. Gothic curves.',
    shadowPolicy: 'Deep dramatic shadows.',
    borderLanguage: 'Ornate gothic tracery borders.',
    patterns: 'Gothic tracery, rose windows.',
    motion: 'Dramatic reveal animations 400-800ms.',
    dos: [
      'Use gothic arch shapes',
      'Add ornate tracery patterns',
      'Create dark dramatic atmosphere',
      'Use deep shadow lighting',
      'Implement rose window motifs',
      'Add mysterious elegance'
    ],
    donts: [
      'Don\'t use bright cheerful colors',
      'Don\'t use modern shapes',
      'Don\'t forget the darkness',
      'Don\'t be too minimal'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S78-Pro"
    style_name: "Gothic Pro"
    industry: "Dark/Alternative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A15"
      secondary: "#15152A"
      stone: "#2D1B4E"
    border:
      ornate: "#6A4A8A"
      red: "#8B0000"
    text:
      primary: "#E8E0F0"
      secondary: "#C0B0D0"
      muted: "#8A7A9A"
      red: "#8B0000"
    brand:
      primary: "#8B0000"
      secondary: "#D4AF37"
      accent: "#6A4A8A"
    status:
      success: "#228B22"
      warning: "#D4AF37"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Cinzel, Playfair Display, Georgia, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 600, tracking: 0.03 }
      h2: { size: 44, line: 56, weight: 600, tracking: 0.02 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0.01 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    arch: "50% 50% 0 0"
    gothic: 4
  shadow:
    deep: "0 10px 40px rgba(0, 0, 0, 0.6)"
    dramatic: "0 20px 60px rgba(139, 0, 0, 0.2)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      dramatic: 1000
    easing: "ease-out"
  sections:
    - "Cathedral Navigation"
    - "Gothic Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Crypt Footer"
\`\`\``,
  },

  'S79-Pro': {
    paletteStrategy: 'Corporate clean. Navy blue #1E3A5F, professional gray #6B7280, white #FFFFFF. Trustworthy.',
    typography: 'Clean sans-serif (Inter, Roboto). Professional clarity.',
    radiusPolicy: 'Medium 8-12px. Professional rounded.',
    shadowPolicy: 'Subtle elevation shadows.',
    borderLanguage: 'Clean professional borders.',
    patterns: 'None. Clean surfaces.',
    motion: 'Smooth professional 200-400ms.',
    dos: [
      'Use trustworthy blue palette',
      'Keep layouts clean and organized',
      'Use professional typography',
      'Add subtle shadows',
      'Implement clear hierarchy',
      'Maintain corporate standards'
    ],
    donts: [
      'Don\'t be too playful',
      'Don\'t use bright colors',
      'Don\'t forget professionalism',
      'Don\'t use decorative patterns'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S79-Pro"
    style_name: "Corporate Clean Pro"
    industry: "Business/Corporate"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
      tertiary: "#F1F5F9"
    border:
      subtle: "#E2E8F0"
      strong: "#CBD5E1"
    text:
      primary: "#1E293B"
      secondary: "#475569"
      muted: "#94A3B8"
    brand:
      primary: "#1E3A5F"
      secondary: "#3B82F6"
      accent: "#10B981"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Roboto, system-ui, sans-serif"
      display: "Inter, Roboto, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 6
    md: 8
    lg: 12
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 4px 6px rgba(0,0,0,0.07)"
    lg: "0 10px 15px rgba(0,0,0,0.1)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 250
      slow: 350
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Professional Navigation"
    - "Hero Section"
    - "Features"
    - "About"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Corporate Footer"
\`\`\``,
  },

  'S80-Pro': {
    paletteStrategy: 'Startup vibrant. Gradient purple #8B5CF6 to pink #EC4899, energetic blue #3B82F6. Modern fresh.',
    typography: 'Modern sans-serif (Inter, Poppins). Energetic bold.',
    radiusPolicy: 'Large rounded 12-24px. Friendly modern.',
    shadowPolicy: 'Colorful gradient shadows.',
    borderLanguage: 'Gradient borders.',
    patterns: 'Gradient blob backgrounds.',
    motion: 'Bouncy energetic 200-500ms.',
    dos: [
      'Use vibrant gradient colors',
      'Create modern startup aesthetic',
      'Add energetic animations',
      'Use large rounded shapes',
      'Implement gradient shadows',
      'Add dynamic blob backgrounds'
    ],
    donts: [
      'Don\'t be too corporate',
      'Don\'t use muted colors',
      'Don\'t forget the energy',
      'Don\'t use small typography'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S80-Pro"
    style_name: "Startup Vibrant Pro"
    industry: "Startup/Tech"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#FAFAFE"
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)"
    border:
      subtle: "#E5E7EB"
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)"
    text:
      primary: "#111827"
      secondary: "#4B5563"
      muted: "#9CA3AF"
    brand:
      primary: "#8B5CF6"
      secondary: "#EC4899"
      accent: "#3B82F6"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Poppins, system-ui, sans-serif"
      display: "Poppins, Montserrat, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 800, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    md: 12
    lg: 16
    xl: 24
    pill: 9999
  shadow:
    gradient: "0 10px 40px rgba(139, 92, 246, 0.3)"
    soft: "0 4px 20px rgba(0, 0, 0, 0.1)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 150
      normal: 300
      bounce: 600
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  sections:
    - "Modern Navigation"
    - "Gradient Hero"
    - "Features"
    - "How It Works"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Vibrant Footer"
\`\`\``,
  },

  'S81-Pro': {
    paletteStrategy: 'Enterprise deep navy. Navy #0F172A, slate blue #334155, professional white. Trust authority.',
    typography: 'Professional serif/sans mix (Georgia, Inter). Established credibility.',
    radiusPolicy: 'Minimal radius 4-8px. Clean professional.',
    shadowPolicy: 'Subtle corporate shadows.',
    borderLanguage: 'Professional clean borders.',
    patterns: 'None. Clean enterprise.',
    motion: 'Smooth professional 200-350ms.',
    dos: [
      'Use deep navy for authority',
      'Maintain corporate trustworthiness',
      'Create clear hierarchy',
      'Use professional typography',
      'Implement subtle shadows',
      'Add enterprise-grade feel'
    ],
    donts: [
      'Don\'t be too casual',
      'Don\'t use playful elements',
      'Don\'t forget the authority',
      'Don\'t use bright colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S81-Pro"
    style_name: "Enterprise Blue Pro"
    industry: "Enterprise/B2B"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
      dark: "#0F172A"
    border:
      subtle: "#E2E8F0"
      strong: "#CBD5E1"
    text:
      primary: "#0F172A"
      secondary: "#334155"
      muted: "#64748B"
    brand:
      primary: "#0F172A"
      secondary: "#1E40AF"
      accent: "#059669"
    status:
      success: "#059669"
      warning: "#D97706"
      danger: "#DC2626"
  typography:
    fontFamily:
      serif: "Georgia, Times New Roman, serif"
      sans: "Inter, Roboto, system-ui, sans-serif"
    scale:
      h1: { size: 52, line: 60, weight: 700, tracking: -0.02 }
      h2: { size: 36, line: 44, weight: 600, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 4
    md: 6
    lg: 8
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 2px 4px rgba(0,0,0,0.06)"
    lg: "0 4px 8px rgba(0,0,0,0.08)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 250
      slow: 350
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Enterprise Navigation"
    - "Authority Hero"
    - "Features"
    - "Case Studies"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Corporate Footer"
\`\`\``,
  },

  'S82-Pro': {
    paletteStrategy: 'Fintech gradient. Purple #7C3AED to teal #14B8A6. Data green accents. Secure trust.',
    typography: 'Clean data fonts (Inter, SF Pro Display). Financial precision.',
    radiusPolicy: 'Medium modern 8-16px.',
    shadowPolicy: 'Subtle fintech shadows.',
    borderLanguage: 'Clean modern borders.',
    patterns: 'Data visualization elements.',
    motion: 'Data-driven animations 200-400ms.',
    dos: [
      'Use fintech purple/teal palette',
      'Add data visualization elements',
      'Create secure trustworthy feel',
      'Use modern clean typography',
      'Implement number animations',
      'Add financial precision'
    ],
    donts: [
      'Don\'t be too playful',
      'Don\'t use warm colors',
      'Don\'t forget security feeling',
      'Don\'t use ornate elements'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S82-Pro"
    style_name: "Fintech Trust Pro"
    industry: "Fintech/Finance"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
      dark: "#0F0F23"
    border:
      subtle: "#E2E8F0"
      strong: "#CBD5E1"
    text:
      primary: "#1E293B"
      secondary: "#475569"
      muted: "#94A3B8"
    brand:
      primary: "#7C3AED"
      secondary: "#14B8A6"
      accent: "#22C55E"
    status:
      success: "#22C55E"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, SF Pro Display, system-ui, sans-serif"
      display: "Inter, system-ui, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 8
    md: 12
    lg: 16
  shadow:
    sm: "0 1px 3px rgba(0,0,0,0.1)"
    md: "0 4px 12px rgba(0,0,0,0.1)"
    lg: "0 10px 24px rgba(0,0,0,0.12)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      data: 500
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Fintech Navigation"
    - "Data Hero"
    - "Features"
    - "Security"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Trust Footer"
\`\`\``,
  },

  'S83-Pro': {
    paletteStrategy: 'Medical calming. Teal #0D9488, fresh white #FFFFFF, soft blue #7DD3FC. Healthcare trust.',
    typography: 'Clean accessible fonts (Inter, Lato). Easy to read.',
    radiusPolicy: 'Soft rounded 12-20px. Friendly approachable.',
    shadowPolicy: 'Subtle calming shadows.',
    borderLanguage: 'Soft clean borders.',
    patterns: 'None. Clean sterile.',
    motion: 'Calm smooth 250-400ms.',
    dos: [
      'Use calming medical teal',
      'Create clean sterile aesthetic',
      'Use accessible typography',
      'Add soft friendly shapes',
      'Implement calm animations',
      'Add healthcare trust'
    ],
    donts: [
      'Don\'t use alarming colors',
      'Don\'t use complex patterns',
      'Don\'t forget accessibility',
      'Don\'t be too cold'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S83-Pro"
    style_name: "Health Medical Pro"
    industry: "Healthcare/Medical"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F0FDFA"
      clean: "#F8FAFC"
    border:
      subtle: "#CCFBF1"
      strong: "#99F6E4"
    text:
      primary: "#134E4A"
      secondary: "#0F766E"
      muted: "#5EEAD4"
    brand:
      primary: "#0D9488"
      secondary: "#7DD3FC"
      accent: "#22C55E"
    status:
      success: "#22C55E"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Lato, system-ui, sans-serif"
      display: "Poppins, Inter, sans-serif"
    scale:
      h1: { size: 52, line: 62, weight: 700, tracking: -0.01 }
      h2: { size: 38, line: 48, weight: 600, tracking: -0.005 }
      h3: { size: 26, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    sm: 12
    md: 16
    lg: 20
  shadow:
    sm: "0 1px 2px rgba(13, 148, 136, 0.1)"
    md: "0 4px 12px rgba(13, 148, 136, 0.1)"
    lg: "0 8px 24px rgba(13, 148, 136, 0.12)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 88
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 200
      normal: 350
      calm: 500
    easing: "ease-out"
  sections:
    - "Medical Navigation"
    - "Care Hero"
    - "Services"
    - "About"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Health Footer"
\`\`\``,
  },

  'S84-Pro': {
    paletteStrategy: 'Eco sustainability. Forest green #16A34A, earth brown #78716C, natural cream. Environmental.',
    typography: 'Natural friendly fonts (Nunito, Quicksand). Organic feel.',
    radiusPolicy: 'Organic shapes 12-24px. Natural curves.',
    shadowPolicy: 'Natural soft shadows.',
    borderLanguage: 'Organic natural borders.',
    patterns: 'Leaf patterns, organic shapes.',
    motion: 'Natural growing 300-600ms.',
    dos: [
      'Use sustainable green palette',
      'Add organic natural shapes',
      'Create eco-friendly aesthetic',
      'Use natural textures',
      'Implement growing animations',
      'Add environmental messaging'
    ],
    donts: [
      'Don\'t use industrial elements',
      'Don\'t use synthetic colors',
      'Don\'t forget the natural feel',
      'Don\'t be too corporate'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S84-Pro"
    style_name: "Eco Green Pro"
    industry: "Sustainability/Eco"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FDFBF7"
      secondary: "#F5F3EE"
      cream: "#FFF8E7"
    border:
      subtle: "#E5E2DC"
      green: "#16A34A"
    text:
      primary: "#1C1917"
      secondary: "#44403C"
      muted: "#78716C"
      green: "#16A34A"
    brand:
      primary: "#16A34A"
      secondary: "#78716C"
      accent: "#CA8A04"
    status:
      success: "#16A34A"
      warning: "#CA8A04"
      danger: "#B91C1C"
  typography:
    fontFamily:
      sans: "Nunito, Quicksand, sans-serif"
      display: "Comfortaa, Quicksand, sans-serif"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: -0.01 }
      h2: { size: 40, line: 52, weight: 600, tracking: -0.005 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    sm: 12
    md: 18
    lg: 24
    organic: "40% 60% 55% 45% / 50% 40% 60% 50%"
  shadow:
    sm: "0 2px 4px rgba(22, 163, 74, 0.1)"
    md: "0 4px 12px rgba(22, 163, 74, 0.12)"
    lg: "0 8px 24px rgba(22, 163, 74, 0.15)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 200
      normal: 400
      grow: 700
    easing: "ease-out"
  sections:
    - "Natural Navigation"
    - "Eco Hero"
    - "Features"
    - "Impact"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Green Footer"
\`\`\``,
  },

  'S85-Pro': {
    paletteStrategy: 'Kids playful. Primary colors: red #EF4444, blue #3B82F6, yellow #EAB308. Big friendly shapes.',
    typography: 'Friendly rounded fonts (Nunito, Quicksand, Comic Neue). Playful.',
    radiusPolicy: 'Large playful 20-32px. Fun shapes.',
    shadowPolicy: 'Fun colorful shadows.',
    borderLanguage: 'Thick colorful borders.',
    patterns: 'Stars, shapes, confetti.',
    motion: 'Bouncy fun 200-500ms.',
    dos: [
      'Use bright primary colors',
      'Create big playful shapes',
      'Use friendly rounded typography',
      'Add fun bouncy animations',
      'Implement game-like elements',
      'Add joy and playfulness'
    ],
    donts: [
      'Don\'t be too sophisticated',
      'Don\'t use muted colors',
      'Don\'t forget the fun',
      'Don\'t use small typography'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S85-Pro"
    style_name: "Kids Playful Pro"
    industry: "Kids/Education"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFBF0"
      secondary: "#FFF5E6"
      elevated: "#FFFFFF"
    border:
      red: "#EF4444"
      blue: "#3B82F6"
      yellow: "#EAB308"
    text:
      primary: "#1F2937"
      secondary: "#4B5563"
      muted: "#9CA3AF"
    brand:
      red: "#EF4444"
      blue: "#3B82F6"
      yellow: "#EAB308"
      green: "#22C55E"
    status:
      success: "#22C55E"
      warning: "#EAB308"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Nunito, Quicksand, Comic Neue, sans-serif"
      display: "Comfortaa, Nunito, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 800, tracking: 0 }
      h2: { size: 40, line: 48, weight: 700, tracking: 0 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0 }
      small: { size: 16, line: 26, weight: 400, tracking: 0 }
  radius:
    md: 20
    lg: 28
    xl: 32
    circle: 9999
  shadow:
    fun: "4px 4px 0 #EF4444"
    playful: "6px 6px 0 #3B82F6"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 80
      tablet: 64
      mobile: 48
  motion:
    duration:
      fast: 150
      normal: 300
      bounce: 600
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  sections:
    - "Fun Navigation"
    - "Playful Hero"
    - "Features"
    - "Activities"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Happy Footer"
\`\`\``,
  },

  'S86-Pro': {
    paletteStrategy: 'Gamer RGB. Pure black #000000, RGB cycling accents. Aggressive gaming aesthetic.',
    typography: 'Gaming fonts (Orbitron, Rajdhani). Sharp aggressive.',
    radiusPolicy: 'Sharp aggressive angles 0-8px.',
    shadowPolicy: 'RGB cycling glows.',
    borderLanguage: 'RGB borders, aggressive angles.',
    patterns: 'RGB lighting effects, hexagons.',
    motion: 'RGB cycling 100-400ms.',
    dos: [
      'Use RGB lighting effects',
      'Create aggressive gaming aesthetic',
      'Add RGB cycling animations',
      'Use sharp angular shapes',
      'Implement neon glows',
      'Add competitive energy'
    ],
    donts: [
      'Don\'t be too minimal',
      'Don\'t use soft shapes',
      'Don\'t forget the gaming intensity',
      'Don\'t use muted colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S86-Pro"
    style_name: "Gamer RGB Pro"
    industry: "Gaming/Esports"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#000000"
      secondary: "#0A0A0A"
      elevated: "#141414"
    border:
      rgb: "linear-gradient(90deg, #FF0000, #00FF00, #0000FF)"
      subtle: "#2A2A2A"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
    brand:
      red: "#FF0000"
      green: "#00FF00"
      blue: "#0000FF"
      purple: "#8B5CF6"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      display: "Orbitron, Rajdhani, sans-serif"
      sans: "Rajdhani, Roboto, sans-serif"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: 0.03 }
      h2: { size: 48, line: 52, weight: 600, tracking: 0.02 }
      h3: { size: 32, line: 38, weight: 600, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    sharp: 4
    aggressive: 8
    hexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
  shadow:
    rgb_red: "0 0 30px rgba(255, 0, 0, 0.5)"
    rgb_green: "0 0 30px rgba(0, 255, 0, 0.5)"
    rgb_blue: "0 0 30px rgba(0, 0, 255, 0.5)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 200
      rgb: 400
    easing: "ease-in-out"
  sections:
    - "Gaming Navigation"
    - "RGB Hero"
    - "Features"
    - "Specs"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Gamer Footer"
\`\`\``,
  },

  'S87-Pro': {
    paletteStrategy: 'Luxury gold. Black #000000, gold #D4AF37, premium texture. High-end exclusive.',
    typography: 'Elegant serif fonts (Playfair Display, Cormorant). Luxury refinement.',
    radiusPolicy: 'Elegant curves 8-16px. Refined shapes.',
    shadowPolicy: 'Gold reflections and glows.',
    borderLanguage: 'Gold accent borders.',
    patterns: 'Damask and luxury patterns.',
    motion: 'Elegant reveals 400-800ms.',
    dos: [
      'Use black and gold palette',
      'Create premium luxury feel',
      'Add gold accents and borders',
      'Use elegant serif typography',
      'Implement sophisticated animations',
      'Add exclusive atmosphere'
    ],
    donts: [
      'Don\'t use cheap-looking colors',
      'Don\'t be too playful',
      'Don\'t forget the luxury feel',
      'Don\'t use bold modern fonts'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S87-Pro"
    style_name: "Luxury Gold Pro"
    industry: "Luxury/Fashion"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0A"
      secondary: "#141414"
      elevated: "#1A1A1A"
    border:
      gold: "#D4AF37"
      subtle: "#2A2A2A"
    text:
      primary: "#FFFFFF"
      secondary: "#C4A77D"
      muted: "#8A7A6A"
      gold: "#D4AF37"
    brand:
      primary: "#D4AF37"
      secondary: "#8B7355"
      accent: "#FFFFFF"
    status:
      success: "#D4AF37"
      warning: "#C4A77D"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Playfair Display, Cormorant Garamond, serif"
      body: "Cormorant Garamond, Georgia, serif"
    scale:
      h1: { size: 64, line: 76, weight: 400, tracking: 0.05 }
      h2: { size: 44, line: 56, weight: 400, tracking: 0.03 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.02 }
  radius:
    elegant: 12
    refined: 8
  shadow:
    gold: "0 0 40px rgba(212, 175, 55, 0.3)"
    premium: "0 10px 40px rgba(0, 0, 0, 0.5)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 120
      tablet: 96
      mobile: 72
  motion:
    duration:
      fast: 300
      normal: 600
      reveal: 1000
    easing: "ease-out"
  sections:
    - "Luxury Navigation"
    - "Grand Hero"
    - "Collection"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Exclusive Footer"
\`\`\``,
  },

  'S88-Pro': {
    paletteStrategy: 'Luxury silver platinum. White #FFFFFF, silver #C0C0C0, cool gray. Sophisticated minimalism.',
    typography: 'Clean elegant fonts (Inter, Poppins). Modern luxury.',
    radiusPolicy: 'Refined shapes 8-16px.',
    shadowPolicy: 'Silver shine and highlights.',
    borderLanguage: 'Platinum accent borders.',
    patterns: 'Subtle elegant patterns.',
    motion: 'Smooth elegant 300-600ms.',
    dos: [
      'Use white and silver palette',
      'Create sophisticated minimalism',
      'Add platinum accents',
      'Use clean modern typography',
      'Implement smooth animations',
      'Add cool elegance'
    ],
    donts: [
      'Don\'t use warm colors',
      'Don\'t be too bold',
      'Don\'t forget the refinement',
      'Don\'t use heavy shadows'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S88-Pro"
    style_name: "Luxury Silver Pro"
    industry: "Luxury/Premium"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      silver: "#F5F5F5"
    border:
      subtle: "#E5E5E5"
      silver: "#C0C0C0"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#8A8A8A"
      silver: "#C0C0C0"
    brand:
      primary: "#C0C0C0"
      secondary: "#1A1A1A"
      accent: "#8B5CF6"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Poppins, system-ui, sans-serif"
      display: "Montserrat, Poppins, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 300, tracking: 0.02 }
      h2: { size: 40, line: 48, weight: 300, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    refined: 8
    elegant: 12
    lg: 16
  shadow:
    silver: "0 4px 20px rgba(192, 192, 192, 0.3)"
    subtle: "0 2px 10px rgba(0, 0, 0, 0.05)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      elegant: 700
    easing: "ease-out"
  sections:
    - "Platinum Navigation"
    - "Elegant Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Silver Footer"
\`\`\``,
  },

  'S89-Pro': {
    paletteStrategy: 'Minimalist editorial. Cream #FAF8F5, charcoal #2D2D2D, muted accents. Kinfolk aesthetic.',
    typography: 'Elegant serif fonts (Playfair Display, Lora). Editorial refinement.',
    radiusPolicy: 'Minimal 0-4px. Clean edges.',
    shadowPolicy: 'Subtle minimal shadows.',
    borderLanguage: 'Thin elegant lines.',
    patterns: 'None. Pure minimalism.',
    motion: 'Subtle elegant 300-500ms.',
    dos: [
      'Use elegant serif typography',
      'Create Kinfolk aesthetic',
      'Maintain clean minimalism',
      'Add subtle refined details',
      'Implement smooth transitions',
      'Add editorial sophistication'
    ],
    donts: [
      'Don\'t be bold',
      'Don\'t use bright colors',
      'Don\'t forget the elegance',
      'Don\'t add decorative patterns'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S89-Pro"
    style_name: "Minimalist Serif Pro"
    industry: "Editorial/Lifestyle"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FAF8F5"
      secondary: "#F5F2EE"
      cream: "#FFFEF9"
    border:
      subtle: "#E8E4DE"
      strong: "#D4D0CA"
    text:
      primary: "#2D2D2D"
      secondary: "#5A5A5A"
      muted: "#8A8A8A"
    brand:
      primary: "#2D2D2D"
      secondary: "#8A7A6A"
      accent: "#B8A090"
    status:
      success: "#6B8E4F"
      warning: "#C4A77D"
      danger: "#A05050"
  typography:
    fontFamily:
      serif: "Playfair Display, Lora, Georgia, serif"
      body: "Lora, Georgia, serif"
    scale:
      h1: { size: 56, line: 72, weight: 400, tracking: 0.02 }
      h2: { size: 40, line: 56, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 40, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.02 }
  radius:
    none: 0
    sm: 2
    md: 4
  shadow:
    subtle: "0 2px 8px rgba(0, 0, 0, 0.04)"
    refined: "0 4px 16px rgba(0, 0, 0, 0.06)"
  spacing:
    gridMax: 1000
    gutter:
      desktop: 48
      tablet: 40
      mobile: 32
    sectionY:
      desktop: 128
      tablet: 104
      mobile: 80
  motion:
    duration:
      fast: 200
      normal: 400
      slow: 600
    easing: "ease-out"
  sections:
    - "Editorial Navigation"
    - "Refined Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Minimal Footer"
\`\`\``,
  },

  'S90-Pro': {
    paletteStrategy: 'Brutalist anti-design. Clashing colors, system fonts, raw HTML aesthetic. Intentional ugliness.',
    typography: 'System fonts, Times New Roman. Raw web 1.0.',
    radiusPolicy: 'Zero. Sharp brutal edges.',
    shadowPolicy: 'Hard offset shadows.',
    borderLanguage: 'Thick harsh borders.',
    patterns: 'None. Raw brutalism.',
    motion: 'Abrupt instant 0-100ms.',
    dos: [
      'Use clashing bold colors',
      'Create anti-design aesthetic',
      'Use system default fonts',
      'Add intentional ugliness',
      'Implement abrupt transitions',
      'Break design rules'
    ],
    donts: [
      'Don\'t be subtle',
      'Don\'t follow conventions',
      'Don\'t forget the raw feel',
      'Don\'t over-polish'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S90-Pro"
    style_name: "Brutalist Color Pro"
    industry: "Art/Experimental"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFF00"
      secondary: "#FF00FF"
      elevated: "#00FFFF"
    border:
      harsh: "#000000"
      strong: "#FF0000"
    text:
      primary: "#000000"
      secondary: "#0000FF"
      muted: "#FF0000"
    brand:
      yellow: "#FFFF00"
      magenta: "#FF00FF"
      cyan: "#00FFFF"
      red: "#FF0000"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      system: "Times New Roman, serif"
      mono: "Courier New, monospace"
    scale:
      h1: { size: 72, line: 72, weight: 700, tracking: 0 }
      h2: { size: 48, line: 48, weight: 700, tracking: 0 }
      h3: { size: 32, line: 32, weight: 700, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  radius:
    none: 0
  shadow:
    brutal: "8px 8px 0 #000000"
    harsh: "4px 4px 0 #FF0000"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 16
      tablet: 12
      mobile: 8
    sectionY:
      desktop: 64
      tablet: 48
      mobile: 32
  motion:
    duration:
      fast: 0
      normal: 50
      slow: 100
    easing: "step-end"
  sections:
    - "Brutal Navigation"
    - "Clash Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Raw Footer"
\`\`\``,
  },

  'S91-Pro': {
    paletteStrategy: 'E-ink high contrast. Pure white #FFFFFF, pure black #000000. Paper texture. No color.',
    typography: 'Readable serif fonts (Georgia, Merriweather). E-reader optimized.',
    radiusPolicy: 'Minimal 0-4px. Clean edges.',
    shadowPolicy: 'None or very subtle.',
    borderLanguage: 'Thin black lines.',
    patterns: 'Paper texture, book-like.',
    motion: 'None or very minimal.',
    dos: [
      'Use pure black and white only',
      'Create paper-like reading experience',
      'Use readable serif typography',
      'Add paper texture',
      'Optimize for accessibility',
      'Create e-reader aesthetic'
    ],
    donts: [
      'Don\'t use any colors',
      'Don\'t use gradients',
      'Don\'t add heavy shadows',
      'Don\'t use animations'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S91-Pro"
    style_name: "E-Ink Pro"
    industry: "Publishing/Reading"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F8F8F8"
      paper: "#FAFAFA"
    border:
      subtle: "#E0E0E0"
      strong: "#000000"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#000000"
      secondary: "#666666"
      accent: "#333333"
    status:
      success: "#333333"
      warning: "#666666"
      danger: "#000000"
  typography:
    fontFamily:
      serif: "Georgia, Merriweather, serif"
      body: "Georgia, Times New Roman, serif"
    scale:
      h1: { size: 48, line: 64, weight: 400, tracking: 0.01 }
      h2: { size: 36, line: 52, weight: 400, tracking: 0.01 }
      h3: { size: 24, line: 36, weight: 600, tracking: 0 }
      body: { size: 18, line: 32, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    none: 0
    sm: 2
    md: 4
  shadow:
    none: "none"
    subtle: "0 1px 2px rgba(0, 0, 0, 0.05)"
  spacing:
    gridMax: 800
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 80
      tablet: 64
      mobile: 48
  motion:
    duration:
      fast: 0
      normal: 0
      slow: 100
    easing: "step-end"
  sections:
    - "Simple Navigation"
    - "Clean Hero"
    - "Content"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Paper Footer"
\`\`\``,
  },

  'S92-Pro': {
    paletteStrategy: 'OLED pure black. True black #000000, vibrant accent colors. Maximum contrast.',
    typography: 'Clean modern fonts (Inter, Poppins). High contrast.',
    radiusPolicy: 'Modern 8-16px.',
    shadowPolicy: 'Vibrant accent glows.',
    borderLanguage: 'Subtle glowing borders.',
    patterns: 'None. Pure black surfaces.',
    motion: 'Smooth elegant 200-400ms.',
    dos: [
      'Use true #000000 black',
      'Add vibrant accent colors',
      'Create OLED-optimized design',
      'Use high contrast elements',
      'Implement accent glows',
      'Save battery on OLED'
    ],
    donts: [
      'Don\'t use gray backgrounds',
      'Don\'t use muted colors',
      'Don\'t forget true black',
      'Don\'t use heavy patterns'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S92-Pro"
    style_name: "OLED Black Pro"
    industry: "Tech/Mobile"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#000000"
      secondary: "#000000"
      elevated: "#0A0A0A"
    border:
      subtle: "#1A1A1A"
      glow: "rgba(139, 92, 246, 0.3)"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
    brand:
      primary: "#8B5CF6"
      secondary: "#EC4899"
      accent: "#3B82F6"
    status:
      success: "#22C55E"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Poppins, system-ui, sans-serif"
      display: "Poppins, Montserrat, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 8
    md: 12
    lg: 16
  shadow:
    glow: "0 0 30px rgba(139, 92, 246, 0.4)"
    accent: "0 0 20px rgba(236, 72, 153, 0.3)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      slow: 500
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Dark Navigation"
    - "OLED Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Black Footer"
\`\`\``,
  },

  'S93-Pro': {
    paletteStrategy: 'Terminal retro CRT. Amber #FFB000 or green #00FF00 on black. Scanlines. Phosphor glow.',
    typography: 'Monospace fonts (Fira Code, Consolas). Terminal authentic.',
    radiusPolicy: 'Zero. Hard CRT edges.',
    shadowPolicy: 'Phosphor CRT glow.',
    borderLanguage: 'Terminal borders.',
    patterns: 'Scanlines, CRT noise.',
    motion: 'CRT flicker effects 50-200ms.',
    dos: [
      'Use amber or green on black',
      'Add authentic CRT scanlines',
      'Create phosphor glow effects',
      'Use monospace typography',
      'Implement CRT flicker',
      'Add terminal nostalgia'
    ],
    donts: [
      'Don\'t use modern aesthetics',
      'Don\'t use smooth animations',
      'Don\'t forget the CRT feel',
      'Don\'t use rounded corners'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S93-Pro"
    style_name: "Terminal Retro Pro"
    industry: "Tech/Retro"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#000000"
      secondary: "#0A0A0A"
      screen: "#050505"
    border:
      amber: "#FFB000"
      green: "#00FF00"
    text:
      primary: "#FFB000"
      secondary: "#CC9900"
      muted: "#996600"
      green: "#00FF00"
    brand:
      amber: "#FFB000"
      green: "#00FF00"
      accent: "#FFFF00"
    status:
      success: "#00FF00"
      warning: "#FFB000"
      danger: "#FF0000"
  typography:
    fontFamily:
      mono: "Fira Code, Consolas, monospace"
      terminal: "VT323, Courier New, monospace"
    scale:
      h1: { size: 48, line: 56, weight: 400, tracking: 0.05 }
      h2: { size: 36, line: 44, weight: 400, tracking: 0.04 }
      h3: { size: 24, line: 32, weight: 400, tracking: 0.03 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.02 }
  radius:
    none: 0
  shadow:
    phosphor: "0 0 10px rgba(255, 176, 0, 0.5)"
    green_glow: "0 0 10px rgba(0, 255, 0, 0.5)"
  spacing:
    gridMax: 1000
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 64
      tablet: 48
      mobile: 32
  motion:
    duration:
      fast: 50
      normal: 100
      flicker: 200
    easing: "step-end"
  sections:
    - "Terminal Header"
    - "CRT Hero"
    - "Commands"
    - "Output"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Terminal Footer"
\`\`\``,
  },

  'S94-Pro': {
    paletteStrategy: 'Code editor dark. VS Code inspired. Dark #1E1E1E, syntax colors. Developer focus.',
    typography: 'Monospace fonts (Fira Code, JetBrains Mono). Code authentic.',
    radiusPolicy: 'Minimal 4-8px. Editor-like.',
    shadowPolicy: 'Subtle editor shadows.',
    borderLanguage: 'Tab and panel borders.',
    patterns: 'Line numbers, syntax highlighting.',
    motion: 'Typing cursor animations 200-400ms.',
    dos: [
      'Use code editor dark theme',
      'Add syntax highlighting colors',
      'Create IDE-like interface',
      'Use monospace typography',
      'Implement code animations',
      'Add developer aesthetic'
    ],
    donts: [
      'Don\'t use non-developer fonts',
      'Don\'t use bright backgrounds',
      'Don\'t forget line numbers',
      'Don\'t use rounded shapes'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S94-Pro"
    style_name: "Code Editor Pro"
    industry: "Developer/Tech"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1E1E1E"
      secondary: "#252526"
      sidebar: "#333333"
    border:
      subtle: "#3C3C3C"
      tab: "#4A4A4A"
    text:
      primary: "#D4D4D4"
      secondary: "#9CDCFE"
      muted: "#6A9955"
      keyword: "#569CD6"
      string: "#CE9178"
      variable: "#9CDCFE"
      function: "#DCDCAA"
    brand:
      primary: "#007ACC"
      secondary: "#569CD6"
      accent: "#4EC9B0"
    status:
      success: "#4EC9B0"
      warning: "#DCDCAA"
      danger: "#F14C4C"
  typography:
    fontFamily:
      mono: "Fira Code, JetBrains Mono, Consolas, monospace"
      display: "Inter, system-ui, sans-serif"
    scale:
      h1: { size: 48, line: 56, weight: 600, tracking: 0 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 14, line: 24, weight: 400, tracking: 0.01 }
      small: { size: 12, line: 20, weight: 400, tracking: 0.01 }
  radius:
    sm: 4
    md: 6
    lg: 8
  shadow:
    editor: "0 2px 8px rgba(0, 0, 0, 0.3)"
    panel: "0 4px 16px rgba(0, 0, 0, 0.4)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 80
      tablet: 64
      mobile: 48
  motion:
    duration:
      fast: 100
      normal: 200
      typing: 400
    easing: "linear"
  sections:
    - "Tab Navigation"
    - "Editor Hero"
    - "Features"
    - "Code Samples"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Status Bar Footer"
\`\`\``,
  },

  'S95-Pro': {
    paletteStrategy: 'Data dashboard. Dark gray #1F2937, data visualization colors. Analytics focus.',
    typography: 'Data fonts (Inter, Roboto). Dashboard precision.',
    radiusPolicy: 'Card radius 8-12px. Dashboard widgets.',
    shadowPolicy: 'Card elevation shadows.',
    borderLanguage: 'Widget card borders.',
    patterns: 'Grid layouts, chart elements.',
    motion: 'Data loading animations 200-500ms.',
    dos: [
      'Use dashboard widget layouts',
      'Add data visualization colors',
      'Create analytics aesthetic',
      'Use chart-like elements',
      'Implement data animations',
      'Add metric displays'
    ],
    donts: [
      'Don\'t be too sparse',
      'Don\'t use decorative elements',
      'Don\'t forget data density',
      'Don\'t use overly bright colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S95-Pro"
    style_name: "Data Dashboard Pro"
    industry: "Analytics/Data"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#111827"
      secondary: "#1F2937"
      card: "#374151"
    border:
      subtle: "#4B5563"
      strong: "#6B7280"
    text:
      primary: "#FFFFFF"
      secondary: "#D1D5DB"
      muted: "#9CA3AF"
    brand:
      primary: "#3B82F6"
      secondary: "#10B981"
      accent: "#8B5CF6"
      chart: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Roboto, system-ui, sans-serif"
      mono: "Fira Code, Consolas, monospace"
    scale:
      h1: { size: 48, line: 56, weight: 700, tracking: -0.02 }
      h2: { size: 36, line: 44, weight: 600, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 14, line: 22, weight: 400, tracking: 0 }
      small: { size: 12, line: 18, weight: 400, tracking: 0 }
  radius:
    card: 8
    widget: 12
    button: 6
  shadow:
    card: "0 4px 12px rgba(0, 0, 0, 0.3)"
    widget: "0 2px 8px rgba(0, 0, 0, 0.2)"
  spacing:
    gridMax: 1400
    gutter:
      desktop: 16
      tablet: 12
      mobile: 8
    sectionY:
      desktop: 64
      tablet: 48
      mobile: 32
  motion:
    duration:
      fast: 100
      normal: 250
      chart: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Dashboard Navigation"
    - "Metrics Hero"
    - "Charts"
    - "Data Tables"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Dashboard Footer"
\`\`\``,
  },

  'S96-Pro': {
    paletteStrategy: 'Sci-Fi HUD. Transparent overlays, cyan #00D4FF, orange alerts #FF6600. Targeting reticles.',
    typography: 'HUD fonts (Orbitron, Rajdhani). Military precision.',
    radiusPolicy: 'Angular HUD panels.',
    shadowPolicy: 'Holographic glows.',
    borderLanguage: 'HUD frame borders.',
    patterns: 'Targeting reticles, grid overlays.',
    motion: 'Scanning animations 200-600ms.',
    dos: [
      'Use HUD overlay aesthetic',
      'Add targeting reticle elements',
      'Create transparent panel layers',
      'Use sci-fi typography',
      'Implement scanning animations',
      'Add military tech feel'
    ],
    donts: [
      'Don\'t use solid backgrounds',
      'Don\'t use organic shapes',
      'Don\'t forget the tech precision',
      'Don\'t use warm colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S96-Pro"
    style_name: "Sci-Fi HUD Pro"
    industry: "Sci-Fi/Military"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "rgba(0, 10, 20, 0.9)"
      secondary: "rgba(0, 20, 40, 0.8)"
      overlay: "rgba(0, 30, 60, 0.7)"
    border:
      cyan: "#00D4FF"
      orange: "#FF6600"
      grid: "rgba(0, 212, 255, 0.3)"
    text:
      primary: "#FFFFFF"
      secondary: "#00D4FF"
      muted: "#6A9AAA"
      alert: "#FF6600"
    brand:
      primary: "#00D4FF"
      secondary: "#FF6600"
      accent: "#00FF88"
    status:
      success: "#00FF88"
      warning: "#FF6600"
      danger: "#FF3366"
  typography:
    fontFamily:
      display: "Orbitron, Rajdhani, sans-serif"
      mono: "Share Tech Mono, Fira Code, monospace"
    scale:
      h1: { size: 56, line: 60, weight: 700, tracking: 0.1 }
      h2: { size: 40, line: 44, weight: 600, tracking: 0.08 }
      h3: { size: 28, line: 32, weight: 600, tracking: 0.05 }
      body: { size: 14, line: 22, weight: 400, tracking: 0.03 }
      small: { size: 12, line: 18, weight: 400, tracking: 0.03 }
  radius:
    angular: 2
    panel: 4
  shadow:
    hologram: "0 0 30px rgba(0, 212, 255, 0.5)"
    alert: "0 0 20px rgba(255, 102, 0, 0.5)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 80
      tablet: 64
      mobile: 48
  motion:
    duration:
      fast: 100
      normal: 300
      scan: 800
    easing: "linear"
  sections:
    - "HUD Navigation"
    - "Targeting Hero"
    - "Systems"
    - "Intel"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Status Footer"
\`\`\``,
  },

  'S97-Pro': {
    paletteStrategy: 'Frosted glass heavy blur. iOS-style glassmorphism. Layered transparency. Vibrant backgrounds.',
    typography: 'Clean sans-serif (SF Pro Display, Inter). iOS aesthetic.',
    radiusPolicy: 'Large radius 20-32px. Pill shapes.',
    shadowPolicy: 'Frosted glass shadows.',
    borderLanguage: 'Glass border 1px white opacity.',
    patterns: 'None. Pure glass layers.',
    motion: 'Smooth blur transitions 300-600ms.',
    dos: [
      'Use heavy backdrop blur',
      'Create layered glass panels',
      'Add vibrant gradient backgrounds',
      'Use iOS-style aesthetics',
      'Implement smooth transitions',
      'Add glass border effects'
    ],
    donts: [
      'Don\'t use opaque backgrounds',
      'Don\'t forget the blur',
      'Don\'t use hard edges',
      'Don\'t use dark themes only'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S97-Pro"
    style_name: "Frosted Glass Pro"
    industry: "iOS/Apple"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)"
      secondary: "rgba(255, 255, 255, 0.15)"
      glass: "rgba(255, 255, 255, 0.25)"
    border:
      glass: "rgba(255, 255, 255, 0.3)"
      subtle: "rgba(255, 255, 255, 0.1)"
    text:
      primary: "#FFFFFF"
      secondary: "rgba(255, 255, 255, 0.9)"
      muted: "rgba(255, 255, 255, 0.7)"
    brand:
      primary: "#FFFFFF"
      secondary: "rgba(255, 255, 255, 0.8)"
      accent: "#007AFF"
    status:
      success: "#34C759"
      warning: "#FF9500"
      danger: "#FF3B30"
  typography:
    fontFamily:
      sans: "-apple-system, SF Pro Display, Inter, sans-serif"
      display: "SF Pro Display, Inter, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 17, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    lg: 20
    xl: 28
    pill: 9999
  shadow:
    glass: "0 8px 32px rgba(0, 0, 0, 0.2)"
    elevated: "0 4px 16px rgba(0, 0, 0, 0.1)"
  blur:
    glass: "blur(20px)"
    heavy: "blur(40px)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 200
      normal: 400
      blur: 700
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Glass Navigation"
    - "Frosted Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Glass Footer"
\`\`\``,
  },

  'S98-Pro': {
    paletteStrategy: 'Neomorphism soft. Light gray #E0E5EC, soft shadows, organic 3D. Subtle depth.',
    typography: 'Clean sans-serif (Inter, Poppins). Soft modern.',
    radiusPolicy: 'Large rounded 16-24px. Soft organic.',
    shadowPolicy: 'Dual shadow (light and dark).',
    borderLanguage: 'Soft matching borders.',
    patterns: 'None. Pure soft surfaces.',
    motion: 'Soft press animations 200-400ms.',
    dos: [
      'Use light gray base color',
      'Add dual shadows (light + dark)',
      'Create soft organic 3D effect',
      'Use subtle depth illusion',
      'Implement soft press animations',
      'Add tactile feel'
    ],
    donts: [
      'Don\'t use high contrast',
      'Don\'t use sharp shadows',
      'Don\'t forget the soft feel',
      'Don\'t use bold colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S98-Pro"
    style_name: "Neomorphism Pro"
    industry: "Modern/Soft"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#E0E5EC"
      secondary: "#D1D9E6"
      elevated: "#E8EDF4"
    border:
      subtle: "#D1D9E6"
      matching: "#E0E5EC"
    text:
      primary: "#2D3748"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#667EEA"
      secondary: "#764BA2"
      accent: "#38B2AC"
    status:
      success: "#38B2AC"
      warning: "#ED8936"
      danger: "#E53E3E"
  typography:
    fontFamily:
      sans: "Inter, Poppins, system-ui, sans-serif"
      display: "Poppins, Montserrat, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    md: 16
    lg: 20
    xl: 24
  shadow:
    raised: "8px 8px 16px #C3C9D6, -8px -8px 16px #FFFFFF"
    pressed: "inset 4px 4px 8px #C3C9D6, inset -4px -4px 8px #FFFFFF"
    soft: "4px 4px 8px #C3C9D6, -4px -4px 8px #FFFFFF"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 300
      press: 500
    easing: "ease-out"
  sections:
    - "Soft Navigation"
    - "Raised Hero"
    - "Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Soft Footer"
\`\`\``,
  },

  'S99-Pro': {
    paletteStrategy: 'Material You dynamic. Tonal palettes from single color. Google Material 3 system.',
    typography: 'Google Sans, Roboto. Material 3 type scale.',
    radiusPolicy: 'Large expressive 16-28px. Material shapes.',
    shadowPolicy: 'Tonal elevation system.',
    borderLanguage: 'Tonal container borders.',
    patterns: 'Dynamic color surfaces.',
    motion: 'Emphasized easing 200-500ms.',
    dos: [
      'Use tonal color palettes',
      'Create Material 3 aesthetic',
      'Add dynamic color surfaces',
      'Use expressive shapes',
      'Implement emphasized motion',
      'Add container system'
    ],
    donts: [
      'Don\'t use clashing colors',
      'Don\'t break tonal harmony',
      'Don\'t forget the system',
      'Don\'t use arbitrary colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S99-Pro"
    style_name: "Material You Pro"
    industry: "Google/Android"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFBFF"
      secondary: "#E8DEF8"
      tertiary: "#FFD8E4"
    border:
      outline: "#79747E"
      container: "#E7E0EC"
    text:
      primary: "#1C1B1F"
      secondary: "#49454F"
      muted: "#79747E"
    brand:
      primary: "#6750A4"
      secondary: "#625B71"
      tertiary: "#7D5260"
      container: "#EADDFF"
    status:
      success: "#386A20"
      warning: "#7D5800"
      danger: "#B3261E"
  typography:
    fontFamily:
      sans: "Google Sans, Roboto, system-ui, sans-serif"
      display: "Google Sans Display, Roboto, sans-serif"
    scale:
      h1: { size: 57, line: 64, weight: 400, tracking: -0.25 }
      h2: { size: 45, line: 52, weight: 400, tracking: 0 }
      h3: { size: 36, line: 44, weight: 400, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0.5 }
      small: { size: 14, line: 20, weight: 500, tracking: 0.1 }
  radius:
    md: 16
    lg: 20
    xl: 28
    full: 9999
  shadow:
    level1: "0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)"
    level2: "0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)"
    level3: "0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 16
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      short: 200
      medium: 400
      long: 500
    easing: "cubic-bezier(0.2, 0, 0, 1)"
  sections:
    - "Material Navigation"
    - "Dynamic Hero"
    - "Features"
    - "Container Grid"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "FAB CTA"
    - "Material Footer"
\`\`\``,
  },

  'S100-Pro': {
    paletteStrategy: 'The Ultimate comprehensive. Adaptive system supporting all modes. Complete design system.',
    typography: 'Full type scale with all weights. Comprehensive hierarchy.',
    radiusPolicy: 'Full range from 0 to pill. Complete flexibility.',
    shadowPolicy: 'Complete elevation system 0-5 levels.',
    borderLanguage: 'Full border vocabulary.',
    patterns: 'Component library support.',
    motion: 'Complete motion system.',
    dos: [
      'Use comprehensive design tokens',
      'Support all UI patterns',
      'Enable full customization',
      'Provide complete flexibility',
      'Include all component types',
      'Create ultimate versatility'
    ],
    donts: [
      'Don\'t limit creativity',
      'Don\'t restrict options',
      'Don\'t forget edge cases',
      'Don\'t compromise completeness'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S100-Pro"
    style_name: "The Ultimate Pro"
    industry: "Universal"
    use_case: "Full Landing Page"
  color:
    background:
      light: "#FFFFFF"
      muted: "#F8FAFC"
      dark: "#0F172A"
      brand: "#8B5CF6"
    border:
      subtle: "#E2E8F0"
      medium: "#CBD5E1"
      strong: "#64748B"
    text:
      primary: "#0F172A"
      secondary: "#475569"
      muted: "#94A3B8"
      inverted: "#FFFFFF"
    brand:
      primary: "#8B5CF6"
      secondary: "#3B82F6"
      accent: "#10B981"
      highlight: "#F59E0B"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
      info: "#3B82F6"
  typography:
    fontFamily:
      sans: "Inter, system-ui, sans-serif"
      serif: "Playfair Display, Georgia, serif"
      mono: "Fira Code, Consolas, monospace"
      display: "Poppins, Montserrat, sans-serif"
    scale:
      display: { size: 72, line: 80, weight: 800, tracking: -0.03 }
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      h4: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
      tiny: { size: 12, line: 18, weight: 400, tracking: 0.01 }
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
    xl: 16
    "2xl": 24
    pill: 9999
  shadow:
    none: "none"
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 4px 6px rgba(0,0,0,0.07)"
    lg: "0 10px 15px rgba(0,0,0,0.1)"
    xl: "0 20px 25px rgba(0,0,0,0.15)"
    "2xl": "0 25px 50px rgba(0,0,0,0.25)"
  spacing:
    gridMax: 1280
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      instant: 0
      fast: 150
      normal: 300
      slow: 500
      slower: 700
    easing:
      default: "cubic-bezier(0.4, 0, 0.2, 1)"
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      smooth: "ease-out"
  sections:
    - "Complete Navigation"
    - "Ultimate Hero"
    - "Problem Statement"
    - "Value Proposition"
    - "System Overview"
    - "Bento Grid"
    - "Trust and Proof"
    - "Integrations"
    - "Use Cases"
    - "Pricing"
    - "FAQ"
    - "Final CTA"
    - "Comprehensive Footer"
\`\`\``,
  },
};




