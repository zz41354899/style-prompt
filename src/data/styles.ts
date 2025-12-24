export interface StyleData {
  id: string;
  name: string;
  description: string;
  prompt?: string;
}

export const styles: StyleData[] = [
  {
    id: 'S01',
    name: 'Tech Minimal',
    description: 'Tech minimal style, clean and sleek interface design',
  },
  {
    id: 'S02',
    name: 'Minimalist Monochrome',
    description: 'Minimalist black and white editorial style, emphasizing typography and contrast',
  },
  {
    id: 'S03',
    name: 'Mondrian / De Stijl',
    description: 'Mondrian style, geometric color blocks and straight lines composition',
  },
  {
    id: 'S04',
    name: 'Swiss / International Typographic',
    description: 'Swiss International Typographic style, grid systems and sans-serif typography',
  },
  {
    id: 'S05',
    name: 'Brutalist',
    description: 'Brutalist, raw, bold, and unadorned design',
  },
  {
    id: 'S06',
    name: 'Cyberpunk',
    description: 'Cyberpunk, neon lights and futuristic tech aesthetic',
  },
  {
    id: 'S07',
    name: 'Retro 80s (Synthwave)',
    description: '80s retro synthwave, gradient neons and grid patterns',
  },
  {
    id: 'S08',
    name: 'Retro 60s–70s (Print Grain)',
    description: '60s-70s print style, vintage colors and grain texture',
  },
  {
    id: 'S09',
    name: 'Memphis',
    description: 'Memphis design, geometric shapes and vibrant colors',
  },
  {
    id: 'S10',
    name: 'Luxury Editorial',
    description: 'Luxury editorial style, elegant serif fonts and refined typography',
  },
  {
    id: 'S11',
    name: 'Japanese Minimal',
    description: 'Japanese minimalism, white space aesthetics and zen design',
  },
  {
    id: 'S12',
    name: 'Nature Organic',
    description: 'Natural organic style, soft curves and earth tone colors',
  },
  {
    id: 'S13',
    name: 'Material-ish',
    description: 'Material Design style, shadow layers and color systems',
  },
  {
    id: 'S14',
    name: 'Glassmorphism',
    description: 'Glassmorphism, frosted glass effects and transparent layers',
  },
  {
    id: 'S15',
    name: 'Neumorphism',
    description: 'Neumorphism design, soft shadows and embossed effects',
  },
  {
    id: 'S16',
    name: 'Terminal / Hacker',
    description: 'Terminal style, green text and hacker aesthetic',
  },
  {
    id: 'S17',
    name: 'Bauhaus Modernism',
    description: 'Bauhaus style, geometric forms and functional design',
  },
  {
    id: 'S18',
    name: 'Retro Pixel UI',
    description: 'Retro Pixel UI style, 8-bit aesthetic with pixel grid and dither vibes',
  },
  {
    id: 'S19',
    name: 'Aesthetic Harmony',
    description: 'Aesthetic-Usability Effect style, refined elegance with soft gradients and micro-interactions',
  },
  {
    id: 'S20',
    name: 'Aurora Borealis',
    description: 'Northern Lights style, flowing aurora gradients with ethereal glow effects',
  },
  {
    id: 'S21',
    name: 'Claymorphism',
    description: 'Soft clay-like design with tactile shadows and rounded forms',
  },
  {
    id: 'S22',
    name: 'Dark Mode Elegance',
    description: 'Sophisticated dark theme with high contrast and subtle glows',
  },
  {
    id: 'S23',
    name: 'Gradient Mesh',
    description: 'Complex gradient mesh patterns with vibrant color transitions',
  },
  {
    id: 'S24',
    name: 'Minimalist Line Art',
    description: 'Clean line-based design with geometric precision and negative space',
  },
  // Batch 5: Paper & Retro
  {
    id: 'S25',
    name: 'Paper Craft',
    description: 'Tearing effects, shadow layers, cut-out aesthetic',
  },
  {
    id: 'S26',
    name: 'Flat 2.0',
    description: 'Material 3 vibes, updated flat design with subtle depth',
  },
  {
    id: 'S27',
    name: 'Y2K Aesthetic',
    description: 'Chrome text, blobs, 2000s futurity',
  },
  {
    id: 'S28',
    name: 'Solarpunk',
    description: 'Eco-futurism, green technology, organic curves',
  },
  {
    id: 'S29',
    name: 'Art Deco',
    description: '1920s luxury, gold lines, geometric patterns',
  },
  {
    id: 'S30',
    name: 'Industrial',
    description: 'Concrete textures, yellow/black caution, brutalist utility',
  },
  // Batch 6: Tech & Classic
  {
    id: 'S31',
    name: 'Skeuomorphic',
    description: 'Leather stitching, realistic textures',
  },
  {
    id: 'S32',
    name: 'Windows 95',
    description: 'Classic OS gray buttons, bevels, pixel fonts',
  },
  {
    id: 'S33',
    name: 'Liquid Metal',
    description: 'Fluid chrome, mercury effects',
  },
  {
    id: 'S34',
    name: 'Holographic',
    description: 'Iridescent gradients, foil textures',
  },
  {
    id: 'S35',
    name: 'Blueprint',
    description: 'Technical drawing, blue background, white lines',
  },
  {
    id: 'S36',
    name: 'Chalkboard',
    description: 'Hand-drawn sketchy look, black board',
  },
  // Batch 7: Print & Media
  {
    id: 'S37',
    name: 'Collage',
    description: 'Mixed media, paper scraps, ransom note text',
  },
  {
    id: 'S38',
    name: 'Magazine Layout',
    description: 'Big typography, serif headers, editorial grids',
  },
  {
    id: 'S39',
    name: 'Newspaper',
    description: 'Columns, black & white, noise texture',
  },
  {
    id: 'S40',
    name: 'Receipt',
    description: 'Mono fonts, thermal paper look, zig-zag edges',
  },
  {
    id: 'S41',
    name: 'Ticket Stub',
    description: 'Perforated edges, barcode aesthetics',
  },
  {
    id: 'S42',
    name: 'Neon Sign',
    description: 'Dark brick background, glowing tubes',
  },
  // Batch 8: 3D & Abstract
  {
    id: 'S43',
    name: 'Low Poly',
    description: '3D geometric triangles, faceted look',
  },
  {
    id: 'S44',
    name: 'Isomorphic',
    description: '3D grid layout, isometric angles',
  },
  {
    id: 'S45',
    name: 'Abstract 3D',
    description: 'Smooth blobs, modern rendering',
  },
  {
    id: 'S46',
    name: 'Voxel',
    description: '3D cubes (Minecraft style but UI)',
  },
  {
    id: 'S47',
    name: 'Wireframe',
    description: '3D vector lines, technical web',
  },
  {
    id: 'S48',
    name: 'Pointillism',
    description: 'Dotted shading, stipple effect',
  },
  // Batch 9: Art & Illustration
  {
    id: 'S49',
    name: 'Pop Art',
    description: 'Halftone dots, vibrant comic colors',
  },
  {
    id: 'S50',
    name: 'Comic Book',
    description: 'Panels, speech bubbles, action lines',
  },
  {
    id: 'S51',
    name: 'Manga',
    description: 'Black & white speed lines, ink aesthetic',
  },
  {
    id: 'S52',
    name: 'Graffiti',
    description: 'Street art spray paint, grunge',
  },
  {
    id: 'S53',
    name: 'Sticker Bomb',
    description: 'Overlapping stickers, chaotic fun',
  },
  {
    id: 'S54',
    name: 'Tarot / Mystical',
    description: 'Gold thin lines, dark background, esoteric symbols',
  },
  // Batch 10: Nature & Geography
  {
    id: 'S55',
    name: 'Nordic / Scandi',
    description: 'Warm minimalist, wood tones, clean lines',
  },
  {
    id: 'S56',
    name: 'Mediterranean',
    description: 'Blue & white, tile patterns',
  },
  {
    id: 'S57',
    name: 'Tropical',
    description: 'Vibrant greens/yellows, plant motifs',
  },
  {
    id: 'S58',
    name: 'Desert / Dune',
    description: 'Sand tones, orange gradients, dry aesthetic',
  },
  {
    id: 'S59',
    name: 'Ocean / Deep Sea',
    description: 'Dark blue gradients, underwater glow',
  },
  {
    id: 'S60',
    name: 'Forest',
    description: 'Deep greens, organic textures',
  },
  // Batch 11: Materials & Textures
  {
    id: 'S61',
    name: 'Leather',
    description: 'Stitched edges, textured backgrounds',
  },
  {
    id: 'S62',
    name: 'Denim',
    description: 'Jean fabric texture, stitching',
  },
  {
    id: 'S63',
    name: 'Wood',
    description: 'Grain textures, natural feel',
  },
  {
    id: 'S64',
    name: 'Marble',
    description: 'Stone textures, classical luxury',
  },
  {
    id: 'S65',
    name: 'Concrete',
    description: 'Modern architectural, grey noise',
  },
  {
    id: 'S66',
    name: 'Felt / Fabric',
    description: 'Fuzzy textures, soft edges',
  },
  // Batch 12: Sci-Fi & Fantasy
  {
    id: 'S67',
    name: 'Steampunk',
    description: 'Brass, gears, clockwork',
  },
  {
    id: 'S68',
    name: 'Dieselpunk',
    description: 'Oil, steel, war-time aesthetic',
  },
  {
    id: 'S69',
    name: 'Atompunk',
    description: '1950s futuristic, Raygun Gothic',
  },
  {
    id: 'S70',
    name: 'Biopunk',
    description: 'Organic technology, genetic aesthetic',
  },
  {
    id: 'S71',
    name: 'Gothic',
    description: 'Dark, ornate, spooky, sharp edges',
  },
  {
    id: 'S72',
    name: 'Baroque',
    description: 'Gold, complex ornaments, classic luxury',
  },
  // Batch 13: Classic Art
  {
    id: 'S73',
    name: 'Renaissance',
    description: 'Parchment, sketch lines, classic proportions',
  },
  {
    id: 'S74',
    name: 'Impressionist',
    description: 'Brush strokes, painterly blurry',
  },
  {
    id: 'S75',
    name: 'Surrealist',
    description: 'Dreamy, weird juxtapositions',
  },
  {
    id: 'S76',
    name: 'Constructivism',
    description: 'Red/Black/White, bold angles',
  },
  {
    id: 'S77',
    name: 'Dada',
    description: 'Chaos, anti-art',
  },
  {
    id: 'S78',
    name: 'Abstract Geometric',
    description: 'Bauhaus evolution, colorful shapes',
  },
  // Batch 14: Corporate & Industry
  {
    id: 'S79',
    name: 'Corporate Clean',
    description: 'Stripe/SaaS generic, very safe',
  },
  {
    id: 'S80',
    name: 'Startup Vibrant',
    description: 'Gradient text, rounded buttons',
  },
  {
    id: 'S81',
    name: 'Enterprise Blue',
    description: 'Trustworthy, conservative',
  },
  {
    id: 'S82',
    name: 'Fintech Trust',
    description: 'Purple/Green, data-heavy',
  },
  {
    id: 'S83',
    name: 'Health / Medical',
    description: 'Teal/White, clean, sterile',
  },
  {
    id: 'S84',
    name: 'Eco / Green',
    description: 'Sustainable, leaves, earth tones',
  },
  // Batch 15: Vibrant & Luxury
  {
    id: 'S85',
    name: 'Kids / Playful',
    description: 'Rounded, primary colors, big buttons',
  },
  {
    id: 'S86',
    name: 'Gamer / RGB',
    description: 'Red/Black + RGB lighting',
  },
  {
    id: 'S87',
    name: 'Luxury Gold',
    description: 'Black & Gold, serif fonts',
  },
  {
    id: 'S88',
    name: 'Luxury Silver',
    description: 'White & Silver, platinum look',
  },
  {
    id: 'S89',
    name: 'Minimalist Serif',
    description: 'Kinfolk style, elegant',
  },
  {
    id: 'S90',
    name: 'Brutalist Color',
    description: 'Colorful anti-design, clashing colors',
  },
  // Batch 16: Digital & Data
  {
    id: 'S91',
    name: 'E-ink',
    description: 'High contrast grayscale, paper display',
  },
  {
    id: 'S92',
    name: 'OLED',
    description: 'Pure black backgrounds, vibrant accents',
  },
  {
    id: 'S93',
    name: 'Terminal Retro',
    description: 'Amber screen (variant of S16)',
  },
  {
    id: 'S94',
    name: 'Code Editor',
    description: 'VS Code / Dracula theme colors',
  },
  {
    id: 'S95',
    name: 'Data Dashboard',
    description: 'Dense data grids, charts',
  },
  {
    id: 'S96',
    name: 'HUD',
    description: 'Heads Up Display, sci-fi overlays',
  },
  // Batch 17: Final Polish
  {
    id: 'S97',
    name: 'Frosted Glass (Strong)',
    description: 'Heavy blur, iOS style',
  },
  {
    id: 'S98',
    name: 'Acrylic',
    description: 'Windows Fluent Design, translucent',
  },
  {
    id: 'S99',
    name: 'Material 3',
    description: 'Pastel colors, dynamic rounding',
  },
  {
    id: 'S100',
    name: 'The Ultimate',
    description: 'A "Meta" style combining elements effectively',
  },
];
