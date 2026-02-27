'use client';

import React, { lazy, Suspense, ComponentType } from 'react';
import type { StyleComponentProps } from './types';

// ============================================
// 靜態引入 (保持向後相容)
// ============================================

// 直接 re-export 類型
export type { StyleComponentProps, DeviceMode, DesignTokens } from './types';

// 動態載入元件
export { StyleRenderer } from './StyleRenderer';

// ============================================
// 動態載入器
// ============================================

type StyleComponent = ComponentType<StyleComponentProps>;

// 風格元件快取
const styleComponentCache = new Map<string, React.LazyExoticComponent<StyleComponent>>();

/**
 * 建立動態載入的風格元件
 */
const createLazyStyleComponent = (styleId: string): React.LazyExoticComponent<StyleComponent> => {
  if (styleComponentCache.has(styleId)) {
    return styleComponentCache.get(styleId)!;
  }

  const lazyComponent = lazy(async () => {
    const module = await import(`./${styleId}.tsx`);
    // 嘗試多種 export 名稱格式
    const componentName = styleId.replace(/^S(\d+)/, 'S$1');
    const Component = module[componentName] || module.default;
    return { default: Component };
  });

  styleComponentCache.set(styleId, lazyComponent);
  return lazyComponent;
};

// ============================================
// 動態風格元件映射
// ============================================

// 生成 S01 - S101 的風格 ID
const generateStyleIds = (): string[] => {
  return Array.from({ length: 101 }, (_, i) => {
    const num = i + 1;
    return num < 10 ? `S0${num}` : `S${num}`;
  });
};

// 動態風格元件映射 (延遲載入版本)
export const lazyStyleComponents: Record<string, React.LazyExoticComponent<StyleComponent>> = {};

generateStyleIds().forEach((id) => {
  Object.defineProperty(lazyStyleComponents, id.replace('S0', 'S').replace(/^S(\d)$/, 'S0$1'), {
    get: () => createLazyStyleComponent(id),
    enumerable: true,
  });
});

