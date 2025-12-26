
import { StyleDNAConfig } from './index';

export const S91_S96_Configs: Record<string, StyleDNAConfig> = {
  // S91: E-ink
  S91: {
    paletteStrategy: 'Strict grayscale, high contrast black/white.',
    typography: 'Serif for body (Merriweather), Sans for UI.',
    radiusPolicy: 'Minimal (2px) or none.',
    shadowPolicy: 'None, uses borders.',
    borderLanguage: '1px solid black.',
    patterns: 'Dithering, paper texture.',
    motion: 'Stepped update, slow refresh feel.',
    dos: ['Use high contrast', 'Black on white', 'Serif fonts', 'Minimal UI'],
    donts: ['Don\'t use color', 'Don\'t be blurry', 'Don\'t use gradients'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S91"
    style_name: "E-ink Paper"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5F5"
      secondary: "#FFFFFF"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#000000"
      accent: "#333333"
    border:
      strong: "#000000"
      subtle: "#CCCCCC"
    state:
      success: "#000000"
      warning: "#000000"
      error: "#000000"
    focus:
      ring: "#000000"
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
    none: "none"
    subtle: "1px 1px 0 rgba(0,0,0,0.1)"
  layout:
    container:
      content: 720
      wide: 960
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
    easing: "steps(4)"
  typography:
    font:
      serif:
        primary: "Merriweather"
        fallback:
          - "Georgia"
          - "serif"
      sans:
        primary: "Inter"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 36, line: 48, weight: 700, tracking: 0 }
      h2: { size: 28, line: 38, weight: 600, tracking: 0 }
      h3: { size: 22, line: 30, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [72, 96]
\`\`\``,
  },

  // S92: OLED
  S92: {
    paletteStrategy: 'Pure #000000 background, vibrant neon accents.',
    typography: 'Modern sans-serif (Inter/Roboto).',
    radiusPolicy: 'Rounded (12px).',
    shadowPolicy: 'Colored glow shadows.',
    borderLanguage: 'None or glowing.',
    patterns: 'Dot matrix, gradients.',
    motion: 'Smooth, fluid, 60fps.',
    dos: ['Use pure black', 'Vibrant colors', 'Dark mode', 'Clean'],
    donts: ['Don\'t use grey background', 'Don\'t be dull', 'Don\'t cluster'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S92"
    style_name: "OLED Black"
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
      primary: "#2979FF"
      accent: "#FF4081"
    border:
      strong: "#2979FF"
      subtle: "rgba(41,121,255,0.3)"
    state:
      success: "#00E676"
      warning: "#FFAB00"
      error: "#FF4081"
    focus:
      ring: "#2979FF"
  radius:
    none: 0
    sm: 8
    md: 12
    lg: 20
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow_blue: "0 0 30px rgba(41,121,255,0.4)"
    glow_pink: "0 0 30px rgba(255,64,129,0.4)"
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
        primary: "Inter"
        fallback:
          - "Roboto"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 52, line: 60, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
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

  // S93: Terminal Retro
  S93: {
    paletteStrategy: 'Black background, Amber or Green text.',
    typography: 'Monospace (VT323, Fira Code).',
    radiusPolicy: 'Zero radius.',
    shadowPolicy: 'CRT glow.',
    borderLanguage: 'Block characters, ASCII borders.',
    patterns: 'Scanlines, noise.',
    motion: 'Typing effects, blinking cursor.',
    dos: ['Use monospace', 'Amber color', 'Scanlines', 'Retro vibe'],
    donts: ['Don\'t use sans-serif', 'Don\'t be high res', 'Don\'t use white'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S93"
    style_name: "Terminal Retro"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#111111"
      secondary: "#0A0A0A"
    text:
      primary: "#FFB000"
      secondary: "#CC8800"
      muted: "#886600"
    brand:
      primary: "#FFB000"
      accent: "#00FF00"
    border:
      strong: "#FFB000"
      subtle: "rgba(255,176,0,0.3)"
    state:
      success: "#00FF00"
      warning: "#FFB000"
      error: "#FF0000"
    focus:
      ring: "#FFB000"
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
    crt: "0 0 10px rgba(255,176,0,0.5)"
    glow: "0 0 20px rgba(255,176,0,0.3)"
  layout:
    container:
      content: 800
      wide: 1024
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
    easing: "steps(1)"
  typography:
    font:
      mono:
        primary: "VT323"
        fallback:
          - "Fira Code"
          - "monospace"
      display:
        primary: "Press Start 2P"
        fallback:
          - "monospace"
    scale:
      h1: { size: 36, line: 44, weight: 400, tracking: 0.05 }
      h2: { size: 28, line: 36, weight: 400, tracking: 0.03 }
      h3: { size: 22, line: 28, weight: 400, tracking: 0.02 }
      body: { size: 16, line: 24, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 20, weight: 400, tracking: 0.02 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [72, 96]
\`\`\``,
  },

  // S94: Code Editor
  S94: {
    paletteStrategy: 'Dark blue-grey (Dracula/Nord), pastel syntax colors.',
    typography: 'Fira Code, JetBrains Mono.',
    radiusPolicy: 'Small radius (4px).',
    shadowPolicy: 'Deep ambient shadows.',
    borderLanguage: 'Left border accents.',
    patterns: 'Line numbers, syntax highlighting.',
    motion: 'Fast, efficient.',
    dos: ['Use syntax colors', 'Monospace', 'Dark theme', 'Clean'],
    donts: ['Don\'t be bright', 'Don\'t use serif', 'Don\'t be cluttered'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S94"
    style_name: "Code Editor"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#282A36"
      secondary: "#21222C"
    text:
      primary: "#F8F8F2"
      secondary: "#6272A4"
      muted: "#44475A"
    brand:
      primary: "#BD93F9"
      accent: "#50FA7B"
    syntax:
      purple: "#BD93F9"
      green: "#50FA7B"
      orange: "#FFB86C"
      pink: "#FF79C6"
      cyan: "#8BE9FD"
      yellow: "#F1FA8C"
    border:
      strong: "#44475A"
      subtle: "rgba(68,71,90,0.5)"
    state:
      success: "#50FA7B"
      warning: "#FFB86C"
      error: "#FF5555"
    focus:
      ring: "#BD93F9"
  radius:
    none: 0
    sm: 4
    md: 6
    lg: 8
  border:
    width:
      hairline: 1
      accent: 3
      strong: 4
  shadow:
    deep: "0 8px 32px rgba(0,0,0,0.4)"
    editor: "inset 0 0 40px rgba(0,0,0,0.2)"
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
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "Fira Code"
          - "monospace"
      sans:
        primary: "Inter"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 48, line: 56, weight: 600, tracking: -0.01 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 14, line: 24, weight: 400, tracking: 0 }
      small: { size: 12, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },

  // S95: Data Dashboard
  S95: {
    paletteStrategy: 'Low contrast greys, specific data colors.',
    typography: 'Condensed sans (Roboto Condensed).',
    radiusPolicy: 'Small radius (2px).',
    shadowPolicy: 'None or card outlines.',
    borderLanguage: '1px divider lines.',
    patterns: 'Grids, charts, dense data.',
    motion: 'Instant.',
    dos: ['Dense info', 'Clear hierarchy', 'Data viz', 'Neutral background'],
    donts: ['Don\'t use space waste', 'Don\'t be decorative', 'Don\'t use large text'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S95"
    style_name: "Data Dashboard"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#212121"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#B0B0B0"
      muted: "#707070"
    brand:
      primary: "#2196F3"
      accent: "#4CAF50"
    data:
      blue: "#2196F3"
      green: "#4CAF50"
      orange: "#FF9800"
      red: "#F44336"
      purple: "#9C27B0"
    border:
      strong: "#424242"
      subtle: "#2A2A2A"
    state:
      success: "#4CAF50"
      warning: "#FF9800"
      error: "#F44336"
    focus:
      ring: "#2196F3"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 6
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    card: "0 2px 8px rgba(0,0,0,0.3)"
    none: "none"
  layout:
    container:
      content: 1400
      wide: 1600
    grid:
      desktop: 24
      tablet: 12
      mobile: 4
    gutter:
      mobile: 8
      desktop: 16
  motion:
    duration:
      fast: 50
      normal: 100
    easing: "linear"
  typography:
    font:
      sans:
        primary: "Roboto Condensed"
        fallback:
          - "Roboto"
          - "sans-serif"
      mono:
        primary: "Roboto Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 32, line: 40, weight: 500, tracking: 0 }
      h2: { size: 24, line: 32, weight: 500, tracking: 0 }
      h3: { size: 18, line: 26, weight: 500, tracking: 0 }
      body: { size: 13, line: 20, weight: 400, tracking: 0 }
      small: { size: 11, line: 16, weight: 400, tracking: 0 }
  spacing:
    base: 4
    section_py:
      mobile: [32, 48]
      desktop: [48, 64]
\`\`\``,
  },

  // S96: HUD
  S96: {
    paletteStrategy: 'Transparent, cyan/blue, white.',
    typography: 'Technical sans (Eurostile, Rajdhani).',
    radiusPolicy: 'Angled corners (45deg cuts).',
    shadowPolicy: 'Text shadows/glows.',
    borderLanguage: 'Brackets, aim sights.',
    patterns: 'Crosshairs, ticks, circles.',
    motion: 'Sliding, locking, targeting.',
    dos: ['Use transparency', 'Technical look', 'Cyan/Blue', 'Overlays'],
    donts: ['Don\'t be opaque', 'Don\'t be organic', 'Don\'t rely on background'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S96"
    style_name: "SciFi HUD"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "transparent"
      secondary: "rgba(0,0,0,0.8)"
    text:
      primary: "#00E5FF"
      secondary: "#80DEEA"
      muted: "#4DD0E1"
    brand:
      primary: "#00E5FF"
      accent: "#FFFFFF"
    border:
      strong: "#00E5FF"
      subtle: "rgba(0,229,255,0.3)"
    state:
      success: "#00E676"
      warning: "#FFAB00"
      error: "#FF1744"
    focus:
      ring: "#00E5FF"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
    hud: "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))"
  border:
    width:
      hairline: 1
      bracket: 2
      strong: 3
  shadow:
    glow: "0 0 20px rgba(0,229,255,0.5)"
    text: "0 0 10px rgba(0,229,255,0.8)"
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
        primary: "Rajdhani"
        fallback:
          - "Orbitron"
          - "sans-serif"
      mono:
        primary: "Share Tech Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 52, weight: 600, tracking: 0.05 }
      h2: { size: 36, line: 40, weight: 500, tracking: 0.03 }
      h3: { size: 24, line: 28, weight: 500, tracking: 0.02 }
      body: { size: 14, line: 22, weight: 400, tracking: 0.02 }
      small: { size: 12, line: 18, weight: 400, tracking: 0.02 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },
};
