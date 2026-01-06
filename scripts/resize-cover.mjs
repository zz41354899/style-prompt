import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, '../public/marketing/gumroad-cover-1600x900.png');
const outputPath = path.join(__dirname, '../public/marketing/gumroad-cover-1600x900.png');

async function resizeImage() {
    try {
        await sharp(inputPath)
            .resize(1600, 900, {
                fit: 'cover',      // 使用 cover 模式，確保填滿整個區域
                position: 'center' // 從中心裁切
            })
            .png({ quality: 90 })
            .toFile(outputPath + '.tmp');

        // 用 tmp 檔案覆蓋原始檔案
        const fs = await import('fs/promises');
        await fs.rename(outputPath + '.tmp', outputPath);

        console.log('✅ 圖片已成功調整為 1600x900！');
        console.log(`📁 輸出路徑: ${outputPath}`);
    } catch (error) {
        console.error('❌ 調整圖片時發生錯誤:', error);
    }
}

resizeImage();
