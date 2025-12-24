import type { StyleDNAConfig } from './types';

export const S37_S42_Configs: Record<string, StyleDNAConfig> = {
    'S37': {
        paletteStrategy: 'Newsprint Grey (#F0F0F0), Ink Black (#1A1A1A). High contrast monochrome.',
        typography: 'Classic Serif (Times New Roman or similar) for body, Bold Serif/Sans for headlines.',
        radiusPolicy: 'Sharp edges (0px) or very slight rounding for paper sections.',
        shadowPolicy: 'Flat or subtle drop shadows to distinguish paper sheets.',
        borderLanguage: 'Thin hairlines, double lines, dividers.',
        patterns: 'Halftone dots, paper grain, ink bleed.',
        motion: 'Page flip, scrolling ticker.',
        dos: ['Use multiple columns', 'Use justified text', 'Use bold headlines', 'Keep it monochromatic'],
        donts: ['Don\'t use vibrant colors', 'Don\'t use excessive negative space', 'Don\'t use glossy effects', 'Don\'t make it chaotic'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S37"
    style_name: "Newspaper"
  color:
    bg:
      primary: "#F5F5F0" # Newsprint
      secondary: "#EAEAE0"
    text:
      primary: "#1A1A1A"
      secondary: "#444444"
      accent: "#800000" # Editorial Red
  radius:
    none: 0
  border:
    width: "1px"
    style: "solid"
    color: "#1A1A1A"
  typography:
    font:
      primary: "Playfair Display"
      secondary: "Merriweather"
\`\`\``,
    },
    'S38': {
        paletteStrategy: 'High fashion contrast. Black/White base with bold accent colors (Hot Pink, Electric Blue).',
        typography: 'Didone (Bodoni/Didot) for titles, clean geometric Sans for geometric layouts.',
        radiusPolicy: 'Zero radius for images, sharp cuts.',
        shadowPolicy: 'None or hard, defining shadows.',
        borderLanguage: 'Thick framing borders or no borders (full bleed).',
        patterns: 'Large typography integration, overlapping text/images.',
        motion: 'Parallax, smooth sliding, mask reveals.',
        dos: ['Use high quality imagery', 'Use large titles', 'Overlay text on images', 'Be bold'],
        donts: ['Don\'t use small text everywhere', 'Don\'t use low res images', 'Don\'t clutter', 'Don\'t use default fonts'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S38"
    style_name: "Magazine"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F2F2F2"
    text:
      primary: "#000000"
      secondary: "#555555"
      inverse: "#FFFFFF"
  radius:
    none: 0
  typography:
    font:
      primary: "Bodoni Moda"
      secondary: "Inter"
\`\`\``,
    },
    'S39': {
        paletteStrategy: 'CMYK primaries (Cyan, Magenta, Yellow, Black). Halftone textures.',
        typography: 'Comic Sans style lettering, SFX text (Boom! Pow!).',
        radiusPolicy: 'Hand-drawn panels, varying/rough borders.',
        shadowPolicy: 'Hard black drop shadows (pop art style).',
        borderLanguage: 'Thick black outlines.',
        patterns: 'Ben-Day dots, speed lines, jagged bursts.',
        motion: 'Panel sliding, scale bouncing (pop-in).',
        dos: ['Use speech bubbles', 'Use halftone patterns', 'Use thick outlines', 'Have fun'],
        donts: ['Don\'t use subtle gradients', 'Don\'t be serious', 'Don\'t use thin fonts', 'Don\'t ignore the panel layout'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S39"
    style_name: "Comic Book"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F0F0F0"
    text:
      primary: "#000000"
      bubble: "#000000"
    accent:
      yellow: "#FFE800"
      red: "#FF0000"
      blue: "#00AEEF"
  radius:
    comic: "2px 2px 2px 2px"
  shadow:
    pop: "4px 4px 0px #000000"
  typography:
    font:
      primary: "Bangers"
      secondary: "Comic Neue"
\`\`\``,
    },
    'S40': {
        paletteStrategy: 'Warm, sun-faded colors. Sepia tones, muted blues and greens.',
        typography: 'Handwritten scripts, stamp fonts.',
        radiusPolicy: 'Slightly rounded corners (worn paper).',
        shadowPolicy: 'Soft, lifting shadows (card effect).',
        borderLanguage: 'Postage stamp edges, uneven paper edges.',
        patterns: 'Paper texture, postmarks, watercolor stains.',
        motion: 'Flip (front/back), slide in.',
        dos: ['Use paper textures', 'Use handwriting', 'Make it personal', 'Simulate travel'],
        donts: ['Don\'t use pristine lines', 'Don\'t use neon colors', 'Don\'t look digital', 'Don\'t crowd the space'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S40"
    style_name: "Postcard"
  color:
    bg:
      primary: "#Fdfbf7" # Cream paper
      secondary: "#E6E2D8"
    text:
      primary: "#2C3E50"
      secondary: "#5D6D7E"
      stamp: "#C0392B"
  radius:
    card: 4
  shadow:
    lifted: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)"
  typography:
    font:
      primary: "Indie Flower"
      secondary: "Caveat"
\`\`\``,
    },
    'S41': {
        paletteStrategy: 'White frame, saturated/filtered photo area. Marker ink colors.',
        typography: 'Marker handwriting (Sharpie style).',
        radiusPolicy: 'Sharp corners on photo, rounded on frame.',
        shadowPolicy: 'Realistic drop shadows to simulate stacking.',
        borderLanguage: 'Thick white borders (classic instant photo).',
        patterns: 'Film grain, light leaks, vignette.',
        motion: 'Developing (fade in), stacking, tilting.',
        dos: ['Use the classic frame ratio', 'Use marker fonts', 'Simulate film imperfections', 'Create nostalgia'],
        donts: ['Don\'t remove the white border', 'Don\'t use digital fonts in the handwritten area', 'Don\'t align perfectly', 'Don\'t look sterile'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S41"
    style_name: "Polaroid"
  color:
    bg:
      primary: "#EAEAEA" # Background for the desk/wall
      frame: "#FFFFFF"   # Photo frame
    text:
      marker: "#222222"
      label: "#000000"
  radius:
    frame: 2
  shadow:
    stack: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  typography:
    font:
      primary: "Permanent Marker"
      secondary: "Shadows Into Light"
\`\`\``,
    },
    'S42': {
        paletteStrategy: 'Faded paper colors (yellows, pinks, blues), Black ink. Grunge textures.',
        typography: 'Monospace (typewriter), Dot matrix.',
        radiusPolicy: 'Perforated edges, torn corners.',
        shadowPolicy: 'Flat, close to surface.',
        borderLanguage: 'Dotted lines (tear lines), barcode strips.',
        patterns: 'Barcode, QR code, noise, ink stamps.',
        motion: 'Tearing, printing, sliding out.',
        dos: ['Use perforated lines', 'Use monospace fonts', 'Simulate ink bleed', 'Keep it functional'],
        donts: ['Don\'t use gradients', 'Don\'t use variable width fonts', 'Don\'t clean it up too much', 'Don\'t use rounded buttons'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S42"
    style_name: "Ticket Stub"
  color:
    bg:
      primary: "#FFF8E1" # Aged paper
      secondary: "#FFE0B2"
    text:
      primary: "#263238"
      secondary: "#455A64"
      warning: "#D84315"
  radius:
    stub: 6
  border:
    perforation: "2px dashed #B0BEC5"
  typography:
    font:
      primary: "Courier Prime"
      secondary: "Space Mono"
\`\`\``,
    },
};
