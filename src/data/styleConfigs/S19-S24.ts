import type { StyleDNAConfig } from './types';

export const S19_S24_Configs: Record<string, StyleDNAConfig> = {
  'S19': {
    paletteStrategy: 'High-contrast neon colors (Cyan, Magenta, Yellow) on deep black backgrounds. Glitch effects and digital distortions.',
    typography: 'Futuristic sans-serif and monospace fonts. Glowing text effects. Mixed widths.',
    radiusPolicy: 'Sharp angles mixed with precise circular cutouts. Mechanical feel.',
    shadowPolicy: 'Heavy neon glows (outer glow) in vibrant colors. No soft natural shadows.',
    borderLanguage: 'Thin, glowing neon borders. Circuit-like patterns.',
    patterns: 'Circuit boards, digital noise, glitch lines, scanlines.',
    motion: 'Fast, glitchy transitions. Pulsing glows. Digital interference effects.',
    dos: ['Use vibrant neon on dark backgrounds', 'Incorporate digital glitch effects', 'Use futuristic monospace fonts', 'Add glowing neon accents'],
    donts: ['Don\'t use muted or natural colors', 'Don\'t use soft, rounded shapes', 'Don\'t make it look "clean" or corporate', 'Don\'t use traditional serifs'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S19"
    style_name: "Cyberpunk"
    industry: "Gaming/Tech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050505"
      secondary: "#0D0D0D"
    text:
      primary: "#00FFF2"
      secondary: "#FF00FF"
      muted: "#4D4D4D"
    brand:
      primary: "#FF00FF"
      accent: "#00FFF2"
    border:
      strong: "#FF00FF"
      glow: "#00FFF2"
    focus:
      ring: "#00FFF2"
  radius:
    none: 0
    sm: 0
    md: 0
  border:
    width:
      hairline: 1
      medium: 2
      glow: 4
  shadow:
    neon: "0 0 15px rgba(255, 0, 255, 0.8), 0 0 30px rgba(0, 255, 242, 0.4)"
  layout:
    container:
      content: 1120
      wide: 1280
  motion:
    duration:
      fast: 100
      glitch: 50
    easing: "steps(4)"
  typography:
    font:
      sans: { primary: "Orbitron", fallback: ["sans-serif"] }
      mono: { primary: "Fira Code", fallback: ["monospace"] }
    scale:
      h1: { size: 60, line: 68, weight: 900, tracking: 0.1 }
\`\`\``,
  },
  'S20': {
    paletteStrategy: 'Vibrant neon pinks, cyans, and purples against dark grays. High saturation.',
    typography: 'Bold, geometric sans-serif fonts with glow effects. Retro-futuristic.',
    radiusPolicy: 'Soft rounding (8-12px) for a retro-tech feel.',
    shadowPolicy: 'Heavy colored glows (neon glows).',
    borderLanguage: 'Glowing borders in secondary neon colors.',
    patterns: 'Synthwave grids, sunbursts, scanlines.',
    motion: 'Smooth, glowing transitions. Pulsing neon effects.',
    dos: ['Use vibrant neon colors', 'Add synthwave grids', 'Include neon glow effects', 'Use bold retro typography'],
    donts: ['Don\'t use muted colors', 'Don\'t use sharp, brutalist edges', 'Don\'t make it look modern-clean', 'Don\'t forget the glow'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S20"
    style_name: "Retro 80s / Synthwave"
    industry: "Entertainment"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1A1A2E"
      secondary: "#16213E"
    text:
      primary: "#00FFFF"
      secondary: "#FF00FF"
    brand:
      primary: "#FF00FF"
      accent: "#00FFFF"
    border:
      strong: "#FF00FF"
    focus:
      ring: "#00FFFF"
  radius:
    md: 8
  shadow:
    neon: "0 0 20px #FF00FF"
  typography:
    font:
      sans: { primary: "Bebas Neue", fallback: ["sans-serif"] }
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: 0.05 }
\`\`\``,
  },
  'S21': {
    paletteStrategy: 'Earthy oranges, mustards, avocados, and browns. Warm and nostalgic.',
    typography: 'Rounded, chunky display fonts. Groovy sans-serifs.',
    radiusPolicy: 'Generous rounding (16-24px). Soft, bubble-like shapes.',
    shadowPolicy: 'Soft, warm drop shadows.',
    borderLanguage: 'None or soft, colored borders matching the palette.',
    patterns: 'Floral motifs, geometric waves, bold stripes.',
    motion: 'Bouncy, groovy transitions. "Lazy" easing.',
    dos: ['Use warm, earthy tones', 'Use rounded, chunky fonts', 'Embrace bold patterns', 'Make it feel warm and inviting'],
    donts: ['Don\'t use cool blue neons', 'Don\'t use sharp edges', 'Don\'t use minimal whitespace', 'Don\'t use modern tech fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S21"
    style_name: "Retro 60s-70s / Groovy"
    industry: "Lifestyle"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F4E0C0"
      secondary: "#E67E22"
    text:
      primary: "#3D2B1F"
    brand:
      primary: "#E67E22"
      accent: "#F1C40F"
    border:
      strong: "#3D2B1F"
  radius:
    lg: 24
  shadow:
    soft: "0 10px 20px rgba(61, 43, 31, 0.2)"
  typography:
    font:
      sans: { primary: "Luckiest Guy", fallback: ["cursive"] }
    scale:
      h1: { size: 60, line: 68, weight: 400, tracking: 0.02 }
\`\`\``,
  },
  'S22': {
    paletteStrategy: 'Hot pink, electric blue, silver/chrome, black.',
    typography: 'Extended sans-serif, futuristic fonts.',
    radiusPolicy: 'Mixed: Pills and sharp angles.',
    shadowPolicy: 'Glows, metallic reflections.',
    borderLanguage: 'Thick metallic borders or none.',
    patterns: 'Blobs, liquid metal, grid backgrounds, stars.',
    motion: 'Bouncy, fast, energetic.',
    dos: ['Use chrome textures', 'Use bright neon colors', 'Use futuristic shapes', 'Embrace 2000s tech nostalgia'],
    donts: ['Don\'t make it boring', 'Don\'t use muted colors', 'Don\'t stick to standard grids', 'Don\'t ignore the vibe'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S22"
    style_name: "Y2K Aesthetic"
    industry: "Creative"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#D1D5DB"
    brand:
      primary: "#FF00FF"
      accent: "#00FFFF"
  radius:
    pill: 9999
  shadow:
    glow: "0 0 15px #FF00FF"
  typography:
    font:
      sans: { primary: "Righteous", fallback: ["sans-serif"] }
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: 0.02 }
\`\`\``,
  },
  'S23': {
    paletteStrategy: 'Windows 95 Gray (#C0C0C0), Black, White, Navy Blue title bars.',
    typography: 'Pixelated sans-serif (MS Sans Serif) or System fonts.',
    radiusPolicy: 'Zero radius for windows.',
    shadowPolicy: 'Classic bevels: Light top-left, dark bottom-right.',
    borderLanguage: 'Beveled edges (3D borders).',
    patterns: 'Dithered gradients, strict grids.',
    motion: 'Instant, snapping windows.',
    dos: ['Use #C0C0C0 background', 'Use beveled buttons', 'Use pixel fonts', 'Keep it nostalgic'],
    donts: ['Don\'t use smooth gradients', 'Don\'t use rounded corners', 'Don\'t use transparency'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S23"
    style_name: "Windows 95"
    industry: "Tech/Nostalgia"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#C0C0C0"
      active: "#000080"
    text:
      primary: "#000000"
      inverse: "#FFFFFF"
  radius:
    none: 0
  border:
    width: { medium: 2 }
  shadow:
    out: "inset 1px 1px #dfdfdf, inset -1px -1px #000000, inset 2px 2px #ffffff, inset -2px -2px #808080"
  typography:
    font:
      sans: { primary: "MS Sans Serif", fallback: ["Tahoma"] }
    scale:
      h1: { size: 24, line: 28, weight: 700 }
\`\`\``,
  },
  'S24': {
    paletteStrategy: 'Rich brass, copper, and bronze tones against deep leather browns and charcoal grays. Industrial warmth.',
    typography: 'Victorian-style serifs mixed with heavy industrial sans-serifs. Ornamental but functional.',
    radiusPolicy: 'Sharp edges mixed with mechanical curves (gears). Subtle rounding on "hand-crafted" elements.',
    shadowPolicy: 'Deep, heavy shadows. Metallic reflections and soot-like darkness.',
    borderLanguage: 'Thick rivets, ornate ironwork, and copper piping.',
    patterns: 'Gears, clockwork, weathered paper, Victorian wallpaper scrolls.',
    motion: 'Mechanical, jerky movements. Steam-powered reveals. Gear-like rotations.',
    dos: ['Use warm metallic colors (Copper/Brass)', 'Incorporate mechanical elements (Gears/Pipes)', 'Use Victorian typography', 'Add weathered/industrial textures'],
    donts: ['Don\'t use clean neons', 'Don\'t use modern minimalist whitespace', 'Don\'t make it look "digital"', 'Don\'t use bright primary colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S24"
    style_name: "Steampunk"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#2B1E16"
      secondary: "#1A130E"
    text:
      primary: "#D4AF37"
    brand:
      primary: "#B87333"
      accent: "#8B4513"
  radius:
    none: 0
  shadow:
    heavy: "8px 8px 0 rgba(0,0,0,0.5)"
  typography:
    font:
      sans: { primary: "Courier New", fallback: ["monospace"] }
      serif: { primary: "Playfair Display", fallback: ["serif"] }
    scale:
      h1: { size: 56, line: 64, weight: 700 }
\`\`\``,
  },
};
