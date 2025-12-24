import type { StyleDNAConfig } from './types';

export const S49_S54_Configs: Record<string, StyleDNAConfig> = {
    'S49': {
        paletteStrategy: 'Washed out pastels, translucent layers, paper textures.',
        typography: 'Artistic Serif or handwritten Script.',
        radiusPolicy: 'Organic, bleeding edges.',
        shadowPolicy: 'Soft, diffuse spreading shadows (wet look).',
        borderLanguage: 'None or rough irregular pencil lines.',
        patterns: 'Paper grain, paint splashes, wet edges.',
        motion: 'Flowing, seeping, slow fade-ins.',
        dos: ['Use texture', 'Layer transparencies', 'Be subtle', 'Use natural colors'],
        donts: ['Don\'t use sharp vectors', 'Don\'t use harsh blacks', 'Don\'t be rigid', 'Don\'t use solid fills'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S49"
    style_name: "Watercolor"
  color:
    bg:
      primary: "#FFFAF0" # Floral White
      paper: "#F5F5DC"
    paint:
      blue: "rgba(65, 105, 225, 0.5)"
      pink: "rgba(255, 182, 193, 0.6)"
      green: "rgba(144, 238, 144, 0.4)"
  radius:
    organic: "30% 70% 70% 30% / 30% 30% 70% 70%"
  typography:
    font:
      primary: "Amatic SC"
      secondary: "Lato"
\`\`\``,
    },
    'S50': {
        paletteStrategy: 'Mixed media colors, newsprint greys, bright cutouts.',
        typography: 'Ransom note style, mixed fonts.',
        radiusPolicy: 'Rough cut edges (scissors).',
        shadowPolicy: 'Hard drop shadows to suggest layered paper.',
        borderLanguage: 'White paper borders, torn edges.',
        patterns: 'Halftones, ripped paper, tape textures.',
        motion: 'Stop motion, jerky movements.',
        dos: ['Mix retro photos', 'Use tape textures', 'Overlapping elements', 'Look handmade'],
        donts: ['Don\'t align perfectly', 'Don\'t be clean', 'Don\'t use flat digital colors', 'Don\'t use gradients'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S50"
    style_name: "Collage"
  color:
    bg:
      primary: "#EAEAEA"
    accent:
      red: "#D32F2F"
      yellow: "#FBC02D"
      tape: "rgba(255, 255, 255, 0.6)"
  radius:
    rough: 2
  shadow:
    paper: "4px 4px 0 rgba(0,0,0,0.2)"
  typography:
    font:
      primary: "Abril Fatface"
      secondary: "Permanent Marker"
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
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FDFBF7"
    ink:
      primary: "#2C3E50"
      accent: "#E74C3C"
  radius:
    sketch: "255px 15px 225px 15px / 15px 225px 15px 255px"
  typography:
    font:
      primary: "Patrick Hand"
      secondary: "Caveat"
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
  color:
    bg:
      primary: "#FFFFFF"
    accent:
      cyan: "#00ADEF"
      magenta: "#EC008C"
      yellow: "#FFF200"
      black: "#000000"
  radius:
    none: 0
  shadow:
    halftone: "8px 8px 0 #000"
  typography:
    font:
      primary: "Bangers"
      secondary: "Comic Neue"
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
  color:
    bg:
      primary: "#1a1a1a" # Dark Wall
      secondary: "#333333"
    spray:
      green: "#39FF14"
      pink: "#FF00FF"
      cyan: "#00FFFF"
  radius:
    none: 0
  typography:
    font:
      primary: "Creepster" # Placeholder for graffiti font
      secondary: "Permanent Marker"
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
  color:
    bg:
      primary: "#F5F5DC" # Beige
      secondary: "#EADDCA"
    accent:
      gold: "#C5A059"
      green: "#556B2F"
      red: "#8B4513"
  radius:
    ornate: 16
  typography:
    font:
      primary: "Cinzel Decorative"
      secondary: "Playfair Display"
\`\`\``,
    },
};
