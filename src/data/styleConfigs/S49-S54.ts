import type { StyleDNAConfig } from './types';

export const S49_S54_Configs: Record<string, StyleDNAConfig> = {
  'S49': {
    paletteStrategy: 'Strongly translucent white/gray backgrounds over colorful gradient patterns. High-blur glass effect.',
    typography: 'Modern, high-visibility sans-serif. Clean and legible.',
    radiusPolicy: 'Soft, large rounding (20-32px) for a "melty" glass look.',
    shadowPolicy: 'Subtle, diffused shadows to separate glass layers.',
    borderLanguage: 'Translucent 1px borders (glass edges).',
    patterns: 'Heavy background blurs, colorful blobs behind glass.',
    motion: 'Smooth, slow parallax or floating effects.',
    dos: ['Use heavy blur (20px+)', 'Apply translucent borders', 'Layer glass elements', 'Use vibrant background colors'],
    donts: ['Don\'t use opaque blocks', 'Don\'t use low blur', 'Don\'t use harsh black borders', 'Don\'t clutter'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S49"
    style_name: "Frosted Glass (Strong)"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg: { primary: "rgba(255, 255, 255, 0.4)", secondary: "rgba(255, 255, 255, 0.2)" }
    brand: { primary: "#6366F1", accent: "#EC4899" }
  radius: { lg: 32 }
  blur: { strong: "blur(20px)" }
  shadow: { glass: "0 8px 32px rgba(0,0,0,0.1)" }
  typography:
    font: { sans: { primary: "Inter", fallback: ["sans-serif"] } }
    scale: { h1: { size: 56, line: 64, weight: 600 } }
\`\`\``,
  },
  'S50': {
    paletteStrategy: 'Windows Fluent inspired. Semi-transparent noise-textured surfaces. Adaptive dark/light.',
    typography: 'System fonts (Segoe UI/Inter). Precise and clear.',
    radiusPolicy: 'Small radius (4-8px) for a modern software look.',
    shadowPolicy: 'Soft, layered shadows. Depth through transparency.',
    borderLanguage: 'Reflective 1px borders.',
    patterns: 'Acrylic noise/grain texture, soft focus backgrounds.',
    motion: 'Fast, responsive, native-feeling transitions.',
    dos: ['Use acrylic transparency', 'Add subtle noise texture', 'Keep corners clean and small', 'Prioritize readability'],
    donts: ['Don\'t over-blur like glassmorphism', 'Don\'t use large organic blobs', 'Don\'t use clashing colors', 'Don\'t use heavy textures'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S50"
    style_name: "Acrylic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg: { primary: "rgba(255, 255, 255, 0.7)", secondary: "rgba(243, 244, 246, 0.5)" }
    brand: { primary: "#0078D4", accent: "#2B2B2B" }
  radius: { sm: 4, md: 8 }
  blur: { acrylic: "blur(30px)" }
  shadow: { soft: "0 4px 12px rgba(0,0,0,0.05)" }
  typography:
    font: { sans: { primary: "Segoe UI", fallback: ["Inter", "sans-serif"] } }
    scale: { h1: { size: 48, line: 56, weight: 600 } }
\`\`\``,
  },
  'S51': {
    paletteStrategy: 'Black ink on white/cream paper. Minimal color accents.',
    typography: 'Handwritten, sketchy fonts.',
    radiusPolicy: 'Wobbly hand-drawn circles and boxes.',
    shadowPolicy: 'Hatched shading lines.',
    borderLanguage: 'Sketchy, uneven stroke widths.',
    patterns: 'Doodles, scribbles, cross-hatching.',
    motion: 'Drawing animations, wiggle effect.',
    dos: ['Use subtle wobbly lines', 'Look like a sketchbook', 'Keep it simple', 'Use negative space'],
    donts: ['Don\'t use straight vector lines', 'Don\'t perfect the shapes', 'Don\'t overuse color', 'Don\'t use digital effects'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S51"
    style_name: "Hand Drawn"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg: { primary: "#FFFFFF", secondary: "#FDFBF7" }
    brand: { primary: "#2C3E50", accent: "#E74C3C" }
  radius: { sketch: "255px 15px 225px 15px / 15px 225px 15px 255px" }
  border: { width: { stroke: 2 } }
  typography:
    font: { sans: { primary: "Patrick Hand", fallback: ["cursive"] } }
    scale: { h1: { size: 52, line: 64, weight: 400 } }
\`\`\``,
  },
  'S52': {
    paletteStrategy: 'CMYK primaries, extremely vibrant and contrasting.',
    typography: 'Bold comic fonts, Ben-Day dots.',
    radiusPolicy: 'Standard rounding or sharp.',
    shadowPolicy: 'Black halftone drop shadows.',
    borderLanguage: 'Thick black outlines.',
    patterns: 'Ben-Day dots, starbursts, stripes.',
    motion: 'Pop-in, comic pow effects.',
    dos: ['Use halftones', 'Use bold outlines', 'Be loud', 'Reference Lichtenstein/Warhol'],
    donts: ['Don\'t use muted colors', 'Don\'t be subtle', 'Don\'t use realistic gradients', 'Don\'t take itself seriously'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S52"
    style_name: "Pop Art"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg: { primary: "#FFFFFF", secondary: "#F0F0F0" }
    brand: { primary: "#EC008C", accent: "#00ADEF" }
  radius: { md: 8 }
  border: { width: { outline: 4 } }
  shadow: { halftone: "8px 8px 0 #000" }
  typography:
    font: { sans: { primary: "Bangers", fallback: ["Impact"] } }
    scale: { h1: { size: 64, line: 68, weight: 400 } }
\`\`\``,
  },
  'S53': {
    paletteStrategy: 'Neon sprays on dark concrete/brick walls.',
    typography: 'Graffiti tags, bubble letters.',
    radiusPolicy: 'None or sprayed soft edges.',
    shadowPolicy: 'Spray glow or drip shadows.',
    borderLanguage: 'Spray paint outlines.',
    patterns: 'Brick walls, paint drips, splatters.',
    motion: 'Spray reveal, dripping paint.',
    dos: ['Use street art vibes', 'Use vibrant neon', 'Look urban', 'Be rebellious'],
    donts: ['Don\'t use corporate fonts', 'Don\'t be clean', 'Don\'t use white backgrounds', 'Don\'t be orderly'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S53"
    style_name: "Graffiti"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg: { primary: "#1A1A1A", secondary: "#111" }
    brand: { primary: "#39FF14", accent: "#FF00FF" }
  radius: { none: 0 }
  shadow: { spray: "0 0 20px rgba(57,255,20,0.5)" }
  typography:
    font: { sans: { primary: "Creepster", fallback: ["cursive"] } }
    scale: { h1: { size: 64, line: 72, weight: 400 } }
\`\`\``,
  },
  'S54': {
    paletteStrategy: 'Muted golds, olive greens, floral tones.',
    typography: 'Ornamental, flowing Serif.',
    radiusPolicy: 'Complex curves, floral motifs.',
    shadowPolicy: 'Soft, natural shadows.',
    borderLanguage: 'Intricate floral borders.',
    patterns: 'Vines, flowers, Mucha-style curves.',
    motion: 'Growing vines, elegant fades.',
    dos: ['Use curves', 'Be ornamental', 'Reference nature', 'Use muted elegance'],
    donts: ['Don\'t use straight lines', 'Don\'t use neon', 'Don\'t be minimal', 'Don\'t be industrial'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S54"
    style_name: "Art Nouveau"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg: { primary: "#F5F5DC", secondary: "#EADDCA" }
    brand: { primary: "#C5A059", accent: "#556B2F" }
  radius: { ornate: 16 }
  shadow: { soft: "0 4px 16px rgba(0,0,0,0.1)" }
  typography:
    font: { serif: { primary: "Cinzel Decorative", fallback: ["serif"] } }
    scale: { h1: { size: 52, line: 64, weight: 400 } }
\`\`\``,
  },
};
