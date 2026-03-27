import type { StyleDNAConfig } from './types';

export const S43_S48_Configs: Record<string, StyleDNAConfig> = {
  'S43': {
    paletteStrategy: 'Pure black (#000000) background. High contrast white/gray text.',
    typography: 'Clean sans-serif. High legibility in dark mode.',
    radiusPolicy: 'Rounded corners (12-24px) to soften the high contrast.',
    shadowPolicy: 'Subtle glowing shadows or none. Rely on pure black borders.',
    borderLanguage: 'Dark gray (e.g. #1A1A1A) to separate panels.',
    patterns: 'None. Complete darkness.',
    motion: 'Smooth, fluid fades.',
    dos: ['Use pure black #000000 backgrounds', 'Ensure high contrast for text', 'Use subtle dark gray borders', 'Keep UI minimal and focused'],
    donts: ['Don\'t use bright colored backgrounds', 'Don\'t use heavy drop shadows', 'Don\'t use low contrast text', 'Don\'t overcrowd the screen'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S43"
    style_name: "OLED Black"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#111111"
      elevated: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#A1A1AA"
      muted: "#52525B"
    brand:
      primary: "#FFFFFF"
      accent: "#3B82F6"
    border:
      strong: "#27272A"
      subtle: "#18181B"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#FFFFFF"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 1
      strong: 2
  shadow:
    glow: "0 0 20px rgba(255,255,255,0.05)"
    panel: "0 4px 6px rgba(0,0,0,1)"
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
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "system-ui"
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 500, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S44': {
    paletteStrategy: 'Cyan, bright blue, orange warnings on dark/transparent backgrounds.',
    typography: 'Tech/military monospace or wide futuristic sans.',
    radiusPolicy: 'Angled corners (chamfered) instead of rounded.',
    shadowPolicy: 'Glowing edges, drop shadows simulating light projection.',
    borderLanguage: 'Fine lines, crosshairs, corner brackets.',
    patterns: 'Hexagons, grid overlays, radar sweeps, data streams.',
    motion: 'Fast, glitchy, UI unfolding.',
    dos: ['Use HUD elements (crosshairs, brackets)', 'Use tech/monospace fonts', 'Use glowing accents', 'Make it feel like a cockpit'],
    donts: ['Don\'t use large solid color blocks', 'Don\'t use soft pill corners', 'Don\'t make it look cute', 'Don\'t use organic shapes'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S44"
    style_name: "Sci-Fi HUD"
    industry: "Gaming/Tech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "rgba(10, 15, 20, 0.9)"
      secondary: "rgba(15, 25, 35, 0.7)"
    text:
      primary: "#00F0FF"
      secondary: "#70A0B0"
      muted: "#305060"
    brand:
      primary: "#00F0FF"
      accent: "#FF4500"
    border:
      strong: "#00F0FF"
      subtle: "rgba(0, 240, 255, 0.3)"
    state:
      success: "#00FF00"
      warning: "#FF8C00"
      error: "#FF0000"
    focus:
      ring: "#00F0FF"
  radius:
    none: 0
    sm: 0
    md: 0
    chamfer: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 10px rgba(0,240,255,0.5)"
    text_glow: "0 0 5px #00F0FF"
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
      fast: 50
      normal: 150
    easing: "step-end"
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
      h1: { size: 56, line: 64, weight: 600, tracking: 0.1 }
      h2: { size: 40, line: 48, weight: 500, tracking: 0.05 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0.05 }
      body: { size: 16, line: 24, weight: 400, tracking: 0.02 }
      small: { size: 12, line: 16, weight: 400, tracking: 0.1 }
  spacing:
    base: 8
    section_py:
      mobile: [40, 64]
      desktop: [80, 120]
\`\`\``,
  },
  'S45': {
    paletteStrategy: 'Dark grays, electric blue, chrome silver. Nanotech vibe.',
    typography: 'Ultra-modern, sleek sans-serif.',
    radiusPolicy: 'Sharp angles mixed with smooth curves.',
    shadowPolicy: 'Subtle metallic reflections, inner glows.',
    borderLanguage: 'Metallic trims, glowing inset lines.',
    patterns: 'Carbon fiber, circuitry, fine dot matrices.',
    motion: 'Smooth, hydraulic-like easing.',
    dos: ['Use metallic gradients', 'Add subtle glowing lines', 'Combine sharp and smooth shapes', 'Create a premium tech feel'],
    donts: ['Don\'t use retro elements', 'Don\'t make it messy', 'Don\'t use warm/earthy colors', 'Don\'t use flat design'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S45"
    style_name: "Cybernetic"
    industry: "Tech/Hardware"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#111418"
      secondary: "#1A1F26"
    text:
      primary: "#E2E8F0"
      secondary: "#94A3B8"
      muted: "#64748B"
    brand:
      primary: "#38BDF8"
      accent: "#818CF8"
    chrome:
      base: "linear-gradient(135deg, #334155 0%, #0F172A 100%)"
      highlight: "#CBD5E1"
    border:
      strong: "#334155"
      subtle: "#1E293B"
      glow: "#38BDF8"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#38BDF8"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
    mixed: "16px 0 16px 0"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    cyber: "0 0 15px rgba(56,189,248,0.2), inset 0 0 10px rgba(56,189,248,0.1)"
    metallic: "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 6px rgba(0,0,0,0.5)"
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
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
  typography:
    font:
      sans:
        primary: "Michroma"
        fallback:
          - "Exo 2"
          - "sans-serif"
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: 0.05 }
      h2: { size: 36, line: 44, weight: 400, tracking: 0.02 }
      h3: { size: 24, line: 32, weight: 400, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [104, 128]
\`\`\``,
  },
  'S46': {
    paletteStrategy: 'Dark background, large animated colorful gradients (green, purple, blue).',
    typography: 'Elegant, modern sans or display fonts. Large tracking.',
    radiusPolicy: 'Soft, rounded containers.',
    shadowPolicy: 'Colored glows from the background.',
    borderLanguage: 'Translucent borders (glass effect).',
    patterns: 'Swirling color meshes, grainy gradients.',
    motion: 'Slow, continuous background color shifting.',
    dos: ['Use large gradient meshes', 'Keep foreground elements clean', 'Use frosted glass for readability', 'Make colors flow together'],
    donts: ['Don\'t use harsh lines', 'Don\'t use solid color blocks', 'Don\'t use fast jarring animations', 'Don\'t make it messy'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S46"
    style_name: "Aurora Borealis"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050510"
      secondary: "rgba(25,25,35,0.4)"
      mesh: "radial-gradient(at 0% 0%, #4c1d95 0px, transparent 50%), radial-gradient(at 100% 0%, #065f46 0px, transparent 50%), radial-gradient(at 100% 100%, #1e3a8a 0px, transparent 50%)"
    text:
      primary: "#FFFFFF"
      secondary: "#CBD5E1"
      muted: "#94A3B8"
    brand:
      primary: "#34D399"
      accent: "#A78BFA"
    border:
      strong: "rgba(255,255,255,0.2)"
      subtle: "rgba(255,255,255,0.05)"
    state:
      success: "#34D399"
      warning: "#FCD34D"
      error: "#F87171"
    focus:
      ring: "#A78BFA"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 32
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glass: "0 8px 32px 0 rgba(0,0,0,0.37)"
    glow: "0 0 40px rgba(52,211,153,0.3)"
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
      slow: 10000 # For bg animation
    easing: "ease"
  typography:
    font:
      sans:
        primary: "Syne"
        fallback:
          - "Inter"
          - "sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: -0.02 }
      h2: { size: 48, line: 56, weight: 700, tracking: -0.01 }
      h3: { size: 32, line: 40, weight: 600, tracking: 0 }
      body: { size: 18, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [80, 96]
      desktop: [128, 160]
\`\`\``,
  },
  'S47': {
    paletteStrategy: 'Iridescent colors, silver/white, glowing edges. Prism effects.',
    typography: 'Ultra-thin sans-serif or clean geometric.',
    radiusPolicy: 'Smooth, subtle curves.',
    shadowPolicy: 'Rainbow/prismatic shadows.',
    borderLanguage: 'Iridescent borders, 1px thin.',
    patterns: 'Holographic foil textures, light refractions.',
    motion: 'Shimmering, tilted reflections.',
    dos: ['Use iridescent gradients (pink/blue/silver)', 'Use thin, precise lines', 'Create light refraction effects', 'Keep the layout airy'],
    donts: ['Don\'t use matte colors', 'Don\'t use heavy blocky fonts', 'Don\'t clutter with dark elements', 'Don\'t use flat shadows'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S47"
    style_name: "Holographic"
    industry: "Creative/Tech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFAFA"
      secondary: "#F4F4F5"
      holo: "linear-gradient(135deg, rgba(238,174,202,0.3) 0%, rgba(148,187,233,0.3) 100%)"
    text:
      primary: "#18181B"
      secondary: "#52525B"
      muted: "#A1A1AA"
    brand:
      primary: "#E879F9"
      secondary: "#38BDF8"
      accent: "#34D399"
    border:
      strong: "linear-gradient(90deg, #E879F9, #38BDF8)"
      subtle: "rgba(0,0,0,0.05)"
    state:
      success: "#34D399"
      warning: "#FBBF24"
      error: "#F43F5E"
    focus:
      ring: "#E879F9"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    holo: "0 10px 30px rgba(232,121,249,0.15), 0 4px 10px rgba(56,189,248,0.15)"
    soft: "0 4px 12px rgba(0,0,0,0.05)"
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
      normal: 500
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  typography:
    font:
      sans:
        primary: "Jost"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 60, line: 68, weight: 300, tracking: 0.05 }
      h2: { size: 40, line: 48, weight: 300, tracking: 0.02 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0.01 }
      body: { size: 16, line: 26, weight: 300, tracking: 0 }
      small: { size: 14, line: 22, weight: 300, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },
  'S48': {
    paletteStrategy: 'Silver, grey, black. Liquid mercury reflections.',
    typography: 'Fluid, curvy fonts or distorted display types.',
    radiusPolicy: 'Extreme organic roundness. Melting forms.',
    shadowPolicy: 'High contrast specular highlights and deep contact shadows.',
    borderLanguage: 'None. Forms define themselves.',
    patterns: 'Liquid ripples, chrome reflections.',
    motion: 'Viscous, morphing, fluid dynamics.',
    dos: ['Use liquid metallic textures', 'Use high contrast lighting effects', 'Create organic, flowing shapes', 'Keep it monochromatic or chrome'],
    donts: ['Don\'t use sharp corners', 'Don\'t use bright primary colors', 'Don\'t use flat design', 'Don\'t make it stiff'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S48"
    style_name: "Liquid Metal"
    industry: "Creative"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#111111"
      secondary: "#1A1A1A"
    text:
      primary: "#EAEAEA"
      secondary: "#A0A0A0"
      muted: "#666666"
    brand:
      primary: "#D4D4D4"
      accent: "#FFFFFF"
    chrome:
      light: "#FFFFFF"
      base: "#888888"
      dark: "#222222"
      gradient: "linear-gradient(180deg, #FFFFFF 0%, #888888 40%, #222222 50%, #666666 100%)"
    border:
      strong: transparent
      subtle: transparent
    state:
      success: "#55AA55"
      warning: "#AAAA55"
      error: "#AA5555"
    focus:
      ring: "#FFFFFF"
  radius:
    none: 0
    sm: 16
    md: 24
    lg: 40
    fluid: "60% 40% 30% 70% / 60% 30% 70% 40%"
  border:
    width:
      hairline: 0
      medium: 0
      strong: 0
  shadow:
    liquid: "inset 0 10px 20px rgba(255,255,255,0.8), inset 0 -10px 20px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.5)"
    drop: "0 20px 40px rgba(0,0,0,0.6)"
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
      normal: 700
    easing: "cubic-bezier(0.25, 1, 0.5, 1)" # Smooth, heavy flow
  typography:
    font:
      sans:
        primary: "Syncopate"
        fallback:
          - "sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: 0.1 }
      h2: { size: 40, line: 48, weight: 700, tracking: 0.05 }
      h3: { size: 24, line: 32, weight: 700, tracking: 0.02 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.05 }
      small: { size: 12, line: 20, weight: 400, tracking: 0.05 }
  spacing:
    base: 8
    section_py:
      mobile: [80, 100]
      desktop: [144, 180]
\`\`\``,
  },
};
