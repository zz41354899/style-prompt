import type { StyleDNAConfig } from './types';

export const S31_S36_Configs: Record<string, StyleDNAConfig> = {
  'S31': {
    paletteStrategy: 'Stark white background, crisp black text. High contrast minimalism.',
    typography: 'Elegant, modern serif fonts (e.g. Playfair Display, Lora) for headings. Clean sans-serif for body.',
    radiusPolicy: 'Zero radius. Sharp, precise corners.',
    shadowPolicy: 'None. Absolute flatness to emphasize typography.',
    borderLanguage: 'Hairline borders used sparingly for structure (e.g., 1px black lines).',
    patterns: 'None. Whitespace is the primary structural element.',
    motion: 'Instant or extremely subtle crossfades. Focus on reading continuity.',
    dos: ['Use generous whitespace', 'Combine elegant serifs with utilitarian sans-serifs', 'Rely on typography for hierarchy', 'Keep layouts asymmetrical but balanced'],
    donts: ['Don\'t use drop shadows', 'Don\'t use rounded corners', 'Don\'t clutter with background colors', 'Don\'t use highly vibrant accent colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S31"
    style_name: "Minimalist Serif"
    industry: "Editorial/SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
    brand:
      primary: "#000000"
      accent: "#222222"
  radius: { none: 0 }
  typography:
    font:
      sans: { primary: "Inter", fallback: ["sans-serif"] }
      serif: { primary: "Lustria", fallback: ["serif"] }
    scale:
      h1: { size: 64, line: 72, weight: 400, tracking: -0.02 }
\`\`\``,
  },
  'S32': {
    paletteStrategy: 'Bright, energetic gradients. Startup vibes with purple, blue, and teal. High-energy vibrant backgrounds.',
    typography: 'Bold, modern sans-serif (Inter/Plus Jakarta Sans). Enthusiastic scale and weights.',
    radiusPolicy: 'Large, friendly rounding (12-24px). Pill-shaped buttons.',
    shadowPolicy: 'Soft, layered colorful shadows. Floating UI elements.',
    borderLanguage: 'None or translucent borders. Rely on color and shadows.',
    patterns: 'Dynamic mesh gradients, soft blobs, floating geometric accents.',
    motion: 'Fast, springy animations. High energy bounce.',
    dos: ['Use vibrant startup gradients', 'Keep it high-energy and friendly', 'Use bold, direct typography', 'Add playful mesh backgrounds'],
    donts: ['Don\'t use muted/boring colors', 'Don\'t use aggressive/sharp edges', 'Don\'t use heavy textures', 'Don\'t over-formalize'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S32"
    style_name: "Startup Vibrant"
    industry: "Tech/Lifestyle"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F3F4F6"
    brand:
      primary: "#7C3AED"
      secondary: "#06B6D4"
      accent: "#F472B6"
    gradient:
      mesh: "radial-gradient(at 0% 0%, #7C3AED 0%, transparent 50%), radial-gradient(at 100% 0%, #06B6D4 0%, transparent 50%)"
  radius:
    md: 12
    pill: 9999
  shadow:
    vibrant: "0 10px 30px rgba(124, 58, 237, 0.2)"
  typography:
    font:
      sans: { primary: "Plus Jakarta Sans", fallback: ["sans-serif"] }
    scale:
      h1: { size: 60, line: 68, weight: 800, tracking: -0.02 }
\`\`\``,
  },
  'S33': {
    paletteStrategy: 'Trustworthy deep blues, corporate grays, and stable whites. Professional reliability.',
    typography: 'Clean, establishment-grade sans-serif (IBM Plex Sans/Inter).',
    radiusPolicy: 'Standard conservative rounding (4-6px). Stability focus.',
    shadowPolicy: 'Subtle, consistent elevation. Professional depth.',
    borderLanguage: 'Refined structure with gray lines. Trust markers.',
    patterns: 'None or subtle grid networks. Global connectivity motifs.',
    motion: 'Smooth, predictable transitions. Professional confidence.',
    dos: ['Use deep navy and royal blue', 'Prioritize stability and reliability', 'Use clean, balanced layouts', 'Maintain high legibility'],
    donts: ['Don\'t use clashing neons', 'Don\'t use irregular/bloby shapes', 'Don\'t use decorative script fonts', 'Don\'t make it too playful'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S33"
    style_name: "Enterprise Blue"
    industry: "Corporate"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
    brand:
      primary: "#1E3A8A"
      accent: "#3B82F6"
  radius: { sm: 4, md: 6 }
  typography:
    font:
      sans: { primary: "IBM Plex Sans", fallback: ["sans-serif"] }
    scale:
      h1: { size: 48, line: 56, weight: 700 }
\`\`\``,
  },
  'S34': {
    paletteStrategy: 'Trust-centric greens, deep teals, and professional grays. Security focus with modern accents.',
    typography: 'Modern, precise sans-serif. Numbers-focused hierarchy.',
    radiusPolicy: 'Minimal, precise rounding (4-8px). "Secure" feel.',
    shadowPolicy: 'Subtle, layered shadows for depth without distraction.',
    borderLanguage: 'Clean structural lines. Security-inspired accents (checkmarks, badges).',
    patterns: 'Subtle data-grid overlays or secure shield motifs.',
    motion: 'Instant feedback for actions. Secure, stable animations.',
    dos: ['Use trust-triggering colors (Teal/Green)', 'Showcase data and numbers clearly', 'Emphasize security and trust', 'Keep layout organized and rigorous'],
    donts: ['Don\'t use aggressive reds for non-errors', 'Don\'t use "loose" or playful layouts', 'Don\'t go over-the-top with gradients', 'Don\'t ignore accessibility'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S34"
    style_name: "Fintech Trust"
    industry: "Fintech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F1F5F9"
    brand:
      primary: "#0D9488"
      accent: "#0F172A"
  radius: { sm: 4, md: 8 }
  typography:
    font:
      sans: { primary: "Inter", fallback: ["sans-serif"] }
    scale:
      h1: { size: 44, line: 52, weight: 700 }
\`\`\``,
  },
  'S35': {
    paletteStrategy: 'Dark grays, bright neons (cyan, green, magenta) for data visualization. High contrast.',
    typography: 'System UI or Monospace. Highly legible, dense information design.',
    radiusPolicy: 'Small radius (4-8px).',
    shadowPolicy: 'Subtle glows for active states or none.',
    borderLanguage: 'Thin, precise borders separating widgets and panels.',
    patterns: 'Grid lines, data points, charts.',
    motion: 'Fast, functional snapping. Chart animations.',
    dos: ['Use a dark theme for high contrast data', 'Structure content in distinct panels', 'Use neon colors sparingly for data highlights', 'Prioritize data legibility'],
    donts: ['Don\'t use large decorative fonts', 'Don\'t use soft, pastel backgrounds', 'Don\'t clutter panels with unnecessary borders', 'Don\'t use slow, sweeping animations'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S35"
    style_name: "Data Dashboard"
    industry: "SaaS/Analytics"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0F1115"
      secondary: "#161920"
    brand:
      primary: "#3B82F6"
      accent: "#10B981"
  radius: { sm: 4, md: 8 }
  typography:
    font:
      sans: { primary: "Inter", fallback: ["sans-serif"] }
      mono: { primary: "JetBrains Mono", fallback: ["monospace"] }
    scale:
      h1: { size: 36, line: 44, weight: 600 }
\`\`\``,
  },
  'S36': {
    paletteStrategy: 'Concrete gray, steel blue, caution yellow, rusted metal accents.',
    typography: 'Bold, blocky geometric sans-serif or stencil fonts. Uppercase focus.',
    radiusPolicy: 'Zero radius or chamfered edges.',
    shadowPolicy: 'Hard, heavy 45-degree drop shadows casting strong depth.',
    borderLanguage: 'Thick, structural borders. Hazard strips.',
    patterns: 'Diamond plate, concrete textures, halftone grids, screws/rivets.',
    motion: 'Mechanical, rigid, clanking.',
    dos: ['Use heavy, structural layouts', 'Incorporate hazard yellow and steel colors', 'Use chamfered or sharp corners', 'Make elements look heavy and physical'],
    donts: ['Don\'t use soft pill shapes', 'Don\'t use elegant serifs', 'Don\'t use pastel gradients', 'Don\'t make it delicate'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S36"
    style_name: "Industrial"
    industry: "Manufacturing/SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#EAEAEA"
      secondary: "#D1D1D1"
    brand:
      primary: "#2C3E50"
      accent: "#FACC15"
  radius: { none: 0, chamfer: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)" }
  border: { width: { medium: 2, strong: 4 } }
  shadow: { heavy: "6px 6px 0 #000" }
  typography:
    font: { sans: { primary: "Teko", fallback: ["sans-serif"] } }
    scale: { h1: { size: 64, line: 72, weight: 700 } }
\`\`\``,
  },
};
