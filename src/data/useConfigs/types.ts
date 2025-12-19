// 使用場景配置型別定義
export interface UseModule {
  id: string;
  name: string;
  type: 'use';
  content: string;
  architecture: string;
}

export interface UseMeta {
  id: string;
  name: string;
  type: 'use';
}

export interface UseConfigsRecord {
  [key: string]: UseModule;
}
