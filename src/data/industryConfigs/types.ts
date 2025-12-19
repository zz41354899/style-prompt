// 行業配置型別定義
export interface IndustryModule {
  id: string;
  name: string;
  type: 'industry';
  content: string;
  considerations: string;
}

export interface IndustryMeta {
  id: string;
  name: string;
  type: 'industry';
}

export interface IndustryConfigsRecord {
  [key: string]: IndustryModule;
}
