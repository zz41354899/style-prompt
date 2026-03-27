/**
 * ID 映射層（簡化版）
 * 新的 S01-S50 ID 直接對應到同名的元件檔案
 */

export const styleIdToComponentMap: Record<string, string> = {
  // 現代科技 (S01-S10)
  'S01': 'S01TechMinimal',
  'S02': 'S02MinimalistMonochrome',
  'S03': 'S03Swiss',
  'S04': 'S04Brutalist',
  'S05': 'S05JapaneseMinimal',
  'S06': 'S06Bauhaus',
  'S07': 'S07Glassmorphism',
  'S08': 'S08DarkModeElegance',
  'S09': 'S09CorporateClean',
  'S10': 'S10Memphis',

  // 創意藝術 (S11-S18)
  'S11': 'S11NeoBrutalism',
  'S12': 'S12DoodleSketch',
  'S13': 'S13ArtDeco',
  'S14': 'S14ArtNouveau',
  'S15': 'S15Gothic',
  'S16': 'S16Cyberpunk',
  'S17': 'S17Synthwave',
  'S18': 'S18Y2K',

  // 復古懷舊 (S19-S24)
  'S19': 'S19Luxury',
  'S20': 'S20Nature',
  'S21': 'S21Solarpunk',
  'S22': 'S22Gold',
  'S23': 'S23Silver',
  'S24': 'S24Serif',

  // 電商生活 (S25-S31)
  'S25': 'S25Startup',
  'S26': 'S26Enterprise',
  'S27': 'S27Fintech',
  'S28': 'S28Claymorphism',
  'S29': 'S29CyberBio',
  'S30': 'S30AuroraBorealis',
};

/**
 * 根據 ID 獲取元件名稱
 */
export const getComponentNameById = (styleId: string): string => {
  return styleIdToComponentMap[styleId] || styleId;
};

/**
 * 反向映射：元件名稱 -> ID
 */
export const componentToStyleIdMap: Record<string, string> = Object.entries(styleIdToComponentMap).reduce(
  (acc, [newId, componentName]) => {
    acc[componentName] = newId;
    return acc;
  },
  {} as Record<string, string>
);

/**
 * 根據元件名稱獲取 ID
 */
export const getStyleIdByComponentName = (componentName: string): string => {
  return componentToStyleIdMap[componentName] || componentName;
};
