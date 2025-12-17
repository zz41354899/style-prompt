// Module type definitions
export interface BaseModule {
  id: string;
  name: string;
  content: string;
}

export interface StyleModule extends BaseModule {
  type: 'style';
  dna: string; // Style DNA content
}

export interface IndustryModule extends BaseModule {
  type: 'industry';
  considerations: string; // Industry-specific considerations
}

export interface UseModule extends BaseModule {
  type: 'use';
  architecture: string; // Information architecture
}

export type Module = StyleModule | IndustryModule | UseModule;

// Module map types
export interface ModuleMap {
  styles: Record<string, StyleModule>;
  industries: Record<string, IndustryModule>;
  uses: Record<string, UseModule>;
}

// Prompt assembly params
export interface PromptParams {
  styleId: string;
  industryId: string;
  useId: string;
}
