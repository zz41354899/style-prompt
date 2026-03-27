// 主題顏色映射 - 每個樣式 ID 對應的主題色
export const themeColors: Record<string, string> = {
  'S01': '#3B82F6', // Tech Minimal
  'S02': '#6B7280', // Minimalist Monochrome
  'S03': 'rgb(0, 71, 171)', // Swiss
  'S04': '#E53935', // Brutalist
  'S05': '#00FF66', // Japanese Minimal
  'S06': '#22D3EE', // Bauhaus
  'S07': '#FF4FD8', // Glassmorphism
  'S08': '#FF6B35', // Dark Mode Elegance
  'S09': '#FFEB3B', // Corporate Clean
  'S10': '#D4A574', // Memphis (Old S11)
  'S11': '#8B7355', // Neo-Brutalism (Old S12)
  'S12': '#6750A4', // Doodle Sketch (Old S13)
  'S13': '#E4E9F0', // Art Deco (Old S15)
  'S14': '#FF0000', // Art Nouveau (Old S17)
  'S15': 'rgb(92, 255, 177)', // Gothic (Old S18)
  'S16': '#8B5CF6', // Cyberpunk (Old S19)
  'S17': '#00D9FF', // Synthwave (Old S20)
  'S18': '#00D9FF', // Y2K (Old S22)
  'S19': '#F97316', // Luxury Editorial (Old S25)
  'S20': '#10B981', // Nature Organic (Old S26)
  'S21': '#EC4899', // Solarpunk (Old S27)
  'S22': '#14B8A6', // Luxury Gold (Old S29)
  'S23': '#F59E0B', // Luxury Silver (Old S30)
  'S24': '#EF4444', // Minimalist Serif (Old S31)
  'S25': '#6366F1', // Startup Vibrant (Old S32)
  'S26': '#84CC16', // Enterprise Blue (Old S33)
  'S27': '#F472B6', // Fintech Trust (Old S34)
  'S28': '#4ADE80', // Claymorphism (Old S40)
  'S29': '#DC2626', // Cyber-Bio Noir (Old S45)
  'S30': '#C084FC', // Aurora Borealis (Old S46)
};

// 取得樣式主題色，若不存在則回傳預設色
export function getThemeColor(styleId: string): string {
    return themeColors[styleId] || themeColors['S01'];
}