// ============================================
// 即時載入版本 (向後相容)
// 警告: 這會導入所有元件，影響 bundle 大小
// ============================================

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
import { S19AestheticHarmony } from './S19AestheticHarmony';
import { S20AuroraBorealis } from './S20AuroraBorealis';
import { S21Claymorphism } from './S21Claymorphism';
import { S22DarkModeElegance } from './S22DarkModeElegance';
import { S23DoodleSketch } from './S23DoodleSketch';
import { S24MinimalistLineArt } from './S24MinimalistLineArt';
import { S25PaperCraft } from './S25PaperCraft';
import { S26Flat2 } from './S26Flat2';
import { S27Y2KAesthetic } from './S27Y2KAesthetic';
import { S28Solarpunk } from './S28Solarpunk';
import { S29ArtDeco } from './S29ArtDeco';
import { S30Industrial } from './S30Industrial';
import { S31Skeuomorphic } from './S31Skeuomorphic';
import { S32Windows95 } from './S32Windows95';
import { S33LiquidMetal } from './S33LiquidMetal';
import { S34Holographic } from './S34Holographic';
import { S35Blueprint } from './S35Blueprint';
import { S36Chalkboard } from './S36Chalkboard';
import { S37Newspaper } from './S37Newspaper';
import { S38Magazine } from './S38Magazine';
import { S39ComicBook } from './S39ComicBook';
import { S40Postcard } from './S40Postcard';
import { S41Polaroid } from './S41Polaroid';
import { S42TicketStub } from './S42TicketStub';
import { S43LowPoly } from './S43LowPoly';
import { S44Isometric } from './S44Isometric';
import { S45Voxel } from './S45Voxel';
import { S46AbstractMemphis } from './S46AbstractMemphis';
import { S47Brutalist3D } from './S47Brutalist3D';
import { S48Fluid3D } from './S48Fluid3D';
import { S49Watercolor } from './S49Watercolor';
import { S50Collage } from './S50Collage';
import { S51HandDrawn } from './S51HandDrawn';
import { S52PopArt } from './S52PopArt';
import { S53Graffiti } from './S53Graffiti';
import { S54ArtNouveau } from './S54ArtNouveau';
import { S55Oceanic } from './S55Oceanic';
import { S56Forest } from './S56Forest';
import { S57Desert } from './S57Desert';
import { S58Polar } from './S58Polar';
import { S59Jungle } from './S59Jungle';
import { S60Volcanic } from './S60Volcanic';
import { S61Leather } from './S61Leather';
import { S62Denim } from './S62Denim';
import { S63BrushedSteel } from './S63BrushedSteel';
import { S64CarbonFiber } from './S64CarbonFiber';
import { S65StainedGlass } from './S65StainedGlass';
import { S66Knitwear } from './S66Knitwear';
import { S67Cybernetic } from './S67Cybernetic';
import { S68Steampunk } from './S68Steampunk';
import { S69Alien } from './S69Alien';
import { S70Fantasy } from './S70Fantasy';
import { S71Wasteland } from './S71Wasteland';
import { S72Starship } from './S72Starship';
import { S73Impressionist } from './S73Impressionist';
import { S74Cubist } from './S74Cubist';
import { S75Surrealist } from './S75Surrealist';
import { S76Renaissance } from './S76Renaissance';
import { S77Ukiyoe } from './S77Ukiyoe';
import { S78Gothic } from './S78Gothic';
import { S79CorporateClean } from './S79CorporateClean';
import { S80StartupVibrant } from './S80StartupVibrant';
import { S81EnterpriseBlue } from './S81EnterpriseBlue';
import { S82FintechTrust } from './S82FintechTrust';
import { S83HealthMedical } from './S83HealthMedical';
import { S84EcoGreen } from './S84EcoGreen';
import { S85KidsPlayful } from './S85KidsPlayful';
import { S86GamerRGB } from './S86GamerRGB';
import { S87LuxuryGold } from './S87LuxuryGold';
import { S88LuxurySilver } from './S88LuxurySilver';
import { S89MinimalistSerif } from './S89MinimalistSerif';
import { S90BrutalistColor } from './S90BrutalistColor';
import { S91EInk } from './S91EInk';
import { S92OLEDBlack } from './S92OLEDBlack';
import { S93TerminalRetro } from './S93TerminalRetro';
import { S94CodeEditor } from './S94CodeEditor';
import { S95DataDashboard } from './S95DataDashboard';
import { S96SciFiHUD } from './S96SciFiHUD';
import { S97FrostedGlass } from './S97FrostedGlass';
import { S98AcrylicFluid } from './S98AcrylicFluid';
import { S99MaterialYou } from './S99MaterialYou';
import { S100TheUltimate } from './S100TheUltimate';
import { S101ChineseInkWash } from './S101ChineseInkWash';

