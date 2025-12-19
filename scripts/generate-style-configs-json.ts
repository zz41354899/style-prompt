#!/usr/bin/env tsx

/**
 * 自動生成 JSON 格式的樣式配置
 * 從 TypeScript 配置生成 JSON 文件，供 AI 工具或其他系統使用
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { styleDNAConfigs } from '../src/data/styleConfigs';

// 解析 tokens 字符串，提取 YAML 部分
const parseTokens = (tokens: string): any => {
  // 查找 ```yaml 和 ``` 之間的內容
  const yamlMatch = tokens.match(/```yaml\n([\s\S]*?)\n```/);
  if (!yamlMatch) {
    return null;
  }
  
  // 簡單的 YAML 解析（僅處理基本結構）
  const yamlContent = yamlMatch[1];
  const lines = yamlContent.split('\n');
  const result: any = {};
  const stack: any[] = [result];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    const indent = line.length - line.trimStart().length;
    const [key, ...valueParts] = trimmed.split(':');
    const value = valueParts.join(':').trim();
    
    // 調整棧深度
    while (stack.length > 1 && stack[stack.length - 1]._indent >= indent) {
      stack.pop();
    }
    
    const current = stack[stack.length - 1];
    
    if (value) {
      // 處理鍵值對
      if (value.startsWith('"') && value.endsWith('"')) {
        current[key.trim()] = value.slice(1, -1);
      } else if (!isNaN(Number(value))) {
        current[key.trim()] = Number(value);
      } else {
        current[key.trim()] = value;
      }
    } else {
      // 處理對象
      current[key.trim()] = { _indent: indent + 2 };
      stack.push(current[key.trim()]);
    }
  }
  
  // 清理輔助屬性
  const clean = (obj: any): any => {
    if (typeof obj !== 'object' || obj === null) return obj;
    
    if (Array.isArray(obj)) {
      return obj.map(clean);
    }
    
    const cleaned: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (key === '_indent') continue;
      cleaned[key] = clean(value);
    }
    
    return cleaned;
  };
  
  return clean(result);
};

// 生成 JSON 配置
const generateJsonConfigs = () => {
  const jsonConfigs: Record<string, any> = {};
  
  for (const [styleId, config] of Object.entries(styleDNAConfigs)) {
    const parsedTokens = parseTokens(config.tokens || '');
    
    jsonConfigs[styleId] = {
      styleId,
      styleName: parsedTokens?.meta?.style_name || styleId,
      industry: parsedTokens?.meta?.industry || 'SaaS',
      useCase: parsedTokens?.meta?.use_case || 'Full Landing Page',
      paletteStrategy: config.paletteStrategy,
      typography: config.typography,
      radiusPolicy: config.radiusPolicy,
      shadowPolicy: config.shadowPolicy,
      borderLanguage: config.borderLanguage,
      patterns: config.patterns,
      motion: config.motion,
      designTokens: parsedTokens,
    };
  }
  
  return jsonConfigs;
};

// 主函數
const main = () => {
  try {
    // 確保輸出目錄存在
    const outputDir = join(__dirname, '../public/data');
    mkdirSync(outputDir, { recursive: true });
    
    // 生成 JSON 配置
    const jsonConfigs = generateJsonConfigs();
    
    // 寫入文件
    const outputPath = join(outputDir, 'style-configs.json');
    writeFileSync(outputPath, JSON.stringify(jsonConfigs, null, 2), 'utf-8');
    
    console.log(`✅ JSON 配置已生成: ${outputPath}`);
    console.log(`📊 共生成 ${Object.keys(jsonConfigs).length} 個樣式配置`);
    
    // 生成摘要
    const summary = {
      totalStyles: Object.keys(jsonConfigs).length,
      industries: [...new Set(Object.values(jsonConfigs).map(c => c.industry))],
      lastUpdated: new Date().toISOString(),
    };
    
    const summaryPath = join(outputDir, 'style-configs-summary.json');
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf-8');
    
    console.log(`📋 摘要文件已生成: ${summaryPath}`);
    
  } catch (error) {
    console.error('❌ 生成 JSON 配置失敗:', error);
    process.exit(1);
  }
};

// 如果直接運行此腳本
if (require.main === module) {
  main();
}

export { generateJsonConfigs };
