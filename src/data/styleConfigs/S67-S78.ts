import type { StyleDNAConfig } from './types';

export const S67_S72_Configs: Record<string, StyleDNAConfig> = {
    'S67': {
        paletteStrategy: 'Black, cyan, electric blue, HUD green.',
        typography: 'Monospace or futuristic sans.',
        radiusPolicy: 'Angled, chamfered or straight.',
        shadowPolicy: 'Glows, no realistic shadows.',
        borderLanguage: 'Targeting reticles, brackets.',
        patterns: 'Hexgrids, circuit lines.',
        motion: 'Glitches, scanning, instant snappy.',
        dos: ['Use HUD elements', 'Scan lines', 'Data density', 'Blue/Green glows'],
        donts: ['Don\'t be organic', 'Don\'t be slow', 'Don\'t use serif'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S67"
    style_name: "Cybernetic"
  color:
    bg:
      primary: "#0d1117"
    accent:
      hud: "#00ff41"
      warn: "#ff3d00"
\`\`\``,
    },
    'S68': {
        paletteStrategy: 'Brass, copper, dark wood, rich velvet red.',
        typography: 'Victorian ornate serif.',
        radiusPolicy: 'Ornate scrolls and mechanical gears.',
        shadowPolicy: 'Deep moody shadows.',
        borderLanguage: 'Pipes, gears, rivets.',
        patterns: 'Damask, smoke, gear teeth.',
        motion: 'Mechanical ticking, rotating gears.',
        dos: ['Use textures', 'Gears/Cogs', 'Warm metallic', 'Victorian flair'],
        donts: ['Don\'t use neon', 'Don\'t be clean', 'Don\'t use plastic'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S68"
    style_name: "Steampunk"
  color:
    bg:
      primary: "#2b2118"
    accent:
      brass: "#c19a6b"
      copper: "#b87333"
\`\`\``,
    },
    'S69': {
        paletteStrategy: 'Deep purple, bioluminescent blue/pink.',
        typography: 'Alien hieroglyphs or flowy curves.',
        radiusPolicy: 'Biological curves, slime.',
        shadowPolicy: 'Internal glow.',
        borderLanguage: 'Membrane-like.',
        patterns: 'Cells, veins, nebula.',
        motion: 'Pulsing, breathing.',
        dos: ['Look organic', 'Alien flora', 'Mysterious lighting', 'Glow'],
        donts: ['Don\'t stick to grid', 'Don\'t use earth tones', 'Don\'t be geometric'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S69"
    style_name: "Alien"
  color:
    bg:
      primary: "#1a0b2e"
    accent:
      bio: "#d500f9"
      slime: "#76ff03"
\`\`\``,
    },
    'S70': {
        paletteStrategy: 'Parchment beige, ink black, magical gold/purple.',
        typography: 'Calligraphy or fantasy serif.',
        radiusPolicy: 'Hand drawn scrolls.',
        shadowPolicy: 'Candlelight flickering.',
        borderLanguage: 'Runes, worn paper edges.',
        patterns: 'Magic circles, stars.',
        motion: 'Sparkles, floating dust, writing.',
        dos: ['Use parchment texture', 'Magical effects', 'Old fonts', 'Runes'],
        donts: ['Don\'t look modern', 'Don\'t use sans-serif', 'Don\'t be sterile'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S70"
    style_name: "Fantasy"
  color:
    bg:
      primary: "#f5e6ca"
    accent:
      magic: "#9c27b0"
      gold: "#ffd700"
\`\`\``,
    },
    'S71': {
        paletteStrategy: 'Rust orange, olive green, dirt brown, slate grey.',
        typography: 'Stencil or distressed type.',
        radiusPolicy: 'Broken, uneven.',
        shadowPolicy: 'Gritty, dirty.',
        borderLanguage: 'Rusted metal, hazard tape.',
        patterns: 'Scratches, grime, hazard stripes.',
        motion: 'Jittery, failing tech.',
        dos: ['Look dirty', 'Survival theme', 'Distressed textures', 'Grunge'],
        donts: ['Don\'t be clean', 'Don\'t be perfect', 'Don\'t use bright primary colors'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S71"
    style_name: "Wasteland"
  color:
    bg:
      primary: "#3e2723"
    accent:
      rust: "#bf360c"
      hazard: "#ffea00"
\`\`\``,
    },
    'S72': {
        paletteStrategy: 'Stark white, black panels, glowing blue/orange indicators.',
        typography: 'Clean futuristic sans (Eurostile).',
        radiusPolicy: 'Pill shapes and perfect circles.',
        shadowPolicy: 'Soft clean ambient occlusion.',
        borderLanguage: 'Panel lines.',
        patterns: 'Grid lines, technical readouts.',
        motion: 'Smooth sliding panels, FUI.',
        dos: ['Clean sci-fi', 'Panel gaps', 'Functional UI', 'Space station'],
        donts: ['Don\'t be dirty', 'Don\'t be chaotic', 'Don\'t use serif'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S72"
    style_name: "Starship"
  color:
    bg:
      primary: "#eceff1"
    accent:
      panel: "#263238"
      light: "#00b0ff"
\`\`\``,
    },
};

export const S73_S78_Configs: Record<string, StyleDNAConfig> = {
    'S73': {
        paletteStrategy: 'Pastel dabs, vibrant light, mixing colors.',
        typography: 'Artistic brush font or elegant serif.',
        radiusPolicy: 'Paint daubs.',
        shadowPolicy: 'Painted shadows.',
        borderLanguage: 'Brush strokes.',
        patterns: 'Canvas texture, paint strokes.',
        motion: 'Fading in, painting on.',
        dos: ['Look painted', 'Light and airy', 'Visible strokes', 'Monet vibes'],
        donts: ['Don\'t be sharp', 'Don\'t be digital', 'Don\'t use black'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S73"
    style_name: "Impressionist"
  color:
    bg:
      primary: "#e1f5fe"
    accent:
      paint: "#81d4fa"
      sun: "#fff59d"
\`\`\``,
    },
    'S74': {
        paletteStrategy: 'Muted earth tones, browns, greys, ochre.',
        typography: 'Blocky sans serif.',
        radiusPolicy: 'Sharp angles, fragmented geometry.',
        shadowPolicy: 'Hard planes.',
        borderLanguage: 'Facet lines.',
        patterns: 'Triangles, shattered planes.',
        motion: 'Shift and reassemble.',
        dos: ['Geometric abstraction', 'Multiple perspectives', 'Picasso vibes', 'Fragment'],
        donts: ['Don\'t be realistic', 'Don\'t be smooth', 'Don\'t be curvy'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S74"
    style_name: "Cubist"
  color:
    bg:
      primary: "#d7ccc8"
    accent:
      dark: "#5d4037"
      ochre: "#e65100"
\`\`\``,
    },
    'S75': {
        paletteStrategy: 'Dreamlike gradients, odd juxtapositions.',
        typography: 'Surreal distorted type.',
        radiusPolicy: 'Melting shapes.',
        shadowPolicy: 'Long impossible shadows.',
        borderLanguage: 'Liquid edges.',
        patterns: 'Clouds, melting clocks, eyes.',
        motion: 'Morphing, floating.',
        dos: ['Be weird', 'Dali vibes', 'Dream logic', 'Unexpected'],
        donts: ['Don\'t be boring', 'Don\'t be standard', 'Don\'t make sense'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S75"
    style_name: "Surrealist"
  color:
    bg:
      primary: "#f3e5f5"
    accent:
      dream: "#7b1fa2"
      sky: "#29b6f6"
\`\`\``,
    },
    'S76': {
        paletteStrategy: 'Sepia ink, parchment, faded red chalk.',
        typography: 'Humanist serif or handwriting.',
        radiusPolicy: 'Hand drawn circles.',
        shadowPolicy: 'Hatching lines.',
        borderLanguage: 'Ink lines.',
        patterns: 'Anatomical sketches, grid lines.',
        motion: 'Drawing in, ink heavy.',
        dos: ['Da Vinci vibes', 'Sketchy', 'Intellectual', 'Historical'],
        donts: ['Don\'t use modern colors', 'Don\'t be digital', 'Don\'t be shiny'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S76"
    style_name: "Renaissance"
  color:
    bg:
      primary: "#fff8e1"
    accent:
      ink: "#3e2723"
      chalk: "#b71c1c"
\`\`\``,
    },
    'S77': {
        paletteStrategy: 'Indigo, prussian blue, salmon pink, washi white.',
        typography: 'Brush calligraphy.',
        radiusPolicy: 'Soft curves.',
        shadowPolicy: 'Flat layers.',
        borderLanguage: 'Black outlines.',
        patterns: 'Waves (Seigaiha), clouds.',
        motion: 'Slide ins, reveal.',
        dos: ['Japanese aesthetic', 'Flat colors', 'Woodblock texture', 'Nature'],
        donts: ['Don\'t use gradients', 'Don\'t be 3D', 'Don\'t be chaotic'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S77"
    style_name: "Ukiyo-e"
  color:
    bg:
      primary: "#eceff1"
    accent:
      indigo: "#1a237e"
      salmon: "#ff8a65"
\`\`\``,
    },
    'S78': {
        paletteStrategy: 'Dark stone greys, deep reds, black.',
        typography: 'Blackletter / Old English.',
        radiusPolicy: 'Pointed arches (Ogee).',
        shadowPolicy: 'Deep castle shadows.',
        borderLanguage: 'Stone traceries.',
        patterns: 'Architectural details, quatrefoils.',
        motion: 'Slow, solemn.',
        dos: ['Medieval', 'Dark mode', 'Ornate', 'Verticality'],
        donts: ['Don\'t be cute', 'Don\'t be bright', 'Don\'t be modern'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S78"
    style_name: "Gothic"
  color:
    bg:
      primary: "#212121"
    accent:
      stone: "#757575"
      blood: "#b71c1c"
\`\`\``,
    },
};
