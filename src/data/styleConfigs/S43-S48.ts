import type { StyleDNAConfig } from './types';

export const S43_S48_Configs: Record<string, StyleDNAConfig> = {
    'S43': {
        paletteStrategy: 'Vibrant polygons with computed lighting (facets). Bright saturated colors.',
        typography: 'Geometric Sans (low detail, clean shapes).',
        radiusPolicy: 'Sharp, angular edges.',
        shadowPolicy: 'Hard faceted shadows (no blurs).',
        borderLanguage: 'None (edges defined by color change).',
        patterns: 'Triangular meshes, crystalline structures.',
        motion: 'Snappy rotations, faceted transitions.',
        dos: ['Use triangles', 'Use flat shading', 'Keep it geometric', 'Simulate 3D'],
        donts: ['Don\'t use gradients', 'Don\'t use curves', 'Don\'t use realistic textures', 'Don\'t clutter'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S43"
    style_name: "Low Poly"
  color:
    bg:
      primary: "#2C3E50"
      secondary: "#34495E"
    accent:
      purple: "#9B59B6"
      blue: "#3498DB"
      green: "#2ECC71"
  radius:
    none: 0
  shadow:
    facet: "inset 0 0 20px rgba(0,0,0,0.2)"
  typography:
    font:
      primary: "Exo 2"
      secondary: "Montserrat"
\`\`\``,
    },
    'S44': {
        paletteStrategy: 'Pastel colors with distinct light/dark sides for 3D effect.',
        typography: 'Monospace or Technical Sans.',
        radiusPolicy: 'Consistent rounding or sharp, depending on object type.',
        shadowPolicy: 'Long casting shadows (45 degrees).',
        borderLanguage: 'Optional thick outlines for cartoonish look.',
        patterns: 'Isometric grids, stacked layers.',
        motion: 'Elevator lifts, sliding on grid axes.',
        dos: ['Use strict 30-degree angles', 'Stack elements', 'Use consistent lighting', ' Build vertically'],
        donts: ['Don\'t mix perspectives', 'Don\'t flatter the design', 'Don\'t ignore depth', 'Don\'t use random angles'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S44"
    style_name: "Isometric"
  color:
    bg:
      primary: "#F0F4F8"
      secondary: "#D9E2EC"
    cube:
      top: "#62B0E8"
      left: "#4098D7"
      right: "#102A43"
  radius:
    soft: 8
  shadow:
    iso: "10px 10px 0px rgba(0,0,0,0.1)"
  typography:
    font:
      primary: "Space Grotesk"
      secondary: "JetBrains Mono"
\`\`\``,
    },
    'S45': {
        paletteStrategy: 'Blocky colors, pixel art palette translated to 3D.',
        typography: 'Pixel fonts or chunky Sans Serif.',
        radiusPolicy: 'Zero radius (cubes).',
        shadowPolicy: 'Drop shadows or ambient occlusion.',
        borderLanguage: 'None or voxel edges.',
        patterns: 'Voxel grids, staircases, block terrain.',
        motion: 'Step-by-step movement, building up blocks.',
        dos: ['Think in cubes', 'Use grid layouts', 'Simulate Minecraft/Lego', 'Keep it chunky'],
        donts: ['Don\'t use smooth curves', 'Don\'t use high-res textures', 'Don\'t break the grid', 'Don\'t get too serious'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S45"
    style_name: "Voxel"
  color:
    bg:
      primary: "#87CEEB" # Sky blue
      ground: "#2ecc71"  # Grass green
    block:
      dirt: "#8B4513"
      stone: "#7f8c8d"
  radius:
    none: 0
  typography:
    font:
      primary: "VT323"
      secondary: "Press Start 2P"
\`\`\``,
    },
    'S46': {
        paletteStrategy: 'Pastel pinks, blues, yellows with black patterns.',
        typography: 'Geometrical Sans, quirky display fonts.',
        radiusPolicy: 'Mixed: some pills, some circles, some triangles.',
        shadowPolicy: 'Offset hard shadows (confetti style).',
        borderLanguage: 'Squiggles, zigzags, dots.',
        patterns: 'Confetti, bacteria shapes, grids, squiggles.',
        motion: 'Floating, bouncing, rotating.',
        dos: ['Use geometric shapes', 'Be playful', 'Mix patterns', 'Use asymmetry'],
        donts: ['Don\'t align everything', 'Don\'t be boring', 'Don\'t adhere to a strict grid', 'Don\'t use muted colors'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S46"
    style_name: "Abstract Memphis"
  color:
    bg:
      primary: "#FFF0F5"
    shape:
      pink: "#FF69B4"
      cyan: "#00CED1"
      yellow: "#FFD700"
      black: "#000000"
  radius:
    wild: "50% 20% / 10% 40%"
  shadow:
    hard: "8px 8px 0 #000"
  typography:
    font:
      primary: "Fredoka One"
      secondary: "Quicksand"
\`\`\``,
    },
    'S47': {
        paletteStrategy: 'Concrete greys, raw materials, metallic accents.',
        typography: 'Massive, bold, industrial Sans Serif.',
        radiusPolicy: 'Minimal or zero.',
        shadowPolicy: 'Deep, heavy shadows to show mass.',
        borderLanguage: 'Thick, structural borders.',
        patterns: 'Concrete textures, metal grids.',
        motion: 'Heavy impacts, slow sturdy movements.',
        dos: ['Use large text', 'Show structure', 'Use raw materials', 'Be imposing'],
        donts: ['Don\'t decorate', 'Don\'t be soft', 'Don\'t use delicate fonts', 'Don\'t hide the grid'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S47"
    style_name: "Brutalist 3D"
  color:
    bg:
      primary: "#D3D3D3" # Light Concrete
      secondary: "#A9A9A9" # Dark Concrete
    text:
      primary: "#111111"
      accent: "#FF4500" # Industrial Orange
  radius:
    none: 0
  shadow:
    deep: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff" # Neumorphic concrete? Or just hard shadow
  typography:
    font:
      primary: "Archivo Black"
      secondary: "Inter"
\`\`\``,
    },
    'S48': {
        paletteStrategy: 'Liquid gradients, iridescent colors, oil slicks.',
        typography: 'Warped or floating Sans Serif.',
        radiusPolicy: 'Organic, fluid shapes (blobs).',
        shadowPolicy: 'Soft, colored glows.',
        borderLanguage: 'None, edges defined by liquidity.',
        patterns: 'Lava lamp blobs, ripples, waves.',
        motion: 'Morphing, flowing, dripping.',
        dos: ['Use organic shapes', 'Use gradients', 'Make it flow', 'Simulate liquid'],
        donts: ['Don\'t use straight lines', 'Don\'t use solid flat colors', 'Don\'t be static', 'Don\'t use sharp corners'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S48"
    style_name: "Fluid 3D"
  color:
    bg:
      primary: "#000000"
    gradient:
      main: "linear-gradient(45deg, #FF00CC, #3333FF)"
  radius:
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%"
  typography:
    font:
      primary: "Comfortaa"
      secondary: "Varela Round"
\`\`\``,
    },
};
