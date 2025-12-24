import type { StyleDNAConfig } from './types';

export const S25_S30_Configs: Record<string, StyleDNAConfig> = {
    'S25': {
        paletteStrategy: 'Pastel, paper-like colors. White, beige, light blue, soft shadows.',
        typography: 'Handwritten or serif headings. Clean sans-serif body.',
        radiusPolicy: 'Slightly irregular or rounded edges to mimic paper cuts.',
        shadowPolicy: 'Layered, deep shadows to create depth (cutout effect).',
        borderLanguage: 'None or subtle torn paper edges.',
        patterns: 'Paper texture, grain, noise.',
        motion: 'Fold, unfold, slide in like paper sheets.',
        dos: ['Use layered shadows', 'Use pastel colors', 'Mimic physical paper properties', 'Keep layouts clean'],
        donts: ['Don\'t use neon colors', 'Don\'t use flat design without depth', 'Don\'t use harsh metallic gradients', 'Don\'t make it too perfect'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S25"
    style_name: "Paper Craft"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F5F0"
      secondary: "#EBEBE0"
      paper: "#FFFFFF"
    text:
      primary: "#2C2C2C"
      secondary: "#595959"
      muted: "#999999"
    brand:
      primary: "#FF6B6B"
      secondary: "#4ECDC4"
      accent: "#FFE66D"
    border:
      strong: "#D1D1D1"
      subtle: "#E5E5E5"
    state:
      success: "#4ECDC4"
      warning: "#FFE66D"
      error: "#FF6B6B"
    focus:
      ring: "#4ECDC4"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  shadow:
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    md: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"
    lg: "0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.1)"
    cutout: "inset 0 2px 4px rgba(0,0,0,0.1)"
  layout:
    container:
      content: 1100
      wide: 1300
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 32
  motion:
    duration:
      fast: 200
      normal: 400
    easing: cubic-bezier(0.4, 0.0, 0.2, 1)
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback: ["sans-serif"]
      serif:
        primary: "Lora"
        fallback: ["serif"]
    scale:
      h1: { size: 48, line: 1.2, weight: 700 }
      h2: { size: 36, line: 1.3, weight: 600 }
      h3: { size: 24, line: 1.4, weight: 600 }
      body: { size: 16, line: 1.6, weight: 400 }
\`\`\``,
    },
    'S26': {
        paletteStrategy: 'Vibrant colors, white background. Material Design 3 inspired.',
        typography: 'Google Sans or Roboto. Friendly and readable.',
        radiusPolicy: 'Rounded corners (12px-24px).',
        shadowPolicy: 'Subtle, consistent elevation usage.',
        borderLanguage: 'Minimal borders, focus on fill colors and spacing.',
        patterns: 'Shape containers, slight gradients.',
        motion: 'Standard Material ease. Playful but functional.',
        dos: ['Use consistent rounded corners', 'Use vibrant primary colors', 'Follow material spacing guidelines', 'Use meaningful motion'],
        donts: ['Don\'t use sharp corners', 'Don\'t use heavy textures', 'Don\'t clutter the UI', 'Don\'t use complex gradients'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S26"
    style_name: "Flat 2.0"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F3F4F6"
    text:
      primary: "#111827"
      secondary: "#4B5563"
      muted: "#9CA3AF"
    brand:
      primary: "#6366F1"
      secondary: "#8B5CF6"
      accent: "#F472B6"
    border:
      strong: "#E5E7EB"
      subtle: "#F3F4F6"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
  radius:
    none: 0
    sm: 8
    md: 12
    lg: 24
  shadow:
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  typography:
    font:
      sans:
        primary: "Roboto"
        fallback: ["sans-serif"]
    scale:
      h1: { size: 56, line: 1.1, weight: 800 }
      h2: { size: 40, line: 1.2, weight: 700 }
      body: { size: 16, line: 1.5, weight: 400 }
\`\`\``,
    },
    'S27': {
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
    style_id: "S27"
    style_name: "Y2K Aesthetic"
  color:
    bg:
      primary: "#000000"
      secondary: "#1A1A1A"
    text:
      primary: "#FFFFFF"
      secondary: "#D1D5DB"
    brand:
      primary: "#FF00FF"
      secondary: "#00FFFF"
      accent: "#C0C0C0"
  radius:
    pill: 9999
    lg: 20
  shadow:
    glow: "0 0 15px #FF00FF"
  typography:
    font:
      display: "Righteous"
      body: "Space Mono"
\`\`\``,
    },
    'S28': {
        paletteStrategy: 'Natural greens, warm yellows, white/cream. Organic feel.',
        typography: 'Rounded sans-serif or soft serif.',
        radiusPolicy: 'Organic, heavily rounded corners.',
        shadowPolicy: 'Soft, diffused sunlight shadows.',
        borderLanguage: 'Organic lines, leaf shapes.',
        patterns: 'Leaves, solar panels, hexagons, nature textures.',
        motion: 'Gentle, growing, flowing.',
        dos: ['Use nature-inspired colors', 'Emphasize sustainability', 'Use organic shapes', 'Keep it hopeful'],
        donts: ['Don\'t use industrial grays', 'Don\'t use sharp, aggressive shapes', 'Don\'t make it look dystopian', 'Don\'t use synthetic neons'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S28"
    style_name: "Solarpunk"
  color:
    bg:
      primary: "#FDFCF8"
      secondary: "#F0Fdf4"
    text:
      primary: "#064E3B"
      secondary: "#047857"
    brand:
      primary: "#10B981"
      secondary: "#F59E0B"
  radius:
    lg: 24
    xl: 32
  typography:
    font:
      primary: "Quicksand"
      secondary: "Merriweather Sans"
\`\`\``,
    },
    'S29': {
        paletteStrategy: 'Gold, black, navy blue, emerald green. Luxury contrast.',
        typography: 'Geometric sans or stylized serif (e.g., Broadway style).',
        radiusPolicy: 'Sharp angles mixed with perfect circles.',
        shadowPolicy: 'Hard shadows or gold glow.',
        borderLanguage: 'Double lines, gold borders.',
        patterns: 'Sunbursts, fans, geometric repetitions.',
        motion: 'Fast, precise, elegant.',
        dos: ['Use gold accents', 'Use geometric patterns', 'Keep typography elegant', 'Use high contrast'],
        donts: ['Don\'t use slopy fonts', 'Don\'t use grunge textures', 'Don\'t use cheap-looking colors', 'Don\'t clutter'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S29"
    style_name: "Art Deco"
  color:
    bg:
      primary: "#0F172A"
      secondary: "#1E293B"
    text:
      primary: "#FCD34D"
      secondary: "#E2E8F0"
    brand:
      primary: "#D4AF37"
      secondary: "#000000"
  radius:
    none: 0
    circle: 9999
  border:
    width:
      thin: 1
      thick: 4
  typography:
    font:
      primary: "Josefin Sans"
      secondary: "Playfair Display"
\`\`\``,
    },
    'S30': {
        paletteStrategy: 'Safety yellow, black, concrete gray. Warning stripes.',
        typography: 'Stencil fonts, bold industrial sans-serif.',
        radiusPolicy: 'Chamfered corners or slightly rounded industrial.',
        shadowPolicy: 'Heavy drop shadows, utilitarian.',
        borderLanguage: 'Thick, dashed, or hazard stripes.',
        patterns: 'Caution tape, concrete texture, blueprints.',
        motion: 'Mechanical, clunky (in a good way).',
        dos: ['Use safety yellow', 'Use industrial textures', 'Use bold, readable fonts', 'Make it look functional'],
        donts: ['Don\'t use delicate serifs', 'Don\'t use pastel colors', 'Don\'t hide the structure', 'Don\'t make it too soft'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S30"
    style_name: "Industrial"
  color:
    bg:
      primary: "#F3F4F6"
      secondary: "#E5E7EB"
    text:
      primary: "#111827"
      secondary: "#374151"
    brand:
      primary: "#FACC15"
      secondary: "#000000"
  border:
    width:
      thick: 4
  radius:
    sm: 2
  typography:
    font:
      primary: "Chakra Petch"
      secondary: "Roboto Mono"
\`\`\``,
    },
};
