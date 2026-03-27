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
    text:
      primary: "#FFFFFF"
      secondary: "#A1A1AA"
    brand:
      primary: "#FFFFFF"
      accent: "#3B82F6"
  radius: { md: 16, lg: 24 }
  typography:
    font: { sans: { primary: "Inter", fallback: ["sans-serif"] } }
    scale: { h1: { size: 56, line: 64, weight: 600 } }
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
    bg: { primary: "rgba(10, 15, 20, 0.9)", secondary: "rgba(15, 25, 35, 0.7)" }
    text: { primary: "#00F0FF", secondary: "#70A0B0" }
    brand: { primary: "#00F0FF", accent: "#FF4500" }
  radius: { none: 0, chamfer: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }
  shadow: { glow: "0 0 10px rgba(0,240,255,0.5)" }
  typography:
    font:
      sans: { primary: "Rajdhani", fallback: ["sans-serif"] }
      mono: { primary: "Share Tech Mono", fallback: ["monospace"] }
    scale: { h1: { size: 56, line: 64, weight: 600, tracking: 0.1 } }
\`\`\``,
  },
  'S45': {
    paletteStrategy: 'Obsidian black (#050505, #020202) and deep charcoal base. Intense crimson red (#dc2626) neon accents for glowing edges, buttons, and UI highlights. Carbon-fiber textures and scanline overlays add depth.',
    typography: 'Display headings use Teko (tall condensed sans-serif) for dramatic impact. Body labels use Michroma (wide geometric). Monospaced Share Tech Mono for HUD readouts and system text.',
    radiusPolicy: 'Zero rounded corners. All elements use sharp chamfered clip-path cuts (polygon) to simulate armor plate edges.',
    shadowPolicy: 'Red neon outer glow (drop-shadow, box-shadow with #dc2626). Deep inset shadows on armor plates for beveled depth. No soft shadows.',
    borderLanguage: 'Thin red glowing hairline borders on armor plates. Top/bottom edge light-strips that extend on hover. Segmented panel seams.',
    patterns: 'Carbon fiber and black-scales micro-textures as overlays. CRT-style horizontal scanline effect. Radial red ambient smoke gradients.',
    motion: 'Armor plates lift on hover with extending red edge light-strips. Pulsing red core glow. Smooth cubic-bezier transitions. Spin animations on decorative elements.',
    dos: ['Use obsidian black (#050505, #020202) backgrounds', 'Apply crimson red (#dc2626) for all glowing elements', 'Use clip-path polygon cuts on all containers and buttons', 'Use carbon-fiber texture overlays for material depth', 'Combine Teko (display) + Michroma (label) + Share Tech Mono (data)'],
    donts: ['Don\'t use blue, cyan, or any non-red neons', 'Don\'t use rounded corners or pill shapes', 'Don\'t use flat or bright colored backgrounds', 'Don\'t use organic or soft textures', 'Don\'t use standard box shadows without glow'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S45"
    style_name: "Cyber-Bio Noir"
    industry: "Tech/Military"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050505"
      secondary: "#020202"
      elevated: "#0a0a0a"
      smoke: "radial-gradient(circle at center, rgba(220,38,38,0.08) 0%, transparent 60%)"
    text:
      primary: "#FFFFFF"
      secondary: "#a1a1aa"
      muted: "#52525b"
      accent: "#dc2626"
    brand:
      primary: "#dc2626"
      accent: "#ef4444"
      hover: "#FFFFFF"
    armor:
      base: "#121212"
      surface: "#0a0a0a"
      trim: "#dc2626"
      glow: "rgba(220, 38, 38, 0.6)"
    border:
      strong: "#dc2626"
      subtle: "rgba(220, 38, 38, 0.15)"
      hover: "rgba(220, 38, 38, 0.6)"
    state:
      success: "#22c55e"
      warning: "#eab308"
      error: "#dc2626"
    focus:
      ring: "#dc2626"
  radius:
    none: 0
    chamfer_sm: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
    chamfer_lg: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)"
    chamfer_plate: "polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)"
    hex: "polygon(30% 0%, 70% 0%, 100% 20%, 100% 80%, 70% 100%, 30% 100%, 0% 80%, 0% 20%)"
  border:
    width:
      hairline: 1
      medium: 2
      armor: 4
  shadow:
    neon: "0 0 15px rgba(220, 38, 38, 0.7), 0 0 30px rgba(220, 38, 38, 0.3)"
    neon_strong: "0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.2)"
    deep: "inset 0 0 20px rgba(0,0,0,1), 0 5px 15px rgba(0,0,0,0.5)"
  layout:
    container:
      content: 1280
      wide: 1536
  motion:
    duration:
      fast: 300
      normal: 400
      pulse: 2000
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  typography:
    font:
      display:
        primary: "Teko"
        fallback: ["sans-serif"]
      sans:
        primary: "Michroma"
        fallback: ["sans-serif"]
      mono:
        primary: "Share Tech Mono"
        fallback: ["monospace"]
    scale:
      h1: { size: 96, line: 80, weight: 600, tracking: -0.02 }
      h2: { size: 56, line: 56, weight: 600, tracking: 0 }
      h3: { size: 36, line: 44, weight: 400, tracking: 0.02 }
      label: { size: 11, line: 16, weight: 400, tracking: 0.3 }
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
    bg: { primary: "#050510", mesh: "radial-gradient(at 0% 0%, #4c1d95 0px, transparent 50%), radial-gradient(at 100% 0%, #065f46 0px, transparent 50%)" }
    text: { primary: "#FFFFFF", secondary: "#CBD5E1" }
    brand: { primary: "#34D399", accent: "#A78BFA" }
  radius: { lg: 32, pill: 9999 }
  shadow: { glass: "0 8px 32px 0 rgba(0,0,0,0.37)" }
  typography:
    font: { sans: { primary: "Syne", fallback: ["sans-serif"] } }
    scale: { h1: { size: 64, line: 72, weight: 700, tracking: -0.02 } }
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
    bg: { primary: "#FAFAFA", holo: "linear-gradient(135deg, rgba(238,174,202,0.3) 0%, rgba(148,187,233,0.3) 100%)" }
    text: { primary: "#18181B", secondary: "#52525B" }
    brand: { primary: "#E879F9", accent: "#38BDF8" }
  radius: { md: 16, lg: 24 }
  shadow: { holo: "0 10px 30px rgba(232,121,249,0.15)" }
  typography:
    font: { sans: { primary: "Jost", fallback: ["sans-serif"] } }
    scale: { h1: { size: 60, line: 68, weight: 300, tracking: 0.05 } }
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
    bg: { primary: "#111111", secondary: "#1A1A1A" }
    text: { primary: "#EAEAEA", secondary: "#A0A0A0" }
    brand: { primary: "#D4D4D4", accent: "#FFFFFF" }
  radius: { lg: 40, fluid: "60% 40% 30% 70% / 60% 30% 70% 40%" }
  shadow: { liquid: "inset 0 10px 20px rgba(255,255,255,0.8)" }
  typography:
    font: { sans: { primary: "Syncopate", fallback: ["sans-serif"] } }
    scale: { h1: { size: 64, line: 72, weight: 700, tracking: 0.1 } }
\`\`\``,
  },
};
