import type { StyleDNAConfig } from './types';

// Pro 版進階風格配置 (S22-S50)
export const S22_S50_Pro_Configs: Record<string, StyleDNAConfig> = {
  'S22-Pro': {
    paletteStrategy: 'Deep dark theme. Pure black #000000 background, surface #0A0A0B. Cyan #00D9FF primary, purple #7C3AED secondary. High contrast text #FFFFFF.',
    typography: 'Monospace display (JetBrains Mono, Fira Code). Bold weights for headers. Technical precision feel.',
    radiusPolicy: 'Medium radius 8-16px for modern feel. Rounded corners for cards.',
    shadowPolicy: 'Subtle glows and neon effects. 0 0 40px rgba(0, 217, 255, 0.3). Cyan glow accents.',
    borderLanguage: 'Thin borders #262626. Glowing borders on hover.',
    patterns: 'Subtle grid patterns, terminal-like backgrounds.',
    motion: 'Smooth 200-400ms transitions. Glow pulse effects.',
    dos: [
      'Use pure black backgrounds for OLED optimization',
      'Add subtle glow accents on interactive elements',
      'Keep contrast extremely high (21:1)',
      'Use monospace fonts for technical feel',
      'Implement subtle grid patterns',
      'Add terminal-like code previews'
    ],
    donts: [
      'Don\'t use light themes or gray backgrounds',
      'Don\'t use low contrast combinations',
      'Don\'t overuse glow effects',
      'Don\'t break the developer aesthetic'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S22-Pro"
    style_name: "Dark Mode Elegance Pro"
    industry: "Developer Tools"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#000000"
      secondary: "#0A0A0B"
      surface: "#141414"
      elevated: "#1A1A1A"
    border:
      subtle: "#262626"
      strong: "#404040"
      glow: "rgba(0, 217, 255, 0.3)"
    text:
      primary: "#FFFFFF"
      secondary: "#A3A3A3"
      muted: "#525252"
      inverse: "#000000"
    brand:
      primary: "#00D9FF"
      secondary: "#7C3AED"
      accent: "#10B981"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "JetBrains Mono, Fira Code, monospace"
      mono: "JetBrains Mono, Fira Code, Consolas, monospace"
    scale:
      h1: { size: 72, line: 80, weight: 800, tracking: -0.02 }
      h2: { size: 48, line: 56, weight: 700, tracking: -0.01 }
      h3: { size: 32, line: 40, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    sm: 8
    md: 12
    lg: 16
    xl: 24
  shadow:
    none: "none"
    glow: "0 0 40px rgba(0, 217, 255, 0.3)"
    glow_purple: "0 0 40px rgba(124, 58, 237, 0.3)"
    soft: "0 4px 20px rgba(0, 0, 0, 0.5)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 16
    sectionY:
      desktop: 120
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      slow: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  breakpoints:
    mobile: 480
    tablet: 768
    desktop: 1024
    wide: 1280
  sections:
    - "Dark Navigation"
    - "Glowing Hero"
    - "Problem Statement"
    - "Value Proposition"
    - "Feature Cards"
    - "Terminal Preview"
    - "How It Works"
    - "Testimonials"
    - "Pricing Cards"
    - "FAQ"
    - "CTA Section"
    - "Dark Footer"
\`\`\``,
  },

  'S23-Pro': {
    paletteStrategy: 'Playful pastel palette. Lavender #F0E6FF, mint #E6FFF0, peach #FFE6E6. Hand-drawn, whimsical feel.',
    typography: 'Rounded friendly fonts (Nunito, Quicksand). Bouncy, playful weights.',
    radiusPolicy: 'Large radius 16-24px. Soft, cloud-like shapes.',
    shadowPolicy: 'Soft paper shadows. Subtle depth with warmth.',
    borderLanguage: 'Sketch-like borders, wobbly lines 2-3px.',
    patterns: 'Doodle patterns, hand-drawn stars, hearts, squiggles.',
    motion: 'Bouncy, playful spring animations 300-500ms.',
    dos: [
      'Use soft pastel colors',
      'Add hand-drawn doodle elements',
      'Keep typography friendly and rounded',
      'Implement bouncy hover effects',
      'Create whimsical illustrations',
      'Use crayon-like textures'
    ],
    donts: [
      'Don\'t use sharp corners',
      'Don\'t be too formal or corporate',
      'Don\'t use dark or heavy colors',
      'Don\'t forget the playful personality'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S23-Pro"
    style_name: "Doodle Sketch Pro"
    industry: "Creative/Kids"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFBF5"
      secondary: "#FFF5EB"
      elevated: "#FFFFFF"
    border:
      subtle: "#E8DED0"
      strong: "#333333"
      sketch: "#4A4A4A"
    text:
      primary: "#2D2D2D"
      secondary: "#5A5A5A"
      muted: "#8A8A8A"
      inverse: "#FFFFFF"
    brand:
      primary: "#FF6B9D"
      secondary: "#9B6BFF"
      accent: "#6BFFB8"
      yellow: "#FFD93D"
    status:
      success: "#6BFFB8"
      warning: "#FFD93D"
      danger: "#FF6B6B"
  typography:
    fontFamily:
      sans: "Nunito, Quicksand, Comic Sans MS, cursive"
      display: "Patrick Hand, Caveat, cursive"
      mono: "JetBrains Mono, monospace"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: 0 }
      h2: { size: 40, line: 52, weight: 600, tracking: 0 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 12
    md: 20
    lg: 28
    blob: "50% 45% 55% 50% / 45% 50% 50% 55%"
  shadow:
    paper: "4px 4px 0 rgba(0,0,0,0.1)"
    soft: "0 4px 20px rgba(0,0,0,0.08)"
    sketch: "3px 3px 0 #333333"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 100
      tablet: 80
      mobile: 60
  motion:
    duration:
      fast: 200
      normal: 400
      bounce: 600
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  sections:
    - "Playful Navigation"
    - "Doodle Hero"
    - "Features with Stars"
    - "How It Works"
    - "Testimonials"
    - "Pricing Cards"
    - "FAQ"
    - "CTA"
    - "Colorful Footer"
\`\`\``,
  },

  'S24-Pro': {
    paletteStrategy: 'Pure minimal. White #FFFFFF background. Black #000000 lines. Single accent #FF3366 optional.',
    typography: 'Thin elegant sans-serif (Inter, Helvetica Neue). Light weights 300-400.',
    radiusPolicy: 'Zero or minimal radius 2px. Clean geometric precision.',
    shadowPolicy: 'None. Rely purely on lines and negative space.',
    borderLanguage: 'Thin precise lines 1px. Geometric grid structures.',
    patterns: 'Line art patterns, geometric grid backgrounds.',
    motion: 'Subtle, precise animations 150-250ms. Linear timing.',
    dos: [
      'Use clean geometric lines',
      'Embrace generous negative space',
      'Keep typography light and elegant',
      'Use single accent color sparingly',
      'Create precise grid alignments',
      'Implement line-drawing animations'
    ],
    donts: [
      'Don\'t add unnecessary decorations',
      'Don\'t use multiple colors',
      'Don\'t use shadows or depth',
      'Don\'t clutter the layout'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S24-Pro"
    style_name: "Minimalist Line Art Pro"
    industry: "Design Studio"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      elevated: "#FFFFFF"
    border:
      subtle: "#E5E5E5"
      strong: "#000000"
      line: "#000000"
    text:
      primary: "#000000"
      secondary: "#666666"
      muted: "#999999"
      inverse: "#FFFFFF"
    brand:
      primary: "#000000"
      accent: "#FF3366"
    status:
      success: "#000000"
      warning: "#000000"
      danger: "#FF3366"
  typography:
    fontFamily:
      sans: "Inter, Helvetica Neue, Arial, sans-serif"
      mono: "JetBrains Mono, monospace"
    scale:
      h1: { size: 64, line: 72, weight: 300, tracking: -0.03 }
      h2: { size: 40, line: 48, weight: 300, tracking: -0.02 }
      h3: { size: 24, line: 32, weight: 400, tracking: -0.01 }
      body: { size: 16, line: 28, weight: 300, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 300, tracking: 0.02 }
  radius:
    none: 0
    sm: 0
    md: 2
  shadow:
    none: "none"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 128
      tablet: 96
      mobile: 64
  motion:
    duration:
      fast: 150
      normal: 250
      slow: 400
    easing: "linear"
  sections:
    - "Line Navigation"
    - "Geometric Hero"
    - "Value Proposition"
    - "Features Grid"
    - "Process Flow"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "Contact"
    - "Minimal Footer"
\`\`\``,
  },

  'S25-Pro': {
    paletteStrategy: 'Paper craft colors. Cream #F5F0E6, kraft brown #C4A77D. Layered paper shadows.',
    typography: 'Print-style fonts (Crimson Text, Lora). Editorial feel with paper texture.',
    radiusPolicy: 'Irregular torn edges. Natural paper shapes.',
    shadowPolicy: 'Layered paper shadows. Multiple depth levels.',
    borderLanguage: 'Torn paper edges, fold lines, tape strips.',
    patterns: 'Paper texture, fold creases, stamp effects.',
    motion: 'Paper flip and fold animations 300-600ms.',
    dos: [
      'Use paper textures and creases',
      'Create layered depth with multiple papers',
      'Add torn edge effects',
      'Use tape and pin elements',
      'Implement fold animations',
      'Create scrapbook aesthetic'
    ],
    donts: [
      'Don\'t use digital flat colors',
      'Don\'t forget the tactile paper feel',
      'Don\'t use modern glass effects',
      'Don\'t make it too clean'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S25-Pro"
    style_name: "Paper Craft Pro"
    industry: "Creative/Editorial"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5F0E6"
      secondary: "#EDE6D9"
      kraft: "#C4A77D"
      elevated: "#FFFEF9"
    border:
      subtle: "#D4C9B5"
      strong: "#8B7355"
      tape: "rgba(255, 240, 200, 0.7)"
    text:
      primary: "#3D3225"
      secondary: "#6B5E4F"
      muted: "#9B8E7F"
      inverse: "#F5F0E6"
    brand:
      primary: "#C4A77D"
      secondary: "#8B7355"
      accent: "#D4AF37"
    status:
      success: "#6B8E4F"
      warning: "#D4A730"
      danger: "#A05050"
  typography:
    fontFamily:
      serif: "Crimson Text, Lora, Georgia, serif"
      sans: "Source Sans Pro, sans-serif"
      handwritten: "Caveat, Patrick Hand, cursive"
    scale:
      h1: { size: 56, line: 68, weight: 600, tracking: -0.01 }
      h2: { size: 40, line: 52, weight: 600, tracking: -0.005 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    none: 0
    paper: "2px 8px 4px 12px"
    fold: "0 4px 8px 0"
  shadow:
    paper_light: "2px 2px 8px rgba(0,0,0,0.1)"
    paper_medium: "4px 4px 12px rgba(0,0,0,0.15)"
    paper_deep: "8px 8px 20px rgba(0,0,0,0.2)"
    tape: "1px 1px 3px rgba(0,0,0,0.1)"
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
      fold: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Paper Navigation"
    - "Layered Hero"
    - "Feature Cards"
    - "Process Steps"
    - "Scrapbook Gallery"
    - "Testimonials"
    - "Pricing Cards"
    - "FAQ Accordion"
    - "Contact Form"
    - "Paper Footer"
\`\`\``,
  },

  'S26-Pro': {
    paletteStrategy: 'Modern flat with depth. Clean white #FFFFFF. Primary blue #3B82F6, success green #10B981.',
    typography: 'Clean modern sans-serif (Inter, Roboto). Medium weights, crisp rendering.',
    radiusPolicy: 'Consistent medium radius 8-16px. Rounded but not pillowy.',
    shadowPolicy: 'Subtle elevation shadows. Material-inspired depth.',
    borderLanguage: 'Minimal thin borders. Rely on color and shadow.',
    patterns: 'None. Pure clean surfaces.',
    motion: 'Smooth Material-style 200-350ms. Standard easing.',
    dos: [
      'Keep surfaces clean and spacious',
      'Use consistent elevation levels',
      'Apply subtle shadows purposefully',
      'Follow systematic color usage',
      'Implement Material motion curves',
      'Maintain clear visual hierarchy'
    ],
    donts: [
      'Don\'t overuse shadows',
      'Don\'t add decorative patterns',
      'Don\'t use too many elevation levels',
      'Don\'t break consistency'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S26-Pro"
    style_name: "Flat 2.0 Pro"
    industry: "SaaS/Tech"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
      tertiary: "#F1F5F9"
      elevated: "#FFFFFF"
    border:
      subtle: "#E2E8F0"
      strong: "#CBD5E1"
    text:
      primary: "#0F172A"
      secondary: "#475569"
      muted: "#94A3B8"
      inverse: "#FFFFFF"
    brand:
      primary: "#3B82F6"
      primaryHover: "#2563EB"
      secondary: "#8B5CF6"
      accent: "#10B981"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, Roboto, system-ui, sans-serif"
      mono: "JetBrains Mono, Fira Code, monospace"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 6
    md: 10
    lg: 14
    xl: 20
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 4px 6px rgba(0,0,0,0.07)"
    lg: "0 10px 15px rgba(0,0,0,0.1)"
    xl: "0 20px 25px rgba(0,0,0,0.1)"
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
    - "Clean Navigation"
    - "Hero Section"
    - "Problem Statement"
    - "Value Proposition"
    - "Features Grid"
    - "How It Works"
    - "Trust Section"
    - "Pricing Cards"
    - "FAQ"
    - "CTA"
    - "Footer"
\`\`\``,
  },

  'S27-Pro': {
    paletteStrategy: 'Y2K futuristic. Chrome silver, hot pink #FF00FF, electric blue #00FFFF. Gradient blobs.',
    typography: 'Futuristic display fonts (Orbitron, Audiowide). Chrome text effects.',
    radiusPolicy: 'Bubble organic shapes. Blob-like curves.',
    shadowPolicy: 'Chrome reflections, metallic glows.',
    borderLanguage: 'Metallic gradient outlines. Iridescent edges.',
    patterns: 'Blob shapes, bubble effects, chrome reflections.',
    motion: 'Smooth morphing animations 300-600ms. Liquid transitions.',
    dos: [
      'Use chrome and metallic effects',
      'Add blob and bubble shapes',
      'Implement gradient text',
      'Create futuristic aesthetic',
      'Use hot pink and electric blue',
      'Add liquid morphing animations'
    ],
    donts: [
      'Don\'t be too minimal',
      'Don\'t use matte surfaces',
      'Don\'t forget the chrome shine',
      'Don\'t break the 2000s futurism'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S27-Pro"
    style_name: "Y2K Aesthetic Pro"
    industry: "Fashion/Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A15"
      secondary: "#15152A"
      gradient: "linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FF00FF 100%)"
    border:
      chrome: "linear-gradient(135deg, #C0C0C0, #FFFFFF, #C0C0C0)"
      glow: "rgba(255, 0, 255, 0.5)"
    text:
      primary: "#FFFFFF"
      secondary: "#B0B0C0"
      muted: "#707080"
      chrome: "linear-gradient(135deg, #C0C0C0, #FFFFFF, #C0C0C0)"
    brand:
      primary: "#FF00FF"
      secondary: "#00FFFF"
      chrome: "#C0C0C0"
      pink: "#FF69B4"
    status:
      success: "#00FFFF"
      warning: "#FFFF00"
      danger: "#FF0066"
  typography:
    fontFamily:
      display: "Orbitron, Audiowide, sans-serif"
      sans: "Rajdhani, Exo 2, sans-serif"
      mono: "Share Tech Mono, monospace"
    scale:
      h1: { size: 72, line: 80, weight: 700, tracking: 0.05 }
      h2: { size: 48, line: 56, weight: 600, tracking: 0.03 }
      h3: { size: 32, line: 40, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.02 }
  radius:
    sm: 16
    md: 24
    lg: 40
    blob: "60% 40% 50% 50% / 50% 60% 40% 50%"
  shadow:
    chrome: "0 0 20px rgba(192, 192, 192, 0.5)"
    pink_glow: "0 0 40px rgba(255, 0, 255, 0.4)"
    cyan_glow: "0 0 40px rgba(0, 255, 255, 0.4)"
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
      morph: 800
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  sections:
    - "Chrome Navigation"
    - "Blob Hero"
    - "Features Spheres"
    - "Morphing Gallery"
    - "Testimonials"
    - "Pricing Bubbles"
    - "FAQ"
    - "CTA"
    - "Chrome Footer"
\`\`\``,
  },

  'S28-Pro': {
    paletteStrategy: 'Eco-futurism. Forest green #22C55E, gold #EAB308, cream #FEFCE8. Organic tech fusion.',
    typography: 'Clean humanist sans-serif (Lato, Open Sans). Warm, approachable.',
    radiusPolicy: 'Organic flowing curves 12-24px. Leaf-like shapes.',
    shadowPolicy: 'Soft natural shadows. Warm light feel.',
    borderLanguage: 'Organic flowing lines. Vine-like patterns.',
    patterns: 'Leaf patterns, solar motifs, organic textures.',
    motion: 'Flowing natural animations 300-500ms. Growing effects.',
    dos: [
      'Blend nature with technology',
      'Use green and gold palette',
      'Add organic plant elements',
      'Create sustainable future aesthetic',
      'Implement growing animations',
      'Use solar and leaf motifs'
    ],
    donts: [
      'Don\'t use harsh industrial elements',
      'Don\'t forget the eco-optimism',
      'Don\'t use dark dystopian tones',
      'Don\'t break the nature-tech balance'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S28-Pro"
    style_name: "Solarpunk Pro"
    industry: "Sustainability/Green Tech"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FEFCE8"
      secondary: "#F0FDF4"
      elevated: "#FFFFFF"
    border:
      subtle: "#D1FAE5"
      strong: "#22C55E"
      gold: "#EAB308"
    text:
      primary: "#14532D"
      secondary: "#166534"
      muted: "#4ADE80"
      inverse: "#FEFCE8"
    brand:
      primary: "#22C55E"
      secondary: "#EAB308"
      accent: "#84CC16"
    status:
      success: "#22C55E"
      warning: "#EAB308"
      danger: "#DC2626"
  typography:
    fontFamily:
      sans: "Lato, Open Sans, system-ui, sans-serif"
      display: "Quicksand, Nunito, sans-serif"
      mono: "JetBrains Mono, monospace"
    scale:
      h1: { size: 56, line: 68, weight: 700, tracking: -0.01 }
      h2: { size: 40, line: 52, weight: 600, tracking: -0.005 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    sm: 8
    md: 16
    lg: 24
    organic: "30% 70% 70% 30% / 30% 30% 70% 70%"
  shadow:
    soft: "0 4px 20px rgba(34, 197, 94, 0.15)"
    warm: "0 8px 32px rgba(234, 179, 8, 0.2)"
    leaf: "0 2px 10px rgba(34, 197, 94, 0.2)"
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
      grow: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Organic Navigation"
    - "Nature Hero"
    - "Features with Plants"
    - "Sustainability Stats"
    - "How It Works"
    - "Testimonials"
    - "Pricing Cards"
    - "FAQ"
    - "CTA"
    - "Green Footer"
\`\`\``,
  },

  'S29-Pro': {
    paletteStrategy: 'Art Deco luxury. Black #0A0A0A, gold #D4AF37, cream #FDF6E3. Geometric elegance.',
    typography: 'Decorative display (Poiret One, Josefin Sans). Elegant serif for body.',
    radiusPolicy: 'Zero radius. Sharp geometric precision.',
    shadowPolicy: 'Gold glows, metallic reflections.',
    borderLanguage: 'Gold geometric frames, sunburst patterns.',
    patterns: 'Sunburst rays, fan patterns, geometric motifs.',
    motion: 'Elegant reveals 300-500ms. Fade and slide.',
    dos: [
      'Use gold accents liberally',
      'Create symmetric geometric patterns',
      'Implement sunburst and fan motifs',
      'Use decorative typography',
      'Add metallic gold effects',
      'Maintain luxury feel throughout'
    ],
    donts: [
      'Don\'t use casual fonts',
      'Don\'t use rounded shapes',
      'Don\'t forget the geometric precision',
      'Don\'t make it look cheap'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S29-Pro"
    style_name: "Art Deco Pro"
    industry: "Luxury/Hospitality"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0A"
      secondary: "#1A1A1A"
      cream: "#FDF6E3"
      elevated: "#0F0F0F"
    border:
      subtle: "#2A2A2A"
      gold: "#D4AF37"
      strong: "#B8860B"
    text:
      primary: "#FDF6E3"
      secondary: "#C0B090"
      muted: "#8A7A60"
      gold: "#D4AF37"
      inverse: "#0A0A0A"
    brand:
      primary: "#D4AF37"
      secondary: "#B8860B"
      accent: "#FFD700"
    status:
      success: "#D4AF37"
      warning: "#FFD700"
      danger: "#8B0000"
  typography:
    fontFamily:
      display: "Poiret One, Josefin Sans, sans-serif"
      serif: "Playfair Display, Cormorant Garamond, serif"
      sans: "Josefin Sans, Lato, sans-serif"
    scale:
      h1: { size: 72, line: 80, weight: 400, tracking: 0.15 }
      h2: { size: 48, line: 56, weight: 400, tracking: 0.1 }
      h3: { size: 32, line: 40, weight: 400, tracking: 0.08 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.02 }
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    none: "none"
    gold_glow: "0 0 30px rgba(212, 175, 55, 0.3)"
    gold_strong: "0 0 50px rgba(212, 175, 55, 0.5)"
  spacing:
    gridMax: 1200
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
      fast: 200
      normal: 400
      elegant: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Deco Navigation"
    - "Sunburst Hero"
    - "Features Grid"
    - "Gallery"
    - "Process Steps"
    - "Testimonials"
    - "Pricing Cards"
    - "FAQ"
    - "CTA"
    - "Deco Footer"
\`\`\``,
  },

  'S30-Pro': {
    paletteStrategy: 'Industrial. Concrete gray #6B7280, yellow #FBBF24, black #000000. Caution stripes.',
    typography: 'Bold industrial fonts (Bebas Neue, Oswald). Heavy weights.',
    radiusPolicy: 'Zero. Harsh angular edges.',
    shadowPolicy: 'Harsh directional shadows.',
    borderLanguage: 'Caution stripes, metal plate borders.',
    patterns: 'Warning patterns, metal textures, rivets.',
    motion: 'Mechanical heavy movements 200-400ms.',
    dos: [
      'Use industrial textures (concrete, metal)',
      'Add caution stripe elements',
      'Implement heavy bold typography',
      'Create utilitarian aesthetic',
      'Use yellow/black warning colors',
      'Add rivet and bolt details'
    ],
    donts: [
      'Don\'t use soft or organic shapes',
      'Don\'t use pastel colors',
      'Don\'t make it too refined',
      'Don\'t forget the raw industrial feel'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S30-Pro"
    style_name: "Industrial Pro"
    industry: "Manufacturing/Construction"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1F2937"
      secondary: "#374151"
      concrete: "#6B7280"
      elevated: "#4B5563"
    border:
      subtle: "#4B5563"
      strong: "#000000"
      warning: "#FBBF24"
    text:
      primary: "#F9FAFB"
      secondary: "#D1D5DB"
      muted: "#9CA3AF"
      warning: "#FBBF24"
      inverse: "#1F2937"
    brand:
      primary: "#FBBF24"
      secondary: "#000000"
      accent: "#EF4444"
    status:
      success: "#22C55E"
      warning: "#FBBF24"
      danger: "#EF4444"
  typography:
    fontFamily:
      display: "Bebas Neue, Oswald, Impact, sans-serif"
      sans: "Roboto Condensed, Arial Narrow, sans-serif"
      mono: "Roboto Mono, monospace"
    scale:
      h1: { size: 80, line: 88, weight: 700, tracking: 0.05 }
      h2: { size: 56, line: 64, weight: 700, tracking: 0.03 }
      h3: { size: 36, line: 44, weight: 700, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    none: 0
    sm: 0
    md: 2
  shadow:
    harsh: "4px 4px 0 #000000"
    harsh_large: "8px 8px 0 #000000"
    inset: "inset 2px 2px 4px rgba(0,0,0,0.3)"
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
      heavy: 400
    easing: "cubic-bezier(0.4, 0, 1, 1)"
  sections:
    - "Industrial Navigation"
    - "Bold Hero"
    - "Features Grid"
    - "Specifications"
    - "Process Steps"
    - "Gallery"
    - "Testimonials"
    - "Pricing Table"
    - "FAQ"
    - "CTA"
    - "Metal Footer"
\`\`\``,
  },

  'S31-Pro': {
    paletteStrategy: 'Skeuomorphic textures. Leather brown #8B4513, wood grain #D2691E, brushed metal #C0C0C0.',
    typography: 'Classic serif and sans (Georgia, Verdana). Real-world readable.',
    radiusPolicy: 'Realistic object shapes. Rounded like physical buttons.',
    shadowPolicy: 'Realistic depth shadows, inner bevels.',
    borderLanguage: 'Stitching details, embossed edges.',
    patterns: 'Leather texture, wood grain, metal surfaces.',
    motion: 'Physical press animations 100-200ms.',
    dos: [
      'Use realistic material textures',
      'Create depth with bevels and emboss',
      'Add stitching and physical details',
      'Implement tactile button states',
      'Use realistic lighting',
      'Make elements feel physical'
    ],
    donts: [
      'Don\'t use flat design',
      'Don\'t forget texture details',
      'Don\'t use minimal aesthetics',
      'Don\'t break the realism'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S31-Pro"
    style_name: "Skeuomorphic Pro"
    industry: "App/Productivity"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#E8E0D5"
      secondary: "#D5C9B8"
      leather: "#8B4513"
      wood: "#D2691E"
    border:
      subtle: "#C5B8A5"
      strong: "#8B4513"
      bevel_light: "#FFFFFF"
      bevel_dark: "#666666"
    text:
      primary: "#2C1810"
      secondary: "#5A4A3A"
      muted: "#8A7A6A"
      inverse: "#F5F0E8"
    brand:
      primary: "#8B4513"
      secondary: "#D2691E"
      metal: "#C0C0C0"
    status:
      success: "#228B22"
      warning: "#DAA520"
      danger: "#B22222"
  typography:
    fontFamily:
      serif: "Georgia, Times New Roman, serif"
      sans: "Verdana, Geneva, sans-serif"
      display: "Palatino Linotype, Book Antiqua, serif"
    scale:
      h1: { size: 48, line: 58, weight: 700, tracking: 0 }
      h2: { size: 36, line: 46, weight: 600, tracking: 0 }
      h3: { size: 24, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 4
    md: 8
    lg: 12
    button: 6
  shadow:
    bevel: "inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #666666"
    depth: "0 4px 8px rgba(0,0,0,0.3)"
    pressed: "inset 2px 2px 4px rgba(0,0,0,0.3)"
  spacing:
    gridMax: 1100
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 88
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 200
      slow: 300
    easing: "ease-out"
  sections:
    - "Textured Navigation"
    - "3D Hero"
    - "Features Panel"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Wood Footer"
\`\`\``,
  },

  'S32-Pro': {
    paletteStrategy: 'Windows 95 system colors. Gray #C0C0C0, blue title bar #000080, white #FFFFFF.',
    typography: 'System fonts (MS Sans Serif, Tahoma). Pixel-perfect rendering.',
    radiusPolicy: 'Zero. Beveled window edges.',
    shadowPolicy: 'System bevels, inset borders.',
    borderLanguage: 'System borders, 3D bevels.',
    patterns: 'None. Pure system UI.',
    motion: 'Instant, no transitions.',
    dos: [
      'Use authentic system gray palette',
      'Create beveled 3D buttons',
      'Implement window chrome elements',
      'Use pixel-perfect borders',
      'Add system icons',
      'Create retro dialog boxes'
    ],
    donts: [
      'Don\'t use modern design effects',
      'Don\'t round corners',
      'Don\'t use smooth animations',
      'Don\'t break 90s authenticity'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S32-Pro"
    style_name: "Windows 95 Pro"
    industry: "Retro/Nostalgia"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#C0C0C0"
      secondary: "#DFDFDF"
      window: "#FFFFFF"
      titlebar: "#000080"
    border:
      light: "#FFFFFF"
      dark: "#808080"
      darker: "#404040"
    text:
      primary: "#000000"
      secondary: "#404040"
      muted: "#808080"
      titlebar: "#FFFFFF"
    brand:
      primary: "#000080"
      secondary: "#008080"
      accent: "#800000"
    status:
      success: "#008000"
      warning: "#808000"
      danger: "#800000"
  typography:
    fontFamily:
      system: "MS Sans Serif, Tahoma, Arial, sans-serif"
      mono: "Fixedsys, Courier New, monospace"
    scale:
      h1: { size: 24, line: 32, weight: 700, tracking: 0 }
      h2: { size: 18, line: 24, weight: 700, tracking: 0 }
      h3: { size: 14, line: 20, weight: 700, tracking: 0 }
      body: { size: 12, line: 18, weight: 400, tracking: 0 }
      small: { size: 11, line: 16, weight: 400, tracking: 0 }
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    raised: "inset -1px -1px 0 #404040, inset 1px 1px 0 #FFFFFF, inset -2px -2px 0 #808080, inset 2px 2px 0 #DFDFDF"
    sunken: "inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF, inset 2px 2px 0 #404040"
    window: "2px 2px 0 #000000"
  spacing:
    gridMax: 800
    gutter:
      desktop: 16
      tablet: 12
      mobile: 8
    sectionY:
      desktop: 48
      tablet: 40
      mobile: 32
  motion:
    duration:
      instant: 0
    easing: "step-end"
  sections:
    - "Title Bar Navigation"
    - "Window Hero"
    - "Features List"
    - "Dialog Boxes"
    - "Installation Wizard"
    - "Pricing Table"
    - "Help Topics"
    - "About Window"
    - "Taskbar Footer"
\`\`\``,
  },

  'S33-Pro': {
    paletteStrategy: 'Liquid chrome. Silver #C0C0C0, mercury reflections, dark background #0A0A0A.',
    typography: 'Chrome outlined display fonts. Bold futuristic.',
    radiusPolicy: 'Fluid organic blob shapes.',
    shadowPolicy: 'Chrome reflections, metallic glows.',
    borderLanguage: 'Metallic gradient edges.',
    patterns: 'Liquid ripple effects, mercury pools.',
    motion: 'Fluid morphing 400-800ms.',
    dos: [
      'Create liquid chrome effects',
      'Use fluid organic shapes',
      'Implement mercury-like reflections',
      'Add morphing blob animations',
      'Use metallic gradients',
      'Create T-1000 aesthetic'
    ],
    donts: [
      'Don\'t use matte surfaces',
      'Don\'t use sharp edges',
      'Don\'t forget reflective highlights',
      'Don\'t break the liquid feel'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S33-Pro"
    style_name: "Liquid Metal Pro"
    industry: "Sci-Fi/Futuristic"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0A"
      secondary: "#1A1A1A"
      chrome_dark: "#2A2A2A"
    border:
      chrome: "linear-gradient(135deg, #4A4A4A, #C0C0C0, #4A4A4A)"
      highlight: "#FFFFFF"
    text:
      primary: "#FFFFFF"
      secondary: "#B0B0B0"
      muted: "#707070"
      chrome: "linear-gradient(180deg, #FFFFFF, #808080)"
    brand:
      chrome: "#C0C0C0"
      silver: "#D4D4D4"
      mercury: "#E8E8E8"
    status:
      success: "#00FF88"
      warning: "#FFBB00"
      danger: "#FF4444"
  typography:
    fontFamily:
      display: "Orbitron, Syncopate, sans-serif"
      sans: "Exo 2, Rajdhani, sans-serif"
      mono: "Share Tech Mono, monospace"
    scale:
      h1: { size: 72, line: 80, weight: 700, tracking: 0.05 }
      h2: { size: 48, line: 56, weight: 600, tracking: 0.03 }
      h3: { size: 32, line: 40, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    blob: "50% 40% 60% 50% / 40% 60% 50% 50%"
    organic: "30% 70% 55% 45% / 60% 40% 55% 45%"
  shadow:
    chrome: "0 0 30px rgba(255,255,255,0.2)"
    mercury: "0 0 60px rgba(192,192,192,0.3)"
    reflection: "inset 0 -20px 40px rgba(255,255,255,0.1)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 120
      tablet: 96
      mobile: 72
  motion:
    duration:
      fast: 300
      normal: 600
      morph: 1000
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  sections:
    - "Chrome Navigation"
    - "Morphing Hero"
    - "Liquid Features"
    - "Flow Demo"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Mercury Footer"
\`\`\``,
  },

  'S34-Pro': {
    paletteStrategy: 'Holographic rainbow. Iridescent gradients, prismatic colors on white/light gray.',
    typography: 'Modern clean sans (Inter). Gradient text effects.',
    radiusPolicy: 'Soft rounded 12-20px.',
    shadowPolicy: 'Prismatic rainbow shadows.',
    borderLanguage: 'Holographic gradient borders.',
    patterns: 'Holographic foil patterns, light diffractions.',
    motion: 'Color shifting animations 300-600ms.',
    dos: [
      'Use rainbow iridescent gradients',
      'Add holographic shimmer effects',
      'Create prismatic light diffractions',
      'Implement color-shifting hover states',
      'Use foil-like textures',
      'Add animated gradient backgrounds'
    ],
    donts: [
      'Don\'t use solid flat colors',
      'Don\'t forget the shimmer effect',
      'Don\'t use dark backgrounds',
      'Don\'t make it too subtle'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S34-Pro"
    style_name: "Holographic Pro"
    industry: "Fashion/Beauty"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FAFAFA"
      secondary: "#F5F5F5"
      gradient: "linear-gradient(135deg, #FF6B9D 0%, #C850C0 25%, #6A82FB 50%, #26D0CE 75%, #FFE600 100%)"
    border:
      holographic: "linear-gradient(135deg, #FF6B9D, #C850C0, #6A82FB, #26D0CE, #FFE600)"
      subtle: "#E5E5E5"
    text:
      primary: "#1A1A1A"
      secondary: "#5A5A5A"
      muted: "#9A9A9A"
      gradient: "linear-gradient(135deg, #FF6B9D, #6A82FB)"
    brand:
      pink: "#FF6B9D"
      purple: "#C850C0"
      blue: "#6A82FB"
      cyan: "#26D0CE"
      yellow: "#FFE600"
    status:
      success: "#26D0CE"
      warning: "#FFE600"
      danger: "#FF6B9D"
  typography:
    fontFamily:
      sans: "Inter, SF Pro Display, system-ui, sans-serif"
      display: "Poppins, Montserrat, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 12
    md: 16
    lg: 24
    pill: 9999
  shadow:
    holographic: "0 8px 32px rgba(198, 80, 192, 0.3)"
    prismatic: "0 4px 20px rgba(106, 130, 251, 0.25), 0 0 40px rgba(255, 107, 157, 0.15)"
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
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Gradient Navigation"
    - "Holographic Hero"
    - "Prismatic Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing Cards"
    - "FAQ"
    - "Rainbow CTA"
    - "Shimmer Footer"
\`\`\``,
  },

  'S35-Pro': {
    paletteStrategy: 'Blueprint blue #0D47A1 background. White grid lines #FFFFFF. Technical precision.',
    typography: 'Technical drafting fonts (Roboto Mono). All caps labels.',
    radiusPolicy: 'Zero. Technical precision.',
    shadowPolicy: 'None or subtle glow.',
    borderLanguage: 'Grid lines, dimension marks, technical annotations.',
    patterns: 'Blueprint grid, technical drawings.',
    motion: 'Line drawing animations 300-600ms.',
    dos: [
      'Use authentic blueprint blue',
      'Add technical grid patterns',
      'Include dimension annotations',
      'Use technical typography',
      'Create technical drawing aesthetic',
      'Implement line-reveal animations'
    ],
    donts: [
      'Don\'t use colors outside blue/white',
      'Don\'t use organic shapes',
      'Don\'t forget technical annotations',
      'Don\'t make it too modern'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S35-Pro"
    style_name: "Blueprint Pro"
    industry: "Engineering/Architecture"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0D47A1"
      secondary: "#1565C0"
      paper: "#0B3D91"
    border:
      grid: "rgba(255,255,255,0.3)"
      line: "#FFFFFF"
      dimension: "#90CAF9"
    text:
      primary: "#FFFFFF"
      secondary: "#90CAF9"
      muted: "#64B5F6"
      label: "#BBDEFB"
    brand:
      primary: "#FFFFFF"
      secondary: "#90CAF9"
      accent: "#BBDEFB"
    status:
      success: "#81C784"
      warning: "#FFD54F"
      danger: "#EF5350"
  typography:
    fontFamily:
      mono: "Roboto Mono, Courier New, monospace"
      technical: "Share Tech Mono, Consolas, monospace"
      sans: "Roboto, Arial, sans-serif"
    scale:
      h1: { size: 48, line: 56, weight: 500, tracking: 0.1 }
      h2: { size: 32, line: 40, weight: 500, tracking: 0.08 }
      h3: { size: 20, line: 28, weight: 500, tracking: 0.05 }
      body: { size: 14, line: 22, weight: 400, tracking: 0.02 }
      label: { size: 11, line: 16, weight: 400, tracking: 0.15 }
  radius:
    none: 0
    sm: 0
    md: 2
  shadow:
    none: "none"
    glow: "0 0 10px rgba(255,255,255,0.3)"
  spacing:
    gridMax: 1200
    grid: 24
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
      draw: 800
    easing: "linear"
  sections:
    - "Technical Header"
    - "Blueprint Hero"
    - "Specification Grid"
    - "Technical Features"
    - "Schematic Diagram"
    - "Dimensions Table"
    - "FAQ"
    - "CTA"
    - "Footer Grid"
\`\`\``,
  },

  'S36-Pro': {
    paletteStrategy: 'Chalkboard dark green #2D4A3E or black #1A1A1A. Chalk white #F5F5DC, chalk colors.',
    typography: 'Handwritten chalk fonts (Indie Flower, Architects Daughter). Sketchy feel.',
    radiusPolicy: 'Hand-drawn irregular edges.',
    shadowPolicy: 'Chalk dust effects, subtle glow.',
    borderLanguage: 'Chalk lines, hand-drawn borders.',
    patterns: 'Eraser marks, chalk dust, board texture.',
    motion: 'Hand-drawn sketchy animations 200-400ms.',
    dos: [
      'Use authentic chalkboard colors',
      'Add chalk dust texture',
      'Implement hand-drawn typography',
      'Create eraser mark effects',
      'Use chalk line borders',
      'Add educational feel'
    ],
    donts: [
      'Don\'t use clean digital effects',
      'Don\'t use modern typography',
      'Don\'t forget the hand-drawn feel',
      'Don\'t make it too perfect'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S36-Pro"
    style_name: "Chalkboard Pro"
    industry: "Education"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#2D4A3E"
      secondary: "#1E3328"
      dark: "#1A1A1A"
    border:
      chalk: "#F5F5DC"
      subtle: "rgba(245, 245, 220, 0.3)"
    text:
      primary: "#F5F5DC"
      secondary: "#C5C5A0"
      muted: "#959575"
      chalk_white: "#FFFFFF"
      chalk_yellow: "#F0E68C"
      chalk_pink: "#FFB6C1"
      chalk_blue: "#87CEEB"
    brand:
      primary: "#F5F5DC"
      accent: "#F0E68C"
    status:
      success: "#90EE90"
      warning: "#F0E68C"
      danger: "#FF6B6B"
  typography:
    fontFamily:
      chalk: "Indie Flower, Architects Daughter, cursive"
      handwritten: "Patrick Hand, Caveat, cursive"
      mono: "Courier New, monospace"
    scale:
      h1: { size: 56, line: 68, weight: 400, tracking: 0.02 }
      h2: { size: 40, line: 52, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 400, tracking: 0 }
      body: { size: 18, line: 30, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    irregular: "5px 10px 8px 12px"
    hand_drawn: "3px 8px 5px 10px"
  shadow:
    chalk_dust: "0 0 10px rgba(245, 245, 220, 0.2)"
    glow: "0 0 20px rgba(245, 245, 220, 0.15)"
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
    - "Chalk Navigation"
    - "Blackboard Hero"
    - "Features List"
    - "Lesson Plan"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Chalk Footer"
\`\`\``,
  },

  'S37-Pro': {
    paletteStrategy: 'Newsprint colors. Off-white #F5F5E9, black ink #1A1A1A, sepia accents #8B7355.',
    typography: 'Classic newspaper fonts (Times New Roman, Georgia). Serif headlines, column layouts.',
    radiusPolicy: 'Zero. Sharp column edges.',
    shadowPolicy: 'None. Pure print aesthetic.',
    borderLanguage: 'Column rules, thin dividers.',
    patterns: 'Newsprint texture, halftone dots.',
    motion: 'Minimal. Page-like transitions.',
    dos: [
      'Use classic newspaper column layouts',
      'Implement drop caps for articles',
      'Add newspaper masthead styling',
      'Use serif typography throughout',
      'Create byline and dateline elements',
      'Add classified ad sections'
    ],
    donts: [
      'Don\'t use colors except for accents',
      'Don\'t use modern layouts',
      'Don\'t forget the editorial feel',
      'Don\'t use animations'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S37-Pro"
    style_name: "Newspaper Pro"
    industry: "Publishing/Media"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5F5E9"
      secondary: "#EBE8DC"
      paper: "#FFFEF9"
    border:
      rule: "#1A1A1A"
      subtle: "#C0B8A8"
    text:
      primary: "#1A1A1A"
      secondary: "#3A3A3A"
      muted: "#6A6A5A"
      headline: "#000000"
    brand:
      primary: "#1A1A1A"
      accent: "#8B7355"
    status:
      success: "#2E5A1A"
      warning: "#8B7355"
      danger: "#8B0000"
  typography:
    fontFamily:
      headline: "Playfair Display, Times New Roman, Georgia, serif"
      body: "Source Serif Pro, Georgia, Times New Roman, serif"
      caption: "Source Sans Pro, Arial, sans-serif"
    scale:
      h1: { size: 72, line: 76, weight: 700, tracking: -0.02 }
      h2: { size: 36, line: 42, weight: 700, tracking: -0.01 }
      h3: { size: 24, line: 30, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      caption: { size: 12, line: 18, weight: 400, tracking: 0.02 }
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    none: "none"
  spacing:
    column: 24
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 16
    sectionY:
      desktop: 64
      tablet: 48
      mobile: 32
  motion:
    duration:
      fast: 0
      normal: 100
    easing: "step-end"
  sections:
    - "Masthead Navigation"
    - "Front Page Hero"
    - "Feature Articles"
    - "Column Layout"
    - "Opinion Section"
    - "Classified Ads"
    - "Subscription CTA"
    - "Footer Credits"
\`\`\``,
  },

  'S38-Pro': {
    paletteStrategy: 'Fashion magazine. High contrast black #000000, white #FFFFFF. Pop color accents.',
    typography: 'Bold editorial display (Vogue-style). Mixed weights for drama.',
    radiusPolicy: 'Varied for visual interest. 0-16px.',
    shadowPolicy: 'Dramatic shadows for depth.',
    borderLanguage: 'Bold graphic frames.',
    patterns: 'None. Photography focus.',
    motion: 'Elegant reveal animations 300-500ms.',
    dos: [
      'Use bold typography hierarchy',
      'Create high-end editorial layouts',
      'Implement dramatic full-bleed images',
      'Use pull quotes and callouts',
      'Add fashion-forward aesthetic',
      'Create magazine spread layouts'
    ],
    donts: [
      'Don\'t clutter layouts',
      'Don\'t use small typography',
      'Don\'t forget white space',
      'Don\'t be too corporate'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S38-Pro"
    style_name: "Magazine Pro"
    industry: "Fashion/Lifestyle"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
      dark: "#000000"
    border:
      subtle: "#E0E0E0"
      strong: "#000000"
    text:
      primary: "#000000"
      secondary: "#3A3A3A"
      muted: "#7A7A7A"
      inverse: "#FFFFFF"
    brand:
      primary: "#000000"
      accent: "#FF1744"
      gold: "#B8860B"
    status:
      success: "#00C853"
      warning: "#FFD600"
      danger: "#FF1744"
  typography:
    fontFamily:
      display: "Playfair Display, Didot, Georgia, serif"
      headline: "Bodoni Moda, Didot, serif"
      body: "Inter, Helvetica Neue, sans-serif"
    scale:
      h1: { size: 96, line: 100, weight: 400, tracking: -0.03 }
      h2: { size: 56, line: 60, weight: 400, tracking: -0.02 }
      h3: { size: 32, line: 40, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      caption: { size: 12, line: 18, weight: 500, tracking: 0.1 }
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  shadow:
    dramatic: "0 20px 60px rgba(0,0,0,0.2)"
    subtle: "0 4px 20px rgba(0,0,0,0.1)"
  spacing:
    gridMax: 1400
    gutter:
      desktop: 48
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 128
      tablet: 96
      mobile: 72
  motion:
    duration:
      fast: 200
      normal: 400
      reveal: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Editorial Navigation"
    - "Cover Hero"
    - "Feature Spread"
    - "Look Book"
    - "Pull Quotes"
    - "Gallery Grid"
    - "Subscription CTA"
    - "Magazine Footer"
\`\`\``,
  },

  'S39-Pro': {
    paletteStrategy: 'Comic book primaries. Bold red #FF0000, blue #0000FF, yellow #FFFF00. Black outlines.',
    typography: 'Comic fonts (Bangers, Comic Neue). Bold action text.',
    radiusPolicy: 'Panel shapes. Varied for visual interest.',
    shadowPolicy: 'Hard offset shadows 3-4px.',
    borderLanguage: 'Thick black outlines 3-4px.',
    patterns: 'Halftone dots, action lines, speed streaks.',
    motion: 'POW! BANG! effect animations.',
    dos: [
      'Use bold halftone dot patterns',
      'Create dynamic comic panel layouts',
      'Add action word effects (POW! BAM!)',
      'Use thick black outlines',
      'Implement speech bubbles',
      'Create dynamic action poses'
    ],
    donts: [
      'Don\'t be subtle',
      'Don\'t use thin lines',
      'Don\'t forget the halftone patterns',
      'Don\'t make it too realistic'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S39-Pro"
    style_name: "Comic Book Pro"
    industry: "Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFEF0"
      secondary: "#FFF8DC"
      panel: "#FFFFFF"
    border:
      outline: "#000000"
      panel: "#2A2A2A"
    text:
      primary: "#000000"
      secondary: "#2A2A2A"
      red: "#FF0000"
      blue: "#0000FF"
      yellow: "#FFFF00"
    brand:
      red: "#FF0000"
      blue: "#0000FF"
      yellow: "#FFFF00"
      green: "#00FF00"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      comic: "Bangers, Comic Neue, cursive"
      action: "Anton, Impact, sans-serif"
      body: "Comic Neue, Comic Sans MS, cursive"
    scale:
      h1: { size: 72, line: 76, weight: 400, tracking: 0.05 }
      h2: { size: 48, line: 52, weight: 400, tracking: 0.03 }
      h3: { size: 32, line: 38, weight: 400, tracking: 0.02 }
      body: { size: 18, line: 28, weight: 400, tracking: 0 }
      action: { size: 64, line: 68, weight: 700, tracking: 0.1 }
  radius:
    panel: 8
    bubble: 20
  shadow:
    hard: "4px 4px 0 #000000"
    comic: "3px 3px 0 #000000"
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
      pow: 300
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  sections:
    - "Comic Header"
    - "Action Hero"
    - "Panel Grid"
    - "Features Pow"
    - "Speech Bubbles"
    - "Pricing"
    - "FAQ"
    - "Action CTA"
    - "Comic Footer"
\`\`\``,
  },

  'S40-Pro': {
    paletteStrategy: 'Vintage postcard. Sepia #D4A574, aged cream #F5E6D3, faded colors.',
    typography: 'Vintage script (Great Vibes, Pacifico). Retro handwriting.',
    radiusPolicy: 'Rounded vintage 8-16px. Worn edges.',
    shadowPolicy: 'Aged paper shadows.',
    borderLanguage: 'Stamp edges, vintage frames, postmarks.',
    patterns: 'Postmarks, airmail stripes, worn edges.',
    motion: 'Page turn effects 300-500ms.',
    dos: [
      'Use vintage sepia tones',
      'Add postage stamp elements',
      'Implement postmark overlays',
      'Use vintage script typography',
      'Create worn paper effects',
      'Add travel/destination aesthetic'
    ],
    donts: [
      'Don\'t use modern effects',
      'Don\'t use bright saturated colors',
      'Don\'t forget the aged feel',
      'Don\'t make it too clean'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S40-Pro"
    style_name: "Postcard Pro"
    industry: "Travel/Hospitality"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5E6D3"
      secondary: "#EBD9C4"
      aged: "#D4C4A8"
    border:
      stamp: "#8B4513"
      subtle: "#C4A574"
      worn: "#A08050"
    text:
      primary: "#3A2A1A"
      secondary: "#5A4A3A"
      muted: "#8A7A6A"
      stamp: "#8B0000"
    brand:
      primary: "#D4A574"
      secondary: "#8B4513"
      accent: "#2E5A88"
    status:
      success: "#4A7A4A"
      warning: "#C4A574"
      danger: "#8B4513"
  typography:
    fontFamily:
      script: "Great Vibes, Pacifico, cursive"
      vintage: "Special Elite, Courier New, monospace"
      body: "Lora, Georgia, serif"
    scale:
      h1: { size: 56, line: 68, weight: 400, tracking: 0.02 }
      h2: { size: 40, line: 52, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      stamp: { size: 14, line: 20, weight: 700, tracking: 0.1 }
  radius:
    vintage: 8
    stamp: 4
    worn: "6px 10px 8px 12px"
  shadow:
    aged: "2px 2px 8px rgba(58, 42, 26, 0.2)"
    paper: "0 4px 16px rgba(58, 42, 26, 0.15)"
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
      flip: 600
    easing: "ease-out"
  sections:
    - "Vintage Navigation"
    - "Postcard Hero"
    - "Destination Cards"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA Stamp"
    - "Vintage Footer"
\`\`\``,
  },

  'S41-Pro': {
    paletteStrategy: 'Polaroid instant photo. White frame #FFFFFF, cream paper #FFFEF9, shadow depth.',
    typography: 'Handwriting fonts (Caveat, Shadows Into Light). Photo captions.',
    radiusPolicy: 'Photo frame shapes 4-8px.',
    shadowPolicy: 'Stacked photo shadows, depth layers.',
    borderLanguage: 'White photo borders, tape strips.',
    patterns: 'Photo stacks, pushpins, tape.',
    motion: 'Photo drop animations 200-400ms.',
    dos: [
      'Use instant photo frame layouts',
      'Add handwritten caption style',
      'Implement photo stack effects',
      'Use pushpin and tape elements',
      'Create memory board aesthetic',
      'Add slight photo rotations'
    ],
    donts: [
      'Don\'t use digital photo frames',
      'Don\'t forget the physical feel',
      'Don\'t use perfect alignment',
      'Don\'t make it too polished'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S41-Pro"
    style_name: "Polaroid Pro"
    industry: "Photography/Memory"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5F0E8"
      secondary: "#EBE6DE"
      board: "#C4A574"
    border:
      frame: "#FFFFFF"
      shadow: "rgba(0,0,0,0.15)"
    text:
      primary: "#2A2A2A"
      secondary: "#5A5A5A"
      muted: "#8A8A8A"
      caption: "#3A3A3A"
    brand:
      primary: "#2A2A2A"
      accent: "#E85A4F"
    status:
      success: "#4A9A4A"
      warning: "#D4A454"
      danger: "#E85A4F"
  typography:
    fontFamily:
      handwriting: "Caveat, Shadows Into Light, cursive"
      caption: "Permanent Marker, cursive"
      body: "Open Sans, sans-serif"
    scale:
      h1: { size: 48, line: 60, weight: 400, tracking: 0 }
      h2: { size: 36, line: 48, weight: 400, tracking: 0 }
      h3: { size: 24, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      caption: { size: 20, line: 28, weight: 400, tracking: 0 }
  radius:
    photo: 4
    frame: 2
  shadow:
    photo: "0 4px 12px rgba(0,0,0,0.15)"
    stack: "2px 2px 8px rgba(0,0,0,0.1), 4px 4px 12px rgba(0,0,0,0.08)"
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
      drop: 500
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  sections:
    - "Simple Navigation"
    - "Photo Hero"
    - "Memory Board"
    - "Gallery Stack"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Photo Footer"
\`\`\``,
  },

  'S42-Pro': {
    paletteStrategy: 'Event ticket. Cream paper #FDF6E3, perforated edges, barcode aesthetics.',
    typography: 'Ticket typography (Oswald, Roboto Condensed). Seat numbers, serial codes.',
    radiusPolicy: 'Perforated ticket edges.',
    shadowPolicy: 'Paper ticket shadows.',
    borderLanguage: 'Perforated tear lines, dashed borders.',
    patterns: 'Barcodes, QR codes, serial numbers.',
    motion: 'Ticket reveal animations 200-400ms.',
    dos: [
      'Use ticket stub aesthetics',
      'Add perforated edge effects',
      'Implement barcode/QR elements',
      'Use ticket numbering systems',
      'Create admission/event feel',
      'Add tear-off sections'
    ],
    donts: [
      'Don\'t use standard card shapes',
      'Don\'t forget perforation details',
      'Don\'t use rounded corners',
      'Don\'t make it too digital'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S42-Pro"
    style_name: "Ticket Stub Pro"
    industry: "Events/Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FDF6E3"
      secondary: "#F5EED6"
      ticket: "#FFFEF9"
    border:
      perforation: "#C4B896"
      strong: "#2A2A2A"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#7A7A7A"
      serial: "#666666"
    brand:
      primary: "#E85A4F"
      secondary: "#2A2A2A"
      gold: "#C4A454"
    status:
      success: "#4A9A4A"
      warning: "#C4A454"
      danger: "#E85A4F"
  typography:
    fontFamily:
      display: "Oswald, Roboto Condensed, sans-serif"
      mono: "Roboto Mono, Courier New, monospace"
      body: "Source Sans Pro, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: 0.05 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0.03 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      serial: { size: 12, line: 16, weight: 400, tracking: 0.1 }
  radius:
    ticket: 4
    perforation: "0"
  shadow:
    ticket: "0 2px 8px rgba(0,0,0,0.1)"
    stub: "2px 2px 6px rgba(0,0,0,0.08)"
  spacing:
    gridMax: 1100
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
      fast: 150
      normal: 300
      tear: 400
    easing: "ease-out"
  sections:
    - "Marquee Navigation"
    - "Event Hero"
    - "Ticket Features"
    - "Lineup"
    - "Venue Info"
    - "Pricing Tiers"
    - "FAQ"
    - "Get Tickets CTA"
    - "Event Footer"
\`\`\``,
  },

  'S43-Pro': {
    paletteStrategy: 'Low poly geometric. Gradient triangles, faceted surfaces. Deep forest to sky gradients.',
    typography: 'Modern geometric sans (Montserrat, Poppins). Clean and angular.',
    radiusPolicy: 'Angular faceted shapes. No rounded corners.',
    shadowPolicy: 'Facet shadows, geometric depth.',
    borderLanguage: 'Polygon edges, triangle meshes.',
    patterns: 'Triangle mesh patterns, low poly landscapes.',
    motion: '3D rotation animations 300-600ms.',
    dos: [
      'Use triangle/polygon geometry',
      'Create faceted surface effects',
      'Implement gradient polygon meshes',
      'Add geometric depth with shadows',
      'Use crystalline aesthetic',
      'Create low-poly illustrations'
    ],
    donts: [
      'Don\'t use smooth curves',
      'Don\'t use rounded elements',
      'Don\'t forget the geometric precision',
      'Don\'t use organic shapes'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S43-Pro"
    style_name: "Low Poly Pro"
    industry: "Gaming/3D"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A2634"
      secondary: "#243444"
      gradient: "linear-gradient(135deg, #1A2634 0%, #2E4A5E 50%, #5B8BA0 100%)"
    border:
      subtle: "#3A4A54"
      strong: "#5B8BA0"
    text:
      primary: "#FFFFFF"
      secondary: "#B0C4CC"
      muted: "#7A9AA8"
    brand:
      primary: "#5B8BA0"
      secondary: "#2E4A5E"
      accent: "#F4A460"
    status:
      success: "#4CA64C"
      warning: "#F4A460"
      danger: "#E85A5A"
  typography:
    fontFamily:
      display: "Montserrat, Poppins, sans-serif"
      sans: "Open Sans, Roboto, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: -0.02 }
      h2: { size: 44, line: 52, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    none: 0
    polygon: 0
  shadow:
    facet: "4px 4px 0 rgba(0,0,0,0.2)"
    depth: "0 8px 24px rgba(0,0,0,0.3)"
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
      rotate: 800
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Geometric Navigation"
    - "Low Poly Hero"
    - "Feature Triangles"
    - "Process Steps"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Polygon Footer"
\`\`\``,
  },

  'S44-Pro': {
    paletteStrategy: 'Isometric 2.5D. Clean bright colors. Sky blue #87CEEB, coral #FF6B6B, mint #98D8AA.',
    typography: 'Clean geometric sans (Inter, Poppins). Precise, modern.',
    radiusPolicy: 'Isometric cube shapes. Consistent angles.',
    shadowPolicy: 'Isometric shadows at 30° angles.',
    borderLanguage: 'Isometric edges, cube outlines.',
    patterns: 'Isometric grid, cube patterns.',
    motion: 'Isometric building animations 300-500ms.',
    dos: [
      'Use consistent isometric perspective',
      'Create 2.5D depth illusions',
      'Implement cube-based layouts',
      'Use bright, clean colors',
      'Add isometric illustrations',
      'Create city/building themes'
    ],
    donts: [
      'Don\'t use flat 2D perspectives',
      'Don\'t break the isometric grid',
      'Don\'t mix perspective angles',
      'Don\'t use organic shapes'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S44-Pro"
    style_name: "Isometric Pro"
    industry: "Tech/Architecture"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F8FBFF"
      secondary: "#EDF4FA"
      elevated: "#FFFFFF"
    border:
      subtle: "#D0E0F0"
      strong: "#A0B8D0"
    text:
      primary: "#1A2A3A"
      secondary: "#4A5A6A"
      muted: "#7A8A9A"
    brand:
      primary: "#4A90D9"
      secondary: "#FF6B6B"
      accent: "#98D8AA"
      coral: "#FF6B6B"
      mint: "#98D8AA"
    status:
      success: "#98D8AA"
      warning: "#FFD93D"
      danger: "#FF6B6B"
  typography:
    fontFamily:
      sans: "Inter, Poppins, system-ui, sans-serif"
      display: "Montserrat, Poppins, sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    none: 0
    sm: 4
    md: 8
  shadow:
    isometric: "8px 8px 0 rgba(0,0,0,0.1)"
    depth: "4px 4px 0 rgba(0,0,0,0.08)"
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
      build: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Isometric Navigation"
    - "City Hero"
    - "Feature Cubes"
    - "Process Steps"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Isometric Footer"
\`\`\``,
  },

  'S45-Pro': {
    paletteStrategy: 'Voxel/pixel cube aesthetic. Minecraft-style. Grass green #7EC850, sky blue #87CEEB, dirt brown #8B5A2B.',
    typography: 'Pixel fonts (Press Start 2P, VT323). Blocky, retro gaming.',
    radiusPolicy: 'Zero. Pure cube/block shapes.',
    shadowPolicy: 'Block shadows, voxel depth.',
    borderLanguage: 'Pixel/voxel edges.',
    patterns: 'Block grids, voxel worlds.',
    motion: 'Block building animations 200-400ms.',
    dos: [
      'Use voxel/block aesthetics',
      'Create blocky 3D worlds',
      'Use pixel typography',
      'Implement building animations',
      'Add Minecraft-style textures',
      'Create crafting/gaming theme'
    ],
    donts: [
      'Don\'t use smooth surfaces',
      'Don\'t use rounded elements',
      'Don\'t use realistic textures',
      'Don\'t break the blocky aesthetic'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S45-Pro"
    style_name: "Voxel Pro"
    industry: "Gaming"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A1A2E"
      secondary: "#16213E"
      sky: "#87CEEB"
    border:
      subtle: "#3A3A5E"
      strong: "#5A5A7E"
    text:
      primary: "#FFFFFF"
      secondary: "#B0B0C0"
      muted: "#7A7A8A"
    brand:
      grass: "#7EC850"
      dirt: "#8B5A2B"
      stone: "#707070"
      water: "#3498DB"
    status:
      success: "#7EC850"
      warning: "#FFD93D"
      danger: "#E74C3C"
  typography:
    fontFamily:
      pixel: "Press Start 2P, VT323, monospace"
      display: "VT323, Press Start 2P, monospace"
    scale:
      h1: { size: 36, line: 48, weight: 400, tracking: 0.05 }
      h2: { size: 24, line: 36, weight: 400, tracking: 0.03 }
      h3: { size: 18, line: 28, weight: 400, tracking: 0.02 }
      body: { size: 14, line: 24, weight: 400, tracking: 0.02 }
      small: { size: 12, line: 20, weight: 400, tracking: 0.02 }
  radius:
    none: 0
    block: 0
  shadow:
    block: "4px 4px 0 rgba(0,0,0,0.4)"
    voxel: "2px 2px 0 rgba(0,0,0,0.3)"
  spacing:
    gridMax: 1024
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
      build: 400
    easing: "steps(8)"
  sections:
    - "Block Navigation"
    - "Voxel Hero"
    - "Feature Blocks"
    - "Crafting Section"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Block Footer"
\`\`\``,
  },

  'S46-Pro': {
    paletteStrategy: 'Memphis abstract. Bold pink #FF6B9D, electric blue #4ECDC4, yellow #FFE66D. Black accents.',
    typography: 'Bold display fonts (Anton, Bebas Neue). Mixed playful weights.',
    radiusPolicy: 'Mixed geometric shapes. Circles, triangles, squiggles.',
    shadowPolicy: 'Hard offset shadows 4-8px.',
    borderLanguage: 'Thick black outlines 2-4px.',
    patterns: 'Scattered geometric shapes, confetti, zigzags.',
    motion: 'Playful bouncy animations 200-400ms.',
    dos: [
      'Use bold geometric shapes',
      'Clash colors intentionally',
      'Add scattered pattern elements',
      'Use thick black outlines',
      'Create 80s Memphis aesthetic',
      'Implement playful animations'
    ],
    donts: [
      'Don\'t be subtle',
      'Don\'t use minimalism',
      'Don\'t forget the scattered elements',
      'Don\'t use muted colors'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S46-Pro"
    style_name: "Abstract Memphis Pro"
    industry: "Creative/Art"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFEF0"
      secondary: "#FFF8E0"
      elevated: "#FFFFFF"
    border:
      outline: "#000000"
      strong: "#2A2A2A"
    text:
      primary: "#000000"
      secondary: "#2A2A2A"
      muted: "#5A5A5A"
    brand:
      pink: "#FF6B9D"
      blue: "#4ECDC4"
      yellow: "#FFE66D"
      purple: "#A06CD5"
    status:
      success: "#4ECDC4"
      warning: "#FFE66D"
      danger: "#FF6B9D"
  typography:
    fontFamily:
      display: "Anton, Bebas Neue, Impact, sans-serif"
      sans: "Nunito, Quicksand, sans-serif"
    scale:
      h1: { size: 80, line: 84, weight: 700, tracking: 0 }
      h2: { size: 56, line: 60, weight: 700, tracking: 0 }
      h3: { size: 36, line: 42, weight: 700, tracking: 0 }
      body: { size: 18, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    none: 0
    circle: 9999
    squiggle: "20px 80px 20px 80px"
  shadow:
    hard: "6px 6px 0 #000000"
    colored: "4px 4px 0 #FF6B9D"
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
      bounce: 500
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  sections:
    - "Memphis Navigation"
    - "Bold Hero"
    - "Geometric Features"
    - "Scattered Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Memphis Footer"
\`\`\``,
  },

  'S47-Pro': {
    paletteStrategy: 'Brutalist 3D concrete. Raw gray #6B7280, concrete #9CA3AF. Bold typography.',
    typography: 'Heavy industrial fonts (Bebas Neue, Archivo Black). Oversized.',
    radiusPolicy: 'Zero. Harsh architectural angles.',
    shadowPolicy: 'Heavy concrete shadows, dramatic depth.',
    borderLanguage: 'Raw concrete edges, exposed structure.',
    patterns: 'Concrete texture, raw surfaces.',
    motion: 'Heavy slow movements 300-600ms.',
    dos: [
      'Use raw concrete textures',
      'Create 3D architectural forms',
      'Implement oversized typography',
      'Add dramatic shadow depth',
      'Use brutalist aesthetics',
      'Create monumental scale'
    ],
    donts: [
      'Don\'t polish surfaces',
      'Don\'t use soft shapes',
      'Don\'t forget the raw feel',
      'Don\'t use decorative elements'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S47-Pro"
    style_name: "Brutalist 3D Pro"
    industry: "Architecture"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#2A2A2A"
      secondary: "#3A3A3A"
      concrete: "#6B7280"
    border:
      subtle: "#4A4A4A"
      strong: "#000000"
    text:
      primary: "#FFFFFF"
      secondary: "#D0D0D0"
      muted: "#9CA3AF"
    brand:
      primary: "#FFFFFF"
      accent: "#EF4444"
    status:
      success: "#22C55E"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      display: "Bebas Neue, Archivo Black, Impact, sans-serif"
      sans: "Roboto Condensed, Arial Narrow, sans-serif"
    scale:
      h1: { size: 120, line: 110, weight: 700, tracking: -0.05 }
      h2: { size: 72, line: 72, weight: 700, tracking: -0.03 }
      h3: { size: 48, line: 52, weight: 700, tracking: -0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    none: 0
  shadow:
    brutal: "20px 20px 0 #000000"
    concrete: "10px 10px 0 rgba(0,0,0,0.5)"
  spacing:
    gridMax: 1400
    gutter:
      desktop: 48
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 160
      tablet: 120
      mobile: 80
  motion:
    duration:
      fast: 200
      normal: 400
      heavy: 800
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Monumental Navigation"
    - "Brutal Hero"
    - "Block Features"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Concrete Footer"
\`\`\``,
  },

  'S48-Pro': {
    paletteStrategy: 'Fluid 3D blobs. Dark background #0A0A0A. Metallic gradient blobs, noise grain.',
    typography: 'Modern clean sans (Inter). Minimal interference with 3D.',
    radiusPolicy: 'Organic blob shapes. Fluid curves.',
    shadowPolicy: 'Reflective glows, metallic shine.',
    borderLanguage: 'Fluid organic edges.',
    patterns: 'Noise grain, ambient particles.',
    motion: 'Smooth morphing 400-1000ms.',
    dos: [
      'Create fluid blob 3D shapes',
      'Use metallic gradient surfaces',
      'Add noise grain texture',
      'Implement smooth morphing',
      'Create ambient floating elements',
      'Use dark immersive backgrounds'
    ],
    donts: [
      'Don\'t use sharp edges',
      'Don\'t forget reflective surfaces',
      'Don\'t use flat colors',
      'Don\'t break the immersive feel'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S48-Pro"
    style_name: "Fluid 3D Pro"
    industry: "Creative/Tech"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0A"
      secondary: "#141414"
      elevated: "#1A1A1A"
    border:
      subtle: "#2A2A2A"
      glow: "rgba(139, 92, 246, 0.3)"
    text:
      primary: "#FFFFFF"
      secondary: "#A0A0A0"
      muted: "#606060"
    brand:
      primary: "#8B5CF6"
      secondary: "#EC4899"
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, system-ui, sans-serif"
      display: "Poppins, Montserrat, sans-serif"
    scale:
      h1: { size: 72, line: 80, weight: 700, tracking: -0.03 }
      h2: { size: 48, line: 56, weight: 600, tracking: -0.02 }
      h3: { size: 32, line: 40, weight: 600, tracking: -0.01 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    blob: "40% 60% 50% 50% / 50% 40% 60% 50%"
    organic: "30% 70% 55% 45% / 60% 40% 55% 45%"
  shadow:
    glow_purple: "0 0 60px rgba(139, 92, 246, 0.4)"
    glow_pink: "0 0 60px rgba(236, 72, 153, 0.4)"
    ambient: "0 20px 60px rgba(0, 0, 0, 0.5)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 128
      tablet: 96
      mobile: 72
  motion:
    duration:
      fast: 300
      normal: 600
      morph: 1200
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  sections:
    - "Minimal Navigation"
    - "3D Hero"
    - "Floating Features"
    - "Demo Section"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Ambient Footer"
\`\`\``,
  },

  'S49-Pro': {
    paletteStrategy: 'Watercolor washes. Soft blush #FDE8E8, sage #D1E7D4, sky #DBE9F4. Paper texture.',
    typography: 'Elegant script and serif (Playfair Display, Cormorant). Artistic.',
    radiusPolicy: 'Organic irregular edges. Paint brush strokes.',
    shadowPolicy: 'Watercolor bleeds, soft edges.',
    borderLanguage: 'Paint-splatter edges, brush strokes.',
    patterns: 'Watercolor washes, paper texture.',
    motion: 'Soft fade animations 300-600ms.',
    dos: [
      'Use watercolor wash effects',
      'Add paper texture overlay',
      'Create paint bleed edges',
      'Use soft pastel palette',
      'Implement elegant typography',
      'Add artistic brush strokes'
    ],
    donts: [
      'Don\'t use hard digital edges',
      'Don\'t use bold solid colors',
      'Don\'t forget the paper texture',
      'Don\'t make it too clean'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S49-Pro"
    style_name: "Watercolor Pro"
    industry: "Art/Wedding"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFEF9"
      secondary: "#FAF7F2"
      paper: "#F5F0E6"
    border:
      subtle: "#E8E0D5"
      wash: "rgba(209, 231, 212, 0.5)"
    text:
      primary: "#3A3A3A"
      secondary: "#5A5A5A"
      muted: "#8A8A8A"
    brand:
      blush: "#FDE8E8"
      sage: "#D1E7D4"
      sky: "#DBE9F4"
      gold: "#D4AF37"
    status:
      success: "#7FB285"
      warning: "#E0C097"
      danger: "#D4A5A5"
  typography:
    fontFamily:
      script: "Great Vibes, Allura, cursive"
      serif: "Playfair Display, Cormorant Garamond, serif"
      sans: "Lato, Open Sans, sans-serif"
    scale:
      h1: { size: 64, line: 76, weight: 400, tracking: 0.02 }
      h2: { size: 44, line: 56, weight: 400, tracking: 0.01 }
      h3: { size: 28, line: 38, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  radius:
    organic: "10% 40% 30% 50% / 40% 10% 50% 30%"
    soft: 16
  shadow:
    watercolor: "0 0 30px rgba(209, 231, 212, 0.4)"
    paper: "0 4px 20px rgba(0, 0, 0, 0.05)"
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
      fast: 200
      normal: 400
      fade: 800
    easing: "ease-out"
  sections:
    - "Elegant Navigation"
    - "Watercolor Hero"
    - "Feature Washes"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Artistic Footer"
\`\`\``,
  },

  'S50-Pro': {
    paletteStrategy: 'Mixed media collage. Torn paper, magazine cutouts, craft elements. Kraft #C4A77D, newsprint.',
    typography: 'Mixed fonts ransom-note style. Cut-out letters, varied sizes.',
    radiusPolicy: 'Torn irregular edges. No clean shapes.',
    shadowPolicy: 'Layered paper shadows, tape patches.',
    borderLanguage: 'Tape strips, staples, pins.',
    patterns: 'Paper layers, torn edges, magazine cutouts.',
    motion: 'Layering reveal animations 200-500ms.',
    dos: [
      'Use mixed media collage elements',
      'Create paper layer compositions',
      'Add tape, pins, staples',
      'Use varied typography styles',
      'Implement torn edge effects',
      'Create scrapbook aesthetic'
    ],
    donts: [
      'Don\'t make it too clean',
      'Don\'t use digital perfection',
      'Don\'t forget the handmade feel',
      'Don\'t use uniform styling'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S50-Pro"
    style_name: "Collage Pro"
    industry: "Art/Creative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5EDE0"
      secondary: "#EBE0D0"
      kraft: "#C4A77D"
      newsprint: "#E8E5DC"
    border:
      tape: "rgba(255, 255, 200, 0.7)"
      subtle: "#D4C9B5"
    text:
      primary: "#1A1A1A"
      secondary: "#3A3A3A"
      muted: "#6A6A6A"
      cutout: "#000000"
    brand:
      primary: "#E85A4F"
      secondary: "#4A90D9"
      kraft: "#C4A77D"
    status:
      success: "#4A9A4A"
      warning: "#D4A454"
      danger: "#E85A4F"
  typography:
    fontFamily:
      cutout: "Anton, Impact, sans-serif"
      handwritten: "Caveat, Patrick Hand, cursive"
      typewriter: "Special Elite, Courier New, monospace"
      magazine: "Playfair Display, Georgia, serif"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: 0 }
      h2: { size: 40, line: 48, weight: 600, tracking: 0 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    torn: "8px 2px 12px 4px"
    paper: "2px 4px 6px 8px"
  shadow:
    paper: "2px 3px 6px rgba(0,0,0,0.15)"
    tape: "1px 1px 2px rgba(0,0,0,0.1)"
    layer: "4px 4px 8px rgba(0,0,0,0.12)"
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
      layer: 500
    easing: "ease-out"
  sections:
    - "Collage Navigation"
    - "Mixed Media Hero"
    - "Layered Features"
    - "Scrapbook Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Collage Footer"
\`\`\``,
  },
};