// Pro 元件導入
import { S01TechMinimalPro } from './pro/S01TechMinimalPro';
import { S02MinimalistMonochromePro } from './pro/S02MinimalistMonochromePro';
import { S03MondrianPro } from './pro/S03MondrianPro';
import { S04SwissPro } from './pro/S04SwissPro';
import { S05BrutalistPro } from './pro/S05BrutalistPro';
import { S06CyberpunkPro } from './pro/S06CyberpunkPro';
import { S07OrganicPro } from './pro/S07OrganicPro';
import { S08Retro70sPro } from './pro/S08Retro70sPro';
import { S09MemphisPro } from './pro/S09MemphisPro';
import { S10LuxuryEditorialPro } from './pro/S10LuxuryEditorialPro';
import { S11JapaneseMinimalPro } from './pro/S11JapaneseMinimalPro';
import { S12NatureOrganicPro } from './pro/S12NatureOrganicPro';
import { S13MaterialPro } from './pro/S13MaterialPro';
import { S14GlassmorphismPro } from './pro/S14GlassmorphismPro';
import { S15NeumorphismPro } from './pro/S15NeumorphismPro';
import { S16TerminalPro } from './pro/S16TerminalPro';
import { S17BauhausModernismPro } from './pro/S17BauhausModernismPro';
import { S18RetroPixelUIPro } from './pro/S18RetroPixelUIPro';
import { S19AestheticHarmonyPro } from './pro/S19AestheticHarmonyPro';
import { S20AuroraBorealisPro } from './pro/S20AuroraBorealisPro';
import { S21ClaymorphismPro } from './pro/S21ClaymorphismPro';
import { S22DarkModeElegancePro } from './pro/S22DarkModeElegancePro';
import { S23DoodleSketchPro } from './pro/S23DoodleSketchPro';
import { S24MinimalistLineArtPro } from './pro/S24MinimalistLineArtPro';
import { S25PaperCraftPro } from './pro/S25PaperCraftPro';
import { S26Flat2Pro } from './pro/S26Flat2Pro';
import { S27Y2KAestheticPro } from './pro/S27Y2KAestheticPro';
import { S28SolarpunkPro } from './pro/S28SolarpunkPro';
import { S29ArtDecoPro } from './pro/S29ArtDecoPro';
import { S30IndustrialPro } from './pro/S30IndustrialPro';
import { S31SkeuomorphicPro } from './pro/S31SkeuomorphicPro';
import { S32Windows95Pro } from './pro/S32Windows95Pro';
import { S33LiquidMetalPro } from './pro/S33LiquidMetalPro';
import { S34HolographicPro } from './pro/S34HolographicPro';
import { S35BlueprintPro } from './pro/S35BlueprintPro';
import { S36ChalkboardPro } from './pro/S36ChalkboardPro';
import { S37NewspaperPro } from './pro/S37NewspaperPro';
import { S38MagazinePro } from './pro/S38MagazinePro';
import { S39ComicBookPro } from './pro/S39ComicBookPro';
import { S40PostcardPro } from './pro/S40PostcardPro';
import { S41PolaroidPro } from './pro/S41PolaroidPro';
import { S42TicketStubPro } from './pro/S42TicketStubPro';
import { S43LowPolyPro } from './pro/S43LowPolyPro';
import { S44IsometricPro } from './pro/S44IsometricPro';
import { S45VoxelPro } from './pro/S45VoxelPro';
import { S46AbstractMemphisPro } from './pro/S46AbstractMemphisPro';
import { S47Brutalist3DPro } from './pro/S47Brutalist3DPro';
import { S48Fluid3DPro } from './pro/S48Fluid3DPro';
import { S49WatercolorPro } from './pro/S49WatercolorPro';
import { S50CollagePro } from './pro/S50CollagePro';
import { S51HandDrawnPro } from './pro/S51HandDrawnPro';
import { S52PopArtPro } from './pro/S52PopArtPro';
import { S53GraffitiPro } from './pro/S53GraffitiPro';
import { S54ArtNouveauPro } from './pro/S54ArtNouveauPro';
import { S55OceanicPro } from './pro/S55OceanicPro';
import { S56ForestPro } from './pro/S56ForestPro';
import { S57DesertPro } from './pro/S57DesertPro';
import { S58PolarPro } from './pro/S58PolarPro';
import { S59JunglePro } from './pro/S59JunglePro';
import { S60VolcanicPro } from './pro/S60VolcanicPro';
import { S61LeatherPro } from './pro/S61LeatherPro';
import { S62DenimPro } from './pro/S62DenimPro';
import { S63BrushedSteelPro } from './pro/S63BrushedSteelPro';
import { S64CarbonFiberPro } from './pro/S64CarbonFiberPro';
import { S65StainedGlassPro } from './pro/S65StainedGlassPro';
import { S66KnitwearPro } from './pro/S66KnitwearPro';
import { S67CyberneticPro } from './pro/S67CyberneticPro';
import { S68SteampunkPro } from './pro/S68SteampunkPro';
import { S69AlienPro } from './pro/S69AlienPro';
import { S70FantasyPro } from './pro/S70FantasyPro';
import { S71WastelandPro } from './pro/S71WastelandPro';
import { S72StarshipPro } from './pro/S72StarshipPro';
import { S73ImpressionistPro } from './pro/S73ImpressionistPro';
import { S74CubistPro } from './pro/S74CubistPro';
import { S75SurrealistPro } from './pro/S75SurrealistPro';
import { S76RenaissancePro } from './pro/S76RenaissancePro';
import { S77UkiyoePro } from './pro/S77UkiyoePro';
import { S78GothicPro } from './pro/S78GothicPro';
import { S79CorporateCleanPro } from './pro/S79CorporateCleanPro';
import { S80StartupVibrantPro } from './pro/S80StartupVibrantPro';
import { S81EnterpriseBluePro } from './pro/S81EnterpriseBluePro';
import { S82FintechTrustPro } from './pro/S82FintechTrustPro';
import { S83HealthMedicalPro } from './pro/S83HealthMedicalPro';
import { S84EcoGreenPro } from './pro/S84EcoGreenPro';
import { S85KidsPlayfulPro } from './pro/S85KidsPlayfulPro';
import { S86GamerRGBPro } from './pro/S86GamerRGBPro';
import { S87LuxuryGoldPro } from './pro/S87LuxuryGoldPro';
import { S88LuxurySilverPro } from './pro/S88LuxurySilverPro';
import { S89MinimalistSerifPro } from './pro/S89MinimalistSerifPro';
import { S90BrutalistColorPro } from './pro/S90BrutalistColorPro';
import { S91EInkPro } from './pro/S91EInkPro';
import { S92OLEDBlackPro } from './pro/S92OLEDBlackPro';
import { S93TerminalRetroPro } from './pro/S93TerminalRetroPro';
import { S94CodeEditorPro } from './pro/S94CodeEditorPro';
import { S95DataDashboardPro } from './pro/S95DataDashboardPro';
import { S96SciFiHUDPro } from './pro/S96SciFiHUDPro';
import { S97FrostedGlassPro } from './pro/S97FrostedGlassPro';
import { S98AcrylicFluidPro } from './pro/S98AcrylicFluidPro';
import { S99MaterialYouPro } from './pro/S99MaterialYouPro';
import { S100TheUltimatePro } from './pro/S100TheUltimatePro';
import { S101ChineseInkWashPro } from './pro/S101ChineseInkWashPro';

