import React from 'react';

// Import all components for the styleComponents object
import { S01TechMinimal } from './S01TechMinimal';
import { S02MinimalistMonochrome } from './S02MinimalistMonochrome';
import { S03Mondrian } from './S03Mondrian';
import { S04Swiss } from './S04Swiss';
import { S05Brutalist } from './S05Brutalist';
import { S06Cyberpunk } from './S06Cyberpunk';
import { S07Synthwave } from './S07Synthwave';
import { S08Retro70s } from './S08Retro70s';
import { S09Memphis } from './S09Memphis';
import { S10LuxuryEditorial } from './S10LuxuryEditorial';
import { S11JapaneseMinimal } from './S11JapaneseMinimal';
import { S12NatureOrganic } from './S12NatureOrganic';
import { S13Material } from './S13Material';
import { S14Glassmorphism } from './S14Glassmorphism';
import { S15Neumorphism } from './S15Neumorphism';
import { S16Terminal } from './S16Terminal';
import { S17BauhausModernism } from './S17BauhausModernism';
import { S18RetroPixelUI } from './S18RetroPixelUI';

// Re-export all components
export { S01TechMinimal } from './S01TechMinimal';
export { S02MinimalistMonochrome } from './S02MinimalistMonochrome';
export { S03Mondrian } from './S03Mondrian';
export { S04Swiss } from './S04Swiss';
export { S05Brutalist } from './S05Brutalist';
export { S06Cyberpunk } from './S06Cyberpunk';
export { S07Synthwave } from './S07Synthwave';
export { S08Retro70s } from './S08Retro70s';
export { S09Memphis } from './S09Memphis';
export { S10LuxuryEditorial } from './S10LuxuryEditorial';
export { S11JapaneseMinimal } from './S11JapaneseMinimal';
export { S12NatureOrganic } from './S12NatureOrganic';
export { S13Material } from './S13Material';
export { S14Glassmorphism } from './S14Glassmorphism';
export { S15Neumorphism } from './S15Neumorphism';
export { S16Terminal } from './S16Terminal';
export { S17BauhausModernism } from './S17BauhausModernism';
export { S18RetroPixelUI } from './S18RetroPixelUI';

export const styleComponents: Record<string, React.FC<{ deviceMode?: 'desktop' | 'tablet' | 'mobile' }>> = {
  S01: S01TechMinimal,
  S02: S02MinimalistMonochrome,
  S03: S03Mondrian,
  S04: S04Swiss,
  S05: S05Brutalist,
  S06: S06Cyberpunk,
  S07: S07Synthwave,
  S08: S08Retro70s,
  S09: S09Memphis,
  S10: S10LuxuryEditorial,
  S11: S11JapaneseMinimal,
  S12: S12NatureOrganic,
  S13: S13Material,
  S14: S14Glassmorphism,
  S15: S15Neumorphism,
  S16: S16Terminal,
  S17: S17BauhausModernism,
  S18: S18RetroPixelUI,
};
