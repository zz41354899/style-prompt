// 優化的型別定義
export interface StyleDNAConfig {
  paletteStrategy: string;
  typography: string;
  radiusPolicy: string;
  shadowPolicy: string;
  borderLanguage: string;
  patterns: string;
  motion: string;
  dos: string[];
  donts: string[];
  tokens?: string;
}

export interface StyleMeta {
  style_id: string;
  style_name: string;
  industry: string;
  use_case: string;
}

export interface ColorTokens {
  bg: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  accent: {
    primary: string;
    secondary?: string;
  };
}

export interface TypographyTokens {
  fonts: {
    primary: string;
    secondary?: string;
  };
  scale: string[];
  weights: number[];
}

export interface SpaceTokens {
  scale: string[];
}

export interface RadiusTokens {
  scale: string[];
}

export interface ShadowTokens {
  presets: string[];
}

export interface BorderTokens {
  widths: string[];
}

export interface DesignTokens {
  meta: StyleMeta;
  color: ColorTokens;
  typography: TypographyTokens;
  space: SpaceTokens;
  radius: RadiusTokens;
  shadow: ShadowTokens;
  border: BorderTokens;
}

export type StyleConfigsRecord = Record<string, StyleDNAConfig>;
