
import { StyleDNAConfig } from './index';

export const S97_S100_Configs: Record<string, StyleDNAConfig> = {
  // S97: Frosted Glass
  S97: {
    paletteStrategy: 'Pastel gradients background, white semi-transparent surfaces.',
    typography: 'Modern sans-serif (Inter/SF Pro).',
    radiusPolicy: 'Large (24px).',
    shadowPolicy: 'Soft diffuse shadows.',
    borderLanguage: '1px solid white/20.',
    patterns: 'Blur, noise.',
    motion: 'Floating, slow drifts.',
    dos: ['Use backdrop-filter', 'White text shadows', 'Gradients', 'Clean'],
    donts: ['Don\'t be opaque', 'Don\'t use sharp corners', 'Don\'t use heavy borders'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S97"
    style_name: "Frosted Glass"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "linear-gradient(135deg, #E0C3FC, #8EC5FC)"
      secondary: "#FFFFFF"
    text:
      primary: "#1A1A2E"
      secondary: "#3D3D5C"
      muted: "#6A6A8E"
    brand:
      primary: "#8EC5FC"
      accent: "#E0C3FC"
    surface:
      glass: "rgba(255, 255, 255, 0.25)"
      dark_glass: "rgba(0, 0, 0, 0.1)"
    border:
      strong: "rgba(255, 255, 255, 0.4)"
      subtle: "rgba(255, 255, 255, 0.2)"
    state:
      success: "#4ADE80"
      warning: "#FBBF24"
      error: "#F87171"
    focus:
      ring: "rgba(255, 255, 255, 0.6)"
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
    glass: "0 8px 32px rgba(0, 0, 0, 0.1)"
    soft: "0 4px 16px rgba(0, 0, 0, 0.05)"
  backdrop:
    blur: "blur(16px) saturate(180%)"
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
        primary: "Inter"
        fallback:
          - "SF Pro Display"
          - "sans-serif"
      display:
        primary: "Plus Jakarta Sans"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 52, line: 62, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 50, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },

  // S98: Acrylic
  S98: {
    paletteStrategy: 'Dark/Light adaptive, noise texture overlay.',
    typography: 'Segoe UI / System default.',
    radiusPolicy: 'Medium (8px).',
    shadowPolicy: 'Elevation shadows.',
    borderLanguage: 'None or very subtle.',
    patterns: 'Mica, acrylic noise.',
    motion: 'Fast, responsive.',
    dos: ['Use texture', 'Blur', 'System fonts', 'Adaptive'],
    donts: ['Don\'t use solid flat colors', 'Don\'t be flashy', 'Don\'t block background'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S98"
    style_name: "Acrylic Fluid"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#202020"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#D4D4D4"
      muted: "#888888"
    brand:
      primary: "#60CDFF"
      accent: "#0078D4"
    surface:
      acrylic: "rgba(32, 32, 32, 0.8)"
      mica: "rgba(255, 255, 255, 0.05)"
    border:
      strong: "rgba(255, 255, 255, 0.1)"
      subtle: "rgba(255, 255, 255, 0.05)"
    state:
      success: "#6CCB5F"
      warning: "#FCE100"
      error: "#FF99A4"
    focus:
      ring: "#60CDFF"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    elevation_1: "0 2px 4px rgba(0,0,0,0.2)"
    elevation_2: "0 4px 8px rgba(0,0,0,0.26)"
    elevation_3: "0 8px 16px rgba(0,0,0,0.32)"
  backdrop:
    blur: "blur(40px) saturate(125%)"
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
    easing: "cubic-bezier(0.1, 0.9, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Segoe UI Variable"
        fallback:
          - "Segoe UI"
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "Cascadia Code"
        fallback:
          - "Consolas"
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 600, tracking: 0 }
      h2: { size: 36, line: 44, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 14, line: 22, weight: 400, tracking: 0 }
      small: { size: 12, line: 18, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [80, 104]
\`\`\``,
  },

  // S99: Material 3
  S99: {
    paletteStrategy: 'Dynamic color extraction from wallpaper.',
    typography: 'Roboto Flex / Google Sans.',
    radiusPolicy: 'Pill shapes, large rounded corners.',
    shadowPolicy: 'Tonal surface colors, no drop shadows.',
    borderLanguage: 'None.',
    patterns: 'Ripple effects.',
    motion: 'Material easing, spring physics.',
    dos: ['Use tonal surfaces', 'Rounded FABs', 'Dynamic color', 'Modern Material'],
    donts: ['Don\'t use shadows for elevation', 'Don\'t use gradients', 'Don\'t use borders'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S99"
    style_name: "Material You"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFBFE"
      secondary: "#F3EDF7"
    text:
      primary: "#1C1B1F"
      secondary: "#49454F"
      muted: "#79747E"
    brand:
      primary: "#6750A4"
      accent: "#625B71"
    surface:
      variant: "#E7E0EC"
      container: "#EADDFF"
      container_high: "#D0BCFF"
    border:
      strong: "#CAC4D0"
      subtle: "#E7E0EC"
    state:
      success: "#4CAF50"
      warning: "#FF9800"
      error: "#B3261E"
    focus:
      ring: "#6750A4"
  radius:
    none: 0
    sm: 8
    md: 12
    lg: 16
    xl: 28
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    tonal: "none"
    legacy: "0 1px 2px rgba(0,0,0,0.3)"
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
      normal: 300
    easing: "cubic-bezier(0.2, 0, 0, 1)"
  typography:
    font:
      sans:
        primary: "Roboto Flex"
        fallback:
          - "Google Sans"
          - "Roboto"
          - "sans-serif"
      display:
        primary: "Google Sans Display"
        fallback:
          - "Roboto"
          - "sans-serif"
    scale:
      h1: { size: 57, line: 64, weight: 400, tracking: -0.25 }
      h2: { size: 45, line: 52, weight: 400, tracking: 0 }
      h3: { size: 36, line: 44, weight: 400, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0.5 }
      small: { size: 14, line: 20, weight: 400, tracking: 0.25 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 120]
\`\`\``,
  },

  // S100: The Ultimate (Holographic Dark)
  S100: {
    paletteStrategy: 'Black background with holographic pink/purple gradients (#FF0080 to #7928CA). Glowing orb effects.',
    typography: 'Space Grotesk for futuristic, modern feel. Large display sizes.',
    radiusPolicy: 'Large rounded (32px for cards). Pills for buttons.',
    shadowPolicy: 'Colored glows with mix-blend-mode. Neon effect shadows.',
    borderLanguage: 'Subtle white/10 borders on glassmorphic surfaces.',
    patterns: 'Grid background with perspective. Glowing orbs. Holographic gradients.',
    motion: '3D tilt on mouse move. Hover scale. Animated gradient text.',
    dos: ['Use black backgrounds', 'Add holographic gradient text', 'Create 3D tilt effects', 'Use glassmorphism cards', 'Add glowing orb decorations'],
    donts: ['Don\'t use flat colors', 'Don\'t skip the depth effects', 'Don\'t use serif fonts', 'Don\'t make it static'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S100"
    style_name: "The Ultimate"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#0A0A0A"
      grid: "rgba(255, 255, 255, 0.05)"
    text:
      primary: "#FFFFFF"
      secondary: "#9CA3AF"
      muted: "#6B7280"
    brand:
      primary: "#FF0080"
      secondary: "#7928CA"
      gradient: "linear-gradient(to right, #FF0080, #7928CA, #FF0080)"
    surface:
      glass: "rgba(255, 255, 255, 0.05)"
      glass_border: "rgba(255, 255, 255, 0.1)"
      glass_hover: "rgba(255, 255, 255, 0.3)"
    glow:
      pink: "#FF0080"
      purple: "#7928CA"
    border:
      strong: "rgba(255, 255, 255, 0.2)"
      subtle: "rgba(255, 255, 255, 0.1)"
    state:
      success: "#22C55E"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#FF0080"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    xl: 32
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow_pink: "0 0 40px rgba(255, 0, 128, 0.4)"
    glow_purple: "0 20px 80px -20px rgba(121, 40, 202, 0.4)"
    soft: "0 4px 24px rgba(0, 0, 0, 0.3)"
  backdrop:
    blur: "blur(20px)"
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 24
      desktop: 32
  motion:
    duration:
      fast: 100
      normal: 300
      slow: 600
    easing:
      default: "ease-out"
      tilt: "ease"
      bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    animation:
      gradient: "holoGradient 4s linear infinite"
  typography:
    font:
      sans:
        primary: "Space Grotesk"
        fallback:
          - "system-ui"
          - "sans-serif"
    scale:
      display: { size: 96, line: 100, weight: 700, tracking: -0.02 }
      h1: { size: 72, line: 80, weight: 700, tracking: -0.02 }
      h2: { size: 48, line: 56, weight: 700, tracking: -0.01 }
      h3: { size: 32, line: 40, weight: 700, tracking: 0 }
      body_lg: { size: 20, line: 32, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [120, 160]
\`\`\``,
  },
};