// ============================================
// 向後相容的靜態映射
// ============================================

export const styleComponents: Record<string, React.FC<StyleComponentProps>> = {
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
  S19: S19AestheticHarmony,
  S20: S20AuroraBorealis,
  S21: S21Claymorphism,
  S22: S22DarkModeElegance,
  S23: S23DoodleSketch,
  S24: S24MinimalistLineArt,
  S25: S25PaperCraft,
  S26: S26Flat2,
  S27: S27Y2KAesthetic,
  S28: S28Solarpunk,
  S29: S29ArtDeco,
  S30: S30Industrial,
  S31: S31Skeuomorphic,
  S32: S32Windows95,
  S33: S33LiquidMetal,
  S34: S34Holographic,
  S35: S35Blueprint,
  S36: S36Chalkboard,
  S37: S37Newspaper,
  S38: S38Magazine,
  S39: S39ComicBook,
  S40: S40Postcard,
  S41: S41Polaroid,
  S42: S42TicketStub,
  S43: S43LowPoly,
  S44: S44Isometric,
  S45: S45Voxel,
  S46: S46AbstractMemphis,
  S47: S47Brutalist3D,
  S48: S48Fluid3D,
  S49: S49Watercolor,
  S50: S50Collage,
  S51: S51HandDrawn,
  S52: S52PopArt,
  S53: S53Graffiti,
  S54: S54ArtNouveau,
  S55: S55Oceanic,
  S56: S56Forest,
  S57: S57Desert,
  S58: S58Polar,
  S59: S59Jungle,
  S60: S60Volcanic,
  S61: S61Leather,
  S62: S62Denim,
  S63: S63BrushedSteel,
  S64: S64CarbonFiber,
  S65: S65StainedGlass,
  S66: S66Knitwear,
  S67: S67Cybernetic,
  S68: S68Steampunk,
  S69: S69Alien,
  S70: S70Fantasy,
  S71: S71Wasteland,
  S72: S72Starship,
  S73: S73Impressionist,
  S74: S74Cubist,
  S75: S75Surrealist,
  S76: S76Renaissance,
  S77: S77Ukiyoe,
  S78: S78Gothic,
  S79: S79CorporateClean,
  S80: S80StartupVibrant,
  S81: S81EnterpriseBlue,
  S82: S82FintechTrust,
  S83: S83HealthMedical,
  S84: S84EcoGreen,
  S85: S85KidsPlayful,
  S86: S86GamerRGB,
  S87: S87LuxuryGold,
  S88: S88LuxurySilver,
  S89: S89MinimalistSerif,
  S90: S90BrutalistColor,
  S91: S91EInk,
  S92: S92OLEDBlack,
  S93: S93TerminalRetro,
  S94: S94CodeEditor,
  S95: S95DataDashboard,
  S96: S96SciFiHUD,
  S97: S97FrostedGlass,
  S98: S98AcrylicFluid,
  S99: S99MaterialYou,
  S100: S100TheUltimate,
  S101: S101ChineseInkWash,
};

