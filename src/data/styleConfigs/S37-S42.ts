import type { StyleDNAConfig } from './types';

export const S37_S42_Configs: Record<string, StyleDNAConfig> = {
  'S37': {
    paletteStrategy: 'Clean whites, soft blues, calming greens. Total hygiene and trust.',
    typography: 'Highly legible sans-serif. Clear, comforting hierarchy.',
    radiusPolicy: 'Soft, rounded corners (12-16px) for approachable feel.',
    shadowPolicy: 'Very soft, diffuse shadows. Sterile but warm depth.',
    borderLanguage: 'Subtle gray borders. Clean divisions.',
    patterns: 'Plus signs, soft waves, microscopic/cellular motifs.',
    motion: 'Calm, smooth transitions. Reassuring feel.',
    dos: ['Use whitespace to imply cleanliness', 'Use calming colors (blue/green)', 'Ensure perfect accessibility', 'Keep it professional and trustworthy'],
    donts: ['Don\'t use aggressive reds', 'Don\'t use harsh or jagged shapes', 'Don\'t clutter information', 'Don\'t use playful/gimmicky animations'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S37"
    style_name: "Health / Medical"
    industry: "Health"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F3F8FB"
    text:
      primary: "#1A365D"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#3182CE"
      secondary: "#38B2AC"
      accent: "#4299E1"
    border:
      strong: "#E2E8F0"
      subtle: "#EDF2F7"
    state:
      success: "#48BB78"
      warning: "#ECC94B"
      error: "#E53E3E"
    focus:
      ring: "#3182CE"
  radius:
    none: 0
    sm: 8
    md: 12
    lg: 16
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    soft: "0 4px 14px 0 rgba(0,0,0,0.05)"
    diffuse: "0 10px 25px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.03)"
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
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "sans-serif"
    scale:
      h1: { size: 48, line: 60, weight: 600, tracking: -0.01 }
      h2: { size: 36, line: 44, weight: 600, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S38': {
    paletteStrategy: 'Bright, energetic primary and secondary colors.',
    typography: 'Chunky, rounded, or playful display fonts. Large sizes.',
    radiusPolicy: 'Maximum roundness. Pill shapes everywhere.',
    shadowPolicy: 'Colorful shadows, offset dropshadows (jelly-like).',
    borderLanguage: 'Thick, colorful outlines.',
    patterns: 'Dots, squiggles, stars, organic blobs.',
    motion: 'Bouncy, springy, exaggerated.',
    dos: ['Use bright, cheerful colors', 'Use maximum corner radius', 'Add playful spring animations', 'Keep it simple and fun'],
    donts: ['Don\'t be too serious', 'Don\'t use sharp corners', 'Don\'t use complex corporate jargon', 'Don\'t use subtle greys extensively'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S38"
    style_name: "Kids / Playful"
    industry: "Education"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFAF0"
      secondary: "#E6FFFA"
    text:
      primary: "#1A202C"
      secondary: "#2D3748"
      muted: "#718096"
    brand:
      primary: "#ED8936"
      secondary: "#38B2AC"
      accent: "#ED64A6"
    border:
      strong: "#1A202C"
      subtle: "rgba(0,0,0,0.1)"
    state:
      success: "#48BB78"
      warning: "#ECC94B"
      error: "#F56565"
    focus:
      ring: "#ED8936"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 30
    pill: 9999
  border:
    width:
      hairline: 2
      medium: 4
      strong: 6
  shadow:
    solid: "4px 4px 0 #1A202C"
    colorful: "0 8px 16px rgba(237,137,54,0.3)"
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
      fast: 250
      normal: 500
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" # Bouncy
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "Comic Sans MS"
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 800, tracking: 0 }
      h2: { size: 40, line: 48, weight: 800, tracking: 0 }
      h3: { size: 28, line: 36, weight: 800, tracking: 0 }
      body: { size: 18, line: 28, weight: 600, tracking: 0 }
      small: { size: 16, line: 24, weight: 600, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },
  'S39': {
    paletteStrategy: 'Muted, earthy tones. Beige, sage, terracotta. Low contrast.',
    typography: 'Elegant serif headers, lightweight sans-serif body.',
    radiusPolicy: 'Soft, organic rounding or completely rounded (pill/circle).',
    shadowPolicy: 'Very diffused, soft shadows or none at all.',
    borderLanguage: 'Hairline borders in muted colors.',
    patterns: 'Abstract organic shapes, fine lines, grain.',
    motion: 'Slow, graceful, fade-ins.',
    dos: ['Use earthy, muted colors', 'Create balanced, airy layouts', 'Use delicate typography', 'Maintain a calm atmosphere'],
    donts: ['Don\'t use neon or high saturation', 'Don\'t use heavy blocky fonts', 'Don\'t crowd the layout', 'Don\'t use aggressive animation'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S39"
    style_name: "Aesthetic Harmony"
    industry: "Lifestyle"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F7F5F0"
      secondary: "#EBE6DF"
    text:
      primary: "#3A3532"
      secondary: "#6A635E"
      muted: "#9D9892"
    brand:
      primary: "#B49682"
      secondary: "#8B9586"
      accent: "#C5A89E"
    border:
      strong: "#D2CBC1"
      subtle: "#E5DFD6"
    state:
      success: "#8B9586"
      warning: "#D4A373"
      error: "#C56A6A"
    focus:
      ring: "#B49682"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 1
      strong: 2
  shadow:
    soft: "0 10px 30px rgba(58,53,50,0.05)"
    ambient: "0 4px 20px rgba(58,53,50,0.03)"
  layout:
    container:
      content: 1000
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 32
  motion:
    duration:
      fast: 400
      normal: 800
    easing: "ease"
  typography:
    font:
      sans:
        primary: "Outfit"
        fallback:
          - "sans-serif"
      serif:
        primary: "Cormorant Garamond"
        fallback:
          - "serif"
    scale:
      h1: { size: 48, line: 60, weight: 300, tracking: 0.02 }
      h2: { size: 36, line: 48, weight: 300, tracking: 0.01 }
      h3: { size: 24, line: 34, weight: 400, tracking: 0.05 }
      body: { size: 16, line: 28, weight: 300, tracking: 0.02 }
      small: { size: 14, line: 24, weight: 300, tracking: 0.02 }
  spacing:
    base: 8
    section_py:
      mobile: [80, 96]
      desktop: [128, 160]
\`\`\``,
  },
  'S40': {
    paletteStrategy: 'Bright pastels, solid colors. No gradients.',
    typography: 'Bold, rounded sans-serif.',
    radiusPolicy: 'Maximum continuous radius (squircle/pill).',
    shadowPolicy: 'Inner shadows + drop shadows to create 3D puffy effect.',
    borderLanguage: 'None. Rely entirely on shadows for form.',
    patterns: 'None. Solid 3D objects.',
    motion: 'Squishy, elastic, bouncy.',
    dos: ['Use multiple layered shadows', 'Create soft 3D puffy forms', 'Use bright pastel colors', 'Keep it playful and tactile'],
    donts: ['Don\'t use flat design', 'Don\'t use sharp corners', 'Don\'t use dark/gritty colors', 'Don\'t use complex textures'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S40"
    style_name: "Claymorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F3F6FD"
      secondary: "#E8EEF9"
    text:
      primary: "#2B3C5A"
      secondary: "#4A5D80"
      muted: "#8496B5"
    brand:
      primary: "#4E7CFF"
      secondary: "#FF6B8B"
      accent: "#FFD166"
    border:
      strong: transparent
      subtle: transparent
    state:
      success: "#06D6A0"
      warning: "#FFD166"
      error: "#EF476F"
    focus:
      ring: "#4E7CFF"
  radius:
    none: 0
    sm: 16
    md: 24
    lg: 32
    pill: 9999
  border:
    width:
      hairline: 0
      medium: 0
      strong: 0
  shadow:
    clay: "8px 8px 16px rgba(166, 180, 200, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8), inset -4px -4px 8px rgba(166, 180, 200, 0.3), inset 4px 4px 8px rgba(255, 255, 255, 0.5)"
    clay_inset: "inset 8px 8px 16px rgba(166, 180, 200, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.8)"
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
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" # Springy
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "Varela Round"
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 800, tracking: -0.01 }
      h2: { size: 40, line: 48, weight: 800, tracking: 0 }
      h3: { size: 28, line: 36, weight: 700, tracking: 0 }
      body: { size: 16, line: 26, weight: 600, tracking: 0 }
      small: { size: 14, line: 22, weight: 600, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S41': {
    paletteStrategy: 'Dark slate, neon green/amber. Hacker aesthetic.',
    typography: 'Monospace only. Coding fonts.',
    radiusPolicy: 'Zero. Completely sharp.',
    shadowPolicy: 'None or neon text glow.',
    borderLanguage: 'ASCII box drawing, thin dashed lines.',
    patterns: 'Matrix rain, command prompts, cursor blocks.',
    motion: 'Step-by-step, typing effect, blinking cursor.',
    dos: ['Use monospace fonts exclusively', 'Simulate command line interfaces', 'Use neon colors on dark backgrounds', 'Add blinking cursors'],
    donts: ['Don\'t use soft shadows', 'Don\'t use rounded corners', 'Don\'t clutter with images', 'Don\'t use slow easing transitions'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S41"
    style_name: "Terminal / Hacker"
    industry: "DevTools"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0A0A0A"
      secondary: "#121212"
    text:
      primary: "#00FF41"
      secondary: "#008F11"
      muted: "#003B00"
    brand:
      primary: "#00FF41"
      accent: "#FF003C"
    border:
      strong: "#00FF41"
      subtle: "#004208"
    state:
      success: "#00FF41"
      warning: "#FFE600"
      error: "#FF003C"
    focus:
      ring: "#00FF41"
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
    glow: "0 0 8px rgba(0,255,65,0.6)"
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
      normal: 100
    easing: "step-end"
  typography:
    font:
      mono:
        primary: "Fira Code"
        fallback:
          - "Courier New"
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 500, tracking: 0 }
      h2: { size: 36, line: 44, weight: 500, tracking: 0 }
      h3: { size: 24, line: 32, weight: 500, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [40, 64]
      desktop: [80, 112]
\`\`\``,
  },
  'S42': {
    paletteStrategy: 'VS Code / IDE theme inspired. Dark grays with syntax highlighted colors.',
    typography: 'Monospace for code, clean sans for UI.',
    radiusPolicy: 'Small radius (4-6px), mimicking software UI.',
    shadowPolicy: 'Subtle elevation for panels/modals.',
    borderLanguage: '1px solid dark borders defining panes.',
    patterns: 'Line numbers, code blocks, folder structures.',
    motion: 'Instant or very fast (like a native app).',
    dos: ['Mimic modern code editors', 'Use syntax highlighting colors', 'Use monospaced fonts for interactive elements', 'Keep it dark and functional'],
    donts: ['Don\'t use large organic shapes', 'Don\'t use heavy gradients', 'Don\'t deviate from standard UI colors', 'Don\'t use playful animations'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S42"
    style_name: "Code Editor"
    industry: "DevTools"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1E1E1E"
      secondary: "#252526"
      panel: "#333333"
    text:
      primary: "#D4D4D4"
      secondary: "#CCCCCC"
      muted: "#858585"
    brand:
      primary: "#0E639C"
      accent: "#569CD6"
    syntax:
      keyword: "#569CD6"
      string: "#CE9178"
      function: "#DCDCAA"
      comment: "#6A9955"
    border:
      strong: "#454545"
      subtle: "#2D2D2D"
    state:
      success: "#89D185"
      warning: "#CCA700"
      error: "#F14C4C"
    focus:
      ring: "#007FD4"
  radius:
    none: 0
    sm: 4
    md: 6
    lg: 8
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    panel: "0 4px 12px rgba(0,0,0,0.5)"
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
      fast: 0
      normal: 100
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "Cascadia Code"
        fallback:
          - "Consolas"
          - "monospace"
    scale:
      h1: { size: 40, line: 48, weight: 600, tracking: 0 }
      h2: { size: 32, line: 40, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 14, line: 22, weight: 400, tracking: 0 }
      small: { size: 12, line: 18, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [40, 56]
      desktop: [64, 96]
\`\`\``,
  },
};
