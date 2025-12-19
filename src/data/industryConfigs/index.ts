// 統一導出所有行業配置
export type { IndustryModule, IndustryMeta, IndustryConfigsRecord } from './types';

// 導入各個行業配置
import { SaaS_Config } from './SaaS';
import { ECommerce_Config } from './E-commerce';
import { Healthcare_Config } from './Healthcare';
import { Finance_Config } from './Finance';
import { Education_Config } from './Education';
import { RealEstate_Config } from './RealEstate';
import { Restaurant_Config } from './Restaurant';
import { Travel_Config } from './Travel';
import { Fitness_Config } from './Fitness';
import { Legal_Config } from './Legal';
import { Agency_Config } from './Agency';
import { Nonprofit_Config } from './Nonprofit';
import type { IndustryModule } from './types';

// 合併所有配置
export const industryModules: Record<string, IndustryModule> = {
  SaaS: SaaS_Config,
  'E-commerce': ECommerce_Config,
  Healthcare: Healthcare_Config,
  Finance: Finance_Config,
  Education: Education_Config,
  RealEstate: RealEstate_Config,
  Restaurant: Restaurant_Config,
  Travel: Travel_Config,
  Fitness: Fitness_Config,
  Legal: Legal_Config,
  Agency: Agency_Config,
  Nonprofit: Nonprofit_Config,
};

// 導出各個配置（可選）
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
  Nonprofit_Config,
};

// 便利函數：獲取所有行業 ID
export const getAllIndustryIds = (): string[] => {
  return Object.keys(industryModules);
};

// 便利函數：根據 ID 獲取配置
export const getIndustryById = (id: string): IndustryModule | undefined => {
  return industryModules[id];
};