// Pro 元件映射 (S01-S101)
export const styleComponentsPro: Record<string, React.FC<StyleComponentProps>> = {
  S01: S01TechMinimalPro,
  S02: S02MinimalistMonochromePro,
  S03: S03MondrianPro,
  S04: S04SwissPro,
  S05: S05BrutalistPro,
  S06: S06CyberpunkPro,
  S07: S07OrganicPro,
  S08: S08Retro70sPro,
  S09: S09MemphisPro,
  S10: S10LuxuryEditorialPro,
  S11: S11JapaneseMinimalPro,
  S12: S12NatureOrganicPro,
  S13: S13MaterialPro,
  S14: S14GlassmorphismPro,
  S15: S15NeumorphismPro,
  S16: S16TerminalPro,
  S17: S17BauhausModernismPro,
  S18: S18RetroPixelUIPro,
  S19: S19AestheticHarmonyPro,
  S20: S20AuroraBorealisPro,
  S21: S21ClaymorphismPro,
  S22: S22DarkModeElegancePro,
  S23: S23DoodleSketchPro,
  S24: S24MinimalistLineArtPro,
  S25: S25PaperCraftPro,
  S26: S26Flat2Pro,
  S27: S27Y2KAestheticPro,
  S28: S28SolarpunkPro,
  S29: S29ArtDecoPro,
  S30: S30IndustrialPro,
  S31: S31SkeuomorphicPro,
  S32: S32Windows95Pro,
  S33: S33LiquidMetalPro,
  S34: S34HolographicPro,
  S35: S35BlueprintPro,
  S36: S36ChalkboardPro,
  S37: S37NewspaperPro,
  S38: S38MagazinePro,
  S39: S39ComicBookPro,
  S40: S40PostcardPro,
  S41: S41PolaroidPro,
  S42: S42TicketStubPro,
  S43: S43LowPolyPro,
  S44: S44IsometricPro,
  S45: S45VoxelPro,
  S46: S46AbstractMemphisPro,
  S47: S47Brutalist3DPro,
  S48: S48Fluid3DPro,
  S49: S49WatercolorPro,
  S50: S50CollagePro,
  S51: S51HandDrawnPro,
  S52: S52PopArtPro,
  S53: S53GraffitiPro,
  S54: S54ArtNouveauPro,
  S55: S55OceanicPro,
  S56: S56ForestPro,
  S57: S57DesertPro,
  S58: S58PolarPro,
  S59: S59JunglePro,
  S60: S60VolcanicPro,
  S61: S61LeatherPro,
  S62: S62DenimPro,
  S63: S63BrushedSteelPro,
  S64: S64CarbonFiberPro,
  S65: S65StainedGlassPro,
  S66: S66KnitwearPro,
  S67: S67CyberneticPro,
  S68: S68SteampunkPro,
  S69: S69AlienPro,
  S70: S70FantasyPro,
  S71: S71WastelandPro,
  S72: S72StarshipPro,
  S73: S73ImpressionistPro,
  S74: S74CubistPro,
  S75: S75SurrealistPro,
  S76: S76RenaissancePro,
  S77: S77UkiyoePro,
  S78: S78GothicPro,
  S79: S79CorporateCleanPro,
  S80: S80StartupVibrantPro,
  S81: S81EnterpriseBluePro,
  S82: S82FintechTrustPro,
  S83: S83HealthMedicalPro,
  S84: S84EcoGreenPro,
  S85: S85KidsPlayfulPro,
  S86: S86GamerRGBPro,
  S87: S87LuxuryGoldPro,
  S88: S88LuxurySilverPro,
  S89: S89MinimalistSerifPro,
  S90: S90BrutalistColorPro,
  S91: S91EInkPro,
  S92: S92OLEDBlackPro,
  S93: S93TerminalRetroPro,
  S94: S94CodeEditorPro,
  S95: S95DataDashboardPro,
  S96: S96SciFiHUDPro,
  S97: S97FrostedGlassPro,
  S98: S98AcrylicFluidPro,
  S99: S99MaterialYouPro,
  S100: S100TheUltimatePro,
  S101: S101ChineseInkWashPro,
};

