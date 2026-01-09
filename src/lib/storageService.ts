import { supabase } from './supabaseClient';

/**
 * 上傳圖片到 Supabase Storage
 * @param file 圖片檔案
 * @param bucket 儲存桶名稱
 * @param folder 資料夾路徑
 * @returns 上傳後的公開 URL
 */
export async function uploadImage(
    file: File,
    bucket: string = 'notifications',
    folder: string = 'images'
): Promise<{ url: string | null; error: Error | null }> {
    try {
        // 生成唯一檔案名稱
        const fileExt = file.name.split('.').pop();
        const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

        // 上傳檔案
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.error('Upload error:', error);
            return { url: null, error: new Error(error.message) };
        }

        // 取得公開 URL
        const { data: urlData } = supabase.storage
            .from(bucket)
            .getPublicUrl(data.path);

        return { url: urlData.publicUrl, error: null };
    } catch (e) {
        console.error('Unexpected upload error:', e);
        return { url: null, error: e as Error };
    }
}

/**
 * 刪除圖片
 * @param url 圖片 URL
 * @param bucket 儲存桶名稱
 */
export async function deleteImage(
    url: string,
    bucket: string = 'notifications'
): Promise<{ success: boolean; error: Error | null }> {
    try {
        // 從 URL 提取檔案路徑
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split(`/storage/v1/object/public/${bucket}/`);
        if (pathParts.length < 2) {
            return { success: false, error: new Error('Invalid URL format') };
        }
        
        const filePath = pathParts[1];

        const { error } = await supabase.storage
            .from(bucket)
            .remove([filePath]);

        if (error) {
            console.error('Delete error:', error);
            return { success: false, error: new Error(error.message) };
        }

        return { success: true, error: null };
    } catch (e) {
        console.error('Unexpected delete error:', e);
        return { success: false, error: e as Error };
    }
}
