// 重構後的樣式配置 - 現在從模組化文件導入
// 這個文件保留以維持向後兼容性

// 導出所有配置（從新的模組化結構）
export { styleDNAConfigs, getConfigsByRange, getAllStyleIds, getConfigsByIndustry } from './styleConfigs/index';

// 導出型別
export type { 
  StyleDNAConfig, 
  StyleMeta, 
  ColorTokens, 
  TypographyTokens, 
  SpaceTokens, 
  RadiusTokens, 
  ShadowTokens, 
  BorderTokens, 
  DesignTokens, 
  StyleConfigsRecord 
} from './styleConfigs/index';

// 導出各組配置（可選）
export { S01_S06_Configs, S07_S12_Configs, S13_S18_Configs, S19_S24_Configs } from './styleConfigs/index';