// ============================================
// 元件 Re-exports (個別命名導出)
// ============================================

export {
  S01TechMinimal,
  S02MinimalistMonochrome,
  S03Mondrian,
  S04Swiss,
  S05Brutalist,
  S06Cyberpunk,
  S07Synthwave,
  S08Retro70s,
  S09Memphis,
  S10LuxuryEditorial,
  S11JapaneseMinimal,
  S12NatureOrganic,
  S13Material,
  S14Glassmorphism,
  S15Neumorphism,
  S16Terminal,
  S17BauhausModernism,
  S18RetroPixelUI,
  S19AestheticHarmony,
  S20AuroraBorealis,
  S21Claymorphism,
  S22DarkModeElegance,
  S23DoodleSketch,
  S24MinimalistLineArt,
  S25PaperCraft,
  S26Flat2,
  S27Y2KAesthetic,
  S28Solarpunk,
  S29ArtDeco,
  S30Industrial,
  S31Skeuomorphic,
  S32Windows95,
  S33LiquidMetal,
  S34Holographic,
  S35Blueprint,
  S36Chalkboard,
  S37Newspaper,
  S38Magazine,
  S39ComicBook,
  S40Postcard,
  S41Polaroid,
  S42TicketStub,
  S43LowPoly,
  S44Isometric,
  S45Voxel,
  S46AbstractMemphis,
  S47Brutalist3D,
  S48Fluid3D,
  S49Watercolor,
  S50Collage,
  S51HandDrawn,
  S52PopArt,
  S53Graffiti,
  S54ArtNouveau,
  S55Oceanic,
  S56Forest,
  S57Desert,
  S58Polar,
  S59Jungle,
  S60Volcanic,
  S61Leather,
  S62Denim,
  S63BrushedSteel,
  S64CarbonFiber,
  S65StainedGlass,
  S66Knitwear,
  S67Cybernetic,
  S68Steampunk,
  S69Alien,
  S70Fantasy,
  S71Wasteland,
  S72Starship,
  S73Impressionist,
  S74Cubist,
  S75Surrealist,
  S76Renaissance,
  S77Ukiyoe,
  S78Gothic,
  S79CorporateClean,
  S80StartupVibrant,
  S81EnterpriseBlue,
  S82FintechTrust,
  S83HealthMedical,
  S84EcoGreen,
  S85KidsPlayful,
  S86GamerRGB,
  S87LuxuryGold,
  S88LuxurySilver,
  S89MinimalistSerif,
  S90BrutalistColor,
  S91EInk,
  S92OLEDBlack,
  S93TerminalRetro,
  S94CodeEditor,
  S95DataDashboard,
  S96SciFiHUD,
  S97FrostedGlass,
  S98AcrylicFluid,
  S99MaterialYou,
  S100TheUltimate,
  S101ChineseInkWash,
};
