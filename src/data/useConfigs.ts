// 重構後的使用場景配置 - 現在從模組化文件導入
// 這個文件保留以維持向後兼容性

// 導出所有配置（從新的模組化結構）
export { useModules, getAllUseIds, getUseById } from './useConfigs/index';

// 導出各組配置（可選）
export { 
  FullLandingPage_Config,
  PricingPage_Config,
  Dashboard_Config,
  Onboarding_Config,
  AboutPage_Config,
  ContactPage_Config,
  BlogPage_Config,
  ProductPage_Config,
  PortfolioPage_Config,
  FAQPage_Config,
  LoginSignup_Config
} from './useConfigs/index';

// 導出型別
export type { 
  UseModule, 
  UseMeta, 
  UseConfigsRecord 
} from './useConfigs/index';
