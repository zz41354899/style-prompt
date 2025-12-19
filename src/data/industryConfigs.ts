// 重構後的行業配置 - 現在從模組化文件導入
// 這個文件保留以維持向後兼容性

// 導出所有配置（從新的模組化結構）
export { industryModules, getAllIndustryIds, getIndustryById } from './industryConfigs/index';

// 導出各組配置（可選）
export { 
  SaaS_Config,
  ECommerce_Config,
  Healthcare_Config,
  Finance_Config,
  Education_Config,
  RealEstate_Config,
  Restaurant_Config,
  Travel_Config,
  Fitness_Config,
  Legal_Config,
  Agency_Config,
  Nonprofit_Config
} from './industryConfigs/index';

// 導出型別
export type { 
  IndustryModule, 
  IndustryMeta, 
  IndustryConfigsRecord 
} from './industryConfigs/index';
