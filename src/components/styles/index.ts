'use client';

import React, { lazy, ComponentType } from 'react';
import type { StyleComponentProps } from './types';

// ============================================
// 類型導出
// ============================================

export type { StyleComponentProps, DeviceMode, DesignTokens } from './types';
export { StyleRenderer } from './StyleRenderer';

// ============================================
// 動態載入器
// ============================================

type StyleComponent = ComponentType<StyleComponentProps>;

const styleComponentCache = new Map<string, React.LazyExoticComponent<StyleComponent>>();

const createLazyStyleComponent = (styleId: string): React.LazyExoticComponent<StyleComponent> => {
  if (styleComponentCache.has(styleId)) {
    return styleComponentCache.get(styleId)!;
  }

  const lazyComponent = lazy(async () => {
    const module = await import(`./${styleId}.tsx`);
    const Component = module[styleId] || module.default;
    return { default: Component };
  });

  styleComponentCache.set(styleId, lazyComponent);
  return lazyComponent;
};

// ============================================
// S01-S50 風格 ID 列表
// ============================================

const styleIds = [
  'S01TechMinimal', 'S02MinimalistMonochrome', 'S03Swiss', 'S04Brutalist',
  'S05JapaneseMinimal', 'S06Bauhaus', 'S07Glassmorphism', 'S08DarkModeElegance',
  'S09CorporateClean', 'S10Memphis', 'S11NeoBrutalism', 'S12DoodleSketch',
  'S13ArtDeco', 'S14ArtNouveau', 'S15Gothic', 'S16Cyberpunk',
  'S17Synthwave', 'S18Y2K', 'S19Luxury', 'S20Nature',
  'S21Solarpunk', 'S22Gold', 'S23Silver', 'S24Serif',
  'S25Startup', 'S26Enterprise', 'S27Fintech', 'S28Claymorphism',
  'S29CyberBio', 'S30AuroraBorealis',
];

// 延遲載入版本
export const lazyStyleComponents: Record<string, React.LazyExoticComponent<StyleComponent>> = {};

// 使用 S01-S30 短 ID 作為 key
styleIds.forEach((fullId) => {
  const shortId = fullId.match(/^S\d+/)![0]; // e.g. "S01"
  Object.defineProperty(lazyStyleComponents, shortId, {
    get: () => createLazyStyleComponent(fullId),
    enumerable: true,
  });
});

// ============================================
// 即時載入版本
// ============================================

import { S01TechMinimal } from './S01TechMinimal';
import { S02MinimalistMonochrome } from './S02MinimalistMonochrome';
import { S03Swiss } from './S03Swiss';
import { S04Brutalist } from './S04Brutalist';
import { S05JapaneseMinimal } from './S05JapaneseMinimal';
import { S06Bauhaus } from './S06Bauhaus';
import { S07Glassmorphism } from './S07Glassmorphism';
import { S08DarkModeElegance } from './S08DarkModeElegance';
import { S09CorporateClean } from './S09CorporateClean';
import { S10Memphis } from './S10Memphis';
import { S11NeoBrutalism } from './S11NeoBrutalism';
import { S12DoodleSketch } from './S12DoodleSketch';
import { S13ArtDeco } from './S13ArtDeco';
import { S14ArtNouveau } from './S14ArtNouveau';
import { S15Gothic } from './S15Gothic';
import { S16Cyberpunk } from './S16Cyberpunk';
import { S17Synthwave } from './S17Synthwave';
import { S18Y2K } from './S18Y2K';
import { S19Luxury } from './S19Luxury';
import { S20Nature } from './S20Nature';
import { S21Solarpunk } from './S21Solarpunk';
import { S22Gold } from './S22Gold';
import { S23Silver } from './S23Silver';
import { S24Serif } from './S24Serif';
import { S25Startup } from './S25Startup';
import { S26Enterprise } from './S26Enterprise';
import { S27Fintech } from './S27Fintech';
import { S28Claymorphism } from './S28Claymorphism';
import { S29CyberBio } from './S29CyberBio';
import { S30AuroraBorealis } from './S30AuroraBorealis';

// 使用新 ID (S01-S30) 直接對應元件
export const styleComponents: Record<string, React.FC<StyleComponentProps>> = {
  S01: S01TechMinimal,
  S02: S02MinimalistMonochrome,
  S03: S03Swiss,
  S04: S04Brutalist,
  S05: S05JapaneseMinimal,
  S06: S06Bauhaus,
  S07: S07Glassmorphism,
  S08: S08DarkModeElegance,
  S09: S09CorporateClean,
  S10: S10Memphis,
  S11: S11NeoBrutalism,
  S12: S12DoodleSketch,
  S13: S13ArtDeco,
  S14: S14ArtNouveau,
  S15: S15Gothic,
  S16: S16Cyberpunk,
  S17: S17Synthwave,
  S18: S18Y2K,
  S19: S19Luxury,
  S20: S20Nature,
  S21: S21Solarpunk,
  S22: S22Gold,
  S23: S23Silver,
  S24: S24Serif,
  S25: S25Startup,
  S26: S26Enterprise,
  S27: S27Fintech,
  S28: S28Claymorphism,
  S29: S29CyberBio,
  S30: S30AuroraBorealis,
};

// 導出所有元件
export {
  S01TechMinimal,
  S02MinimalistMonochrome,
  S03Swiss,
  S04Brutalist,
  S05JapaneseMinimal,
  S06Bauhaus,
  S07Glassmorphism,
  S08DarkModeElegance,
  S09CorporateClean,
  S10Memphis,
  S11NeoBrutalism,
  S12DoodleSketch,
  S13ArtDeco,
  S14ArtNouveau,
  S15Gothic,
  S16Cyberpunk,
  S17Synthwave,
  S18Y2K,
  S19Luxury,
  S20Nature,
  S21Solarpunk,
  S22Gold,
  S23Silver,
  S24Serif,
  S25Startup,
  S26Enterprise,
  S27Fintech,
  S28Claymorphism,
  S29CyberBio,
  S30AuroraBorealis,
};
