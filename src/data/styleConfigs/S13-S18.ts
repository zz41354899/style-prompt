import type { StyleDNAConfig } from './types';

export const S13_S18_Configs: Record<string, StyleDNAConfig> = {
  'S13': {
    paletteStrategy: 'Bold primary colors. White backgrounds. Systematic palette.',
    typography: 'Roboto or similar. Clear hierarchy. Medium weights.',
    radiusPolicy: 'Consistent (4-8px). Systematic.',
    shadowPolicy: 'Elevation system. Multiple levels.',
    borderLanguage: 'Minimal borders. Rely on shadows.',
    patterns: 'None. Clean surfaces.',
    motion: 'Responsive animations. Standard curves.',
    dos: ['Use elevation and shadows', 'Follow material principles', 'Use bold colors with purpose', 'Create clear hierarchy'],
    donts: ['Don\'t use flat design', 'Don\'t ignore elevation', 'Don\'t use too many elevations', 'Don\'t break material guidelines'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S13"
    style_name: "Material-ish"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      surface: "#FFFFFF"
    text:
      primary: "#212121"
      secondary: "#757575"
      muted: "#9E9E9E"
    brand:
      primary: "#6200EE"
      secondary: "#03DAC6"
      accent: "#FF5722"
    border:
      strong: "#E0E0E0"
      subtle: "#F5F5F5"
    state:
      success: "#03DAC6"
      warning: "#FF5722"
      error: "#6200EE"
    focus:
      ring: "#6200EE"
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
    elevation1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    elevation2: "0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)"
    elevation3: "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)"
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
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Roboto"
        fallback:
          - "Inter"
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S14': {
    paletteStrategy: 'Translucent colors. Gradient backgrounds. Frosted effects.',
    typography: 'Modern sans-serif. Clean and readable.',
    radiusPolicy: 'Large radius (16-24px). Soft, pill shapes.',
    shadowPolicy: 'Soft, diffused shadows. Layered depth.',
    borderLanguage: 'Subtle, light borders. Frosted edges.',
    patterns: 'Gradient blurs. Layered transparencies.',
    motion: 'Smooth animations. Parallax effects.',
    dos: ['Use frosted glass effects', 'Add subtle transparency', 'Create depth with layers', 'Use soft shadows'],
    donts: ['Don\'t use opaque backgrounds', 'Don\'t forget the blur effect', 'Don\'t use harsh edges', 'Don\'t overuse the effect'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S14"
    style_name: "Glassmorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "rgba(255,255,255,0.7)"
      secondary: "rgba(255,255,255,0.5)"
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    text:
      primary: "#1A1A2E"
      secondary: "#4A4A6A"
      muted: "#8A8AA0"
    brand:
      primary: "#667eea"
      accent: "#764ba2"
    border:
      strong: "rgba(255,255,255,0.3)"
      subtle: "rgba(255,255,255,0.1)"
    state:
      success: "#667eea"
      warning: "#764ba2"
      error: "#1A1A2E"
    focus:
      ring: "#667eea"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 28
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glass: "0 8px 32px rgba(0,0,0,0.1)"
    soft: "0 4px 16px rgba(0,0,0,0.08)"
  blur:
    glass: "blur(10px)"
    strong: "blur(20px)"
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
    easing: ease-out
  typography:
    font:
      sans:
        primary: "SF Pro Display"
        fallback:
          - "Inter"
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S15': {
    paletteStrategy: 'Monochromatic. Soft, muted backgrounds. Subtle color shifts.',
    typography: 'Clean sans-serif. Subtle shadows on text.',
    radiusPolicy: 'Large radius (12-20px). Soft, pillowy.',
    shadowPolicy: 'Dual shadows (light + dark). Embossed/debossed.',
    borderLanguage: 'None. Rely on shadows for definition.',
    patterns: 'None. Pure form.',
    motion: 'Subtle press effects. Tactile feedback.',
    dos: ['Use soft shadows for depth', 'Create embossed/debossed effects', 'Use monochromatic colors', 'Keep it subtle'],
    donts: ['Don\'t use high contrast', 'Don\'t use flat design', 'Don\'t use too many colors', 'Don\'t forget accessibility'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S15"
    style_name: "Neumorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#E0E5EC"
      secondary: "#D1D9E6"
    text:
      primary: "#2D3748"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#6366F1"
      accent: "#8B5CF6"
    border:
      strong: transparent
      subtle: transparent
    state:
      success: "#6366F1"
      warning: "#8B5CF6"
      error: "#2D3748"
    focus:
      ring: "#6366F1"
  radius:
    none: 0
    sm: 12
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    raised: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff"
    inset: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff"
    pressed: "inset 2px 2px 5px #b8bec7, inset -2px -2px 5px #ffffff"
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
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Quicksand"
        fallback:
          - "Nunito"
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S16': {
    paletteStrategy: 'Green/amber on black. Monochrome terminal colors.',
    typography: 'Monospace only. Fixed-width. Courier, Fira Code.',
    radiusPolicy: 'Zero. Sharp terminal aesthetic.',
    shadowPolicy: 'None or subtle glow.',
    borderLanguage: 'ASCII borders. Box-drawing characters.',
    patterns: 'Scanlines, CRT effects, matrix rain.',
    motion: 'Typing effects. Cursor blinks. Instant.',
    dos: ['Use monospace typography', 'Use green/amber on black', 'Add terminal-like elements', 'Create a tech atmosphere'],
    donts: ['Don\'t use colorful palettes', 'Don\'t use rounded corners', 'Don\'t use images heavily', 'Don\'t break the terminal aesthetic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S16"
    style_name: "Terminal / Hacker"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0D0D0D"
      secondary: "#1A1A1A"
    text:
      primary: "#00FF00"
      secondary: "#00CC00"
      muted: "#008800"
    brand:
      primary: "#00FF00"
      accent: "#FFAA00"
    border:
      strong: "#00FF00"
      subtle: "#004400"
    state:
      success: "#00FF00"
      warning: "#FFAA00"
      error: "#00CC00"
    focus:
      ring: "#00FF00"
  radius:
    none: 0
    sm: 0
    md: 0
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
    glow: "0 0 10px #00FF00"
  layout:
    container:
      content: 1024
      wide: 1200
    grid:
      desktop: 1
      tablet: 1
      mobile: 1
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 0
      normal: 50
    easing: step-end
  font:
    mono: "'Fira Code', 'Courier New', monospace"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
          - "Roboto"
      mono:
        primary: "Fira Code"
        fallback:
          - "Courier New"
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S17': {
    paletteStrategy: 'Primary colors only. Red, blue, yellow. Bold contrasts.',
    typography: 'Geometric sans-serif. Bold. Grid-aligned.',
    radiusPolicy: 'Mixed. Circles and rectangles.',
    shadowPolicy: 'None or hard shadows.',
    borderLanguage: 'Thick black borders. Geometric.',
    patterns: 'Geometric shapes. Circles, squares, triangles.',
    motion: 'Linear transitions. No easing.',
    dos: ['Use bold geometry and rules', 'Keep copy concise', 'Treat layout like a poster', 'Accessibility of text must be considered'],
    donts: ['Don\'t use gradients or glassmorphism', 'Don\'t over-animate', 'Don\'t round everything', 'Don\'t make the button text white'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S17"
    style_name: "Bauhaus Modernism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#FF0000"
      secondary: "#0000FF"
      accent: "#FFFF00"
    border:
      strong: "#000000"
      subtle: "#E0E0E0"
    state:
      success: "#0000FF"
      warning: "#FFFF00"
      error: "#FF0000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 0
    md: 0
    circle: 9999
  border:
    width:
      hairline: 2
      medium: 4
      strong: 6
  shadow:
    none: none
    hard: "4px 4px 0 #000000"
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
    easing: linear
  typography:
    font:
      sans:
        primary: "Helvetica Now"
        fallback:
          - "Bebas Neue"
          - "Arial"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S18': {
    paletteStrategy: 'Limited palette. Pixel art colors. Retro gaming.',
    typography: 'Pixel fonts. Monospace. Blocky.',
    radiusPolicy: 'Zero. Pixel-perfect.',
    shadowPolicy: 'None or pixelated.',
    borderLanguage: 'Pixel borders. 8-bit style.',
    patterns: 'Pixel patterns. Retro game sprites.',
    motion: 'Frame-by-frame. Limited frames.',
    dos: ['Use pixel-perfect grids', 'Add dither patterns', 'Use 8-bit color palettes', 'Create nostalgic interfaces'],
    donts: ['Don\'t use smooth gradients', 'Don\'t use high-resolution imagery', 'Don\'t use modern effects', 'Don\'t forget the pixel aesthetic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S18"
    style_name: "Retro Pixel UI"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#2C2C2C"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
    brand:
      primary: "#00FF00"
      secondary: "#FF00FF"
      accent: "#00FFFF"
    border:
      strong: "#FFFFFF"
      subtle: "#444444"
    state:
      success: "#00FF00"
      warning: "#FFFF00"
      error: "#FF0000"
    focus:
      ring: "#00FF00"
  radius:
    none: 0
    sm: 0
    md: 0
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    none: none
    pixel: "2px 2px 0 #000000"
  layout:
    container:
      content: 960
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
      fast: 50
      normal: 100
    easing: steps(4)
  typography:
    font:
      sans:
        primary: "Press Start 2P"
        fallback:
          - "VT323"
          - "monospace"
      mono:
        primary: "Press Start 2P"
        fallback:
          - "VT323"
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
};
